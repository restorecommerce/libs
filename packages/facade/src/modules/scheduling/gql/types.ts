import { protoMetadata as metaPackageIoRestorecommerceScheduling } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/job";
import { registerPackagesRecursive, SubService } from "../../../gql/protos";

export function registerTypings() {
  registerPackagesRecursive(metaPackageIoRestorecommerceScheduling);
}

export const subServices: SubService[] = [
  {
    name: 'job',
    service: metaPackageIoRestorecommerceScheduling.fileDescriptor.service![0],
    queries: ['Read']
  }
]