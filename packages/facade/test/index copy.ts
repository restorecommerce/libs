import * as Koa from 'koa';
import { Logger } from '@restorecommerce/logger';
import * as bodyParser from 'koa-bodyparser';
import * as reqResLogger from '@restorecommerce/koa-req-res-logger';
import * as Router from 'koa-router';
import * as helmet from 'koa-helmet';
import * as kcors from '@koa/cors';
import { Server } from 'http';
import { ApolloServer, gql } from 'apollo-server-koa';
// import { RestoreCommerceBaseContext, RestoreCommerceBaseState } from './interfaces';
import { buildFederatedSchema } from '@apollo/federation';
import { IdentitySrvGrpcClient } from '@restorecommerce/identity-srv-grpc-client';
import { ResourcesSrvGrpcClient } from '@restorecommerce/resources-srv-grpc-client';

export interface FacadeConfig {
  port: number;
  logger?: Logger;
  hostname?: string;
  env?: string;
  keys?: string[];
}

export interface RestoreCommerceBaseState extends Koa.DefaultState {

}

export interface RestoreCommerceBaseContext<TFacade extends Facade> extends Koa.Context {
  grpc: {
    identity: IdentitySrvGrpcClient;
    resources: ResourcesSrvGrpcClient;
  };
  logger: Logger;
  facade: TFacade;
}

type ExtractFacadeState<T> = T extends Facade<infer X> ? X : never
type ExtractFacadeContext<T> = T extends Facade<infer X, infer Y> ? Y : never

export type RestoreCommerceFacadeFeature<TNewState extends object, TNewContext extends object, TFacade extends Facade = Facade> = {
  (facade: Facade<TNewState & ExtractFacadeState<TFacade>, TNewContext & ExtractFacadeContext<TFacade>>): void;
};


export class Facade<RestoreCommerceState extends object = {}, RestoreCommerceContext extends object = {}> {

  private _server: Server;
  private _initialized = false;

  readonly koa: Koa<RestoreCommerceState & RestoreCommerceBaseState, RestoreCommerceContext & RestoreCommerceBaseContext<Facade<RestoreCommerceState, RestoreCommerceContext>>>;
  readonly logger: Logger;
  readonly config: Readonly<FacadeConfig>;

  constructor(config: FacadeConfig) {
    this.logger = config.logger ?? new Logger({ console: {}});
    this.config = config;
    this.koa = createKoa<RestoreCommerceState & RestoreCommerceBaseState, RestoreCommerceContext & RestoreCommerceBaseContext<Facade<RestoreCommerceState, RestoreCommerceContext>>>(config);
    this.koa.use(ctx => ctx.facade = this);
  }

  get server() {
    return this._server;
  }

  get address() {
    return this._server && this._server.address();
  }

  feature<TNewState extends object, TNewContext extends object, TFacade extends Facade = Facade>(fn: RestoreCommerceFacadeFeature<TNewState, TNewContext, TFacade>): Facade<RestoreCommerceState & TNewState, RestoreCommerceContext & TNewContext> {
    fn(this as any);
    return this as any;
  }

  federation() {

  }

  start() {
    if (!this._initialized) {
      this._initialized = true;
      this.mountApolloServer();
    }

    this._server =  this.koa.listen(this.config.port, this.config.hostname ?? '127.0.0.1', () => {
      const address = this.address;
      if (typeof address === 'string') {
        this.logger.info(`Service is listening on ${address}`);
      } else if(address) {
        this.logger.info(`Service is listening on ${address.address}:${address.port}`);
      }
    });
  }

  stop() {
    this.server.close((err) => {
      if (err) {
        this.logger.error(`Error stopping service`, err);
      } else {
        this.logger.info(`Service stopped`);
      }
    })
  }

  mountApolloServer() {
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
        books: (parent, args, context) => {
          return [];
        },
      },
    };



    const gqlServer = new ApolloServer({
      // schema: buildFederatedSchema([{ typeDefs, resolvers }]),
      typeDefs: typeDefs,
      resolvers,
      // introspection: this.config.env === 'development',
      playground: this.config.env === 'development',
      // executor: this.executor,
      // would add upload options here if not for apollo-server #3703
      // subscriptions: false, // not supported when using federation - but not used anyway
      // formatError: (error) => {
      //   this.logger.error('Error while processing request', { message: error.message });
      //   return {
      //     message: error.message,
      //     locations: error.locations,
      //     stack: error.stack,
      //   };
      // },
      // context: ({ctx}) => ctx
    });

    const middleware = gqlServer.getMiddleware({
      path: '/graphql'
    });

    console.log(gqlServer.graphqlPath);

    this.koa.use(middleware);

  }
}


export function createKoa<RestoreCommerceState = {}, RestoreCommerceContext = {}>({ logger, ...config}: FacadeConfig) {
  const koa = new Koa<RestoreCommerceState, RestoreCommerceContext>();

  koa.env = config.env;
  koa.keys = config.keys;

  logger = logger ?? new Logger({
    console: {}
  });


  // middleware
  // koa.use(bodyParser());
  // koa.use(reqResLogger({ logger }));
  // koa.use(kcors({
  //   credentials: true,
  //   exposeHeaders: ['x-jwt']
  //   // origin: TODO
  // }));
  // koa.use(helmet());

  const router = new Router();

  // router.get('/dev', (ctx) => {
  //   ctx.body = 'foo';
  // })

  koa.use(router.routes());

  return koa;
}
