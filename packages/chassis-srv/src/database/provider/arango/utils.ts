import {
  clone,
  isArray,
  find,
  isEmptyish,
  isDate,
  isString,
  isBoolean,
  isNumber,
  isNullish,
  keys,
  forEach, forEachObj,
  startsWith,
  mapKeys,
  isDeepEqual, intersection
} from 'remeda';
import Long from 'long';
import {
  Filters as GraphFilters,
  Options_Direction,
  Options_Direction as Direction,
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/graph.js';

const filterOperationMap = new Map([
  [0, 'eq'],
  [1, 'lt'],
  [2, 'lte'],
  [3, 'gt'],
  [4, 'gte'],
  [5, 'isEmpty'],
  [6, 'iLike'],
  [7, 'in'],
  [8, 'neq']
]);

const filterOperatorMap = new Map([
  [0, 'and'],
  [1, 'or']
]);

/**
 * Takes filter object containing field, operation and value and inserts it
 * to the obj using the operatorList for finding the last operator position and updates obj
 * @param {filter} filter object containing field, operation, value and type
 * @param {obj} obj converted filter object
 * @param {operatorList} operatorList list of operators from original filter object
 */
const convertFilterToObject = (filter: any, obj: any, operatorList: any) => {
  let temp: any[] = obj;
  let value;
  if (!filter.type || filter.type === 'STRING' || filter.type === 0) {
    value = filter.value;
  } else if ((filter.type === 'NUMBER' || filter.type === 1) && !isNaN(filter.value)) {
    value = Number(filter.value);
  } else if (filter.type === 'BOOLEAN' || filter.type === 2) {
    if (filter.value === 'true') {
      value = true;
    } else if (filter.value === 'false') {
      value = false;
    }
  } else if (filter.type === 'ARRAY' || filter.type === 4) {
    try {
      value = JSON.parse(filter.value);
    } catch (err: any) {
      // to handle JSON string parse error
      if (err.message.indexOf('Unexpected token') > -1) {
        value = JSON.parse(JSON.stringify(filter.value));
      } else {
        throw err;
      }
    }
  } else if (filter.type === 'DATE' || filter.type === 3) {
    value = (new Date(filter.value)).getTime();
  }

  for (let i = 0; i < operatorList.length; i++) {
    if (isArray(temp)) {
      temp = find(temp, operatorList[i]);
    } else {
      temp = temp[operatorList[i]];
    }
    if (i === (operatorList.length - 1)) {
      // push for final element in the operatorList array
      if (filter.operation === 'eq' || filter.operation === 0) {
        if (isArray(temp)) {
          temp.push({ [filter.field]: value });
        } else {
          (temp[operatorList[i]] as any).push({ [filter.field]: value });
        }
      } else if (filter.operation === 'neq' || filter.operation === 8) {
        if (isArray(temp)) {
          temp.push({ [filter.field]: { $not: { $eq: value } } });
        } else {
          (temp[operatorList[i]] as any).push({ [filter.field]: { $not: { $eq: value } } });
        }
      } else {
        let opValue;
        if (typeof filter.operation === 'string' || filter.operation instanceof String) {
          opValue = filter.operation;
        } else if (Number.isInteger(filter.operation)) {
          opValue = filterOperationMap.get(filter.operation);
        }
        const op = `$${opValue}`;
        if (isArray(temp)) {
          temp.push({ [filter.field]: { [op]: value } });
        } else {
          (temp[operatorList[i]] as any).push({ [filter.field]: { [op]: value } });
        }
      }
    }
  }
  return obj;
};

/**
 * Inserts the new operator into obj iterating throught the operator list and updates obj
 * @param {obj} obj Converted filter object
 * @param {operatorList} operatorList operator list
 * @param {operatorNew} operatorNew new operator
 */
const insertNewOpAndUpdateObj = (obj: any, operatorList: any, operatorNew: any) => {
  let pos = clone(obj);
  for (let i = 0; i < operatorList.length; i++) {
    if (isArray(pos)) {
      pos = find(pos, operatorList[i]);
    } else {
      pos = pos[operatorList[i]];
    }
    // push new operator after iterating to the last element in operatorList
    if (i === (operatorList.length - 1)) {
      pos.push({ [operatorNew]: [] });
    }
  }
  return obj;
};

/**
 * toTraversalFilterObject takes input contained in the proto structure defined in resource_base proto
 * and converts it into Object understandable by the underlying DB implementation in chassis-srv
 * @param {*} input Original filter input object
 * @param {*} obj converted filter objected passed recursively
 * @param {*} operatorList operatorlist updated and passed recursively
 */
export const toTraversalFilterObject = (input: any, obj?: any, operatorList?: string[]) => {
  // since toObject method is called recursively we are not adding the typing to input parameter
  let filters;
  if (input && !isEmptyish(input.filters)) {
    filters = input.filters;
  } else {
    filters = input;
  }
  // use operator provided in input
  if (input.operator) {
    filters.operator = input.operator;
  }
  // by default use 'and' operator if no operator is specified
  if (filters && isArray(filters.filters) && !filters.operator) {
    filters.operator = 'and';
  }
  if (!obj) {
    obj = {};
  }
  if (isArray(filters.filters) && filters.filters.length > 0) {
    let operatorValue;
    if (typeof filters.operator === 'string' || filters.operator instanceof String) {
      operatorValue = filters.operator;
    } else if (Number.isInteger(filters.operator)) {
      operatorValue = filterOperatorMap.get(filters.operator);
    }
    const newOperator = `$${operatorValue}`;
    if (operatorList && newOperator) {
      // insert obj with new operator
      obj = insertNewOpAndUpdateObj(obj, operatorList, newOperator);
      operatorList.push(newOperator);
    } else {
      operatorList = [newOperator];
      obj[newOperator] = [];
    }
    // pass operatorList and obj recursively
    obj = toTraversalFilterObject(filters.filters, obj, operatorList);
  } else if (isArray(filters)) {
    if (!operatorList) {
      const operator = input.operator ? `$${input.operator}` : '$and';
      operatorList = [operator];
    }
    if (isEmptyish(obj)) {
      const operator = input.operator ? `$${input.operator}` : '$and';
      obj = { [operator]: [] };
    }
    for (const filterObj of filters) {
      obj = toTraversalFilterObject(filterObj, obj, operatorList);
    }
  } else if (filters.field && (filters.operation || filters.operation === 0) && filters.value != undefined) {
    // object contains field, operation and value, update it on obj using convertFilterToObject()
    if (!operatorList) {
      const operator = input.operator ? `$${input.operator}` : '$and';
      operatorList = [operator];
    }
    if (isEmptyish(obj)) {
      const operator = filters.operator ? `$${filters.operator}` : '$and';
      obj = { [operator]: [] };
    }
    obj = convertFilterToObject(filters, obj, operatorList);
  }
  return obj;
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
    return `DATE_TIMESTAMP(v.${key})`;
  }
  return 'v.' + key;
};

