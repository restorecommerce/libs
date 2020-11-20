import { PaymentSrvGrpcClient } from "./grpc";
import { ServiceConfig } from "../../gql/protos";
import { FacadeModule, FacadeContext } from "../../interfaces";

export interface PaymentConfig {
  config: ServiceConfig;
}

export interface PaymentContext extends FacadeContext {
  payment: {
    client: PaymentSrvGrpcClient;
  }
}

export type PaymentModule = FacadeModule<PaymentContext>;
