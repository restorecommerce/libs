import { protoMetadata as metaPackageIoRestorecommerceAddress } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/address.js';
import { protoMetadata as metaPackageIoRestorecommerceCountry } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/country.js';
import { protoMetadata as metaPackageIoRestorecommerceTimezone } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/timezone.js';
import { protoMetadata as metaPackageIoRestorecommerceContact_point_type } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point_type.js';
import { protoMetadata as metaPackageIoRestorecommerceCustomer } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/customer.js';
import { protoMetadata as metaPackageIoRestorecommerceContact_point } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point.js';
import { protoMetadata as metaPackageIoRestorecommerceLocale } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/locale.js';
import { protoMetadata as metaPackageIoRestorecommerceLocation } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/location.js';
import { protoMetadata as metaPackageIoRestorecommerceOrganization } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/organization.js';
import { protoMetadata as metaPackageIoRestorecommerceTax } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax.js';
import { protoMetadata as metaPackageIoRestorecommerceTax_type } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax_type.js';
import { protoMetadata as metaPackageIoRestorecommerceCommand } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/command.js';
import { protoMetadata as metaPackageIoRestorecommerceCode } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/code.js';
import { type ProtoMetadata, registerPackagesRecursive } from '../../../gql/protos/index.js';

export const subServices: ProtoMetadata[] = [
  metaPackageIoRestorecommerceAddress,
  metaPackageIoRestorecommerceCountry,
  metaPackageIoRestorecommerceTimezone,
  metaPackageIoRestorecommerceContact_point_type,
  metaPackageIoRestorecommerceCustomer,
  metaPackageIoRestorecommerceContact_point,
  metaPackageIoRestorecommerceLocale,
  metaPackageIoRestorecommerceLocation,
  metaPackageIoRestorecommerceOrganization,
  metaPackageIoRestorecommerceTax_type,
  metaPackageIoRestorecommerceTax,
  metaPackageIoRestorecommerceCommand,
  metaPackageIoRestorecommerceCode
];

export const registerTypings = () => {
  registerPackagesRecursive(...subServices);
};
