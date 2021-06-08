import { format, transports } from "winston";
import * as rTracer from 'cls-rtracer';
import { traceFormatter } from "./utils";

export interface RestoreLoggerConsoleTransportOptions extends transports.ConsoleTransportOptions {
  prettyPrint?:  boolean | any;
  colorize?: boolean | any;
  sourcePointer?: boolean;
}

// a custom format that outputs request id
function createTracerFormat(opts: RestoreLoggerConsoleTransportOptions) {
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
    let object = {};
    if (splat) {
      object = JSON.stringify(splat);
    }
    if (Object.entries(message).length !== 0 && message.constructor === Object) {
      message = JSON.stringify(message);
    }
    let ret: string[] = [];
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
      ret.push(`[rid:${rid}]`);
    }

    ret.push(`: ${message}`);

    if (splat) {
      ret.push(` ${object}`);
    }

    return ret.join('');
  });
}

export function createConsoleTransport(opts: RestoreLoggerConsoleTransportOptions = {}) {
  let formats: any[] = [
    format.simple(),
    format.timestamp(),
    createTracerFormat(opts),
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
