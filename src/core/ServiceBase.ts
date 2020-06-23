import * as _ from 'lodash';
import * as chassis from '@restorecommerce/chassis-srv';
import { toObject } from '../index';
import { ResourcesAPIBase } from './ResourcesAPI';
import { Topic } from '@restorecommerce/kafka-client';
import { ServiceCall, ReadRequest, CreateRequest, DeleteRequest, UpdateRequest, UpsertRequest } from './interfaces';

const errors = chassis.errors;

/**
 * A microservice chassis ready class which provides endpoints for
 * CRUD resource operations.
 */
export class ServiceBase {
  logger: chassis.Logger;
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
  constructor(entityName: string, entityEvents: any, logger: chassis.Logger,
    resourceapi: ResourcesAPIBase, isEventsEnabled?: boolean) {
    this.logger = logger;
    this.name = entityName;
    this.events = {
      entity: entityEvents
    };
    this.resourceapi = resourceapi;
    this.isEventsEnabled = isEventsEnabled;
  }

  /**
   * Endpoint read.
   * Return resources based on provided filter and options.
   * @param call request containing filter,limit, offset and sort options
   * @param context
   */
  async read(call: ServiceCall<ReadRequest>, context?: any): Promise<any> {
    if (!_.isEmpty(call.request.search)) {
      throw new errors.Unimplemented('Full-text search is not implemented');
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

      return {
        items: objectEntities,
        total_count: objectEntities.length,
      };
    } catch (e) {
      const { code, message, details } = e;
      this.logger.error('Error caught while processing read request', { code, message });
      if (details) {
        throw { code, message: `${message} - ${details}` };
      } else {
        throw { code, message };
      }
    }
  }

  /**
   * Endpoint create.
   * Inserts resources.
   * @param call contains a list of resources to be created
   * @param context
   */
  async create(call: ServiceCall<CreateRequest>, context?: any): Promise<any> {
    try {
      await this.resourceapi.create(call.request.items);
      const dispatch = [];
      const events: Topic = this.events.entity;
      this.logger.info(this.name + ' created', { items: call.request.items });
      if (this.isEventsEnabled) {
        _.forEach(call.request.items, (item) => {
          dispatch.push(events.emit(`${this.name}Created`, item));
        });
        await dispatch;
      }

      return { items: call.request.items };
    } catch (e) {
      const { code, message, details } = e;
      this.logger.error('Error caught while processing create request', { code, message });
      if (details) {
        throw { code, message: `${message} - ${details}` };
      } else {
        throw { code, message };
      }
    }
  }
  /**
   * Endpoint delete.
   * Removes resources specified by id or all resources.
   * @param call contains list of resource IDs to be deleted
   * @param context
   */
  async delete(call: ServiceCall<DeleteRequest>, context?: any): Promise<any> {
    try {
      const events = this.events.entity;
      let docs: any[];
      if (call.request.collection) {
        docs = await this.resourceapi.deleteCollection();

        this.logger.info(`${this.name} deleted`);
      } else {
        await this.resourceapi.delete(call.request.ids);
        docs = call.request.ids;
      }

      if (this.isEventsEnabled) {
        const dispatch = [];
        _.forEach(docs, (id) => {
          if (typeof id == 'string') {
            id = { id };
          }
          dispatch.push(events.emit(`${this.name}Deleted`, id));
        });
        await dispatch;
      }
      return {};
    } catch (e) {
      const { code, message, details } = e;
      this.logger.error('Error caught while processing delete request', { code, message });
      if (details) {
        throw { code, message: `${message} - ${details}` };
      } else {
        throw { code, message };
      }
    }
  }

  /**
   * Endpoint update.
   * Updates resources.
   * @param call contains list of resources to be modified
   * @param context
   */
  async update(call: ServiceCall<UpdateRequest>, context?: any): Promise<any> {
    try {
      const updateResult = await this.resourceapi.update(call.request.items);
      this.logger.info(this.name + ' updated', { items: updateResult });
      if (this.isEventsEnabled) {
        const dispatch = [];
        const events = this.events.entity;
        _.forEach(updateResult, (update) => {
          dispatch.push(events.emit(`${this.name}Modified`, update));
        });
        await dispatch;
      }
      return { items: updateResult };
    } catch (e) {
      const { code, message, details } = e;
      this.logger.error('Error caught while processing update request', { code, message });
      if (details) {
        throw { code, message: `${message} - ${details}` };
      } else {
        throw { code, message };
      }
    }
  }

  /**
   * Endpoint upsert.
   * Upserts resources.
   * @param call contains list of resources to be created or modified
   * @param context
   */
  async upsert(call: ServiceCall<UpsertRequest>, context?: any): Promise<any> {
    try {
      const result = await this.resourceapi.upsert(call.request.items,
        this.events.entity, this.name);
      this.logger.info(`${this.name} upserted`, { items: result });
      return { items: result };
    } catch (e) {
      const { code, message, details } = e;
      this.logger.error('Error caught while processing upsert request', { code, message });
      if (details) {
        throw { code, message: `${message} - ${details}` };
      } else {
        throw { code, message };
      }
    }
  }
}
