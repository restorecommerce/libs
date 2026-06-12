import { ClientMiddlewareCall, CallOptions, ClientMiddleware } from 'nice-grpc';
import { createLogger } from '@restorecommerce/logger';
import { AsyncLocalStorage } from 'node:async_hooks';
export declare const metadataPassThrough: AsyncLocalStorage<unknown>;
export interface WithRequestID {
    rid?: string;
}
export declare function tracingMiddleware<Request, Response>(call: ClientMiddlewareCall<Request, Response, WithRequestID>, options: CallOptions): AsyncGenerator<Awaited<Response>, void | Awaited<Response>, undefined>;
export declare const loggingMiddleware: (logger: ReturnType<typeof createLogger>, omittedFields: any) => ClientMiddleware;
export declare const internalDeadlineMiddleware: (timeout: number) => ClientMiddleware;
export declare function metaMiddleware<Request, Response>(call: ClientMiddlewareCall<Request, Response>, options: CallOptions): AsyncGenerator<Awaited<Response>, void | Awaited<Response>, undefined>;
//# sourceMappingURL=middleware.d.ts.map