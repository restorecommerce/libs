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