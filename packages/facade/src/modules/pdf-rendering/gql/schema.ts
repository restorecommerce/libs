import { registerTypings, subServices } from './types.js';
import { generateSubServiceSchemas } from '../../../gql/index.js';
import { namespace, type PdfRenderingServiceConfig } from '../interfaces.js';

registerTypings();

export const schema = (cfg: PdfRenderingServiceConfig) => generateSubServiceSchemas(subServices, cfg, namespace, 'PdfRendering');
