import Koa from 'koa';
import { createLogger } from '@restorecommerce/logger';
import { Logger } from 'winston';
import { Server, ServerResponse } from 'http';
import { ApolloServer } from 'apollo-server';
import { AddressInfo } from 'net';
import { GraphQLSchema, printSchema } from 'graphql';
import { ApolloGateway, LocalGraphQLDataSource, RemoteGraphQLDataSource, IntrospectAndCompose } from '@apollo/gateway';
import { facadeStatusModule } from './modules';
import { Facade, FacadeBaseContext, FacadeModule, FacadeModuleBase, FacadeModulesContext } from './interfaces';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import { Disposable } from 'graphql-ws';
import * as _ from 'lodash';
import { makeExecutableSchema } from "graphql-tools";
import { gql } from 'graphql-tag';
import { GraphQLResolverMap, mergeSubscribeIntoSchema } from './gql/protos';
import compose from 'koa-compose';
import { KafkaProviderConfig } from '@restorecommerce/kafka-client';
import { setUseSubscriptions } from './gql/protos/utils';

export * from './modules/index';
export * from './middlewares/index';
export * from './interfaces';
export * from './utils';
export * from './gql/index';

interface RestoreCommerceFacadeImplConfig {
  koa: Koa<any, any>;
  logger: Logger;
  port?: number;
  hostname?: string;
  env?: string;
  kafka?: KafkaProviderConfig['kafka'];
}

interface FacadeApolloServiceMap {
  [key: string]: {
    url?: string;
    schema?: GraphQLSchema;
  }
}

export class RestoreCommerceFacade<TModules extends FacadeModuleBase[] = []> implements Facade<TModules> {

  private apolloServices: FacadeApolloServiceMap = {};
  private allResolvers: GraphQLResolverMap<any> = {};

  private _server?: Server;
  private _initialized = false;
  readonly logger: Logger;
  readonly port: number;
  readonly hostname: string;
  readonly koa: Koa<any, FacadeModulesContext<TModules>>;
  readonly env: string;
  readonly modules: FacadeModule[] = [];
  readonly kafkaConfig?: KafkaProviderConfig['kafka'];

  private startFns: Array<(() => Promise<void>)> = [];
  private stopFns: Array<(() => Promise<void>)> = [];

  constructor({ koa, logger, port, hostname, env, kafka }: RestoreCommerceFacadeImplConfig) {
    this.logger = logger;
    this.port = port ?? 5000;
    this.hostname = hostname ?? '127.0.0.1';
    this.koa = koa;
    this.env = env ?? 'development';
    this.kafkaConfig = kafka;

    setUseSubscriptions(!!kafka);
  }
  get server() {
    return this._server;
  }

  get address(): AddressInfo | undefined {
    const address = this._server?.address();
    if (address && typeof address === 'object') {
      return address;
    }
    return undefined;
  }

  get listening(): boolean {
    return !!this._server && this._server.listening;
  }

  useMiddleware<TNewState extends object = {}, TNewContext extends object = {}>(middleware: Koa.Middleware<TNewState, TNewContext>) {
    this.koa.use(middleware);
    return this as any;
  }

  useModule<TNewModule extends FacadeModule>(module: TNewModule) {
    if (this.modules.some(m => module.moduleName === m.moduleName)) {
      throw new Error(`module ${module.moduleName} already loaded`);
    }
    this.modules.push(module);
    module(this as any);
    return this as any;
  }

  supportsModule<TSupportedModule extends FacadeModuleBase<FacadeBaseContext>>(module: TSupportedModule): this is Facade<[TSupportedModule, ...TModules]> & Facade<[...TModules]> {
    return this.modules.some(m => module.moduleName === m.moduleName);
  }

  addApolloService({ name, schema, url }: { name: string, schema: any, url: string }) {
    if (schema instanceof GraphQLSchema) {
      this.apolloServices[name] = { schema, url };
    } else if ('federatedSchema' in schema && 'resolvers' in schema) {
      this.apolloServices[name] = { schema: schema.federatedSchema, url };
      this.allResolvers = _.merge(this.allResolvers, schema.resolvers);
    }
  }

  onStart(fn: () => Promise<void>): void {
    debugger;
    this.startFns.push(fn);
  }
  onStop(fn: () => Promise<void>): void {
    this.stopFns.push(fn);
  }

  private async runFnQueue(fns: (() => Promise<void>)[]) {
    const _fns = [...fns];
    const runQueue = async () => {
      const fn = _fns.shift();
      if (fn) {
        try {
          await fn();
        } catch (error) {
          this.logger.error('Error in start/stop function', error);
        }
        await runQueue();
      }
    }
    await runQueue();
  }

