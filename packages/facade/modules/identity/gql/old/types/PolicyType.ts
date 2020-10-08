/**
 * A Policy's rule
 */

import { GraphQLInputObjectType, GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import * as _ from 'lodash';
import { AccessControlTargetType, AccessControlnputTargetType, Effect, InputAttribute } from './AccessControlTypes';
import { RuleType } from './RuleType';
import { resolveNested } from '../utils';
import { MetaType } from './MetaType';
import { ErrorListType } from './ErrorType';

const fields = {
  id: {
    type: GraphQLString,
    description: 'Policy ID.',
  },
  name: {
    type: GraphQLString,
    description: 'Policy name.',
  },
  description: {
    type: GraphQLString,
    description: 'Policy description.',
  },
  effect: {
    type: Effect,
    description: 'Policy Effect'
  },
  combining_algorithm: {
    type: GraphQLString,
    description: 'Combining algorithm to decide among rule effects'
  },
  rules: {
    type: new GraphQLList(GraphQLString),
    description: 'Rule resource IDs'
  },
};


export const PolicyUpdateInputType = new GraphQLInputObjectType({
  name: 'PolicyUpdateInputType',
  description: 'A policy resource (access control) which combines rules.',
  fields: () => (_.merge(fields, {
    target: {
      type: AccessControlnputTargetType,
      description: 'Policy target (optional)',
    },
  })),
});

export const PolicyInputType = new GraphQLInputObjectType({
  name: 'PolicyInputType',
  description: 'A policy resource (access control) which combines rules.',
  fields: () => (_.merge(fields, {
    owner: {
      type: new GraphQLList(InputAttribute)
    },
    target: {
      type: AccessControlnputTargetType,
      description: 'Policy target (optional)',
    },
  })),
});

export const PolicyType = new GraphQLObjectType({
  name: 'PolicyType',
  description: 'Generic rule resource.',
  fields: () => (_.merge({}, fields, {
    target: {
      type: AccessControlTargetType,
      description: 'Policy target (optional)',
    },
    rules_resolved: {
      type: new GraphQLList(RuleType),
      resolve: ({ rules }, args, ctx) => resolveNested(ctx, 'rule', rules)
    },
    meta: {
      type: MetaType,
      description: 'Meta info'
    },
  })),
});

export const outputPolicyType = new GraphQLObjectType({
  name: 'outputPolicyType',
  description: ' Policy output',
  fields: () => ({
    details: {
      type: new GraphQLList(PolicyType),
    },
    error: {
      type: ErrorListType,
    },
  }),
});
