import  { createFacade, reqResLogger, identityModule } from '../src/index';
import { createServiceConfig } from '@restorecommerce/service-config';
import { createLogger } from '@restorecommerce/logger';

import { timezonesModule } from './timezone';
import { exampleModule } from './example';
import { ResourcesSrvGrpcClient , IdentitySrvGrpcClient} from '@restorecommerce/rc-grpc-clients';

const CONFIG_PATH = __dirname;

export function createTestFacade() {
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
      client: cfg.identity.client
    }))
    .useModule(timezonesModule({timezoneService: resourcesClient.timezone}))
    .useModule(exampleModule(cfg.example))
    .useMiddleware(reqResLogger({ logger }));
};
