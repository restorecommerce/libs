import * as _ from 'lodash';
import { errors } from '@restorecommerce/chassis-srv';
import * as uuid from 'uuid';
import { Topic } from '@restorecommerce/kafka-client';
import { BaseDocument, DocumentMetadata } from './interfaces';
import { DatabaseProvider, GraphDatabaseProvider } from '@restorecommerce/chassis-srv';
import { DeepPartial } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/attribute';
import { Search } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/resource_base';
import { Subject } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/auth';
import { fieldHandler } from './utils';

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

const isEmptyObject = (obj: any): any => {
  return !Object.keys(obj).length;
};

const setDefaults = async (obj: { meta?: DocumentMetadata;[key: string]: any }, collectionName: string, subject: Subject): Promise<any> => {
  const o = obj;

  if (_.isEmpty(o.meta)) {
    throw new errors.InvalidArgument('Object does not contain ownership information');
  }

  if (redisClient) {
    const values = await redisClient.hGetAll(collectionName);

    if (values) {
      for (let field in values) {
        const strategy = values[field];
        switch (strategy) {
          case Strategies.INCREMENT:
            const key = collectionName + ':' + field;
            o[field] = await redisClient.get(key);
            await redisClient.incr(key);
            break;
          case Strategies.UUID:
            o[field] = uuidGen();
            break;
          case Strategies.RANDOM:
            o[field] = uuidGen();
            break;
          case Strategies.TIMESTAMP:
            o[field] = await redisClient.time()[0];
            break;
        }
      }
    }
  }

  if (_.isNil(o.meta.created) || o.meta.created === 0) {
    o.meta.created = new Date();
  }
  o.meta.created_by = subject?.id;
  o.meta.modified_by = subject?.id;
  o.meta.modified = new Date();
  if (_.isNil(o.id) || o.id === 0 || isEmptyObject(o.id)) {
    o.id = uuidGen();
  }
  return o;
};

const updateMetadata = (docMeta: DocumentMetadata, newDoc: BaseDocument, subject: Subject): BaseDocument => {
  if (_.isEmpty(newDoc.meta)) {
    // docMeta.owner = newDoc.owner;
    throw new errors.InvalidArgument(`Update request holds no valid metadata for document ${newDoc.id}`);
  }

  if (!_.isEmpty(newDoc.meta.owners)) {
    // if ownership is meant to be updated
    docMeta.owners = newDoc.meta.owners;
  }

  docMeta.modified_by = subject?.id;
  docMeta.modified = new Date();

  newDoc.meta = docMeta;
  return newDoc;
};

/**
 * Resource API base provides functions for CRUD operations.
 */
