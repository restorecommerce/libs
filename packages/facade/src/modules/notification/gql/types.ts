import { protoMetadata as metaPackageIoRestorecommerceNotification } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/notification";
import { registerPackagesRecursive, SubService } from "../../../gql/protos";

export function registerTypings() {
  registerPackagesRecursive(metaPackageIoRestorecommerceNotification);
}

export const subServices: SubService [] = [
  {
    name: 'service',
    service: metaPackageIoRestorecommerceNotification.fileDescriptor.service![0],
    queries: []
  }
];