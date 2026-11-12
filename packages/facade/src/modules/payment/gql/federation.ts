import { schema } from './schema.js';
import { buildFederatedSubscriptionSchema } from '../../../gql/index.js';
import { namespace, type PaymentServiceConfig } from '../interfaces.js';
import { subServices } from './types.js';

export const FederatedPaymentSchema = (cfg: PaymentServiceConfig) => buildFederatedSubscriptionSchema(subServices, cfg, namespace, schema(cfg));
