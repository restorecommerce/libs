import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { RoleInputType, RoleType } from '../../../types/RoleType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'createRoles',
  inputFields: {
    listOfRoles: {
      type: new GraphQLList(RoleInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfRoles }, ctx: RestoreCommerceContext) => {
    return tryRequest('create', parseResourceList(listOfRoles, 'create', 'role', ctx), ctx);
  },
  outputFields: EndpointHandler.buildCreateMutationOutput(RoleType),
});

