
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

## Metadata Passing

The facade packages and sends upstream all headers as well as the origin address in the GRPC metadata.

The headers are in a JSON serialized format.

Example:
```js
Metadata({
  'headers': [
      '{"host":"192.168.1.103:5000","user-agent":"Mozilla/5.0 (X11; Linux x86_64; rv:120.0) Gecko/20100101 Firefox/120.0","accept":"*/*","accept-language":"en-US,en;q=0.5","accept-encoding":"gzip, deflate","referer":"http://192.168.1.103:5000/graphql","content-type":"application/json","content-length":"540","origin":"http://192.168.1.103:5000","connection":"keep-alive"}'
  ],
  'origin-ip': [ '192.168.1.103' ]
})
```
