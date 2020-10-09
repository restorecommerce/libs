import * as _ from 'lodash';
import {
  GraphQLInputObjectType, GraphQLObjectType,
  GraphQLString, GraphQLFloat, GraphQLList
} from 'graphql';
import { ErrorListType } from './ErrorType';

import { CountryType } from './CountryType';

import { resolveNested } from '../utils';
import { MetaType } from './MetaType';
import { InputAttribute } from './AccessControlTypes';

export const GeoPointType = new GraphQLObjectType({
  name: 'geoPointType',
  description: 'Describes a geographical point on Earth',
  fields: () => ({
    longitude: {
      type: GraphQLFloat,
      description: 'Longitude'
    },
    latitude: {
      type: GraphQLFloat,
      description: 'Latitude'
    },
  })
});

export const GeoPointInputType = new GraphQLInputObjectType({
  name: 'geoPointInputType',
  description: 'Describes a geographical point on Earth',
  fields: () => ({
    longitude: {
      type: GraphQLFloat,
      description: 'Longitude'
    },
    latitude: {
      type: GraphQLFloat,
      description: 'Latitude'
    },
  })
});

const fields = {
  id: {
    type: GraphQLString,
    description: 'ID'
  },
  postcode: {
    type: GraphQLString,
    description: 'Postal code',
  },
  country_id: {
    type: GraphQLString,
    description: 'Country',
  },
  locality: {
    type: GraphQLString,
    description: 'Locality',
  },
  street: {
    type: GraphQLString,
    description: 'Street address',
  },
  building_number: {
    type: GraphQLString,
    description: 'building number'
  },
  region: {
    type: GraphQLString,
    description: 'Region address',
  },
  altitude: {
    type: GraphQLFloat,
    description: 'Longitude'
  },
};

const additionalAddressInput = new GraphQLInputObjectType({
  name: 'additionalAddressInput',
  description: 'additional address fields',
  fields: () => ({
    field1: {
      type: GraphQLString,
      description: 'Longitude'
    },
    field2: {
      type: GraphQLString,
      description: 'Latitude'
    },
  })
});

const additionalAddressOutput = new GraphQLObjectType({
  name: 'additionalAddressOutput',
  description: 'additional address fields',
  fields: () => ({
    field1: {
      type: GraphQLString,
      description: 'Longitude'
    },
    field2: {
      type: GraphQLString,
      description: 'Latitude'
    },
  })
});

export const AddressUpdateInputType = new GraphQLInputObjectType({
  name: 'AddressUpdateInputType',
  fields: () => (_.merge({}, fields, {
    geo_coordinates: {
      type: GeoPointInputType,
      description: 'Geographical coordinates'
    },
    addressAddition: {
      type: additionalAddressInput,
      description: 'additional address input fields'
    }
  })),
});

export const AddressInputType = new GraphQLInputObjectType({
  name: 'AddressInputType',
  description: 'Address message description',
  fields: () => (_.merge({}, fields, {
    geo_coordinates: {
      type: GeoPointInputType,
      description: 'Geographical coordinates'
    },
    addressAddition: {
      type: additionalAddressInput,
      description: 'additional address input fields'
    },
    owner: {
      type: new GraphQLList(InputAttribute)
    }
  })),
});

export const AddressUserInputType = new GraphQLInputObjectType({
  name: 'AddressuserInputType',
  description: 'Address for registering User',
  fields: () => (_.merge({}, fields, {
    geo_coordinates: {
      type: GeoPointInputType,
      description: 'Geographical coordinates'
    },
    addressAddition: {
      type: additionalAddressInput,
      description: 'additional address input fields'
    }
  })),
});

export const AddressType = new GraphQLObjectType({
  name: 'AddressType',
  description: 'Address message description',
  fields: () => (_.merge({}, fields, {
    geo_coordinates: {
      type: GeoPointType,
      description: 'Geographical coordinates'
    },
    country: {
      type: CountryType,
      description: 'Country',
      resolve: ({ country_id }, args, ctx) => resolveNested(ctx, 'country',
        country_id)
    },
    addressAddition: {
      type: additionalAddressOutput,
      description: 'additional address output fields'
    },
    meta: {
      type: MetaType,
      description: 'Meta info'
    },
  })),
});

export const outputAddressType = new GraphQLObjectType({
  name: 'outputAddressType',
  description: 'Address output description',
  fields: () => ({
    details: {
      type: new GraphQLList(AddressType),
    },
    error: {
      type: ErrorListType,
    },
  }),
});
