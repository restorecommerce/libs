import { IdentitySrvGrpcClient } from "../../../../rc-grpc-clients/dist";
import { GrpcClientConfig } from "@restorecommerce/grpc-client";
import { FacadeModule, createFacadeModuleFactory, Facade } from "../../facade";

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


export const identityModule = createFacadeModuleFactory<IdentityConfig, IdentityModule>('identity', (facade, config) => {
  const identity = {
    client: new IdentitySrvGrpcClient(config.client)
  };
  facade.modules.identity = identity;
  facade.koa.use(async (ctx, next) => {
    ctx.identity = identity;
    await next();
  });
});
