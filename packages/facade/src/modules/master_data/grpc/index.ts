import { RestoreCommerceGrpcClient } from '@restorecommerce/rc-grpc-clients';
import {
  type AddressServiceClient,
  AddressServiceDefinition,
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/address.js';
import {
  type CountryServiceClient,
  CountryServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/country.js';
import {
  type TimezoneServiceClient,
  TimezoneServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/timezone.js';
import {
  type ContactPointTypeServiceClient,
  ContactPointTypeServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point_type.js';
import {
  type CustomerServiceClient,
  CustomerServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/customer.js';
import {
  type ContactPointServiceClient,
  ContactPointServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/contact_point.js';
import {
  type LocaleServiceClient,
  LocaleServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/locale.js';
import {
  type LocationServiceClient,
  LocationServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/location.js';
import {
  type OrganizationServiceClient,
  OrganizationServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/organization.js';
import {
  type ShopServiceClient,
  ShopServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/shop.js';
import {
  type TaxServiceClient,
  TaxServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax.js';
import {
  type TaxTypeServiceClient,
  TaxTypeServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/tax_type.js';
import {
  type UnitCodeServiceClient,
  UnitCodeServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/unit_code.js';
import {
  type TemplateServiceClient,
  TemplateServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/template.js';
import {
  type CredentialServiceClient,
  CredentialServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/credential.js';
import {
  type CurrencyServiceClient,
  CurrencyServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/currency.js';
import {
  type SettingServiceClient,
  SettingServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/setting.js';
import {
  CommandServiceDefinition
} from '@restorecommerce/rc-grpc-clients/dist/generated/io/restorecommerce/command.js';
import { type GrpcClientConfig } from '@restorecommerce/grpc-client';

export class ResourceSrvGrpcClient extends RestoreCommerceGrpcClient {
  readonly address: AddressServiceClient;
  readonly country: CountryServiceClient;
  readonly timezone: TimezoneServiceClient;
  readonly contact_point_type: ContactPointTypeServiceClient;
  readonly customer: CustomerServiceClient;
  readonly credential: CredentialServiceClient;
  readonly currency: CurrencyServiceClient;
  readonly contact_point: ContactPointServiceClient;
  readonly locale: LocaleServiceClient;
  readonly location: LocationServiceClient;
  readonly organization: OrganizationServiceClient;
  readonly shop: ShopServiceClient;
  readonly tax: TaxServiceClient;
  readonly tax_type: TaxTypeServiceClient;
  readonly unit_code: UnitCodeServiceClient;
  readonly template: TemplateServiceClient;
  readonly setting: SettingServiceClient;
  readonly command: any = undefined;

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
    this.shop = this.createClient(cfg, ShopServiceDefinition, this.channel);
    this.tax = this.createClient(cfg, TaxServiceDefinition, this.channel);
    this.tax_type = this.createClient(cfg, TaxTypeServiceDefinition, this.channel);
    this.unit_code = this.createClient(cfg, UnitCodeServiceDefinition, this.channel);
    this.template = this.createClient(cfg, TemplateServiceDefinition, this.channel);
    this.credential = this.createClient(cfg, CredentialServiceDefinition, this.channel);
    this.currency = this.createClient(cfg, CurrencyServiceDefinition, this.channel);
    this.setting = this.createClient(cfg, SettingServiceDefinition, this.channel);
    this.command = this.createClient(cfg, CommandServiceDefinition, this.channel);
  }

}
