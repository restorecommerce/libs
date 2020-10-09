import * as _ from 'lodash';
import { GraphQLInputObjectType, GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import {InputAttribute} from './AccessControlTypes';
import { ErrorListType } from './ErrorType';
import { MetaType } from './MetaType';

const fields = {
  id: {
    type: GraphQLString,
    description: 'Manufacturer ID',
  },
  name: {
    type: GraphQLString,
    description: 'Manufacturer name',
  },
  description: {
    type: GraphQLString,
    description: 'Manufacturer description',
  }
};

export const ManufacturerType = new GraphQLObjectType({
  name: 'ManufacturerType',
  description: 'Manufacturer proto description',
  fields: () => (_.merge({}, fields, {
    meta: {
      type: MetaType,
      description: 'Meta info'
    }
  }))
});

export const ManufacturerInputType = new GraphQLInputObjectType({
  name: 'ManufacturerInputType',
  description: 'Manufacturer proto description',
  fields: () => (_.merge({}, fields, {
    owner: {
      type: new GraphQLList(InputAttribute)
    }
  }))
});

export const outputManufacturerType = new GraphQLObjectType({
  name: 'outputManufacturerType',
  description: 'Manufacturer output description',
  fields: () => ({
    details: {
      type: new GraphQLList(ManufacturerType)
    },
    error: {
      type: ErrorListType
    }
  })
});

export const ManufacturerUpdateInputType = new GraphQLInputObjectType({
  name: 'ManufacturerUpdateInputType',
  fields: () => (_.merge({}, fields, {
  }))
});
