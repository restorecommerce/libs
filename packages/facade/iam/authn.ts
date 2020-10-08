import * as _ from '@restorecommerce/facade/modules/identity/gql/old/types/node_modules/lodash';
import {
  JwtAuthN,
  Jwt,
  IJwt,
  JwtMeta,
  JwtSession
} from '@restorecommerce/iam-authn';
import {
  UserCredentials, BootstrapData,
  BootstrapCredentials, UserSessionData, RestoreCommerceUser
} from './interfaces';
import * as uuid from '@restorecommerce/facade/modules/identity/gql/old/mutation/identity/node_modules/uuid';

import { cfg, jwtSecret } from '../config';

import {
  getRepository, UserRepository, convertDBUser
} from './repository';
import { getRedisCache, RedisWhitelist } from './redis';
import logger from '../logger';

export class InvalidAPIKeyError extends Error { }

export type FacadeCredentials = UserCredentials | BootstrapCredentials;
export type SessionData = UserSessionData | BootstrapData;

export class RestoreCommerceAuthN extends JwtAuthN<FacadeCredentials, SessionData> {
  private repository: UserRepository;
  constructor(jwt: IJwt<SessionData>, private readonly apiKey: string = undefined) {
    super({ jwt });
    if (apiKey) {
      console.log(`API Key is: ${this.apiKey}`);
    }
  }

  setRepository(repository: UserRepository): void {
    this.repository = repository;
  }

  protected async validateCredentials(credentials: FacadeCredentials): Promise<SessionData> {
    const { identifier, password } = credentials as UserCredentials;
    if (!identifier || !password) {
      if (_.isNil(this.apiKey)) {
        throw 'SPECIFY_USER_PASSWORD';
      }

      return this.authenticateAPIKey(credentials as BootstrapCredentials);
    }

    // retrieving user by email or name (both are unique)
    // all errors are internally
    const user: RestoreCommerceUser = await this.repository.login('identifier', identifier, password);
    if (!user.active) {
      throw 'ACTIVATE_USER_FIRST';
    }

    return convertDBUser(user);
    // generating a session token after successful auth
    // return convertedUser;
  }

  /**
   * Retrieves the User, checks if the token should still be valid and updates if necessary.
   * @param data
   * @param meta
   */
  protected async validateSessionData(payload: SessionData, meta: JwtMeta): Promise<SessionData> {
    if (!this.validUserSession(payload)) {
      if (isBootstrapData(payload)) {
        if (_.isEmpty(payload) || !payload.apiKey) {
          throw 'INVALID_TOKEN';
        }
        return { apiKey: true };
      }
      throw 'INVALID_TOKEN';
    }

    const userInfo = payload as UserSessionData;

    const cache: RedisWhitelist = getRedisCache();
    const tokenWhitelisted = await cache.verify(userInfo.id, meta);
    if (tokenWhitelisted) {
      // if token is whitelist user did not receive any updates
      return undefined;
    }

    const field = userInfo.id ? 'id' : 'name';
    const value = userInfo.id ? userInfo.id : userInfo.name;

    // searching by id or name
    const dbUser: RestoreCommerceUser = await this.repository.findUser(field, value);
    if (!dbUser.active) {
      throw 'ACTIVATE_USER_FIRST';
    }

    const lastUpdate = dbUser.meta.modified;
    const tokenIssued = meta.iat; // milliseconds
    const tokenValid = lastUpdate >= tokenIssued;

    if (!tokenValid) {
      await cache.add(userInfo.id, meta);
      return convertDBUser(dbUser);
    }

    return undefined;
  }

  private authenticateAPIKey(credentials: BootstrapCredentials): BootstrapData {
    if (!credentials.apiKey || credentials.apiKey != this.apiKey) {
      throw new InvalidAPIKeyError();
    }
    return { apiKey: true };
  }

  private validUserSession(data: SessionData): boolean {
    return isUserSessionData(data) && (!_.isEmpty(data.name) && !_.isEmpty(data.email) && !_.isEmpty(data.id) && !_.isEmpty(data.role_associations));
  }

  destroyApiKey() {
    authN = null; // deleting reference
    authN = new RestoreCommerceAuthN(new Jwt({
      privateKey: jwtSecret,
      publicKey: jwtSecret
    }));

    authN.setRepository(getRepository());
  }
}

export let authN: RestoreCommerceAuthN;

// singleton
export function initAuthN(): void {
  if (!authN) {
    const authCfg = cfg.get('authentication');
    const jwt: IJwt<SessionData> = new Jwt({
      privateKey: jwtSecret,
      publicKey: jwtSecret
    });

    if (authCfg.apiKey) {

      authN = new RestoreCommerceAuthN(jwt, uuid.v4().replace(/-/g, ''));
      const cache = getRedisCache();
      cache.flush()
        .then(() => logger.verbose('Session tokens cleared from cache'))
        .catch(err => {
          throw err;
        });

    } else {

      authN = new RestoreCommerceAuthN(jwt);
      authN.setRepository(getRepository());
    }
  }
}

export function getSessionMetaInfo(session: JwtSession<any>): JwtMeta {
  return _.pick(session, ['rth', 'jti', 'iat', 'exp', 'deg']);
}

export function isBootstrapData(data: any): data is BootstrapData {
  return 'apiKey' in data;
}

export function isUserSessionData(data: any): data is UserSessionData {
  return !data['apiKey'] && 'name' in data && 'email' in data && 'role_associations' in data;
}

export function isAPIKeyAuthN(object: any): boolean {
  return object instanceof RestoreCommerceAuthN && !!object['apiKey'];
}
