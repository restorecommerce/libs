import { GraphQLString } from 'graphql';
import * as _ from 'lodash';
import { mutationWithClientMutationId } from 'graphql-relay';
import { GraphQLUpload } from 'graphql-upload';
import { RestoreCommerceContext, UserSessionData } from '../../../iam/interfaces';
import { ErrorListType } from '../../../types/ErrorType';
import tryRequest from '../../../iam/resolver';
import { parseResourceList } from '../../../iam/resolver';
import { grpcClient } from '@restorecommerce/grpc-client';
import { cfg } from '../../../config';
import logger from '../../../logger';

export default mutationWithClientMutationId({
  name: 'uploadFile',
  inputFields: {
    fileUpload: {
      type: GraphQLUpload,
    },
    bucket: {
      type: GraphQLString,
      description: 'Name of the bucket'
    }
  },
  mutateAndGetPayload: async ({ fileUpload, bucket }, ctx: RestoreCommerceContext) => {
    let output = {
      status: '',
      Url: '',
      Key: '',
      Bucket: '',
      error: {
        code: [],
        message: []
      }
    };
    if (!_.includes(cfg.get('buckets'), bucket)) {
      logger.info('Invalid bucket name');
      output.status = 'Failure';
      output.error.message = ['Invalid bucket name'];
      return output;
    }
    const { filename, createReadStream } = await fileUpload;
    const fileDataStream = createReadStream();
    let owner;
    if (ctx.session && ctx.session.data) {
      const userSessionData = ctx.session.data as UserSessionData;
      const scopedOrg = userSessionData.default_scope;
      const urns = cfg.get('authorization:urns');
      owner = [
        {
          id: urns.ownerIndicatoryEntity,
          value: urns.orgScope
        },
        {
          id: urns.ownerInstance,
          value: scopedOrg
        }
      ];
    }
    const list = { filename, bucket, owner };
    return tryRequest('create', parseResourceList([list], 'create', 'ostorage', ctx), ctx, async () => {
      const grpcConfig = cfg.get('client:ostorage-srv');
      const client = new grpcClient(grpcConfig.transports.grpc, logger);
      const put = client.makeEndpoint('put', grpcConfig.publisher.instances[0]);
      const call = await put();
      let response;
      fileDataStream.on('data', async (chunk) => {
        // make the streaming grpc request call
        let dataChunk = { bucket, key: filename, meta: { owner }, object: Buffer.from(chunk) };
        await call.write(dataChunk);
      });

      fileDataStream.on('error', (err) => {
        output.error.message = err.message;
      });

      output = await new Promise((resolve, reject) => {
        fileDataStream.on('end', async () => {
          response = await call.end();
          response = await new Promise((resolve, reject) => {
            response((err, data) => {
              resolve(data);
            });
          });

          if (response && response.error) {
            output.error.code = response.error.code;
            output.error.message = response.error.message;
            output.status = 'Failure';
            logger.info('An error occured uploading the file', { error: response.error.message });
            resolve(output);
            return output;
          }
          output.status = 'Success';
          output.Url = response.url;
          output.Bucket = response.bucket;
          output.Key = response.key;
          output.error.code = [];
          output.error.message = [];
          resolve(output);
          return output;
        });
      });
      return output;
    });
  },
  outputFields: {
    status: {
      type: GraphQLString,
      resolve: ({ status }) => status
    },
    Url: {
      type: GraphQLString,
      resolve: ({ Url }) => Url
    },
    Bucket: {
      type: GraphQLString,
      resolve: ({ Bucket }) => Bucket
    },
    Key: {
      type: GraphQLString,
      resolve: ({ Key }) => Key
    },
    error: {
      type: ErrorListType,
      resolve: ({ error }) => error
    }
  },
});
