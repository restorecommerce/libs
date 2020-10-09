import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { parseResourceList } from '../../../iam/resolver';
import tryRequest from '../../../iam/resolver';
import { EndpointHandler } from '../../../EndpointHandler';
import { MainProductInputType, MainProductOutputType } from '../../../types/ProductType';
import * as uuid from 'uuid';

export default mutationWithClientMutationId({
  name: 'createProducts',
  inputFields: {
    listOfProducts: {
      type: new GraphQLList(MainProductInputType)
    }
  },
  mutateAndGetPayload: async ({ listOfProducts }, ctx: RestoreCommerceContext) => {
    const prodResources = parseResourceList(listOfProducts, 'create',
      'product', ctx);
    console.log('Temp Resources Input is...', JSON.stringify(prodResources));
    // Iterate and check if its a product (contains Variaant) or bunlde and add id's for all
    for (let resource of prodResources) {
      if (resource.instance && resource.instance.product && !resource.instance.product.id) {
        resource.instance.product.id = uuid.v4().replace(/-/g, '');
        // variants is an array
        if (resource.instance.product.variants && resource.instance.product.variants.length > 0) {
          for (let variant of resource.instance.product.variants) {
            variant.id = uuid.v4().replace(/-/g, '');
          }
        }
      } else if (resource.instance && resource.instance.bundle && !resource.instance.bundle.id) {
        resource.instance.bundle.id = uuid.v4().replace(/-/g, '');
      }
    }
    return tryRequest('create', prodResources, ctx);
  },
  outputFields: EndpointHandler.buildCreateMutationOutput(MainProductOutputType)
});
