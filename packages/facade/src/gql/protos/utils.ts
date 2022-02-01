import * as _ from 'lodash';
import { TypingData, scalarTypes, recursiveEnumCheck, getNameSpaceTypeName, getTyping } from './registry';
import { GraphQLInputObjectType } from 'graphql';

export const capitalizeProtoName = (name: string): string => {
  return name.replace(/(?:\.|^|_)(\w)/g, v => v.toUpperCase()).replace(/[._]/g, '');
}

// converts camelcase entity name to snake case
export const convertyCamelToSnakeCase = (entity: string): string => {
  return entity.replace(/(?:^|\.?)([A-Z])/g, (x, y) => { return '_' + y.toLowerCase(); }).replace(/^_/, '');
}

export const getKeys = (obj: any): string[] => {
  let set = new Set<string>();
  if (obj) {
    const keys = Object.keys(obj);
    for (let key of keys) {
      if (typeof obj[key] === 'string') {
        set.add(obj[key]);
      } else if (Array.isArray(obj[key])) {
        for (let value of obj[key]) {
          set.add(value);
        }
      }
    }
  }
  return Array.from(set);
};

export const decodeBufferFields = (items: any, bufferFields: string[]): any => {
  if (bufferFields && bufferFields.length > 0 && items && items.length > 0) {
    for (let item of items) {
      if (item && item.payload) {
        const existingBufferFields = _.intersection(Object.keys(item.payload), bufferFields);
        for (let bufferField of existingBufferFields) {
          if (item.payload[bufferField] && item.payload[bufferField].value) {
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

interface EnumMetaData {
  name: string;
  number: number;
  options?: any;
}

/**
 * recursively find the path and updates the object with given value, this function
 * also takes care to handle if there is an array at any position in the path
 * @param path path in dot notation
 * @param val value to be updated in Object
 * @param obj Object
 */
export const updateJSON = (path: string, val: EnumMetaData[], obj: any) => {
  let fields = path.split('.');
  let result = obj;
  let j = 0;
  for (let i = 0, n = fields.length; i < n && result !== undefined; i++) {
    let field = fields[i];
    if (i === n - 1) {
      // reset value finally after iterating to the position (only if value already exists)
      if (result[field]) {
        const foundElement = val.find((e) => e.name === result[field]);
        result[field] = foundElement?.number;
      }
    } else {
      if (_.isArray(result[field])) {
        // till i < n concat new fields
        let newField = '';
        for (let k = i + 1; k < n; k++) {
          if (newField && !_.isEmpty(newField)) {
            newField = newField + '.' + fields[k];
          } else {
            newField = fields[k];
          }
        }
        for (; j < result[field].length; j++) {
          // recurisve call to update each element if its an array
          updateJSON(newField, val, result[field][j]);
        }
      } else {
        // update object till final path is reached
        result = result[field];
      }
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
        updateJSON(val, enumIntMapping, req);
      }
    }
  }
  return req;
};