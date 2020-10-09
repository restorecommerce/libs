import { GraphQLString, GraphQLList, GraphQLInputObjectType } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { EndpointHandler } from '../../EndpointHandler';
import { InputRoleAssociation } from '../../types/UserType';

import { RestoreCommerceContext } from '../../iam/interfaces';

import tryRequest, { parseResourceList } from '../../iam/resolver';

// user type without "special fields", like "email", "password", etc
const UserInputType = new GraphQLInputObjectType({
  name: 'UpdateUserInputType',
  description: 'User data',
  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'User ID (used to locate user to be updated)'
    },
    first_name: {
      type: GraphQLString,
      description: 'User\'s first name'
    },
    last_name: {
      type: GraphQLString,
      description: 'User\'s last name name'
    },
    role_associations: {
      type: new GraphQLList(InputRoleAssociation),
      description: 'User Role type',
    },
    locale_id: {
      type: GraphQLString,
      description: 'User locale settings (default is `de-DE`)',
    },
    timezone_id: {
      type: GraphQLString,
      description: 'User timezone settings (default is `Europe/Berlin`)',
    }
  }),
});
export default mutationWithClientMutationId({
  name: 'updateUsers',
  inputFields: {
    listOfUsers: {
      type: new GraphQLList(UserInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfUsers }, ctx: RestoreCommerceContext) => {
    return tryRequest('modify', parseResourceList(listOfUsers, 'modify', 'user', ctx), ctx);
  },
  outputFields: EndpointHandler.buildOutputFields(),
});
