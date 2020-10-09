import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { LocaleInputType, LocaleType } from '../../../types/LocaleType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'createLocales',
  inputFields: {
    listOfLocales: {
      type: new GraphQLList(LocaleInputType),
    },
  },
  mutateAndGetPayload: async ({ listOfLocales }, ctx: RestoreCommerceContext) => {
    return tryRequest('create', parseResourceList(listOfLocales, 'create', 'locale', ctx), ctx);

  },
  outputFields: EndpointHandler.buildCreateMutationOutput(LocaleType),
});

