import { protoMetadata as metaPackageIoRestorecommerceFulfillment } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/fulfillment";
import { protoMetadata as metaPackageIoRestorecommerceFulfillmentCourier } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/fulfillment_courier";
import { protoMetadata as metaPackageIoRestorecommerceFulfillmentProduct } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/fulfillment_product";
import { ProtoMetadata, registerPackagesRecursive } from '../../../gql/protos';

export function registerTypings() {
  registerPackagesRecursive(...subServices);
}

export const subServices: ProtoMetadata[] = [
  metaPackageIoRestorecommerceFulfillment,
  metaPackageIoRestorecommerceFulfillmentCourier,
  metaPackageIoRestorecommerceFulfillmentProduct
];
