import { FederatedInvoicingSchema } from './gql/federation.js';
import { namespace, type InvoicingConfig, type InvoicingModule } from './interfaces.js';
import { InvoicingSrvGrpcClient } from './grpc/index.js';
import { createFacadeModuleFactory } from '../../utils.js';

export const invoicingModule = createFacadeModuleFactory<InvoicingConfig, InvoicingModule>(namespace, (facade, config) => {
  const invoicing = {
    client: new InvoicingSrvGrpcClient(config.config.client.address, {
      ...config.config.client,
      logger: facade.logger,
    })
  };

  facade.addApolloService({
    name: namespace,
    schema: FederatedInvoicingSchema(config.config)
  });

  facade.koa.use(async (ctx, next) => {
    ctx.invoicing = invoicing;
    await next();
  });
});
