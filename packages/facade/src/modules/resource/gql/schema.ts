import { registerTypings } from "./types";
import {
  generateSchema,
  getGQLSchemas,
  getWhitelistBlacklistConfig,
  registerResolverSchema
} from "../../../gql/protos";
import { metaService as addressMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/address";
import { metaService as countryMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/country";
import { metaService as timezoneMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/timezone";
import { metaService as contact_point_typeMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point_type";
import { metaService as customerMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/customer";
import { metaService as contact_pointMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point";
import { metaService as localeMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/locale";
import { metaService as locationMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/location";
import { metaService as organizationMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/organization";
import { metaService as taxMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax";
import { metaService as tax_typeMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax_type";
import { metaService as commandMetaService } from "@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/command";
import { namespace, ResourceServiceConfig } from "../interfaces";

registerTypings();

export const schema = (cfg: ResourceServiceConfig) => {
  const subServices = [
    [addressMetaService, 'address', ['Read']],
    [countryMetaService, 'country', ['Read']],
    [timezoneMetaService, 'timezone', ['Read']],
    [contact_point_typeMetaService, 'contact_point_type', ['Read']],
    [customerMetaService, 'customer', ['Read']],
    [contact_pointMetaService, 'contact_point', ['Read']],
    [localeMetaService, 'locale', ['Read']],
    [locationMetaService, 'location', ['Read']],
    [organizationMetaService, 'organization', ['Read']],
    [taxMetaService, 'tax', ['Read']],
    [tax_typeMetaService, 'tax_type', ['Read']],
    [commandMetaService, 'command', ['Read']],
  ];

  subServices.forEach(([service, subspace, queryList]: any) => {
    const {mutations, queries} = getWhitelistBlacklistConfig(service, queryList, cfg)

    const schemas = getGQLSchemas(service);

    Object.keys(schemas).forEach(key => {
      registerResolverSchema(cfg.root ? subspace : namespace, key, schemas[key], !queries.has(key) && mutations.has(key), cfg.root ? undefined : subspace)
    })
  });

  if (cfg.root) {
    return generateSchema(subServices.map(srv => {
      const name = srv[1] as string;
      return {
        prefix: 'Resource' + name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase(),
        namespace: name
      } as any
    }));
  }

  return generateSchema([{prefix: 'Resource', namespace}]);
}
