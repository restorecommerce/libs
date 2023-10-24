import { protoMetadata as metaPackageIoRestorecommercePolicy } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/policy.js';
import { protoMetadata as metaPackageIoRestorecommerceRule } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/rule.js';
import { protoMetadata as metaPackageIoRestorecommercePolicy_set } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/policy_set.js';
import { protoMetadata as metaPackageIoRestorecommerceAccess_control } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/access_control.js';
import { type ProtoMetadata, registerPackagesRecursive } from '../../../gql/protos/index.js';
import { registerProtoMeta } from '@restorecommerce/kafka-client';

export const subServices: ProtoMetadata[] = [
  metaPackageIoRestorecommerceAccess_control,
  metaPackageIoRestorecommercePolicy,
  metaPackageIoRestorecommerceRule,
  metaPackageIoRestorecommercePolicy_set
];

export const registerTypings = () => {
  registerPackagesRecursive(...subServices);
  registerProtoMeta(...subServices);
};
