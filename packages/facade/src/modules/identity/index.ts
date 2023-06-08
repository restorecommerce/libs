import { createFacadeModuleFactory } from '../../utils.js';
import { FederatedResourceSchema } from './gql/federation.js';
import { createOIDC } from './oidc/index.js';
import { type IdentityConfig, type IdentityModule } from './interfaces.js';
import { setupApiKey } from './api-key/api-key.js';
import { IdentitySrvGrpcClient } from './grpc/index.js';
import { createOAuth } from './oauth/oauth.js';
import mount from 'koa-mount';

export { type OIDCConfig } from './oidc/index.js';
export type { IdentityModule, IdentityConfig, IdentityContext } from './interfaces.js';

export const identityModule = createFacadeModuleFactory<IdentityConfig, IdentityModule>('identity', (facade, config) => {
  const identitySrvClient = new IdentitySrvGrpcClient(config.config.client.address, {
    ...config.config.client,
    logger: facade.logger,
  });

  if (!!config.apiKey) {
    const apiKey = setupApiKey({
      logger: facade.logger,
      apiKey: config.apiKey
    });

    if (apiKey) {
      facade.koa.use(apiKey.router.routes());
      facade.koa.use(apiKey.app);
    }
  }

  if (config.oidc) {
    const {provider, router} = createOIDC({
      identitySrvClient,
      env: facade.env,
      logger: facade.logger,
      config: config.oidc
    });

    facade.koa.use(router.routes());
    facade.koa.use(mount(provider.app));
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
