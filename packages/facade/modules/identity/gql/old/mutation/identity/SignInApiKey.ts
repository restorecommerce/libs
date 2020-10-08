import { GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../iam/interfaces';

import { ErrorType } from '../../types/ErrorType';
import { loginApiKey } from '../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'signInApiKey',
  inputFields: {
    apiKey: {
      type: GraphQLString
    }
  },
  mutateAndGetPayload: async ({ apiKey }, ctx: RestoreCommerceContext) => {
    return loginApiKey({ apiKey, ctx });
  },
  outputFields: {
    status: {
      type: GraphQLString,
    },
    error: {
      type: ErrorType,
    }
  },
});
