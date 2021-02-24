import { FederatedPaymentSchema } from './gql/federation';
import { namespace, PaymentConfig, PaymentModule } from "./interfaces";
import { PaymentSrvGrpcClient } from "./grpc";
import { createFacadeModuleFactory } from "../../utils";

export const paymentModule = createFacadeModuleFactory<PaymentConfig, PaymentModule>(namespace, (facade, config) => {
  const payment = {
    client: new PaymentSrvGrpcClient(config.config.client)
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
