import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';
import { ProductUpdateInputType } from '../../../types/ProductType';

export default mutationWithClientMutationId({
  name: 'updateProducts',
  inputFields: {
    listOfProducts: {
      type: new GraphQLList(ProductUpdateInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfProducts }, ctx: RestoreCommerceContext) => {
    return tryRequest('modify', parseResourceList(listOfProducts, 'modify', 'product', ctx), ctx);
  },
  outputFields: EndpointHandler.buildOutputFields(),
});
