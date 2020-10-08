import * as _ from 'lodash';
import { RestoreCommerceContext } from '../iam/interfaces';
import tryRequest from '../iam/resolver';
import { cfg } from '../config';
import logger from '../logger';
import { grpcClient } from '@restorecommerce/grpc-client';

export const getFile = async (root, args, ctx: RestoreCommerceContext) => {
  const { key, bucket } = args;
  let output = {
    key: '', bucket: '', object: {}, url: '', error: { code: [], message: [] }
  };

  if (!_.includes(cfg.get('buckets'), bucket)) {
    output.error.code = ['404'];
    output.error.message = ['Invalid bucket name'];
    return output;
  }

  return tryRequest('read',
    {
      type: 'ostorage.Ostorage',
      instance: { key, bucket },
      fields: ['key', 'bucket', 'object', 'url']
    }, ctx, async () => {
      const grpcConfig = cfg.get('client:ostorage-srv');
      const client = new grpcClient(grpcConfig.transports.grpc, logger);
      const get = client.makeEndpoint('get', grpcConfig.publisher.instances[0]);

      let call = await get({ key, bucket });
      let result;
      let streamResponse = true;
      let streamBuffer = [];

      try {
        while (streamResponse) {
          result = await call.read();
          result = await new Promise((resolve, reject) => {
            result((err, response) => {
              if (err) {
                reject(err);
              }
              resolve(response);
            });
          });
          output.key = result.key;
          output.bucket = result.bucket;
          output.url = result.url;
          if (result.error) {
            output.error = result.error;
          }
          streamBuffer.push(result.object);
        }
      } catch (err) {
        streamResponse = false;
      }

      output.object = Buffer.concat(streamBuffer).toString();
      return output;
    });
};
