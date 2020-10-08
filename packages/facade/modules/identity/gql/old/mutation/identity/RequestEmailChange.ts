import { GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../iam/interfaces';

import { ErrorType } from '../../types/ErrorType';
import { getRepository, handleError } from '../../iam/repository';
import tryRequest from '../../iam/resolver';
import logger from '../../logger';

export default mutationWithClientMutationId({
  name: 'requestEmailChange',
  inputFields: {
    id: {
      type: GraphQLString,
    },
    newEmail: {
      type: GraphQLString,
    }
  },
  mutateAndGetPayload: async ({ id, newEmail, meta }, ctx: RestoreCommerceContext) => {
    return tryRequest('modify', {
      type: 'user.User',
      fields: ['email'],
      instance: {
        id, meta
      }
    }, ctx, async () => {
      try {
        await getRepository().requestEmailChange(id, newEmail);
      } catch (err) {
        logger.error(err);
        return {
          mailChangeStatus: null,
          error: handleError(err)
        };
      }

      return {
        status: `Email ID change requested successfully for user ${id}`,
        error: null
      };
    });
  },
  outputFields: {
    status: {
      type: GraphQLString,
      resolve: ({ status }) => status,
    },
    error: {
      type: ErrorType,
      resolve: ({ error }) => error,
    }
  },
});
