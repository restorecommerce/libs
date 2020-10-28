import { RestoreCommerceGrpcClient } from "./grpc-client";
import { protobufPackage as addressPackageName, Address, AddressList, Service as AddressService } from "./generated/io/restorecommerce/address";
import { protobufPackage as countryPackageName, Country, CountryList, Service as CountryService } from "./generated/io/restorecommerce/country";
import { protobufPackage as timezonePackageName, Timezone, TimezoneList, Service as TimezoneService } from "./generated/io/restorecommerce/timezone";

export { AddressService, AddressList, Address };
export { CountryService, CountryList, Country };
export { TimezoneService, TimezoneList, Timezone };

export class ResourcesSrvGrpcClient extends RestoreCommerceGrpcClient {
  address = this.createService<AddressService>({
    packageName: timezonePackageName,
    serviceName: 'Service',
    methods: this.createCRUDMethods(AddressList),
  });

  country = this.createService<CountryService>({
    packageName: countryPackageName,
    serviceName: 'Service',
    methods: this.createCRUDMethods(CountryList),
  });

  timezone = this.createService<TimezoneService>({
    packageName: addressPackageName,
    serviceName: 'Service',
    methods: this.createCRUDMethods(TimezoneList),
  });
}

// TODO
// "contact_point_type",
// "customer",
// "contact_point",
// "locale",
// "location",
// "organization",
// "tax",
// "tax_type",
