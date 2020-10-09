import * as _ from 'lodash';
import {
  GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLInputObjectType,
  GraphQLList, GraphQLEnumType
} from 'graphql';
import { ErrorListType } from './ErrorType';
import { LocaleType } from './LocaleType';
import { RoleType } from './RoleType';
import { resolveNested, resolveRoleAssociations } from '../utils';
import { MetaType } from './MetaType';
import { InputAttribute, Attribute } from './AccessControlTypes';
import { OrganizationType } from './OrganizationType';
import { TimezoneType } from './TimezoneType';
import {ImageInputType} from './ImageType';

export const UserEnumType = new GraphQLEnumType({
  name: 'UserEnumType',
  description: 'type of User',
  values: {
    ORG_USER: {
      value: 'ORG_USER',
      description: 'User belonging to an Organization'
    },
    INDIVIDUAL_USER: {
      value: 'INDIVIDUAL_USER',
      description: 'Individual User'
    },
    GUEST: {
      value: 'GUEST',
      description: 'Guest User'
    }
  }
});

export const UserInputType = new GraphQLInputObjectType({
  name: 'UserInputType',
  description: 'User data',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'User ID',
    },
    user_type: {
      type: UserEnumType,
      description: 'Type of User'
    },
    name: {
      type: GraphQLString,
      description: 'Username',
    },
    first_name: {
      type: GraphQLString,
      description: 'User\'s first name',
    },
    last_name: {
      type: GraphQLString,
      description: 'User\'s last name',
    },
    email: {
      type: GraphQLString,
      description: 'User Email address',
    },
    password: {
      type: GraphQLString,
      description: 'Password for this User',
    },
    default_scope: {
      type: GraphQLString,
      description: 'Default Organization Scope for this User',
    },
    guest: {
      type: GraphQLBoolean,
      description: 'Guest user',
    },
    role_associations: {
      type: new GraphQLList(InputRoleAssociation),
      description: 'User Role type',
    },
    locale_id: {
      type: GraphQLString,
      description: 'User locale settings (default is `de-DE`)',
    },
    timezone_id: {
      type: GraphQLString,
      description: 'User timezone settings (default is `Europe/Berlin`)',
    },
    owner: {
      type: new GraphQLList(InputAttribute)
    },
    image: {
      type: ImageInputType,
      description: 'User profile image',
    }
  }),
});

export const InputRoleAssociation = new GraphQLInputObjectType({
  name: 'InputRoleAssociation',
  description: 'Role and attributes',
  fields: () => ({
    role: {
      type: GraphQLString,
      description: 'Role ID'
    },
    attributes: {
      type: new GraphQLList(InputAttribute)
    }
  })
});

export const RoleAssociation = new GraphQLObjectType({
  name: 'RoleAssociation',
  description: 'Role and attributes',
  fields: () => ({
    role: {
      type: GraphQLString,
      description: 'Role ID'
    },
    attributes: {
      type: new GraphQLList(Attribute)
    }
  })
});

export const RoleAssociationResolved = new GraphQLObjectType({
  name: 'RoleAssociationResolved',
  description: 'Role and organization',
  fields: () => ({
    role: {
      type: RoleType,
      description: 'Role'
    },
    organizations: {
      type: new GraphQLList(OrganizationType),
      description: 'Organization'
    }
  })
});

const userResponseType = {
  id: {
    type: GraphQLString,
    description: 'User ID',
    resolve: ({ id }) => id,
  },
  name: {
    type: GraphQLString,
    description: 'User Name',
    resolve: ({ name }) => name,
  },
  first_name: {
    type: GraphQLString,
    resolve: ({ first_name }) => first_name,
  },
  last_name: {
    type: GraphQLString,
    resolve: ({ last_name }) => last_name,
  },
  email: {
    type: GraphQLString,
    description: 'User Email adress',
    resolve: ({ email }) => email,
  },
  default_scope: {
    type: GraphQLString,
    description: 'Default Organization Scope for this User',
    resolve: ({ default_scope }) => default_scope,
  },
  role_associations: {
    type: new GraphQLList(RoleAssociation),
    description: 'User role associations',
    resolve: ({ role_associations }) => role_associations,
  },
  role_associations_resolved: {
    type: new GraphQLList(RoleAssociationResolved),
    description: 'List of User roles',
    resolve: ({ role_associations }, args, ctx) => {
      return resolveRoleAssociations(role_associations, ctx);
    }
  },
  locale_id: {
    type: GraphQLString,
    description: 'User locale settings (default is `de-DE`)',
  },
  locale: {
    type: LocaleType,
    description: 'User locale settings (default is `de-DE`)',
    resolve: ({ locale_id }, args, ctx) => resolveNested(ctx, 'locale', locale_id)
  },
  timezone_id: {
    type: GraphQLString,
    description: 'User timezone',
  },
  timezone: {
    type: TimezoneType,
    description: 'User timezone',
    resolve: ({ timezone_id }, args, ctx) => resolveNested(ctx, 'timezone', timezone_id)
  },
  guest: {
    type: GraphQLBoolean,
    description: 'Guest user',
    resolve: ({ guest }) => guest,
  },
};

export const UserType = new GraphQLObjectType({
  name: 'UserType',
  description: 'User data',
  fields: () => (
    _.merge({}, userResponseType, {
      meta: {
        type: MetaType,
        description: 'Meta info'
      },
      active: {
        type: GraphQLBoolean,
        description: 'User Activation status 1-Active, 0-Inactive',
        resolve: ({ active }) => active,
      },
      activation_code: {
        type: GraphQLString,
        description: 'Activation code used to activate the User',
        resolve: ({ activation_code }) => activation_code,
      },
      unauthenticated: {
        type: GraphQLBoolean,
        description: 'True from time of registry until activation is complete',
      }
    })),
});

export const outputUsersType = new GraphQLObjectType({
  name: 'outputUsersType',
  description: 'Output Users description',
  fields: () => ({
    details: {
      type: new GraphQLList(UserType),
      description: 'Details of the Users',
    },
    error: {
      type: ErrorListType,
      description: 'Error codes and messages',
    },
  }),
});

export const outputUserType = new GraphQLObjectType({
  name: 'outputUserType',
  description: 'Output User description',
  fields: () => ({
    details: {
      type: UserType,
      description: 'Details of the User',
    },
    error: {
      type: ErrorListType,
      description: 'Error codes and messages',
    },
  }),
});

export const ResponseSafeUserType = new GraphQLObjectType({
  name: 'ResponseSafeUserType',
  description: 'User data',
  fields: () => (_.merge({}, userResponseType, {
    scope: {
      type: UserScopeType,
      description: 'User\'s current scope (if set, it overrides `default_scope`)'
    }
  })),
});

const UserScopeType = new GraphQLObjectType({
  name: 'userScopeType',
  description: 'User scope object',
  fields: () => ({
    role_associations: {
      type: new GraphQLList(RoleAssociation)
    },
    scopeOrganization: {
      type: GraphQLString,
      description: 'The chosen scope\'s organization ID'
    }
  })
});
