import { protoMetadata as metaPackageIoRestorecommercePayment } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/payment";
import { ProtoMetadata, registerPackagesRecursive } from '../../../gql/protos';

export function registerTypings() {
  registerPackagesRecursive(...subServices);
}

export const subServices: ProtoMetadata[] = [
  metaPackageIoRestorecommercePayment
];
