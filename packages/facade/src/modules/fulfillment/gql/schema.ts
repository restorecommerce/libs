import { registerTypings, subServices } from './types.js';
import { generateSubServiceSchemas } from '../../../gql/protos/index.js';
import { namespace, type FulfillmentServiceConfig } from '../interfaces.js';

registerTypings();

export const schema = (cfg: FulfillmentServiceConfig) => generateSubServiceSchemas(subServices, cfg, namespace, 'Fulfillment');
