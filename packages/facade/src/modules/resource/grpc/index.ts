import { RestoreCommerceGrpcClient } from '@restorecommerce/rc-grpc-clients';
import {
  ServiceClient as addressClient,
  ServiceDefinition as addressService,
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/address';
import {
  ServiceClient as countryClient,
  ServiceDefinition as countryService
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/country';
import {
  ServiceClient as timezoneClient,
  ServiceDefinition as timezoneService
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/timezone';
import {
  ServiceClient as contact_point_typeClient,
  ServiceDefinition as contact_point_typeService
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point_type';
import {
  ServiceClient as customerClient,
  ServiceDefinition as customerService
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/customer';
import {
  ServiceClient as contact_pointClient,
  ServiceDefinition as contact_pointService
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point';
import {
  ServiceClient as localeClient,
  ServiceDefinition as localeService
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/locale';
import {
  ServiceClient as locationClient,
  ServiceDefinition as locationService
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/location';
import {
  ServiceClient as organizationClient,
  ServiceDefinition as organizationService
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/organization';
import {
  ServiceClient as taxClient,
  ServiceDefinition as taxService
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax';
import {
  ServiceClient as tax_typeClient,
  ServiceDefinition as tax_typeService
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax_type';
import {
  ServiceClient as commandClient,
  ServiceDefinition as commandService
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/command';
import { GrpcClientConfig } from '@restorecommerce/grpc-client';

export class ResourceSrvGrpcClient extends RestoreCommerceGrpcClient {

  readonly address: addressClient;
  readonly country: countryClient;
  readonly timezone: timezoneClient;
  readonly contact_point_type: contact_point_typeClient;
  readonly customer: customerClient;
  readonly contact_point: contact_pointClient;
  readonly locale: localeClient;
  readonly location: locationClient;
  readonly organization: organizationClient;
  readonly tax: taxClient;
  readonly tax_type: tax_typeClient;
  readonly command: any;

  constructor(address: string, cfg: GrpcClientConfig) {
    super(address, cfg);

    this.address = this.createClient(cfg, addressService, this.channel);
    this.country = this.createClient(cfg, countryService, this.channel);
    this.timezone = this.createClient(cfg, timezoneService, this.channel);
    this.contact_point_type = this.createClient(cfg, contact_point_typeService, this.channel);
    this.customer = this.createClient(cfg, customerService, this.channel);
    this.contact_point = this.createClient(cfg, contact_pointService, this.channel);
    this.locale = this.createClient(cfg, localeService, this.channel);
    this.location = this.createClient(cfg, locationService, this.channel);
    this.organization = this.createClient(cfg, organizationService, this.channel);
    this.tax = this.createClient(cfg, taxService, this.channel);
    this.tax_type = this.createClient(cfg, tax_typeService, this.channel);
    this.command = this.createClient(cfg, commandService, this.channel);
  }

}
