import { GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { UnauthenticatedContext } from '../../iam/interfaces';

import { ErrorType } from '../../types/ErrorType';
import { getRepository, handleError } from '../../iam/repository';
import tryRequest from '../../iam/resolver';
import logger from '../../logger';

export default mutationWithClientMutationId({
  name: 'confirmPasswordChange',
  inputFields: {
    name: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
    activation_code: {
      type: GraphQLString,
    }
  },
  mutateAndGetPayload: async ({ name, password, activation_code }, ctx: UnauthenticatedContext) => {
    if (!ctx || !ctx.session) {
      ctx = {
        session: {
          data: {
            unauthenticated: true
          }
        }
      };
    }

    return tryRequest('modify', {
      type: 'user',
      fields: ['password_hash', 'activation_code'],
      instance: {
        name, password, activation_code
      }
    }, {
      session: {
        data: {
          unauthenticated: true
        }
      }
    }, async () => {
      try {
        await getRepository().confirmPasswordChange(name, password, activation_code);
      } catch (err) {
        logger.error(err);
        return {
          passChangeStatus: null,
          error: handleError(err)
        };
      }

      return {
        status: `Password changed successfully`,
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
