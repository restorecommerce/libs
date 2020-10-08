import * as _ from 'lodash';
import { GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { ErrorType } from '../../types/ErrorType';

import { RestoreCommerceContext, UserSessionData } from '../../iam/interfaces';
import tryRequest from '../../iam/resolver';
import { reduceRoleAssociations } from '../../utils';

export default mutationWithClientMutationId({
  name: 'setSessionScope',
  description: 'Persists the chosen user scope within the session context',
  inputFields: {
    orgID: {
      type: GraphQLString
    }
  },
  mutateAndGetPayload: async ({ orgID }, ctx: RestoreCommerceContext) => {
    return tryRequest('session', null, ctx, async () => {
      const userData = ctx.session ? ctx.session.data as UserSessionData : undefined;

      if (!userData) {
        return null;
      }


      const scope = await reduceRoleAssociations(userData.role_associations, orgID);
      userData.scope = scope;

      await ctx.session.update(ctx.session.data);
      await ctx.jwtStore.persist(ctx.session.tokens, 'token');

      return {
        status: `Scope successfully changed to ${orgID}`
      };
    });
  },
  outputFields: {
    status: {
      type: GraphQLString,
    },
    error: {
      type: ErrorType,
      resolve: ({ error }) => error,
    }
  },
});
