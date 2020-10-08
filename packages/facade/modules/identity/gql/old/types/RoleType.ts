import { GraphQLInputObjectType, GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import * as _ from 'lodash';
import { ErrorListType } from './ErrorType';
import { MetaType } from './MetaType';
import { InputAttribute } from './AccessControlTypes';

const fields = {
  id: {
    type: GraphQLString,
    description: 'Role ID',
  },
  name: {
    type: GraphQLString,
    description: 'Role name',
  },
  description: {
    type: GraphQLString,
    description: 'Role description',
  },
};

export const RoleUpdateInputType = new GraphQLInputObjectType({
  name: 'RoleUpdateInputType',
  description: 'Role proto description',
  fields: () => (fields),
});

export const RoleInputType = new GraphQLInputObjectType({
  name: 'RoleInputType',
  description: 'Role proto description',
  fields: () => (_.merge(fields, {
    owner: {
      type: new GraphQLList(InputAttribute)
    }
  })),
});

export const RoleType = new GraphQLObjectType({
  name: 'RoleType',
  description: 'Role proto description',
  fields: () => (_.merge({}, fields, {
    meta: {
      type: MetaType,
      description: 'Meta info'
    },
  })),
});

export const outputRoleType = new GraphQLObjectType({
  name: 'outputRoleType',
  description: 'Role output description',
  fields: () => ({
    details: {
      type: new GraphQLList(RoleType),
    },
    error: {
      type: ErrorListType,
    },
  }),
});
