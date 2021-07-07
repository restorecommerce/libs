import * as _ from 'lodash';
import {
  AuthZContext, Attribute, AuthZAction, AuthZTarget, AuthZWhatIsAllowedTarget,
  IAuthZ, NoAuthTarget, NoAuthWhatIsAllowedTarget, Request,
  Resource, Decision, Subject, DecisionResponse, PolicySetRQResponse
} from './interfaces';
import { GrpcClient } from '@restorecommerce/grpc-client';
import { cfg, updateConfig } from '../config';
import logger from '../logger';
import { getOrFill, flushCache } from './cache';
import { Events } from '@restorecommerce/kafka-client';

export declare type Authorizer = ACSAuthZ;
export let authZ: Authorizer;
const urns = cfg.get('authorization:urns');

export const createActionTarget = (action: any): Attribute[] => {
  if (_.isArray(action)) {
    let actionList = [];
    for (let eachAction of action) {
      eachAction = eachAction.valueOf().toLowerCase();
      actionList.push({
        id: urns.actionID,
        value: urns.action + `:${eachAction}`
      });
    }
    return actionList;
  }
  else {
    return [{
      id: urns.actionID,
      value: urns.action + `:${action.valueOf().toLowerCase()}`
    }];
  }
};

export const createSubjectTarget = (subject: Subject): Attribute[] => {
  if (subject.unauthenticated) {
    return [{
      id: urns.unauthenticated_user,
      value: 'true'
    }];
  }
  let flattened = [
    {
      id: urns.subjectID,
      value: subject.id
    }];

  if (subject.scope) {
    let attributes = [
      {
        id: urns.roleScopingEntity,
        value: urns.orgScope
      },
      {
        id: urns.roleScopingInstance,
        value: subject.scope
      }
    ];
    flattened = flattened.concat(attributes);
  }
  return flattened;
};

