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

export const LocaleUpdateInputType = new GraphQLInputObjectType({
  name: 'LocaleUpdateInputType',
  description: 'Locale proto description',
  fields: () => (fields),
});

export const LocaleInputType = new GraphQLInputObjectType({
  name: 'LocaleInputType',
  description: 'Locale proto description',
  fields: () => (_.merge({}, fields, {
    owner: {
      type: new GraphQLList(InputAttribute)
    }
  })),
});

export const LocaleType = new GraphQLObjectType({
  name: 'LocaleType',
  description: 'Locale proto description',
  fields: () => (_.merge({}, fields, {
    meta: {
      type: MetaType,
      description: 'Meta info'
    },
  })),
});

export const outputLocaleType = new GraphQLObjectType({
  name: 'outputLocaleType',
  description: 'Locale output description',
  fields: () => ({
    details: {
      type: new GraphQLList(LocaleType),
    },
    error: {
      type: ErrorListType,
    },
  }),
});
