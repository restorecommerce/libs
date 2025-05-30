import { format, transports } from 'winston';
import * as rTracer from 'cls-rtracer';
import { getCircularReplacer, globalLoggerCtxKey, traceFormatter, logFieldsHandler, PrecompiledFieldOptions } from './utils';
import { RestoreFieldsOptions } from './index';

export interface RestoreLoggerConsoleTransportOptions extends transports.ConsoleTransportOptions {
  prettyPrint?:  boolean | any;
  colorize?: boolean | any;
  sourcePointer?: boolean;
  fieldOptions?: RestoreFieldsOptions;
}

// a custom format that outputs request id
function createTracerFormat(opts: RestoreLoggerConsoleTransportOptions, precompiled?: PrecompiledFieldOptions) {
  return format.printf((info) => {
    const rid = rTracer.id();
    const time = info.timestamp;
    const level = info.level;
    let message = info.message;
    const splatSym: any = Object.getOwnPropertySymbols(info).find((s) => {
      return String(s) === 'Symbol(splat)';
    });
    const splat = info[splatSym];

    delete info.timestamp;
    const object = splat ? JSON.stringify(logFieldsHandler(splat, precompiled), getCircularReplacer()) : {};
    if (message && Object.entries(message).length !== 0 && message.constructor === Object) {
      message = JSON.stringify(logFieldsHandler(message, precompiled), getCircularReplacer());
    }
    const ret: string[] = [];
    ret.push(`${level}: ${time}`);
    if (opts.sourcePointer) {
      const sourceSym: any = Object.getOwnPropertySymbols(info).find((s) => {
        return String(s) === 'Symbol(source)';
      });
      const source = info[sourceSym];
      const sourceFile = source.file;
      const sourceLine = source.line;
      ret.push(` ${sourceFile}:${sourceLine}`);
    }
    if (rid) {
      ret.push(` [rid:${rid}]`);
    }

    if ((globalThis as any)[globalLoggerCtxKey as unknown as any]) {
      const store = (global as any)[globalLoggerCtxKey].getStore() as any;
      if (store && store.size > 0) {
        let i = store.size;
        ret.push(` [`);
        for (const [key, value] of store.entries()) {
          ret.push(`${key}:${value}`);
          i--;
          if (i > 0) {
            ret.push(`, `);
          }
        }
        ret.push(`]`);
      }
    }

    ret.push(`: ${message}`);

    if (splat) {
      ret.push(` ${object}`);
    }

    return ret.join('');
  });
}

export function createConsoleTransport(opts: RestoreLoggerConsoleTransportOptions = {}, precompiled?: PrecompiledFieldOptions ) {
  const formats: any[] = [
    format.simple(),
    format.timestamp(),
    createTracerFormat(opts, precompiled),
  ]

  if (opts.prettyPrint !== false) {
    const prettyPrintOpts = typeof opts.prettyPrint === 'object' ? opts.prettyPrint : undefined;
    formats.unshift(format.prettyPrint(prettyPrintOpts))
  }

  if (opts.colorize !== false) {
    const colorizeOpts = typeof opts.colorize === 'object' ? opts.colorize : undefined;
    formats.unshift(format.colorize(colorizeOpts))
  }

  if (opts.sourcePointer) {
    formats.unshift(traceFormatter());
  }

  return new transports.Console({
    format: format.combine(...formats),
    ...opts,
  });
}
