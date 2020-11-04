import { OrderingSrvGrpcClient } from "@restorecommerce/rc-grpc-clients";
import { FacadeModule } from "../../facade";
import { GrpcClientConfig } from "@restorecommerce/grpc-client";

export interface OrderingConfig {
  config: GrpcClientConfig;
}

export interface OrderingContext {
  ordering: {
    client: OrderingSrvGrpcClient;
  }
}

export type OrderingModule = FacadeModule<OrderingContext>;
