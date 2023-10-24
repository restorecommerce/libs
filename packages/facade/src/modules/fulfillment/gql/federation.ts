import { schema } from './schema.js';
import { type FulfillmentServiceConfig, namespace } from '../interfaces.js';
import { buildFederatedSubscriptionSchema } from '../../../gql/protos/index.js';
import { subServices } from './types.js';

export const FederatedFulfillmentSchema = (cfg: FulfillmentServiceConfig) => buildFederatedSubscriptionSchema(subServices, cfg, namespace, schema(cfg));
