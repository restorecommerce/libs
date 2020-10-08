import { GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../iam/interfaces';

import { ErrorType } from '../../types/ErrorType';
import { getRepository, handleError } from '../../iam/repository';
import tryRequest from '../../iam/resolver';
import logger from '../../logger';

export default mutationWithClientMutationId({
  name: 'confirmEmailChange',
  inputFields: {
    name: {
      type: GraphQLString,
    },
    activationCode: {
      type: GraphQLString,
    }
  },
  mutateAndGetPayload: async ({ name, activationCode }, ctx: RestoreCommerceContext) => {
    return tryRequest('modify', {
      type: 'user',
      fields: ['email', 'activation_code'],
      instance: {
        name, activation_code: activationCode
      }
    }, {
      session: {
        data: {
          unauthenticated: true
        }
      }
    }, async () => {
      try {
        await getRepository().confirmEmailChange(name, activationCode);
      } catch (err) {
        logger.error(err);
        return {
          status: null,
          error: handleError(err)
        };
      }

      return {
        status: `Email changed successfully for user ${name}`,
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
