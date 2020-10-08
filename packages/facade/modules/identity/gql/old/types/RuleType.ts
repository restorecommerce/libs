/**
 * A Policy's rule
 */

import { GraphQLInputObjectType, GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import * as _ from 'lodash';
import { ErrorListType } from './ErrorType';
import { AccessControlTargetType, AccessControlnputTargetType, Effect, InputAttribute } from './AccessControlTypes';
import { MetaType } from './MetaType';
import { inputFilterType, FilterType } from './FilterOptsType';

export const RuleContextQueryInputType = new GraphQLInputObjectType({
  name: 'ruleContextQueryInput',
  description: 'A context query, used to pull resources on the access control service to perform a rule-level decision',
  fields: () => ({
    filters: {
      type: new GraphQLList(inputFilterType),
    },
    query: {
      type: GraphQLString,
    },
  }),
});

export const RuleContextQueryType = new GraphQLObjectType({
  name: 'ruleContextQuery',
  description: 'A context query, used to pull resources on the access control service to perform a rule-level decision',
  fields: () => ({
    filters: {
      type: new GraphQLList(FilterType),
    },
    query: {
      type: GraphQLString,
    },
  }),
});

const fields = {
  id: {
    type: GraphQLString,
    description: 'Rule ID.',
  },
  name: {
    type: GraphQLString,
    description: 'Rule name.',
  },
  description: {
    type: GraphQLString,
    description: 'Rule description.',
  },
  condition: {
    type: GraphQLString,
    description: 'JS code to evaluate special conditions (optional)'
  },
  effect: {
    type: Effect,
    description: 'Rule Effect'
  },
};

export const RuleUpdateInputType = new GraphQLInputObjectType({
  name: 'RuleUpdateInputType',
  description: 'Rule resource (access control).',
  fields: () => (_.merge(fields, {
    target: {
      type: AccessControlnputTargetType,
      description: 'Rule target',
    },
    context_query: {
      type: RuleContextQueryInputType,
      description: 'GraphQL query to retrieve necessary external info (optional)'
    },
  })),
});

export const RuleInputType = new GraphQLInputObjectType({
  name: 'RuleInputType',
  description: 'Rule resource (access control).',
  fields: () => (_.merge(fields, {
    owner: {
      type: new GraphQLList(InputAttribute)
    },
    target: {
      type: AccessControlnputTargetType,
      description: 'Rule target',
    },
    context_query: {
      type: RuleContextQueryInputType,
      description: 'GraphQL query to retrieve necessary external info (optional)'
    },
  })),
});

export const RuleType = new GraphQLObjectType({
  name: 'RuleType',
  description: 'Generic rule resource.',
  fields: () => (_.merge({}, fields, {
    target: {
      type: AccessControlTargetType,
      description: 'Rule target',
    },
    context_query: {
      type: RuleContextQueryType,
      description: 'GraphQL query to retrieve necessary external info (optional)'
    },
    meta: {
      type: MetaType,
      description: 'Meta info'
    },
  })),
});

export const outputRuleType = new GraphQLObjectType({
  name: 'outputRuleType',
  description: ' Rule output',
  fields: () => ({
    details: {
      type: new GraphQLList(RuleType),
    },
    error: {
      type: ErrorListType,
    },
  }),
});
