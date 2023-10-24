import { schema } from './schema.js';
import { namespace, type NotificationServiceConfig } from '../interfaces.js';
import { buildFederatedSubscriptionSchema } from '../../../gql/protos/index.js';
import { subServices } from './types.js';

export const FederatedNotificationSchema = (cfg: NotificationServiceConfig) => buildFederatedSubscriptionSchema(subServices, cfg, namespace, schema(cfg));
