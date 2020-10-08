import {GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { AddressInputType, AddressType } from '../../../types/AddressType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest from '../../../iam/resolver';
import { parseResourceList } from '../../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'createAddresses',
  inputFields: {
    listOfAddresses: {
      type: new GraphQLList(AddressInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfAddresses }, ctx: RestoreCommerceContext) => {
    return tryRequest('create', parseResourceList(listOfAddresses, 'create', 'address', ctx), ctx);
  },
  outputFields: EndpointHandler.buildCreateMutationOutput(AddressType),
});

