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
      const isNative = (lineMatch[5] === 'native');

      if (lineMatch[1]) {
        functionName = lineMatch[1];

        let methodStart = functionName.lastIndexOf('.');
        if (functionName[methodStart - 1] == '.') {
          methodStart--;
        }

        if (methodStart > 0) {
          object = functionName.substring(0, methodStart);
          method = functionName.substring(methodStart + 1);
          const objectEnd = object.indexOf('.Module');
          if (objectEnd > 0) {
            functionName = functionName.substring(objectEnd + 1);
            object = object.substring(0, objectEnd);
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
export const globalLoggerCtxKey: symbol = Symbol('loggerCtx');

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

class PrecompiledData {
  fieldList: string[];
  array: boolean;

  public constructor(
    public fieldPath: string,
    public enableLogging = false
  ) {
    this.fieldList = fieldPath.split(/\.?\[|\]\.|\./);
    this.array = !!fieldPath.match(/\[.?\]/);
  }
}

export interface PrecompiledFieldOptions {
  maskFields: PrecompiledData[];
  omitFields: PrecompiledData[];
  bufferFields: PrecompiledData[];
}


// This gets called when logger is initialized
export const precompile = (fieldOptions?: RestoreFieldsOptions) => {
  return {
    maskFields: fieldOptions?.maskFields?.map(fieldPath => new PrecompiledData(fieldPath)),
    omitFields: fieldOptions?.omitFields?.map(fieldPath => new PrecompiledData(fieldPath)),
    bufferFields: fieldOptions?.bufferFields?.map(buffer => new PrecompiledData(
      buffer.fieldPath,
      buffer.enableLogging
    )),
  };
}

export type FieldOperation = 'maskFields' | 'omitFields' | 'bufferFields';
export const updateObject = (
  obj: any,
  path: string[],
  operation: FieldOperation,
  enableLogging = false,
) => {
  const target = _.get(obj, path);
  if (target) {
    switch (operation) {
      case 'maskFields':
        _.set(obj, path, '******');
        break;
      case 'omitFields':
        _.unset(obj, path);
        break;
      case 'bufferFields':
        if (enableLogging) {
          let unmarshalled: any;
          try {
            unmarshalled = JSON.parse(target.value?.toString() ?? target.toString());
          }
          catch {
            unmarshalled = Buffer.from(target.value ?? target).toString('base64');
          }
          _.set(obj, path, unmarshalled);
        } else {
          _.unset(obj, path);
        }
        break;
      default:
        break;
    }
  }
};

export const setNestedPath = (
  object: any,
  fieldList: string[],
  operation: FieldOperation,
  enableLogging?: boolean
) => {
  const prefix = fieldList.slice(0, fieldList.indexOf('0'));
  const suffix = fieldList.slice(fieldList.indexOf('0') + 1);
  const hasSubArray = suffix.includes('0');
  if (prefix?.length) {
    const array = _.get(object, prefix);
    array?.forEach?.((obj: any) => {
      // maskFields or omitFields or handle bufferFields depending on operation
      if (hasSubArray) {
        setNestedPath(obj, suffix, operation, enableLogging);
      }
      else {
        updateObject(obj, suffix, operation, enableLogging);
      }
    });
  }
};

const setIfExists = (
  obj: any,
  fieldList: string[],
  operation: FieldOperation,
  array = false,
  enableLogging = false,
): void => {
  // fieldList contains the split Path to individual fields for fieldPath
  if (array) {
    setNestedPath(obj, fieldList, operation, enableLogging);
  } else {
    updateObject(obj, fieldList, operation, enableLogging);
  }
};

export const logFieldsHandler = (object: any, precompiled?: PrecompiledFieldOptions) => {
  if (!precompiled) {
    return object;
  }
  // if none of bufferFields or maskFields or omitFields are set then do not proceed further
  if (
    _.isEmpty(precompiled?.maskFields)
    && _.isEmpty(precompiled?.omitFields)
    && _.isEmpty(precompiled?.bufferFields)
  ) {
    return object;
  }
  let objectFieldsMod;
  try {
    objectFieldsMod = JSON.parse(JSON.stringify(object, getCircularReplacer()));
  } catch (error) {
    console.error('Error parsing object part of log message', object);
  }
  // since multiple comma separated  objects can be passed as fields for logging
  if (!Array.isArray(objectFieldsMod)) {
    objectFieldsMod = [objectFieldsMod];
  }
  for (const obj of objectFieldsMod) {
    // iterate to check each mask field
    precompiled?.maskFields?.forEach((maskCfg) => {
      setIfExists(obj, maskCfg.fieldList, 'maskFields', maskCfg.array);
    });

    // iterate to check each omit field
    precompiled?.omitFields?.forEach((omitCfg) => {
      setIfExists(obj, omitCfg.fieldList, 'omitFields', omitCfg.array);
    });

    // iterate to check each buffer field
    precompiled?.bufferFields?.forEach((bufferFieldObj) => {
      setIfExists(obj, bufferFieldObj.fieldList, 'bufferFields', bufferFieldObj.array, bufferFieldObj.enableLogging);
    });
  }
  return objectFieldsMod;
};
