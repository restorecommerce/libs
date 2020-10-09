import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { AddressUpdateInputType } from '../../../types/AddressType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'updateAddresses',
  inputFields: {
    listOfAddresses: {
      type: new GraphQLList(AddressUpdateInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfAddresses }, ctx: RestoreCommerceContext) => {
    return tryRequest('modify', parseResourceList(listOfAddresses, 'modify', 'address', ctx), ctx);
  },
  outputFields: EndpointHandler.buildOutputFields(),
});
