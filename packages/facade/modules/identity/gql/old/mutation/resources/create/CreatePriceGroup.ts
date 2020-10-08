import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import tryRequest, { parseResourceList } from '../../../iam/resolver';
import { EndpointHandler } from '../../../EndpointHandler';
import { PriceGroupInputType, PriceGroupType } from '../../../types/PriceGroupType';

export default mutationWithClientMutationId({
  name: 'createPriceGroups',
  inputFields: {
    listOfPriceGroups: {
      type: new GraphQLList(PriceGroupInputType)
    }
  },
  mutateAndGetPayload: async ({ listOfPriceGroups }, ctx: RestoreCommerceContext) => {
    return tryRequest('create', parseResourceList(listOfPriceGroups, 'create',
      'price_group', ctx), ctx);
  },
  outputFields: EndpointHandler.buildCreateMutationOutput(PriceGroupType)
});