/**
 * Auto-casting raw data
 *
 * @param {object} value - raw value
 * @returns {any} interpreted value
 */
export const autoCastValue = (value: any): any => {
  if (isArray(value)) {
    return value.map(value => value.toString());
  }
  if (isString(value)) { // String
    return JSON.stringify(value);
  }
  if (isBoolean(value)) { // Boolean
    return Boolean(value);
  }
  if (isNumber(value)) {
    return Number(value);
  }
  if (Long.isLong(value)) {
    return (value as Long).toNumber();
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
 * @return {any} query template string and bind variables
 */
export const buildComparison = (filter: any, op: string, root?: boolean): any => {
  const ele = filter.map((e: any) => {
    if (!isArray(e)) {
      e = [e];
    }
    e = buildGraphFilter(e, root);
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
  return { q };
};

/**
 * Auto-casting reference value by using native function of arangoDB
 *
 * @param {string} key
 * @param {object} value - raw value optional
 * @return {object} interpreted value
 */
export const autoCastRootKey = (key: any, value?: any): any => {
  if (isDate(value)) { // Date
    return `DATE_TIMESTAMP(obj.${key})`;
  }
  return 'obj.' + key;
};

/**
 * Creates a filter key, value.
 * When the value is a string, boolean, number or date a equal comparision is created.
 * Otherwise if the key corresponds to a known operator, the operator is constructed.
 * @param {string} key
 * @param {string|boolean|number|date|object} value
 * @return {String} query template string
 */
export const buildGraphField = (key: any, value: any, root?: boolean): string => {
  let autoCastKeyFunction;
  if (!root) {
    autoCastKeyFunction = autoCastKey;
  } else {
    autoCastKeyFunction = autoCastRootKey;
  }
  if (isString(value) || isBoolean(value) || isNumber(value || isDate(value))) {
    return autoCastKeyFunction(key, value) + ' == ' + autoCastValue(value);
  }
  if (!isNullish(value.$eq)) {
    return autoCastKeyFunction(key, value) + ' == ' + autoCastValue(value.$eq);
  }
  if (value.$gt) {
    return autoCastKeyFunction(key, value) + ' > ' + autoCastValue(value.$gt);
  }
  if (value.$gte) {
    return autoCastKeyFunction(key, value) + ' >= ' + autoCastValue(value.$gte);
  }
  if (value.$lt) {
    return autoCastKeyFunction(key, value) + ' < ' + autoCastValue(value.$lt);
  }
  if (value.$lte) {
    return autoCastKeyFunction(key, value) + ' <= ' + autoCastValue(value.$lte);
  }
  if (!isNullish(value.$ne)) {
    return autoCastKeyFunction(key, value) + ' != ' + autoCastValue(value.$ne);
  }
  if (value.$inVal) {
    return autoCastValue(value.$inVal) + ' IN ' + autoCastKeyFunction(key, value);
  }
  if (value.$in) {
    if (isString(value.$in)) {
      // if it is a field which should be an array
      // (useful for querying within a document list-like attributen
      return autoCastValue(value.$in) + ' IN ' + autoCastKeyFunction(key);
    }
    // assuming it is a list of provided values
    return autoCastKeyFunction(key, value) + ' IN ' + autoCastValue(value.$in);
  }
  if (value.$nin) {
    return autoCastKeyFunction(key, value) + ' NOT IN ' + autoCastValue(value.$nin);
  }
  if (value.$iLike) {
    // @param 'true' is for case insensitive
    return 'LOWER(' + autoCastKeyFunction(key, value) + ') LIKE ' + autoCastValue(value.$iLike.toLowerCase());
  }
  if (!isNullish(value.$not)) {
    const temp = buildGraphField(key, value.$not, root);
    return `!(${temp})`;
  }
  if ('$isEmpty' in value) {
    // will always search for an empty string
    return autoCastKeyFunction(key, '') + ' == ' + autoCastValue('');
  }
  throw new Error(`unsupported operator ${keys(value)} in ${key}`);
};

/**
 * Build ArangoDB query based on filter.
 * @param {Object} filter key, value tree object
 * @return {any} query template string and bind variables
 */
export const buildGraphFilter = (filter: any, root?: boolean): any => {
  if (!root) {
    root = false;
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
                q = buildComparison(value, '||', root).q;
              }

              multipleFilters = true;
            } else {
              q = q + '&& ' + buildComparison(value, '||', root).q;
            }
            break;
          case '$and':
            if (!multipleFilters) {
              if (isEmptyish(value)) {
                q = false;
              } else {
                q = buildComparison(value, '&&', root).q;
              }
              multipleFilters = true;
            } else {
              q = q + '&& ' + buildComparison(value, '&&', root).q;
            }
            break;
          default:
            if (startsWith(key, '$')) {
              throw new Error(`unsupported query operator ${key}`);
            }
            if (!multipleFilters) {
              q = buildGraphField(key, value, root);
              multipleFilters = true;
            } else {
              q = q + ' && ' + buildGraphField(key, value, root);
            }
            break;
        }
      });
    }
    return { q };
  }
};