const formatResourceType = (type: string, namespacePrefix?: string): string => {
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

export const createResourceTarget = (resources: Resource[], action: AuthZAction | AuthZAction[]) => {
  const flattened: Attribute[] = [];
  resources.forEach((resource) => {
    if (action != AuthZAction.EXECUTE) {
      const resourceType = formatResourceType(resource.type, resource.namespace);
      if (resourceType) {
        flattened.push({
          id: urns.entity,
          value: urns.model + `:${resourceType}`
        });
      }
      if (resource.instance && resource.instance.id) {
        flattened.push({
          id: urns.resourceID,
          value: resource.instance.id
        });
      }

      if (resource.fields) {
        resource.fields.forEach((field) => {
          flattened.push({
            id: urns.property,
            value: urns.model + `:${resourceType}#${field}`
          });
        });
      }
    } else {
      resources.forEach((resource) => {
        flattened.push({
          id: urns.operation,
          value: resource.type
        });
      });
    }
  });

  return flattened;
};

export const createResourceTargetWhatIsAllowed = (resources: Resource[]) => {
  const flattened: Attribute[] = [];
  resources.forEach((resource) => {
    const resourceType = formatResourceType(resource.type, resource.namespace);

    if (resource.type.startsWith('mutation') || resource.type.startsWith('query')) {
      resources.forEach((resource) => {
        flattened.push({
          id: urns.operation,
          value: resource.type
        });
      });
    }
    else {
      flattened.push({
        id: urns.entity,
        value: urns.model + `:${resourceType}`
      });
    }
  });

  return flattened;
};

export class UnAuthZ implements IAuthZ {
  acs: any;
  /**
   *
   * @param acs Access Control Service definition (gRPC)
   */
  constructor(acs: any) {
    this.acs = acs;
  }

  async isAllowed(request: Request<NoAuthTarget, AuthZContext>, useCache): Promise<DecisionResponse> {
    const authZRequest = {
      target: {
        action: createActionTarget(request.target.action),
        subject: createSubjectTarget(request.target.subject),
        resources: createResourceTarget(request.target.resources, request.target.action)
      },
      context: request.context
    };

    let response: DecisionResponse;
    try {
      response = await getOrFill(authZRequest, async (req) => {
        return await this.acs.isAllowed(authZRequest);
      }, useCache, 'UnAuthZ:isAllowed');
    } catch (err) {
      logger.error('Error invoking access-control-srv isAllowed operation', err);
      logger.error('error stack', err.stack);
      if (!err.code) {
        err.code = 500;
      }
      response = {
        decision: Decision.DENY,
        operation_status: {
          code: err.code,
          message: err.message
        }
      };
    }

    if (_.isEmpty(response)) {
      logger.error('Unexpected empty response from ACS');
    }

    return response;

  }

  async whatIsAllowed(request: Request<NoAuthWhatIsAllowedTarget, AuthZContext>,
    useCache): Promise<PolicySetRQResponse> {
    const authZRequest = {
      target: {
        action: createActionTarget(request.target.action),
        subject: createSubjectTarget(request.target.subject),
        resources: createResourceTarget(request.target.resources, request.target.action)
      },
      context: request.context
    };
    let response: PolicySetRQResponse;
    try {
      response = await getOrFill(authZRequest, async (req) => {
        return await this.acs.whatIsAllowed(authZRequest);
      }, useCache, 'UnAuthZ:whatIsAllowed');
    } catch (err) {
      logger.error('Error invoking access-control-srv whatIsAllowed operation', err);
      logger.error('error stack', err.stack);
      if (!err.code) {
        err.code = 500;
      }
      response = {
        decision: Decision.DENY,
        operation_status: {
          code: err.code,
          message: err.message
        }
      };
    }

    if (_.isEmpty(response)) {
      logger.error('Unexpected empty response from ACS');
    }

    return response;
  }
}

/**
 * General authorizer. Marshalls data and requests access to the Access Control Service (ACS).
 */
export class ACSAuthZ implements IAuthZ {
  acs: any;
  ids: any;
  /**
   *
   * @param acs Access Control Service definition (gRPC)
   */
  constructor(acs: any, ids?: any) {
    this.acs = acs;
  }

  /**
   * Perform request to access-control-srv
   * @param request - authZRequest containing subject, resources and action
   * @param useCache
   * @returns {DecisionResponse}
   */
  async isAllowed(request: Request<AuthZTarget, AuthZContext>, useCache): Promise<DecisionResponse> {
    const authZRequest = this.prepareRequest(request);
    authZRequest.context = {
      subject: {},
      resources: [],
      security: this.encode(request.context.security)
    };
    let resources = request.target.resources;
    const subject = { token: request.target.subject.token };
    let cachePrefix = 'ACSAuthZ';

    if (request.target.subject.id !== undefined) {
      cachePrefix = request.target.subject.id + ':' + cachePrefix;
    }

    if (request.target.action == 'CREATE' || request.target.action == 'MODIFY' || request.target.action == 'DELETE') {
      // insert temporary IDs into resources which are yet to be created if not present in input
      let counter = 0;
      resources = _.cloneDeep(request.target.resources).map((resource) => {
        if (_.isEmpty(resource.instance.id)) {
          resource.instance.id = String(counter++);
          resource.fields.push('id');
        }
        return resource;
      });
    }
    authZRequest.context.subject = this.encode(subject);
    authZRequest.context.resources = this.encode(resources);

    // for isAllowed we use the subject, action and resource fields .i.e. reqeust Target
    // since the context resources contains the values which would change for each
    // resource being created and should not be used in key when generating hash
    let cacheKey = {
      target: authZRequest.target
    };
    let response: DecisionResponse;
    try {
      response = await getOrFill(cacheKey, async (req) => {
        return await this.acs.isAllowed(authZRequest);
      }, useCache, cachePrefix + ':isAllowed');
    } catch (err) {
      logger.error('Error invoking access-control-srv isAllowed operation', err);
      logger.error('error stack', err.stack);
      if (!err.code) {
        err.code = 500;
      }
      response = {
        decision: Decision.DENY,
        operation_status: {
          code: err.code,
          message: err.message
        }
      };
    }

    if (_.isEmpty(response)) {
      logger.error('Unexpected empty response from ACS');
    }

    return response;
  }

  /**
  * Perform request to access-control-srv
  * @param request - authZRequest containing subject, resource and action
  * @returns {PolicySetRQ}
  * @param resource
  */
  async whatIsAllowed(request: Request<AuthZWhatIsAllowedTarget, AuthZContext>,
    useCache): Promise<PolicySetRQResponse> {
    const authZRequest = this.prepareRequest(request);
    authZRequest.context = {
      subject: {},
      resources: [],
      security: this.encode(request.context.security)
    };
    let resources = request.target.resources;
    const subject = { token: request.target.subject.token };

    let cachePrefix = 'ACSAuthZ';

    if (request.target.subject.id !== undefined) {
      cachePrefix = request.target.subject.id + ':' + cachePrefix;
    }

    authZRequest.context.subject = this.encode(subject);
    authZRequest.context.resources = this.encode(resources);

    let response: PolicySetRQResponse;
    try {
      response = await getOrFill(authZRequest, async (req) => {
        return await this.acs.whatIsAllowed(authZRequest);
      }, useCache, cachePrefix + ':whatIsAllowed');
    } catch(err) {
      logger.error('Error invoking access-control-srv whatIsAllowed operation', err);
      logger.error('error stack', err.stack);
      if (!err.code) {
        err.code = 500;
      }
      response = {
        decision: Decision.DENY,
        operation_status: {
          code: err.code,
          message: err.message
        }
      };
    }

    if (_.isEmpty(response)) {
      logger.error('Unexpected empty response from ACS');
    }

    return response;
  }

  private encode(object: any): any {
    if (_.isArray(object)) {
      return _.map(object, this.encode.bind(this));
    } else {
      return {
        value: Buffer.from(JSON.stringify(object))
      };
    }
  }

  prepareRequest(request: Request<AuthZTarget | AuthZWhatIsAllowedTarget, AuthZContext>): any {
    let { subject, resources, action } = request.target;
    // this.reduceUserScope(subject);

    const authZRequest: any = {
      target: {
        action: createActionTarget(action),
        subject: createSubjectTarget(subject),
      },
    };
    if (_.isArray(action)) {
      // whatIsAllowed
      authZRequest.target.resources = createResourceTargetWhatIsAllowed(resources);
    } else {
      // isAllowed
      if (request.target.action == 'CREATE' || request.target.action == 'MODIFY'
        || request.target.action == 'DELETE') {
        // insert temporary IDs into resources which are yet to be created
        let counter = 0;
        resources = _.cloneDeep(request.target.resources).map((resource) => {
          if (_.isEmpty(resource.instance.id)) {
            resource.instance.id = String(counter++);
            resource.fields.push('id');
          }
          return resource;
        });
      }

      authZRequest.target.resources = createResourceTarget(resources, action);
    }

    return authZRequest;
  }
}

const acsEvents = [
  'policy_setCreated',
  'policy_setModified',
  'policy_setDeleted',
  'policyCreated',
  'policyModified',
  'policyDeleted',
  'ruleCreated',
  'ruleModified',
  'ruleDeleted',
];

const eventListener = async (msg: any,
  context: any, config: any, eventName: string): Promise<any> => {
  if (acsEvents.indexOf(eventName) > -1) {
    // no prefix provided, flush complete cache
    logger.info(`Received event ${eventName} and hence evicting ACS cache`);
    await flushCache();
  }
};

export const initAuthZ = async (config?: any): Promise<void | ACSAuthZ> => {
  if (!authZ) {
    if (config) {
      updateConfig(config);
    }
    const authzCfg = cfg.get('authorization');
    const kafkaCfg = cfg.get('events:kafka');
    // gRPC interface for access-control-srv
    if (authzCfg.enabled) {
      const grpcClientConfig = cfg.get('client');
      const grpcACSConfig = grpcClientConfig['acs-srv'];
      const acsClient = new GrpcClient(grpcACSConfig, logger);
      const acs = acsClient['acs-srv'];
      authZ = new ACSAuthZ(acs);
      // listeners for rules / policies / policySets modified, so as to
      // delete the Cache as it would be invalid if ACS resources are modified
      if (kafkaCfg && kafkaCfg.evictACSCache) {
        const events = new Events(kafkaCfg, logger);
        await events.start();
        for (let topicLabel in kafkaCfg.evictACSCache) {
          let topicCfg = kafkaCfg.evictACSCache[topicLabel];
          let topic = await events.topic(topicCfg.topic);
          if (topicCfg.events) {
            for (let eachEvent of topicCfg.events) {
              await topic.on(eachEvent, eventListener);
            }
          }
        }
      }
      return authZ;
    }
  }
  return authZ;
};
