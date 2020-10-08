import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { RuleInputType, RuleType } from '../../../types/RuleType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'createRules',
  inputFields: {
    listOfRules: {
      type: new GraphQLList(RuleInputType),
    },
  },
  mutateAndGetPayload: async ({ listOfRules }, ctx: RestoreCommerceContext) => {
    return tryRequest('create', parseResourceList(listOfRules, 'create', 'rule', ctx), ctx);
  },
  outputFields: EndpointHandler.buildCreateMutationOutput(RuleType),
});