/**
 * Find's the list of entities from edge definition config depending on the direction
 * recursively
 * @param collection - root collection / start vertex
 * @param edgeDefConfig - edge definition cofnig
 * @param direction - direction OUTBOUND / INBOUND
 * @param entitiesList - result of entities in the graph of edge definition config
 */
export const recursiveFindEntities = (collection: any, edgeDefConfig: any, direction: any, entitiesList: any) => {
  if (entitiesList.includes(collection)) {
    return;
  }
  entitiesList.push(collection);
  let items = [];
  if (direction === Direction.OUTBOUND) {
    items = edgeDefConfig.filter((col: any) => col.from === collection);
  } else if (direction === Direction.INBOUND) {
    items = edgeDefConfig.filter((col: any) => col.to === collection);
  }
  for (const item of items) {
    if (direction === Direction.OUTBOUND) {
      recursiveFindEntities(item.to, edgeDefConfig, direction, entitiesList);
    } else if (direction === Direction.INBOUND) {
      recursiveFindEntities(item.from, edgeDefConfig, direction, entitiesList);
    }
  }
  return entitiesList;
};

/**
 * Build limit and offset filters.
 * @param {limit} limit
 * @param {offset} offset
 * @return {String}  string limit filter
 */
export const buildGraphLimiter = (limit?: number, offset?: number): string => {
  // LIMIT count
  // LIMIT offset, count
  if (!limit) {
    limit = 1000;
  }
  if (!isNullish(limit)) {
    if (!isNullish(offset)) {
      return `LIMIT ${offset}, ${limit}`;
    }
    return `LIMIT ${limit}`;
  }
  return '';
};

