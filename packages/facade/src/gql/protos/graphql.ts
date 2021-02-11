import {
  GraphQLInputField,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLResolveInfo,
  GraphQLSchema
} from "graphql";
import {
  GraphQLEnumType,
  GraphQLFieldConfig,
  GraphQLFieldConfigMap,
  GraphQLInputObjectType, GraphQLInputType, GraphQLScalarType,
  Thunk
} from "graphql/type/definition";
import { StatusType } from "../";
import { ServiceConfig, SubService, SubSpaceServiceConfig } from "./types";
import { getTyping } from "./registry";
import { capitalizeProtoName } from "./utils";
import { Readable } from "stream";
import { IMethodDescriptorProto, IServiceDescriptorProto } from "protobufjs/ext/descriptor";
import { AccessControlSrvGrpcClient } from "../../modules/access-control/grpc";
import { AccessControlContext, namespace } from "../../modules/access-control/interfaces";

const typeCache = new Map<string, GraphQLObjectType>();

export const getGQLSchema = <TSource, TContext>
(method: IMethodDescriptorProto): GraphQLFieldConfig<TSource, TContext> => {
  const fields: any = {
    status: {
      type: new GraphQLNonNull(StatusType),
    },
  }

  const responseTyping = getTyping(method.outputType!);
  if (!responseTyping) {
    throw Error("Method doesn't have registered typings: " + method.outputType!);
  }

  if (method.outputType! !== '.google.protobuf.Empty') {
    fields['payload'] = {
      type: responseTyping.output,
    }
  }

  const outName = "Proto" + capitalizeProtoName(method.outputType!);

  let out = typeCache.get(outName);
  if (!out) {
    out = new GraphQLObjectType({
      name: outName,
      fields,
    });
    typeCache.set(outName, out);
  }

  const typing = getTyping(method.inputType!);
  if (!typing) {
    throw Error("Method doesn't have registered typings: " + method.inputType!);
  }

  return {
    type: out,
    args: method.inputType! === '.google.protobuf.Empty' ? undefined : {
      input: {
        type: GraphQLNonNull(typing.input!)
      }
    }
  }
}

export const getGQLSchemas = <TSource, TContext>(service: IServiceDescriptorProto): GraphQLFieldConfigMap<TSource, TContext> => {
  return service.method?.reduce((obj, method) => {
    obj[method.name!] = getGQLSchema(method);
    return obj;
  }, {} as any);
}

export const recursiveUploadToBuffer = async (data: any, model: GraphQLInputObjectType | GraphQLEnumType | GraphQLInputField | GraphQLInputType): Promise<any> => {
  if (model instanceof GraphQLEnumType) {
    return data;
  }

  if (model instanceof GraphQLInputObjectType) {
    const fields = model.getFields();
    for (let key of Object.keys(fields)) {
      data[key] = await recursiveUploadToBuffer(data[key], fields[key].type);
    }
  }

  if (model instanceof GraphQLNonNull) {
    return await recursiveUploadToBuffer(data, model.ofType);
  }

  if (model instanceof GraphQLList) {
    for (let i = 0; i < data.length; i++) {
      data[i] = await recursiveUploadToBuffer(data[i], model.ofType);
    }
  }

  if (model instanceof GraphQLScalarType) {
    switch (model.name) {
      case "Upload":
        if (typeof data !== 'object') {
          return Buffer.from(data.toString(), 'utf8');
        }

        let fileData = await data;
        const upload = await fileData.promise;
        const stream: Readable = upload.createReadStream();

        const chunks = [];
        for await (let chunk of stream) {
          chunks.push(chunk)
        }

        return Buffer.concat(chunks);
    }
  }

  return data;
}

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


type ServiceClient<Context extends Pick<Context, Key>, Key extends keyof Context, T extends Record<string, any>> = {
  [V in Key]: {
    client: T
  };
};

