import { Database, aql } from 'arangojs';
import {isNullish, isEmptyish, isString, merge, clone, forEach} from 'remeda';
import {
  buildFilter, buildSorter, buildLimiter, buildReturn,
  sanitizeInputFields, query, sanitizeOutputFields,
  idToKey
} from './common.js';
import { DatabaseProvider } from '../../index.js';
import { ArangoDocument, CustomQuery, ViewAnalyzerOptions, ViewMap } from './interface.js';
import { type Logger } from '@restorecommerce/logger';
import { LoggedError, toArray } from './utils.js';

/**
 * ArangoDB database provider.
 */
export class Arango implements DatabaseProvider {
  public readonly customQueries = new Map<string, CustomQuery>();
  public readonly collectionNameAnalyzerMap = new Map<string, ViewMap>();
  /**
   *
   * @param {Object} conn Arangojs database connection.
   */
  constructor(
    public readonly db: Database,
    public readonly logger?: Logger,
  ) {}

  /**
   * Find documents based on filter.
   *
   * @param  {String} collectionName Collection name
   * @param  {Object} filter     Key, value Object
   * @param  {Object} options     options.limit, options.offset
   * @return {Promise<any>}  Promise for list of found documents.
   */
  async find(collectionName: string, filter?: any, options?: any): Promise<any> {
    if (isNullish(collectionName)
      || !isString(collectionName)
      || isEmptyish(collectionName)
    ) {
      throw new LoggedError(this.logger, 'invalid or missing collection argument for find operation');
    }

    let filterQuery: any = filter ?? {};
    const opts = options ?? {};
    let filterResult: any;

    const customFilters = new Array<string>();
    // checking if a custom query should be used
    if (!isEmptyish(opts.customQueries)) {
      for (const queryName of opts.customQueries) {
        if (!this.customQueries.has(queryName)) {
          throw new LoggedError(this.logger, `custom query ${query} not found`);
        }
        const customQuery = this.customQueries.get(queryName);
        if (customQuery.type === 'query') {
          // standalone query
          const result = await query(this.db, collectionName, customQuery.code, opts.customArguments || {}); // Cursor object
          return result.all(); // TODO: paginate
        } else {
          // filter
          customFilters.push(customQuery.code);
        }
      }
    }

    if (isEmptyish(filterQuery)) {
      filterQuery = true;
    }
    else {
      filterQuery = toArray(filterQuery);
      filterResult = buildFilter(filterQuery);
      filterQuery = filterResult.q;
    }

    // if search options are set build search query
    const searchQueries = new Array<string>();
    if (opts?.search?.search && this.collectionNameAnalyzerMap && this.collectionNameAnalyzerMap.get(collectionName)) {
      const searchString = JSON.stringify(options.search.search);
      const searchFields = (options?.search?.fields?.length > 0) ? options.search.fields : this.collectionNameAnalyzerMap.get(collectionName).fields;
      const similarityThreshold = this.collectionNameAnalyzerMap.get(collectionName).similarityThreshold;
      const viewName = this.collectionNameAnalyzerMap.get(collectionName).viewName;
      const caseSensitive = options?.search?.case_sensitive;
      const analyzerOptions: any[] = this.collectionNameAnalyzerMap.get(collectionName).analyzerOptions;
      const analyzerName = JSON.stringify(analyzerOptions.flatMap(
        (opt: any) => Object.entries<any>(opt)
      ).find(([k, v]) => caseSensitive ? v?.type === 'ngram' : v?.type === 'pipeline')[0]);

      for (const field of searchFields) {
        searchQueries.push(`NGRAM_MATCH(node.${field}, ${searchString}, ${similarityThreshold}, ${analyzerName})`);
      }
      // override collection name with view name
      collectionName = viewName;
    } else {
      this.logger?.info(`View and analyzer configuration data not set for ${collectionName} and hence ignoring search string`);
    }
    
    // override sortQuery (to rank based on score for frequency search match - term frequency–inverse document frequency algorithm TF-IDF)
    const sortQuery = isEmptyish(searchQueries) ? buildSorter(opts) : `SORT TFIDF(node) DESC`;
    const limitQuery = buildLimiter(opts);
    const returnResult = buildReturn(opts);
    const returnQuery = isEmptyish(returnResult?.q) ? 'RETURN node' : returnResult.q;
    const queryStrings = ['FOR node IN @@collection'];
    if (!isEmptyish(searchQueries)) {
      queryStrings.push(`SEARCH ${searchQueries.join(' OR ')}`);
    }
    queryStrings.push(`FILTER ${filterQuery}`);
    queryStrings.push(...customFilters);
    queryStrings.push(sortQuery, limitQuery, returnQuery);

    const bindVars = {
      '@collection': collectionName,
      ...filterResult?.bindVarsMap,
      ...returnResult?.bindVarsMap,
    }
    if (!isNullish(opts.limit)) {
      bindVars.limit = opts.limit;
    }
    if (!isNullish(opts.offset)) {
      bindVars.offset = opts.offset;
    }
    if (!isEmptyish(customFilters) && opts.customArguments) {
      bindVars.customArguments = opts.customArguments;
    }
    const queryString = queryStrings.filter(s => !isEmptyish(s)).join(' ');
    this.logger.info(queryString);
    const res = searchQueries
      ? await this.db.query(queryString, bindVars)
      : await query(this.db, collectionName, queryString, bindVars);
    const docs = await res.all(); // TODO: paginate
    return docs.map(sanitizeOutputFields);
  }

