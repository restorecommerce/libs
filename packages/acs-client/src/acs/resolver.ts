import * as _ from 'lodash';
import {
  UnauthenticatedContext, Decision, ACSRequest, Subject, ACSClientContext,
  UnauthenticatedData, DecisionResponse, PolicySetRQResponse, Operation, Entity
} from './interfaces';
import { AuthZAction } from './interfaces';
import logger from '../logger';
import { errors, cfg } from '../config';
import { buildFilterPermissions, generateOperationStatus } from '../utils';
import { GrpcClient } from '@restorecommerce/grpc-client';
import { UnAuthZ, ACSAuthZ, authZ } from './authz';


const subjectIsUnauthenticated = (subject: any): subject is UnauthenticatedContext => {
  return !!subject
    && 'unauthenticated' in subject && subject['unauthenticated'];
};

const whatIsAllowedRequest = async (subject: Subject, entity: Entity[],
  action: AuthZAction, ctx: ACSClientContext, useCache: boolean) => {
  if (subjectIsUnauthenticated(subject)) {
    const grpcConfig = cfg.get('client:acs-srv');
    const acsClient = new GrpcClient(grpcConfig, logger);
    const acs = acsClient['acs-srv'];
    return await new UnAuthZ(acs).whatIsAllowed({
      target: {
        subject: (subject as UnauthenticatedData), entity, action
      },
      context: {
        security: {}
      }
    }, ctx, useCache);
  } else {
    return await authZ.whatIsAllowed({
      context: {
        security: {}
      },
      target: {
        subject,
        entity,
        action
      }
    }, ctx, useCache);
  }
};

export const isAllowedRequest = async (subject: Subject,
  entity: Entity[], action: AuthZAction, ctx: ACSClientContext, useCache: boolean): Promise<DecisionResponse> => {
  if (subjectIsUnauthenticated(subject)) {
    const grpcConfig = cfg.get('client:acs-srv');
    const acsClient = new GrpcClient(grpcConfig, logger);
    const acs = acsClient['acs-srv'];
    return await new UnAuthZ(acs).isAllowed({
      target: {
        subject: (subject as UnauthenticatedData), entity, action
      },
      context: {
        security: {}
      }
    }, ctx, useCache);
  } else {
    return await authZ.isAllowed({
      context: {
        security: {}
      },
      target: {
        subject,
        entity,
        action
      }
    }, ctx, useCache);
  }
};

export async function accessRequest(subject: Subject, entity: Entity[], action: AuthZAction, ctx: ACSClientContext, operation: Operation.isAllowed): Promise<DecisionResponse | PolicySetRQResponse>;
export async function accessRequest(subject: Subject, entity: Entity[], action: AuthZAction, ctx: ACSClientContext, operation: Operation.whatIsAllowed, database: 'arangoDB' | 'postgres'): Promise<DecisionResponse | PolicySetRQResponse>;

/**
 * It turns an API request as can be found in typical Web frameworks like express, koa etc.
 * into a proper ACS request. For `whatIsAllowed` operation it returns the filters
 * to enforce the applicapble poilicies. The response is `Decision`
 * or policy set reverse query `PolicySetRQ` depending on the requeste operation `isAllowed()` or
 * `whatIsAllowed()` respectively.
 * @param {Subject} subject Contains subject information or ApiKey
 * @param {Entity[]} entity Contains entity name, entity instance and optional entity properties
 * @param {AuthZAction} action Action to be performed on resource
 * @param {ACSClientContext} ctx Context containing Subject and Context Resources for ACS
 * @param {Operation} operation Operation to perform `isAllowed` or `whatIsAllowed`,
 * if this param is missing defaults to `isAllowed` operation
 * @param {Database} database database used either `arangoDB` or `postgres`,
 * if this param is missing defaults to `arangoDB`
 * @param {boolean} useCache by default ACS caching is used, if set to false then ACS cache
 * is not used and ACS request is made to `access-control-srv`
 * @returns {DecisionResponse | PolicySetRQResponse}
 */
