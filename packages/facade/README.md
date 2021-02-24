
# @restorecommerce/facade

```ts
import { createLogger } from '@restorecommerce/logger';
import { createFacade } from '@restorecommerce/facade';
import { exampleModule } from './example-module';

const logger = createLogger(cfg.logger);
const env = process.env.NODE_ENV;

const facade = createFacade({
  port: 5000,
  logger,
  env
}).useModule(exampleModule, { message: 'foo' });

facade.start();
```

## Included 3rd party koa middlewares

- [bodyParser]()
- [kcors]()
- [helmet]()

## Provided koa middlewares

- [reqResLogger](src/middlewares/req-res-logger)
