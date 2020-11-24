import { Resolvers } from './schema.generated';
import { namespace, OrderingContext } from "../interfaces";
import { getAndGenerateResolvers, } from "../../../gql/protos";
import {
  metaPackageIoRestorecommerceOrder,
  metaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/order";
import { OrderingSrvGrpcClient } from "../grpc";

export const resolvers: Resolvers = getAndGenerateResolvers<OrderingSrvGrpcClient, OrderingContext>(metaService, metaPackageIoRestorecommerceOrder, namespace);
