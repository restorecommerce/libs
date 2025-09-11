import { CommandInterface } from '../command-interface/index.js';
import { ServiceConfig } from '@restorecommerce/service-config';
import { createClient } from '@restorecommerce/grpc-client';
import { Logger } from '@restorecommerce/logger';
import {
  HealthClient,
  HealthDefinition,
} from '@restorecommerce/rc-grpc-clients/dist/generated/grpc/health/v1/health.js';
import {
  DeepPartial,
  HealthCheckRequest,
  HealthCheckResponse,
  HealthCheckResponse_ServingStatus,
  HealthServiceImplementation
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/grpc/health/v1/health.js';
import { createChannel } from 'nice-grpc';

export interface HealthOptions {
  cfg?: ServiceConfig;
  dependencies?: string[];
  logger?: Logger;
  readiness?: () => Promise<boolean>;
}

export class Health implements HealthServiceImplementation {

  readonly ci: CommandInterface;
  readonly opts?: HealthOptions;
  readonly endpoints?: { [key: string]: HealthClient };

  constructor(ci: CommandInterface, opts?: HealthOptions) {
    this.ci = ci;
    this.opts = opts;

    if (this.opts) {
      if (this.opts.dependencies && this.opts.cfg && this.opts.logger) {
        this.endpoints = {};
        const clientCfg = this.opts.cfg.get('client');
        for (const dependency of this.opts.dependencies) {
          const dep = clientCfg?.[dependency] ?? this.opts.cfg.get(dependency);
          if (!dep) {
            throw new Error(`Dependency '${ dependency }' not provided in config!`);
          }

          const channel = createChannel(dep.address);
          this.endpoints[dep.endpoint ?? dependency] = createClient({
            ...dep,
            logger: this.opts.logger
          }, HealthDefinition, channel);
        }
      }
    }
  }

  async check(request: HealthCheckRequest, context: any): Promise<DeepPartial<HealthCheckResponse>> {
    const service = (request && request.service) || 'liveness';

    if (service === 'readiness') {
      if (this.ci.redisClient && !this.ci.redisClient.ping()) {
        return {status: HealthCheckResponse_ServingStatus.NOT_SERVING};
      }

      if (this.opts) {
        try {
          if (this.endpoints) {
            for (const service of Object.keys(this.endpoints)) {
              const response = await this.endpoints[service].check({});
              if ('error' in response && (response as any).error) {
                this.opts.logger.warn('Readiness error from ' + service + ':', response);
                return {status: HealthCheckResponse_ServingStatus.NOT_SERVING};
              }
            }
          }

          if (this.opts.readiness && !await this.opts.readiness()) {
            return {status: HealthCheckResponse_ServingStatus.NOT_SERVING};
          }
        } catch (e) {
          return {status: HealthCheckResponse_ServingStatus.NOT_SERVING};
        }
      }
    }

    const response = await this.ci.check({});

    if (!('status' in response)) {
      return {status: HealthCheckResponse_ServingStatus.UNKNOWN};
    }

    return response;
  }

}
