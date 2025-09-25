import * as should from 'should';
import { GrpcMockServer } from '@alenon/grpc-mock-server';
import { CallContext } from 'nice-grpc';
import { it, describe, beforeAll, afterAll, beforeEach, afterEach } from 'vitest';
import {
  ResourceListResponse,
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
import { flushCache, initializeCache } from '../src/acs/cache';
import {
  AuthZAction,
  Operation,
} from '../src/acs/interfaces';
import logger from '../src/logger';
import {
  access_controlled_function,
  access_controlled_service,
  AccessControllableService,
  cfg,
} from '../src';
import {
  mockServices,
  meta,
  operation_status,
  permitRuleNoHrs,
  permitRuleOrgScope,
  permitRuleUserScope,
  PolicySetRQFactory,
  status,
  fallbackDeny,
} from './mock_server';

const cacheEnabled = process.env.CACHE_ENABLED?.toLowerCase() === 'true';
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
    public readonly cfg?: ServiceConfig,
    public readonly logger?: Logger,
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
    useCache: cacheEnabled,
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
    useCache: cacheEnabled,
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
      total_count: this.mock_data?.length ?? 0,
      operation_status,
    } as O;
  }
};
const decoratedTestService = new DecoratedTestService<ContactPointList, ContactPointListResponse>(
  'contact_point',
  [ // mock_data
    {
      id: 'test_id',
      name: 'TestContactPoint',
      description: 'This is a test description',
      meta,
    },
  ],
  cfg,
  logger,
);

describe('Testing acs-client decorators', () => {
  beforeAll(async () => {
    if (cacheEnabled) {
      await initializeCache();
    }
    await start();
  }, 60000);

  afterAll(async () => {
    await stop();
    if (cacheEnabled) {
      await flushCache();
    }
  });

  beforeEach(async () => {
    if (cacheEnabled) {
      await flushCache('test_user_id:');
    }
  });

  afterEach(async () => {
  });

  describe('Decorated CRUD Service', () => {
    it('Should DENY creating ContactPoint with unauthenticated context', async () => {
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
      should.equal(
        response.operation_status?.message,
        'Access not allowed for request with subject:undefined, resource:contact_point, ' + 
        'action:CREATE, target_scope:targetScope; the response was DENY'
      );
      should.equal(response.operation_status?.code, 403);
    });

    it('Should PERMIT creating ContactPoint with valid Org scope matching Ctx', async () => {
      // ContactPoint to be created
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
      should.equal(response.operation_status?.message, 'success');
      should.equal(response.operation_status?.code, 200);
    });

    it('Should PERMIT creating ContactPoint with valid User scope matching Ctx', async () => {
      // ContactPoint to be created
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
      should.equal(response.operation_status?.message, 'success');
      should.equal(response.operation_status?.code, 200);
    });

    it('Should DENY reading ContactPoint (DENY rule)', async () => {
      // PolicySet contains DENY rule
      PolicySetRQFactory.rules = [fallbackDeny];
      const request = ReadRequest.fromPartial({
        filters: [],
      });

      const response = await decoratedTestService.read(request);
      should.equal(
        response.operation_status?.message,
        'Access not allowed for request with subject:undefined, resource:contact_point, action:READ, target_scope:undefined; the response was DENY'
      );
      should.equal(response.operation_status?.code, 403);
    });

    it('Should PERMIT reading ContactPoint (PERMIT rule with org scoping)',
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
        should.equal(response.operation_status?.message, 'success');
        should.equal(response.operation_status?.code, 200);
      }
    );

    it(
      'Should DENY reading ContactPoint (PERMIT rule) with invalid user target scope',
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
        should.equal(
          response.operation_status?.message,
          'Access not allowed for request with subject:test_user_id, resource:contact_point, ' + 
          'action:READ, target_scope:invalidScope; the response was DENY',
        );
        should.equal(response.operation_status?.code, 403);
      }
    );

    it(
      'Should PERMIT reading ContactPoint (PERMIT rule User scope) without target scope',
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
        should.equal(response.operation_status?.message, 'success');
        should.equal(response.operation_status?.code, 200);
      }
    );

    it(
      'Should PERMIT reading ContactPoint (PERMIT rule Org Scope and User scope) without target scope',
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
        should.equal(response.operation_status?.message, 'success');
        should.equal(response.operation_status?.code, 200);
      }
    );

    it(
      'Should PERMIT reading ContactPoint (PERMIT rule with org scope) with HR scoping enabled',
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

        should.equal(response.operation_status?.message, 'success');
        should.equal(response.operation_status?.code, 200);
      }
    );

    it(
      'Should PERMIT reading ContactPoint when no scope is provided (PERMIT rule with org scope) with HR scoping enabled',
      async () => {
        // PolicySet contains PERMIT rule
        PolicySetRQFactory.rules = [permitRuleOrgScope];
        const request = ReadRequest.fromPartial({
          filters: [],
          subject: {
            id: 'test_user_id',
            token: 'valid_token',
          }
        });
        const response = await decoratedTestService.read(request);
        should.equal(response.operation_status?.message, 'success');
        should.equal(response.operation_status?.code, 200);
      }
    );

    it(
      'Should DENY reading ContactPoint (PERMIT rule) with HR scoping disabled',
      async () => {
        // PolicySet contains PERMIT rule
        PolicySetRQFactory.rules = [permitRuleNoHrs];
        const request = ReadRequest.fromPartial({
          filters: [],
          subject: {
            id: 'test_user_id',
            scope: 'targetSubScope',
            token: 'invalid_token',
          }
        });
        const response = await decoratedTestService.read(request);
        should.equal(
          response.operation_status?.message,
          'Access not allowed for request with subject:undefined, ' +
          'resource:contact_point, action:READ, target_scope:targetSubScope; the response was DENY'
        );
        should.equal(response.operation_status?.code, 403);
      }
    );
  });
});
