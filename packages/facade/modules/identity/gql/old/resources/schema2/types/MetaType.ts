import {
  GraphQLObjectType, GraphQLString,
  GraphQLList
} from 'graphql';
import { DateType } from './CustomDateType';
import { Attribute } from './AccessControlTypes';

export const MetaType = new GraphQLObjectType({
  name: 'Meta',
  description: 'Meta info common to all resources',
  fields: () => ({
    created: {
      type: DateType,
      description: 'Creation timestamp',
    },
    modified: {
      type: DateType,
      description: 'Last-modification timestamp',
    },
    modified_by: {
      type: GraphQLString,
      description: 'UUID from last User who modified the resource',
    },
    owner: {
      type: new GraphQLList(Attribute),
      description: 'A list of attributes describing the owner\'s entities',
    }
  }),
});
