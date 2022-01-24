import * as _ from 'lodash';
import { GraphDatabaseProvider } from '@restorecommerce/chassis-srv';
import { createLogger } from '@restorecommerce/logger';
import { Logger } from 'winston';
import { TraversalOptions } from './interfaces';
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
      const request = call.request?.request;
      const collection_name = request.collection_name;
      let start_vertex = request.start_vertex;
      const opts: TraversalOptions = request?.opts;
      if (!start_vertex && !collection_name) {
        const message = 'missing start vertex or collection_name for graph traversal';
        this.logger.error(message);
        await call.write({
          operation_status: { code: 400, message }
        });
        return await call.end();
      }
      const filters = request?.filters;
      let path = request?.path ? request.path : false;
      let queryResult;
      try {
        this.logger.debug('Calling traversal', { start_vertex, collection_name });
        queryResult = await this.db.traversal(start_vertex,
          collection_name, opts, filters, path);
        this.logger.debug('Received traversal response from DB');
      } catch (err) {
        this.logger.error('Error stack', err);
        this.logger.error('Error executing DB Traversal', { error: err.message });
        await call.write({
          operation_status: { code: err.code ? err.code : 500, message: err.message }
        });
        return await call.end();
      }

      // create stream from queryResult and pipe to response stream directly
      const traversalStream = new Stream.Readable({ objectMode: true });
      traversalStream.push(queryResult);
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
