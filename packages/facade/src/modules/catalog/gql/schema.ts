import { registerTypings, subServices } from './types.js';
import { generateSubServiceSchemas } from '../../../gql/protos/index.js';
import { namespace, type CatalogServiceConfig } from '../interfaces.js';

registerTypings();

export const schema = (cfg: CatalogServiceConfig) => generateSubServiceSchemas(subServices, cfg, namespace, 'Catalog');
