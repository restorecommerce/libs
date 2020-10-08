import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';
import {ManufacturerUpdateInputType} from '../../../types/ManufacturerType';

export default mutationWithClientMutationId({
  name: 'updateManufactures',
  inputFields: {
    listOfManufactures: {
      type: new GraphQLList(ManufacturerUpdateInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfManufactures }, ctx: RestoreCommerceContext) => {
    return tryRequest('modify', parseResourceList(listOfManufactures, 'modify', 'manufacturer', ctx), ctx);
  },
  outputFields: EndpointHandler.buildOutputFields(),
});
