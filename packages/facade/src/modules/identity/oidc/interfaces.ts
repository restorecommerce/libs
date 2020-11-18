import { TokenService } from '@restorecommerce/rc-grpc-clients';
import { JSONWebKeySet, } from 'jose';

export interface OIDCHbsTemplates {
  login?: string;
  layout?: string;
}

export interface OIDCConfig {
  tokenService?: TokenService;
  issuer: string;
  jwks: JSONWebKeySet;
  client_id: string;
  client_secret: string;
  cookies: {
    keys: string[]
  };
  templates?: OIDCHbsTemplates;
  redirect_uris: string[];
}
