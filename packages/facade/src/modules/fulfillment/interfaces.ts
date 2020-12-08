import { FulfillmentSrvGrpcClient } from "./grpc";
import { ServiceConfig } from "../../gql/protos";
import { FacadeModule, FacadeContext } from "../../interfaces";

export interface FulfillmentConfig {
  config: ServiceConfig;
}

export interface FulfillmentContext extends FacadeContext {
  fulfillment: {
    client: FulfillmentSrvGrpcClient;
  }
}

export type FulfillmentModule = FacadeModule<FulfillmentContext>;

export const namespace = 'fulfillment';