  /**
   * Find documents by id (_key).
   *
   * @param  {String} collection Collection name
   * @param  {String|array.String} ids  A single ID or multiple IDs.
   * @return {Promise<any>} A list of found documents.
   */
  async findByID(collectionName: string, ids: string | string[]): Promise<any> {
    if (isNullish(collectionName) || !isString(collectionName) ||
      isEmptyish(collectionName)) {
      throw new LoggedError(this.logger, 'invalid or missing collection argument for findByID operation');
    }

    if (isNullish(ids)) {
      throw new LoggedError(this.logger, 'invalid or missing ids argument for findByID operation');
    }
    if (!Array.isArray(ids)) {
      ids = [ids as string];
    }
    const filter = (ids as string[]).map((id) => {
      return { id };
    });

    const filterResult = buildFilter(filter);
    const filterQuery = filterResult.q;
    const varArgs = filterResult.bindVarsMap ?? {};
    const queryString = `FOR node IN @@collection FILTER ${filterQuery} RETURN node`;
    const bindVars = Object.assign({
      '@collection': collectionName
    }, varArgs);
    const res = await query(this.db, collectionName, queryString, bindVars);
    const docs = await res.all();
    return docs.map(sanitizeOutputFields);
  }

  /**
   * retreive the documents including the document handlers (_key, _id and _rev).
   *
   * @param  {String} collectionName Collection name
   * @param  {any} collection Collection Object
   * @param  {ArangoDocument | ArangoDocument[]} documents list of documents
   * @param  {string[]} idsArray list of document ids
   * @returns  {Promise<ArangoDocument[]>} A list of documents including the document handlers
   */
  async getDocumentHandlers(
    collectionName: string,
    collection: any,
    documents: ArangoDocument | ArangoDocument[],
    idsArray?: string[]
  ): Promise<ArangoDocument[]> {
    const ids = idsArray ?? toArray(documents)?.map(doc => doc.id);
    const queryString = aql`FOR node IN ${collection} FILTER node.id IN ${ids} LIMIT ${ids.length} RETURN node`;
    const res = await query(this.db, collectionName, queryString);
    const docsWithSelector = await res.all();
    return docsWithSelector;
  }

