import * as _ from 'lodash';
import {
  ACSClientContext,
  AuthZAction,
  AuthZContext,
  AuthZTarget,
  AuthZWhatIsAllowedTarget,
  DecisionResponse,
  IAuthZ,
  NoAuthTarget,
  NoAuthWhatIsAllowedTarget,
  PolicySetRQResponse,
  Request,
  Resource,
} from './interfaces';
import { createChannel, createClient } from '@restorecommerce/grpc-client';
import { cfg, updateConfig } from '../config';
import logger from '../logger';
import { flushCache, getOrFill } from './cache';
import { Events, registerProtoMeta } from '@restorecommerce/kafka-client';
import { mapResourceURNObligationProperties } from '../utils';
import {
  AccessControlServiceClient,
  AccessControlServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/access_control';
import { Response_Decision } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/access_control';
import { Attribute } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/attribute';
import { Subject, DeepPartial } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/auth';
import { protoMetadata as ruleMeta } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/rule';
import { protoMetadata as policyMeta } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/policy';
import { protoMetadata as policySetMeta } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/policy_set';

registerProtoMeta(
  ruleMeta,
  policyMeta,
  policySetMeta
);

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
      value: urns.action + `:${action.valueOf().toLowerCase()}`,
      attributes: []
    }];
  }
};

export const createSubjectTarget = (subject: DeepPartial<Subject>): Attribute[] => {
  if (subject.unauthenticated) {
    return [{
      id: urns.unauthenticated_user,
      value: 'true',
      attributes: []
    }];
  }
  let flattened: Attribute[] = [
    {
      id: urns.subjectID,
      value: subject.id,
      attributes: []
    }
  ];

  if (subject.scope) {
    flattened = flattened.concat([
      {
        id: urns.roleScopingEntity,
        value: urns.orgScope,
        attributes: []
      },
      {
        id: urns.roleScopingInstance,
        value: subject.scope,
        attributes: []
      }
    ]);
  }
  return flattened;
};

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

export const createResourceTarget = (resource: Resource[], action: AuthZAction) => {
  const flattened: Attribute[] = [];
  resource.forEach((resourceObj) => {
    if (action != AuthZAction.EXECUTE) {
      let resourcenameNameSpace = resourceObj.resource;
      let resourceInstance = resourceObj.id;
      let resourceProperty = resourceObj.property;
      let resourceNameSpace, resourceName;

      if (resourcenameNameSpace && resourcenameNameSpace.indexOf('.') > -1) {
        resourceNameSpace = resourcenameNameSpace.slice(0, resourcenameNameSpace.lastIndexOf('.'));
        // resource name from `.` till end, when no end index is specified for
        // slice api it returns till end of string
        resourceName = resourcenameNameSpace.slice(resourcenameNameSpace.lastIndexOf('.') + 1);
      } else {
        resourceName = resourcenameNameSpace;
      }

      // entity - urn:restorecommerce:acs:names:model:entity
      const resourceType = formatResourceType(resourceName, resourceNameSpace);
      if (resourceType) {
        flattened.push({
          id: urns.entity,
          value: urns.model + `:${resourceType}`,
          attributes: []
        });
      }

      // resource-id - urn:oasis:names:tc:xacml:1.0:resource:resource-id
      if (resourceInstance && typeof resourceInstance === 'string') {
        flattened.push({
          id: urns.resourceID,
          value: resourceInstance,
          attributes: []
        });
      } else if (resourceInstance && _.isArray(resourceInstance) && resourceInstance.length > 0) {
        resourceInstance.forEach((instance) => {
          flattened.push({
            id: urns.resourceID,
            value: instance,
            attributes: []
          });
        });
      }

      // property - urn:restorecommerce:acs:names:model:property
      if (resourceProperty && _.isArray(resourceProperty) && resourceProperty.length > 0) {
        resourceProperty.forEach((property) => {
          flattened.push({
            id: urns.property,
            value: urns.model + `:${resourceType}#${property}`,
            attributes: []
          });
        });
      }
    } else {
      flattened.push({
        id: urns.operation,
        value: resourceObj.resource,
        attributes: []
      });
    }
  });

  return flattened;
};

export class UnAuthZ implements IAuthZ {
  acs: AccessControlServiceClient;
  /**
   *
   * @param acs Access Control Service definition (gRPC)
   */
  constructor(acs: AccessControlServiceClient) {
    this.acs = acs;
  }

  private encode(object: any): any {
    if (object) {
      if (_.isArray(object)) {
        return _.map(object, this.encode.bind(this));
      } else {
        return {
          value: Buffer.from(JSON.stringify(object))
        };
      }
    }
  }

