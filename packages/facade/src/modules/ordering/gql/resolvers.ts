import { Resolvers } from './schema.generated';
import { namespace, OrderingContext } from "../interfaces";
import { getAndGenerateResolvers, ServiceConfig, } from "../../../gql/protos";
import {
  metadata as metaPackageIoRestorecommerceOrder,
  metaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/order";
import { OrderingSrvGrpcClient } from "../grpc";

export const resolvers: (cfg: ServiceConfig) => Resolvers = (cfg: ServiceConfig) => {
  return getAndGenerateResolvers<OrderingSrvGrpcClient, OrderingContext>(metaService, metaPackageIoRestorecommerceOrder, namespace, cfg, ['Read']);
}
