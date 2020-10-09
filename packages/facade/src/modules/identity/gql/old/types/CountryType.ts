import { GraphQLInputObjectType, GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import * as _ from 'lodash';
import { ErrorListType } from './ErrorType';
import { MetaType } from './MetaType';
import { InputAttribute } from './AccessControlTypes';

const fields = {
  id: {
    type: GraphQLString,
    description: 'ID'
  },
  name: {
    type: GraphQLString,
    description: 'Country name',
  },
  country_code: {
    type: GraphQLString,
    description: 'Country code',
  },
  geographical_name: {
    type: GraphQLString,
    description: 'Geographical name',
  },
  economic_areas: {
    type: new GraphQLList(GraphQLString),
    description: 'Economic areas to which a country belongs.',
  },
};

export const CountryUpdateInputType = new GraphQLInputObjectType({
  name: 'CountryUpdateInputType',
  description: 'Country message description',
  fields: () => (fields)
});

export const CountryInputType = new GraphQLInputObjectType({
  name: 'CountryInputType',
  description: 'Country message description',
  fields: () => (_.merge({}, fields, {
    owner: {
      type: new GraphQLList(InputAttribute)
    }
  })
  ),
});

export const CountryType = new GraphQLObjectType({
  name: 'CountryType',
  description: 'Country message description',
  fields: () => (_.merge({}, fields, {
    meta: {
      type: MetaType,
      description: 'Meta info'
    },
  })),
});

export const outputCountryType = new GraphQLObjectType({
  name: 'outputCountryType',
  description: 'Country output description',
  fields: () => ({
    details: {
      type: new GraphQLList(CountryType),
    },
    error: {
      type: ErrorListType,
    },
  }),
});
