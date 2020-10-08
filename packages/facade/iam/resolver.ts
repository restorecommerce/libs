import * as _ from '@restorecommerce/facade/modules/identity/gql/old/types/node_modules/lodash';
import { Resource, Decision } from '@restorecommerce/facade/modules/identity/gql/old/mutation/resources/delete/node_modules/@restorecommerce/iam-authz';
import { JwtStore } from '@restorecommerce/iam-authn';

import { RestoreCommerceContext, BootstrapData, UserSessionData, PolicySetRQ, UnauthenticatedContext } from './interfaces';
import { InvalidAPIKeyError, RestoreCommerceAuthN, isAPIKeyAuthN, getSessionMetaInfo } from './authn';
import { AuthZAction } from './interfaces';
import { getRedisCache } from './redis';
import { EndpointHandler } from '../EndpointHandler';
import logger from '../logger';
import { errors } from '../config';
import { RestoreCommerceBootstrapAuthZ, UnAuthZ } from './authz';
import { buildFilterPermissions } from '../utils';
import { KoaJwtStore } from '@restorecommerce/iam-koa';

/**
 *
 * @param action
 * @param ctx
 * @param input Input for query or mutation.
 * @param cb Async operation to be performed. '
 * If cb is set to null and action is 'read', a generic `service.read(input)` is performed.
 * Cb can be useful in business-specific operations or when in need of some field-specific handling.
 */
