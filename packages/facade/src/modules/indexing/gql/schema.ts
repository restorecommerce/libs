import { registerTypings, subServices } from './types.js';
import { generateSubServiceSchemas, type SubSpaceServiceConfig } from '../../../gql/protos/index.js';
import { namespace } from '../interfaces.js';

registerTypings();

export const schema = (cfg: SubSpaceServiceConfig) => generateSubServiceSchemas(subServices, cfg, namespace, 'Indexing');
