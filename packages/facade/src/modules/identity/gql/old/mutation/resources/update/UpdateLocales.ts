import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { LocaleUpdateInputType } from '../../../types/LocaleType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'updateLocales',
  inputFields: {
    listOfLocales: {
      type: new GraphQLList(LocaleUpdateInputType),
    },
  },
  mutateAndGetPayload: async ({ listOfLocales }, ctx: RestoreCommerceContext) => {
    return tryRequest('modify', parseResourceList(listOfLocales, 'modify', 'locale', ctx), ctx);
  },
  outputFields: EndpointHandler.buildOutputFields(),
});

