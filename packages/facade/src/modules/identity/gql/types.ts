import { protoMetadata as metaPackageIoRestorecommerceUser } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/user";
import { protoMetadata as metaPackageIoRestorecommerceRole } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/role";
import { protoMetadata as metaPackageIoRestorecommerceAuthentication_log } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/authentication_log";
import { protoMetadata as metaPackageIoRestorecommerceToken } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/token";
import { registerPackagesRecursive } from "../../../gql/protos";

export function registerTypings() {
  registerPackagesRecursive(
    metaPackageIoRestorecommerceUser,
    metaPackageIoRestorecommerceRole,
    metaPackageIoRestorecommerceAuthentication_log,
    metaPackageIoRestorecommerceToken,
  );
}
