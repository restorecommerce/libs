import { registerTypings, subServices } from "./types";
import { generateSubServiceSchemas } from "../../../gql/protos";
import { namespace, ResourceServiceConfig } from "../interfaces";

registerTypings();

export const schema = (cfg: ResourceServiceConfig) => generateSubServiceSchemas(subServices, cfg, namespace, 'Resource');
