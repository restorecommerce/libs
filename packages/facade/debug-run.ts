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
  })
    .useModule(identityModule({
      identitySrvClientConfig: serviceConfig.get('identity').client,
      config: serviceConfig.get('identity')
    }))
    .useModule(resourceModule({config: serviceConfig.get('resource')}))
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
}

const facade = createTestFacade();

facade.start();