export const getGQLResolverFunctions =
  <T extends Record<string, any>, CTX extends ServiceClient<CTX, keyof CTX, T>, SRV = any, R = ResolverFn<any, any, ServiceClient<CTX, keyof CTX, T>, any>, B extends keyof T = any, NS extends keyof CTX = any>
  (service: IServiceDescriptorProto, key: NS, serviceKey: B): { [key in keyof SRV]: R } => {
    if (!service.method) {
      return {} as { [key in keyof SRV]: R };
    }

    return service.method.reduce((obj, method) => {
      const typing = getTyping(method.inputType!)!;

      if (!typing) {
        throw Error(`Method '${method.name}' could not find input type: ${method.inputType}`);
      }

      if (!('fromPartial' in typing.processor)) {
        throw Error(`Method ${method.name} input type '${method.inputType}' does not contain 'fromPartial' function`);
      }

      const defaults = typing.processor.fromPartial({});

      (obj as any)[method.name!] = async (args: any, context: ServiceClient<CTX, keyof CTX, T>) => {
        const client = context[key].client;
        const service = client[serviceKey];
        try {
          const converted = await recursiveUploadToBuffer(args.input, typing.input);

          const req = {
            // Fill defaults
            ...defaults,
            ...converted
          };

          // TODO Handle client-stream methods
          const result = await service[method.name!](req);
          return {
            payload: result,
            status: {
              code: 1,
              key: '',
              message: 'Success'
            }
          }
        } catch (error) {
          console.error(error);
          return {
            payload: undefined,
            status: {
              code: 99,
              key: '',
              message: error.details
            }
          }
        }
      };
      return obj;
    }, {} as { [key in keyof SRV]: R });
  }

type ResolverBaseOrSub =
  ResolverFn<any, any, ServiceClient<any, any, any>, any>
  | Map<string, ResolverFn<any, any, ServiceClient<any, any, any>, any>>;
const namespaceResolverRegistry = new Map<string, Map<boolean, Map<string, ResolverBaseOrSub>>>();

export const registerResolverFunction = <T extends Record<string, any>, CTX extends ServiceClient<CTX, keyof CTX, T>>
(namespace: string, name: string, func: ResolverFn<any, any, ServiceClient<CTX, keyof CTX, T>, any>, mutation: boolean = false, subspace: string | undefined = undefined) => {
  if (!namespaceResolverRegistry.has(namespace)) {
    namespaceResolverRegistry.set(namespace, new Map());
  }

  if (!namespaceResolverRegistry.get(namespace)!.has(mutation)) {
    namespaceResolverRegistry.get(namespace)!.set(mutation, new Map());
  }

  let space = namespaceResolverRegistry.get(namespace)!.get(mutation)!;
  if (subspace) {
    if (!space.has(subspace)) {
      space.set(subspace, new Map());
    }
    space = space.get(subspace)! as Map<string, ResolverFn<any, any, ServiceClient<any, any, any>, any>>;
  }

  if (space.has(name)) {
    if (subspace) {
      throw new Error(`Namespace "${namespace}"."${subspace}" already contains a function: ${name} (mutation: ${mutation})`);
    } else {
      throw new Error(`Namespace "${namespace}" already contains a function: ${name} (mutation: ${mutation})`);
    }
  }

  space.set(name, func);
}

export const generateResolver = (...namespaces: string[]) => {
  const queryResolvers: any = {};
  const mutationResolvers: any = {};

  namespaces.forEach(ns => {
    if (!namespaceResolverRegistry.has(ns)) {
      throw new Error(`Namespace "${ns}" has no registered functions`)
    }

    if (namespaceResolverRegistry.get(ns)!.has(false)) {
      const res: any = {};

      namespaceResolverRegistry.get(ns)!.get(false)!.forEach((value, key) => {
        if (value instanceof Map) {
          res[key] = Object.fromEntries(value)
        } else {
          res[key] = value;
        }
      });

      queryResolvers[ns] = () => res;
    }

    if (namespaceResolverRegistry.get(ns)!.has(true)) {
      const res: any = {};

      namespaceResolverRegistry.get(ns)!.get(true)!.forEach((value, key) => {
        if (value instanceof Map) {
          res[key] = Object.fromEntries(value)
        } else {
          res[key] = value;
        }
      });

      mutationResolvers[ns] = () => res;
    }
  });

  const resolvers: any = {};

  if (Object.keys(queryResolvers).length > 0) {
    resolvers.Query = queryResolvers;
  }

  if (Object.keys(mutationResolvers).length > 0) {
    resolvers.Mutation = mutationResolvers;
  }

  return resolvers;
}

