import { metaPackageGoogleProtobuf as metaPackageGoogleProtobufEmpty } from "@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/empty";
import { metaPackageGoogleProtobuf as metaPackageGoogleProtobufStruct } from "@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/struct";
import { metaPackageGoogleProtobuf as metaPackageGoogleProtobufAny } from "@restorecommerce/rc-grpc-clients/dist/generated/google/protobuf/any";
import { metaPackageIoRestorecommerceAttribute } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/attribute";
import { metaPackageIoRestorecommerceMeta } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/meta";
import { metaPackageIoRestorecommerceResourcebase } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/resource_base";
import { metaPackageIoRestorecommerceAuth } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/auth";
import { metaPackageIoRestorecommercePolicy } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/policy";
import { metaPackageIoRestorecommerceRule } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/rule";
import { metaPackageIoRestorecommercePolicy_set } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/policy_set";
import { metaPackageIoRestorecommerceAccess_control } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/access_control";
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
