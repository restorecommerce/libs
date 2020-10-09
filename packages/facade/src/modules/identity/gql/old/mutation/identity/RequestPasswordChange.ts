// called when user forgets its password
import { GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../iam/interfaces';

import { ErrorType } from '../../types/ErrorType';
import { getRepository, handleError } from '../../iam/repository';
import tryRequest from '../../iam/resolver';
import logger from '../../logger';

export default mutationWithClientMutationId({
  name: 'requestPasswordChange',
  inputFields: {
    name: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    }
  },
  mutateAndGetPayload: async ({ email, name }, ctx: RestoreCommerceContext) => {
    return tryRequest('modify', {
      type: 'user',
      fields: ['password_hash', 'activation_code'],
      instance: {
        email, name
      }
    }, {
      session: {
        data: {
          unauthenticated: true
        }
      }
    }, async () => {
      try {
        if (email) {
          await getRepository().requestPasswordChange(email, 'email');
        } else {
          await getRepository().requestPasswordChange(name, 'name');
        }
      } catch (err) {
        logger.error(err);
        return {
          passChangeStatus: null,
          error: handleError(err)
        };
      }

      return {
        status: `Password change requested successfully`,
        error: null
      };
    });
  },
  outputFields: {
    status: {
      type: GraphQLString,
      resolve: ({ status }) => status
    },
    error: {
      type: ErrorType,
      resolve: ({ error }) => error,
    }
  },
});
