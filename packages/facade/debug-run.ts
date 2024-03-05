import { createServiceConfig } from '@restorecommerce/service-config';
import { createLogger } from '@restorecommerce/logger';
import {
  createFacade,
  reqResLogger,
  resourceModule,
  identityModule,
  accessControlModule,
  fulfillmentModule,
  catalogModule,
  indexingModule,
  invoicingModule,
  notificationModule,
  orderingModule,
  ostorageModule,
  paymentModule,
  schedulingModule
} from './src/index.js';
import { join, dirname } from 'node:path';
import * as url from 'node:url';

const CONFIG_PATH = dirname(url.fileURLToPath(import.meta.url));
import jwks from './tests/jwks.json' assert { type: 'json' };

const createTestFacade = () => {
  const serviceConfig = createServiceConfig(join(CONFIG_PATH, 'tests'));

  const logger = createLogger(serviceConfig.get('logger'));

  return createFacade({
    ...serviceConfig.get('facade'),
    env: serviceConfig.get('NODE_ENV'),
    logger,
  })
    .useModule(identityModule({
      identitySrvClientConfig: serviceConfig.get('identity').client,
      config: serviceConfig.get('identity'),
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
      },
      oauth: true,
      apiKey: 'api_key'
    }))
    .useModule(resourceModule({config: serviceConfig.get('master_data')}))
    .useModule(accessControlModule({config: serviceConfig.get('access_control')}))
    .useModule(fulfillmentModule({config: serviceConfig.get('fulfillment')}))
    .useModule(catalogModule({config: serviceConfig.get('catalog')}))
    .useModule(indexingModule({config: serviceConfig.get('indexing')}))
    .useModule(invoicingModule({config: serviceConfig.get('invoicing')}))
    .useModule(notificationModule({config: serviceConfig.get('notification')}))
    .useModule(orderingModule({config: serviceConfig.get('ordering')}))
    .useModule(ostorageModule({config: serviceConfig.get('ostorage')}))
    .useModule(paymentModule({config: serviceConfig.get('payment')}))
    .useModule(schedulingModule({config: serviceConfig.get('scheduling')}))
    .useMiddleware(reqResLogger({logger}));
};

const facade = createTestFacade();

facade.start();

