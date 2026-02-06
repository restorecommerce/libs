import {
  clone, isArray, isString, isDate, isBoolean, isNumber, keys, isNullish, isEmptyish, startsWith,
  forEachObj,
  mapKeys,
  join
} from 'remeda';
import Long from 'long';

/**
 * Ensure that the collection exists and process the query
 * @param {Object} db arangodb connection
 * @param {string} collectionName collection name
 * @param {string} query query string
 * @param {Object} args list of arguments, optional
 * @return {Promise} arangojs query result
 */
export const query = async (
  db: any,
  collectionName: string,
  query: string | any,
  args?: object
): Promise<any> => {
  const collection = db.collection(collectionName);
  const collectionExists = await collection.exists();
  if (!collectionExists) {
    await collection.create();
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
  const doc = clone(document);
  if ('_key' in doc) {
    return doc;
  }
  const id = (doc as any).id;
  if (id) {
    doc['_key'] = idToKey(id);
  }
  return doc;
};

const ensureDatatypes = (document: any): any => {
  const doc = clone(document);
  for (const key of keys(doc)) {
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
  const doc: any = clone(document);
  delete doc['_id'];
  delete doc['_key'];
  delete doc['_rev'];
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
  if (isDate(value)) { // Date
    return `DATE_TIMESTAMP(node.${key})`;
  }
  else if (key === 'id') {
    return `node._key`;
  }
  return `node.${key}`;
};

/**
 * Auto-casting raw data
 *
 * @param {object} value - raw value
 * @returns {any} interpreted value
 */
export const autoCastValue = (key: string, value: any): any => {
  if (isArray(value)) {
    return value.map((value: any) => key === 'id' ? idToKey(value) : value?.toString());
  }
  if (isString(value)) { // String
    return key === 'id' ? idToKey(value) : value?.toString();
  }
  if (isBoolean(value)) { // Boolean
    return Boolean(value);
  }
  if (isNumber(value)) {
    return Number(value);
  }
  if (Long.isLong(value)) {
    return (value as Long)?.toNumber();
  }
  if (isDate(value)) { // Date
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
  const ele = filter.map((e: any) => {
    if (!isArray(e)) {
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
  if (isString(value) || isBoolean(value) || isNumber(value) || isDate(value)) {
    bindVarsMap[bindValueVarWithOutPrefix] = autoCastValue(key, value);
    return autoCastKey(key, value) + ' == ' + bindValueVar;
  }
  if (value?.$eq) {
    bindVarsMap[bindValueVarWithOutPrefix] = autoCastValue(key, value.$eq);
    return autoCastKey(key, value) + ' == ' + bindValueVar;
  }
  if (value?.$gt) {
    bindVarsMap[bindValueVarWithOutPrefix] = autoCastValue(key, value.$gt);
    return autoCastKey(key, value) + ' > ' + bindValueVar;
  }
  if (value?.$gte) {
    bindVarsMap[bindValueVarWithOutPrefix] = autoCastValue(key, value.$gte);
    return autoCastKey(key, value) + ' >= ' + bindValueVar;
  }
  if (value?.$lt) {
    bindVarsMap[bindValueVarWithOutPrefix] = autoCastValue(key, value.$lt);
    return autoCastKey(key, value) + ' < ' + bindValueVar;
  }
  if (value?.$lte) {
    bindVarsMap[bindValueVarWithOutPrefix] = autoCastValue(key, value.$lte);
    return autoCastKey(key, value) + ' <= ' + bindValueVar;
  }
  if (value?.$ne) {
    bindVarsMap[bindValueVarWithOutPrefix] = autoCastValue(key, value.$ne);
    return autoCastKey(key, value) + ' != ' + bindValueVar;
  }
  if (value?.$inVal) {
    bindVarsMap[bindValueVarWithOutPrefix] = autoCastValue(key, value.$inVal);
    return bindValueVar + ' IN ' + autoCastKey(key, value);
  }
  if (value?.$in) {
    bindVarsMap[bindValueVarWithOutPrefix] = autoCastValue(key, value.$in);
    if (isString(value.$in)) {
      // if it is a field which should be an array
      // (useful for querying within a document list-like attributen
      return bindValueVar + ' IN ' + autoCastKey(key);
    }
    // assuming it is a list of provided values
    return autoCastKey(key, value) + ' IN ' + bindValueVar;
  }
  if (value?.$nin) {
    bindVarsMap[bindValueVarWithOutPrefix] = autoCastValue(key, value.$nin);
    return autoCastKey(key, value) + ' NOT IN ' + bindValueVar;
  }
  if (value?.$iLike) {
    bindVarsMap[bindValueVarWithOutPrefix] = autoCastValue(key, value.$iLike);
    // @param 'true' is for case insensitive
    return ' LIKE (' + autoCastKey(key, value) + ',' + bindValueVar + ', true)';
  }
  if (value?.$not) {
    const temp = buildField(key, value.$not, index, bindVarsMap);
    return `!(${temp})`;
  }
  if ('$isEmpty' in value) {
    bindVarsMap[bindValueVarWithOutPrefix] = autoCastValue(key, '');
    // will always search for an empty string
    return autoCastKey(key, '') + ' == ' + bindValueVar;
  }
  if (value?.$startswith) {
    const bindValueVar1 = `@value${index + 1}`;
    const bindValueVarWithOutPrefix1 = `value${index + 1}`;
    const k = autoCastKey(key);
    const v = autoCastValue(key, (value as any).$startswith);
    bindVarsMap[bindValueVarWithOutPrefix] = v;
    bindVarsMap[bindValueVarWithOutPrefix1] = v;
    return `LEFT(${k}, LENGTH(${bindValueVar})) == ${bindValueVar1}`;
  }
  if (value?.$endswith) {
    const bindValueVar1 = `@value${index + 1}`;
    const bindValueVarWithOutPrefix1 = `value${index + 1}`;
    const k = autoCastKey(key);
    const v = autoCastValue(key, (value as any).$endswith);
    bindVarsMap[bindValueVarWithOutPrefix] = v;
    bindVarsMap[bindValueVarWithOutPrefix1] = v;
    return `RIGHT(${k}, LENGTH(${bindValueVar})) == ${bindValueVar1}`;
  }
  throw new Error(`unsupported operator ${keys(value)} in ${key}`);
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
      forEachObj(eachFilter, (value, key) => {
        switch (key) {
          case '$or':
            if (!multipleFilters) {
              if (isEmptyish(value)) {
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
              if (isEmptyish(value)) {
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
            if (startsWith(key, '$')) {
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
  if (!isNullish(options.limit)) {
    if (!isNullish(options.offset)) {
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
  if (isNullish(options.sort) || isEmptyish(options.sort)) {
    return '';
  }

  const sort = mapKeys(options.sort, (key, value) => {
    return autoCastKey(key);
  });
  const sortKeysOrder = Object.entries(sort).map(
    ([key, value]) => `${key} ${value}`
  ).join(' ');
  return 'SORT ' + sortKeysOrder;
};

export const buildReturn = (options: any): any => {
  let excludeIndex = 0;
  let includeIndex = 0;
  const bindVarsMap: Record<string, any> = {};
  let q = '';
  if (isNullish(options.fields) || isEmptyish(options.fields)) {
    return { q, bindVarsMap };
  }
  const keep: any[] = [];
  const exclude: any[] = [];
  forEachObj(options.fields, (value, key) => {
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
    const include = join(keep.map((e) => { return e; }), ',');
    q = `RETURN KEEP( node, ${include} )`;
    return { q, bindVarsMap };
  }
  if (exclude.length > 0) {
    const unset = join(exclude.map((e) => { return e; }), ',');
    q = `RETURN UNSET( node, ${unset} )`;
    return { q, bindVarsMap };
  }
  q = 'RETURN result';
  return { q, bindVarsMap };
};

export const encodeMessage = (object: object) => {
  return Buffer.from(JSON.stringify(object));
};
