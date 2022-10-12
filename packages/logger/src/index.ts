import 'source-map-support/register';
import { createLogger as createWinsonLogger, LoggerOptions as WinstonLoggerOptions, log, Logger } from 'winston';
import { RestoreLoggerConsoleTransportOptions, createConsoleTransport } from './console';
import { RestoreLoggerFileTransportOptions, createFileTransport } from './file';
import { RestoreLoggerElasticsearchTransportOptions, createElasticSearchTransport } from './elasticsearch';
import { globalLoggerCtxKey, precompile } from './utils';

export interface RestoreLoggerOptions extends WinstonLoggerOptions {
  console?: RestoreLoggerConsoleTransportOptions;
  file?: RestoreLoggerFileTransportOptions;
  elasticsearch?: RestoreLoggerElasticsearchTransportOptions;
  esTransformer?: Function,
  loggerName?: string;
  sourcePointer?: boolean;
  fieldOptions?: RestoreFieldsOptions;
}

export interface BufferField {
  fieldPath: string;
  enableLogging?: boolean; // default value is false 
}

export interface RestoreFieldsOptions {
  bufferFields?: BufferField[];
  maskFields?: string[];
  omitFields?: string[];
}

export type TransportStreamArray = Logger['transports'];

export function createLogger(opts: RestoreLoggerOptions = {}): Logger {
  // TODO reason for setting namespaces flag?
  (log as any).namespaces = true;

    // Provide TransportStream array and add opts.transports
  let transports: TransportStreamArray = [];
  if (opts.transports && !Array.isArray(transports)) {
    transports = [transports];
  } else if (Array.isArray(opts.transports)) {
    transports = opts.transports;
  }

  // precompile field options
  const precompiled = precompile(opts?.fieldOptions);
  if (opts.console) {
    transports.push(createConsoleTransport({ ...opts.console, sourcePointer: opts.sourcePointer }, precompiled));
  }
  if (opts.file) {
    transports.push(createFileTransport({ ...opts.file, sourcePointer: opts.sourcePointer }));
  }
  if (opts.elasticsearch) {
    opts.elasticsearch.dataStream = true;
    const esTransport = createElasticSearchTransport({ ...opts.elasticsearch, sourcePointer: opts.sourcePointer, esTransformer: opts.esTransformer }, precompiled);
    esTransport.on('error', (error) => {
      console.error('Elasticsearch indexing error', error);
    });
    transports.push(esTransport);
  }
  if (transports.length === 0) {
    transports.push(createConsoleTransport());
  }

  const logger = createWinsonLogger({
    transports,
    ...opts
  });

  logger.on('error', (error) => {
    console.error('Logger error', error);
  });

  return logger;
};

export { globalLoggerCtxKey };
