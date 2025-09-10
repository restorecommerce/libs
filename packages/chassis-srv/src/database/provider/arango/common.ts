import * as _ from 'lodash';
import Long from 'long';

/**
 * Ensure that the collection exists and process the query
 * @param {Object} db arangodb connection
 * @param {string} collectionName collection name
 * @param {string} query query string
 * @param {Object} args list of arguments, optional
 * @return {Promise} arangojs query result
 */
export const query = async (db: any, collectionName: string, query: string | any,
  args?: object): Promise<any> => {
  const collection = db.collection(collectionName);
  const collectionExists = await collection.exists();
  try {
    if (!collectionExists) {
      await collection.create();
    }
  } catch(err) {
    if (err.message && err.message.indexOf('duplicate name') == -1) {
      throw err;
    }
  }
  return await db.query(query, args);
};

/**
 * Convert id to arangodb friendly key.
 * @param {string} id document identification
 * @return {any} arangodb friendly key
 */
export const idToKey = (id: string): any => {
  return id.replace(/\//g, '_');
};

/**
 * Ensure that the _key exists.
 * @param {Object} document Document template.
 * @return {any} Clone of the document with the _key field set.
 */
const ensureKey = (document: any): any => {
  const doc = _.clone(document);
  if (_.has(doc, '_key')) {
    return doc;
  }
  const id = (doc as any).id;
  if (id) {
    _.set(doc, '_key', idToKey(id));
  }
  return doc;
};

const ensureDatatypes = (document: any): any => {
  const doc = _.clone(document);
  const keys = _.keys(doc);
  for (const key of keys) {
    if (Long.isLong(doc[key])) {
      doc[key] = (doc[key] as Long).toNumber();
    }
  }
  return doc;
};

/**
 * Remove arangodb specific fields.
 * @param {Object} document A document returned from arangodb.
 * @return {Object} A clone of the document without arangodb specific fields.
 */
export const sanitizeOutputFields = (document: object): object => {
  const doc = _.clone(document);
  _.unset(doc, '_id');
  _.unset(doc, '_key');
  _.unset(doc, '_rev');
  return doc;
};

export const sanitizeInputFields = (document: any): any => {
  const doc = ensureDatatypes(document);
  return ensureKey(doc);
};

/**
 * Auto-casting reference value by using native function of arangoDB
 *
 * @param {string} key
 * @param {object} value - raw value optional
 * @return {object} interpreted value
 */
export const autoCastKey = (key: any, value?: any): any => {
  if (_.isDate(value)) { // Date
    return `DATE_TIMESTAMP(node.${key})`;
  }
  return 'node.' + key;
};

/**
 * Auto-casting raw data
 *
 * @param {object} value - raw value
 * @returns {any} interpreted value
 */
export const autoCastValue = (value: any): any => {
  if (_.isArray(value)) {
    return value.map(value => value.toString());
  }
  if (_.isString(value)) { // String
    return value;
  }
  if (_.isBoolean(value)) { // Boolean
    return Boolean(value);
  }
  if (_.isNumber(value)) {
    return _.toNumber(value);
  }
  if (Long.isLong(value)) {
    return (value as Long).toNumber();
  }
  if (_.isDate(value)) { // Date
    return new Date(value);
  }
  return value;
};

/**
 * Links children of filter together via a comparision operator.
 * @param {any} filter
 * @param {string} op comparision operator
 * @param {number} index to keep track of bind variables
 * @param {any} bindVarsMap mapping of keys to values for bind variables
 * @return {any} query template string and bind variables
 */

export const buildComparison = (filter: any, op: string, index: number,
  bindVarsMap: any): any => {
  const ele = _.map(filter, (e) => {
    if (!_.isArray(e)) {
      e = [e];
    }
    e = buildFilter(e, index, bindVarsMap);  
    index += 1;
    return e.q;
  });

  let q = '( ';
  for (let i = 0; i < ele.length; i += 1) {
    if (i == ele.length - 1) {
      q = `${q}  ${ele[i]} )`;
    } else {
      q = `${q}  ${ele[i]} ${op} `;
    }
  }
  return { q, bindVarsMap };
};

/**
 * Creates a filter key, value.
 * When the value is a string, boolean, number or date a equal comparision is created.
 * Otherwise if the key corresponds to a known operator, the operator is constructed.
 * @param {string} key
 * @param {string|boolean|number|date|object} value
 * @param {number} index to keep track of bind variables
 * @param {any} bindVarsMap mapping of keys to values for bind variables
 * @return {String} query template string
 */
export const buildField = (key: any, value: any, index: number, bindVarsMap: any): string => {
  const bindValueVar = `@value${index}`;
  const bindValueVarWithOutPrefix = `value${index}`;
  if (_.isString(value) || _.isBoolean(value) || _.isNumber(value || _.isDate(value))) {
    bindVarsMap[bindValueVarWithOutPrefix] = autoCastValue(value);
    return autoCastKey(key, value) + ' == ' + bindValueVar;
  }
  if (!_.isNil(value.$eq)) {
    bindVarsMap[bindValueVarWithOutPrefix] = autoCastValue(value.$eq);
    return autoCastKey(key, value) + ' == ' + bindValueVar;
  }
  if (value.$gt) {
    bindVarsMap[bindValueVarWithOutPrefix] = autoCastValue(value.$gt);
    return autoCastKey(key, value) + ' > ' + bindValueVar;
  }
  if (value.$gte) {
    bindVarsMap[bindValueVarWithOutPrefix] = autoCastValue(value.$gte);
    return autoCastKey(key, value) + ' >= ' + bindValueVar;
  }
  if (value.$lt) {
    bindVarsMap[bindValueVarWithOutPrefix] = autoCastValue(value.$lt);
    return autoCastKey(key, value) + ' < ' + bindValueVar;
  }
  if (value.$lte) {
    bindVarsMap[bindValueVarWithOutPrefix] = autoCastValue(value.$lte);
    return autoCastKey(key, value) + ' <= ' + bindValueVar;
  }
  if (!_.isNil(value.$ne)) {
    bindVarsMap[bindValueVarWithOutPrefix] = autoCastValue(value.$ne);
    return autoCastKey(key, value) + ' != ' + bindValueVar;
  }
  if (value.$inVal) {
    bindVarsMap[bindValueVarWithOutPrefix] = autoCastValue(value.$inVal);
    return bindValueVar + ' IN ' + autoCastKey(key, value);
  }
  if (value.$in) {
    bindVarsMap[bindValueVarWithOutPrefix] = autoCastValue(value.$in);
    if (_.isString(value.$in)) {
      // if it is a field which should be an array
      // (useful for querying within a document list-like attributen
      return bindValueVar + ' IN ' + autoCastKey(key);
    }
    // assuming it is a list of provided values
    return autoCastKey(key, value) + ' IN ' + bindValueVar;
  }
  if (value.$nin) {
    bindVarsMap[bindValueVarWithOutPrefix] = autoCastValue(value.$nin);
    return autoCastKey(key, value) + ' NOT IN ' + bindValueVar;
  }
  if (value.$iLike) {
    bindVarsMap[bindValueVarWithOutPrefix] = autoCastValue(value.$iLike);
    // @param 'true' is for case insensitive
    return ' LIKE (' + autoCastKey(key, value) + ',' + bindValueVar + ', true)';
  }
  if (!_.isNil(value.$not)) {
    const temp = buildField(key, value.$not, index, bindVarsMap);
    return `!(${temp})`;
  }
  if (_.has(value, '$isEmpty')) {
    bindVarsMap[bindValueVarWithOutPrefix] = autoCastValue('');
    // will always search for an empty string
    return autoCastKey(key, '') + ' == ' + bindValueVar;
  }
  if (!_.isNil((value as any).$startswith)) {
    const bindValueVar1 = `@value${index + 1}`;
    const bindValueVarWithOutPrefix1 = `value${index + 1}`;
    const k = autoCastKey(key);
    const v = autoCastValue((value as any).$startswith);
    bindVarsMap[bindValueVarWithOutPrefix] = v;
    bindVarsMap[bindValueVarWithOutPrefix1] = v;
    return `LEFT(${k}, LENGTH(${bindValueVar})) == ${bindValueVar1}`;
  }
  if (!_.isNil((value as any).$endswith)) {
    const bindValueVar1 = `@value${index + 1}`;
    const bindValueVarWithOutPrefix1 = `value${index + 1}`;
    const k = autoCastKey(key);
    const v = autoCastValue((value as any).$endswith);
    bindVarsMap[bindValueVarWithOutPrefix] = v;
    bindVarsMap[bindValueVarWithOutPrefix1] = v;
    return `RIGHT(${k}, LENGTH(${bindValueVar})) == ${bindValueVar1}`;
  }
  throw new Error(`unsupported operator ${_.keys(value)} in ${key}`);
};

/**
 * Build ArangoDB query based on filter.
 * @param {Object} filter key, value tree object.
 * @param {number} index to keep track of bind variables
 * @param {any} bindVarsMap mapping of keys to values for bind variables
 * @return {any} query template string and bind variables
 */
export const buildFilter = (filter: any, index?: number, bindVarsMap?: any): any => {
  if (!index) {
    index = 0;
  }
  if (!bindVarsMap) {
    bindVarsMap = {};
  }
  if (filter.length > 0) {
    let q: any = '';
    let multipleFilters = false;
    for (const eachFilter of filter) {
      _.forEach(eachFilter, (value, key) => {
        switch (key) {
          case '$or':
            if (!multipleFilters) {
              if (_.isEmpty(value)) {
                q = true;
              } else {
                q = buildComparison(value, '||', index, bindVarsMap).q;
              }

              multipleFilters = true;
              // since there is a possiblility for recursive call from buildComparision to buildFilter again.
              index += 1;
            } else {
              q = q + '&& ' + buildComparison(value, '||', index, bindVarsMap).q;
              index += 1;
            }
            break;
          case '$and':
            if (!multipleFilters) {
              if (_.isEmpty(value)) {
                q = false;
              } else {
                q = buildComparison(value, '&&', index, bindVarsMap).q;
              }
              multipleFilters = true;
              index += 1;
            } else {
              q = q + '&& ' + buildComparison(value, '&&', index, bindVarsMap).q;
              index += 1;
            }
            break;
          default:
            if (_.startsWith(key, '$')) {
              throw new Error(`unsupported query operator ${key}`);
            }
            if (!multipleFilters) {
              q = buildField(key, value, index, bindVarsMap);
              multipleFilters = true;
              index += 1;
            } else {
              q = q + ' && ' + buildField(key, value, index, bindVarsMap);
              index += 1;
            }
            break;
        }
      });
    }
    return { q, bindVarsMap };
  }
};

/**
 * Build count and offset filters.
 * @param {Object} options query options
 * @return {String} template query string
 */
export const buildLimiter = (options: any): string => {
  // LIMIT count
  // LIMIT offset, count
  if (!_.isNil(options.limit)) {
    if (!_.isNil(options.offset)) {
      return `LIMIT @offset, @limit`;
    }
    return `LIMIT @limit`;
  }
  return '';
};

/**
 * Build sort filter.
 * @param {Object} options query options
 * @param {number} index to keep track of bind variables
 * @param {any} bindVarsMap Object containing bind key to values
 * @return {any} template query string and bind variables Object
 */
export const buildSorter = (options: any, index?: number, bindVarsMap?: any): any => {
  if (_.isNil(options.sort) || _.isEmpty(options.sort)) {
    return '';
  }

  if (!index) {
    index = 0;
  }
  if (!bindVarsMap) {
    bindVarsMap = {};
  }

  const sort = _.mapKeys(options.sort, (value, key) => {
    return autoCastKey(key);
  });
  let sortKeysOrder = '';
  let i = 1;
  const objLength = Object.keys(sort).length;
  for (const key in sort) {
    if (objLength == i) {
      // Do not append ',' for the last element
      sortKeysOrder = `${sortKeysOrder} ${key} ${sort[key]} `;
    } else {
      sortKeysOrder = `${sortKeysOrder} ${key} ${sort[key]},`;
    }
    i += 1;
  }
  return 'SORT ' + sortKeysOrder;
};

export const buildReturn = (options: any): any => {
  let excludeIndex = 0;
  let includeIndex = 0;
  const bindVarsMap = {};
  let q = '';
  if (_.isNil(options.fields) || _.isEmpty(options.fields)) {
    return { q, bindVarsMap };
  }
  const keep = [];
  const exclude = [];
  _.forEach(options.fields, (value, key) => {
    switch (value) {
      case 0:
        bindVarsMap[`exclude${excludeIndex}`] = key;
        exclude.push(`@exclude${excludeIndex}`);
        excludeIndex += 1;
        break;
      case 1:
      default:
        bindVarsMap[`include${includeIndex}`] = key;
        keep.push(`@include${includeIndex}`);
        includeIndex += 1;
    }
  });
  if (keep.length > 0) {
    const include = _.join(_.map(keep, (e) => { return e; }));
    q = `RETURN KEEP( node, ${include} )`;
    return { q, bindVarsMap };
  }
  if (exclude.length > 0) {
    const unset = _.join(_.map(exclude, (e) => { return e; }));
    q = `RETURN UNSET( node, ${unset} )`;
    return { q, bindVarsMap };
  }
  q = 'RETURN result';
  return { q, bindVarsMap };
};

export const encodeMessage = (object: object) => {
  return Buffer.from(JSON.stringify(object));
};