/**
 * Build sort filter.
 * @param {Object} sort sort options
 * @return {any} template sort string
 */
export const buildGraphSorter = (sortList: any): any => {
  if (isNullish(sortList) || isEmptyish(sortList)) {
    return '';
  }

  const sort = mapKeys(sortList, (key, value) => {
    return autoCastRootKey(key);
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

export const createGraphsAssociationFilter = (filters: GraphFilters[],
  direction: Direction, traversalCollectionName: string, edgeDefConfig: any, filter: string): any => {
  let filterObj = [];
  let filteredEntities = []; // used to find difference from graph edgeDefConfig and add missing entities to custom filter
  let completeEntities = [];
  let rootEntityFilter;
  // convert the filter from proto structure (field, operation, value and operand) to {field: value } mapping
  if (filters && !isEmptyish(filters)) {
    if (!isArray(filters)) {
      filters = [filters];
    }
    for (const eachFilter of filters) {
      if (eachFilter.entity && eachFilter.entity === traversalCollectionName) {
        rootEntityFilter = toTraversalFilterObject(eachFilter);
        continue;
      }
      const traversalFilterObj = toTraversalFilterObject(eachFilter);
      if (eachFilter.entity && eachFilter.entity != traversalCollectionName) {
        filteredEntities.push(eachFilter.entity);
        traversalFilterObj.entity = eachFilter.entity;
      } else if (eachFilter.edge) {
        // depending on direction
        const entityConnectedToEdge = edgeDefConfig.filter((e: any) => e.collection === eachFilter.edge);
        if (entityConnectedToEdge?.length === 1) {
          if (direction === Options_Direction.OUTBOUND) {
            filteredEntities.push(entityConnectedToEdge[0].to);
          } else if (direction === Options_Direction.INBOUND) {
            filteredEntities.push(entityConnectedToEdge[0].from);
          }
        }
        traversalFilterObj.edge = eachFilter.edge;
      }
      filterObj.push(traversalFilterObj);
    }
  }

  if (!isArray(filterObj)) {
    filterObj = [filterObj];
  }

  if (filterObj?.length > 0) {
    completeEntities = recursiveFindEntities(traversalCollectionName, edgeDefConfig, direction, []);
  }

  // construct AQL custom filter based on filterObj using buildFilter api
  let customFilter = '';
  let rootCollectionFilter = '';
  if (filterObj && filterObj.length > 0) {
    for (let i = 0; i < filterObj.length; i++) {
      let entity = '';
      let edge = '';
      if (filterObj[i].entity) {
        entity = filterObj[i].entity;
        delete filterObj[i].entity;
      } else if (filterObj[i].edge) {
        edge = filterObj[i].edge;
        delete filterObj[i].edge;
      }
      let filterString = buildGraphFilter([filterObj[i]]).q;
      if (typeof filterString === 'string' &&
        filterString.startsWith('(') && filterString.endsWith(')')) {
        if (entity) {
          filterString = filterString.substring(0, 1) + ` v._id LIKE "${entity}%" && ` + filterString.substring(1);
          if (traversalCollectionName && entity === traversalCollectionName) {
            rootCollectionFilter = filterString;
          }
        } else if (edge) {
          filterString = filterString.substring(0, 1) + ` e._id LIKE "${edge}%" && ` + filterString.substring(1);
        }
      }
      if (i === filterObj.length - 1) {
        customFilter = customFilter + filterString;
      } else {
        customFilter = customFilter + filterString + ' || ';
      }
    }
  }

  if (customFilter) {
    filter = filter + ` FILTER ${customFilter}`;
    // add missing entities to FILTER query
    filteredEntities = filteredEntities.sort();
    completeEntities = completeEntities.sort();
    if (!isDeepEqual(filteredEntities, completeEntities)) {
      for (const removeEntity of intersection(filteredEntities, completeEntities)) {
        completeEntities.splice(completeEntities.indexOf(removeEntity), 1);
      }
    }
    // AQL query for missing entities
    if (completeEntities && completeEntities.length > 0) {
      for (const missingEntity of completeEntities) {
        filter = filter + ` || ( v._id LIKE "${missingEntity}%" )`;
      }
    }
  }
  return { rootEntityFilter, associationFilter: filter };
};
