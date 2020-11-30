import { TokenService, User } from '@restorecommerce/rc-grpc-clients';
import { JSONWebKeySet, } from 'jose';
import { Adapter } from 'oidc-provider';
import { IdentityContext } from '../interfaces';

export interface OIDCHbsTemplates {
  login?: string;
  layout?: string;
  consent?: string;
}


export interface OIDCConfig {
  remoteTokenService?: TokenService;
  localTokenServiceFactory?: (type: string) => Adapter;
  loginFn?: OIDCLoginFn;
  issuer: string;
  jwks: JSONWebKeySet;
  client_id: string;
  client_secret: string;
  cookies: {
    keys: string[]
  };
  templates?: OIDCHbsTemplates;
  redirect_uris: string[];
  post_logout_redirect_uris: string[];
}

export interface OIDCError {
  key: string;
  message?: string;
}

export type AuthUserKeyWhitelist =
  'id' |
  'name' |
  'email' |
  'localeId' |
  'timezoneId' |
  'roleAssociations' |
  'firstName' |
  'lastName' |
  'defaultScope' |
  'tokens';

export type AuthUser = Pick<User, AuthUserKeyWhitelist>;

export interface OIDCLoginFn {
  (ctx: IdentityContext, body: any): Promise<{
    user?: AuthUser;
    error?: OIDCError;
    identifier?: string;
    remember?: boolean;
  }>;
}
