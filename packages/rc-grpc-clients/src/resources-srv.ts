import { RestoreCommerceGrpcClient } from "./grpc-client";
import { protobufPackage as timezonePackageName, TimezoneList, Service as TimezoneService } from "./generated/io/restorecommerce/timezone";
import { protobufPackage as addressPackageName, AddressList, Service as AddressService } from "./generated/io/restorecommerce/address";
import { protobufPackage as countryPackageName, CountryList, Service as CountryService } from "./generated/io/restorecommerce/country";

export class ResourcesSrvGrpcClient extends RestoreCommerceGrpcClient {
  address = this.createService<AddressService>({
    packageName: timezonePackageName,
    serviceName: 'Service',
    methods: this.createCRUDUMethods(AddressList),
  });

  country = this.createService<CountryService>({
    packageName: countryPackageName,
    serviceName: 'Service',
    methods: this.createCRUDUMethods(CountryList),
  });

  timezone = this.createService<TimezoneService>({
    packageName: addressPackageName,
    serviceName: 'Service',
    methods: this.createCRUDUMethods(TimezoneList),
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
