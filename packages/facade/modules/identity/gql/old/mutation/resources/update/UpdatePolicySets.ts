import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { PolicySetUpdateInputType } from '../../../types/PolicySetType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'updatePolicySets',
  inputFields: {
    listOfPolicySets: {
      type: new GraphQLList(PolicySetUpdateInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfPolicySets }, ctx: RestoreCommerceContext) => {
    return tryRequest('modify', parseResourceList(listOfPolicySets, 'modify', 'policy_set', ctx), ctx);
  },
  outputFields: EndpointHandler.buildOutputFields(),
});
