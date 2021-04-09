import { OrderingSrvGrpcClient } from "./grpc";
import { ServiceConfig } from "../../gql/protos";
import { FacadeModule, FacadeContext } from "../../interfaces";

export interface OrderingServiceConfig extends ServiceConfig {
  root: boolean;
}

export interface OrderingConfig {
  config: OrderingServiceConfig;
}

export interface OrderingContext extends FacadeContext {
  ordering: {
    client: OrderingSrvGrpcClient;
  }
}

export type OrderingModule = FacadeModule<OrderingContext>;

export const namespace = 'ordering';
