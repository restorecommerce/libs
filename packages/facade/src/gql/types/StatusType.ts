import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInt } from 'graphql';

export const OperationStatusType = new GraphQLObjectType({
  name: 'StatusType',
  description: 'Objects with error returned for GraphQL operations',
  fields: () => ({
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

