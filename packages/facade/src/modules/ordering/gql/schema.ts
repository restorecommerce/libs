import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { registerTypings } from "./types";
import { getGQLSchemas } from "../../../gql/protos";
import { metaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/order";

registerTypings();

export const OrderingQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all queries',
  fields: {
    // TODO Whitelist/Blacklist based on config
    // TODO Separate to Mutations and Queries
    ...getGQLSchemas(metaService),
  }
});

export const schema = new GraphQLSchema({
  query: OrderingQueryType,
});
