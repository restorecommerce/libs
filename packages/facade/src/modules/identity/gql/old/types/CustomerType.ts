import * as _ from 'lodash';
import {
  GraphQLInputObjectType,
  GraphQLList, GraphQLObjectType,
  GraphQLString, GraphQLInterfaceType,
  GraphQLEnumType, GraphQLBoolean
} from 'graphql';
import * as UnionInputType from 'graphql-union-input-type';
import { MetaType } from './MetaType';
import { InputAttribute } from './AccessControlTypes';
import { ErrorListType } from './ErrorType';
import { resolveNested } from '../utils';
import { UserType } from './UserType';
import { AddressInputType, AddressType } from './AddressType';
import { ContactPointType, ContactPointInputType } from './ContactPointType';

const fields = {
  id: {
    type: GraphQLString,
    description: 'Customer ID'
  }
};

export const CustomerInputType = new GraphQLInputObjectType({
  name: 'CustomerInputType',
  description: 'Customer proto description',
  fields: () => (_.merge({}, fields, {
    owner: {
      type: new GraphQLList(InputAttribute)
    },
    customer: {
      type: CustomerTargetUnionType
    }
  }))
});

const customerEnum = new GraphQLEnumType({
  name: 'customerEnumType',
  values: {
    Org_User: {
      value: 'Org_User'
    },
    Guest: {
      value: 'Guest'
    },
    Individual_User: {
      value: 'Individual_User'
    }
  }
});

const OrgUserType = new GraphQLInputObjectType({
  name: 'OrgUserType',
  fields: () => ({
    user_ids: {
      type: new GraphQLList(GraphQLString),
      description: 'List of users which are connected to the organization'
    },
    organization_id: {
      type: new GraphQLList(GraphQLString),
      description: 'Organization to which user is connected'
    }
  })
});

const OrgUserInputType = new GraphQLInputObjectType({
  name: 'Org_User',
  fields: () => ({
    organization_user: {
      type: OrgUserType
    },
    type: {
      type: customerEnum,
      description: 'Customer type - can be Guest , individual user or organization\'s User'
    }
  })
});

const IndividualUserType = new GraphQLInputObjectType({
  name: 'IndividualUserType',
  fields: () => ({
    user_id: {
      type: GraphQLString,
      description: 'List of individual users'
    },
    address: {
      type: AddressInputType,
      description: 'Address of User',
    },
    contact_point: {
      type: new GraphQLList(ContactPointInputType),
      description: 'List of different legal addresses',
    }
  })
});

const IndividualUserInputType = new GraphQLInputObjectType({
  name: 'Individual_User',
  fields: () => ({
    individual_user: {
      type: IndividualUserType
    },
    type: {
      type: customerEnum,
      description: 'Customer type - can be Guest , individual user or organization\'s User'
    }
  })
});

const GuestTypeInput = new GraphQLInputObjectType({
  name: 'GuestTypeInput',
  fields: () => ({
    guest: {
      type: GraphQLBoolean,
      description: 'Flag to indicate guest'
    },
    address: {
      type: AddressInputType,
      description: 'Address of User',
    },
    contact_point: {
      type: new GraphQLList(ContactPointInputType),
      description: 'List of different legal addresses',
    }
  })
});

const GuestInputType = new GraphQLInputObjectType({
  name: 'Guest',
  fields: () => ({
    guest: {
      type: GuestTypeInput
    },
    type: {
      type: customerEnum,
      description: 'Customer type - Guest'
    }
  })
});

const CustomeredType = new GraphQLInterfaceType({
  name: 'CustomeredType',
  fields: {
    type: {
      type: customerEnum
    }
  }
});

const CustomerTargetUnionType = new UnionInputType({
  name: 'CustomerTargetUnionType',
  interfaces: [CustomeredType],
  inputTypes: [OrgUserInputType, GuestInputType, IndividualUserInputType],
  typeKey: 'type'
});

/* const OrgUserOutputType = new GraphQLObjectType({
  name: 'OrgUserOutputType',
  description: 'OrgUser output type',
  fields: () => ({
    user: {
      type: UserType,
      description: 'User linked to the customer',
      resolve: ({ user }, args, ctx) => resolveNested(ctx, 'user', user.user_id)
    }
  }),
});*/

/* const guestFields = {
  guest: {
    type: GraphQLBoolean,
    description: 'Is guest?',
  },
  address_id: {
    type: GraphQLString,
    description: 'Address of guest',
  },
  contact_point: {
    type: GraphQLString,
    description: 'Contact point',
  }
};*/

/* const GuestType = new GraphQLObjectType({
  name: 'GuestType',
  description: 'Guest data',
  fields: () => (
    _.merge({}, guestFields, {
      meta: {
        type: MetaType,
        description: 'Meta info'
      },
      address: {
        type: AddressType,
        description: 'Address of Guest',
        resolve: ({ address_id }, args, ctx) => resolveNested(ctx, 'address', address_id)
      },
      contact_points: {
        type: new GraphQLList(ContactPointType),
        description: 'List of different legal addresses',
        resolve: ({ contact_point_ids }, args, ctx) => resolveNested(ctx, 'contact_point', contact_point_ids)
      }
    })),
});*/

/* const GuestOutputType = new GraphQLObjectType({
  name: 'GuestOutputType',
  description: 'Guest output type',
  fields: () => ({
    products: {
      type: new GraphQLList(GuestType),
      description: 'Guest '
    }
  })
});*/

const IndividualUserOutputType = new GraphQLObjectType({
  name: 'IndividualUserOutputType',
  description: 'Individual user output type',
  fields: () => ({
    user: {
      type: UserType,
      description: 'Individual user',
      resolve: ({ user_id }, args, ctx) => resolveNested(ctx, 'user', user_id)
    },
    address: {
      type: AddressType,
      description: 'Address Type',
    },
    contact_point: {
      type: ContactPointType,
      description: 'ContactPoint Type'
    }
  })
});

export const CustomerType = new GraphQLObjectType({
  name: 'CustomerType',
  description: 'Customer proto description',
  fields: () => (_.merge({}, fields, {
    meta: {
      type: MetaType,
      description: 'Meta info'
    },
    individual_user: {
      type: IndividualUserOutputType,
      description: 'Individual output Type'
    }
  }))
});

export const outputCustomerType = new GraphQLObjectType({
  name: 'outputCustomerType',
  description: 'Customer output description',
  fields: () => ({
    details: {
      type: new GraphQLList(CustomerType)
    },
    error: {
      type: ErrorListType
    }
  })
});

export const CustomerUpdateInputType = new GraphQLInputObjectType({
  name: 'CustomerUpdateInputType',
  fields: () => (_.merge({}, fields, {
    customer: {
      type: CustomerInputType
    }
  }))
});


/**
 mutation{
createCustomer (  input:{listOfCustomers: {
  customer: { individual_user: {user_ids: "test",address_id:"test",contact_points:"test"}, type: IndividualUsers}
   }})
  {
    details {id}
    error {message}
  }
}

 mutation{
createCustomer (  input:{listOfCustomers: {
  customer: { organization_user: {user_ids: "8b5593f68652490faa542a7b5b4e9158",organization_id:"sadsa"}, type: OrgUsers}
   }})
  {
    details {id}
    error {message}
  }
}

 mutation{
createCustomer (  input:{listOfCustomers: {
  customer: { guest: {guest_ids: "8b5593f68652490faa542a7b5b4e9158",address_id:"sadsa",contact_points:"fwacawd"}, type: Guests}
   }})
  {
    details {id}
    error {message}
  }
}

 */
