import { registerTypings, subServices } from './types.js';
import { generateSubServiceSchemas } from '../../../gql/index.js';
import { namespace, type IdentityServiceConfig } from '../interfaces.js';

registerTypings();

export const schema = (cfg: IdentityServiceConfig) => generateSubServiceSchemas(subServices, cfg, namespace, 'Identity');
