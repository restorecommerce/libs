import { protoMetadata as metaPackageIoRestorecommerceAddress } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/address.js';
import { protoMetadata as metaPackageIoRestorecommerceCountry } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/country.js';
import { protoMetadata as metaPackageIoRestorecommerceTimezone } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/timezone.js';
import { protoMetadata as metaPackageIoRestorecommerceContact_point_type } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point_type.js';
import { protoMetadata as metaPackageIoRestorecommerceCustomer } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/customer.js';
import { protoMetadata as metaPackageIoRestorecommerceContact_point } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point.js';
import { protoMetadata as metaPackageIoRestorecommerceCredential } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/credential.js';
import { protoMetadata as metaPackageIoRestorecommerceLocale } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/locale.js';
import { protoMetadata as metaPackageIoRestorecommerceLocation } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/location.js';
import { protoMetadata as metaPackageIoRestorecommerceOrganization } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/organization.js';
import { protoMetadata as metaPackageIoRestorecommerceShop } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/shop.js';
import { protoMetadata as metaPackageIoRestorecommerceTax } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax.js';
import { protoMetadata as metaPackageIoRestorecommerceTax_type } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax_type.js';
import { protoMetadata as metaPackageIoRestorecommerceUnitCode } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/unit_code.js';
import { protoMetadata as metaPackageIoRestorecommerceTemplate } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/template.js';
import { protoMetadata as metaPackageIoRestorecommerceCommand } from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/command.js';
import { type ProtoMetadata, registerPackagesRecursive } from '../../../gql/protos/index.js';
import { registerProtoMeta } from '@restorecommerce/kafka-client';

export const subServices: ProtoMetadata[] = [
  metaPackageIoRestorecommerceAddress,
  metaPackageIoRestorecommerceCountry,
  metaPackageIoRestorecommerceTimezone,
  metaPackageIoRestorecommerceContact_point_type,
  metaPackageIoRestorecommerceCustomer,
  metaPackageIoRestorecommerceContact_point,
  metaPackageIoRestorecommerceCredential,
  metaPackageIoRestorecommerceLocale,
  metaPackageIoRestorecommerceLocation,
  metaPackageIoRestorecommerceOrganization,
  metaPackageIoRestorecommerceShop,
  metaPackageIoRestorecommerceTax_type,
  metaPackageIoRestorecommerceTax,
  metaPackageIoRestorecommerceUnitCode,
  metaPackageIoRestorecommerceTemplate,
  metaPackageIoRestorecommerceCommand,
];

export const registerTypings = () => {
  registerPackagesRecursive(...subServices);
  registerProtoMeta(...subServices);
};
