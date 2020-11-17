import { GraphQLNonNull, GraphQLObjectType, GraphQLResolveInfo } from "graphql";
import { GraphQLFieldConfig, GraphQLFieldConfigMap } from "graphql/type/definition";
import { GrpcService } from "@restorecommerce/grpc-client";
import { StatusType } from "../";
import { MetaP, MetaPS, MetaS, ServiceConfig } from "./types";
import { getTyping } from "./registry";

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

  const out = new GraphQLObjectType({
    name: "Proto" + method + "Response",
    fields,
  });

  const typing = getTyping(m.request.type);
  if (!typing) {
    throw Error("Method doesn't have registered typings: " + m.request.type);
  }

  return {
    type: out,
    args: m.request.type === '.google.protobuf.Empty' ? undefined : {
      input: {
        type: typing.input!
      }
    }
  }
}

export const getGQLSchemas = <T extends GrpcService, TSource, TContext, B extends keyof T>(
  service: { [key in keyof T]: MetaS<any, any> }, filter: (service: B) => boolean):
  GraphQLFieldConfigMap<TSource, TContext> => {
  return Object.keys(service).filter(filter as any).reduce((obj, methodName) => {
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
  <T extends Record<string, any>, Context extends ServiceClient<Context, keyof Context, T>, Service = any, Result = ResolverFn<any, any, ServiceClient<Context, keyof Context, T>, any>, B extends keyof T = any, C extends keyof T[B] = any>
  (meta: { [key in keyof Service]: MetaS<any, any> }, pack: MetaP, key: keyof Context, serviceKey: B, filter: (service: C) => boolean): { [key in keyof Service]: Result } => {
    return Object.keys(meta).filter(filter as any).reduce((obj, method) => {
      (obj as any)[method] = async (_: any, args: any, context: ServiceClient<Context, keyof Context, T>) => {
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
    }, {} as { [key in keyof Service]: Result })
  }

export const getWhitelistBlacklistConfig = <M extends { [key in keyof T]: MetaS<any, any> } = any, T = any, Key extends keyof M = any>(metaService: M, queries: Key[], config: ServiceConfig): { queries: Set<Key>, mutations: Set<Key> } => {
  const mut: Set<Key> = new Set(Object.keys(metaService).filter(key => queries.indexOf(key as any) < 0) as any)
  const que: Set<Key> = new Set(Object.keys(metaService).filter(key => queries.indexOf(key as any) >= 0) as any)

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
