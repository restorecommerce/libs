import { registerTypings, subServices } from './types.js';
import { generateSubServiceSchemas } from '../../../gql/protos/index.js';
import { namespace, type PaymentServiceConfig } from '../interfaces.js';

registerTypings();

export const schema = (cfg: PaymentServiceConfig) => generateSubServiceSchemas(subServices, cfg, namespace, 'Payment');
