import { FederatedInvoicingSchema } from './gql/federation';
import { namespace, InvoicingConfig, InvoicingModule } from "./interfaces";
import { InvoicingSrvGrpcClient } from "./grpc";
import { createFacadeModuleFactory } from "../../utils";

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
