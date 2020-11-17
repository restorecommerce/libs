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
    .useModule(orderingModule({config: cfg.ordering}))
    .useMiddleware(reqResLogger({logger}));
}

let facade: Facade;
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

describe('ordering', () => {
  it('should create order', async (done) => {
    request
      .post("/graphql")
      .send({
        query: `mutation {
  Create(
    input: {
      totalCount: 1
      apiKey: { value: "API_KEY" }
      items: [
        {
          id: "TEST"
          meta: { created: 0, modified: 0, modifiedBy: "modifiedBy", owner: [] }
          name: "name"
          description: "description"
          status: "status"
          items: []
          totalPrice: 10
          totalWeightInKg: 1
          shippingContactPointId: "shippingContactPointId"
          billingContactPointId: "billingContactPointId"
        }
      ]
    }
  ) {
    status {
      key
      code
      message
    }
    payload {
      items {
        id
        name
      }
      totalCount
    }
  }
}`,
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
  it('should delete order', async (done) => {
    request
      .post("/graphql")
      .send({
        query: `mutation {
  Delete(input: { ids: ["TEST"], apiKey: { value: "API_KEY" } }) {
    status {
      key
      code
      message
    }
  }
}`,
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
