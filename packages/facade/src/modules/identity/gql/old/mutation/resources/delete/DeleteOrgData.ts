import { GraphQLString, GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { errors } from '../../../config';
import { ErrorType } from '../../../types/ErrorType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest from '../../../iam/resolver';
import { Client } from '@restorecommerce/grpc-client';
import { cfg } from '../../../config';
import Logger from '../../../logger';
import * as _ from 'lodash';
import { Resource } from '@restorecommerce/iam-authz';

export default mutationWithClientMutationId({
  name: 'deleteOrgData',
  inputFields: {
    listOfOrgIDs: {
      type: new GraphQLList(GraphQLString),
    }
  },
  mutateAndGetPayload: async ({ listOfOrgIDs }, ctx: RestoreCommerceContext) => {

    const orgIDs: Resource[] = _.map(listOfOrgIDs, (id: string): Resource => {
      return {
        type: 'mutation.deleteOrgData',
        instance: {
          id
        }
      };
    });

    return tryRequest('execute', orgIDs, ctx, async () => {
      const output = {
        deleteStatus: [],
        error: {
          code: [],
          message: []
        }
      };

      let userIDsList;
      for (let orgID of orgIDs) {
        let subOrgs = [];
        // 1) For each orgID first get the sub list of orgIDs
        // 2) make a request to delete userIDs list

        const client = new Client(cfg.get('client:graph-srv'), Logger);
        const graphService = await client.connect();
        const traversalRequest = {
          start_vertex: `organizations/${orgID.instance.id}`,
          opts: {
            direction: 'inbound',
            filter: [{ vertex: 'locations' }]
          },
          data: true
        };
        let result = await graphService.traversal(traversalRequest);

        let traversalResponse: any = [];
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
          if (partResp && partResp.data && partResp.data.value) {
            Object.assign(traversalResponse, JSON.parse(partResp.data.value.toString()));
          }
        }

        for (let org of traversalResponse) {
          subOrgs.push(org.id);
        }

        const userResource = new EndpointHandler('user');
        const userService = userResource.getResourceService();

        if (userService) {
          const args = {
            org_ids: subOrgs
          };
          userIDsList = await userService.deleteUsersByOrg(args);
          userIDsList = userIDsList.data.user_ids;

          const topic = EndpointHandler.getTopic('organization.resource');
          await topic.emit('deleteOrgData', {
            org_ids: subOrgs,
            user_ids: userIDsList
          });
        }
        else {
          output.error.code.push(errors.INVALID_RESOURCE.code);
          output.error.message.push(errors.INVALID_RESOURCE.message + 'user');
          continue;
        }

        if (!userIDsList) {
          output.error.code = errors.SYSTEM_ERROR;
          continue;
        }

        output.deleteStatus.push(`Organization ${orgID} deletion initiated successfully`);
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
      type: ErrorType,
      resolve: ({ error }) => error,
    }
  },
});

