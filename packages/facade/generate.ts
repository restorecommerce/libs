import { generateSchemaTypings } from "./src_codegen/index";
import { schema as facadeStatusSchema } from "./src/modules/facade-status/gql/schema";
import { schema as exampleSchema } from "./tests/example/gql/schema";
import { schema as timezoneSchema } from "./tests/timezone/gql/schema";

import { schema as orderingSchema } from "./src/modules/ordering/gql/schema";
import { namespace as orderingNamespace } from "./src/modules/ordering/interfaces";

import { schema as paymentSchema } from "./src/modules/payment/gql/schema";
import { namespace as paymentNamespace } from "./src/modules/payment/interfaces";

import { schema as resourceSchema } from "./src/modules/resource/gql/schema";
import { namespace as resourceNamespace } from "./src/modules/resource/interfaces";

import { schema as catalogSchema } from "./src/modules/catalog/gql/schema";
import { namespace as catalogNamespace } from "./src/modules/catalog/interfaces";

import { schema as invoicingSchema } from "./src/modules/invoicing/gql/schema";
import { namespace as invoicingNamespace } from "./src/modules/invoicing/interfaces";

import { schema as fulfillmentSchema } from "./src/modules/fulfillment/gql/schema";
import { namespace as fulfillmentNamespace } from "./src/modules/fulfillment/interfaces";

import { schema as indexingSchema } from "./src/modules/indexing/gql/schema";
import { namespace as indexingNamespace } from "./src/modules/indexing/interfaces";

import { schema as schedulingSchema } from "./src/modules/scheduling/gql/schema";
import { namespace as schedulingNamespace } from "./src/modules/scheduling/interfaces";

import { schema as notificationSchema } from "./src/modules/notification/gql/schema";
import { namespace as notificationNamespace } from "./src/modules/notification/interfaces";

import { schema as accessControlSchema } from "./src/modules/access-control/gql/schema";
import { namespace as accessControlNamespace } from "./src/modules/access-control/interfaces";

import { schema as ostorageSchema } from "./src/modules/ostorage/gql/schema";
import { namespace as ostorageNamespace } from "./src/modules/ostorage/interfaces";

import { createServiceConfig } from "@restorecommerce/service-config";
import { join } from "path";

generateSchemaTypings({
  schema: facadeStatusSchema,
  outputFile: './src/modules/facade-status/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces#FacadeStatusContext'
  }
});

generateSchemaTypings({
  schema: exampleSchema,
  outputFile: './tests/example/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces#ExampleContext'
  }
});

generateSchemaTypings({
  schema: timezoneSchema,
  outputFile: './tests/timezone/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces#TimezoneContext'
  }
});

// TODO Configurable
const cfg = createServiceConfig(join(process.cwd(), 'tests'));

generateSchemaTypings({
  schema: orderingSchema(cfg.get(orderingNamespace)),
  outputFile: './src/modules/ordering/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces#OrderingContext'
  }
});

generateSchemaTypings({
  schema: paymentSchema(cfg.get(paymentNamespace)),
  outputFile: './src/modules/payment/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces#PaymentContext'
  }
});

generateSchemaTypings({
  schema: resourceSchema(cfg.get(resourceNamespace)),
  outputFile: './src/modules/resource/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces#ResourceContext'
  }
});

generateSchemaTypings({
  schema: catalogSchema(cfg.get(catalogNamespace)),
  outputFile: './src/modules/catalog/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces#CatalogContext'
  }
});

generateSchemaTypings({
  schema: invoicingSchema(cfg.get(invoicingNamespace)),
  outputFile: './src/modules/invoicing/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces#InvoicingContext'
  }
});

generateSchemaTypings({
  schema: fulfillmentSchema(cfg.get(fulfillmentNamespace)),
  outputFile: './src/modules/fulfillment/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces#FulfillmentContext'
  }
});

generateSchemaTypings({
  schema: indexingSchema(cfg.get(indexingNamespace)),
  outputFile: './src/modules/indexing/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces#IndexingContext'
  }
});

generateSchemaTypings({
  schema: schedulingSchema(cfg.get(schedulingNamespace)),
  outputFile: './src/modules/scheduling/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces#SchedulingContext'
  }
});

generateSchemaTypings({
  schema: notificationSchema(cfg.get(notificationNamespace)),
  outputFile: './src/modules/notification/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces#NotificationContext'
  }
});

generateSchemaTypings({
  schema: accessControlSchema(cfg.get(accessControlNamespace)),
  outputFile: './src/modules/access-control/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces#AccessControlContext'
  }
});

generateSchemaTypings({
  schema: ostorageSchema(cfg.get(ostorageNamespace)),
  outputFile: './src/modules/ostorage/gql/schema.generated.ts',
  typescriptResolvers: {
    contextType: '../interfaces#OstorageContext'
  }
});
