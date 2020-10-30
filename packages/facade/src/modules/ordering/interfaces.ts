import { GrpcClientConfig } from "@restorecommerce/grpc-client";
import { OrderingSrvGrpcClient } from "@restorecommerce/rc-grpc-clients";
import { FacadeModule } from "../../facade";

export interface OrderingConfig {
  client: GrpcClientConfig
}

export interface OrderingContext {
  ordering: {
    client: OrderingSrvGrpcClient;
  }
}

export type OrderingModule = FacadeModule<OrderingContext>;
