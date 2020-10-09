import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';

export const ErrorType = new GraphQLObjectType({
  name: 'Error',
  description: 'Objects with error returned for GraphQL operations',
  fields: () => ({
    code: {
      // type: GraphQLString,
      type: GraphQLString,
      description: 'Error code',
      resolve: ({ code }) => code
    },
    message: {
      // type: GraphQLString,
      type: GraphQLString,
      description: 'Error message description',
      resolve: ({ message }) => message
    }
  }),
});

export const ErrorListType = new GraphQLObjectType({
  name: 'ErrorList',
  description: 'Objects with error returned for GraphQL operations',
  fields: () => ({
    code: {
      type: new GraphQLList(GraphQLString),
      description: 'Error code',
      resolve: ({ code }) => code
    },
    message: {
      type: new GraphQLList(GraphQLString),
      description: 'Error message description',
      resolve: ({ message }) => message
    }
  }),
});