  /**
   * Find documents by filter and updates them with document.
   *
   * @param  {String} collection Collection name
   * @param  {Object} updateDocuments  List of documents to update
   */
  async update(collectionName: string, updateDocuments: any): Promise<any> {
    const documents = clone(updateDocuments) as ArangoDocument;
    const updateDocsResponse = [];
    if (isNullish(collectionName) ||
      !isString(collectionName) || isEmptyish(collectionName)) {
      throw new LoggedError(this.logger, 'invalid or missing collection argument for update operation');
    }
    if (isNullish(documents)) {
      throw new LoggedError(this.logger, 'invalid or missing document argument for update operation');
    }
    const collection = this.db.collection(collectionName);
    const collectionExists = await collection.exists();
    if (!collectionExists) {
      throw new LoggedError(this.logger, `Collection ${collectionName} does not exist for update operation`);
    }
    if (!Array.isArray(documents)) {
      throw new LoggedError(this.logger, `Documents should be list for update operation`);
    }
    const docsWithHandlers = await this.getDocumentHandlers(collectionName, collection, documents);

    // update _key for the input documents
    for (const document of documents) {
      let foundInDB = false;
      for (const docWithHandler of docsWithHandlers) {
        if (docWithHandler.id === document.id) {
          foundInDB = true;
          (document as any)._key = docWithHandler._key;
          break;
        }
      }
      if (!foundInDB) {
        // if document is not found in DB use the id itself as _key
        // this key will return an array in response since it does not exist
        document._key = idToKey(document.id);
      }
    }

    const updatedDocs = await collection.updateAll(documents as any, { returnNew: true });
    for (const doc of updatedDocs) {
      if ('new' in doc) {
        updateDocsResponse.push(sanitizeOutputFields(doc?.new));
      } else {
        updateDocsResponse.push(doc);
      }
    }
    return updateDocsResponse;
  }

  /**
   * Find each document based on it's key and update it.
   * If the document does not exist it will be created.
   *
   * @param  {String} collectionName Collection name
   * @param {Object|Array.Object} documents
   */
  async upsert(collectionName: string, documents: any): Promise<any> {
    if (isNullish(collectionName) ||
      !isString(collectionName) || isEmptyish(collectionName)) {
      throw new LoggedError(this.logger, 'invalid or missing collection argument for upsert operation');
    }
    if (isNullish(documents)) {
      throw new LoggedError(this.logger, 'invalid or missing documents argument for upsert operation');
    }
    let docs = clone(documents);
    if (!Array.isArray(documents)) {
      docs = [documents];
    }
    forEach(docs, (document, i) => {
      docs[i] = sanitizeInputFields(document);
    });
    const upsertResponse = [];
    const collection = this.db.collection(collectionName);
    const collectionExists = await collection.exists();
    if (!collectionExists) {
      throw new LoggedError(this.logger, `Collection ${collectionName} does not exist for upsert operation`);
    }
    let upsertedDocs = await collection.saveAll(docs, { returnNew: true, overwriteMode: 'update' });
    if (!Array.isArray(upsertedDocs)) {
      upsertedDocs = [upsertedDocs];
    }
    for (const doc of upsertedDocs) {
      if ('new' in doc) {
        upsertResponse.push(sanitizeOutputFields(doc.new));
      } else {
        upsertResponse.push(doc);
      }
    }
    return upsertResponse;
  }

  /**
   * Delete all documents with provided identifiers ids.
   *
   * @param  {String} collection Collection name
   * @param  {Object} ids list of document identifiers
   * @return  {Promise<any>} delete response
   */
  async delete(collectionName: string, ids: string[]): Promise<any> {
    if (isNullish(collectionName) ||
      !isString(collectionName) || isEmptyish(collectionName)) {
      throw new LoggedError(this.logger, 'invalid or missing collection argument');
    }
    if (isNullish(ids) || isEmptyish(ids)) {
      throw new LoggedError(this.logger, 'invalid or missing document IDs argument for delete operation');
    }
    const collection = this.db.collection(collectionName);
    const collectionExists = await collection.exists();
    if (!collectionExists) {
      throw new LoggedError(this.logger, `Collection ${collectionName} does not exist for delete operation`);
    }

    // retreive _key for the give ids
    const docsWithHandlers = await this.getDocumentHandlers(collectionName, collection, undefined, ids);
    for (const id of ids) {
      // check if given id is present in docsWithHandlers
      let foundDocInDB = false;
      for (const doc of docsWithHandlers) {
        if (doc.id === id) {
          foundDocInDB = true;
          break;
        }
      }
      // if document is not found in DB use the id itself as _key
      // this key will return an array in response since it does not exist
      if (!foundDocInDB) {
        docsWithHandlers.push({ _key: id });
      }
    }
    const deleteHandlerIds = docsWithHandlers.map((doc: any) => doc._key);
    return collection.removeAll(deleteHandlerIds);
  }

