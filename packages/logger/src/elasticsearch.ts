import { ElasticsearchTransport, ElasticsearchTransportOptions, Transformer } from 'winston-elasticsearch';
import * as os from 'os';
import * as rTracer from 'cls-rtracer';
import { globalLoggerCtxKey, getRealTrace, getCircularReplacer, logFieldsHandler } from './utils';
import { RestoreFieldsOptions } from './index';

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
    const source = opts.source; // needed, as it will be read internally
    let transformed: any = {};

    if (global[globalLoggerCtxKey]) {
      const store = global[globalLoggerCtxKey].getStore();
      if (store && store.size > 0) {
        for (let [key, value] of store.entries()) {
          transformed[key] = value;
        }
      }
    }

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
      logFieldsHandler(transformed.message, opts.fieldOptions);
      transformed.message = JSON.stringify(transformed.message, getCircularReplacer());
    }
    transformed.severity = logData.level;
    transformed.fields = logData.meta;
    if (typeof transformed.fields !== 'object') {
      logFieldsHandler(JSON.parse(transformed.fields), opts.fieldOptions);
      transformed.fields ={ message: transformed.fields };
    }

    if (opts.esTransformer && typeof opts.esTransformer === 'function') {
      transformed = opts.esTransformer(transformed);
    }

    return transformed;
  };
}

// Fields transformer to convert all values into strings
// function toString(o: any) {
//   Object.keys(o).forEach(k => {
//     if (typeof o[k] === 'object') {
//       return toString(o[k]);
//     }
//     o[k] = '' + o[k];
//   });
//   return o;
// }

export interface RestoreLoggerElasticsearchTransportOptions extends ElasticsearchTransportOptions {
  sourcePointer?: any;
  esTransformer?: Function;
  fieldOptions?: RestoreFieldsOptions;
}

export function createElasticSearchTransport(opts: RestoreLoggerElasticsearchTransportOptions) {
  const transformer = createTransformer(opts);
  return new ElasticsearchTransport({
    indexTemplate,
    transformer,
    ...opts
  });
}
