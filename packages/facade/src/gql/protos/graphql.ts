import {
  GraphQLInputField,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLResolveInfo,
  GraphQLSchema, ThunkObjMap
} from "graphql";
import {
  GraphQLEnumType,
  GraphQLFieldConfig,
  GraphQLFieldConfigMap,
  GraphQLInputObjectType, GraphQLInputType, GraphQLScalarType,
} from "graphql/type/definition";
import { authSubjectType, ServiceConfig, SubService, SubSpaceServiceConfig } from "./types";
import { getTyping, registeredTypings, getNameSpaceTypeName } from "./registry";
import { capitalizeProtoName, convertyCamelToSnakeCase, getKeys, decodeBufferFields, convertEnumToInt } from "./utils";
import { Readable } from "stream";
import {
  DescriptorProto,
  MethodDescriptorProto,
  ServiceDescriptorProto
} from "ts-proto-descriptors";
import * as stream from "stream";
import * as _ from 'lodash';
import { GrpcClientConfig } from "@restorecommerce/grpc-client";

const typeCache = new Map<string, GraphQLObjectType>();
const Mutate = ['Create', 'Update', 'Upsert'];
const inputMethodType = new Map<string, string>();

export const getGQLSchema = <TSource, TContext>
  (method: MethodDescriptorProto): GraphQLFieldConfig<TSource, TContext> => {
  const fields: any = {
    // operationStatus: {
    //   type: new GraphQLNonNull(OperationStatusType),
    // },
  }

  const responseTyping = getTyping(method.outputType!);
  if (!responseTyping) {
    throw Error("Method doesn't have registered typings: " + method.outputType!);
  }

  if (method.outputType! !== '.google.protobuf.Empty') {
    fields['details'] = {
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
        type: new GraphQLNonNull(typing.input!)
      }
    }
  }
}

