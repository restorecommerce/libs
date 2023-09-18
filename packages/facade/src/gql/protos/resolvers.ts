import { authSubjectType, type ProtoMetadata, type ServiceClient, type ServiceConfig, type SubSpaceServiceConfig } from './types.js';
import flat from 'array.prototype.flat';
import { getTyping } from './registry.js';
import {
  getWhitelistBlacklistConfig, Mutate, postProcessGQLValue,
  preprocessGQLInput,
} from './graphql.js';
import {
  camelCase,
  capitalize,
  convertEnumToInt,
  decodeBufferFields,
  getKeys,
  snakeToCamel,
  useSubscriptions,
  getServiceName
} from './utils.js';
import {
  type KafkaSubscription,
  type Resolver
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/options.js';
import { ReadRequest } from '@restorecommerce/rc-grpc-clients';
import {
  Filter_Operation,
  Filter_ValueType, FilterOp_Operator
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/resource_base.js';
import { type DescriptorProto, type ServiceDescriptorProto } from 'ts-proto-descriptors';
import { type GraphQLResolveInfo } from 'graphql';
import * as stream from 'node:stream';
import _ from 'lodash';
import { Events } from '@restorecommerce/kafka-client';
import S2A from './stream-to-async-iterator.js';

const inputMethodType = new Map<string, string>();

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscribeResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncGenerator<TResult>;

const streamToAsyncIterable = async function* (request: any, readableStreamKey: string): AsyncIterable<any> {
  const readStream = _.clone(request[readableStreamKey]);
  for await (const chunk of new S2A(readStream)) {
    yield Object.assign({}, request, { [readableStreamKey]: chunk });
  }
}

export const getGQLResolverFunctions =
  <T extends Record<string, any>, CTX extends ServiceClient<CTX, keyof CTX, T>, SRV = any, R = ResolverFn<any, any, ServiceClient<CTX, keyof CTX, T>, any>, B extends keyof T = any, NS extends keyof CTX = any>
    (service: ServiceDescriptorProto, key: NS, serviceKey: B, cfg: ServiceConfig): { [key in keyof SRV]: R } => {
    if (!service.method) {
      return {} as { [key in keyof SRV]: R };
    }

    return service.method.reduce((obj, method) => {

      if ((cfg as any)[serviceKey]?.methods?.blacklist) {
        const blacklistMethods = (cfg as any)[serviceKey]?.methods?.blacklist;
        if (blacklistMethods.includes(method.name)) {
          return {} as { [key in keyof SRV]: R };
        }
      }

      const typing = getTyping(method.inputType!)!;
      const outputTyping = getTyping(method.outputType!)!;

      if (!typing) {
        throw Error(`Method '${method.name}' could not find input type: ${method.inputType}`);
      }

      if (!outputTyping) {
        throw Error(`Method '${method.name}' could not find output type: ${method.outputType}`);
      }

      if (!('fromPartial' in typing.processor)) {
        throw Error(`Method ${method.name} input type '${method.inputType}' does not contain 'fromPartial' function`);
      }

      let subjectField: null | string = null;
      if (typing) {
        for (let field of (typing.meta as DescriptorProto).field) {
          if (field.typeName === authSubjectType) {
            subjectField = field.name;
            break;
          }
        }
      }

      let methodName = method.name;
      if (Mutate.indexOf(method.name) > -1) {
        methodName = 'Mutate';
      }

      if (methodName in obj) {
        return obj;
      }

      (obj as any)[methodName] = async (args: any, context: ServiceClient<CTX, keyof CTX, T>) => {
        let client;
        // rename master_data and ostorage name space to actual service names in proto files
        if (key == 'master_data') {
          key = 'resource' as NS;
        } else if (key == 'ostorage') {
          serviceKey = 'ostorage' as B;
        }
        client = context[key].client;
        const service = client[serviceKey];
        try {
          const converted = await preprocessGQLInput(args.input, typing.input);
          const scope = args?.input?.scope;

          let req = typing.processor.fromPartial(converted);

          // convert enum strings to integers
          // req = convertEnumToInt(typing, req);
          if (subjectField !== null) {
            req.subject = getTyping(authSubjectType)!.processor.fromPartial({});

            const authToken = (context as any).request!.req.headers['authorization'];
            if (authToken && authToken.startsWith('Bearer ')) {
              req.subject.token = authToken.split(' ')[1];
            }
            if (scope) {
              req.subject.scope = scope;
            }
          }

          let realMethod = method.name;
          if (Mutate.indexOf(method.name) > -1) {
            const mode = args?.input?.mode;
            if (!mode) {
              throw new Error('Please specify mode');
            }
            if (mode === 'CREATE') {
              realMethod = 'Create';
            } else if (mode === 'UPDATE') {
              realMethod = 'Update';
            } else if (mode === 'UPSERT') {
              realMethod = 'Upsert';
            }
          }

          const methodFunc = service[camelCase(realMethod)] || service[realMethod];
          if (method.clientStreaming) {
            const readableStreamKey = Object.keys(req).filter((key) => {
              if (req[key] instanceof stream.Stream.Readable) {
                return key;
              }
            });
            if (readableStreamKey.length > 0) {
              req = streamToAsyncIterable(req, readableStreamKey[0]);
            }
          }
          const rawResult = await methodFunc(req);
          const result = postProcessGQLValue(rawResult, outputTyping.output);

          const grpcClientConfig = cfg.client;
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
                items, // items includes both payload and individual status
                operationStatus: result.operationStatus // overall status
              },
            };
          } else {
            return {
              details: decodeBufferFields([result], bufferFields)[0]
            };
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
          };
        }
      };
      return obj;
    }, {} as { [key in keyof SRV]: R });
  };

