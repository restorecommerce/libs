import { GraphQLInputObjectType, GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import * as _ from 'lodash';
import { ErrorListType } from './ErrorType';
import { MetaType } from './MetaType';
import { InputAttribute } from './AccessControlTypes';

const fields = {
  id: {
    type: GraphQLString,
    description: 'ID'
  },
  type: {
    type: GraphQLString,
    description: 'Tax type',
  },
  description: {
    type: GraphQLString,
    description: 'Tax description'
  },
};

export const TypeOfTaxUpdateInputType = new GraphQLInputObjectType({
  name: 'TypeOfTaxUpdateInputType',
  description: 'Tax message description',
  fields: () => (fields),
});

export const TypeOfTaxInputType = new GraphQLInputObjectType({
  name: 'TypeOfTaxInputType',
  description: 'Tax message description',
  fields: () => (_.merge({}, fields, {
    owner: {
      type: new GraphQLList(InputAttribute)
    }
  })),
});

export const TypeOfTaxType = new GraphQLObjectType({
  name: 'TypeOfTaxType',
  description: 'Tax message description',
  fields: () => (_.merge({}, fields, {
    meta: {
      type: MetaType,
      description: 'Meta info'
    },
  })),
});

export const outputTypeOfTaxType = new GraphQLObjectType({
  name: 'outputTypeOfTaxType',
  description: 'Tax type output description',
  fields: () => ({
    details: {
      type: new GraphQLList(TypeOfTaxType),
    },
    error: {
      type: ErrorListType,
    },
  }),
});
