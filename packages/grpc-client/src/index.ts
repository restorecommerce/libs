import {
  Channel,
  Client,
  createClientFactory as createClientFactoryInternal,
  DefaultCallOptions,
  createChannel,
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
    .use<WithRequestID>(metaMiddleware);

  if (config.timeout) {
    factory = factory.use(deadlineMiddleware);
    factory = factory.use(internalDeadlineMiddleware(config.timeout));
  }

  return factory.create(definition, channel, defaultCallOptions);
}

export { Client, Channel, createChannel };
