import _ from 'lodash';
import { type TypingData, scalarTypes, recursiveEnumCheck, getNameSpaceTypeName, getTyping } from './registry.js';
import { type GraphQLInputObjectType } from 'graphql';

export const capitalizeProtoName = (name: string): string => {
  return name.replace(/(?:\.|^|_)(\w)/g, v => v.toUpperCase()).replace(/[._]/g, '');
};

// converts camelcase entity name to snake case
export const convertyCamelToSnakeCase = (entity: string): string => {
  return entity.replace(/(?:^|\.?)([A-Z])/g, (x, y) => { return '_' + y.toLowerCase(); }).replace(/^_/, '');
};

export const getKeys = (obj: any): string[] => {
  const set = new Set<string>();
  if (obj) {
    const keys = Object.keys(obj);
    for (const key of keys) {
      if (typeof obj[key] === 'string') {
        set.add(obj[key]);
      } else if (Array.isArray(obj[key])) {
        for (const value of obj[key]) {
          set.add(value);
        }
      }
    }
  }
  return Array.from(set);
};

export const decodeBufferFields = (items: any[], bufferFields: string[]): any => {
  if (bufferFields && bufferFields.length > 0 && items && items.length > 0) {
    for (let item of items) {
      if (item && item.payload) {
        const existingBufferFields = _.intersection(Object.keys(item.payload), bufferFields);
        for (let bufferField of existingBufferFields) {
          if (item.payload[bufferField] && item.payload[bufferField].value && item.payload[bufferField].value instanceof Buffer) {
            item.payload[bufferField].value = JSON.parse(item.payload[bufferField].value.toString());
          }
        }
      }
    }
    return items;
  } else {
    return items;
  }
};

/**
 * recursively find the id and updates the object with given value, this function
 * also takes care to handle if there is an array at any position in the path
 * @param id property of the object
 * @param val value to be updated in Object
 * @param obj Object
 */
const updateJSON = (id: string, value: any, obj: any) => {
  for (const [k, v] of Object.entries(obj)) {
    if (k === id) {
      const foundObj = value.find((e: any) => e.name === obj[k]);
      if (foundObj) {
        obj[k] = foundObj.number;
      }
    } else if (typeof v === 'object') {
      updateJSON(id, value, v);
    }
  }
};

/**
 * converts enum string values to integers reading from the inputTyping
 * @param TypingData input typing
 * @param req request object from which the enum strings to be replaced
 */
export const convertEnumToInt = (inputTyping: TypingData, req: any): any => {
  let enumMap: Map<string, string> = new Map();
  // enumMap populated with key as enum name space type and value as the path (to replace from request object)
  if (inputTyping) {
    const gqlInputObject = inputTyping.input;
    const gqlFields = (gqlInputObject as GraphQLInputObjectType).getFields();
    if (gqlFields) {
      const fieldNames = Object.keys(gqlFields);
      for (let fieldName of fieldNames) {
        // gql fieldName from input is of format [IIoRestorecommerceResourcebaseSort!]
        // below check is to remove `[` and `!]`
        let fieldType = gqlFields[fieldName].type.toString();
        if (fieldType.startsWith('[') && fieldType.endsWith('!]')) {
          fieldType = fieldType.substring(1, fieldType.length - 2);
        }
        // if fieldType is not basic type, then check if its fieldType belongs to Enum
        // if not get the object and make recursive check till no more objects are found
        if (scalarTypes.indexOf(fieldType) <= -1) {
          enumMap = recursiveEnumCheck(fieldType, enumMap, fieldName, []);
        }
      }
    }
  }

  for (let [key, val] of enumMap) {
    const enumNameSpace = getNameSpaceTypeName(key);
    if (enumNameSpace && typeof enumNameSpace === 'string') {
      const enumTyping = getTyping(enumNameSpace);
      const enumIntMapping = (enumTyping?.meta as any).value;
      if (enumIntMapping && _.isArray(enumIntMapping) && enumIntMapping.length > 0) {
        // val refers to property name
        updateJSON(val, enumIntMapping, req);
      }
    }
  }
  return req;
};

export const capitalize = (s: string): string => {
  return s.substring(0, 1).toUpperCase() + s.substring(1);
};

export const snakeToCamel = (s: string): string => {
  return s
    .split('_')
    .map((word, i) => {
      if (i === 0) {
        // if first symbol is "_" then skip it
        return word ? word[0] + word.substring(1).toLowerCase() : '';
      } else {
        return capitalize(word.toLowerCase());
      }
    })
    .join('');
};

export const camelToSnake = (serviceName: string) => {
  // convert camel case to snake case
  serviceName = serviceName.replace(/(?:^|\.?)([A-Z])/g, (x, y) => { return '_' + y.toLowerCase(); }).replace(/^_/, '');
  return serviceName;
};

export const getServiceName = (serviceName: string) => {
  return serviceName.endsWith('Service') ? camelToSnake(serviceName.substr(0, serviceName.length - 7)) : camelToSnake(serviceName);
};

export const camelCase = (s: string): string => s.substring(0, 1).toLowerCase() + s.substring(1);

export let useSubscriptions = false;

export const setUseSubscriptions = (value: boolean) => useSubscriptions = value;
