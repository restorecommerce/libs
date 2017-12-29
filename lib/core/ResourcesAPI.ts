'use strict';

import * as _ from 'lodash';
import * as bluebird from 'bluebird';
import * as chassis from '@restorecommerce/chassis-srv';
import * as co from 'co';
import * as uuid from 'uuid';
import * as redis from 'redis';
import { Topic } from '@restorecommerce/kafka-client';

bluebird.promisifyAll(redis.RedisClient.prototype);

const errors = chassis.errors;
let redisClient: any;

const Strategies = {
  INCREMENT: 'increment',
  UUID: 'uuid',
  RANDOM: 'random',
  TIMESTAMP: 'timestamp'
};
const uuidGen = (): string => {
  return uuid.v4().replace(/-/g, '');
};

async function setDefaults(obj: any, collectionName: string): Promise<any> {
  const o = obj;
  let now: number;
  if (redisClient) {
    const time: string = (await redisClient.timeAsync())[0];
    now = Number(time);
    const values: Array<string> = await redisClient.hgetallAsync(collectionName);

    if (values) {
      for (let field in values) {
        const strategy = values[field];
        switch (strategy) {
          case Strategies.INCREMENT:
            const key = collectionName + ':' + field;
            o[field] = await redisClient.getAsync(key);
            await redisClient.incrAsync(key);
            break;
          case Strategies.UUID:
            o[field] = uuidGen();
            break;
          case Strategies.RANDOM:
            o[field] = uuidGen();
            break;
          case Strategies.TIMESTAMP:
            o[field] = await redisClient.timeAsync()[0];
            break;
        }
      }
    }
  } else {
    now = Date.now();
  }
  if (_.isNil(o.created) || o.created === 0) {
    o.created = now;
  }
  o.modified = now;
  if (_.isNil(o.id) || o.id === 0 || isEmptyObject(o.id)) {
    o.id = uuidGen();
  }
  return o;
}

async function setModified(obj: any): Promise<Object> {
  const o = obj;
  if (redisClient) {
    o.modified = await redisClient.timeAsync()[0];
  } else {
    o.modified = Date.now();
  }
  return o;
}

function isEmptyObject(obj: any): any {
  return !Object.keys(obj).length;
}

/**
 * Resource API base provides functions for CRUD operations.
 */
export class ResourcesAPIBase {
  db: any;
  collectionName: string;
  /**
   * @constructor
   * @param  {object} db Chassis arangodb provider.
   * @param {string} collectionName Name of database collection.
   * @param {any} fieldGeneratorConf The collection's field generators configuration.
   */
  constructor(db: any, collectionName: string, fieldGeneratorConf?: any) {
    this.db = db;
    this.collectionName = collectionName;

    if (!fieldGeneratorConf) {
      return;
    }

    const strategyCfg = fieldGeneratorConf.strategies;
    if (!redisClient) {
      redisClient = fieldGeneratorConf.redisClient;
    }

    // values for Redis hash set
    const hashValues = [];
    hashValues.push(collectionName);
    for (let field in strategyCfg) {
      const strategy = strategyCfg[field].strategy;
      hashValues.push(field);
      hashValues.push(strategy);
      switch (strategy) {
        case Strategies.INCREMENT:
          let startingValue;
          // check if value already exists in redis
          redisClient.get(`${collectionName}:${field}`, (err, reply) => {
            if (err) {
              throw err;
            }
            startingValue = reply;
          });
          if (!startingValue) {
            if (strategyCfg[field].startingValue) {
              startingValue = Number(strategyCfg[field].startingValue) != NaN ?
                strategyCfg[field].startingValue : '0';
            }
            else {
              startingValue = '0';
            }
            redisClient.set(`${collectionName}:${field}`, startingValue, (err, reply) => {
              if (err) {
                throw err;
              }
              if (reply != 'OK') {
                throw Error('Unexpected reply from Redis: ' + reply);
              }
            });
          }
          break;
        default:
          break;
      }
    }
    redisClient.hset(hashValues, (err, reply) => {
      if (err) {
        throw err;
      }

    });
  }


