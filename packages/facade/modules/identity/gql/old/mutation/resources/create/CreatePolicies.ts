import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { PolicyInputType, PolicyType } from '../../../types/PolicyType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'createPolicies',
  inputFields: {
    listOfPolicies: {
      type: new GraphQLList(PolicyInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfPolicies }, ctx: RestoreCommerceContext) => {
    return tryRequest('create', parseResourceList(listOfPolicies, 'create', 'policy', ctx), ctx);

  },
  outputFields: EndpointHandler.buildCreateMutationOutput(PolicyType),
});

