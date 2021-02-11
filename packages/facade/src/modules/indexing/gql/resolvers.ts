import { Resolvers } from './schema.generated';
import { namespace, IndexingContext } from "../interfaces";
import { getAndGenerateResolvers, ServiceConfig, } from "../../../gql/protos";
import { protoMetadata } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/search";
import { IndexingSrvGrpcClient } from "../grpc";

export const resolvers: (cfg: ServiceConfig) => Resolvers = (cfg: ServiceConfig) => {
  return getAndGenerateResolvers<IndexingSrvGrpcClient, IndexingContext>(protoMetadata.fileDescriptor.service![0], namespace, cfg, ['Search'], undefined, 'search');
}
