import * as _ from 'lodash';
import * as bluebird from 'bluebird';
import * as chassis from '@restorecommerce/chassis-srv';
import * as uuid from 'uuid';
import * as redis from 'redis';
import { Topic } from '@restorecommerce/kafka-client';

import { Resource } from './interfaces';

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

function decodeBufferObj(document: any, bufferField: string): any {
  if (bufferField in document && document[bufferField]) {
    const encodedBufferObj = document[bufferField].value;
    // By default it was encoded in utf8 so decoding by default from utf8
    let decodedMsg = Buffer.from(encodedBufferObj).toString();
    // store as object in DB
    decodedMsg = JSON.parse(decodedMsg);
    document[bufferField] = decodedMsg;
  }
  return document;
}

function encodeMsgObj(document: any, bufferField: string): any {
  if (bufferField in document && document[bufferField]) {
    const decodedMsg = document[bufferField];
    // convert the Msg obj to Buffer Obj
    const encodedBufferObj = Buffer.from(JSON.stringify(decodedMsg));
    document[bufferField] = {};
    document[bufferField].value = encodedBufferObj;
  }
  return document;
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
  bufferField: string;
  requiredFields: Object;
  resourceName: string;
  /**
   * @constructor
   * @param  {object} db Chassis arangodb provider.
   * @param {string} collectionName Name of database collection.
   * @param {any} fieldHandlerConf The collection's field generators configuration.
   */
  constructor(db: any, collectionName: string, fieldHandlerConf?: any) {
    this.db = db;
    this.collectionName = collectionName;
    this.resourceName = collectionName.substring(0, collectionName.length - 1);

    if (!fieldHandlerConf) {
      return;
    }

    const strategyCfg = fieldHandlerConf.strategies;
    if (!redisClient) {
      redisClient = fieldHandlerConf.redisClient;
    }

    if (fieldHandlerConf.bufferField) {
      this.bufferField = fieldHandlerConf.bufferField;
    }

    if (fieldHandlerConf.requiredFields) {
      this.requiredFields = fieldHandlerConf.requiredFields;
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
    if (redisClient) {
      redisClient.hset(hashValues, (err, reply) => {
        if (err) {
          throw err;
        }
      });
    }
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
    sort: Object = {}, field: Object = {}): Promise<Resource[]> {
    const options = {
      limit: Math.min(limit, 1000),
      offset,
      sort,
      fields: field,
    };
    const entities: Resource[] = await this.db.find(this.collectionName, filter, options);
    if (this.bufferField) {
      // encode the msg obj back to buffer obj and send it back
      entities.forEach(element => {
        if (element[this.bufferField]) {
          element = encodeMsgObj(element, this.bufferField);
          return element;
        }
      });
    }
    return entities;
  }

  /**
  * Inserts documents to the database.
  *
  * @param {array.object} documents
  */
  async create(documents: Object[]): Promise<any> {
    const collection = this.collectionName;
    const toInsert = [];
    try {
      for (let i = 0; i < documents.length; i += 1) {
        documents[i] = await setDefaults(documents[i], collection);
        // decode the buffer and store it to DB
        if (this.bufferField) {
          toInsert.push(decodeBufferObj(_.cloneDeep(documents[i]), this.bufferField));
        }
      }
      // check if all the required fields are present
      if (this.requiredFields && this.requiredFields[this.resourceName]) {
        this.checkRequiredFields(this.requiredFields[this.resourceName],
          documents);
      }

      await this.db.insert(collection, this.bufferField ? toInsert : documents);
    } catch (e) {
      if (e.code === 409) {
        throw new errors.AlreadyExists('Item Already exists.');
      }
      throw e;
    }
  }

  /**
* check if the required fields are present.
*
* @param {Object} requiredFields contains list of requried fileds.
* @param {String} resourceName resourece name.
* @param {any} documents list of documents.
*/
  checkRequiredFields(requiredFields: string[], documents: any): void {
    for (let document of documents) {
      for (let eachField of requiredFields) {
        if (!document[eachField]) {
          throw new errors.InvalidArgument(`Field ${eachField} is necessary
            for ${this.resourceName}`);
        }
      }
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
    await this.db.delete(this.collectionName, filter);
  }

  /**
   * Delete all documents in the collection.
   */
  async deleteCollection(): Promise<any> {
    const entities = await this.db.find(this.collectionName, {}, { fields: { id: 1 } });
    await this.db.truncate(this.collectionName);
    return entities;
  }

  /**
   * Upserts documents.
   *
   * @param [array.object] documents
   */
  async upsert(documents: Object[],
    events: Topic, isEventsEnabled: boolean, resourceName: string): Promise<Resource[]> {
    try {
      _.map(documents, (document) => {
        setModified(document).then((res) => {
          return;
        }).catch((err) => {
          throw err;
        });
      });
      const toInsert = [];
      for (let i = 0; i < documents.length; i += 1) {
        // decode the buffer and store it to DB
        if (this.bufferField) {
          toInsert.push(decodeBufferObj(_.cloneDeep(documents[i]), this.bufferField));
        }
      }
      let result: Resource[] = await this.db.upsert(this.collectionName,
        this.bufferField ? toInsert : documents);
      let inserted: Resource[] = [];
      result = _.map(result, (doc) => {
        if (_.isNil(doc.created) || doc.created === 0) {
          doc.created = doc.modified;
          inserted.push(doc);
        }
        return doc;
      });
      // Assign `created` to inserted documents
      if (inserted.length > 0) {
        // inserted = _.map(inserted, (e) => {
        //   const ee = e;
        //   ee.created = now;
        //   ee.modified = now;
        //   return ee;
        // });
        // update the newly inserted documents with a created property
        const updated = await this.update(inserted);
        // _.forEach(updated, (e) => {
        //   const el: Resource = _.find<Resource[]>(result, { id: e.id });
        //   if (el) {
        //     el.created = e.created;
        //   }
        // });
        // if (isEventsEnabled) {
        //   const dispatch = [];
        //   _.forEach(result, (res) => {
        //     dispatch.push(events.emit(`${resourceName}Created`, res));
        //   });
        //   await dispatch;
        // }
      }
      // else {
      // resource updated
      if (isEventsEnabled) {
        const dispatch = [];
        _.forEach(result, (doc) => {
          let eventName: string;
          if (doc.created == doc.modified) { // resource was just created
            eventName = 'Created';
          } else {
            eventName = 'Modified';
          }
          dispatch.push(events.emit(`${resourceName}${eventName}`, doc));
        });
        await dispatch;
      }
      // }
      return result;
    } catch (error) {
      if (error.code === 404) {
        throw new errors.NotFound('Can\'t find one or more items with the given IDs.');
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
  async update(documents: { id: string, [key: string]: any }[]): Promise<Resource[]> {
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
        let doc = documents[i];
        if (this.bufferField) {
          doc = decodeBufferObj(_.cloneDeep(documents[i]), this.bufferField);
        }
        patches.push(await db.update(collectionName,
          { id: doc['id'] }, _.omitBy(doc, _.isNil)));
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
