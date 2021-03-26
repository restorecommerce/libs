import Koa from 'koa';
import {
  TokenResponseBody,
  InvalidPasswordGrant,
  OIDCPasswordGrantTypeConfig,
  Claims,
  LoginFnResponse
} from './interfaces';
import { nanoid, epochTime } from './utils';
import * as useragent from 'useragent';
import * as uuid from 'uuid';
import * as requestIp from 'request-ip';
import {
  AuthenticationLog,
  AuthenticationLogList
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/authentication_log';
import { Subject } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/auth';

export const registerPasswordGrantType = (config: OIDCPasswordGrantTypeConfig) => {
  const performPasswordGrant = async (ctx: Koa.Context, clientId: string, identifier: string, password: string, key: string): Promise<TokenResponseBody> => {
    const client = await ctx.oidc.provider.Client.find(clientId);

    let account: LoginFnResponse;
    try {
      let user = {
        identifier,
        [key]: password
      };
      account = await config.authenticate(ctx as any, user);
    } catch (err) {
      if (err.details && err.details.includes(':')) {
        err.details = err.details.split(':')[1].trim();
      }
      throw new InvalidPasswordGrant(err.details);
    }

    if (!account || !account.user) {
      if (account.error && account.error.message) {
        throw new InvalidPasswordGrant('invalid credentials provided: ' + account.error.message);
      }

      throw new InvalidPasswordGrant('invalid credentials provided');
    }

    let expiresIn = config.tokenExpiration;
    if (!expiresIn) {
      // default value of 1 day expiration when not set in config
      expiresIn = 86400;
    }

    const claims: Claims = {
      sub: account.user.id,
      data: account.user
    }

    const {AccessToken} = ctx.oidc.provider;
    // for interactive login (to update user data in arangodb with token name)
    let tokenName = uuid.v4().replace(/-/g, '');
    claims.token_name = tokenName;
    let defaultScope = claims.data.defaultScope;

    const at = new AccessToken({
      gty: 'password',
      scope: 'openid',
      accountId: account.user.id,
      claims,
      client,
      grantId: ctx.oidc.uid,
      expiresWithSession: false,
      expiresIn
    });
    ctx.oidc.entity('AccessToken', at);
    const accessToken = await at.save();

    let last_access;
    if (claims?.data?.lastAccess) {
      last_access = claims.data.lastAccess;
    }

    if (claims?.data?.tokens) {
      claims.data = {
        ...claims.data,
        tokens: []
      }
    }

    const generateIdToken = async (ctx: Koa.Context, clientId: string, expiresIn: number, claims: Claims): Promise<string> => {
      const client = await ctx.oidc.provider.Client.find(clientId);
      ctx.oidc.entity('Client', client);
      const {IdToken} = ctx.oidc.provider;
      const jti = nanoid();
      const exp = epochTime() + expiresIn;
      const token = new IdToken({
        ...claims,
      }, {ctx});

      token.set('jti', jti);
      token.scope = 'openid profile';
      return await token.issue({expiresAt: exp});
    };

    const idToken = await generateIdToken(ctx, clientId, expiresIn, claims);
    return {
      access_token: accessToken,
      id_token: idToken,
      expires_in: epochTime() + at.expiration,
      last_login: epochTime(),
      token_type: at.tokenType,
      scope: 'openid',
      token_name: tokenName,
      default_scope: defaultScope,
      last_access
    };
  };

  config.provider.registerGrantType(
    'password',
    async (ctx: Koa.Context, next: () => Promise<any>) => {
      try {
        const {body, client} = ctx.oidc;
        ctx.type = 'json';
        let passwordValue;
        let key = 'password';
        if (body.password) {
          passwordValue = body.password;
        } else if (body.token) {
          passwordValue = body.token;
          key = 'token';
        }
        const req = ctx.request;
        let os, agentName;
        const agent = useragent.parse(req.headers['user-agent']);
        if (agent) {
          os = agent.os.toString();
          agentName = agent.toAgent();
        }

        ctx.body = await performPasswordGrant(ctx, client.clientId, body.identifier, passwordValue, key);

        const token_name = (ctx.body as TokenResponseBody).token_name;
        const token = (ctx.body as TokenResponseBody).access_token;
        const scope = (ctx.body as TokenResponseBody).default_scope;
        let ipv4_address, ipv6_address;
        const clientIP = requestIp.getClientIp(req.req);
        if (clientIP && clientIP.includes('.')) {
          ipv4_address = clientIP;
        } else if (clientIP && clientIP.includes(':')) {
          ipv6_address = clientIP;
        }

        const authLogItem = AuthenticationLog.fromPartial({
          ipv4Address: ipv4_address,
          ipv6Address: ipv6_address,
          operatingSystem: os,
          userAgent: agentName,
          date: new Date().getTime(),
          activity: 'login',
          tokenName: token_name
        })

        await config.authLogService.Create(AuthenticationLogList.fromPartial({
          items: [authLogItem],
          subject: Subject.fromPartial({token, scope})
        }));
      } catch (ex) {
        if (ex instanceof InvalidPasswordGrant) {
          ctx.status = 401;
          ctx.type = 'json';
          ctx.body = {
            error: ex['error'],
            error_description: ex['error_description']
          };
        } else {
          ctx.status = 400;
          ctx.body = {
            error: 'bad_request',
            error_description: 'Bad request'
          };
        }
      }
      await next();
    },
    ['identifier', 'password'],
    [],
  );
};
