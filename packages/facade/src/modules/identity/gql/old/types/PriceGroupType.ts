import * as _ from 'lodash';
import { GraphQLInputObjectType, GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import {MetaType} from './MetaType';
import {InputAttribute} from './AccessControlTypes';
import { ErrorListType } from './ErrorType';

const fields = {
  id: {
    type: GraphQLString,
    description: 'Price group ID',
  },
  name: {
    type: GraphQLString,
    description: 'Price group name',
  },
  description: {
    type: GraphQLString,
    description: 'Price group description',
  }
};

export const PriceGroupType = new GraphQLObjectType({
  name: 'PriceGroupType',
  description: 'Price group proto description',
  fields: () => (_.merge({}, fields, {
    meta: {
      type: MetaType,
      description: 'Meta info'
    }
  }))
});

export const PriceGroupInputType = new GraphQLInputObjectType({
  name: 'PriceGroupInputType',
  description: 'Price group proto description',
  fields: () => (_.merge({}, fields, {
    owner: {
      type: new GraphQLList(InputAttribute)
    }
  })),
});

export const outputPriceGroupType = new GraphQLObjectType({
  name: 'outputPriceGroupType',
  description: 'Price group output description',
  fields: () => ({
    details: {
      type: new GraphQLList(PriceGroupType),
    },
    error: {
      type: ErrorListType,
    }
  }),
});

export const PriceGroupUpdateInputType = new GraphQLInputObjectType({
  name: 'PriceGroupUpdateInputType',
  fields: () => (_.merge({}, fields, {
  })),
});
