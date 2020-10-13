import { IdentitySrvGrpcClient } from "@restorecommerce/grpc-clients-generated";
import { GrpcClientConfig } from "@restorecommerce/grpc-client";
import { FacadeModule } from "../../interfaces";
import { createModule } from "../..";

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

createModule()

export const identityModule: IdentityModule = (config) => {
  return (facade) => {
    const identity = {
      client: new IdentitySrvGrpcClient(config.client)
    };
    facade.modules.identity = identity;
    facade.koa.use(ctx => ctx.identity = identity);
  };
}

identityModule.key = 'identity';
