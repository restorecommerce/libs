import {
  type UserServiceClient as userService,
  LoginRequest,
  FindRequest,
  type User
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/user.js';
import { type OIDCBodyLoginFn, type AuthUserKeyWhitelist, type AuthUser, type OIDCLoginFn, type OIDCBodyLoginCredentials } from './interfaces.js';

const KEY_WHITELIST: Array<AuthUserKeyWhitelist> = [
  'id',
  'name',
  'email',
  'localeId',
  'timezoneId',
  'roleAssociations',
  'firstName',
  'lastName',
  'defaultScope',
  'tokens'
];

const pick = (obj: User, keys: (keyof User)[]): Pick<User, keyof User> => {
  const ret: any = {};
  keys.forEach(key => {
    ret[key] = obj[key];
  });
  return ret;
};

export const loginUser: OIDCLoginFn = async (ctx, identifier, password, remember) => {
  if (!identifier || !password) {
    return {
      identifier,
      remember,
      error: {
        key: 'MISSING_IDENTIFIER_OR_PASSWORD',
        message: 'Missing identifier or password'
      }
    };
  }

  try {
    const result = await ctx.identitySrvClient.user.login(LoginRequest.fromPartial({
      identifier,
      password,
    }));

    if (!result || !result.payload || result.status.code !== 200) {
      return {
        error: {
          key: 'INVALID_IDENTIFIER_OR_PASSWORD',
          message: 'Invalid identifier or password'
        }
      };
    }
    return {
      user: pick(result.payload, KEY_WHITELIST),
      identifier,
      remember
    };
  } catch (error: any) {
    return {
      error: {
        key: 'ERROR',
        message: error?.toString() ?? 'Error'
      }
    };
  }
};

export const loginUserBody: OIDCBodyLoginFn = async (ctx, body) => {
  const identifier = typeof body?.identifier === 'string' ? body.identifier : undefined;
  const password = typeof body?.password === 'string' ? body.password : undefined;
  const remember = !!(body?.remember);
  return loginUser(ctx, identifier, password, remember);
};

export const loginUserCredentials: OIDCBodyLoginCredentials = async (ctx, credentials) => {
  return loginUser(ctx, credentials.identifier, credentials.password || credentials.token);
};

export const findUserById = async (service: userService, id: string): Promise<AuthUser> => {
  const result = await service.find(FindRequest.fromPartial({
    id,
  }));

  if (!result?.items || result.items.length === 0) {
    throw new Error('USER_NOT_FOUND');
  }

  const user = result.items[0].payload;

  if (!user) {
    throw new Error('USER_NOT_FOUND');
  }

  return pick(user, KEY_WHITELIST);
};