export class ResourcesAPIBase {
  bufferFields: string[];
  requiredFields: any;
  timeStampFields: string[];
  resourceName: string;
  logger: any;
  /**
   * @constructor
   * @param  {object} db Chassis arangodb provider.
   * @param {string} collectionName Name of database collection.
   * @param {any} fieldHandlerConf The collection's field generators configuration.
   */
  constructor(private db: DatabaseProvider, private collectionName: string, fieldHandlerConf?: any,
    private edgeCfg?: any, private graphName?: string, logger?: any) {
    this.resourceName = collectionName.substring(0, collectionName.length - 1);

    if (!fieldHandlerConf) {
      return;
    }

    const strategyCfg = fieldHandlerConf.strategies;
    if (!redisClient) {
      redisClient = fieldHandlerConf.redisClient;
    }

    if (fieldHandlerConf.bufferFields) {
      this.bufferFields = fieldHandlerConf.bufferFields;
    }

    // config fix to be removed after ts-proto is used
    if (fieldHandlerConf.timeStampFields) {
      this.timeStampFields = fieldHandlerConf.timeStampFields;
    }

    if (fieldHandlerConf.requiredFields) {
      this.requiredFields = fieldHandlerConf.requiredFields;
    }

    // values for Redis hash set
    for (let field in strategyCfg) {
      const strategy = strategyCfg[field].strategy;
      redisClient.hSet(collectionName, field, strategy);
      switch (strategy) {
        case Strategies.INCREMENT:
          // check if value already exists in redis
          let startingValue: any;
          startingValue = redisClient.get(`${collectionName}:${field}`).then((val) => val);
          if (!startingValue) {
            if (strategyCfg[field].startingValue) {
              startingValue = Number.isNaN(strategyCfg[field].startingValue) ?
                '0' : strategyCfg[field].startingValue;
            }
            else {
              startingValue = '0';
            }
            redisClient.set(`${collectionName}:${field}`, startingValue).then((val) => val);
          }
          break;
        default:
          break;
      }
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
  async read(filter: Object = {}, limit = 1000, offset = 0,
    sort: any = {}, field: any = {}, customQueries: string[] = [], customArgs: any = {}, search: DeepPartial<Search>): Promise<BaseDocument[]> {
    const options = {
      limit: Math.min(limit, 1000),
      offset,
      sort,
      fields: field,
      customQueries,
      customArguments: customArgs.value ? JSON.parse(customArgs.value.toString()) : {},
      search
    };
    let entities: BaseDocument[] = await this.db.find(this.collectionName, filter, options);
    if (this.bufferFields && entities?.length > 0) {
      // encode the msg obj back to buffer obj and send it back
      entities = this.encodeOrDecode(entities, this.bufferFields, 'encode');
    }
    if (this.timeStampFields && entities?.length > 0) {
      // convert number to Date Object
      entities = this.encodeOrDecode(entities, this.timeStampFields, 'convertMilisecToDateObj');
    }
    return entities;
  }

  /**
  * Inserts documents to the database.
  *
  * @param {array.object} documents
  */
  async create(documents: BaseDocument[], subject: Subject): Promise<any> {
    const collection = this.collectionName;
    let result = [];
    try {
      let result = [];
      // check if all the required fields are present
      if (this.requiredFields && this.requiredFields[this.resourceName]) {
        const requiredFieldsResult = this.checkRequiredFields(this.requiredFields[this.resourceName],
          documents, result);
        documents = requiredFieldsResult.documents;
        result = requiredFieldsResult.result;
      }

      documents = await Promise.all(documents.map(async (doc) => {
        return await setDefaults(doc, collection, subject);
      }));

      if (this.bufferFields && documents?.length > 0) {
        documents = this.encodeOrDecode(documents, this.bufferFields, 'decode');
      }
      if (this.timeStampFields && documents?.length > 0) {
        // convert Date Object to Number
        documents = this.encodeOrDecode(documents, this.timeStampFields, 'convertDateObjToMilisec');
      }
      if (this.isGraphDB(this.db)) {
        await this.db.createGraphDB(this.graphName);
        await this.db.addVertexCollection(collection);
        let createVertexResp = await this.db.createVertex(collection, documents);
        for (let document of documents) {
          if (this.edgeCfg && _.isArray(this.edgeCfg) && this.edgeCfg.length > 0) {
            for (let eachEdgeCfg of this.edgeCfg) {
              const fromIDkey = eachEdgeCfg.from;
              const from_id = document[fromIDkey];
              const toIDkey = eachEdgeCfg.to;
              const to_id = document[toIDkey];
              // edges are created outbound, if it is inbound - check for direction
              const direction = eachEdgeCfg.direction;
              let fromVerticeName = collection;
              let toVerticeName = eachEdgeCfg.toVerticeName;
              if (direction === 'inbound') {
                fromVerticeName = eachEdgeCfg.fromVerticeName;
                toVerticeName = collection;
              }
              if (from_id && to_id) {
                if (_.isArray(to_id)) {
                  for (let toID of to_id) {
                    await this.db.createEdge(eachEdgeCfg.edgeName, null,
                      `${fromVerticeName}/${from_id}`, `${toVerticeName}/${toID}`);
                  }
                } else {
                  await this.db.createEdge(eachEdgeCfg.edgeName, null,
                    `${fromVerticeName}/${from_id}`, `${toVerticeName}/${to_id}`);
                }
              }
            }
          }
        }
        if (_.isArray(createVertexResp)) {
          createVertexResp.forEach((eachVertexResp) => result.push(eachVertexResp));
        } else {
          result.push(createVertexResp);
        }
        if (this.timeStampFields && result?.length > 0) {
          // convert number to Date Object
          result = this.encodeOrDecode(result, this.timeStampFields, 'convertMilisecToDateObj');
        }

        return result;
      }
      else {
        let checkReqFieldResult = [];
        if (!_.isEmpty(result)) {
          checkReqFieldResult = result;
        }
        result = await this.db.insert(collection, documents);
        if (!_.isEmpty(checkReqFieldResult)) {
          checkReqFieldResult.forEach((reqFieldResult) => result.push(reqFieldResult));
        }
        if (this.timeStampFields && result?.length > 0) {
          // convert number to Date Object
          result = this.encodeOrDecode(result, this.timeStampFields, 'convertMilisecToDateObj');
        }
        return result;
      }
    } catch (e) {
      this.logger.error('Error creating documents', { code: e.code, message: e.message, stack: e.stack });
      result.push({
        error: true,
        errorNum: e.code,
        errorMessage: e.details ? e.details : e.message
      });
      return result;
    }
  }

  private isGraphDB(db: DatabaseProvider): db is GraphDatabaseProvider {
    return !!this.edgeCfg;
  }

  /**
   * Check if a resource's required fields are present.
   * @param requiredFields
   * @param documents
   */
  checkRequiredFields(requiredFields: string[], documents: any, result: any[]): any {
    documents.forEach((document) => {
      requiredFields.forEach((eachField) => {
        const isArray = _.isArray(eachField);
        if (!document[eachField]) {
          result.push({
            error: true,
            errorNum: 400,
            errorMessage: `Field ${eachField} is necessary for ${this.resourceName} for documentID ${document.id}`
          });
          documents = documents.filter(doc => doc.id != document.id);
        }
        if ((isArray && document[eachField].length == 0)) {
          result.push({
            error: true,
            errorNum: 400,
            errorMessage: `Field ${eachField} is necessary for ${this.resourceName} for documentID ${document.id}`
          });
          documents = documents.filter(doc => doc.id != document.id);
        }
      });
    });
    return { documents, result };
  }

  /**
   * Removes documents found by id.
   *
   * @param [array.string] ids List of document IDs.
   */
  async delete(ids: string[]): Promise<any> {
    let deleteResponse = [];
    try {
      if (!_.isArray(ids)) {
        ids = [ids];
      }
      if (this.isGraphDB(this.db)) {
        // Modify the Ids to include documentHandle
        if (ids.length > 0) {
          ids = _.map(ids, (id) => {
            return `${this.collectionName}/${id}`;
          });
          deleteResponse = await this.db.removeVertex(this.collectionName, ids);
          return deleteResponse;
        }
      }
      deleteResponse = await this.db.delete(this.collectionName, ids);
      return deleteResponse;
    }
    catch (err) {
      this.logger.error('Error deleting documents', { code: err.code, message: err.message, stack: err.stack });
      deleteResponse.push({
        error: true,
        errorNum: err.code,
        errorMessage: err.details ? err.details : err.message
      });
      return deleteResponse;
    }
  }

  /**
   * Delete all documents in the collection.
   */
  async deleteCollection(): Promise<Array<any>> {
    if (this.isGraphDB(this.db)) {
      // graph edges are only deleted automatically when a specific vertex is deleted
      // (`truncate` does not work in this case)
      const ids = await this.db.find(this.collectionName, {}, {
        fields: {
          id: 1
        }
      });

      await this.delete(_.map(ids, (doc) => {
        return doc.id;
      }));
      return ids;
    } else {
      const entities = await this.db.find(this.collectionName, {}, { fields: { id: 1 } });
      await this.db.truncate(this.collectionName);
      return entities;
    }
  }

  /**
   * Upserts documents.
   *
   * @param [array.object] documents
   */
  async upsert(documents: BaseDocument[],
    events: Topic, resourceName: string, subject: Subject): Promise<BaseDocument[]> {
    let result = [];
    let createDocsResult = [];
    let updateDocsResult = [];
    try {
      let createDocuments = [];
      let updateDocuments = [];
      let dispatch = [];
      dispatch = await Promise.all(documents.map(async (doc) => {
        if (this.bufferFields && doc) {
          doc = this.encodeOrDecode([doc], this.bufferFields, 'decode')[0];
        }
        let foundDocs;
        if (doc && doc.id) {
          foundDocs = await this.db.find(this.collectionName, { id: doc.id }, {
            fields: {
              meta: 1
            }
          });
        }
        let eventName: string;
        if (_.isEmpty(foundDocs)) {
          // insert
          setDefaults(doc, this.collectionName, subject);
          createDocuments.push(doc);
          eventName = 'Created';
        } else {
          // convert dateTimeStamp fields
          if (this.timeStampFields) {
            foundDocs = this.encodeOrDecode(foundDocs, this.timeStampFields, 'convertMilisecToDateObj');
          }
          // update
          const dbDoc = foundDocs[0];
          updateMetadata(dbDoc.meta, doc, subject);
          updateDocuments.push(doc);
          eventName = 'Modified';
        }
        if (events) {
          return events.emit(`${resourceName}${eventName}`, doc);
        }
      }));

      if (createDocuments?.length > 0) {
        createDocsResult = await this.create(createDocuments, subject);
      }

      if (updateDocuments?.length > 0) {
        updateDocsResult = await this.update(updateDocuments, subject);
      }

      result = _.union(createDocuments, updateDocuments);

      if (this.timeStampFields && result?.length > 0) {
        // convert number to Date Object
        result = this.encodeOrDecode(result, this.timeStampFields, 'convertMilisecToDateObj');
      }
      await Promise.all(dispatch);

      if (this.bufferFields && result?.length > 0) {
        result = this.encodeOrDecode(result, this.bufferFields, 'encode');
      }

      return result;
    } catch (error) {
      this.logger.error('Error upserting documents', { code: error.code, message: error.message, stack: error.stack });
      result.push({
        error: true,
        errorNum: error.code,
        errorMessage: error.details ? error.details : error.message
      });
      return result;
    }
  }

  /**
   * Finds documents by id and updates them.
   *
   * @param [array.object] documents
   * A list of documents or partial documents. Each document must contain an id field.
   */
  async update(documents: BaseDocument[], subject: Subject): Promise<BaseDocument[]> {
    let updateResponse = [];
    try {
      const collectionName = this.collectionName;
      let docsWithUpMetadata = await Promise.all(documents.map(async (doc) => {
        if (this.bufferFields && doc) {
          doc = this.encodeOrDecode([_.cloneDeep(doc)], this.bufferFields, 'decode')[0];
        }
        let foundDocs = await this.db.find(collectionName, { id: doc.id });
        let dbDoc;
        if (foundDocs && foundDocs.length === 1) {
          dbDoc = foundDocs[0];
          doc = updateMetadata(dbDoc.meta, doc, subject);
        } else {
          dbDoc = doc; // doc not existing assigning to generate error message in response
        }

        if (this.isGraphDB(this.db)) {
          const db = this.db;
          await Promise.all(this.edgeCfg.map(async (eachEdgeCfg) => {
            const toIDkey = eachEdgeCfg.to;
            let modified_to_idValues = doc[toIDkey];
            let db_to_idValues = dbDoc[toIDkey];
            if (_.isArray(modified_to_idValues)) {
              modified_to_idValues = _.sortBy(modified_to_idValues);
            }
            if (_.isArray(db_to_idValues)) {
              db_to_idValues = _.sortBy(db_to_idValues);
            }
            // delete and recreate only if there is a difference in references
            if (!_.isEqual(modified_to_idValues, db_to_idValues)) {
              // delete and recreate the edge (since there is no way to update the edge as we dont add id to the edge as for doc)
              const fromIDkey = eachEdgeCfg.from;
              const from_id = doc[fromIDkey];
              let fromVerticeName = collectionName;
              let toVerticeName = eachEdgeCfg.toVerticeName;
              const direction = eachEdgeCfg.direction;
              if (direction === 'inbound') {
                fromVerticeName = eachEdgeCfg.fromVerticeName;
                toVerticeName = collectionName;
              }

              const edgeCollectionName = eachEdgeCfg.edgeName;
              let outgoingEdges: any = await db.getOutEdges(edgeCollectionName, `${collectionName}/${dbDoc.id}`);
              if (_.isArray(outgoingEdges.edges)) {
                await Promise.all(outgoingEdges.edges.map((outgoingEdge) => db.removeEdge(edgeCollectionName, outgoingEdge._id)));
              }
              let incomingEdges: any = await db.getInEdges(edgeCollectionName, `${collectionName}/${dbDoc.id}`);
              if (_.isArray(incomingEdges.edges)) {
                await Promise.all(incomingEdges.edges.map((incomingEdge) => db.removeEdge(edgeCollectionName, incomingEdge._id)));
              }
              // Create new edges
              if (from_id && modified_to_idValues) {
                if (_.isArray(modified_to_idValues)) {
                  await Promise.all(modified_to_idValues.map((toID) => db.createEdge(eachEdgeCfg.edgeName, null,
                    `${fromVerticeName}/${from_id}`, `${toVerticeName}/${toID}`)));
                } else {
                  await db.createEdge(edgeCollectionName, null,
                    `${fromVerticeName}/${from_id}`, `${toVerticeName}/${modified_to_idValues}`);
                }
              }
            }
          }));
        }
        return doc;
      }));

      if (this.timeStampFields && docsWithUpMetadata?.length > 0) {
        docsWithUpMetadata = this.encodeOrDecode(docsWithUpMetadata, this.timeStampFields, 'convertDateObjToMilisec');
      }
      updateResponse = await this.db.update(collectionName, docsWithUpMetadata);
      if (this.timeStampFields && updateResponse?.length > 0) {
        updateResponse = this.encodeOrDecode(updateResponse, this.timeStampFields, 'convertMilisecToDateObj');
      }
      if (this.bufferFields && updateResponse?.length > 0) {
        updateResponse = this.encodeOrDecode(updateResponse, this.bufferFields, 'encode');
      }
      return updateResponse;
    } catch (e) {
      this.logger.error('Error updating documents', { code: e.code, message: e.message, stack: e.stack });
      updateResponse.push({
        error: true,
        errorNum: e.code,
        errorMessage: e.message
      });
      return updateResponse;
    }
  }

  private encodeOrDecode(documents: any, fieldPaths: string[], fieldHanlder: string): any {
    for (let doc of documents) {
      for (let fieldPath of fieldPaths) {
        doc = fieldHandler(doc, fieldPath, fieldHanlder);
      }
    }
    return documents;
  }
}
