import { Resolvers } from './schema.generated';
import { namespace, FulfillmentContext } from "../interfaces";
import { getAndGenerateResolvers, ServiceConfig, } from "../../../gql/protos";
import {
  metaPackageIoRestorecommerceFulfillment,
  metaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/fulfillment";
import { FulfillmentSrvGrpcClient } from "../grpc";

export const resolvers: (cfg: ServiceConfig) => Resolvers = (cfg: ServiceConfig) => {
  return getAndGenerateResolvers<FulfillmentSrvGrpcClient, FulfillmentContext>(metaService, metaPackageIoRestorecommerceFulfillment, namespace, cfg, ['getAllFulfillments', 'getLabels', 'trackFulfillment']);
}
