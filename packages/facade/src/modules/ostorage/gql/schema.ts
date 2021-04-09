import { registerTypings, subServices } from "./types";
import { generateSubServiceSchemas,  } from "../../../gql/protos";
import { namespace, OstorageServiceConfig } from "../interfaces";

registerTypings();

export const schema = (cfg: OstorageServiceConfig) => generateSubServiceSchemas(subServices, cfg, namespace, 'Ostorage');
