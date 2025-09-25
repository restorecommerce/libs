import {
  type CallContext,
} from 'nice-grpc-common';
import { type ServiceConfig } from '@restorecommerce/service-config';
import { type Logger } from '@restorecommerce/logger';
import { type DatabaseProvider } from '@restorecommerce/chassis-srv';
import { Topic } from '@restorecommerce/kafka-client';
import {
  AccessControllableService,
  AuthZAction,
  Operation,
  access_controlled_function,
  access_controlled_service,
} from '@restorecommerce/acs-client';
import {
  DeepPartial,
  type DeleteRequest,
  DeleteResponse,
  Filter_Operation,
  Filter_ValueType,
  ReadRequest,
  type ResourceList,
  type ResourceListResponse,
  ResourceResponse,
  ServiceImplementation,
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/resource_base.js';
import {
  type Subject,
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/auth.js';
import {
  OperationStatusCodes,
  ResourcesAPIBase,
  ServiceBase,
  ServiceBaseOperationStatusCodes,
  ServiceBaseStatusCodes,
  StatusCodes,
} from '../core/index.js';

export const AccessControlledServiceBaseOperationStatusCodes = {
  ...ServiceBaseOperationStatusCodes,
  LIMIT_EXHAUSTED: {
    code: 500,
    message: 'Query limit 1000 exhausted!',
  },
};
export type AccessControlledServiceBaseOperationStatusCodes = OperationStatusCodes<typeof AccessControlledServiceBaseOperationStatusCodes>;

@access_controlled_service
export class AccessControlledServiceBase<O extends ResourceListResponse, I extends ResourceList>
  extends ServiceBase<O, I>
  implements ServiceImplementation, AccessControllableService
{
  protected override get statusCodes(): ServiceBaseStatusCodes {
    return super.statusCodes;
  }

  protected override set statusCodes(value: StatusCodes<any>) {
    super.statusCodes = value;
  }

  protected override get operationStatusCodes(): AccessControlledServiceBaseOperationStatusCodes {
    return super.operationStatusCodes;
  }

  protected override set operationStatusCodes(value: OperationStatusCodes<any>) {
    super.operationStatusCodes = value;
  }

  constructor(
    resourceName: string,
    topic: Topic,
    db: DatabaseProvider,
    cfg: ServiceConfig,
    logger?: Logger,
    enableEvents?: boolean,
    collectionName?: string,
  ) {
    collectionName ??= resourceName + 's';
    const fieldHandlers = cfg.get('fieldHandlers');
    fieldHandlers.bufferedFields = fieldHandlers.bufferedFields?.flatMap(
      (item: any) => typeof(item) === 'string'
        ? item
        : item.entities?.includes(collectionName)
          ? item.fields
          : item.entities
            ? []
            : item.fields
    );
    fieldHandlers.timeStampFields = fieldHandlers.timeStampFields?.flatMap(
      (item: any) => typeof(item) === 'string'
        ? item
        : item.entities?.includes(collectionName)
          ? item.fields
          : item.entities
            ? []
            : item.fields
    );
    const graph = cfg.get('graph');
    super(
      resourceName,
      topic,
      logger,
      new ResourcesAPIBase(
        db,
        collectionName,
        fieldHandlers,
        graph?.vertices?.[collectionName],
        graph?.name,
        logger,
        resourceName
      ),
      enableEvents,
    );
    this.operationStatusCodes = {
      ...AccessControlledServiceBaseOperationStatusCodes,
      ...cfg?.get('operationStatusCodes')
    };
  }

  protected catchStatusError<T extends ResourceResponse>(e?: any, item?: T): T {
    item ??= {} as T;
    const {
      code,
      title,
      message,
      details,
    } = e ?? {};
    item.status = {
      id: item?.payload?.id,
      code: Number.isInteger(code) ? code : 500,
      message: message ? [
        title,
        message,
        details,
      ].filter(s => s).join('; ') : 'Unknwon Error!'
    };
    this.logger?.warn(e?.stack ?? item.status.message, item);
    return item;
  }

  protected catchOperationError<T extends ResourceListResponse>(e?: any, response?: T): T {
    response ??= {} as T;
    const {
      code,
      title,
      message,
      details,
    } = e ?? {};
    response.operation_status = {
      code: Number.isInteger(code) ? code : 500,
      message: message ? [
        title,
        message,
        details,
      ].filter(s => s).join('; ') : 'Unknwon Error!'
    };
    this.logger?.error(e?.stack ?? response.operation_status.message, response);
    return response;
  }

  protected async superRead(
    request: ReadRequest,
    context?: CallContext,
  ): Promise<DeepPartial<O>> {
    return await super.read(request, context);
  }

  protected async superCreate(
    request: I,
    context?: CallContext,
  ): Promise<DeepPartial<O>> {
    return await super.create(
      request,
      context,
    );
  }

  protected async superUpdate(
    request: I,
    context?: CallContext,
  ): Promise<DeepPartial<O>> {
    return await super.update(
      request,
      context,
    );
  }

  protected async superUpsert(
    request: I,
    context?: CallContext,
  ): Promise<DeepPartial<O>> {
    return await super.upsert(
      request,
      context,
    );
  }

  protected async superDelete(
    request: DeleteRequest,
    context?: CallContext,
  ): Promise<DeleteResponse> {
    return await super.delete(
      request,
      context,
    );
  }

  public async get(
    ids: string[],
    subject?: Subject,
    context?: CallContext,
    bypassACS = false,
  ): Promise<DeepPartial<O>> {
    ids = Array.from(new Set(ids)).filter(id => id);
    if (ids.length > 1000) {
      throw this.operationStatusCodes.LIMIT_EXHAUSTED;
    }

    if (ids.length === 0) {
      const response = {
        total_count: 0,
        operation_status: this.operationStatusCodes.SUCCESS,
      };
      return response as DeepPartial<O>;
    }

    const request = ReadRequest.fromPartial({
      filters: [{
        filters: [{
          field: '_key',
          operation: Filter_Operation.in,
          value: JSON.stringify(ids),
          type: Filter_ValueType.ARRAY
        }]
      }],
      limit: ids.length,
      subject
    });
    if (bypassACS) {
      return await this.superRead(request, context);
    }
    else {
      return await this.read(request, context);
    }
  }

  @access_controlled_function({
    action: AuthZAction.CREATE,
    operation: Operation.isAllowed,
  })
  public override async create(
    request: I,
    context?: CallContext
  ): Promise<DeepPartial<O>> {
    return await this.superCreate(request, context);
  }

  @access_controlled_function({
    action: AuthZAction.READ,
    operation: Operation.whatIsAllowed,
  })
  public override async read(
    request: ReadRequest,
    context?: CallContext,
  ): Promise<DeepPartial<O>> {
    return await this.superRead(request, context);
  }

  @access_controlled_function({
    action: AuthZAction.MODIFY,
    operation: Operation.isAllowed,
  })
  public override async update(
    request: I,
    context?: CallContext,
  ): Promise<DeepPartial<O>> {
    return await this.superUpdate(request, context);
  }

  @access_controlled_function({
    action: AuthZAction.MODIFY,
    operation: Operation.isAllowed,
  })
  public override async upsert(
    request: I,
    context?: CallContext,
  ): Promise<DeepPartial<O>> {
    return await this.superUpsert(request, context);
  }

  @access_controlled_function({
    action: AuthZAction.DELETE,
    operation: Operation.isAllowed,
  })
  public override async delete(
    request: DeleteRequest,
    context?: CallContext,
  ): Promise<DeleteResponse> {
    return this.superDelete(request, context);
  }
}