export default async function tryRequest(action: AuthZAction, input: Resource[] | Resource | LoginInput | ReadRequest,
  ctx: RestoreCommerceContext | UnauthenticatedContext, cb?: Function): Promise<Output | LoginResult | UserSessionData | PolicySetRQ> {
  let output: Output = {
    error: {
      code: [],
      message: []
    },
    details: []
  };
  // authentication
  // if no token exists in 'ctx' and user is not attempting to sign in
  if (action === 'session') {
    return cb ? cb() : null;
  } else if (action != 'login' && ctx && ctx.session == null) {
    // user registry
    if (!isAPIKeyAuthN(ctx['authN'])) { // user registry
      if (action != 'create' || isResource(input) && input.type != 'user.User') {
        output.error.code.push(errors.USER_NOT_LOGGED_IN.code);
        output.error.message.push(errors.USER_NOT_LOGGED_IN.message);
        return output;
      }
    }
    else {
      return { error: errors.USER_NOT_LOGGED_IN };
    }
  } else if (action == 'login' && isLoginInput(input)) {
    ctx = ctx as RestoreCommerceContext;
    return login({ identifier: input.identifier, password: input.password, rememberMe: input.rememberMe, ctx });
  } else if (action == 'logout') {
    ctx = ctx as RestoreCommerceContext;
    return logout(ctx);
  } else if (action == 'search' && isReadRequest(input)) {
    const resourceName = input.entity;
    let policySet: PolicySetRQ;
    try {
      policySet = await whatIsAllowed(ctx as RestoreCommerceContext, ['read'], [{ type: resourceName }]);
      if (action == 'search') {
        output = await cb(policySet);
        return output;
      }
    } catch (err) {
      console.log(err);
      logger.error('Error calling whatIsAllowed:', { message: err.message });
      return {
        error: {
          code: [err.code],
          message: err.message
        }
      };
    }
  }

  let resources: any[] = [];
  if (action == 'read' && isReadRequest(input)) {
    const resourceName = input.entity;
    let policySet: PolicySetRQ;

    try {
      // retrieving set of applicable policies/rules from ACS
      // Note: it is assumed that there is only one policy set

      policySet = await whatIsAllowed(ctx as RestoreCommerceContext, [action], [{ type: resourceName }]);
    } catch (err) {
      console.log(err);
      logger.error('Error calling whatIsAllowed:', { message: err.message });
      return {
        error: {
          code: [err.code],
          message: err.message
        }
      };
    }

    const permissionArguments = await buildFilterPermissions(policySet, ctx.session.data as UserSessionData);
    if (!permissionArguments) {
      return {
        details: [] // no resource retrieved
      };
    }

    const finalFilter = { $and: [] };
    if (!_.isEmpty(input.args.filter)) {
      finalFilter.$and.push(_.cloneDeep(input.args.filter));
    }
    if (!_.isEmpty(permissionArguments.filter)) {
      finalFilter.$and.push(permissionArguments.filter);
    }

    permissionArguments.filter = finalFilter;
    delete input.args.filter;
    _.merge(permissionArguments, input.args, permissionArguments);
    if (!cb) {
      output.error.code.push(errors.MISSING_OPERATION.code);
      output.error.message.push(errors.MISSING_OPERATION.message);
      return output;
    }

    try {
      output = await cb(permissionArguments);
    } catch (err) {
      logger.error('Error while running query', { err });
      console.log(err);
      output = {
        error: {
          code: [errors.SYSTEM_ERROR.code],
          message: [errors.SYSTEM_ERROR.message]
        }
      };
    }

    if (!output) {
      return;
    }

    if (output.error && output.error.code.length > 0) {
      return { error: output.error };
    }
    return output;
  }

  if (!isResourceList(input) && isResource(input)) {
    input = [input];
  }

  if (isResourceList(input)) {
    resources = input;
  }

  if (action === 'permissions' && ctx.session && ctx.session.data) {
    resources = input as Resource[];
    const actionList: AuthZAction[] = ['create', 'read', 'modify', 'delete', 'execute'];
    let response: any = {};
    try {
      response = await whatIsAllowed(ctx as RestoreCommerceContext, actionList, resources);
    } catch (err) {
      console.log(err);
      logger.error('Error calling whatIsAllowed :', { message: err.message });
      response.error = {};
      response.error.message = [err.message];
      response.error.code = [err.code];
    }
    return response;
  }

  if (!_.isEmpty(resources) || action == 'execute' || action == 'delete') {
    try {
      // authorization
      let allowed = await isAllowed(ctx as RestoreCommerceContext, action, resources);

      if (allowed && allowed.decision != Decision.PERMIT) {
        const msg = `Access not allowed for a request from user ${(ctx.session.data as UserSessionData).name}; the response was ${allowed.decision}`;
        logger.verbose(msg);

        output.details = null;
        output.error.code.push(errors.ACTION_NOT_ALLOWED.code);
        output.error.message.push(msg);
        return output;
      }
    } catch (err) {
      console.log(err);
      logger.verbose('Error while calling ACS', { err });
      return {
        error: {
          code: [errors.ACTION_NOT_ALLOWED.code],
          message: ['An error occurred while requesting authorization']
        }
      };
    }
  }

  // perform operation
  if (action == 'create' && isResourceList(input) && !cb) {
    // call generic create....
    output = await genericCreate(input);
  } else if (action == 'modify' && isResourceList(input) && !cb) {
    output = await genericUpdate(input);
  } else if (cb) {
    output = await cb(input);
  } else {
    output.error.code.push(errors.MISSING_OPERATION.code);
    output.error.message.push(errors.MISSING_OPERATION.message);
  }

  // clearing Redis whitelist for a given user
  // if its data was modified or deleted successfully
  if (_.isEmpty(output.error) || _.isEmpty(output.error.code)) {
    if ((action == 'modify' || action == 'delete') && isResourceList(input)) {
      for (let resource of input) {
        // if a User was updated / destroyed successfully
        if (resource.type == 'user') {
          if (resource.instance && resource.instance.id) {
            const userID = resource.instance.id;
            // clearing Redis cache whitelists if they exist
            logger.info('Clearing whitelist for user', userID);
            await getRedisCache().clear(userID);
          }
        }
      }
    }
  }

  return output;
}

