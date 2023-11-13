import {} from 'mocha';
import * as should from 'should';
import {
  accessRequest,
  isAllowed,
  whatIsAllowed
} from '../lib/acs/resolver';
import { flushCache, initializeCache } from '../lib/acs/cache';
import {
  AuthZAction,
  DecisionResponse,
  PolicySetRQResponse,
  Operation,
  ACSClientContext,
  CtxResource,
} from '../lib/acs/interfaces';
import { initAuthZ, ACSAuthZ } from '../lib/acs/authz';
import logger from '../lib/logger';
import * as _ from 'lodash';
import {
  MultiplePolicySetRQFactory,
  permitLocationRule,
  fallbackRule,
  permitAddressRule,
  readAction,
  permitLocationRuleProperty,
  permitAddressRuleProperty,
  createAction,
  unauthenticatedSubject,
  locationAddressResources,
  authenticatedSubject,
  addressAndLocationObligation,
} from './rules_utils';
import {
  Request,
  Response_Decision
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/access_control';
import { GrpcMockServer } from '@alenon/grpc-mock-server';

let authZ: ACSAuthZ;

const encode = (object: any): any => {
  if (_.isArray(object)) {
    return _.map(object, encode);
  } else {
    return {
      value: Buffer.from(JSON.stringify(object))
    };
  }
};

const updateMetaData = (resourceList: Array<any>): Array<CtxResource> => {
  if (!_.isArray(resourceList)) {
    resourceList = [resourceList];
  }
  return resourceList.map((resource): any => {
    if (!resource.meta) {
      resource.meta = {};
    }
    resource.meta.owners = [
      {
        id: 'urn:restorecommerce:acs:names:ownerIndicatoryEntity',
        value: 'urn:test:acs:model:organization.Organization',
        attributes: [{
          id: 'urn:restorecommerce:acs:names:ownerInstance',
          value: 'targetScope'
        }]
      }
    ];
    return resource;
  });
};

const PROTO_PATH: string = 'io/restorecommerce/access_control.proto';
const PKG_NAME: string = 'io.restorecommerce.access_control';
const SERVICE_NAME: string = 'AccessControlService';
const mockServer = new GrpcMockServer('localhost:50061');

const startGrpcMockServer = async () => {
  // create mock implementation based on the method name and output
  const implementations = {
    isAllowed: (call: any, callback: any) => {
      const token = JSON.parse(call?.request?.context?.subject?.value?.toString())?.token;
      if (token === 'invalid_token' || token === 'unauthenticated_token') {
        callback(
          null,
          {
            decision: Response_Decision.DENY,
            operation_status: {
              code: 403,
              message: [
                'Access not allowed for request with subject:undefined,',
                'resource:Test, action:CREATE, target_scope:targetSubScope;',
                'the response was DENY',
              ].join(' ')
            }
          }
        );
      } else if (token === 'valid_token') {
        callback(null, { decision: Response_Decision.PERMIT, operation_status: { code: 200, message: 'success' } });
      }
    },
    whatIsAllowed: (call: any, callback: any) => {
      callback(null, MultiplePolicySetRQFactory.get());
    }
  };
  try {
    mockServer.addService(PROTO_PATH, PKG_NAME, SERVICE_NAME, implementations, {
      includeDirs: ['node_modules/@restorecommerce/protos/'],
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true
    });
    await mockServer.start();
    logger.info('Mock ACS Server started on port 50061');
  } catch (err) {
    logger.error('Error starting mock ACS server', err);
  }
};

const stopGrpcMockServer = async () => {
  await mockServer.stop();
  logger.info('Mock ACS Server closed successfully');
};

const start = async (): Promise<void> => {
  // init AuthZ - initialises acs-client connection object
  authZ = await initAuthZ() as ACSAuthZ;
  await startGrpcMockServer();
};

const stop = async (): Promise<void> => {
  // await worker.stop();
  await stopGrpcMockServer();
};

// user
const subject = {
  id: 'test_user_id',
  name: 'test_user',
  scope: 'targetScope',
  token: 'valid_token',
  role_associations: [
    {
      role: 'test-role',
      attributes: [
        {
          id: 'urn:restorecommerce:acs:names:roleScopingEntity',
          value: 'urn:test:acs:model:organization.Organization',
          attributes: [{
            id: 'urn:restorecommerce:acs:names:roleScopingInstance',
            value: 'targetScope'
          }]
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
    await start();
    if (cacheEnabled?.toLowerCase() === 'true') {
      await initializeCache();
    }
  });

  after(async (): Promise<void> => {
    await stop();
    const cacheEnabled = process.env.CACHE_ENABLED;
    if (cacheEnabled?.toLowerCase() === 'true') {
      await flushCache();
    }
  });

  beforeEach(async () => {
    await flushCache('test_user_id:');
  });

  afterEach(async () => {
  });

  describe('Test accessRequest', () => {
    // PERMIT tests
    it(
      'Should PERMIT creating Location and Address resource for isAllowed operation with valid user ctx',
      async () => {
        // test resource to be created
        const resources: CtxResource[] = updateMetaData([{
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
        }]);

        const ctx: ACSClientContext = {
          subject,
          resources,
        };

        // call accessRequest(), the response is from mock ACS
        const response = await accessRequest(
          subject,
          [
            { resource: 'Location', id: 'location_id' },
            { resource: 'Address', id: 'address_id' }
          ],
          AuthZAction.CREATE,
          ctx,
          Operation.isAllowed
        ) as DecisionResponse;

        should.equal(response.decision, Response_Decision.PERMIT);
        should.equal(response.operation_status?.code, 200);
        should.equal(response.operation_status?.message, 'success');
      }
    );

    it('Should PERMIT Reading Location and Address resource for isAllowed Operation with valid user ctx', async () => {
      // test resource to be created
      const resources: CtxResource[] = updateMetaData([{
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
      }]);

      const ctx: ACSClientContext = {
        subject,
        resources,
      };

      // call accessRequest(), the response is from mock ACS
      const response = await accessRequest(
        subject,
        [
          { resource: 'Location', id: 'location_id' },
          { resource: 'Address', id: 'address_id' }
        ],
        AuthZAction.READ,
        ctx,
        Operation.isAllowed
      ) as DecisionResponse;

      should.equal(response.decision, Response_Decision.PERMIT);
      should.equal(response.operation_status.code, 200);
      should.equal(response.operation_status.message, 'success');
    });

    it([
        'postgres DB - Should PERMIT Reading Location and Address resource',
        'for whatIsAllowed operation and return applicable filters',
        'for Location and Address with valid user ctx',
      ].join(' '),
      async () => {
        // Location Permit Rule with fallback rule
        MultiplePolicySetRQFactory.locationPolicyRules = [permitLocationRule, fallbackRule];
        // Address Permit Rule with fallback rule
        MultiplePolicySetRQFactory.addressPolicyRules = [permitAddressRule, fallbackRule];
        // Reset Obligation to mock response
        MultiplePolicySetRQFactory.obligations = [];

        const ctx: ACSClientContext = { subject };

        // call accessRequest(), the response is from mock ACS
        const response = await accessRequest(
          subject,
          [{ resource: 'Location' }, { resource: 'Address' }],
          AuthZAction.READ,
          ctx,
          Operation.whatIsAllowed,
          'postgres'
        ) as PolicySetRQResponse;

        should.equal(response.decision, Response_Decision.PERMIT);
        should.equal(response.policy_sets?.[0].policies?.[0].rules?.[0].id, 'location_rule_id');
        should.equal(response.policy_sets?.[0].policies?.[1].rules?.[0].id, 'address_rule_id');
        response.custom_query_args?.should.be.empty();
        const entityFilters = response.filters;
        // validate location filters
        should.equal(entityFilters?.[0].resource, 'Location');
        should.equal(entityFilters?.[0].filters?.[0].filters?.[0].value, 'targetScope');
        should.equal(entityFilters?.[0].filters?.[0].filters?.[1].value, 'targetSubScope');
        // validate address filters
        should.equal(entityFilters?.[1].resource, 'Address');
        should.equal(entityFilters?.[1].filters?.[0].filters?.[0].value, 'targetScope');
        should.equal(entityFilters?.[1].filters?.[0].filters?.[1].value, 'targetSubScope');
      }
    );

    it([
      'ArangoDB - Should PERMIT Reading Location and Address resource for',
      'whatIsAllowed operation and return applicable custom query and arguments',
      'for Location and Address with valid user ctx',
      ].join(' '),
      async () => {
        // Location Permit Rule with fallback rule
        MultiplePolicySetRQFactory.locationPolicyRules = [permitLocationRule, fallbackRule];
        // Address Permit Rule with fallback rule
        MultiplePolicySetRQFactory.addressPolicyRules = [permitAddressRule, fallbackRule];
        // Reset Obligation to mock response
        MultiplePolicySetRQFactory.obligations = [];

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
        const expectedCustomArgs = {
          entity: 'urn:test:acs:model:organization.Organization',
          instance: ['targetScope', 'targetSubScope']
        };
        // validate custom query args for Location
        should.equal(response.custom_query_args?.[0].resource, 'Location');
        should.equal(response.custom_query_args?.[0].custom_queries[0], 'filterByOwnership');
        const locationCustomArgs = JSON.parse(response.custom_query_args?.[0].custom_arguments.value.toString());
        should.deepEqual(locationCustomArgs, expectedCustomArgs);
        // validate custom query args for Address
        should.equal(response.custom_query_args?.[1].resource, 'Address');
        should.equal(response.custom_query_args?.[1].custom_queries[0], 'filterByOwnership');
        const addressCustomArgs = JSON.parse(response.custom_query_args?.[1].custom_arguments.value.toString());
        should.deepEqual(addressCustomArgs, expectedCustomArgs);
      }
    );

    // DENY tests
    it(
      'Should DENY creating Location and Address resource for isAllowed operation with invalid user ctx',
      async () => {
        // test resource to be created
        const resources: CtxResource[] = updateMetaData([{
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
        }]);

        const invalid_subject = {
          ...subject,
          scope: 'invalidTargetScope',
          token: 'invalid_token',
        };

        const ctx: ACSClientContext = {
          subject: invalid_subject,
          resources,
        };

        // call accessRequest(), the response is from mock ACS
        const response = await accessRequest(
          invalid_subject,
          [
            { resource: 'Location', id: 'location_id' },
            { resource: 'Address', id: 'address_id' },
          ],
          AuthZAction.CREATE,
          ctx,
          Operation.isAllowed
        ) as DecisionResponse;
        
        should.equal(response.decision, Response_Decision.DENY);
        should.equal(response.operation_status.code, 403);
        should.equal(
          response.operation_status.message,
          [
            'Access not allowed for request with subject:test_user_id,',
            'resource:Location,Address, action:CREATE,',
            'target_scope:invalidTargetScope; the response was DENY',
          ].join(' ')
        );
      }
    );

    it('Should DENY Reading Location and Address resource for isAllowed Operation with invalid user ctx', async () => {
      // test resource to be created
      const resources: CtxResource[] = updateMetaData([{
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
      }]);

      const invalid_subject = {
        ...subject,
        scope: 'invalidTargetScope',
        token: 'invalid_token',
      };

      const ctx: ACSClientContext = {
        subject: invalid_subject,
        resources,
      };

      // call accessRequest(), the response is from mock ACS
      const response = await accessRequest(
        invalid_subject,
        [
          { resource: 'Location', id: 'location_id' },
          { resource: 'Address', id: 'address_id' }
        ],
        AuthZAction.READ,
        ctx,
        Operation.isAllowed
      ) as DecisionResponse;

      should.exist(response);
      should.equal(response.decision, Response_Decision.DENY);
      should.equal(response.operation_status.code, 403);
      should.equal(
        response.operation_status.message,
        [
          'Access not allowed for request with subject:test_user_id,',
          'resource:Location,Address, action:READ, target_scope:invalidTargetScope;',
          'the response was DENY',
        ].join(' ')
      );
    });

    it(
      'postgres DB - Should DENY Reading Location and Address resource for whatIsAllowed operation due to Address Deny',
      async () => {
        // Location permit and fallback rule
        MultiplePolicySetRQFactory.locationPolicyRules = [permitLocationRule, fallbackRule];
        // Address Deny fallback rule
        MultiplePolicySetRQFactory.addressPolicyRules = [fallbackRule];
        // Reset Obligation to mock response
        MultiplePolicySetRQFactory.obligations = [];

        const invalid_subject = {
          ...subject,
          token: 'invalid_token',
        };

        const ctx: ACSClientContext = {
          subject: invalid_subject,
        };
        // call accessRequest(), the response is from mock ACS
        const response = await accessRequest(
          invalid_subject,
          [
            { resource: 'Location' },
            { resource: 'Address' }
          ],
          AuthZAction.READ,
          ctx,
          Operation.whatIsAllowed,
          'postgres'
        ) as PolicySetRQResponse;

        should.equal(response.decision, Response_Decision.DENY);
        should.equal(response.operation_status?.code, 403);
        should.equal(
          response.operation_status?.message,
          [
            'Access not allowed for request with subject:test_user_id,',
            'resource:Address, action:READ,',
            'target_scope:targetScope; the response was DENY',
          ].join(' ')
        );
      }
    );

    it(
      'ArangoDB - Should DENY Reading Location and Address resource for whatIsAllowed operation due to Address Deny',
      async () => {
        // Location permit and Deny fallback rule
        MultiplePolicySetRQFactory.locationPolicyRules = [permitLocationRule, fallbackRule];
        // Address Deny fallback rule
        MultiplePolicySetRQFactory.addressPolicyRules = [fallbackRule];
        // Reset Obligation to mock response
        MultiplePolicySetRQFactory.obligations = [];

        const ctx: ACSClientContext = { subject };
        // call accessRequest(), the response is from mock ACS
        const response = await accessRequest(
          subject,
          [
            { resource: 'Location' },
            { resource: 'Address' }
          ],
          AuthZAction.READ,
          ctx,
          Operation.whatIsAllowed,
          'arangoDB',
        ) as PolicySetRQResponse;

        should.equal(response.decision, Response_Decision.DENY);
        should.equal(response.operation_status?.code, 403);
        should.equal(
          response.operation_status?.message,
          [
            'Access not allowed for request with subject:test_user_id,',
            'resource:Address, action:READ, target_scope:targetScope;',
            'the response was DENY',
          ].join(' ')
        );
      }
    );

    // PERMIT and DENY tests with properties
    it(
      'Should PERMIT creating Location and Address resource with name property for isAllowed operation with valid user ctx',
      async () => {
        // test resource to be created
        const resources: CtxResource[] = updateMetaData([{
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
        }]);

        const ctx: ACSClientContext = {
          subject,
          resources,
        };

        // call accessRequest(), the response is from mock ACS
        const response = await accessRequest(
          subject,
          [
            { resource: 'Location', id: 'location_id', property: ['name'] },
            { resource: 'Address', id: 'address_id', property: ['name'] }
          ],
          AuthZAction.CREATE,
          ctx,
          Operation.isAllowed
        ) as DecisionResponse;

        should.equal(response.decision, Response_Decision.PERMIT);
        should.equal(response.operation_status.code, 200);
        should.equal(response.operation_status.message, 'success');
      }
    );

    it(
      'Should DENY creating Location and Address resource with name and description property for isAllowed operation with valid user ctx',
      async () => {
        // test resource to be created
        const resources = updateMetaData([{
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
        }]);

        const invalid_subject = {
          ...subject,
          token: 'invalid_token',
        };

        const ctx: ACSClientContext = {
          subject: invalid_subject,
          resources,
        };

        // call accessRequest(), the response is from mock ACS
        const response = await accessRequest(
          invalid_subject,
          [
            { resource: 'Location', id: 'location_id', property: ['name', 'description'] },
            { resource: 'Address', id: 'address_id', property: ['name', 'description'] }
          ],
          AuthZAction.CREATE,
          ctx,
          Operation.isAllowed
        ) as DecisionResponse;

        should.equal(response.decision, Response_Decision.DENY);
        should.equal(response.operation_status.code, 403);
        should.equal(
          response.operation_status.message,
          [
            'Access not allowed for request with subject:test_user_id,',
            'resource:Location,Address, action:CREATE,',
            'target_scope:targetScope; the response was DENY',
          ].join(' ')
        );
      }
    );

    // TODO add read test here - PERMIT with properties
    it([
        'Validate Obligation - Should PERMIT reading Location and Address resource',
        'with name and description property with Obligation',
        'for whatIsAllowed operation with valid user ctx (obligation for description)',
      ].join(' '),
      async () => {
        // Location permit and fallback rule
        MultiplePolicySetRQFactory.locationPolicyRules = [permitLocationRuleProperty, fallbackRule];
        // Address permit and fallback rule
        MultiplePolicySetRQFactory.addressPolicyRules = [permitAddressRuleProperty, fallbackRule];
        // Add Obligation to mock response
        MultiplePolicySetRQFactory.obligations = addressAndLocationObligation;

        const ctx: ACSClientContext = { subject };
        // call accessRequest(), the response is from mock ACS
        const response = await accessRequest(
          subject,
          [
            { resource: 'Location', id: 'location_id', property: ['name', 'description'] },
            { resource: 'Address', id: 'address_id', property: ['name', 'description'] }
          ],
          AuthZAction.READ,
          ctx,
          Operation.whatIsAllowed
        ) as PolicySetRQResponse;

        // validate mapped obligation object from acs-client
        should.exist(response.obligations);
        response.obligations?.should.be.length(2);
        should.equal(response.obligations?.[0].resource, 'Location');
        should.equal(response.obligations?.[0].property[0], 'name');
        should.equal(response.obligations?.[0].property[1], 'description');
        should.equal(response.obligations?.[1].resource, 'Address');
        should.equal(response.obligations?.[1].property[0], 'name');
        should.equal(response.obligations?.[1].property[1], 'description');
      }
    );

    it(
      'postgres DB - Should DENY Reading Location and Address resource for whatIsAllowed operation, due to description property',
      async () => {
        // Location permit and fallback rule
        MultiplePolicySetRQFactory.locationPolicyRules = [permitLocationRuleProperty, fallbackRule];
        // Address Deny fallback rule
        MultiplePolicySetRQFactory.addressPolicyRules = [fallbackRule];
        // Add Obligation to mock response
        MultiplePolicySetRQFactory.obligations = addressAndLocationObligation;

        const ctx: ACSClientContext = { subject };
        // call accessRequest(), the response is from mock ACS
        const response = await accessRequest(
          subject,
          [
            { resource: 'Location', id: 'location_id', property: ['name', 'description'] },
            { resource: 'Address', id: 'address_id', property: ['name', 'description'] }
          ],
          AuthZAction.READ,
          ctx,
          Operation.whatIsAllowed,
          'postgres'
        ) as PolicySetRQResponse;

        should.equal(response.decision, Response_Decision.DENY);
        should.equal(response.operation_status?.code, 403);
        should.equal(
          response.operation_status?.message,
          [
            'Access not allowed for request with subject:test_user_id,',
            'resource:Address, action:READ, target_scope:targetScope;',
            'the response was DENY',
          ].join(' ')
        );
      }
    );

    describe('Test isAllowed', () => {
      it('Should DENY creating Location and Address resource with unauthenticated context', async () => {
        const unauthSubject = {
          token: 'unauthenticated_token'
        };
        const isAllowedReqUnauth = {
          target:
          {
            subjects: unauthenticatedSubject,
            actions: createAction,
            resources: locationAddressResources
          },
          context: {
            subject: encode(unauthSubject)
          }
        } as Request;
        const response = await isAllowed(isAllowedReqUnauth, authZ);
        
        should.equal(response.decision, Response_Decision.DENY);
        should.equal(response.operation_status?.code, 403);
        should.equal(
          response.operation_status?.message,
          [
            'Access not allowed for request with subject:undefined,',
            'resource:Test, action:CREATE, target_scope:targetSubScope;',
            'the response was DENY',
          ].join(' ')
        );
      });

      it('Should PERMIT creating Location and Address resource with valid Auth context', async () => {
        const validSub = { token: 'valid_token' };
        const isAllowedReqAuth = {
          target:
          {
            subjects: authenticatedSubject,
            resources: locationAddressResources,
            actions: createAction
          },
          context: {
            // Need to send encoded subject and resources in context
            subject: encode(validSub),
            resources: [encode(JSON.stringify(locationAddressResources))]
          }
        } as Request;
        const response = await isAllowed(isAllowedReqAuth, authZ);

        should.equal(response.decision, Response_Decision.PERMIT);
        should.equal(response.operation_status?.code, 200);
        should.equal(response.operation_status?.message, 'success');
      });
    });

    describe('Test whatIsAllowed', () => {
      it('Should return applicable policy set and filters for read operation', async () => {
        // Location permit and fallback rule
        MultiplePolicySetRQFactory.locationPolicyRules = [permitLocationRule, fallbackRule];
        // Address permit and fallback rule
        MultiplePolicySetRQFactory.addressPolicyRules = [permitAddressRule, fallbackRule];
        // Add Obligation to mock response
        MultiplePolicySetRQFactory.obligations = addressAndLocationObligation;

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
        
        should.equal(policySetRQResponse.policy_sets?.length, 1);
        should.equal(policySetRQResponse.policy_sets?.[0].id, 'test_policy_set_id');
        should.equal(policySetRQResponse.policy_sets?.[0].policies?.length, 2); // Location and Address policy
        should.equal(policySetRQResponse.policy_sets?.[0].policies?.[0].rules?.length, 2); // Location permit and Deny Rule
        should.equal(policySetRQResponse.policy_sets?.[0].policies?.[1].rules?.length, 2); // Address permit and Deny Rule
      });
    });
  });
});
