import { isEmptyish } from 'remeda';
import { Filter, FilterOperation, FilterValueType, OperatorType, ReadRequest } from './core/interfaces.js';

/*
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
*/

const filterOperatorMap = new Map([
  [0, 'and'],
  [1, 'or']
]);

const insertFilterFieldOpValue = (filter: Filter, object: any, key: string) => {
  let value: any = undefined;
  filter.type ??= FilterValueType.STRING; // defaults to string if undefined
  switch (filter.type) {
    case FilterValueType.NUMBER:
      value = Number(filter.value);
      break;
    case FilterValueType.BOOLEAN:
      if (filter.value === 'true') {
        value = true;
      } else if (filter.value === 'false') {
        value = false;
      }
      break;
    case FilterValueType.ARRAY:
      try {
        value = JSON.parse(filter.value);
      } catch (err: any) {
        // to handle JSON string parse error
        if (err.message.includes('Unexpected token')) {
          value = JSON.parse(JSON.stringify(filter.value));
        } else {
          throw err;
        }
      }
      break;
    case FilterValueType.DATE:
      value = (new Date(filter.value)).getTime();
      break;
    default:
    case FilterValueType.STRING:
      value = filter.value;
      break;
  }

  object = key ? object[key] : [];
  if (!Array.isArray(object)) {
    throw new Error('Filter object has to be of type Array');
  }
  filter.operation ??= FilterOperation.eq; // defaults to eq if undefined;
  switch (filter.operation) {
    case FilterOperation.eq:
      object.push({ [filter.field]: value });
      break;
    case FilterOperation.neq:
      object.push({ [filter.field]: { $not: { $eq: value } } });
      break;
    default:
      object.push({ [filter.field]: { [`$${filter.operation}`]: value } });
      break;
  }
  return object;
};

/**
 * Takes filter object containing field, operation and value and updates the filter in
 * object with operator style understandable by chassis-srv for later to be used for
 * AQL conversion
 * @param object converted filter object
 * @param originalKey operator value
 * @param filter object containing field, operation, value and type
 * @returns object
 */
const convertFilterToObject = (object: any, operatorKey: string, filter: Filter) => {
  if (object !== null) {
    if (Array.isArray(object)) {
      for (const arrayItem of object) {
        convertFilterToObject(arrayItem, operatorKey, filter);
      }
    } else if (typeof object === 'object') {
      for (const key of Object.keys(object)) {
        // Match found, update object with filter field, operation and value into object
        if (key === operatorKey) {
          object = insertFilterFieldOpValue(filter, object, operatorKey);
        } else {
          convertFilterToObject(object[key], operatorKey, filter);
        }
      }
    }
  }
  if (!operatorKey) {
    // should be root level filter
    object = insertFilterFieldOpValue(filter, object, operatorKey);
    object = object[0];
  }
  return object;
};

/**
 * convertToObject takes input contained in the proto structure defined in resource_base proto
 * and converts it into Object understandable by the underlying DB implementation in chassis-srv
 * @param {*} input Original filter input object
 * @param {*} obj converted filter objected passed recursively
 * @param {*} currentOperator current operatro value passed recursively
 */
export const convertToObject = (input: any, obj?: any, currentOperator?: string) => {
  // since toObject method is called recursively we are not adding the typing to input parameter
  let filters;
  if (input && !isEmptyish(input.filters)) {
    filters = input.filters;
  } else {
    filters = input;
  }
  // by default use 'and' operator if no operator is specified
  if (Array.isArray(filters?.filters) && !filters.operator) {
    filters.operator = 'and';
  }
  obj ??= {};
  if (Array.isArray(filters)) {
    for (const filterObj of filters) {
      let operatorValue;
      if (typeof filterObj.operator === 'string' || filterObj.operator instanceof String) {
        operatorValue = filterObj.operator;
      } else if (Number.isInteger(filterObj.operator)) {
        operatorValue = filterOperatorMap.get(filterObj.operator);
      }
      // default to and operator
      if (!operatorValue) {
        operatorValue = 'and';
      }
      const newOperator = `$${operatorValue}`;
      if (newOperator && !currentOperator) {
        // insert obj with new operator
        Object.assign(obj, { [newOperator]: [] });
      }
      convertToObject(filterObj, obj, newOperator);
    }
  }
  if (filters.field && filters.value !== undefined) {
    // object contains field, operation and value, update it on obj using convertFilterToObject()
    obj = convertFilterToObject(obj, currentOperator, filters);
  }
  if (Array.isArray(filters?.filters)) {
    for (const filterObj of filters.filters) {
      const operator = filters.operator ? filters.operator : 'and';
      convertToObject(filterObj, obj, operator);
    }
  }
  return obj;
};

/**
 * converts input filters to json object understandable by chassis-srv for AQL conversion
 * @param input input filters object
 * @returns json object understandable by chassis-srv for AQL conversion
 */
export const toObject = (input: ReadRequest) => {
  const filters = input.filters ?? [];
  const result: Record<string, any>[] = filters.map(
    filter => {
      const obj = filter.filters.map((sf) => convertToObject(sf, {}));
      const operatorValue = filter?.operator ?? OperatorType.and; // defaults to `and`
      return {
        [`$${operatorValue}`]: obj
      };
    }
  );
  
  return result.length === 1 ? result[0] : result;
};

export * from './core/index.js';
