import { registerTypings, subServices } from './types.js';
import { generateSubServiceSchemas,  } from '../../../gql/protos/index.js';
import { namespace, type OstorageServiceConfig } from '../interfaces.js';

registerTypings();

export const schema = (cfg: OstorageServiceConfig) => generateSubServiceSchemas(subServices, cfg, namespace, 'Ostorage');
