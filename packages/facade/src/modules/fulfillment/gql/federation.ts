import { gql } from "apollo-server-koa";
import { buildSubgraphSchema } from "@apollo/federation";
import { schema } from "./schema";
import { FulfillmentServiceConfig, namespace } from "../interfaces";
import { generateSubServiceResolvers } from "../../../gql/protos";
import { subServices } from "./types";
import { printSchema } from "graphql";

// TODO There is currently no way of building a federated schema from GraphQLSchema Object
// See https://github.com/apollographql/apollo-server/pull/4310
export const FederatedFulfillmentSchema = (cfg: FulfillmentServiceConfig) => buildSubgraphSchema({
  typeDefs: gql(printSchema(schema(cfg))),
  resolvers: generateSubServiceResolvers(subServices, cfg, namespace)
});
