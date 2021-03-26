import * as uuid from 'uuid';
import { Logger } from 'winston';
import Router from "koa-router";
import Application from "koa";

export interface APIParams {
  apiKey?: boolean | string;
  logger: Logger;
}

export let bootstrapApiKey: string | undefined;

const initApiKey = (logger: Logger, apiKey: boolean | string) => {
  if (apiKey === true) {
    bootstrapApiKey = uuid.v4().replace(/-/g, '');
  } else {
    bootstrapApiKey = apiKey as string;
  }
  logger.info(`Bootstrap API Key is: ${bootstrapApiKey}`);
};

export const setupApiKey = ({apiKey, logger}: APIParams): {
  router: Router<{}, any>,
  app: Application.Middleware<any>
} | undefined => {
  const router = new Router<{}, any>();

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
