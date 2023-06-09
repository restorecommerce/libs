import { type SchedulingSrvGrpcClient } from './grpc/index.js';
import { type ServiceConfig } from '../../gql/protos/index.js';
import { type FacadeModule, type FacadeContext } from '../../interfaces.js';

export interface SchedulingServiceConfig extends ServiceConfig {
  root: boolean;
}

export interface SchedulingConfig {
  config: SchedulingServiceConfig;
}

export interface SchedulingContext extends FacadeContext {
  scheduling: {
    client: SchedulingSrvGrpcClient;
  };
}

export type SchedulingModule = FacadeModule<SchedulingContext>;

export const namespace = 'scheduling';
