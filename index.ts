import * as _ from 'lodash';

export function toStruct(obj: any, fromArray: Boolean = false): any {
  const decode = (value: any) => {
    let decodedVal;
    if (_.isNumber(value)) {
      decodedVal = { number_value: value };
    }
    else if (_.isString(value)) {
      decodedVal = { string_value: value };
    }
    else if (_.isBoolean(value)) {
      decodedVal = { bool_value: value };
    }
    else if (_.isArray(value)) {
      decodedVal = {
        list_value: {
          values: _.map(value, (v) => {
            return toStruct(v, true);
          })
        }
      };
    }
    else if (_.isObject(value)) {
      decodedVal = { struct_value: toStruct(value) };
    }

    return decodedVal;
  };

  let struct;
  // fromArray flag is true when iterating
  // objects inside a JSON array
  if (!fromArray) {
    struct = {
      fields: {
      },
    };
    _.forEach(obj, (value, key) => {
      struct.fields[key] = decode(value);
    });
  }
  else {
    struct = decode(obj);
  }

  return struct;
}

export function toObject(struct: any, fromArray: any = false): Object {
  let obj = {};
  if (!fromArray) {
    _.forEach(struct.fields, (value, key) => {
      obj[key] = decodeValue(value);
    });
  }
  else {
    obj = decodeValue(struct);
  }
  return obj;
}

function decodeValue(value: any): any {
  if (value.kind == 'list_value') {
    return _.map(value.list_value.values, (v) => {
      return toObject(v, true);
    });
  } else if (value.kind == 'struct_value') {
    return toObject(value.struct_value);
  } else {
    return value[value.kind];
  }
}

import { ResourcesAPIBase } from './lib/core/ResourcesAPI';
export { ResourcesAPIBase };
import { ServiceBase } from './lib/core/ServiceBase';
export { ServiceBase };
import { GraphResourcesServiceBase } from './lib/core/GraphResourcesServiceBase';
export { GraphResourcesServiceBase };
