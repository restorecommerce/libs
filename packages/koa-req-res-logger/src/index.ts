import winston from 'winston';
import debug from 'debug';

const getGraphQLData = (options: any, body: any) => {
  const line = {};
  if ('operationName' in body) {
    Object.assign(line, { operationName: body.operationName });
  }
  if ('query' in body) {
    Object.assign(line, { query: body.query });
  }
  if (options.logGraphQLVariables === true && 'variables' in body) {
    Object.assign(line, { variables: body.variables });
  }
  return line;
};

/**
 Middleware that logs incoming request and outgoing response
 @param {Object} [options] - middleware options
 @returns {Middleware}
 */
const reqResLogger = (options: any) => {
  const opts = options || {};
  const logger = opts.logger || winston;

  const koaReqResLogger = async (ctx: any, next: any) => {
    debug('yield middleware: %s ' + koaReqResLogger.name);

    const start = Date.now();
    const reqLog = {
      method: ctx.request.method,
      url: ctx.request.url,
      header: ctx.request.header
    };

    if (options.logGraphQL === true && ctx.request.body) {
      const graphQLData = getGraphQLData(options, ctx.request.body);
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
      proc_time: delta,
      status: ctx.response.status,
      header: ctx.response.header
    };

    if (options.logGraphQL === true && !('graphql' in reqLog) && ctx.request.body) {
      const graphQLData = getGraphQLData(options, ctx.request.body);
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
  return koaReqResLogger;
};

export default reqResLogger;

