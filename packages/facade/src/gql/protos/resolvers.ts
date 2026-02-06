import { type DescriptorProto, type ServiceDescriptorProto } from 'ts-proto-descriptors';
import { GraphQLFieldResolver, type GraphQLResolveInfo } from 'graphql';
import * as stream from 'node:stream';
import _ from 'lodash';
import { Metadata } from 'nice-grpc';
import {
  type KafkaSubscription,
  type Resolver
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/options.js';
import { ReadRequest } from '@restorecommerce/rc-grpc-clients';
import {
  Filter_Operation,
  Filter_ValueType
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/resource_base.js';
import { Events } from '@restorecommerce/kafka-client';
import { TenantRequest } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/user.js';
import {
  Resource,
  ResourceListResponse,
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/resource_base.js';
import {
  authSubjectType,
  type ProtoMetadata,
  type ServiceClient,
  type ServiceConfig,
  type SubSpaceServiceConfig
} from './types.js';
import { getTyping } from './registry.js';
import {
  getWhitelistBlacklistConfig,
  Mutate,
  postProcessGQLOutput,
  preProcessGQLInput,
} from './graphql.js';
import {
  camelCase,
  capitalize,
  decodeBufferFields,
  getKeys,
  snakeToCamel,
  getUseSubscriptions,
  getServiceName,
  LatentResourceMapBuffer,
  ResolverContext
} from './utils.js';
import S2A from './stream-to-async-iterator.js';
import { IdentitySrvGrpcClient } from '../../modules/identity/grpc/index.js';
import { Subject } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/auth.js';
import { GraphQLResolverMap } from '@apollo/subgraph/dist/schema-helper/resolverMap.js';

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
};

const fetchUnauthenticatedUserToken = async (ctx: any, domain: string) => {
  if (!('identity' in ctx)) {
    return undefined;
  }

  const identityClient = ctx['identity'] as { client: IdentitySrvGrpcClient };
  const response = await identityClient.client.user.getUnauthenticatedSubjectTokenForTenant(TenantRequest.fromPartial({
    domain
  }));

  return response?.token;
};

export const getGQLResolverFunctions = <
    T extends Record<string, any>,
    CTX extends ServiceClient<CTX, keyof CTX, T>,
    SRV = any,
    R = ResolverFn<any, any, ServiceClient<CTX, keyof CTX, T>, any>,
    B extends keyof T = any, NS extends keyof CTX = any
  > (
    service: ServiceDescriptorProto,
    key: NS,
    serviceKey: B,
    cfg: ServiceConfig
  ): { [key in keyof SRV]: R } => {
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
        // remap namespace and serviceKey if given
        key = cfg?.namespace ?? key;
        serviceKey = cfg?.serviceKeyMap?.[serviceKey] ?? cfg?.serviceKey ?? serviceKey;
        const client = context[key].client;
        const service = client[serviceKey];
        try {
          const converted = await preProcessGQLInput(args.input, typing.input);
          const scope = args?.input?.scope;

          let req = typing.processor.fromPartial(converted);

          req.subject = getTyping(authSubjectType)!.processor.fromPartial({});
          if (subjectField !== null) {
            const authToken = (context as any).request!.req.headers['authorization'];
            if (authToken && authToken.startsWith('Bearer ')) {
              req.subject.token = authToken.split(' ')[1];
            }
            if (scope) {
              req.subject.scope = scope;
            }
          }

          if (
            cfg?.disableUnauthenticatedUserTenant?.toString() != 'true'
            && !req.subject.token
            && 'origin' in (context as any).request!.req.headers
          ) {
            req.subject.token = await fetchUnauthenticatedUserToken(context, (context as any).request!.req.headers['origin']);
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

          const methodFunc = service[camelCase(realMethod)] ?? service[realMethod];
          if (method.clientStreaming) {
            const readableStreamKey = Object.keys(req).filter(
              (key) => req[key] instanceof stream.Stream.Readable
            );
            if (readableStreamKey.length > 0) {
              req = streamToAsyncIterable(req, readableStreamKey[0]);
            }
          }
          const contextRequest = (context as any).req;
          const rawResult = await methodFunc(req, {
            metadata: Metadata({
              headers: JSON.stringify(contextRequest.headers),
              'origin-ip': contextRequest.client.address().address
            })
          });
          const result = postProcessGQLOutput(rawResult, outputTyping.output);

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
                    if (response[bufferField] && response[bufferField].value && !Array.isArray(response[bufferField].value)) {
                      response[bufferField].value = [];
                    }
                    let data = JSON.parse(chunkObj[bufferField].value.toString());
                    if (Array.isArray(data)) {
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

const subscriptionResolvers: Record<string, Record<string, {
  resolve?: ResolverFn<any, any, ServiceClient<any, any, any>, any>;
  subscribe: ResolverFn<any, any, any, any>;
}>> = {};

export const registerResolverFunction = <T extends Record<string, any>, CTX extends ServiceClient<CTX, keyof CTX, T>> (
  namespace: string,
  name: string,
  func: ResolverFn<any, any, ServiceClient<CTX, keyof CTX, T>, any>,
  mutation = false,
  subspace: string | undefined = undefined,
  service?: ServiceDescriptorProto
) => {
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
    const key = [
      namespace,
      subspace,
      name
    ].filter(
      s => s
    ).join(
      '.'
    ).toLocaleLowerCase();
    const value = service.method.find((m) => m.name === name);
    if (key && value?.inputType) {
      inputMethodType.set(key, value.inputType);
    }
  }
  space.set(name, func);
};

export const generateResolver = (...namespaces: string[]): GraphQLResolverMap<any> => {
  const queryResolvers: any = {};
  const mutationResolvers: any = {};
  const subResolvers: any = {};

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

    if (ns in subscriptionResolvers) {
      for (let [k, v] of Object.entries(subscriptionResolvers[ns])) {
        subResolvers[k] = v;
      }
    }
  });

  const resolvers: GraphQLResolverMap<any> = {};

  if (Object.keys(queryResolvers).length > 0) {
    resolvers.Query = queryResolvers;
  }

  if (Object.keys(mutationResolvers).length > 0) {
    resolvers.Mutation = mutationResolvers;
  }

  if (Object.keys(subResolvers).length > 0) {
    resolvers.Subscription = subResolvers;
  }

  return resolvers;
};

export const generateSubServiceResolvers = <
  M extends Record<string, any>,
  CTX extends ServiceClient<CTX, keyof CTX, M>
>(
  subServices: ProtoMetadata[],
  config: SubSpaceServiceConfig,
  namespace: string,
): GraphQLResolverMap<any> => {
  subServices.forEach((meta) => {
    meta.fileDescriptor.service.forEach(service => {
      if (service.name) {
        // strip Service from end of String for sub service name
        const subName = getServiceName(service.name);
        const { mutations, queries } = getWhitelistBlacklistConfig(service, config, meta, subName);

        const func = getGQLResolverFunctions<M, CTX>(service, namespace, subName ?? namespace, config);

        Object.keys(func).forEach(k => {
          const regNamespace = config.root ? subName : namespace;
          const regSubspace = config.root ? undefined : subName;
          registerResolverFunction(regNamespace, k, func[k] as any, !queries.has(k) && mutations.has(k), regSubspace, service);
        });
      }
    });

    if (getUseSubscriptions()) {
      Object.entries(meta.options?.messages || {}).forEach(([messageName, option]) => {
        if (option.options && 'kafka_subscriber' in option.options) {
          const kafkaSubscriber: KafkaSubscription = option.options.kafka_subscriber;
          const fieldName = namespace + capitalize(kafkaSubscriber.plural as string);
          const baseMessageName = meta.fileDescriptor.package + '.' + messageName;
          const typing = getTyping('.' + baseMessageName);

          if (typing) {
            if (!(namespace in subscriptionResolvers)) {
              subscriptionResolvers[namespace] = {};
            }

            subscriptionResolvers[namespace][fieldName] = {
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
                      ? { done: true }
                      : { value: { [fieldName]: pending.shift()! } };
                  },
                  throw: async (err: Error) => {
                    throw err;
                  },
                  return: async () => {
                    await events.stop();
                    return { done: true };
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
    return generateResolver(...subServices.flatMap(
      meta => meta.fileDescriptor.service.map(
        service => service.name ? getServiceName(service.name) : undefined
      ).filter(Boolean)
    ));
  }

  const finalResolver = generateResolver(namespace);

  subServices.forEach((meta) => {
    meta.fileDescriptor.service.forEach(() => {
      if (meta.options && meta.options.messages) {
        for (const key of Object.keys(meta.options.messages)) {
          const message = meta.options.messages[key];
          if (message.fields) {
            const typing = getTyping(`.${meta.fileDescriptor.package}.${key}`);
            if (typing) {
              const result: Record<string, GraphQLFieldResolver<any, ResolverContext, any, any>> = {};
              for (const [fieldName, field] of Object.entries(message.fields)) {
                if ('resolver' in field) {
                  const fieldJsonName = snakeToCamel(fieldName);
                  const resolver = field.resolver as Resolver;
                  const limit = resolver.limit ?? config.limit ?? 1000;
                  const latency = resolver.latency ?? config.latency ?? 100;
                  resolver.targetService = config?.namespace ?? resolver.targetService;

                  // TODO This creates an N+1 problem!
                  result[resolver.fieldName] = async (parent: any, args: any, ctx: ResolverContext, info: any) => {
                    if (!parent || !(fieldJsonName in parent) || parent[fieldJsonName] === undefined) {
                      return undefined;
                    }

                    if (!ctx.subject) {
                      ctx.subject = Subject.fromPartial({});
                      const authToken = ctx.request!.req.headers.authorization;
                      if (authToken?.startsWith('Bearer ')) {
                        ctx.subject!.token = authToken.split(' ')[1];
                      }
                      else if (
                        config?.disableUnauthenticatedUserTenant?.toString() !== 'true'
                        && 'origin' in ctx.request!.req.headers
                      ) {
                        ctx.subject!.token = await fetchUnauthenticatedUserToken(ctx, ctx.request!.req.headers.origin);
                      }
                    }

                    const client = ctx[resolver.targetService].client;
                    const service = client[resolver.targetSubService];
                    const ids: string[] = Array.isArray(parent[fieldJsonName]) ? parent[fieldJsonName] : [parent[fieldJsonName]];
                    ctx.latent ??= {};
                    ctx.latent[resolver.targetSubService] ??= new LatentResourceMapBuffer(
                      async (ids) => {
                        const map = new Map<string, Resource>();
                        ids = Array.from(new Set(ids));
                        // TODO Support custom input messages
                        for (let i = 0; i < ids.length; i+=limit) {
                          const slice = ids.slice(i, i+limit);
                          const req = ReadRequest.fromPartial({
                            filters: [{
                              filters: [{
                                field: 'id',
                                operation: Filter_Operation.in,
                                value: JSON.stringify(slice),
                                type: Filter_ValueType.ARRAY
                              }],
                            }],
                            limit: slice.length,
                            subject: ctx.subject,
                          } as ReadRequest);
                          const methodFunc = service[camelCase(resolver.targetMethod)] ?? service[resolver.targetMethod];
                          const resp: ResourceListResponse = await methodFunc(req);
                          resp.items?.forEach(item => map.set(item.payload.id, item.payload));
                        }
                        return map;
                      }
                    );
                    ctx.latent[resolver.targetSubService].push(...ids);
                    const map = await ctx.latent[resolver.targetSubService].await(latency);
                    ctx.latent[resolver.targetSubService].reset();
                    if (Array.isArray(parent[fieldJsonName])) {
                      return ids.map(id => map.get(id));
                    }
                    else if (ids.length) {
                      return map.get(ids[0]);
                    }
                    else {
                      return undefined;
                    }
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
