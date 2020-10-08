import * as Koa from 'koa';
import { Logger } from '@restorecommerce/logger';
import * as bodyParser from 'koa-bodyparser';
import * as reqResLogger from '@restorecommerce/koa-req-res-logger';
import * as Router from 'koa-router';
import * as helmet from 'koa-helmet';
import * as kcors from '@koa/cors';
import { Server } from 'http';
import { ApolloServer, gql } from 'apollo-server-koa';
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


type ExtractFacadeState<T> = T extends RestoreCommerceFeature<infer X, infer Y> ? X : never
type ExtractFacadeContext<T> = T extends RestoreCommerceFeature<infer X, infer Y> ? Y : never
type ExtractFacadeFacade<T> = T extends RestoreCommerceFeature<infer X, infer Y, infer Z> ? Z : never

export type RestoreCommerceFeature<TState extends object = {}, TContent extends object = {}, TFacade extends object = {}> = {
  (facade: Facade<RestoreCommerceFeature<TState, TContent>> & TFacade): void;
};

export type RestoreCommerceFeatureWithDeps<TState extends object = {}, TContent extends object = {}, TFacade extends object = {}, TRequiredFeature extends RestoreCommerceFeature = RestoreCommerceFeature<{}, {}, {}>> = {
  (facade: Facade<MergeFeatures<RestoreCommerceFeature<TState, TContent>, TRequiredFeature>>  & TFacade): void;
};

type MergeFeatures<
  TFeature1 extends RestoreCommerceFeature,
  TFeature2 extends RestoreCommerceFeature = any,
  TFeature3 extends RestoreCommerceFeature = any,
  TFeature4 extends RestoreCommerceFeature = any,
  TFeature5 extends RestoreCommerceFeature = any,
  TFeature6 extends RestoreCommerceFeature = any,
  TFeature7 extends RestoreCommerceFeature = any,
  TFeature8 extends RestoreCommerceFeature = any,
  TFeature9 extends RestoreCommerceFeature = any,
  TFeature10 extends RestoreCommerceFeature = any,
> =
  RestoreCommerceFeature<
    ExtractFacadeState<TFeature1> & ExtractFacadeState<TFeature2> & ExtractFacadeState<TFeature3> & ExtractFacadeState<TFeature4> & ExtractFacadeState<TFeature5> & ExtractFacadeState<TFeature6> & ExtractFacadeState<TFeature7> & ExtractFacadeState<TFeature8> & ExtractFacadeState<TFeature9> & ExtractFacadeState<TFeature10>,
    ExtractFacadeContext<TFeature1> & ExtractFacadeContext<TFeature2> & ExtractFacadeContext<TFeature3> & ExtractFacadeContext<TFeature4> & ExtractFacadeContext<TFeature5> & ExtractFacadeContext<TFeature6> & ExtractFacadeContext<TFeature7> & ExtractFacadeContext<TFeature8> & ExtractFacadeContext<TFeature9> & ExtractFacadeContext<TFeature10>,
    ExtractFacadeFacade<TFeature1> & ExtractFacadeFacade<TFeature2> & ExtractFacadeFacade<TFeature3> & ExtractFacadeFacade<TFeature4> & ExtractFacadeFacade<TFeature5> & ExtractFacadeFacade<TFeature6> & ExtractFacadeFacade<TFeature7> & ExtractFacadeFacade<TFeature8> & ExtractFacadeFacade<TFeature9> & ExtractFacadeFacade<TFeature10>
  >;

export interface Facade<TFeature extends RestoreCommerceFeature = any> {
  readonly koa: Koa<ExtractFacadeState<TFeature>, ExtractFacadeContext<TFeature>>;
  start(): void;
  stop(): void;
  feature<
    TNewFeature extends RestoreCommerceFeature<ExtractFacadeState<TFeature>, ExtractFacadeContext<TFeature>>
  >(feature: TNewFeature): Facade<MergeFeatures<TFeature, TNewFeature>> & ExtractFacadeFacade<TNewFeature>;
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

export class FacadImpl<TFeature extends RestoreCommerceFeature = any> implements Facade<TFeature> {

  private _server: Server;
  private _initialized = false;
  // readonly koa: Koa<RestoreCommerceState & RestoreCommerceBaseState, RestoreCommerceContext & RestoreCommerceBaseContext<Facade<RestoreCommerceState, RestoreCommerceContext>>>;
  readonly logger: Logger;
  readonly config: Readonly<FacadeConfig>;
  readonly koa: Koa<ExtractFacadeState<TFeature>, ExtractFacadeContext<TFeature>>;

  constructor(koa: Koa<ExtractFacadeState<TFeature>, ExtractFacadeContext<TFeature>>, config: FacadeConfig) {
    this.logger = config.logger ?? new Logger({ console: {}});
    this.config = config;
    this.koa = koa;
  }

  get server() {
    return this._server;
  }

  get address() {
    return this._server && this._server.address();
  }

  feature<TNewFeature extends RestoreCommerceFeature<ExtractFacadeState<TFeature>, ExtractFacadeContext<TFeature>, {}>>(feature: TNewFeature): Facade<RestoreCommerceFeature<ExtractFacadeState<TFeature> & ExtractFacadeState<TNewFeature> & object, ExtractFacadeContext<TFeature> & ExtractFacadeContext<TNewFeature> & object, ExtractFacadeFacade<TFeature> & ExtractFacadeFacade<TNewFeature> & object>> & ExtractFacadeFacade<TNewFeature> {
    feature(this as any);
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


export function createFacade({ logger, ...config}: FacadeConfig): Facade {
  const koa = new Koa();

  koa.env = config.env;
  koa.keys = config.keys;

  logger = logger ?? new Logger({
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

  const router = new Router();

  // router.get('/dev', (ctx) => {
  //   ctx.body = 'foo';
  // })

  koa.use(router.routes());

  return new FacadImpl(koa, config);
}
