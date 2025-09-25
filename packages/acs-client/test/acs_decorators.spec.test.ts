import * as should from 'should';
import { GrpcMockServer } from '@alenon/grpc-mock-server';
import { CallContext } from 'nice-grpc';
import { it, describe, beforeAll, afterAll, beforeEach, afterEach } from 'vitest';
import {
  Response_Decision
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/access_control';
import {
  ResourceListResponse,
  DeleteRequest,
  DeleteResponse,
  ReadRequest,
  ResourceList
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/resource_base';
import {
  ContactPointList,
  ContactPointListResponse
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/contact_point';
import { ServiceConfig } from '@restorecommerce/service-config';
import { Logger } from '@restorecommerce/logger';
import { Subject } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/auth';
import { accessRequest } from '../src/acs/resolver';
import { flushCache, initializeCache } from '../src/acs/cache';
import {
  AuthZAction,
  PolicySetRQResponse,
  Operation,
  ACSClientContext,
  CtxResource,
} from '../src/acs/interfaces';
import logger from '../src/logger';
import {
  access_controlled_function,
  access_controlled_service,
  AccessControllableService,
  cfg,
  DefaultACSClientContextFactory,
  DefaultResourceFactoryInstance,
} from '../src';
import {
  denyRule,
  expectedError,
  mockServices,
  meta,
  operation_status,
  permitRuleNoHrs,
  permitRuleOrgScope,
  permitRuleUserScope,
  PolicySetRQFactory,
  status,
} from './mock_server';

const encode = (object: any): any => {
  if (Array.isArray(object)) {
    return object.map(encode);
  } else {
    return {
      value: Buffer.from(JSON.stringify(object))
    };
  }
};

let mocking: GrpcMockServer[];
const start = async (): Promise<void> => {
  mocking = await mockServices(cfg.get('client'));
};

const stop = async (): Promise<void> => {
  mocking?.forEach(mock => mock?.stop());
};

@access_controlled_service
class DecoratedTestService<
  I extends ResourceList,
  O extends ResourceListResponse
> implements AccessControllableService {
  
  constructor(
    public readonly name: string,
    public mock_data?: I['items'],
    cfg?: ServiceConfig,
    logger?: Logger,
  ) {}

  public async get(
    ids: string[],
    subject?: Subject,
    context?: CallContext,
    bypassACS = false,
  ): Promise<O> {
    return {
      items: this.mock_data?.map(
        payload => ({
          payload,
          status,
        })
      ),
      total_count: 
      operation_status,
    } as O;
  }

  @access_controlled_function({
    action: AuthZAction.CREATE,
    operation: Operation.isAllowed,
    database: 'arangoDB',
    useCache: true,
  })
  public async create(
    request: I,
    context?: CallContext,
  ): Promise<O> {
    return {
      items: request.items?.map(
        payload => ({
          payload,
          status,
        }),
      ),
      total_count: request.items?.length,
      operation_status,
    } as O;
  }

  @access_controlled_function({
    action: AuthZAction.READ,
    operation: Operation.whatIsAllowed,
    database: 'arangoDB',
    useCache: true,
  })
  public async read(
    request: ReadRequest,
    context?: CallContext,
  ): Promise<O> {
    return {
      items: this.mock_data?.map(
        payload => ({
          payload,
          status,
        })
      ),
      total_count: 
      operation_status,
    } as O;
  }

  @access_controlled_function({
    action: AuthZAction.MODIFY,
    operation: Operation.isAllowed,
    database: 'arangoDB',
    useCache: true,
  })
  public async update(
    request: ResourceList,
    context?: CallContext,
  ): Promise<O> {
    return {
      items: request.items?.map(
        payload => ({
          payload,
          status,
        }),
      ),
      total_count: request.items?.length,
      operation_status,
    } as O;
  }

  @access_controlled_function({
    action: AuthZAction.MODIFY,
    operation: Operation.isAllowed,
    database: 'arangoDB',
    useCache: true,
  })
  public async upsert(
    request: I,
    context?: CallContext,
  ): Promise<O> {
    return {
      items: request.items?.map(
        payload => ({
          payload,
          status,
        }),
      ),
      total_count: request.items?.length,
      operation_status,
    } as O;
  }

  @access_controlled_function({
    action: AuthZAction.DELETE,
    operation: Operation.isAllowed,
    database: 'arangoDB',
    useCache: true,
  })
  public async delete(
    request: DeleteRequest,
    context?: CallContext,
  ): Promise<DeleteResponse> {
    return {
      status: request.ids?.map(
        id => ({
          ...status,
          id,
        })
      ),
      operation_status
    };
  }
};
const decoratedTestService = new DecoratedTestService<ContactPointList, ContactPointListResponse>(
  'contact_point',
  [ // mock_data
    {
      id: 'test_id',
      name: 'Test',
      description: 'This is a test description',
      meta,
    },
  ],
  cfg,
  logger,
);

describe('Testing acs-client decorators', () => {
  beforeAll(async () => {
    const cacheEnabled = process.env.CACHE_ENABLED;
    if (cacheEnabled && cacheEnabled.toLowerCase() === 'true') {
      await initializeCache();
    }
    await start();
  }, 60000);

  afterAll(async () => {
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

  describe('Decorated CRUD Service', () => {
    it('Should DENY creating Test resource with unauthenticated context', async () => {
      // test resrouce to be created
      const request = ContactPointList.fromPartial({
        items: [{
          id: 'test_id',
          name: 'Test',
          description: 'This is a test description',
          // meta is auto resolved by injects_meta_data()!
        }],
        subject: {
          id: 'test_user_id',
          scope: 'targetScope',
          token: 'unauthenticated_token',
          unauthenticated: true,
        }
      });

      const response = await decoratedTestService.create(request);
      should.equal(response.operation_status?.code, 403);
      should.equal(
        response.operation_status?.message,
        expectedError,
      );
    });

    it('Should PERMIT creating Test resource with valid Org scope matching Ctx', async () => {
      // test resource to be created
      const request = ContactPointList.fromPartial({
        items: [{
          id: 'test_id',
          name: 'Test',
          description: 'This is a test description',
          // meta is auto resolved by injects_meta_data()!
        }],
        subject: {
          id: 'test_user_id',
          scope: 'targetScope',
          token: 'valid_token',
        }
      });

      const response = await decoratedTestService.create(request);
      should.equal(response.operation_status?.code, 200);
      should.equal(response.operation_status?.message, 'success');
    });

    it('Should PERMIT creating Test resource with valid User scope matching Ctx', async () => {
      // test resource to be created
      const request = ContactPointList.fromPartial({
        items: [{
          id: 'test_id',
          name: 'Test',
          description: 'This is a test description',
          // meta is auto resolved by injects_meta_data()!
        }],
        subject: {
          id: 'test_user_id',
          // scope: 'targetScope',
          token: 'valid_token',
        }
      });

      const response = await decoratedTestService.create(request);
      should.equal(response.operation_status?.code, 200);
      should.equal(response.operation_status?.message, 'success');
    });

    it('Should DENY reading Test resource (DENY rule)', async () => {
      // PolicySet contains DENY rule
      PolicySetRQFactory.rules = [denyRule];
      const request = ReadRequest.fromPartial({
        filters: [],
      });

      const response = await decoratedTestService.read(request);
      should.equal(response.operation_status?.code, 403);
      should.equal(
        response.operation_status?.message,
        [
          'Access not allowed for request with subject:test_user_id,',
          'resource:test-resource, action:READ, target_scope:targetScope; the response was DENY',
        ].join(' ')
      );
    });

    it(
      [
        'Should PERMIT reading Test resource (PERMIT rule with org scoping) and verify input filter',
        'is extended to enforce applicable policies'
      ].join(' '),
      async () => {
        // PolicySet contains PERMIT rule
        PolicySetRQFactory.rules = [permitRuleOrgScope];
        const request = ReadRequest.fromPartial({
          filters: [],
          subject: {
            id: 'test_user_id',
            scope: 'targetScope',
            token: 'valid_token',
          }
        });
  
        const response = await decoratedTestService.read(request);
        /**
         * hierarchical_scopes: [{
            id: 'targetScope',
            role: 'test-role',
            children: [{
              id: 'targetSubScope'
            }]
          }]
         */
        should.equal(response.operation_status?.code, 200);
        should.equal(response.operation_status?.message, 'success');
        // verify input is modified to enforce the applicapble poilicies
        const filterParamKey = cfg.get('authorization:filterParamKey')[0].value;
        const expectedFilterResponse = [{
          field: filterParamKey,
          operation: 'eq',
          value: 'targetScope'
        }, {
          field: filterParamKey,
          operation: 'eq',
          value: 'targetSubScope'
        }];
        const filterEntityMap = request.filters;
        const filters = filterEntityMap?.[0].filters;
        should.deepEqual(filters?.[0]?.filters?.[0], expectedFilterResponse[0]);
        should.deepEqual(filters?.[0]?.filters?.[1], expectedFilterResponse[1]);
      }
    );

    it(
      'Should DENY reading Test resource (PERMIT rule) with invalid user target scope',
      async () => {
        // PolicySet contains PERMIT rule
        PolicySetRQFactory.rules = [permitRuleUserScope];
        const request = ReadRequest.fromPartial({
          filters: [],
          subject: {
            id: 'test_user_id',
            scope: 'invalidScope',
            token: 'valid_token',
          }
        });
  
        const response = await decoratedTestService.read(request);
        should.equal(response.operation_status?.code, 403);
        should.equal(
          response.operation_status?.message,
          'Access not allowed for request with subject:test_user_id, ' +
          'resource:test-resource, action:READ, target_scope:invalidUserId; the response was DENY',
        );
      }
    );

    it(
      'Should PERMIT reading Test resource (PERMIT rule User scope) without target scope and verify input filter ' +
      'is extended to enforce applicable policies for matching user role',
      async () => {
        // PolicySet contains PERMIT rule
        PolicySetRQFactory.rules = [permitRuleUserScope];
        const request = ReadRequest.fromPartial({
          filters: [],
          subject: {
            id: 'test_user_id',
            // scope: 'targetScope',
            token: 'valid_token',
          }
        });
        const response = await decoratedTestService.read(request);

        should.equal(response.operation_status?.code, 200);
        should.equal(response.operation_status?.message, 'success');
        // verify input is modified to enforce the applicapble poilicies
        const filterParamKey = cfg.get('authorization:filterParamKey')[1].value;
        const expectedFilterResponse = [{
          field: filterParamKey,
          operation: 'eq',
          value: 'test_user_id'
        }];
        const filterEntityMap = request.filters;
        const filters = filterEntityMap?.[0].filters;
        should.deepEqual(filters?.[0]?.filters?.[0], expectedFilterResponse[0]);
      }
    );

    it(
      'Should PERMIT reading Test resource (PERMIT rule Org Scope and User scope) without target scope and ' +
      'verify input filter is extended to enforce applicable policies for matching user role',
      async () => {
        // PolicySet contains PERMIT rule for OrgScoping and UserScoping entity
        PolicySetRQFactory.rules = [permitRuleOrgScope, permitRuleUserScope];
        const request = ReadRequest.fromPartial({
          filters: [],
          subject: {
            id: 'test_user_id',
            // scope: 'targetScope',
            token: 'valid_token',
          }
        });
        const response = await decoratedTestService.read(request);

        should.equal(response.operation_status?.code, 200);
        should.equal(response.operation_status?.message, 'success');
        // verify input is modified to enforce the applicapble both Org and User poilicy
        const orgFilterKey = cfg.get('authorization:filterParamKey')[0].value;
        const userFilterKey = cfg.get('authorization:filterParamKey')[1].value;
        const expectedFilterResponse = [
          { field: orgFilterKey, operation: 'eq', value: 'targetScope' },
          { field: orgFilterKey, operation: 'eq', value: 'targetSubScope' },
          { field: userFilterKey, operation: 'eq', value: 'test_user_id' },
        ];
        const filterEntityMap = request.filters;
        const filters = filterEntityMap?.[0].filters;
        should.deepEqual(filters?.[0]?.filters?.[0], expectedFilterResponse[0]);
      }
    );

    it(
      'Should PERMIT reading Test resource (PERMIT rule with org scope) with HR scoping enabled and verify input filter ' +
      'is extended to enforce applicable policies',
      async () => {
        // PolicySet contains PERMIT rule
        PolicySetRQFactory.rules = [permitRuleOrgScope];
        const request = ReadRequest.fromPartial({
          filters: [],
          subject: {
            id: 'test_user_id',
            scope: 'targetSubScope',
            token: 'valid_token',
          }
        });
        const response = await decoratedTestService.read(request);

        should.equal(response.operation_status?.code, 200);
        should.equal(response.operation_status?.message, 'success');
        // verify input is modified to enforce the applicapble poilicies
        const filterParamKey = cfg.get('authorization:filterParamKey')[0].value;
        const expectedFilterResponse = { field: filterParamKey, operation: 'eq', value: 'targetSubScope' };
        const filters = request.filters?.[0].filters;
        should.deepEqual(filters?.[0]?.filters?.[0], expectedFilterResponse);
      }
    );

    it(
      'Should PERMIT reading Test resource when no scope is provided (PERMIT rule with org scope) with HR scoping ' +
      'enabled and verify since no scope is provided all applicable HR scope instances are returned',
      async () => {
        // PolicySet contains PERMIT rule
        PolicySetRQFactory.rules = [permitRuleOrgScope];

        // test resource to be read of type 'ReadRequest'
        const resources: CtxResource[] = [{
          id: 'test_id',
          meta: {
            owners: []
          }
        }];

        // user ctx data updated in session
        const subject = {
          id: 'test_user_id',
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
              role: 'test-role',
              children: [{
                id: 'targetSubScope'
              }]
            }
          ]
        };

        const ctx: ACSClientContext = {
          subject,
          resources,
        };

        // call accessRequest(), the response is from mock ACS
        const readResponse = await accessRequest(
          subject,
          [{ resource: 'Test', id: resources[0].id }],
          AuthZAction.READ,
          ctx, { operation: Operation.whatIsAllowed, database: 'postgres' }
        ) as PolicySetRQResponse;

        should.equal(readResponse.decision, Response_Decision.PERMIT);
        should.equal(readResponse.operation_status?.code, 200);
        should.equal(readResponse.operation_status?.message, 'success');
        // verify input is modified to enforce the applicapble poilicies
        const filterParamKey = cfg.get('authorization:filterParamKey')[0].value;
        const expectedFilterResponse = [{
          field: filterParamKey,
          operation: 'eq',
          value: 'targetScope'
        }, {
          field: filterParamKey,
          operation: 'eq',
          value: 'targetSubScope'
        }];
        should.equal(readResponse.filters?.[0]?.resource, 'Test');
        const filters = readResponse.filters?.[0].filters;
        should.deepEqual(filters?.[0]?.filters?.[0], expectedFilterResponse[0]);
        should.deepEqual(filters?.[0]?.filters?.[1], expectedFilterResponse[1]);
      }
    );

    it(
      'Should DENY reading Test resource (PERMIT rule) with HR scoping disabled',
      async () => {
        const cacheEnabled = process.env.CACHE_ENABLED;
        if (cacheEnabled && cacheEnabled.toLowerCase() === 'true') {
          await flushCache();
        }
        // PolicySet contains PERMIT rule
        PolicySetRQFactory.rules = [permitRuleNoHrs];

        // test resource to be read of type 'ReadRequest'
        const resources: CtxResource[] = [{
          id: 'test_id',
          meta: {
            owners: []
          }
        }];

        // user ctx data updated in session
        const subject = {
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
              role: 'test-role',
              children: [{
                id: 'targetSubScope'
              }]
            }
          ]
        };

        const ctx: ACSClientContext = {
          subject,
          resources,
        };

        // call accessRequest(), the response is from mock ACS
        const readResponse = await accessRequest(
          subject,
          [{ resource: 'Test', id: resources[0].id }],
          AuthZAction.READ,
          ctx, { operation: Operation.whatIsAllowed, database: 'postgres' }
        ) as PolicySetRQResponse;

        should.equal(readResponse.decision, Response_Decision.DENY);
        should.equal(readResponse.operation_status?.code, 403);
        should.equal(
          readResponse.operation_status?.message,
          'Access not allowed for request with subject:test_user_id, ' +
          'resource:Test, action:READ, target_scope:targetSubScope; the response was DENY'
        );
      }
    );
  });
});
