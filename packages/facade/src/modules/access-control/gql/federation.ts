import { schema } from './schema.js';
import { type AccessControlServiceConfig, namespace } from '../interfaces.js';
import { buildFederatedSubscriptionSchema } from '../../../gql/protos/index.js';
import { subServices } from './types.js';

export const FederatedAccessControlSchema = (cfg: AccessControlServiceConfig) => buildFederatedSubscriptionSchema(subServices, cfg, namespace, schema(cfg));
