import { protoMetadata as metaPackageIoRestorecommerceOstorage } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/ostorage";
import { registerPackagesRecursive, SubService } from "../../../gql/protos";

export function registerTypings() {
  registerPackagesRecursive(metaPackageIoRestorecommerceOstorage);
}

export const subServices: SubService[] = [
  {
    name: 'object',
    service: metaPackageIoRestorecommerceOstorage.fileDescriptor.service![0],
    queries: ['Get', 'List']
  }
]