import { createLogger as createWinsonLogger, LoggerOptions as WinstonLoggerOptions, log, Logger } from 'winston';
import { RestoreLoggerConsoleTransportOptions, createConsoleTransport } from './console';
import { RestoreLoggerFileTransportOptions, createFileTransport } from './file';
import { RestoreLoggerElasticsearchTransportOptions, createElasticSearchTransport } from './elasticsearch';

export interface RestoreLoggerOptions extends WinstonLoggerOptions {
  console?: RestoreLoggerConsoleTransportOptions;
  file?: RestoreLoggerFileTransportOptions;
  elasticsearch?: RestoreLoggerElasticsearchTransportOptions;
  loggerName?: string;
}

export type TransportStreamArray = Logger['transports'];

export function createLogger(opts: RestoreLoggerOptions = {}) {
  // TODO reason for setting namespaces flag?
  (log as any).namespaces = true;

    // Provide TransportStream array and add opts.transports
  let transports: TransportStreamArray = [];
  if (opts.transports && !Array.isArray(transports)) {
    transports = [transports];
  } else if (Array.isArray(opts.transports)) {
    transports = opts.transports;
  }

  if (opts.console) {
    transports.push(createConsoleTransport(opts.console));
  }
  if (opts.file) {
    transports.push(createFileTransport(opts.file));
  }
  if (opts.elasticsearch) {
    opts.elasticsearch.dataStream = true;
    transports.push(createElasticSearchTransport(opts.elasticsearch));
  }
  if (transports.length === 0) {
    transports.push(createConsoleTransport());
  }

  return createWinsonLogger({
    transports,
    ...opts
  });
};

