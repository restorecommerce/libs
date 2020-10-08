import { GraphQLString, GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { RestoreCommerceContext } from '../../iam/interfaces';
import tryRequest from '../../iam/resolver';
import { GraphQLJSON } from 'graphql-type-json';
import { CommandResponse } from '../../types/CommandResponseType';
import logger from '../../logger';
import { builder } from '../../builder';
import { Topic } from '@restorecommerce/kafka-client';

export default mutationWithClientMutationId({
  name: 'ExecuteCommand',
  inputFields: {
    name: {
      type: GraphQLString,
      description: 'Command name'
    },
    payload: {
      type: GraphQLJSON,
      description: 'Command-specific parameters'
    }
  },
  mutateAndGetPayload: async ({ name, payload }, ctx: RestoreCommerceContext) => {
    return tryRequest('execute', {
      type: 'mutation.executeCommand',
      instance: { name, payload }
    }, ctx, async () => {
      const splitName = name.split('_');
      let eventName = splitName[0];
      // e.g., if name is 'health_check', eventName is 'healthCheckCommand'
      for (let i = 1; i < splitName.length; i++) {
        eventName += splitName[i].charAt(0).toUpperCase() + splitName[i].slice(1);
      }
      const commandEventName = eventName + 'Command';
      const responseEventName = eventName + 'Response';

      const eventObject = {
        name,
        payload: {}
      };
      payload = payload || {};
      let eventPayload = JSON.stringify(payload);
      eventPayload = Buffer.from(eventPayload).toString('base64');
      eventObject.payload = {
        type_url: 'payload',
        value: eventPayload
      };

      const commandTopic: Topic = builder.getTopic('command');

      const commandResponses = [];
      // preparing event listener for system commands' responses
      const responseListener = async (msg: any, context: any, config: any, eventName: string) => {
        const payload = msg.payload;
        try {
          const decodedMsg = JSON.parse(Buffer.from(payload.value, 'base64').toString()); // google.protobuf.Any
          logger.info('Received command response from services',
            JSON.stringify(msg.services), JSON.stringify(decodedMsg));
          commandResponses.push({
            services: msg.services,
            response: decodedMsg
          });
        } catch (err) {
          // some response-handling logic
          logger.error('Invalid message format in event:', eventName);
          throw err;
        }
      };
      await commandTopic.on(responseEventName, responseListener);
      await commandTopic.emit(commandEventName, eventObject);

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commandTopic.removeAllListeners(responseEventName);
          resolve({
            responses: commandResponses
          });
        }, 15000);
      });
    });
  },
  outputFields: {
    responses: {
      type: new GraphQLList(CommandResponse),
      resolve: ({ responses }) => responses
    }
  },
});
