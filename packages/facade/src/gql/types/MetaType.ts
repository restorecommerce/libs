import {
  GraphQLObjectType, GraphQLString,
  GraphQLList, GraphQLNonNull
} from 'graphql';
import { DateType } from './DateType';
import { AttributeType } from './AccessControlTypes';

export const MetaType = new GraphQLObjectType({
  name: 'MetaType',
  description: 'Meta info common to all resources',
  fields: () => ({
    created: {
      type: new GraphQLNonNull(DateType),
      description: 'Creation timestamp',
    },
    modified: {
      type: new GraphQLNonNull(DateType),
      description: 'Last-modification timestamp',
    },
    modified_by: {
      type: GraphQLString,
      description: 'UUID from last User who modified the resource',
    },
    owner: {
      type: new GraphQLList(new GraphQLNonNull(AttributeType)),
      description: 'A list of attributes describing the owner\'s entities',
    }
  }),
});


