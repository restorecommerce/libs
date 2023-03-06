import { Adapter, errors } from 'oidc-provider';
import Provider from 'oidc-provider';
import { IdentityContext } from '../interfaces';
import { ServiceClient as authLogService } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/authentication_log';
import { ServiceClient as tokenService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/token";
import { User } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/user";

export interface OIDCHbsTemplates {
  login?: string;
  layout?: string;
  consent?: string;
}

export interface OIDCConfig {
  remoteTokenService?: tokenService;
  localTokenServiceFactory?: (type: string) => Adapter;
  loginFn?: OIDCBodyLoginFn;
  issuer: string;
  jwks: any;
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

export type UserKey = keyof User;

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
  'tokens' |
  'lastAccess';

export type AuthUser = Pick<User, AuthUserKeyWhitelist>;

export interface LoginFnResponse {
  user?: AuthUser;
  error?: OIDCError;
  identifier?: string;
  remember?: boolean;
}

export type OIDCBodyLoginFn = (ctx: IdentityContext, body: any) => Promise<LoginFnResponse>;

export type OIDCBodyLoginCredentials = (ctx: IdentityContext, credentials: UserCredentials) => Promise<LoginFnResponse>;

export type OIDCLoginFn = (ctx: IdentityContext, identifier?: string, password?: string, remember?: boolean) => Promise<LoginFnResponse>;

export interface UserCredentials {
  identifier: string;
  password?: string;
  token?: string;
}

export interface OIDCPasswordGrantTypeConfig {
  provider: Provider;
  authenticate: OIDCBodyLoginCredentials;
  tokenExpiration?: number;
  authLogService: authLogService;
}

export interface TokenResponseBody {
  access_token?: string;
  id_token?: string;
  expires_in?: number;
  last_login?: number;
  token_type?: string;
  scope?: string;
  subject_id?: string;
  token_name?: string;
  default_scope?: string;
  last_access?: number;
}

export class InvalidPasswordGrant extends errors.InvalidGrant {
  constructor(detail: string) {
    super('invalid_password_grant');
    Object.assign(this, {error_description: detail, error_detail: detail});
  }
}

export interface Claims {
  sub: string;
  data: AuthUser;
  [key: string]: any;
}
