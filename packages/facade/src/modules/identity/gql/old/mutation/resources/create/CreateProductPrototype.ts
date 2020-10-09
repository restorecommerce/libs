import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import {RestoreCommerceContext} from '../../../iam/interfaces';
import {parseResourceList} from '../../../iam/resolver';
import tryRequest from '../../../iam/resolver';
import {EndpointHandler} from '../../../EndpointHandler';
import {marshalLocations} from '../../../utils';
import {ProductPrototypeInputType, ProductPrototypeType} from '../../../types/ProductPrototypeType';

export default mutationWithClientMutationId ({
  name: 'createProductPrototype',
  inputFields: {
    listOfProductPrototypesTypes: {
      type: new GraphQLList(ProductPrototypeInputType)
    }
  },
  mutateAndGetPayload: async ({ listOfProductPrototypesTypes }, ctx: RestoreCommerceContext) => {
    listOfProductPrototypesTypes = parseResourceList(listOfProductPrototypesTypes, 'create', 'productPrototype', ctx);
    return tryRequest('create', listOfProductPrototypesTypes, ctx, async () => {
      const endpointHandler = new EndpointHandler('product_prototype');
      const output = {
        details: [],
        error: {
          code: [],
          message: []
        }
      };
      const productPrototypeService = endpointHandler.getResourceService();
      const productPrototypeList = marshalLocations(listOfProductPrototypesTypes.map(productPrototype => productPrototype.instance));
      const result = await productPrototypeService.create({ items: productPrototypeList });

      endpointHandler.handleCreateResourcesErrors(result, output);

      return output;
    });
  },
  outputFields: EndpointHandler.buildCreateMutationOutput(ProductPrototypeType)
});
