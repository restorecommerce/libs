import * as _ from 'lodash';

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