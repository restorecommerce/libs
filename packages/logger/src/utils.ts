import { format } from 'winston';
import { RestoreFieldsOptions } from './index';
import * as _ from 'lodash';

const parse = (stack: string): any[] => {
  const lines = stack.split('\n').slice(1);
  return lines
    .map((line: string) => {
      if (line.match(/^\s*[-]{4,}$/)) {
        return {
          file: line,
          line: null,
          functionName: null,
          typeName: null,
          methodName: null,
          columnNumber: null,
          'native': null,
        };
      }

      const lineMatch = line.match(/at (?:(.+?)\s+\()?(?:(.+?):(\d+)(?::(\d+))?|([^)]+))\)?/);
      if (!lineMatch) {
        return;
      }

      let object: string | null = null;
      let method: string | null = null;
      let functionName: string | null = null;
      let typeName: string | null = null;
      let methodName: string | null = null;
      let isNative = (lineMatch[5] === 'native');

      if (lineMatch[1]) {
        functionName = lineMatch[1];

        let methodStart = functionName.lastIndexOf('.');
        if (functionName[methodStart - 1] == '.') {
          methodStart--;
        }

        if (methodStart > 0) {
          object = functionName.substr(0, methodStart);
          method = functionName.substr(methodStart + 1);
          const objectEnd = object.indexOf('.Module');
          if (objectEnd > 0) {
            functionName = functionName.substr(objectEnd + 1);
            object = object.substr(0, objectEnd);
          }
        }
      }

      if (method) {
        typeName = object;
        methodName = method;
      }

      if (method === '<anonymous>') {
        methodName = null;
        functionName = null;
      }

      return {
        file: lineMatch[2] || null,
        line: parseInt(lineMatch[3], 10) || null,
        functionName: functionName,
        typeName: typeName,
        methodName: methodName,
        columnNumber: parseInt(lineMatch[4], 10) || null,
        'native': isNative,
      };
    })
    .filter((callSite: any) => !!callSite);
}

export const getStackTrace = (obj?: any) => {
  const oldLimit = Error.stackTraceLimit;
  Error.stackTraceLimit = Infinity;

  const dummyObject = obj || {};

  Error.captureStackTrace(dummyObject, getStackTrace);

  const v8StackTrace = (dummyObject as any).stack;
  Error.stackTraceLimit = oldLimit;

  return v8StackTrace;
}

export const traceFormatter = format((info, opts) => {
  if (!(info as any)[Symbol.for('source')]) {
    (info as any)[Symbol.for('source')] = {};
  }
  (info as any)[Symbol.for('source')] = getRealTrace();
  return info;
});

const ignoredRegex = /node_modules\/winston|node_modules\/readable-stream|node:events/;
const ignoredList = ['node:events', 'events.js'];

export const getRealTrace = (): any => {
  const stackTrace = parse(getStackTrace());

  if (!stackTrace || stackTrace.length == 0) {
    return {
      file: null,
      line: null
    }
  }

  let sourceTrace = stackTrace[stackTrace.length - 1];
  if (stackTrace.length > 4) {
    const potentialTrace = stackTrace.slice(4)
      .find(t => !t['native'] && t.file && t.file.indexOf('/') >= 0 && !t.file.match(ignoredRegex) && ignoredList.indexOf(t.file) < 0);

    if (potentialTrace) {
      sourceTrace = potentialTrace;
    }
  }

  if (!sourceTrace) {
    return {
      file: null,
      line: null
    }
  }

  const resultTrace: any = {
    file: sourceTrace.file,
    line: sourceTrace.line
  }

  if (sourceTrace.functionName) {
    resultTrace.functionName = sourceTrace.functionName;
  }

  return resultTrace;
}

// A symbol used as key in the global name space to put the AsyncLocalStorage store under
export const globalLoggerCtxKey = Symbol('loggerCtx');

export const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key: string, value: unknown) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

interface PrecompiledData {
  fieldPath: string;
  array: boolean;
  enableLogging?: boolean;
}

export interface PrecompiledFieldOptions {
  maskFields: PrecompiledData[];
  omitFields: PrecompiledData[];
  bufferFields: PrecompiledData[];
}

const precompiled: PrecompiledFieldOptions = {
  maskFields: [],
  omitFields: [],
  bufferFields: []
};

