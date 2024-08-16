import * as _ from 'lodash';
import { toObject } from '../index.js';
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
  ServiceImplementation,
  Sort_SortOrder
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/resource_base';

// Mapping of arangodb error codes to standard HTTP error codes
const arangoHttpErrCodeMap = new Map([
  [1210, 409], // ERROR_ARANGO_UNIQUE_CONSTRAINT_VIOLATED
  [1200, 409], // ERROR_ARANGO_CONFLICT
  [1201, 400], // ERROR_ARANGO_DATADIR_INVALID
  [1202, 404], // ERROR_ARANGO_DOCUMENT_NOT_FOUND
  [1203, 404], // ERROR_ARANGO_DATA_SOURCE_NOT_FOUND
  [1204, 400], // ERROR_ARANGO_COLLECTION_PARAMETER_MISSING
  [1205, 400], // ERROR_ARANGO_DOCUMENT_HANDLE_BAD
  [1207, 409], // ERROR_ARANGO_DUPLICATE_NAME
  [1228, 404], // ERROR_ARANGO_DATABASE_NOT_FOUND
]);

/**
 * A microservice chassis ready class which provides endpoints for
 * CRUD resource operations.
 */
export class ServiceBase<T extends ResourceListResponse, M extends ResourceList> implements ServiceImplementation {
  /**
   * @constructor
   * @param name entityName Name of the resource.
   * @param events entityEvents Event topic for the resource.
   * @param logger logger Chassis logger.
   * @param resourceapi resourceapi ResourceAPI object.
   * @param isEventsEnabled.
   */
  constructor(
    public readonly name: string,
    public readonly events: Topic,
    public readonly logger: Logger,
    public readonly resourceapi: ResourcesAPIBase,
    public isEventsEnabled?: boolean
  ) {}

  /**
   * Endpoint read.
   * Return resources based on provided filter and options.
   */
  async read(request: ReadRequest, context): Promise<DeepPartial<T>> {
    let docs: any = {};
    try {
      let objectEntities = [];
      let sort;
      if (!_.isEmpty(request.sorts)) {
        sort = {};
        _.forEach(request.sorts, (s) => {
          switch (s.order) {
            case Sort_SortOrder.ASCENDING:
              sort[s.field] = 'ASC';
              break;
            case Sort_SortOrder.DESCENDING:
              sort[s.field] = 'DESC';
              break;
          }
        });
      }

      let limit = request.limit;
      if (request.limit <= 0) {
        limit = 1000;
      }
      const offset = request.offset;
      let filter = {};
      // convert the filter from proto structure (field, operation, value and operand) to {field: value } mapping
      if (!_.isEmpty(request.filters)) {
        filter = toObject(request.filters);
      }
      const field = {};
      _.forEach(request.fields, (f) => {
        if (f.include) {
          field[f.name] = 1;
          return;
        }
        field[f.name] = 0;
      });
      const customQueries = request.custom_queries;
      const customArgs = request.custom_arguments || {};
      const search = request?.search;

      objectEntities = (await this.resourceapi.read(
        filter,
        limit,
        offset,
        sort,
        field,
        customQueries,
        customArgs,
        search
      )) || [];

      let readResponseWithStatus = [];
      objectEntities.map((object) => readResponseWithStatus.push({
        payload: object,
        status: {
          code: 200,
          message: 'success'
        }
      }));

      return {
        items: readResponseWithStatus,
        total_count: objectEntities.length,
        operation_status: {
          code: 200,
          message: 'success'
        }
      } as DeepPartial<T>;
    } catch (e) {
      this.logger.error('Error caught while processing read request', { code: e.code, message: e.message, stack: e.stack });
      if (!docs.status) {
        docs.status = {};
      }
      docs.status = {
        id: '',
        code: e.code,
        message: e.details ? e.details : e.message
      };
      return docs;
    }
  }

  private generateStatusResponse(responseItems: any[], inputItems: any[], deleteIds?: boolean) {
    let statusArray = [];
    if (!_.isArray(responseItems)) {
      responseItems = [responseItems];
    }
    if (!_.isArray(inputItems)) {
      inputItems = [inputItems];
    }
    for (let i = 0; i < responseItems.length; i++) {
      const item = responseItems[i];
      if (item.error) {
        let code;
        let id;
        if (!deleteIds) {
          id = inputItems[i].id;
        } else {
          id = inputItems[i]; // for delete operation ids is a string and not object
        }
        // map arango error code to http error code
        arangoHttpErrCodeMap.forEach((value, key) => {
          if (key === item.errorNum) {
            code = value;
          }
        });
        statusArray.push({
          id,
          code: code ? code : item.errorNum,
          message: item.errorMessage
        });
      } else {
        statusArray.push({
          id: item.id,
          code: 200,
          message: 'success'
        });
      }
    }
    return statusArray;
  }

  private generateResponseWithStatus(responseItems: any[], inputItems: any[], deleteIds?: boolean) {
    let statusArray = [];
    let responseItemsWithStatus = [];
    if (!Array.isArray(responseItems)) {
      responseItems = responseItems ? [responseItems] : [];
    }
    if (!Array.isArray(inputItems)) {
      inputItems = [inputItems];
    }
    for (let i = 0; i < responseItems.length; i++) {
      const item = responseItems[i];
      if (item.error) {
        let code;
        let id;
        if (!deleteIds) {
          id = inputItems[i].id;
        } else {
          id = inputItems[i]; // for delete operation ids is a string and not object
        }
        // map arango error code to http error code
        arangoHttpErrCodeMap.forEach((value, key) => {
          if (key === item.errorNum) {
            code = value;
          }
        });
        responseItemsWithStatus.push({
          payload: undefined,
          status: {
            id,
            code: code ? code : item.errorNum,
            message: item.errorMessage
          }
        });
        statusArray.push();
      } else {
        responseItemsWithStatus.push({
          payload: item,
          status:
          {
            id: item.id,
            code: 200,
            message: 'success'
          }
        });
      }
    }
    return responseItemsWithStatus;
  }

