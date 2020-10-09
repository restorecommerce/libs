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
  const message = info.message;
  delete (info as any).timestamp;
  delete (info as any).level;
  delete (info as any).message;
  let object = '';
  if (Object.entries(info).length !== 0 && info.constructor === Object) {
    object = JSON.stringify(info);
  }
  return rid
    ? `${level} : ${time} [rid:${rid}] : ${message} ${((object))}`
    : `${level} : ${time} : ${message} ${(object)}`;
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
