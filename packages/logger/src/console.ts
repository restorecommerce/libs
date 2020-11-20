import { format, transports } from "winston";
import * as rTracer from 'cls-rtracer';

export interface RestoreLoggerConsoleTransportOptions extends transports.ConsoleTransportOptions {
  prettyPrint?:  boolean | any;
  colorize?: boolean | any;
}

// a custom format that outputs request id
const rTracerFormat = format.printf((info) => {
  const rid = rTracer.id();
  const time = info.timestamp;
  const level = info.level;
  let message = info.message;
  const splatSym: any = Object.getOwnPropertySymbols(info).find((s) => {
    return String(s) === 'Symbol(splat)';
  });
  const splat = info[splatSym];
  console.log(splat);
  delete info.timestamp;
  let object = '';
  if (splat) {
    object = JSON.stringify(splat);
  }
  if (Object.entries(message).length !== 0 && message.constructor === Object) {
    message = JSON.stringify(message);
  }
  return rid
    ? `${level}: ${time} [rid:${rid}]: ${message} ${((object))}`
    : `${level}: ${time}: ${message} ${(object)}`;
});

export function createConsoleTransport(opts: RestoreLoggerConsoleTransportOptions = {}) {
  let formats: any[] = [
    format.simple(),
    format.timestamp(),
    rTracerFormat
  ]

  let prettyPrint = undefined;
  if (opts.prettyPrint !== false) {
    const prettyPrintOpts = typeof opts.prettyPrint === 'object' ? opts.prettyPrint : undefined;
    formats.unshift(format.prettyPrint(prettyPrintOpts))
  }

  if (opts.colorize !== false) {
    const colorizeOpts = typeof opts.colorize === 'object' ? opts.colorize : undefined;
    formats.unshift(format.colorize(colorizeOpts))
  }

  return new transports.Console({
    format: format.combine(...formats),
    ...opts,
  });
}
