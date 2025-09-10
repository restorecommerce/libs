import { Logger } from 'winston';
import { TraversalResponse } from './provider/arango/interface';
import {
  Vertices,
  Collection,
  Options as TraversalOptions,
  Filters as GraphFilters,
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/graph';

/**
 * A key, value map containing database providers.
 * Database providers are registered with the register function.
 */
const databases = {};

/**
 * Register a database provider.
 *
 * @param  {string} name     database provider identifier
 * @param  {constructor} provider database provider constructor function
 */
export const register = (name: string, provider: any): any => {
  databases[name] = provider;
};

import { create as arangodb } from './provider/arango';
import { create as nedb } from './provider/nedb';

// Add default providers
register('arango', arangodb);
register('nedb', nedb);

/**
 * Get a new database connection.
 * @param {Object} config Database configuration.
 * @param [Logger] logger
 * @return {Promise} New, active and ready database connection.
 */
export const get = async (config: any, logger?: Logger, graphName?: string, edgeConfig?: any): Promise<DatabaseProvider> => {
  const db = databases[config.provider];
  if (!db) {
    throw new Error(`database provider ${config.provider} does not exist`);
  }
  return db(config, logger, graphName, edgeConfig);
};

export interface DatabaseProvider {
  insert(collectionName: string, documents: any): Promise<Array<any>>;
  find(collectionName: string, filter?: any, options?: any): Promise<Array<any>>;
  findByID(collectionName: string, ids: string | string[], options?: any): Promise<Array<any>>;
  update(collectionName: string, documents: any): Promise<Array<any>>;
  upsert(collectionName: string, documents: any): Promise<Array<any>>;
  delete(collectionName: string, ids: string[]): Promise<Array<any>>;
  count(collectionName: string, filter?: any): Promise<number>;
  truncate(collectionName?: string): Promise<void>;
  registerCustomQuery?: (name: string, script: string, type?: string) => any;
  unregisterCustomQuery?: (name: string) => any;
  listCustomQueries?: () => Array<any>;
  deleteAnalyzer(analyzerName: string[]): Promise<any>;
  dropView(viewName: string[]): Promise<any>;
}


export interface GraphDatabaseProvider extends DatabaseProvider {
  createGraphDB(graphName: string, edgeDefinitions: any, options: object): any;
  createVertex(collectionName: string, data: any): any;
  getVertex(collectionName: string, documentHandle: string): any;
  removeVertex(collectionName: string, documentHandles: string | string[]): any;
  getVertexCollection(collectionName: string): any;
  listVertexCollections(excludeOrphans?: boolean): any;
  getAllVertexCollections(excludeOrphans?: boolean): any;
  addVertexCollection(collectionName: string): any;
  removeVertexCollection(collectionName: string, dropCollection?: boolean): any;
  getGraphDB(): any;
  createEdge(collectionName: string, data: object, fromId?: string, toId?: string): any;
  getEdge(collectionName: string, documentHandle: string): any;
  getAllEdgesForVertice(collectionName: string, documentHandle: string): any;
  getInEdges(collectionName: string, documentHandle: string): any;
  getOutEdges(collectionName: string, documentHandle: string): any;
  traversal(startVertex: Vertices, collectionName: Collection, opts: TraversalOptions,
    filters?: GraphFilters[]): Promise<TraversalResponse>;
  addEdgeDefinition(collectionName: string, fromVertice: object | [object],
    toVertice: object | [object]): any;
  removeEdgeDefinition(definitionName: string, dropCollection?: boolean): any;
  listGraphs(): any;
  removeEdge(collectionName: string, documentHandle: string): any;
}
