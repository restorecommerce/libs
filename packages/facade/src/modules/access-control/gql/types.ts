import { metadata as metaPackageGoogleProtobufEmpty } from "@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/empty";
import { metadata as metaPackageGoogleProtobufStruct } from "@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/struct";
import { metadata as metaPackageGoogleProtobufAny } from "@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/any";
import { metadata as metaPackageIoRestorecommerceAttribute } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/attribute";
import { metadata as metaPackageIoRestorecommerceMeta } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/meta";
import { metadata as metaPackageIoRestorecommerceResourcebase } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/resource_base";
import { metadata as metaPackageIoRestorecommerceAuth } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/auth";
import { metadata as metaPackageIoRestorecommercePolicy } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/policy";
import { metadata as metaPackageIoRestorecommerceRule } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/rule";
import { metadata as metaPackageIoRestorecommercePolicy_set } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/policy_set";
import { metadata as metaPackageIoRestorecommerceAccess_control } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/access_control";
import { registerPackages } from "../../../gql/protos";

export function registerTypings() {
  registerPackages(
    metaPackageGoogleProtobufEmpty,
    metaPackageGoogleProtobufStruct,
    metaPackageGoogleProtobufAny,
    metaPackageIoRestorecommerceAttribute,
    metaPackageIoRestorecommerceMeta,
    metaPackageIoRestorecommerceAuth,
    metaPackageIoRestorecommerceResourcebase,
    metaPackageIoRestorecommerceRule,
    metaPackageIoRestorecommercePolicy,
    metaPackageIoRestorecommercePolicy_set,
    metaPackageIoRestorecommerceAccess_control
  );
}
