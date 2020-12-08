import { gql } from "apollo-server-koa";
import { buildFederatedSchema, printSchema } from "@apollo/federation";
import { resolvers } from "./resolvers";
import { schema } from "./schema";
import { AccessControlServiceConfig } from "../interfaces";

// TODO There is currently no way of building a federated schema from GraphQLSchema Object
// See https://github.com/apollographql/apollo-server/pull/4310
export const FederatedAccessControlSchema = (cfg: AccessControlServiceConfig) => buildFederatedSchema({
  typeDefs: gql(printSchema(schema(cfg))),
  resolvers: resolvers(cfg)
});
