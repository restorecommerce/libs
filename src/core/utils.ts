import * as _ from 'lodash';

 // Throws in case of error and it is handled and logged in ServiceBase functions
const marshallObj = (val) => {
  return {
    type_url: '',
    value: Buffer.from(JSON.stringify(val))
  };
};

 // Throws in case of error, this is caught and logged in ResourceAPI
const updateObject = (obj: any, path: string, value: any, fieldHandlerType: string) => {
  if (value && fieldHandlerType === 'encode') {
    const marshalled = marshallObj(value);
    _.set(obj, path, marshalled);
  } else if (value?.value && fieldHandlerType === 'decode') {
    const unmarshalled = JSON.parse(value.value.toString());
    _.set(obj, path, unmarshalled);
  } else if(value && fieldHandlerType == 'convertDateObjToMilisec' && value instanceof Date) {
    _.set(obj, path, value.getTime());
  } else if(value && fieldHandlerType == 'convertMilisecToDateObj' && typeof(value) == 'number') {
    _.set(obj, path, new Date(value));
  }
};

const setNestedPath = (object: any, fieldPath: string, fieldHandlerType: string) => {
  const prefix = fieldPath?.substring(0, fieldPath.indexOf('.['));
  const suffix = fieldPath?.substring(fieldPath.indexOf('].') + 2);
  let setRecursive = false;
  // recursive check if the sub suffix again contains an array index
  if (suffix.indexOf('.[') > 0) {
    setRecursive = true;
  }
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

export const fieldHandler = (obj: any, fieldPath: string, fieldHandlerType: string): any => {
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
