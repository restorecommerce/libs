import { schema } from './schema.js';
import { type IdentityServiceConfig, namespace } from '../interfaces.js';
import { buildFederatedSubscriptionSchema } from '../../../gql/protos/index.js';
import { subServices } from './types.js';

export const FederatedResourceSchema = (cfg: IdentityServiceConfig) => buildFederatedSubscriptionSchema(subServices, cfg, namespace, schema(cfg));
