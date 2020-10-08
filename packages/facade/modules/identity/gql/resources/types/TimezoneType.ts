import { GraphQLInputObjectType, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLNonNull } from 'graphql';
import * as _ from 'lodash';
import { StatusType, MetaType, AttributeInputType } from '../../shared/index';

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
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    value: {
      type: GraphQLNonNull(GraphQLString)
    },
    description: {
      type: GraphQLString
    }
  }
});

export const TimezoneInputType = new GraphQLInputObjectType({
  name: 'TimezoneInputType',
  description: 'Timezone proto description',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    value: {
      type: GraphQLNonNull(GraphQLString)
    },
    description: {
      type: GraphQLString
    },
    owner: {
      type: new GraphQLList(new GraphQLNonNull(AttributeInputType))
    }
  }
});

export const TimezoneType = new GraphQLObjectType({
  name: 'TimezoneType',
  description: 'Timezone proto description',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    value: {
      type: GraphQLNonNull(GraphQLString)
    },
    description: {
      type: GraphQLString
    },
    meta: {
      type: MetaType,
      description: 'Meta info'
    },
  },
});

export const OutputTimezoneType = new GraphQLObjectType({
  name: 'OutputTimezoneType',
  description: 'Timezone output description',
  fields: () => ({
    payload: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(TimezoneType))),
    },
    status: {
      type: StatusType,
    },
  }),
});
