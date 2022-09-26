import { Effect } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/rule';
import { ReverseQuery, DeepPartial } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/access_control';

export const permitLocationRule = {
  id: 'location_rule_id',
  target: {
    subject: [
      {
        id: 'urn:restorecommerce:acs:names:role',
        value: 'test-role'
      },
      {
        id: 'urn:restorecommerce:acs:names:roleScopingEntity',
        value: 'urn:test:acs:model:organization.Organization'
      },
      {
        id: 'urn:restorecommerce:acs:names:hierarchicalRoleScoping',
        value: 'true'
      }],
    resources: [{
      id: 'urn:restorecommerce:acs:names:model:entity',
      value: 'urn:test:acs:model:Location.Location'
    }],
    action: []
  },
  effect: Effect.PERMIT
};

export const permitLocationRuleProperty = {
  id: 'location_rule_id',
  target: {
    subject: [
      {
        id: 'urn:restorecommerce:acs:names:role',
        value: 'test-role'
      },
      {
        id: 'urn:restorecommerce:acs:names:roleScopingEntity',
        value: 'urn:test:acs:model:organization.Organization'
      },
      {
        id: 'urn:restorecommerce:acs:names:hierarchicalRoleScoping',
        value: 'true'
      }],
    resources: [{
      id: 'urn:restorecommerce:acs:names:model:entity',
      value: 'urn:test:acs:model:Location.Location'
    }, {
      id: 'urn:restorecommerce:acs:names:model:property',
      value: 'urn:test:acs:model:Location.Location#name'
    }, {
      id: 'urn:restorecommerce:acs:names:model:property',
      value: 'urn:test:acs:model:Location.Location#description'
    }],
    action: []
  },
  effect: Effect.PERMIT
};

export const fallbackRule = {
  id: 'deny_rule_id',
  target: {
    action: [],
    resources: [],
    subject: []
  },
  effect: Effect.DENY
};

export const permitAddressRule = {
  id: 'address_rule_id',
  target: {
    subject: [
      {
        id: 'urn:restorecommerce:acs:names:role',
        value: 'test-role'
      },
      {
        id: 'urn:restorecommerce:acs:names:roleScopingEntity',
        value: 'urn:test:acs:model:organization.Organization'
      },
      {
        id: 'urn:restorecommerce:acs:names:hierarchicalRoleScoping',
        value: 'true'
      }],
    resources: [{
      id: 'urn:restorecommerce:acs:names:model:entity',
      value: 'urn:test:acs:model:Address.Address'
    }],
    action: []
  },
  effect: Effect.PERMIT
};

export const permitAddressRuleProperty = {
  id: 'address_rule_id',
  target: {
    subject: [
      {
        id: 'urn:restorecommerce:acs:names:role',
        value: 'test-role'
      },
      {
        id: 'urn:restorecommerce:acs:names:roleScopingEntity',
        value: 'urn:test:acs:model:organization.Organization'
      },
      {
        id: 'urn:restorecommerce:acs:names:hierarchicalRoleScoping',
        value: 'true'
      }],
    resources: [{
      id: 'urn:restorecommerce:acs:names:model:entity',
      value: 'urn:test:acs:model:Address.Address'
    }, {
      id: 'urn:restorecommerce:acs:names:model:property',
      value: 'urn:test:acs:model:Address.Address#name'
    }, {
      id: 'urn:restorecommerce:acs:names:model:property',
      value: 'urn:test:acs:model:Address.Address#description'
    }],
    action: []
  },
  effect: Effect.PERMIT
};

export const addressAndLocationObligation = [{
  id: 'urn:restorecommerce:acs:names:model:entity',
  value: 'urn:restorecommerce:acs:model:Location.Location',
  attribute: [
    {
      id: 'urn:restorecommerce:acs:names:obligation:maskedProperty',
      value: 'urn:restorecommerce:acs:model:Location.Location#name'
    },
    {
      id: 'urn:restorecommerce:acs:names:obligation:maskedProperty',
      value: 'urn:restorecommerce:acs:model:Location.Location#description'
    }
  ]
},
{
  id: 'urn:restorecommerce:acs:names:model:entity',
  value: 'urn:restorecommerce:acs:model:Address.Address',
  attribute: [
    {
      id: 'urn:restorecommerce:acs:names:obligation:maskedProperty',
      value: 'urn:restorecommerce:acs:model:Address.Address#name'
    },
    {
      id: 'urn:restorecommerce:acs:names:obligation:maskedProperty',
      value: 'urn:restorecommerce:acs:model:Address.Address#description'
    }
  ]
}
];

export let policySetRQ: DeepPartial<ReverseQuery> = {
  policy_sets:
    [{
      combining_algorithm: 'urn:oasis:names:tc:xacml:3.0:rule-combining-algorithm:deny-overrides',
      id: 'test_policy_set_id',
      policies: [
        {
          combining_algorithm: 'urn:oasis:names:tc:xacml:3.0:rule-combining-algorithm:permit-overrides',
          id: 'location_policy_id',
          target: {
            action: [],
            resources: [{
              id: 'urn:restorecommerce:acs:names:model:entity',
              value: 'urn:test:acs:model:Location.Location'
            }],
            subject: []
          }, effect: Effect.PERMIT,
          rules: [ // permit or deny rule will be added
          ],
          has_rules: true
        },
        {
          combining_algorithm: 'urn:oasis:names:tc:xacml:3.0:rule-combining-algorithm:permit-overrides',
          id: 'address_policy_id',
          target: {
            action: [],
            resources: [{
              id: 'urn:restorecommerce:acs:names:model:entity',
              value: 'urn:test:acs:model:Address.Address'
            }],
            subject: []
          }, effect: Effect.PERMIT,
          rules: [ // permit or deny rule will be added
          ],
          has_rules: true
        }]
    }],
  obligation: [],
  operation_status: {
    code: 200,
    message: 'success'
  }
};

export const unauthenticatedSubject = [
  { // unauthenticated user
    id: 'urn:restorecommerce:acs:names:unauthenticated-user',
    value: 'true'
  }];
export const authenticatedSubject = [
  { // authenticated user
    id: 'urn:oasis:names:tc:xacml:1.0:subject:subject-id',
    value: 'test_user_id'
  },
  {
    id: 'urn:restorecommerce:acs:names:roleScopingEntity',
    value: 'urn:test:acs:model:organization.Organization'
  },
  {
    id: 'urn:restorecommerce:acs:names:roleScopingInstance',
    value: 'targetScope'
  }
];
export const locationAddressResources = [
  // Location and Address resource resource
  { id: 'urn:restorecommerce:acs:names:model:entity', value: 'urn:test:acs:model:Location.Location' },
  { id: 'urn:oasis:names:tc:xacml:1.0:resource:resource-id', value: 'location_id' },
  { id: 'urn:restorecommerce:acs:names:model:entity', value: 'urn:test:acs:model:Address.Address' },
  { id: 'urn:oasis:names:tc:xacml:1.0:resource:resource-id', value: 'address_id' }];
export const createAction = [
  { // action create
    id: 'urn:oasis:names:tc:xacml:1.0:action:action-id',
    value: 'urn:restorecommerce:acs:names:action:create'
  }
];
export const readAction = [
  { // action read
    id: 'urn:oasis:names:tc:xacml:1.0:action:action-id',
    value: 'urn:restorecommerce:acs:names:action:read'
  }
];
