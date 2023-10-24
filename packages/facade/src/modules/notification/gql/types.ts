import { protoMetadata as metaPackageIoRestorecommerceNotification } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/notification.js';
import { type ProtoMetadata, registerPackagesRecursive } from '../../../gql/protos/index.js';
import { registerProtoMeta } from '@restorecommerce/kafka-client';

export const subServices: ProtoMetadata [] = [
  metaPackageIoRestorecommerceNotification
];

export const registerTypings = () => {
  registerPackagesRecursive(...subServices);
  registerProtoMeta(...subServices);
};
