import {
  GraphQLObjectType, GraphQLInputObjectType, GraphQLString,
  GraphQLEnumType, GraphQLList
} from 'graphql';

export const AccessControlTargetType = new GraphQLObjectType({
  name: 'AccessControlTargetType',
  description: 'Generic command resource.',
  fields: () => ({
    subject: {
      type: new GraphQLList(Attribute),
      description: 'Entity requesting access.',
    },
    resources: {
      type: new GraphQLList(Attribute),
      description: 'Targeted resources',
    },
    action: {
      type: new GraphQLList(Attribute),
      description: 'Targeted action',
    },
  }),
});

export const AccessControlnputTargetType = new GraphQLInputObjectType({
  name: 'AccessControlnputTargetType',
  description: 'Generic command resource.',
  fields: () => ({
    subject: {
      type: new GraphQLList(InputAttribute),
      description: 'Entity requesting access.',
    },
    resources: {
      type: new GraphQLList(InputAttribute),
      description: 'Targeted resources',
    },
    action: {
      type: new GraphQLList(InputAttribute),
      description: 'Targeted action',
    },
  }),
});

export const Effect = new GraphQLEnumType({
  name: 'AccessControlEffectType',
  description: 'Effect resulting from a rule, policy or policy set',
  values: {
    PERMIT: {
      value: 'PERMIT',
      description: 'Permit operation',
    },
    DENY: {
      value: 'DENY',
      description: 'Deny operation',
    },
  }
});

export const Decision = new GraphQLEnumType({
  name: 'AccessControlDecisionType',
  description: 'Decision from an access control response',
  values: {
    PERMIT: {
      value: 'PERMIT',
      description: 'Permit operation',
    },
    DENY: {
      value: 'DENY',
      description: 'Deny operation',
    },
    INDETERMINATE: {
      value: 'INDETERMINATE',
      description: 'Indeterminate result (no targets are applicable to request)',
    }
  }
});


export const Attribute = new GraphQLObjectType({
  name: 'Attribute',
  description: 'An ID-value attribute',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'Attribute ID'
    },
    value: {
      type: GraphQLString,
      description: 'Attribute value'
    }
  })
});

export const InputAttribute = new GraphQLInputObjectType({
  name: 'InputAttribute',
  description: 'Attribute from a Target property',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'Attribute ID'
    },
    value: {
      type: GraphQLString,
      description: 'Attribute value'
    }
  })
});
