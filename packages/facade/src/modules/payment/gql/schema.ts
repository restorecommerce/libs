import { registerTypings, subServices } from "./types";
import { generateSubServiceSchemas } from "../../../gql/protos";
import { namespace, PaymentServiceConfig } from "../interfaces";

registerTypings();

export const schema = (cfg: PaymentServiceConfig) => generateSubServiceSchemas(subServices, cfg, namespace, 'Payment');
