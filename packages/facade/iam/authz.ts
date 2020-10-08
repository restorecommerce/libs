import * as _ from '@restorecommerce/facade/modules/identity/gql/old/types/node_modules/lodash';
import * as traverse from 'traverse';
import { Request, Resource, Response, Decision } from '@restorecommerce/facade/modules/identity/gql/old/mutation/resources/delete/node_modules/@restorecommerce/iam-authz';

import {
  AuthZContext, Attribute,
  AuthZAction, AuthZTarget, HierarchicalScope, UserSessionData,
  AuthZWhatIsAllowedTarget, PolicySetRQ, RoleAssociation, IAuthZ, PolicyRQ, Effect, NoAuthTarget, UnauthenticatedData
} from './interfaces';

import { EndpointHandler } from '../EndpointHandler';
import { cfg } from '../config';
import logger from '../logger';
import { toStruct } from '@restorecommerce/grpc-client';

export declare type Authorizer = RestoreCommerceBootstrapAuthZ | RestoreCommerceAuthZ;
export let authZ: Authorizer;
const urns = cfg.get('authorization:urns');

export const initAuthZ = () => {
  if (!authZ) {
    const authnCfg = cfg.get('authentication');
    const authzCfg = cfg.get('authorization');

    // if API key-based login is on or if authorization is disabled
    if (authnCfg.apiKey || !authzCfg.enabled) {
      authZ = new RestoreCommerceBootstrapAuthZ();
    } else {
      // gRPC interface for access-control-srv
      const acs = EndpointHandler.getACS();
      authZ = new RestoreCommerceAuthZ(acs);
    }
  }
};

/**
 * Authorizer used while the system's API key is used for IAM.
 */
export class RestoreCommerceBootstrapAuthZ implements IAuthZ {
  async isAllowed(request?: Request<AuthZTarget, AuthZContext>): Promise<Response> {
    return {
      decision: Decision.PERMIT
    };
  }

  async whatIsAllowed(request?: Request<AuthZWhatIsAllowedTarget, AuthZContext>): Promise<PolicySetRQ> {
    // permit any action on any resource
    // generate a set of permit rules
    const urns = cfg.get('authorization:urns');

    const action = request.target.action;

    return {
      target: {
        subject: [],
        action: [],
        resources: []
      },
      combining_algorithm: urns.denyOverrides,
      policies: request.target.resources.map((resource: Resource): PolicyRQ => {
        return {
          target: {
            resources: createResourceTargetWhatIsAllowed([resource]),
            action: [],
            subject: []
          },
          has_rules: true,
          combining_algorithm: urns.permitOverrides,
          rules: [
            {
              target: {
                action: createActionTarget(action),
                resources: createResourceTargetWhatIsAllowed([resource]),
                subject: []
              },
              effect: Effect.PERMIT,
            }
          ]
        };
      })
    };
  }

  async destroy() {
    authZ = null;
    // gRPC interface for access-control-srv
    const acs = EndpointHandler.getACS();
    authZ = new RestoreCommerceAuthZ(acs);
  }
}

export class UnAuthZ implements IAuthZ {
  acs: any;
  /**
   *
   * @param acs Access Control Service definition (gRPC)
   */
  constructor(acs: any) {
    this.acs = acs;
  }

  async isAllowed(request: Request<NoAuthTarget, AuthZContext>): Promise<Response> {
    const authZRequest = {
      target: {
        action: createActionTarget(request.target.action),
        subject: createSubjectTarget(request.target.subject),
        resources: createResourceTarget(request.target.resources, request.target.action)
      },
      context: request.context
    };

    const response = await this.acs.isAllowed(authZRequest);

    if (_.isEmpty(response) || _.isEmpty(response.data)) {
      console.log(response.error);
      logger.error('Unexpected empty response from ACS');
    } else if (response.data.decision) {
      return {
        decision: response.data.decision as Decision
      };
    }

    if (response.error) {
      logger.verbose('Error while requesting authorization to ACS...', { error: response.error.message });
      throw new Error('Error while requesting authorization to ACS');
    }

    return {
      decision: Decision.DENY
    };

  }
  async whatIsAllowed(request: Request<AuthZWhatIsAllowedTarget, AuthZContext>): Promise<PolicySetRQ> {
    throw new Error('WhatIsAllowed is not implemented for unauthenticated users');
  }
}

/**
 * General authorizer. Marshalls data and requests access to the Access Control Service (ACS).
 */
export class RestoreCommerceAuthZ implements IAuthZ {
  acs: any;
  /**
   *
   * @param acs Access Control Service definition (gRPC)
   */
  constructor(acs: any) {
    this.acs = acs;
  }

