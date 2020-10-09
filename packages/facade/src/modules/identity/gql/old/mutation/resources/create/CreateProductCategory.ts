import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import tryRequest, { parseResourceList } from '../../../iam/resolver';
import { EndpointHandler } from '../../../EndpointHandler';
import { ProductCategoryInputType, ProductCategoryType } from '../../../types/ProductCategoryType';

export default mutationWithClientMutationId({
  name: 'createProductCategory',
  inputFields: {
    listOfProductCategory: {
      type: new GraphQLList(ProductCategoryInputType)
    }
  },
  mutateAndGetPayload: async ({ listOfProductCategory }, ctx: RestoreCommerceContext) => {
    return tryRequest('create', parseResourceList(listOfProductCategory,
      'create', 'product_category', ctx), ctx);
  },
  outputFields: EndpointHandler.buildCreateMutationOutput(ProductCategoryType)
});