export async function accessRequest(subject: Subject, entity: Entity[],
  action: AuthZAction, ctx: ACSClientContext, operation?: Operation,
  database?: 'arangoDB' | 'postgres', useCache = true): Promise<DecisionResponse | PolicySetRQResponse> {
  // when subject is not passed (if auth header is not set)
  if (_.isEmpty(subject)) {
    subject = { unauthenticated: true };
  }
  let subClone = _.cloneDeep(subject);
  let token;
  if (subject && subject.token) {
    token = subject.token;
  }
  // if apiKey mode is enabled
  if (token) {
    const configuredApiKey = cfg.get('authentication:apiKey');
    if (configuredApiKey === token) {
      return { decision: Decision.PERMIT, operation_status: generateOperationStatus(200, 'success') };
    }
  }
  let authzEnabled = cfg.get('authorization:enabled');
  let authzEnforced = cfg.get('authorization:enforce');
  // by default if the config for authorization enabling and enforcement is missing
  // enable it by default (true)
  if (authzEnabled === undefined) {
    authzEnabled = true;
  }
  if (authzEnforced === undefined) {
    authzEnforced = true;
  }
  // if authorization is disabled
  if (!authzEnabled) {
    return { decision: Decision.PERMIT, operation_status: generateOperationStatus(200, 'success') };
  }

  if (_.isEmpty(subject)) {
    return { decision: Decision.DENY, operation_status: generateOperationStatus(errors.USER_NOT_LOGGED_IN.code, errors.USER_NOT_LOGGED_IN.message) };
  }

  let subjectID;
  let targetScope = subject.scope;
  // resolve userID by token
  if (subject && subject.id) {
    subjectID = subject.id;
  }

  // default ACS operation is isAllowed
  if (!operation) {
    operation = Operation.isAllowed;
  }

  // default database is arangoDB
  if (!database) {
    database = 'arangoDB';
  }

  // whatIsAllowed Operation
  if (operation === Operation.whatIsAllowed) {
    // const resourceName = request.entity;
    let policySetResponse: PolicySetRQResponse;
    try {
      // retrieving set of applicable policies/rules from ACS
      // Note: it is assumed that there is only one policy set
      policySetResponse = await whatIsAllowedRequest(subClone, entity, action, ctx, useCache);
    } catch (err) {
      logger.error('Error calling whatIsAllowed:', { message: err.message });
      logger.error('Error stack', err.stack);
      return { decision: Decision.DENY, operation_status: generateOperationStatus(err.code, err.message) };
    }

    // handle case if policySet is empty
    if ((!policySetResponse || _.isEmpty(policySetResponse.policy_sets)) && authzEnforced) {
      const msg = `Access not allowed for request with subject:${subjectID}, ` +
        `resource:${entity}, action:${action}, target_scope:${targetScope}; the response was INDETERMINATE`;
      const details = 'no matching policy/rule could be found';
      logger.verbose(msg);
      logger.verbose('Details:', { details });
      return { decision: Decision.DENY, operation_status: generateOperationStatus(Number(errors.ACTION_NOT_ALLOWED.code), msg) };
    }

    if ((!policySetResponse || _.isEmpty(policySetResponse.policy_sets)) && !authzEnforced) {
      logger.verbose(`The Access response was INDETERMIATE for a request with subject:` +
        `${subjectID}, resource:${entity}, action:${action}, target_scope:${targetScope} ` +
        `as no matching policy/rule could be found, but since ACS enforcement ` +
        `config is disabled overriding the ACS result`);
    }
    // extend input filter to enforce applicable policies
    let permissionArguments = await buildFilterPermissions(policySetResponse.policy_sets[0], subClone, resource, authZ, database);
    if (!permissionArguments && authzEnforced) {
      const msg = `Access not allowed for request with subject:${subjectID}, ` +
        `resource:${entity}, action:${action}, target_scope:${targetScope}; the response was DENY`;
      const details = `Subject:${subjectID} does not have access to target scope ${targetScope}}`;
      logger.verbose(msg);
      logger.verbose('Details:', { details });
      return { decision: Decision.DENY, operation_status: generateOperationStatus(Number(errors.ACTION_NOT_ALLOWED.code), msg) };
    }

    if (!permissionArguments && !authzEnforced) {
      logger.verbose(`The Access response was DENY for a request from subject:${subjectID}, ` +
        `resource:${entity}, action:${action}, target_scope:${targetScope}, ` +
        `but since ACS enforcement config is disabled overriding the ACS result`);
    }

    if (resource && resource.filters && !_.isEmpty(resource.filters)) {
      if (_.isArray(resource.filters)) {
        for (let filter of resource.filters) {
          if (!_.isArray(permissionArguments.filters)) {
            permissionArguments.filters = [filter];
          }
          permissionArguments.filters.push(filter);
        }
      } else {
        if (!_.isArray(permissionArguments.filters)) {
          permissionArguments.filters = [permissionArguments.filters];
        }
        permissionArguments.filters.push(resource.filters);
      }
    }
    Object.assign(resource, { filters: permissionArguments.filters });
    policySetResponse.decision = Decision.PERMIT; // Adding Permit to read response (since we no longer throw errorrs)
    policySetResponse.operation_status = generateOperationStatus(200, 'success');
    return policySetResponse;
  }

  // default deny
  let decisionResponse: DecisionResponse = { decision: Decision.DENY, operation_status: { code: 0, message: '' } };
  // for write operations
  if (operation === Operation.isAllowed) {
    // authorization
    try {
      decisionResponse = await isAllowedRequest(subClone as Subject, entity, action, ctx, useCache);
    } catch (err) {
      return { decision: Decision.DENY, operation_status: generateOperationStatus(err.code, err.message) };
    }

    if (decisionResponse && decisionResponse.decision != Decision.PERMIT && authzEnforced) {
      let details = '';
      if (decisionResponse.decision === Decision.INDETERMINATE) {
        details = 'No matching policy / rule was found';
      } else if (decisionResponse.decision === Decision.DENY) {
        details = `Subject:${subjectID} does not have access to requested target scope ${targetScope}`;
      }
      const msg = `Access not allowed for request with subject:${subjectID}, ` +
        `resource:${entity}, action:${action}, target_scope:${targetScope}; the response was ${decisionResponse.decision}`;
      logger.verbose(msg);
      logger.verbose('Details:', { details });
      return { decision: Decision.DENY, operation_status: generateOperationStatus(Number(errors.ACTION_NOT_ALLOWED.code), msg) };
    }
  }
  if (!authzEnforced && decisionResponse && decisionResponse.decision != Decision.PERMIT) {
    let details = '';
    if (decisionResponse.decision === Decision.INDETERMINATE) {
      details = 'No matching policy / rule was found';
    } else if (decisionResponse.decision === Decision.DENY) {
      details = `Subject:${subjectID} does not have access to requested target scope ${targetScope}`;
    }
    logger.verbose(`Access not allowed for request with subject:${subjectID}, ` +
      `resource:${entity}, action:${action}, target_scope:${targetScope}; the response was ${decisionResponse.decision}`);
    logger.verbose(`${details}, Overriding the ACS result as ACS enforce config is disabled`);
    decisionResponse.decision = Decision.PERMIT;
  }
  return decisionResponse;
};

