'use strict';

import * as _ from 'lodash';
import * as co from 'co';
import * as chassis from '@restorecommerce/chassis-srv';
import { toObject } from '../..';
import { ResourcesAPIBase } from './ResourcesAPI';
import { Topic, Events } from '@restorecommerce/kafka-client';

const errors = chassis.errors;

/**
 * A microservice chassis ready class which provides endpoints for
 * CRUD resource operations.
 */
export class ServiceBase {
  logger: any;
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
  constructor(entityName: string, entityEvents: any, logger: any,
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
   async read(call: any, context?: any): Promise<any> {
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
        filter = toObject(call.request.filter);
      }
      const field = {};
      _.forEach(call.request.field, (f) => {
        if (f.include) {
          field[f.name] = 1;
          return;
        }
        field[f.name] = 0;
      });
      objectEntities = (await this.resourceapi.read(
        filter,
        limit,
        offset,
        sort,
        field
      )) || [];

      return {
        items: objectEntities,
        total_count: objectEntities.length,
      };
    } catch (e) {
      this.logger.info(e);
      throw e;
    }
  }

  /**
   * Endpoint create.
   * Inserts resources.
   * @param call contains a list of resources to be created
   * @param context
   */
  async create(call: any, context?: any): Promise<any> {
    try {
      await this.resourceapi.create(call.request.items);
      const dispatch = [];
      const events: Topic = this.events.entity;
      this.logger.info(this.name + ' created', call.request.items);
      if (this.isEventsEnabled) {
        _.forEach(call.request.items, (item) => {
          dispatch.push(events.emit(`${this.name}Created`, item));
        });
        await dispatch;
      }

      return { items: call.request.items };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
  /**
   * Endpoint delete.
   * Removes resources specified by id or all resources.
   * @param call contains list of resource IDs to be deleted
   * @param context
   */
  async delete(call: any, context?: any): Promise<any> {
    try {
      const events = this.events.entity;
      if (call.request.collection) {
        const docs = await this.resourceapi.deleteCollection();

        if (this.isEventsEnabled) {
          const dispatch = [];
          _.forEach(docs, (doc) => {
            dispatch.push(events.emit(`${this.name}Deleted`, doc));
          });
          await dispatch;
        }
        this.logger.info(
          `resource ${this.name} of
           collection ${this.resourceapi.collectionName} deleted`);
        return {};
      }
      await this.resourceapi.delete(call.request.ids);
      if (this.isEventsEnabled) {
        const dispatch = [];
        _.forEach(call.request.ids, (id) => {
          dispatch.push(events.emit(`${this.name}Deleted`, { id }));
        });
        await dispatch;
      }
      return {};
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  /**
   * Endpoint update.
   * Updates resources.
   * @param call contains list of resources to be modified
   * @param context
   */
  async update(call: any, context?: any): Promise<any> {
    try {
      const updateResult = await this.resourceapi.update(call.request.items);
      this.logger.info('io.restorecommerce.' + this.name + '.resource.updated', updateResult);
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
      this.logger.error(e);
      throw e;
    }
  }

  /**
   * Endpoint upsert.
   * Upserts resources.
   * @param call contains list of resources to be created or modified
   * @param context
   */
  async upsert(call: any, context?: any): Promise<any> {
    try {
      const result = await this.resourceapi.upsert(call.request.items,
        this.events.entity, this.isEventsEnabled, this.name);
      return { items: result };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
