import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { createSchemaCRUDFields } from '../../../src/index';
import { TimezoneCreateInputType, TimezoneType, TimezoneUpdateInputType } from './types';

export const { queryFields, mutationFields } = createSchemaCRUDFields({
  resourceName: 'timezone',
  create: {
    fn: 'createTimezones',
    inputType: TimezoneCreateInputType,
    outputType: TimezoneType
  },
  read: {
    fn: 'readTimezones',
    outputType: TimezoneType
  },
  update: {
    fn: 'updateTimezones',
    inputType: TimezoneUpdateInputType,
    outputType: TimezoneType
  },
  delete: {
    fn: 'deleteTimezones',
  }
});

export const ResourcesQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all queries',
  fields: {
    ...queryFields
  }
});

export const ResourcesMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'The root of all queries',
  fields: {
    ...mutationFields
  }
});

export const schema = new GraphQLSchema({
  query: ResourcesQueryType,
  mutation: ResourcesMutationType
});
