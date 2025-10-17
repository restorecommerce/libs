import {
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
  ReadRequest,
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
import { cfg, urns } from '../config.js';
import { randomUUID } from 'crypto';
import {
  Filter_Operation,
  Filter_ValueType
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/filter.js';
import { Subject } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/auth.js';

export type AccessControlledServiceRequest = ResourceList & ReadRequest;
export type DatabaseProvider = 'arangoDB' | 'postgres';
export type ResourceFactory<T extends ResourceList> = (self: any, request: T, ...args: any) => Promise<ACSResource[]>;
export type MetaDataInjector<T extends ResourceList> = (self: any, request: T, ...args: any) => Promise<T>;
export type SubjectResolver<T extends AccessControlledServiceRequest> = (self: any, request: T, ...args: any) => Promise<T>;
export type DatabaseSelector<T extends AccessControlledServiceRequest> = (self: any, request: T, ...args: any) => Promise<DatabaseProvider>;
export type ACSClientContextFactory<T extends AccessControlledServiceRequest> = (self: any, request: T, ...args: any) => Promise<ACSClientContext>;

/**
 * @param action AuthZAction of that function (required),
 * @param opatation Operation [isAllowed | whatIsAllowed] (required),
 * @param subject SubjectResolver should resolve the subject.id by a given token (default: DefaultSubjectResolver)   
 * @param meta MetaDataInjector should inject meta data to each item of resource (default: DefaultMetaDataInjector)
 * @param context ACSClientContext | ACSClientContextFactory should provide a static of dynamic ACSContext (default: DefaultACSClientContextFactory)
 * @param resource ACSResource[] | ResourceFactory should provide a static or dynamic ACSResource (default: DefaultResourceFactory)
 * @param database DatabaseProvider | DatabaseSelector -  (detault: cfg.get('authorization:database') ?? 'arangoDB')
 * @param useCache boolean (default: cfg.get('authorization:cache:enabled') ?? false)
 */
export type AccessControlledFunctionOptions<T> = {
  action: AuthZAction;
  operation: Operation;
  subject?: SubjectResolver<T> | null;
  meta?: MetaDataInjector<T> | null;
  context?: ACSClientContext | ACSClientContextFactory<T>;
  resource?: ACSResource[] | ResourceFactory<T>;
  database?: DatabaseProvider | DatabaseSelector<T>;
  useCache?: boolean;
}

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

export const DefaultACSClientContextFactory = async <T extends AccessControlledServiceRequest>(
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
    // we don't trust incoming subject id!
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

export function access_controlled_function<T extends AccessControlledServiceRequest>(
  kwargs: AccessControlledFunctionOptions<T>,
): any {
  return function (
    target: (request: T, ...args: any[]) => Promise<any>,
    context: ClassMethodDecoratorContext,
    fallback?: any,
  ) {
    const reflection = async function (this: AccessControlledService, request: T, ...args: any[]) {
      try {
        if (!this.__userService) {
          throw new Error('An @access_controlled_function must be member of an @access_controlled_service class');
        }

        request = kwargs.subject === undefined
          ? await DefaultSubjectResolver(this, request, ...args)
          : await kwargs.subject?.(this, request, ...args) ?? request;

        // Read actions should not require Meta from request
        // use null to disable MetaDataInjector
        // however, kwargs.meta can still be undefined!
        if (kwargs.action !== AuthZAction.READ && kwargs.meta !== null) {
          if (kwargs.meta) {
            await kwargs.meta(this, request, ...args);
          }
          else {
            await DefaultMetaDataInjector(this, request, ...args);
          }
        }

        const acsContext = typeof (kwargs.context) === 'function'
          ? await kwargs.context(this, request, ...args)
          : kwargs.context ?? await DefaultACSClientContextFactory(this, request, ...args);

        const resource = typeof (kwargs.resource) === 'function'
          ? await kwargs.resource(this, request, ...args)
          : kwargs.resource ?? await DefaultResourceFactoryInstance(this, request, ...args);

        const database = typeof (kwargs.database) === 'function'
          ? await kwargs.database(this, request, ...args)
          : kwargs.database ?? this.__acsDatabaseProvider ?? 'arangoDB';

        const acsResponse: DecisionResponse & PolicySetRQResponse = await accessRequest(
          acsContext.subject,
          resource ?? [],
          kwargs.action,
          acsContext,
          {
            operation: kwargs.operation, database: database ?? this.__acsDatabaseProvider ?? 'arangoDB',
            useCache: kwargs.useCache ?? cfg.get('authorization:cache:enabled') ?? false
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

    if (fallback) {
      // A 3rd param?
      // fallback to decorator stage 1 or 2.
      // is it a pure function or a stage 2 descriptor? let's guess!
      target = fallback.value ?? fallback;
      fallback.value = reflection;
    }
    else {
      // lucky we are on stage 3 - simple:
      return reflection;
    }
  };
}
