import * as _ from 'lodash';
import { Database } from 'arangojs';
import { Arango } from './base';
import { sanitizeInputFields, sanitizeOutputFields } from './common';
import { GraphDatabaseProvider } from '../..';
import { Graph } from 'arangojs/graph';
import { ArangoCollection } from 'arangojs/collection';
import { buildGraphFilter, buildGraphLimiter, buildGraphSorter, createGraphsAssociationFilter } from './utils';
import {
  Vertices,
  Collection,
  Options as TraversalOptions,
  Filters as GraphFilters,
  Options_Direction as Direction,
  DeepPartial
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/graph';
import { TraversalResponse } from './interface';
import { type Logger } from '@restorecommerce/logger';

export class ArangoGraph extends Arango implements GraphDatabaseProvider {
  constructor(
    db: Database,
    public readonly graph: Graph,
    public readonly edgeDefConfig: any,
    public readonly logger?: Logger,
  ) {
    super(db);
  }

  /**
 * create a Graph instance.
 *
 * @param  {String} graphName graph name
 * @param edgeDefinitions — Definitions for the relations of the graph.
 * @param options — Options for creating the graph.
 * @return  {Object} A Graph instance
 */
  async createGraphDB(graphName: string, edgeDefinitions: any, options: object): Promise<Graph> {
    if (!this.graph) {
      if (_.isNil(graphName)) {
        throw new Error('missing graph name');
      }
      const graph = this.db.graph(graphName);
      try {
        await graph.create(edgeDefinitions, options);
      } catch (err) {
        if (err.message === 'graph already exists') {
          return this.graph;
        }
        throw { code: err.code, message: err.message };
      }
      return graph;
    } else {
      return this.graph;
    }
  }


  /**
   * create a new Vertex with given data.
   *
   * @param  {string} collectionName vertex collection name
   * @param  {Object} data data for vertex
   * @return  {Object} created vertex
   */
  async createVertex(collectionName: string, data: any): Promise<any> {
    if (_.isNil(collectionName)) {
      throw new Error('missing vertex collection name');
    }
    if (_.isNil(data)) {
      throw new Error('missing data for vertex');
    }
    const collection = this.graph.vertexCollection(collectionName);
    let docs = _.cloneDeep(data);
    if (!_.isArray(docs)) {
      docs = [docs];
    }
    _.forEach(docs, (document, i) => {
      docs[i] = sanitizeInputFields(document);
    });
    const responseDocs = [];
    for (const eachDoc of docs) {
      let result;
      try {
        result = await collection.save(eachDoc);
        if (!result.error) {
          responseDocs.push(eachDoc);
        }
      } catch (e) {
        responseDocs.push({
          error: true,
          errorNum: e.code,
          errorMessage: e.message
        });
      }
    }
    return _.map(responseDocs, sanitizeOutputFields);
  }

  /**
   * Retreives the vertex with the given documentHandle from the collection.
   *
   * @param  {string} collectionName vertex collection name
   * @param  {string} documentHandle The handle of the vertex to retrieve.
   * This can be either the _id or the _key of a vertex in the collection,
   * or a vertex (i.e. an object with an _id or _key property).
   * @return  {Object} created vertex
   */
  async getVertex(collectionName: string, documentHandle: string): Promise<object> {
    if (_.isNil(collectionName)) {
      throw new Error('missing vertex collection name');
    }
    if (_.isNil(documentHandle)) {
      throw new Error('missing document handle');
    }
    const collection = this.graph.vertexCollection(collectionName);
    const doc = await collection.vertex(documentHandle);
    return doc;
  }

  /**
   * Deletes the vertex with the given documentHandle from the collection.
   *
   * @param {string} collectionName vertex collection name
   * @param  {string[]} documentHandles An array of the documentHandles to be removed.
   * This can be either the _id or the _key of a vertex in the collection,
   * or a vertex (i.e. an object with an _id or _key property).
   * @return  {Object} removed vertex
   */
  async removeVertex(collectionName: string, documentHandles: string | string[]): Promise<any> {
    if (_.isNil(collectionName)) {
      throw new Error('missing vertex collection name');
    }
    if (_.isNil(documentHandles)) {
      throw new Error('missing document handle property');
    }
    if (!_.isArray(documentHandles)) {
      documentHandles = [documentHandles as string];
    }
    const collection = this.graph.vertexCollection(collectionName);
    const removedVertexList = [];
    for (const documentHandle of documentHandles) {
      const id = documentHandle.split('/')[1];
      const removed: any = await collection.remove(documentHandle);
      if (!removed.error) {
        removedVertexList.push({ _id: documentHandle, _key: id, _rev: id });
      }
    }
    return removedVertexList;
  }

  /**
   * gets a new GraphVertexCollection instance with the given name for this graph.
   *
   * @param  {string} collectionName The handle of the vertex to retrieve.
   * This can be either the _id or the _key of a vertex in the collection,
   * or a vertex (i.e. an object with an _id or _key property).
   * @return  {Object} created vertex
   */
  async getVertexCollection(collectionName: string): Promise<object> {
    if (_.isNil(collectionName)) {
      throw new Error('missing vertex collection name');
    }

    const collection = await this.graph.vertexCollection(collectionName);
    return collection;
  }

  /**
   * Fetches all vertex collections from the graph and returns
   * an array of collection descriptions.
   *
   * @return  {Array<string>} vertex list
   */
  async listVertexCollections(): Promise<string[]> {
    const collections = await this.graph.listVertexCollections();
    return collections;
  }

  /**
   * Fetches all vertex collections from the database and returns an array
   * of GraphVertexCollection instances for the collections.
   *
   * @return  {Array<Object>} vertex list
   */
  async getAllVertexCollections(): Promise<any> {
    const collections = await this.graph.vertexCollections();
    return collections;
  }

  /**
   * Adds the collection with the given collectionName to the graph's
   * vertex collections.
   *
   * @param  {string} collectionName Name of the vertex collection to add to the graph.
   * @param  {boolean} excludeOrphans Whether orphan collections should be excluded.
   * @return  {Array<Object>} vertex list
   */
  async addVertexCollection(collectionName: string): Promise<any> {
    if (_.isNil(collectionName)) {
      throw new Error('missing vertex collection name');
    }
    let collection;
    try {
      collection = await this.graph.addVertexCollection(collectionName);
    } catch (err) {
      if (err.message.indexOf('collection already used in edge def') > -1 || err.message.indexOf('collection used in orphans') > -1) {
        return collection;
      }
      throw new Error(err.message);
    }
    return collection;
  }

  /**
   * Removes the vertex collection with the given collectionName from the graph.
   *
   * @param  {string} collectionName Name of the vertex collection to remove from the graph.
   * @param  {boolean} dropCollection If set to true, the collection will
   * also be deleted from the database.
   * @return  {Object } removed vertex
   */
  async removeVertexCollection(collectionName: string, dropCollection?: boolean): Promise<any> {
    if (_.isNil(collectionName)) {
      throw new Error('missing vertex collection name');
    }
    dropCollection ??= false;
    const collection = await this.graph.removeVertexCollection(
      collectionName,
      dropCollection
    );
    return collection;
  }

  /**
   * @return  {Graph} A Graph instance
   */
  getGraphDB(): Graph {
    return this.graph;
  }

  /**
   * Creates a new edge between the vertices fromId and toId with the given data.
   *
   * @param  {string} collectionName name of the edge collection
   * @param  {Object} data The data of the new edge. If fromId and toId are not
   * specified, the data needs to contain the properties _from and _to.
   * @param  {string} fromId The handle of the start vertex of this edge.
   * This can be either the _id of a document in the database, the _key of an
   * edge in the collection, or a document (i.e. an object with an _id or _key property).
   * @param {string} toId The handle of the end vertex of this edge.
   * This can be either the _id of a document in the database, the _key of an
   * edge in the collection, or a document (i.e. an object with an _id or _key property).
   * @return  {Object} edge object
   */
  async createEdge(collectionName: string, data: object, fromId?: string,
    toId?: string): Promise<object> {
    if (_.isNil(collectionName)) {
      throw new Error('missing edge collection name');
    }
    if (_.isNil(data)) {
      data = {};
    }

    const collection = this.graph.edgeCollection(collectionName);
    if (fromId) {
      Object.assign(data, { _from: fromId });
    }
    if (toId) {
      Object.assign(data, { _to: toId });
    }
    return collection.save(data);
  }

  /**
   * Retrieves the edge with the given documentHandle from the collection.
   *
   * @param  {String} collectionName collection name
   * @param  {String} documentHandle edge key
   * @return  {Object} edge object
   */
  async getEdge(collectionName: string, documentHandle: string): Promise<object> {
    if (_.isNil(collectionName)) {
      throw new Error('missing edge collection name');
    }
    if (_.isNil(documentHandle)) {
      throw new Error('missing docuemnt handle');
    }
    const collection = this.graph.edgeCollection(collectionName);
    return collection.edge(documentHandle);
  }

  /**
  * Retrieves a list of all edges of the document with the given documentHandle.
  *
  * @param  {String} collectionName edge collection name
  * @param  {String} documentHandle The handle of the document to retrieve
  * the edges of. This can be either the _id of a document in the database,
  * the _key of an edge in the collection, or a document
  * (i.e. an object with an _id or _key property).
  * @return  {Object} edge object
  */
  async getAllEdgesForVertice(collectionName: string, documentHandle: string): Promise<any> {
    if (_.isNil(collectionName)) {
      throw new Error('missing edge collection name');
    }
    if (_.isNil(documentHandle)) {
      throw new Error('missing document handle');
    }
    const collection = this.graph.edgeCollection(collectionName).collection;
    return await collection.edges(documentHandle, {});
  }

  /**
  * get all incoming edges.
  *
  * @param  {String} collectionName edge collection name
  * @param  {String} documentHandle The handle of the document
  * @return  {[Object]} list of edges
  */
  async getInEdges(collectionName: string, documentHandle: string): Promise<any> {
    if (_.isNil(collectionName)) {
      throw new Error('missing edge name');
    }
    if (_.isNil(documentHandle)) {
      throw new Error('missing document handle');
    }
    const collection = this.graph.edgeCollection(collectionName).collection;
    return await collection.inEdges(documentHandle, {});
  }

  /**
  * get all outgoing edges.
  *
  * @param  {String} collectionName edge collection name
  * @param  {String} documentHandle The handle of the document
  * @return  {[Object]} list of edges
  */
  async getOutEdges(collectionName: string, documentHandle: string): Promise<any> {
    if (_.isNil(collectionName)) {
      throw new Error('missing edge collection name');
    }
    if (_.isNil(documentHandle)) {
      throw new Error('missing document handle');
    }
    const collection = this.graph.edgeCollection(collectionName).collection;
    return collection.outEdges(documentHandle, {});
  }

  /**
  * collection traversal - Performs a traversal starting from the given
  * startVertex and following edges contained in this edge collection.
  *
  * @param {String} collectionName collection name
  * @param  {String | String[]} startVertex Start vertex or vertices.
  * This can be either the _id of a document in the database,
  * the _key of an edge in the collection, or a document
  * (i.e. an object with an _id or _key property).
  * @param  {any} opts opts.direction opts.filter, opts.visitor,
  * opts.init, opts.expander, opts.sort
  * @return  {[Object]} edge traversal path
  */
  async traversal(vertices: Vertices, collection: Collection, opts: DeepPartial<TraversalOptions>,
    filters?: GraphFilters[]): Promise<TraversalResponse> {
    if (vertices) {
      if (_.isEmpty(vertices.collection_name) && !_.isEmpty(vertices.start_vertex_ids)) {
        throw new Error(`missing collection name for vertex id ${vertices.start_vertex_ids}`);
      } else if (!_.isEmpty(vertices.collection_name) && _.isEmpty(vertices.start_vertex_ids)) {
        throw new Error(`missing vertex id for collection_name ${vertices.collection_name}`);
      }
    }

    // vertices data
    let vertexCollectionName, startVertexIds;
    if (vertices) {
      vertexCollectionName = vertices.collection_name;
      startVertexIds = vertices.start_vertex_ids;
    }

    // collection data
    let collectionName, limit, offset, sort;
    if (collection) {
      collectionName = collection.collection_name;
      limit = collection.limit;
      offset = collection.offset;
      sort = collection.sorts;
    }

    if ((_.isUndefined(startVertexIds) || _.isNil(startVertexIds) || _.isEmpty(startVertexIds)) &&
      (_.isUndefined(collectionName) || _.isNil(collectionName) || _.isEmpty(collectionName))) {
      throw new Error('One of the Vertices or Collection should be defined');
    }

    // from either vertices or collections
    const traversalCollectionName = collectionName && !_.isEmpty(collectionName) ? collectionName : vertexCollectionName;

    if (!opts) {
      opts = {};
    }
    // make outbound traversal by default if not provided
    if (opts.direction === undefined) {
      opts.direction = Direction.OUTBOUND;
    }

    // default options
    let defaultOptions: any = { uniqueVertices: 'global', bfs: true, uniqueEdges: 'path' };
    let filter = '';
    let rootFilter = '';
    let limitFilter = '';
    let sortFilter = '';
    // include vertices in options if specified
    if (opts.include_vertexs) {
      defaultOptions.vertexCollections = opts.include_vertexs;
    }

    // include edges in options if specified
    if (opts.include_edges) {
      defaultOptions.edgeCollections = opts.include_edges;
    }

    // exclude vertices
    if (opts.exclude_vertexs) {
      for (const excludeVertex of opts.exclude_vertexs) {
        filter = filter + ` FILTER v._id NOT LIKE "${excludeVertex}%" `;
      }
    }

    // exclude edges
    if (opts.exclude_edges) {
      for (const excludeEdge of opts.exclude_edges) {
        filter = filter + ` FILTER e._id NOT LIKE "${excludeEdge}%" `;
      }
    }

    const rootAndAssociationFilter = createGraphsAssociationFilter(filters,
      opts.direction, traversalCollectionName, this.edgeDefConfig, filter);
    // association fitler
    filter = rootAndAssociationFilter.associationFilter;
    // root filter
    const rootEntityFilter = rootAndAssociationFilter.rootEntityFilter;
    if (rootEntityFilter) {
      rootFilter = buildGraphFilter([rootEntityFilter], true).q;
    }

    if (startVertexIds && startVertexIds.length > 0) {
      if (rootFilter && !_.isEmpty(rootFilter)) {
        rootFilter = ` obj.id IN ${JSON.stringify(startVertexIds)} && ${rootFilter}`;
      } else {
        rootFilter = ` obj.id IN ${JSON.stringify(startVertexIds)} `;
      }
    }

    // combined root filter
    if (rootFilter && !_.isEmpty(rootFilter)) {
      rootFilter = `FILTER ${rootFilter}`;
    }

    limitFilter = buildGraphLimiter(limit, offset);

    if (sort) {
      sortFilter = buildGraphSorter(sort);
    }

    let rootCursor, associationCursor;
    try {
      defaultOptions = JSON.stringify(defaultOptions);
      // traversal data
      const traversalQuery = `For obj IN ${traversalCollectionName} ${rootFilter} ${limitFilter} ${sortFilter}
          FOR v, e, p IN 1..100 ${Direction[opts.direction]} obj GRAPH "${this.graph.name}"
          OPTIONS ${defaultOptions}
          ${filter}
          RETURN { v, e, p }`;
      associationCursor = await this.db.query(traversalQuery);
      const rootEntityQuery = `For obj IN ${traversalCollectionName} ${rootFilter} ${limitFilter} ${sortFilter} return obj`;
      rootCursor = await this.db.query(rootEntityQuery);
    } catch (err) {
      throw { code: err.code, message: err.message };
    }

    return { rootCursor, associationCursor };
  }

  async getAllChildrenNodes(startVertex: string,
    edgeName: string): Promise<any> {
    const queryTpl = `FOR v IN 1..1 OUTBOUND @start_vertex @@edge_name RETURN v`;
    const result = await this.db.query(queryTpl, {
      start_vertex: startVertex,
      '@edge_name': edgeName
    });
    return result;
  }

  arrUnique<T>(arr: T[]) {
    return [... new Set<T>(arr)];
  }

  /**
  * Adds the given edge definition to the graph.
  *
  * @param  {string} edgeName edge name
  * @param  {Object} fromVertice from vertice
  * @param  {Object} toVertice from vertice
  * @return  {Object} The added edge definition
  */
  async addEdgeDefinition(edgeName: string, fromVertice: (string | ArangoCollection)[],
    toVertice: (string | ArangoCollection)[]): Promise<object> {
    if (_.isNil(edgeName)) {
      throw new Error('missing edge name');
    }
    if (_.isNil(fromVertice)) {
      throw new Error('missing from vertice');
    }
    if (_.isNil(toVertice)) {
      throw new Error('missing to vertice');
    }

    if (!_.isArray(fromVertice)) {
      fromVertice = [fromVertice];
    }

    if (!_.isArray(toVertice)) {
      toVertice = [toVertice];
    }

    let edgeDef;
    try {
      edgeDef = await this.graph.addEdgeDefinition(
        {
          collection: edgeName,
          from: fromVertice,
          to: toVertice
        }
      );
    } catch (err) {
      // if edge def already exists return
      if (err.message === `${edgeName} multi use of edge collection in edge def`) {
        return edgeDef;
      }
      throw { code: err.code, message: err.message };
    }
  }

  /**
  *  Removes the edge definition with the given definitionName form the graph.
  *
  * @param  {string} definitionName Name of the edge definition
  * to remove from the graph.
  * @param  {boolean} dropCollection If set to true, the edge collection
  * associated with the definition will also be deleted from the database.
  * @return  {Object} replaced edge definition
  */
  async removeEdgeDefinition(definitionName: string, dropCollection?: boolean): Promise<object> {
    if (_.isNil(definitionName)) {
      throw new Error('missing definition name');
    }
    return this.graph.removeEdgeDefinition(definitionName, dropCollection);
  }

  /**
   * list graphs.
   *
   * @return  {Promise<any>} list all the graphs
   */
  async listGraphs(): Promise<any> {
    return this.db.listGraphs();
  }

  /**
   * Deletes the edge with the given documentHandle from the collection.
   *
   * @param {string} collectionName edge collection name
   * @param  {string} documentHandle The handle of the edge to retrieve.
   * This can be either the _id or the _key of an edge in the collection,
   * or an edge (i.e. an object with an _id or _key property).
   * @return  {Object} removed Edge
   */
  async removeEdge(collectionName: string, documentHandle: string): Promise<any> {
    if (_.isNil(collectionName)) {
      throw new Error('missing edge collection name');
    }
    if (_.isNil(documentHandle)) {
      throw new Error('missing document handle');
    }
    const collection = this.graph.edgeCollection(collectionName);
    return collection.remove(documentHandle);
  }
}
