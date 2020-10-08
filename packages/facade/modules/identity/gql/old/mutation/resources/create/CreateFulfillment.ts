import {
  GraphQLList,
} from 'graphql';
import * as _ from 'lodash';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';
import { FulfillmentInputType, FulfillmentStatus } from '../../../types/FulfillmentType';
import { ErrorListType } from '../../../types/ErrorType';

export default mutationWithClientMutationId({
  name: 'createFulfillment',
  inputFields: {
    ShipmentOrder: {
      type: FulfillmentInputType,
    }
  },
  mutateAndGetPayload: async ({ ShipmentOrder }, ctx: RestoreCommerceContext) => {
    let output = {
      Status: [],
      error: []
    };

    ShipmentOrder = parseResourceList([ShipmentOrder], 'create', 'fulfillment', ctx);
    return tryRequest('create', ShipmentOrder, ctx, async () => {
      const endpointHandler = new EndpointHandler('fulfillment');
      const fulfillmentservice = endpointHandler.getResourceService();
      ShipmentOrder = ShipmentOrder[0].instance;
      let temp = { ShipmentOrder };
      const result = await fulfillmentservice.createFulfillment(temp);
      const data = result.data.fulfillmentResults;
      let item: any;
      for (item of data) {
        output.error.push(item.error);
        output.Status.push(item.Status);
      }
      return output;
    });
  },
  outputFields: {
    Status: {
      type: new GraphQLList(FulfillmentStatus),
      resolve: ({ Status }) => Status
    },
    error: {
      type: new GraphQLList(ErrorListType),
      resolve: ({ error }) => error
    }
  },
});

