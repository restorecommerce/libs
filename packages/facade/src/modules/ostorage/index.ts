import { FederatedOstorageSchema } from './gql/federation.js';
import { namespace, OstorageConfig, OstorageModule } from './interfaces.js';
import { OstorageSrvGrpcClient } from './grpc/index.js';
import { createFacadeModuleFactory } from '../../utils.js';
import { handleGetFile } from './objectDownloadReqHandler.js';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

export const ostorageModule = createFacadeModuleFactory<OstorageConfig, OstorageModule>(namespace, (facade, config) => {
  const ostorage = {
    client: new OstorageSrvGrpcClient(config.config.client.address, {
      ...config.config.client,
      logger: facade.logger,
    })
  };

  facade.addApolloService({
    name: namespace,
    schema: FederatedOstorageSchema(config.config)
  });

  const router = new Router();

  router.use(bodyParser());

  const endpoint = config.config.endpoint || 'storage';
  const route = new RegExp(`^\/${endpoint}\/([^/]+)\/(.+)`, 'i');
  router.get(route, async (ctx: any, next: any) => {
    const authToken = ctx.request.header['authorization'];
    let token;
    if (authToken && authToken.startsWith('Bearer ')) {
      token = authToken.split(' ')[1];
      ctx.subject = { token };
      ctx.subject = { token };
    }
    const bucket = ctx.params[0];
    const key = ctx.params[1];
    await handleGetFile(bucket, key, ctx, ostorage.client);
    return ctx.response;
  });

  facade.koa.use(router.routes());
  facade.koa.use(router.allowedMethods());

  facade.koa.use(async (ctx, next) => {
    ctx.ostorage = ostorage;
    await next();
  });

});
