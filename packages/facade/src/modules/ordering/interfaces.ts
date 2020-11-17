import { OrderingSrvGrpcClient } from "./grpc";
import { FacadeModule } from "../../facade";
import { ServiceConfig } from "../../gql/protos";

export interface OrderingConfig {
  config: ServiceConfig;
}

export interface OrderingContext {
  ordering: {
    client: OrderingSrvGrpcClient;
  }
}

export type OrderingModule = FacadeModule<OrderingContext>;
