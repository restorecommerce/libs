import * as should from 'should';
import { accessRequest, isAllowed, whatIsAllowed } from '../lib/acs/resolver';
import { flushCache, initializeCache } from '../lib/acs/cache';
import { createMockServer } from 'grpc-mock';
import {
  AuthZAction, DecisionResponse, PolicySetRQResponse,
  Operation, ACSClientContext, ACSRequest, CtxResource
} from '../lib/acs/interfaces';
import { initAuthZ, ACSAuthZ } from '../lib/acs/authz';
import logger from '../lib/logger';
import * as _ from 'lodash';
import {
  permitLocationRule, policySetRQ, fallbackRule, permitAddressRule,
  permitLocationRuleProperty, createAction, unauthenticatedSubject,
  locationAddressResources, authenticatedSubject, readAction
} from './rules_utils';

let authZ: ACSAuthZ;
let mockServer: any;

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

const updateMetaData = (resourceList: Array<any>): Array<CtxResource>  => {
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
      let testResource: CtxResource[] = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description',
        meta: {
          owner: []
        }
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description',
        meta: {
          owner: []
        }
      }];
      testResource = updateMetaData(testResource);
      let ctx: ACSClientContext = { subject };
      ctx.resources = testResource;
      // call accessRequest(), the response is from mock ACS
      const response = await accessRequest(subject,
        [{ resource: 'Location', id: 'location_id' }, { resource: 'Address', id: 'address_id' }],
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
      let testResource: CtxResource[] = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description',
        meta: {
          owner: []
        }
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description',
        meta: {
          owner: []
        }
      }];
      testResource = updateMetaData(testResource);
      let ctx: ACSClientContext = { subject };
      ctx.resources = testResource;
      // call accessRequest(), the response is from mock ACS
      const response = await accessRequest(subject,
        [{ resource: 'Location', id: 'location_id' }, { resource: 'Address', id: 'address_id' }],
        AuthZAction.READ, ctx, Operation.isAllowed) as DecisionResponse;
      should.exist(response);
      response.decision.should.equal('PERMIT');
      response.operation_status.code.should.equal(200);
      response.operation_status.message.should.equal('success');
      stopGrpcMockServer();
    });
    it(`postgres DB - Should PERMIT Reading Location and Address resource for whatIsAllowed operation and return applicable filters for Location and Address with valid user ctx`, async () => {
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
      let testResource: CtxResource[] = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description',
        meta: {
          owner: []
        }
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description',
        meta: {
          owner: []
        }
      }];
      testResource = updateMetaData(testResource);
      let ctx: ACSClientContext = { subject };
      // call accessRequest(), the response is from mock ACS
      const response = await accessRequest(subject,
        [{ resource: 'Location' }, { resource: 'Address' }],
        AuthZAction.READ, ctx, Operation.whatIsAllowed, 'postgres') as PolicySetRQResponse;
      response.decision.should.equal('PERMIT');
      response.policy_sets[0].policies[0].rules[0].id.should.equal('location_rule_id');
      response.policy_sets[0].policies[1].rules[0].id.should.equal('address_rule_id');
      response.custom_query_args.should.be.empty();
      const entityFilters = response.filters;
      // validate location filters
      entityFilters[0].resource.should.equal('Location');
      entityFilters[0].filters[0].filter[0].value.should.equal('targetScope');
      entityFilters[0].filters[0].filter[1].value.should.equal('targetSubScope');
      // validate address filters
      entityFilters[1].resource.should.equal('Address');
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
      let testResource: CtxResource[] = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description',
        meta: {
          owner: []
        }
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description',
        meta: {
          owner: []
        }
      }];
      testResource = updateMetaData(testResource);
      let ctx: ACSClientContext = { subject };
      // call accessRequest(), the response is from mock ACS
      const response = await accessRequest(subject,
        [{ resource: 'Location' }, { resource: 'Address' }],
        AuthZAction.READ, ctx, Operation.whatIsAllowed, 'arangoDB') as PolicySetRQResponse;
      const expectedCustomArgs = { entity: 'urn:test:acs:model:organization.Organization', instance: ['targetScope', 'targetSubScope'] };
      // validate custom query args for Location
      response.custom_query_args[0].resource.should.equal('Location');
      response.custom_query_args[0].custom_queries[0].should.equal('filterByOwnership');
      const locationCustomArgs = JSON.parse(response.custom_query_args[0].custom_arguments.value.toString());
      locationCustomArgs.should.deepEqual(expectedCustomArgs);
      // validate custom query args for Address
      response.custom_query_args[1].resource.should.equal('Address');
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
      let testResource: CtxResource[] = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description',
        meta: {
          owner: []
        }
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description',
        meta: {
          owner: []
        }
      }];
      subject.scope = 'invalidTargetScope'; // set invalid target scope
      testResource = updateMetaData(testResource);
      let ctx: ACSClientContext = { subject };
      ctx.resources = testResource;
      // call accessRequest(), the response is from mock ACS
      const response = await accessRequest(subject,
        [{ resource: 'Location', id: 'location_id' }, { resource: 'Address', id: 'address_id' }],
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
      let testResource: CtxResource[] = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description',
        meta: {
          owner: []
        }
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description',
        meta: {
          owner: []
        }
      }];
      testResource = updateMetaData(testResource);
      subject.scope = 'invalidTargetScope'; // set invalid target scope
      let ctx: ACSClientContext = { subject };
      ctx.resources = testResource;
      // call accessRequest(), the response is from mock ACS
      const response = await accessRequest(subject,
        [{ resource: 'Location', id: 'location_id' }, { resource: 'Address', id: 'address_id' }],
        AuthZAction.READ, ctx, Operation.isAllowed) as DecisionResponse;
      should.exist(response);
      response.decision.should.equal('DENY');
      response.operation_status.code.should.equal(403);
      response.operation_status.message.should.equal('Access not allowed for request with subject:test_user_id, resource:["Location","Address"], action:READ, target_scope:invalidTargetScope; the response was DENY');
      stopGrpcMockServer();
    });
    it(`postgres DB - Should DENY Reading Location and Address resource for whatIsAllowed operation due to Address Deny`, async () => {
      // Location permit and fallback rule
      policySetRQ.policy_sets[0].policies[0].rules = [permitLocationRule, fallbackRule];
      // Address Deny fallback rule
      policySetRQ.policy_sets[0].policies[1].rules = [fallbackRule];
      startGrpcMockServer([{
        method: 'IsAllowed', input: '\{.*\:\{.*\:.*\}\}',
        output: { decision: 'PERMIT', operation_status: { code: 200, message: 'success' } }
      },
      { method: 'WhatIsAllowed', input: '.*', output: policySetRQ }]);
      // test resource to be created
      let testResource: CtxResource[] = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description',
        meta: {
          owner: []
        }
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description',
        meta: {
          owner: []
        }
      }];
      testResource = updateMetaData(testResource);
      subject.scope = 'targetScope'; // set valid targetScope so that Location is PERMIT, but Address is Deny based on fallback rule
      let ctx: ACSClientContext = { subject };
      // call accessRequest(), the response is from mock ACS
      const response = await accessRequest(subject,
        [{ resource: 'Location' }, { resource: 'Address' }],
        AuthZAction.READ, ctx, Operation.whatIsAllowed, 'postgres') as PolicySetRQResponse;
      response.decision.should.equal('DENY');
      response.operation_status.code.should.equal(403);
      response.operation_status.message.should.equal('Access not allowed for request with subject:test_user_id, resource:Address, action:READ, target_scope:targetScope; the response was DENY');
      stopGrpcMockServer();
    });
    it(`ArangoDB - Should DENY Reading Location and Address resource for whatIsAllowed operation due to Address Deny`, async () => {
      // Location permit and Deny fallback rule
      policySetRQ.policy_sets[0].policies[0].rules = [permitLocationRule, fallbackRule];
      // Address Deny fallback rule
      policySetRQ.policy_sets[0].policies[1].rules = [fallbackRule];
      startGrpcMockServer([{
        method: 'IsAllowed', input: '\{.*\:\{.*\:.*\}\}',
        output: { decision: 'PERMIT', operation_status: { code: 200, message: 'success' } }
      },
      { method: 'WhatIsAllowed', input: '.*', output: policySetRQ }]);
      // test resource to be created
      let testResource: CtxResource[] = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description',
        meta: {
          owner: []
        }
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description',
        meta: {
          owner: []
        }
      }];
      testResource = updateMetaData(testResource);
      subject.scope = 'targetScope'; // set valid targetScope so that Location is PERMIT, but Address is Deny based on fallback rule
      let ctx: ACSClientContext = { subject };
      // call accessRequest(), the response is from mock ACS
      const response = await accessRequest(subject,
        [{ resource: 'Location' }, { resource: 'Address' }],
        AuthZAction.READ, ctx, Operation.whatIsAllowed, 'arangoDB') as PolicySetRQResponse;
      response.decision.should.equal('DENY');
      response.operation_status.code.should.equal(403);
      response.operation_status.message.should.equal('Access not allowed for request with subject:test_user_id, resource:Address, action:READ, target_scope:targetScope; the response was DENY');
      stopGrpcMockServer();
    });

    // PERMIT and DENY tests with properties
    it('Should PERMIT creating Location and Address resource with name property for isAllowed operation with valid user ctx', async () => {
      startGrpcMockServer([{
        method: 'IsAllowed', input: '\{.*\:\{.*\:.*\}\}',
        output: { decision: 'PERMIT', operation_status: { code: 200, message: 'success' } }
      },
      { method: 'WhatIsAllowed', input: '.*', output: {} }]);
      // test resource to be created
      let testResource: CtxResource[] = [{
        id: 'location_id',
        name: 'Location',
        meta: {
          owner: []
        }
      }, {
        id: 'address_id',
        name: 'Address',
        meta: {
          owner: []
        }
      }];
      testResource = updateMetaData(testResource);
      let ctx: ACSClientContext = { subject };
      ctx.resources = testResource;
      // call accessRequest(), the response is from mock ACS
      const response = await accessRequest(subject,
        [{ resource: 'Location', id: 'location_id', property: ['name'] }, { resource: 'Address', id: 'address_id', property: ['name'] }],
        AuthZAction.CREATE, ctx, Operation.isAllowed) as DecisionResponse;
      should.exist(response);
      response.decision.should.equal('PERMIT');
      response.operation_status.code.should.equal(200);
      response.operation_status.message.should.equal('success');
      stopGrpcMockServer();
    });
    it('Should DENY creating Location and Address resource with name and description property for isAllowed operation with valid user ctx', async () => {
      startGrpcMockServer([{
        method: 'IsAllowed', input: '\{.*\:\{.*\:.*\}\}',
        output: { decision: 'DENY', operation_status: { code: 200, message: 'success' } }
      },
      { method: 'WhatIsAllowed', input: '.*', output: {} }]);
      // test resource to be created
      let testResource: CtxResource[] = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description',
        meta: {
          owner: []
        }
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description',
        meta: {
          owner: []
        }
      }];
      testResource = updateMetaData(testResource);
      let ctx: ACSClientContext = { subject };
      ctx.resources = testResource;
      // call accessRequest(), the response is from mock ACS
      const response = await accessRequest(subject,
        [{ resource: 'Location', id: 'location_id', property: ['name', 'description'] }, { resource: 'Address', id: 'address_id', property: ['name', 'description'] }],
        AuthZAction.CREATE, ctx, Operation.isAllowed) as DecisionResponse;
      should.exist(response);
      response.decision.should.equal('DENY');
      response.operation_status.code.should.equal(403);
      response.operation_status.message.should.equal('Access not allowed for request with subject:test_user_id, resource:["Location","Address"], action:CREATE, target_scope:targetScope; the response was DENY');
      stopGrpcMockServer();
    });
    it(`postgres DB - Should DENY Reading Location and Address resource for whatIsAllowed operation, due to description property`, async () => {
      // Location permit and fallback rule
      policySetRQ.policy_sets[0].policies[0].rules = [permitLocationRuleProperty, fallbackRule];
      // Address Deny fallback rule
      policySetRQ.policy_sets[0].policies[1].rules = [fallbackRule];
      startGrpcMockServer([{
        method: 'IsAllowed', input: '\{.*\:\{.*\:.*\}\}',
        output: { decision: 'PERMIT', operation_status: { code: 200, message: 'success' } }
      },
      { method: 'WhatIsAllowed', input: '.*', output: policySetRQ }]);
      // test resource to be created
      let testResource: CtxResource[] = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description',
        meta: {
          owner: []
        }
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description',
        meta: {
          owner: []
        }
      }];
      testResource = updateMetaData(testResource);
      subject.scope = 'targetScope'; // set valid targetScope so that Location is PERMIT, but Address is Deny based on fallback rule (description not allowed for Address resource)
      let ctx: ACSClientContext = { subject };
      // call accessRequest(), the response is from mock ACS
      const response = await accessRequest(subject,
        [{ resource: 'Location', id: 'location_id', property: ['name', 'description'] }, { resource: 'Address', id: 'address_id', property: ['name', 'description'] }],
        AuthZAction.READ, ctx, Operation.whatIsAllowed, 'postgres') as PolicySetRQResponse;
      response.decision.should.equal('DENY');
      response.operation_status.code.should.equal(403);
      response.operation_status.message.should.equal('Access not allowed for request with subject:test_user_id, resource:Address, action:READ, target_scope:targetScope; the response was DENY');
      stopGrpcMockServer();
    });

    describe('Test isAllowed', () => {
      it('Should DENY creating Location and Address resource with unauthenticated context', async () => {
        startGrpcMockServer([{
          method: 'isAllowed', input: '.*',
          output: { decision: 'DENY', operation_status: { code: 403, message: 'Access not allowed for request with subject:undefined, resource:Test, action:CREATE, target_scope:targetSubScope; the response was DENY' } }
        },
        { method: 'WhatIsAllowed', input: '.*', output: {} }]);
        const isAllowedReqUnauth = {
          target:
          {
            subject: unauthenticatedSubject,
            action: createAction,
            resources: locationAddressResources
          },
          context: {}
        } as ACSRequest;
        const response = await isAllowed(isAllowedReqUnauth, authZ);
        should.exist(response.decision);
        response.decision.should.equal('DENY');
        response.operation_status.code.should.equal(403);
        response.operation_status.message.should.equal('Access not allowed for request with subject:undefined, resource:Test, action:CREATE, target_scope:targetSubScope; the response was DENY');
        stopGrpcMockServer();
      });
      it('Should PERMIT creating Location and Address resource with valid Auth context', async () => {
        startGrpcMockServer([{ method: 'isAllowed', input: '.*', output: { decision: 'PERMIT', operation_status: { code: 200, message: 'success' } } },
        { method: 'WhatIsAllowed', input: '.*', output: {} }]);
        const isAllowedReqAuth = {
          target:
          {
            subject: authenticatedSubject,
            resources: locationAddressResources,
            action: createAction
          },
          context: {
            // Need to send encoded subject and resources in context
            subject: encode(JSON.stringify(authenticatedSubject)),
            resources: [encode(JSON.stringify(locationAddressResources))]
          }
        } as ACSRequest;
        const response = await isAllowed(isAllowedReqAuth, authZ);
        should.exist(response);
        response.decision.should.equal('PERMIT');
        response.operation_status.code.should.equal(200);
        response.operation_status.message.should.equal('success');
        stopGrpcMockServer();
      });
    });
    describe('Test whatIsAllowed', () => {
      it('Should return applicable policy set and filters for read operation', async () => {
        // Location permit and fallback rule
        policySetRQ.policy_sets[0].policies[0].rules = [permitLocationRule, fallbackRule];
        // Address permit and fallback rule
        policySetRQ.policy_sets[0].policies[1].rules = [permitAddressRule, fallbackRule];
        startGrpcMockServer([{ method: 'WhatIsAllowed', input: '\{.*\:\{.*\:.*\}\}', output: policySetRQ },
        { method: 'IsAllowed', input: '.*', output: {} }]);
        const whatIsAllowedReqAuth = {
          target:
          {
            subject: authenticatedSubject,
            resources: locationAddressResources,
            action: readAction
          },
          context: {
            // Need to send encoded subject and resources in context
            subject: encode(JSON.stringify(authenticatedSubject)),
            resources: [encode(JSON.stringify(locationAddressResources))]
          }
        } as ACSRequest;
        // call accessRequest(), the response is from mock ACS
        const policySetRQResponse = await whatIsAllowed(whatIsAllowedReqAuth, authZ);
        should.exist(policySetRQResponse.policy_sets);
        policySetRQResponse.policy_sets.length.should.equal(1);
        policySetRQResponse.policy_sets[0].id.should.equal('test_policy_set_id');
        policySetRQResponse.policy_sets[0].policies.length.should.equal(2); // Location and Address policy
        policySetRQResponse.policy_sets[0].policies[0].rules.length.should.equal(2); // Location permit and Deny Rule
        policySetRQResponse.policy_sets[0].policies[1].rules.length.should.equal(2); // Address permit and Deny Rule
        stopGrpcMockServer();
      });
    });
  });
});
