import mount from 'koa-mount';
import { IdentitySrvGrpcClient } from "@restorecommerce/rc-grpc-clients";
import { createFacadeModuleFactory } from "../../utils";
import { FederatedResourceSchema } from './gql/federation';
import { createOIDC  } from './oidc';
import { IdentityConfig, IdentityModule } from './interfaces';

export { OIDCConfig  } from './oidc';
export { IdentityModule, IdentityConfig, IdentityContext }  from './interfaces';

export const identityModule = createFacadeModuleFactory<IdentityConfig, IdentityModule>('identity', (facade, config) => {
  const identitySrvClient = new IdentitySrvGrpcClient(config.identitySrvClientConfig);

  const identity = {
    client: identitySrvClient
  };

  facade.koa.context.identitySrvClient = identitySrvClient;

  facade.addApolloService({
    name: 'identity',
    schema: FederatedResourceSchema(config.config)
  });
  if (config.oidc) {
    const { provider, router } = createOIDC({
      identitySrvClient,
      env: facade.env,
      logger: facade.logger,
      config: config.oidc
    });
    facade.koa.use(router.routes());
    facade.koa.use(mount(provider.app));
  }

  facade.koa.use(async (ctx, next) => {
    ctx.identity = identity;
    await next();
  });
});
