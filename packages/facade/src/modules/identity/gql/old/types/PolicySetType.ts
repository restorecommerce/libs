/**
 * A Policy's rule
 */

import { GraphQLInputObjectType, GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import * as _ from 'lodash';
import { ErrorListType } from './ErrorType';
import { AccessControlTargetType, AccessControlnputTargetType, InputAttribute, } from './AccessControlTypes';
import { PolicyType } from './PolicyType';
import { resolveNested } from '../utils';
import { MetaType } from './MetaType';

const fields = {
  id: {
    type: GraphQLString,
    description: 'Policy set ID.',
  },
  name: {
    type: GraphQLString,
    description: 'Policy set name.',
  },
  description: {
    type: GraphQLString,
    description: 'Policy set description.',
  },

  combining_algorithm: {
    type: GraphQLString,
    description: 'Combining algorithm to decide among policy effects'
  },
  policies: {
    type: new GraphQLList(GraphQLString),
    description: 'Policy IDs'
  },
};

export const PolicySetUpdateInputType = new GraphQLInputObjectType({
  name: 'PolicySetUpdateInputType',
  description: 'An aggregate of policy resources (access control).',
  fields: () => (_.merge({}, fields, {
    target: {
      type: AccessControlnputTargetType,
      description: 'Policy set target (optional)',
    },
  })),
});

export const PolicySetInputType = new GraphQLInputObjectType({
  name: 'PolicySetInputType',
  description: 'An aggregate of policy resources (access control).',
  fields: () => (_.merge({}, fields, {
    owner: {
      type: new GraphQLList(InputAttribute)
    },
    target: {
      type: AccessControlnputTargetType,
      description: 'Policy set target (optional)',
    },
  })),
});

export const PolicySetType = new GraphQLObjectType({
  name: 'PolicySetType',
  description: 'An aggregate of policy resources.',
  fields: () => (_.merge({}, fields, {
    target: {
      type: AccessControlTargetType,
      description: 'Policy set target (optional)',
    },
    policies_resolved: {
      type: new GraphQLList(PolicyType),
      resolve: ({ policies }, args, ctx) => resolveNested(ctx, 'policy', policies)
    },
    meta: {
      type: MetaType,
      description: 'Meta info'
    },
  })),
});

export const outputPolicySetType = new GraphQLObjectType({
  name: 'outputPolicySetType',
  description: ' rules output description',
  fields: () => ({
    details: {
      type: new GraphQLList(PolicySetType),
    },
    error: {
      type: ErrorListType,
    },
  }),
});
