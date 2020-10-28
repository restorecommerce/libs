import { GrpcClientConfig } from "@restorecommerce/grpc-client";
import { IdentitySrvGrpcClient } from "@restorecommerce/rc-grpc-clients";
import { FacadeModule } from "../../facade";

export interface IdentityConfig {
  service: IdentitySrvGrpcClient;
}

export interface IdentityContext {
  identity: {
    service: IdentitySrvGrpcClient;
  }
};

export type IdentityModule = FacadeModule<IdentityContext>;
