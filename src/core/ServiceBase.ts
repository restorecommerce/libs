import * as _ from 'lodash';
import * as chassis from '@restorecommerce/chassis-srv';
import { toObject } from '../index';
import { ResourcesAPIBase } from './ResourcesAPI';
import { Topic } from '@restorecommerce/kafka-client';
import { ServiceCall, ReadRequest, CreateRequest, DeleteRequest, UpdateRequest, UpsertRequest } from './interfaces';
import { Logger } from 'winston';

const errors = chassis.errors;

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
export class ServiceBase {
  logger: Logger;
  name: string;
  events: any;
  resourceapi: ResourcesAPIBase;
  isEventsEnabled: boolean;
  /**
   * @constructor
   * @param [string] entityName Name of the resource.
   * @param [object] entityEvents Event topic for the resource.
   * @param [object] logger Chassis logger.
   * @param [object] resourceapi ResourceAPI object.
   */
  constructor(entityName: string, entityEvents: any, logger: Logger,
    resourceapi: ResourcesAPIBase, isEventsEnabled?: boolean) {
    this.logger = logger;
    this.name = entityName;
    this.events = {
      entity: entityEvents
    };
    this.resourceapi = resourceapi;
    this.resourceapi.logger = logger;
    this.isEventsEnabled = isEventsEnabled;
  }

