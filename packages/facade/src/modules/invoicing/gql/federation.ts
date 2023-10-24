import { schema } from './schema.js';
import { namespace, type InvoicingServiceConfig } from '../interfaces.js';
import { buildFederatedSubscriptionSchema } from '../../../gql/protos/index.js';
import { subServices } from './types.js';

export const FederatedInvoicingSchema = (cfg: InvoicingServiceConfig) => buildFederatedSubscriptionSchema(subServices, cfg, namespace, schema(cfg));
