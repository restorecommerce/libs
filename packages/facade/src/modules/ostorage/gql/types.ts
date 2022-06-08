import { protoMetadata as metaPackageIoRestorecommerceOstorage } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/ostorage";
import { ProtoMetadata, registerPackagesRecursive } from '../../../gql/protos';

export function registerTypings() {
  registerPackagesRecursive(...subServices);
}

export const subServices: ProtoMetadata[] = [
  metaPackageIoRestorecommerceOstorage
]
