/// <reference types="koa-compose" />
import * as koa from 'koa';
import { Logger } from '@restorecommerce/logger';
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
export declare const reqResLogger: (opts: ReqResLoggerOptions) => import("koa-compose").Middleware<koa.ParameterizedContext<koa.DefaultState, koa.DefaultContext>>;
