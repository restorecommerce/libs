import {
  GraphQLObjectType, GraphQLInputObjectType, GraphQLString,
  GraphQLEnumType, GraphQLList, GraphQLNonNull
} from 'graphql';


// export const AccessControlnputTargetType = new GraphQLInputObjectType({
//   name: 'AccessControlnputTargetType',
//   description: 'Generic command resource.',
//   fields: () => ({
//     subject: {
//       type: new GraphQLList(InputAttribute),
//       description: 'Entity requesting access.',
//     },
//     resources: {
//       type: new GraphQLList(InputAttribute),
//       description: 'Targeted resources',
//     },
//     action: {
//       type: new GraphQLList(InputAttribute),
//       description: 'Targeted action',
//     },
//   }),
// });

export const AccessControlEffectType = new GraphQLEnumType({
  name: 'AccessControlEffect',
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

export const AccessControlDecisionType = new GraphQLEnumType({
  name: 'AccessControlDecision',
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


export const AttributeType = new GraphQLObjectType({
  name: 'Attribute',
  description: 'An ID-value attribute',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Attribute ID'
    },
    value: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Attribute value'
    }
  })
});

export const AttributeInputType = new GraphQLInputObjectType({
  name: 'InputAttribute',
  description: 'Attribute from a Target property',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Attribute ID',
    },
    value: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Attribute value'
    }
  })
});


export const AccessControlTargetType = new GraphQLObjectType({
  name: 'AccessControlTarget',
  description: 'Generic command resource.',
  fields: () => ({
    subject: {
      type: new GraphQLList(AttributeType),
      description: 'Entity requesting access.',
    },
    resources: {
      type: new GraphQLList(AttributeType),
      description: 'Targeted resources',
    },
    action: {
      type: new GraphQLList(AttributeType),
      description: 'Targeted action',
    },
  }),
});
