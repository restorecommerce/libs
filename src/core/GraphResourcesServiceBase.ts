import * as _ from 'lodash';
import { GraphDatabaseProvider, TraversalResponse } from '@restorecommerce/chassis-srv';
import { createLogger } from '@restorecommerce/logger';
import { Logger } from 'winston';
import { TraversalRequest } from './interfaces';
import { Stream } from 'stream';

/**
 * Graph Resource API base provides functions for graph Operations such as
 * creating or modifying Vertices/Edges, graph traversal etc.
 */
export class GraphResourcesServiceBase {
  bufferedCollections: any;
  logger: Logger;
  /**
   * @constructor
   * @param  {object} db Chassis arangodb provider.
   */
  constructor(private db: GraphDatabaseProvider, private bufferFiledCfg?: any, logger?: Logger) {
    if (bufferFiledCfg) {
      this.bufferedCollections = [];
      for (let key in bufferFiledCfg) {
        // mapping of collection name to the property to be marshalled
        this.bufferedCollections.push(key);
      }
    }
    if (logger) {
      this.logger = logger;
    } else {
      const defaultLoggerCfg = {
        console: {
          handleExceptions: false,
          level: 'debug',
          colorize: true,
          prettyPrint: true
        }
      };
      this.logger = createLogger(defaultLoggerCfg);
    }
  }

  /**
  * collection traversal - Performs a traversal starting from the given
  * startVertex and following edges contained in this edge collection.
  *
  * @param {any} call request object containing start_vertex, opts and collection name.
  * The start_vertex can be either the _id of a document in the database,
  * the _key of an edge in the collection, or a document
  * (i.e. an object with an _id or _key property).
  * opts contains the options such as opts.direction, opts.filter, opts.visitor,
  * opts.init, opts.expander, opts.sort
  * @param  {any} context context.
  * @return  {TraversalResponse} TraversalResponse containing VertexFields,
  * traversed pahts and materialized data
  */
  async traversal(call: any, context?: any): Promise<any> {
    try {
      const request: TraversalRequest = call.request?.request;
      const vertices = request?.vertices;
      const collection = request?.collection;
      const options = request?.opts;
      if (!vertices && !collection) {
        const message = 'missing start vertex or collection_name for graph traversal';
        this.logger.error(message);
        await call.write({
          operation_status: { code: 400, message }
        });
        return await call.end();
      }
      const filters = request?.filters;
      let path = request?.path ? request.path : false;
      let traversalCursor: TraversalResponse;
      try {
        this.logger.debug('Calling traversal', { vertices, collection });
        traversalCursor = await this.db.traversal(vertices, collection,
          options, filters);
        this.logger.debug('Received traversal ArrayCursor from DB');
      } catch (err) {
        this.logger.error('Error stack', err);
        this.logger.error('Error executing DB Traversal', { error: err.message });
        await call.write({
          operation_status: { code: err.code ? err.code : 500, message: err.message }
        });
        return await call.end();
      }

      let rootCursor = traversalCursor.rootCursor;
      let associationCursor = traversalCursor.associationCursor;
      const traversalStream = new Stream.Readable({ objectMode: true });
      // root entity data batches
      if (rootCursor && rootCursor.batches) {
        for await (const batch of rootCursor.batches) {
          // root entity data, encoding before pushing batch
          for (let elem of batch) {
            if (elem._key) {
              delete elem._key;
            }
            if (elem._rev) {
              delete elem._rev;
            }
          }
          traversalStream.push({ data: { value: Buffer.from(JSON.stringify(batch)) } });
        }
      }
      // association entity data batches
      if (associationCursor && associationCursor.batches) {
        for await (const batch of associationCursor.batches) {
          let associationData = [];
          let traversedPaths = [];
          for (let data of batch) {
            if (data.v._key) {
              delete data.v._key;
            }
            if (data.v._rev) {
              delete data.v._rev;
            }
            associationData.push(data.v);
            if (path) {
              traversedPaths.push(data.p);
            }
          }
          if (!_.isEmpty(associationData)) {
            // associated entity data, encoding before pushing data
            traversalStream.push({ data: { value: Buffer.from(JSON.stringify(associationData)) } });
          }
          // paths
          if (!_.isEmpty(traversedPaths)) {
            // traversed paths, encoding before pushing paths
            traversalStream.push({ paths: { value: Buffer.from(JSON.stringify(traversedPaths)) } });
          }
        }
      }

      traversalStream.push({ operation_status: { code: 200, message: 'success' } });
      traversalStream.push(null);
      traversalStream.pipe(call.request);
      this.logger.debug('Traversal request ended');
      return;
    } catch (err) {
      this.logger.error('Error caught executing traversal', { err: err.message });
      this.logger.error('Error stack', err);
      return {
        operation_status: { code: err.code ? err.code : 500, message: err.message }
      };
    }
  }

  /**
   * marshall the data
   *
   * @param document resource data
   * @param bufferField property specified in config to be marshalled
   * @return document
   */
  marshallData(document: any, bufferField: any): any {
    if (bufferField in document && document[bufferField]) {
      const decodedMsg = document[bufferField];
      // convert the Msg obj to Buffer Obj
      const encodedBufferObj = Buffer.from(JSON.stringify(decodedMsg));
      document[bufferField] = {};
      document[bufferField].value = encodedBufferObj;
    }
    return document;
  }
}
