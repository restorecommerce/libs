import {
  Response,
  Response_Decision,
  ReverseQuery,
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/access_control';
import {
  Effect
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/rule';
import {
  UserResponse,
  UserType
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/user';
import {
  UserListResponse,
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/user.js';
import {
  AuthenticationLogListResponse,
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/authentication_log';
import {
  OperationStatus
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/status';
import {
  HierarchicalScope
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/auth';
import {
  Status
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/status';
import {
  getRedisInstance,
  logger
} from './utils';
import { AdapterPayload } from 'oidc-provider';
import { TokenData } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/token';

const meta = {
  modifiedBy: 'SYSTEM',
  created: new Date(),
  modified: new Date(),
  owners: [
    {
      id: 'urn:restorecommerce:acs:names:ownerIndicatoryEntity',
      value: 'urn:restorecommerce:acs:model:organization.Organization',
      attributes: [
        {
          id: 'urn:restorecommerce:acs:names:ownerInstance',
          value: 'main',
        }
      ]
    },
    {
      id: 'urn:restorecommerce:acs:names:ownerInstance',
      value: 'main',
    }
  ]
};

const operationStatus: OperationStatus = {
  code: 200,
  message: 'MOCKED',
};

const status: Status = {
  code: 200,
  message: 'MOCKED',
};

const users: Record<string, UserResponse> = {
  superadmin: {
    payload: {
      id: 'superadmin',
      name: 'manuel.mustersuperadmin',
      first_name: 'Manuel',
      last_name: 'Mustersuperadmin',
      email: 'manuel.mustersuperadmin@restorecommerce.io',
      password: 'CNQJrH%KAayeDpf3h',
      default_scope: 'r-ug',
      role_associations: [
        {
          id: 'superadmin-1-administrator-r-id',
          role: 'superadministrator-r-id',
        },
      ],
      locale_id: 'de-de',
      timezone_id: 'europe-berlin',
      active: true,
      user_type: UserType.ORG_USER,
      tokens: [
        {
          token: 'superadmin',
        }
      ],
      meta,
    },
    status,
  },
};

const hierarchicalScopes: { [key: string]: HierarchicalScope[] } = {
  superadmin: [
    {
      id: 'main',
      role: 'superadministrator-r-id',
      children: [
        {
          id: 'sub',
        }
      ]
    }
  ]
};

const whatIsAllowed: ReverseQuery = {
  policySets: [
    {
      id: 'policy_set',
      combiningAlgorithm: 'urn:oasis:names:tc:xacml:3.0:rule-combining-algorithm:permit-overrides',
      effect: Effect.DENY,
      policies: [
        {
          id: 'policy_superadmin_permit_all',
          combiningAlgorithm: 'urn:oasis:names:tc:xacml:3.0:rule-combining-algorithm:permit-overrides',
          effect: Effect.DENY,
          target: {
            subjects: [
              {
                id: 'urn:restorecommerce:acs:names:role',
                value: 'superadministrator-r-id',
              },
            ],
          },
          rules: [{
            effect: Effect.PERMIT,
            target: {
              subjects: [
                {
                  id: 'urn:restorecommerce:acs:names:role',
                  value: 'superadministrator-r-id',
                },
              ],
            },
          }],
          hasRules: true,
        },
      ]
    },
  ],
  operationStatus,
};

export const rules: Record<string, any> = {
  'acs-srv': {
    isAllowed: (
      call: any,
      callback: (error: any, response: Response) => void,
    ) => callback(null, {
      decision: Response_Decision.PERMIT,
    }),
    whatIsAllowed: (
      call: any,
      callback: (error: any, response: ReverseQuery) => void,
    ) => callback(null, whatIsAllowed),
  },
  user: {
    find: (
      call: any,
      callback: (error: any, response: UserListResponse) => void,
    ) => callback(null, {
      items: Object.values(users),
      totalCount: Object.values(users).length,
      operationStatus,
    }),
    login: (
      call: any,
      callback: (error: any, response: UserResponse) => void,
    ) => callback(null, users.superadmin),
    findByToken: (
      call: any,
      callback: (error: any, response: UserResponse) => void,
    ) => {
      getRedisInstance().then(
        async client => {
          const subject = users[call.request.token];
          await client.set(
            `cache:${ subject.payload?.id }:subject`,
            JSON.stringify(subject.payload),
          );
          await client.set(
            `cache:${ subject.payload?.id }:hrScopes`,
            JSON.stringify(hierarchicalScopes[call.request.token]),
          );
          return subject;
        },
      ).then(
        subject => callback(null, subject),
        error => logger.error(error),
      );
    }
  },
  authentication_log: {
    create: (
      call: any,
      callback: (error: any, response: AuthenticationLogListResponse) => void,
    ) => callback(null, { operationStatus }),
  },
  token: {
    consume: (
      call: any,
      callback: (error: any, response: any) => void,
    ) => callback(null, {}),
    destroy: (
      call: any,
      callback: (error: any, response: any) => void,
    ) => callback(null, {}),
    upsert: (
      call: TokenData,
      callback: (error: any, response: any) => void,
    ) => callback(null, {}),
    revokeByGrantId: (
      call: any,
      callback: (error: any, response: any) => void,
    ) => callback(null, {}),
    find: (
      call: any,
      callback: (error: any, response: AdapterPayload) => void
    ) => {
      callback(null, {
        exp: new Date().getTime() + 20_000,
      })
    },
  },
};