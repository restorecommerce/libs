import { GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { ErrorType } from '../../types/ErrorType';

import { RestoreCommerceContext } from '../../iam/interfaces';
import tryRequest from '../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'logoutUser',
  inputFields: null,
  mutateAndGetPayload: async ({ }, ctx: RestoreCommerceContext) => {
    return tryRequest('logout', {
      type: 'user.User'
    }, ctx);
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