// This gets called when logger is initialized
export const precompile = (fieldOptions?: RestoreFieldsOptions) => {
  fieldOptions?.maskFields?.forEach(fieldPath => {
    precompiled.maskFields.push({
      fieldPath,
      array: fieldPath.indexOf('.[') > 0
    });
  });

  fieldOptions?.omitFields?.forEach(fieldPath => {
    precompiled.omitFields.push({
      fieldPath,
      array: fieldPath.indexOf('.[') > 0
    });
  });

  fieldOptions?.bufferFields?.forEach(bufferObj => {
    precompiled.bufferFields.push({
      fieldPath: bufferObj.fieldPath,
      array: bufferObj.fieldPath.indexOf('.[') > 0,
      enableLogging: bufferObj.enableLogging
    });
  });
  return precompiled;
}

export const updateObject = (obj: any, path: string, value: any, operation: string, enableLogging?: boolean) => {
  if (operation === 'maskFields') {
    const maskLength = value.length;
    _.set(obj, path, '*'.repeat(maskLength));
  } else if (operation === 'omitFields') {
    _.unset(obj, path);
  } else if (value && operation === 'bufferFields') {
    if (enableLogging && value?.value) {
      let unmarshalled = JSON.parse(value.value.toString());
      _.set(obj, path, unmarshalled);
    } else {
      _.unset(obj, path);
    }
  }
};

export const setNestedPath = (object: any, fieldPath: string, operation: string, enableLogging?: boolean) => {
  const prefix = fieldPath?.substring(0, fieldPath.indexOf('.['));
  const suffix = fieldPath?.substring(fieldPath.indexOf('].') + 2);
  let setRecursive = false;
  // recursive check if the sub suffix again contains an array index
  if (suffix.indexOf('.[') > 0) {
    setRecursive = true;
  }
  if (prefix && suffix) {
    let array = _.get(object, prefix);
    array.forEach((obj: any) => {
      let fieldExists = _.get(obj, suffix);
      // maskFields or omitFields or handle bufferFields depending on operation
      if(fieldExists) {
        updateObject(obj, suffix, fieldExists, operation, enableLogging);
      }
      // recursive call
      if (fieldExists && setRecursive) {
        setNestedPath(obj, suffix, operation);
      }
    });
  }
};

const baseGet = (object: any, path: string[]): any => {
  let index = 0
  const length = path.length
  while (object != null && index < length) {
    object = object[path[index++]]
  }
  return (index && index == length) ? object : undefined;
};

const setIfExists = (obj: any, fieldPath: string, operation: string, array?: boolean, enableLogging?: boolean): void => {
  // split the fieldPath to individual fields and break when the first field do not exist
  let fieldList: any = fieldPath.split('.[').join('.');
  fieldList = fieldList.split('].').join('.');
  fieldList = fieldList.split('.');
  let fieldExists = baseGet(obj, fieldList);
  // only if the configured field exist check recursively for all entries in object
  if (fieldExists && array) {
    // use setNestedPath
    setNestedPath(obj, fieldPath, operation);
  } else if (fieldExists) {
    // use normal set and return
    updateObject(obj, fieldPath, fieldExists, operation, enableLogging);
  }
};

export const logFieldsHandler = (object: any, precompiled?: PrecompiledFieldOptions) => {
  if (!precompiled) {
    return object;
  }
  // if nonoe of bufferFields or maskFields or omitFields are set then do not proceed further
  if (_.isEmpty(precompiled?.maskFields) && _.isEmpty(precompiled?.omitFields) && _.isEmpty(precompiled?.bufferFields)) {
    return object;
  }
  let ObjectFieldsMod = _.cloneDeep(object);
  // since multiple comma separated  objects can be passed as fields for logging
  for (let obj of ObjectFieldsMod) {
    // iterate to check each mask field
    if (!_.isEmpty(precompiled?.maskFields)) {
      precompiled?.maskFields?.forEach((maskCfg) => {
        setIfExists(obj, maskCfg.fieldPath, 'maskFields', maskCfg.array);
      });
    }

    // iterate to check each omit field
    if (!_.isEmpty(precompiled?.omitFields)) {
      precompiled?.omitFields?.forEach((omitCfg) => {
        setIfExists(obj, omitCfg.fieldPath, 'omitFields', omitCfg.array);
      });
    }

    // iterate to check each buffer field
    if (!_.isEmpty(precompiled?.bufferFields)) {
      precompiled?.bufferFields?.forEach((bufferFieldObj) => {
        setIfExists(obj, bufferFieldObj.fieldPath, 'bufferFields', bufferFieldObj.array, bufferFieldObj.enableLogging,);
      });
    }
  }
  return ObjectFieldsMod;
};
