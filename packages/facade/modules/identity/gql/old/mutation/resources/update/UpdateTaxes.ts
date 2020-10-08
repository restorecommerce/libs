import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { TaxUpdateInputType } from '../../../types/TaxType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'updateTaxes',
  inputFields: {
    listOfTaxes: {
      type: new GraphQLList(TaxUpdateInputType),
    },
  },
  mutateAndGetPayload: async ({ listOfTaxes }, ctx: RestoreCommerceContext) => {
    return tryRequest('modify', parseResourceList(listOfTaxes, 'modify', 'tax', ctx), ctx);
  },
  outputFields: EndpointHandler.buildOutputFields(),
});

