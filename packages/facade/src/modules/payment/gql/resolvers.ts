import { Resolvers } from './schema.generated';
import { namespace, PaymentContext } from "../interfaces";
import { getAndGenerateResolvers, } from "../../../gql/protos";
import {
  metaPackageIoRestorecommercePayment,
  metaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/payment";
import { PaymentSrvGrpcClient } from "../grpc";

export const resolvers: Resolvers = getAndGenerateResolvers<PaymentSrvGrpcClient, PaymentContext>(metaService, metaPackageIoRestorecommercePayment, namespace);
