import { Resolvers } from './schema.generated';
import { namespace, NotificationContext } from "../interfaces";
import { getAndGenerateResolvers, ServiceConfig, } from "../../../gql/protos";
import { protoMetadata } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/notification";
import { NotificationSrvGrpcClient } from "../grpc";

export const resolvers: (cfg: ServiceConfig) => Resolvers = (cfg: ServiceConfig) => {
  return getAndGenerateResolvers<NotificationSrvGrpcClient, NotificationContext>(protoMetadata.fileDescriptor.service![0], namespace, cfg, []);
}
