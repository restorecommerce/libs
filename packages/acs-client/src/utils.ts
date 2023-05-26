import {
  UserScope, PolicySetRQ, PolicySetRQResponse,
  AttributeTarget, HierarchicalScope,
  ResourceFilterMap, CustomQueryArgs, DecisionResponse, Resource, AuthZAction, ResolvedSubject, Obligation
} from './acs/interfaces';
import * as _ from 'lodash';
import { QueryArguments, UserQueryArguments } from './acs/resolver';
import { errors, cfg } from './config';
import nodeEval from 'node-eval';
import logger from './logger';
import { get } from './acs/cache';
import { formatResourceType } from './acs/authz';
import {
  RoleAssociation,
  Subject,
  DeepPartial
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/auth';
import { Attribute } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/attribute';
import {
  Filter_Operation, FilterOp_Operator
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/resource_base';
import {
  Response_Decision
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/access_control';
import { Effect } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/rule';

export const reduceRoleAssociations = async (roleAssociations: RoleAssociation[],
  scopeID: string): Promise<UserScope> => {
  const urns = cfg.get('authorization:urns');
  const scope = {
    role_associations: [],
    scopeOrganization: scopeID
  };

  for (let association of roleAssociations) {
    if (!_.isEmpty(association.attributes)) {
      const foundAttributes: Attribute[] = [];
      for (let i = 0; i < association.attributes.length; i += 2) {
        const attribute = association.attributes[i];
        if (attribute.id == urns.roleScopingEntity &&
          attribute.value == urns.organization) {
          const next = association.attributes[i + 1];
          let inScope = false;
          if (next.id == urns.roleScopingInstance) {
            inScope = next.value == scopeID;
          }

          if (inScope) {
            foundAttributes.push(attribute);
            foundAttributes.push(next);
          }
        }
      }
      if (!_.isEmpty(foundAttributes)) {
        scope.role_associations.push({
          role: association.role,
          attributes: foundAttributes
        });
      }
    }
  }

  return scope;
};

export const handleError = (err: string | Error | any): any => {
  let error;
  if (typeof err == 'string') {
    error = errors[err] || errors.SYSTEM_ERROR;
  } else {
    error = errors.SYSTEM_ERROR;
  }
  return error;
};

const reduceUserScope = (hrScope: HierarchicalScope, reducedUserScope: string[],
  hierarchicalRoleScoping: string) => {
  reducedUserScope.push(hrScope.id);
  if (hrScope.children && hierarchicalRoleScoping === 'true') {
    for (let childNode of hrScope.children) {
      reduceUserScope(childNode, reducedUserScope, hierarchicalRoleScoping);
    }
  }
};

const checkTargetScopeExists = (hrScope: HierarchicalScope, targetScope: string,
  reducedUserScope: string[], hierarchicalRoleScopingCheck: string): boolean => {
  if (hrScope.id === targetScope) {
    // found the target scope object, iterate and put the orgs in reducedUserScope array
    logger.debug(`Target entity match found in the user's hierarchical scope`);
    reduceUserScope(hrScope, reducedUserScope, hierarchicalRoleScopingCheck);
    return true;
  } else if (hrScope.children && hierarchicalRoleScopingCheck === 'true') {
    for (let childNode of hrScope.children) {
      if (checkTargetScopeExists(childNode, targetScope, reducedUserScope, hierarchicalRoleScopingCheck)) {
        return true;
      }
    }
  }
  return false;
};

const checkSubjectMatch = (user: ResolvedSubject, ruleSubjectAttributes: Attribute[],
  reducedUserScope?: string[]): boolean => {
  // 1) Iterate through ruleSubjectAttributes and check if the roleScopingEntity URN and
  // role URN exists
  // 2) Now check if the subject rule role value matches with one of the users ctx role_associations
  // then get the corresponding scope instance and check if the targetScope is present in user HR scope Object

  let roleScopeEntExists = false;
  let roleValueExists = false;
  // by default HR scoping check is considered
  let hierarchicalRoleScopingCheck = 'true';
  let ruleRoleValue;
  let ruleRoleScopeEntityName;
  const urns = cfg.get('authorization:urns');
  if (ruleSubjectAttributes.length === 0) {
    return true;
  }
  for (let attribute of ruleSubjectAttributes) {
    if (attribute.id === 'urn:restorecommerce:acs:names:unauthenticated-user' && attribute.value === 'true') {
      return true;
    }
    if (attribute.id === urns.roleScopingEntity) {
      roleScopeEntExists = true;
      ruleRoleScopeEntityName = attribute.value;
    } else if (attribute.id === urns.role) {
      roleValueExists = true;
      ruleRoleValue = attribute.value;
    } else if (attribute.id === urns.hierarchicalRoleScoping) {
      hierarchicalRoleScopingCheck = attribute.value;
    }
  }

  let userAssocScope;
  let userAssocHRScope: HierarchicalScope;
  if (roleScopeEntExists && roleValueExists) {
    const userRoleAssocs = user.role_associations;
    if (!_.isEmpty(userRoleAssocs)) {
      for (let role of userRoleAssocs) {
        if (role.role === ruleRoleValue) {
          // check the targetScope exists in the user HR scope object
          let roleScopeEntityNameMatched = false;
          for (let roleAttrs of role.attributes) {
            // urn:restorecommerce:acs:names:roleScopingInstance
            if (roleAttrs.id === urns.roleScopingEntity &&
              roleAttrs.value === ruleRoleScopeEntityName) {
              roleScopeEntityNameMatched = true;
            } else if (roleScopeEntityNameMatched && roleAttrs.id === urns.roleScopingInstance) {
              userAssocScope = roleAttrs.value;
              break;
            }
          }
          // check if this userAssocScope's HR object contains the targetScope
          for (let hrScope of user.hierarchical_scopes) {
            if (hrScope.id === userAssocScope) {
              userAssocHRScope = hrScope;
              break;
            }
          }
          // check HR scope matching for subject if hierarchicalRoleScopingCheck is 'true'
          if (userAssocHRScope && checkTargetScopeExists(userAssocHRScope,
            user.scope, reducedUserScope, hierarchicalRoleScopingCheck)) {
            return true;
          }
        }
      }
    }
  } else if (!roleScopeEntExists && roleValueExists) {
    const userRoleAssocs = user.role_associations;
    if (!_.isEmpty(userRoleAssocs)) {
      for (let role of userRoleAssocs) {
        if (role.role === ruleRoleValue) {
          return true;
        }
      }
    }
  }
  return false;
};

const validateCondition = (condition: string, request: any): any => {
  let evalResponse = nodeEval(condition, 'condition.js', request);
  if (typeof evalResponse === 'function') {
    return evalResponse(request);
  } else {
    return evalResponse;
  }
};

const buildQueryFromTarget = (target: AttributeTarget, effect: Effect,
  userTotalScope: string[], urns: any, scopingUpdated, reqResources,
  condition?: string, reqSubject?: DeepPartial<Subject>, database?: string): QueryParams => {
  const { subject, resources } = target;
  let ruleCondition = false;
  let filter = [];
  const query: QueryParams = {};
  let filterId;
  let filterOperator;

  if (condition) {
    ruleCondition = true;
  }
  // if there is a condition add this to filter
  if (condition && !_.isEmpty(condition)) {
    condition = condition.replace(/\\n/g, '\n');
    if (!reqResources) {
      reqResources = [];
    }
    if (!_.isArray(reqResources)) {
      reqResources = [reqResources];
    }
    const request = {
      target, context: {
        subject: {
          id: reqSubject.id,
          token: reqSubject.token, scope: reqSubject.scope,
          role_associations: (reqSubject as any).role_associations
        }, resources: reqResources
      }
    };
    try {
      filterId = validateCondition(condition, request);
      // special filter added to filter user read for his own entity
      if (typeof filterId === 'boolean') {
        return;
      } else if (typeof filterId === 'string') {
        if (filterId && !scopingUpdated) {
          // verify if the returned filterId is same as the targetID
          if (reqResources && reqResources[0] && reqResources[0].filters && reqResources[0].filters.length > 0) {
            const targetId = reqResources[0]?.filters[0]?.filter[0]?.value;
            if (targetId && targetId === filterId) {
              ruleCondition = true;
              filter.push({
                field: 'id',
                operation: Filter_Operation.eq,
                value: filterId
              });
            }
          } else {
            ruleCondition = true;
            filter.push({
              field: 'id',
              operation: Filter_Operation.eq,
              value: filterId
            });
          }
        }
      } else if (typeof filterId === 'object') { // prebuilt filter
        // handle array
        if (filterId.filter && _.isArray(filterId.filter)) {
          filter.push(...filterId.filter);
          // map filter operator if its returned from condition
          if (filterId?.operator) {
            filterOperator = filterId.operator;
          }
        } else {
          ruleCondition = true;
          filter.push(filterId);
        }
      }
      else if (filterId && !scopingUpdated) {
        ruleCondition = true;
        filter.push({
          field: 'id',
          operation: Filter_Operation.eq,
          value: filterId
        });
      } else {
        return;
      }
    } catch (err) {
      logger.error('Error caught evaluating condition:', { condition });
      logger.error('Error', { code: err.code, message: err.message, stack: err.stack });
      return;
    }
  }
  const scopingAttribute = _.find(subject, (attribute: Attribute) =>
    attribute.id == urns.roleScopingEntity);
  if (!!scopingAttribute && effect == Effect.PERMIT && database === 'arangoDB' && !ruleCondition) { // note: there is currently no query to exclude scopes
    // userTotalScope is an array accumulated scopes for each rule
    query['scope'] = {
      custom_query: 'filterByOwnership',
      custom_arguments: {
        // value: Buffer.from(JSON.stringify({
        entity: scopingAttribute.value,
        instance: userTotalScope
      }
    };
    scopingUpdated = true;
  } else if (database && database === 'postgres' && effect == Effect.PERMIT) {
    query['filter'] = [];
    const filterParamKey = cfg.get('authorization:filterParamKey');
    for (let eachScope of userTotalScope) {
      query['filter'].push({ field: filterParamKey, operation: 'eq', value: eachScope });
    }
    // apply filter from condition
    for (let eachFilter of filter) {
      if (eachFilter && eachFilter.value) {
        query['filter'].push({ field: filterParamKey, operation: 'eq', value: eachFilter.value });
        filter = [];
      }
    }
  }

  for (let attribute of resources) {
    if (attribute.id == urns.resourceID) {
      if (effect == Effect.PERMIT) {
        filter.push({
          field: 'id',
          operation: Filter_Operation.eq,
          value: attribute.value
        });
      } else {
        filter.push({
          field: 'id',
          operation: Filter_Operation.neq,
          value: attribute.value
        });
      }
      // add ID filter
    } else if (attribute.id == urns.property) {
      // add fields filter
      if (!query['field']) {
        query['field'] = [];
      }
      query['field'].push({
        name: attribute.value.split('#')[1],
        include: effect == Effect.PERMIT
      });
    }
  }

  const key = effect == Effect.PERMIT ? FilterOp_Operator.or : FilterOp_Operator.and;
  if (query.filter && !query.filters) {
    query.filters = { filter: query['filter'] };
    // and or operator comparision
    query.filters.operator = key;
    // override the operator if its returned from rule condition
    if (filterOperator) {
      query.filters.operator = filterOperator;
    }
    delete query['filter'];
  } else if (!_.isEmpty(filter) || key == FilterOp_Operator.or) {
    query['filters'] = {
      filter
    };
    // override the operator if its returned from rule condition
    if (filterOperator) {
      query.filters.operator = filterOperator;
    }
  }
  query.scopingUpdated = scopingUpdated;
  return query;
};

export const buildFilterPermissions = async (policySet: PolicySetRQ,
  subject: ResolvedSubject, reqResources: any, database: string): Promise<QueryArguments | UserQueryArguments> => {
  let hierarchical_scopes = subject && subject.hierarchical_scopes ? subject.hierarchical_scopes : [];
  let role_associations = subject && subject.role_associations ? subject.role_associations : [];
  if (_.isEmpty(role_associations) || _.isEmpty(hierarchical_scopes)) {
    let token = subject.token;
    let redisHRScopesKey;
    if (subject && subject.id) {
      redisHRScopesKey = `cache:${subject.id}:${token}:hrScopes`;
      hierarchical_scopes = await get(redisHRScopesKey);
      if (_.isEmpty(hierarchical_scopes)) {
        redisHRScopesKey = `cache:${subject.id}:hrScopes`;
        hierarchical_scopes = await get(redisHRScopesKey);
      }
      if (!hierarchical_scopes) {
        hierarchical_scopes = [];
      }
      let redisSubject = await get(`cache:${subject.id}:subject`);
      if (redisSubject && redisSubject.role_associations) {
        role_associations = redisSubject.role_associations;
      }
      if (!role_associations) {
        role_associations = [];
      }
    }
  }
  Object.assign(subject, { hierarchical_scopes, role_associations });
  const urns = cfg.get('authorization:urns');
  let query: any = {
    filters: {
      filter: []
    }
  };

  const pSetAlgorithm = policySet.combining_algorithm;
  const policyEffects = [];
  const policyFiltersArr = [];

  if (policySet.policies) {
    for (let policy of policySet.policies) {
      if (policy.has_rules) {
        const algorithm = policy.combining_algorithm;
        // iterate through policy_set and check subject in policy and Rule:
        if (policy.target && policy.target.subject) {
          let userSubjectMatched = checkSubjectMatch(subject, policy.target.subject);
          if (!userSubjectMatched) {
            logger.debug(`Skipping policy as policy subject and user subject don't match`);
            continue;
          }
        }
        let effect: Effect;
        for (let rule of policy.rules) {
          if (algorithm == urns.permitOverrides && rule.effect == Effect.PERMIT) {
            effect = Effect.PERMIT;
            break;
          } else if (algorithm == urns.denyOverrides && rule.effect == Effect.DENY) {
            effect = Effect.DENY;
          }
        }

        if (effect === undefined) {
          effect = algorithm == urns.permitOverrides ? Effect.DENY : Effect.PERMIT;
        }

        let scopingUpdated = false;
        for (let rule of policy.rules) {
          let reducedUserScope = [];
          if (rule.target && rule.target.subject) {
            let userSubjectMatched = checkSubjectMatch(subject, rule.target.subject, reducedUserScope);
            if (!userSubjectMatched) {
              logger.debug(`Skipping rule as user subject and rule subject don't match`);
              continue;
            }
          }
          const filterPermissions = buildQueryFromTarget(rule.target, rule.effect,
            reducedUserScope, urns, scopingUpdated, reqResources,
            rule.condition, subject, database);
          if (!_.isEmpty(filterPermissions)) {
            scopingUpdated = filterPermissions.scopingUpdated;
            delete filterPermissions.scopingUpdated;
          }
          if (!_.isEmpty(filterPermissions)) {
            policyFiltersArr.push(filterPermissions);
          }
        }
        policyEffects.push(effect);
      } else {
        policyEffects.push(policy.effect);
      }
    }
  }

  if (_.isEmpty(policyEffects)) {
    return null;
  }

  let applicable: Effect;
  if (pSetAlgorithm == urns.permitOverrides) {
    applicable = _.includes(policyEffects, Effect.PERMIT) ? Effect.PERMIT : Effect.DENY;
  } else {
    applicable = _.includes(policyEffects, Effect.DENY) ? Effect.DENY : Effect.PERMIT;
  }

  const key = applicable == Effect.PERMIT ? 'or' : 'and';
  if (policyFiltersArr.length === 0) {
    return undefined;
  }

  let aqlQueryFilters = false;
  for (let policy of policyFiltersArr) {
    let filterList = [];
    // fix to override the AQL query filters with ACS policy filters if they exist for ArangoDB
    // TODO remove this once the AQL filterByOwnership is removed and ACS policy filters are returned
    if (policy.scope && applicable == Effect.PERMIT && !query['custom_query']) {
      if (!query['custom_queries']) {
        query['custom_queries'] = [];
      }

      if (!_.includes(query['custom_queries'], policy.scope.custom_query)) {
        query['custom_queries'].push(policy.scope.custom_query);

        if (!query['custom_arguments']) {
          query['custom_arguments'] = {};
        }
        _.merge(query['custom_arguments'], policy.scope.custom_arguments);
        aqlQueryFilters = true;
      }
    }
    if (policy.filters && policy.filters.filter && !aqlQueryFilters) {
      filterList = policy.filters.filter;
    }
    for (let filter of filterList) {
      query.filters.filter.push(filter);
    }
    if (_.isArray(filterList) && filterList.length > 0) {
      query.filters.operator = key;
      // override the operator if its returned from rule condition
      if (policy?.filters?.operator) {
        query.filters.operator = policy.filters.operator;
      }
    }
    if (policy.field) {
      if (!query['field']) {
        query['field'] = policy.field;
      } else {
        query['field'] = policy.field.concat(query['field']);
      }
    }
  }

  if (aqlQueryFilters && query?.filters?.filter?.length > 0) {
    query.filters.filter = [];
  }

  if (!_.isEmpty(query) && (!_.isNil(query.filters) || !_.isEmpty(query['field']) || !_.isEmpty(query['custom_query']))) {
    if (query['custom_arguments']) {
      query['custom_arguments'] = { value: Buffer.from(JSON.stringify(query['custom_arguments'])) };
    }
    return query;
  }
  return undefined;
};

interface QueryParams {
  scope?: any;
  filter?: any;
  filters?: any;
  field?: any[];
  scopingUpdated?: boolean;
  ruleCondition?: boolean;
}

export const generateOperationStatus = (code?: number, message?: string) => {
  if (!code) {
    code = 500; // Internal server error
  }
  return {
    code,
    message
  };
};

/**
 * Check if the attributes of a resources from a rule, policy
 * or policy set match the attributes from a request.
 *
 * @param ruleAttributes
 * @param requestAttributes
 */
export const attributesMatch = (ruleAttributes: DeepPartial<Attribute>[], requestAttributes: DeepPartial<Attribute>[]): boolean => {
  for (let attribute of ruleAttributes) {
    const id = attribute.id;
    const value = attribute.value;
    const match = !!requestAttributes.find((requestAttribute) => {
      // return requestAttribute.id == id && requestAttribute.value == value;
      if (requestAttribute.id == id && requestAttribute.value == value) {
        return true;
      } else if (requestAttribute.id == id) {
        // rule entity
        let pattern = value.substring(value.lastIndexOf(':') + 1);
        let nsEntityArray = pattern.split('.');
        // firstElement could be either entity or namespace
        let nsOrEntity = nsEntityArray[0];
        let entityRegexValue = nsEntityArray[nsEntityArray.length - 1];
        let reqNS, ruleNS;
        if (nsOrEntity.toUpperCase() != entityRegexValue.toUpperCase()) {
          // rule name space is present
          ruleNS = nsOrEntity.toUpperCase();
        }

        // request entity
        let reqValue = requestAttribute.value;
        const reqAttributeNS = reqValue.substring(0, reqValue.lastIndexOf(':'));
        const ruleAttributeNS = value.substring(0, value.lastIndexOf(':'));
        // verify namespace before entity name
        if (reqAttributeNS != ruleAttributeNS) {
          return false;
        }
        let reqPattern = reqValue.substring(reqValue.lastIndexOf(':') + 1);
        let reqNSEntityArray = reqPattern.split('.');
        // firstElement could be either entity or namespace
        let reqNSOrEntity = reqNSEntityArray[0];
        let requestEntityValue = reqNSEntityArray[reqNSEntityArray.length - 1];
        if (reqNSOrEntity.toUpperCase() != requestEntityValue.toUpperCase()) {
          // request name space is present
          reqNS = reqNSOrEntity.toUpperCase();
        }

        if ((reqNS && ruleNS && (reqNS === ruleNS)) || (!reqNS && !ruleNS)) {
          const reExp = new RegExp(entityRegexValue);
          if (requestEntityValue.match(reExp)) {
            return true;
          }
        }
      } else {
        return false;
      }
    });

    if (!match) {
      return false;
    }
  }

  return true;
};

export interface FilterMapResponse {
  resourceFilterMap: ResourceFilterMap[];
  customQueryArgs: CustomQueryArgs[];
}

/**
 * creates resource filters and custom query / arguments for the resource list provided
 * It iterates through each resource and filter the applicable policies and
 * provide them to buildFilterPermissions to create filters for each of the resource requested
 *
 * @param {Resource[]} resource Contains resource name, resource instance and optional resource properties
 * @param {PolicSetResponse} policySetResponse contains set of applicable policies for entities list
 * @param {any} resources context resources
 * @param {AuthZAction} action Action to be performed on resource
 * @param {Subject} subject Contains subject information or ApiKey
 * @param {string} subjectID resolved subject identifier from token
 * @param {boolean} authzEnforced authorization enforcement flag
 * @param {string} targetScope target scope
 * @param {Database} database database used either `arangoDB` or `postgres`,
 * if this param is missing defaults to `arangoDB`
 *
 */
export const createResourceFilterMap = async (resource: Resource[],
  policySetResponse: PolicySetRQResponse, resources: any, action: AuthZAction,
  subject: DeepPartial<Subject>, subjectID: string, authzEnforced: boolean,
  targetScope: string, database: 'arangoDB' | 'postgres'): Promise<FilterMapResponse | DecisionResponse> => {
  let resourceFilterMap = [];
  let customQueryArgs = [];
  for (let resourceObj of resource) {
    let resourcenameNameSpace = resourceObj.resource;
    let resourceNameSpace, resourceName;

    if (resourcenameNameSpace && resourcenameNameSpace.indexOf('.') > -1) {
      resourceNameSpace = resourcenameNameSpace.slice(0, resourcenameNameSpace.lastIndexOf('.'));
      // resource name from `.` till end, when no end index is specified for
      // slice api it returns till end of string
      resourceName = resourcenameNameSpace.slice(resourcenameNameSpace.lastIndexOf('.') + 1);
    } else {
      resourceName = resourcenameNameSpace;
    }
    const resourceType = formatResourceType(resourceName, resourceNameSpace);
    const urns = cfg.get('authorization:urns');
    const resourceValueURN = urns?.model + `:${resourceType}`;
    let resourcePolicies = { policy_sets: [{ policies: [] }] };
    const resourceAttributes = [{ id: urns?.entity, value: resourceValueURN }];
    if (policySetResponse && policySetResponse.policy_sets && policySetResponse.policy_sets.length > 0) {
      policySetResponse.policy_sets.forEach((policySet) => {
        const policies = policySet.policies;
        // check if the policy and rule set is applicable to the enitity
        if (policies && policies.length > 0) {
          for (let policy of policies) {
            const policyTargetResources = policy?.target?.resources;
            if (policyTargetResources) {
              const policyMatch = attributesMatch(policyTargetResources, resourceAttributes);
              if (policyMatch && policy.rules && policy.rules.length > 0) {
                for (let rule of policy.rules) {
                  const ruleMatch = attributesMatch(rule?.target?.resources, resourceAttributes);
                  if (ruleMatch) {
                    resourcePolicies.policy_sets[0].policies.push(policy);
                    break;
                  }
                }
              }

            } else if (policy?.rules) {
              // check for rule
              for (let rule of policy.rules) {
                const ruleMatch = attributesMatch(rule?.target?.resources, resourceAttributes);
                if (ruleMatch) {
                  resourcePolicies.policy_sets[0].policies.push(policy);
                  break;
                }
              }
            }
          }
        }
      });
    }
    let permissionArguments = await buildFilterPermissions(resourcePolicies.policy_sets[0], subject as ResolvedSubject, resources, database);
    if (!permissionArguments && authzEnforced) {
      const msg = `Access not allowed for request with subject:${subjectID}, ` +
        `resource:${resourceName}, action:${action}, target_scope:${targetScope}; the response was DENY`;
      const details = `Subject:${subjectID} does not have access to target scope ${targetScope}}`;
      logger.verbose(msg);
      logger.verbose('Details:', { details });
      return { decision: Response_Decision.DENY, operation_status: generateOperationStatus(Number(errors.ACTION_NOT_ALLOWED.code), msg) };
    }

    if (!permissionArguments && !authzEnforced) {
      logger.verbose(`The Access response was DENY for a request from subject:${subjectID}, ` +
        `resource:${resourceName}, action:${action}, target_scope:${targetScope}, ` +
        `but since ACS enforcement config is disabled overriding the ACS result`);
      return { decision: Response_Decision.PERMIT, operation_status: { code: 200, message: 'success' } };
    }

    if (permissionArguments) {
      if (!_.isArray(permissionArguments.filters)) {
        permissionArguments.filters = [permissionArguments.filters];
      }
      resourceFilterMap.push({ resource: resourceName, filters: permissionArguments.filters });
      if (permissionArguments.custom_queries && permissionArguments.custom_arguments) {
        customQueryArgs.push({
          resource: resourceName,
          custom_queries: permissionArguments.custom_queries,
          custom_arguments: permissionArguments.custom_arguments
        });
      }
    }
  }
  return {
    resourceFilterMap, customQueryArgs
  };
};

/**
 * converts the Obligation Attribute[] to Obligation[] object
 *
 * @param {Attribute[]} obligation contains list of obligations
 * @returns {Obligation[]} maps the URNS of the entity to resource and obligation attributes
 * to property[].
 *
 */
export const mapResourceURNObligationProperties = (obligation: Attribute[]): Obligation[] => {
  let mappedResourceObligation: Obligation[] = [];
  const urns = cfg.get('authorization:urns');
  for (let obligationObj of obligation) {
    if (obligationObj.id === urns.entity) {
      const resourceValueURN = obligationObj.value;
      const resourceNameSpace = resourceValueURN.substring(resourceValueURN.lastIndexOf(':') + 1);
      let resource = resourceNameSpace.substring(resourceNameSpace.lastIndexOf('.') + 1);
      let resourceWithNameSpace = resourceNameSpace.substring(0, resourceNameSpace.lastIndexOf('.'));
      if (resource != resourceWithNameSpace) {
        // name space exists add the entity name to obligation as well with name space
        resource = resourceWithNameSpace;
      }
      const obligationAttributes = obligationObj.attributes;
      let property = new Set<string>();
      for (let obligationAttribute of obligationAttributes) {
        if (obligationAttribute.id === urns.maskedProperty) {
          property.add(obligationAttribute.value.substring(obligationAttribute.value.lastIndexOf('#') + 1));
        }
      }
      mappedResourceObligation.push({ resource, property: Array.from(property) });
    }
  }
  return mappedResourceObligation;
};
