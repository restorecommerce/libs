import * as _ from '@restorecommerce/facade/modules/identity/gql/old/types/node_modules/lodash';
import { errors } from '../config';
import { EndpointHandler } from '../EndpointHandler';
import logger from '../logger';
import { UserSessionData, RestoreCommerceUser, UserScope } from './interfaces';
import { reduceRoleAssociations } from '../utils';

let instance: UserRepository;

export enum LoginField {
  identifier = 'identifier',
}

export const convertDBUser = async (user: RestoreCommerceUser) => {
  const defaultScope: string = user.default_scope || undefined;
  let scope: UserScope;
  if (defaultScope) {
    scope = await reduceRoleAssociations(user.role_associations, defaultScope);
  }

  return _.merge(_.pick(user, [
    'id', 'name', 'email', 'locale_id', 'timezone_id', 'role_associations', 'first_name', 'last_name', 'default_scope'
  ]), {
    scope
  });
};

export const handleError = (err: string | Error | any) => {
  let error;

  if (typeof err == 'string') {
    error = errors[err] || errors.SYSTEM_ERROR;
  } else {
    error = errors.SYSTEM_ERROR;
  }

  return error;
};

/**
 * Handles all calls to `identity-srv` regarding the `User` resource.
*/
export class UserRepository {
  endpointHandler: EndpointHandler;
  userService;
  constructor() {
    this.endpointHandler = new EndpointHandler('user');
    this.userService = this.endpointHandler.getResourceService();
  }

  /**
   * A User can be found by its email or name (both are unique).
   * @param field Credential field (user or email)
   * @param value Value
   */
  async findUser(field: string, value: string): Promise<RestoreCommerceUser> {
    field = field.toLowerCase();
    if (!_.includes(['id', 'name'], field)) {
      throw 'SPECIFY_USER_PASSWORD';
    }

    const request = {
      [field]: value
    };

    const result = await this.userService.find(request);
    if (_.isEmpty(result) || _.isEmpty(result.data) || _.isEmpty(result.data.items)) {
      throw 'USER_NOT_FOUND';
    }

    if (!_.isEmpty(result.error)) {
      this.handleUserQueryError(result.error);
    }

    const user: RestoreCommerceUser = result.data.items[0];
    if (_.isNil(user)) {
      throw 'USER_NOT_FOUND';
    }

    return user;
  }

  /**
   * Custom query for filtering a user by its role and, optionally, associated atributes.
   * @param roleName
   * @param attributes
   */
  async findUsersByRole(roleName: string, attributes?: any[]): Promise<RestoreCommerceUser[]> {
    attributes = attributes || [];
    attributes = EndpointHandler.convertToObject(attributes);

    const result = await this.userService.findByRole({
      role: roleName,
      attributes
    });

    if (_.isEmpty(result) || _.isEmpty(result.data) || _.isEmpty(result.data.items)) {
      throw 'USER_NOT_FOUND';
    }

    if (!_.isEmpty(result.error)) {
      this.handleUserQueryError(result.error);
    }

    return result.data.items || [];
  }

  async activateUser(name: string, activation_code: string): Promise<void> {
    if (!name || !activation_code) {
      throw 'INVALID_USERNAME_ID_ACTIVATION_CODE';
    }

    const request = {
      name,
      activation_code,
    };

    const result = await this.userService.activate(request);
    if (!result) {
      logger.error('Unexpected');
      throw 'SYSTEM_ERROR';
    }

    if (result.error) {
      if (result.error.details.includes('activation request to an active user')) {
        throw 'USER_ALREADY_ACTIVE';
      } else if (result.error.details.includes('wrong activation code')) {
        throw 'WRONG_ACTIVATION_CODE';
      } else {
        logger.error('Unexpected error activating user', result);
        throw `SYSTEM_ERROR`;
      }
    }
  }

  async requestEmailChange(id: string, email: string): Promise<any> {
    if (!id || !email) {
      throw 'SPECIFY_USER_NAME_ID_EMAIL';
    }

    const user = {
      id,
      email
    };

    const result = await this.userService.requestEmailChange(user);

    if (result.error) {
      if (result.error.name.includes('NotFound')) {
        throw 'USER_NOT_FOUND';
      } else {
        logger.error('Unexpected error changing email', result);
        throw `SYSTEM_ERROR`;
      }
    }

    return result;
  }

  async requestPasswordChange(credential: string, type: 'email' | 'name'): Promise<any> {
    if (!credential) {
      throw 'SPECIFY_USER_NAME_ID_EMAIL';
    }

    const request = {
      [type]: credential
    };

    const result = await this.userService.requestPasswordChange(request);

    if (result.error) {
      if (result.error.name.includes('NotFound')) {
        throw 'USER_NOT_FOUND';
      } else {
        logger.error('Unexpected error requesting password change', result);
        throw `SYSTEM_ERROR`;
      }
    }

    return result;
  }

