import { registerTypings, subServices } from './types.js';
import { generateSubServiceSchemas } from '../../../gql/index.js';
import { namespace, type InvoicingServiceConfig } from '../interfaces.js';

registerTypings();

export const schema = (cfg: InvoicingServiceConfig) => generateSubServiceSchemas(subServices, cfg, namespace, 'Invoicing');
