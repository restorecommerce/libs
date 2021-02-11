import { protoMetadata as metaPackageIoRestorecommercePolicy } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/policy";
import { protoMetadata as metaPackageIoRestorecommerceRule } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/rule";
import { protoMetadata as metaPackageIoRestorecommercePolicy_set } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/policy_set";
import { protoMetadata as metaPackageIoRestorecommerceAccess_control } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/access_control";
import { registerPackagesRecursive } from "../../../gql/protos";

export function registerTypings() {
  registerPackagesRecursive(
    metaPackageIoRestorecommerceRule,
    metaPackageIoRestorecommercePolicy,
    metaPackageIoRestorecommercePolicy_set,
    metaPackageIoRestorecommerceAccess_control
  );
}