type SchemaBaseOrSub = Thunk<GraphQLFieldConfig<any, any>> | Map<string, Thunk<GraphQLFieldConfig<any, any>>>;
const namespaceResolverSchemaRegistry = new Map<string, Map<boolean, Map<string, SchemaBaseOrSub>>>();

export const registerResolverSchema = (namespace: string, name: string, schema: Thunk<GraphQLFieldConfig<any, any>>, mutation: boolean = false, subspace: string | undefined = undefined) => {
  if (!namespaceResolverSchemaRegistry.has(namespace)) {
    namespaceResolverSchemaRegistry.set(namespace, new Map());
  }

  if (!namespaceResolverSchemaRegistry.get(namespace)!.has(mutation)) {
    namespaceResolverSchemaRegistry.get(namespace)!.set(mutation, new Map());
  }

  let space = namespaceResolverSchemaRegistry.get(namespace)!.get(mutation)!;
  if (subspace) {
    if (!space.has(subspace)) {
      space.set(subspace, new Map());
    }
    space = space.get(subspace)! as Map<string, Thunk<GraphQLFieldConfig<any, any>>>;
  }

  if (space.has(name)) {
    if (subspace) {
      throw new Error(`Namespace "${namespace}"."${subspace}" already contains a schema: ${name} (mutation: ${mutation})`);
    } else {
      throw new Error(`Namespace "${namespace}" already contains a schema: ${name} (mutation: ${mutation})`);
    }
  }

  space.set(name, schema);
}

export const generateSchema = (setup: { prefix: string, namespace: string }[]) => {
  const queryFields: GraphQLFieldConfigMap<any, any> = {};
  const mutationFields: GraphQLFieldConfigMap<any, any> = {};

  setup.forEach(s => {
    if (!namespaceResolverSchemaRegistry.has(s.namespace)) {
      throw new Error(`Namespace "${s.namespace}" has no registered schemas`)
    }

    if (namespaceResolverSchemaRegistry.get(s.namespace)!.has(false)) {
      const fields: GraphQLFieldConfigMap<any, any> = {};

      namespaceResolverSchemaRegistry.get(s.namespace)!.get(false)!.forEach((value, key) => {
        if (value instanceof Map) {
          const capitalName = capitalizeProtoName(key);
          fields[key] = {
            type: GraphQLNonNull(new GraphQLObjectType({
              name: s.prefix + capitalName + 'Query',
              fields: Object.fromEntries(value) as GraphQLFieldConfigMap<any, any>,
            }))
          };
        } else {
          fields[key] = value as any;
        }
      });

      queryFields[s.namespace] = {
        type: GraphQLNonNull(new GraphQLObjectType({
          name: s.prefix + 'Query',
          fields
        }))
      };
    }

    if (namespaceResolverSchemaRegistry.get(s.namespace)!.has(true)) {
      const fields: GraphQLFieldConfigMap<any, any> = {};

      namespaceResolverSchemaRegistry.get(s.namespace)!.get(true)!.forEach((value, key) => {
        if (value instanceof Map) {
          const capitalName = capitalizeProtoName(key);
          fields[key] = {
            type: GraphQLNonNull(new GraphQLObjectType({
              name: s.prefix + capitalName + 'Mutation',
              fields: Object.fromEntries(value) as GraphQLFieldConfigMap<any, any>,
            }))
          };
        } else {
          fields[key] = value as any;
        }
      });

      mutationFields[s.namespace] = {
        type: GraphQLNonNull(new GraphQLObjectType({
          name: s.prefix + 'Mutation',
          fields
        }))
      }
    }
  });

  const config: any = {};

  if (Object.keys(queryFields).length > 0) {
    config.query = new GraphQLObjectType({
      name: 'Query',
      fields: queryFields
    });
  }

  if (Object.keys(mutationFields).length > 0) {
    config.mutation = new GraphQLObjectType({
      name: 'Mutation',
      fields: mutationFields
    });
  }

  return new GraphQLSchema(config);
}

