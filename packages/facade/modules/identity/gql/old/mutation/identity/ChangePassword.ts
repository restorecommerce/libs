import { GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../iam/interfaces';

import { ErrorType } from '../../types/ErrorType';
import { getRepository, handleError } from '../../iam/repository';
import tryRequest from '../../iam/resolver';
import logger from '../../logger';

export default mutationWithClientMutationId({
  name: 'changePassword',
  inputFields: {
    id: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
    new_password: {
      type: GraphQLString,
    }
  },
  mutateAndGetPayload: async ({ id, password, new_password }, ctx: RestoreCommerceContext) => {
    return tryRequest('modify', {
      type: 'user.User',
      fields: ['password_hash'],
      instance: {
        id, password
      }
    }, ctx, async () => {
      try {
        await getRepository().changePassword(id, password, new_password);
      } catch (err) {
        logger.error(err);
        return {
          passChangeStatus: null,
          error: handleError(err)
        };
      }

      return {
        passChangeStatus: `Password changed successfully`,
        error: null
      };
    });
  },
  outputFields: {
    passChangeStatus: {
      type: GraphQLString,
      resolve: ({ passChangeStatus }) => passChangeStatus,
    },
    error: {
      type: ErrorType,
      resolve: ({ error }) => error,
    }
  },
});
