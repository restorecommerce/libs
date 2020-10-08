import { GraphQLInputObjectType, GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql'; // GraphQLInt
import * as _ from 'lodash';
import { ErrorListType } from './ErrorType';

import { resolveNested } from '../utils';
import { AddressType, AddressUserInputType } from './AddressType';
import { LocaleType } from './LocaleType';
import { TypeOfContactPointType } from './TypeOfContactPointType';
import { MetaType } from './MetaType';
import { InputAttribute } from './AccessControlTypes';
import { TimezoneType } from './TimezoneType';

const fields = {
  id: {
    type: GraphQLString,
    description: 'ID'
  },
  physical_address_id: {
    type: GraphQLString,
    description: 'Physical address',
  },
  website: {
    type: GraphQLString,
    description: 'Website',
  },
  email: {
    type: GraphQLString,
    description: 'Email address',
  },
  contact_point_type_id: {
    type: GraphQLString,
    description: 'Type of contact point'
  },
  vat_id: {
    type: GraphQLString,
    description: 'ID of VAT'
  },
  isic_v4: {
    type: GraphQLString,
    description: 'International Standard Industrial Classification V4'
  },
  tax_id: {
    type: GraphQLString,
    description: 'Tax ID'
  },
  telephone: {
    type: GraphQLString,
    description: 'Telephone number'
  },
  locale_id: {
    type: GraphQLString,
    description: 'Locale settings',
  },
  timezone_id: {
    type: GraphQLString,
    description: 'Timezone',
  }
};

export const ContactPointUpdateInputType = new GraphQLInputObjectType({
  name: 'ContactPointsUpdateInputType',
  description: 'ContactPoints message description',
  fields: () => (fields),
});

export const ContactPointInputType = new GraphQLInputObjectType({
  name: 'ContactPointsInputType',
  description: 'ContactPoints message description',
  fields: () => (_.merge({}, fields, {
    owner: {
      type: new GraphQLList(InputAttribute)
    }
  })),
});

// addressID will be assigned from RegisterUser muation
const userCPFields = {
  id: {
    type: GraphQLString,
    description: 'ID'
  },
  website: {
    type: GraphQLString,
    description: 'Website',
  },
  email: {
    type: GraphQLString,
    description: 'Email address',
  },
  contact_point_type_id: {
    type: GraphQLString,
    description: 'Type of contact point'
  },
  vat_id: {
    type: GraphQLString,
    description: 'ID of VAT'
  },
  isic_v4: {
    type: GraphQLString,
    description: 'International Standard Industrial Classification V4'
  },
  tax_id: {
    type: GraphQLString,
    description: 'Tax ID'
  },
  telephone: {
    type: GraphQLString,
    description: 'Telephone number'
  },
  locale_id: {
    type: GraphQLString,
    description: 'Locale settings',
  },
  timezone_id: {
    type: GraphQLString,
    description: 'Timezone',
  },
  address: {
    type: AddressUserInputType,
    description: 'Address associated with this Contact Point'
  }
};

export const ContactPointUserInputType = new GraphQLInputObjectType({
  name: 'ContactPointsUserInputType',
  description: 'ContactPoints message description',
  fields: () => (_.merge({}, userCPFields)),
});

export const ContactPointType = new GraphQLObjectType({
  name: 'ContactPointsType',
  description: 'ContactPoints message description',
  fields: () => (_.merge({}, fields, {
    physical_address: {
      type: AddressType,
      description: 'Physical address',
      resolve: ({ physical_address_id }, args, ctx) => resolveNested(ctx, 'address', physical_address_id)
    },
    contact_point_type: {
      type: TypeOfContactPointType,
      description: 'Type of contact point (resolved)',
      resolve: ({ contact_point_type_id }, args, ctx) => resolveNested(ctx, 'contact_point_type', contact_point_type_id)
    },

    locale: {
      type: LocaleType,
      description: 'User locale settings (default is `de-DE`)',
      resolve: ({ locale_id }, args, ctx) => resolveNested(ctx, 'locale', locale_id)
    },
    timezone: {
      type: TimezoneType,
      description: 'Contact timezone',
      resolve: ({ timezone_id }, args, ctx) => resolveNested(ctx, 'timezone', timezone_id)
    },
    meta: {
      type: MetaType,
      description: 'Meta info'
    },
  })),
});

export const outputContactPointsType = new GraphQLObjectType({
  name: 'outputContactPointsType',
  description: 'ContactPoints output description',
  fields: () => ({
    details: {
      type: new GraphQLList(ContactPointType),
    },
    error: {
      type: ErrorListType,
    },
  }),
});
