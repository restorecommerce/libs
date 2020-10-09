import {
  GraphQLInputObjectType, GraphQLString
} from 'graphql';

export const ScopeInputType = new GraphQLInputObjectType({
  name: 'ScopeInputType',
  description: 'A role scope',
  fields: () => ({
    entity: {
      type: GraphQLString,
    },
    instance: {
      type: GraphQLString,
    }
  }),
});
