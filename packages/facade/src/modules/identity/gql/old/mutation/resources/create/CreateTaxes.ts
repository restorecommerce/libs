import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { TaxInputType, TaxType } from '../../../types/TaxType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'createTaxes',
  inputFields: {
    listOfTaxes: {
      type: new GraphQLList(TaxInputType),
    },
  },
  mutateAndGetPayload: async ({ listOfTaxes }, ctx: RestoreCommerceContext) => {
    return tryRequest('create', parseResourceList(listOfTaxes, 'create', 'tax', ctx), ctx);

  },
  outputFields: EndpointHandler.buildCreateMutationOutput(TaxType),
});