export const getGQLSchemas = <TSource, TContext>(service: ServiceDescriptorProto): GraphQLFieldConfigMap<TSource, TContext> => {
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
      if (data && key in data) {
        data[key] = await recursiveUploadToBuffer(data[key], fields[key].type);
      }
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
    (service: ServiceDescriptorProto, key: NS, serviceKey: B, grpcClientConfig: GrpcClientConfig): { [key in keyof SRV]: R } => {
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

      let subjectField: null | string = null;
      if (typing) {
        for (let field of (typing.meta as DescriptorProto).field) {
          if (field.typeName === authSubjectType) {
            subjectField = field.name;
            break;
          }
        }
      }

      (obj as any)[method.name!] = async (args: any, context: ServiceClient<CTX, keyof CTX, T>) => {
        const client = context[key].client;
        const service = client[serviceKey];
        try {
          const converted = await recursiveUploadToBuffer(args.input, typing.input);

          let req = {
            // Fill defaults
            ...defaults,
            ...converted
          };

          // convert enum strings to integers
          req = convertEnumToInt(typing, req);
          if (subjectField !== null) {
            req.subject = getTyping(authSubjectType)!.processor.fromPartial({});

            const authToken = (context as any).request!.req.headers['authorization'];
            if (authToken && authToken.startsWith('Bearer ')) {
              req.subject.token = authToken.split(' ')[1];
            }
            if (req.scope) {
              req.subject.scope = req.scope;
            }
          }

          const result = await service[method.name!](req);
          const bufferFields = getKeys((grpcClientConfig as any)?.bufferFields);
          if (result instanceof stream.Readable) {
            let operationStatus = { code: 0, message: '' };
            let aggregatedResponse: any = await new Promise((resolve, reject) => {
              let response: any = {};
              let combinedChunks: any = {};
              result.on('data', (chunk) => {
                const chunkObj = _.cloneDeep(chunk);
                if (!combinedChunks) {
                  combinedChunks = chunk;
                } else {
                  Object.assign(combinedChunks, chunk);
                }
                const existingBufferFields = _.intersection(Object.keys(chunk), bufferFields);
                for (let bufferField of existingBufferFields) {
                  if (chunkObj[bufferField] && chunkObj[bufferField].value) {
                    if (!response[bufferField]) {
                      response[bufferField] = { value: [] };
                    }
                    if (response[bufferField] && response[bufferField].value && !_.isArray(response[bufferField].value)) {
                      response[bufferField].value = [];
                    }
                    let data = JSON.parse(chunkObj[bufferField].value.toString());
                    if (_.isArray(data)) {
                      for (let dataObj of data) {
                        response[bufferField].value.push(dataObj);
                      }
                    } else {
                      response[bufferField].value.push(data);
                    }
                  }
                }
              });
              result.on('error', (err) => {
                console.error(err);
                operationStatus.code = (err as any).code ? (err as any).code : 500;
                operationStatus.message = err.message;
              });
              result.on('end', () => {
                if (_.isEmpty(operationStatus.message)) {
                  operationStatus.code = 200;
                  operationStatus.message = 'success';
                }
                if (!_.isEmpty(response)) {
                  resolve(response);
                } else if (!_.isEmpty(combinedChunks)) {
                  resolve(combinedChunks);
                }
              });
            });
            return { details: aggregatedResponse, operationStatus };
          }

          if ('items' in result) {
            let items = decodeBufferFields(result.items, bufferFields);
            return {
              details: {
                items: items, // items includes both payload and individual status
                operationStatus: result.operationStatus // overall status
              },
            };
          } else {
            return {
              details: decodeBufferFields([result], bufferFields)[0]
            }
          }
        } catch (error: any) {
          console.error(error);
          return {
            details: {
              items: [],
              operationStatus: {
                code: error.code,
                message: error.message
              }
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

const MutateResolver = async (req: any, ctx: any, schema: any): Promise<any> => {
  let module_name, key, service;
  if (schema?.path?.prev?.key) {
    key = schema.path.prev.key;
  }
  if (schema?.path?.prev?.typename) {
    let typeName = schema.path.prev.typename;
    if (typeName.endsWith('Mutation')) {
      module_name = typeName.split('Mutation')[0];
    }
  }

  if (key && module_name) {
    module_name = convertyCamelToSnakeCase(module_name);
    key = convertyCamelToSnakeCase(key);
    service = ctx[module_name]?.client[key];
  }

  try {
    let method = '';
    let input = req.input;
    const mode = req?.input?.mode;
    if (!mode) {
      throw new Error('Please specify mode');
    }
    if (mode === 'CREATE') {
      method = 'Create';
    } else if (mode === 'UPDATE') {
      method = 'Update';
    } else if (mode === 'UPSERT') {
      method = 'Upsert';
    }

    const inputMethodTypeKey = module_name.toLowerCase() + '.' + key.toLowerCase() + '.' + method.toLowerCase();
    const nsType = inputMethodType.get(inputMethodTypeKey);
    if (nsType) {
      const inputTyping = getTyping(nsType);
      convertEnumToInt(inputTyping!!, input);
    }

    // check service object contains requested mode's method def
    if (!service[method]) {
      throw new Error(`Method ${method} not defined on ${module_name}`);
    }
    // update subject token from authorizatin header
    let subject = {
      id: '',
      scope: '',
      roleAssociations: [],
      hierarchicalScopes: [],
      token: '',
      unauthenticated: false
    };
    const authToken = (ctx as any).request!.req.headers['authorization'];
    if (authToken && authToken.startsWith('Bearer ')) {
      subject.token = authToken.split(' ')[1];
    }

    if (req.scope) {
      req.subject.scope = req.scope;
    }

    // TODO identify google.protobufAny from config
    for (let item of input.items) {
      let keys = Object.keys(item);
      for (let key of keys) {
        if (item[key] && item[key].value) {
          item[key] = { typeUrl: '', value: Buffer.from(JSON.stringify(item.data.value)) };
        }
      }
    }

    const result = await service[method]({
      items: input?.items,
      subject
    });
    // TODO read from grpcClientConfig
    // const bufferFields = getKeys((grpcClientConfig as any)?.bufferFields);
    const bufferFields: any = [];
    if (result instanceof stream.Readable) {
      let operationStatus = { code: 0, message: '' };
      let aggregatedResponse = await new Promise((resolve, reject) => {
        let response: any = {};
        result.on('data', (chunk) => {
          const chunkObj = _.cloneDeep(chunk);
          if (!response) {
            response = chunk;
          } else {
            Object.assign(response, chunk);
          }
          const existingBufferFields = _.intersection(Object.keys(chunk), bufferFields);
          for (let bufferField of existingBufferFields) {
            if (chunkObj[bufferField] && chunkObj[bufferField].value) {
              if (response[bufferField] && response[bufferField].value && !_.isArray(response[bufferField].value)) {
                response[bufferField].value = [];
              }
              let data = JSON.parse(chunkObj[bufferField].value.toString());
              if (_.isArray(data)) {
                for (let dataObj of data) {
                  response[bufferField].value.push(dataObj);
                }
              } else {
                response[bufferField].value.push(data);
              }
            }
          }
        });
        result.on('error', (err) => {
          console.error(err);
          operationStatus.code = (err as any).code ? (err as any).code : 500;
          operationStatus.message = err.message;
        });
        result.on('end', () => {
          if (_.isEmpty(operationStatus.message)) {
            operationStatus.code = 200;
            operationStatus.message = 'success';
          }
          resolve(response);
        });
      });
      return { details: { items: aggregatedResponse, operationStatus } };
    }
    // TODO identify google.protobufAny from config
    // let items = decodeBufferFields(result.items, bufferFields);
    for (let item of result.items) {
      if (item && item.payload) {
        const keys = Object.keys(item.payload);
        for (let bufferField of keys) {
          if (item.payload[bufferField] && item.payload[bufferField].value) {
            item.payload[bufferField].value = JSON.parse(item.payload[bufferField].value.toString());
          }
        }
      }
    }

    return {
      details: {
        items: result.items, // items includes both payload and individual status
        operationStatus: result.operationStatus // overall status
      }
    };
  } catch (error: any) {
    console.error(error);
    return {
      details: {
        items: [],
        operationStatus: {
          code: error.code,
          message: error.message
        }
      }
    }
  }
};

export const registerResolverFunction = <T extends Record<string, any>, CTX extends ServiceClient<CTX, keyof CTX, T>>
  (namespace: string, name: string, func: ResolverFn<any, any, ServiceClient<CTX, keyof CTX, T>, any>,
    mutation: boolean = false, subspace: string | undefined = undefined, service?: ServiceDescriptorProto) => {
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
  if (service) {
    const key = namespace?.toLocaleLowerCase() + '.' + subspace?.toLocaleLowerCase() + '.' + name?.toLocaleLowerCase();
    const value = service.method.find((m) => m.name === name);
    if (key && value?.inputType) {
      inputMethodType.set(key, value.inputType);
    }
  }
  // custom mutation resolver for create, update and upsert - Mutate
  if (Mutate.indexOf(name) > -1) {
    name = 'Mutate';
    func = MutateResolver;
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

type SchemaBaseOrSub = ThunkObjMap<GraphQLFieldConfig<any, any>> | Map<string, ThunkObjMap<GraphQLFieldConfig<any, any>>>;
const namespaceResolverSchemaRegistry = new Map<string, Map<boolean, Map<string, SchemaBaseOrSub>>>();

export const registerResolverSchema = (namespace: string, name: string, schema: ThunkObjMap<GraphQLFieldConfig<any, any>>, mutation: boolean = false, subspace: string | undefined = undefined) => {
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
    space = space.get(subspace)! as Map<string, ThunkObjMap<GraphQLFieldConfig<any, any>>>;
  }

  if (space.has(name)) {
    if (subspace) {
      throw new Error(`Namespace "${namespace}"."${subspace}" already contains a schema: ${name} (mutation: ${mutation})`);
    } else {
      throw new Error(`Namespace "${namespace}" already contains a schema: ${name} (mutation: ${mutation})`);
    }
  }

  // register create, update and upsert with Mutate
  if (Mutate.indexOf(name) > -1) {
    name = 'Mutate';
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
            type: new GraphQLNonNull(new GraphQLObjectType({
              name: s.prefix + capitalName + 'Query',
              fields: Object.fromEntries(value) as unknown as GraphQLFieldConfigMap<any, any>,
            }))
          };
        } else {
          fields[key] = value as any;
        }
      });

      queryFields[s.namespace] = {
        type: new GraphQLNonNull(new GraphQLObjectType({
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
            type: new GraphQLNonNull(new GraphQLObjectType({
              name: s.prefix + capitalName + 'Mutation',
              fields: Object.fromEntries(value) as unknown as GraphQLFieldConfigMap<any, any>,
            }))
          };
        } else {
          fields[key] = value as any;
        }
      });

      mutationFields[s.namespace] = {
        type: new GraphQLNonNull(new GraphQLObjectType({
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

export const getWhitelistBlacklistConfig = (metaService: ServiceDescriptorProto, queries: string[], config: ServiceConfig): { queries: Set<string>, mutations: Set<string> } => {
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
  (service: ServiceDescriptorProto, namespace: string, prefix: string, cfg: ServiceConfig, queryList: string[]) => {
  const { mutations, queries } = getWhitelistBlacklistConfig(service, queryList, cfg)

  const schemas = getGQLSchemas(service);

  Object.keys(schemas).forEach(key => {
    registerResolverSchema(namespace, key, schemas[key] as any, !queries.has(key) && mutations.has(key))
  })

  return generateSchema([{ prefix, namespace }]);
}

export const getAndGenerateResolvers =
  <T extends Record<string, any>, CTX extends ServiceClient<CTX, keyof CTX, T>, SRV = any, R = ResolverFn<any, any, ServiceClient<CTX, keyof CTX, T>, any>, NS extends keyof CTX = any>
    (service: ServiceDescriptorProto, namespace: NS, cfg: ServiceConfig, queryList: string[], subspace: string | undefined = undefined, serviceKey: string | undefined = undefined): { [key in keyof SRV]: R } => {
    const { mutations, queries } = getWhitelistBlacklistConfig(service, queryList, cfg);

    const func = getGQLResolverFunctions<T, CTX>(service, namespace, serviceKey || subspace || namespace, cfg.client);

    Object.keys(func).forEach(k => {
      registerResolverFunction(namespace as string, k, func[k], !queries.has(k) && mutations.has(k), subspace, service);
    });

    return generateResolver(namespace as string)
  }

export const generateSubServiceSchemas = (subServices: SubService[], config: SubSpaceServiceConfig, namespace: string, prefix: string): GraphQLSchema => {
  subServices.forEach((sub) => {
    const { mutations, queries } = getWhitelistBlacklistConfig(sub.service, sub.queries, config)

    const schemas = getGQLSchemas(sub.service);

    Object.keys(schemas).forEach(key => {
      registerResolverSchema(config.root ? sub.name : namespace, key, schemas[key] as any, !queries.has(key) && mutations.has(key), config.root ? undefined : sub.name)
    })
  });

  if (config.root) {
    return generateSchema(subServices.map(srv => ({
      prefix: prefix + srv.name.substr(0, 1).toUpperCase() + srv.name.substr(1).toLowerCase(),
      namespace: srv.name
    } as any)
    ));
  }

  return generateSchema([{ prefix, namespace }]);
}

export const generateSubServiceResolvers = <T, M extends Record<string, any>, CTX extends ServiceClient<CTX, keyof CTX, M>>(subServices: SubService[], config: SubSpaceServiceConfig, namespace: string): T => {
  subServices.forEach((sub) => {
    const { mutations, queries } = getWhitelistBlacklistConfig(sub.service, sub.queries, config);

    const func = getGQLResolverFunctions<M, CTX>(sub.service, namespace, sub.name || namespace, config.client);
    Object.keys(func).forEach(k => {
      const regNamespace = config.root ? sub.name : namespace;
      const regSubspace = config.root ? undefined : sub.name;
      registerResolverFunction(regNamespace, k, func[k], !queries.has(k) && mutations.has(k), regSubspace, sub.service);
    });
  });

  if (config.root) {
    return generateResolver(...subServices.map(srv => srv.name));
  }

  return generateResolver(namespace);
}
