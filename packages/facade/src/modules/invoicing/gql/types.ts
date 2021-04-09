import { protoMetadata as metaPackageIoRestorecommerceInvoicing } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/invoice";
import { registerPackagesRecursive, SubService } from "../../../gql/protos";

export function registerTypings() {
  registerPackagesRecursive(metaPackageIoRestorecommerceInvoicing);
}

export const subServices: SubService[] = [
  {
    name: 'invoice',
    service: metaPackageIoRestorecommerceInvoicing.fileDescriptor.service![0],
    queries: ['Read']
  }
]