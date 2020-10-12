'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reqResLogger = void 0;
const debug_1 = __importDefault(require("debug"));
const logger_1 = require("@restorecommerce/logger");
const debug = debug_1.default('@restorecommerce/koa-req-res-logger');
/**
 Middleware that logs incoming request and outgoing response
 @param {Object} [options] - middleware options
 @returns {Middleware}
 */
exports.reqResLogger = (opts) => {
    var _a;
    const logger = (_a = opts.logger) !== null && _a !== void 0 ? _a : logger_1.createLogger();
    const fn = async (ctx, next) => {
        const request = ctx.request;
        debug('yield middleware: %s', exports.reqResLogger.name);
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
function getGraphQLData(opts, body) {
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
