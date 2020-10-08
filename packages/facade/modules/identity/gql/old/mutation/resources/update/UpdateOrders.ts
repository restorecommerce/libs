import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';
import {OrderUpdateInputType} from '../../../types/OrderType';

export default mutationWithClientMutationId({
  name: 'updateOrders',
  inputFields: {
    listOfOrders: {
      type: new GraphQLList(OrderUpdateInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfOrders }, ctx: RestoreCommerceContext) => {
    return tryRequest('modify', parseResourceList(listOfOrders, 'modify', 'order', ctx), ctx);
  },
  outputFields: EndpointHandler.buildOutputFields(),
});
