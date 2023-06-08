import { type PaymentSrvGrpcClient } from './grpc/index.js';
import { type ServiceConfig } from '../../gql/protos/index.js';
import { type FacadeModule, type FacadeContext } from '../../interfaces.js';

export interface PaymentServiceConfig extends ServiceConfig {
  root: boolean;
}

export interface PaymentConfig {
  config: PaymentServiceConfig;
}

export interface PaymentContext extends FacadeContext {
  payment: {
    client: PaymentSrvGrpcClient;
  };
}

export type PaymentModule = FacadeModule<PaymentContext>;

export const namespace = 'payment';
