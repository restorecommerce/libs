import { setPath, stringToPath, prop } from 'remeda';
export type FieldHandlerType = 'encode' | 'decode' | 'convertDateObjToMilisec' | 'convertMilisecToDateObj';

const marshallObj = (val: any) => {
  return {
    type_url: '',
    value: Buffer.from(JSON.stringify(val))
  };
};

const recursiveSetValue = (obj: any, path: (string | number)[], value: any) => {
  if (path.length === 1) {
    obj[path[0]] = value;
    return;
  }

  const key = path[0];
  recursiveSetValue(obj[key], path.slice(1), value);
}

const updateObject = (
  obj: any,
  path: string,
  value: any,
  fieldHandlerType: FieldHandlerType
) => {
  if (value !== undefined) {
    const stringPath = stringToPath(path);
    let finalValue;
    switch (fieldHandlerType) {
      case 'encode':
        finalValue = marshallObj(value);
        break;
      case 'decode':
        finalValue = JSON.parse(value.value?.toString());
        break;
      case 'convertDateObjToMilisec':
        if (value instanceof Date) {
          finalValue = value.getTime();
        }
        break;
      case 'convertMilisecToDateObj':
        if (typeof(value) === 'number') {
          finalValue = new Date(value);
        }
        break;
      default:
        break;
    }

    if (finalValue) {
      recursiveSetValue(obj, stringPath, finalValue);
    }
  }
};

const setNestedPath = (object: any, fieldPath: string, fieldHandlerType: FieldHandlerType) => {
  const prefix = fieldPath?.substring(0, fieldPath.indexOf('.['));
  const suffix = fieldPath?.substring(fieldPath.indexOf('].') + 2);
  const setRecursive = suffix.includes('.[');
  if (prefix && suffix) {
    const array = prop(object, stringToPath(prefix) as any) as any;
    array?.forEach((obj: any) => {
      const fieldExists = prop(obj, stringToPath(suffix) as any) as any;
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