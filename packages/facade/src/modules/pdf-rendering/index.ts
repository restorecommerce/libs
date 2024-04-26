import { FederatedPdfRenderingSchema } from './gql/federation.js';
import { namespace, type PdfRenderingConfig, type PdfRenderingModule } from './interfaces.js';
import { PdfRenderingSrvGrpcClient } from './grpc/index.js';
import { createFacadeModuleFactory } from '../../utils.js';

export const pdfRenderingModule = createFacadeModuleFactory<PdfRenderingConfig, PdfRenderingModule>(namespace, (facade, config) => {
  const pdfRendering = {
    client: new PdfRenderingSrvGrpcClient(config.config.client.address, {
      ...config.config.client,
      logger: facade.logger,
    })
  };

  facade.addApolloService({
    name: namespace,
    schema: FederatedPdfRenderingSchema(config.config)
  });

  facade.koa.use(async (ctx, next) => {
    ctx.pdfRendering = pdfRendering;
    await next();
  });
});
