import { schema } from './schema.js';
import { namespace, type ResourceServiceConfig } from '../interfaces.js';
import { buildFederatedSubscriptionSchema } from '../../../gql/protos/index.js';
import { subServices } from './types.js';

export const FederatedResourceSchema = (cfg: ResourceServiceConfig) => buildFederatedSubscriptionSchema(subServices, cfg, namespace, schema(cfg));
