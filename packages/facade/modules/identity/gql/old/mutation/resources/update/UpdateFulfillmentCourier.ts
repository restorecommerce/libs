import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';
import { FulfillmentCourierUpdateInputType } from '../../../types/TypeOfFulfillmentCourierType';

export default mutationWithClientMutationId({
  name: 'updateFulfillmentCourier',
  inputFields: {
    listOfFulfillmentCouriers: {
      type: new GraphQLList(FulfillmentCourierUpdateInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfFulfillmentCouriers }, ctx: RestoreCommerceContext) => {
    return tryRequest('modify', parseResourceList(listOfFulfillmentCouriers, 'modify', 'fulfillment_courier', ctx), ctx);
  },
  outputFields: EndpointHandler.buildOutputFields(),
});
