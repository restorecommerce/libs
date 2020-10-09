import * as _ from 'lodash';
import { RestoreCommerceContext } from '../iam/interfaces';
import tryRequest from '../iam/resolver';
import { EndpointHandler } from '../EndpointHandler';
import { cfg } from '../config';

export const getFileList = async (root, args, ctx: RestoreCommerceContext) => {
  const { bucket } = args;
  let output = {
    details: [],
    error: {
      code: '',
      message: ''
    }
  };

  if (!_.includes(cfg.get('buckets'), bucket)) {
    output.error.code = '404';
    output.error.message = 'Invalid bucket name';
    return output;
  }

  return tryRequest('read',
    {
      entity: 'ostorage',
      args: {}
    }, ctx, async () => {
      const endpointHandler = new EndpointHandler('ostorage');
      const call = { bucket };
      const service = endpointHandler.getResourceService();
      const result = await service.list(call);

      if (result != null) {
        if (result && result.data && result.data.object_data) {
          for (let eachObj of result.data.object_data) {
            if (eachObj.meta && eachObj.meta.owner && eachObj.meta.owner[1]) {
              let object = {
                file_name: eachObj.object_name, url: eachObj.url, meta: eachObj.meta
              };
              output.details.push(object);
            }
          }
        }
      }
      return output;
    });
};
