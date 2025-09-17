import {isNullish} from 'remeda';
import { type Logger } from '@restorecommerce/logger';
import type { Server as GRPCServer, ServiceImplementation } from 'nice-grpc';
import type { CompatServiceDefinition } from 'nice-grpc/lib/service-definitions';
import { createServer } from 'nice-grpc';
import { loggingMiddleware, metaMiddleware, tracingMiddleware, WithRequestID } from './middlewares.js';

/**
 * Name of the transport
 */
export const NAME = 'grpc';

export interface BindConfig<Service extends CompatServiceDefinition> {
  service: Service;
  implementation: ServiceImplementation<Service>;
}

/**
 * Server transport provider.
 * @class
 */
export class Server {

  config: any;
  logger: Logger;
  server: GRPCServer<WithRequestID>;
  name: string;
  isBound: boolean;

  /**
   * Server is a gRPC transport provider for serving.
   *
   * @param {Object} config Configuration object.
   * Requires properties: addr
   * Optional properties: credentials.ssl.certs
   * @param {Logger} logger Logger.
   */
  constructor(config: any, logger: Logger) {
    if (isNullish(logger)) {
      throw new Error('gRPC server transport provider requires a logger');
    }
    if (!('addr' in config)) {
      throw new Error('server is missing addr config field');
    }
    this.config = config;
    this.logger = logger;

    this.server = createServer(config?.channelOptions)
      .use(tracingMiddleware)
      .use(metaMiddleware)
      .use(loggingMiddleware(this.logger));

    this.name = NAME;
  }

  /**
   * bind maps the service to gRPC methods and binds the address.
   *
   * @param {BindConfig} config Service bind config.
   */
  bind(config: BindConfig<any>): void {
    this.server.add(config.service, config.implementation);
  }

  /**
   * start launches the gRPC server and provides the service endpoints.
   */
  async start(): Promise<void> {
    if (!this.isBound) {
      // TODO Re-enable
      // if (_.has(this.config, 'credentials.ssl')) {
        // credentials = grpc.credentials.createSsl(
        //   this.config.credentials.ssl.certs);
      // }
      await this.server.listen(
        this.config.addr
      ).catch(err => {
        this.logger.error('Error starting server', { message: err.message, code: err.code, stack: err.stack });
        throw err;
      });
      this.isBound = true;
    }
  }

  /**
   * end stops the gRPC server and no longer provides the service endpoints.
   */
  async end(): Promise<any> {
    this.server.forceShutdown();
  }
}

export { Server as grpcServer };
