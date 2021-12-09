import _debug from 'debug';
import * as koa from 'koa';
import { createLogger, RestoreLoggerOptions } from '@restorecommerce/logger';
import { Logger } from 'winston';

const debug = _debug('@restorecommerce/koa-req-res-logger');

export interface ReqResLoggerOptions {
  logger?: Logger;
  logGraphQL?: boolean;
  logGraphQLVariables?: boolean;
  logResBody?: boolean;
}

/**
 Middleware that logs incoming request and outgoing response
 @param {Object} [options] - middleware options
 @returns {Middleware}
 */
export const reqResLogger = (opts: ReqResLoggerOptions) => {

  let loggerCfg: any;
  if (opts.logger) {
    loggerCfg = opts.logger;
    loggerCfg.esTransformer = (msg: any) => {
      msg.fields = JSON.stringify(msg.fields);
      return msg;
    };
  }

  const logger = loggerCfg ?? createLogger(loggerCfg);

  const fn: koa.Middleware = async (ctx, next) => {

    const request = ctx.request as koa.Request & {body: any};

    debug('yield middleware: %s', reqResLogger.name);

    const start = Date.now();
    const reqLog = {
      method: ctx.request.method,
      url: ctx.request.url,
      header: ctx.request.header
    };

    if (opts.logGraphQL === true && request.body) {
      const graphQLData = getGraphQLData(opts, request.body);
      if (graphQLData && Object.keys(graphQLData).length > 0) {
        Object.assign(reqLog, {
          graphql: graphQLData
        });
      }
    }

    // Log incoming request during downstream processing
    logger.verbose('Request', reqLog);
    // Call next middleware in stack
    await next();
    const delta = Math.ceil(Date.now() - start);

    // Log outgoing response during upstream
    // Generally only response successful request
    // Error will be handled in the Koa.js error handler
    // The response body and procTime are not logged
    const resLog = {
      procTime: delta,
      status: ctx.response.status,
      header: ctx.response.header
    };

    if (opts.logGraphQL === true && !('graphql' in reqLog) && request.body) {
      const graphQLData = getGraphQLData(opts, request.body);
      if (graphQLData && Object.keys(graphQLData).length > 0) {
        Object.assign(resLog, {
          graphql: graphQLData
        });
      }
    }

    if (opts.logResBody === true) {
      Object.assign(resLog, { body: ctx.body });
    }
    // `procTime` is in millisecond
    logger.verbose('Response', resLog);
  };

  return fn;
};

function getGraphQLData(opts: ReqResLoggerOptions, body: any) {
  if (typeof body !== 'object' || !body) {
    return;
  }

  const line = {};
  if ('operationName' in body) {
    Object.assign(line, { operationName: body.operationName });
  }
  if ('query' in body) {
    Object.assign(line, { query: body.query });
  }
  if (opts.logGraphQLVariables === true && 'variables' in body) {
    Object.assign(line, { variables: body.variables });
  }
  return line;
}
