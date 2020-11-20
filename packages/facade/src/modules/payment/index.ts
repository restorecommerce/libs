import { FederatedPaymentSchema } from './gql/index';
import { PaymentConfig, PaymentModule } from "./interfaces";
import { PaymentSrvGrpcClient } from "./grpc";
import { createFacadeModuleFactory } from "../../utils";

const moduleName = 'payment';

export const paymentModule = createFacadeModuleFactory<PaymentConfig, PaymentModule>(moduleName, (facade, config) => {
  const payment = {
    client: new PaymentSrvGrpcClient(config.config.client)
  };

  facade.addApolloService({
    name: moduleName,
    schema: FederatedPaymentSchema
  });

  facade.koa.use(async (ctx, next) => {
    ctx.payment = payment;
    await next();
  });
});
