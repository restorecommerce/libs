import { GraphQLNonNull, GraphQLObjectType, GraphQLResolveInfo, GraphQLSchema } from "graphql";
import { GraphQLFieldConfig, GraphQLFieldConfigMap, Thunk } from "graphql/type/definition";
import { GrpcService } from "@restorecommerce/grpc-client";
import { StatusType } from "../";
import { MetaP, MetaPS, MetaS, ServiceConfig } from "./types";
import { getTyping } from "./registry";
import { createServiceConfig } from "@restorecommerce/service-config";
import { join } from "path";

const typeCache = new Map<string, GraphQLObjectType>();

export const getGQLSchema = <T extends GrpcService, M extends keyof T, TSource, TContext>
(service: { [key in keyof T]: MetaS<any, any> }, method: M): GraphQLFieldConfig<TSource, TContext> => {
  const m = service[method];

  const fields: any = {
    status: {
      type: new GraphQLNonNull(StatusType),
    },
  }

  const responseTyping = getTyping(m.response.type);
  if (!responseTyping) {
    throw Error("Method doesn't have registered typings: " + m.response.type);
  }

  if (m.response.type !== '.google.protobuf.Empty') {
    fields['payload'] = {
      type: responseTyping.output,
    }
  }

  const outName = "Proto" + m.response.type.replace(/(?:\.|^)(\w)/g, v => v.toUpperCase()).replace(/\./g, '');

  let out = typeCache.get(outName);
  if (!out) {
    out = new GraphQLObjectType({
      name: outName,
      fields,
    });
    typeCache.set(outName, out);
  }

  const typing = getTyping(m.request.type);
  if (!typing) {
    throw Error("Method doesn't have registered typings: " + m.request.type);
  }

  return {
    type: out,
    args: m.request.type === '.google.protobuf.Empty' ? undefined : {
      input: {
        type: GraphQLNonNull(typing.input!)
      }
    }
  }
}

