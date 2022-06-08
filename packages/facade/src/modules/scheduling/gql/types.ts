import { protoMetadata as metaPackageIoRestorecommerceScheduling } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/job";
import { ProtoMetadata, registerPackagesRecursive } from '../../../gql/protos';

export function registerTypings() {
  registerPackagesRecursive(...subServices);
}

export const subServices: ProtoMetadata[] = [
  metaPackageIoRestorecommerceScheduling
]
