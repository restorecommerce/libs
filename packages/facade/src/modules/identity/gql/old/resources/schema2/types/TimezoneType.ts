import { GraphQLInputObjectType, GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import * as _ from 'lodash';
import { ErrorListType } from './ErrorType';
import { MetaType } from './MetaType';
import { InputAttribute } from './AccessControlTypes';

const fields = {
  id: {
    type: GraphQLString
  },
  value: {
    type: GraphQLString
  },
  description: {
    type: GraphQLString
  },
};

export const TimezoneUpdateInputType = new GraphQLInputObjectType({
  name: 'TimezoneUpdateInputType',
  description: 'Timezone proto description',
  fields: () => (fields),
});

export const TimezoneInputType = new GraphQLInputObjectType({
  name: 'TimezoneInputType',
  description: 'Timezone proto description',
  fields: () => (_.merge({}, fields, {
    owner: {
      type: new GraphQLList(InputAttribute)
    }
  })),
});

export const TimezoneType = new GraphQLObjectType({
  name: 'TimezoneType',
  description: 'Timezone proto description',
  fields: () => (_.merge({}, fields, {
    meta: {
      type: MetaType,
      description: 'Meta info'
    },
  })),
});

export const outputTimezoneType = new GraphQLObjectType({
  name: 'outputTimezoneType',
  description: 'Timezone output description',
  fields: () => ({
    details: {
      type: new GraphQLList(TimezoneType),
    },
    error: {
      type: ErrorListType,
    },
  }),
});
