import { Provider } from 'oidc-provider';
import helmet from 'koa-helmet';
import { Logger } from 'winston';
import { IdentityContext } from '../interfaces';
import { OIDCConfig } from './interfaces';
import { createOIDCRouter } from './router';
import { createIdentityServiceAdapterClass } from './adapter';
import { findUserById, loginUserBody, loginUserCredentials } from './user';
import { IdentitySrvGrpcClient } from "../grpc";
import { registerPasswordGrantType } from "./password-grant";

export { OIDCConfig };
export { createOIDCRouter, CreateOIDCRouterArgs } from './router';

export interface CreateOIDCArgs {
  logger: Logger;
  identitySrvClient: IdentitySrvGrpcClient;
  config: OIDCConfig;
  env: string;
}

export function createOIDC({
                             identitySrvClient,
                             env,
                             logger,
                             config: {
                               loginFn,
                               post_logout_redirect_uris,
                               localTokenServiceFactory,
                               remoteTokenService,
                               cookies,
                               redirect_uris,
                               client_id,
                               client_secret,
                               issuer,
                               jwks,
                               templates
                             }
                           }: CreateOIDCArgs) {
  const adapterClass = createIdentityServiceAdapterClass(remoteTokenService ?? identitySrvClient.token, logger, localTokenServiceFactory);
  const provider = new Provider(issuer, {
    adapter: adapterClass,
    clients: [{
      post_logout_redirect_uris,
      client_id,
      client_secret,
      id_token_signed_response_alg: 'HS256',
      grant_types: ['refresh_token', 'authorization_code', 'password'],
      redirect_uris,
      scopes: ['openid', 'offline_access'],
      response_types: [
        'code'
      ],
      token_endpoint_auth_method: 'client_secret_basic',
    }],
    // issueRefreshToken:  async (ctx, client, code) => {
    //   // Always issue refresh token
    //   return client.grantTypeAllowed('refresh_token');
    // },
    jwks,
    ttl: {
       Session: (1 * 24 * 60 * 60) * 1000
    },
    cookies: {
      long: {signed: false}, // 1 day in ms
      short: {signed: false},
      keys: cookies.keys,
    },
    // oidc-provider only looks up the accounts by their ID when it has to read the claims,
    // passing it our Account model method is sufficient, it should return a Promise that resolves
    // with an object with accountId property and a claims method.
    findAccount: async (ctx: any, id: string) => {
      try {
        const userService = (ctx as IdentityContext)?.identitySrvClient?.user;
        return {
          accountId: id,
          claims: async (use, scope) => {
            try {
              const user = await findUserById(userService, id);
              return {
                sub: id,
                data: user
              };
            } catch (error) {
              logger.error('OIDC findAccount claims error', error);
              return {
                sub: id,
                data: {
                  id,
                }
              };
            }
          },
        };
      } catch (error) {
        logger.error('OIDC findAccount error', error);
      }
    },
    claims: {
      acr: null,
      sid: null,
      auth_time: null,
      iss: null,
      openid: ['sub', 'data'],
    },
    responseTypes: [
      'code',
      'id_token',
      'id_token token',
      'code id_token',
      'code token',
      'code id_token token',
      'none',
    ],
    // let's tell oidc-provider where our own interactions will be
    // setting a nested route is just good practice so that users
    // don't run into weird issues with multiple interactions open
    // at a time.
    interactions: {
      url(ctx) {
        return `/interaction/${(ctx.oidc as any).uid}`;
      },
    },
    features: {
      introspection: {
        enabled: true
      },
      revocation: {
        enabled: true
      },
      devInteractions: {
        // enabled: dev ?? false
        enabled: false
      },
    },
  });

  // Disabled due to playground being disabled
  // provider.use(helmet());

  const router = createOIDCRouter({
    loginFn: loginFn ?? loginUserBody,
    templates,
    logger,
    provider,
    env,
  });

  registerPasswordGrantType({
    authLogService: identitySrvClient.authentication_log,
    authenticate: loginUserCredentials,
    provider
  })

  // Disable forbidding redirect to http/localhost in dev mode
  if (env === 'development') {
    const proto = (provider.Client as any)?.Schema?.prototype;
    if (proto) {
      const {invalidate: orig} = proto;
      proto.invalidate = function invalidate(message: string, code: string) {
        if (code === 'implicit-force-https' || code === 'implicit-forbid-localhost') {
          return;
        }
        orig.call(this, message);
      };
    }
  }

  return {
    provider,
    router
  };
}
