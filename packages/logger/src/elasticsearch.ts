import { ElasticsearchTransport, ElasticsearchTransportOptions, Transformer } from "winston-elasticsearch";
import * as os from 'os';
import * as rTracer from 'cls-rtracer';

export const mappingTemplate = require('../elasticsearch-template-mapping.json');

/**
 Transformer function to transform logged data into a
 the message structure used in restore for storage in ES.

 @param {Object} logData
 @param {Object} logData.message - the log message
 @param {Object} logData.level - the log level
 @param {Object} logData.meta - the log meta data
 @returns {Object} transformed message
 */
const transformer: Transformer = (logData) => {
  const transformed: any = {};
  // set rid if it exists
  if (rTracer.id()) {
    transformed.rid = rTracer.id();
  }
  transformed['@timestamp'] = new Date().toISOString();
  transformed.source_host = os.hostname();
  transformed.message = logData.message;
  if (typeof transformed.message === 'object') {
    transformed.message = JSON.stringify(transformed.message);
  }
  transformed.level = logData.level;
  transformed.fields = logData.meta;
  if (typeof transformed.fields !== 'object') {
    transformed.fields = { 0: transformed.fields };
  }
  return transformed;
};

export interface RestoreLoggerElasticsearchTransportOptions extends ElasticsearchTransportOptions {
  source?: any;
}
export function createElasticSearchTransport(opts: RestoreLoggerElasticsearchTransportOptions) {
  transformer['source'] = opts.source;
  return new ElasticsearchTransport({
    mappingTemplate,
    transformer,
    ...opts
  });
}
