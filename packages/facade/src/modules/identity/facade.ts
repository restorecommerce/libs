import  { createFacade, reqResLogger, identityModule, FacadeContext, Facade } from '../src/index';
import { createServiceConfig } from '@restorecommerce/service-config';
import { createLogger } from '@restorecommerce/logger';

import { timezonesModule } from './timezone';
import { exampleModule } from './example';
import { ResourcesSrvGrpcClient , IdentitySrvGrpcClient} from '@restorecommerce/rc-grpc-clients';

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
    ...cfg.facade,
    env: cfg.env,
    logger,
  })
    .useModule(identityModule({
      client: cfg.identity.client,
      oidc: {
        client_id: 'test_id',
        client_secret: 'test_secret',
        issuer: 'http://localhost:5000',
        redirect_uris: ['http://localhost:5000/session'],
        // redirect_uris: ['http://localhost:5000/session', 'https://oauth.pstmn.io/v1/callback'],
        jwks: {
          keys: []
        },
        cookies: {
          keys: ['test']
        }
      }
    }))
    .useModule(timezonesModule({timezoneService: resourcesClient.timezone}))
    .useModule(exampleModule(cfg.example))
    .useMiddleware(reqResLogger({ logger }));
};

export const facade = createTestFacade();
export type TestFacadeContext = FacadeContext<typeof facade>;
