import { protoMetadata as metaPackageIoRestorecommerceOrdering } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/order";
import { registerPackagesRecursive, SubService} from "../../../gql/protos";

export function registerTypings() {
  registerPackagesRecursive(metaPackageIoRestorecommerceOrdering);
}

export const subServices: SubService[] = [
  {
    name: 'order',
    service: metaPackageIoRestorecommerceOrdering.fileDescriptor.service![0],
    queries: ['Read']
  }
]
