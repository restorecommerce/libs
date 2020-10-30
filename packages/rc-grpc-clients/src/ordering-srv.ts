import { RestoreCommerceGrpcClient } from "./grpc-client";
import {
  protobufPackage as orderingPackageName,
  Service as OrderingService,
  OrderList,
  OrderDataList,
  FulfillmentResults
} from "./generated/io/restorecommerce/order";

export class OrderingSrvGrpcClient extends RestoreCommerceGrpcClient {
  fulfillment = this.createService<OrderingService>({
    packageName: orderingPackageName,
    serviceName: 'Service',
    methods: {
      ...this.createCRUDMethods(OrderList),
      TriggerFulfillment: {
        type: 'unary',
        serialize: OrderDataList.encode,
        deserialize: FulfillmentResults.decode
      },
    },
  });
}
