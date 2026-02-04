import mount from 'koa-mount';
import { createFacadeModuleFactory } from '../../utils.js';
import { FederatedResourceSchema } from './gql/federation.js';
import { createOIDC } from './oidc/index.js';
import { type IdentityConfig, type IdentityModule } from './interfaces.js';
import { IdentitySrvGrpcClient } from './grpc/index.js';
import { createOAuth } from './oauth/oauth.js';

export { type OIDCConfig } from './oidc/index.js';
export type { IdentityModule, IdentityConfig, IdentityContext } from './interfaces.js';

export const identityModule = createFacadeModuleFactory<IdentityConfig, IdentityModule>('identity', (facade, config) => {
  const identitySrvClient = new IdentitySrvGrpcClient(config.config.client.address, {
    ...config.config.client,
    logger: facade.logger,
  });

  if (config.oidc) {
    const {provider, router} = createOIDC({
      identitySrvClient,
      env: facade.env,
      logger: facade.logger,
      config: config.oidc
    });
    facade.koa.use(router.routes());
    facade.koa.use(mount(provider));
  }

  if (config.oauth) {
    facade.koa.use(createOAuth().routes());
  }

  const identity = {
    client: identitySrvClient
  };

  facade.koa.context.identitySrvClient = identitySrvClient;

  facade.addApolloService({
    name: 'identity',
    schema: FederatedResourceSchema(config.config)
  });

  facade.koa.use(async (ctx, next) => {
    ctx.identity = identity;
    await next();
  });
});
