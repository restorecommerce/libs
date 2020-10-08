import * as _ from 'lodash';
import {
  GraphQLString, GraphQLInputObjectType, GraphQLList, GraphQLObjectType
} from 'graphql';
import { InputAttribute } from './AccessControlTypes';
import { MetaType } from './MetaType';
import { ErrorListType } from './ErrorType';

const fields = {
  id: {
    type: GraphQLString
  },
  name: {
    type: GraphQLString,
    description: 'Name of courier service'
  },
  description: {
    type: GraphQLString,
    description: 'Description of courier service'
  }
};

export const TypeOfFulfillmentCourierType = new GraphQLInputObjectType({
  name: 'TypeOfFulfillmentCourierType',
  description: 'List of fulfillment couriers',
  fields: () => (_.merge({}, fields, {
    owner: {
      type: new GraphQLList(InputAttribute)
    }
  })),
});

export const FulfillmentCourierType = new GraphQLObjectType({
  name: 'FulfillmentCourierType',
  description: 'Fulfillment courier input',
  fields: () => (_.merge({}, fields, {
    meta: {
      type: MetaType,
      description: 'Meta info'
    }
  }))
});


export const outputFulfillmentCourierType = new GraphQLObjectType({
  name: 'outputFulfillmentCourierType',
  description: 'Fulfillment courier output',
  fields: () => ({
    details: {
      type: new GraphQLList(FulfillmentCourierType),
    },
    error: {
      type: ErrorListType,
    },
  }),
});

export const FulfillmentCourierUpdateInputType = new GraphQLInputObjectType({
  name: 'FulfillmentCourierUpdateInputType',
  fields: () => (_.merge({}, fields)),
});
