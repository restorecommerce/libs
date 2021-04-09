import { registerTypings, subServices } from "./types";
import { generateSubServiceSchemas } from "../../../gql/protos";
import { namespace, InvoicingServiceConfig } from "../interfaces";

registerTypings();

export const schema = (cfg: InvoicingServiceConfig) => generateSubServiceSchemas(subServices, cfg, namespace, 'Invoicing');
