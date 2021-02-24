import { FindRequest, UserService, User, LoginRequest } from '@restorecommerce/rc-grpc-clients';
import { OIDCLoginFn, AuthUserKeyWhitelist, AuthUser } from './interfaces';

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

export const loginUser: OIDCLoginFn = async (ctx, body) => {
  const identifier = typeof body?.identifier === 'string' ? body.identifier : undefined;
  const password = typeof body?.password === 'string' ? body.password : undefined;
  const remember = !!(body?.remember);

  if (!identifier || !password) {
    return {
      identifier,
      remember,
      error: {
        key: 'MISSING_IDENTIFIER_OR_PASSWORD',
        message: 'Missing identifier or password'
      }
    }
  }

  try {
    const result = await ctx.identitySrvClient.user.Login(LoginRequest.fromPartial({
      identifier,
      password,
    }));

    if (!result) {
      return {
        error: {
          key: 'INVALID_IDENTIFIER_OR_PASSWORD',
          message: 'Invalid identifier or password'
        }
      }
    }
    return {
      user: pick(result, KEY_WHITELIST),
      identifier,
      remember
    }
  } catch (error) {
    return {
      error: {
        key: 'ERROR',
        message: error?.toString() ?? 'Error'
      }
    }
  }
}

export async function findUserById(service: UserService, id: string): Promise<AuthUser> {
  const result = await service.Find(FindRequest.fromPartial({
    id,
  }));

  if (!result?.items || result.items.length === 0) {
    throw new Error('USER_NOT_FOUND');
  }

  const user = result.items[0];

  if (!user) {
    throw new Error('USER_NOT_FOUND');
  }

  return pick(user, KEY_WHITELIST);
}


function pick(obj: User, keys: (keyof User)[]): Pick<User, keyof User> {
  const ret: any = {};
  keys.forEach(key => {
    ret[key] = obj[key];
  })
  return ret;
}
