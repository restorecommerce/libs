import { GraphQLInputObjectType, GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLList } from 'graphql';
import * as _ from 'lodash';
import { ErrorListType } from './ErrorType';

import { CountryType } from './CountryType';
import { TypeOfTaxType } from './TypeOfTaxType';

import { resolveNested } from '../utils';
import { MetaType } from './MetaType';
import { InputAttribute } from './AccessControlTypes';

const fields = {
  id: {
    type: GraphQLString,
    description: 'Tax ID',
  },
  country_id: {
    type: GraphQLString,
    description: 'Country of tax',
  },
  rate: {
    type: GraphQLFloat,
    description: 'Tax rate',
  },
  variant: {
    type: GraphQLString,
    description: ' Variant',
  },
  type_id: {
    type: GraphQLString,
    description: ' Tax type',
  },
};

export const TaxUpdateInputType = new GraphQLInputObjectType({
  name: 'TaxUpdateInputType',
  description: 'Tax proto description',
  fields: () => (fields),
});

export const TaxInputType = new GraphQLInputObjectType({
  name: 'TaxInputType',
  description: 'Tax proto description',
  fields: () => (_.merge({}, fields, {
    owner: {
      type: new GraphQLList(InputAttribute)
    }
  })),
});

export const TaxType = new GraphQLObjectType({
  name: 'TaxType',
  description: 'Tax proto description',
  fields: () => (_.merge({}, fields, {
    meta: {
      type: MetaType,
      description: 'Meta info'
    },
    country: {
      type: CountryType,
      description: 'Country',
      resolve: ({ country_id }, args, ctx) => resolveNested(ctx, 'country', country_id)
    },
    tax_type: {
      type: TypeOfTaxType,
      description: ' Tax type',
      resolve: ({ type_id }, args, ctx) => resolveNested(ctx, 'tax_type', type_id)
    }
  })),
});

export const outputTaxType = new GraphQLObjectType({
  name: 'outputTaxType',
  description: 'Tax output description',
  fields: () => ({
    details: {
      type: new GraphQLList(TaxType),
    },
    error: {
      type: ErrorListType,
    },
  }),
});
