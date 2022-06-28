import * as _ from 'lodash';
import {
  UnauthenticatedContext, Decision, ACSRequest, Subject, ACSClientContext, Filters,
  UnauthenticatedData, DecisionResponse, PolicySetRQResponse, Operation, Resource
} from './interfaces';
import { AuthZAction } from './interfaces';
import logger from '../logger';
import { errors, cfg } from '../config';
import { generateOperationStatus, createResourceFilterMap, FilterMapResponse, mapResourceURNObligationProperties } from '../utils';
import { GrpcClient } from '@restorecommerce/grpc-client';
import { UnAuthZ, ACSAuthZ, authZ } from './authz';


const subjectIsUnauthenticated = (subject: any): subject is UnauthenticatedContext => {
  return !!subject
    && 'unauthenticated' in subject && subject['unauthenticated'];
};

const whatIsAllowedRequest = async (subject: Subject, resource: Resource[],
  action: AuthZAction, ctx: ACSClientContext, useCache: boolean) => {
  if (subjectIsUnauthenticated(subject)) {
    const grpcConfig = cfg.get('client:acs-srv');
    const acsClient = new GrpcClient(grpcConfig, logger);
    const acs = acsClient['acs-srv'];
    return await new UnAuthZ(acs).whatIsAllowed({
      target: {
        subject: (subject as UnauthenticatedData), resource, action
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
        resource,
        action
      }
    }, ctx, useCache);
  }
};

export const isAllowedRequest = async (subject: Subject,
  resource: Resource[], action: AuthZAction, ctx: ACSClientContext, useCache: boolean): Promise<DecisionResponse> => {
  if (subjectIsUnauthenticated(subject)) {
    const grpcConfig = cfg.get('client:acs-srv');
    const acsClient = new GrpcClient(grpcConfig, logger);
    const acs = acsClient['acs-srv'];
    return await new UnAuthZ(acs).isAllowed({
      target: {
        subject: (subject as UnauthenticatedData), resource, action
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
        resource,
        action
      }
    }, ctx, useCache);
  }
};

