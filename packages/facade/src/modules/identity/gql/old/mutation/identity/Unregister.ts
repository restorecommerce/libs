import { GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../iam/interfaces';

import { errors } from '../../config';
import { ErrorType } from '../../types/ErrorType';
import { getRepository } from '../../iam/repository';
import tryRequest from '../../iam/resolver';
import logger from '../../logger';

export default mutationWithClientMutationId({
  name: 'unregisterUser',
  inputFields: {
    name: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    id: {
      type: GraphQLString,
    }
  },
  mutateAndGetPayload: async ({ id, name, email, meta }, ctx: RestoreCommerceContext) => {
    return tryRequest('delete', {
      type: 'user.User',
      instance: {
        id, name, email, meta
      },
      fields: []
    }, ctx, async () => {
      try {
        const field = !!id ? 'id' : (!!name ? 'name' : 'email');
        const value = !!id ? id : (!!name ? name : email);
        await getRepository().unregister(field, value);
      } catch (err) {
        logger.error(err);
        return {
          status: null,
          error: errors[err] || err
        };
      }

      return {
        status: 'User unregistered successfully',
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
