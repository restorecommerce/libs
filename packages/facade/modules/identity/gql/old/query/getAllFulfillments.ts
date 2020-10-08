import * as _ from 'lodash';
import { RestoreCommerceContext } from '../iam/interfaces';
import tryRequest from '../iam/resolver';
import { EndpointHandler } from '../EndpointHandler';

export const getAllFulfillments = async (root, args, ctx: RestoreCommerceContext) => {
  let output = {
    details: '',
    error: {
      code: '',
      message: ''
    }
  };
  return tryRequest('read',
    {
      entity: 'fulfillment',
      args
    }, ctx, async () => {
      const endpointHandler = new EndpointHandler('fulfillment');
      const service = endpointHandler.getResourceService();
      const result = await service.getAllFulfillments(args);
      if (result && result.error) {
        output.error.code = result.error.code;
        output.error.message = result.error.message;
      }
      else {
        output.details = result.data;
      }
      return output.details;
    }
  );
};
