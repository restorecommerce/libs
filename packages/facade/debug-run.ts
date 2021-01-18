import { createServiceConfig } from '@restorecommerce/service-config';
import { createLogger } from '@restorecommerce/logger';
import {
  createFacade,
  reqResLogger,
  resourceModule,
  identityModule,
  accessControlModule
} from './src';
import { join } from 'path';

const CONFIG_PATH = __dirname;
const jwks = require('./tests/jwks.json');

function createTestFacade() {
  const serviceConfig = createServiceConfig(join(CONFIG_PATH, 'tests'));

  const logger = createLogger(serviceConfig.get('logger'));

  return createFacade({
    ...serviceConfig.get('facade'),
    env: serviceConfig.get('NODE_ENV'),
    logger,
  }).useModule(identityModule({
    identitySrvClientConfig: serviceConfig.get('identity').client,
    config: serviceConfig.get('identity')
  }))
    .useModule(resourceModule({config: serviceConfig.get('resource')}))
    .useModule(accessControlModule({config: serviceConfig.get('access_control')}))
    .useMiddleware(reqResLogger({logger}));
}

const facade = createTestFacade();

facade.start();
