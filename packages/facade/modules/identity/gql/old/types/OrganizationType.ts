import {
  GraphQLInputObjectType, GraphQLObjectType, // GraphQLInterfaceType,
  GraphQLBoolean, GraphQLString, GraphQLList, GraphQLEnumType, GraphQLUnionType
}
  from 'graphql';
import * as _ from 'lodash';
import * as UnionInputType from 'graphql-union-input-type';
import { ErrorListType } from './ErrorType';
import { AddressType } from './AddressType';
import { ContactPointType } from './ContactPointType';
import { resolveNested, unmarshalAny } from '../utils';
import { GraphQLJSON } from 'graphql-type-json';
import { MetaType } from './MetaType';
import { InputAttribute } from './AccessControlTypes';

/*
enum TransferType {
  SEND = 'SEND',
  RECEIVE = 'RECEIVE',
  BOTH = 'BOTH'
}
 */

const transferTypeGQLEnum = new GraphQLEnumType({
  name: 'TransferType',
  values: {
    SEND: {
      value: 'SEND'
    },
    RECEIVE: {
      value: 'RECEIVE'
    },
    BOTH: {
      value: 'BOTH'
    }
  }
});

const paymentAccountEnum = new GraphQLEnumType({
  name: 'PaymentMethodType',
  values: {
    WireTransfer: {
      value: 'WireTransfer',
    },
    Paypal: {
      value: 'Paypal',
    },
  }
});

/*
interface Payment {
  transferType: TransferType;
  type: any;
}

interface Paypal extends Payment {
  username: string;
  password: string;
  email: string;
}
*/

const isPayment = (obj: any) => 'transferType' in obj;
const isPaypal = (obj: any) => isPayment(obj) && 'username' in obj;

interface WireTransfer extends Account {
  iban: string;
  bic: string;
  bankName: string;
}
function isWireTransfer(obj: any): obj is WireTransfer {
  return isPayment(obj) && 'iban' in obj && 'bic' in obj && 'bankName' in obj;
}

const PaypalType = new GraphQLObjectType({
  name: 'PaypalType',
  fields: {
    username: {
      type: GraphQLString,
      description: ' Account username'
    },
    password: {
      type: GraphQLString,
      description: ' Account password'
    },
    email: {
      type: GraphQLString,
      description: ' Account email'
    },
    type: {
      type: paymentAccountEnum,
      description: 'Account type'
    },
    transferType: {
      type: transferTypeGQLEnum,
      description: 'Account\'s transfer type'
    }
  },
  isTypeOf: value => isPaypal(value)
});


const WireTransferType = new GraphQLObjectType({
  name: 'WireTransfer',
  fields: {
    iban: {
      type: GraphQLString,
      description: ' Account IBAN'
    },
    bic: {
      type: GraphQLString,
      description: ' Account BIC'
    },
    bankName: {
      type: GraphQLString,
      description: ' Account bank name'
    },
    type: {
      type: paymentAccountEnum,
      description: 'Account type'
    },
    transferType: {
      type: transferTypeGQLEnum,
      description: 'Account\'s transfer type'
    }
  },
  isTypeOf: value => isWireTransfer(value)
});

const AccountType = new GraphQLUnionType({
  name: 'AccountType',
  types: [PaypalType, WireTransferType],
  resolveType: (value) => {
    if (isWireTransfer(value)) {
      return WireTransferType;
    }
    if (isPaypal(value)) {
      return PaypalType;
    }
    return undefined;
  }
});

/* const TypedAccountType = new GraphQLInterfaceType({
  name: 'NamedAccountType',
  fields: {
    type: {
      type: paymentAccountEnum
    },
    transferType: {
      type: transferTypeGQLEnum
    }
  }
}); */

const PaypalAccountInputType = new GraphQLInputObjectType({
  name: 'Paypal',
  // interfaces: [TypedAccountType],
  fields: {
    username: {
      type: GraphQLString,
      description: ' Account username'
    },
    password: {
      type: GraphQLString,
      description: ' Account password'
    },
    email: {
      type: GraphQLString,
      description: ' Account email'
    },
    type: { type: paymentAccountEnum },
    transferType: {
      type: transferTypeGQLEnum,
      description: 'Account\'s transfer type'
    }
  }
});

const WireTransferInputType = new GraphQLInputObjectType({
  name: 'WireTransfer',
  // interfaces: [TypedAccountType],
  fields: {
    iban: {
      type: GraphQLString,
      description: ' Account IBAN'
    },
    bic: {
      type: GraphQLString,
      description: ' Account BIC'
    },
    bankName: {
      type: GraphQLString,
      description: ' Account bank name'
    },
    type: {
      type: paymentAccountEnum
    },
    transferType: {
      type: transferTypeGQLEnum,
      description: 'Account\'s transfer type'
    }
  },
});