async function login({ identifier, password, rememberMe, ctx }: LoginInput): Promise<LoginResult> {
  let me: UserSessionData, error = {
    code: '',
    message: ''
  };

  try {
    const authN: RestoreCommerceAuthN = ctx.authN as RestoreCommerceAuthN;
    if (isAPIKeyAuthN(authN)) {
      return {
        me: null,
        error: errors.API_KEY_REQUIRED
      };
    }

    ctx.session = await authN.authenticate({
      type: 'custom',
      identifier, password
    });
    me = ctx.session.data as UserSessionData;
    const jwtStore: JwtStore = ctx.jwtStore as JwtStore;
    await ctx.session.persist(jwtStore, rememberMe ? 'token' : 'session');
    const meta = getSessionMetaInfo(ctx.session);

    await getRedisCache().add(me.id, meta);

  } catch (err) {
    // config-mapped well-known error
    if (typeof err == 'string' && errors[err]) {
      error = errors[err];
      logger.error(err, { identifier, password });
    } else {
      error = errors.SYSTEM_ERROR;
      logger.error(err);
    }
  }

  return {
    me, error
  };
}

// Note: this function is being exported as it should never be called from `tryRequest`
// The API key is only necessary and usable when the system starts and there is no data
export async function loginApiKey({ apiKey, ctx }) {
  let statusMsg: string;
  if (isAPIKeyAuthN(ctx.authN)) {
    try {
      const authN = ctx.authN;
      ctx.session = await authN.authenticate({
        type: 'custom',
        apiKey,
      });
      ctx.session.persist(ctx.jwtStore);
    } catch (err) {
      logger.error('Error while logging in with API key', err);
      if (err instanceof InvalidAPIKeyError) {
        return {
          error: {
            message: 'Invalid API Key'
          }
        };
      }

      if (typeof err === 'string') {
        return {
          error: errors[err] | errors.SYSTEM_ERROR
        };
      } else {
        return {
          error: errors.SYSTEM_ERROR
        };
      }
    }

    statusMsg = 'Login was successful';
  }

  return {
    status: statusMsg || 'API key login is not enabled',
    error: null
  };
}

async function logout(ctx: RestoreCommerceContext) {
  try {
    const jwtStore = ctx.jwtStore as KoaJwtStore;
    jwtStore.destroy();
    const cache = getRedisCache();
    const sessionData = ctx.session.data as UserSessionData;
    const meta = getSessionMetaInfo(ctx.session);

    await cache.remove(sessionData.id, meta);
    // clear session
    ctx.session = null;
  } catch (err) {
    logger.error(err);
    err = typeof err == 'string' ? err : err.message;

    return {
      error: {
        code: errors.SYSTEM_ERROR.code,
        message: errors.SYSTEM_ERROR.message + ':' + err
      }
    };
  }


  return {
    status: 'User logged out successfully',
    error: null
  };
}

export function destroyApiKey(ctx: RestoreCommerceContext): boolean {
  const valid = isAPIKeyAuthN(ctx.authN);
  if (valid) {
    if (!ctx.session) {
      throw new Error('Authentication is required!');
    }

    ctx.authN.destroyApiKey();
    if (ctx.authZ instanceof RestoreCommerceBootstrapAuthZ) {
      ctx.authZ.destroy();
    }
    ctx.jwtStore.destroy();
    ctx.session = null;
  }

  return valid;
}

async function genericCreate(resourceList: Resource[]): Promise<Output> {
  const output = {
    status: [],
    error: {
      code: [],
      message: []
    }
  };
  const entity = resourceList[0].type;
  const handler = new EndpointHandler(entity);
  const service = handler.getResourceService(); // getting gRPC service

  logger.info('Requesting to create resources', resourceList);
  const result = await service.create(resourceList.map(resource => resource.instance));
  logger.info('Result', result);
  handler.handleCreateResourcesErrors(result, output);
  return output;
}