  /**
   * Perform request to access-control-srv
   * @param subject
   * @param action
   * @param resource
   */
  async isAllowed(request: Request<AuthZTarget, AuthZContext>): Promise<Response> {
    const authZRequest = this.prepareRequest(request);
    authZRequest.context = {
      subject: {},
      resources: [],
      security: this.encode(request.context.security)
    };
    let resources = authZRequest.target.resources;

    const subject = request.target.subject;
    if (subject && subject.unauthenticated) {
      // New user registering
      subject.role_associations = [];
    }

    if (request.target.action == 'modify' || request.target.action == 'delete') {
      resources = await this.getResourcesWithMetadata(resources);
    }

    if (request.target.action != 'execute') {
      const hierarchicalScope = await this.createHierarchicalScopeTrees(subject.role_associations);
      authZRequest.context.subject = this.encode(_.merge(subject, {
        hierarchical_scope: hierarchicalScope
      }));
      authZRequest.context.resources = this.encode(resources);
    }

    const response = await this.acs.isAllowed(authZRequest);

    if (_.isEmpty(response) || _.isEmpty(response.data)) {
      console.log(response.error);
      logger.error('Unexpected empty response from ACS');
    } else if (response.data.decision) {
      return {
        decision: response.data.decision as Decision
      };
    }

    if (response.error) {
      logger.verbose('Error while requesting authorization to ACS...', { error: response.error.message });
      throw new Error('Error while requesting authorization to ACS');
    }

    return {
      decision: Decision.DENY
    };
  }

  /**
  * Perform request to access-control-srv
  * @param subject
  * @param action
  * @param resource
  */
  async whatIsAllowed(request: Request<AuthZWhatIsAllowedTarget, AuthZContext>): Promise<PolicySetRQ> {
    const authZRequest = this.prepareRequest(request);
    authZRequest.context = {};

    const response = await this.acs.whatIsAllowed(authZRequest);
    if (_.isEmpty(response) || _.isEmpty(response.data)) {
      logger.error('Unexpected empty response from ACS');
    }

    if (response.error) {
      logger.verbose('Error while requesting authorization to ACS...', { error: response.error.message });
      throw new Error('Error while requesting authorization to ACS');
    }
    return (response.data.policy_sets || []).length > 0 ? response.data.policy_sets[0] : {};
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
  /**
   * Read the resource's metadata on `modify`.
   * @param resources
   */
  private async getResourcesWithMetadata(resources: Resource[]) {
    const ids = [];
    let entity;
    for (let resource of resources) {
      if (!entity) {
        entity = resource.type;
      }

      if (resource.instance && resource.instance.id) {
        // "special" resources such as `admin_room_skips` do not have an ID
        ids.push({ id: resource.instance.id });
      }
    }

    if (!_.isEmpty(ids)) {
      const handler = new EndpointHandler(entity);
      const service = handler.getResourceService();
      const result = await service.read({
        filter: toStruct({
          $or: ids
        })
      });
      if (result.error) {
        throw new Error('Error occurred while reading resources before updating: ' + result.error.details);
      }

      return result.data.items.map((item): Resource => {
        return {
          instance: item,
          type: entity,
          fields: []
        };
      });
    }
    return resources;
  }

  private async createHierarchicalScopeTrees(roleAssociations: RoleAssociation[]): Promise<HierarchicalScope[]> {
    const ids = new Set<string>();
    for (let roleAssoc of roleAssociations) {
      const attributes = roleAssoc.attributes || [];
      let orgScope = false;
      for (let attribute of attributes) {
        if (attribute.id == urns.roleScopingEntity) {
          if (attribute.value === urns.organization) {
            orgScope = true;
          }
        }
        if (attribute.id == urns.roleScopingInstance && orgScope) {
          ids.add(attribute.value);
        }
      }
    }
    if (ids.size == 0) { // subject has no hierarchical scope; e.g: SuperAdmin
      return [];
    }

    const service = EndpointHandler.getGraphService();
    const hierarchicalScope: HierarchicalScope[] = [];

    const hierarchicalResources = cfg.get('authorization:hierarchicalResources') || [];
    for (let hierarchicalResource of hierarchicalResources) {
      const { collection, edge } = hierarchicalResource;
      const result = await service.traversal({
        start_vertices: {
          vertices: Array.from(ids)
        }, opts: {
          lowest_common_ancestor: true
        },
        collection_name: collection, // TODO: make dynamic
        edge_name: edge
      });
      let paths = [];
      while (result.read) {
        const resp = await result.read();
        // Promisify the callback containing result
        const partResp: any = await new Promise((resolve, reject) => {
          resp((err, response) => {
            if (err) {
              if (err.message === 'stream end') {
                resolve(null);
              }
              reject(err);
            }
            resolve(response);
          });
        });
        if (!partResp) {
          break;
        }
        if (partResp && partResp.paths && partResp.paths.value) {
          Object.assign(paths, JSON.parse(partResp.paths.value.toString()));
        }
      }

      if (result.error) {
        const errorMsg = 'Error when retrieving tree structures for role associations';
        logger.error(errorMsg, {
          error: result.error,
          details: result.error.details
        });
        throw new Error(errorMsg + ': ' + result.error.details);
      }

      // const paths = traversalResponse.paths;

      let rootNode: HierarchicalScope;
      let lastVisitedNode: HierarchicalScope;

      for (let path of paths) {
        const edges = path.edges;
        if (_.isEmpty(edges)) {
          if (rootNode) {
            hierarchicalScope.push(rootNode);
          }
          const vertex = path.vertices[0];
          rootNode = lastVisitedNode = {
            id: vertex._id.split('/')[1], // _id is always collectionName/ID
            children: []
          };
        } else {
          const latestEdge = edges[edges.length - 1];
          const parent: string = latestEdge._to.split('/')[1];
          const child: string = latestEdge._from.split('/')[1];
          const childNode = { id: child, children: [] };
          if (parent == lastVisitedNode.id) {
            lastVisitedNode.children.push(childNode);
          } else {
            const parentNode: HierarchicalScope = findParent(rootNode, parent);
            parentNode.children.push(childNode);
          }
          lastVisitedNode = childNode;
        }

      }
      if (rootNode) {
        hierarchicalScope.push(rootNode);
      }
    }
    return hierarchicalScope;
  }

  reduceUserScope(user: UserSessionData): UserSessionData {
    const mainScopes = user.scope ? user.scope.role_associations : [];
    const orgScope = user.scope ? user.scope.scopeOrganization : user.default_scope;

    if (!orgScope || _.isEmpty(mainScopes)) {
      return; // user has no scope
    }

    // const urns = cfg.get('authorization:urns');
    // const associations = user.role_associations || [];
    // const reduced = [];
    // for (let association of associations) {
    //   const attributes: Attribute[] = association.attributes || [];
    //   const instanceAttribute = _.find(attributes, (attribute: Attribute) => {
    //     return attribute.id == urns.roleScopingInstance && (attribute.value == orgScope || _.includes(mainScopes, attribute.value));
    //   });
    //   if (!!instanceAttribute) {
    //     if (instanceAttribute.value != orgScope) {
    //       instanceAttribute.value = orgScope;
    //     }
    //     reduced.push(association);
    //   }
    // }
    user.role_associations = mainScopes;
    return user;
  }

  prepareRequest(request: Request<AuthZTarget | AuthZWhatIsAllowedTarget, AuthZContext>): any {
    let { subject, resources, action } = request.target;
    this.reduceUserScope(subject);

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
      if (request.target.action == 'create') {
        // insert temporary IDs into resources which are yet to be created
        let counter = 0;
        resources = _.cloneDeep(request.target.resources).map((resource) => {
          if (!resource.instance.id) {
            resource.instance.id = String(counter++);
          }
          return resource;
        });
      }

      authZRequest.target.resources = createResourceTarget(resources, action);
    }

    return authZRequest;
  }
}

