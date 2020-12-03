import { buildFederatedSchema, printSchema  } from "@apollo/federation";
import gqlTag from 'graphql-tag';

import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { ExampleInputType, ExampleType } from "./types";

export const IdentityQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all queries',
  fields: {
    identity: {
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
  query: IdentityQueryType,
});
