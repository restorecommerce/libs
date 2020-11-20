import { createFacade, Facade, reqResLogger } from '../src/index';
import { agent, SuperAgentTest } from 'supertest';
import { createServiceConfig } from "@restorecommerce/service-config";
import { createLogger } from "@restorecommerce/logger";
import { orderingModule } from "../src/modules/ordering";

const CONFIG_PATH = __dirname;

function createTestFacade() {
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

function expectSuccess(done, payloadValidator: (payload) => void = () => {}) {
  return (err, res) => {
    if (err) {
      done(err);
    }

    expect(res.body).toBeInstanceOf(Object);
    expect(res.body.data).toBeInstanceOf(Object);
    expect(res.body.data.ordering).toBeInstanceOf(Object);

    const key = Object.keys(res.body.data.ordering)[0];
    expect(res.body.data.ordering[key]).toBeInstanceOf(Object);
    expect(res.body.data.ordering[key].status).toBeInstanceOf(Object);

    const status = res.body.data.ordering[key].status;
    expect(status.key).toEqual('');
    expect(status.code).toEqual(1);
    expect(status.message).toEqual('Success');

    if ('payload' in res.body.data.ordering[key]) {
      expect(res.body.data.ordering[key].payload).toBeInstanceOf(Object);
      payloadValidator(res.body.data.ordering[key].payload)
    }

    done();
  };
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

describe('ordering', () => {
  it('should create order', async (done) => {
    request
      .post("/graphql")
      .send({
        query: `mutation {
  ordering {
    Create(
      input: {
        totalCount: 1
        items: [
          {
            id: "TEST"
            meta: {
              created: 0
              modified: 0
              modifiedBy: "modifiedBy"
              owner: []
            }
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
        subject: {
          id: "N/A"
          scope: "N/A"
          unauthenticated: false
          token: "N/A"
        }
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
  }
}`,
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(expectSuccess(done, (payload) => {
        expect(payload.items).toBeInstanceOf(Array);
        expect(payload.items).toHaveLength(1);
        expect(payload.items[0]).toBeInstanceOf(Object);
        expect(payload.items[0].id).toEqual('TEST');
        expect(payload.items[0].name).toEqual('name');
      }));
  });
  it('should delete order', async (done) => {
    request
      .post("/graphql")
      .send({
        query: `mutation {
  ordering {
    Delete(
      input: {
        ids: ["TEST"]
        collection: false
        subject: {
          id: "N/A"
          scope: "N/A"
          unauthenticated: false
          token: "N/A"
        }
      }
    ) {
      status {
        key
        code
        message
      }
    }
  }
}`,
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(expectSuccess(done));
  });
});
