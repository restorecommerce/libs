import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';
import { TypeOfFulfillmentCourierType, FulfillmentCourierType } from '../../../types/TypeOfFulfillmentCourierType';

export default mutationWithClientMutationId({
  name: 'createFulfillmentCourierType',
  inputFields: {
    listOfCourierTypes: {
      type: new GraphQLList(TypeOfFulfillmentCourierType),
    }
  },
  mutateAndGetPayload: async ({ listOfCourierTypes }, ctx: RestoreCommerceContext) => {
    const temp = parseResourceList(listOfCourierTypes, 'create', 'fulfillment_courier', ctx);
    return await tryRequest('create', temp, ctx);
  },
  outputFields: EndpointHandler.buildCreateMutationOutput(FulfillmentCourierType),
});
