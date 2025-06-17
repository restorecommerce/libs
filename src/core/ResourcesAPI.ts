import { type RedisClientType } from 'redis';
import { randomUUID } from 'crypto';
import { Logger } from '@restorecommerce/logger';
import { Topic } from '@restorecommerce/kafka-client';
import {
  BaseDocument
} from './interfaces';
import {
  DatabaseProvider,
  GraphDatabaseProvider
} from '@restorecommerce/chassis-srv';
import {
  Status,
  OperationStatus,
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/status';
import {
  DeepPartial,
  Search
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/resource_base';
import { Subject } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/auth';
import { fieldHandler, FieldHandlerType } from './utils';

// let redisClient: any;

enum Strategies {
  INCREMENT = 'increment',
  UUID = 'uuid',
  RANDOM = 'random',
  TIMESTAMP = 'timestamp'
}

const uuidGen = (): string => randomUUID().replace(/-/g, '');

/**
 * Resource API base provides functions for CRUD operations.
 */
export class ResourcesAPIBase {
  protected readonly bufferFields: string[];
  protected readonly requiredFields: any;
  protected readonly timeStampFields: string[];
  protected readonly redisClient: RedisClientType;

  /**
   * @constructor
   * @param  {object} db Chassis arangodb provider.
   * @param {string} collectionName Name of database collection.
   * @param {any} fieldHandlerConf The collection's field generators configuration.
  */
  constructor(
    protected readonly db: DatabaseProvider,
    protected readonly collectionName: string,
    fieldHandlerConf?: any,
    protected readonly edgeCfg?: any,
    protected readonly graphName?: string,
    protected readonly logger?: Logger,
    protected readonly resourceName?: string,
  ) {
    this.resourceName ??= collectionName.substring(0, collectionName.length - 1);

    if (!fieldHandlerConf) {
      return;
    }

    const strategyCfg = fieldHandlerConf?.strategies ?? [];
    this.redisClient = fieldHandlerConf?.redisClient;
    this.bufferFields = fieldHandlerConf?.bufferFields;
    this.timeStampFields = fieldHandlerConf?.timeStampFields;
    this.requiredFields = fieldHandlerConf?.requiredFields?.[this.resourceName] ?? fieldHandlerConf?.requiredFields;

    // values for Redis hash set
    for (const field in strategyCfg) {
      const strategy = strategyCfg[field].strategy;
      this.redisClient.hSet(collectionName, field, strategy);
      switch (strategy) {
        case Strategies.INCREMENT: {
          // check if value already exists in redis
          let startingValue: any;
          startingValue = this.redisClient.get(`${collectionName}:${field}`).then((val) => val);
          if (!startingValue) {
            if (strategyCfg[field].startingValue) {
              startingValue = Number.isNaN(strategyCfg[field].startingValue) ?
                '0' : strategyCfg[field].startingValue;
            }
            else {
              startingValue = '0';
            }
            this.redisClient.set(`${collectionName}:${field}`, startingValue).then((val) => val);
          }
          break;
        }
        default:
          break;
      }
    }
  }

  protected catchOperationError(msg: string, err: any): OperationStatus {
    this.logger?.error(msg, err);
    return {
      code: Number.isInteger(err.code) ? err.code : 500,
      message: err.message ?? 'Unknown Error!',
    };
  }

  protected catchStatusError(msg: string, err: any): Status {
    this.logger?.error(msg, err);
    return {
      code: Number.isInteger(err.code) ? err.code : 500,
      message: err.message ?? 'Unknown Error!',
    };
  }

  protected setMeta<T extends BaseDocument>(
    o: T & any,
    subject: Subject,
    create = false,
  ): T {
    o.meta ??= {};
    if (create) {
      o.meta.created ??= new Date();
      o.meta.created_by ??= subject?.id;
    }
    o.meta.modified_by ??= subject?.id;
    o.meta.modified ??= new Date();

    if (!o.id?.length || o.id?.toString() === '0') {
      o.id = uuidGen();
    }
    return o;
  }

  protected async setDefaults<T extends BaseDocument>(
    o: T & any,
    collectionName: string,
    subject: Subject,
    create = false,
  ): Promise<T> {
    if (create && this.redisClient) {
      const values = await this.redisClient.hGetAll(collectionName);

      if (values) {
        for (const field in values) {
          const strategy = values[field];
          switch (strategy) {
            case Strategies.INCREMENT: {
              const key = `${collectionName}:${field}`;
              o[field] = await this.redisClient.get(key);
              await this.redisClient.incr(key);
              break;
            }
            case Strategies.TIMESTAMP:
                o[field] = (await this.redisClient.time()).getTime();
                break;
            default:
            case Strategies.UUID:
            case Strategies.RANDOM:
              o[field] = uuidGen();
              break;
          }
        }
      }
    }
    return this.setMeta(o, subject, create);
  }

  /**
   * Finds documents based on provided filters and options
   * @param {object} filter key value filter using mongodb/nedb filter format.
   * @param {number} limit
   * @param {number} offset
   * @param {object} sort key value, key=field value: 1=ASCENDING, -1=DESCENDING, 0=UNSORTED
   * @param {object} fields key value, key=field value: 0=exclude, 1=include
   * @returns {an Object that contains an items field}
   */
  async read<T extends BaseDocument>(
    filter: object = {},
    limit = 1000,
    offset = 0,
    sort: any = {},
    fields: any = {},
    customQueries: string[] = [],
    customArgs: any = {},
    search: DeepPartial<Search>
  ): Promise<T[]> {
    const options = {
      limit: Math.min(limit, 1000),
      offset,
      sort,
      fields,
      customQueries,
      customArguments: customArgs?.value ? JSON.parse(customArgs.value.toString()) : {},
      search
    };
    let entities: T[] = await this.db.find(this.collectionName, filter, options);
    entities = this.encodeOrDecode(entities, this.bufferFields, 'encode');
    entities = this.encodeOrDecode(entities, this.timeStampFields, 'convertMilisecToDateObj');
    return entities;
  }

  /**
  * Inserts documents to the database.
  *
  * @param {array.object} documents
  */
  async create(
    documents: BaseDocument[],
    subject: Subject,
    events?: Topic,
  ): Promise<any> {
    const collection = this.collectionName;
    const result = new Array<BaseDocument>();
    // check if all the required fields are present
    if (this.requiredFields) {
      documents = this.checkRequiredFields(
        this.requiredFields,
        documents,
        result
      );
    }

    documents = await Promise.all(documents.map(
      async (doc) => await this.setDefaults(doc, collection, subject, true)
    ));
    documents = this.encodeOrDecode(documents, this.bufferFields, 'decode');
    documents = this.encodeOrDecode(documents, this.timeStampFields, 'convertDateObjToMilisec');

    if (this.isGraphDB(this.db)) {
      const db = this.db;
      await db.addVertexCollection(collection);
      const createVertexResp = await this.db.createVertex(collection, documents);
      await Promise.all(documents.map(async document => {
        try {
          for (const eachEdgeCfg of this.edgeCfg) {
            const fromIDkey = eachEdgeCfg.from;
            const from_id = document[fromIDkey];
            const toIDkey = eachEdgeCfg.to;
            const to_id = document[toIDkey];
            // edges are created outbound, if it is inbound - check for direction
            const inbound = eachEdgeCfg.direction === 'inbound';
            const fromVerticeName = inbound ? eachEdgeCfg.fromVerticeName : collection;
            const toVerticeName = inbound ? collection : eachEdgeCfg.toVerticeName;
            
            const ids = Array.isArray(to_id) ? to_id : [to_id];
            if (from_id && to_id) {
              for (const id of ids) {
                await db.createEdge(
                  eachEdgeCfg.edgeName,
                  null,
                  `${fromVerticeName}/${from_id}`,
                  `${toVerticeName}/${id}`,
                );
              }
            }
          }
        }
        catch (error: any) {
          result.push({
            error: true,
            errorNum: error?.code,
            errorMessage: error?.details ?? error?.message
          });
        }
      }));
      if (Array.isArray(createVertexResp)) {
        result.push(...createVertexResp);
      } else {
        result.push(createVertexResp);
      }
      this.encodeOrDecode(result, this.timeStampFields, 'convertMilisecToDateObj');
    }
    else {
      const inserts = await this.db.insert(collection, documents);
      result.push(...inserts);
      this.encodeOrDecode(result, this.timeStampFields, 'convertMilisecToDateObj');
    }

    if (events) {
      await Promise.all(result?.map(async (item: any) => {
        if (!item?.error) {
          await events.emit(`${this.resourceName}Created`, item);
        }
      }));
    }
    return result;
  }

  private isGraphDB(db: DatabaseProvider): db is GraphDatabaseProvider {
    return !!this.edgeCfg;
  }

  /**
   * Check if a resource's required fields are present.
   * @param requiredFields
   * @param documents
   */
  checkRequiredFields(requiredFields: string[], documents: BaseDocument[], errors: BaseDocument[]) {
    const valid = documents.filter((document) => {
      return requiredFields.every((field) => {
        if (document[field] === undefined || (Array.isArray(document[field]) && document[field].length === 0)) {
          errors.push({
            id: document.id,
            error: true,
            errorNum: 400,
            errorMessage: `Field ${field} is necessary for ${this.resourceName} in document ${document.id}`
          });
          return false;
        }
        return true;
      });
    });
    return valid;
  }

  /**
   * Removes documents found by id.
   *
   * @param [array.string] ids List of document IDs.
   */
  async delete(
    ids: string[],
    events?: Topic,
  ): Promise<any[]> {
    let response: any[];
    if (!Array.isArray(ids)) {
      ids = [ids];
    }
    if (this.isGraphDB(this.db)) {
      // Modify the Ids to include documentHandle
      if (ids.length > 0) {
        ids = ids?.map((id) => `${this.collectionName}/${id}`);
        response = await this.db.removeVertex(this.collectionName, ids);
      }
    }
    else {
      response = await this.db.delete(this.collectionName, ids);
    }

    if (events) {
      await Promise.all(response?.map(async (id) => {
        if (id && !id?.error) {
          await events?.emit(`${this.resourceName}Deleted`, typeof id === 'string' ? { id }: id);
        }
      }));
    }
    return response;
  }

  /**
   * Delete all documents in the collection.
   */
  async deleteCollection(events?: Topic): Promise<void> {
    await this.db.truncate(this.collectionName);
    if (this.isGraphDB(this.db)) {
      const db = this.db;
      const edges: any[] = await db.getGraphDB().get().then(
        (info: any) => info.edgeDefinitions
      );
      await Promise.all(
        edges?.filter(
          edge => Object.values(edge).flatMap(
            edge => edge
          ).includes(this.collectionName)
        ).map(
          edge => db.truncate(edge.collection)
        ) ?? []
      );
    } 
    
    if (events) {
      await events?.emit(`${this.resourceName}DeletedAll`, { collection: this.collectionName });
    }
  }

  /**
   * Upserts documents.
   *
   * @param [array.object] documents
   */
  async upsert<T extends BaseDocument>(
    documents: T[],
    subject: Subject,
    events?: Topic,
  ): Promise<T[]> {
    const createDocuments = new Array<T>();
    const updateDocuments = new Array<T>();
    documents = this.encodeOrDecode(documents, this.bufferFields, 'decode');

    const orgs = new Set(
      await this.db.find(
        this.collectionName,
        {
          _key: {
            $in: [...new Set(documents?.map(doc => doc.id).filter(id => id))],
          },
        },
        {
          fields: {
            id: 1
          }
        }
      ).then(
        resp => resp.map(doc => doc.id)
      )
    );

    documents?.forEach((doc) => {
      if (orgs.has(doc?.id)) {
        // update
        updateDocuments.push(doc);
      }
      else {
        // insert
        createDocuments.push(doc);
      }
    });

    if (updateDocuments?.length > 0) {
      await this.update(updateDocuments, subject, events);
    }

    if (createDocuments?.length > 0) {
      await this.create(createDocuments, subject, events);
    }

    const result = [...updateDocuments, ...createDocuments];
    this.encodeOrDecode(result, this.timeStampFields, 'convertMilisecToDateObj');
    this.encodeOrDecode(result, this.bufferFields, 'encode');
    return result;
  }

  /**
   * Finds documents by id and updates them.
   *
   * @param [array.object] documents
   * A list of documents or partial documents. Each document must contain an id field.
   */
  async update<T extends BaseDocument>(
    documents: T[],
    subject: Subject,
    events?: Topic,
  ): Promise<T[]> {
    documents = this.encodeOrDecode(documents, this.bufferFields, 'decode');
    documents = documents.map(
      (doc) => this.setMeta(doc, subject)
    );
    documents = await Promise.all(documents.map(async (doc) => {
      try {
        if (this.isGraphDB(this.db)) {
          const db = this.db;
          await Promise.all(this.edgeCfg.map(async (edgeCfg: any) => {
            const to_id = doc[edgeCfg.to!];
            const from_id = doc[edgeCfg.from!];
            const edgeCollectionName = edgeCfg.edgeName!;
            
            // delete and recreate only if there is a difference in references
            if (edgeCfg.direction === 'inbound' && from_id) {
              const from_ids: string[] = Array.isArray(from_id) ? from_id : [from_id];
              // if (!from_ids?.length) return;
              if (typeof to_id !== 'string') throw Error('Inbound value `to` has to be a single string!');

              const fromVerticeName = edgeCfg.fromVerticeName!;
              const toVerticeName = edgeCfg.toVerticeName! ?? this.collectionName;
              const incoming: any = await db.getInEdges(edgeCollectionName, `${fromVerticeName}/${to_id}`);

              // Remove edges that are no longer defined
              if (Array.isArray(incoming.edges)) {
                await Promise.all(incoming.edges?.filter(
                  (edge: any) => !from_ids.includes(edge._from)
                ).map(
                  (edge: any) => db.removeEdge(edgeCollectionName, edge._id)
                ));
              }

              // Create new edges
              await Promise.all(from_ids.filter(
                id => !incoming.edges?.includes(id)
              ).map(
                id => db.createEdge(
                  edgeCfg.edgeName,
                  null,
                  `${fromVerticeName}/${from_id}`,
                  `${toVerticeName}/${id}`,
                )
              ));
            }
            else if (to_id) {
              const to_ids: string[] = Array.isArray(to_id) ? to_id : [to_id];
              // if (!to_ids?.length) return;
              if (typeof from_id !== 'string') throw Error('Outbound value `from` has to be a single string!');

              const fromVerticeName = edgeCfg.fromVerticeName! ?? this.collectionName;
              const toVerticeName = edgeCfg.toVerticeName!;
              const outgoing: any = await db.getOutEdges(edgeCollectionName, `${fromVerticeName}/${from_id}`);

              // Remove edges that are no longer defined
              if (Array.isArray(outgoing.edges)) {
                await Promise.all(outgoing.edges?.filter(
                  (edge: any) => !to_ids.includes(edge._to) 
                ).map(
                  (edge: any) => db.removeEdge(edgeCollectionName, edge._id)
                ));
              }

              // Create new edges
              await Promise.all(to_ids.filter(
                id => !outgoing.edges?.includes(id)
              ).map(
                id => db.createEdge(
                  edgeCfg.edgeName,
                  null,
                  `${fromVerticeName}/${from_id}`,
                  `${toVerticeName}/${id}`,
                )
              ));
            }
          }));
        }
        return doc;
      }
      catch (error: any) {
        this.logger?.error(`Error updating document ${doc.id}`, { ...error });
        return {
          ...doc,
          error: true,
          errorNum: error?.code,
          errorMessage: `On graph update: ${error?.details ?? error?.message}`
        };
      }
    }));

    const errors = documents.filter(doc => doc.error);
    const updates = documents.filter(doc => !doc.error);
    this.encodeOrDecode(updates, this.timeStampFields, 'convertDateObjToMilisec');
    const results = await this.db.update(this.collectionName, updates);
    results.push(...errors);
    this.encodeOrDecode(results, this.timeStampFields, 'convertMilisecToDateObj');
    if (events) {
      await Promise.all(results?.map(async (item: any) => {
        if (!item.error) {
          await events.emit(`${this.resourceName}Modified`, item);
        }
      }));
    }
    this.encodeOrDecode(results, this.bufferFields, 'encode');
    return results;
  }

  private encodeOrDecode<T>(documents: T, fieldPaths: string[], mode: FieldHandlerType): T {
    const arr = Array.isArray(documents) ? documents : [documents];
    if (fieldPaths?.length && arr?.length) {
      for (const doc of arr) {
        for (const fieldPath of fieldPaths) {
          fieldHandler(doc, fieldPath, mode);
        }
      }
    }
    return documents;
  }
}
