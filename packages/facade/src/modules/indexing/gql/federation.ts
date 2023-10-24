import { schema } from './schema.js';
import {
  buildFederatedSubscriptionSchema,
  type SubSpaceServiceConfig
} from '../../../gql/protos/index.js';
import { namespace } from '../interfaces.js';
import { subServices } from '../../access-control/gql/types.js';

export const FederatedIndexingSchema = (cfg: SubSpaceServiceConfig) => buildFederatedSubscriptionSchema(subServices, cfg, namespace, schema(cfg));
