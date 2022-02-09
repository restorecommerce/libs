import { protoMetadata as metaPackageIoRestorecommerceUser } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/user";
import { protoMetadata as metaPackageIoRestorecommerceRole } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/role";
import { protoMetadata as metaPackageIoRestorecommerceAuthentication_log } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/authentication_log";
import { protoMetadata as metaPackageIoRestorecommerceToken } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/token";
import { protoMetadata as metaPackageIoRestorecommerceOauth } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/oauth";
import { registerPackagesRecursive, SubService } from "../../../gql/protos";

export function registerTypings() {
  registerPackagesRecursive(
    metaPackageIoRestorecommerceUser,
    metaPackageIoRestorecommerceRole,
    metaPackageIoRestorecommerceAuthentication_log,
    metaPackageIoRestorecommerceToken,
    metaPackageIoRestorecommerceOauth,
  );
}

export const subServices: SubService[] = [
  {
    name: 'user',
    service: metaPackageIoRestorecommerceUser.fileDescriptor.service![0],
    queries: ['Read', 'Find', 'FindByRole', 'FindByToken']
  },
  {
    name: 'role',
    service: metaPackageIoRestorecommerceRole.fileDescriptor.service![0],
    queries: ['Read']
  },
  {
    name: 'authentication_log',
    service: metaPackageIoRestorecommerceAuthentication_log.fileDescriptor.service![0],
    queries: ['Read']
  },
  {
    name: 'token',
    service: metaPackageIoRestorecommerceToken.fileDescriptor.service![0],
    queries: ['find']
  },
];
