import { protoMetadata as metaPackageIoRestorecommerceFulfillment } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/fulfillment";
import { protoMetadata as metaPackageIoRestorecommerceFulfillmentCourier } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/fulfillment_courier";
import { registerPackagesRecursive } from "../../../gql/protos";

export function registerTypings() {
  registerPackagesRecursive(
    metaPackageIoRestorecommerceFulfillment,
    metaPackageIoRestorecommerceFulfillmentCourier
  );
}
