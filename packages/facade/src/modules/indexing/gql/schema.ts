import { registerTypings, subServices } from "./types";
import { generateSubServiceSchemas, SubSpaceServiceConfig } from "../../../gql/protos";
import { namespace } from "../interfaces";

registerTypings();

export const schema = (cfg: SubSpaceServiceConfig) => generateSubServiceSchemas(subServices, cfg, namespace, 'Indexing');
