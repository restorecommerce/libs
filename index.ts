'use strict';

import * as _ from 'lodash';

export function toStruct(obj: Object, fromArray: any = false): any {
  let struct;
  // fromArray flag is true when iterating
  // objects inside a JSON array
  if (!fromArray) {
    struct = {
      fields: {},
    };
  }
  else {
    struct = {
      struct_value: { fields: {} },
    };
    struct.struct_value.fields = {};
  }
  _.forEach(obj, (value, key) => {
    let innerStruct;
    if (!fromArray) {
      innerStruct = struct.fields;
    } else {
      innerStruct = struct.struct_value.fields;
    }

    if (_.isNumber(value)) {
      innerStruct[key] = { number_value: value };
    } else if (_.isString(value)) {
      innerStruct[key] = { string_value: value };
    } else if (_.isBoolean(value)) {
      innerStruct[key] = { bool_value: value };
    } else if (_.isArray(value)) {
      innerStruct[key] = { list_value: { values: _.map(value, (v) => { return toStruct(v, true); }) } };
    } else if (_.isObject(value)) {
      innerStruct[key] = { struct_value: toStruct(value) };
    }
  });
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
  let ret = {};
  if (value.number_value) {
    ret = value.number_value;
  }
  else if (value.string_value) {
    ret = value.string_value;
  }
  else if (value.bool_value) {
    ret = value.bool_value;
  }
  else if (value.list_value) {
    ret = _.map(value.list_value.values, (v) => {
      return toObject(v, true);
    });
  }
  else if (value.struct_value) {
    ret = toObject(value.struct_value);
  }
  return ret;
}

export function objectToProtobuf(entityName: string, object: Object,
  protobuf: any): any {
  const proto = _.cloneDeep(protobuf);
  const keys = Object.keys(object);
  const name = entityName.charAt(0).toUpperCase() + entityName.slice(1);
  const inst = new proto[name]();
  for (let index = 0; index < keys.length; index += 1) {
    inst['set' + keys[index].charAt(0).toUpperCase() +
      keys[index].slice(1)].call(proto, object[keys[index]]);
  }
  return inst;
}

import { ResourcesAPIBase } from './lib/core/ResourcesAPI';
export { ResourcesAPIBase };
import { ServiceBase } from './lib/core/ServiceBase';
export { ServiceBase };
