import { createFacade, Facade, reqResLogger } from '../src/index';
import { agent, SuperAgentTest } from 'supertest';
import { createServiceConfig } from "@restorecommerce/service-config";
import { createLogger } from "@restorecommerce/logger";
import { orderingModule } from "../src/modules/ordering";

const CONFIG_PATH = __dirname;

export function createTestFacade() {
  const serviceConfig = createServiceConfig(CONFIG_PATH);

  const cfg = {
    env: serviceConfig.get('NODE_ENV'),
    logger: serviceConfig.get('logger'),
    facade: serviceConfig.get('facade'),
    ordering: serviceConfig.get('ordering'),
  };

  const logger = createLogger(cfg.logger);

  return createFacade({
    ...cfg.facade,
    env: cfg.env,
    logger,
  })
    .useModule(orderingModule({config: cfg.ordering.client}))
    .useMiddleware(reqResLogger({logger}));
}

let facade: Facade;
let request: SuperAgentTest;

beforeAll(async () => {
  facade = createTestFacade();
  await facade.start();
  request = agent(facade.server)
});

it('should start the facade', () => {
  expect(facade).toBeTruthy();
  expect(facade.listening).toBe(true);
});

afterAll(async () => {
  await facade && facade.stop();
})

it('test', async (done) => {
  request
    .post("/graphql")
    .send({
      query: "{ Delete }",
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200, done);
});
