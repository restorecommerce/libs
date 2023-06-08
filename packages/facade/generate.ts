import { generateSchemaTypings } from './src_codegen/index.js';
import { schema as facadeStatusSchema } from './src/modules/facade-status/gql/schema.js';

import { schema as orderingSchema } from './src/modules/ordering/gql/schema.js';
import { namespace as orderingNamespace } from './src/modules/ordering/interfaces.js';

import { schema as paymentSchema } from './src/modules/payment/gql/schema.js';
import { namespace as paymentNamespace } from './src/modules/payment/interfaces.js';

import { schema as resourceSchema } from './src/modules/resource/gql/schema.js';
import { namespace as resourceNamespace } from './src/modules/resource/interfaces.js';

import { schema as catalogSchema } from './src/modules/catalog/gql/schema.js';
import { namespace as catalogNamespace } from './src/modules/catalog/interfaces.js';

import { schema as invoicingSchema } from './src/modules/invoicing/gql/schema.js';
import { namespace as invoicingNamespace } from './src/modules/invoicing/interfaces.js';

import { schema as fulfillmentSchema } from './src/modules/fulfillment/gql/schema.js';
import { namespace as fulfillmentNamespace } from './src/modules/fulfillment/interfaces.js';

import { schema as indexingSchema } from './src/modules/indexing/gql/schema.js';
import { namespace as indexingNamespace } from './src/modules/indexing/interfaces.js';

import { schema as schedulingSchema } from './src/modules/scheduling/gql/schema.js';
import { namespace as schedulingNamespace } from './src/modules/scheduling/interfaces.js';

import { schema as notificationSchema } from './src/modules/notification/gql/schema.js';
import { namespace as notificationNamespace } from './src/modules/notification/interfaces.js';

import { schema as accessControlSchema } from './src/modules/access-control/gql/schema.js';
import { namespace as accessControlNamespace } from './src/modules/access-control/interfaces.js';

import { schema as ostorageSchema } from './src/modules/ostorage/gql/schema.js';
import { namespace as ostorageNamespace } from './src/modules/ostorage/interfaces.js';

import { schema as identitySchema } from './src/modules/identity/gql/schema.js';
import { namespace as identityNamespace } from './src/modules/identity/interfaces.js';

import { createServiceConfig } from '@restorecommerce/service-config';
import { join } from 'node:path';
import { setUseSubscriptions } from './src/gql/protos/utils.js';

// TODO Configurable
const cfg = createServiceConfig(join(process.cwd(), 'tests'));

setUseSubscriptions(!!cfg.get('facade:kafka'));

generateSchemaTypings({
  schema: facadeStatusSchema,
  outputFile: './src/modules/facade-status/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces.js#FacadeStatusContext'
  }
});

generateSchemaTypings({
  schema: orderingSchema(cfg.get(orderingNamespace)),
  outputFile: './src/modules/ordering/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces.js#OrderingContext'
  }
});

generateSchemaTypings({
  schema: paymentSchema(cfg.get(paymentNamespace)),
  outputFile: './src/modules/payment/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces.js#PaymentContext'
  }
});

generateSchemaTypings({
  schema: resourceSchema(cfg.get(resourceNamespace)),
  outputFile: './src/modules/resource/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces.js#ResourceContext'
  }
});

generateSchemaTypings({
  schema: catalogSchema(cfg.get(catalogNamespace)),
  outputFile: './src/modules/catalog/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces.js#CatalogContext'
  }
});

generateSchemaTypings({
  schema: invoicingSchema(cfg.get(invoicingNamespace)),
  outputFile: './src/modules/invoicing/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces.js#InvoicingContext'
  }
});

generateSchemaTypings({
  schema: fulfillmentSchema(cfg.get(fulfillmentNamespace)),
  outputFile: './src/modules/fulfillment/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces.js#FulfillmentContext'
  }
});

generateSchemaTypings({
  schema: indexingSchema(cfg.get(indexingNamespace)),
  outputFile: './src/modules/indexing/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces.js#IndexingContext'
  }
});

generateSchemaTypings({
  schema: schedulingSchema(cfg.get(schedulingNamespace)),
  outputFile: './src/modules/scheduling/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces.js#SchedulingContext'
  }
});

generateSchemaTypings({
  schema: notificationSchema(cfg.get(notificationNamespace)),
  outputFile: './src/modules/notification/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces.js#NotificationContext'
  }
});

generateSchemaTypings({
  schema: accessControlSchema(cfg.get(accessControlNamespace)),
  outputFile: './src/modules/access-control/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces.js#AccessControlContext'
  }
});

generateSchemaTypings({
  schema: ostorageSchema(cfg.get(ostorageNamespace)),
  outputFile: './src/modules/ostorage/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces.js#OstorageContext'
  }
});

generateSchemaTypings({
  schema: identitySchema(cfg.get(identityNamespace)),
  outputFile: './src/modules/identity/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces.js#IdentityContext'
  }
});
