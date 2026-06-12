"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.internalDeadlineMiddleware = exports.loggingMiddleware = exports.metadataPassThrough = void 0;
exports.tracingMiddleware = tracingMiddleware;
exports.metaMiddleware = metaMiddleware;
const nice_grpc_1 = require("nice-grpc");
const abort_controller_x_1 = require("abort-controller-x");
const node_async_hooks_1 = require("node:async_hooks");
const node_crypto_1 = require("node:crypto");
const tracingHeader = 'x-request-id';
exports.metadataPassThrough = new node_async_hooks_1.AsyncLocalStorage();
async function* tracingMiddleware(call, options) {
    const nextID = options.metadata?.get(tracingHeader) ?? (0, node_crypto_1.randomUUID)();
    options.metadata?.set(tracingHeader, nextID);
    return yield* call.next(call.request, {
        ...options,
        rid: nextID
    });
}
const loggingMiddleware = (logger, omittedFields) => {
    if (!logger) {
        console.error(new Error('WARNING: grpc-client loggingMiddleware initialized with an undefined logger!'));
    }
    return async function* (call, options) {
        const { path } = call.method;
        logger?.debug(`[rid: ${options.rid}] invoking ${path} endpoint with data`, { request: call.request });
        try {
            return yield* call.next(call.request, options);
        }
        catch (err) {
            if (err instanceof nice_grpc_1.ClientError) {
                logger?.error(`[rid: ${options.rid}] Error serving request ${path}: Client Error`, {
                    code: err.code,
                    message: err.message,
                    stack: err.stack,
                    details: err.details
                });
            }
            else if ((0, abort_controller_x_1.isAbortError)(err)) {
                logger?.error(`[rid: ${options.rid}] Error serving request ${path}: cancel`, {
                    message: err.message,
                    stack: err.stack,
                });
            }
            else {
                logger?.error(`[rid: ${options.rid}] Error serving request ${path}`, {
                    message: err.message,
                    stack: err.stack,
                });
            }
            throw err;
        }
    };
};
exports.loggingMiddleware = loggingMiddleware;
const internalDeadlineMiddleware = (timeout) => {
    return async function* (call, options) {
        return yield* call.next(call.request, {
            ...options,
            deadline: timeout
        });
    };
};
exports.internalDeadlineMiddleware = internalDeadlineMiddleware;
async function* metaMiddleware(call, options) {
    const val = exports.metadataPassThrough.getStore();
    if (val) {
        if (!options.metadata) {
            options.metadata = (0, nice_grpc_1.Metadata)();
        }
        const parsed = JSON.parse(val);
        for (const k of Object.keys(parsed)) {
            options.metadata.set(k, parsed[k]);
        }
    }
    return yield* call.next(call.request, {
        ...options,
    });
}
//# sourceMappingURL=middleware.js.map