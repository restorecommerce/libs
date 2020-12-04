import { Resolvers } from './schema.generated';
import { namespace, ResourceContext } from "../interfaces";
import {
  generateResolver,
  getAndGenerateResolvers,
  getGQLResolverFunctions,
  getWhitelistBlacklistConfig, MetaP, MetaS,
  registerResolverFunction,
} from "../../../gql/protos";
import {
  metaPackageIoRestorecommerceAddress,
  metaService as addressMetaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/address";
import {
  metaPackageIoRestorecommerceCountry,
  metaService as countryMetaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/country";
import {
  metaPackageIoRestorecommerceTimezone,
  metaService as timezoneMetaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/timezone";
import {
  metaPackageIoRestorecommerceContact_point_type,
  metaService as contact_point_typeMetaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point_type";
import {
  metaPackageIoRestorecommerceCustomer,
  metaService as customerMetaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/customer";
import {
  metaPackageIoRestorecommerceContact_point,
  metaService as contact_pointMetaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point";
import {
  metaPackageIoRestorecommerceLocale,
  metaService as localeMetaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/locale";
import {
  metaPackageIoRestorecommerceLocation,
  metaService as locationMetaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/location";
import {
  metaPackageIoRestorecommerceOrganization,
  metaService as organizationMetaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/organization";
import {
  metaPackageIoRestorecommerceTax,
  metaService as taxMetaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax";
import {
  metaPackageIoRestorecommerceTax_type,
  metaService as tax_typeMetaService
} from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax_type";
import { ResourceSrvGrpcClient } from "../grpc";
import { createServiceConfig } from "@restorecommerce/service-config";
import { join } from "path";

export const resolvers: () => Resolvers = () => {
  const serviceConfig = createServiceConfig(join(process.cwd(), 'tests'));

  [
    [addressMetaService, metaPackageIoRestorecommerceAddress, 'address'],
    [countryMetaService, metaPackageIoRestorecommerceCountry, 'country'],
    [timezoneMetaService, metaPackageIoRestorecommerceTimezone, 'timezone'],
    [contact_point_typeMetaService, metaPackageIoRestorecommerceContact_point_type, 'contact_point_type'],
    [customerMetaService, metaPackageIoRestorecommerceCustomer, 'customer'],
    [contact_pointMetaService, metaPackageIoRestorecommerceContact_point, 'contact_point'],
    [localeMetaService, metaPackageIoRestorecommerceLocale, 'locale'],
    [locationMetaService, metaPackageIoRestorecommerceLocation, 'location'],
    [organizationMetaService, metaPackageIoRestorecommerceOrganization, 'organization'],
    [taxMetaService, metaPackageIoRestorecommerceTax, 'tax'],
    [tax_typeMetaService, metaPackageIoRestorecommerceTax_type, 'tax_type'],
  ].forEach(([meta, pack, subspace]: any) => {
    const {mutations, queries} = getWhitelistBlacklistConfig(meta, [], serviceConfig.get(namespace as any))

    const func = getGQLResolverFunctions<ResourceSrvGrpcClient, ResourceContext>(meta, pack, namespace, subspace || namespace);

    Object.keys(func).forEach(k => {
      registerResolverFunction(namespace as string, k, func[k], !queries.has(k) && mutations.has(k), subspace);
    });
  });

  /*
  const addressResolvers: Resolvers = getAndGenerateResolvers<ResourceSrvGrpcClient, ResourceContext>(addressMetaService, metaPackageIoRestorecommerceAddress, namespace, 'address');
  const countryResolvers: Resolvers = getAndGenerateResolvers<ResourceSrvGrpcClient, ResourceContext>(countryMetaService, metaPackageIoRestorecommerceCountry, namespace, 'country');
  const timezoneResolvers: Resolvers = getAndGenerateResolvers<ResourceSrvGrpcClient, ResourceContext>(timezoneMetaService, metaPackageIoRestorecommerceTimezone, namespace, 'timezone');
  const contact_point_typeResolvers: Resolvers = getAndGenerateResolvers<ResourceSrvGrpcClient, ResourceContext>(contact_point_typeMetaService, metaPackageIoRestorecommerceContact_point_type, namespace, 'contact_point_type');
  const customerResolvers: Resolvers = getAndGenerateResolvers<ResourceSrvGrpcClient, ResourceContext>(customerMetaService, metaPackageIoRestorecommerceCustomer, namespace, 'customer');
  const contact_pointResolvers: Resolvers = getAndGenerateResolvers<ResourceSrvGrpcClient, ResourceContext>(contact_pointMetaService, metaPackageIoRestorecommerceContact_point, namespace, 'contact_point');
  const localeResolvers: Resolvers = getAndGenerateResolvers<ResourceSrvGrpcClient, ResourceContext>(localeMetaService, metaPackageIoRestorecommerceLocale, namespace, 'locale');
  const locationResolvers: Resolvers = getAndGenerateResolvers<ResourceSrvGrpcClient, ResourceContext>(locationMetaService, metaPackageIoRestorecommerceLocation, namespace, 'location');
  const organizationResolvers: Resolvers = getAndGenerateResolvers<ResourceSrvGrpcClient, ResourceContext>(organizationMetaService, metaPackageIoRestorecommerceOrganization, namespace, 'organization');
  const taxResolvers: Resolvers = getAndGenerateResolvers<ResourceSrvGrpcClient, ResourceContext>(taxMetaService, metaPackageIoRestorecommerceTax, namespace, 'tax');
  const tax_typeResolvers: Resolvers = getAndGenerateResolvers<ResourceSrvGrpcClient, ResourceContext>(tax_typeMetaService, metaPackageIoRestorecommerceTax_type, namespace, 'tax_type');
  */

  return generateResolver(namespace);
}
