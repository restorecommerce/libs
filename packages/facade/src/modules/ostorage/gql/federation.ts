import { schema } from './schema.js';
import { buildFederatedSubscriptionSchema } from '../../../gql/index.js';
import { namespace, type OstorageServiceConfig } from '../interfaces.js';
import { subServices } from './types.js';

export const FederatedOstorageSchema = (cfg: OstorageServiceConfig) => buildFederatedSubscriptionSchema(subServices, cfg, namespace, schema(cfg));