/**
 * Exposes the isAllowed() api of `access-control-srv` and retruns the response
 * as `Decision`.
 * @param {ACSRequest} request input authorization request
 * @param {ACSContext} ctx Context Object containing requester's subject information
 * @return {Decision} PERMIT or DENY or INDETERMINATE
 */
export const isAllowed = async (request: ACSRequest,
  authZ: ACSAuthZ): Promise<DecisionResponse> => {
  let isAllowedResponse: DecisionResponse;
  try {
    isAllowedResponse = await authZ.acs.isAllowed(request);
  } catch (err) {
    logger.error('Error invoking acs-srv isAllowed method', err.message);
    logger.error('Error Stack', err.stack);
    return { decision: Decision.DENY, operation_status: generateOperationStatus(err.code, err.message) };
  }

  return isAllowedResponse;
};

/**
 * Exposes the whatIsAllowed() api of `access-control-srv` and retruns the response
 * a policy set reverse query `PolicySetRQ`
 * @param {ACSRequest} authZRequest input authorization request
 * @param {ACSContext} ctx Context Object containing requester's subject information
 * @return {PolicySetRQ} set of applicalbe policies and rules for the input request
 */
export const whatIsAllowed = async (request: ACSRequest,
  authZ: ACSAuthZ): Promise<PolicySetRQResponse> => {
  let whatIsAllowedResponse: PolicySetRQResponse;
  try {
    whatIsAllowedResponse = await authZ.acs.whatIsAllowed(request);
  } catch (err) {
    logger.error('Error invoking acs-srv whatIsAllowed method', err.message);
    logger.error('Error Stack', err.stack);
    return { decision: Decision.DENY, policy_sets: [], operation_status: generateOperationStatus(err.code, err.message) };
  }

  return whatIsAllowedResponse;
};

export interface Output {
  details?: PayloadStatus[];
  error?: OutputError;
}

export interface OutputError {
  message: string;
  code: number;
}

export interface PayloadStatus {
  payload: any;
  status: {
    message: string;
    code: number;
  };
}

export interface LoginResult {
  me?: Subject;
  error?: LoginError;
}

export interface LoginError {
  code: string;
  message: string;
}

export interface QueryArguments {
  filters?: any;
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
