import * as _ from 'lodash';
import { RestoreCommerceContext } from '../iam/interfaces';
import tryRequest from '../iam/resolver';
import { EndpointHandler } from '../EndpointHandler';

export const getLabel = async (root, args, ctx: RestoreCommerceContext) => {
  let output = {
    details: [],
    labelUrl: '',
    shipmentNumber: '',
    exportLabelUrl: '',
    error: {
      code: '',
      message: ''
    }
  };

  return tryRequest('read',
    {
      entity: 'fulfillment',
      args: {}
    }, ctx, async () => {
      const endpointHandler = new EndpointHandler('fulfillment');
      const call = args;
      const service = endpointHandler.getResourceService();
      const result = await service.getLabels(call);
      if (result) {
        output.details.push(result);
        return output.details[0].data;
      }
    });
};