  /**
   * Count all documents selected by filter.
   *
   * @param  {String} collection Collection name
   * @param  {Object} filter
   */
  async count(collectionName: string, filter: any): Promise<any> {
    if (isNullish(collectionName) ||
      !isString(collectionName) || isEmptyish(collectionName)) {
      throw new LoggedError(this.logger, 'invalid or missing collection argument for count operation');
    }
    let filterQuery: any = filter || {};
    let filterResult: any;
    if (!Array.isArray(filterQuery)) {
      filterQuery = [filterQuery];
    }

    if (isEmptyish(filterQuery[0])) {
      filterQuery = true;
    }
    else {
      filterResult = buildFilter(filterQuery);
      filterQuery = filterResult.q;
    }

    let varArgs = {};
    if (filterResult && filterResult.bindVarsMap) {
      varArgs = filterResult.bindVarsMap;
    }
    const queryString = `FOR node IN @@collection FILTER ${filterQuery} COLLECT WITH COUNT
      INTO length RETURN length`;
    const bindVars = Object.assign({
      '@collection': collectionName
    }, varArgs);

    const res = await query(this.db, collectionName, queryString, bindVars);
    const nn = await res.all();
    return nn[0];
  }

  /**
   * When calling without a collection name,
   * delete all documents in all collections in the database.
   * When providing a collection name,
   * delete all documents in specified collection in the database.
   * @param [string] collection Collection name.
   */
  async truncate(collection: string): Promise<any> {
    if (isNullish(collection)) {
      const collections = await this.db.collections();
      for (let i = 0; i < collections.length; i += 1) {
        const c = this.db.collection(collections[i].name);
        await c.truncate();
      }
    } else {
      const c = this.db.collection(collection);
      await c.truncate();
    }
  }

  /**
   * Drop view
   * @param string[] list of view names.
   */
  async dropView(viewName: string[]): Promise<any> {
    const dropViewResponse = [];
    if (viewName.length > 0) {
      for (const view of viewName) {
        try {
          const response = await this.db.view(view).drop();
          this.logger?.info(`View ${view} dropped successfully`, response);
          if (response === true) {
            dropViewResponse.push({ id: view, code: 200, message: `View ${view} dropped successfully` });
          }
        } catch (err: any) {
          this.logger?.error(`Error dropping View ${view}`, { code: err.code, message: err.message, stack: err.stack });
          dropViewResponse.push({ id: view, code: err.code, message: err.message });
        }
      }
    }
    return dropViewResponse;
  }

  /**
   * Delete Analyzer
   * @param string[] list of analyzer names.
   */
  async deleteAnalyzer(analyzerName: string[]): Promise<any> {
    const deleteResponse = [];
    if (analyzerName.length > 0) {
      for (const analyzer of analyzerName) {
        try {
          const response = await this.db.analyzer(analyzer).drop();
          this.logger?.info(`Analyzer ${analyzer} deleted successfully`, response);
          if (response.code === 200 && response.error === false) {
            deleteResponse.push({ id: analyzer, code: response.code, message: `Analyzer ${analyzer} deleted successfully` });
          }
        } catch (err: any) {
          this.logger?.error(`Error deleting analyzer ${analyzer}`, { code: err.code, message: err.message, stack: err.stack });
          deleteResponse.push({ id: analyzer, code: err.code, message: err.message });
        }
      }
    }
    return deleteResponse;
  }

  /**
   * Insert documents into database.
   *
   * @param  {String} collection Collection name
   * @param  {Object|array.Object} documents  A single or multiple documents.
   */
  async insert(collectionName: string, documents: any): Promise<any> {
    if (isNullish(collectionName) || !isString(collectionName) || isEmptyish(collectionName)) {
      throw new LoggedError(this.logger, 'invalid or missing collection argument for insert operation');
    }
    if (isNullish(documents)) {
      throw new LoggedError(this.logger, 'invalid or missing documents argument for insert operation');
    }
    let docs = clone(documents);
    if (!Array.isArray(documents)) {
      docs = [documents];
    }
    forEach(docs, (document, i) => {
      docs[i] = sanitizeInputFields(document);
    });
    const collection = this.db.collection(collectionName);
    const collectionExists = await collection.exists();
    if (!collectionExists) {
      await collection.create();
    }
    const insertResponse = [];
    let createdDocs = await collection.saveAll(docs, { returnNew: true });
    if (!Array.isArray(createdDocs)) {
      createdDocs = [createdDocs];
    }
    for (const doc of createdDocs) {
      if ('new' in doc) {
        insertResponse.push(sanitizeOutputFields(doc.new));
      } else {
        insertResponse.push(doc);
      }
    }
    return insertResponse;
  }

