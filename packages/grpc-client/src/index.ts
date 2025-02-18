import {
  Channel,
  Client,
  createClientFactory as createClientFactoryInternal,
  DefaultCallOptions,
  createChannel,
  ClientError,
  Metadata,
  type CallContext,
} from 'nice-grpc';
import { CompatServiceDefinition, NormalizedServiceDefinition } from 'nice-grpc/lib/service-definitions';
import {
  internalDeadlineMiddleware,
  loggingMiddleware,
  metaMiddleware,
  tracingMiddleware,
  WithRequestID
} from './middleware';
import { createLogger } from '@restorecommerce/logger';
import { deadlineMiddleware } from 'nice-grpc-client-middleware-deadline';
import { retryMiddleware } from 'nice-grpc-client-middleware-retry';

export interface GrpcClientConfig {
  logger: ReturnType<typeof createLogger>;
  timeout?: number;
  omittedFields?: any;
}

export function createClient<Service extends CompatServiceDefinition>(
  config: GrpcClientConfig,
  definition: Service,
  channel: Channel,
  defaultCallOptions?: DefaultCallOptions<NormalizedServiceDefinition<Service>>,
): Client<Service> {
  let factory = createClientFactoryInternal()
    .use<WithRequestID>(loggingMiddleware(config.logger, config.omittedFields))
    .use<WithRequestID>(tracingMiddleware)
    .use<WithRequestID>(metaMiddleware)
    .use<WithRequestID>(retryMiddleware);

  if (config.timeout) {
    factory = factory.use(deadlineMiddleware);
    factory = factory.use(internalDeadlineMiddleware(config.timeout));
  }

  if (!defaultCallOptions) {
    defaultCallOptions = {};
  }
  defaultCallOptions = Object.assign(defaultCallOptions, {
    '*': {
      retryMaxAttempts: 5,
      retry: true,
    },
    onRetryableError(error: ClientError, attempt: number, delayMs: number) {
      config.logger.error(`Call failed (${attempt}), retrying in ${delayMs}ms`, { code: error.code, message: error.message, stack: error.stack });
    }
  });
  return factory.create(definition, channel, defaultCallOptions);
}

export { Client, Channel, createChannel, CallContext, Metadata };
