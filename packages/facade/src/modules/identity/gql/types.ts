import { protoMetadata as metaPackageIoRestorecommerceUser } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/user.js';
import { protoMetadata as metaPackageIoRestorecommerceRole } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/role.js';
import { protoMetadata as metaPackageIoRestorecommerceAuthentication_log } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/authentication_log.js';
import { protoMetadata as metaPackageIoRestorecommerceToken } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/token.js';
import { protoMetadata as metaPackageIoRestorecommerceOauth } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/oauth.js';
import { type ProtoMetadata, registerPackagesRecursive } from '../../../gql/protos/index.js';
import { registerProtoMeta } from '@restorecommerce/kafka-client';

export const subServices: ProtoMetadata[] = [
  metaPackageIoRestorecommerceUser,
  metaPackageIoRestorecommerceRole,
  metaPackageIoRestorecommerceAuthentication_log,
  metaPackageIoRestorecommerceToken,
  metaPackageIoRestorecommerceOauth,
];

export const registerTypings = () => {
  registerPackagesRecursive(...subServices);
  registerProtoMeta(...subServices);
};
