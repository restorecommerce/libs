import { registerTypings, subServices } from "./types";
import { generateSubServiceSchemas, } from "../../../gql/protos";
import { namespace, AccessControlServiceConfig } from "../interfaces";

registerTypings();

export const schema = (cfg: AccessControlServiceConfig) => generateSubServiceSchemas(subServices, cfg, namespace, 'AccessControl');

