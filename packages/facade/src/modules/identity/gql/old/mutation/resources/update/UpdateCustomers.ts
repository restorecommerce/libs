import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';
import {CustomerUpdateInputType} from '../../../types/CustomerType';

export default mutationWithClientMutationId({
  name: 'updateCustomers',
  inputFields: {
    listOfCustomers: {
      type: new GraphQLList(CustomerUpdateInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfCustomers }, ctx: RestoreCommerceContext) => {
    return tryRequest('modify', parseResourceList(listOfCustomers, 'modify', 'customer', ctx), ctx);
  },
  outputFields: EndpointHandler.buildOutputFields(),
});
