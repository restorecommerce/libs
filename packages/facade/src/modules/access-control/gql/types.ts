import { protoMetadata as metaPackageIoRestorecommercePolicy } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/policy.js';
import { protoMetadata as metaPackageIoRestorecommerceRule } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/rule.js';
import { protoMetadata as metaPackageIoRestorecommerceOwnershipDomain } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/policy_set.js';
import { protoMetadata as metaPackageIoRestorecommercePolicySet } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/ownership_domain.js';
import { protoMetadata as metaPackageIoRestorecommerceAccessControl } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/access_control.js';
import { type ProtoMetadata, registerPackagesRecursive } from '../../../gql/index.js';
import { registerProtoMeta } from '@restorecommerce/kafka-client';

export const subServices: ProtoMetadata[] = [
  metaPackageIoRestorecommerceAccessControl,
  metaPackageIoRestorecommercePolicy,
  metaPackageIoRestorecommerceRule,
  metaPackageIoRestorecommerceOwnershipDomain,
  metaPackageIoRestorecommercePolicySet,
];

export const registerTypings = () => {
  registerPackagesRecursive(...subServices);
  registerProtoMeta(...subServices);
};
