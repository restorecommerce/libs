import * as _ from 'lodash';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import tryRequest from '../../../iam/resolver';
import { cfg } from '../../../config';
import logger from '../../../logger';
import { GraphQLString, GraphQLList, GraphQLInputObjectType } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { ErrorListType } from '../../../types/ErrorType';
import { grpcClient } from '@restorecommerce/grpc-client';



const ObjectSpec = new GraphQLInputObjectType({
  name: 'ObjectSpec',
  description: 'Object specification',
  fields: () => ({
    Bucket: {
      type: GraphQLString,
    },
    Key: {
      type: GraphQLString,
    }
  }),
});

export default mutationWithClientMutationId({
  name: 'deleteFiles',
  inputFields: {
    listOfObjects: {
      type: new GraphQLList(ObjectSpec),
    }
  },
  mutateAndGetPayload: async ({ listOfObjects }, ctx: RestoreCommerceContext) => {
    let output = {
      deleteStatus: [],
      error: {
        code: [],
        message: []
      }
    };

    return tryRequest('delete',
      {
        type: 'ostorage.Ostorage',
        fields: []
      }, ctx, async () => {

        const grpcConfig = cfg.get('client:ostorage-srv');
        const client = new grpcClient(grpcConfig.transports.grpc, logger);
        const deleteReqEndpoint = client.makeEndpoint('delete', grpcConfig.publisher.instances[0]);

        for (let { Bucket, Key } of listOfObjects) {
          if (!_.includes(cfg.get('buckets'), Bucket)) {
            output.deleteStatus.push('Failure');
            output.error.code.push('404');
            output.error.message.push('Invalid bucket name');
            continue;
          }

          let result = await deleteReqEndpoint({ bucket: Bucket, key: Key });

          if (result.data && !result.error) {
            output.error.code.push('');
            output.error.message.push('');
            output.deleteStatus.push('Success');
          } else if (result.error) {
            // different naming scheme? also doesn't return all the details
            output.error.code.push(result.error.name);
            output.error.message.push(result.error.details);
            output.deleteStatus.push('Failure');
          } else {
            output.error.code.push('');
            output.error.message.push('');
            output.deleteStatus.push('Failure');
          }
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

