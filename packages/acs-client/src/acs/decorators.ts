import * as uuid from 'uuid';
import { Logger } from '@restorecommerce/logger';
import { Provider as ServiceConfig } from 'nconf';
import {
  Client,
  createClient,
  createChannel,
  GrpcClientConfig
} from '@restorecommerce/grpc-client';
import {
  UserServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/user';
import {
  Response_Decision
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/access_control';
import {
  ResourceList,
  ResourceListResponse
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/resource_base';
import {
  initAuthZ,
} from './authz';
import {
  initializeCache,
} from './cache';
import {
  Operation,
  ACSResource,
  AuthZAction,
  ACSClientContext,
  DecisionResponse,
  PolicySetRQResponse,
  Obligation,
} from './interfaces';
import {
  accessRequest,
} from './resolver';
import { cfg } from '../config';
import { _ } from '../utils';
import {
  Filter_Operation,
  Filter_ValueType
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/filter';

export type DatabaseProvider = 'arangoDB' | 'postgres';
export type ACSClientContextFactory<T extends ResourceList> = (self: any, request: T, ...args: any) => Promise<ACSClientContext>;
export type ResourceFactory<T extends ResourceList> = (self: any, request: T, ...args: any) => Promise<ACSResource[]>;
export type DatabaseSelector<T extends ResourceList> = (self: any, request: T, ...args: any) => Promise<DatabaseProvider>;
export type MetaDataInjector<T extends ResourceList> = (self: any, request: T, ...args: any) => Promise<T>;
export type SubjectResolver<T extends ResourceList> = (self: any, request: T, ...args: any) => Promise<T>;

export interface AccessControlledService {
  readonly __userService: Client<UserServiceDefinition>;
  readonly __acsDatabaseProvider: DatabaseProvider;
}

export const DefaultACSClientContextFactory = async <T extends ResourceList>(
  self: any,
  request: T,
  context: any,
): Promise<ACSClientContext> => ({
  ...context,
  subject: request.subject,
  resources: [],
});

export const DefaultResourceFactory = <T extends ResourceList>(
  ...resourceNames: string[]
): ResourceFactory<T> => {
  return async (
    self: any,
    request: T,
    context: any,
  ) => resourceNames.map(
    resourceName => ({
      resource: resourceName,
      id: request.items?.map((item: any) => item.id)
    })
  );
};

export const DefaultSubjectResolver = async <T extends ResourceList>(
  self: any,
  request: T,
  ...args: any
): Promise<T> => {
  const subject = request?.subject;
  if (subject?.id) {
    delete subject.id;
  }
  if (subject?.token) {
    const user = await self.__userService.findByToken({ token: subject.token });
    if (user?.payload?.id) {
      subject.id = user.payload.id;
    }
  }
  return request;
};

export const DefaultMetaDataInjector = async <T extends ResourceList>(
  self: any,
  request: T,
  ...args: any
): Promise<T> => {
  const urns = cfg.get('authorization:urns');
  const ids = [...new Set(
    request.items?.map(
      (item) => item.id
    ).filter(
      id => id
    )
  )
  ];
  const meta_map = ids.length && await self.read({
    filters: [{
      filters: [{
        field: 'id',
        operation: Filter_Operation.in,
        value: JSON.stringify(ids),
        type: Filter_ValueType.ARRAY,
        filters: [],
      }]
    }],
    limit: ids.length,
    subject: request.subject
  }).then(
    (response: ResourceListResponse) => new Map(response.items?.filter(
      item => item.payload
    ).map(
      item => [item.payload.id, item.payload.meta]
    ))
  );

  request.items?.forEach((item) => {
    if (!item.id?.length) {
      item.id = uuid.v4().replace(/-/g, '');
    }

    if (!item.meta?.owners?.length) {
      item.meta = {
        ...meta_map.get(item.id),
        ...item.meta,
        owners: [
          request.subject?.scope ? {
            id: urns.ownerIndicatoryEntity,
            value: urns.organization, // to be passed here to change
            attributes: [{
              id: urns.ownerInstance,
              value: request.subject.scope
            }],
          } : undefined,
          request.subject?.id ? {
            id: urns.ownerIndicatoryEntity,
            value: urns.user,
            attributes: [{
              id: urns.ownerInstance,
              value: request.subject.id
            }],
          } : undefined,
        ].filter(i => !!i)
      };
    }
  });
  return request;
};

export function access_controlled_service<T extends { new(...args: any): any }>(baseService: T): T {
  return class extends baseService implements AccessControlledService {
    public readonly __userService: Client<UserServiceDefinition>;
    public readonly __acsDatabaseProvider: DatabaseProvider;

    constructor(...args: any) {
      super(...args);
      const cfg = args.find((arg: any) => (arg instanceof ServiceConfig)) as ServiceConfig;
      const logger = args.find((arg: any) => (arg instanceof Logger)) as Logger;
      this.__acsDatabaseProvider = cfg.get('authorization:database') ?? 'arangoDB';
      this.__userService = createClient(
        {
          ...cfg.get('client:user'),
          logger
        } as GrpcClientConfig,
        UserServiceDefinition,
        createChannel(cfg.get('client:user:address'))
      );
      initAuthZ(cfg);
      initializeCache();
    }
  };
}

export function access_controlled_function<T extends ResourceList>(kwargs: {
  action: AuthZAction;
  operation: Operation;
  context?: ACSClientContext | ACSClientContextFactory<T>;
  resource?: ACSResource[] | ResourceFactory<T>;
  database?: DatabaseProvider | DatabaseSelector<T>;
  useCache?: boolean;
}) {
  return function (
    target: any,
    propertyName: string,
    descriptor: TypedPropertyDescriptor<any>,
  ) {
    const method = descriptor.value!;
    descriptor.value = async function () {
      const that = this as AccessControlledService;
      try {
        if (!that.__userService) {
          throw new Error('An @access_controlled_function must be member of an @access_controlled_service class');
        }
        const request = arguments[0];
        const args = [...arguments].slice(1);

        const context = typeof (kwargs.context) === 'function'
          ? await kwargs.context(this, request, ...args)
          : kwargs.context;

        const resource = typeof (kwargs.resource) === 'function'
          ? await kwargs.resource(this, request, ...args)
          : kwargs.resource;

        const database = typeof (kwargs.database) === 'function'
          ? await kwargs.database(this, request, ...args)
          : kwargs.database;

        const subject = context?.subject;
        if (subject) {
          subject.id = null;
        }
        if (subject?.token) {
          const user = await that.__userService.findByToken({ token: subject.token });
          if (user?.payload?.id) {
            subject.id = user.payload.id;
          }
        }

        const acsResponse: DecisionResponse & PolicySetRQResponse = await accessRequest(
          subject,
          resource ?? [],
          kwargs.action,
          context,
          {
            operation: kwargs.operation, database: database ?? that.__acsDatabaseProvider ?? 'arangoDB',
            useCache: kwargs.useCache ?? false
          }
        );

        if (acsResponse?.decision !== Response_Decision.PERMIT) {
          return acsResponse;
        }

        if (request) {
          const arg = acsResponse?.custom_query_args?.find(
            arg => resource?.some(r => r.resource === arg.resource)
          );
          request.custom_queries = arg?.custom_queries;
          request.custom_arguments = arg?.custom_arguments;
        }

        const appResponse = await method.apply(this, arguments);
        const property = acsResponse.obligations?.filter(
          (o: Obligation) => resource.some((r) => r.resource === o.resource)
        ).flatMap(
          o => o.property
        ).flatMap(
          p => [p, new RegExp(p)]
        );

        // @ts-expect-error TS2339
        return property?.length ? _.omitDeep(appResponse, property) : appResponse;
      }
      catch (err: any) {
        return {
          operation_status: {
            code: err.code ?? 500,
            message: err.details ?? err.message ?? err,
          }
        };
      }
    };
  };
}

export function resolves_subject<T extends ResourceList>(
  subjectResolver: SubjectResolver<T> = DefaultSubjectResolver<T>,
) {
  return function (
    target: any,
    propertyName: string,
    descriptor: TypedPropertyDescriptor<any>,
  ) {
    const method = descriptor.value!;
    descriptor.value = async function () {
      const args = [...arguments].slice(1);
      const request = await subjectResolver(this, arguments[0], ...args);
      return await method.apply(this, [request, ...args]);
    };
  };
};

export function injects_meta_data<T extends ResourceList>(
  metaDataInjector: MetaDataInjector<T> = DefaultMetaDataInjector<T>,
) {
  return function (
    target: any,
    propertyName: string,
    descriptor: TypedPropertyDescriptor<any>,
  ) {
    const method = descriptor.value!;
    descriptor.value = async function () {
      const args = [...arguments].slice(1);
      const request = await metaDataInjector(this, arguments[0], ...args);
      return await method.apply(this, [request, ...args]);
    };
  };
};
