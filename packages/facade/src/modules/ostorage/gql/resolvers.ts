import { Resolvers } from './schema.generated';
import { namespace, OstorageContext } from "../interfaces";
import { getAndGenerateResolvers, ServiceConfig, } from "../../../gql/protos";
import { protoMetadata } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/ostorage";
import { OstorageSrvGrpcClient } from "../grpc";

export const resolvers: (cfg: ServiceConfig) => Resolvers = (cfg: ServiceConfig) => {
  return getAndGenerateResolvers<OstorageSrvGrpcClient, OstorageContext>(protoMetadata.fileDescriptor.service![0], namespace, cfg, ['Get', 'List']);
}
