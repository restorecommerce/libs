import { GrpcClientConfig } from "@restorecommerce/grpc-client";
import { IdentitySrvGrpcClient } from "@restorecommerce/identity-srv-grpc-client";
import { FacadeModule } from "../../interfaces";

export interface IdentityConfig {
  client: GrpcClientConfig
}

export interface IdentityContext {
  identity: {
    client: IdentitySrvGrpcClient;
  }
};

export interface IdentityNamespace extends IdentityContext {};

export type IdentityModule = FacadeModule<IdentityConfig, IdentityContext, IdentityNamespace>;
