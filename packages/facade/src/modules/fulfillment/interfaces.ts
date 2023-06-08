import { type FulfillmentSrvGrpcClient } from './grpc/index.js';
import { type ServiceConfig } from '../../gql/protos/index.js';
import { type FacadeModule, type FacadeContext } from '../../interfaces.js';

export interface FulfillmentServiceConfig extends ServiceConfig {
  root: boolean;
}

export interface FulfillmentConfig {
  config: FulfillmentServiceConfig;
}

export interface FulfillmentContext extends FacadeContext {
  access_control: {
    client: FulfillmentSrvGrpcClient;
  };
}

export type FulfillmentModule = FacadeModule<FulfillmentContext>;

export const namespace = 'fulfillment';
