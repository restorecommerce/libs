import * as _ from 'lodash';

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
const convertFilterToObject = (filter, obj, operatorList) => {
  let temp = _.clone(obj);
  let value;
  if (!filter.type || filter.type === 'STRING' || filter.type === 0) {
    value = filter.value;
  } else if ( (filter.type === 'NUMBER' || filter.type === 1) && !isNaN(filter.value)) {
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
    } catch (err) {
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
    if (_.isArray(temp)) {
      temp = _.find(temp, operatorList[i]);
    } else {
      temp = temp[operatorList[i]];
    }
    if (i === (operatorList.length - 1)) {
      // push for final element in the operatorList array
      if (filter.operation === 'eq' || filter.operation === 0) {
        if (_.isArray(temp)) {
          temp.push({ [filter.field]: value });
        } else {
          temp[operatorList[i]].push({ [filter.field]: value });
        }
      } else if (filter.operation === 'neq' || filter.operation === 8) {
        if (_.isArray(temp)) {
          temp.push({ [filter.field]: { $not: { $eq: value } } });
        } else {
          temp[operatorList[i]].push({ [filter.field]: { $not: { $eq: value } } });
        }
      } else {
        let op, opValue;
        if (typeof filter.operation === 'string' || filter.operation instanceof String) {
          opValue = filter.operation;
        } else if (Number.isInteger(filter.operation)) {
          opValue = filterOperationMap.get(filter.operation);
        }
        op = `$${opValue}`;
        if (_.isArray(temp)) {
          temp.push({ [filter.field]: { [op]: value } });
        } else {
          temp[operatorList[i]].push({ [filter.field]: { [op]: value } });
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
const insertNewOpAndUpdateObj = (obj, operatorList, operatorNew) => {
  let pos = _.clone(obj);
  for (let i = 0; i < operatorList.length; i++) {
    if (_.isArray(pos)) {
      pos = _.find(pos, operatorList[i]);
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
 * toObject takes input contained in the proto structure defined in resource_base proto
 * and converts it into Object understandable by the underlying DB implementation in chassis-srv
 * @param {*} input Original filter input object
 * @param {*} obj converted filter objected passed recursively
 * @param {*} operatorList operatorlist updated and passed recursively
 */
export const toObject = (input: any, obj?: any, operatorList?: string[]) => {
  // since toObject method is called recursively we are not adding the typing to input parameter
  let filters;
  if (input && !_.isEmpty(input.filters)) {
    filters = input.filters;
  } else {
    filters = input;
  }
  // const filters = _.cloneDeep( (input.filters && input.filters.length > 0) ? input.filters : input);
  // by default use 'and' operator if no operator is specified
  if (filters && _.isArray(filters.filter) && !filters.operator) {
    filters.operator = 'and';
  }
  if (!obj) {
    obj = {};
  }
  if (_.isArray(filters.filter)) {
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
    toObject(filters.filter, obj, operatorList);
  } else if (_.isArray(filters)) {
    for (let filterObj of filters) {
      toObject(filterObj, obj, operatorList);
    }
  } else if (filters.field && (filters.operation || filters.operation === 0)) {
    // object contains field, operation and value, update it on obj using convertFilterToObject()
    obj = convertFilterToObject(filters, obj, operatorList);
  }
  return obj;
};

import { ResourcesAPIBase } from './core/ResourcesAPI';
export { ResourcesAPIBase };
import { ServiceBase } from './core/ServiceBase';
export { ServiceBase };
import { GraphResourcesServiceBase } from './core/GraphResourcesServiceBase';
export { GraphResourcesServiceBase };
export { Filter, FilterOp, FilterOperation, FilterValueType, OperatorType, TraversalOptions, GraphFilters, GraphFilter } from './core/interfaces';