  async confirmPasswordChange(name: string, password: string, activationCode: string): Promise<any> {
    if (!name || !activationCode || !password) {
      throw 'INVALID_USERNAME_ID_ACTIVATION_CODE';
    }

    const request = {
      name,
      activation_code: activationCode,
      password
    };

    const result = await this.userService.confirmPasswordChange(request);

    if (result.error) {
      if (result.error.name.includes('NotFound')) {
        throw 'USER_NOT_FOUND';
      } else if (result.error.details.includes('wrong activation code')) {
        logger.verbose('Wrong activation code', activationCode);
        throw `WRONG_ACTIVATION_CODE`;
      } else {
        throw 'SYSTEM_ERROR';
      }
    }

    return result;
  }

  async confirmEmailChange(name: string, activationCode: string): Promise<any> {
    if (!name || !activationCode) {
      throw 'INVALID_USERNAME_ID_ACTIVATION_CODE';
    }

    const user = {
      name,
      activation_code: activationCode
    };

    const result = await this.userService.confirmEmailChange(user);

    if (result.error) {
      if (result.error.name.includes('NotFound')) {
        throw 'USER_NOT_FOUND';
      } else if (result.error.details.includes('wrong activation code')) {
        logger.verbose('Wrong activation code', activationCode);
        throw `WRONG_ACTIVATION_CODE`;
      } else {
        throw 'SYSTEM_ERROR';
      }
    }

    return result;
  }

  async changePassword(id: string, password: string, new_password: string): Promise<void> {
    if (!id || !password) {
      throw 'SPECIFY_USER_NAME_ID_PASSWORD';
    }

    const user = {
      id,
      password,
      new_password
    };

    const result = await this.userService.changePassword(user);

    if (!result) {
      throw 'SYSTEM_ERROR';
    }

    if (result.error) {
      if (result.error.name.includes('NotFound')) {
        throw 'USER_NOT_FOUND';
      } else if (result.error.name.includes('Unauthenticated')) {
        throw `INVALID_USER_PASS`;
      } else {
        logger.error('Unexpected error changing password', result);
        throw `SYSTEM_ERROR`;
      }
    }
  }

  async register(user: UserSessionData): Promise<object> {
    if (!user.name || !user.email || !user['password']) {
      throw 'INVALID_USERNAME_EMAIL_PASSWORD';
    }
    if (_.isEmpty(user.role_associations)) {
      throw 'USER_ROLES_REQUIRED';
    }

    logger.verbose(`Registering user ${user.name}...`);
    user = EndpointHandler.convertToObject(user);
    const result = await this.userService.register(user);

    if (!result) {
      logger.error('Unexpected error: result of user registry is null');
      throw 'SYSTEM_ERROR';
    }

    if (result.error) {
      if (result.error.name.includes('InvalidArgument')) {
        throw 'INVALID_USERNAME_EMAIL_PASSWORD';
      }
      else if (result.error.name.includes('AlreadyExists')) {
        throw 'USER_ALREADY_EXIST';
      } else {
        logger.error('Unexpected error registering user:', result);
        throw 'SYSTEM_ERROR';
      }
    }

    return result;
  }

  async unregister(field: string, value: string): Promise<object> {
    if (!_.includes(['id', 'name', 'email'], field) || !value) {
      throw 'INVALID_USERNAME_ID';
    }

    const user = {
      [field]: value
    };

    const result = await this.userService.unregister(user);

    if (result.error) {
      if (result.error.name.includes('NotFound')) {
        throw 'USER_NOT_FOUND';
      } else {
        logger.error('Unexpected error unregistering user', result);
        throw `SYSTEM_ERROR`;
      }
    }

    return result;
  }

  /**
   * Retrieves the user in case of successful auth.
   * @param credential A valid login credential (name or email)
   * @param value Credential value
   * @param password Password
   */
  async login(credential: string, value: string, password: string): Promise<RestoreCommerceUser> {
    if (!LoginField[credential] || !value || !password) {
      throw 'SPECIFY_USER_PASSWORD';
    }

    const user = {
      [credential]: value,
      password,
    };

    console.log('calling user service');

    const result = await this.userService.login(user);

    if (result.error) {
      if (result.error.name.includes('Unauthenticated')) {
        throw 'INVALID_USER_PASS';
      } else if (result.error.name.includes('NotFound')) {
        throw 'USER_NOT_FOUND';
      } else if (result.error.details.includes('user is inactive')) {
        throw 'USER_INACTIVE';
      } else {
        logger.error('Unexpected error performing login', result);
        throw `SYSTEM_ERROR`;
      }
    }

    const dbUser = result.data as RestoreCommerceUser;
    if (!dbUser) {
      throw 'USER_NOT_FOUND';
    }

    return dbUser;
  }

  private handleUserQueryError(error: any) {
    if (!_.isEmpty(error) && !_.isEmpty(error.code)) {
      logger.error('Error occurred while retrieving user', error);
      let errorObj = { error: { code: [], message: [] } };
      this.endpointHandler.parseError(error, errorObj);
      throw errorObj.error.message[0];
    }
  }
}

export const getRepository = () => {
  if (!instance) {
    instance = new UserRepository();
  }

  return instance;
};
