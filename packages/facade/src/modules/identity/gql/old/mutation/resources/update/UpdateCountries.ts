import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { CountryUpdateInputType } from '../../../types/CountryType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'updateCountries',
  inputFields: {
    listOfCountries: {
      type: new GraphQLList(CountryUpdateInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfCountries }, ctx: RestoreCommerceContext) => {
    return tryRequest('modify', parseResourceList(listOfCountries, 'modify', 'country', ctx), ctx);
  },
  outputFields: EndpointHandler.buildOutputFields(),
});

