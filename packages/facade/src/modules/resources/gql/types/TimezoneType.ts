import { GraphQLInputObjectType, GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import { StatusType, MetaType, AttributeInputType } from '@gql';

const fields = {
  id: {
    type: GraphQLString
  },
  value: {
    type: GraphQLString
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

export const TimezoneInputType = new GraphQLInputObjectType({
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

export const OutputTimezoneType = new GraphQLObjectType({
  name: 'OutputTimezoneType',
  description: 'Timezone output description',
  fields: () => ({
    payload: {
      type: new GraphQLList(TimezoneType),
    },
    status: {
      type: StatusType,
    },
  }),
});
