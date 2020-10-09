import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { PolicyUpdateInputType } from '../../../types/PolicyType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'updatePolicies',
  inputFields: {
    listOfPolicies: {
      type: new GraphQLList(PolicyUpdateInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfPolicies }, ctx: RestoreCommerceContext) => {
    return tryRequest('modify', parseResourceList(listOfPolicies, 'modify', 'policy', ctx), ctx);
  },
  outputFields: EndpointHandler.buildOutputFields(),
});