async function genericUpdate(resourceList: Resource[]): Promise<Output> {
  const output = {
    status: [],
    error: {
      code: [],
      message: []
    }
  };
  const entity = resourceList[0].type;
  const endpointHandler = new EndpointHandler(entity);

  for (let resource of resourceList) {
    if (!resource.instance || !resource.instance.id) {
      output.error.code.push(errors.MISSING_RESOURCE_ID.code);
      output.error.code.push(errors.MISSING_RESOURCE_ID.message);
      return output;
    }
  }

  const service = endpointHandler.getResourceService();

  const result = await service.update(resourceList.map(resource => resource.instance));
  if (result.error) {
    endpointHandler.parseError(result.error, output);
  } else {
    output.status.push(`Documents of entity ${entity} updated successfully`);
  }
  return output;
}

export function parseResourceList(resourceList: Array<any>, action: AuthZAction,
  entity: string, ctx: RestoreCommerceContext, fields?: string[]): Resource[] {
  const userData: UserSessionData | BootstrapData = (ctx.session && ctx.session.data) || {};
  return resourceList.map((resource): Resource => {
    let instance = EndpointHandler.convertToObject(resource);
    if (action == 'create') {
      instance = EndpointHandler.createMetadata(instance, userData);
    } else if (action == 'modify') {
      instance = EndpointHandler.updateMetadata(instance, userData);
    }
    return {
      fields: fields || _.keys(instance),
      instance,
      type: entity
    };
  });
}

export async function isAllowed(ctx: RestoreCommerceContext, action: AuthZAction,
  resources: Resource[]) {
  if (contextIsUnauthenticated(ctx)) {
    const acs = EndpointHandler.getACS();
    return new UnAuthZ(acs).isAllowed({
      target: {
        action, resources, subject: ctx.session.data
      },
      context: {
        security: {}
      }
    });
  } else {
    const user = ctx.session.data as UserSessionData;

    let securityCtx = {};
    // security headers to be passed to ACS
    securityCtx = {
      restorecommerce_jti: ctx.get('restorecommerce_jti'),
      restorecommerce_jwt: ctx.get('restorecommerce_jwt')
    };

    return ctx.authZ.isAllowed({
      context: {
        security: securityCtx
      },
      target: {
        action,
        resources,
        subject: user
      }
    });
  }
}

async function whatIsAllowed(ctx: RestoreCommerceContext, action: AuthZAction[],
  resources: Resource[]) {
  const user = ctx.session.data as UserSessionData;

  // security headers to be passed to ACS
  const securityCtx = {
    restorecommerce_jti: ctx.get('restorecommerce_jti'),
    restorecommerce_jwt: ctx.get('restorecommerce_jwt')
  };

  return ctx.authZ.whatIsAllowed({
    context: {
      security: securityCtx
    },
    target: {
      action,
      resources,
      subject: user
    }
  });
}

export interface Output {
  details?: string[];
  error?: OutputError;
}

export interface OutputError {
  code: string[];
  message: string[];
}

export interface LoginInput {
  identifier: string;
  password: string;
  rememberMe: boolean;
  ctx: RestoreCommerceContext;
}

export interface LoginResult {
  me?: UserSessionData;
  error?: LoginError;
}

export interface LoginError {
  code: string;
  message: string;
}

export interface ReadRequest {
  entity: string;
  args: QueryArguments;
}

export interface QueryArguments {
  filter?: any;
  limit?: any;
  sort?: any;
  offset?: any;
}

export interface UserQueryArguments extends QueryArguments {
  user_role: RoleRequest;
}

export interface RoleRequest {
  role: string; // role ID
  organizations: string[]; //
}
export interface FilterType {
  field?: string;
  value?: string;
  operation: Object;
}

function isResource(object: any): object is Resource {
  return 'type' in object;
}

function isResourceList(object: any): object is Resource[] {
  return _.isArray(object) && isResource(object[0]);
}

function isLoginInput(object: any): object is LoginInput {
  return 'identifier' in object && 'password' in object;
}

function isReadRequest(object: any): object is ReadRequest {
  return 'entity' in object;
}

function contextIsUnauthenticated(object: any): object is UnauthenticatedContext {
  return !!object && 'session' in object && 'data' in object['session']
    && 'unauthenticated' in object['session']['data'] && object['session']['data']['unauthenticated'];
}