/**
 * It turns an API request as can be found in typical Web frameworks like express, koa etc.
 * into a proper ACS request. For `whatIsAllowed` operation it returns the filters
 * to enforce the applicapble poilicies. The response is `Decision`
 * or policy set reverse query `PolicySetRQ` depending on the requeste operation `isAllowed()` or
 * `whatIsAllowed()` respectively.
 * @param {Subject} subject Contains subject information or ApiKey
 * @param {Resource[]} resource Contains resource name, resource instance and optional resource properties
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
export const accessRequest = async (subject: Subject, resource: Resource[],
  action: AuthZAction, ctx: ACSClientContext, operation?: Operation,
  database?: 'arangoDB' | 'postgres', useCache = true): Promise<DecisionResponse | PolicySetRQResponse> => {
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

  if (!_.isArray(resource)) {
    resource = [resource];
  }

  if (_.isEmpty(resource)) {
    const msg = `Access not allowed for request with subject:${subjectID}, ` +
      `resource:${resource}, action:${action}, target_scope:${targetScope}; the response was INDETERMINATE`;
    const details = 'Entity missing';
    logger.verbose(msg);
    logger.verbose('Details:', { details });
    return { decision: Decision.DENY, operation_status: generateOperationStatus(Number(errors.ACTION_NOT_ALLOWED.code), msg) };
  }

  // default ACS operation is isAllowed
  if (!operation) {
    operation = Operation.isAllowed;
  }

  // default database is arangoDB
  if (!database) {
    database = 'arangoDB';
  }

  // ctx.resources
  if (ctx.resources && !_.isArray(ctx.resources)) {
    ctx.resources = [ctx.resources];
  }

  // whatIsAllowed Operation
  if (operation === Operation.whatIsAllowed) {
    // const resourceName = request.entity;
    let policySetResponse: PolicySetRQResponse;
    try {
      // retrieving set of applicable policies/rules from ACS
      // Note: it is assumed that there is only one policy set
      policySetResponse = await whatIsAllowedRequest(subClone, resource, action, ctx, useCache);
    } catch (err) {
      logger.error('Error calling whatIsAllowed operation',  { code: err.code, message: err.message, stack: err.stack });
      return { decision: Decision.DENY, operation_status: generateOperationStatus(err.code, err.message) };
    }

    // handle case if policySet is empty
    if ((!policySetResponse || _.isEmpty(policySetResponse.policy_sets)) && authzEnforced) {
      const msg = `Access not allowed for request with subject:${subjectID}, ` +
        `resource:${resource}, action:${action}, target_scope:${targetScope}; the response was INDETERMINATE`;
      const details = 'no matching policy/rule could be found';
      logger.verbose(msg);
      logger.verbose('Details:', { details });
      return { decision: Decision.DENY, operation_status: generateOperationStatus(Number(errors.ACTION_NOT_ALLOWED.code), msg) };
    }

    if ((!policySetResponse || _.isEmpty(policySetResponse.policy_sets)) && !authzEnforced) {
      logger.verbose(`The Access response was INDETERMIATE for a request with subject:` +
        `${subjectID}, resource:${resource}, action:${action}, target_scope:${targetScope} ` +
        `as no matching policy/rule could be found, but since ACS enforcement ` +
        `config is disabled overriding the ACS result`);
    }

    // create filters to enforce applicable policies and custom query / args if applicable
    const resourceFilters = await createResourceFilterMap(resource, policySetResponse,
      ctx.resources, action, subClone, subjectID, authzEnforced, targetScope, database);

    if ((resourceFilters as DecisionResponse).decision) {
      return resourceFilters as DecisionResponse;
    }

    policySetResponse.filters = (resourceFilters as FilterMapResponse).resourceFilterMap;
    policySetResponse.custom_query_args = (resourceFilters as FilterMapResponse).customQueryArgs;
    policySetResponse.decision = Decision.PERMIT; // Adding Permit to read response (since we no longer throw errorrs)
    policySetResponse.operation_status = generateOperationStatus(200, 'success');
    return policySetResponse;
  }

  let resourceList = [];
  resource.forEach((resourceObj) => {
    resourceList.push(resourceObj.resource);
  });
  let resourceString;
  if (resourceList.length === 1) {
    resourceString = resourceList[0];
  } else {
    resourceString = JSON.stringify(resourceList);
  }
  // default deny
  let decisionResponse: DecisionResponse = { decision: Decision.DENY, operation_status: { code: 0, message: '' } };
  // isAllowed operation
  if (operation === Operation.isAllowed) {
    // authorization
    try {
      decisionResponse = await isAllowedRequest(subClone as Subject, resource, action, ctx, useCache);
    } catch (err) {
      logger.error('Error calling isAllowed operation',  { code: err.code, message: err.message, stack: err.stack });
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
        `resource:${resourceString}, action:${action}, target_scope:${targetScope}; the response was ${decisionResponse.decision}`;
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
      `resource:${resourceString}, action:${action}, target_scope:${targetScope}; the response was ${decisionResponse.decision}`);
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
    if(isAllowedResponse && isAllowedResponse.obligation && isAllowedResponse.obligation.length >0) {
      isAllowedResponse.obligation = mapResourceURNObligationProperties(isAllowedResponse.obligation);
    }
  } catch (err) {
    logger.error('Error invoking acs-srv isAllowed method',  { code: err.code, message: err.message, stack: err.stack });
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
    if(whatIsAllowedResponse && whatIsAllowedResponse.obligation && whatIsAllowedResponse.obligation.length >0) {
      whatIsAllowedResponse.obligation = mapResourceURNObligationProperties(whatIsAllowedResponse.obligation);
    }
  } catch (err) {
    logger.error('Error invoking acs-srv whatIsAllowed method',  { code: err.code, message: err.message, stack: err.stack });
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
  filters?: Filters[];
  limit?: any;
  sort?: any;
  offset?: any;
  custom_queries: string[];
  custom_arguments: any;
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