  async isAllowed(request: Request<NoAuthTarget, AuthZContext>, ctx: ACSClientContext, useCache: boolean): Promise<DecisionResponse> {
    const authZRequest = {
      target: {
        action: createActionTarget(request.target.action),
        subject: createSubjectTarget(request.target.subject),
        resources: createResourceTarget(request.target.resource, request.target.action)
      },
      context: {
        subject: this.encode(request.target.subject),
        resources: this.encode(ctx.resources)
      }
    };

    let response: DecisionResponse;
    try {
      const isAllowed = await getOrFill(authZRequest, async (req) => {
        return await this.acs.isAllowed(authZRequest);
      }, useCache, 'UnAuthZ:isAllowed');

      response = {
        decision: isAllowed.decision,
        obligation: mapResourceURNObligationProperties(isAllowed.obligations),
        operation_status: isAllowed.operation_status
      };
    } catch (err) {
      logger.error('Error invoking access-control-srv isAllowed operation', { code: err.code, message: err.message, stack: err.stack });
      if (!err.code) {
        err.code = 500;
      }
      response = {
        decision: Response_Decision.DENY,
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
    ctx: ACSClientContext, useCache: boolean): Promise<PolicySetRQResponse> {
    const authZRequest = {
      target: {
        action: createActionTarget(request.target.action),
        subject: createSubjectTarget(request.target.subject),
        resources: createResourceTarget(request.target.resource, request.target.action)
      },
      context: {
        subject: this.encode(request.target.subject),
        resources: this.encode(ctx.resources)
      }
    };
    let response: PolicySetRQResponse;
    try {
      const whatIsAllowed = await getOrFill(authZRequest, async (req) => {
        return await this.acs.whatIsAllowed(authZRequest);
      }, useCache, 'UnAuthZ:whatIsAllowed');

      response = {
        ...whatIsAllowed,
        obligation: mapResourceURNObligationProperties(whatIsAllowed.obligations)
      } as any; // TODO Decision?
    } catch (err) {
      logger.error('Error invoking access-control-srv whatIsAllowed operation',  { code: err.code, message: err.message, stack: err.stack });
      if (!err.code) {
        err.code = 500;
      }
      response = {
        decision: Response_Decision.DENY,
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
  acs: AccessControlServiceClient;
  /**
   *
   * @param acs Access Control Service definition (gRPC)
   */
  constructor(acs: AccessControlServiceClient, ids?: any) {
    this.acs = acs;
  }

  /**
   * Perform request to access-control-srv
   * @param request - authZRequest containing subject, resources and action
   * @param useCache
   * @returns {DecisionResponse}
   */
  async isAllowed(request: Request<AuthZTarget, AuthZContext>, ctx: ACSClientContext, useCache): Promise<DecisionResponse> {
    const authZRequest = this.prepareRequest(request);
    authZRequest.context = {
      subject: {},
      resources: [],
      security: this.encode(request.context.security)
    };
    const subject = { token: request.target.subject.token };
    let cachePrefix = 'ACSAuthZ';

    if (request.target.subject.id !== undefined) {
      cachePrefix = request.target.subject.id + ':' + cachePrefix;
    }

    authZRequest.context.subject = this.encode(subject);
    authZRequest.context.resources = this.encode(ctx.resources);

    // for isAllowed we use the subject, action and resource fields .i.e. reqeust Target
    // since the context resources contains the values which would change for each
    // resource being created and should not be used in key when generating hash
    let cacheKey = {
      target: authZRequest.target
    };
    let response: DecisionResponse;
    try {
      const isAllowed = await getOrFill(cacheKey, async (req) => {
        return await this.acs.isAllowed(authZRequest);
      }, useCache, cachePrefix + ':isAllowed');

      response = {
        decision: isAllowed.decision,
        obligation: mapResourceURNObligationProperties(isAllowed.obligations),
        operation_status: isAllowed.operation_status
      };
    } catch (err) {
      logger.error('Error invoking access-control-srv isAllowed operation',  { code: err.code, message: err.message, stack: err.stack });
      if (!err.code) {
        err.code = 500;
      }
      response = {
        decision: Response_Decision.DENY,
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
    ctx: ACSClientContext, useCache: boolean): Promise<PolicySetRQResponse> {
    const authZRequest = this.prepareRequest(request);
    authZRequest.context = {
      subject: {},
      resources: [],
      security: this.encode(request.context.security)
    };
    const subject = { token: request.target.subject.token };

    let cachePrefix = 'ACSAuthZ';

    if (request.target.subject.id !== undefined) {
      cachePrefix = request.target.subject.id + ':' + cachePrefix;
    }

    authZRequest.context.subject = this.encode(subject);
    authZRequest.context.resources = this.encode(ctx.resources);

    let response: PolicySetRQResponse;
    try {
      const whatIsAllowed = await getOrFill(authZRequest, async (req) => {
        return await this.acs.whatIsAllowed(authZRequest);
      }, useCache, cachePrefix + ':whatIsAllowed');

      response = {
        ...whatIsAllowed,
        obligation: mapResourceURNObligationProperties(whatIsAllowed.obligations)
      } as any; // TODO Decision?
    } catch (err) {
      logger.error('Error invoking access-control-srv whatIsAllowed operation',  { code: err.code, message: err.message, stack: err.stack });
      if (!err.code) {
        err.code = 500;
      }
      response = {
        decision: Response_Decision.DENY,
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
    if (object) {
      if (_.isArray(object)) {
        return _.map(object, this.encode.bind(this));
      } else {
        return {
          value: Buffer.from(JSON.stringify(object))
        };
      }
    }
  }

  prepareRequest(request: Request<AuthZTarget | AuthZWhatIsAllowedTarget, AuthZContext>): any {
    let { subject, resource, action } = request.target;
    const authZRequest: any = {
      target: {
        action: createActionTarget(action),
        subject: createSubjectTarget(subject),
      },
    };
    authZRequest.target.resources = createResourceTarget(resource, action);
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
      const channel = createChannel(grpcACSConfig.address);
      const acsClient: AccessControlServiceClient = createClient({
        ...grpcACSConfig,
        logger
      }, AccessControlServiceDefinition, channel);
      authZ = new ACSAuthZ(acsClient);
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
