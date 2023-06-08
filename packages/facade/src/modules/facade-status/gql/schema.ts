import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { FacadeStatusType } from './types.js';

export const FacadeStatusQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all queries',
  fields: {
    status: {
      type: FacadeStatusType
    },
  }
});

export const schema = new GraphQLSchema({
  query: FacadeStatusQueryType,
});
