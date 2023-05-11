import { RestoreCommerceGrpcClient } from '@restorecommerce/rc-grpc-clients';
import {
  AddressServiceClient,
  AddressServiceDefinition,
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/address';
import {
  CountryServiceClient,
  CountryServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/country';
import {
  TimezoneServiceClient,
  TimezoneServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/timezone';
import {
  ContactPointTypeServiceClient,
  ContactPointTypeServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point_type';
import {
  CustomerServiceClient,
  CustomerServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/customer';
import {
  ContactPointServiceClient,
  ContactPointServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point';
import {
  LocaleServiceClient,
  LocaleServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/locale';
import {
  LocationServiceClient,
  LocationServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/location';
import {
  OrganizationServiceClient,
  OrganizationServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/organization';
import {
  TaxServiceClient,
  TaxServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax';
import {
  TaxTypeServiceClient,
  TaxTypeServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax_type';
import {
  CommandServiceClient,
  CommandServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/command';
import { GrpcClientConfig } from '@restorecommerce/grpc-client';

export class ResourceSrvGrpcClient extends RestoreCommerceGrpcClient {

  readonly address: AddressServiceClient;
  readonly country: CountryServiceClient;
  readonly timezone: TimezoneServiceClient;
  readonly contact_point_type: ContactPointTypeServiceClient;
  readonly customer: CustomerServiceClient;
  readonly contact_point: ContactPointServiceClient;
  readonly locale: LocaleServiceClient;
  readonly location: LocationServiceClient;
  readonly organization: OrganizationServiceClient;
  readonly tax: TaxServiceClient;
  readonly tax_type: TaxTypeServiceClient;
  readonly command: any;

  constructor(address: string, cfg: GrpcClientConfig) {
    super(address, cfg);

    this.address = this.createClient(cfg, AddressServiceDefinition, this.channel);
    this.country = this.createClient(cfg, CountryServiceDefinition, this.channel);
    this.timezone = this.createClient(cfg, TimezoneServiceDefinition, this.channel);
    this.contact_point_type = this.createClient(cfg, ContactPointTypeServiceDefinition, this.channel);
    this.customer = this.createClient(cfg, CustomerServiceDefinition, this.channel);
    this.contact_point = this.createClient(cfg, ContactPointServiceDefinition, this.channel);
    this.locale = this.createClient(cfg, LocaleServiceDefinition, this.channel);
    this.location = this.createClient(cfg, LocationServiceDefinition, this.channel);
    this.organization = this.createClient(cfg, OrganizationServiceDefinition, this.channel);
    this.tax = this.createClient(cfg, TaxServiceDefinition, this.channel);
    this.tax_type = this.createClient(cfg, TaxTypeServiceDefinition, this.channel);
    this.command = this.createClient(cfg, CommandServiceDefinition, this.channel);
  }

}
