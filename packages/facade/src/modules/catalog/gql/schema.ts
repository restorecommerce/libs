import { registerTypings, subServices } from "./types";
import { generateSubServiceSchemas } from "../../../gql/protos";
import { namespace, CatalogServiceConfig } from "../interfaces";

registerTypings();

export const schema = (cfg: CatalogServiceConfig) => generateSubServiceSchemas(subServices, cfg, namespace, 'Catalog');
