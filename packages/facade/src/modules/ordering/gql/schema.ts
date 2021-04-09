import { registerTypings, subServices } from "./types";
import { generateSubServiceSchemas } from "../../../gql/protos";
import { namespace, OrderingServiceConfig } from "../interfaces";

registerTypings();

export const schema = (cfg: OrderingServiceConfig) => generateSubServiceSchemas(subServices, cfg, namespace, 'Ordering');