export const getWhitelistBlacklistConfig = (metaService: IServiceDescriptorProto, queries: string[], config: ServiceConfig): { queries: Set<string>, mutations: Set<string> } => {
  const mut: Set<string> = new Set(metaService.method!.map(m => m.name!).filter(key => queries.indexOf(key) < 0) as any)
  const que: Set<string> = new Set(metaService.method!.map(m => m.name!).filter(key => queries.indexOf(key) >= 0) as any)

  if (config.methods) {
    if (config.methods.whitelist) {
      const whitelist = new Set(config.methods.whitelist);
      mut.forEach(key => {
        if (whitelist.has(key as any)) {
          whitelist.delete(key as any);
        } else {
          mut.delete(key);
        }
      });

      que.forEach(key => {
        if (whitelist.has(key as any)) {
          whitelist.delete(key as any);
        } else {
          que.delete(key);
        }
      });

      if (whitelist.size > 0) {
        // TODO Log error that whitelist contains methods that don't exist
        console.error('Whitelist contains undefined methods:', whitelist)
      }
    } else if (config.methods.blacklist) {
      const blacklist = new Set(config.methods.blacklist);
      mut.forEach(key => {
        if (blacklist.has(key as any)) {
          blacklist.delete(key as any);
          mut.delete(key);
        }
      });

      que.forEach(key => {
        if (blacklist.has(key as any)) {
          blacklist.delete(key as any);
          que.delete(key);
        }
      });

      if (blacklist.size > 0) {
        // TODO Log error that blacklist contains methods that don't exist
        console.error('Blacklist contains undefined methods:', blacklist)
      }
    }
  }

  return {
    mutations: mut,
    queries: que
  };
}

export const getAndGenerateSchema = <TSource, TContext>
(service: IServiceDescriptorProto, namespace: string, prefix: string, cfg: ServiceConfig, queryList: string[]) => {
  const {mutations, queries} = getWhitelistBlacklistConfig(service, queryList, cfg)

  const schemas = getGQLSchemas(service);

  Object.keys(schemas).forEach(key => {
    registerResolverSchema(namespace, key, schemas[key], !queries.has(key) && mutations.has(key))
  })

  return generateSchema([{prefix, namespace}]);
}

export const getAndGenerateResolvers =
  <T extends Record<string, any>, CTX extends ServiceClient<CTX, keyof CTX, T>, SRV = any, R = ResolverFn<any, any, ServiceClient<CTX, keyof CTX, T>, any>, NS extends keyof CTX = any>
  (service: IServiceDescriptorProto, namespace: NS, cfg: ServiceConfig, queryList: string[], subspace: string | undefined = undefined, serviceKey: string | undefined = undefined): { [key in keyof SRV]: R } => {
    const {mutations, queries} = getWhitelistBlacklistConfig(service, queryList, cfg);

    const func = getGQLResolverFunctions<T, CTX>(service, namespace, serviceKey || subspace || namespace);

    Object.keys(func).forEach(k => {
      registerResolverFunction(namespace as string, k, func[k], !queries.has(k) && mutations.has(k), subspace);
    });

    return generateResolver(namespace as string)
  }

export const generateSubServiceSchemas = (subServices: SubService[], config: SubSpaceServiceConfig, namespace: string, prefix: string): GraphQLSchema => {
  subServices.forEach((sub) => {
    const {mutations, queries} = getWhitelistBlacklistConfig(sub.service, sub.queries, config)

    const schemas = getGQLSchemas(sub.service);

    Object.keys(schemas).forEach(key => {
      registerResolverSchema(config.root ? sub.name : namespace, key, schemas[key], !queries.has(key) && mutations.has(key), config.root ? undefined : sub.name)
    })
  });

  if (config.root) {
    return generateSchema(subServices.map(srv => ({
        prefix: prefix + srv.name.substr(0, 1).toUpperCase() + srv.name.substr(1).toLowerCase(),
        namespace: srv.name
      } as any)
    ));
  }

  return generateSchema([{prefix, namespace}]);
}

export const generateSubServiceResolvers = <T>(subServices: SubService[], config: SubSpaceServiceConfig, namespace: string): T => {
  subServices.forEach((sub) => {
    const {mutations, queries} = getWhitelistBlacklistConfig(sub.service, sub.queries, config)

    const func = getGQLResolverFunctions<AccessControlSrvGrpcClient, AccessControlContext>(sub.service, namespace, sub.name || namespace);

    Object.keys(func).forEach(k => {
      registerResolverFunction(config.root ? sub.name : namespace, k, func[k], !queries.has(k) && mutations.has(k), config.root ? undefined : sub.name);
    });
  });

  if (config.root) {
    return generateResolver(...subServices.map(srv => srv.name));
  }

  return generateResolver(namespace);
}
