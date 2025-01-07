import { FederatedOstorageSchema } from './gql/federation.js';
import { namespace, OstorageConfig, OstorageModule } from './interfaces.js';
import { OstorageSrvGrpcClient } from './grpc/index.js';
import { createFacadeModuleFactory } from '../../utils.js';
import { handleGetFile } from './objectDownloadReqHandler.js';
import Router, { RouterContext } from 'koa-router';
import bodyParser from 'koa-bodyparser';
import { Subject } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/auth.js';

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
  const endpoint = config.config.endpoint ?? 'storage';
  const route = new RegExp(`^\/${endpoint}\/([^/]+)\/(.+)`, 'i');

  router.use(bodyParser());
  router.get(endpoint, route, async (ctx: RouterContext<any, {subject?: Subject}>, next: any) => {
    const authToken = ctx.request.header['authorization'];
    if (authToken?.startsWith('Bearer ')) {
      const token = authToken.split(' ')[1];
      ctx.subject = { token };
    }

    const match = ctx.req.url.match(route);
    const bucket = match[1];
    const key = match[2];
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
