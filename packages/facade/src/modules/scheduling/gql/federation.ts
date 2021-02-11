import { gql } from "apollo-server-koa";
import { buildFederatedSchema, printSchema } from "@apollo/federation";
import { schema } from "./schema";
import { getAndGenerateResolvers, ServiceConfig } from "../../../gql/protos";
import { SchedulingSrvGrpcClient } from "../grpc";
import { namespace, SchedulingContext } from "../interfaces";
import { protoMetadata } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/job";

// TODO There is currently no way of building a federated schema from GraphQLSchema Object
// See https://github.com/apollographql/apollo-server/pull/4310
export const FederatedSchedulingSchema = (cfg: ServiceConfig) => buildFederatedSchema({
  typeDefs: gql(printSchema(schema(cfg))),
  resolvers: getAndGenerateResolvers<SchedulingSrvGrpcClient, SchedulingContext>(protoMetadata.fileDescriptor.service![0], namespace, cfg, ['Read'], undefined, 'job') as any
});
