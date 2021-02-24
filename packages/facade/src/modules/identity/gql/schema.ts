import { registerTypings, subServices } from "./types";
import { generateSubServiceSchemas } from "../../../gql/protos";
import { namespace, IdentityServiceConfig } from "../interfaces";

registerTypings();

export const schema = (cfg: IdentityServiceConfig) => generateSubServiceSchemas(subServices, cfg, namespace, 'Identity');
