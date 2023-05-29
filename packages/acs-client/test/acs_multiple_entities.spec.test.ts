import * as should from 'should';
import { accessRequest, isAllowed, whatIsAllowed } from '../lib/acs/resolver';
import { flushCache, initializeCache } from '../lib/acs/cache';
import {
  AuthZAction, DecisionResponse, PolicySetRQResponse,
  Operation, ACSClientContext, CtxResource
} from '../lib/acs/interfaces';
import { initAuthZ, ACSAuthZ } from '../lib/acs/authz';
import logger from '../lib/logger';
import * as _ from 'lodash';
import {
  permitLocationRule, policySetRQ, fallbackRule, permitAddressRule, readAction,
  permitLocationRuleProperty, permitAddressRuleProperty, createAction,
  unauthenticatedSubject, locationAddressResources, authenticatedSubject, addressAndLocationObligation
} from './rules_utils';
import {
  Request,
  Response_Decision,
  AccessControlServiceImplementation,
  DeepPartial,
  ReverseQuery,
  Response,
  AccessControlServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/access_control';
import { createServer, Server } from 'nice-grpc';

let authZ: ACSAuthZ;
let mockServer: Server;

const encode = (object: any): any => {
  if (_.isArray(object)) {
    return _.map(object, encode);
  } else {
    return {
      value: Buffer.from(JSON.stringify(object))
    };
  }
};

interface ServerRule {
  method: string;
  input: any;
  output: any;
}

const updateMetaData = (resourceList: Array<any>): Array<CtxResource> => {
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
};

const startGrpcMockServer = async (implementation: AccessControlServiceImplementation) => {
  mockServer = createServer();
  mockServer.add(AccessControlServiceDefinition as any, implementation as any);
  await mockServer.listen('0.0.0.0:50061');
  logger.info('ACS Server started on port 50061');
};

const stopGrpcMockServer = async () => {
  if (!mockServer) {
    return;
  }

  await mockServer.shutdown().then(() => {
    logger.info('Server closed successfully');
  });

  mockServer = undefined;
};

const start = async (): Promise<void> => {
  // init AuthZ - initialises acs-client connection object
  authZ = await initAuthZ() as ACSAuthZ;
};

const stop = async (): Promise<void> => {
  // await worker.stop();
};

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

  after(async (): Promise<void> => {
    await stop();
    const cacheEnabled = process.env.CACHE_ENABLED;
    if (cacheEnabled && cacheEnabled.toLowerCase() === 'true') {
      await flushCache();
    }
  });

  beforeEach(async () => {
    await stopGrpcMockServer();
    await flushCache('test_user_id:');
  });

  afterEach(async () => {
    await stopGrpcMockServer();
  });

  describe('Test accessRequest', () => {
    // PERMIT tests
    it('Should PERMIT creating Location and Address resource for isAllowed operation with valid user ctx', async () => {
      await startGrpcMockServer({
        isAllowed: async (): Promise<DeepPartial<Response>> => ({ decision: Response_Decision.PERMIT, operation_status: { code: 200, message: 'success' }}),
        whatIsAllowed: async (): Promise<DeepPartial<ReverseQuery>> => ({})
      });
      // test resource to be created
      let testResource: CtxResource[] = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description',
        meta: {
          owners: []
        }
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description',
        meta: {
          owners: []
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
      response.decision.should.equal(Response_Decision.PERMIT);
      response.operation_status.code.should.equal(200);
      response.operation_status.message.should.equal('success');
      await stopGrpcMockServer();
    });
    it('Should PERMIT Reading Location and Address resource for isAllowed Operation with valid user ctx', async () => {
      await startGrpcMockServer({
        isAllowed: async (): Promise<DeepPartial<Response>> => ({ decision: Response_Decision.PERMIT, operation_status: { code: 200, message: 'success' }}),
        whatIsAllowed: async (): Promise<DeepPartial<ReverseQuery>> => ({})
      });
      // test resource to be created
      let testResource: CtxResource[] = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description',
        meta: {
          owners: []
        }
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description',
        meta: {
          owners: []
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
      response.decision.should.equal(Response_Decision.PERMIT);
      response.operation_status.code.should.equal(200);
      response.operation_status.message.should.equal('success');
      await stopGrpcMockServer();
    });
    it(`postgres DB - Should PERMIT Reading Location and Address resource for whatIsAllowed operation and return applicable filters for Location and Address with valid user ctx`, async () => {
      // Location Permit Rule with fallback rule
      policySetRQ.policy_sets[0].policies[0].rules = [permitLocationRule, fallbackRule];
      // Address Permit Rule with fallback rule
      policySetRQ.policy_sets[0].policies[1].rules = [permitAddressRule, fallbackRule];
      await startGrpcMockServer({
        isAllowed: async (): Promise<DeepPartial<Response>> => ({
          decision: Response_Decision.PERMIT,
          operation_status: {code: 200, message: 'success'}
        }),
        whatIsAllowed: async (): Promise<DeepPartial<ReverseQuery>> => policySetRQ
      });
      // test resource to be created
      let testResource: CtxResource[] = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description',
        meta: {
          owners: []
        }
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description',
        meta: {
          owners: []
        }
      }];
      testResource = updateMetaData(testResource);
      let ctx: ACSClientContext = { subject };
      // call accessRequest(), the response is from mock ACS
      const response = await accessRequest(subject,
        [{ resource: 'Location' }, { resource: 'Address' }],
        AuthZAction.READ, ctx, Operation.whatIsAllowed, 'postgres') as PolicySetRQResponse;
      response.decision.should.equal(Response_Decision.PERMIT);
      response.policy_sets[0].policies[0].rules[0].id.should.equal('location_rule_id');
      response.policy_sets[0].policies[1].rules[0].id.should.equal('address_rule_id');
      response.custom_query_args.should.be.empty();
      const entityFilters = response.filters;
      // validate location filters
      entityFilters[0].resource.should.equal('Location');
      entityFilters[0].filters[0].filters[0].value.should.equal('targetScope');
      entityFilters[0].filters[0].filters[1].value.should.equal('targetSubScope');
      // validate address filters
      entityFilters[1].resource.should.equal('Address');
      entityFilters[1].filters[0].filters[0].value.should.equal('targetScope');
      entityFilters[1].filters[0].filters[1].value.should.equal('targetSubScope');
    });
    it(`ArangoDB - Should PERMIT Reading Location and Address resource for
      whatIsAllowed operation and return applicable custom query and arguments
      for Location and Address with valid user ctx`, async () => {
      // Location Permit Rule with fallback rule
      policySetRQ.policy_sets[0].policies[0].rules = [permitLocationRule, fallbackRule];
      // Address Permit Rule with fallback rule
      policySetRQ.policy_sets[0].policies[1].rules = [permitAddressRule, fallbackRule];
      await startGrpcMockServer({
        isAllowed: async (): Promise<DeepPartial<Response>> => ({ decision: Response_Decision.PERMIT, operation_status: { code: 200, message: 'success' }}),
        whatIsAllowed: async (): Promise<DeepPartial<ReverseQuery>> => policySetRQ
      });
      // test resource to be created
      let testResource: CtxResource[] = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description',
        meta: {
          owners: []
        }
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description',
        meta: {
          owners: []
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
    });

    // DENY tests
    it('Should DENY creating Location and Address resource for isAllowed operation with invalid user ctx', async () => {
      await startGrpcMockServer({
        isAllowed: async (): Promise<DeepPartial<Response>> => ({ decision: Response_Decision.DENY, operation_status: { code: 200, message: 'success' }}),
        whatIsAllowed: async (): Promise<DeepPartial<ReverseQuery>> => ({})
      });
      // test resource to be created
      let testResource: CtxResource[] = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description',
        meta: {
          owners: []
        }
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description',
        meta: {
          owners: []
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
      response.decision.should.equal(Response_Decision.DENY);
      response.operation_status.code.should.equal(403);
      response.operation_status.message.should.equal('Access not allowed for request with subject:test_user_id, resource:["Location","Address"], action:CREATE, target_scope:invalidTargetScope; the response was DENY');
    });
    it('Should DENY Reading Location and Address resource for isAllowed Operation with invalid user ctx', async () => {
      await startGrpcMockServer({
        isAllowed: async (): Promise<DeepPartial<Response>> => ({ decision: Response_Decision.DENY, operation_status: { code: 200, message: 'success' }}),
        whatIsAllowed: async (): Promise<DeepPartial<ReverseQuery>> => ({})
      });
      // test resource to be created
      let testResource: CtxResource[] = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description',
        meta: {
          owners: []
        }
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description',
        meta: {
          owners: []
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
      response.decision.should.equal(Response_Decision.DENY);
      response.operation_status.code.should.equal(403);
      response.operation_status.message.should.equal('Access not allowed for request with subject:test_user_id, resource:["Location","Address"], action:READ, target_scope:invalidTargetScope; the response was DENY');
    });
    it(`postgres DB - Should DENY Reading Location and Address resource for whatIsAllowed operation due to Address Deny`, async () => {
      // Location permit and fallback rule
      policySetRQ.policy_sets[0].policies[0].rules = [permitLocationRule, fallbackRule];
      // Address Deny fallback rule
      policySetRQ.policy_sets[0].policies[1].rules = [fallbackRule];
      await startGrpcMockServer({
        isAllowed: async (): Promise<DeepPartial<Response>> => ({ decision: Response_Decision.PERMIT, operation_status: { code: 200, message: 'success' }}),
        whatIsAllowed: async (): Promise<DeepPartial<ReverseQuery>> => policySetRQ
      });
      // test resource to be created
      let testResource: CtxResource[] = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description',
        meta: {
          owners: []
        }
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description',
        meta: {
          owners: []
        }
      }];
      testResource = updateMetaData(testResource);
      subject.scope = 'targetScope'; // set valid targetScope so that Location is PERMIT, but Address is Deny based on fallback rule
      let ctx: ACSClientContext = { subject };
      // call accessRequest(), the response is from mock ACS
      const response = await accessRequest(subject,
        [{ resource: 'Location' }, { resource: 'Address' }],
        AuthZAction.READ, ctx, Operation.whatIsAllowed, 'postgres') as PolicySetRQResponse;
      response.decision.should.equal(Response_Decision.DENY);
      response.operation_status.code.should.equal(403);
      response.operation_status.message.should.equal('Access not allowed for request with subject:test_user_id, resource:Address, action:READ, target_scope:targetScope; the response was DENY');
    });
    it(`ArangoDB - Should DENY Reading Location and Address resource for whatIsAllowed operation due to Address Deny`, async () => {
      // Location permit and Deny fallback rule
      policySetRQ.policy_sets[0].policies[0].rules = [permitLocationRule, fallbackRule];
      // Address Deny fallback rule
      policySetRQ.policy_sets[0].policies[1].rules = [fallbackRule];
      await startGrpcMockServer({
        isAllowed: async (): Promise<DeepPartial<Response>> => ({ decision: Response_Decision.PERMIT, operation_status: { code: 200, message: 'success' }}),
        whatIsAllowed: async (): Promise<DeepPartial<ReverseQuery>> => policySetRQ
      });
      // test resource to be created
      let testResource: CtxResource[] = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description',
        meta: {
          owners: []
        }
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description',
        meta: {
          owners: []
        }
      }];
      testResource = updateMetaData(testResource);
      subject.scope = 'targetScope'; // set valid targetScope so that Location is PERMIT, but Address is Deny based on fallback rule
      let ctx: ACSClientContext = { subject };
      // call accessRequest(), the response is from mock ACS
      const response = await accessRequest(subject,
        [{ resource: 'Location' }, { resource: 'Address' }],
        AuthZAction.READ, ctx, Operation.whatIsAllowed, 'arangoDB') as PolicySetRQResponse;
      response.decision.should.equal(Response_Decision.DENY);
      response.operation_status.code.should.equal(403);
      response.operation_status.message.should.equal('Access not allowed for request with subject:test_user_id, resource:Address, action:READ, target_scope:targetScope; the response was DENY');
    });

    // PERMIT and DENY tests with properties
    it('Should PERMIT creating Location and Address resource with name property for isAllowed operation with valid user ctx', async () => {
      await startGrpcMockServer({
        isAllowed: async (): Promise<DeepPartial<Response>> => ({ decision: Response_Decision.PERMIT, operation_status: { code: 200, message: 'success' }}),
        whatIsAllowed: async (): Promise<DeepPartial<ReverseQuery>> => ({})
      });
      // test resource to be created
      let testResource: CtxResource[] = [{
        id: 'location_id',
        name: 'Location',
        meta: {
          owners: []
        }
      }, {
        id: 'address_id',
        name: 'Address',
        meta: {
          owners: []
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
      response.decision.should.equal(Response_Decision.PERMIT);
      response.operation_status.code.should.equal(200);
      response.operation_status.message.should.equal('success');
    });
    it('Should DENY creating Location and Address resource with name and description property for isAllowed operation with valid user ctx', async () => {
      await startGrpcMockServer({
        isAllowed: async (): Promise<DeepPartial<Response>> => ({ decision: Response_Decision.DENY, operation_status: { code: 200, message: 'success' }}),
        whatIsAllowed: async (): Promise<DeepPartial<ReverseQuery>> => ({})
      });
      // test resource to be created
      let testResource: CtxResource[] = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description',
        meta: {
          owners: []
        }
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description',
        meta: {
          owners: []
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
      response.decision.should.equal(Response_Decision.DENY);
      response.operation_status.code.should.equal(403);
      response.operation_status.message.should.equal('Access not allowed for request with subject:test_user_id, resource:["Location","Address"], action:CREATE, target_scope:targetScope; the response was DENY');
    });
    // TODO add read test here - PERMIT with properties
    it('Validate Obligation - Should PERMIT reading Location and Address resource with name and description property with Obligation for whatIsAllowed operation with valid user ctx (obligation for description)', async () => {
      // Location permit and fallback rule
      policySetRQ.policy_sets[0].policies[0].rules = [permitLocationRuleProperty, fallbackRule];
      // Address permit and fallback rule
      policySetRQ.policy_sets[0].policies[1].rules = [permitAddressRuleProperty, fallbackRule];
      // Add Obligation to mock response
      policySetRQ.obligations = addressAndLocationObligation;
      await startGrpcMockServer({
        isAllowed: async (): Promise<DeepPartial<Response>> => ({ decision: Response_Decision.PERMIT, operation_status: { code: 200, message: 'success' }}),
        whatIsAllowed: async (): Promise<DeepPartial<ReverseQuery>> => policySetRQ
      });
      // test resource to be created
      let testResource: CtxResource[] = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description',
        meta: {
          owners: []
        }
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description',
        meta: {
          owners: []
        }
      }];
      testResource = updateMetaData(testResource);
      subject.scope = 'targetScope'; // set valid targetScope so that Location is PERMIT, but Address is Deny based on fallback rule (description not allowed for Address resource)
      let ctx: ACSClientContext = { subject };
      // call accessRequest(), the response is from mock ACS
      const response = await accessRequest(subject,
        [{ resource: 'Location', id: 'location_id', property: ['name', 'description'] }, { resource: 'Address', id: 'address_id', property: ['name', 'description'] }],
        AuthZAction.READ, ctx, Operation.whatIsAllowed) as PolicySetRQResponse;
      // validate mapped obligation object from acs-client
      should.exist(response.obligation);
      response.obligation.should.be.length(2);
      response.obligation[0].resource.should.equal('Location');
      response.obligation[0].property[0].should.equal('name');
      response.obligation[0].property[1].should.equal('description');
      response.obligation[1].resource.should.equal('Address');
      response.obligation[1].property[0].should.equal('name');
      response.obligation[1].property[1].should.equal('description');
    });

    it(`postgres DB - Should DENY Reading Location and Address resource for whatIsAllowed operation, due to description property`, async () => {
      // Location permit and fallback rule
      policySetRQ.policy_sets[0].policies[0].rules = [permitLocationRuleProperty, fallbackRule];
      // Address Deny fallback rule
      policySetRQ.policy_sets[0].policies[1].rules = [fallbackRule];
      await startGrpcMockServer({
        isAllowed: async (): Promise<DeepPartial<Response>> => ({ decision: Response_Decision.PERMIT, operation_status: { code: 200, message: 'success' }}),
        whatIsAllowed: async (): Promise<DeepPartial<ReverseQuery>> => policySetRQ
      });
      // test resource to be created
      let testResource: CtxResource[] = [{
        id: 'location_id',
        name: 'Location',
        description: 'Location description',
        meta: {
          owners: []
        }
      }, {
        id: 'address_id',
        name: 'Address',
        description: 'Address description',
        meta: {
          owners: []
        }
      }];
      testResource = updateMetaData(testResource);
      subject.scope = 'targetScope'; // set valid targetScope so that Location is PERMIT, but Address is Deny based on fallback rule (description not allowed for Address resource)
      let ctx: ACSClientContext = { subject };
      // call accessRequest(), the response is from mock ACS
      const response = await accessRequest(subject,
        [{ resource: 'Location', id: 'location_id', property: ['name', 'description'] }, { resource: 'Address', id: 'address_id', property: ['name', 'description'] }],
        AuthZAction.READ, ctx, Operation.whatIsAllowed, 'postgres') as PolicySetRQResponse;
      response.decision.should.equal(Response_Decision.DENY);
      response.operation_status.code.should.equal(403);
      response.operation_status.message.should.equal('Access not allowed for request with subject:test_user_id, resource:Address, action:READ, target_scope:targetScope; the response was DENY');
    });

    describe('Test isAllowed', () => {
      it('Should DENY creating Location and Address resource with unauthenticated context', async () => {
        await startGrpcMockServer({
          isAllowed: async (): Promise<DeepPartial<Response>> => ({ decision: Response_Decision.DENY, operation_status: { code: 403, message: 'Access not allowed for request with subject:undefined, resource:Test, action:CREATE, target_scope:targetSubScope; the response was DENY' } }),
          whatIsAllowed: async (): Promise<DeepPartial<ReverseQuery>> => ({})
        });
        const isAllowedReqUnauth = {
          target:
          {
            subjects: unauthenticatedSubject,
            actions: createAction,
            resources: locationAddressResources
          },
          context: {}
        } as Request;
        const response = await isAllowed(isAllowedReqUnauth, authZ);
        should.exist(response.decision);
        response.decision.should.equal(Response_Decision.DENY);
        response.operation_status.code.should.equal(403);
        response.operation_status.message.should.equal('Access not allowed for request with subject:undefined, resource:Test, action:CREATE, target_scope:targetSubScope; the response was DENY');
      });
      it('Should PERMIT creating Location and Address resource with valid Auth context', async () => {
        await startGrpcMockServer({
          isAllowed: async (): Promise<DeepPartial<Response>> => ({ decision: Response_Decision.PERMIT, operation_status: { code: 200, message: 'success' }}),
          whatIsAllowed: async (): Promise<DeepPartial<ReverseQuery>> => ({})
        });
        const isAllowedReqAuth = {
          target:
          {
            subjects: authenticatedSubject,
            resources: locationAddressResources,
            actions: createAction
          },
          context: {
            // Need to send encoded subject and resources in context
            subject: encode(JSON.stringify(authenticatedSubject)),
            resources: [encode(JSON.stringify(locationAddressResources))]
          }
        } as Request;
        const response = await isAllowed(isAllowedReqAuth, authZ);
        should.exist(response);
        response.decision.should.equal(Response_Decision.PERMIT);
        response.operation_status.code.should.equal(200);
        response.operation_status.message.should.equal('success');
      });
    });
    describe('Test whatIsAllowed', () => {
      it('Should return applicable policy set and filters for read operation', async () => {
        // Location permit and fallback rule
        policySetRQ.policy_sets[0].policies[0].rules = [permitLocationRule, fallbackRule];
        // Address permit and fallback rule
        policySetRQ.policy_sets[0].policies[1].rules = [permitAddressRule, fallbackRule];
        await startGrpcMockServer({
          isAllowed: async (): Promise<DeepPartial<Response>> => ({}),
          whatIsAllowed: async (): Promise<DeepPartial<ReverseQuery>> => policySetRQ
        });
        const whatIsAllowedReqAuth = {
          target:
          {
            subjects: authenticatedSubject,
            resources: locationAddressResources,
            actions: readAction
          },
          context: {
            // Need to send encoded subject and resources in context
            subject: encode(JSON.stringify(authenticatedSubject)),
            resources: [encode(JSON.stringify(locationAddressResources))]
          }
        } as Request;
        // call accessRequest(), the response is from mock ACS
        const policySetRQResponse = await whatIsAllowed(whatIsAllowedReqAuth, authZ);
        should.exist(policySetRQResponse.policy_sets);
        policySetRQResponse.policy_sets.length.should.equal(1);
        policySetRQResponse.policy_sets[0].id.should.equal('test_policy_set_id');
        policySetRQResponse.policy_sets[0].policies.length.should.equal(2); // Location and Address policy
        policySetRQResponse.policy_sets[0].policies[0].rules.length.should.equal(2); // Location permit and Deny Rule
        policySetRQResponse.policy_sets[0].policies[1].rules.length.should.equal(2); // Address permit and Deny Rule
      });
    });
  });
});
