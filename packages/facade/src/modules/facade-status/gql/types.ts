import { GraphQLObjectType, GraphQLNonNull, GraphQLBoolean } from 'graphql';


export const FacadeStatusType = new GraphQLObjectType({
  name: 'FacadeStatusType',
  description: 'The facade status',
  fields: {
    running: {
      type: GraphQLNonNull(GraphQLBoolean)
    },
  },
});
