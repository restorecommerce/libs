import { GraphQLNonNull, GraphQLObjectType, GraphQLResolveInfo, GraphQLSchema } from "graphql";
import { GraphQLFieldConfig, GraphQLFieldConfigMap, Thunk } from "graphql/type/definition";
import { GrpcService } from "@restorecommerce/grpc-client";
import { StatusType } from "../";
import { MetaP, MetaPS, MetaService, ServiceConfig } from "./types";
import { getTyping } from "./registry";
import { createServiceConfig } from "@restorecommerce/service-config";
import { join } from "path";
import { capitalizeProtoName } from "./utils";

const typeCache = new Map<string, GraphQLObjectType>();

export const getGQLSchema = <T extends GrpcService, M extends keyof T, TSource, TContext>
(service: { [key in keyof T]: MetaService<any, any> }, method: M): GraphQLFieldConfig<TSource, TContext> => {
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

  const outName = "Proto" + capitalizeProtoName(m.response.type);

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
  service: { [key in keyof T]: MetaService<any, any> }):
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
  (meta: { [key in keyof SRV]: MetaService<any, any> }, pack: MetaP, key: NS, serviceKey: B): { [key in keyof SRV]: R } => {
    return Object.keys(meta).reduce((obj, method) => {
      const serviceMethod = (meta as any)[method] as MetaService<any, any>;
      const typing = getTyping(serviceMethod.request.type)!;
      const methodMeta = typing.meta as MetaPS;
      const defaults = methodMeta[2].fromPartial({});

      (obj as any)[method] = async (args: any, context: ServiceClient<CTX, keyof CTX, T>) => {
        const client = context[key].client;
        const service = client[serviceKey];

        try {
          const req = {
            // Fill defaults
            ...defaults,
            ...args.input
          };

          // TODO Handle client-stream methods
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

export const getWhitelistBlacklistConfig = <M extends { [key in keyof T]: MetaService<any, any> } = any, T = any, Key extends keyof M = any, R extends keyof M = any>(metaService: M, queries: Key[], config: ServiceConfig): { queries: Set<R>, mutations: Set<R> } => {
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
(service: { [key in keyof T]: MetaService<any, any> }, namespace: string, prefix: string, cfg: ServiceConfig, queryList: B[]) => {
  const {mutations, queries} = getWhitelistBlacklistConfig(service, queryList, cfg)

  const schemas = getGQLSchemas(service);

  Object.keys(schemas).forEach(key => {
    registerResolverSchema(namespace, key, schemas[key], !queries.has(key) && mutations.has(key))
  })

  return generateSchema([{prefix, namespace}]);
}

export const getAndGenerateResolvers =
  <T extends Record<string, any>, CTX extends ServiceClient<CTX, keyof CTX, T>, SRV = any, R = ResolverFn<any, any, ServiceClient<CTX, keyof CTX, T>, any>, B extends keyof T = any, NS extends keyof CTX = any>
  (meta: { [key in keyof SRV]: MetaService<any, any> }, pack: MetaP, namespace: NS, cfg: ServiceConfig, queryList: (keyof SRV)[], subspace: string | undefined = undefined, serviceKey: B | undefined = undefined): { [key in keyof SRV]: R } => {
    const {mutations, queries} = getWhitelistBlacklistConfig(meta, queryList, cfg);

    const func = getGQLResolverFunctions<T, CTX>(meta, pack, namespace, serviceKey || subspace || namespace);

    Object.keys(func).forEach(k => {
      registerResolverFunction(namespace as string, k, func[k], !queries.has(k) && mutations.has(k), subspace);
    });

    return generateResolver(namespace as string)
  }
