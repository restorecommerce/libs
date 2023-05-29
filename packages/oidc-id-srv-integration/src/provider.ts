import Koa from 'koa';
import render from 'koa-ejs';
import mount from 'koa-mount';
import * as Router from 'koa-router';
import * as path from 'path';

import Provider, { errors, interactionPolicy, KoaContextWithOIDC } from 'oidc-provider';
import { Config, Account, InvalidPasswordGrant, JwtMeta, TokenResponseBody } from './interfaces';
import { setupRouts } from './routs';
import { epochTime, nanoid } from './utls';
import { createIdentityServiceAdapterClass } from './tokenservice-adapter';
import logger from './logger';
import { cfg } from './config';
import { getRedisInstance } from './redis';
import { createClient, createChannel } from '@restorecommerce/grpc-client';
import { TokenServiceDefinition } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/token';

// TODO add authEP handler
// const authEPHandler = new EndpointHandler('authentication_log');

const grpcTokenConfig = cfg.get('client:token');
const channel = createChannel(grpcTokenConfig.address);
const tokenService = createClient({
  ...grpcTokenConfig,
  logger
}, TokenServiceDefinition, channel);
const adapter = createIdentityServiceAdapterClass(tokenService, logger, getRedisInstance(cfg.get('redis:db-indexes:db-findByToken')));


class OIDCProvider {
  private provider: Provider;
  private authenticate: any;
  private afterPasswordGrantHook: any;

  constructor(issuer: string, app: Koa, router: Router, config: Config) {
    this.provider = new Provider(issuer, this.getConfiguration(config));
    this.authenticate = config.authenticate;
    this.afterPasswordGrantHook = config.afterPasswordGrantHook;

    render(app, {
      cache: false,
      viewExt: 'ejs',
      layout: '_layout',
      root: path.join(__dirname, '/views'),
    });

    setupRouts(this.provider, router, config);

    this.provider.registerGrantType(
      'password',
      this.passwordTokenExchangeHandler,
      ['username', 'password'],
      [],
    );

    app.use(mount(config.pathPrefix, this.provider.app));

    app.use(this.middleware);
  }

  public generateIdToken = async (
    ctx: Koa.Context,
    clientId: string,
    claims: any,
  ): Promise<{ jwtMeta: JwtMeta; idToken: string }> => {
    ctx = ctx as KoaContextWithOIDC;
    const client = await ctx.oidc.provider.Client.find(clientId);
    ctx.oidc.entity('Client', client);
    const { IdToken } = ctx.oidc.provider;
    const jti = nanoid();
    const iat = epochTime(); // new IdToken will internally create timestamp
    const exp = epochTime() + 86400; // todo, remove hardcoded
    const token = new IdToken({
      ...claims,
    }, { ctx });

    token.set('jti', jti);
    token.scope = 'openid';
    const tokenString = await token.issue({ use: 'idtoken', expiresAt: exp }); // todo, ???
    const jwtMeta = { jti, exp, iat };

    return { jwtMeta, idToken: tokenString };
  };

  public validateIdToken = async (clientId: string, idToken: string) => {
    const client = await this.provider.Client.find(clientId);
    // @ts-ignore TS2339 validate sould be marked as static
    return await this.provider.IdToken.validate(idToken, client);
  };

  public getValidAccessToken = async (ctx: Koa.Context) => {
    const accessTokenString = ctx.oidc.getAccessToken({ acceptDPoP: true });
    const { AccessToken } = ctx.oidc.provider;
    return await AccessToken.find(accessTokenString);
  };

  public destroyAccessToken = async (ctx: Koa.Context) => {
    try {
      const accessTokenString = ctx.oidc.getAccessToken({ acceptDPoP: true });
      const token = await this.provider.AccessToken.find(accessTokenString);
      if (token) {
        await token.destroy();
      }
    } catch (err) {
      // console.log(err);
    }
  };

