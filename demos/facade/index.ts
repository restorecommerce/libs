import  { createFacade, identityModule, IdentityModule } from '@restorecommerce/facade';
import { createServiceConfig } from '@restorecommerce/service-config';
import { createLogger } from '@restorecommerce/logger';

import { AppFacade } from './interfaces';
import { exampleModule } from './example-module';

const startServer = async () => {
  const cfg = createServiceConfig(process.cwd());

  const loggerCfg = cfg.get('logger');


  const logger = createLogger(loggerCfg);

  try {
    const env = cfg.get('NODE_ENV');
    const facadeConfig = cfg.get('facade');
    const identityConfig = cfg.get('identity');

    const facade: AppFacade = createFacade({
      ...facadeConfig,
      logger,
      env
    })
    .addModule(identityModule, identityConfig)
    .addModule(exampleModule, { message: 'foo' });

    await facade.start();
  } catch (err) {
    logger.error(err);
  }
};

startServer();
