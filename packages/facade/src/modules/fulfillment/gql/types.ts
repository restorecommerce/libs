import { protoMetadata as metaPackageIoRestorecommerceFulfillment } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/fulfillment";
import { protoMetadata as metaPackageIoRestorecommerceFulfillmentCourier } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/fulfillment_courier";
import { registerPackagesRecursive, SubService } from "../../../gql/protos";

export function registerTypings() {
  registerPackagesRecursive(
    metaPackageIoRestorecommerceFulfillment,
    metaPackageIoRestorecommerceFulfillmentCourier
  );
}

export const subServices: SubService[] = [
  {
    name: 'fulfillment',
    service: metaPackageIoRestorecommerceFulfillment.fileDescriptor.service![0],
    queries: ['getAllFulfillments', 'getLabels', 'trackFulfillment']
  },
  {
    name: 'fulfillment_courier',
    service: metaPackageIoRestorecommerceFulfillmentCourier.fileDescriptor.service![0],
    queries: ['Read']
  },
];
