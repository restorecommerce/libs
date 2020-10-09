import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import { GraphQLJSON } from 'graphql-type-json';

export const CommandResponse = new GraphQLObjectType({
  name: 'outputCommandResponse',
  description: 'Command response from one microservice bound to one or more services',
  fields: () => ({
    services: {
      type: new GraphQLList(GraphQLString),
      description: 'List of services bound to the response\'s microservice'
    },
    response: {
      type: GraphQLJSON,
      description: 'Response with variable payload'
    },
  })
});
