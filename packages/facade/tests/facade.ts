import  { createFacade, reqResLogger, FacadeContext, identityModule } from '../src/index';
import { createServiceConfig } from '@restorecommerce/service-config';
import { createLogger } from '@restorecommerce/logger';

import { timezonesModule } from './timezone';
import { exampleModule } from './example';
import { ResourcesSrvGrpcClient} from '@restorecommerce/rc-grpc-clients';

const CONFIG_PATH = __dirname;

function createTestFacade() {
  const serviceConfig = createServiceConfig(CONFIG_PATH);

  const cfg = {
    env: serviceConfig.get('NODE_ENV'),
    logger: serviceConfig.get('logger'),
    facade: serviceConfig.get('facade'),
    resources: serviceConfig.get('resources'),
    identity: serviceConfig.get('identity'),
    example: { message: 'foo' }
  };

  const logger = createLogger(cfg.logger);
  const resourcesClient = new ResourcesSrvGrpcClient(cfg.resources.client);

  return createFacade({
    // ...cfg.facade,

    env: cfg.env,
    logger
  }).useModule(identityModule({
      identitySrvClientConfig: cfg.identity.client,
      oidc: {
        client_id: 'TEST_CLIENT_ID',
        client_secret: 'TEST_CLIENT_SECRET',
        cookies: {
          keys: ['TEST_COOKIE_SECRET']
        },
        issuer: 'http://localhost:5000',
        redirect_uris: ['http://localhost:5000/session'],
        jwks: {
          keys: []
        },
      }
    }))
    .useModule(timezonesModule({timezoneService: resourcesClient.timezone}))
    .useModule(exampleModule(cfg.example))
    .useMiddleware(reqResLogger({ logger }));
};

export const facade = createTestFacade();
export type TestFacadeContext = FacadeContext<typeof facade>;
