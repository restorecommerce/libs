import  { createFacade, identityModule, reqResLogger } from '@restorecommerce/facade';
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

    const facade = createFacade({
      ...facadeConfig,
      logger,
      env
    });
    facade.useMiddleware(reqResLogger({
      logger
    }));
    facade.useModule(identityModule, identityConfig)
    facade.useModule(exampleModule, { message: 'foo' });

    facade.koa.use(reqResLogger({
      logger
    }));

    await facade.start();
  } catch (err) {
    logger.error(err);
  }
};

startServer();
