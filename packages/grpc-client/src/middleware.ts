import {
  ClientMiddlewareCall,
  CallOptions,
  ClientError,
  ClientMiddleware,
} from 'nice-grpc';
import {isAbortError} from 'abort-controller-x';
import { v1 as uuidv1 } from 'uuid';
import { createLogger } from '@restorecommerce/logger';
import * as _ from 'lodash';
import { DeadlineOptions } from 'nice-grpc-client-middleware-deadline';

const tracingHeader = 'x-request-id';

export interface WithRequestID {
  rid?: string;
}

export async function* tracingMiddleware<Request, Response>(
  call: ClientMiddlewareCall<Request, Response, WithRequestID>,
  options: CallOptions,
) {
  const nextID = options.metadata?.get(tracingHeader) || uuidv1();
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
        logger?.error(`[rid: ${options.rid}] Error serving request: Client Error`, {
          code: err.code,
          message: err.message,
          stack: err.stack,
          details: err.details
        });
      } else if (isAbortError(err)) {
        logger?.error(`[rid: ${options.rid}] Error serving request: cancel`, {
          message: (err as Error).message,
          stack: (err as Error).stack,
        });
      } else {
        logger?.error(`[rid: ${options.rid}] Error serving request`, {
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
