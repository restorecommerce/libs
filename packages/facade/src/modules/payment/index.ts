import { FederatedPaymentSchema } from './gql/federation.js';
import { namespace, type PaymentConfig, type PaymentModule } from './interfaces.js';
import { PaymentSrvGrpcClient } from './grpc/index.js';
import { createFacadeModuleFactory } from '../../utils.js';

export const paymentModule = createFacadeModuleFactory<PaymentConfig, PaymentModule>(namespace, (facade, config) => {
  const payment = {
    client: new PaymentSrvGrpcClient(config.config.client.address, {
      ...config.config.client,
      logger: facade.logger,
    })
  };

  facade.addApolloService({
    name: namespace,
    schema: FederatedPaymentSchema(config.config)
  });

  facade.koa.use(async (ctx, next) => {
    ctx.payment = payment;
    await next();
  });
});
