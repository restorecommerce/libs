import * as _ from 'lodash';
import { GraphQLString, GraphQLList, GraphQLInputObjectType } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { errors } from '../../../config';
import { ErrorListType } from '../../../types/ErrorType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest from '../../../iam/resolver';
import { Resource } from '@restorecommerce/iam-authz';

const resource = new GraphQLInputObjectType({
  name: 'DeleteResourceType',
  description: 'Resource data',
  fields: () => ({
    entity: {
      type: GraphQLString,
    },
    ids: {
      type: new GraphQLList(GraphQLString)
    }
  }),
});

export default mutationWithClientMutationId({
  name: 'deleteResources',
  inputFields: {
    listOfResources: {
      type: new GraphQLList(resource),
    }
  },
  mutateAndGetPayload: async ({ listOfResources }, ctx: RestoreCommerceContext) => {
    listOfResources = _.reduce<any, Resource[]>(listOfResources, (result, value) => {
      if (value.ids) {
        result = result.concat(value.ids.map((id): Resource => {
          return {
            type: value.entity,
            instance: { id }
          };
        }));
      } else {
        result.push({ type: value.entity }); // TODO: change this when `WhatIsAllowed` is implemented
      }
      return result;
    }, []);
    const resourcesList = _.cloneDeep(listOfResources);
    return tryRequest('delete', listOfResources, ctx, async () => {
      const output = {
        deleteStatus: [],
        error: {
          code: [],
          message: []
        }
      };

      let result;
      for (let resource of resourcesList) {
        const entity = resource.type;

        if (entity === 'job') {
          const topic = EndpointHandler.getTopic('jobs');
          await topic.emit('deleteJobs', {
            collection: entity,
            ids: resource.ids || []
          });
        }
        const resources = new EndpointHandler(entity);
        const resourceService = resources.getResourceService();

        if (resourceService) {
          let collectionDelete = false;
          let resourceInstanceID;
          if (!resource || !resource.instance || !resource.instance.id
            || resource.instance.id.length == 0) {
            collectionDelete = true;
          } else {
            resourceInstanceID = resource.instance.id;
          }
          const args = {
            collection: collectionDelete,
            ids: resourceInstanceID
          };

          result = await resourceService.delete(args);
        }
        else {
          output.error.code.push(errors.INVALID_RESOURCE.code);
          output.error.message.push(errors.INVALID_RESOURCE.message + entity);
          continue;
        }

        if (!result) {
          output.error.code = errors.SYSTEM_ERROR;
          continue;
        }

        output.deleteStatus.push(`Resource ${entity} deleted successfully`);
      }
      return output;
    });
  },
  outputFields: {
    deleteStatus: {
      type: new GraphQLList(GraphQLString),
      resolve: ({ deleteStatus }) => deleteStatus,
    },
    error: {
      type: ErrorListType,
      resolve: ({ error }) => error,
    }
  },
});

