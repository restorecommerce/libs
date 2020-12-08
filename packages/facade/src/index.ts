import Koa from 'koa';
import { createLogger, Logger } from '@restorecommerce/logger';
import { Server } from 'http';
import { ApolloServer } from 'apollo-server-koa';
import { AddressInfo } from 'net';
import { GraphQLSchema } from 'graphql';
import { ApolloGateway, LocalGraphQLDataSource, RemoteGraphQLDataSource } from '@apollo/gateway';
import { facadeStatusModule } from './modules/facade-status/index';
import { Facade, FacadeBaseContext, FacadeModule, FacadeModuleBase, FacadeModulesContext } from './interfaces';

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


export class RestoreCommerceFacade<TModules extends FacadeModuleBase[] = []> implements Facade<TModules> {

  private apolloServices: FacadeApolloServiceMap = {};

  private _server?: Server;
  private _initialized = false;
  readonly logger: Logger;
  readonly port: number;
  readonly hostname: string;
  readonly koa: Koa<any, FacadeModulesContext<TModules>>;
  readonly env: string;
  readonly modules: FacadeModule[] = [];

  private startFns: Array<(() => Promise<void>)> = [];
  private stopFns: Array<(() => Promise<void>)> = [];

  constructor({koa, logger, port, hostname, env}: RestoreCommerceFacadeImplConfig) {
    this.logger = logger;
    this.port = port ?? 5000;
    this.hostname = hostname ?? '127.0.0.1';
    this.koa = koa;
    this.env = env ?? 'development';
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

  addApolloService({name, schema, url}: {name: string, schema: any, url: string}) {
    this.apolloServices[name] = { schema, url };
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
      this.mountApolloServer();
      this._initialized = true;
    }
    return new Promise<void>((resolve, reject) => {
      try {
        this._server = this.koa.listen(this.port, this.hostname , () => {
          const address = this.address;
          if(address) {
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
        this.logger.debug('Error while processing request', { error });
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
  port?: number;
  logger?: Logger;
  hostname?: string;
  env?: string;
  keys?: string[];
}

export function createFacade(config: FacadeConfig): Facade<[]> {
  const koa = new Koa<any, any>();

  if (config.env) {
    koa.env = config.env;
  }
  if (config.keys) {
    koa.keys = config.keys;
  }

  const logger = config.logger ?? createLogger(config.logger);
  koa.context.logger = logger;

  return new RestoreCommerceFacade({
    koa,
    logger,
    port: config.port,
    hostname: config.hostname,
    env: config.env
  }).useModule(facadeStatusModule);
}
