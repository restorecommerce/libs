import { ElasticsearchTransport, ElasticsearchTransportOptions, Transformer } from "winston-elasticsearch";
import * as os from 'os';
import * as rTracer from 'cls-rtracer';
import { getRealTrace } from "./utils";

export const indexTemplate = require('../elasticsearch-index-template.json');

function createTransformer(opts: RestoreLoggerElasticsearchTransportOptions) {
  /**
   Transformer function to transform logged data into a
  the message structure used in restore for storage in ES.

  @param {Object} logData
  @param {Object} logData.message - the log message
  @param {Object} logData.level - the log level
  @param {Object} logData.meta - the log meta data
  @returns {Object} transformed message
  */
  return (logData: any) => {
    const source = opts.source; // will be read internally
    const transformed: any = {};
    // set rid if it exists
    if (rTracer.id()) {
      transformed.rid = rTracer.id();
    }

    if (opts.sourcePointer) {
      logData.meta.source = getRealTrace();
    }

    transformed['@timestamp'] = new Date().toISOString();
    transformed.source_host = os.hostname();
    transformed.message = logData.message;
    if (typeof transformed.message === 'object') {
      transformed.message = JSON.stringify(transformed.message);
    }
    transformed.severity = logData.level;
    transformed.fields = logData.meta;
    if (typeof transformed.fields !== 'object') {
      transformed.fields = { 0: transformed.fields };
    }
    return transformed;
  };
}

export interface RestoreLoggerElasticsearchTransportOptions extends ElasticsearchTransportOptions {
  sourcePointer?: any;
}

export function createElasticSearchTransport(opts: RestoreLoggerElasticsearchTransportOptions) {
  const transformer = createTransformer(opts);
  return new ElasticsearchTransport({
    indexTemplate,
    transformer,
    ...opts
  });
}
