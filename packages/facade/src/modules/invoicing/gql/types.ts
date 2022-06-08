import { protoMetadata as metaPackageIoRestorecommerceInvoicing } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/invoice";
import { ProtoMetadata, registerPackagesRecursive } from '../../../gql/protos';

export function registerTypings() {
  registerPackagesRecursive(...subServices);
}

export const subServices: ProtoMetadata[] = [
  metaPackageIoRestorecommerceInvoicing
]
