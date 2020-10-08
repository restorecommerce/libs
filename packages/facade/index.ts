import * as Koa from 'koa';
import { Logger, RestoreLoggerOptions } from '@restorecommerce/logger';
import * as bodyParser from 'koa-bodyparser';
import * as reqResLogger from '@restorecommerce/koa-req-res-logger';
import * as helmet from 'koa-helmet';
import * as kcors from '@koa/cors';
import { Server } from 'http';
import { ApolloServer, gql } from 'apollo-server-koa';
import { buildFederatedSchema } from '@apollo/federation';
import { Facade, FacadeModule } from './interfaces';

export * from './modules/index';
export * from './interfaces';

interface FacadeImplConfig {
  koa: Koa<any, any>;
  logger: Logger;
  port?: number;
  hostname?: string;
}

export class FacadeImpl implements Facade {

  private _server: Server;
  private _initialized = false;
  readonly logger: Logger;
  readonly port: number;
  readonly hostname: string;
  readonly koa: Koa<any, any>;
  readonly modules: any;

  constructor({koa, logger, port, hostname}: FacadeImplConfig) {
    this.logger = logger;
    this.port = port ?? 5000;
    this.hostname = hostname ?? '127.0.0.1';
    this.koa = koa;
    this.modules = {};
  }

  get server() {
    return this._server;
  }

  get address() {
    return this._server && this._server.address();
  }

  private loadedModules: string[] = [];

  addModule<TModule extends FacadeModule>(module: TModule, config: any) {
    if (this.loadedModules.includes(module.key)) {
      throw new Error('TODO');
    }
    this.loadedModules.push(module.key);
    module.initialize(this as any, config);
    return this as any;
  }

  supportsModule<TSupportedModule extends FacadeModule>(module: TSupportedModule): this is Facade<[TSupportedModule]> {
    return this.loadedModules.includes(module.key);
  }

  federation() {

  }

  start() {
    if (!this._initialized) {
      this._initialized = true;
      this.mountApolloServer();
    }
    return new Promise<void>((resolve) => {
      this._server =  this.koa.listen(this.port, this.hostname , () => {
        const address = this.address;
        if (typeof address === 'string') {
          this.logger.info(`Service is listening on ${address}`);
        } else if(address) {
          this.logger.info(`Service is listening on ${address.address}:${address.port}`);
        }
        resolve();
      });
    });

  }

  stop() {
    return new Promise<void>((resolve, reject) => {
      this.server.close((err) => {
        if (err) {
          this.logger.error(`Error stopping service`, err);
          reject(err);
        } else {
          this.logger.info(`Service stopped`);
          resolve();
        }
      });
    });
  }

  private mountApolloServer() {
    const schema = buildFederatedSchema({
      typeDefs: []
    })
    schema;
    const typeDefs = gql`
    # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

    # This "Book" type defines the queryable fields for every book in our data source.
    type Book {
      title: String
      author: String
    }

    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each. In this
    # case, the "books" query returns an array of zero or more Books (defined above).
    type Query {
      books: [Book]
    }
      `;

    const resolvers = {
      Query: {
        books: () => {
          return [];
        },
      },
    };

    const gqlServer = new ApolloServer({
      // schema: buildFederatedSchema([{ typeDefs, resolvers }]),
      typeDefs: typeDefs,
      resolvers,
      // introspection: this.config.env === 'development',
      // playground: this.config.env === 'development',
      // executor: this.executor,
      // would add upload options here if not for apollo-server #3703
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
      path: '/graphql'
    });

    this.koa.use(middleware);
  }
}

export interface FacadeConfig {
  port: number;
  logger?: Logger | RestoreLoggerOptions;
  hostname?: string;
  env?: string;
  keys?: string[];
}

export function createFacade(config: FacadeConfig): Facade {
  const koa = new Koa<any, any>();

  koa.env = config.env;
  koa.keys = config.keys;

  const logger = config.logger instanceof Logger ? config.logger : new Logger(config.logger ?? {
    console: {}
  });

  // middleware
  koa.use(bodyParser());
  koa.use(reqResLogger({ logger }));
  koa.use(kcors({
    credentials: true,
    exposeHeaders: ['x-jwt']
    // origin: TODO
  }));
  koa.use(helmet());

  const facade = new FacadeImpl({
    koa,
    logger,
    port: config.port,
    hostname: config.hostname
  });

  return facade;
}
