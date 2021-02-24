import { buildFederatedSchema } from "@apollo/federation";
import { gql } from "apollo-server-koa";
import { printSchema } from "graphql";
import { resolvers } from "./resolvers";
import { schema } from "./schema";

// TODO There is currently no way of building a federated schema from GraphQLSchema Object
// See https://github.com/apollographql/apollo-server/pull/4310
export const FederatedExampleSchema = buildFederatedSchema({
  typeDefs: gql(printSchema(schema)),
  resolvers
});
