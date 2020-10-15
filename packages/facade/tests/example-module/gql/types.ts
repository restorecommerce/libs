import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInputObjectType } from 'graphql';


export const ExampleType = new GraphQLObjectType({
  name: 'ExampleType',
  description: 'An Example',
  fields: {
    message: {
      type: GraphQLNonNull(GraphQLString)
    },
  },
});


export const ExampleInputType = new GraphQLInputObjectType({
  name: 'ExampleInputType',
  description: 'An Example input',
  fields: {
    echo: {
      type: GraphQLString
    },
  },
});
