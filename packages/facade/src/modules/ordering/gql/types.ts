import { protoMetadata as metaPackageIoRestorecommerceOrdering } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/order";
import { ProtoMetadata, registerPackagesRecursive } from '../../../gql/protos';

export function registerTypings() {
  registerPackagesRecursive(...subServices);
}

export const subServices: ProtoMetadata[] = [
  metaPackageIoRestorecommerceOrdering
]
