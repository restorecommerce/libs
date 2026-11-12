import { schema } from './schema.js';
import { namespace, type ResourceServiceConfig } from '../interfaces.js';
import { buildFederatedSubscriptionSchema } from '../../../gql/index.js';
import { subServices } from './types.js';

export const FederatedResourceSchema = (cfg: ResourceServiceConfig) => buildFederatedSubscriptionSchema(subServices, cfg, namespace, schema(cfg));
