import { gql } from "apollo-server-koa";
import { buildSubgraphSchema } from "@apollo/federation";
import { schema } from "./schema";
import { AccessControlContext, AccessControlServiceConfig, namespace } from "../interfaces";
import { generateSubServiceResolvers } from "../../../gql/protos";
import { Resolvers } from "./schema.generated";
import { subServices } from "./types";
import { AccessControlSrvGrpcClient } from "../grpc";
import { printSchema } from "graphql";

// TODO There is currently no way of building a federated schema from GraphQLSchema Object
// See https://github.com/apollographql/apollo-server/pull/4310
export const FederatedAccessControlSchema = (cfg: AccessControlServiceConfig) => buildSubgraphSchema({
  typeDefs: gql(printSchema(schema(cfg))),
  resolvers: generateSubServiceResolvers<Resolvers, AccessControlSrvGrpcClient, AccessControlContext>(subServices, cfg, namespace)
});
