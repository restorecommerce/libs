import { GraphQLString, GraphQLBoolean } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../iam/interfaces';

import { ErrorType } from '../../types/ErrorType';
import { ResponseSafeUserType } from '../../types/UserType';
import tryRequest, { LoginInput } from '../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'signInUser',
  inputFields: {
    identifier: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
    rememberMe: {
      type: GraphQLBoolean
    }
  },
  mutateAndGetPayload: async ({identifier, password, rememberMe }, ctx: RestoreCommerceContext) => {
    return tryRequest('login', { identifier, password, rememberMe } as LoginInput, ctx);
  },
  outputFields: {
    me: {
      type: ResponseSafeUserType,
      description: 'Details of the User',
    },
    error: {
      type: ErrorType,
    }
  },
});
