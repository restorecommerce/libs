import * as _ from 'lodash';
import { GraphDatabaseProvider, TraversalResponse as DBTraversalResponse } from '@restorecommerce/chassis-srv';
import { Logger, createLogger } from '@restorecommerce/logger';
import {
  DeepPartial, ServerStreamingMethodResult,
  GraphServiceImplementation,
  TraversalRequest,
  TraversalResponse
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/graph';

/**
 * Graph Resource API base provides functions for graph Operations such as
 * creating or modifying Vertices/Edges, graph traversal etc.
 */
export class GraphResourcesServiceBase implements GraphServiceImplementation {
  bufferedCollections: any;
  dateTimeFieldcfg: any;
  logger: Logger;
  /**
   * @constructor
   * @param  {object} db Chassis arangodb provider.
   */
  constructor(private db: GraphDatabaseProvider, private bufferFiledCfg?: any, logger?: Logger, dateTimeFieldcfg?: any) {
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
    this.dateTimeFieldcfg = dateTimeFieldcfg;
  }

  /**
  * collection traversal - Performs a traversal starting from the given
  * startVertex and following edges contained in this edge collection.
  *
  * The start_vertex can be either the _id of a document in the database,
  * the _key of an edge in the collection, or a document
  * (i.e. an object with an _id or _key property).
  * opts contains the options such as opts.direction, opts.filter, opts.visitor,
  * opts.init, opts.expander, opts.sort
  */
  async* traversal(request: TraversalRequest, context): ServerStreamingMethodResult<DeepPartial<TraversalResponse>> {
    try {
      const vertices = request?.vertices;
      const collection = request?.collection;
      const options = request?.opts;
      if (!vertices && !collection) {
        const message = 'missing start vertex or collection_name for graph traversal';
        this.logger.error(message);
        yield {
          operation_status: { code: 400, message }
        };
        return;
      }
      const filters = request?.filters;
      let path = request?.path ? request.path : false;
      let traversalCursor: DBTraversalResponse;

      let sort;
      if (collection && !_.isEmpty(collection.sorts)) {
        sort = {};
        _.forEach(collection.sorts, (s: any) => {
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
        (collection as any).sorts = sort;
      }

      try {
        this.logger.debug('Calling traversal', { vertices, collection });
        traversalCursor = await this.db.traversal(vertices, collection,
          options, filters);
        this.logger.debug('Received traversal ArrayCursor from DB');
      } catch (err) {
        this.logger.error('Error executing DB Traversal', { code: err.code, message: err.message, stack: err.stack });
        yield {
          operation_status: { code: err.code ? err.code : 500, message: err.message }
        };
        return;
      }

      let rootCursor = traversalCursor.rootCursor;
      let associationCursor = traversalCursor.associationCursor;
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
          yield ({ data: { value: Buffer.from(JSON.stringify(batch)) } });
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
            // convert `data.v` ie. vertex data for time fields conversion from ms to ISO string directly
            let entityName = data.v._id.split('/')[0];
            if (this.dateTimeFieldcfg) {
              for (let cfgEntityNames in this.dateTimeFieldcfg) {
                if(cfgEntityNames === entityName) {
                  const dateTimeFields: string[] = this.dateTimeFieldcfg[entityName];
                  dateTimeFields.forEach(e => {
                    if (e.indexOf('.')) {
                      this.updateJSON(e, data.v);
                    } else {
                      data.v[e] = new Date(data.v[e]).toISOString();
                    }
                  });
                }
              }
            }
            associationData.push(data.v);
            if (path) {
              traversedPaths.push(data.p);
            }
          }
          if (!_.isEmpty(associationData)) {
            // associated entity data, encoding before pushing data
            yield ({ data: { value: Buffer.from(JSON.stringify(associationData)) } });
          }
          // paths
          if (!_.isEmpty(traversedPaths)) {
            // traversed paths, encoding before pushing paths
            yield ({ paths: { value: Buffer.from(JSON.stringify(traversedPaths)) } });
          }
        }
      }

      yield ({ operation_status: { code: 200, message: 'success' } });
      this.logger.debug('Traversal request ended');
      return;
    } catch (err) {
      this.logger.error('Error caught executing traversal', { code: err.code, message: err.message, stack: err.stack });
      yield {
        operation_status: { code: err.code ? err.code : 500, message: err.message }
      };
      return;
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

  private updateJSON = (path, obj) => {
    let fields = path.split('.');
    let result = obj;
    let j = 0;
    for (let i = 0, n = fields.length; i < n && result !== undefined; i++) {
      let field = fields[i];
      if (i === n - 1) {
        // reset value finally after iterating to the position (only if value already exists)
        if (result[field]) {
          result[field] = new Date(result[field]).toISOString();
        }
      } else {
        if (_.isArray(result[field])) {
          // till i < n concat new fields
          let newField;
          for (let k = i + 1; k < n; k++) {
            if (newField) {
              newField = newField + '.' + fields[k];
            } else {
              newField = fields[k];
            }
          }
          for (; j < result[field].length; j++) {
            // recurisve call to update each element if its an array
            this.updateJSON(newField, result[field][j]);
          }
        } else {
          // update object till final path is reached
          result = result[field];
        }
      }
    }
  };
}
