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

const namespaceResolverRegistry = new Map<string, Map<boolean, Map<string, ResolverFn<any, any, ServiceClient<any, any, any>, any>>>>();

export const registerResolverFunction = <T extends Record<string, any>, CTX extends ServiceClient<CTX, keyof CTX, T>>
(namespace: string, name: string, func: ResolverFn<any, any, ServiceClient<CTX, keyof CTX, T>, any>, mutation: boolean = false) => {
  if (!namespaceResolverRegistry.has(namespace)) {
    namespaceResolverRegistry.set(namespace, new Map());
  }

  if (!namespaceResolverRegistry.get(namespace)!.has(mutation)) {
    namespaceResolverRegistry.get(namespace)!.set(mutation, new Map());
  }

  if (namespaceResolverRegistry.get(namespace)!.get(mutation)!.has(name)) {
    throw new Error(`Namespace "${namespace}" already contains a function: ${name} (mutation: ${mutation})`);
  }

  namespaceResolverRegistry.get(namespace)!.get(mutation)!.set(name, func);
}

export const generateResolver = (namespace: string) => {
  if (!namespaceResolverRegistry.has(namespace)) {
    throw new Error(`Namespace "${namespace}" has no registered functions`)
  }

  const resolvers: any = {};

  if (namespaceResolverRegistry.get(namespace)!.has(false)) {
    resolvers.Query = {
      [namespace]: () => Object.fromEntries(namespaceResolverRegistry.get(namespace)!.get(false)!)
    };
  }

  if (namespaceResolverRegistry.get(namespace)!.has(true)) {
    resolvers.Mutation = {
      [namespace]: () => Object.fromEntries(namespaceResolverRegistry.get(namespace)!.get(true)!)
    };
  }

  return resolvers;
}

const namespaceResolverSchemaRegistry = new Map<string, Map<boolean, Map<string, Thunk<GraphQLFieldConfig<any, any>>>>>();

export const registerResolverSchema = (namespace: string, name: string, schema: Thunk<GraphQLFieldConfig<any, any>>, mutation: boolean = false) => {
  if (!namespaceResolverSchemaRegistry.has(namespace)) {
    namespaceResolverSchemaRegistry.set(namespace, new Map());
  }

  if (!namespaceResolverSchemaRegistry.get(namespace)!.has(mutation)) {
    namespaceResolverSchemaRegistry.get(namespace)!.set(mutation, new Map());
  }

  if (namespaceResolverSchemaRegistry.get(namespace)!.get(mutation)!.has(name)) {
    throw new Error(`Namespace "${namespace}" already contains a schema: ${name} (mutation: ${mutation})`);
  }

  namespaceResolverSchemaRegistry.get(namespace)!.get(mutation)!.set(name, schema);
}

export const generateSchema = (namespace: string, prefix: string) => {
  if (!namespaceResolverSchemaRegistry.has(namespace)) {
    throw new Error(`Namespace "${namespace}" has no registered schemas`)
  }

  const config: any = {};

  if (namespaceResolverSchemaRegistry.get(namespace)!.has(false)) {
    config.query = new GraphQLObjectType({
      name: 'Query',
      fields: {
        [namespace]: {
          type: new GraphQLObjectType({
            name: prefix + 'Query',
            fields: Object.fromEntries(namespaceResolverSchemaRegistry.get(namespace)!.get(false)!) as GraphQLFieldConfigMap<any, any>
          })
        }
      }
    });
  }

  if (namespaceResolverSchemaRegistry.get(namespace)!.has(true)) {
    config.mutation = new GraphQLObjectType({
      name: 'Mutation',
      fields: {
        [namespace]: {
          type: new GraphQLObjectType({
            name: prefix + 'Mutation',
            fields: Object.fromEntries(namespaceResolverSchemaRegistry.get(namespace)!.get(true)!) as GraphQLFieldConfigMap<any, any>
          })
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
  (meta: { [key in keyof SRV]: MetaS<any, any> }, pack: MetaP, namespace: NS): { [key in keyof SRV]: R } => {
    // TODO Configurable
    const serviceConfig = createServiceConfig(join(process.cwd(), 'tests'));
    const {mutations, queries} = getWhitelistBlacklistConfig(meta, [], serviceConfig.get(namespace as any))

    const func = getGQLResolverFunctions<T, CTX>(meta, pack, namespace, namespace);

    Object.keys(func).forEach(k => {
      registerResolverFunction(namespace as string, k, func[k], !queries.has(k) && mutations.has(k));
    });

    return generateResolver(namespace as string)
  }
