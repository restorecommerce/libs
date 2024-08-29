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
import { GraphQLString, printSchema } from 'graphql';
import { buildSubgraphSchema } from '@apollo/federation';
import { gql } from 'graphql-tag';
import path from 'node:path';
import * as url from 'node:url';
import { jest } from '@jest/globals';

jest.useFakeTimers();

const CONFIG_PATH = path.dirname(url.fileURLToPath(import.meta.url));

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
  const serviceConfig = createServiceConfig(CONFIG_PATH);

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
      schema: buildSubgraphSchema({
        typeDefs: gql(printSchema(generateSchema([{prefix: 'Custom', namespace}]))),
        resolvers: generateResolver(namespace)
      })
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

describe('extend', () => {
  let facade: Facade<any>;
  let request: SuperAgentTest;

  beforeAll(async () => {
    facade = createTestFacade();
    await facade.start();
    request = agent(facade.server) as any;
    // await new Promise(resolve => setTimeout(resolve, 20000))
  });

  afterAll(async () => {
    await facade && await facade.stop();
  });

  it('should start the facade', () => {
    expect(facade).toBeTruthy();
    expect(facade.listening).toBe(true);
  });

  it('should call custom function', (done) => {
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
          done(err);
        }

        expect(res.body).toBeInstanceOf(Object);
        expect(res.body.data).toBeInstanceOf(Object);
        expect(res.body.data.custom).toBeInstanceOf(Object);
        expect(res.body.data.custom[customFunction]).toEqual(customResponse);

        done();
      });
  });
});
