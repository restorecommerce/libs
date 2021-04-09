import { protoMetadata as metaPackageIoRestorecommercePayment } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/payment";
import { registerPackagesRecursive, SubService } from "../../../gql/protos";

export function registerTypings() {
  registerPackagesRecursive(metaPackageIoRestorecommercePayment);
}

export const subServices: SubService [] = [
  {
    name: 'service',
    service: metaPackageIoRestorecommercePayment.fileDescriptor.service![0],
    queries: []
  }
];