type ResolverBaseOrSub =
  ResolverFn<any, any, ServiceClient<any, any, any>, any>
  | Map<string, ResolverFn<any, any, ServiceClient<any, any, any>, any>>;
const namespaceResolverRegistry = new Map<string, Map<boolean, Map<string, ResolverBaseOrSub>>>();

const subscriptionResolvers: Record<string, {
  resolve?: ResolverFn<any, any, ServiceClient<any, any, any>, any>;
  subscribe: ResolverFn<any, any, any, any>;
}> = {};

export const registerResolverFunction = <T extends Record<string, any>, CTX extends ServiceClient<CTX, keyof CTX, T>>
  (namespace: string, name: string, func: ResolverFn<any, any, ServiceClient<CTX, keyof CTX, T>, any>,
    mutation = false, subspace: string | undefined = undefined, service?: ServiceDescriptorProto) => {
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
  space.set(name, func);
};

export const generateResolver = (...namespaces: string[]) => {
  const queryResolvers: any = {};
  const mutationResolvers: any = {};

  namespaces.forEach(ns => {
    if (!namespaceResolverRegistry.has(ns)) {
      throw new Error(`Namespace "${ns}" has no registered functions`);
    }

    if (namespaceResolverRegistry.get(ns)!.has(false)) {
      const res: any = {};

      namespaceResolverRegistry.get(ns)!.get(false)!.forEach((value, key) => {
        if (value instanceof Map) {
          res[key] = Object.fromEntries(value);
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
          res[key] = Object.fromEntries(value);
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

  if (Object.keys(subscriptionResolvers).length > 0) {
    resolvers.Subscription = subscriptionResolvers;
  }

  return resolvers;
};

export const generateSubServiceResolvers = <T, M extends Record<string, any>, CTX extends ServiceClient<CTX, keyof CTX, M>>(subServices: ProtoMetadata[], config: SubSpaceServiceConfig, namespace: string): T => {
  subServices.forEach((meta) => {
    meta.fileDescriptor.service.forEach(service => {
      if (service.name) {
        // strip Service from end of String for sub service name
        const subName = getServiceName(service.name);
        const { mutations, queries } = getWhitelistBlacklistConfig(service, config, meta, subName);

        const func = getGQLResolverFunctions<M, CTX>(service, namespace, subName || namespace, config);

        Object.keys(func).forEach(k => {
          const regNamespace = config.root ? subName : namespace;
          const regSubspace = config.root ? undefined : subName;
          registerResolverFunction(regNamespace, k, func[k] as any, !queries.has(k) && mutations.has(k), regSubspace, service);
        });
      }
    });

    if (useSubscriptions) {
      Object.entries(meta.options?.messages || {}).forEach(([messageName, option]) => {
        if (option.options && 'kafka_subscriber' in option.options) {
          const kafkaSubscriber: KafkaSubscription = option.options.kafka_subscriber;
          const fieldName = namespace + capitalize(kafkaSubscriber.plural as string);
          const baseMessageName = meta.fileDescriptor.package + '.' + messageName;
          const typing = getTyping('.' + baseMessageName);

          if (typing) {
            subscriptionResolvers[fieldName] = {
              // resolve: (parent, args, context, info) => {
              //   const obj = parent[fieldName];
              //   let missing = false;
              //   for (const selection of info.operation.selectionSet.selections) {
              //     if ('name' in selection && !(selection.name.value in obj)) {
              //       missing = true;
              //       break;
              //     }
              //   }
              //   if (!missing) {
              //     return obj;
              //   }
              //   // TODO Implement user lookup
              //   return obj;
              // },
              subscribe: async (parent, args, context, info) => {
                const action = args.action || 'CREATED';

                let event = kafkaSubscriber.created as string;
                switch (action) {
                  case 'UPDATED':
                    event = kafkaSubscriber.updated as string;
                    break;
                  case 'DELETED':
                    event = kafkaSubscriber.deleted as string;
                    break;
                }

                const events = new Events({
                  provider: 'kafka',
                  kafka: {
                    ...context.kafkaConfig
                  },
                  [event]: {
                    messageObject: baseMessageName
                  }
                }, context.logger);
                await events.start();

                const commandTopic = await events.topic(kafkaSubscriber.topic as string);

                let deferred: {
                  resolve: (done: boolean) => void;
                  reject: (err: unknown) => void;
                } | null = null;
                const pending: { id: string }[] = [];

                commandTopic.on(event as string, (message: { id: string }) => {
                  pending.push({ id: message.id });
                  deferred?.resolve(false);
                });

                return {
                  [Symbol.asyncIterator]() {
                    return this;
                  },
                  next: async () => {
                    if (pending.length) {
                      return { value: { [fieldName]: pending.shift()! } };
                    }

                    return (await new Promise<boolean>(
                      (resolve, reject) => (deferred = { resolve, reject }),
                    ))
                      ? { done: true, value: undefined }
                      : { value: { [fieldName]: pending.shift()! } };
                  },
                  throw: async (err: Error) => {
                    throw err;
                  },
                  return: async () => {
                    await events.stop();
                    return { done: true, value: undefined };
                  },
                };
              }
            };
          }
        }
      });
    }
  });

  if (config.root) {
    return generateResolver(...flat(subServices.map(meta => {
      return meta.fileDescriptor.service.map(service => {
        if (service.name) {
          return getServiceName(service.name);
        }
        return '';
      }).filter(s => s !== '');
    })));
  }

  const finalResolver = generateResolver(namespace);

  subServices.forEach((meta) => {
    meta.fileDescriptor.service.forEach(service => {
      if (meta.options && meta.options.messages) {
        for (const key of Object.keys(meta.options.messages)) {
          const message = meta.options.messages[key];
          if (message.fields) {
            const typing = getTyping('.' + meta.fileDescriptor.package + '.' + key);
            if (typing) {
              const result: any = {};
              for (const fieldName of Object.keys(message.fields)) {
                const field = message.fields[fieldName];
                if ('resolver' in field) {
                  const fieldJsonName = snakeToCamel(fieldName);
                  const resolver = field['resolver'] as Resolver;

                  // TODO This creates an N+1 problem!
                  result[resolver.fieldName as string] = async (parent: any, _: any, ctx: any) => {
                    if (!parent || !(fieldJsonName in parent) || parent[fieldJsonName] === undefined) {
                      return undefined;
                    }

                    // rename master_data and ostorage name space to actual service names in proto files
                    if (resolver.targetService == 'master_data') {
                      resolver.targetService = 'resource';
                    } else if (resolver.targetService == 'ostorage') {
                      resolver.targetSubService = 'ostorage';
                    }
                    const client = ctx[resolver.targetService as string].client;
                    const service = client[resolver.targetSubService as string];

                    const idList: string[] = Array.isArray(parent[fieldJsonName]) ? parent[fieldJsonName] : [parent[fieldJsonName]];

                    // TODO Support custom input messages
                    const req = ReadRequest.fromPartial({
                      filters: [{
                        filters: idList.map(id => ({
                          field: 'id',
                          operation: Filter_Operation.eq,
                          value: id,
                          type: Filter_ValueType.STRING
                        })),
                        operator: FilterOp_Operator.or
                      }]
                    } as any);

                    req.subject = getTyping(authSubjectType)!.processor.fromPartial({});

                    const authToken = ctx.request!.req.headers['authorization'];
                    if (authToken && authToken.startsWith('Bearer ')) {
                      req.subject!.token = authToken.split(' ')[1];
                    }

                    const methodFunc = service[camelCase(resolver.targetMethod as string)] || service[resolver.targetMethod as string];
                    const result = await methodFunc(req);

                    if (result && result.items && result.items.length) {
                      if (Array.isArray(parent[fieldJsonName])) {
                        return result.items.map((item: any) => item.payload);
                      } else {
                        return result.items[0].payload;
                      }
                    }

                    return undefined;
                  };
                }
              }
              finalResolver[typing.output.name] = result;
            }
          }
        }
      }
    });
  });

  return finalResolver;
};
