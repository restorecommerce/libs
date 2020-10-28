import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInt } from 'graphql';

export const StatusType = new GraphQLObjectType({
  name: 'StatusType',
  description: 'Objects with error returned for GraphQL operations',
  fields: () => ({
    key: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Status key',
    },
    code: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Status code',
    },
    message: {
      type: GraphQLString,
      description: 'Status message description',
    }
  }),
});

