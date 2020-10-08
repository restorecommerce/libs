import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';
import {ProductPrototypeUpdateInputType} from '../../../types/ProductPrototypeType';

export default mutationWithClientMutationId({
  name: 'updateProductPrototype',
  inputFields: {
    listOfProductPrototypes: {
      type: new GraphQLList(ProductPrototypeUpdateInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfProductPrototypes }, ctx: RestoreCommerceContext) => {
    return tryRequest('modify', parseResourceList(listOfProductPrototypes, 'modify', 'product_prototype', ctx), ctx);
  },
  outputFields: EndpointHandler.buildOutputFields(),
});
