import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { QueryAllInputType, } from '@gql';
import { OutputTimezoneType } from './types/index';

export const IdentityQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all queries',
  fields: {
    getAllTimezones: {
      type: OutputTimezoneType,
      args: {
        input: {
          type: QueryAllInputType,
        }
      },
    },
  }
});

export const schema = new GraphQLSchema({
  query: IdentityQueryType,
});
