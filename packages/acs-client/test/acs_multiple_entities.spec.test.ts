import * as should from 'should';
import { accessRequest, isAllowed, whatIsAllowed } from '../lib/acs/resolver';
import { flushCache, initializeCache } from '../lib/acs/cache';
import { createMockServer } from 'grpc-mock';
import { AuthZAction, Decision, DecisionResponse, PolicySetRQResponse, Operation, ACSClientContext, ACSRequest } from '../lib/acs/interfaces';
import { initAuthZ, ACSAuthZ } from '../lib/acs/authz';
import logger from '../lib/logger';
import * as _ from 'lodash';
import { cfg } from '../lib';

let authZ: ACSAuthZ;
let mockServer: any;

const permitLocationRule = {
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

const fallbackRule = {
  id: 'deny_rule_id',
  target: {
    action: [],
    resources: [],
    subject: []
  },
  effect: 'DENY'
};

const permitAddressRule = {
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

let policySetRQ = {
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

const unauthenticatedSubject = [
  { // unauthenticated user
    id: 'urn:restorecommerce:acs:names:unauthenticated-user',
    value: 'true'
  }];
const authenticatedSubject = [
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
const resources = [
  // Location resource
  { id: 'urn:restorecommerce:acs:names:model:entity', value: 'urn:test:acs:model:Location.Location' },
  { id: 'urn:oasis:names:tc:xacml:1.0:resource:resource-id', value: 'location_id' }];
const createAction = [
  { // action create
    id: 'urn:oasis:names:tc:xacml:1.0:action:action-id',
    value: 'urn:restorecommerce:acs:names:action:create'
  }
];
const readAction = [
  { // action read
    id: 'urn:oasis:names:tc:xacml:1.0:action:action-id',
    value: 'urn:restorecommerce:acs:names:action:read'
  }
];

const encode = (object: any): any => {
  if (_.isArray(object)) {
    return _.map(object, encode);
  } else {
    return {
      value: Buffer.from(JSON.stringify(object))
    };
  }
};

interface serverRule {
  method: string,
  input: any,
  output: any
}

const updateMetaData = (resourceList: Array<any>) => {
  if (!_.isArray(resourceList)) {
    resourceList = [resourceList];
  }
  return resourceList.map((resource): any => {
    if (!resource.meta) {
      resource.meta = {};
    }
    resource.meta.owner = [
      {
        id: 'urn:restorecommerce:acs:names:ownerIndicatoryEntity',
        value: 'urn:test:acs:model:organization.Organization'
      },
      {
        id: 'urn:restorecommerce:acs:names:ownerInstance',
        value: 'targetScope'
      }
    ];
    return resource;
  });
}

const startGrpcMockServer = async (rules: serverRule[]) => {
  // Create a mock ACS server to expose isAllowed and whatIsAllowed
  mockServer = createMockServer({
    protoPath: 'test/protos/io/restorecommerce/access_control.proto',
    packageName: 'io.restorecommerce.access_control',
    serviceName: 'Service',
    options: {
      keepCase: true
    },
    rules
  });
  mockServer.listen('0.0.0.0:50061');
  logger.info('ACS Server started on port 50061');
};

const stopGrpcMockServer = async () => {
  await mockServer.close(() => {
    logger.info('Server closed successfully');
  });
};

async function start(): Promise<void> {
  // init AuthZ - initialises acs-client connection object
  authZ = await initAuthZ() as ACSAuthZ;
}

async function stop(): Promise<void> {
  // await worker.stop();
}

// user
let subject = {
  id: 'test_user_id',
  name: 'test_user',
  scope: 'targetScope',
  role_associations: [
    {
      role: 'test-role',
      attributes: [
        {
          id: 'urn:restorecommerce:acs:names:roleScopingEntity',
          value: 'urn:test:acs:model:organization.Organization'
        },
        {
          id: 'urn:restorecommerce:acs:names:roleScopingInstance',
          value: 'targetScope'
        }
      ]
    }
  ],
  hierarchical_scopes: [{
    id: 'targetScope',
    children: [{
      id: 'targetSubScope'
    }]
  }]
};

describe('testing acs-client with multiple entities', () => {
  before(async function startServer(): Promise<void> {
    this.timeout(60000);
    const cacheEnabled = process.env.CACHE_ENABLED;
    if (cacheEnabled && cacheEnabled.toLowerCase() === 'true') {
      await initializeCache();
    }
    await start();
  });

  after(async function stopServer(): Promise<void> {
    await stop();
    const cacheEnabled = process.env.CACHE_ENABLED;
    if (cacheEnabled && cacheEnabled.toLowerCase() === 'true') {
      await flushCache();
    }
  });

  beforeEach(async function flush() {
    await flushCache('test_user_id:');
  });

  describe('Test accessRequest', () => {
    // PERMIT tests
    it('Should PERMIT creating Location and Address resource for isAllowed operation with valid user ctx', async () => {
      startGrpcMockServer([{
        method: 'IsAllowed', input: '\{.*\:\{.*\:.*\}\}',
        output: { decision: 'PERMIT', operation_status: { code: 200, message: 'success' } }
      },
      { method: 'WhatIsAllowed', input: '.*', output: {} }]);
      // test resource to be created
      let testResource = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description'
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description'
      }];
      testResource = updateMetaData(testResource);
      let ctx: ACSClientContext = { subject };
      ctx.resources = testResource;
      // call accessRequest(), the response is from mock ACS
      const response = await accessRequest(subject,
        [{ entity: 'Location', id: 'location_id' }, { entity: 'Address', id: 'address_id' }],
        AuthZAction.CREATE, ctx, Operation.isAllowed) as DecisionResponse;
      should.exist(response);
      response.decision.should.equal('PERMIT');
      response.operation_status.code.should.equal(200);
      response.operation_status.message.should.equal('success');
      stopGrpcMockServer();
    });
    it('Should PERMIT Reading Location and Address resource for isAllowed Operation with valid user ctx', async () => {
      startGrpcMockServer([{
        method: 'IsAllowed', input: '\{.*\:\{.*\:.*\}\}',
        output: { decision: 'PERMIT', operation_status: { code: 200, message: 'success' } }
      },
      { method: 'WhatIsAllowed', input: '.*', output: {} }]);
      // test resource to be created
      let testResource = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description'
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description'
      }];
      testResource = updateMetaData(testResource);
      let ctx: ACSClientContext = { subject };
      ctx.resources = testResource;
      // call accessRequest(), the response is from mock ACS
      const response = await accessRequest(subject,
        [{ entity: 'Location', id: 'location_id' }, { entity: 'Address', id: 'address_id' }],
        AuthZAction.READ, ctx, Operation.isAllowed) as DecisionResponse;
      should.exist(response);
      response.decision.should.equal('PERMIT');
      response.operation_status.code.should.equal(200);
      response.operation_status.message.should.equal('success');
      stopGrpcMockServer();
    });
    it(`postgres DB - Should PERMIT Reading Location and Address resource for 
      whatIsAllowed operation and return applicable filters for Location and Address with valid user ctx`, async () => {
      // Location Permit Rule with fallback rule
      policySetRQ.policy_sets[0].policies[0].rules = [permitLocationRule, fallbackRule];
      // Address Permit Rule with fallback rule
      policySetRQ.policy_sets[0].policies[1].rules = [permitAddressRule, fallbackRule];
      startGrpcMockServer([{
        method: 'IsAllowed', input: '\{.*\:\{.*\:.*\}\}',
        output: { decision: 'PERMIT', operation_status: { code: 200, message: 'success' } }
      },
      { method: 'WhatIsAllowed', input: '.*', output: policySetRQ }]);
      // test resource to be created
      let testResource = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description'
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description'
      }];
      testResource = updateMetaData(testResource);
      let ctx: ACSClientContext = { subject };
      // call accessRequest(), the response is from mock ACS
      const response = await accessRequest(subject,
        [{ entity: 'Location' }, { entity: 'Address' }],
        AuthZAction.READ, ctx, Operation.whatIsAllowed, 'postgres') as PolicySetRQResponse;
      response.decision.should.equal('PERMIT');
      response.policy_sets[0].policies[0].rules[0].id.should.equal('location_rule_id');
      response.policy_sets[0].policies[1].rules[0].id.should.equal('address_rule_id');
      response.custom_query_args.should.be.empty();
      const entityFilters = response.filters;
      // validate location filters
      entityFilters[0].entity.should.equal('Location');
      entityFilters[0].filters[0].filter[0].value.should.equal('targetScope');
      entityFilters[0].filters[0].filter[1].value.should.equal('targetSubScope');
      // validate address filters
      entityFilters[1].entity.should.equal('Address');
      entityFilters[1].filters[0].filter[0].value.should.equal('targetScope');
      entityFilters[1].filters[0].filter[1].value.should.equal('targetSubScope');
      stopGrpcMockServer();
    });
    it(`ArangoDB - Should PERMIT Reading Location and Address resource for 
      whatIsAllowed operation and return applicable custom query and arguments
      for Location and Address with valid user ctx`, async () => {
      // Location Permit Rule with fallback rule
      policySetRQ.policy_sets[0].policies[0].rules = [permitLocationRule, fallbackRule];
      // Address Permit Rule with fallback rule
      policySetRQ.policy_sets[0].policies[1].rules = [permitAddressRule, fallbackRule];
      startGrpcMockServer([{
        method: 'IsAllowed', input: '\{.*\:\{.*\:.*\}\}',
        output: { decision: 'PERMIT', operation_status: { code: 200, message: 'success' } }
      },
      { method: 'WhatIsAllowed', input: '.*', output: policySetRQ }]);
      // test resource to be created
      let testResource = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description'
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description'
      }];
      testResource = updateMetaData(testResource);
      let ctx: ACSClientContext = { subject };
      // call accessRequest(), the response is from mock ACS
      const response = await accessRequest(subject,
        [{ entity: 'Location' }, { entity: 'Address' }],
        AuthZAction.READ, ctx, Operation.whatIsAllowed, 'arangoDB') as PolicySetRQResponse;
      const expectedCustomArgs = { entity: 'urn:test:acs:model:organization.Organization', instance: ['targetScope', 'targetSubScope'] };
      // validate custom query args for Location
      response.custom_query_args[0].entity.should.equal('Location');
      response.custom_query_args[0].custom_queries[0].should.equal('filterByOwnership');
      const locationCustomArgs = JSON.parse(response.custom_query_args[0].custom_arguments.value.toString());
      locationCustomArgs.should.deepEqual(expectedCustomArgs);
      // validate custom query args for Address
      response.custom_query_args[1].entity.should.equal('Address');
      response.custom_query_args[1].custom_queries[0].should.equal('filterByOwnership');
      const addressCustomArgs = JSON.parse(response.custom_query_args[1].custom_arguments.value.toString());
      addressCustomArgs.should.deepEqual(expectedCustomArgs);
      stopGrpcMockServer();
    });

    // DENY tests
    it('Should DENY creating Location and Address resource for isAllowed operation with invalid user ctx', async () => {
      startGrpcMockServer([{
        method: 'IsAllowed', input: '\{.*\:\{.*\:.*\}\}',
        output: { decision: 'DENY', operation_status: { code: 200, message: 'success' } }
      },
      { method: 'WhatIsAllowed', input: '.*', output: {} }]);
      // test resource to be created
      let testResource = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description'
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description'
      }];
      subject.scope = 'invalidTargetScope'; // set invalid target scope
      testResource = updateMetaData(testResource);
      let ctx: ACSClientContext = { subject };
      ctx.resources = testResource;
      // call accessRequest(), the response is from mock ACS
      const response = await accessRequest(subject,
        [{ entity: 'Location', id: 'location_id' }, { entity: 'Address', id: 'address_id' }],
        AuthZAction.CREATE, ctx, Operation.isAllowed) as DecisionResponse;
      should.exist(response);
      response.decision.should.equal('DENY');
      response.operation_status.code.should.equal(403);
      response.operation_status.message.should.equal('Access not allowed for request with subject:test_user_id, resource:["Location","Address"], action:CREATE, target_scope:invalidTargetScope; the response was DENY');
      stopGrpcMockServer();
    });
    it('Should DENY Reading Location and Address resource for isAllowed Operation with invalid user ctx', async () => {
      startGrpcMockServer([{
        method: 'IsAllowed', input: '\{.*\:\{.*\:.*\}\}',
        output: { decision: 'DENY', operation_status: { code: 200, message: 'success' } }
      },
      { method: 'WhatIsAllowed', input: '.*', output: {} }]);
      // test resource to be created
      let testResource = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description'
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description'
      }];
      testResource = updateMetaData(testResource);
      subject.scope = 'invalidTargetScope'; // set invalid target scope
      let ctx: ACSClientContext = { subject };
      ctx.resources = testResource;
      // call accessRequest(), the response is from mock ACS
      const response = await accessRequest(subject,
        [{ entity: 'Location', id: 'location_id' }, { entity: 'Address', id: 'address_id' }],
        AuthZAction.READ, ctx, Operation.isAllowed) as DecisionResponse;
      should.exist(response);
      response.decision.should.equal('DENY');
      response.operation_status.code.should.equal(403);
      response.operation_status.message.should.equal('Access not allowed for request with subject:test_user_id, resource:["Location","Address"], action:READ, target_scope:invalidTargetScope; the response was DENY');
      stopGrpcMockServer();
    });
    it(`postgres DB - Should DENY Reading Location and Address resource for 
      whatIsAllowed operation with invalid user ctx`, async () => {
      // Location Deny fallback rule
      policySetRQ.policy_sets[0].policies[0].rules = [fallbackRule];
      // Address Deny fallback rule
      policySetRQ.policy_sets[0].policies[1].rules = [fallbackRule];
      startGrpcMockServer([{
        method: 'IsAllowed', input: '\{.*\:\{.*\:.*\}\}',
        output: { decision: 'PERMIT', operation_status: { code: 200, message: 'success' } }
      },
      { method: 'WhatIsAllowed', input: '.*', output: policySetRQ }]);
      // test resource to be created
      let testResource = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description'
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description'
      }];
      testResource = updateMetaData(testResource);
      subject.scope = 'invalidTargetScope'; // set invalid target scope
      let ctx: ACSClientContext = { subject };
      // call accessRequest(), the response is from mock ACS
      const response = await accessRequest(subject,
        [{ entity: 'Location' }, { entity: 'Address' }],
        AuthZAction.READ, ctx, Operation.whatIsAllowed, 'postgres') as PolicySetRQResponse;
      response.decision.should.equal('DENY');
      response.operation_status.code.should.equal(403);
      response.operation_status.message.should.equal('Access not allowed for request with subject:test_user_id, resource:Location, action:READ, target_scope:invalidTargetScope; the response was DENY');
      stopGrpcMockServer();
    });
    it(`ArangoDB - Should PERMIT Reading Location and Address resource for 
      whatIsAllowed operation and return applicable custom query and arguments
      for Location and Address with valid user ctx`, async () => {
      // Location Deny fallback rule
      policySetRQ.policy_sets[0].policies[0].rules = [fallbackRule];
      // Address Deny fallback rule
      policySetRQ.policy_sets[0].policies[1].rules = [fallbackRule];
      startGrpcMockServer([{
        method: 'IsAllowed', input: '\{.*\:\{.*\:.*\}\}',
        output: { decision: 'PERMIT', operation_status: { code: 200, message: 'success' } }
      },
      { method: 'WhatIsAllowed', input: '.*', output: policySetRQ }]);
      // test resource to be created
      let testResource = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description'
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description'
      }];
      testResource = updateMetaData(testResource);
      subject.scope = 'invalidTargetScope'; // set invalid target scope
      let ctx: ACSClientContext = { subject };
      // call accessRequest(), the response is from mock ACS
      const response = await accessRequest(subject,
        [{ entity: 'Location' }, { entity: 'Address' }],
        AuthZAction.READ, ctx, Operation.whatIsAllowed, 'arangoDB') as PolicySetRQResponse;
      response.decision.should.equal('DENY');
      response.operation_status.code.should.equal(403);
      response.operation_status.message.should.equal('Access not allowed for request with subject:test_user_id, resource:Location, action:READ, target_scope:invalidTargetScope; the response was DENY');
      stopGrpcMockServer();
    });
  });
});
