import { protoMetadata as metaPackageIoRestorecommerceNotification } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/notification.js';
import { type ProtoMetadata, registerPackagesRecursive } from '../../../gql/protos/index.js';

export const subServices: ProtoMetadata [] = [
  metaPackageIoRestorecommerceNotification
];

export const registerTypings = () => {
  registerPackagesRecursive(...subServices);
};
