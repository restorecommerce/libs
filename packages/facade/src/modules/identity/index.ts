import { GrpcClientConfig } from "@restorecommerce/grpc-client";
import { IdentitySrvGrpcClient } from "@restorecommerce/rc-grpc-clients";
import { FacadeModule, createFacadeModuleFactory, Facade } from "../../facade";
import { FederatedIdentitySchema } from './gql/index';

export interface IdentityConfig {
  client: GrpcClientConfig
}

export interface IdentityContext {
  identity: {
    client: IdentitySrvGrpcClient;
  }
};

export type IdentityModule = FacadeModule<IdentityContext>;


export const identityModule = createFacadeModuleFactory<IdentityConfig, IdentityModule>('identity', (facade, config) => {
  const identity = {
    client: new IdentitySrvGrpcClient(config.client)
  };
  facade.addApolloService({
    name: 'identity',
    schema: FederatedIdentitySchema
  });

  facade.koa.use(async (ctx, next) => {
    ctx.identity = identity;
    await next();
  });
});
