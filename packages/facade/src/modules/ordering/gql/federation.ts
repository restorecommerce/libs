import { schema } from './schema.js';
import { namespace, type OrderingServiceConfig } from '../interfaces.js';
import { buildFederatedSubscriptionSchema } from '../../../gql/protos/index.js';
import { subServices } from './types.js';

export const FederatedOrderingSchema = (cfg: OrderingServiceConfig) => buildFederatedSubscriptionSchema(subServices, cfg, namespace, schema(cfg));
