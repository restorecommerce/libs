import {GraphQLList} from 'graphql';
import {mutationWithClientMutationId} from 'graphql-relay';
import {RestoreCommerceContext} from '../../../iam/interfaces';
import tryRequest, {parseResourceList} from '../../../iam/resolver';
import {EndpointHandler} from '../../../EndpointHandler';
import {CustomerInputType, CustomerType} from '../../../types/CustomerType';
import {modifyCustomerList} from '../../../utils';

export default mutationWithClientMutationId({
  name: 'createCustomers',
  inputFields: {
    listOfCustomers: {
      type: new GraphQLList(CustomerInputType)
    }
  },
  mutateAndGetPayload: async ({listOfCustomers}, ctx: RestoreCommerceContext) => {
    listOfCustomers = parseResourceList(listOfCustomers, 'create', 'customer', ctx);
    return tryRequest('create', listOfCustomers, ctx, async () => {
      const endpointHandler = new EndpointHandler('customer');
      const output = {
        details: [],
        error: {
          code: [],
          message: []
        }
      };
      const customerService = endpointHandler.getResourceService();
      let customerList = modifyCustomerList(listOfCustomers.map(eachCustomer => eachCustomer.instance));
      const result = await customerService.create({ items: customerList });
      endpointHandler.handleCreateResourcesErrors(result, output);
      return output;
    });
  },
  outputFields: EndpointHandler.buildCreateMutationOutput(CustomerType)
});
