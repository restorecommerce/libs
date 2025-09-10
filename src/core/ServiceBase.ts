import { type CallContext } from 'nice-grpc-common';
import { BaseDocument, toObject } from '../index';
import { ResourcesAPIBase } from './ResourcesAPI';
import { Topic } from '@restorecommerce/kafka-client';
import { Logger } from '@restorecommerce/logger';
import {
  DeepPartial,
  DeleteRequest,
  DeleteResponse,
  ReadRequest,
  ResourceList,
  ResourceListResponse,
  ResourceResponse,
  ServiceImplementation,
  Sort_SortOrder
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/resource_base';
import { OperationStatus, Status } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/status';

export type ElementOf<T = any> = T extends Array<infer E> ? E : T;

// Mapping of arangodb error codes to standard HTTP error codes
const ArangoHttpErrCodeMap: Record<number, number> = {
  1210: 409, // ERROR_ARANGO_UNIQUE_CONSTRAINT_VIOLATED
  1200: 409, // ERROR_ARANGO_CONFLICT
  1201: 400, // ERROR_ARANGO_DATADIR_INVALID
  1202: 404, // ERROR_ARANGO_DOCUMENT_NOT_FOUND
  1203: 404, // ERROR_ARANGO_DATA_SOURCE_NOT_FOUND
  1204: 400, // ERROR_ARANGO_COLLECTION_PARAMETER_MISSING
  1205: 400, // ERROR_ARANGO_DOCUMENT_HANDLE_BAD
  1207: 409, // ERROR_ARANGO_DUPLICATE_NAME
  1228: 404, // ERROR_ARANGO_DATABASE_NOT_FOUND
};

export type StatusCodes<T> = {
  [K in keyof T]?: Status
};

export type OperationStatusCodes<T> = {
  [K in keyof T]?: OperationStatus
};

export const ServiceBaseStatusCodes = {
  SUCCESS: {
    code: 200,
    message: 'success',
  },
};
export type ServiceBaseStatusCodes = StatusCodes<typeof ServiceBaseStatusCodes>;

export const ServiceBaseOperationStatusCodes = {
  SUCCESS: {
    code: 200,
    message: 'success',
  },
  MULTI_STATUS: {
    code: 207,
    message: 'Multi status - response may include errors!',
  },
};
export type ServiceBaseOperationStatusCodes = OperationStatusCodes<typeof ServiceBaseOperationStatusCodes>;

/**
 * A microservice chassis ready class which provides endpoints for
 * CRUD resource operations.
 */
export class ServiceBase<T extends ResourceListResponse, M extends ResourceList> implements ServiceImplementation {
  private status_codes: StatusCodes<any>;
  private operation_status_codes: OperationStatusCodes<any>;
  
  protected get statusCodes(): ServiceBaseStatusCodes {
    this.status_codes ??= { ...ServiceBaseStatusCodes };
    return this.status_codes;
  }

  protected set statusCodes(value: StatusCodes<any>) {
    Object.assign(this.statusCodes, value);
  }

  protected get operationStatusCodes(): ServiceBaseOperationStatusCodes {
    this.operation_status_codes ??= { ...ServiceBaseOperationStatusCodes };
    return this.operation_status_codes;
  }

  protected set operationStatusCodes(value: OperationStatusCodes<any>) {
    Object.assign(this.operationStatusCodes, value);
  }

  /**
   * @constructor
   * @param name entityName Name of the resource.
   * @param events entityEvents Event topic for the resource.
   * @param logger logger Chassis logger?.
   * @param resourceapi resourceapi ResourceAPI object.
   * @param isEventsEnabled.
   */
  constructor(
    public readonly name: string,
    public readonly events?: Topic,
    public readonly logger?: Logger,
    public readonly resourceapi?: ResourcesAPIBase,
    public isEventsEnabled?: boolean,
  ) {}

  /**
   * Endpoint read.
   * Return resources based on provided filter and options.
   */
  async read(request: ReadRequest, context: CallContext): Promise<DeepPartial<T>> {
    try {
      const sort = request.sorts?.reduce(
        (a, s) => {
          switch (s.order) {
            default:
            case Sort_SortOrder.ASCENDING:
              a[s.field] = 'ASC';
              break;
            case Sort_SortOrder.DESCENDING:
              a[s.field] = 'DESC';
              break;
          }
          return a;
        }, {} as Record<string, string>
      );

      const limit = request.limit;
      const offset = request.offset;
      const filter = request.filters?.length ? toObject(request) : {};
      const field = {} as Record<string, number>;
      request.fields?.forEach((f) => {
        if (f.include) {
          field[f.name] = 1;
          return;
        }
        field[f.name] = 0;
      });
      const customQueries = request.custom_queries;
      const customArgs = request.custom_arguments;
      const search = request?.search;
      const objectEntities = (await this.resourceapi.read<ElementOf<T['items']>['payload']>(
        filter,
        limit,
        offset,
        sort,
        field,
        customQueries,
        customArgs,
        search
      )) ?? [];

      const readResponseWithStatus = objectEntities.map((object) => ({
        payload: object,
        status: {
          ...this.statusCodes.SUCCESS,
          id: object.id,
        },
      }));

      return {
        items: readResponseWithStatus,
        total_count: readResponseWithStatus.length,
        operation_status: this.operationStatusCodes.SUCCESS
      } as DeepPartial<T>;
    }
    catch ({ code, message, details, stack, name, cause }: any) {
      this.logger?.error('Error caught while processing read request:', { code, message, details, stack, name, cause });
      return {
        operation_status: {
          code: Number.isInteger(code) ? code : 500,
          message: details ?? message
        }
      } as DeepPartial<T>;
    }
  }

  private generateStatusResponse(
    responseItems: BaseDocument[],
  ): DeepPartial<Status>[] {
    if (!Array.isArray(responseItems)) {
      responseItems = [responseItems];
    }
    const statusArray = responseItems.map((item) => {
      if (item.error) {
        const code = ArangoHttpErrCodeMap[item.errorNum] ?? item.errorNum;
        return {
          id: item.id,
          code: Number.isInteger(code) ? code : 500,
          message: item.errorMessage,
        };
      } else {
        return {
          ...this.statusCodes.SUCCESS,
          id: item.id,
        };
      }
    });
    return statusArray;
  }

  private generateResponseWithStatus(
    responseItems: BaseDocument[]
  ): DeepPartial<ResourceResponse>[] {
    if (!Array.isArray(responseItems)) {
      responseItems = responseItems ? [responseItems] : [];
    }
    const responseItemsWithStatus = responseItems.map((item) => {
      if (item.error) {
        const code = ArangoHttpErrCodeMap[item.errorNum] ?? item.errorNum;
        return {
          status: {
            id: item.id,
            code: Number.isInteger(code) ? code : 500,
            message: item.errorMessage,
          }
        };
      } else {
        return {
          payload: item,
          status: {
            ...this.statusCodes.SUCCESS,
            id: item.id,
          }
        };
      }
    });
    return responseItemsWithStatus;
  }

  private generateResourceResponseList(items: ResourceResponse[]): DeepPartial<T> {
    if (items.some(item => item.status?.code !== 200)) {
      return {
        items,
        total_count: items.length ?? 0,
        operation_status: this.operationStatusCodes.MULTI_STATUS,
      } as DeepPartial<T>;
    }
    else {
      return {
        items,
        total_count: items.length ?? 0,
        operation_status: this.operationStatusCodes.SUCCESS,
      } as DeepPartial<T>;
    }
  }

  /**
   * Endpoint create.
   * Inserts resources.
   */
  async create(request: M, context: CallContext): Promise<DeepPartial<T>> {
    try {
      const createResponse = await this.resourceapi.create(
        request.items,
        request.subject,
        this.isEventsEnabled && this.events
      );
      const items = this.generateResponseWithStatus(createResponse);
      const docs = this.generateResourceResponseList(items);
      this.logger?.info(this.name + ' create response', docs);
      return docs;
    }
    catch ({ code, message, details, stack, name, cause }: any) {
      this.logger?.error('Error caught while processing create request:', { code, message, details, stack, name, cause });
      return {
        operation_status: {
          code: Number.isInteger(code) ? code : 500,
          message: details ?? message
        }
      } as DeepPartial<T>;
    }
  }

  /**
   * Endpoint delete.
   * Removes resources specified by id or all resources.
   */
  async delete(request: DeleteRequest, context: CallContext): Promise<DeepPartial<DeleteResponse>> {
    try {
      let docs: any[];
      if (request.collection) {
        await this.resourceapi.deleteCollection(this.isEventsEnabled && this.events);
        this.logger?.info(`${this.name} deleted`);
        docs = [{
          id: request.collection,
        }]
      } else {
        docs = await this.resourceapi.delete(request.ids, this.isEventsEnabled && this.events);
      }

      docs?.forEach((doc) => {
        if (doc._id && doc._key && doc._rev) {
          doc.id = doc._key;
          delete doc._id;
          delete doc._key;
          delete doc._rev;
        }
      });
      const status = docs?.length ? this.generateStatusResponse(docs) : undefined;

      return {
        status,
        operation_status: status?.some(status => status.code !== 200)
        ? this.operationStatusCodes.MULTI_STATUS
        : this.operationStatusCodes.SUCCESS
      };
    } 
    catch ({ code, message, details, stack, name, cause }: any) {
      this.logger?.error('Error caught while processing delete request:', { code, message, details, stack, name, cause });
      return {
        operation_status: {
          code: Number.isInteger(code) ? code : 500,
          message: details ?? message
        }
      } as DeepPartial<DeleteResponse>;
    }
  }

  /**
   * Endpoint update.
   * Updates resources.
   */
  async update(request: M, context: CallContext): Promise<DeepPartial<T>> {
    try {
      const updateResponse = await this.resourceapi.update(
        request.items,
        request.subject,
        this.isEventsEnabled && this.events,
      );
      const items = this.generateResponseWithStatus(updateResponse);
      const docs = this.generateResourceResponseList(items);
      this.logger?.info(this.name + ' update response', docs);
      return docs as DeepPartial<T>;
    }
    catch ({ code, message, details, stack, name, cause }: any) {
      this.logger?.error('Error caught while processing update request:', { code, message, details, stack, name, cause });
      return {
        operation_status: {
          code: Number.isInteger(code) ? code : 500,
          message: details ?? message
        }
      } as DeepPartial<T>;
    }
  }

  /**
   * Endpoint upsert.
   * Upserts resources.
   */
  async upsert(request: M, context: CallContext): Promise<DeepPartial<T>> {
    try {
      const upsertResponse = await this.resourceapi.upsert(
        request.items,
        request.subject,
        this.isEventsEnabled && this.events,
      );
      const items = this.generateResponseWithStatus(upsertResponse);
      const docs = this.generateResourceResponseList(items);
      this.logger?.info(`${this.name} upsert response`, { items: upsertResponse });
      return docs as DeepPartial<T>;
    }
    catch ({ code, message, details, stack, name, cause }: any) {
      this.logger?.error('Error caught while processing upsert request:', { code, message, details, stack, name, cause });
      return {
        operation_status: {
          code: Number.isInteger(code) ? code : 500,
          message: details ?? message
        }
      } as DeepPartial<T>;
    }
  }
}
