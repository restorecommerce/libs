import {
  Metadata,
  type CallOptions,
  type CallContext,
} from 'nice-grpc';
import { ServiceConfig } from '@restorecommerce/service-config';
import { Logger } from '@restorecommerce/logger';
import {
  Client,
  createClient,
  createChannel,
  GrpcClientConfig,
} from '@restorecommerce/grpc-client';
import {
  UserServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/user.js';
import {
  Response_Decision
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/access_control.js';
import {
  type ResourceList,
  type ResourceListResponse,
  type DeleteRequest,
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/resource_base.js';
import {
  initAuthZ,
} from './authz.js';
import {
  initializeCache,
} from './cache.js';
import {
  Operation,
  ACSResource,
  AuthZAction,
  ACSClientContext,
  DecisionResponse,
  PolicySetRQResponse,
} from './interfaces.js';
import {
  accessRequest,
} from './resolver.js';
import { cfg } from '../config.js';
import { _ } from '../utils.js';
import { randomUUID } from 'crypto';
import {
  Filter_Operation,
  Filter_ValueType
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/filter.js';
import { Subject } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/auth.js';
import { Meta } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/meta.js';

export type DatabaseProvider = 'arangoDB' | 'postgres';
export type ACSClientContextFactory<T extends ResourceList> = (self: any, request: T, ...args: any) => Promise<ACSClientContext>;
export type ResourceFactory<T extends ResourceList> = (self: any, request: T, ...args: any) => Promise<ACSResource[]>;
export type DatabaseSelector<T extends ResourceList> = (self: any, request: T, ...args: any) => Promise<DatabaseProvider>;
export type MetaDataInjector<T extends ResourceList> = (self: any, request: T, ...args: any) => Promise<T>;
export type SubjectResolver<T extends ResourceList> = (self: any, request: T, ...args: any) => Promise<T>;

export interface AccessControllableService {
  name: string;

  /**
   * Get resources by ID.
   * Required by access controllable services for checking inner state!
   * 
   * @param ids - a list of requested resource.id(s)
   * @param subject - the calling subject
   * @param context - incomming grpc + http header context
   * @param bypassACS - set true during inner ACS calles to avoid recursive loops!
   */
  get(
    ids: string[],
    subject?: Subject,
    context?: CallContext,
    bypassACS?: boolean,
  ): Promise<ResourceListResponse>;
}

export interface AccessControlledService extends AccessControllableService{
  readonly __userService: Client<UserServiceDefinition>;
  readonly __acsDatabaseProvider: DatabaseProvider;
  readonly logger?: Logger;
}

export const DefaultACSClientContextFactory = async <T extends ResourceList>(
  self: AccessControllableService,
  request: T & DeleteRequest,
  context?: CallContext,
): Promise<ACSClientContext> => {
  const ids = request.ids ?? request.items?.map((item: any) => item.id);
  const resources = await self.get(ids, request.subject, context, true);
  return {
    ...context,
    subject: request.subject,
    resources: [
      ...resources.items ?? [],
      ...request.items ?? [],
    ],
  };
};

export const DefaultResourceFactory = <T extends ResourceList>(
  ...resourceNames: string[]
): ResourceFactory<T> => async (
  self: AccessControllableService,
  request: T,
  context?: CallContext,
) => (resourceNames?.length ? resourceNames : [self.name ?? self.constructor?.name])?.map(
  resourceName => ({
    resource: resourceName,
    id: request.items?.map((item: any) => item.id)
  })
);
export const DefaultResourceFactoryInstance = DefaultResourceFactory();

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
  const ids = Array.from(new Set(
    request.items?.map(
      (item) => item.id
    ).filter(
      id => id
    ) ?? []
  ).values());
  const meta_map = ids.length ? await self.read({
    filters: [{
      filters: [{
        field: '_key',
        operation: Filter_Operation.in,
        value: JSON.stringify(ids),
        type: Filter_ValueType.ARRAY,
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
  ) : undefined;

  request.items?.forEach((item) => {
    item.meta ??= meta_map?.get(item.id) ?? {};
    item.meta.modified ??= new Date();
    item.meta.modified_by ??= request.subject?.id;
    item.meta.owners ??= [
      request.subject?.scope ? {
        id: urns.ownerIndicatoryEntity,
        value: urns.organization,
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
    ].filter(Boolean);
    item.id ??= randomUUID().replaceAll('-', '');
  });
  return request;
};

export function access_controlled_service<T extends { new(...args: any): AccessControllableService }>(baseService: T): T {
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
      initAuthZ(cfg, logger);
      initializeCache();
    }
  };
}

export function access_controlled_function<T extends ResourceList>(kwargs: {
  action: AuthZAction;
  operation: Operation;
  subject?: SubjectResolver<T> | null;
  meta?: MetaDataInjector<T> | null;
  context?: ACSClientContext | ACSClientContextFactory<T>;
  resource?: ACSResource[] | ResourceFactory<T>;
  database?: DatabaseProvider | DatabaseSelector<T>;
  useCache?: boolean;
}) {
  return function (
    target: (request: any, ...args: any[]) => any,
    context: ClassMethodDecoratorContext,
  ) {
    return async function (this: AccessControlledService, request: any, ...args: any[]) {
      try {
        if (!this.__userService) {
          throw new Error('An @access_controlled_function must be member of an @access_controlled_service class');
        }

        request = kwargs.subject === undefined
          ? await DefaultSubjectResolver(this, request, ...args)
          : await kwargs.subject?.(this, request, ...args) ?? request;

        request = kwargs.meta === undefined
          ? kwargs.action !== AuthZAction.READ
            ? await DefaultMetaDataInjector(this, request, ...args)
            : request
          : await kwargs.meta?.(this, request, ...args) ?? request;

        const acsContext = typeof (kwargs.context) === 'function'
          ? await kwargs.context(this, request, ...args)
          : kwargs.context ?? await DefaultACSClientContextFactory(this, request, ...args);

        const resource = typeof (kwargs.resource) === 'function'
          ? await kwargs.resource(this, request, ...args)
          : kwargs.resource ?? await DefaultResourceFactoryInstance(this, request, ...args);

        const database = typeof (kwargs.database) === 'function'
          ? await kwargs.database(this, request, ...args)
          : kwargs.database ?? this.__acsDatabaseProvider ??'arangoDB';

        const acsResponse: DecisionResponse & PolicySetRQResponse = await accessRequest(
          acsContext.subject,
          resource ?? [],
          kwargs.action,
          acsContext,
          {
            operation: kwargs.operation, database: database ?? this.__acsDatabaseProvider ?? 'arangoDB',
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

        return await target.call(this, request, ...args);
      }
      catch (err: any) {
        const { code, message, details, stack } = err;
        this.logger?.error('Operation Status Error:', { code, message, details, stack });
        return {
          operation_status: {
            code: Number.isInteger(code) ? code : 500,
            message: details ?? message ?? err,
          }
        };
      }
    };
  };
}

/*
export function resolves_subject<T extends ResourceList>(
  subjectResolver: SubjectResolver<T> = DefaultSubjectResolver<T>,
) {
  return function (
    target: (request: T, ...args: any[]) => Promise<any>,
    context: ClassMethodDecoratorContext,
    args?: any,
  ) {
    console.log('CONSOLE: params of resolves_subject', target, context, args);
    target = args;
    args.value = async function (this: any, request: T, ...args: any[]) {
      request = await subjectResolver(this, request, ...args);
      return await target(this, request, ...args);
    };
  };
};
*/

/*
export function injects_meta_data<T extends ResourceList>(
  metaDataInjector: MetaDataInjector<T> = DefaultMetaDataInjector<T>,
) {
  return function (
    target: (request: T, ...args: any[]) => Promise<any>,
    context: ClassMethodDecoratorContext,
  ) {
    return async function (this: any, request: T, ...args: any[]) {
      request = await metaDataInjector(this, request, ...args);
      return await target.call(this, request, ...args);
    };
  };
};
*/