  /**
   * Endpoint read.
   * Return resources based on provided filter and options.
   * @param call request containing filter,limit, offset and sort options
   * @param context
   */
  async read(call: ServiceCall<ReadRequest>, context?: any): Promise<any> {
    let docs: any = {};
    if (!_.isEmpty(call.request.search)) {
      docs.status = {
        id: '',
        code: 404,
        message: 'Full-text search is not implemented'
      };
      return docs;
    }

    try {
      let objectEntities = [];
      let sort;
      if (!_.isEmpty(call.request.sort)) {
        sort = {};
        _.forEach(call.request.sort, (s) => {
          switch (s.order) {
            case 'ASCENDING':
            case 1:
              sort[s.field] = 'ASC';
              break;
            case 2:
            case 'DESCENDING':
              sort[s.field] = 'DESC';
              break;
            case 'UNSORTED':
            case 0:
            default:
              break;
          }
        });
      }

      let limit = call.request.limit;
      if (call.request.limit <= 0) {
        limit = 1000;
      }
      const offset = call.request.offset;
      let filter = {};
      if (!_.isEmpty(call.request.filter)) {
        if (call.request.filter.list_value) {
          filter = toObject(call.request.filter, true);
        } else {
          filter = toObject(call.request.filter);
        }
      }
      const field = {};
      _.forEach(call.request.field, (f) => {
        if (f.include) {
          field[f.name] = 1;
          return;
        }
        field[f.name] = 0;
      });
      const customQueries = call.request.custom_queries;
      const customArgs = call.request.custom_arguments || {};

      objectEntities = (await this.resourceapi.read(
        filter,
        limit,
        offset,
        sort,
        field,
        customQueries,
        customArgs
      )) || [];


      docs = {
        items: objectEntities,
        total_count: objectEntities.length,
        status: {
          code: 200,
          message: 'success'
        }
      };
      return docs;
    } catch (e) {
      const { code, message } = e;
      this.logger.error('Error caught while processing read request', { code, message });
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

  /**
   * Endpoint create.
   * Inserts resources.
   * @param call contains a list of resources to be created
   * @param context
   */
  async create(call: ServiceCall<CreateRequest>, context?: any): Promise<any> {
    let docs: any = {};
    try {
      const createDocs = _.cloneDeep(call.request.items);
      let createResponse = await this.resourceapi.create(createDocs);
      const dispatch = [];
      const events: Topic = this.events.entity;
      if (this.isEventsEnabled) {
        _.forEach(createResponse, (item) => {
          if (!item.error) {
            dispatch.push(events.emit(`${this.name}Created`, item));
          }
        });
        await dispatch;
      }
      let statusArray = this.generateStatusResponse(createResponse, createDocs);
      // remove error items from createResponse
      createResponse = createResponse.filter(item => !item.error);
      docs = { items: createResponse, total_count: createResponse.length, status: statusArray };
      this.logger.info(this.name + ' create response', docs);
      return docs;
    } catch (e) {
      const { code, message } = e;
      this.logger.error('Error caught while processing create request', { code, message });
      if (!docs.status) {
        docs.status = [];
      }
      docs.status.push({
        id: '',
        code: e.code,
        message: e.details ? e.details : e.message
      });
      return docs;
    }
  }
  /**
   * Endpoint delete.
   * Removes resources specified by id or all resources.
   * @param call contains list of resource IDs to be deleted
   * @param context
   */
  async delete(call: ServiceCall<DeleteRequest>, context?: any): Promise<any> {
    let deleteResponse = { status: [] };
    try {
      const events = this.events.entity;
      let docs: any;
      if (call.request.collection) {
        docs = await this.resourceapi.deleteCollection();
        this.logger.info(`${this.name} deleted`);
      } else {
        docs = await this.resourceapi.delete(call.request.ids);
      }

      // sanitize delete response for docs
      for (let doc of docs) {
        if (doc._id && doc._key && doc._rev) {
          delete doc._id;
          const id = doc._key;
          doc.id = id;
          delete doc._key;
          delete doc._rev;
        }
      }

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
        await dispatch;
      }

      // if complete collection is dropped then there are no input ids provided,
      // iterate docs and put ids to call.request.ids
      if (call.request.collection && (_.isNil(call.request.ids) || _.isEmpty(call.request.ids))) {
        call.request.ids = [];
        for (let doc of docs) {
          call.request.ids.push(doc.id);
        }
      }
      let statusArray = this.generateStatusResponse(docs, call.request.ids, true);
      return statusArray;
    } catch (e) {
      const { code, message } = e;
      this.logger.error('Error caught while processing delete request', { code, message });
      if (!deleteResponse.status) {
        deleteResponse.status = [];
      }
      deleteResponse.status.push({
        id: '',
        code: e.code,
        message: e.details ? e.details : e.message
      });
      return deleteResponse;
    }
  }

  /**
   * Endpoint update.
   * Updates resources.
   * @param call contains list of resources to be modified
   * @param context
   */
  async update(call: ServiceCall<UpdateRequest>, context?: any): Promise<any> {
    let docs: any = {};
    try {
      let updateDocs = _.cloneDeep(call.request.items);
      let updateResponse = await this.resourceapi.update(updateDocs);
      if (this.isEventsEnabled) {
        const dispatch = [];
        const events = this.events.entity;
        _.forEach(updateResponse, (update) => {
          if (!update.error) {
            dispatch.push(events.emit(`${this.name}Modified`, update));
          }
        });
        await dispatch;
      }
      let statusArray = this.generateStatusResponse(updateResponse, updateDocs);
      // remove error items from updateResponse
      updateResponse = updateResponse.filter(item => !item.error);
      docs = { items: updateResponse, total_count: updateResponse.length, status: statusArray };
      this.logger.info(this.name + ' update response', docs);
      return docs;
    } catch (e) {
      const { code, message } = e;
      this.logger.error('Error caught while processing update request', { code, message });
      if (!docs.status) {
        docs.status = [];
      }
      docs.status.push({
        id: '',
        code: e.code,
        message: e.details ? e.details : e.message
      });
      return docs;
    }
  }

  /**
   * Endpoint upsert.
   * Upserts resources.
   * @param call contains list of resources to be created or modified
   * @param context
   */
  async upsert(call: ServiceCall<UpsertRequest>, context?: any): Promise<any> {
    let docs: any = {};
    try {
      let upsertDocs = _.cloneDeep(call.request.items);
      let upsertResponse = await this.resourceapi.upsert(upsertDocs,
        this.events.entity, this.name);
      let statusArray = this.generateStatusResponse(upsertResponse, upsertDocs);
      // remove error items from updateResponse
      upsertResponse = upsertResponse.filter(item => !item.error);
      docs = { items: upsertResponse, total_count: upsertResponse.length, status: statusArray };
      this.logger.info(`${this.name} upsert response`, { items: upsertResponse });
      return docs;
    } catch (e) {
      const { code, message } = e;
      this.logger.error('Error caught while processing upsert request', { code, message });
      if (!docs.status) {
        docs.status = [];
      }
      docs.status.push({
        id: '',
        code: e.code,
        message: e.details ? e.details : e.message
      });
      return docs;
    }
  }
}
