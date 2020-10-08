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

export const identityModule: IdentityModule = {
  key: 'identity',
  initialize(facade, config) {
    const identity = {
      client: new IdentitySrvGrpcClient(config.client)
    };
    facade.modules.identity = identity;
    facade.koa.use(ctx => ctx.identity = identity);
  }
};
