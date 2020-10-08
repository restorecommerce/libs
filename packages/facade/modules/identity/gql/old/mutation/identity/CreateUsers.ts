import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext, UserSessionData } from '../../iam/interfaces';

import { errors } from '../../config';
import { EndpointHandler } from '../../EndpointHandler';
import { UserInputType, ResponseSafeUserType } from '../../types/UserType';
import tryRequest, { parseResourceList } from '../../iam/resolver';


export default mutationWithClientMutationId({
  name: 'createUsers',
  inputFields: {
    listOfUsers: {
      type: new GraphQLList(UserInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfUsers }, ctx: RestoreCommerceContext) => {
    listOfUsers = parseResourceList(listOfUsers, 'create', 'user', ctx);
    return tryRequest('create', listOfUsers, ctx, async () => {
      const output = {
        details: [],
        error: {
          code: [],
          message: []
        }
      };

      const endpointHandler = new EndpointHandler('user');

      const userService = endpointHandler.getResourceService();
      const instances = [];
      for (let resource of listOfUsers) {
        const user = resource.instance;
        if (!user.name || !user.email || !user.password) {
          output.error.code.push(errors.INVALID_USERNAME_EMAIL_PASSWORD.code);
          output.error.message.push(errors.INVALID_USERNAME_EMAIL_PASSWORD.message);
        }
        instances.push(user);
      }

      let auth_context = null;
      // check if user session, else no data available
      if (ctx.session.data['name']) {
        const userSession = ctx.session.data as UserSessionData;
        // const hierarchicalScopes = [] // interface for getting these not public
        auth_context = {
          id: userSession.id,
          scope: userSession.default_scope, // is this correct?
          role_associations: userSession.role_associations,
          // hierarchical_scopes: hierarchicalScopes
        };
      }

      const result = await userService.create({ items: instances, auth_context });
      endpointHandler.handleCreateResourcesErrors(result, output);
      return output;
    });
  },
  outputFields: EndpointHandler.buildCreateMutationOutput(ResponseSafeUserType),
});
