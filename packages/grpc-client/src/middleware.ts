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
  return async function* <Request, Response>(
    call: ClientMiddlewareCall<Request, Response>,
    options: CallOptions & WithRequestID,
  ) {
    const {path} = call.method;

    logger.info(`[rid: ${options.rid}] Invoking endpoint ${path}`);


    const cloned: any = _.cloneDeep(call);
    if (omittedFields && !_.isEmpty(cloned)) {
      const keys = Object.keys(omittedFields);
      for (let key of keys) {
        const bufferField = omittedFields[key];
        if (Array.isArray(bufferField)) {
          for (let eachBufField of bufferField) {
            delete cloned[eachBufField];
          }
        } else if (cloned[bufferField]) {
          delete cloned[bufferField];
        }
      }
    }

    logger.debug(`[rid: ${options.rid}] invoking ${path} endpoint with data:`, { request: cloned });

    try {
      return yield* call.next(call.request, options);
    } catch (err) {
      if (err instanceof ClientError) {
        logger.error(`[rid: ${options.rid}] Error serving request: Client Error`, {
          code: err.code,
          message: err.message,
          stack: err.stack,
          details: err.details
        });
      } else if (isAbortError(err)) {
        logger.error(`[rid: ${options.rid}] Error serving request: cancel`, {
          message: (err as Error).message,
          stack: (err as Error).stack,
        });
      } else {
        logger.error(`[rid: ${options.rid}] Error serving request`, {
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
