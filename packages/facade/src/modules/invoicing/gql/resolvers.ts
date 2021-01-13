import { Resolvers } from './schema.generated';
import { namespace, InvoicingContext } from "../interfaces";
import { getAndGenerateResolvers, ServiceConfig, } from "../../../gql/protos";
import {
  metadata as metaPackageIoRestorecommerceInvoice,
  metaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/invoice";
import { InvoicingSrvGrpcClient } from "../grpc";

export const resolvers: (cfg: ServiceConfig) => Resolvers = (cfg: ServiceConfig) => {
  return getAndGenerateResolvers<InvoicingSrvGrpcClient, InvoicingContext>(metaService, metaPackageIoRestorecommerceInvoice, namespace, cfg, ['Read'], undefined, 'invoice');
}
