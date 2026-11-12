import { schema } from './schema.js';
import { type FulfillmentServiceConfig, namespace } from '../interfaces.js';
import { buildFederatedSubscriptionSchema } from '../../../gql/index.js';
import { subServices } from './types.js';

export const FederatedFulfillmentSchema = (cfg: FulfillmentServiceConfig) => buildFederatedSubscriptionSchema(subServices, cfg, namespace, schema(cfg));
