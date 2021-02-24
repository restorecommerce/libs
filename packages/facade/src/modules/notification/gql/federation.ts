import { gql } from "apollo-server-koa";
import { buildFederatedSchema, printSchema } from "@apollo/federation";
import { schema } from "./schema";
import { getAndGenerateResolvers, ServiceConfig } from "../../../gql/protos";
import { NotificationSrvGrpcClient } from "../grpc";
import { namespace, NotificationContext } from "../interfaces";
import { protoMetadata } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/notification";

// TODO There is currently no way of building a federated schema from GraphQLSchema Object
// See https://github.com/apollographql/apollo-server/pull/4310
export const FederatedNotificationSchema = (cfg: ServiceConfig) => buildFederatedSchema({
  typeDefs: gql(printSchema(schema(cfg))),
  resolvers: getAndGenerateResolvers<NotificationSrvGrpcClient, NotificationContext>(protoMetadata.fileDescriptor.service![0], namespace, cfg, []) as any
});
