import { registerTypings, subServices } from './types.js';
import { generateSubServiceSchemas } from '../../../gql/protos/index.js';
import { namespace, type OrderingServiceConfig } from '../interfaces.js';

registerTypings();

export const schema = (cfg: OrderingServiceConfig) => generateSubServiceSchemas(subServices, cfg, namespace, 'Ordering');
