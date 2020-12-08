import { Resolvers } from './schema.generated';
import { namespace, PaymentContext } from "../interfaces";
import { getAndGenerateResolvers, ServiceConfig, } from "../../../gql/protos";
import {
  metaPackageIoRestorecommercePayment,
  metaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/payment";
import { PaymentSrvGrpcClient } from "../grpc";

export const resolvers: (cfg: ServiceConfig) => Resolvers = (cfg: ServiceConfig) => {
  return getAndGenerateResolvers<PaymentSrvGrpcClient, PaymentContext>(metaService, metaPackageIoRestorecommercePayment, namespace, cfg, []);
}