export const getGQLSchemas = <T extends GrpcService, TSource, TContext, B extends keyof T>(
  service: { [key in keyof T]: MetaS<any, any> }):
  GraphQLFieldConfigMap<TSource, TContext> => {
  return Object.keys(service).reduce((obj, methodName) => {
    obj[methodName] = getGQLSchema(service, methodName);
    return obj;
  }, {} as any)
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
  (meta: { [key in keyof SRV]: MetaS<any, any> }, pack: MetaP, key: NS, serviceKey: B): { [key in keyof SRV]: R } => {
    return Object.keys(meta).reduce((obj, method) => {
      (obj as any)[method] = async (args: any, context: ServiceClient<CTX, keyof CTX, T>) => {
        const client = context[key].client;
        const service = client[serviceKey];
        const serviceMethod = (meta as any)[method] as MetaS<any, any>;
        const typing = getTyping(serviceMethod.request.type)!;
        const methodMeta = typing.meta as MetaPS

        try {
          const req = {
            // Fill defaults
            ...methodMeta[2].fromPartial({}),
            ...args.input
          };
          const result = await service[method](req);
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
    }, {} as { [key in keyof SRV]: R })
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

export const generateResolver = (namespace: string) => {
  if (!namespaceResolverRegistry.has(namespace)) {
    throw new Error(`Namespace "${namespace}" has no registered functions`)
  }

  const resolvers: any = {};

  if (namespaceResolverRegistry.get(namespace)!.has(false)) {
    const res: any = {};

    namespaceResolverRegistry.get(namespace)!.get(false)!.forEach((value, key) => {
      if (value instanceof Map) {
        res[key] = Object.fromEntries(value)
      } else {
        res[key] = value;
      }
    });

    resolvers.Query = {
      [namespace]: () => res
    };
  }

  if (namespaceResolverRegistry.get(namespace)!.has(true)) {
    const res: any = {};

    namespaceResolverRegistry.get(namespace)!.get(true)!.forEach((value, key) => {
      if (value instanceof Map) {
        res[key] = Object.fromEntries(value)
      } else {
        res[key] = value;
      }
    });

    resolvers.Mutation = {
      [namespace]: () => res
    };
  }

  console.log(namespace, resolvers);

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

export const generateSchema = (namespace: string, prefix: string) => {
  if (!namespaceResolverSchemaRegistry.has(namespace)) {
    throw new Error(`Namespace "${namespace}" has no registered schemas`)
  }

  const config: any = {};

  if (namespaceResolverSchemaRegistry.get(namespace)!.has(false)) {
    const fields: GraphQLFieldConfigMap<any, any> = {};

    namespaceResolverSchemaRegistry.get(namespace)!.get(false)!.forEach((value, key) => {
      if (value instanceof Map) {
        const capitalName = key.substr(0, 1).toUpperCase() + key.substr(1).toLowerCase();
        fields[key] = {
          type: GraphQLNonNull(new GraphQLObjectType({
            name: prefix + capitalName + 'Query',
            fields: Object.fromEntries(value) as GraphQLFieldConfigMap<any, any>,
          }))
        };
      } else {
        fields[key] = value as any;
      }
    });

    config.query = new GraphQLObjectType({
      name: 'Query',
      fields: {
        [namespace]: {
          type: GraphQLNonNull(new GraphQLObjectType({
            name: prefix + 'Query',
            fields
          }))
        }
      }
    });
  }

  if (namespaceResolverSchemaRegistry.get(namespace)!.has(true)) {
    const fields: GraphQLFieldConfigMap<any, any> = {};

    namespaceResolverSchemaRegistry.get(namespace)!.get(true)!.forEach((value, key) => {
      if (value instanceof Map) {
        const capitalName = key.substr(0, 1).toUpperCase() + key.substr(1).toLowerCase();
        fields[key] = {
          type: GraphQLNonNull(new GraphQLObjectType({
            name: prefix + capitalName + 'Mutation',
            fields: Object.fromEntries(value) as GraphQLFieldConfigMap<any, any>,
          }))
        };
      } else {
        fields[key] = value as any;
      }
    });

    config.mutation = new GraphQLObjectType({
      name: 'Mutation',
      fields: {
        [namespace]: {
          type: GraphQLNonNull(new GraphQLObjectType({
            name: prefix + 'Mutation',
            fields
          }))
        }
      }
    });
  }

  return new GraphQLSchema(config);
}

export const getWhitelistBlacklistConfig = <M extends { [key in keyof T]: MetaS<any, any> } = any, T = any, Key extends keyof M = any, R extends keyof M = any>(metaService: M, queries: Key[], config: ServiceConfig): { queries: Set<R>, mutations: Set<R> } => {
  const mut: Set<R> = new Set(Object.keys(metaService).filter(key => queries.indexOf(key as any) < 0) as any)
  const que: Set<R> = new Set(Object.keys(metaService).filter(key => queries.indexOf(key as any) >= 0) as any)

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

export const getAndGenerateSchema = <T extends GrpcService, TSource, TContext, B extends keyof T>
(service: { [key in keyof T]: MetaS<any, any> }, namespace: string, prefix: string) => {
  // TODO Configurable
  const serviceConfig = createServiceConfig(join(process.cwd(), 'tests'));
  const {mutations, queries} = getWhitelistBlacklistConfig(service, [], serviceConfig.get(namespace))

  const schemas = getGQLSchemas(service);

  Object.keys(schemas).forEach(key => {
    registerResolverSchema(namespace, key, schemas[key], !queries.has(key) && mutations.has(key))
  })

  return generateSchema(namespace, prefix);
}

export const getAndGenerateResolvers =
  <T extends Record<string, any>, CTX extends ServiceClient<CTX, keyof CTX, T>, SRV = any, R = ResolverFn<any, any, ServiceClient<CTX, keyof CTX, T>, any>, B extends keyof T = any, NS extends keyof CTX = any>
  (meta: { [key in keyof SRV]: MetaS<any, any> }, pack: MetaP, namespace: NS, subspace: string | undefined = undefined): { [key in keyof SRV]: R } => {
    // TODO Configurable
    const serviceConfig = createServiceConfig(join(process.cwd(), 'tests'));
    const {mutations, queries} = getWhitelistBlacklistConfig(meta, [], serviceConfig.get(namespace as any))

    const func = getGQLResolverFunctions<T, CTX>(meta, pack, namespace, subspace || namespace);

    Object.keys(func).forEach(k => {
      registerResolverFunction(namespace as string, k, func[k], !queries.has(k) && mutations.has(k), subspace);
    });

    return generateResolver(namespace as string)
  }
