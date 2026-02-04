import { randomUUID } from 'crypto';
import { UAParser } from 'ua-parser-js';
import * as requestIp from 'request-ip';
import { ClaimsParameter, KoaContextWithOIDC } from 'oidc-provider';
import {
  AuthenticationLog,
  AuthenticationLogList,
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/authentication_log.js';
import { Subject } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/auth.js';
import { Logger } from '@restorecommerce/logger';
import {
  type TokenResponseBody,
  InvalidPasswordGrant,
  type OIDCPasswordGrantTypeConfig,
  type LoginFnResponse,
} from './interfaces.js';
import { nanoid, epochTime } from './utils.js';
import { decomposeError } from '../../../utils.js';

export const registerPasswordGrantType = (config: OIDCPasswordGrantTypeConfig, logger?: Logger) => {
  const performPasswordGrant = async (ctx: KoaContextWithOIDC, clientId: string, identifier: string, password: string, key: string): Promise<TokenResponseBody> => {
    const client = await ctx.oidc.provider.Client.find(clientId);

    let account: LoginFnResponse;
    try {
      let user = {
        identifier,
        [key]: password
      };
      account = await config.authenticate(ctx as any, user);
    } catch (err: any) {
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

    delete account.user.tokens;
    const expiresIn = config.tokenExpiration || 86400;
    const tokenName = randomUUID().replace(/-/g, '');
    const claims: ClaimsParameter = {
      id_token: {
        sub: {
          essential: true,
          value: account.user.id,
        },
        token_name: {
          essential: true,
          value: tokenName,
        },
        user: {
          data: account.user,
        }
      },
    };

    const {AccessToken} = ctx.oidc.provider;
    // for interactive login (to update user data in arangodb with token name)
    const defaultScope = account.user.defaultScope;

    const at = new AccessToken({
      gty: 'password',
      scope: 'openid',
      accountId: account.user.id,
      claims: claims,
      client,
      grantId: (ctx.oidc as any).uid,
      expiresWithSession: false,
      expiresIn,
    });
    ctx.oidc.entity('AccessToken', at);
    const accessToken = await at.save();
    const last_access = account.user?.lastAccess ? new Date(account.user.lastAccess) : undefined;

    const generateIdToken = async (ctx: KoaContextWithOIDC, clientId: string, expiresIn: number, claims: ClaimsParameter): Promise<string> => {
      const client = await ctx.oidc.provider.Client.find(clientId);
      ctx.oidc.entity('Client', client);
      const {IdToken} = ctx.oidc.provider;
      const jti = nanoid();
      const exp = epochTime() + expiresIn;
      const token = new IdToken(
        {...claims},
        {ctx}
      );

      token.set('jti', jti);
      token.set('scope', 'openid profile');
      return await token.issue({use: 'idtoken', expiresAt: exp});
    };

    const idToken = await generateIdToken(ctx, clientId, expiresIn, claims);
    logger?.debug('ID Token granted:', idToken);
    return {
      access_token: accessToken,
      id_token: idToken,
      expires_in: new Date((epochTime() + at.expiration) * 1000),
      last_login: new Date(),
      token_type: at.tokenType,
      scope: 'openid',
      token_name: tokenName,
      default_scope: defaultScope,
      last_access
    };
  };

  config.provider.registerGrantType(
    'password',
    async (ctx: KoaContextWithOIDC, next: () => Promise<any>) => {
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
        let os: string, agentName: string;
        const agent = new UAParser(req.headers['user-agent']);
        if (agent) {
          os = agent.getOS().toString();
          agentName = agent.getUA();
        }

        const resp_body = await performPasswordGrant(ctx, client.clientId, (body as any).identifier, passwordValue, key);
        ctx.body = resp_body;
        const token_name = resp_body.token_name;
        const token = resp_body.access_token;
        const scope = resp_body.default_scope;
        let ipv4_address: string, ipv6_address: string;
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
          date: new Date(),
          activity: 'login',
          tokenName: token_name
        });

        config.authLogService?.create(AuthenticationLogList.fromPartial({
          items: [authLogItem],
          subject: Subject.fromPartial({token, scope}) as Subject
        }));
        await next?.();
      } catch (ex: any) {
        if (ex instanceof InvalidPasswordGrant) {
          logger?.warn('OIDC:', decomposeError(ex));
          ctx.status = 401;
          ctx.type = 'json';
          ctx.body = {
            error: ex.error,
            error_description: ex.error_description,
          };
        } else {
          logger?.error('OIDC:', decomposeError(ex));
          ctx.status = 400;
          ctx.body = {
            error: 'bad_request',
            error_description: 'Bad request'
          };
        }
      }
    },
    ['identifier', 'password'],
    [],
  );
};
