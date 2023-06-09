import { registerTypings, subServices } from './types.js';
import { generateSubServiceSchemas, } from '../../../gql/protos/index.js';
import { namespace, type AccessControlServiceConfig } from '../interfaces.js';

registerTypings();

export const schema = (cfg: AccessControlServiceConfig) => generateSubServiceSchemas(subServices, cfg, namespace, 'AccessControl');

