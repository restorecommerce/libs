import  { createFacade, identityModule, reqResLogger } from '@restorecommerce/facade';
import { createServiceConfig } from '@restorecommerce/service-config';
import { createLogger } from '@restorecommerce/logger';

import { exampleModule } from './example-module';

const startServer = async () => {
  const cfg = createServiceConfig(process.cwd());

  const loggerCfg = cfg.get('logger');

  const logger = createLogger(loggerCfg);

  try {
    const env = cfg.get('NODE_ENV');
    const facadeConfig = cfg.get('facade');
    const identityConfig = cfg.get('identity');

    const facade = createFacade({
      ...facadeConfig,
      logger,
      env
    })
      .useModule(identityModule(identityConfig))
      .useModule(exampleModule({ message: 'foo' }))
      .useMiddleware(reqResLogger({ logger}));

    await facade.start();
  } catch (err) {
    logger.debug('Error starting application', err);
  }
};

startServer();