  async start(): Promise<void> {
    if (!this._initialized) {
      this.runFnQueue(this.startFns);
      await this.mountApolloServer();
      this._initialized = true;
    }
    return new Promise<void>((resolve, reject) => {
      try {
        this.server?.listen(this.port, this.hostname, () => {
          const address = this.address;
          if (address) {
            this.logger.info(`Service is listening on ${address.address}:${address.port}`);
          } else {
            this.logger.info(`Service is listening`);
          }
          resolve();
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  async stop(): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      await this.runFnQueue(this.stopFns);

      this.server?.close((err) => {
        if (err) {
          this.logger.error(`Error stopping service`, err);
          reject(err);
        } else {
          this.logger.info(`Service stopped`);
          this._server = undefined;
          resolve();
        }
      });
    });
  }

  private async mountApolloServer() {
    const serviceList = Object.keys(this.apolloServices).map(key => {
      return {
        name: key,
        url: this.apolloServices[key].url ?? `local`,
      };
    });

    const gateway = new ApolloGateway({
      logger: this.logger,
      // serviceList,
      supergraphSdl: new IntrospectAndCompose({
        subgraphs: serviceList
      }),
      debug: true,
      buildService: ({ name, url }) => {
        if (url !== 'local') {
          return new RemoteGraphQLDataSource({
            url,
            // TODO willSendRequest
          })
        } else {
          const schema = this.apolloServices[name]?.schema;
          if (schema) {
            return new LocalGraphQLDataSource(schema);
          } else {
            throw new Error('Invalid schema ' + name);
          }
        }
      }
    });

    this._server = createServer(this.koa.callback());

    const wsServer = new WebSocketServer({
      server: this._server,
      path: '/graphql',
    });

    let serverCleanup: Disposable;
    gateway.onSchemaLoadOrUpdate(schemaContext => {
      const typeDefs = printSchema(new GraphQLSchema({
        subscription: schemaContext.apiSchema.getSubscriptionType()
      }));

      let schema = makeExecutableSchema({
        typeDefs: gql(typeDefs + `
        type Query { sample: String }
        `),
        resolvers: {
          Subscription: {
            ...this.allResolvers['Subscription']
          }
        }
      });

      if ('Subscription' in this.allResolvers) {
        mergeSubscribeIntoSchema(schema.getSubscriptionType(), this.allResolvers['Subscription']);
      }

      serverCleanup = useServer({
        schema,
        context: async (ctx, message, args) => {
          const newCtx = this.koa.createContext(ctx.extra.request, new ServerResponse(ctx.extra.request));
          const fn = await (compose(this.koa.middleware) as any);
          await fn(newCtx);
          newCtx.kafkaConfig = this.kafkaConfig;
          newCtx.logger = this.logger;
          return newCtx
        },
      }, wsServer);
    });

    const gqlServer = new ApolloServer({
      gateway,
      introspection: true,
      plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer: this._server }),
        ApolloServerPluginLandingPageLocalDefault({
          embed: true
        }),
        {
          async serverWillStart() {
            return {
              async drainServer() {
                await serverCleanup.dispose();
              },
            };
          },
        },
      ],
      debug: true,
      formatError: (error) => {
        this.logger.error('Error while processing request', { message: error.message });
        this.logger.debug('Error while processing request', { error });
        return {
          message: error.message,
          locations: error.locations,
          stack: error.stack,
        };
      },
      context: ({ ctx }) => ctx
    });

    await gqlServer.start();

    const middleware = gqlServer.getMiddleware({
      path: '/graphql',
      cors: true,
      bodyParserConfig: {
        jsonLimit: '10mb'
      },
    });

    this.koa.use(middleware);
  }
}

export interface FacadeConfig {
  port?: number;
  logger?: Logger;
  hostname?: string;
  env?: string;
  keys?: string[];
  kafka?: KafkaProviderConfig['kafka'];
}

export function createFacade(config: FacadeConfig): Facade {
  const koa = new Koa<any, any>();

  if (config.env) {
    koa.env = config.env;
  }
  if (config.keys) {
    koa.keys = config.keys;
  }

  let loggerCfg: any;
  if (config.logger) {
    loggerCfg = config.logger;
    loggerCfg.esTransformer = (msg: any) => {
      msg.fields = JSON.stringify(msg.fields);
      return msg;
    };
  }

  const logger = loggerCfg ?? createLogger(loggerCfg);
  koa.context.logger = logger;

  return new RestoreCommerceFacade({
    koa,
    logger,
    port: config.port,
    hostname: config.hostname,
    env: config.env,
    kafka: config.kafka
  }).useModule(facadeStatusModule);
}
