import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { RoleUpdateInputType } from '../../../types/RoleType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'updateRoles',
  inputFields: {
    listOfRoles: {
      type: new GraphQLList(RoleUpdateInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfRoles }, ctx: RestoreCommerceContext) => {
    return tryRequest('modify', parseResourceList(listOfRoles, 'modify', 'role', ctx), ctx);
  },
  outputFields: EndpointHandler.buildOutputFields(),
});

