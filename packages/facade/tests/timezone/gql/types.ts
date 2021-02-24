import { GraphQLInputObjectType, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLNonNull, GraphQLID } from 'graphql';
import { MetaType, AttributeInputType } from '../../../src/gql/types';

const fields = {
  id: {
    type: new GraphQLNonNull(GraphQLID)
  },
  value: {
    type: new GraphQLNonNull(GraphQLString)
  },
  description: {
    type: GraphQLString
  },
};

export const TimezoneUpdateInputType = new GraphQLInputObjectType({
  name: 'TimezoneUpdateInputType',
  description: 'Timezone proto description',
  fields: () => (fields),
});

export const TimezoneCreateInputType = new GraphQLInputObjectType({
  name: 'TimezoneInputType',
  description: 'Timezone proto description',
  fields: () => ({
    ...fields,
    owner: {
      type: new GraphQLList(AttributeInputType)
    }
  })
});

export const TimezoneType = new GraphQLObjectType({
  name: 'TimezoneType',
  description: 'Timezone proto description',
  fields: () => ({
    ...fields,
    meta: {
      type: MetaType,
      description: 'Meta info'
    },
  }),
});

