import { registerTypings } from "./types";
import { getAndGenerateSchema, ServiceConfig } from "../../../gql/protos";
import { protoMetadata } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/search";
import { namespace } from "../interfaces";

registerTypings();

export const schema = (cfg: ServiceConfig) => getAndGenerateSchema(protoMetadata.fileDescriptor.service![0], namespace, 'Indexing', cfg, ['Search']);