const AccountInputType = new GraphQLInputObjectType({
  name: 'AccountInputType',
  fields: () => ({
    payment_method: {
      type: AccountUnionType,
      description: 'Account details'
    }
  }),
});

const AccountUnionType = new UnionInputType({
  name: 'AccountUnionType',
  inputTypes: [PaypalAccountInputType, WireTransferInputType],
  typeKey: 'type'
});

const fields = {
  id: {
    type: GraphQLString,
    description: 'Organization ID',
  },
  name: {
    type: GraphQLString,
    description: 'Organization name',

  },
  address_id: {
    type: GraphQLString,
    description: 'Address of Organization',
  },
  parent_id: {
    type: GraphQLString,
    description: ' Hierarchically superior organization; may be null',
  },
  children_ids: {
    type: new GraphQLList(GraphQLString),
    description: 'Hierarchically inferior organizations; may be null',
  },
  website: {
    type: GraphQLString,
    description: 'Organization website',
  },
  email: {
    type: GraphQLString,
    description: 'Organization email address',
  },
  contact_point_ids: {
    type: new GraphQLList(GraphQLString),
    description: 'List of different legal addresses',
  },
  logo: {
    type: GraphQLString,
    description: 'Organization logo URL',
  },
  vat_id: {
    type: GraphQLString,
    description: 'VAT identification number',
  },
  isic_v4: {
    type: GraphQLString,
    description: 'International Standard Industry Classification v4',
  },
  registration: {
    type: GraphQLString,
    description: 'Registration',
  },
  registration_court: {
    type: GraphQLString,
    description: 'Registration court',
  },
  system_owner: {
    type: GraphQLBoolean,
    description: 'Flag for system owner'
  }
};

export const OrganizationUpdateInputType = new GraphQLInputObjectType({
  name: 'OrganizationUpdateInputType',
  description: 'Organization proto description',
  fields: () => (_.merge({}, fields, {
    payment_methods: {
      type: new GraphQLList(AccountInputType),
      description: 'Payment method type'
    },
    data: {
      type: GraphQLJSON,
      description: 'data for Organization, used for specifying indication strategy',
    },
  }))
});

export const OrganizationInputType = new GraphQLInputObjectType({
  name: 'OrganizationInputType',
  description: 'Organization proto description',
  fields: () => (_.merge({}, fields, {
    payment_methods: {
      type: new GraphQLList(AccountInputType),
      description: 'Payment method type'
    },
    owner: {
      type: new GraphQLList(InputAttribute)
    },
    data: {
      type: GraphQLJSON,
      description: 'data for Organization, used for specifying indication strategy',
    },
  })),
});

export const OrganizationType = new GraphQLObjectType({
  name: 'OrganizationType',
  description: 'Organization proto description',
  fields: () => (_.merge({}, fields, {
    meta: {
      type: MetaType,
      description: 'Meta info'
    },
    address: {
      type: AddressType,
      description: 'Address of Organization',
      resolve: ({ address_id }, args, ctx) => resolveNested(ctx, 'address', address_id)
    },
    parent_organization: {
      type: OrganizationType,
      description: ' Hierarchically superior organization; may be null',
      resolve: ({ parent_id }, args, ctx) => resolveNested(ctx, 'organization', parent_id)
    },
    children_organizations: {
      type: new GraphQLList(OrganizationType),
      description: 'Hierarchically inferior organizations; may be null',
      resolve: ({ children_ids }, args, ctx) => resolveNested(ctx, 'organization', children_ids)
    },
    contact_points: {
      type: new GraphQLList(ContactPointType),
      description: 'List of different legal addresses',
      resolve: ({ contact_point_ids }, args, ctx) => resolveNested(ctx, 'contact_point', contact_point_ids)
    },
    payment_methods: {
      type: new GraphQLList(AccountType),
      description: 'Payment method type'
    },
    data: {
      type: GraphQLJSON,
      description: 'data for Organization, used for specifying indication strategy',
      resolve: ({ data }) => unmarshalAny(data)
    }
  })),
});

export const outputOrganizationType = new GraphQLObjectType({
  name: 'outputOrgType',
  description: 'Organization output description',
  fields: () => ({
    details: {
      type: new GraphQLList(OrganizationType),
    },
    error: {
      type: ErrorListType,
    },
  }),
});
