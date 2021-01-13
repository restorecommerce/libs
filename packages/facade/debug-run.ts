import { createServiceConfig } from '@restorecommerce/service-config';
import { createLogger } from '@restorecommerce/logger';
import {
  createFacade,
  resourceModule,
  reqResLogger,
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
  })/*.useModule(identityModule({
    identitySrvClientConfig: serviceConfig.get('identity').client,
    oidc: {
      // remoteTokenService: new TokenServiceStub(),
      client_id: 'TEST_CLIENT_ID',
      client_secret: 'TEST_CLIENT_SECRET',
      cookies: {
        keys: ['TEST_COOKIE_SECRET']
      },
      issuer: 'http://localhost:5000',
      redirect_uris: [
        'http://localhost:5000/session',
        'http://localhost:4200'
      ],
      post_logout_redirect_uris: [
        'http://localhost:4200'
      ],
      jwks,
    }
  }))*/
    .useModule(resourceModule({config: serviceConfig.get('resource')}))
    .useMiddleware(reqResLogger({logger}));
}

const facade = createTestFacade();

facade.start();
