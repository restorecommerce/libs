import { registerTypings, subServices } from './types.js';
import { generateSubServiceSchemas,  } from '../../../gql/index.js';
import { namespace, type SchedulingServiceConfig } from '../interfaces.js';

registerTypings();

export const schema = (cfg: SchedulingServiceConfig) => generateSubServiceSchemas(subServices, cfg, namespace, 'Scheduling');
