import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { ExampleInputType, ExampleType } from "./types";

export const ExampleQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all queries',
  fields: {
    example: {
      type: ExampleType,
      args: {
        input: {
          type: ExampleInputType
        }
      }
    },
  }
});

export const schema = new GraphQLSchema({
  query: ExampleQueryType,
});
