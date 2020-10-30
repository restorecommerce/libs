import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { OrderType } from "./types";

export const OrderingQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all queries',
  fields: {
    ordering: {
      type: OrderType!,
    },
  }
});

export const schema = new GraphQLSchema({
  query: OrderingQueryType,
});
