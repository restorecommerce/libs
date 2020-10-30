
# @restorecommerce/facade

```ts
import { createFacade } from '@restorecommerce/facade';
import { exampleModule } from './example-module';

const env = cfg.get('NODE_ENV');
const facadeConfig = cfg.get('facade');
const identityConfig = cfg.get('identity');

const facade: AppFacade = createFacade({
  ...facadeConfig,
  logger,
  env
})
.addModule(exampleModule, { message: 'foo' });

facade.start();
```

## Included 3rd party koa middlewares

- [bodyParser]()
- [kcors]()
- [helmet]()

## Provided koa middlewares

- [reqResLogger](src/middlewares/req-res-logger)

## Provided modules

- [identity](src/modules/identity)
