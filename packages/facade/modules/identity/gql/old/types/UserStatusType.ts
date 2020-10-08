import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';

export default new GraphQLObjectType({
  name: 'UserStatus',
  description: 'Objects with user status for importing users',
  fields: () => ({
    userStatus: {
      type: new GraphQLList(GraphQLString),
      resolve: ({ userStatus }) => userStatus
    },
  }),
});
