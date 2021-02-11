import { registerTypings, subServices } from "./types";
import { generateSubServiceSchemas } from "../../../gql/protos";
import { namespace, FulfillmentServiceConfig } from "../interfaces";

registerTypings();

export const schema = (cfg: FulfillmentServiceConfig) => generateSubServiceSchemas(subServices, cfg, namespace, 'Fulfillment');
