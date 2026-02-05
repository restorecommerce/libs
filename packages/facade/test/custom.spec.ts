import {
  createFacade,
  createFacadeModuleFactory,
  type Facade,
  type FacadeContext,
  type FacadeModule,
  reqResLogger
} from '../src/index.js';
import { agent, type SuperAgentTest } from 'supertest';
import { createServiceConfig } from '@restorecommerce/service-config';
import { createLogger } from '@restorecommerce/logger';
import { generateResolver, generateSchema, registerResolverFunction, registerResolverSchema } from '../src/gql/protos/index.js';
import { GraphQLString, printSchema, parse } from 'graphql';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { it, describe, beforeAll, afterAll, expect } from 'vitest';

const customFunction = 'customFunction';
const customResponse = 'Hello World';
const namespace = 'custom';

export interface CustomConfig {
  message: string;
}

export interface CustomContext extends FacadeContext {
  message: string;
}

export type CustomModule = FacadeModule<CustomContext>;

const createTestFacade = () => {
  const serviceConfig = createServiceConfig(process.cwd());

  const cfg = {
    env: serviceConfig.get('NODE_ENV'),
    logger: serviceConfig.get('logger'),
    facade: serviceConfig.get('facade'),
  };

  const logger = createLogger(cfg.logger);

  registerResolverSchema(namespace, customFunction, {
    type: GraphQLString as any
  }, false, '', {client: {address: ''}});
  registerResolverFunction(namespace, customFunction, (_, ctx) => ctx.message);

  const customStuff = createFacadeModuleFactory<CustomConfig, CustomModule>(namespace, (facade, config) => {
    facade.addApolloService({
      name: namespace,
      schema: buildSubgraphSchema([{
        typeDefs: parse(printSchema(generateSchema([{prefix: 'Custom', namespace}]))),
        resolvers: generateResolver(namespace)
      }])
    });

    facade.koa.use(async (ctx, next) => {
      ctx.message = config.message;
      await next();
    });
  });

  return createFacade({
    ...cfg.facade,
    env: cfg.env,
    logger,
  })
    .useModule(customStuff({message: customResponse}))
    .useMiddleware(reqResLogger({logger}));
};

let facade: Facade<any>;
let request: SuperAgentTest;

let startPromise: Promise<unknown>;

describe('extend', () => {
  beforeAll(async () => {
    facade = createTestFacade();
    startPromise = facade.start();
    await startPromise;
    request = agent(facade.server) as any;
  });

  afterAll(async () => {
    await startPromise;
    await facade.stop();
  });

  it('should start the facade', () => {
    expect(facade).toBeTruthy();
    expect(facade.listening).toBe(true);
  });

  it('should call custom function', () => {
    return new Promise<void>((resolve, reject) => {
      request
        .post('/graphql')
        .send({
          query: `{ custom { customFunction } }`,
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) {
            reject(err);
          }

          expect(res.body).toBeInstanceOf(Object);
          expect(res.body.data).toBeInstanceOf(Object);
          expect(res.body.data.custom).toBeInstanceOf(Object);
          expect(res.body.data.custom[customFunction]).toEqual(customResponse);

          resolve();
        });
    });
  });
});
