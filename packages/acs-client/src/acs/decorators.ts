import { Logger } from 'winston';
import { Provider as ServiceConfig } from 'nconf';
import {
  Client,
  createClient,
  createChannel,
  GrpcClientConfig
} from '@restorecommerce/grpc-client';
import {
  initAuthZ,
} from './authz';
import {
  initializeCache,
} from './cache';
import {
  Operation,
  Resource,
  AuthZAction,
  ACSClientContext,
} from './interfaces';
import {
  accessRequest,
} from './resolver';
import {
  UserServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/user';
import {
  Response_Decision
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/access_control';


/* eslint-disable prefer-arrow-functions/prefer-arrow-functions */
export type ACSClientContextFactory = (self: any, ...args: any) => Promise<ACSClientContext>;
export type ResourceFactory = (self: any, ...args: any) => Promise<Resource[]>;

export function access_controlled_service<T extends { new (...args: any): {} }>(baseService: T): any {
  return class extends baseService {
    public readonly user_service: Client<UserServiceDefinition>;

    constructor(...args: any) {
      super(...args);
      const cfg = args.find((arg: any) => (arg instanceof ServiceConfig)) as ServiceConfig;
      const logger = args.find((arg: any) => (arg instanceof Logger)) as Logger;
      this.user_service = createClient(
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

export function access_controlled_function(kwargs: {
  action: AuthZAction;
  operation: Operation;
  context?: ACSClientContext | ACSClientContextFactory;
  resource?: Resource[] | ResourceFactory;
  database?: 'arangoDB' | 'postgres';
  useCache?: true;
}) {
  return function (
    target: any,
    propertyName: string,
    descriptor: TypedPropertyDescriptor<any>,
  ) {
    const method = descriptor.value!;

    descriptor.value = async function () {
      try {
        if (!this.user_service) {
          throw new Error('An @access_controlled_function must be member of an @access_controlled_service class');
        }

        const context = typeof(kwargs.context) === 'function'
          ? await kwargs.context(this, ...arguments)
          : kwargs.context;

        const resource = typeof(kwargs.resource) === 'function'
          ? await kwargs.resource(this, ...arguments)
          : kwargs.resource;

        const subject = context?.subject;
        if (subject?.token) {
          const user = await this.user_service.findByToken({ token: subject.token });
          if (user?.payload?.id) {
            subject.id = user.payload.id;
          }
        }

        const response = await accessRequest(
          subject,
          resource ?? [],
          kwargs.action,
          context,
          kwargs.operation,
          kwargs.database ?? 'arangoDB',
          kwargs.useCache ?? false
        );

        if (response?.decision !== Response_Decision.PERMIT) {
          return response;
        }
      }
      catch (err) {
        return {
          decision: Response_Decision.DENY,
          operation_status: {
            code: err.code ?? 500,
            message: err.details ?? err.message ?? err,
          }
        };
      }
      return await method.apply(this, arguments);
    };
  };
}

export const DefaultACSClientContextFactory: ACSClientContextFactory = (
  self: any,
  request: any,
  context: any,
): Promise<ACSClientContext> => ({
  ...context,
  subject: request.subject,
  resources: [],
});