import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import tryRequest, { parseResourceList } from '../../../iam/resolver';
import { EndpointHandler } from '../../../EndpointHandler';
import { ManufacturerInputType, ManufacturerType } from '../../../types/ManufacturerType';

export default mutationWithClientMutationId({
  name: 'createManufactures',
  inputFields: {
    listOfManufactures: {
      type: new GraphQLList(ManufacturerInputType)
    }
  },
  mutateAndGetPayload: async ({ listOfManufactures }, ctx: RestoreCommerceContext) => {
    return tryRequest('create', parseResourceList(listOfManufactures, 'create',
      'manufacturer', ctx), ctx);
  },
  outputFields: EndpointHandler.buildCreateMutationOutput(ManufacturerType)
});
