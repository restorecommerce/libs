import { GrpcClientConfig } from "@restorecommerce/grpc-client";
import { IdentitySrvGrpcClient } from "@restorecommerce/rc-grpc-clients";
import { FacadeModule } from "../../facade";

export interface IdentityConfig {
  client: GrpcClientConfig
}

export interface IdentityContext {
  identity: {
    client: IdentitySrvGrpcClient;
  }
};

export interface IdentityNamespace extends IdentityContext {};

export type IdentityModule = FacadeModule<IdentityContext, IdentityNamespace>;
