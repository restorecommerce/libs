import { Resolvers } from './schema.generated';
import { namespace, OrderingContext } from "../interfaces";
import { getAndGenerateResolvers, ServiceConfig, } from "../../../gql/protos";
import { protoMetadata } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/order";
import { OrderingSrvGrpcClient } from "../grpc";

export const resolvers: (cfg: ServiceConfig) => Resolvers = (cfg: ServiceConfig) => {
  return getAndGenerateResolvers<OrderingSrvGrpcClient, OrderingContext>(protoMetadata.fileDescriptor.service![0], namespace, cfg, ['Read']);
}
