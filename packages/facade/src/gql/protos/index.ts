import type {
  GraphQLEnumTypeConfig,
  GraphQLFieldConfigMap,
  GraphQLInputFieldConfigMap,
  GraphQLObjectTypeConfig,
  GraphQLOutputType
} from "graphql/type/definition";
import {
  GraphQLEnumType,
  GraphQLEnumValueConfigMap,
  GraphQLFieldConfig,
  GraphQLInputObjectType,
  GraphQLInputObjectTypeConfig,
  GraphQLInputType,
  GraphQLScalarType
} from "graphql/type/definition";
import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLResolveInfo,
  GraphQLString,
  GraphQLUnionType,
} from "graphql";
import {
  ExtractRpcArgument,
  ExtractRpcReturnType,
  GrpcClientRpcMethodDefinition,
  GrpcService,
  GrpcServiceMethods
} from "@restorecommerce/grpc-client/dist";
import {StatusType } from "../";

export interface MetaI {
  readonly meta: 'object' | 'array' | 'map' | 'union' | 'builtin';
}

export interface MetaO extends MetaI {
  readonly meta: 'object';
  readonly type: string;
  readonly name: string;
}

export interface MetaA extends MetaI {
  readonly meta: 'array';
  readonly type: MetaI | string;
}

export interface MetaM extends MetaI {
  readonly meta: 'map';
  readonly key: string;
  readonly value: MetaI | string;
}

export interface MetaU extends MetaI {
  readonly meta: 'union';
  readonly choices: Array<MetaI | string | undefined>;
}

export interface MetaS<T, R> {
  readonly request: MetaO;
  readonly response: MetaO;
  readonly clientStreaming: boolean;
  readonly serverStreaming: boolean;
  readonly encodeRequest?: (message: T, writer: any) => any;
  readonly decodeResponse?: (input: Uint8Array | any, length?: number) => R;
}

export interface MetaB extends MetaI {
  readonly meta: 'builtin';
  readonly type: string;
  readonly original: string;
}

const registeredTypings = new Map<string, GraphQLObjectType | GraphQLEnumType>();
const registeredInputTypings = new Map<string, GraphQLInputObjectType | GraphQLEnumType>();

const MapScalar = new GraphQLScalarType({
  name: 'MapScalar',
});

const TodoScalar = new GraphQLScalarType({
  name: 'TodoScalar',
  serialize: () => {
    throw Error("Not Implemented!")
  },
  parseValue: () => {
    throw Error("Not Implemented!")
  }
});

const EmptyScalar = new GraphQLScalarType({
  name: 'EmptyScalar'
});

export const registerTyping = <T>(
  type: string,
  typings: { [key in keyof T]: MetaI | string },
  opts: Omit<Readonly<GraphQLObjectTypeConfig<any, any>>, 'fields'>,
  inputOpts: Omit<Readonly<GraphQLInputObjectTypeConfig>, 'fields'>,
) => {
  if (registeredTypings.has(type)) {
    throw new Error("Typings for object are already registered");
  }

  const fields = (): GraphQLFieldConfigMap<any, any> => {
    const result: GraphQLFieldConfigMap<any, any> = {};
    for (const key of Object.keys(typings)) {
      // @ts-ignore
      const value = typings[key];
      result[key] = {
        type: resolveMeta(key, value, type, opts.name, false) as GraphQLOutputType
      };
    }
    return result;
  };

  const inputFields = (): GraphQLInputFieldConfigMap => {
    const result: GraphQLInputFieldConfigMap = {};
    for (const key of Object.keys(typings)) {
      // @ts-ignore
      const value = typings[key];
      result[key] = {
        type: resolveMeta(key, value, type, opts.name, true) as GraphQLInputType
      };
    }
    return result;
  };

  const resultObj = new GraphQLObjectType({
    ...opts,
    fields,
  });

  const resultInputObj = new GraphQLInputObjectType({
    ...inputOpts,
    fields: inputFields,
  });

  registeredTypings.set(type, resultObj);
  registeredInputTypings.set(type, resultInputObj);
}

export const registerEnumTyping = <T = { [key: string]: any }>(type: string, obj: T, opts: Omit<Readonly<GraphQLEnumTypeConfig>, 'values'>) => {
  const values: GraphQLEnumValueConfigMap = {};

  for (const key of Object.keys(obj)) {
    // @ts-ignore
    if (typeof obj[key] !== 'number') {
      continue;
    }

    values[key] = {
      // @ts-ignore
      value: obj[key],
    };
  }

  const result = new GraphQLEnumType({
    ...opts,
    values
  });

  registeredTypings.set(type, result);
  registeredInputTypings.set(type, result);
}

export const getGQLTyping = (type: string): GraphQLObjectType | GraphQLEnumType | undefined => {
  return registeredTypings.get(type);
}

export const getGQLInputTyping = (type: string): GraphQLInputObjectType | GraphQLEnumType | undefined => {
  return registeredInputTypings.get(type);
}

