import * as _ from 'lodash';

export type FieldHandlerType = 'encode' | 'decode' | 'convertDateObjToMilisec' | 'convertMilisecToDateObj';

const marshallObj = (val: any) => {
  return {
    type_url: '',
    value: Buffer.from(JSON.stringify(val))
  };
};

const updateObject = (
  obj: any,
  path: string,
  value: any,
  fieldHandlerType: FieldHandlerType
) => {
  if (value !== undefined) {
    switch (fieldHandlerType) {
      case 'encode':
        _.set(obj, path, marshallObj(value));
        break;
      case 'decode':
        _.set(obj, path, JSON.parse(value.value?.toString()));
        break;
      case 'convertDateObjToMilisec':
        if (value instanceof Date) {
          _.set(obj, path, value.getTime());
        }
        break;
      case 'convertMilisecToDateObj':
        if (typeof(value) === 'number') {
          _.set(obj, path, new Date(value));
        }
        break;
      default:
        break;
    }
  }
};

const setNestedPath = (object: any, fieldPath: string, fieldHandlerType: FieldHandlerType) => {
  const prefix = fieldPath?.substring(0, fieldPath.indexOf('.['));
  const suffix = fieldPath?.substring(fieldPath.indexOf('].') + 2);
  const setRecursive = suffix.includes('.[');
  if (prefix && suffix) {
    const array = _.get(object, prefix);
    array?.forEach((obj: any) => {
      const fieldExists = _.get(obj, suffix);
      if (fieldExists) {
        updateObject(obj, suffix, fieldExists, fieldHandlerType);
      }
      // recursive call
      if (fieldExists && setRecursive) {
        setNestedPath(obj, suffix, fieldHandlerType);
      }
    });
  }
};

const baseGet = (object: any, path: string[]): any => {
  let index = 0;
  const length = path.length;
  while (object != null && index < length) {
    object = object[path[index++]];
  }
  return (index && index == length) ? object : undefined;
};

export const fieldHandler = (obj: any, fieldPath: string, fieldHandlerType: FieldHandlerType): any => {
  // fieldList contains the split Path to individual fields for fieldPath
  // and the baseGet breaks when the first field do not exist
  // ex: if fieldPath is `a.[0].b.c` then dotFieldPath is `a.0.b.c`
  let dotFieldPath: any = fieldPath.split('.[').join('.');
  dotFieldPath = dotFieldPath.split('].').join('.');
  dotFieldPath = dotFieldPath.split('.');
  const array = fieldPath.includes('[');

  const fieldExists = baseGet(obj, dotFieldPath);
  // only if the configured field exist check recursively for all entries in object
  if (array) {
    // use setNestedPath
    setNestedPath(obj, fieldPath, fieldHandlerType);
  } else if (fieldExists) {
    // use normal set and return
    updateObject(obj, fieldPath, fieldExists, fieldHandlerType);
  }
  return obj;
};