import {
  GraphQLObjectType, GraphQLList
} from 'graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { ErrorType } from './ErrorType';

export const SearchResultType = new GraphQLObjectType({
  name: 'SearchResultType',
  description: 'Result of a full text search',
  fields: () => ({
    data: {
      type: new GraphQLList(GraphQLJSON),
      description: 'Indexed items',
    },
    error: {
      type: ErrorType
    }
  }),
});
