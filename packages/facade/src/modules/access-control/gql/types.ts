import { protoMetadata as metaPackageIoRestorecommercePolicy } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/policy";
import { protoMetadata as metaPackageIoRestorecommerceRule } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/rule";
import { protoMetadata as metaPackageIoRestorecommercePolicy_set } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/policy_set";
import { protoMetadata as metaPackageIoRestorecommerceAccess_control } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/access_control";
import { registerPackagesRecursive, SubService } from "../../../gql/protos";

export function registerTypings() {
  registerPackagesRecursive(
    metaPackageIoRestorecommerceRule,
    metaPackageIoRestorecommercePolicy,
    metaPackageIoRestorecommercePolicy_set,
    metaPackageIoRestorecommerceAccess_control
  );
}

export const subServices: SubService[] = [
  {
    name: 'access_control',
    service: metaPackageIoRestorecommerceAccess_control.fileDescriptor.service![0],
    queries: ['IsAllowed', 'WhatIsAllowed']
  },
  {
    name: 'policy',
    service: metaPackageIoRestorecommercePolicy.fileDescriptor.service![0],
    queries: ['Read']
  },
  {
    name: 'rule',
    service: metaPackageIoRestorecommerceRule.fileDescriptor.service![0],
    queries: ['Read']
  },
  {
    name: 'policy_set',
    service: metaPackageIoRestorecommercePolicy_set.fileDescriptor.service![0],
    queries: ['Read']
  },
];
