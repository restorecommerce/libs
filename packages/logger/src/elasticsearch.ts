import { ElasticsearchTransport, ElasticsearchTransportOptions } from 'winston-elasticsearch';
import * as os from 'os';
import * as rTracer from 'cls-rtracer';
import { globalLoggerCtxKey, getRealTrace, getCircularReplacer, logFieldsHandler, PrecompiledFieldOptions } from './utils';
import { RestoreFieldsOptions } from './index';

import indexTemplate from '../elasticsearch-index-template.json' assert { type: "json" };

function createTransformer(opts: RestoreLoggerElasticsearchTransportOptions, precompiled?: PrecompiledFieldOptions) {
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
        for (const [key, value] of store.entries()) {
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
      const transformedFields = logFieldsHandler(transformed.message, precompiled);
      transformed.message = JSON.stringify(transformedFields, getCircularReplacer());
    }
    transformed.severity = logData.level;
    transformed.fields = logData.meta;
    if (typeof transformed.fields !== 'object') {
      const transformedFields = logFieldsHandler(JSON.parse(transformed.fields), precompiled);
      transformed.fields = { message: transformedFields };
    }

    if (opts.esTransformer && typeof opts.esTransformer === 'function') {
      transformed = opts.esTransformer(transformed);
    }

    if (opts.stringifyMeta !== false && typeof transformed.fields === 'object') {
      transformed.fields = JSON.stringify(transformed.fields, getCircularReplacer());
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


export type CreateESTransport = (opts: RestoreLoggerElasticsearchTransportOptions, precompiled?: PrecompiledFieldOptions) => ElasticsearchTransport;

export interface RestoreLoggerElasticsearchTransportOptions extends ElasticsearchTransportOptions {
  sourcePointer?: any;
  stringifyMeta?: boolean;
  esTransformer?: CreateESTransport;
  fieldOptions?: RestoreFieldsOptions;
}

export const createElasticSearchTransport = (opts: RestoreLoggerElasticsearchTransportOptions, precompiled?: PrecompiledFieldOptions) => {
  const transformer = createTransformer(opts, precompiled);
  return new ElasticsearchTransport({
    indexTemplate,
    transformer,
    ...opts
  });
}