  /**
   * Endpoint create.
   * Inserts resources.
   */
  async create(request: M, context): Promise<DeepPartial<T>> {
    let docs: any = {};
    try {
      const createDocs = _.cloneDeep(request.items);
      let createResponse = await this.resourceapi.create(createDocs, request.subject);
      const dispatch = [];
      const events: Topic = this.events;
      if (this.isEventsEnabled) {
        _.forEach(createResponse, (item) => {
          if (!item.error) {
            dispatch.push(events.emit(`${this.name}Created`, item));
          }
        });
        await Promise.all(dispatch);
      }
      let createResponseWithStatus = this.generateResponseWithStatus(createResponse, createDocs);
      const operation_status = {
        code: 200,
        message: 'success'
      };
      docs = { items: createResponseWithStatus, total_count: createResponseWithStatus.length, operation_status };
      this.logger.info(this.name + ' create response', docs);
      return docs;
    } catch (e) {
      this.logger.error('Error caught while processing create request', { code: e.code, message: e.message, stack: e.stack });
      return {
        ...docs,
        operation_status: {
          code: e.code,
          message: e.details ? e.details : e.message
        }
      };
    }
  }

  /**
   * Endpoint delete.
   * Removes resources specified by id or all resources.
   */
  async delete(request: DeleteRequest, context): Promise<DeepPartial<DeleteResponse>> {
    let deleteResponse = { status: [], operation_status: {} };
    try {
      const events = this.events;
      let docs: any;
      if (request.collection) {
        docs = await this.resourceapi.deleteCollection();
        this.logger.info(`${this.name} deleted`);
      } else {
        docs = await this.resourceapi.delete(request.ids);
      }

      // sanitize delete response for docs
      docs.map((doc) => {
        if (doc._id && doc._key && doc._rev) {
          delete doc._id;
          doc.id = doc._key;;
          delete doc._key;
          delete doc._rev;
        }
      });

      if (this.isEventsEnabled) {
        const dispatch = [];
        _.forEach(docs, (id) => {
          if (typeof id == 'string') {
            id = { id };
          }
          if (!id.error) {
            dispatch.push(events.emit(`${this.name}Deleted`, id));
          }
        });
        await Promise.all(dispatch);
      }

      // if complete collection is dropped then there are no input ids provided,
      // iterate docs and put ids to call.request.ids
      if (request.collection && (_.isNil(request.ids) || _.isEmpty(request.ids))) {
        request.ids = [];
        docs.map((doc) => request.ids.push(doc.id));
      }
      let statusArray = this.generateStatusResponse(docs, request.ids, true);
      const operation_status = {
        code: 200,
        message: 'success'
      };
      return { status: statusArray, operation_status };
    } catch (e) {
      this.logger.error('Error caught while processing delete request', { code: e.code, message: e.message, stack: e.stack });
      return {
        ...deleteResponse,
        operation_status: {
          code: e.code,
          message: e.details ? e.details : e.message
        }
      };
    }
  }

  /**
   * Endpoint update.
   * Updates resources.
   */
  async update(request: M, context): Promise<DeepPartial<T>> {
    let docs: any = {};
    try {
      let updateDocs = _.cloneDeep(request.items);
      let updateResponse = await this.resourceapi.update(updateDocs, request.subject);
      if (this.isEventsEnabled) {
        const dispatch = [];
        const events = this.events;
        _.forEach(updateResponse, (update) => {
          if (!update.error) {
            dispatch.push(events.emit(`${this.name}Modified`, update));
          }
        });
        await Promise.all(dispatch);
      }
      let responseWithStatus = this.generateResponseWithStatus(updateResponse, updateDocs);
      const operation_status = {
        code: 200,
        message: 'success'
      };
      docs = { items: responseWithStatus, total_count: responseWithStatus.length, operation_status };
      this.logger.info(this.name + ' update response', docs);
      return docs;
    } catch (e) {
      this.logger.error('Error caught while processing update request', { code: e.code, message: e.message, stack: e.stack });
      return {
        ...docs,
        operation_status: {
          code: e.code,
          message: e.details ? e.details : e.message
        }
      };
    }
  }

  /**
   * Endpoint upsert.
   * Upserts resources.
   */
  async upsert(request: M, context): Promise<DeepPartial<T>> {
    let docs: any = {};
    try {
      let upsertDocs = _.cloneDeep(request.items);
      let upsertResponse = await this.resourceapi.upsert(
        upsertDocs,
        this.events,
        this.name,
        request.subject
      );
      let responseWithStatus = this.generateResponseWithStatus(upsertResponse, upsertDocs);
      const operation_status = {
        code: 200,
        message: 'success'
      };
      docs = { items: responseWithStatus, total_count: responseWithStatus.length, operation_status };
      this.logger.info(`${this.name} upsert response`, { items: upsertResponse });
      return docs;
    } catch (e) {
      this.logger.error('Error caught while processing upsert request', { code: e.code, message: e.message, stack: e.stack });
      return {
        ...docs,
        operation_status: {
          code: e.code,
          message: e.details ? e.details : e.message
        }
      };
    }
  }
}
