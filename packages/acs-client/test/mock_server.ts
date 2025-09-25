import { GrpcMockServer } from '@alenon/grpc-mock-server';
import {
  RedisClientType,
  createClient as RedisCreateClient
} from 'redis';
import { Effect } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/rule';
import {
  OperationStatus,
  Status
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/status';
import { Meta } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/meta';
import { UserResponse } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/user';
import {
  Response_Decision
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/access_control';
import logger from '../src/logger';
import {
  RuleRQ,
} from '../src/acs/interfaces';
import {
  cfg,
  urns as defaultUrns,
} from '../src';
import { HierarchicalScope } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/auth';

export const urns = {
  ...defaultUrns,
  user: 'urn:test:acs:model:user.User',
  model: 'urn:test:acs:model',
  orgScope: 'urn:test:acs:model:organization.Organization',
  organization: 'urn:test:acs:model:organization.Organization',
  contact_point: 'urn:test:acs:model:contactPoint.ContactPoint',
};
Object.assign(urns, cfg.get('authorization:urns'));

export const test_user_id = 'test_user_id';
export const target_scope = 'targetScope';

export const meta: Meta = {
  owners: [
    {
      id: urns.ownerIndicatoryEntity,
      value: urns.organization,
      attributes: [{
        id: urns.ownerInstance,
        value: target_scope
      }]
    },
    {
      id: urns.ownerIndicatoryEntity,
      value: urns.user,
      attributes: [{
        id: urns.ownerInstance,
        value: test_user_id
      }]
    },
  ]
};

export const status: Status = {
  code: 200,
  message: 'success',
};

export const operation_status: OperationStatus = {
  code: 200,
  message: 'success'
};

const hierarchicalScopes: Record<string, HierarchicalScope[]> = {
  'valid-token': [
    {
      id: 'targetScope',
      role: 'user-role',
      children: [
        {
          id: 'targetSubScope',
        }
      ]
    }
  ]
};

export const users: Record<string, UserResponse> = {
  'valid-token': {
    payload: {
      id: test_user_id,
      role_associations: [
        {
          role: 'test-role',
          attributes: [
            {
              id: urns.roleScopingEntity,
              value: urns.organization,
              attributes: [{
                id: urns.roleScopingInstance,
                value: 'targetScope'
              }]
            }
          ]
        },
        {
          role: 'user-role',
          attributes: [
            {
              id: urns.roleScopingEntity,
              value: urns.user,
              attributes: [{
                id: urns.roleScopingInstance,
                value: 'test_user_id'
              }]
            }
          ]
        }
      ],
      active: true,
      tokens: [
        
      ],
      meta,
    },
    status,
  },
};

export const permitRuleOrgScope: RuleRQ = {
  id: 'permit_rule_id',
  target: {
    actions: [],
    resources: [{
      id: urns.entity,
      value: urns.contact_point,
    }],
    subjects: [
      {
        id: urns.role,
        value: 'test-role'
      },
      {
        id: urns.roleScopingEntity,
        value: urns.organization,
      },
      {
        id: urns.hierarchicalRoleScoping,
        value: 'true'
      }]
  },
  effect: Effect.PERMIT
};

export const permitRuleUserScope: RuleRQ = {
  id: 'permit_rule_id',
  target: {
    actions: [],
    resources: [{
      id: urns.entity,
      value: urns.contact_point,
    }],
    subjects: [
      {
        id: urns.role,
        value: 'user-role'
      },
      {
        id: urns.roleScopingEntity,
        value: urns.user,
      },
      {
        id: urns.hierarchicalRoleScoping,
        value: 'false',
      }]
  },
  effect: Effect.PERMIT
};

export const permitRuleNoHrs: RuleRQ = {
  id: 'no_hrs_permit_rule_id',
  target: {
    actions: [],
    resources: [{
      id: urns.entity,
      value: urns.contact_point,
    }],
    subjects: [
      {
        id: urns.role,
        value: 'test-role'
      },
      {
        id: urns.roleScopingEntity,
        value: urns.organization,
      },
      {
        id: urns.hierarchicalRoleScoping,
        value: 'false',
      }]
  },
  effect: Effect.PERMIT
};

export const denyRule: RuleRQ = {
  id: 'deny_rule_id',
  target: {
    actions: [],
    resources: [{
      id: urns.entity,
      value: urns.contact_point,
    }],
    subjects: [{
      id: urns.role,
      value: 'test-role'
    }],
  },
  effect: Effect.DENY
};

export const PolicySetRQFactory = new class {
  rules: RuleRQ[] = [];
  combiningAlgorithm = urns.permitOverrides;

  public get() {
    return {
      policy_sets: [
        {
          combining_algorithm: urns.permitOverrides,
          id: 'test_policy_set_id',
          policies: [
            {
              combining_algorithm: this.combiningAlgorithm,
              id: 'test_policy_id',
              target: {
                actions: [],
                resources: [{
                  id: urns.entity,
                  value: urns.contact_point,
                }],
                subjects: []
              },
              effect: Effect.PERMIT,
              rules: this.rules,
              has_rules: true
            }
          ]
        }
      ],
      operation_status
    };
  }
}

export const expectedError = [
  'Access not allowed for request with subject:undefined,',
  'resource:Test, action:CREATE, target_scope:targetSubScope; the response was DENY'
].join(' ')

export const implementations = {
  'acs-srv': {
    isAllowed: (call: any, callback: any) => {
      const token = JSON.parse(call?.request?.context?.subject?.value?.toString())?.token;
      switch (token) {
        case 'valid_token':
          callback(
            null,
            {
              decision: Response_Decision.PERMIT,
              operation_status: {
                code: 200,
                message: 'success'
              }
            }
          );
          break;
        default:
          callback(
            null,
            {
              decision: Response_Decision.DENY,
              operation_status: {
                code: 403,
                message: expectedError,
              }
            }
          );
          break;
      }
    },
    whatIsAllowed: (call: any, callback: any) => {
      callback(null, PolicySetRQFactory.get());
    },
  },
  user: {
    findByToken: (
      call: any,
      callback: (error: any, response: UserResponse) => void,
    ) => {
      getRedisInstance().then(
        async client => {
          const subject = users[call?.request?.token] ?? {
            status: {
              code: 404,
              message: 'User not found!'
            }
          };
          if (subject?.payload) {
            await client.set(
              `cache:${ subject.payload?.id }:subject`,
              JSON.stringify(subject.payload),
            );
            await client.set(
              `cache:${ subject.payload?.id }:hrScopes`,
              JSON.stringify(hierarchicalScopes[call.request.token]),
            );
          }
          return subject;
        },
      ).then(
        subject => callback(null, subject),
        err => {
          const { code, message, details, stack } = err;
          logger.error('Redis Client Error',  { code, message, details, stack, err });
        },
      );
    }
  },
};

let redisClient: RedisClientType;
export async function getRedisInstance() {
  if (redisClient) {
    return redisClient;
  }
  const redisConfig = cfg.get('redis');
  redisConfig.database = cfg.get('redis:db-indexes:db-subject');
  redisClient = RedisCreateClient(redisConfig);
  redisClient.on('error', (err: any) => {
    const { code, message, details, stack } = err;
    logger.error('Redis Client Error', { code, message, details, stack, err });
  });
  await redisClient.connect();
  return redisClient;
}

export async function mockServices(configs: { [key: string]: any }) {
  return await Promise.all(Object.entries(configs).map(async ([name, config]) => { 
    if (!config?.mock) {
      return;
    }

    if (!implementations[name]) {
      throw new Error(`No mocking implementation for ${name} in mocks.ts!`);
    }

    return await new GrpcMockServer(
      config.address,
    ).addService(
      config.mock.protoPath,
      config.mock.packageName,
      config.mock.serviceName,
      implementations[name],
      config.mock.protoLoadOptions,
    ).start();
  }).filter(m => !!m)) as GrpcMockServer[];
};