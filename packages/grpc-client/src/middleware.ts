import {
  ClientMiddlewareCall,
  CallOptions,
  ClientError,
  ClientMiddleware,
  Metadata,
} from 'nice-grpc';
import {isAbortError} from 'abort-controller-x';
import { createLogger } from '@restorecommerce/logger';
import { DeadlineOptions } from 'nice-grpc-client-middleware-deadline';
import { AsyncLocalStorage } from 'node:async_hooks';
import { randomUUID } from 'node:crypto';

const tracingHeader = 'x-request-id';

export const metadataPassThrough = new AsyncLocalStorage();

export interface WithRequestID {
  rid?: string;
}

export async function* tracingMiddleware<Request, Response>(
  call: ClientMiddlewareCall<Request, Response, WithRequestID>,
  options: CallOptions,
) {
  const nextID = options.metadata?.get(tracingHeader) ?? randomUUID();
  options.metadata?.set(tracingHeader, nextID);
  return yield* call.next(call.request, {
    ...options,
    rid: nextID
  });
}

export const loggingMiddleware = (logger: ReturnType<typeof createLogger>, omittedFields: any): ClientMiddleware => {
  if (!logger) {
    console.error(new Error('WARNING: grpc-client loggingMiddleware initialized with an undefined logger!'));
  }

  return async function* <Request, Response>(
    call: ClientMiddlewareCall<Request, Response>,
    options: CallOptions & WithRequestID,
  ) {
    const {path} = call.method;

    logger?.debug(`[rid: ${options.rid}] invoking ${path} endpoint with data`, { request: call.request });

    try {
      return yield* call.next(call.request, options);
    } catch (err) {
      if (err instanceof ClientError) {
        logger?.error(`[rid: ${options.rid}] Error serving request ${path}: Client Error`, {
          code: err.code,
          message: err.message,
          stack: err.stack,
          details: err.details
        });
      } else if (isAbortError(err)) {
        logger?.error(`[rid: ${options.rid}] Error serving request ${path}: cancel`, {
          message: (err as Error).message,
          stack: (err as Error).stack,
        });
      } else {
        logger?.error(`[rid: ${options.rid}] Error serving request ${path}`, {
          message: (err as Error).message,
          stack: (err as Error).stack,
        });
      }

      throw err;
    }
  }
}
export const internalDeadlineMiddleware = (timeout: number): ClientMiddleware => {
  return async function* <Request, Response>(
    call: ClientMiddlewareCall<Request, Response, DeadlineOptions>,
    options: CallOptions & WithRequestID,
  ) {
    return yield* call.next(call.request, {
      ...options,
      deadline: timeout
    });
  }
}

export async function* metaMiddleware<Request, Response>(
  call: ClientMiddlewareCall<Request, Response>,
  options: CallOptions,
) {
  const val = metadataPassThrough.getStore();
  if (val) {
    if (!options.metadata) {
      options.metadata = Metadata();
    }

    const parsed = JSON.parse(val as string) as Record<string, string>;
    for (const k of Object.keys(parsed)) {
      options.metadata.set(k, parsed[k]);
    }
  }

  return yield* call.next(call.request, {
    ...options,
  });
}
