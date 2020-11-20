import {
  createFacade,
  createFacadeModuleFactory,
  Facade,
  FacadeContext,
  FacadeModule,
  reqResLogger
} from '../src/index';
import { agent, SuperAgentTest } from 'supertest';
import { createServiceConfig } from "@restorecommerce/service-config";
import { createLogger } from "@restorecommerce/logger";
import { generateResolver, generateSchema, registerResolverFunction, registerResolverSchema } from "../src/gql/protos";
import { GraphQLString } from "graphql";
import { buildFederatedSchema, printSchema } from "@apollo/federation";
import { gql } from "apollo-server-koa";

const CONFIG_PATH = __dirname;

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

function createTestFacade() {
  const serviceConfig = createServiceConfig(CONFIG_PATH);

  const cfg = {
    env: serviceConfig.get('NODE_ENV'),
    logger: serviceConfig.get('logger'),
    facade: serviceConfig.get('facade'),
  };

  const logger = createLogger(cfg.logger);

  registerResolverSchema(namespace, customFunction, {
    type: GraphQLString
  });
  registerResolverFunction(namespace, customFunction, (_, ctx) => ctx.message);

  const customStuff = createFacadeModuleFactory<CustomConfig, CustomModule>(namespace, (facade, config) => {
    facade.addApolloService({
      name: namespace,
      schema: buildFederatedSchema({
        typeDefs: gql(printSchema(generateSchema(namespace, 'Custom'))),
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
}

let facade: Facade<any>;
let request: SuperAgentTest;

beforeAll(async () => {
  facade = createTestFacade();
  await facade.start();
  request = agent(facade.server)
  // await new Promise(resolve => setTimeout(resolve, 20000))
});

it('should start the facade', () => {
  expect(facade).toBeTruthy();
  expect(facade.listening).toBe(true);
});

afterAll(async () => {
  await facade && facade.stop();
})

describe('extend', () => {
  it('should call custom function', async (done) => {
    request
      .post("/graphql")
      .send({
        query: `{ custom { customFunction } }`,
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
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
