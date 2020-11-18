import { FindRequest, UserService, User, LoginRequest } from '@restorecommerce/rc-grpc-clients';

const KEY_WHITELIST: (keyof User)[] = [
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

export type AuthUser = Pick<User, keyof User>;

export async function loginUser(service: UserService, identifier: string, password: string): Promise<AuthUser> {
  const result = await service.Login(LoginRequest.fromPartial({
    identifier,
    password,
  }));

  if (!result) {
    throw new Error('INVALID_IDENTIFIER_OR_PASSWORD');
  }

  return pick(result, KEY_WHITELIST);
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
