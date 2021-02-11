import { FulfillmentSrvGrpcClient } from "./grpc";
import { ServiceConfig } from "../../gql/protos";
import { FacadeModule, FacadeContext } from "../../interfaces";

export interface FulfillmentServiceConfig extends ServiceConfig {
  root: boolean;
}

export interface FulfillmentConfig {
  config: FulfillmentServiceConfig;
}

export interface FulfillmentContext extends FacadeContext {
  access_control: {
    client: FulfillmentSrvGrpcClient;
  }
}

export type FulfillmentModule = FacadeModule<FulfillmentContext>;

export const namespace = 'fulfillment';