const resolveMeta = (key: string, value: MetaI | string, rootObjType: string, objName: string, input: boolean): GraphQLOutputType | GraphQLInputType => {
  const valueType = typeof value;
  switch (valueType) {
    case "object":
      if (!('meta' in (value as object))) {
        throw Error("unknown typing object type");
      }

      const obj = value as MetaI;
      switch (obj.meta) {
        case "object":
          const objType = (obj as MetaO).type;
          if (!registeredTypings.has(objType)) {
            throw new Error("Typing '" + objType + "' not registered for key '" + key + "' in object: " + objName);
          }

          if (!input) {
            return registeredTypings.get(objType)!
          }

          return registeredInputTypings.get(objType)!
        case "array":
          return GraphQLList(resolveMeta(key, (obj as MetaA).type, rootObjType, objName, input))
        case "map":
          // TODO
          return MapScalar;
        case "union":
          if (input) {
            // TODO https://github.com/graphql/graphql-spec/blob/master/rfcs/InputUnion.md
            return TodoScalar
          }

          const choices = (obj as MetaU).choices;

          let optional = false;
          const realTypes: GraphQLObjectType[] = [];
          choices.forEach(choice => {
            if (choice === undefined) {
              optional = true;
            } else {
              const item = resolveMeta(key, choice, rootObjType, objName, input);

              if (!(item instanceof GraphQLObjectType)) {
                throw new Error("Cannot create a union of non-objects");
              }

              realTypes.push(item)
            }
          });

          if (optional && realTypes.length === 1) {
            return GraphQLNonNull(realTypes[0]);
          }

          return new GraphQLUnionType({
            name: realTypes.map(t => t.name).sort().join(),
            types: realTypes,
          });
        case "builtin":
          const builtin = (obj as MetaB).type;
          switch (builtin) {
            default:
              throw new Error("unknown typing type '" + builtin + "' for key '" + key + "' in: " + objName)
            case "Buffer":
              // TODO Buffer
              return TodoScalar
            case "boolean":
              return GraphQLBoolean
            case "string":
              return GraphQLString
            case "bigint":
            case "number":
              switch ((obj as MetaB).original) {
                default:
                  return GraphQLInt
                case 'double':
                case 'float':
                case 'fixed64':
                case 'sfixed64':
                case 'fixed32':
                case 'sfixed32':
                  return GraphQLFloat
              }
              return GraphQLFloat
          }
          break
      }

      throw new Error("unknown meta object: " + obj.meta);
    case "string":
      switch (value) {
        default:
          throw new Error("unknown typing type: " + value)
        case "boolean":
          return GraphQLBoolean
        case "number":
          return GraphQLFloat
        case "string":
          return GraphQLString
        case "bigint":
          return GraphQLInt
      }
      break;
  }

  throw new Error("typing value cannot be type of " + typeof valueType);
}

export const getGQLFunction = <T extends GrpcService, M extends keyof T>
(service: { [key in keyof T]: MetaS<any, any> }, method: M):
  GrpcClientRpcMethodDefinition<ExtractRpcArgument<T[M]>, ExtractRpcReturnType<T[M]>> => {
  const m = service[method];
  if (!m.encodeRequest || !m.decodeResponse) {
    throw Error("Method does not contain encodeRequest or decodeResponse metadata");
  }

  let type: 'unary' | 'clientStream' | 'serverStream' | 'bidiStream' = 'unary';
  if (m.clientStreaming && m.serverStreaming) {
    type = 'bidiStream';
  } else if (m.clientStreaming) {
    type = 'clientStream';
  } else if (m.serverStreaming) {
    type = 'serverStream';
  }

  return {
    type,
    serialize: m.encodeRequest!,
    deserialize: m.decodeResponse!
  };
}

export const getGQLFunctions = <T extends GrpcService>(service: { [key in keyof T]: MetaS<any, any> }): GrpcServiceMethods<T> => {
  return Object.keys(service).reduce((obj, methodName) => {
    obj[methodName] = getGQLFunction(service, methodName);
    return obj;
  }, {} as any)
}

export const getGQLSchema = <T extends GrpcService, M extends keyof T, TSource, TContext>
(service: { [key in keyof T]: MetaS<any, any> }, method: M): GraphQLFieldConfig<TSource, TContext> => {
  const m = service[method];

  // TODO Recognize .google.protobuf.Empty

  const input = getGQLInputTyping(m.request.type);

  if (!input) {
    throw Error("Method input type doesn't have registered typings: " + m.request.type);
  }

  const output = getGQLTyping(m.response.type);

  if (!output) {
    throw Error("Method output type doesn't have registered typings: " + m.response.type);
  }

  const fields: any = {
    status: {
      type: new GraphQLNonNull(StatusType),
    },
  }

  if (m.response.type === '.google.protobuf.Empty') {
    fields['payload'] = {
      type: output,
    }
  }

  const out = new GraphQLObjectType({
    name: method + "Response",
    fields,
  });

  return {
    type: m.response.type === '.google.protobuf.Empty' ? EmptyScalar : output!,
    args: m.request.type === '.google.protobuf.Empty' ? undefined : {
      input: {
        type: input!
      }
    }
  }
}

export const getGQLSchemas = <T extends GrpcService, TSource, TContext>(service: { [key in keyof T]: MetaS<any, any> }):
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
  <T extends Record<string, any>, Context extends ServiceClient<Context, keyof Context, T>, Service = any, Result = ResolverFn<any, any, ServiceClient<Context, keyof Context, T>, any>>
  (meta: { [key in keyof Service]: MetaS<any, any> }, key: keyof Context, serviceKey: keyof T): { [key in keyof Service]: Result } => {
    return Object.keys(meta).reduce((obj, method) => {
      (obj as any)[method] = async (_: any, args: any, context: ServiceClient<Context, keyof Context, T>) => {
        const client = context[key].client;
        const service = client[serviceKey];

        try {
          const result = await service[method](args.input);
          console.log(result);
          return {
            status: {
              code: 1,
              key: ''
            }
          }
        } catch (error) {
          console.error(error);
        }

        return {
          payload: undefined,
          status: {
            code: 99,
            key: ''
          }
        }
      };
      return obj;
    }, {} as { [key in keyof Service]: Result })
  }
