import {
  PolicySetRQ, PolicySetRQResponse, AttributeTarget, HierarchicalScope,
  ResourceFilterMap, CustomQueryArgs, DecisionResponse, ACSResource, AuthZAction,
  ResolvedSubject, Obligation
} from './acs/interfaces.js';
import { QueryArguments, UserQueryArguments } from './acs/resolver.js';
import { errors, cfg, urns } from './config.js';
// @ts-expect-error TS7016
import nodeEval from 'node-eval';
import logger from './logger.js';
import { get } from './acs/cache.js';
import {
  Subject,
  DeepPartial
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/auth.js';
import { Attribute } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/attribute.js';
import {
  Filter_Operation, FilterOp_Operator, FieldFilter
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/resource_base.js';
import {
  Response_Decision
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/access_control.js';
import { Effect } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/rule.js';
import { isEmptyish, isIncludedIn, isNullish } from "remeda";

export const handleError = (err: string | Error | any): any => {
  let error;
  if (typeof err == 'string') {
    error = (errors as any)[err] ?? errors.SYSTEM_ERROR;
  } else {
    error = errors.SYSTEM_ERROR;
  }
  return error;
};

export const notAllowedMessage = (
  subjectID?: string,
  resourceName?: string,
  action?: string,
  targetScope?: string,
  decision?: string,
) => [
  `Access not allowed for request with`,
  `subject:${ subjectID || 'undefined' },`,
  `resource:${ resourceName || 'undefined' },`,
  `action:${ action || 'undefined' },`,
  `target_scope:${ targetScope || 'undefined' };`,
  `the response was ${ decision || 'undefined' }`,
].join(' ');

const reduceUserScope = (
  hrScope: HierarchicalScope,
  reducedUserScope: string[],
  hierarchicalRoleScoping: string
) => {
  reducedUserScope.push(hrScope.id);
  if (hrScope?.children?.length > 0 && hierarchicalRoleScoping === 'true') {
    for (const childNode of hrScope.children) {
      reduceUserScope(childNode, reducedUserScope, hierarchicalRoleScoping);
    }
  }
};

const checkTargetScopeExists = (
  hrScopes: HierarchicalScope[],
  targetScope: string,
  reducedUserScope: string[],
  hierarchicalRoleScopingCheck: string
): boolean => {
  return hrScopes.some((hrScope) => {
    if (hrScope?.id === targetScope) {
      // found the target scope object, iterate and put the orgs in reducedUserScope array
      logger?.debug(`Target entity match found in the user's hierarchical scope`);
      reduceUserScope(hrScope, reducedUserScope, hierarchicalRoleScopingCheck);
      return true;
    } else if (hrScope?.children?.length > 0 && hierarchicalRoleScopingCheck === 'true') {
      for (const childNode of hrScope.children) {
        if (checkTargetScopeExists([childNode], targetScope, reducedUserScope, hierarchicalRoleScopingCheck)) {
          return true;
        }
      }
    }
    return false;
  });
};

const checkSubjectMatch = (
  user: ResolvedSubject,
  ruleSubjectAttributes: Attribute[],
  reducedUserScope?: string[]
): boolean => {
  // 1) Iterate through ruleSubjectAttributes and check if the roleScopingEntity URN and
  // role URN exists
  // 2) Now check if the subject rule role value matches with one of the users ctx role_associations
  // then get the corresponding scope instance and check if the targetScope is present in user HR scope Object
  let hierarchicalRoleScopingCheck = 'true'; // by default HR scoping check is considered
  let ruleRoleValue: string;
  let ruleRoleScopeEntityName: string;
  if (ruleSubjectAttributes?.length === 0) {
    return true;
  }
  for (const attribute of ruleSubjectAttributes) {
    if (attribute?.id === urns.unauthenticated_user && attribute?.value === 'true') {
      return true;
    }
    if (attribute?.id === urns.roleScopingEntity) {
      ruleRoleScopeEntityName = attribute.value;
    } else if (attribute.id === urns.role) { // urns.role -> urn:restorecommerce:acs:names:role
      ruleRoleValue = attribute.value;
      logger?.debug(`Found Rule's Subject role ${ruleRoleValue}`);
    } else if (attribute?.id === urns.hierarchicalRoleScoping) {
      hierarchicalRoleScopingCheck = attribute.value;
      logger?.debug('HR Scoping URN set on rule', { hierarchicalRoleScopingCheck });
    }
  }

  if (ruleRoleValue && ruleRoleScopeEntityName) {
    const matchingRoleScopedInstance: string[] = user?.role_associations?.flatMap(
      ra => ra.attributes
    ).filter(
      a => a?.id === urns?.roleScopingEntity
        && a?.value === ruleRoleScopeEntityName
    ).flatMap(
      a => a?.attributes
    ).filter(
      aa => aa?.id === urns?.roleScopingInstance
    ).map(
      aa => aa.value
    );

    logger?.debug('Role scoped instances for matching entity', { id: user?.id, ruleRoleScopeEntityName, matchingRoleScopedInstance });
    // validate HR scope root ID contains the role scope instances
    const hrScopeExist = user?.hierarchical_scopes?.some((hrScope) => matchingRoleScopedInstance.includes(hrScope.id));
    if (!hrScopeExist) {
      logger?.info('Hierarchial scopes for matching role does not exist', {
        role: ruleRoleValue,
        hrScopes: user?.hierarchical_scopes,
        instances: matchingRoleScopedInstance
      });
      return false;
    } else if (hrScopeExist && user?.scope) {
      logger?.debug('Target scope set and HR scopes exist, validating target scope from HR scopes', { targetScope: user?.scope });
      return checkTargetScopeExists(
        user?.hierarchical_scopes?.filter((hrScope) => matchingRoleScopedInstance?.includes(hrScope?.id) && hrScope?.role === ruleRoleValue),
        user?.scope,
        reducedUserScope,
        hierarchicalRoleScopingCheck
      );
    } else if (hrScopeExist && !user.scope) {
      // HR scope match exist but user has not provided scope so still a match is considered
      logger?.debug('Target scope not provided using full HR tree for matched role', { role: ruleRoleValue });
      // if no scope is provided then use the complete HR tree for user scopes
      user?.hierarchical_scopes?.filter(
        (hrScope) => matchingRoleScopedInstance?.includes(hrScope?.id)
          && hrScope?.role === ruleRoleValue
      ).forEach((eachHRScope) => {
        reduceUserScope(eachHRScope, reducedUserScope, hierarchicalRoleScopingCheck);
      });
      return reducedUserScope?.length > 0;
    }
  } else if (ruleRoleValue) {
    return user?.role_associations?.some(
      ra => ra.role === ruleRoleValue
    );
  }
  return false;
};

const validateCondition = (condition: string, request: any): any => {
  const evalResponse = nodeEval(condition, 'condition.js', request);
  if (typeof evalResponse === 'function') {
    return evalResponse(request);
  } else {
    return evalResponse;
  }
};

const buildQueryFromTarget = (
  target: AttributeTarget,
  effect: Effect,
  userTotalScope: string[],
  urns: any,
  scopingUpdated: any,
  reqResources: any,
  condition?: string,
  reqSubject?: DeepPartial<Subject>,
  database?: string
): QueryParams => {
  const { subjects, resources } = target;
  let ruleCondition = false;
  let filter = [];
  const query: QueryParams = {};
  let filterId;
  let filterOperator;

  if (condition) {
    ruleCondition = true;
  }
  // if there is a condition add this to filter
  if (condition && !isEmptyish(condition)) {
    condition = condition.replace(/\\n/g, '\n');
    if (!reqResources) {
      reqResources = [];
    }
    if (!Array.isArray(reqResources)) {
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
      if (filterId === true) {
        return;
      } else if (typeof filterId === 'string') {
        if (filterId && !scopingUpdated) {
          // verify if the returned filterId is same as the targetID
          if (reqResources && reqResources[0] && reqResources[0].filters && reqResources[0].filters.length > 0) {
            const targetId = reqResources[0]?.filters[0]?.filters[0]?.value;
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
        if (filterId.filters && Array.isArray(filterId.filters)) {
          filter.push(...filterId.filters);
          // map filter operator if its returned from condition
          if (filterId?.operator) {
            filterOperator = filterId.operator;
          }
        } else {
          ruleCondition = true;
          filter.push(filterId);
        }
      }
      else {
        return;
      }
    } catch (err: any) {
      logger?.error('Error caught evaluating condition:', { condition });
      logger?.error('Error', { code: err.code, message: err.message, stack: err.stack });
      return;
    }
  }
  const scopingAttribute = subjects?.find(
    (attribute: Attribute) => attribute.id == urns.roleScopingEntity
  );
  if (!!scopingAttribute && effect == Effect.PERMIT && database === 'arangoDB' && !ruleCondition) { // note: there is currently no query to exclude scopes
    // userTotalScope is an array accumulated scopes for each rule
    query['scope'] = {
      custom_query: cfg.get('authorization:custom_query_name') ?? 'filterByOwnership',
      custom_arguments: {
        // value: Buffer.from(JSON.stringify({
        entity: scopingAttribute.value,
        instance: userTotalScope
      }
    };
    scopingUpdated = true;
  } else if (database && database === 'postgres' && effect == Effect.PERMIT) {
    query['filters'] = [];
    const filterKeyMapArray = cfg?.get('authorization:filterParamKey');
    let filterParamKey;
    if (Array.isArray(filterKeyMapArray)) {
      filterParamKey = filterKeyMapArray?.find((obj) => obj?.scopingEntity === scopingAttribute?.value)?.value;
    }
    if (!filterParamKey) {
      // default filter Paramkey for PostgresDB
      filterParamKey = 'orgKey';
    }
    logger?.debug('Filter paramter key for Postgres DB', { filterParamKey });
    for (const eachScope of userTotalScope) {
      query['filters'].push({ field: filterParamKey, operation: 'eq', value: eachScope });
    }
    // apply filter from condition
    for (const eachFilter of filter) {
      if (eachFilter && eachFilter.value) {
        query['filters'].push({ field: filterParamKey, operation: 'eq', value: eachFilter.value });
        filter = [];
      }
    }
  }

  if (resources?.length > 0) {
    for (const attribute of resources) {
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
        if (!query['fields']) {
          query['fields'] = [];
        }
        query['fields'].push({
          name: attribute.value.split('#')[1],
          include: effect == Effect.PERMIT
        });
      }
    }
  }

  const key = effect == Effect.PERMIT ? FilterOp_Operator.or : FilterOp_Operator.and;
  if (query.filters) {
    // query.filters = { filter: query['filter'] };
    // and or operator comparision
    query.filters.operator = key;
    // override the operator if its returned from rule condition
    if (filterOperator) {
      query.filters.operator = filterOperator;
    }
    delete query['filter'];
  } else if (!isEmptyish(filter) || key == FilterOp_Operator.or) {
    query['filters'] = filter;
    // override the operator if its returned from rule condition
    if (filterOperator) {
      query.filters.operator = filterOperator;
    }
  }
  query.scopingUpdated = scopingUpdated;
  return query;
};

export const buildFilterPermissions = async (
  policySet: PolicySetRQ,
  subject: ResolvedSubject,
  reqResources: any,
  database: string
): Promise<QueryArguments | UserQueryArguments> => {
  if (subject?.id) {
    if (!subject.hierarchical_scopes?.length) {
      subject.hierarchical_scopes = await get(`cache:${subject.id}:${subject.token}:hrScopes`);
    }

    if (!subject.hierarchical_scopes?.length) {
      subject.hierarchical_scopes = await get(`cache:${subject.id}:hrScopes`);
    }

    if (!subject.role_associations?.length) {
      subject.role_associations = await get(`cache:${subject.id}:subject`).then(
        subject => subject?.role_associations ?? []
      );
    }
  }
  else {
    subject.hierarchical_scopes ??= [];
    subject.role_associations ??= [];
  }

  const query: any = {
    filters: []
  };

  const pSetAlgorithm = policySet.combining_algorithm;
  const policyEffects = [];
  const policyFiltersArr = [];

  if (policySet?.policies?.length > 0) {
    for (const policy of policySet.policies) {
      if (policy.has_rules) {
        const algorithm = policy.combining_algorithm;
        // iterate through policy_set and check subject in policy and Rule:
        if (policy?.target?.subjects) {
          const userSubjectMatched = checkSubjectMatch(subject, policy.target.subjects);
          if (!userSubjectMatched) {
            logger?.debug(`Skipping policy as policy subject and user subject don't match`);
            continue;
          }
        }
        let effect: Effect;
        for (const rule of policy.rules || []) {
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
        for (const rule of policy?.rules || []) {
          const reducedUserScope: string[] = [];
          if (rule?.target?.subjects) {
            const userSubjectMatched = checkSubjectMatch(subject, rule.target.subjects, reducedUserScope);
            if (!userSubjectMatched) {
              logger?.debug(`Skipping rule as user subject and rule subject don't match`);
              continue;
            }
          }

          const filterPermissions = buildQueryFromTarget(
            rule.target,
            rule.effect,
            reducedUserScope,
            urns,
            scopingUpdated,
            reqResources,
            rule.condition,
            subject,
            database
          );

          if (!isEmptyish(filterPermissions)) {
            scopingUpdated = filterPermissions.scopingUpdated;
            delete filterPermissions.scopingUpdated;
          }
          if (!isEmptyish(filterPermissions)) {
            policyFiltersArr.push(filterPermissions);
            // if reducedUserScope is empty - no filters are applied further
            // as this is a rule without scoping and should override the filters
            // from other Rules which have scoping entity
            if (isEmptyish(reducedUserScope) && rule.effect === effect) {
              return { filters: [] } as QueryArguments;
            }
          }
        }
        policyEffects.push(effect);
      } else {
        policyEffects.push(policy.effect);
      }
    }
  }

  if (isEmptyish(policyEffects)) {
    return null;
  }

  let applicable: Effect;
  if (pSetAlgorithm == urns.permitOverrides) {
    applicable = isIncludedIn(Effect.PERMIT, policyEffects) ? Effect.PERMIT : Effect.DENY;
  } else {
    applicable = isIncludedIn(Effect.DENY, policyEffects) ? Effect.DENY : Effect.PERMIT;
  }

  const key = applicable == Effect.PERMIT ? 'or' : 'and';
  if (policyFiltersArr.length === 0) {
    return undefined;
  }

  let aqlQueryFilters = false;
  for (const policy of policyFiltersArr) {
    let filterList = [];
    // fix to override the AQL query filters with ACS policy filters if they exist for ArangoDB
    // TODO remove this once the AQL filterByOwnership is removed and ACS policy filters are returned
    if (policy?.scope && applicable == Effect.PERMIT && !query['custom_query']) {
      if (!query['custom_queries']) {
        query['custom_queries'] = [];
      }

      // example Policy
      // {"scope":{"custom_query":"filterByOwnership",
      // "custom_arguments":{"entity":"urn:restorecommerce:acs:model:organization.Organization","instance":["restorecommerce-demo-customer-000-organization"] }
      // }, "filters":[],"scopingUpdated":true}
      if (policy?.scope?.custom_query && policy?.scope?.custom_arguments?.instance?.length > 0) {
        let customQueryExist = false;
        if (query['custom_queries']?.length > 0) {
          customQueryExist = query['custom_queries'].some((obj: any) => obj === policy.scope.custom_query);
        }
        // policy.scope.custom_query -> filterByOwnerShip does not exist or is a different AQL query
        if (!customQueryExist) {
          query['custom_queries'].push(policy.scope.custom_query);
        }

        if (!query['custom_arguments']) {
          query['custom_arguments'] = [];
        }

        const customArgEntityExist = query['custom_arguments']?.find((obj: any) => obj?.entity === policy?.scope?.custom_arguments?.entity);
        if (!customArgEntityExist) {
          query['custom_arguments']?.push(policy?.scope?.custom_arguments);
        } else {
          // same entity already exists, update instances on this object
          query['custom_arguments']?.forEach((obj: any) => {
            if (obj?.entity === policy?.scope?.custom_arguments?.entity) {
              obj?.instance?.push(...policy?.scope?.custom_arguments?.instance || []);
            }
          });
        }
        aqlQueryFilters = true;
      }
    }
    if (policy?.filters && !aqlQueryFilters) {
      filterList = policy.filters;
    }
    for (const filter of filterList) {
      query.filters.push(filter);
    }
    if (Array.isArray(filterList) && filterList.length > 0) {
      query.filters.operator = key;
      // override the operator if its returned from rule condition
      if (policy?.filters?.operator) {
        query.filters.operator = policy.filters.operator;
      }
    }
    if (policy.fields) {
      if (!query['fields']) {
        query['fields'] = policy.fields;
      } else {
        query['fields'] = policy.fields.concat(query['fields']);
      }
    }
  }

  if (aqlQueryFilters && query?.filters?.length > 0) {
    query.filters = [];
  }

  if (!isEmptyish(query) && (!isNullish(query.filters) || !isEmptyish(query['fields']) || !isEmptyish(query['custom_query']))) {
    if (query['custom_arguments']) {
      query['custom_arguments'] = { value: Buffer.from(JSON.stringify(query['custom_arguments'])) };
    }
    query.filters = [{ filters: query.filters }];
    return query;
  }
  return undefined;
};

interface QueryParams {
  scope?: any;
  filter?: any;
  filters?: any;
  fields?: FieldFilter[];
  scopingUpdated?: boolean;
  ruleCondition?: boolean;
}

export const generateOperationStatus = (code?: number, message?: string) => {
  return {
    code: Number.isInteger(code) ? code : 500,
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
  if (ruleAttributes?.length > 0) {
    for (const attribute of ruleAttributes) {
      const id = attribute.id;
      const value = attribute.value;
      const match = !!requestAttributes.find((requestAttribute) => {
        // return requestAttribute.id == id && requestAttribute.value == value;
        if (requestAttribute.id == id && requestAttribute.value == value) {
          return true;
        } else if (requestAttribute.id == id) {
          // rule entity
          const pattern = value.substring(value.lastIndexOf(':') + 1);
          const nsEntityArray = pattern.split('.');
          // firstElement could be either entity or namespace
          const nsOrEntity = nsEntityArray[0];
          const entityRegexValue = nsEntityArray[nsEntityArray.length - 1];
          let reqNS, ruleNS;
          if (nsOrEntity.toUpperCase() != entityRegexValue.toUpperCase()) {
            // rule name space is present
            ruleNS = nsOrEntity.toUpperCase();
          }

          // request entity
          const reqValue = requestAttribute.value;
          const reqAttributeNS = reqValue.substring(0, reqValue.lastIndexOf(':'));
          const ruleAttributeNS = value.substring(0, value.lastIndexOf(':'));
          // verify namespace before entity name
          if (reqAttributeNS != ruleAttributeNS) {
            return false;
          }
          const reqPattern = reqValue.substring(reqValue.lastIndexOf(':') + 1);
          const reqNSEntityArray = reqPattern.split('.');
          // firstElement could be either entity or namespace
          const reqNSOrEntity = reqNSEntityArray[0];
          const requestEntityValue = reqNSEntityArray[reqNSEntityArray.length - 1];
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
  }
  return true;
};

export interface FilterMapResponse {
  resourceFilterMap: ResourceFilterMap[];
  customQueryArgs: CustomQueryArgs[];
}

export const formatResourceType = (type: string, namespacePrefix?: string): string => {
  // e.g: contact_point -> contact_point.ContactPoint
  const prefix = type;
  const suffixArray = type.split('_').map((word) => {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });
  const suffix = suffixArray.join('');
  if (namespacePrefix) {
    return `${namespacePrefix}.${prefix}.${suffix}`;
  } else {
    return `${prefix}.${suffix}`;
  }
};

/**
 * creates resource filters and custom query / arguments for the resource list provided
 * It iterates through each resource and filter the applicable policies and
 * provide them to buildFilterPermissions to create filters for each of the resource requested
 *
 * @param {ACSResource[]} resource Contains resource name, resource instance and optional resource properties
 * @param {PolicSetResponse} policySetResponse contains set of applicable policies for entities list
 * @param {any} resources context resources
 * @param {AuthZAction} action Action to be performed on resource
 * @param {Subject} subject Contains subject information
 * @param {string} subjectID resolved subject identifier from token
 * @param {boolean} authzEnforced authorization enforcement flag
 * @param {string} targetScope target scope
 * @param {Database} database database used either `arangoDB` or `postgres`,
 * if this param is missing defaults to `arangoDB`
 *
 */
export const createResourceFilterMap = async (
  resource: ACSResource[],
  policySetResponse: PolicySetRQResponse,
  resources: any, action: AuthZAction,
  subject: DeepPartial<Subject>,
  subjectID: string,
  authzEnforced: boolean,
  targetScope: string,
  database: 'arangoDB' | 'postgres'
): Promise<FilterMapResponse | DecisionResponse> => {
  const resourceFilterMap = [];
  const customQueryArgs = [];
  for (const resourceObj of resource) {
    const resourcenameNameSpace = resourceObj.resource;
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
    const resourceValueURN = urns?.model + `:${resourceType}`;
    const resourcePolicies = { policy_sets: [{ policies: [] } as PolicySetRQ] };
    const resourceAttributes = [{ id: urns?.entity, value: resourceValueURN }];
    if (policySetResponse && policySetResponse.policy_sets && policySetResponse.policy_sets.length > 0) {
      policySetResponse.policy_sets.forEach((policySet) => {
        const policies = policySet.policies;
        // check if the policy and rule set is applicable to the enitity
        if (policies?.length > 0) {
          for (const policy of policies) {
            const policyTargetResources = policy?.target?.resources;
            if (policyTargetResources) {
              const policyMatch = attributesMatch(policyTargetResources, resourceAttributes);
              if (policyMatch && policy?.rules?.length > 0) {
                for (const rule of policy.rules) {
                  const ruleMatch = attributesMatch(rule?.target?.resources, resourceAttributes);
                  if (ruleMatch) {
                    resourcePolicies.policy_sets[0].policies.push(policy);
                    break;
                  }
                }
              }

            } else if (policy?.rules) {
              // check for rule
              for (const rule of policy.rules) {
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
    const permissionArguments = await buildFilterPermissions(
      resourcePolicies.policy_sets[0],
      subject as ResolvedSubject,
      resources,
      database
    );

    if (permissionArguments) {
      if (!Array.isArray(permissionArguments.filters)) {
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
    else if (authzEnforced) {
      const msg = notAllowedMessage(
        subjectID,
        resourceName,
        action,
        targetScope,
        Response_Decision.DENY,
      );
      const details = `Subject:${subjectID} does not have access to target scope ${targetScope}}`;
      logger?.verbose(msg);
      logger?.verbose('Details:', { details });
      return { decision: Response_Decision.DENY, operation_status: generateOperationStatus(Number(errors.ACTION_NOT_ALLOWED.code), msg) };
    }
    else {
      const msg = notAllowedMessage(
        subjectID,
        resourceName,
        action,
        targetScope,
        Response_Decision.DENY,
      );
      logger?.verbose(msg);
      return {
        decision: Response_Decision.PERMIT,
        operation_status: {
          code: 200,
          message: 'success',
        }
      };
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
export const mapResourceURNObligationProperties = (obligations: Attribute[]): Obligation[] => {
  const mappedResourceObligation: Obligation[] = [];
  if (obligations?.length > 0) {
    for (const obligationObj of obligations) {
      if (obligationObj?.id === urns.entity && obligationObj?.value) {
        const resourceValueURN = obligationObj.value;
        const resourceNameSpace = resourceValueURN.substring(resourceValueURN.lastIndexOf(':') + 1);
        let resource = resourceNameSpace.substring(resourceNameSpace.lastIndexOf('.') + 1);
        const resourceWithNameSpace = resourceNameSpace.substring(0, resourceNameSpace.lastIndexOf('.'));
        if (resource != resourceWithNameSpace) {
          // name space exists add the entity name to obligation as well with name space
          resource = resourceWithNameSpace;
        }
        const obligationAttributes = obligationObj.attributes;
        const property = new Set<string>();
        for (const obligationAttribute of obligationAttributes) {
          if (obligationAttribute.id === urns.maskedProperty) {
            property.add(obligationAttribute.value.substring(obligationAttribute.value.lastIndexOf('#') + 1));
          }
        }
        mappedResourceObligation.push({ resource, property: Array.from(property) });
      }
    }
  }
  return mappedResourceObligation;
};
