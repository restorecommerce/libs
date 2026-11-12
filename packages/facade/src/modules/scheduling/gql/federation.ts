import { schema } from './schema.js';
import { namespace, type SchedulingServiceConfig } from '../interfaces.js';
import { buildFederatedSubscriptionSchema } from '../../../gql/index.js';
import { subServices } from './types.js';

export const FederatedSchedulingSchema = (cfg: SchedulingServiceConfig) => buildFederatedSubscriptionSchema(subServices, cfg, namespace, schema(cfg));
