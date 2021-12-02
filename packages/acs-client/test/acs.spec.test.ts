import * as should from 'should';
import { accessRequest, isAllowed, whatIsAllowed } from '../lib/acs/resolver';
import { flushCache, initializeCache } from '../lib/acs/cache';
import { createMockServer } from 'grpc-mock';
import { AuthZAction, Decision, DecisionResponse, PolicySetRQResponse, Operation, ACSClientContext, ACSRequest, CtxResource } from '../lib/acs/interfaces';
import { initAuthZ, ACSAuthZ } from '../lib/acs/authz';
import logger from '../lib/logger';
import * as _ from 'lodash';
import { cfg } from '../lib';

let authZ: ACSAuthZ;
let mockServer: any;

const permitRule = {
  id: 'permit_rule_id',
  target: {
    action: [],
    resources: [{ id: 'urn:restorecommerce:acs:names:model:entity', 'value': 'urn:test:acs:model:Test.Test' }],
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
      }]
  },
  effect: 'PERMIT'
};

const denyRule = {
  id: 'deny_rule_id',
  target: {
    action: [],
    resources: [{ id: 'urn:restorecommerce:acs:names:model:entity', 'value': 'urn:test:acs:model:Test.Test' }],
    subject: [{ 'id': 'urn:restorecommerce:acs:names:role', 'value': 'test-role' }]
  },
  effect: 'DENY'
};

