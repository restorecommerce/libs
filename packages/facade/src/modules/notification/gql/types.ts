import { protoMetadata as metaPackageIoRestorecommerceNotification } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/notification";
import { ProtoMetadata, registerPackagesRecursive } from '../../../gql/protos';

export function registerTypings() {
  registerPackagesRecursive(...subServices);
}

export const subServices: ProtoMetadata [] = [
  metaPackageIoRestorecommerceNotification
];
