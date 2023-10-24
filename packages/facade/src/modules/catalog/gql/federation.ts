import { schema } from './schema.js';
import { type CatalogServiceConfig, namespace } from '../interfaces.js';
import { buildFederatedSubscriptionSchema } from '../../../gql/protos/index.js';
import { subServices } from './types.js';

export const FederatedCatalogSchema = (cfg: CatalogServiceConfig) => buildFederatedSubscriptionSchema(subServices, cfg, namespace, schema(cfg));