  /**
   * Registers a custom AQL query.
   *
   * @param script
   * @param name
   */
  // @ts-expect-error TS2416
  registerCustomQuery(name: string, script: string, type: 'filter' | 'query'): void {
    this.customQueries.set(name, {
      code: script,
      type
    });
  }

  /**
   * Unregisters a custom query.
   * @param name
   */
  unregisterCustomQuery(name: string): void {
    if (!this.customQueries.has(name)) {
      throw new LoggedError(this.logger, 'custom function not found');
    }
    this.customQueries.delete(name);
  }

  listCustomQueries(): Array<any> {
    return [...this.customQueries];
  }

  async createAnalyzerAndView(viewConfig: ViewAnalyzerOptions, collectionName: string): Promise<void> {
    if (!viewConfig.view.viewName || !viewConfig?.view?.options) {
      throw new LoggedError(this.logger, `View name or view configuration missing for ${collectionName}`);
    }
    if ((!viewConfig?.analyzers) || (viewConfig.analyzers.length === 0) || !(viewConfig.analyzerOptions)) {
      throw new LoggedError(this.logger, `Analyzer options or configuration missing for ${collectionName}`);
    }
    // create analyzer if it does not exist
    for (const analyzerName of viewConfig.analyzers) {
      const analyzer = this.db.analyzer(analyzerName);
      if (!(await analyzer.exists())) {
        try {
          const analyzerCfg = viewConfig.analyzerOptions.filter((optionsCfg) => Object.keys(optionsCfg)[0] === analyzerName);
          if (analyzerCfg?.length === 1) {
            await analyzer.create(analyzerCfg[0][analyzerName] as any);
            this.logger?.info(`Analyzer ${analyzerName} created successfully`);
          }
        } catch (err: any) {
          this.logger?.error(`Error creating analyzer ${analyzerName}`, { code: err.code, message: err.message, stack: err.stack });
        }
      } else {
        this.logger?.info(`Analyzer ${analyzerName} already exists`);
      }
    }

    // check if collection exits (before creating view)
    const collection = this.db.collection(collectionName);
    const collectionExists = await collection.exists();
    try {
      if (!collectionExists) {
        await collection.create();
        this.logger?.info(`Collection ${collectionName} created successfully`);
      }
    } catch (err: any) {
      if (err.message && err.message.indexOf('duplicate name') == -1) {
        this.logger?.error(`Error creating collection ${collectionName}`, { code: err.code, message: err.message, stack: err.stack });
        throw err;
      }
    }

    // create view if it does not exist
    const view = this.db.view(viewConfig.view.viewName);
    const viewExists = await view.exists();
    if (!viewExists) {
      try {
        await this.db.createView(viewConfig?.view?.viewName, viewConfig?.view?.options);
        this.logger?.info(`View ${viewConfig?.view?.viewName} created successfully`);
      } catch (err: any) {
        this.logger?.error(`Error creating View ${viewConfig?.view?.viewName}`, { code: err.code, message: err.message, stack: err.stack });
      }
    } else {
      this.logger?.info(`View ${viewConfig?.view?.viewName} already exists`);
    }
    // map the collectionName with list of indexed fields, view name, analyzerslist, similarity threshold
    // to be used in find()
    const indexedFields = Object.keys(viewConfig.view.options.links[collectionName].fields);
    this.collectionNameAnalyzerMap.set(collectionName, {
      viewName: viewConfig.view.viewName,
      fields: indexedFields,
      analyzerOptions: viewConfig.analyzerOptions,
      similarityThreshold: viewConfig.view.similarityThreshold
    });
  }
}
