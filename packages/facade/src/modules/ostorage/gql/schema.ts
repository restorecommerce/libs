import { registerTypings } from "./types";
import { getAndGenerateSchema, ServiceConfig } from "../../../gql/protos";
import { metaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/ostorage";
import { namespace } from "../interfaces";

registerTypings();

export const schema = (cfg: ServiceConfig) => getAndGenerateSchema(metaService, namespace, 'Ostorage', cfg, ['Get', 'List']);
