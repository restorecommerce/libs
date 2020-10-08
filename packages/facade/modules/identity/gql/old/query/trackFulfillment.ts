import * as _ from 'lodash';
import { RestoreCommerceContext } from '../iam/interfaces';
import tryRequest from '../iam/resolver';
import { EndpointHandler } from '../EndpointHandler';

export const trackFulfillment = async (root, args, ctx: RestoreCommerceContext) => tryRequest('read',
  {
    entity: 'fulfillment',
    args: {}
  }, ctx, async () => {

    const endpointHandler = new EndpointHandler('fulfillment');
    const call = args;
    const service = endpointHandler.getResourceService();
    const result = await service.trackFulfillment(call);
    if (result) {
      return result.data;
    }
  });
