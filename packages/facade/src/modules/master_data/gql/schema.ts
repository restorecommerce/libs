import { registerTypings, subServices } from './types.js';
import { generateSubServiceSchemas } from '../../../gql/protos/index.js';
import { namespace, type ResourceServiceConfig } from '../interfaces.js';

registerTypings();

export const schema = (cfg: ResourceServiceConfig) => generateSubServiceSchemas(subServices, cfg, namespace, 'Resource');
