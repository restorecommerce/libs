import Koa from 'koa';
import { createLogger, Logger } from '@restorecommerce/logger';
import { Server } from 'http';
import { ApolloServer } from 'apollo-server-koa';
import { GraphQLSchema } from 'graphql';
import { ApolloGateway, LocalGraphQLDataSource, RemoteGraphQLDataSource } from '@apollo/gateway';
import { Facade, FacadeModule, FacadeModuleBase } from './facade';
import { AddressInfo } from 'net';

export * from './modules/index';
export * from './middlewares/index';
export * from './facade';
export * from './gql/index';

interface RestoreCommerceFacadeImplConfig {
  koa: Koa<any, any>;
  logger: Logger;
  port?: number;
  hostname?: string;
  env?: string;
}


interface FacadeApolloServiceMap {
  [key: string]: {
    url?: string;
    schema?: GraphQLSchema;
  }
}

export type ApolloServiceArg = {
  name: string;
} & ({ url: string } | { schema: any })


export class RestoreCommerceFacade implements Facade {

  private apolloServices: FacadeApolloServiceMap = {};

  private _server?: Server;
  private _initialized = false;
  readonly logger: Logger;
  readonly port: number;
  readonly hostname: string;
  readonly koa: Koa;
  readonly env: string;
  modules: { [key: string]: any; };

  constructor({koa, logger, port, hostname, env}: RestoreCommerceFacadeImplConfig) {
    this.logger = logger;
    this.port = port ?? 5000;
    this.hostname = hostname ?? '127.0.0.1';
    this.koa = koa;
    this.modules = {};
    this.env = env ?? 'development';
  }
  get server() {
    return this._server;
  }

  get address(): string | AddressInfo | undefined {
    return this._server && (this._server.address() ?? undefined);
  }

  get listening(): boolean {
    return !!this._server && this._server.listening;
  }

  private loadedModules: string[] = [];

  useMiddleware<TNewState extends object = {}, TNewContext extends object = {}>(middleware: Koa.Middleware<TNewState, TNewContext>) {
    this.koa.use(middleware);
    return this as any;
  }

  useModule<TNewModule extends FacadeModule>(module: TNewModule) {
    if (this.loadedModules.includes(module.moduleName)) {
      throw new Error(`module ${module.moduleName} already loaded`);
    }
    this.loadedModules.push(module.moduleName);
    module(this as any);
    return this as any;
  }

  supportsModule<TSupportedModule extends FacadeModuleBase>(module: TSupportedModule): this is Facade<[TSupportedModule]> {
    return this.loadedModules.includes(module.moduleName);
  }

  addApolloService({name, schema, url}: {name: string, schema: any, url: string}) {
    this.apolloServices[name] = { schema, url };
  }

  start() {
    if (!this._initialized) {
      this._initialized = true;
      this.mountApolloServer();
    }
    return new Promise<void>((resolve, reject) => {
      try {
        this._server = this.koa.listen(this.port, this.hostname , () => {
          const address = this.address;
          if (typeof address === 'string') {
            this.logger.info(`Service is listening on ${address}`);
          } else if(address) {
            this.logger.info(`Service is listening on ${address.address}:${address.port}`);
          }
          resolve();
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  stop() {
    return new Promise<void>((resolve, reject) => {
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

  private mountApolloServer() {
    const serviceList = Object.keys(this.apolloServices).map(key => {
      return {
        name: key,
        url: this.apolloServices[key].url ?? `local`,
      };
    });

    const gateway = new ApolloGateway({
      logger: this.logger,
      serviceList,
      buildService: ({name, url}) => {
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

    const gqlServer = new ApolloServer({
      gateway,
      introspection: this.koa.env === 'development',
      playground: this.koa.env === 'development',
      subscriptions: false, // not supported when using federation - but not used anyway
      formatError: (error) => {
        this.logger.error('Error while processing request', { message: error.message });
        return {
          message: error.message,
          locations: error.locations,
          stack: error.stack,
        };
      },
      context: ({ctx}) => ctx
    });

    const middleware = gqlServer.getMiddleware({
      path: '/graphql',
      cors: true,
      bodyParserConfig: true,
    });

    this.koa.use(middleware);
  }
}

export interface FacadeConfig {
  port: number;
  logger?: Logger;
  hostname?: string;
  env?: string;
  keys?: string[];
}

export function createFacade(config: FacadeConfig): Facade {
  const koa = new Koa<any, any>();

  if (config.env) {
    koa.env = config.env;
  }
  if (config.keys) {
    koa.keys = config.keys;
  }

  const logger = config.logger ?? createLogger(config.logger);

  return new RestoreCommerceFacade({
    koa,
    logger,
    port: config.port,
    hostname: config.hostname,
    env: config.env
  });
}