let policySetRQ = {
  policy_sets:
    [{
      combining_algorithm: 'urn:oasis:names:tc:xacml:3.0:rule-combining-algorithm:permit-overrides',
      id: 'test_policy_set_id',
      policies: [
        {
          combining_algorithm: 'urn:oasis:names:tc:xacml:3.0:rule-combining-algorithm:permit-overrides',
          id: 'test_policy_id',
          target: {
            action: [],
            resources: [{
              id: 'urn:restorecommerce:acs:names:model:entity',
              value: 'urn:test:acs:model:Test.Test'
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
  // resource entity, with resourceID and properties
  { id: 'urn:restorecommerce:acs:names:model:entity', value: 'urn:test:acs:model:Test.Test' },
  { id: 'urn:oasis:names:tc:xacml:1.0:resource:resource-id', value: 'test_id' },
  { id: 'urn:restorecommerce:acs:names:model:property', value: 'urn:test:acs:model:Test.Test#id' },
  { id: 'urn:restorecommerce:acs:names:model:property', value: 'urn:test:acs:model:Test.Test#name' },
  { id: 'urn:restorecommerce:acs:names:model:property', value: 'urn:test:acs:model:Test.Test#description' },
  { id: 'urn:restorecommerce:acs:names:model:property', value: 'urn:test:acs:model:Test.Test#meta' }];
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

describe('testing acs-client', () => {
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
    it('Should DENY creating Test resource with unauthenticated context', async () => {
      startGrpcMockServer([{ method: 'IsAllowed', input: '.*', output: { decision: 'DENY' } },
      { method: 'WhatIsAllowed', input: '.*', output: {} }
      ]);
      // test resrouce to be created
      let testResource: CtxResource[] = [{
        id: 'test_id',
        name: 'Test',
        description: 'This is a test description',
        meta: {
          owner: []
        }
      }];
      let subject = {
        id: 'test_user_id',
        scope: 'targetScope',
        unauthenticated: true,
        meta: {
          owner: []
        }
      };
      testResource = updateMetaData(testResource);
      let response: DecisionResponse;
      let ctx: ACSClientContext = { subject: { id: '' } };
      ctx.resources = testResource;
      response = await accessRequest(subject, [{ resource: 'Test', id: testResource[0].id }], AuthZAction.CREATE, ctx, Operation.isAllowed) as DecisionResponse;
      should.exist(response);
      should.exist(response.operation_status);
      response.decision.should.equal(Decision.DENY);
      response.operation_status.code.should.equal(403);
      response.operation_status.message.should.equal('Access not allowed for request with subject:test_user_id, resource:Test, action:CREATE, target_scope:targetScope; the response was DENY')
      stopGrpcMockServer();
    });
    it('Should PERMIT creating Test resource with valid user Ctx', async () => {
      startGrpcMockServer([{ method: 'IsAllowed', input: '\{.*\:\{.*\:.*\}\}', output: { decision: 'PERMIT', operation_status: { code: 200, message: 'success' } } },
      { method: 'WhatIsAllowed', input: '.*', output: {} }]);
      // test resource to be created
      let testResource: CtxResource[] = [{
        id: 'test_id',
        name: 'Test',
        description: 'This is a test description',
        meta: {
          owner: []
        }
      }];
      // user ctx data updated in session
      let subject = {
        id: 'test_user_id',
        name: 'test_user',
        scope: 'targetScope',
        role_associations: [
          {
            role: 'test-role'
          }
        ]
      };
      testResource = updateMetaData(testResource);
      let ctx: ACSClientContext = { subject };
      ctx.resources = testResource;
      // call accessRequest(), the response is from mock ACS
      const response = await accessRequest(subject, [{ resource: 'Test', id: testResource[0].id }], AuthZAction.CREATE, ctx, Operation.isAllowed) as DecisionResponse;
      should.exist(response);
      response.decision.should.equal('PERMIT');
      response.operation_status.code.should.equal(200);
      response.operation_status.message.should.equal('success');
      stopGrpcMockServer();
    });
    it('Should DENY reading Test resource (DENY rule)', async () => {
      // PolicySet contains DENY rule
      policySetRQ.policy_sets[0].policies[0].rules[0] = denyRule;
      startGrpcMockServer([{ method: 'WhatIsAllowed', input: '\{.*\:\{.*\:.*\}\}', output: policySetRQ },
      { method: 'IsAllowed', input: '.*', output: {} }]);
      // test resource to be read of type 'ReadRequest'
      let input: CtxResource[] = [{
        id: 'test_id',
        meta: {
          owner: []
        }
      }];
      let subject = {
        id: 'test_user_id',
        scope: 'targetScope',
        role_associations: [
          {
            role: 'test-role'
          }
        ]
      };
      let ctx: ACSClientContext = { subject };
      ctx.resources = input;
      // call accessRequest(), the response is from mock ACS
      let response = await accessRequest(subject, [{ resource: 'Test', id: input[0].id }], AuthZAction.READ, ctx, Operation.whatIsAllowed, 'postgres') as PolicySetRQResponse;
      response.decision.should.equal('DENY');
      response.operation_status.code.should.equal(403);
      response.operation_status.message.should.equal('Access not allowed for request with subject:test_user_id, resource:Test, action:READ, target_scope:targetScope; the response was DENY');
      stopGrpcMockServer();
    });
    it('Should PERMIT reading Test resource (PERMIT rule) and verify input filter ' +
      'is extended to enforce applicable policies', async () => {
        // PolicySet contains PERMIT rule
        policySetRQ.policy_sets[0].policies[0].rules[0] = permitRule;
        startGrpcMockServer([{ method: 'WhatIsAllowed', input: '\{.*\:\{.*\:.*\}\}', output: policySetRQ },
        { method: 'IsAllowed', input: '.*', output: {} }]);
        // test resource to be read of type 'ReadRequest'
        let input: CtxResource[] = [{
          id: 'test_id',
          meta: {
            owner: []
          }
        }];
        // user ctx data updated in session
        let subject = {
          id: 'test_user_id',
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
        let ctx: ACSClientContext = { subject };
        ctx.resources = input;
        // call accessRequest(), the response is from mock ACS
        const readResponse = await accessRequest(subject, [{ resource: 'Test', id: input[0].id }], AuthZAction.READ, ctx, Operation.whatIsAllowed, 'postgres') as PolicySetRQResponse;
        should.exist(readResponse.decision);
        readResponse.decision.should.equal('PERMIT');
        readResponse.operation_status.code.should.equal(200);
        readResponse.operation_status.message.should.equal('success');
        // verify input is modified to enforce the applicapble poilicies
        const filterParamKey = cfg.get('authorization:filterParamKey');
        const expectedFilterResponse = [{ field: filterParamKey, operation: 'eq', value: 'targetScope' }, { field: filterParamKey, operation: 'eq', value: 'targetSubScope' }];
        readResponse.filters[0].resource.should.equal('Test');
        const filterEntityMap = readResponse.filters;
        const filters = filterEntityMap[0].filters;
        filters[0].filter[0].should.deepEqual(expectedFilterResponse[0]);
        filters[0].filter[1].should.deepEqual(expectedFilterResponse[1]);
        stopGrpcMockServer();
      });
    it('Should PERMIT reading Test resource (PERMIT rule) with HR scoping enabled and verify input filter ' +
      'is extended to enforce applicable policies', async () => {
        // PolicySet contains PERMIT rule
        policySetRQ.policy_sets[0].policies[0].rules[0] = permitRule;
        startGrpcMockServer([{ method: 'WhatIsAllowed', input: '\{.*\:\{.*\:.*\}\}', output: policySetRQ },
        { method: 'IsAllowed', input: '.*', output: {} }]);
        // test resource to be read of type 'ReadRequest'
        let input: CtxResource[] = [{
          id: 'test_id',
          meta: {
            owner: []
          }
        }];
        // user ctx data updated in session
        let subject = {
          id: 'test_user_id',
          scope: 'targetSubScope',
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
          hierarchical_scopes: [
            {
              id: 'targetScope',
              children: [{
                id: 'targetSubScope'
              }]
            }
          ]
        };
        let ctx: ACSClientContext = { subject };
        ctx.resources = input;
        // call accessRequest(), the response is from mock ACS
        const readResponse = await accessRequest(subject, [{ resource: 'Test', id: input[0].id }], AuthZAction.READ, ctx, Operation.whatIsAllowed, 'postgres') as PolicySetRQResponse;
        should.exist(readResponse.decision);
        readResponse.decision.should.equal('PERMIT');
        readResponse.operation_status.code.should.equal(200);
        readResponse.operation_status.message.should.equal('success');
        // verify input is modified to enforce the applicapble poilicies
        const filterParamKey = cfg.get('authorization:filterParamKey');
        const expectedFilterResponse = { field: filterParamKey, operation: 'eq', value: 'targetSubScope' };
        readResponse.filters[0].resource.should.equal('Test');
        const filterEntityMap = readResponse.filters;
        const filters = filterEntityMap[0].filters;
        filters[0].filter[0].should.deepEqual(expectedFilterResponse);
        stopGrpcMockServer();
      });
    it('Should DENY reading Test resource (PERMIT rule) with HR scoping disabled', async () => {
      const cacheEnabled = process.env.CACHE_ENABLED;
      if (cacheEnabled && cacheEnabled.toLowerCase() === 'true') {
        await flushCache();
      }
      // PolicySet contains PERMIT rule
      // disable HR scoping for permitRule
      permitRule.target.subject[2].value = 'false';
      policySetRQ.policy_sets[0].policies[0].rules[0] = permitRule;
      startGrpcMockServer([{ method: 'WhatIsAllowed', input: '\{.*\:\{.*\:.*\}\}', output: policySetRQ },
      { method: 'IsAllowed', input: '.*', output: {} }]);
      // test resource to be read of type 'ReadRequest'
      let input: CtxResource[] = [{
        id: 'test_id',
        meta: {
          owner: []
        }
      }];
      // user ctx data updated in session
      let subject = {
        id: 'test_user_id',
        scope: 'targetSubScope',
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
        hierarchical_scopes: [
          {
            id: 'targetScope',
            children: [{
              id: 'targetSubScope'
            }]
          }
        ]
      };
      let ctx: ACSClientContext = { subject };
      ctx.resources = input;
      // call accessRequest(), the response is from mock ACS
      let readResponse = await accessRequest(subject, [{ resource: 'Test', id: input[0].id }], AuthZAction.READ, ctx, Operation.whatIsAllowed, 'postgres') as PolicySetRQResponse;
      should.exist(readResponse.decision);
      readResponse.decision.should.equal(Decision.DENY);
      readResponse.operation_status.code.should.equal(403);
      readResponse.operation_status.message.should.equal('Access not allowed for request with subject:test_user_id, resource:Test, action:READ, target_scope:targetSubScope; the response was DENY');
      stopGrpcMockServer();
      // enable HR scoping for permitRule
      permitRule.target.subject[2].value = 'true';
    });
  });
  describe('Test isAllowed', () => {
    it('Should DENY creating Test resource with unauthenticated context', async () => {
      startGrpcMockServer([{
        method: 'isAllowed', input: '.*',
        output: { decision: 'DENY', operation_status: { code: 403, message: 'Access not allowed for request with subject:undefined, resource:Test, action:CREATE, target_scope:targetSubScope; the response was DENY' } }
      },
      { method: 'WhatIsAllowed', input: '.*', output: {} }]);
      const isAllowedReqUnauth = {
        target:
        {
          action: createAction,
          subject: unauthenticatedSubject,
          resources
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
    it('Should PERMIT creating Test resource with valid Auth context', async () => {
      startGrpcMockServer([{ method: 'isAllowed', input: '.*', output: { decision: 'PERMIT', operation_status: { code: 200, message: 'success' } } },
      { method: 'WhatIsAllowed', input: '.*', output: {} }]);
      const isAllowedReqAuth = {
        target:
        {
          action: createAction,
          subject: authenticatedSubject,
          resources
        },
        context: {
          // Need to send encoded subject and resources in context
          subject: encode(JSON.stringify(authenticatedSubject)),
          resources: [encode(JSON.stringify(resources))]
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
    it('Should return applicable policy set for read operation', async () => {
      // PolicySet contains DENY rule
      policySetRQ.policy_sets[0].policies[0].rules[0] = permitRule;
      startGrpcMockServer([{ method: 'WhatIsAllowed', input: '\{.*\:\{.*\:.*\}\}', output: policySetRQ },
      { method: 'IsAllowed', input: '.*', output: {} }]);
      const whatIsAllowedReqAuth = {
        target:
        {
          action: readAction,
          subject: authenticatedSubject,
          resources
        },
        context: {
          // Need to send encoded subject and resources in context
          subject: encode(JSON.stringify(authenticatedSubject)),
          resources: [encode(JSON.stringify(resources))]
        }
      } as ACSRequest;
      // call accessRequest(), the response is from mock ACS
      const policySetRQResponse = await whatIsAllowed(whatIsAllowedReqAuth, authZ);
      should.exist(policySetRQResponse.policy_sets);
      policySetRQResponse.policy_sets.length.should.equal(1);
      policySetRQResponse.policy_sets[0].id.should.equal('test_policy_set_id');
      policySetRQResponse.policy_sets[0].policies.length.should.equal(1);
      policySetRQResponse.policy_sets[0].policies[0].rules.length.should.equal(1);
      policySetRQResponse.policy_sets[0].policies[0].effect.should.equal('PERMIT');
      stopGrpcMockServer();
    });
  });
});