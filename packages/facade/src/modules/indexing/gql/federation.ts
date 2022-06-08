import { gql } from "apollo-server-koa";
import { buildFederatedSchema } from "@apollo/federation";
import { schema } from "./schema";
import { getAndGenerateResolvers, ServiceConfig } from "../../../gql/protos";
import { IndexingSrvGrpcClient } from "../grpc";
import { IndexingContext, namespace } from "../interfaces";
import { protoMetadata } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/search";
import { printSchema } from "graphql";

// TODO There is currently no way of building a federated schema from GraphQLSchema Object
// See https://github.com/apollographql/apollo-server/pull/4310
export const FederatedIndexingSchema = (cfg: ServiceConfig) => buildFederatedSchema({
  typeDefs: gql(printSchema(schema(cfg))),
  resolvers: getAndGenerateResolvers<IndexingSrvGrpcClient, IndexingContext>(protoMetadata.fileDescriptor.service![0], namespace, cfg, protoMetadata, undefined, 'search') as any
});
