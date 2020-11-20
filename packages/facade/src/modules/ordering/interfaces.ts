import { OrderingSrvGrpcClient } from "./grpc";
import { ServiceConfig } from "../../gql/protos";
import { FacadeModule, FacadeContext } from "../../interfaces";

export interface OrderingConfig {
  config: ServiceConfig;
}

export interface OrderingContext extends FacadeContext {
  ordering: {
    client: OrderingSrvGrpcClient;
  }
}

export type OrderingModule = FacadeModule<OrderingContext>;
