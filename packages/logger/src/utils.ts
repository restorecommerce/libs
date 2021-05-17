import { format } from 'winston';

const parse = (stack: string): any[] => {
  const lines = stack.split('\n').slice(1);
  return lines
    .map((line: string) => {
      if (line.match(/^\s*[-]{4,}$/)) {
        return {
          fileName: line,
          lineNumber: null,
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

      let object = null;
      let method = null;
      let functionName = null;
      let typeName = null;
      let methodName = null;
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
        fileName: lineMatch[2] || null,
        lineNumber: parseInt(lineMatch[3], 10) || null,
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
  if (info.level === 'error') {
    if (!(info as any)[Symbol.for('splat')]) {
      (info as any)[Symbol.for('splat')] = [];
    }
    (info as any)[Symbol.for('splat')].push(getRealTrace());
  }

  return info;
});

const ignoredRegex = /node_modules\/winston|node_modules\/readable-stream|node:events/;
const ignoredList = ['node:events', 'events.js'];

export const getRealTrace = (): any => {
  const stackTrace = parse(getStackTrace());
  const sourceTrace = stackTrace.slice(4)
    .find(t => !t['native'] && t.fileName.indexOf('/') >= 0 && !t.fileName.match(ignoredRegex) && ignoredList.indexOf(t.fileName) < 0);

  const resultTrace: any = {
    fileName: sourceTrace.fileName,
    lineNumber: sourceTrace.lineNumber
  }

  if (sourceTrace.functionName) {
    resultTrace.functionName = sourceTrace.functionName;
  }

  return resultTrace;
}
