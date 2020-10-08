import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';
import {ProductCategoryUpdateInputType} from '../../../types/ProductCategoryType';

export default mutationWithClientMutationId({
  name: 'updateProductCategory',
  inputFields: {
    listOfProductCategories: {
      type: new GraphQLList(ProductCategoryUpdateInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfProductCategories }, ctx: RestoreCommerceContext) => {
    return tryRequest('modify', parseResourceList(listOfProductCategories, 'modify', 'product_category', ctx), ctx);
  },
  outputFields: EndpointHandler.buildOutputFields(),
});
