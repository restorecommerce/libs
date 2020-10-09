import {GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { CountryInputType, CountryType } from '../../../types/CountryType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'createCountries',
  inputFields: {
    listOfCountries: {
      type: new GraphQLList(CountryInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfCountries }, ctx: RestoreCommerceContext) => {
    return tryRequest('create', parseResourceList(listOfCountries, 'create', 'country', ctx), ctx);
  },
  outputFields: EndpointHandler.buildCreateMutationOutput(CountryType),
});