  public performPasswordGrant = async (
    ctx: Koa.Context,
    clientId: string,
    credential: string,
    value: string,
    password: string,
  ): Promise<TokenResponseBody> => {
    ctx = ctx as KoaContextWithOIDC;
    const client = await ctx.oidc.provider.Client.find(clientId);
    if (!client) {
      throw new errors.InvalidClient('client not found');
    }

    let account;
    try {
      account = await this.authenticate(credential, value, password) as Account;
    } catch (err) {
      throw new InvalidPasswordGrant('invalid credentials provided');
    }

    if (!account) {
      throw new InvalidPasswordGrant('invalid credentials provided');
    }

    const claims = await account.claims();

    const { AccessToken } = ctx.oidc.provider;
    const at = new AccessToken({
      gty: 'password',
      scope: 'openid',
      accountId: account.accountId,
      claims,
      client,
      grantId: ctx.oidc.uid,
      expiresWithSession: false,
    });
    ctx.oidc.entity('AccessToken', at);
    const accessToken = await at.save();

    const { jwtMeta, idToken } = await this.generateIdToken(ctx, clientId, claims);
    this.afterPasswordGrantHook(account, accessToken, idToken, jwtMeta);

    return {
      access_token: accessToken,
      id_token: idToken,
      expires_in: at.expiration.toString(),
      token_type: at.tokenType,
      scope: 'openid',
      claims
    };
  };

  private getConfiguration = (config: Config) => {
    const ret: any = {
      findAccount: config.findAccount,
      features: {
        devInteractions: { enabled: false },
        sessionManagement: { enabled: false },
      },
      interactions: {
        policy: interactionPolicy.base(),
        url(ctx: Koa.Context, interaction: any) {
          return `${config.pathPrefix}/interaction/${ctx.oidc.uid}`;
        },
      },
      scopes: ['openid', 'offline_access'],
      cookies: {
        keys: [], // todo, there are some errors when setting this option, and is it really needed?
        long: {
          httpOnly: true,
          maxAge: 1209600000,
          overwrite: true,
          sameSite: 'none',
          signed: false,
        },
        names: {
          interaction: '_interaction',
          resume: '_interaction_resume',
          session: '_session',
          state: '_state',
        },
        short: {
          httpOnly: true,
          maxAge: 600000,
          overwrite: true,
          sameSite: 'lax',
          signed: false,
        },
      },
      claims: {
        acr: null,
        sid: null,
        auth_time: null,
        iss: null,
        openid: ['sub', 'data'],
      },
      formats: {
        AccessToken: 'opaque', // opaque, jwt
        ClientCredentials: undefined,
      },
      ttl: {
        AccessToken: 86400 * 7, // 1 week
        IdToken: 86400, // 1 day
      },
      adapter,
      issueRefreshToken: async (ctx: Koa.Context, client: any, code: any) => {
        // never allow for implicit or password flow
        if (client.grantTypes.includes('implicit') || client.grantTypes.includes('password')) {
          return false;
        }
        return client.grantTypes.includes('refresh_token');
      },
    };

    // if (config.redisInstance) {
    //   setRedisInstance(config.redisInstance);
    //   ret.adapter = RedisAdapter;
    // }

    if (config.clients) {
      ret.clients = config.clients;
    }

    if (config.jwks) {
      ret.jwks = config.jwks;
    }

    return ret;
  };

  private middleware = async (ctx: Koa.Context, next: () => Promise<any>) => {
    if (!ctx.oidc) {
      Object.defineProperty(ctx, 'oidc', { value: new this.provider.OIDCContext(ctx) });
    }
    await next();
  };

  private passwordTokenExchangeHandler = async (ctx: KoaContextWithOIDC, next: () => Promise<any>) => {
    const { params, client } = ctx.oidc;

    if (!params) {
      throw new InvalidPasswordGrant('params missing');
    }

    if (!client) {
      throw new errors.InvalidClient('client not set');
    }

    ctx.body = await this.performPasswordGrant(ctx, client.clientId, 'name', params.username as string, params.password as string);

    await next();
  };
}

export { OIDCProvider };
