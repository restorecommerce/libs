import { GraphQLString, GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { EndpointHandler } from '../../EndpointHandler';

import { RestoreCommerceContext } from '../../iam/interfaces';

import { getRepository, handleError } from '../../iam/repository';
import tryRequest from '../../iam/resolver';
import logger from '../../logger';

export default mutationWithClientMutationId({
  name: 'activateUsers',
  inputFields: {
    listOfUserIDs: {
      type: new GraphQLList(GraphQLString),
    }
  },
  mutateAndGetPayload: async ({ listOfUserIDs }, ctx: RestoreCommerceContext) => {
    listOfUserIDs = listOfUserIDs.map((id) => {
      return {
        instance: { id },
        type: 'user',
        fields: ['active', 'activation_code']
      };
    });
    // bulk operation; never performed by an unactive or unauthenticated user
    return tryRequest('modify', listOfUserIDs, ctx, async () => {
      const output = {
        status: [],
        error: {
          code: [],
          message: []
        }
      };

      const repository = getRepository();
      for (let item of listOfUserIDs) {
        try {
          // finding the user and retrieve its activation_code
          const user = await repository.findUser('id', item.instance.id);

          if (user.active) {
            throw 'USER_ALREADY_ACTIVE';
          }
          // Complete User details
          await repository.activateUser(user.name, user.activation_code);
          output.status.push(`User ${name} activated successfully`);
        } catch (err) {
          logger.error(err);
          const handled = handleError(err);
          output.error.code.push(handled.code);
          output.error.message.push(handled.message);
        }
      }

      return output;
    });
  },
  outputFields: EndpointHandler.buildOutputFields(),
});

