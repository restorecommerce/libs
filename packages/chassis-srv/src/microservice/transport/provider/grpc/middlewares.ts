import { CallContext, ServerError, ServerMiddlewareCall } from 'nice-grpc';
import { isAbortError } from 'abort-controller-x';
import { type Logger } from '@restorecommerce/logger';
import { metadataPassThrough } from '@restorecommerce/grpc-client/dist/middleware';
import { AsyncLocalStorage } from 'async_hooks';
import { randomUUID } from 'crypto';

const tracingHeader = 'x-request-id';

export interface WithRequestID {
  rid: string;
}

export async function* tracingMiddleware<Request, Response>(
  call: ServerMiddlewareCall<Request, Response, WithRequestID>,
  context: CallContext,
) {
  const nextID = context.metadata.get(tracingHeader) || randomUUID();
  context.metadata?.set(tracingHeader, nextID);
  return yield* call.next(call.request, {
    ...context,
    rid: nextID
  });
}

export const loggingMiddleware = (logger: Logger) => {
  return async function* <Request, Response>(
    call: ServerMiddlewareCall<Request, Response>,
    context: CallContext & WithRequestID,
  ) {
    const {path} = call.method;

    logger.verbose(`[rid: ${context.rid}] received request to method ${path}`, call.request);

    try {
      const response = yield* call.next(call.request, context);
      logger.verbose(`[rid: ${context.rid}] request to method ${path} response sent`, {request: call.request});
      return response;
    } catch (error) {
      if (error instanceof ServerError) {
        logger.error(`${context.rid} request to method ${path} server error`, {
          message: error.details,
          code: error.code
        });
      } else if (isAbortError(error)) {
        logger.error(`${context.rid} request to method ${path} cancel`, {
          message: error.message,
          stack: error.stack
        });
      } else {
        logger.error(`${context.rid} request to method ${path} error`, {
          message: error.message,
          stack: error.stack
        });
      }

      return {
        status: {
          code: 500,
          message: error.message
        }
      } as Awaited<Response>;
    }
  };
};


function bindAsyncGenerator<T = any, TReturn = any, TNext = any>(
  store: AsyncLocalStorage<any>,
  generator: AsyncGenerator<any, any, any>,
): AsyncGenerator<T, TReturn, TNext> {
  const ctx = store.getStore();
  return {
    next: () => store.run(ctx, generator.next.bind(generator)),
    return: (args) => store.run(ctx, generator.return.bind(generator), args),
    throw: (args) => store.run(ctx, generator.throw.bind(generator), args),

    [Symbol.asyncIterator]() {
      return this;
    },
  };
}

export async function* metaMiddleware<Request, Response>(
  call: ServerMiddlewareCall<Request, Response>,
  context: CallContext,
) {
  const mapped = {};
  for (const [a, b] of context.metadata) {
    mapped[a] = b;
  }

  const val = JSON.stringify(mapped);
  metadataPassThrough.enterWith(val);

  return yield* bindAsyncGenerator(metadataPassThrough, call.next(call.request, {
    ...context,
  }));
}
