import { RestoreCommerceGrpcClient } from "@restorecommerce/rc-grpc-client";
import { TimezoneList, Service as TimezoneService } from "./generated/io/restorecommerce/timezone";
import { AddressList, Service as AddressService } from "./generated/io/restorecommerce/address";
import { CountryList, Service as CountryService } from "./generated/io/restorecommerce/country";

export * from '@restorecommerce/grpc-client';

export class ResourcesSrvGrpcClient extends RestoreCommerceGrpcClient {
  address = this.createService<AddressService>({
    packageName: 'io.restorecommerce.address',
    serviceName: 'Service',
    methods: this.createCRUDUMethods(AddressList),
  });

  country = this.createService<CountryService>({
    packageName: 'io.restorecommerce.country',
    serviceName: 'Service',
    methods: this.createCRUDUMethods(CountryList),
  });

  timezone = this.createService<TimezoneService>({
    packageName: 'io.restorecommerce.timezone',
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
