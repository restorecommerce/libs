import { protoMetadata as metaPackageIoRestorecommerceUser } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/user";
import { protoMetadata as metaPackageIoRestorecommerceRole } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/role";
import { protoMetadata as metaPackageIoRestorecommerceAuthentication_log } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/authentication_log";
import { protoMetadata as metaPackageIoRestorecommerceToken } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/token";
import { protoMetadata as metaPackageIoRestorecommerceOauth } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/oauth";
import { ProtoMetadata, registerPackagesRecursive } from '../../../gql/protos';
import { registerProtoMeta } from '@restorecommerce/kafka-client';

export function registerTypings() {
  registerPackagesRecursive(...subServices);
  registerProtoMeta(...subServices);
}

export const subServices: ProtoMetadata[] = [
  metaPackageIoRestorecommerceUser,
  metaPackageIoRestorecommerceRole,
  metaPackageIoRestorecommerceAuthentication_log,
  metaPackageIoRestorecommerceToken,
  metaPackageIoRestorecommerceOauth,
];
