import * as _ from 'lodash';
import { GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../../iam/interfaces';
import { CommandInputType, CommandType } from '../../../types/CommandType';
import { EndpointHandler } from '../../../EndpointHandler';
import tryRequest, { parseResourceList } from '../../../iam/resolver';

export default mutationWithClientMutationId({
  name: 'createCommands',
  inputFields: {
    listOfCommands: {
      type: new GraphQLList(CommandInputType),
    }
  },
  mutateAndGetPayload: async ({ listOfCommands }, ctx: RestoreCommerceContext) => {
    return tryRequest('create', parseResourceList(listOfCommands, 'create', 'command', ctx), ctx, async () => {
      const output = {
        details: '',
        error: {
          code: [],
          message: []
        }
      };

      const endpointHandler = new EndpointHandler('command');
      const service = endpointHandler.getResourceService();

      listOfCommands = EndpointHandler.convertToObject(listOfCommands).map((command) => {
        if (!_.isEmpty(command.parameters)) {
          command.parameters = command.parameters.map((param) => {
            if (!_.isEmpty(param.properties)) {
              param.properties = JSON.stringify(param.properties);
            }
            return param;
          });
        }
        command = EndpointHandler.createMetadata(command, ctx.session.data);
        return command;
      });
      const result = await service.create({ items: listOfCommands });
      endpointHandler.handleCreateResourcesErrors(result, output);
      return output;
    });
  },
  outputFields: EndpointHandler.buildCreateMutationOutput(CommandType),
});
