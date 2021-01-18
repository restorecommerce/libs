import { metadata as metaPackageIoRestorecommerceAttribute } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/attribute";
import { metadata as metaPackageIoRestorecommerceMeta } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/meta";
import { metadata as metaPackageIoRestorecommerceResourcebase } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/resource_base";
import { metadata as metaPackageIoRestorecommerceAuth } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/auth";
import { metadata as metaPackageIoRestorecommerceUser } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/user";
import { metadata as metaPackageIoRestorecommerceRole } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/role";
import { metadata as metaPackageIoRestorecommerceAuthentication_log } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/authentication_log";
import { metadata as metaPackageIoRestorecommerceToken } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/token";
import { registerPackages } from "../../../gql/protos";

export function registerTypings() {
  registerPackages(
    metaPackageIoRestorecommerceAttribute,
    metaPackageIoRestorecommerceMeta,
    metaPackageIoRestorecommerceAuth,
    metaPackageIoRestorecommerceResourcebase,
    metaPackageIoRestorecommerceUser,
    metaPackageIoRestorecommerceRole,
    metaPackageIoRestorecommerceAuthentication_log,
    metaPackageIoRestorecommerceToken,
  );
}
