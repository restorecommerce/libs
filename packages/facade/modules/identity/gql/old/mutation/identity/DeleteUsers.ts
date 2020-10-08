import { GraphQLString, GraphQLList, GraphQLInputObjectType } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../iam/interfaces';

import { errors } from '../../config';
import { EndpointHandler } from '../../EndpointHandler';
import { ErrorType } from '../../types/ErrorType';
import tryRequest, { parseResourceList } from '../../iam/resolver';

const deleteUserRequest = new GraphQLInputObjectType({
  name: 'DeleteUserType',
  description: 'User data',
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    }
  }),
});

export default mutationWithClientMutationId({
  name: 'deleteUsers',
  inputFields: {
    listOfUsers: {
      type: new GraphQLList(deleteUserRequest),
    }
  },
  mutateAndGetPayload: async ({ listOfUsers }, ctx: RestoreCommerceContext) => {
    return tryRequest('delete', parseResourceList(listOfUsers, 'delete', 'user', ctx), ctx, async () => {
      const handler = new EndpointHandler('user');
      const output = {
        deleteStatus: [],
        error: {
          code: [],
          message: []
        }
      };
      const userService = handler.getResourceService();

      const deleteIds = [];
      let result;
      let invalidUsers: Boolean;
      for (let userDetail of listOfUsers) {
        let id = userDetail['id'];
        let name = userDetail['name'];
        let email = userDetail['email'];

        const user = {
          name, id, email
        };

        if (!id) {
          // check if name or email exists
          if (!name && !email) {
            output.error.code.push(errors.DELETE_USER_NAME_ID_EMAIL.code);
            output.error.message.push(errors.DELETE_USER_NAME_ID_EMAIL.message);
            continue;
          }
          else {
            // either name or email exists
            let userIdDetail = await userService.find(user);

            if (!userIdDetail.data || !userIdDetail.data.items[0].id) {
              output.error.code.push(errors.USER_DOES_NOT_EXIST.code);
              output.error.message.push('user with name ' + user.name + ' does not exist');
              invalidUsers = true;
              continue;
            }

            deleteIds.push(userIdDetail.data.items[0].id);
          }
        }
        else {
          deleteIds.push(id);
        }
      }

      if (deleteIds) {
        result = await userService.delete({ ids: deleteIds });
      }

      if (!result) {
        output.error.code.push(errors.SYSTEM_ERROR.code);
        output.error.message.push(errors.SYSTEM_ERROR.message);
      }

      if (!invalidUsers) {
        output.deleteStatus.push('Users deleted successfully');
      } else {
        output.deleteStatus.push('Some of the users could not be deleted');
      }

      return output;
    });
  },
  outputFields: {
    deleteStatus: {
      type: new GraphQLList(GraphQLString),
      resolve: ({ deleteStatus }) => deleteStatus,
    },
    error: {
      type: ErrorType,
      resolve: ({ error }) => error,
    }
  },
});

