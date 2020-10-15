import * as path from 'path';
import  { createFacade, identityModule, reqResLogger } from '../src/index';
import { createServiceConfig } from '@restorecommerce/service-config';
import { createLogger } from '@restorecommerce/logger';

import { exampleModule } from './example-module';

const CONFIG_PATH = __dirname;

export function createTestFacade() {
  const serviceConfig = createServiceConfig(CONFIG_PATH);

  const cfg = {
    env: serviceConfig.get('NODE_ENV'),
    logger: serviceConfig.get('logger'),
    facade: serviceConfig.get('facade'),
    identity: serviceConfig.get('identity'),
    example: { message: 'foo' }
  };

  const logger = createLogger(cfg.logger);

  return createFacade({
    ...cfg.facade,
    env: cfg.env,
    logger,
  }).useModule(identityModule(cfg.identity))
    .useModule(exampleModule(cfg.example))
    .useMiddleware(reqResLogger({ logger }));
};
