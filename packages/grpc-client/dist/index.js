"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metadata = exports.createChannel = exports.Channel = void 0;
exports.createClient = createClient;
const nice_grpc_1 = require("nice-grpc");
Object.defineProperty(exports, "Channel", { enumerable: true, get: function () { return nice_grpc_1.Channel; } });
Object.defineProperty(exports, "createChannel", { enumerable: true, get: function () { return nice_grpc_1.createChannel; } });
Object.defineProperty(exports, "Metadata", { enumerable: true, get: function () { return nice_grpc_1.Metadata; } });
const middleware_1 = require("./middleware");
const nice_grpc_client_middleware_deadline_1 = require("nice-grpc-client-middleware-deadline");
const nice_grpc_client_middleware_retry_1 = require("nice-grpc-client-middleware-retry");
function createClient(config, definition, channel, defaultCallOptions) {
    let factory = (0, nice_grpc_1.createClientFactory)()
        .use((0, middleware_1.loggingMiddleware)(config.logger, config.omittedFields))
        .use(middleware_1.tracingMiddleware)
        .use(middleware_1.metaMiddleware)
        .use(nice_grpc_client_middleware_retry_1.retryMiddleware);
    if (config.timeout) {
        factory = factory.use(nice_grpc_client_middleware_deadline_1.deadlineMiddleware);
        factory = factory.use((0, middleware_1.internalDeadlineMiddleware)(config.timeout));
    }
    if (!defaultCallOptions) {
        defaultCallOptions = {};
    }
    defaultCallOptions = Object.assign(defaultCallOptions, {
        '*': {
            retryMaxAttempts: 5,
            retry: true,
        },
        onRetryableError(error, attempt, delayMs) {
            config.logger.error(`Call failed (${attempt}), retrying in ${delayMs}ms`, { code: error.code, message: error.message, stack: error.stack });
        }
    });
    return factory.create(definition, channel, defaultCallOptions);
}
//# sourceMappingURL=index.js.map