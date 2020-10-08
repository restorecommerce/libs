import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { TypeOfTaxInputType, TypeOfTaxType } from '../../../types/TypeOfTaxType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'createTaxTypes',
  inputFields: {
    listOfTaxTypes: {
      type: new GraphQLList(TypeOfTaxInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfTaxTypes }, ctx: RestoreCommerceContext) => {
    return tryRequest('create', parseResourceList(listOfTaxTypes, 'create', 'tax_type', ctx), ctx);

  },
  outputFields: EndpointHandler.buildCreateMutationOutput(TypeOfTaxType),
});

