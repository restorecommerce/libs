import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { RuleUpdateInputType } from '../../../types/RuleType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'updateRules',
  inputFields: {
    listOfRules: {
      type: new GraphQLList(RuleUpdateInputType),
    },
  },
  mutateAndGetPayload: async ({ listOfRules }, ctx: RestoreCommerceContext) => {
    return tryRequest('modify', parseResourceList(listOfRules, 'modify', 'rule', ctx), ctx);
  },
  outputFields: EndpointHandler.buildOutputFields(),
});

