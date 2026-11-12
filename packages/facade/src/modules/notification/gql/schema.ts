import { registerTypings, subServices } from './types.js';
import { generateSubServiceSchemas } from '../../../gql/index.js';
import { namespace, type NotificationServiceConfig } from '../interfaces.js';

registerTypings();

export const schema = (cfg: NotificationServiceConfig) => generateSubServiceSchemas(subServices, cfg, namespace, 'Notification');
