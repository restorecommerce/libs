import { createServiceConfig } from '@restorecommerce/service-config';
// Export cfg Object
export let cfg: any = createServiceConfig(process.cwd());
// errors mapped to code and message

export const errors = {
  INVALID_CREDENTIALS: {
    code: 401,
    message: 'Invalid credentials'
  },
  USER_NOT_LOGGED_IN: {
    code: 401,
    message: 'User not logged in, please login first!'
  },
  ACTION_NOT_ALLOWED: {
    code: 403,
    message: 'Action not allowed on this resource'
  },
  SYSTEM_ERROR: {
    code: 500,
    message: 'System Error!'
  },
};
export type KnownErrors = typeof errors;
Object.assign(errors, cfg.get('errors'));

export const urns = {
  entity: 'urn:restorecommerce:acs:names:model:entity',
  role: 'urn:restorecommerce:acs:names:role',
  roleScopingEntity: 'urn:restorecommerce:acs:names:roleScopingEntity',
  roleScopingInstance: 'urn:restorecommerce:acs:names:roleScopingInstance',
  hierarchicalRoleScoping: 'urn:restorecommerce:acs:names:hierarchicalRoleScoping',
  unauthenticated_user: 'urn:restorecommerce:acs:names:unauthenticated-user',
  property: 'urn:restorecommerce:acs:names:model:property',
  ownerIndicatoryEntity: 'urn:restorecommerce:acs:names:ownerIndicatoryEntity',
  ownerInstance: 'urn:restorecommerce:acs:names:ownerInstance',
  subjectID: 'urn:oasis:names:tc:xacml:1.0:subject:subject-id',
  resourceID: 'urn:oasis:names:tc:xacml:1.0:resource:resource-id',
  actionID: 'urn:oasis:names:tc:xacml:1.0:action:action-id',
  action: 'urn:restorecommerce:acs:names:action',
  operation: 'urn:restorecommerce:acs:names:operation',
  execute: 'urn:restorecommerce:acs:names:action:execute',
  permitOverrides: 'urn:oasis:names:tc:xacml:3.0:rule-combining-algorithm:permit-overrides',
  denyOverrides: 'urn:oasis:names:tc:xacml:3.0:rule-combining-algorithm:deny-overrides',
  create: 'urn:restorecommerce:acs:names:action:create',
  read: 'urn:restorecommerce:acs:names:action:read',
  modify: 'urn:restorecommerce:acs:names:action:modify',
  delete: 'urn:restorecommerce:acs:names:action:delete',
  aclIndicatoryEntity: 'urn:restorecommerce:acs:names:aclIndicatoryEntity',
  aclInstance: 'urn:restorecommerce:acs:names:aclInstance',
  skipACL: 'urn:restorecommerce:acs:names:skipACL',
  maskedProperty: 'urn:restorecommerce:acs:names:obligation:maskedProperty',
  model: 'urn:restorecommerce:acs:names:model:entity',
};
export type KnownUrns = typeof urns;
Object.assign(urns, cfg.get('authorization:urns'));

export const updateConfig = (config: any) => {
  cfg = config;
  Object.assign(errors, cfg.get('errors'));
  Object.assign(urns, cfg.get('authorization:urns'));
};
