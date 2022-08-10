import { format } from 'winston';

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
