import { GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { UnauthenticatedContext } from '../../iam/interfaces';

import { ErrorType } from '../../types/ErrorType';
import { getRepository, handleError } from '../../iam/repository';
import logger from '../../logger';
import tryRequest from '../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'activateUser',
  inputFields: {
    name: {
      type: GraphQLString,
    },
    activation_code: {
      type: GraphQLString,
    }
  },
  mutateAndGetPayload: async ({ name, activation_code }, ctx: UnauthenticatedContext) => {
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
      fields: ['active', 'activation_code'],
      instance: { name, activation_code },
      type: 'user'
    }, ctx, async () => {
      try {
        await getRepository().activateUser(name, activation_code);
      } catch (err) {
        logger.error(err);

        return {
          activationStatus: null,
          error: handleError(err)
        };
      }
      return {
        activationStatus: `User ${name} activated successfully`,
        error: null
      };
    });
  },
  outputFields: {
    activationStatus: {
      type: GraphQLString,
      resolve: ({ activationStatus }) => activationStatus,
    },
    error: {
      type: ErrorType,
      resolve: ({ error }) => error,
    }
  },
});
