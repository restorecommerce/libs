import { GraphQLInputObjectType, GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import * as _ from 'lodash';
import { ErrorListType } from './ErrorType';

import { OrganizationType } from './OrganizationType';
import { AddressType } from './AddressType';
import { resolveNested } from '../utils';
import { MetaType } from './MetaType';
import { InputAttribute } from './AccessControlTypes';

const fields = {
  id: {
    type: GraphQLString,
    description: 'Location ID',
  },
  name: {
    type: GraphQLString,
    description: 'Location name',
  },
  description: {
    type: GraphQLString,
    description: 'Location description',
  },
  organization_id: {
    type: GraphQLString,
    description: 'Organization ID to which this location is linked',
  },
  parent_id: {
    type: GraphQLString,
    description: 'Location which contains this location; may be null',
  },
  children_ids: {
    type: new GraphQLList(GraphQLString),
    description: 'Locations contained in this location',
  },
  address_id: {
    type: GraphQLString,
    description: 'Address of this location',
  }
};

export const LocationUpdateInputType = new GraphQLInputObjectType({
  name: 'LocationUpdateInputType',
  description: 'Location proto description',
  fields: () => (_.merge({}, fields, {
  })),
});


export const LocationInputType = new GraphQLInputObjectType({
  name: 'LocationInputType',
  description: 'Location proto description',
  fields: () => (_.merge({}, fields, {
    owner: {
      type: new GraphQLList(InputAttribute)
    }
  })),
});

export const LocationType = new GraphQLObjectType({
  name: 'LocationType',
  description: 'Location2 proto description',
  fields: () => (_.merge({}, fields, {
    organization: {
      type: OrganizationType,
      description: 'Organization to which this location is linked',
      resolve: ({ organization_id }, args, ctx) => resolveNested(ctx, 'organization', organization_id)
    },
    address: {
      type: AddressType,
      description: 'Address of Organization',
      resolve: ({ address_id }, args, ctx) => resolveNested(ctx, 'address', address_id)
    },
    meta: {
      type: MetaType,
      description: 'Meta info'
    }
  }))
});

export const outputLocationType = new GraphQLObjectType({
  name: 'outputLocationType',
  description: 'Location output description',
  fields: () => ({
    details: {
      type: new GraphQLList(LocationType),
    },
    error: {
      type: ErrorListType,
    },
  }),
});
