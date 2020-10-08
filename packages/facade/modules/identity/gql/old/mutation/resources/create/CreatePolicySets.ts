import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { PolicySetInputType, PolicySetType } from '../../../types/PolicySetType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'createPolicySets',
  inputFields: {
    listOfPolicySets: {
      type: new GraphQLList(PolicySetInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfPolicySets }, ctx: RestoreCommerceContext) => {
    return tryRequest('create', parseResourceList(listOfPolicySets, 'create', 'policy_set', ctx), ctx);
  },
  outputFields: EndpointHandler.buildCreateMutationOutput(PolicySetType),
});

