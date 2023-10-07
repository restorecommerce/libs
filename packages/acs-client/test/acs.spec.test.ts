import * as should from 'should';
import { accessRequest, isAllowed, whatIsAllowed } from '../lib/acs/resolver';
import { flushCache, initializeCache } from '../lib/acs/cache';
import { AuthZAction, DecisionResponse, PolicySetRQResponse, Operation, ACSClientContext, CtxResource } from '../lib/acs/interfaces';
import { initAuthZ, ACSAuthZ } from '../lib/acs/authz';
import * as proto_loader from '@grpc/proto-loader';
import * as grpc from '@grpc/grpc-js';
import logger from '../lib/logger';
import * as _ from 'lodash';
import { cfg } from '../lib';
import {
  Request,
  Response_Decision
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/access_control';
import { GrpcMockServer } from '@alenon/grpc-mock-server';
import { Effect } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/rule';

let authZ: ACSAuthZ;

const permitRule = {
  id: 'permit_rule_id',
  target: {
    actions: [],
    resources: [{ id: 'urn:restorecommerce:acs:names:model:entity', value: 'urn:test:acs:model:Test.Test' }],
    subjects: [
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
      }]
  },
  effect: Effect.PERMIT
};

const denyRule = {
  id: 'deny_rule_id',
  target: {
    actions: [],
    resources: [{ id: 'urn:restorecommerce:acs:names:model:entity', value: 'urn:test:acs:model:Test.Test' }],
    subjects: [{ id: 'urn:restorecommerce:acs:names:role', value: 'test-role' }]
  },
  effect: Effect.DENY
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
            actions: [],
            resources: [{
              id: 'urn:restorecommerce:acs:names:model:entity',
              value: 'urn:test:acs:model:Test.Test'
            }],
            subjects: []
          }, effect: Effect.PERMIT,
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
    id: 'urn:oasis:names:tc:xacml:1.0:subject:subject-id',
    value: 'test_user_id'
  },
  {
    id: 'urn:restorecommerce:acs:names:roleScopingEntity',
    value: 'urn:test:acs:model:organization.Organization',
    attributes: [{
      id: 'urn:restorecommerce:acs:names:roleScopingInstance',
      value: 'targetScope'
    }]
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

interface MethodWithOutput {
  method: string,
  output: any
};

const PROTO_PATH: string = 'node_modules/@restorecommerce/protos/io/restorecommerce/access_control.proto';
const PKG_NAME: string = 'io.restorecommerce.access_control';
const SERVICE_NAME: string = 'AccessControlService';

const pkgDef: grpc.GrpcObject = grpc.loadPackageDefinition(
  proto_loader.loadSync(PROTO_PATH, {
    includeDirs: ['node_modules/@restorecommerce/protos'],
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  })
);

const mockServer = new GrpcMockServer('localhost:50061');

const startGrpcMockServer = async (methodWithOutput: MethodWithOutput[]) => {
  // create mock implementation based on the method name and output
  const implementations = {
    isAllowed: (call: any, callback: any) => {
      const token = JSON.parse(call?.request?.context?.subject?.value?.toString())?.token;
      if (token === 'invalid_token' || token === 'unauthenticated_token') {
        callback(null, { decision: Response_Decision.DENY, operation_status: { code: 403, message: 'Access not allowed for request with subject:undefined, resource:Test, action:CREATE, target_scope:targetSubScope; the response was DENY' } });
      } else if (token === 'valid_token') {
        callback(null, { decision: Response_Decision.PERMIT, operation_status: { code: 200, message: 'success' } });
      }
    },
    whatIsAllowed: (call: any, callback: any) => {
      callback(null, policySetRQ);
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
  await stopGrpcMockServer();
};

const stop = async (): Promise<void> => {
  // await worker.stop();
  await stopGrpcMockServer();
};

describe('testing acs-client', () => {
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
    await flushCache('test_user_id:');
  });

  afterEach(async () => {
  });

  describe('Test accessRequest', () => {
    it('Should DENY creating Test resource with unauthenticated context', async () => {
      await startGrpcMockServer([{ method: 'WhatIsAllowed', output: {} },
      { method: 'IsAllowed', output: { decision: Response_Decision.DENY } }]);

      // test resrouce to be created
      let testResource: CtxResource[] = [{
        id: 'test_id',
        name: 'Test',
        description: 'This is a test description',
        meta: {
          owners: []
        }
      }];
      let subject = {
        id: 'test_user_id',
        scope: 'targetScope',
        token: 'unauthenticated_token',
        unauthenticated: true,
        meta: {
          owners: []
        }
      };
      testResource = updateMetaData(testResource);
      let response: DecisionResponse;
      let ctx: ACSClientContext = { subject: { id: '' } };
      ctx.resources = testResource;
      response = await accessRequest(subject, [{ resource: 'Test', id: testResource[0].id }], AuthZAction.CREATE, ctx, Operation.isAllowed) as DecisionResponse;
      should.exist(response);
      should.exist(response.operation_status);
      response.decision.should.equal(Response_Decision.DENY);
      response.operation_status.code.should.equal(403);
      response.operation_status.message.should.equal('Access not allowed for request with subject:test_user_id, resource:Test, action:CREATE, target_scope:targetScope; the response was DENY');
    });
    it('Should PERMIT creating Test resource with valid user Ctx', async () => {
      // test resource to be created
      let testResource: CtxResource[] = [{
        id: 'test_id',
        name: 'Test',
        description: 'This is a test description',
        meta: {
          owners: []
        }
      }];
      // user ctx data updated in session
      let subject = {
        id: 'test_user_id',
        name: 'test_user',
        scope: 'targetScope',
        token: 'valid_token',
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
      response.decision.should.equal(Response_Decision.PERMIT);
      response.operation_status.code.should.equal(200);
      response.operation_status.message.should.equal('success');
    });
    it('Should DENY reading Test resource (DENY rule)', async () => {
      // PolicySet contains DENY rule
      policySetRQ.policy_sets[0].policies[0].rules[0] = denyRule;
      // test resource to be read of type 'ReadRequest'
      let input: CtxResource[] = [{
        id: 'test_id',
        meta: {
          owners: []
        }
      }];
      let subject = {
        id: 'test_user_id',
        scope: 'targetScope',
        token: 'invalid_token',
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
      response.decision.should.equal(Response_Decision.DENY);
      response.operation_status.code.should.equal(403);
      response.operation_status.message.should.equal('Access not allowed for request with subject:test_user_id, resource:Test, action:READ, target_scope:targetScope; the response was DENY');
    });
    it('Should PERMIT reading Test resource (PERMIT rule) and verify input filter ' +
      'is extended to enforce applicable policies', async () => {
        // PolicySet contains PERMIT rule
        policySetRQ.policy_sets[0].policies[0].rules[0] = permitRule;
        // test resource to be read of type 'ReadRequest'
        let input: CtxResource[] = [{
          id: 'test_id',
          meta: {
            owners: []
          }
        }];
        // user ctx data updated in session
        let subject = {
          id: 'test_user_id',
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
        let ctx: ACSClientContext = { subject };
        ctx.resources = input;
        // call accessRequest(), the response is from mock ACS
        const readResponse = await accessRequest(subject, [{ resource: 'Test', id: input[0].id }], AuthZAction.READ, ctx, Operation.whatIsAllowed, 'postgres') as PolicySetRQResponse;
        should.exist(readResponse.decision);
        readResponse.decision.should.equal(Response_Decision.PERMIT);
        readResponse.operation_status.code.should.equal(200);
        readResponse.operation_status.message.should.equal('success');
        // verify input is modified to enforce the applicapble poilicies
        const filterParamKey = cfg.get('authorization:filterParamKey');
        const expectedFilterResponse = [{ field: filterParamKey, operation: 'eq', value: 'targetScope' }, { field: filterParamKey, operation: 'eq', value: 'targetSubScope' }];
        readResponse.filters[0].resource.should.equal('Test');
        const filterEntityMap = readResponse.filters;
        const filters = filterEntityMap[0].filters;
        filters[0].filters[0].should.deepEqual(expectedFilterResponse[0]);
        filters[0].filters[1].should.deepEqual(expectedFilterResponse[1]);
      });
    it('Should PERMIT reading Test resource (PERMIT rule) with HR scoping enabled and verify input filter ' +
      'is extended to enforce applicable policies', async () => {
        // PolicySet contains PERMIT rule
        policySetRQ.policy_sets[0].policies[0].rules[0] = permitRule;
        // test resource to be read of type 'ReadRequest'
        let input: CtxResource[] = [{
          id: 'test_id',
          meta: {
            owners: []
          }
        }];
        // user ctx data updated in session
        let subject = {
          id: 'test_user_id',
          scope: 'targetSubScope',
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
        readResponse.decision.should.equal(Response_Decision.PERMIT);
        readResponse.operation_status.code.should.equal(200);
        readResponse.operation_status.message.should.equal('success');
        // verify input is modified to enforce the applicapble poilicies
        const filterParamKey = cfg.get('authorization:filterParamKey');
        const expectedFilterResponse = { field: filterParamKey, operation: 'eq', value: 'targetSubScope' };
        readResponse.filters[0].resource.should.equal('Test');
        const filterEntityMap = readResponse.filters;
        const filters = filterEntityMap[0].filters;
        filters[0].filters[0].should.deepEqual(expectedFilterResponse);
      });
    it('Should DENY reading Test resource (PERMIT rule) with HR scoping disabled', async () => {
      const cacheEnabled = process.env.CACHE_ENABLED;
      if (cacheEnabled && cacheEnabled.toLowerCase() === 'true') {
        await flushCache();
      }
      // PolicySet contains PERMIT rule
      // disable HR scoping for permitRule
      permitRule.target.subjects[2].value = 'false';
      policySetRQ.policy_sets[0].policies[0].rules[0] = permitRule;
      // test resource to be read of type 'ReadRequest'
      let input: CtxResource[] = [{
        id: 'test_id',
        meta: {
          owners: []
        }
      }];
      // user ctx data updated in session
      let subject = {
        id: 'test_user_id',
        scope: 'targetSubScope',
        token: 'invalid_token',
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
      readResponse.decision.should.equal(Response_Decision.DENY);
      readResponse.operation_status.code.should.equal(403);
      readResponse.operation_status.message.should.equal('Access not allowed for request with subject:test_user_id, resource:Test, action:READ, target_scope:targetSubScope; the response was DENY');
      // enable HR scoping for permitRule
      permitRule.target.subjects[2].value = 'true';
    });
  });
  describe('Test isAllowed', () => {
    it('Should DENY creating Test resource with unauthenticated context', async () => {
      const unauthSubject = {
        token: 'unauthenticated_token'
      };
      const isAllowedReqUnauth = {
        target:
        {
          actions: createAction,
          subjects: unauthenticatedSubject,
          resources
        },
        context: {
          subject: encode(unauthSubject)
        }
      } as Request;
      const response = await isAllowed(isAllowedReqUnauth, authZ);
      should.exist(response.decision);
      response.decision.should.equal(Response_Decision.DENY);
      response.operation_status.code.should.equal(403);
      response.operation_status.message.should.equal('Access not allowed for request with subject:undefined, resource:Test, action:CREATE, target_scope:targetSubScope; the response was DENY');
    });
    it('Should PERMIT creating Test resource with valid Auth context', async () => {
      let validSub = { token: 'valid_token' };
      const isAllowedReqAuth = {
        target:
        {
          actions: createAction,
          subjects: authenticatedSubject,
          resources
        },
        context: {
          // Need to send encoded subject and resources in context
          subject: encode(validSub),
          resources: [encode(JSON.stringify(resources))]
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
    it('Should return applicable policy set for read operation', async () => {
      // PolicySet contains DENY rule
      policySetRQ.policy_sets[0].policies[0].rules[0] = permitRule;
      const whatIsAllowedReqAuth = {
        target:
        {
          actions: readAction,
          subjects: authenticatedSubject,
          resources
        },
        context: {
          // Need to send encoded subject and resources in context
          subject: encode(JSON.stringify(authenticatedSubject)),
          resources: [encode(JSON.stringify(resources))]
        }
      } as Request;
      // call accessRequest(), the response is from mock ACS
      const policySetRQResponse = await whatIsAllowed(whatIsAllowedReqAuth, authZ);
      should.exist(policySetRQResponse.policy_sets);
      policySetRQResponse.policy_sets.length.should.equal(1);
      policySetRQResponse.policy_sets[0].id.should.equal('test_policy_set_id');
      policySetRQResponse.policy_sets[0].policies.length.should.equal(1);
      policySetRQResponse.policy_sets[0].policies[0].rules.length.should.equal(1);
      policySetRQResponse.policy_sets[0].policies[0].effect.should.equal(Response_Decision.PERMIT);
    });
  });
});