  /**
   * Finds documents based on provided filters and options
   * @param {object} filter key value filter using mongodb/nedb filter format.
   * @param {number} limit
   * @param {number} offset
   * @param {object} sort key value, key=field value: 1=ASCENDING, -1=DESCENDING, 0=UNSORTED
   * @param {object} field key value, key=field value: 0=exclude, 1=include
   * @returns {an Object that contains an items field}
   */
  async read(filter: Object = {}, limit: any = 1000, offset: any = 0,
    sort: Object = {}, field: Object = {}): Promise<any> {
    const options = {
      limit: Math.min(limit, 1000),
      offset,
      sort,
      fields: field,
    };
    const entities = await co(this.db.find(this.collectionName, filter, options));
    return entities;
  }

  /**
   * Counts documents based on provided filters.
   * @param {object} filter key value filter using mongodb/nedb filter format.
   * @return {Number} Document count
   */
  async count(filter: Object = {}): Promise<number> {
    return await co(this.db.count(this.collectionName, filter));
  }

  /**
  * Inserts documents to the database.
  *
  * @param {array.object} documents
  */
  async create(documents: Object[]): Promise<any> {
    const collection = this.collectionName;
    try {
      for (let i = 0; i < documents.length; i += 1) {
        documents[i] = await setDefaults(documents[i], collection);
      }

      await co(this.db.insert(collection, documents));
    } catch (e) {
      if (e.code === 409) {
        throw new errors.AlreadyExists('Item Already exists.');
      }
      throw e;
    }
  }

  /**
   * Removes documents found by id.
   *
   * @param [array.string] ids List of document IDs.
   */
  async delete(ids: string[]): Promise<any> {
    const filter = {
      $or: [],
    };
    _.forEach(ids, (id) => {
      filter.$or.push({ id });
    });
    await co(this.db.delete(this.collectionName, filter));
  }

  /**
   * Delete all documents in the collection.
   */
  async deleteCollection(): Promise<any> {
    const entities = await co(this.db.find(this.collectionName, {}, { fields: { id: 1 } }));
    await co(this.db.truncate(this.collectionName));
    return entities;
  }

  /**
   * Upserts documents.
   *
   * @param [array.object] documents
   */
  async upsert(documents: Object[],
    events: Topic, isEventsEnabled: boolean, resourceName: string): Promise<any> {
    try {
      _.map(documents, (document) => {
        setModified(document).then((res) => {
          return;
        }).catch((err) => {
          throw err;
        });
      });
      const result = await co(this.db.upsert(this.collectionName, documents));
      let reqUp = _.filter(result, (e) => {
        return _.isNil(e.created) || e.created === 0;
      });
      // Insert created date
      if (reqUp.length > 0) {
        const now: number = Date.now();
        reqUp = _.map(reqUp, (e) => {
          const ee = e;
          ee.created = now;
          return ee;
        });
        const b = await co(this.update(reqUp));
        _.forEach(b, (e) => {
          const el = _.find(result, { id: e.id });
          if (el) {
            el.created = e.created;
          }
        });
        if (isEventsEnabled) {
          const dispatch = [];
          _.forEach(result, (res) => {
            dispatch.push(events.emit(`${resourceName}Created`, res));
          });
          await dispatch;
        }
      } else {
        // resource updated
        if (isEventsEnabled) {
          const dispatch = [];
          _.forEach(result, (res) => {
            dispatch.push(events.emit(`${resourceName}Modified`, res));
          });
          await dispatch;
        }
      }
      return result;
    } catch (error) {
      if (error.code === 404) {
        throw new errors.NotFound('Can\'t find any Item with the given id.');
      }
      throw error;
    }
  }

  /**
   * Finds documents by id and updates them.
   *
   * @param [array.object] documents
   * A list of documents or partial documents. Each document must contain an id field.
   */
  async update(documents: Object[]): Promise<any> {
    try {
      _.map(documents, (document) => {
        setModified(document).then((res) => {
          return document;
        }).catch((err) => {
          throw err;
        });
      });
      const db = this.db;
      const collectionName = this.collectionName;
      const patches = [];
      for (let i = 0; i < documents.length; i += 1) {
        const doc = documents[i];
        patches.push(await co(db.update(collectionName,
          { id: doc['id'] }, _.omitBy(doc, _.isNil))));
      }
      return _.flatten(patches);
    } catch (e) {
      if (e.code === 404) {
        throw new errors.NotFound('Can\'t find any Item with the given id.');
      }
      throw e;
    }
  }
}
