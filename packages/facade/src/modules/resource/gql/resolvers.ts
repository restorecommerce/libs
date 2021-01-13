import { Resolvers } from './schema.generated';
import { namespace, ResourceServiceConfig, ResourceContext } from "../interfaces";
import {
  generateResolver,
  getGQLResolverFunctions,
  getWhitelistBlacklistConfig,
  registerResolverFunction,
} from "../../../gql/protos";
import {
  metadata as metaPackageIoRestorecommerceAddress,
  metaService as addressMetaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/address";
import {
  metadata as metaPackageIoRestorecommerceCountry,
  metaService as countryMetaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/country";
import {
  metadata as metaPackageIoRestorecommerceTimezone,
  metaService as timezoneMetaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/timezone";
import {
  metadata as metaPackageIoRestorecommerceContact_point_type,
  metaService as contact_point_typeMetaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point_type";
import {
  metadata as metaPackageIoRestorecommerceCustomer,
  metaService as customerMetaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/customer";
import {
  metadata as metaPackageIoRestorecommerceContact_point,
  metaService as contact_pointMetaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point";
import {
  metadata as metaPackageIoRestorecommerceLocale,
  metaService as localeMetaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/locale";
import {
  metadata as metaPackageIoRestorecommerceLocation,
  metaService as locationMetaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/location";
import {
  metadata as metaPackageIoRestorecommerceOrganization,
  metaService as organizationMetaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/organization";
import {
  metadata as metaPackageIoRestorecommerceTax,
  metaService as taxMetaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax";
import {
  metadata as metaPackageIoRestorecommerceTax_type,
  metaService as tax_typeMetaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax_type";
import { ResourceSrvGrpcClient } from "../grpc";

export const resolvers: (cfg: ResourceServiceConfig) => Resolvers = (cfg: ResourceServiceConfig) => {
  const subServices = [
    [addressMetaService, metaPackageIoRestorecommerceAddress, 'address', ['Read']],
    [countryMetaService, metaPackageIoRestorecommerceCountry, 'country', ['Read']],
    [timezoneMetaService, metaPackageIoRestorecommerceTimezone, 'timezone', ['Read']],
    [contact_point_typeMetaService, metaPackageIoRestorecommerceContact_point_type, 'contact_point_type', ['Read']],
    [customerMetaService, metaPackageIoRestorecommerceCustomer, 'customer', ['Read']],
    [contact_pointMetaService, metaPackageIoRestorecommerceContact_point, 'contact_point', ['Read']],
    [localeMetaService, metaPackageIoRestorecommerceLocale, 'locale', ['Read']],
    [locationMetaService, metaPackageIoRestorecommerceLocation, 'location', ['Read']],
    [organizationMetaService, metaPackageIoRestorecommerceOrganization, 'organization', ['Read']],
    [taxMetaService, metaPackageIoRestorecommerceTax, 'tax', ['Read']],
    [tax_typeMetaService, metaPackageIoRestorecommerceTax_type, 'tax_type', ['Read']],
  ];

  subServices.forEach(([meta, pack, subspace, queryList]: any) => {
    const {mutations, queries} = getWhitelistBlacklistConfig(meta, queryList, cfg)

    const func = getGQLResolverFunctions<ResourceSrvGrpcClient, ResourceContext>(meta, pack, namespace, subspace || namespace);

    Object.keys(func).forEach(k => {
      registerResolverFunction(cfg.root ? subspace : namespace, k, func[k], !queries.has(k) && mutations.has(k), cfg.root ? undefined : subspace);
    });
  });

  if (cfg.root) {
    return generateResolver(...subServices.map(srv => srv[2] as string));
  }

  return generateResolver(namespace);
}
