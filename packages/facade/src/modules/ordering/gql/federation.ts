import { gql } from "apollo-server-koa";
import { buildFederatedSchema, printSchema } from "@apollo/federation";
import { schema } from "./schema";
import { namespace, OrderingServiceConfig } from "../interfaces";
import { generateSubServiceResolvers } from "../../../gql/protos/graphql";
import { subServices } from "./types";

// TODO There is currently no way of building a federated schema from GraphQLSchema Object
// See https://github.com/apollographql/apollo-server/pull/4310
export const FederatedOrderingSchema = (cfg: OrderingServiceConfig) => buildFederatedSchema({
  typeDefs: gql(printSchema(schema(cfg))),
  resolvers: generateSubServiceResolvers(subServices, cfg, namespace)
});
