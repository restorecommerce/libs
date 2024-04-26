import { schema } from './schema.js';
import { namespace, type PdfRenderingServiceConfig } from '../interfaces.js';
import { buildFederatedSubscriptionSchema } from '../../../gql/protos/index.js';
import { subServices } from './types.js';

export const FederatedPdfRenderingSchema = (cfg: PdfRenderingServiceConfig) => buildFederatedSubscriptionSchema(subServices, cfg, namespace, schema(cfg));