function findParent(hierarchicalScope: HierarchicalScope, parent: string) {
  let found: HierarchicalScope;
  traverse(hierarchicalScope).forEach(function (node: HierarchicalScope) {
    if (node.id == parent) {
      found = node;
      this.stop();
    }
  });
  return found;
}

export const createActionTarget = (action: AuthZAction | AuthZAction[]) => {
  if (_.isArray(action)) {
    let actionList = [];
    for (let eachAction of action) {
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
      value: urns.action + `:${action}`
    }];
  }
};

export const createSubjectTarget = (subject: UserSessionData | UnauthenticatedData) => {
  if (subject.unauthenticated) {
    return [{
      id: urns.unauthenticated_user,
      value: 'true'
    }];
  }
  subject = subject as UserSessionData;
  let flattened = [
    {
      id: urns.resourceID,
      value: subject.id
    }];

  subject.role_associations.forEach((roleAssoc) => {
    flattened.push({
      id: urns.role,
      value: roleAssoc.role
    });

    flattened = flattened.concat(roleAssoc.attributes);
  });
  return flattened;
};

export const createResourceTarget = (resources: Resource[], action: AuthZAction) => {
  const flattened: Attribute[] = [];
  resources.forEach((resource) => {
    if (action != 'execute') {
      const resourceType = formatResourceType(resource.type);

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
    const resourceType = formatResourceType(resource.type);

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

const formatResourceType = (type: string) => {
  // e.g: contact_point -> contact_point.ContactPoint
  const prefix = type;
  const suffixArray = type.split('_').map((word) => {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });
  const suffix = suffixArray.join('');
  return `${prefix}.${suffix}`;
};
