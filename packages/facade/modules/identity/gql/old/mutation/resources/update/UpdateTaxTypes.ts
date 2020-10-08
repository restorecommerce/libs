import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { TypeOfTaxUpdateInputType } from '../../../types/TypeOfTaxType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'updateTaxTypes',
  inputFields: {
    listOfTaxTypes: {
      type: new GraphQLList(TypeOfTaxUpdateInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfTaxTypes }, ctx: RestoreCommerceContext) => {
    return tryRequest('modify', parseResourceList(listOfTaxTypes, 'modify', 'tax_type', ctx), ctx);
  },
  outputFields: EndpointHandler.buildOutputFields(),
});

