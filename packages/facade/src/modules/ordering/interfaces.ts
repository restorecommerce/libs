import { type OrderingSrvGrpcClient } from './grpc/index.js';
import { type ServiceConfig } from '../../gql/protos/index.js';
import { type FacadeModule, type FacadeContext } from '../../interfaces.js';

export interface OrderingServiceConfig extends ServiceConfig {
  root: boolean;
}

export interface OrderingConfig {
  config: OrderingServiceConfig;
}

export interface OrderingContext extends FacadeContext {
  ordering: {
    client: OrderingSrvGrpcClient;
  };
}

export type OrderingModule = FacadeModule<OrderingContext>;

export const namespace = 'ordering';
