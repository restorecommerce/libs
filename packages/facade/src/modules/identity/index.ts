import { createFacadeModuleFactory } from "../../utils";
import { FederatedResourceSchema } from './gql/federation';
import { createOIDC } from './oidc';
import { IdentityConfig, IdentityModule } from './interfaces';
import { setupApiKey } from "./api-key/api-key";
import { IdentitySrvGrpcClient } from "./grpc";
import { createOAuth } from "./oauth/oauth";

export { OIDCConfig } from './oidc';
export { IdentityModule, IdentityConfig, IdentityContext } from './interfaces';

const mount = eval('require("koa-mount")');

export const identityModule = createFacadeModuleFactory<IdentityConfig, IdentityModule>('identity', (facade, config) => {
  const identitySrvClient = new IdentitySrvGrpcClient(config.identitySrvClientConfig, facade.logger);

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
