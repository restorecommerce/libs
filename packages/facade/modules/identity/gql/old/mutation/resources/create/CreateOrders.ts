import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { OrderInputType, OrderType } from '../../../types/OrderType';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { parseResourceList } from '../../../iam/resolver';
import tryRequest from '../../../iam/resolver';
import { EndpointHandler } from '../../../EndpointHandler';

export default mutationWithClientMutationId({
  name: 'createOrders',
  inputFields: {
    listOfOrders: {
      type: new GraphQLList(OrderInputType)
    }
  },
  mutateAndGetPayload: async ({ listOfOrders }, ctx: RestoreCommerceContext) => {
    return tryRequest('create', parseResourceList(listOfOrders, 'create',
      'order', ctx), ctx);
  },
  outputFields: EndpointHandler.buildCreateMutationOutput(OrderType)
});
