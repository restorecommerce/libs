import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';
import {PriceGroupUpdateInputType} from '../../../types/PriceGroupType';

export default mutationWithClientMutationId({
  name: 'updatePriceGroups',
  inputFields: {
    listOfPriceGroups: {
      type: new GraphQLList(PriceGroupUpdateInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfPriceGroups }, ctx: RestoreCommerceContext) => {
    return tryRequest('modify', parseResourceList(listOfPriceGroups, 'modify', 'price_group', ctx), ctx);
  },
  outputFields: EndpointHandler.buildOutputFields(),
});
