import { PaymentSrvGrpcClient } from "./grpc";
import { ServiceConfig } from "../../gql/protos";
import { FacadeModule, FacadeContext } from "../../interfaces";

export interface PaymentServiceConfig extends ServiceConfig {
  root: boolean;
}

export interface PaymentConfig {
  config: PaymentServiceConfig;
}

export interface PaymentContext extends FacadeContext {
  payment: {
    client: PaymentSrvGrpcClient;
  }
}

export type PaymentModule = FacadeModule<PaymentContext>;

export const namespace = 'payment';
