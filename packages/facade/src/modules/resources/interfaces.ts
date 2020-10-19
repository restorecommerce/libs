import { GrpcClientConfig } from "@restorecommerce/grpc-client";
import { ResourcesSrvGrpcClient } from "@restorecommerce/rc-grpc-clients";
import { FacadeModule } from "../../facade";

export interface ResourcesConfig {
  client: GrpcClientConfig
}

export interface ResourcesContext {
  resources: {
    client: ResourcesSrvGrpcClient;
  }
};

export type ResourcesModule = FacadeModule<ResourcesContext>;
