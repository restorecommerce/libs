import {
  GraphQLObjectType, GraphQLString,
  GraphQLList
} from 'graphql';
import CustomDateType from './CustomDateType';
import { Attribute } from './AccessControlTypes';

export const MetaType = new GraphQLObjectType({
  name: 'Meta',
  description: 'Meta info common to all resources',
  fields: () => ({
    created: {
      type: CustomDateType,
      description: 'Creation timestamp',
    },
    modified: {
      type: CustomDateType,
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
