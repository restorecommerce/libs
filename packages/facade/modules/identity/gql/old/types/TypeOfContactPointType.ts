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
    description: 'ContactPoint type',
  },
};

export const TypeOfContactPointUpdateInputType = new GraphQLInputObjectType({
  name: 'TypeOfContactPointUpdateInputType',
  description: 'ContactPoint message description',
  fields: () => (fields),
});

export const TypeOfContactPointInputType = new GraphQLInputObjectType({
  name: 'TypeOfContactPointInputType',
  description: 'ContactPoint message description',
  fields: () => (_.merge(fields, {
    owner: {
      type: new GraphQLList(InputAttribute)
    }
  })),
});

export const TypeOfContactPointType = new GraphQLObjectType({
  name: 'TypeOfContactPointType',
  description: 'ContactPoint message description',
  fields: () => (_.merge({}, fields, {
    meta: {
      type: MetaType,
      description: 'Meta info'
    },
  })),
});

export const outputTypeOfContactPointType = new GraphQLObjectType({
  name: 'outputTypeOfContactPointType',
  description: 'ContactPoint type output description',
  fields: () => ({
    details: {
      type: new GraphQLList(TypeOfContactPointType),
    },
    error: {
      type: ErrorListType,
    },
  }),
});
