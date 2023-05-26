import * as uuid from 'uuid';
import { Logger } from 'winston';
import Application from "koa";
import { Events, registerProtoMeta } from '@restorecommerce/kafka-client';
import { createServiceConfig } from '@restorecommerce/service-config';
import { protoMetadata as commandInterfaceMeta } from '@restorecommerce/rc-grpc-clients/dist/generated-server/io/restorecommerce/commandinterface';

// const Router = require('koa-router');

import Router from 'koa-router';
// import controller from './controller';

const router = new Router();
// router.get('/getVisibleZones', controller.getVisibleZones);
// router.get('/searchZones', controller.searchZones);
// router.get('/crawler', controller.crawler);

export interface APIParams {
  apiKey?: boolean | string;
  logger: Logger;
}

export let bootstrapApiKey: string | undefined;
const API_KEY_COMMAND_NAME = 'set_api_key';
const API_KEY_COMMAND_EVENT = 'setApiKeyCommand';
const API_KEY_COMMAND_RESPONSE = 'setApiKeyResponse';
const COMMAND_TOPIC_NAME = 'io.restorecommerce.command';

registerProtoMeta(commandInterfaceMeta);

const exectueSetAPIKeyCommand = async (apiKey: string, logger: Logger): Promise<any> => {
  const cfg = createServiceConfig(process.cwd());
  if (apiKey && cfg.get('events:kafka')) {
    let payload = JSON.stringify({ authentication: { apiKey } });
    const eventObject = {
      name: API_KEY_COMMAND_NAME,
      payload: {}
    };
    let eventPayload = Buffer.from(payload).toString('base64');
    eventObject.payload = {
      type_url: 'payload',
      value: eventPayload
    };

    const events = new Events(cfg.get('events:kafka'), logger);
    await events.start();
    const commandResponses: any = [];
    // preparing event listener for system commands' responses
    const responseListener = async (msg: any, context: any,
      config: any, eventName: string) => {
      const payload = msg.payload;
      let decodedMsg = {};
      try {
        if (payload && payload.value) {
          decodedMsg = JSON.parse(Buffer.from(payload.value, 'base64').toString()); // google.protobuf.Any
        }
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

    const commandTopic = await events.topic(COMMAND_TOPIC_NAME);
    await commandTopic.on(API_KEY_COMMAND_RESPONSE, responseListener);
    await commandTopic.emit(API_KEY_COMMAND_EVENT, eventObject);
    let resp = await new Promise((resolve, reject) => {
      setTimeout(() => {
        commandTopic.removeAllListeners(API_KEY_COMMAND_RESPONSE);
        resolve({
          responses: commandResponses
        });
      }, 3000);
    });
    return resp;
  } else {
    logger.info('Kafka configuration missing for sync ApiKey');
    return {
      responses: [{ response: 'Api Key not synced' }]
    }
  }
};

const initApiKey = (logger: Logger, apiKey: boolean | string) => {
  if (apiKey === true) {
    bootstrapApiKey = uuid.v4().replace(/-/g, '');
  } else {
    bootstrapApiKey = apiKey as string;
  }
  exectueSetAPIKeyCommand(bootstrapApiKey, logger).then((resp) => {
    logger.info('SetApiKey command response', resp);
    logger.info(`Bootstrap API Key is: ${bootstrapApiKey}`);
  }).catch(err => {
    logger.error('Error executing setApiKey command', err);
  });
};

export const setupApiKey = ({ apiKey, logger }: APIParams): {
  router: any,
  app: Application.Middleware<any>
} | undefined => {
  const router = new Router();

  try {
    if (!!apiKey) {
      initApiKey(logger, apiKey);

      router.all('/deleteApiKey', async (ctx: any, next: any) => {
        if (bootstrapApiKey) {
          if (ctx.apiKeyAuthorization === 'Bearer ' + bootstrapApiKey) {
            ctx.body = 'api key deleted!';
            logger.warn('Bootstrap API Key deleted!');
            bootstrapApiKey = undefined;
          } else {
            ctx.body = 'permission denied';
            ctx.status = 403;
          }
        } else {
          ctx.body = 'api key is already deleted!';
          ctx.status = 400;
        }

        await next();
      });

      return {
        router,
        app: async (context, next) => {
          if ('authorization' in context.headers) {
            const auth = context.headers.authorization!.split(' ');
            if (auth.length === 2 && auth[0].toLowerCase() === 'bearer') {
              if (auth[1] === bootstrapApiKey) {
                context.apiKeyAuthorization = 'Bearer ' + bootstrapApiKey;
              }
            }
          }
          await next();
        }
      };
    }
  } catch (ex) {
    logger.error(ex);
  }

  return undefined;
};
