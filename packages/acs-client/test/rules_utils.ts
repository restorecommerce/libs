export const permitLocationRule = {
  id: 'location_rule_id',
  target: {
    subject: [
      {
        'id': 'urn:restorecommerce:acs:names:role',
        'value': 'test-role'
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
      'value': 'urn:test:acs:model:Location.Location'
    }],
    action: []
  },
  effect: 'PERMIT'
};

export const permitLocationRuleProperty = {
  id: 'location_rule_id',
  target: {
    subject: [
      {
        'id': 'urn:restorecommerce:acs:names:role',
        'value': 'test-role'
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
      'value': 'urn:test:acs:model:Location.Location'
    }, {
      id: 'urn:restorecommerce:acs:names:model:property',
      value: 'urn:test:acs:model:Location.Location#name'
    }, {
      id: 'urn:restorecommerce:acs:names:model:property',
      value: 'urn:test:acs:model:Location.Location#description'
    }],
    action: []
  },
  effect: 'PERMIT'
};

export const fallbackRule = {
  id: 'deny_rule_id',
  target: {
    action: [],
    resources: [],
    subject: []
  },
  effect: 'DENY'
};

export const permitAddressRule = {
  id: 'address_rule_id',
  target: {
    subject: [
      {
        'id': 'urn:restorecommerce:acs:names:role',
        'value': 'test-role'
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
      'value': 'urn:test:acs:model:Address.Address'
    }],
    action: []
  },
  effect: 'PERMIT'
};

export let policySetRQ = {
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
          }, effect: 'PERMIT',
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
          }, effect: 'PERMIT',
          rules: [ // permit or deny rule will be added
          ],
          has_rules: true
        }]
    }],
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
    id: "urn:oasis:names:tc:xacml:1.0:subject:subject-id",
    value: "test_user_id"
  },
  {
    id: "urn:restorecommerce:acs:names:roleScopingEntity",
    value: "urn:test:acs:model:organization.Organization"
  },
  {
    id: "urn:restorecommerce:acs:names:roleScopingInstance",
    value: "targetScope"
  }
];
export const resources = [
  // Location resource
  { id: 'urn:restorecommerce:acs:names:model:entity', value: 'urn:test:acs:model:Location.Location' },
  { id: 'urn:oasis:names:tc:xacml:1.0:resource:resource-id', value: 'location_id' }];
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