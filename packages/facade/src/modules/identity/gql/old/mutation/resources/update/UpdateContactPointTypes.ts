import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { TypeOfContactPointUpdateInputType } from '../../../types/TypeOfContactPointType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'updateAddressTypes',
  inputFields: {
    listOfContactPointTypes: {
      type: new GraphQLList(TypeOfContactPointUpdateInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfContactPointTypes }, ctx: RestoreCommerceContext) => {
    return tryRequest('modify', parseResourceList(listOfContactPointTypes, 'modify', 'contact_point_type', ctx), ctx);
  },
  outputFields: EndpointHandler.buildOutputFields(),
});

