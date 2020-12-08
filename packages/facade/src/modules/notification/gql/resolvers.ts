import { Resolvers } from './schema.generated';
import { namespace, NotificationContext } from "../interfaces";
import { getAndGenerateResolvers, ServiceConfig, } from "../../../gql/protos";
import {
  metaPackageIoRestorecommerceNotification,
  metaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/notification";
import { NotificationSrvGrpcClient } from "../grpc";

export const resolvers: (cfg: ServiceConfig) => Resolvers = (cfg: ServiceConfig) => {
  return getAndGenerateResolvers<NotificationSrvGrpcClient, NotificationContext>(metaService, metaPackageIoRestorecommerceNotification, namespace, cfg, []);
}
