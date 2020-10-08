import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { RestoreCommerceBaseContext } from '../../../interfaces';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

/** Effect resulting from a rule, policy or policy set */
export enum AccessControlEffectType {
  /** Permit operation */
  Permit = 'PERMIT',
  /** Deny operation */
  Deny = 'DENY'
}

/** Generic command resource. */
export type AccessControlnputTargetType = {
  /** Entity requesting access. */
  subject?: Maybe<Array<Maybe<InputAttribute>>>;
  /** Targeted resources */
  resources?: Maybe<Array<Maybe<InputAttribute>>>;
  /** Targeted action */
  action?: Maybe<Array<Maybe<InputAttribute>>>;
};

/** Generic command resource. */
export type AccessControlTargetType = {
  __typename?: 'AccessControlTargetType';
  /** Entity requesting access. */
  subject?: Maybe<Array<Maybe<Attribute>>>;
  /** Targeted resources */
  resources?: Maybe<Array<Maybe<Attribute>>>;
  /** Targeted action */
  action?: Maybe<Array<Maybe<Attribute>>>;
};

export enum AccrueSchemeType {
  /** First term */
  FirstTerm = 'FIRST_TERM',
  /** Every term */
  EveryTerm = 'EVERY_TERM'
}

export type ActivateDevicesInput = {
  ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ActivateDevicesPayload = {
  __typename?: 'activateDevicesPayload';
  status?: Maybe<Scalars['String']>;
  error?: Maybe<Error>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ActivateUserInput = {
  name?: Maybe<Scalars['String']>;
  activation_code?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ActivateUserPayload = {
  __typename?: 'activateUserPayload';
  activationStatus?: Maybe<Scalars['String']>;
  error?: Maybe<Error>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ActivateUsersInput = {
  listOfUserIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ActivateUsersPayload = {
  __typename?: 'activateUsersPayload';
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

/** additional address fields */
export type AdditionalAddressInput = {
  /** Longitude */
  field1?: Maybe<Scalars['String']>;
  /** Latitude */
  field2?: Maybe<Scalars['String']>;
};

/** additional address fields */
export type AdditionalAddressOutput = {
  __typename?: 'additionalAddressOutput';
  /** Longitude */
  field1?: Maybe<Scalars['String']>;
  /** Latitude */
  field2?: Maybe<Scalars['String']>;
};

/** Address message description */
export type AddressInputType = {
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** Postal code */
  postcode?: Maybe<Scalars['String']>;
  /** Country */
  country_id?: Maybe<Scalars['String']>;
  /** Locality */
  locality?: Maybe<Scalars['String']>;
  /** Street address */
  street?: Maybe<Scalars['String']>;
  /** building number */
  building_number?: Maybe<Scalars['String']>;
  /** Region address */
  region?: Maybe<Scalars['String']>;
  /** Longitude */
  altitude?: Maybe<Scalars['Float']>;
  /** Geographical coordinates */
  geo_coordinates?: Maybe<GeoPointInputType>;
  /** additional address input fields */
  addressAddition?: Maybe<AdditionalAddressInput>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
};

/** Address message description */
export type AddressType = {
  __typename?: 'AddressType';
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** Postal code */
  postcode?: Maybe<Scalars['String']>;
  /** Country */
  country_id?: Maybe<Scalars['String']>;
  /** Locality */
  locality?: Maybe<Scalars['String']>;
  /** Street address */
  street?: Maybe<Scalars['String']>;
  /** building number */
  building_number?: Maybe<Scalars['String']>;
  /** Region address */
  region?: Maybe<Scalars['String']>;
  /** Longitude */
  altitude?: Maybe<Scalars['Float']>;
  /** Geographical coordinates */
  geo_coordinates?: Maybe<GeoPointType>;
  /** Country */
  country?: Maybe<CountryType>;
  /** additional address output fields */
  addressAddition?: Maybe<AdditionalAddressOutput>;
  /** Meta info */
  meta?: Maybe<Meta>;
};

export type AddressUpdateInputType = {
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** Postal code */
  postcode?: Maybe<Scalars['String']>;
  /** Country */
  country_id?: Maybe<Scalars['String']>;
  /** Locality */
  locality?: Maybe<Scalars['String']>;
  /** Street address */
  street?: Maybe<Scalars['String']>;
  /** building number */
  building_number?: Maybe<Scalars['String']>;
  /** Region address */
  region?: Maybe<Scalars['String']>;
  /** Longitude */
  altitude?: Maybe<Scalars['Float']>;
  /** Geographical coordinates */
  geo_coordinates?: Maybe<GeoPointInputType>;
  /** additional address input fields */
  addressAddition?: Maybe<AdditionalAddressInput>;
};

/** Address for registering User */
export type AddressuserInputType = {
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** Postal code */
  postcode?: Maybe<Scalars['String']>;
  /** Country */
  country_id?: Maybe<Scalars['String']>;
  /** Locality */
  locality?: Maybe<Scalars['String']>;
  /** Street address */
  street?: Maybe<Scalars['String']>;
  /** building number */
  building_number?: Maybe<Scalars['String']>;
  /** Region address */
  region?: Maybe<Scalars['String']>;
  /** Longitude */
  altitude?: Maybe<Scalars['Float']>;
  /** Geographical coordinates */
  geo_coordinates?: Maybe<GeoPointInputType>;
  /** additional address input fields */
  addressAddition?: Maybe<AdditionalAddressInput>;
};

export type AdministrativeRoomSkipCancelInput = {
  /** Organization name */
  organization?: Maybe<Scalars['String']>;
  /** Hotel name */
  hotel?: Maybe<Scalars['String']>;
  /** Skip cancellations (room per date) */
  skipCancels?: Maybe<Array<Maybe<SkipCancelInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AdministrativeRoomSkipCancelPayload = {
  __typename?: 'administrativeRoomSkipCancelPayload';
  status?: Maybe<Scalars['String']>;
  error?: Maybe<Error>;
  clientMutationId?: Maybe<Scalars['String']>;
};

/** An ID-value attribute */
export type Attribute = {
  __typename?: 'Attribute';
  /** Attribute ID */
  id?: Maybe<Scalars['String']>;
  /** Attribute value */
  value?: Maybe<Scalars['String']>;
};

/** Delay between retries */
export type BackOff = {
  /** Fixed or Exponential delay */
  type?: Maybe<BackOffEnum>;
  /** time until retry in milliseconds */
  delay?: Maybe<Scalars['Int']>;
};

/** backOff enum type */
export enum BackOffEnum {
  /** retry with same delay */
  Fixed = 'FIXED',
  /** retry with exponential delay */
  Exponential = 'EXPONENTIAL'
}

/** Delay between retries */
export type BackOffOutputType = {
  __typename?: 'BackOffOutputType';
  /** Fixed or Exponential delay */
  type?: Maybe<BackOffEnum>;
  /** time until retry in milliseconds */
  delay?: Maybe<Scalars['Int']>;
};

export type BindLocationsInput = {
  parent?: Maybe<Scalars['String']>;
  child?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type BindLocationsPayload = {
  __typename?: 'bindLocationsPayload';
  status?: Maybe<Scalars['String']>;
  error?: Maybe<Error>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type BindOrganizationsInput = {
  parent?: Maybe<Scalars['String']>;
  child?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type BindOrganizationsPayload = {
  __typename?: 'bindOrganizationsPayload';
  status?: Maybe<Scalars['String']>;
  error?: Maybe<Error>;
  clientMutationId?: Maybe<Scalars['String']>;
};

/** BucketNames */
export enum BucketNames {
  Usercontent = 'usercontent',
  Invoices = 'invoices'
}

export type CancelContractsInput = {
  /** An array of Contract IDs */
  listOfContractIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CancelContractsPayload = {
  __typename?: 'cancelContractsPayload';
  status?: Maybe<Scalars['String']>;
  error?: Maybe<Error>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ChangePasswordInput = {
  id?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  new_password?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ChangePasswordPayload = {
  __typename?: 'changePasswordPayload';
  passChangeStatus?: Maybe<Scalars['String']>;
  error?: Maybe<Error>;
  clientMutationId?: Maybe<Scalars['String']>;
};

/** A parameter of a system command. */
export type CommandInputParameter = {
  /** Command field. */
  field?: Maybe<Scalars['String']>;
  /** Field description */
  description?: Maybe<Scalars['String']>;
  /** Field data type */
  type?: Maybe<CommandParameterFieldType>;
  /** Nested parameters for `object_value` */
  properties?: Maybe<Scalars['JSON']>;
};

/** Generic command resource. */
export type CommandInputType = {
  /** Command name. */
  name?: Maybe<Scalars['String']>;
  /** Command-specific parameters. */
  parameters?: Maybe<Array<Maybe<CommandInputParameter>>>;
  /** Command description. */
  description?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
};

/** A parameter of a system command. */
export type CommandParameter = {
  __typename?: 'CommandParameter';
  /** Command field. */
  field?: Maybe<Scalars['String']>;
  /** Field description */
  description?: Maybe<Scalars['String']>;
  /** Field data type */
  type?: Maybe<CommandParameterFieldType>;
  /** Nested parameters for `object_value` */
  properties?: Maybe<Scalars['JSON']>;
};

export enum CommandParameterFieldType {
  BooleanValue = 'boolean_value',
  ObjectValue = 'object_value',
  ArrayValue = 'array_value',
  NumberValue = 'number_value',
  StringValue = 'string_value'
}

/** Generic command resource. */
export type CommandType = {
  __typename?: 'CommandType';
  /** Command resource ID. */
  id?: Maybe<Scalars['String']>;
  /** Meta info */
  meta?: Maybe<Meta>;
  /** Command name. */
  name?: Maybe<Scalars['String']>;
  /** Command-specific parameters. */
  parameters?: Maybe<Array<Maybe<CommandParameter>>>;
  /** Command description. */
  description?: Maybe<Scalars['String']>;
};

export type ConfirmEmailChangeInput = {
  name?: Maybe<Scalars['String']>;
  activationCode?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ConfirmEmailChangePayload = {
  __typename?: 'confirmEmailChangePayload';
  status?: Maybe<Scalars['String']>;
  error?: Maybe<Error>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ConfirmPasswordChangeInput = {
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  activation_code?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ConfirmPasswordChangePayload = {
  __typename?: 'confirmPasswordChangePayload';
  status?: Maybe<Scalars['String']>;
  error?: Maybe<Error>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ConfirmUserInvitationInput = {
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  activationCode?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ConfirmUserInvitationPayload = {
  __typename?: 'confirmUserInvitationPayload';
  status?: Maybe<Scalars['String']>;
  error?: Maybe<Error>;
  clientMutationId?: Maybe<Scalars['String']>;
};

/** ContactPoints message description */
export type ContactPointsInputType = {
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** Physical address */
  physical_address_id?: Maybe<Scalars['String']>;
  /** Website */
  website?: Maybe<Scalars['String']>;
  /** Email address */
  email?: Maybe<Scalars['String']>;
  /** Type of contact point */
  contact_point_type_id?: Maybe<Scalars['String']>;
  /** ID of VAT */
  vat_id?: Maybe<Scalars['String']>;
  /** International Standard Industrial Classification V4 */
  isic_v4?: Maybe<Scalars['String']>;
  /** Tax ID */
  tax_id?: Maybe<Scalars['String']>;
  /** Telephone number */
  telephone?: Maybe<Scalars['String']>;
  /** Locale settings */
  locale_id?: Maybe<Scalars['String']>;
  /** Timezone */
  timezone_id?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
};

/** ContactPoints message description */
export type ContactPointsType = {
  __typename?: 'ContactPointsType';
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** Physical address */
  physical_address_id?: Maybe<Scalars['String']>;
  /** Website */
  website?: Maybe<Scalars['String']>;
  /** Email address */
  email?: Maybe<Scalars['String']>;
  /** Type of contact point */
  contact_point_type_id?: Maybe<Scalars['String']>;
  /** ID of VAT */
  vat_id?: Maybe<Scalars['String']>;
  /** International Standard Industrial Classification V4 */
  isic_v4?: Maybe<Scalars['String']>;
  /** Tax ID */
  tax_id?: Maybe<Scalars['String']>;
  /** Telephone number */
  telephone?: Maybe<Scalars['String']>;
  /** Locale settings */
  locale_id?: Maybe<Scalars['String']>;
  /** Timezone */
  timezone_id?: Maybe<Scalars['String']>;
  /** Physical address */
  physical_address?: Maybe<AddressType>;
  /** Type of contact point (resolved) */
  contact_point_type?: Maybe<TypeOfContactPointType>;
  /** User locale settings (default is "de-DE") */
  locale?: Maybe<LocaleType>;
  /** Contact timezone */
  timezone?: Maybe<TimezoneType>;
  /** Meta info */
  meta?: Maybe<Meta>;
};

/** ContactPoints message description */
export type ContactPointsUpdateInputType = {
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** Physical address */
  physical_address_id?: Maybe<Scalars['String']>;
  /** Website */
  website?: Maybe<Scalars['String']>;
  /** Email address */
  email?: Maybe<Scalars['String']>;
  /** Type of contact point */
  contact_point_type_id?: Maybe<Scalars['String']>;
  /** ID of VAT */
  vat_id?: Maybe<Scalars['String']>;
  /** International Standard Industrial Classification V4 */
  isic_v4?: Maybe<Scalars['String']>;
  /** Tax ID */
  tax_id?: Maybe<Scalars['String']>;
  /** Telephone number */
  telephone?: Maybe<Scalars['String']>;
  /** Locale settings */
  locale_id?: Maybe<Scalars['String']>;
  /** Timezone */
  timezone_id?: Maybe<Scalars['String']>;
};

/** ContactPoints message description */
export type ContactPointsUserInputType = {
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** Website */
  website?: Maybe<Scalars['String']>;
  /** Email address */
  email?: Maybe<Scalars['String']>;
  /** Type of contact point */
  contact_point_type_id?: Maybe<Scalars['String']>;
  /** Telephone number */
  telephone?: Maybe<Scalars['String']>;
  /** Locale settings */
  locale_id?: Maybe<Scalars['String']>;
  /** Timezone */
  timezone_id?: Maybe<Scalars['String']>;
  /** Address associated with this Contact Point */
  address?: Maybe<AddressuserInputType>;
};

/** Contract proto description */
export type ContractInputType = {
  /** Contract ID */
  id?: Maybe<Scalars['String']>;
  /** Contract name */
  name?: Maybe<Scalars['String']>;
  /** Contract description (optional) */
  description?: Maybe<Scalars['String']>;
  /** Xingular Customer ID */
  xingular_customer_id?: Maybe<Scalars['String']>;
  /** Date custom scalar type */
  termination_date?: Maybe<Scalars['Date']>;
  /** Status of Contract, Active or Cancellation pending */
  status?: Maybe<ContractStatus>;
  /** start date of the contract */
  start_date?: Maybe<Scalars['Date']>;
  /** Invoicing Term */
  invoicing_term?: Maybe<InvoicingTermEnum>;
  /** Invoicing delay, number of days after the term when the invoice should be generated */
  invoicing_delay?: Maybe<Scalars['Int']>;
  /** length of contract */
  term?: Maybe<Scalars['Int']>;
  /** Invoicing scheme */
  invoicing_scheme?: Maybe<InvoicingSchemeEnum>;
  /** list of product associations */
  product_associations?: Maybe<Array<Maybe<ProductAssoction>>>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
};

export enum ContractStatus {
  /** Contract is yet to be activated */
  PendingActivation = 'PENDING_ACTIVATION',
  /** Contract is active */
  Active = 'ACTIVE',
  /** Contract is under pending cancellation */
  PendingCancellation = 'PENDING_CANCELLATION',
  /** Contract is cancelled */
  Cancelled = 'CANCELLED'
}

/** Contract proto description */
export type ContractType = {
  __typename?: 'ContractType';
  /** Contract ID */
  id?: Maybe<Scalars['String']>;
  /** Contract name */
  name?: Maybe<Scalars['String']>;
  /** Contract description (optional) */
  description?: Maybe<Scalars['String']>;
  /** Xingular Customer ID */
  xingular_customer_id?: Maybe<Scalars['String']>;
  /** Date custom scalar type */
  termination_date?: Maybe<Scalars['Date']>;
  /** Status of Contract, Active or Cancellation pending */
  status?: Maybe<ContractStatus>;
  /** start date of the contract */
  start_date?: Maybe<Scalars['Date']>;
  /** Invoicing Term */
  invoicing_term?: Maybe<InvoicingTermEnum>;
  /** Invoicing delay, number of days after the term when the invoice should be generated */
  invoicing_delay?: Maybe<Scalars['Int']>;
  /** length of contract */
  term?: Maybe<Scalars['Int']>;
  /** Invoicing scheme */
  invoicing_scheme?: Maybe<InvoicingSchemeEnum>;
  /** list of product associations */
  product_associations?: Maybe<Array<Maybe<ProductAssociation>>>;
  xingular_customer?: Maybe<XingularCustomerType>;
  /** Meta info */
  meta?: Maybe<Meta>;
};

/** ContactPoints message description */
export type ContractUpdateInputType = {
  /** Contract ID */
  id?: Maybe<Scalars['String']>;
  /** Contract name */
  name?: Maybe<Scalars['String']>;
  /** Contract description (optional) */
  description?: Maybe<Scalars['String']>;
  /** Xingular Customer ID */
  xingular_customer_id?: Maybe<Scalars['String']>;
  /** Date custom scalar type */
  termination_date?: Maybe<Scalars['Date']>;
  /** Status of Contract, Active or Cancellation pending */
  status?: Maybe<ContractStatus>;
  /** start date of the contract */
  start_date?: Maybe<Scalars['Date']>;
  /** Invoicing Term */
  invoicing_term?: Maybe<InvoicingTermEnum>;
  /** Invoicing delay, number of days after the term when the invoice should be generated */
  invoicing_delay?: Maybe<Scalars['Int']>;
  /** length of contract */
  term?: Maybe<Scalars['Int']>;
  /** Invoicing scheme */
  invoicing_scheme?: Maybe<InvoicingSchemeEnum>;
  /** list of product associations */
  product_associations?: Maybe<Array<Maybe<ProductAssoction>>>;
};

/** Country message description */
export type CountryInputType = {
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** Country name */
  name?: Maybe<Scalars['String']>;
  /** Country code */
  country_code?: Maybe<Scalars['String']>;
  /** Geographical name */
  geographical_name?: Maybe<Scalars['String']>;
  /** Economic areas to which a country belongs. */
  economic_areas?: Maybe<Array<Maybe<Scalars['String']>>>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
};

/** Country message description */
export type CountryType = {
  __typename?: 'CountryType';
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** Country name */
  name?: Maybe<Scalars['String']>;
  /** Country code */
  country_code?: Maybe<Scalars['String']>;
  /** Geographical name */
  geographical_name?: Maybe<Scalars['String']>;
  /** Economic areas to which a country belongs. */
  economic_areas?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Meta info */
  meta?: Maybe<Meta>;
};

/** Country message description */
export type CountryUpdateInputType = {
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** Country name */
  name?: Maybe<Scalars['String']>;
  /** Country code */
  country_code?: Maybe<Scalars['String']>;
  /** Geographical name */
  geographical_name?: Maybe<Scalars['String']>;
  /** Economic areas to which a country belongs. */
  economic_areas?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CreateAddressesInput = {
  listOfAddresses?: Maybe<Array<Maybe<AddressInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateAddressesPayload = {
  __typename?: 'createAddressesPayload';
  details?: Maybe<Array<Maybe<AddressType>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateCommandsInput = {
  listOfCommands?: Maybe<Array<Maybe<CommandInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateCommandsPayload = {
  __typename?: 'createCommandsPayload';
  details?: Maybe<Array<Maybe<CommandType>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateContactPointsInput = {
  listOfContactPoints?: Maybe<Array<Maybe<ContactPointsInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateContactPointsPayload = {
  __typename?: 'createContactPointsPayload';
  details?: Maybe<Array<Maybe<ContactPointsType>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateContactPointTypesInput = {
  listOfContactPointTypes?: Maybe<Array<Maybe<TypeOfContactPointInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateContactPointTypesPayload = {
  __typename?: 'createContactPointTypesPayload';
  details?: Maybe<Array<Maybe<TypeOfContactPointType>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateContractsInput = {
  listOfContracts?: Maybe<Array<Maybe<ContractInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateContractsPayload = {
  __typename?: 'createContractsPayload';
  details?: Maybe<Array<Maybe<ContractType>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateCountriesInput = {
  listOfCountries?: Maybe<Array<Maybe<CountryInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateCountriesPayload = {
  __typename?: 'createCountriesPayload';
  details?: Maybe<Array<Maybe<CountryType>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateCredentialsInput = {
  listOfCredentials?: Maybe<Array<Maybe<CredentialInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateCredentialsPayload = {
  __typename?: 'createCredentialsPayload';
  details?: Maybe<Array<Maybe<CredentialType>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateDeviceMakesInput = {
  listOfDeviceMakes?: Maybe<Array<Maybe<DeviceMakeInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateDeviceMakesPayload = {
  __typename?: 'createDeviceMakesPayload';
  details?: Maybe<Array<Maybe<DeviceMakeType>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateDevicesInput = {
  listOfDevices?: Maybe<Array<Maybe<DeviceInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateDevicesPayload = {
  __typename?: 'createDevicesPayload';
  details?: Maybe<Array<Maybe<DeviceType>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateDeviceTypesInput = {
  listOfDeviceTypes?: Maybe<Array<Maybe<TypeOfDeviceInput>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateDeviceTypesPayload = {
  __typename?: 'createDeviceTypesPayload';
  details?: Maybe<Array<Maybe<TypeOfDeviceType>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateLocalesInput = {
  listOfLocales?: Maybe<Array<Maybe<LocaleInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateLocalesPayload = {
  __typename?: 'createLocalesPayload';
  details?: Maybe<Array<Maybe<LocaleType>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateLocationsInput = {
  listOfLocations?: Maybe<Array<Maybe<LocationInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateLocationsPayload = {
  __typename?: 'createLocationsPayload';
  details?: Maybe<Array<Maybe<LocationType>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateOrganizationsInput = {
  listOfOrganizations?: Maybe<Array<Maybe<OrganizationInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateOrganizationsPayload = {
  __typename?: 'createOrganizationsPayload';
  details?: Maybe<Array<Maybe<OrganizationType>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreatePaymentMethodsInput = {
  listOfPaymentMethods?: Maybe<Array<Maybe<PaymentMethodTypeInput>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreatePaymentMethodsPayload = {
  __typename?: 'createPaymentMethodsPayload';
  details?: Maybe<Array<Maybe<PaymentMethodTypeOutput>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreatePoliciesInput = {
  listOfPolicies?: Maybe<Array<Maybe<PolicyInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreatePoliciesPayload = {
  __typename?: 'createPoliciesPayload';
  details?: Maybe<Array<Maybe<PolicyType>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreatePolicySetsInput = {
  listOfPolicySets?: Maybe<Array<Maybe<PolicySetInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreatePolicySetsPayload = {
  __typename?: 'createPolicySetsPayload';
  details?: Maybe<Array<Maybe<PolicySetType>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateProductsInput = {
  listOfProducts?: Maybe<Array<Maybe<ProductInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateProductsPayload = {
  __typename?: 'createProductsPayload';
  details?: Maybe<Array<Maybe<ProductType>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateRolesInput = {
  listOfRoles?: Maybe<Array<Maybe<RoleInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateRolesPayload = {
  __typename?: 'createRolesPayload';
  details?: Maybe<Array<Maybe<RoleType>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateRulesInput = {
  listOfRules?: Maybe<Array<Maybe<RuleInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateRulesPayload = {
  __typename?: 'createRulesPayload';
  details?: Maybe<Array<Maybe<RuleType>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateServiceTeamsInput = {
  listOfServiceTeams?: Maybe<Array<Maybe<ServiceTeamInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateServiceTeamsPayload = {
  __typename?: 'createServiceTeamsPayload';
  details?: Maybe<Array<Maybe<ServiceTeamType>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateSolutionsInput = {
  listOfSolutions?: Maybe<Array<Maybe<SolutionInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateSolutionsPayload = {
  __typename?: 'createSolutionsPayload';
  details?: Maybe<Array<Maybe<SolutionType>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateTaxesInput = {
  listOfTaxes?: Maybe<Array<Maybe<TaxInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateTaxesPayload = {
  __typename?: 'createTaxesPayload';
  details?: Maybe<Array<Maybe<TaxType>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateTaxTypesInput = {
  listOfTaxTypes?: Maybe<Array<Maybe<TypeOfTaxInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateTaxTypesPayload = {
  __typename?: 'createTaxTypesPayload';
  details?: Maybe<Array<Maybe<TypeOfTaxType>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateTimezonesInput = {
  listOfTimezones?: Maybe<Array<Maybe<TimezoneInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateTimezonesPayload = {
  __typename?: 'createTimezonesPayload';
  details?: Maybe<Array<Maybe<TimezoneType>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateUsersInput = {
  listOfUsers?: Maybe<Array<Maybe<UserInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateUsersPayload = {
  __typename?: 'createUsersPayload';
  details?: Maybe<Array<Maybe<ResponseSafeUserType>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateXingularCustomersInput = {
  listOfXingularCustomers?: Maybe<Array<Maybe<XingularCustomerInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateXingularCustomersPayload = {
  __typename?: 'createXingularCustomersPayload';
  details?: Maybe<Array<Maybe<XingularCustomerType>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Credential message description */
export type CredentialInputType = {
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** Credentials name */
  name?: Maybe<Scalars['String']>;
  /** Credentials description */
  description?: Maybe<Scalars['String']>;
  /** User name */
  user?: Maybe<Scalars['String']>;
  /** password */
  pass?: Maybe<Scalars['String']>;
  /** JSON object containging auth key or certificate */
  credentials?: Maybe<Scalars['JSON']>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
};

/** Credential message description */
export type CredentialType = {
  __typename?: 'CredentialType';
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** Credentials name */
  name?: Maybe<Scalars['String']>;
  /** Credentials description */
  description?: Maybe<Scalars['String']>;
  /** User name */
  user?: Maybe<Scalars['String']>;
  /** password */
  pass?: Maybe<Scalars['String']>;
  /** JSON object containging auth key or certificate */
  credentials?: Maybe<Scalars['JSON']>;
  /** Meta info */
  meta?: Maybe<Meta>;
};

/** Credential message description */
export type CredentialUpdateInputType = {
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** Credentials name */
  name?: Maybe<Scalars['String']>;
  /** Credentials description */
  description?: Maybe<Scalars['String']>;
  /** User name */
  user?: Maybe<Scalars['String']>;
  /** password */
  pass?: Maybe<Scalars['String']>;
  /** JSON object containging auth key or certificate */
  credentials?: Maybe<Scalars['JSON']>;
};

export enum CurrencyType {
  Eur = 'EUR'
}


export type DeleteFileInput = {
  FileData?: Maybe<Array<Maybe<DeleteFileType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  deleteStatus?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

/** File data */
export type DeleteFileType = {
  Bucket?: Maybe<Scalars['String']>;
  Key?: Maybe<Scalars['String']>;
};

export type DeleteOrgDataInput = {
  listOfOrgIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteOrgDataPayload = {
  __typename?: 'deleteOrgDataPayload';
  deleteStatus?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteResourcesInput = {
  listOfResources?: Maybe<Array<Maybe<DeleteResourceType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteResourcesPayload = {
  __typename?: 'deleteResourcesPayload';
  deleteStatus?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Resource data */
export type DeleteResourceType = {
  entity?: Maybe<Scalars['String']>;
  ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DeleteUsersInput = {
  listOfUsers?: Maybe<Array<Maybe<DeleteUserType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type DeleteUsersPayload = {
  __typename?: 'deleteUsersPayload';
  deleteStatus?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

/** User data */
export type DeleteUserType = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

/** Device Activity messages */
export type DeviceAcvityType = {
  __typename?: 'DeviceAcvityType';
  /** Device Activity */
  data?: Maybe<Scalars['JSON']>;
  error?: Maybe<ErrorArray>;
};

export enum DeviceEnumType {
  Sensor = 'SENSOR',
  Actuator = 'ACTUATOR',
  SensorActuator = 'SENSOR_ACTUATOR',
  Gateway = 'GATEWAY',
  EdgeCompute = 'EDGE_COMPUTE'
}

/** Device proto description */
export type DeviceInputType = {
  /** Device ID */
  id?: Maybe<Scalars['String']>;
  /** Device name (optional) */
  name?: Maybe<Scalars['String']>;
  /** Device name (optional) */
  description?: Maybe<Scalars['String']>;
  /** Location to which this Device is linked */
  location_id?: Maybe<Scalars['String']>;
  /** Organization to which this Device is linked */
  organization_id?: Maybe<Scalars['String']>;
  /** DeviceType ID */
  type_id?: Maybe<Scalars['String']>;
  /** Solution ID */
  solution_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Key for the Device used for Basic Auth */
  key?: Maybe<Scalars['String']>;
  /** IPv4 address of the device */
  ipv4_address?: Maybe<Scalars['String']>;
  /** Battery level of the device */
  battery_level?: Maybe<Scalars['Float']>;
  /** Battery status of the device */
  battery_status?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
  lora?: Maybe<LoraInputType>;
};

/** Device proto description */
export type DeviceMakeInputType = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** Image URL */
  image?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
};

/** Device proto description */
export type DeviceMakeType = {
  __typename?: 'DeviceMakeType';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** Image URL */
  image?: Maybe<Scalars['String']>;
  /** Meta info */
  meta?: Maybe<Meta>;
};

/** Device proto description */
export type DeviceMakeUpdateInputType = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** Image URL */
  image?: Maybe<Scalars['String']>;
};

/** Device proto description */
export type DeviceType = {
  __typename?: 'DeviceType';
  /** Device ID */
  id?: Maybe<Scalars['String']>;
  /** Device name (optional) */
  name?: Maybe<Scalars['String']>;
  /** Device name (optional) */
  description?: Maybe<Scalars['String']>;
  /** Location to which this Device is linked */
  location_id?: Maybe<Scalars['String']>;
  /** Organization to which this Device is linked */
  organization_id?: Maybe<Scalars['String']>;
  /** DeviceType ID */
  type_id?: Maybe<Scalars['String']>;
  /** Solution ID */
  solution_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Key for the Device used for Basic Auth */
  key?: Maybe<Scalars['String']>;
  /** IPv4 address of the device */
  ipv4_address?: Maybe<Scalars['String']>;
  /** Battery level of the device */
  battery_level?: Maybe<Scalars['Float']>;
  /** Battery status of the device */
  battery_status?: Maybe<Scalars['String']>;
  /** Location to which this Device is linked */
  location?: Maybe<LocationType>;
  /** Organization to which this Device is linked */
  organization?: Maybe<OrganizationType>;
  /** tracks the device status if active or inactive */
  active?: Maybe<Scalars['Boolean']>;
  /** Meta info */
  meta?: Maybe<Meta>;
  type?: Maybe<TypeOfDeviceType>;
  solutions?: Maybe<Array<Maybe<SolutionType>>>;
  lora?: Maybe<LoraType>;
  /** Time stamp when the device was last seen */
  last_seen?: Maybe<Scalars['Date']>;
  /** Overall status of the device */
  overall_status?: Maybe<Scalars['String']>;
};

/** Device proto description */
export type DeviceUpdateInputType = {
  /** Device ID */
  id?: Maybe<Scalars['String']>;
  /** Device name (optional) */
  name?: Maybe<Scalars['String']>;
  /** Device name (optional) */
  description?: Maybe<Scalars['String']>;
  /** Location to which this Device is linked */
  location_id?: Maybe<Scalars['String']>;
  /** Organization to which this Device is linked */
  organization_id?: Maybe<Scalars['String']>;
  /** DeviceType ID */
  type_id?: Maybe<Scalars['String']>;
  /** Solution ID */
  solution_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Key for the Device used for Basic Auth */
  key?: Maybe<Scalars['String']>;
  /** IPv4 address of the device */
  ipv4_address?: Maybe<Scalars['String']>;
  /** Battery level of the device */
  battery_level?: Maybe<Scalars['Float']>;
  /** Battery status of the device */
  battery_status?: Maybe<Scalars['String']>;
  lora?: Maybe<LoraInputType>;
};

/** Objects with error returned for GraphQL operations */
export type Error = {
  __typename?: 'Error';
  /** Error code */
  code?: Maybe<Scalars['String']>;
  /** Error message description */
  message?: Maybe<Scalars['String']>;
};

/** Objects with error returned for bulk user / resource GraphQL operations */
export type ErrorArray = {
  __typename?: 'ErrorArray';
  /** List of error codes */
  code?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** List of error message descriptions */
  message?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ExecuteCommandInput = {
  /** Command name */
  name?: Maybe<Scalars['String']>;
  /** Command-specific parameters */
  payload?: Maybe<Scalars['JSON']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ExecuteCommandPayload = {
  __typename?: 'ExecuteCommandPayload';
  responses?: Maybe<Array<Maybe<OutputCommandResponse>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

/** File list output type */
export type FileList = {
  __typename?: 'FileList';
  file_name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** Meta info */
  meta?: Maybe<Meta>;
};

/** File output description */
export type FileType = {
  __typename?: 'FileType';
  key?: Maybe<Scalars['String']>;
  bucket?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  object?: Maybe<Scalars['String']>;
  /** options description */
  options?: Maybe<OptionsFields>;
};

export enum FilterFieldValue {
  String = 'STRING',
  Boolean = 'BOOLEAN',
  Number = 'NUMBER',
  Date = 'DATE',
  Array = 'ARRAY'
}

/** Filters the fields based on the operation specified */
export enum FilterOperation {
  /** Filter fields lesser than the the specified value */
  Lt = 'lt',
  /** Filter fields lesser than or equal to the the specified value */
  Lte = 'lte',
  /** Filter fields greater than the the specified value */
  Gt = 'gt',
  /** Filter fields greater than or equal to the the specified value */
  Gte = 'gte',
  /** Filter fields exactly equal to the the specified value */
  Eq = 'eq',
  /** Filter fields which are empty */
  IsEmpty = 'isEmpty',
  /** Filter fields which are in */
  In = 'in',
  /** Filter fields which are like the specified value but match case-insensitive */
  ILike = 'iLike'
}

/** Filter options */
export type FilterOpts = {
  __typename?: 'FilterOpts';
  /** Field names based on which the filtering needs to be done */
  field?: Maybe<Scalars['String']>;
  /** Filter Operation options */
  operation?: Maybe<FilterOperation>;
  /** Field value */
  value?: Maybe<Scalars['String']>;
  /** Value type (optional, default is STRING) */
  type?: Maybe<FilterFieldValue>;
};

/** Filter options */
export type FilterOptsInput = {
  /** Field names based on which the filtering needs to be done */
  field?: Maybe<Scalars['String']>;
  /** Filter Operation options */
  operation?: Maybe<FilterOperation>;
  /** Field value */
  value?: Maybe<Scalars['String']>;
  /** Value type (optional, default is STRING) */
  type?: Maybe<FilterFieldValue>;
};

export type GenerateReportInput = {
  from?: Maybe<Scalars['Date']>;
  to?: Maybe<Scalars['Date']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type GenerateReportPayload = {
  __typename?: 'generateReportPayload';
  error?: Maybe<Error>;
  /** CSV file stream */
  report?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Describes a geographical point on Earth */
export type GeoPointInputType = {
  /** Longitude */
  longitude?: Maybe<Scalars['Float']>;
  /** Latitude */
  latitude?: Maybe<Scalars['Float']>;
};

/** Describes a geographical point on Earth */
export type GeoPointType = {
  __typename?: 'geoPointType';
  /** Longitude */
  longitude?: Maybe<Scalars['Float']>;
  /** Latitude */
  latitude?: Maybe<Scalars['Float']>;
};

/** Image proto description */
export type ImageInputType = {
  /** Image ID */
  id?: Maybe<Scalars['String']>;
  /** caption for the image */
  caption?: Maybe<Scalars['String']>;
  /** file name */
  filename?: Maybe<Scalars['String']>;
  /** Image content type */
  content_type?: Maybe<Scalars['String']>;
  /** Image URL */
  url?: Maybe<Scalars['String']>;
  /** Image Width */
  width?: Maybe<Scalars['Int']>;
  /** Image height */
  height?: Maybe<Scalars['Int']>;
  /** Image size - length */
  length?: Maybe<Scalars['Int']>;
};

/** Image proto description */
export type ImageType = {
  __typename?: 'ImageType';
  /** Image ID */
  id?: Maybe<Scalars['String']>;
  /** caption for the image */
  caption?: Maybe<Scalars['String']>;
  /** file name */
  filename?: Maybe<Scalars['String']>;
  /** Image content type */
  content_type?: Maybe<Scalars['String']>;
  /** Image URL */
  url?: Maybe<Scalars['String']>;
  /** Image Width */
  width?: Maybe<Scalars['Int']>;
  /** Image height */
  height?: Maybe<Scalars['Int']>;
  /** Image size - length */
  length?: Maybe<Scalars['Int']>;
};

/** ElasticSearch indices */
export enum IndexNames {
  ButtonPress = 'BUTTON_PRESS',
  RoomSkips = 'ROOM_SKIPS'
}

/** Attribute from a Target property */
export type InputAttribute = {
  /** Attribute ID */
  id?: Maybe<Scalars['String']>;
  /** Attribute value */
  value?: Maybe<Scalars['String']>;
};

/** Unit price specification */
export type InputPriceSpecification = {
  price?: Maybe<Scalars['Float']>;
  currency?: Maybe<CurrencyType>;
  reference_quantity?: Maybe<InputRefQuantity>;
};

/** Reference quantity for product price specifications */
export type InputRefQuantity = {
  value?: Maybe<Scalars['Float']>;
  unit_code?: Maybe<PriceUnitType>;
};

/** Role and attributes */
export type InputRoleAssociation = {
  /** Role ID */
  role?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<Maybe<InputAttribute>>>;
};

/** Used to filter a user by a role association */
export type InputUserRole = {
  /** A user role */
  role?: Maybe<Scalars['String']>;
  /** Organizations linked to the role */
  organizations?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Invoice message description */
export type InvoiceType = {
  __typename?: 'InvoiceType';
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** Document creation timestamp */
  timestamp?: Maybe<Scalars['Date']>;
  /** Xingular customer database ID */
  customer_id?: Maybe<Scalars['String']>;
  /** Xingular customer details */
  xingular_customer?: Maybe<XingularCustomerType>;
  /** Invoice payment status */
  payment_status?: Maybe<Scalars['String']>;
  /** Gross amount */
  total_amount?: Maybe<Scalars['Float']>;
  /** VAT amount (difference between total and net) */
  vat_amount?: Maybe<Scalars['Float']>;
  /** Net amount */
  net_amount?: Maybe<Scalars['Float']>;
  /** PDF document */
  document?: Maybe<Scalars['String']>;
  /** Invoice number */
  invoice_number?: Maybe<Scalars['String']>;
  /** Meta info */
  meta?: Maybe<Meta>;
};

/** Invoicing Scheme */
export enum InvoicingSchemeEnum {
  /** Beginning of term */
  BeginningOfTerm = 'BEGINNING_OF_TERM',
  /** End of term */
  EndOfTerm = 'END_OF_TERM'
}

/** Invoicing term enum values */
export enum InvoicingTermEnum {
  /** Monthly invoicing term */
  Monthly = 'MONTHLY',
  /** Calender Monthly invoicing term */
  CalenderMonthly = 'CALENDER_MONTHLY',
  /** Yearly invoicing term */
  Yearly = 'YEARLY',
  /** Calender Yearly invoicing term */
  CalenderYearly = 'CALENDER_YEARLY'
}

/** payload data for the job */
export type JobData = {
  /** timezone ex: Europe/Amsterdam */
  timezone?: Maybe<Scalars['String']>;
  /** payload for the job depends on the job type */
  payload?: Maybe<Scalars['JSON']>;
};

/** timezone and payload data for the job */
export type JobDataOutputType = {
  __typename?: 'JobDataOutputType';
  /** timezone ex: Europe/Berlin */
  timezone?: Maybe<Scalars['String']>;
  /** Payload of any data type */
  payload?: Maybe<Scalars['JSON']>;
  /** Meta info */
  meta?: Maybe<Meta>;
};

/** Jobs filter options */
export type JobFilterOpts = {
  /** Job type */
  type?: Maybe<JobTypes>;
  job_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Job Options */
export type JobOptions = {
  /** job priority options */
  priority?: Maybe<JobPriority>;
  /** amount of possible failing runs until job fails */
  attempts?: Maybe<Scalars['Int']>;
  /** delay settings between failed job runs */
  backoff?: Maybe<BackOff>;
  /** if set job will expire after timeout milliseconds */
  timeout?: Maybe<Scalars['Int']>;
  /** Repeat options for Job */
  repeat?: Maybe<Repeat>;
};

/** Job Options */
export type JobOptionsOutput = {
  __typename?: 'jobOptionsOutput';
  /** job priority options */
  priority?: Maybe<JobPriority>;
  /** amount of possible failing runs until job fails */
  attempts?: Maybe<Scalars['Int']>;
  /** delay settings between failed job runs */
  backoff?: Maybe<BackOffOutputType>;
  /** if set job will expire after timeout milliseconds */
  timeout?: Maybe<Scalars['Int']>;
  /** Repeat options for Job */
  repeat?: Maybe<RepeatOutputType>;
};

/** the priority of the job to be scheduled */
export enum JobPriority {
  /** normal priority */
  Normal = 'NORMAL',
  /** low priority */
  Low = 'LOW',
  /** medium priority */
  Medium = 'MEDIUM',
  /** high priority */
  High = 'HIGH',
  /** critical priority */
  Critical = 'CRITICAL'
}

/** job output type */
export type Jobs = {
  __typename?: 'Jobs';
  /** Job ID (auto-generated) */
  id?: Maybe<Scalars['String']>;
  /** Job type */
  type?: Maybe<JobTypes>;
  /** Job data to be stored (timezone, meta info and job-specific payload data) */
  data?: Maybe<JobDataOutputType>;
  /** Can be either a date instance or a human-readable string like "tomorrow at 5am" or "2 seconds from now" */
  when?: Maybe<Scalars['String']>;
  /** Job Options */
  options?: Maybe<JobOptionsOutput>;
};

/** to schedule a job to Scheduling Service */
export type JobScheduler = {
  /** Job ID (auto-generated) */
  id?: Maybe<Scalars['String']>;
  /** Job type */
  type?: Maybe<JobTypes>;
  /** Job data to be stored (timezone, meta info and job-specific payload data) */
  data?: Maybe<JobData>;
  /** Can be either a date instance or a human-readable string like "tomorrow at 5am" or "2 seconds from now" */
  when?: Maybe<Scalars['String']>;
  /** Job Options */
  options?: Maybe<JobOptions>;
};

/** jobs list output type */
export type JobsList = {
  __typename?: 'JobsList';
  details?: Maybe<Array<Maybe<Jobs>>>;
  error?: Maybe<ErrorArray>;
};

/** the type of the job */
export enum JobTypes {
  /** Job which triggers notifications for the room cleaning service(currently no metadata is expected for this job) */
  RoomServiceNotificationJob = 'ROOM_SERVICE_NOTIFICATION_JOB',
  /** Job which triggers invoice notifications(currently no metadata is expected for this job) */
  InvoicingServiceNotificationJob = 'INVOICING_SERVICE_NOTIFICATION_JOB',
  /** Job to generate Invoice Positions */
  GenerateInvoicePositionsJob = 'GENERATE_INVOICE_POSITIONS_JOB',
  /** Job to flush any pending notification */
  FlushPendingNotificationsJob = 'FLUSH_PENDING_NOTIFICATIONS_JOB',
  /** Job to flush any pending notification */
  CancelPendingContractsJob = 'CANCEL_PENDING_CONTRACTS_JOB',
  /** Job to flush completed and failed jobs from redis */
  FlushStalledJobs = 'FLUSH_STALLED_JOBS',
  /** Job which triggers the device service to check for and write the overall_status of the active devices */
  DeviceStatusJob = 'DEVICE_STATUS_JOB'
}


/** Locale proto description */
export type LocaleInputType = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
};

/** Locale proto description */
export type LocaleType = {
  __typename?: 'LocaleType';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** Meta info */
  meta?: Maybe<Meta>;
};

/** Locale proto description */
export type LocaleUpdateInputType = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

/** Location proto description */
export type LocationInputType = {
  /** Location ID */
  id?: Maybe<Scalars['String']>;
  /** Location name */
  name?: Maybe<Scalars['String']>;
  /** Location description */
  description?: Maybe<Scalars['String']>;
  /** Organization ID to which this location is linked */
  organization_id?: Maybe<Scalars['String']>;
  /** Location which contains this location; may be null */
  parent_id?: Maybe<Scalars['String']>;
  /** Locations contained in this location */
  children_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Address of this location */
  address_id?: Maybe<Scalars['String']>;
  /** data for Location, used for specifying indication strategy */
  data?: Maybe<Scalars['JSON']>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
};

/** Location2 proto description */
export type LocationType = {
  __typename?: 'LocationType';
  /** Location ID */
  id?: Maybe<Scalars['String']>;
  /** Location name */
  name?: Maybe<Scalars['String']>;
  /** Location description */
  description?: Maybe<Scalars['String']>;
  /** Organization ID to which this location is linked */
  organization_id?: Maybe<Scalars['String']>;
  /** Location which contains this location; may be null */
  parent_id?: Maybe<Scalars['String']>;
  /** Locations contained in this location */
  children_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Address of this location */
  address_id?: Maybe<Scalars['String']>;
  /** Organization to which this location is linked */
  organization?: Maybe<OrganizationType>;
  /** Address of Organization */
  address?: Maybe<AddressType>;
  /** Meta info */
  meta?: Maybe<Meta>;
  /** data for Location, used for specifying indication strategy */
  data?: Maybe<Scalars['JSON']>;
};

/** Location proto description */
export type LocationUpdateInputType = {
  /** Location ID */
  id?: Maybe<Scalars['String']>;
  /** Location name */
  name?: Maybe<Scalars['String']>;
  /** Location description */
  description?: Maybe<Scalars['String']>;
  /** Organization ID to which this location is linked */
  organization_id?: Maybe<Scalars['String']>;
  /** Location which contains this location; may be null */
  parent_id?: Maybe<Scalars['String']>;
  /** Locations contained in this location */
  children_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Address of this location */
  address_id?: Maybe<Scalars['String']>;
  /** data for Location, used for specifying indication strategy */
  data?: Maybe<Scalars['JSON']>;
};

export type LogoutUserInput = {
  clientMutationId?: Maybe<Scalars['String']>;
};

export type LogoutUserPayload = {
  __typename?: 'logoutUserPayload';
  status?: Maybe<Scalars['String']>;
  error?: Maybe<Error>;
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Lora-specific properties */
export type LoraInputType = {
  /** Lora Device EUI */
  eui?: Maybe<Scalars['String']>;
  /** Lora Application EUI */
  app_eui?: Maybe<Scalars['String']>;
  /** Lora Application Key */
  app_key?: Maybe<Scalars['String']>;
  /** Device address */
  device_address?: Maybe<Scalars['String']>;
  /** Network session key */
  network_session_key?: Maybe<Scalars['String']>;
  /** Application session key */
  app_session_key?: Maybe<Scalars['String']>;
  network?: Maybe<LoraNetwork>;
};

export enum LoraNetwork {
  Ttn = 'TTN'
}

/** Lora-specific properties */
export type LoraType = {
  __typename?: 'LoraType';
  /** Lora Device EUI */
  eui?: Maybe<Scalars['String']>;
  /** Lora Application EUI */
  app_eui?: Maybe<Scalars['String']>;
  /** Lora Application Key */
  app_key?: Maybe<Scalars['String']>;
  /** Device address */
  device_address?: Maybe<Scalars['String']>;
  /** Network session key */
  network_session_key?: Maybe<Scalars['String']>;
  /** Application session key */
  app_session_key?: Maybe<Scalars['String']>;
  network?: Maybe<LoraNetwork>;
};

/** Meta info common to all resources */
export type Meta = {
  __typename?: 'Meta';
  /** Creation timestamp */
  created?: Maybe<Scalars['Date']>;
  /** Last-modification timestamp */
  modified?: Maybe<Scalars['Date']>;
  /** UUID from last User who modified the resource */
  modified_by?: Maybe<Scalars['String']>;
  /** A list of attributes describing the owner's entities */
  owner?: Maybe<Array<Maybe<Attribute>>>;
};

export type ModifyContractsInput = {
  listOfContracts?: Maybe<Array<Maybe<ContractUpdateInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ModifyContractsPayload = {
  __typename?: 'modifyContractsPayload';
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  activateUser?: Maybe<ActivateUserPayload>;
  /** Administrative room skip cancellation */
  administrativeRoomSkipCancel?: Maybe<AdministrativeRoomSkipCancelPayload>;
  bindLocations?: Maybe<BindLocationsPayload>;
  bindOrganizations?: Maybe<BindOrganizationsPayload>;
  changeUserPass?: Maybe<ChangePasswordPayload>;
  confirmPasswordChange?: Maybe<ConfirmPasswordChangePayload>;
  confirmUserInvitation?: Maybe<ConfirmUserInvitationPayload>;
  createAddresses?: Maybe<CreateAddressesPayload>;
  createContactPointTypes?: Maybe<CreateContactPointTypesPayload>;
  createContactPoints?: Maybe<CreateContactPointsPayload>;
  createCountries?: Maybe<CreateCountriesPayload>;
  createCredentials?: Maybe<CreateCredentialsPayload>;
  createPaymentMethods?: Maybe<CreatePaymentMethodsPayload>;
  createPolicies?: Maybe<CreatePoliciesPayload>;
  createPolicySets?: Maybe<CreatePolicySetsPayload>;
  createProducts?: Maybe<CreateProductsPayload>;
  createRoles?: Maybe<CreateRolesPayload>;
  createRules?: Maybe<CreateRulesPayload>;
  createTaxes?: Maybe<CreateTaxesPayload>;
  createTaxTypes?: Maybe<CreateTaxTypesPayload>;
  createXingularCustomers?: Maybe<CreateXingularCustomersPayload>;
  createDevices?: Maybe<CreateDevicesPayload>;
  createDeviceTypes?: Maybe<CreateDeviceTypesPayload>;
  createDeviceMakes?: Maybe<CreateDeviceMakesPayload>;
  createContracts?: Maybe<CreateContractsPayload>;
  cancelContracts?: Maybe<CancelContractsPayload>;
  revertContractsCancellation?: Maybe<RevertContractsCancellationPayload>;
  /** Reactivate a set of cancelled contracts */
  reactivateContracts?: Maybe<ReactivateContractsPayload>;
  createLocales?: Maybe<CreateLocalesPayload>;
  createLocations?: Maybe<CreateLocationsPayload>;
  createServiceTeams?: Maybe<CreateServiceTeamsPayload>;
  createSolutions?: Maybe<CreateSolutionsPayload>;
  createTimezones?: Maybe<CreateTimezonesPayload>;
  createUsers?: Maybe<CreateUsersPayload>;
  createOrganizations?: Maybe<CreateOrganizationsPayload>;
  createCommands?: Maybe<CreateCommandsPayload>;
  deleteFile?: Maybe<DeleteFilePayload>;
  deleteOrgData?: Maybe<DeleteOrgDataPayload>;
  deleteUsers?: Maybe<DeleteUsersPayload>;
  /** Generate a report for Xingular's bookkeeping system regarding a given time range */
  generateReport?: Maybe<GenerateReportPayload>;
  deleteResources?: Maybe<DeleteResourcesPayload>;
  registerUser?: Maybe<RegisterUserPayload>;
  requestEmailChange?: Maybe<RequestEmailChangePayload>;
  confirmEmailChange?: Maybe<ConfirmEmailChangePayload>;
  unregisterUser?: Maybe<UnregisterUserPayload>;
  signInUser?: Maybe<SignInUserPayload>;
  signInApiKey?: Maybe<SignInApiKeyPayload>;
  logoutUser?: Maybe<LogoutUserPayload>;
  activateUsers?: Maybe<ActivateUsersPayload>;
  updateUsers?: Maybe<UpdateUsersPayload>;
  scheduleJobs?: Maybe<ScheduleJobPayload>;
  executeCommand?: Maybe<ExecuteCommandPayload>;
  activateDevices?: Maybe<ActivateDevicesPayload>;
  updateAddresses?: Maybe<UpdateAddressesPayload>;
  updateContactPointTypes?: Maybe<UpdateAddressTypesPayload>;
  updateContracts?: Maybe<ModifyContractsPayload>;
  updateCountries?: Maybe<UpdateCountriesPayload>;
  updateCredentials?: Maybe<UpdateCredentialsPayload>;
  updateDevices?: Maybe<UpdateDevicesPayload>;
  updateDeviceTypes?: Maybe<UpdateDeviceTypesPayload>;
  updateDeviceMakes?: Maybe<UpdateDeviceMakesPayload>;
  updateContactPoints?: Maybe<UpdateContactPointsPayload>;
  updateLocales?: Maybe<UpdateLocalesPayload>;
  updateLocations?: Maybe<UpdateLocationsPayload>;
  updateOrganizations?: Maybe<UpdateOrganizationsPayload>;
  updatePaymentMethods?: Maybe<UpdatePaymentMethodsPayload>;
  updatePolicies?: Maybe<UpdatePoliciesPayload>;
  updatePolicySets?: Maybe<UpdatePolicySetsPayload>;
  updateProducts?: Maybe<UpdateProductsPayload>;
  updateRoles?: Maybe<UpdateRolesPayload>;
  updateRules?: Maybe<UpdateRulesPayload>;
  updateServiceTeams?: Maybe<UpdateServiceTeamsPayload>;
  updateSolutions?: Maybe<UpdateSolutionsPayload>;
  updateTaxes?: Maybe<UpdateTaxesPayload>;
  uploadFile?: Maybe<UploadFilePayload>;
  updateTaxTypes?: Maybe<UpdateTaxTypesPayload>;
  updateTimezones?: Maybe<UpdateTimezonesPayload>;
  requestPasswordChange?: Maybe<RequestPasswordChangePayload>;
  /** Persists the chosen user scope within the session context */
  setSessionScope?: Maybe<SetSessionScopePayload>;
};


export type MutationActivateUserArgs = {
  input: ActivateUserInput;
};


export type MutationAdministrativeRoomSkipCancelArgs = {
  input: AdministrativeRoomSkipCancelInput;
};


export type MutationBindLocationsArgs = {
  input: BindLocationsInput;
};


export type MutationBindOrganizationsArgs = {
  input: BindOrganizationsInput;
};


export type MutationChangeUserPassArgs = {
  input: ChangePasswordInput;
};


export type MutationConfirmPasswordChangeArgs = {
  input: ConfirmPasswordChangeInput;
};


export type MutationConfirmUserInvitationArgs = {
  input: ConfirmUserInvitationInput;
};


export type MutationCreateAddressesArgs = {
  input: CreateAddressesInput;
};


export type MutationCreateContactPointTypesArgs = {
  input: CreateContactPointTypesInput;
};


export type MutationCreateContactPointsArgs = {
  input: CreateContactPointsInput;
};


export type MutationCreateCountriesArgs = {
  input: CreateCountriesInput;
};


export type MutationCreateCredentialsArgs = {
  input: CreateCredentialsInput;
};


export type MutationCreatePaymentMethodsArgs = {
  input: CreatePaymentMethodsInput;
};


export type MutationCreatePoliciesArgs = {
  input: CreatePoliciesInput;
};


export type MutationCreatePolicySetsArgs = {
  input: CreatePolicySetsInput;
};


export type MutationCreateProductsArgs = {
  input: CreateProductsInput;
};


export type MutationCreateRolesArgs = {
  input: CreateRolesInput;
};


export type MutationCreateRulesArgs = {
  input: CreateRulesInput;
};


export type MutationCreateTaxesArgs = {
  input: CreateTaxesInput;
};


export type MutationCreateTaxTypesArgs = {
  input: CreateTaxTypesInput;
};


export type MutationCreateXingularCustomersArgs = {
  input: CreateXingularCustomersInput;
};


export type MutationCreateDevicesArgs = {
  input: CreateDevicesInput;
};


export type MutationCreateDeviceTypesArgs = {
  input: CreateDeviceTypesInput;
};


export type MutationCreateDeviceMakesArgs = {
  input: CreateDeviceMakesInput;
};


export type MutationCreateContractsArgs = {
  input: CreateContractsInput;
};


export type MutationCancelContractsArgs = {
  input: CancelContractsInput;
};


export type MutationRevertContractsCancellationArgs = {
  input: RevertContractsCancellationInput;
};


export type MutationReactivateContractsArgs = {
  input: ReactivateContractsInput;
};


export type MutationCreateLocalesArgs = {
  input: CreateLocalesInput;
};


export type MutationCreateLocationsArgs = {
  input: CreateLocationsInput;
};


export type MutationCreateServiceTeamsArgs = {
  input: CreateServiceTeamsInput;
};


export type MutationCreateSolutionsArgs = {
  input: CreateSolutionsInput;
};


export type MutationCreateTimezonesArgs = {
  input: CreateTimezonesInput;
};


export type MutationCreateUsersArgs = {
  input: CreateUsersInput;
};


export type MutationCreateOrganizationsArgs = {
  input: CreateOrganizationsInput;
};


export type MutationCreateCommandsArgs = {
  input: CreateCommandsInput;
};


export type MutationDeleteFileArgs = {
  input: DeleteFileInput;
};


export type MutationDeleteOrgDataArgs = {
  input: DeleteOrgDataInput;
};


export type MutationDeleteUsersArgs = {
  input: DeleteUsersInput;
};


export type MutationGenerateReportArgs = {
  input: GenerateReportInput;
};


export type MutationDeleteResourcesArgs = {
  input: DeleteResourcesInput;
};


export type MutationRegisterUserArgs = {
  input: RegisterUserInput;
};


export type MutationRequestEmailChangeArgs = {
  input: RequestEmailChangeInput;
};


export type MutationConfirmEmailChangeArgs = {
  input: ConfirmEmailChangeInput;
};


export type MutationUnregisterUserArgs = {
  input: UnregisterUserInput;
};


export type MutationSignInUserArgs = {
  input: SignInUserInput;
};


export type MutationSignInApiKeyArgs = {
  input: SignInApiKeyInput;
};


export type MutationLogoutUserArgs = {
  input: LogoutUserInput;
};


export type MutationActivateUsersArgs = {
  input: ActivateUsersInput;
};


export type MutationUpdateUsersArgs = {
  input: UpdateUsersInput;
};


export type MutationScheduleJobsArgs = {
  input: ScheduleJobInput;
};


export type MutationExecuteCommandArgs = {
  input: ExecuteCommandInput;
};


export type MutationActivateDevicesArgs = {
  input: ActivateDevicesInput;
};


export type MutationUpdateAddressesArgs = {
  input: UpdateAddressesInput;
};


export type MutationUpdateContactPointTypesArgs = {
  input: UpdateAddressTypesInput;
};


export type MutationUpdateContractsArgs = {
  input: ModifyContractsInput;
};


export type MutationUpdateCountriesArgs = {
  input: UpdateCountriesInput;
};


export type MutationUpdateCredentialsArgs = {
  input: UpdateCredentialsInput;
};


export type MutationUpdateDevicesArgs = {
  input: UpdateDevicesInput;
};


export type MutationUpdateDeviceTypesArgs = {
  input: UpdateDeviceTypesInput;
};


export type MutationUpdateDeviceMakesArgs = {
  input: UpdateDeviceMakesInput;
};


export type MutationUpdateContactPointsArgs = {
  input: UpdateContactPointsInput;
};


export type MutationUpdateLocalesArgs = {
  input: UpdateLocalesInput;
};


export type MutationUpdateLocationsArgs = {
  input: UpdateLocationsInput;
};


export type MutationUpdateOrganizationsArgs = {
  input: UpdateOrganizationsInput;
};


export type MutationUpdatePaymentMethodsArgs = {
  input: UpdatePaymentMethodsInput;
};


export type MutationUpdatePoliciesArgs = {
  input: UpdatePoliciesInput;
};


export type MutationUpdatePolicySetsArgs = {
  input: UpdatePolicySetsInput;
};


export type MutationUpdateProductsArgs = {
  input: UpdateProductsInput;
};


export type MutationUpdateRolesArgs = {
  input: UpdateRolesInput;
};


export type MutationUpdateRulesArgs = {
  input: UpdateRulesInput;
};


export type MutationUpdateServiceTeamsArgs = {
  input: UpdateServiceTeamsInput;
};


export type MutationUpdateSolutionsArgs = {
  input: UpdateSolutionsInput;
};


export type MutationUpdateTaxesArgs = {
  input: UpdateTaxesInput;
};


export type MutationUploadFileArgs = {
  input: UploadFileInput;
};


export type MutationUpdateTaxTypesArgs = {
  input: UpdateTaxTypesInput;
};


export type MutationUpdateTimezonesArgs = {
  input: UpdateTimezonesInput;
};


export type MutationRequestPasswordChangeArgs = {
  input: RequestPasswordChangeInput;
};


export type MutationSetSessionScopeArgs = {
  input: SetSessionScopeInput;
};

/** OptionsFields Description */
export type OptionsFields = {
  __typename?: 'OptionsFields';
  /** Encoding */
  encoding?: Maybe<Scalars['String']>;
  /** content_type */
  content_type?: Maybe<Scalars['String']>;
  /** content_language */
  content_language?: Maybe<Scalars['String']>;
  /** content_disposition */
  content_disposition?: Maybe<Scalars['String']>;
  /** length */
  length?: Maybe<Scalars['Int']>;
  /** version */
  version?: Maybe<Scalars['String']>;
  /** md5 */
  md5?: Maybe<Scalars['String']>;
  /** The tag-set for the object. */
  tags?: Maybe<Array<Maybe<Attribute>>>;
};

/** options Input Type Description */
export type OptionsInputType = {
  /** Encoding */
  encoding?: Maybe<Scalars['String']>;
  /** content_type */
  content_type?: Maybe<Scalars['String']>;
  /** content_language */
  content_language?: Maybe<Scalars['String']>;
  /** content_disposition */
  content_disposition?: Maybe<Scalars['String']>;
  /** length */
  length?: Maybe<Scalars['Int']>;
  /** version */
  version?: Maybe<Scalars['String']>;
  /** md5 */
  md5?: Maybe<Scalars['String']>;
  /** The tag-set for the object. */
  tags?: Maybe<Array<Maybe<InputAttribute>>>;
};

/** Organization proto description */
export type OrganizationInputType = {
  /** Organization ID */
  id?: Maybe<Scalars['String']>;
  /** Organization name */
  name?: Maybe<Scalars['String']>;
  /** Address of Organization */
  address_id?: Maybe<Scalars['String']>;
  /**  Hierarchically superior organization; may be null */
  parent_id?: Maybe<Scalars['String']>;
  /** Hierarchically inferior organizations; may be null */
  children_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Organization website */
  website?: Maybe<Scalars['String']>;
  /** Organization email address */
  email?: Maybe<Scalars['String']>;
  /** List of different legal addresses */
  contact_point_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Organization logo URL */
  logo?: Maybe<Scalars['String']>;
  /** VAT identification number */
  vat_id?: Maybe<Scalars['String']>;
  /** International Standard Industry Classification v4 */
  isic_v4?: Maybe<Scalars['String']>;
  /** Registration */
  registration?: Maybe<Scalars['String']>;
  /** Registration court */
  registration_court?: Maybe<Scalars['String']>;
  /** Payment methods ids */
  payment_method_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
  /** data for Organization, used for specifying indication strategy */
  data?: Maybe<Scalars['JSON']>;
};

/** Organization proto description */
export type OrganizationType = {
  __typename?: 'OrganizationType';
  /** Organization ID */
  id?: Maybe<Scalars['String']>;
  /** Organization name */
  name?: Maybe<Scalars['String']>;
  /** Address of Organization */
  address_id?: Maybe<Scalars['String']>;
  /**  Hierarchically superior organization; may be null */
  parent_id?: Maybe<Scalars['String']>;
  /** Hierarchically inferior organizations; may be null */
  children_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Organization website */
  website?: Maybe<Scalars['String']>;
  /** Organization email address */
  email?: Maybe<Scalars['String']>;
  /** List of different legal addresses */
  contact_point_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Organization logo URL */
  logo?: Maybe<Scalars['String']>;
  /** VAT identification number */
  vat_id?: Maybe<Scalars['String']>;
  /** International Standard Industry Classification v4 */
  isic_v4?: Maybe<Scalars['String']>;
  /** Registration */
  registration?: Maybe<Scalars['String']>;
  /** Registration court */
  registration_court?: Maybe<Scalars['String']>;
  /** Meta info */
  meta?: Maybe<Meta>;
  /** Address of Organization */
  address?: Maybe<AddressType>;
  /** Hierarchically superior organization; may be null */
  parent_organization?: Maybe<OrganizationType>;
  /** Hierarchically inferior organizations; may be null */
  children_organizations?: Maybe<Array<Maybe<OrganizationType>>>;
  /** List of different legal addresses */
  contact_points?: Maybe<Array<Maybe<ContactPointsType>>>;
  /** Payment method identifier */
  payment_method_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** List of different payment methods */
  payment_methods?: Maybe<Array<Maybe<PaymentMethodTypeOutput>>>;
  /** data for Organization, used for specifying indication strategy */
  data?: Maybe<Scalars['JSON']>;
};

/** Organization proto description */
export type OrganizationUpdateInputType = {
  /** Organization ID */
  id?: Maybe<Scalars['String']>;
  /** Organization name */
  name?: Maybe<Scalars['String']>;
  /** Address of Organization */
  address_id?: Maybe<Scalars['String']>;
  /**  Hierarchically superior organization; may be null */
  parent_id?: Maybe<Scalars['String']>;
  /** Hierarchically inferior organizations; may be null */
  children_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Organization website */
  website?: Maybe<Scalars['String']>;
  /** Organization email address */
  email?: Maybe<Scalars['String']>;
  /** List of different legal addresses */
  contact_point_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Organization logo URL */
  logo?: Maybe<Scalars['String']>;
  /** VAT identification number */
  vat_id?: Maybe<Scalars['String']>;
  /** International Standard Industry Classification v4 */
  isic_v4?: Maybe<Scalars['String']>;
  /** Registration */
  registration?: Maybe<Scalars['String']>;
  /** Registration court */
  registration_court?: Maybe<Scalars['String']>;
  /** Payment method identifier */
  payment_method_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** data for Organization, used for specifying indication strategy */
  data?: Maybe<Scalars['JSON']>;
};

/** Org data */
export type OrgInputType = {
  name?: Maybe<Scalars['String']>;
  address?: Maybe<AddressuserInputType>;
  /** Organization website */
  website?: Maybe<Scalars['String']>;
  /** Organization email address */
  email?: Maybe<Scalars['String']>;
  /** Organization logo URL */
  logo?: Maybe<Scalars['String']>;
  /** VAT identification number */
  vat_id?: Maybe<Scalars['String']>;
  /** International Standard Industry Classification v4 */
  isic_v4?: Maybe<Scalars['String']>;
  /** Registration */
  registration?: Maybe<Scalars['String']>;
  /** Registration court */
  registration_court?: Maybe<Scalars['String']>;
};

/** Address output description */
export type OutputAddressType = {
  __typename?: 'outputAddressType';
  details?: Maybe<Array<Maybe<AddressType>>>;
  error?: Maybe<ErrorArray>;
};

/** Command response from one microservice bound to one or more services */
export type OutputCommandResponse = {
  __typename?: 'outputCommandResponse';
  /** List of services bound to the response's microservice */
  services?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Response with variable payload */
  response?: Maybe<Scalars['JSON']>;
};

/**  commands output description */
export type OutputCommandType = {
  __typename?: 'outputCommandType';
  details?: Maybe<Array<Maybe<CommandType>>>;
  error?: Maybe<ErrorArray>;
};

/** ContactPoints output description */
export type OutputContactPointsType = {
  __typename?: 'outputContactPointsType';
  details?: Maybe<Array<Maybe<ContactPointsType>>>;
  error?: Maybe<ErrorArray>;
};

/** Contract output description */
export type OutputContractType = {
  __typename?: 'outputContractType';
  details?: Maybe<Array<Maybe<ContractType>>>;
  error?: Maybe<ErrorArray>;
};

/** Country output description */
export type OutputCountryType = {
  __typename?: 'outputCountryType';
  details?: Maybe<Array<Maybe<CountryType>>>;
  error?: Maybe<ErrorArray>;
};

/** Credential output description */
export type OutputCredentialType = {
  __typename?: 'outputCredentialType';
  details?: Maybe<Array<Maybe<CredentialType>>>;
  error?: Maybe<ErrorArray>;
};

/** Device output description */
export type OutputDeviceMakeType = {
  __typename?: 'outputDeviceMakeType';
  details?: Maybe<Array<Maybe<DeviceMakeType>>>;
  error?: Maybe<ErrorArray>;
};

/** Device output description */
export type OutputDeviceType = {
  __typename?: 'outputDeviceType';
  details?: Maybe<Array<Maybe<DeviceType>>>;
  error?: Maybe<ErrorArray>;
};

/** File list output description */
export type OutputFileListType = {
  __typename?: 'outputFileListType';
  details?: Maybe<Array<Maybe<FileList>>>;
  error?: Maybe<Error>;
};

/** File output description */
export type OutputFileType = {
  __typename?: 'outputFileType';
  details?: Maybe<FileType>;
  error?: Maybe<Error>;
};

/** Invoice output description */
export type OutputInvoiceType = {
  __typename?: 'outputInvoiceType';
  details?: Maybe<Array<Maybe<InvoiceType>>>;
  error?: Maybe<ErrorArray>;
};

/** Locale output description */
export type OutputLocaleType = {
  __typename?: 'outputLocaleType';
  details?: Maybe<Array<Maybe<LocaleType>>>;
  error?: Maybe<ErrorArray>;
};

/** Location output description */
export type OutputLocationType = {
  __typename?: 'outputLocationType';
  details?: Maybe<Array<Maybe<LocationType>>>;
  error?: Maybe<ErrorArray>;
};

/** Organization output description */
export type OutputOrgType = {
  __typename?: 'outputOrgType';
  details?: Maybe<Array<Maybe<OrganizationType>>>;
  error?: Maybe<ErrorArray>;
};

/** Permissions output */
export type OutputPermissionsType = {
  __typename?: 'outputPermissionsType';
  details?: Maybe<Scalars['JSON']>;
  error?: Maybe<Error>;
};

/**  rules output description */
export type OutputPolicySetType = {
  __typename?: 'outputPolicySetType';
  details?: Maybe<Array<Maybe<PolicySetType>>>;
  error?: Maybe<ErrorArray>;
};

/**  Policy output */
export type OutputPolicyType = {
  __typename?: 'outputPolicyType';
  details?: Maybe<Array<Maybe<PolicyType>>>;
  error?: Maybe<ErrorArray>;
};

/** Product output description */
export type OutputProductType = {
  __typename?: 'outputProductType';
  details?: Maybe<Array<Maybe<ProductType>>>;
  error?: Maybe<ErrorArray>;
};

/** Role output description */
export type OutputRoleType = {
  __typename?: 'outputRoleType';
  details?: Maybe<Array<Maybe<RoleType>>>;
  error?: Maybe<ErrorArray>;
};

/**  Rule output */
export type OutputRuleType = {
  __typename?: 'outputRuleType';
  details?: Maybe<Array<Maybe<RuleType>>>;
  error?: Maybe<ErrorArray>;
};

/** Service names */
export type OutputServicesType = {
  __typename?: 'outputServicesType';
  details?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
};

/** ServiceTeam output description */
export type OutputServiceTeamType = {
  __typename?: 'outputServiceTeamType';
  details?: Maybe<Array<Maybe<ServiceTeamType>>>;
  error?: Maybe<ErrorArray>;
};

/** Solution output description */
export type OutputSolutionType = {
  __typename?: 'outputSolutionType';
  details?: Maybe<Array<Maybe<SolutionType>>>;
  error?: Maybe<ErrorArray>;
};

/** Tax output description */
export type OutputTaxType = {
  __typename?: 'outputTaxType';
  details?: Maybe<Array<Maybe<TaxType>>>;
  error?: Maybe<ErrorArray>;
};

/** Timezone output description */
export type OutputTimezoneType = {
  __typename?: 'outputTimezoneType';
  details?: Maybe<Array<Maybe<TimezoneType>>>;
  error?: Maybe<ErrorArray>;
};

/** ContactPoint type output description */
export type OutputTypeOfContactPointType = {
  __typename?: 'outputTypeOfContactPointType';
  details?: Maybe<Array<Maybe<TypeOfContactPointType>>>;
  error?: Maybe<ErrorArray>;
};

/** Tax type output description */
export type OutputTypeOfTaxType = {
  __typename?: 'outputTypeOfTaxType';
  details?: Maybe<Array<Maybe<TypeOfTaxType>>>;
  error?: Maybe<ErrorArray>;
};

/** Output Users description */
export type OutputUsersType = {
  __typename?: 'outputUsersType';
  /** Details of the Users */
  details?: Maybe<Array<Maybe<UserType>>>;
  /** Error codes and messages */
  error?: Maybe<ErrorArray>;
};

/** XingularCustomer output description */
export type OutputXingularCustomerType = {
  __typename?: 'outputXingularCustomerType';
  details?: Maybe<Array<Maybe<XingularCustomerType>>>;
  error?: Maybe<ErrorArray>;
};

export enum PaymentMethodEnumType {
  WireTransfer = 'WIRE_TRANSFER',
  DirectDebit = 'DIRECT_DEBIT',
  Paypal = 'PAYPAL'
}

/** Payment method list type output description */
export type PaymentMethodListTypeOutput = {
  __typename?: 'PaymentMethodListTypeOutput';
  details?: Maybe<Array<Maybe<PaymentMethodTypeOutput>>>;
  error?: Maybe<ErrorArray>;
};

/** Payment method description */
export type PaymentMethodTypeInput = {
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** Payment method type */
  payment_method?: Maybe<PaymentMethodEnumType>;
  /** meta data for payment method type as Iban for wire transfer type and email id for paypal type etc */
  data?: Maybe<Scalars['JSON']>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
};

/** Payment method output description */
export type PaymentMethodTypeOutput = {
  __typename?: 'PaymentMethodTypeOutput';
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** Payment method type */
  payment_method?: Maybe<PaymentMethodEnumType>;
  /** data for Organization, used for specifying indication strategy */
  data?: Maybe<Scalars['JSON']>;
  /** Meta info */
  meta?: Maybe<Meta>;
};

/** Payment method description */
export type PaymentMethodUpdateTypeOutput = {
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** Payment method type */
  payment_method?: Maybe<PaymentMethodEnumType>;
  /** meta data for payment method type as Iban for wire transfer type and email id for paypal type etc */
  data?: Maybe<Scalars['JSON']>;
};

/** A policy resource (access control) which combines rules. */
export type PolicyInputType = {
  /** Policy ID. */
  id?: Maybe<Scalars['String']>;
  /** Policy name. */
  name?: Maybe<Scalars['String']>;
  /** Policy description. */
  description?: Maybe<Scalars['String']>;
  /** Policy Effect */
  effect?: Maybe<AccessControlEffectType>;
  /** Combining algorithm to decide among rule effects */
  combining_algorithm?: Maybe<Scalars['String']>;
  /** Rule resource IDs */
  rules?: Maybe<Array<Maybe<Scalars['String']>>>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
  /** Policy target (optional) */
  target?: Maybe<AccessControlnputTargetType>;
};

/** An aggregate of policy resources (access control). */
export type PolicySetInputType = {
  /** Policy set ID. */
  id?: Maybe<Scalars['String']>;
  /** Policy set name. */
  name?: Maybe<Scalars['String']>;
  /** Policy set description. */
  description?: Maybe<Scalars['String']>;
  /** Combining algorithm to decide among policy effects */
  combining_algorithm?: Maybe<Scalars['String']>;
  /** Policy IDs */
  policies?: Maybe<Array<Maybe<Scalars['String']>>>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
  /** Policy set target (optional) */
  target?: Maybe<AccessControlnputTargetType>;
};

/** An aggregate of policy resources. */
export type PolicySetType = {
  __typename?: 'PolicySetType';
  /** Policy set ID. */
  id?: Maybe<Scalars['String']>;
  /** Policy set name. */
  name?: Maybe<Scalars['String']>;
  /** Policy set description. */
  description?: Maybe<Scalars['String']>;
  /** Combining algorithm to decide among policy effects */
  combining_algorithm?: Maybe<Scalars['String']>;
  /** Policy IDs */
  policies?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Policy set target (optional) */
  target?: Maybe<AccessControlTargetType>;
  policies_resolved?: Maybe<Array<Maybe<PolicyType>>>;
  /** Meta info */
  meta?: Maybe<Meta>;
};

/** An aggregate of policy resources (access control). */
export type PolicySetUpdateInputType = {
  /** Policy set ID. */
  id?: Maybe<Scalars['String']>;
  /** Policy set name. */
  name?: Maybe<Scalars['String']>;
  /** Policy set description. */
  description?: Maybe<Scalars['String']>;
  /** Combining algorithm to decide among policy effects */
  combining_algorithm?: Maybe<Scalars['String']>;
  /** Policy IDs */
  policies?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Policy set target (optional) */
  target?: Maybe<AccessControlnputTargetType>;
};

/** Generic rule resource. */
export type PolicyType = {
  __typename?: 'PolicyType';
  /** Policy ID. */
  id?: Maybe<Scalars['String']>;
  /** Policy name. */
  name?: Maybe<Scalars['String']>;
  /** Policy description. */
  description?: Maybe<Scalars['String']>;
  /** Policy Effect */
  effect?: Maybe<AccessControlEffectType>;
  /** Combining algorithm to decide among rule effects */
  combining_algorithm?: Maybe<Scalars['String']>;
  /** Rule resource IDs */
  rules?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Policy target (optional) */
  target?: Maybe<AccessControlTargetType>;
  rules_resolved?: Maybe<Array<Maybe<RuleType>>>;
  /** Meta info */
  meta?: Maybe<Meta>;
};

/** A policy resource (access control) which combines rules. */
export type PolicyUpdateInputType = {
  /** Policy ID. */
  id?: Maybe<Scalars['String']>;
  /** Policy name. */
  name?: Maybe<Scalars['String']>;
  /** Policy description. */
  description?: Maybe<Scalars['String']>;
  /** Policy Effect */
  effect?: Maybe<AccessControlEffectType>;
  /** Combining algorithm to decide among rule effects */
  combining_algorithm?: Maybe<Scalars['String']>;
  /** Rule resource IDs */
  rules?: Maybe<Array<Maybe<Scalars['String']>>>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
  /** Policy target (optional) */
  target?: Maybe<AccessControlnputTargetType>;
};

/** Unit price specification */
export type PriceSpecification = {
  __typename?: 'priceSpecification';
  price?: Maybe<Scalars['Float']>;
  currency?: Maybe<CurrencyType>;
  reference_quantity?: Maybe<RefQuantity>;
};

export enum PriceUnitType {
  /** The unit is the same as the product's quantity */
  Qty = 'QTY',
  /** The unit is fixed for a monthly price */
  Mon = 'MON',
  /** The unit is fixed for an yearly price */
  Ann = 'ANN'
}

/** Product Association */
export type ProductAssociation = {
  __typename?: 'productAssociation';
  product_id?: Maybe<Scalars['String']>;
  product?: Maybe<ProductType>;
};

/** Product Association */
export type ProductAssoction = {
  product_id?: Maybe<Scalars['String']>;
  /** Product price */
  price?: Maybe<InputPriceSpecification>;
};

/** Product proto description */
export type ProductInputType = {
  /** Product ID */
  id?: Maybe<Scalars['String']>;
  /** Product name */
  name?: Maybe<Scalars['String']>;
  /** Product description */
  description?: Maybe<Scalars['String']>;
  /** Taxes applied to product */
  tax_id?: Maybe<Scalars['String']>;
  /** List of Solutions associated with the product */
  solution_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Acccrue scheme which is every term or first term */
  accrue_scheme?: Maybe<AccrueSchemeType>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
  /** Product price */
  price?: Maybe<InputPriceSpecification>;
};

/** Product proto description */
export type ProductType = {
  __typename?: 'ProductType';
  /** Product ID */
  id?: Maybe<Scalars['String']>;
  /** Product name */
  name?: Maybe<Scalars['String']>;
  /** Product description */
  description?: Maybe<Scalars['String']>;
  /** Taxes applied to product */
  tax_id?: Maybe<Scalars['String']>;
  /** List of Solutions associated with the product */
  solution_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Acccrue scheme which is every term or first term */
  accrue_scheme?: Maybe<AccrueSchemeType>;
  /** Meta info */
  meta?: Maybe<Meta>;
  /** Product price */
  price?: Maybe<PriceSpecification>;
  /**  Variant */
  tax?: Maybe<TaxType>;
  solutions?: Maybe<Array<Maybe<SolutionType>>>;
};

/** An aggregate of policy resources (access control). */
export type ProductUpdateInputType = {
  /** Product ID */
  id?: Maybe<Scalars['String']>;
  /** Product name */
  name?: Maybe<Scalars['String']>;
  /** Product description */
  description?: Maybe<Scalars['String']>;
  /** Taxes applied to product */
  tax_id?: Maybe<Scalars['String']>;
  /** List of Solutions associated with the product */
  solution_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Acccrue scheme which is every term or first term */
  accrue_scheme?: Maybe<AccrueSchemeType>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
  /** Product price */
  price?: Maybe<InputPriceSpecification>;
};

/** Attribute from a Target property */
export type PropertiesInputAttribute = {
  /** Attribute ID */
  id?: Maybe<Scalars['String']>;
  /** Attribute value */
  value?: Maybe<Scalars['Float']>;
  /** Attribute unit */
  unit?: Maybe<Scalars['String']>;
};

/** Attribute from a Target property */
export type PropertiesOutputAttribute = {
  __typename?: 'PropertiesOutputAttribute';
  /** Attribute ID */
  id?: Maybe<Scalars['String']>;
  /** Attribute value */
  value?: Maybe<Scalars['Float']>;
  /** Attribute unit */
  unit?: Maybe<Scalars['String']>;
};

export type ReactivateContractsInput = {
  contractIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ReactivateContractsPayload = {
  __typename?: 'reactivateContractsPayload';
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Reference quantity for product price specifications */
export type RefQuantity = {
  __typename?: 'refQuantity';
  value?: Maybe<Scalars['Float']>;
  unit_code?: Maybe<PriceUnitType>;
};

export type RegisterUserInput = {
  user?: Maybe<UserInputType>;
  organization?: Maybe<OrgInputType>;
  contact_points?: Maybe<Array<Maybe<ContactPointsUserInputType>>>;
  captcha_code?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RegisterUserPayload = {
  __typename?: 'RegisterUserPayload';
  status?: Maybe<Scalars['String']>;
  error?: Maybe<Error>;
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Repeat Job options */
export type Repeat = {
  /** Interval to run a job periodically in milliseconds */
  every?: Maybe<Scalars['Int']>;
  /** Interval to run a job periodically in a cron format (e.g: "0 0 5 * * *"). This should only be used in recurring jobs */
  cron?: Maybe<Scalars['String']>;
  /** Used to define the exact time at which job should start repeating. Ex: "Jan 15, 2018 10:30:00" */
  startDate?: Maybe<Scalars['String']>;
  /** Used to define the exact time at which job should stop repeating. Ex: "Jan 15, 2018 10:30:00" */
  endDate?: Maybe<Scalars['String']>;
  /** How many times a job has repeated */
  count?: Maybe<Scalars['Int']>;
};

/** Repeat Job options */
export type RepeatOutputType = {
  __typename?: 'RepeatOutputType';
  /** Interval to run a job periodically in milliseconds */
  every?: Maybe<Scalars['Int']>;
  /** Interval to run a job periodically in a cron format (e.g: "0 0 5 * * *"). This should only be used in recurring jobs */
  cron?: Maybe<Scalars['String']>;
  /** Used to define the exact time at which job should start repeating. Ex: "Jan 15, 2018 10:30:00" */
  startDate?: Maybe<Scalars['String']>;
  /** Used to define the exact time at which job should stop repeating. Ex: "Jan 15, 2018 10:30:00" */
  endDate?: Maybe<Scalars['String']>;
  /** How many times a job has repeated */
  count?: Maybe<Scalars['Int']>;
};

export type RequestEmailChangeInput = {
  id?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RequestEmailChangePayload = {
  __typename?: 'requestEmailChangePayload';
  status?: Maybe<Scalars['String']>;
  error?: Maybe<Error>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RequestPasswordChangeInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RequestPasswordChangePayload = {
  __typename?: 'requestPasswordChangePayload';
  status?: Maybe<Scalars['String']>;
  error?: Maybe<Error>;
  clientMutationId?: Maybe<Scalars['String']>;
};

/** User data */
export type ResponseSafeUserType = {
  __typename?: 'ResponseSafeUserType';
  /** User ID */
  id?: Maybe<Scalars['String']>;
  /** User Name */
  name?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  /** User Email adress */
  email?: Maybe<Scalars['String']>;
  /** Default Organization Scope for this User */
  default_scope?: Maybe<Scalars['String']>;
  /** User role associations */
  role_associations?: Maybe<Array<Maybe<RoleAssociation>>>;
  /** List of User roles */
  role_associations_resolved?: Maybe<Array<Maybe<RoleAssociationResolved>>>;
  /** User locale settings (default is "de-DE") */
  locale_id?: Maybe<Scalars['String']>;
  /** User locale settings (default is "de-DE") */
  locale?: Maybe<LocaleType>;
  /** User timezone */
  timezone_id?: Maybe<Scalars['String']>;
  /** User timezone */
  timezone?: Maybe<TimezoneType>;
  /** Guest user */
  guest?: Maybe<Scalars['Boolean']>;
  /** Image URL and other details */
  image?: Maybe<ImageType>;
  /** User's current scope (if set, it overrides `default_scope`) */
  scope?: Maybe<UserScopeType>;
};

export type RevertContractsCancellationInput = {
  /** An array of IDs for the Contracts */
  contractIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RevertContractsCancellationPayload = {
  __typename?: 'revertContractsCancellationPayload';
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Role and attributes */
export type RoleAssociation = {
  __typename?: 'RoleAssociation';
  /** Role ID */
  role?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<Maybe<Attribute>>>;
};

/** Role and organization */
export type RoleAssociationResolved = {
  __typename?: 'RoleAssociationResolved';
  /** Role */
  role?: Maybe<RoleType>;
  /** Organization */
  organizations?: Maybe<Array<Maybe<OrganizationType>>>;
};

/** Role proto description */
export type RoleInputType = {
  /** Role ID */
  id?: Maybe<Scalars['String']>;
  /** Role name */
  name?: Maybe<Scalars['String']>;
  /** Role description */
  description?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
};

/** Role proto description */
export type RoleType = {
  __typename?: 'RoleType';
  /** Role ID */
  id?: Maybe<Scalars['String']>;
  /** Role name */
  name?: Maybe<Scalars['String']>;
  /** Role description */
  description?: Maybe<Scalars['String']>;
  /** Meta info */
  meta?: Maybe<Meta>;
};

/** Role proto description */
export type RoleUpdateInputType = {
  /** Role ID */
  id?: Maybe<Scalars['String']>;
  /** Role name */
  name?: Maybe<Scalars['String']>;
  /** Role description */
  description?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
};

/** The root of all queries */
export type RootQuery = {
  __typename?: 'RootQuery';
  getAllAddresses?: Maybe<OutputAddressType>;
  getAllContactPointTypes?: Maybe<OutputTypeOfContactPointType>;
  getAllContactPoints?: Maybe<OutputContactPointsType>;
  getAllCountries?: Maybe<OutputCountryType>;
  getAllCredentials?: Maybe<OutputCredentialType>;
  getAllDevices?: Maybe<OutputDeviceType>;
  getAllDeviceTypes?: Maybe<TypeOfDeviceOutputType>;
  getAllDeviceMakes?: Maybe<OutputDeviceMakeType>;
  getDeviceActivity?: Maybe<DeviceAcvityType>;
  getAllContracts?: Maybe<OutputContractType>;
  getAllMicroServices?: Maybe<OutputServicesType>;
  getAllInvoices?: Maybe<OutputInvoiceType>;
  getAllLocales?: Maybe<OutputLocaleType>;
  getAllTimezones?: Maybe<OutputTimezoneType>;
  getAllLocations?: Maybe<OutputLocationType>;
  getAllOrganizations?: Maybe<OutputOrgType>;
  getAllPaymentMethods?: Maybe<PaymentMethodListTypeOutput>;
  getAllProducts?: Maybe<OutputProductType>;
  getAllServiceTeams?: Maybe<OutputServiceTeamType>;
  getAllSolutions?: Maybe<OutputSolutionType>;
  getAllTaxes?: Maybe<OutputTaxType>;
  getAllTaxTypes?: Maybe<OutputTypeOfTaxType>;
  getAllXingularCustomers?: Maybe<OutputXingularCustomerType>;
  getAllScheduledJobs?: Maybe<JobsList>;
  getAllCommands?: Maybe<OutputCommandType>;
  getAllRoles?: Maybe<OutputRoleType>;
  getAllUsers?: Maybe<OutputUsersType>;
  getAllPolicySets?: Maybe<OutputPolicySetType>;
  getAllPolicies?: Maybe<OutputPolicyType>;
  getAllRules?: Maybe<OutputRuleType>;
  getAllPermissions?: Maybe<OutputPermissionsType>;
  getDashboardData?: Maybe<SearchResultType>;
  fullTextSearch?: Maybe<SearchResultType>;
  session?: Maybe<ResponseSafeUserType>;
  listAllFiles?: Maybe<OutputFileListType>;
  getFile?: Maybe<OutputFileType>;
};


/** The root of all queries */
export type RootQueryGetAllAddressesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<FilterOptsInput>>>;
  sort?: Maybe<SortOpts>;
  scope?: Maybe<ScopeInputType>;
};


/** The root of all queries */
export type RootQueryGetAllContactPointTypesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<FilterOptsInput>>>;
  sort?: Maybe<SortOpts>;
  scope?: Maybe<ScopeInputType>;
};


/** The root of all queries */
export type RootQueryGetAllContactPointsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<FilterOptsInput>>>;
  sort?: Maybe<SortOpts>;
  scope?: Maybe<ScopeInputType>;
};


/** The root of all queries */
export type RootQueryGetAllCountriesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<FilterOptsInput>>>;
  sort?: Maybe<SortOpts>;
  scope?: Maybe<ScopeInputType>;
};


/** The root of all queries */
export type RootQueryGetAllCredentialsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<FilterOptsInput>>>;
  sort?: Maybe<SortOpts>;
  scope?: Maybe<ScopeInputType>;
};


/** The root of all queries */
export type RootQueryGetAllDevicesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<FilterOptsInput>>>;
  sort?: Maybe<SortOpts>;
  scope?: Maybe<ScopeInputType>;
};


/** The root of all queries */
export type RootQueryGetAllDeviceTypesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<FilterOptsInput>>>;
  sort?: Maybe<SortOpts>;
  scope?: Maybe<ScopeInputType>;
};


/** The root of all queries */
export type RootQueryGetAllDeviceMakesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<FilterOptsInput>>>;
  sort?: Maybe<SortOpts>;
  scope?: Maybe<ScopeInputType>;
};


/** The root of all queries */
export type RootQueryGetDeviceActivityArgs = {
  ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** The root of all queries */
export type RootQueryGetAllContractsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<FilterOptsInput>>>;
  sort?: Maybe<SortOpts>;
  scope?: Maybe<ScopeInputType>;
};


/** The root of all queries */
export type RootQueryGetAllMicroServicesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<FilterOptsInput>>>;
  sort?: Maybe<SortOpts>;
  scope?: Maybe<ScopeInputType>;
};


/** The root of all queries */
export type RootQueryGetAllInvoicesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<FilterOptsInput>>>;
  sort?: Maybe<SortOpts>;
  scope?: Maybe<ScopeInputType>;
};


/** The root of all queries */
export type RootQueryGetAllLocalesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<FilterOptsInput>>>;
  sort?: Maybe<SortOpts>;
  scope?: Maybe<ScopeInputType>;
};


/** The root of all queries */
export type RootQueryGetAllTimezonesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<FilterOptsInput>>>;
  sort?: Maybe<SortOpts>;
  scope?: Maybe<ScopeInputType>;
};


/** The root of all queries */
export type RootQueryGetAllLocationsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<FilterOptsInput>>>;
  sort?: Maybe<SortOpts>;
  scope?: Maybe<ScopeInputType>;
};


/** The root of all queries */
export type RootQueryGetAllOrganizationsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<FilterOptsInput>>>;
  sort?: Maybe<SortOpts>;
  scope?: Maybe<ScopeInputType>;
};


/** The root of all queries */
export type RootQueryGetAllPaymentMethodsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<FilterOptsInput>>>;
  sort?: Maybe<SortOpts>;
  scope?: Maybe<ScopeInputType>;
};


/** The root of all queries */
export type RootQueryGetAllProductsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<FilterOptsInput>>>;
  sort?: Maybe<SortOpts>;
  scope?: Maybe<ScopeInputType>;
};


/** The root of all queries */
export type RootQueryGetAllServiceTeamsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<FilterOptsInput>>>;
  sort?: Maybe<SortOpts>;
  scope?: Maybe<ScopeInputType>;
};


/** The root of all queries */
export type RootQueryGetAllSolutionsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<FilterOptsInput>>>;
  sort?: Maybe<SortOpts>;
  scope?: Maybe<ScopeInputType>;
};


/** The root of all queries */
export type RootQueryGetAllTaxesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<FilterOptsInput>>>;
  sort?: Maybe<SortOpts>;
  scope?: Maybe<ScopeInputType>;
};


/** The root of all queries */
export type RootQueryGetAllTaxTypesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<FilterOptsInput>>>;
  sort?: Maybe<SortOpts>;
  scope?: Maybe<ScopeInputType>;
};


/** The root of all queries */
export type RootQueryGetAllXingularCustomersArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<FilterOptsInput>>>;
  sort?: Maybe<SortOpts>;
  scope?: Maybe<ScopeInputType>;
};


/** The root of all queries */
export type RootQueryGetAllScheduledJobsArgs = {
  filter?: Maybe<JobFilterOpts>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortingOrder>;
};


/** The root of all queries */
export type RootQueryGetAllCommandsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<FilterOptsInput>>>;
  sort?: Maybe<SortOpts>;
  scope?: Maybe<ScopeInputType>;
};


/** The root of all queries */
export type RootQueryGetAllRolesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<FilterOptsInput>>>;
  sort?: Maybe<SortOpts>;
  scope?: Maybe<ScopeInputType>;
};


/** The root of all queries */
export type RootQueryGetAllUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<FilterOptsInput>>>;
  sort?: Maybe<SortOpts>;
  scope?: Maybe<ScopeInputType>;
  role_association?: Maybe<InputUserRole>;
};


/** The root of all queries */
export type RootQueryGetAllPolicySetsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<FilterOptsInput>>>;
  sort?: Maybe<SortOpts>;
  scope?: Maybe<ScopeInputType>;
};


/** The root of all queries */
export type RootQueryGetAllPoliciesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<FilterOptsInput>>>;
  sort?: Maybe<SortOpts>;
  scope?: Maybe<ScopeInputType>;
};


/** The root of all queries */
export type RootQueryGetAllRulesArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  filter?: Maybe<Array<Maybe<FilterOptsInput>>>;
  sort?: Maybe<SortOpts>;
  scope?: Maybe<ScopeInputType>;
};


/** The root of all queries */
export type RootQueryGetDashboardDataArgs = {
  index?: Maybe<IndexNames>;
  organization?: Maybe<Scalars['String']>;
  location_id?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Date']>;
  to?: Maybe<Scalars['Date']>;
};


/** The root of all queries */
export type RootQueryFullTextSearchArgs = {
  collection?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};


/** The root of all queries */
export type RootQueryListAllFilesArgs = {
  bucket?: Maybe<BucketNames>;
  filter?: Maybe<FilterOptsInput>;
};


/** The root of all queries */
export type RootQueryGetFileArgs = {
  key?: Maybe<Scalars['String']>;
  bucket?: Maybe<BucketNames>;
};

/** A context query, used to pull resources on the access control service to perform a rule-level decision */
export type RuleContextQuery = {
  __typename?: 'ruleContextQuery';
  filters?: Maybe<Array<Maybe<FilterOpts>>>;
  query?: Maybe<Scalars['String']>;
};

/** A context query, used to pull resources on the access control service to perform a rule-level decision */
export type RuleContextQueryInput = {
  filters?: Maybe<Array<Maybe<FilterOptsInput>>>;
  query?: Maybe<Scalars['String']>;
};

/** Rule resource (access control). */
export type RuleInputType = {
  /** Rule ID. */
  id?: Maybe<Scalars['String']>;
  /** Rule name. */
  name?: Maybe<Scalars['String']>;
  /** Rule description. */
  description?: Maybe<Scalars['String']>;
  /** JS code to evaluate special conditions (optional) */
  condition?: Maybe<Scalars['String']>;
  /** Rule Effect */
  effect?: Maybe<AccessControlEffectType>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
  /** Rule target */
  target?: Maybe<AccessControlnputTargetType>;
  /** GraphQL query to retrieve necessary external info (optional) */
  context_query?: Maybe<RuleContextQueryInput>;
};

/** Generic rule resource. */
export type RuleType = {
  __typename?: 'RuleType';
  /** Rule ID. */
  id?: Maybe<Scalars['String']>;
  /** Rule name. */
  name?: Maybe<Scalars['String']>;
  /** Rule description. */
  description?: Maybe<Scalars['String']>;
  /** JS code to evaluate special conditions (optional) */
  condition?: Maybe<Scalars['String']>;
  /** Rule Effect */
  effect?: Maybe<AccessControlEffectType>;
  /** Rule target */
  target?: Maybe<AccessControlTargetType>;
  /** GraphQL query to retrieve necessary external info (optional) */
  context_query?: Maybe<RuleContextQuery>;
  /** Meta info */
  meta?: Maybe<Meta>;
};

/** Rule resource (access control). */
export type RuleUpdateInputType = {
  /** Rule ID. */
  id?: Maybe<Scalars['String']>;
  /** Rule name. */
  name?: Maybe<Scalars['String']>;
  /** Rule description. */
  description?: Maybe<Scalars['String']>;
  /** JS code to evaluate special conditions (optional) */
  condition?: Maybe<Scalars['String']>;
  /** Rule Effect */
  effect?: Maybe<AccessControlEffectType>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
  /** Rule target */
  target?: Maybe<AccessControlnputTargetType>;
  /** GraphQL query to retrieve necessary external info (optional) */
  context_query?: Maybe<RuleContextQueryInput>;
};

export type ScheduleJobInput = {
  listOfJobs?: Maybe<Array<Maybe<JobScheduler>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ScheduleJobPayload = {
  __typename?: 'ScheduleJobPayload';
  status?: Maybe<Scalars['String']>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

/** A role scope */
export type ScopeInputType = {
  entity?: Maybe<Scalars['String']>;
  instance?: Maybe<Scalars['String']>;
};

/** Result of a full text search */
export type SearchResultType = {
  __typename?: 'SearchResultType';
  /** Indexed items */
  data?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  error?: Maybe<Error>;
};

/** ServiceTeam proto description */
export type ServiceTeamInputType = {
  /** ServiceTeam ID */
  id?: Maybe<Scalars['String']>;
  /** Service team name */
  name?: Maybe<Scalars['String']>;
  /** Service team name (optional) */
  description?: Maybe<Scalars['String']>;
  /** User ID of the ServiceTeams's leader */
  leader_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** CC email list */
  cc_mail_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** time zonde id for the service team */
  timezone_id?: Maybe<Scalars['String']>;
  /** team notification time */
  notification_time?: Maybe<Scalars['String']>;
  /** List of rooms a service team is responsible for */
  room_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  organization_id?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
};

/** ServiceTeam2 proto description */
export type ServiceTeamType = {
  __typename?: 'ServiceTeamType';
  /** ServiceTeam ID */
  id?: Maybe<Scalars['String']>;
  /** Service team name */
  name?: Maybe<Scalars['String']>;
  /** Service team name (optional) */
  description?: Maybe<Scalars['String']>;
  /** User ID of the ServiceTeams's leader */
  leader_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** CC email list */
  cc_mail_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** time zonde id for the service team */
  timezone_id?: Maybe<Scalars['String']>;
  /** team notification time */
  notification_time?: Maybe<Scalars['String']>;
  /** List of rooms a service team is responsible for */
  room_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  organization_id?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  /** List of users which coordinate a service team */
  leaders?: Maybe<Array<Maybe<UserType>>>;
  /** List of rooms a service team is responsible for */
  rooms?: Maybe<Array<Maybe<LocationType>>>;
  organization?: Maybe<OrganizationType>;
  /** Meta info */
  meta?: Maybe<Meta>;
};

/** ServiceTeam proto description */
export type ServiceTeamUpdateInputType = {
  /** ServiceTeam ID */
  id?: Maybe<Scalars['String']>;
  /** Service team name */
  name?: Maybe<Scalars['String']>;
  /** Service team name (optional) */
  description?: Maybe<Scalars['String']>;
  /** User ID of the ServiceTeams's leader */
  leader_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** CC email list */
  cc_mail_list?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** time zonde id for the service team */
  timezone_id?: Maybe<Scalars['String']>;
  /** team notification time */
  notification_time?: Maybe<Scalars['String']>;
  /** List of rooms a service team is responsible for */
  room_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  organization_id?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
};

export type SetSessionScopeInput = {
  orgID?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type SetSessionScopePayload = {
  __typename?: 'setSessionScopePayload';
  status?: Maybe<Scalars['String']>;
  error?: Maybe<Error>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type SignInApiKeyInput = {
  apiKey?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type SignInApiKeyPayload = {
  __typename?: 'signInApiKeyPayload';
  status?: Maybe<Scalars['String']>;
  error?: Maybe<Error>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type SignInUserInput = {
  identifier?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  rememberMe?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type SignInUserPayload = {
  __typename?: 'signInUserPayload';
  /** Details of the User */
  me?: Maybe<ResponseSafeUserType>;
  /** OIDC access_token, id_token */
  tokens?: Maybe<TokenType>;
  error?: Maybe<Error>;
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Room-date association for administrative skip cancellations */
export type SkipCancelInputType = {
  /** Room number */
  room?: Maybe<Scalars['String']>;
  /** Cancellation date */
  day?: Maybe<Scalars['String']>;
};

/** Solution proto description */
export type SolutionInputType = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
};

/** Solution proto description */
export type SolutionType = {
  __typename?: 'SolutionType';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** Meta info */
  meta?: Maybe<Meta>;
};

/** Solution proto description */
export type SolutionUpdateInputType = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

/** Sorts the fields in either Ascending or Descending order */
export enum SortingOrder {
  /** Sort in Ascending order */
  Asc = 'ASC',
  /** Sort in Descending order */
  Desc = 'DESC'
}

/** For sotring based on fileds */
export type SortOpts = {
  /** Field names to be sorted on */
  field?: Maybe<Scalars['String']>;
  /** Sorting Options */
  order?: Maybe<SortingOrder>;
};

/** Tax proto description */
export type TaxInputType = {
  /** Tax ID */
  id?: Maybe<Scalars['String']>;
  /** Country of tax */
  country_id?: Maybe<Scalars['String']>;
  /** Tax rate */
  rate?: Maybe<Scalars['Float']>;
  /**  Variant */
  variant?: Maybe<Scalars['String']>;
  /**  Tax type */
  type_id?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
};

/** Tax proto description */
export type TaxType = {
  __typename?: 'TaxType';
  /** Tax ID */
  id?: Maybe<Scalars['String']>;
  /** Country of tax */
  country_id?: Maybe<Scalars['String']>;
  /** Tax rate */
  rate?: Maybe<Scalars['Float']>;
  /**  Variant */
  variant?: Maybe<Scalars['String']>;
  /**  Tax type */
  type_id?: Maybe<Scalars['String']>;
  /** Meta info */
  meta?: Maybe<Meta>;
  /** Country */
  country?: Maybe<CountryType>;
  /**  Tax type */
  tax_type?: Maybe<TypeOfTaxType>;
};

/** Tax proto description */
export type TaxUpdateInputType = {
  /** Tax ID */
  id?: Maybe<Scalars['String']>;
  /** Country of tax */
  country_id?: Maybe<Scalars['String']>;
  /** Tax rate */
  rate?: Maybe<Scalars['Float']>;
  /**  Variant */
  variant?: Maybe<Scalars['String']>;
  /**  Tax type */
  type_id?: Maybe<Scalars['String']>;
};

/** Timezone proto description */
export type TimezoneInputType = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
};

/** Timezone proto description */
export type TimezoneType = {
  __typename?: 'TimezoneType';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  /** Meta info */
  meta?: Maybe<Meta>;
};

/** Timezone proto description */
export type TimezoneUpdateInputType = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

/** OIDC access_token, id_token */
export type TokenType = {
  __typename?: 'TokenType';
  access_token?: Maybe<Scalars['String']>;
  id_token?: Maybe<Scalars['String']>;
  expires_in?: Maybe<Scalars['Int']>;
  token_type?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
};

/** ContactPoint message description */
export type TypeOfContactPointInputType = {
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** ContactPoint type */
  type?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
};

/** ContactPoint message description */
export type TypeOfContactPointType = {
  __typename?: 'TypeOfContactPointType';
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** ContactPoint type */
  type?: Maybe<Scalars['String']>;
  /** Meta info */
  meta?: Maybe<Meta>;
};

/** ContactPoint message description */
export type TypeOfContactPointUpdateInputType = {
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** ContactPoint type */
  type?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
};

/** DeviceType */
export type TypeOfDeviceInput = {
  /** Device ID */
  id?: Maybe<Scalars['String']>;
  /** Device name (optional) */
  name?: Maybe<Scalars['String']>;
  /** Device name (optional) */
  description?: Maybe<Scalars['String']>;
  /** Image URL */
  image?: Maybe<Scalars['String']>;
  /** Device type variant */
  variant?: Maybe<Scalars['String']>;
  /** Original Equipment Manufacturer */
  oem_id?: Maybe<Scalars['String']>;
  /** Device product type */
  product_type?: Maybe<Scalars['String']>;
  /** Actual device type */
  device_type?: Maybe<DeviceEnumType>;
  /** Device maker ID */
  make_id?: Maybe<Scalars['String']>;
  properties?: Maybe<Array<Maybe<PropertiesInputAttribute>>>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
};

export type TypeOfDeviceOutputType = {
  __typename?: 'TypeOfDeviceOutputType';
  details?: Maybe<Array<Maybe<TypeOfDeviceType>>>;
  error?: Maybe<ErrorArray>;
};

/** DeviceType */
export type TypeOfDeviceType = {
  __typename?: 'TypeOfDeviceType';
  /** Device ID */
  id?: Maybe<Scalars['String']>;
  /** Device name (optional) */
  name?: Maybe<Scalars['String']>;
  /** Device name (optional) */
  description?: Maybe<Scalars['String']>;
  /** Image URL */
  image?: Maybe<Scalars['String']>;
  /** Device type variant */
  variant?: Maybe<Scalars['String']>;
  /** Original Equipment Manufacturer */
  oem_id?: Maybe<Scalars['String']>;
  /** Device product type */
  product_type?: Maybe<Scalars['String']>;
  /** Actual device type */
  device_type?: Maybe<DeviceEnumType>;
  /** Device maker ID */
  make_id?: Maybe<Scalars['String']>;
  /** Meta info */
  meta?: Maybe<Meta>;
  make?: Maybe<DeviceMakeType>;
  /** Properties of device type */
  properties?: Maybe<Array<Maybe<PropertiesOutputAttribute>>>;
};

/** DeviceType */
export type TypeOfDeviceUpdateInput = {
  /** Device ID */
  id?: Maybe<Scalars['String']>;
  /** Device name (optional) */
  name?: Maybe<Scalars['String']>;
  /** Device name (optional) */
  description?: Maybe<Scalars['String']>;
  /** Image URL */
  image?: Maybe<Scalars['String']>;
  /** Device type variant */
  variant?: Maybe<Scalars['String']>;
  /** Original Equipment Manufacturer */
  oem_id?: Maybe<Scalars['String']>;
  /** Device product type */
  product_type?: Maybe<Scalars['String']>;
  /** Actual device type */
  device_type?: Maybe<DeviceEnumType>;
  /** Device maker ID */
  make_id?: Maybe<Scalars['String']>;
  properties?: Maybe<Array<Maybe<PropertiesInputAttribute>>>;
};

/** Tax message description */
export type TypeOfTaxInputType = {
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** Tax type */
  type?: Maybe<Scalars['String']>;
  /** Tax description */
  description?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
};

/** Tax message description */
export type TypeOfTaxType = {
  __typename?: 'TypeOfTaxType';
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** Tax type */
  type?: Maybe<Scalars['String']>;
  /** Tax description */
  description?: Maybe<Scalars['String']>;
  /** Meta info */
  meta?: Maybe<Meta>;
};

/** Tax message description */
export type TypeOfTaxUpdateInputType = {
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** Tax type */
  type?: Maybe<Scalars['String']>;
  /** Tax description */
  description?: Maybe<Scalars['String']>;
};

export type UnregisterUserInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UnregisterUserPayload = {
  __typename?: 'unregisterUserPayload';
  status?: Maybe<Scalars['String']>;
  error?: Maybe<Error>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateAddressesInput = {
  listOfAddresses?: Maybe<Array<Maybe<AddressUpdateInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateAddressesPayload = {
  __typename?: 'updateAddressesPayload';
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateAddressTypesInput = {
  listOfContactPointTypes?: Maybe<Array<Maybe<TypeOfContactPointUpdateInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateAddressTypesPayload = {
  __typename?: 'updateAddressTypesPayload';
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateContactPointsInput = {
  listOfContactPoints?: Maybe<Array<Maybe<ContactPointsUpdateInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateContactPointsPayload = {
  __typename?: 'updateContactPointsPayload';
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateCountriesInput = {
  listOfCountries?: Maybe<Array<Maybe<CountryUpdateInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateCountriesPayload = {
  __typename?: 'updateCountriesPayload';
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateCredentialsInput = {
  listOfCredentials?: Maybe<Array<Maybe<CredentialUpdateInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateCredentialsPayload = {
  __typename?: 'updateCredentialsPayload';
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateDeviceMakesInput = {
  listOfDeviceMakes?: Maybe<Array<Maybe<DeviceMakeUpdateInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateDeviceMakesPayload = {
  __typename?: 'updateDeviceMakesPayload';
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateDevicesInput = {
  listOfDevices?: Maybe<Array<Maybe<DeviceUpdateInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateDevicesPayload = {
  __typename?: 'updateDevicesPayload';
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateDeviceTypesInput = {
  listOfDeviceTypes?: Maybe<Array<Maybe<TypeOfDeviceUpdateInput>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateDeviceTypesPayload = {
  __typename?: 'updateDeviceTypesPayload';
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateLocalesInput = {
  listOfLocales?: Maybe<Array<Maybe<LocaleUpdateInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateLocalesPayload = {
  __typename?: 'updateLocalesPayload';
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateLocationsInput = {
  listOfLocations?: Maybe<Array<Maybe<LocationUpdateInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateLocationsPayload = {
  __typename?: 'updateLocationsPayload';
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateOrganizationsInput = {
  listOfOrganizations?: Maybe<Array<Maybe<OrganizationUpdateInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateOrganizationsPayload = {
  __typename?: 'updateOrganizationsPayload';
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdatePaymentMethodsInput = {
  listOfPaymentMethods?: Maybe<Array<Maybe<PaymentMethodUpdateTypeOutput>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdatePaymentMethodsPayload = {
  __typename?: 'updatePaymentMethodsPayload';
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdatePoliciesInput = {
  listOfPolicies?: Maybe<Array<Maybe<PolicyUpdateInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdatePoliciesPayload = {
  __typename?: 'updatePoliciesPayload';
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdatePolicySetsInput = {
  listOfPolicySets?: Maybe<Array<Maybe<PolicySetUpdateInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdatePolicySetsPayload = {
  __typename?: 'updatePolicySetsPayload';
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateProductsInput = {
  listOfProducts?: Maybe<Array<Maybe<ProductUpdateInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateProductsPayload = {
  __typename?: 'updateProductsPayload';
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateRolesInput = {
  listOfRoles?: Maybe<Array<Maybe<RoleUpdateInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateRolesPayload = {
  __typename?: 'updateRolesPayload';
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateRulesInput = {
  listOfRules?: Maybe<Array<Maybe<RuleUpdateInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateRulesPayload = {
  __typename?: 'updateRulesPayload';
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateServiceTeamsInput = {
  listOfServiceTeams?: Maybe<Array<Maybe<ServiceTeamUpdateInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateServiceTeamsPayload = {
  __typename?: 'updateServiceTeamsPayload';
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateSolutionsInput = {
  listOfSolutions?: Maybe<Array<Maybe<SolutionUpdateInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateSolutionsPayload = {
  __typename?: 'updateSolutionsPayload';
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateTaxesInput = {
  listOfTaxes?: Maybe<Array<Maybe<TaxUpdateInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateTaxesPayload = {
  __typename?: 'updateTaxesPayload';
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateTaxTypesInput = {
  listOfTaxTypes?: Maybe<Array<Maybe<TypeOfTaxUpdateInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateTaxTypesPayload = {
  __typename?: 'updateTaxTypesPayload';
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateTimezonesInput = {
  listOfTimezones?: Maybe<Array<Maybe<TimezoneUpdateInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateTimezonesPayload = {
  __typename?: 'updateTimezonesPayload';
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};

/** User data */
export type UpdateUserInputType = {
  /** User ID (used to locate user to be updated) */
  id?: Maybe<Scalars['String']>;
  /** User name */
  name?: Maybe<Scalars['String']>;
  /** User's first name */
  first_name?: Maybe<Scalars['String']>;
  /** User's last name name */
  last_name?: Maybe<Scalars['String']>;
  /** If the user was activated via the activation process */
  active?: Maybe<Scalars['Boolean']>;
  /** User Role type */
  role_associations?: Maybe<Array<Maybe<InputRoleAssociation>>>;
  /** User locale settings (default is 'de-DE') */
  locale_id?: Maybe<Scalars['String']>;
  /** User timezone settings (default is 'Europe/Berlin') */
  timezone_id?: Maybe<Scalars['String']>;
  /** Default Organization Scope for this User */
  default_scope?: Maybe<Scalars['String']>;
  /** Image URL and other details */
  image?: Maybe<ImageInputType>;
  /** updated email ID */
  email?: Maybe<Scalars['String']>;
  /** updated password */
  password?: Maybe<Scalars['String']>;
};

export type UpdateUsersInput = {
  listOfUsers?: Maybe<Array<Maybe<UpdateUserInputType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateUsersPayload = {
  __typename?: 'updateUsersPayload';
  status?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<ErrorArray>;
  clientMutationId?: Maybe<Scalars['String']>;
};


export type UploadFileInput = {
  fileName?: Maybe<Scalars['Upload']>;
  /** Name of the bucket */
  bucket?: Maybe<Scalars['String']>;
  /** options */
  options?: Maybe<OptionsInputType>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UploadFilePayload = {
  __typename?: 'uploadFilePayload';
  status?: Maybe<Scalars['String']>;
  Url?: Maybe<Scalars['String']>;
  Bucket?: Maybe<Scalars['String']>;
  Key?: Maybe<Scalars['String']>;
  Tags?: Maybe<Array<Maybe<Attribute>>>;
  Length?: Maybe<Scalars['Int']>;
  error?: Maybe<Error>;
  clientMutationId?: Maybe<Scalars['String']>;
};

/** type of User */
export enum UserEnumType {
  /** User belonging to an Organization */
  OrgUser = 'ORG_USER',
  /** Individual User */
  IndividualUser = 'INDIVIDUAL_USER',
  /** Guest User */
  Guest = 'GUEST'
}

/** User data */
export type UserInputType = {
  /** User ID */
  id?: Maybe<Scalars['String']>;
  /** Type of User */
  user_type?: Maybe<UserEnumType>;
  /** Username */
  name?: Maybe<Scalars['String']>;
  /** User's first name */
  first_name?: Maybe<Scalars['String']>;
  /** User's last name */
  last_name?: Maybe<Scalars['String']>;
  /** User Email address */
  email?: Maybe<Scalars['String']>;
  /** Password for this User */
  password?: Maybe<Scalars['String']>;
  /** Default Organization Scope for this User */
  default_scope?: Maybe<Scalars['String']>;
  /** Guest user */
  guest?: Maybe<Scalars['Boolean']>;
  /** User Role type */
  role_associations?: Maybe<Array<Maybe<InputRoleAssociation>>>;
  /** User locale settings (default is "de-DE") */
  locale_id?: Maybe<Scalars['String']>;
  /** User timezone settings (default is "Europe/Berlin") */
  timezone_id?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
  /** Image URL and other details */
  image?: Maybe<ImageInputType>;
  /** flag set to true when inviting user */
  invite?: Maybe<Scalars['Boolean']>;
};

/** User scope object */
export type UserScopeType = {
  __typename?: 'userScopeType';
  role_associations?: Maybe<Array<Maybe<RoleAssociation>>>;
  /** The chosen scope's organization ID */
  scopeOrganization?: Maybe<Scalars['String']>;
};

/** User data */
export type UserType = {
  __typename?: 'UserType';
  /** User ID */
  id?: Maybe<Scalars['String']>;
  /** User Name */
  name?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  /** User Email adress */
  email?: Maybe<Scalars['String']>;
  /** Default Organization Scope for this User */
  default_scope?: Maybe<Scalars['String']>;
  /** User role associations */
  role_associations?: Maybe<Array<Maybe<RoleAssociation>>>;
  /** List of User roles */
  role_associations_resolved?: Maybe<Array<Maybe<RoleAssociationResolved>>>;
  /** User locale settings (default is "de-DE") */
  locale_id?: Maybe<Scalars['String']>;
  /** User locale settings (default is "de-DE") */
  locale?: Maybe<LocaleType>;
  /** User timezone */
  timezone_id?: Maybe<Scalars['String']>;
  /** User timezone */
  timezone?: Maybe<TimezoneType>;
  /** Guest user */
  guest?: Maybe<Scalars['Boolean']>;
  /** Image URL and other details */
  image?: Maybe<ImageType>;
  /** Meta info */
  meta?: Maybe<Meta>;
  /** User Activation status 1-Active, 0-Inactive */
  active?: Maybe<Scalars['Boolean']>;
  /** Activation code used to activate the User */
  activation_code?: Maybe<Scalars['String']>;
  /** True from time of registry until activation is complete */
  unauthenticated?: Maybe<Scalars['Boolean']>;
};

/** XingularCustomer message description */
export type XingularCustomerInputType = {
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** Organization bound to the Xingular Customer */
  organization_id?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<Maybe<InputAttribute>>>;
};

/** XingularCustomer message description */
export type XingularCustomerType = {
  __typename?: 'XingularCustomerType';
  /** ID */
  id?: Maybe<Scalars['String']>;
  /** Organization bound to the Xingular Customer */
  organization_id?: Maybe<Scalars['String']>;
  /** Organization details */
  organization?: Maybe<OrganizationType>;
  /** Meta info */
  meta?: Maybe<Meta>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AccessControlEffectType: AccessControlEffectType;
  AccessControlnputTargetType: AccessControlnputTargetType;
  AccessControlTargetType: ResolverTypeWrapper<AccessControlTargetType>;
  AccrueSchemeType: AccrueSchemeType;
  activateDevicesInput: ActivateDevicesInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  activateDevicesPayload: ResolverTypeWrapper<ActivateDevicesPayload>;
  activateUserInput: ActivateUserInput;
  activateUserPayload: ResolverTypeWrapper<ActivateUserPayload>;
  activateUsersInput: ActivateUsersInput;
  activateUsersPayload: ResolverTypeWrapper<ActivateUsersPayload>;
  additionalAddressInput: AdditionalAddressInput;
  additionalAddressOutput: ResolverTypeWrapper<AdditionalAddressOutput>;
  AddressInputType: AddressInputType;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  AddressType: ResolverTypeWrapper<AddressType>;
  AddressUpdateInputType: AddressUpdateInputType;
  AddressuserInputType: AddressuserInputType;
  administrativeRoomSkipCancelInput: AdministrativeRoomSkipCancelInput;
  administrativeRoomSkipCancelPayload: ResolverTypeWrapper<AdministrativeRoomSkipCancelPayload>;
  Attribute: ResolverTypeWrapper<Attribute>;
  BackOff: BackOff;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  BackOffEnum: BackOffEnum;
  BackOffOutputType: ResolverTypeWrapper<BackOffOutputType>;
  bindLocationsInput: BindLocationsInput;
  bindLocationsPayload: ResolverTypeWrapper<BindLocationsPayload>;
  bindOrganizationsInput: BindOrganizationsInput;
  bindOrganizationsPayload: ResolverTypeWrapper<BindOrganizationsPayload>;
  BucketNames: BucketNames;
  cancelContractsInput: CancelContractsInput;
  cancelContractsPayload: ResolverTypeWrapper<CancelContractsPayload>;
  changePasswordInput: ChangePasswordInput;
  changePasswordPayload: ResolverTypeWrapper<ChangePasswordPayload>;
  CommandInputParameter: CommandInputParameter;
  CommandInputType: CommandInputType;
  CommandParameter: ResolverTypeWrapper<CommandParameter>;
  CommandParameterFieldType: CommandParameterFieldType;
  CommandType: ResolverTypeWrapper<CommandType>;
  confirmEmailChangeInput: ConfirmEmailChangeInput;
  confirmEmailChangePayload: ResolverTypeWrapper<ConfirmEmailChangePayload>;
  confirmPasswordChangeInput: ConfirmPasswordChangeInput;
  confirmPasswordChangePayload: ResolverTypeWrapper<ConfirmPasswordChangePayload>;
  confirmUserInvitationInput: ConfirmUserInvitationInput;
  confirmUserInvitationPayload: ResolverTypeWrapper<ConfirmUserInvitationPayload>;
  ContactPointsInputType: ContactPointsInputType;
  ContactPointsType: ResolverTypeWrapper<ContactPointsType>;
  ContactPointsUpdateInputType: ContactPointsUpdateInputType;
  ContactPointsUserInputType: ContactPointsUserInputType;
  ContractInputType: ContractInputType;
  ContractStatus: ContractStatus;
  ContractType: ResolverTypeWrapper<ContractType>;
  ContractUpdateInputType: ContractUpdateInputType;
  CountryInputType: CountryInputType;
  CountryType: ResolverTypeWrapper<CountryType>;
  CountryUpdateInputType: CountryUpdateInputType;
  createAddressesInput: CreateAddressesInput;
  createAddressesPayload: ResolverTypeWrapper<CreateAddressesPayload>;
  createCommandsInput: CreateCommandsInput;
  createCommandsPayload: ResolverTypeWrapper<CreateCommandsPayload>;
  createContactPointsInput: CreateContactPointsInput;
  createContactPointsPayload: ResolverTypeWrapper<CreateContactPointsPayload>;
  createContactPointTypesInput: CreateContactPointTypesInput;
  createContactPointTypesPayload: ResolverTypeWrapper<CreateContactPointTypesPayload>;
  createContractsInput: CreateContractsInput;
  createContractsPayload: ResolverTypeWrapper<CreateContractsPayload>;
  createCountriesInput: CreateCountriesInput;
  createCountriesPayload: ResolverTypeWrapper<CreateCountriesPayload>;
  createCredentialsInput: CreateCredentialsInput;
  createCredentialsPayload: ResolverTypeWrapper<CreateCredentialsPayload>;
  createDeviceMakesInput: CreateDeviceMakesInput;
  createDeviceMakesPayload: ResolverTypeWrapper<CreateDeviceMakesPayload>;
  createDevicesInput: CreateDevicesInput;
  createDevicesPayload: ResolverTypeWrapper<CreateDevicesPayload>;
  createDeviceTypesInput: CreateDeviceTypesInput;
  createDeviceTypesPayload: ResolverTypeWrapper<CreateDeviceTypesPayload>;
  createLocalesInput: CreateLocalesInput;
  createLocalesPayload: ResolverTypeWrapper<CreateLocalesPayload>;
  createLocationsInput: CreateLocationsInput;
  createLocationsPayload: ResolverTypeWrapper<CreateLocationsPayload>;
  createOrganizationsInput: CreateOrganizationsInput;
  createOrganizationsPayload: ResolverTypeWrapper<CreateOrganizationsPayload>;
  createPaymentMethodsInput: CreatePaymentMethodsInput;
  createPaymentMethodsPayload: ResolverTypeWrapper<CreatePaymentMethodsPayload>;
  createPoliciesInput: CreatePoliciesInput;
  createPoliciesPayload: ResolverTypeWrapper<CreatePoliciesPayload>;
  createPolicySetsInput: CreatePolicySetsInput;
  createPolicySetsPayload: ResolverTypeWrapper<CreatePolicySetsPayload>;
  createProductsInput: CreateProductsInput;
  createProductsPayload: ResolverTypeWrapper<CreateProductsPayload>;
  createRolesInput: CreateRolesInput;
  createRolesPayload: ResolverTypeWrapper<CreateRolesPayload>;
  createRulesInput: CreateRulesInput;
  createRulesPayload: ResolverTypeWrapper<CreateRulesPayload>;
  createServiceTeamsInput: CreateServiceTeamsInput;
  createServiceTeamsPayload: ResolverTypeWrapper<CreateServiceTeamsPayload>;
  createSolutionsInput: CreateSolutionsInput;
  createSolutionsPayload: ResolverTypeWrapper<CreateSolutionsPayload>;
  createTaxesInput: CreateTaxesInput;
  createTaxesPayload: ResolverTypeWrapper<CreateTaxesPayload>;
  createTaxTypesInput: CreateTaxTypesInput;
  createTaxTypesPayload: ResolverTypeWrapper<CreateTaxTypesPayload>;
  createTimezonesInput: CreateTimezonesInput;
  createTimezonesPayload: ResolverTypeWrapper<CreateTimezonesPayload>;
  createUsersInput: CreateUsersInput;
  createUsersPayload: ResolverTypeWrapper<CreateUsersPayload>;
  createXingularCustomersInput: CreateXingularCustomersInput;
  createXingularCustomersPayload: ResolverTypeWrapper<CreateXingularCustomersPayload>;
  CredentialInputType: CredentialInputType;
  CredentialType: ResolverTypeWrapper<CredentialType>;
  CredentialUpdateInputType: CredentialUpdateInputType;
  CurrencyType: CurrencyType;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  deleteFileInput: DeleteFileInput;
  deleteFilePayload: ResolverTypeWrapper<DeleteFilePayload>;
  DeleteFileType: DeleteFileType;
  deleteOrgDataInput: DeleteOrgDataInput;
  deleteOrgDataPayload: ResolverTypeWrapper<DeleteOrgDataPayload>;
  deleteResourcesInput: DeleteResourcesInput;
  deleteResourcesPayload: ResolverTypeWrapper<DeleteResourcesPayload>;
  DeleteResourceType: DeleteResourceType;
  deleteUsersInput: DeleteUsersInput;
  deleteUsersPayload: ResolverTypeWrapper<DeleteUsersPayload>;
  DeleteUserType: DeleteUserType;
  DeviceAcvityType: ResolverTypeWrapper<DeviceAcvityType>;
  DeviceEnumType: DeviceEnumType;
  DeviceInputType: DeviceInputType;
  DeviceMakeInputType: DeviceMakeInputType;
  DeviceMakeType: ResolverTypeWrapper<DeviceMakeType>;
  DeviceMakeUpdateInputType: DeviceMakeUpdateInputType;
  DeviceType: ResolverTypeWrapper<DeviceType>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  DeviceUpdateInputType: DeviceUpdateInputType;
  Error: ResolverTypeWrapper<Error>;
  ErrorArray: ResolverTypeWrapper<ErrorArray>;
  ExecuteCommandInput: ExecuteCommandInput;
  ExecuteCommandPayload: ResolverTypeWrapper<ExecuteCommandPayload>;
  FileList: ResolverTypeWrapper<FileList>;
  FileType: ResolverTypeWrapper<FileType>;
  FilterFieldValue: FilterFieldValue;
  FilterOperation: FilterOperation;
  FilterOpts: ResolverTypeWrapper<FilterOpts>;
  FilterOptsInput: FilterOptsInput;
  generateReportInput: GenerateReportInput;
  generateReportPayload: ResolverTypeWrapper<GenerateReportPayload>;
  geoPointInputType: GeoPointInputType;
  geoPointType: ResolverTypeWrapper<GeoPointType>;
  ImageInputType: ImageInputType;
  ImageType: ResolverTypeWrapper<ImageType>;
  IndexNames: IndexNames;
  InputAttribute: InputAttribute;
  inputPriceSpecification: InputPriceSpecification;
  inputRefQuantity: InputRefQuantity;
  InputRoleAssociation: InputRoleAssociation;
  inputUserRole: InputUserRole;
  InvoiceType: ResolverTypeWrapper<InvoiceType>;
  InvoicingSchemeEnum: InvoicingSchemeEnum;
  InvoicingTermEnum: InvoicingTermEnum;
  JobData: JobData;
  JobDataOutputType: ResolverTypeWrapper<JobDataOutputType>;
  JobFilterOpts: JobFilterOpts;
  JobOptions: JobOptions;
  jobOptionsOutput: ResolverTypeWrapper<JobOptionsOutput>;
  JobPriority: JobPriority;
  Jobs: ResolverTypeWrapper<Jobs>;
  JobScheduler: JobScheduler;
  JobsList: ResolverTypeWrapper<JobsList>;
  JobTypes: JobTypes;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  LocaleInputType: LocaleInputType;
  LocaleType: ResolverTypeWrapper<LocaleType>;
  LocaleUpdateInputType: LocaleUpdateInputType;
  LocationInputType: LocationInputType;
  LocationType: ResolverTypeWrapper<LocationType>;
  LocationUpdateInputType: LocationUpdateInputType;
  logoutUserInput: LogoutUserInput;
  logoutUserPayload: ResolverTypeWrapper<LogoutUserPayload>;
  LoraInputType: LoraInputType;
  LoraNetwork: LoraNetwork;
  LoraType: ResolverTypeWrapper<LoraType>;
  Meta: ResolverTypeWrapper<Meta>;
  modifyContractsInput: ModifyContractsInput;
  modifyContractsPayload: ResolverTypeWrapper<ModifyContractsPayload>;
  Mutation: ResolverTypeWrapper<{}>;
  OptionsFields: ResolverTypeWrapper<OptionsFields>;
  optionsInputType: OptionsInputType;
  OrganizationInputType: OrganizationInputType;
  OrganizationType: ResolverTypeWrapper<OrganizationType>;
  OrganizationUpdateInputType: OrganizationUpdateInputType;
  orgInputType: OrgInputType;
  outputAddressType: ResolverTypeWrapper<OutputAddressType>;
  outputCommandResponse: ResolverTypeWrapper<OutputCommandResponse>;
  outputCommandType: ResolverTypeWrapper<OutputCommandType>;
  outputContactPointsType: ResolverTypeWrapper<OutputContactPointsType>;
  outputContractType: ResolverTypeWrapper<OutputContractType>;
  outputCountryType: ResolverTypeWrapper<OutputCountryType>;
  outputCredentialType: ResolverTypeWrapper<OutputCredentialType>;
  outputDeviceMakeType: ResolverTypeWrapper<OutputDeviceMakeType>;
  outputDeviceType: ResolverTypeWrapper<OutputDeviceType>;
  outputFileListType: ResolverTypeWrapper<OutputFileListType>;
  outputFileType: ResolverTypeWrapper<OutputFileType>;
  outputInvoiceType: ResolverTypeWrapper<OutputInvoiceType>;
  outputLocaleType: ResolverTypeWrapper<OutputLocaleType>;
  outputLocationType: ResolverTypeWrapper<OutputLocationType>;
  outputOrgType: ResolverTypeWrapper<OutputOrgType>;
  outputPermissionsType: ResolverTypeWrapper<OutputPermissionsType>;
  outputPolicySetType: ResolverTypeWrapper<OutputPolicySetType>;
  outputPolicyType: ResolverTypeWrapper<OutputPolicyType>;
  outputProductType: ResolverTypeWrapper<OutputProductType>;
  outputRoleType: ResolverTypeWrapper<OutputRoleType>;
  outputRuleType: ResolverTypeWrapper<OutputRuleType>;
  outputServicesType: ResolverTypeWrapper<OutputServicesType>;
  outputServiceTeamType: ResolverTypeWrapper<OutputServiceTeamType>;
  outputSolutionType: ResolverTypeWrapper<OutputSolutionType>;
  outputTaxType: ResolverTypeWrapper<OutputTaxType>;
  outputTimezoneType: ResolverTypeWrapper<OutputTimezoneType>;
  outputTypeOfContactPointType: ResolverTypeWrapper<OutputTypeOfContactPointType>;
  outputTypeOfTaxType: ResolverTypeWrapper<OutputTypeOfTaxType>;
  outputUsersType: ResolverTypeWrapper<OutputUsersType>;
  outputXingularCustomerType: ResolverTypeWrapper<OutputXingularCustomerType>;
  PaymentMethodEnumType: PaymentMethodEnumType;
  PaymentMethodListTypeOutput: ResolverTypeWrapper<PaymentMethodListTypeOutput>;
  PaymentMethodTypeInput: PaymentMethodTypeInput;
  PaymentMethodTypeOutput: ResolverTypeWrapper<PaymentMethodTypeOutput>;
  PaymentMethodUpdateTypeOutput: PaymentMethodUpdateTypeOutput;
  PolicyInputType: PolicyInputType;
  PolicySetInputType: PolicySetInputType;
  PolicySetType: ResolverTypeWrapper<PolicySetType>;
  PolicySetUpdateInputType: PolicySetUpdateInputType;
  PolicyType: ResolverTypeWrapper<PolicyType>;
  PolicyUpdateInputType: PolicyUpdateInputType;
  priceSpecification: ResolverTypeWrapper<PriceSpecification>;
  PriceUnitType: PriceUnitType;
  productAssociation: ResolverTypeWrapper<ProductAssociation>;
  productAssoction: ProductAssoction;
  ProductInputType: ProductInputType;
  ProductType: ResolverTypeWrapper<ProductType>;
  ProductUpdateInputType: ProductUpdateInputType;
  PropertiesInputAttribute: PropertiesInputAttribute;
  PropertiesOutputAttribute: ResolverTypeWrapper<PropertiesOutputAttribute>;
  reactivateContractsInput: ReactivateContractsInput;
  reactivateContractsPayload: ResolverTypeWrapper<ReactivateContractsPayload>;
  refQuantity: ResolverTypeWrapper<RefQuantity>;
  RegisterUserInput: RegisterUserInput;
  RegisterUserPayload: ResolverTypeWrapper<RegisterUserPayload>;
  Repeat: Repeat;
  RepeatOutputType: ResolverTypeWrapper<RepeatOutputType>;
  requestEmailChangeInput: RequestEmailChangeInput;
  requestEmailChangePayload: ResolverTypeWrapper<RequestEmailChangePayload>;
  requestPasswordChangeInput: RequestPasswordChangeInput;
  requestPasswordChangePayload: ResolverTypeWrapper<RequestPasswordChangePayload>;
  ResponseSafeUserType: ResolverTypeWrapper<ResponseSafeUserType>;
  revertContractsCancellationInput: RevertContractsCancellationInput;
  revertContractsCancellationPayload: ResolverTypeWrapper<RevertContractsCancellationPayload>;
  RoleAssociation: ResolverTypeWrapper<RoleAssociation>;
  RoleAssociationResolved: ResolverTypeWrapper<RoleAssociationResolved>;
  RoleInputType: RoleInputType;
  RoleType: ResolverTypeWrapper<RoleType>;
  RoleUpdateInputType: RoleUpdateInputType;
  RootQuery: ResolverTypeWrapper<{}>;
  ruleContextQuery: ResolverTypeWrapper<RuleContextQuery>;
  ruleContextQueryInput: RuleContextQueryInput;
  RuleInputType: RuleInputType;
  RuleType: ResolverTypeWrapper<RuleType>;
  RuleUpdateInputType: RuleUpdateInputType;
  ScheduleJobInput: ScheduleJobInput;
  ScheduleJobPayload: ResolverTypeWrapper<ScheduleJobPayload>;
  ScopeInputType: ScopeInputType;
  SearchResultType: ResolverTypeWrapper<SearchResultType>;
  ServiceTeamInputType: ServiceTeamInputType;
  ServiceTeamType: ResolverTypeWrapper<ServiceTeamType>;
  ServiceTeamUpdateInputType: ServiceTeamUpdateInputType;
  setSessionScopeInput: SetSessionScopeInput;
  setSessionScopePayload: ResolverTypeWrapper<SetSessionScopePayload>;
  signInApiKeyInput: SignInApiKeyInput;
  signInApiKeyPayload: ResolverTypeWrapper<SignInApiKeyPayload>;
  signInUserInput: SignInUserInput;
  signInUserPayload: ResolverTypeWrapper<SignInUserPayload>;
  SkipCancelInputType: SkipCancelInputType;
  SolutionInputType: SolutionInputType;
  SolutionType: ResolverTypeWrapper<SolutionType>;
  SolutionUpdateInputType: SolutionUpdateInputType;
  SortingOrder: SortingOrder;
  SortOpts: SortOpts;
  TaxInputType: TaxInputType;
  TaxType: ResolverTypeWrapper<TaxType>;
  TaxUpdateInputType: TaxUpdateInputType;
  TimezoneInputType: TimezoneInputType;
  TimezoneType: ResolverTypeWrapper<TimezoneType>;
  TimezoneUpdateInputType: TimezoneUpdateInputType;
  TokenType: ResolverTypeWrapper<TokenType>;
  TypeOfContactPointInputType: TypeOfContactPointInputType;
  TypeOfContactPointType: ResolverTypeWrapper<TypeOfContactPointType>;
  TypeOfContactPointUpdateInputType: TypeOfContactPointUpdateInputType;
  TypeOfDeviceInput: TypeOfDeviceInput;
  TypeOfDeviceOutputType: ResolverTypeWrapper<TypeOfDeviceOutputType>;
  TypeOfDeviceType: ResolverTypeWrapper<TypeOfDeviceType>;
  TypeOfDeviceUpdateInput: TypeOfDeviceUpdateInput;
  TypeOfTaxInputType: TypeOfTaxInputType;
  TypeOfTaxType: ResolverTypeWrapper<TypeOfTaxType>;
  TypeOfTaxUpdateInputType: TypeOfTaxUpdateInputType;
  unregisterUserInput: UnregisterUserInput;
  unregisterUserPayload: ResolverTypeWrapper<UnregisterUserPayload>;
  updateAddressesInput: UpdateAddressesInput;
  updateAddressesPayload: ResolverTypeWrapper<UpdateAddressesPayload>;
  updateAddressTypesInput: UpdateAddressTypesInput;
  updateAddressTypesPayload: ResolverTypeWrapper<UpdateAddressTypesPayload>;
  updateContactPointsInput: UpdateContactPointsInput;
  updateContactPointsPayload: ResolverTypeWrapper<UpdateContactPointsPayload>;
  updateCountriesInput: UpdateCountriesInput;
  updateCountriesPayload: ResolverTypeWrapper<UpdateCountriesPayload>;
  updateCredentialsInput: UpdateCredentialsInput;
  updateCredentialsPayload: ResolverTypeWrapper<UpdateCredentialsPayload>;
  updateDeviceMakesInput: UpdateDeviceMakesInput;
  updateDeviceMakesPayload: ResolverTypeWrapper<UpdateDeviceMakesPayload>;
  updateDevicesInput: UpdateDevicesInput;
  updateDevicesPayload: ResolverTypeWrapper<UpdateDevicesPayload>;
  updateDeviceTypesInput: UpdateDeviceTypesInput;
  updateDeviceTypesPayload: ResolverTypeWrapper<UpdateDeviceTypesPayload>;
  updateLocalesInput: UpdateLocalesInput;
  updateLocalesPayload: ResolverTypeWrapper<UpdateLocalesPayload>;
  updateLocationsInput: UpdateLocationsInput;
  updateLocationsPayload: ResolverTypeWrapper<UpdateLocationsPayload>;
  updateOrganizationsInput: UpdateOrganizationsInput;
  updateOrganizationsPayload: ResolverTypeWrapper<UpdateOrganizationsPayload>;
  updatePaymentMethodsInput: UpdatePaymentMethodsInput;
  updatePaymentMethodsPayload: ResolverTypeWrapper<UpdatePaymentMethodsPayload>;
  updatePoliciesInput: UpdatePoliciesInput;
  updatePoliciesPayload: ResolverTypeWrapper<UpdatePoliciesPayload>;
  updatePolicySetsInput: UpdatePolicySetsInput;
  updatePolicySetsPayload: ResolverTypeWrapper<UpdatePolicySetsPayload>;
  updateProductsInput: UpdateProductsInput;
  updateProductsPayload: ResolverTypeWrapper<UpdateProductsPayload>;
  updateRolesInput: UpdateRolesInput;
  updateRolesPayload: ResolverTypeWrapper<UpdateRolesPayload>;
  updateRulesInput: UpdateRulesInput;
  updateRulesPayload: ResolverTypeWrapper<UpdateRulesPayload>;
  updateServiceTeamsInput: UpdateServiceTeamsInput;
  updateServiceTeamsPayload: ResolverTypeWrapper<UpdateServiceTeamsPayload>;
  updateSolutionsInput: UpdateSolutionsInput;
  updateSolutionsPayload: ResolverTypeWrapper<UpdateSolutionsPayload>;
  updateTaxesInput: UpdateTaxesInput;
  updateTaxesPayload: ResolverTypeWrapper<UpdateTaxesPayload>;
  updateTaxTypesInput: UpdateTaxTypesInput;
  updateTaxTypesPayload: ResolverTypeWrapper<UpdateTaxTypesPayload>;
  updateTimezonesInput: UpdateTimezonesInput;
  updateTimezonesPayload: ResolverTypeWrapper<UpdateTimezonesPayload>;
  UpdateUserInputType: UpdateUserInputType;
  updateUsersInput: UpdateUsersInput;
  updateUsersPayload: ResolverTypeWrapper<UpdateUsersPayload>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  uploadFileInput: UploadFileInput;
  uploadFilePayload: ResolverTypeWrapper<UploadFilePayload>;
  UserEnumType: UserEnumType;
  UserInputType: UserInputType;
  userScopeType: ResolverTypeWrapper<UserScopeType>;
  UserType: ResolverTypeWrapper<UserType>;
  XingularCustomerInputType: XingularCustomerInputType;
  XingularCustomerType: ResolverTypeWrapper<XingularCustomerType>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AccessControlnputTargetType: AccessControlnputTargetType;
  AccessControlTargetType: AccessControlTargetType;
  activateDevicesInput: ActivateDevicesInput;
  String: Scalars['String'];
  activateDevicesPayload: ActivateDevicesPayload;
  activateUserInput: ActivateUserInput;
  activateUserPayload: ActivateUserPayload;
  activateUsersInput: ActivateUsersInput;
  activateUsersPayload: ActivateUsersPayload;
  additionalAddressInput: AdditionalAddressInput;
  additionalAddressOutput: AdditionalAddressOutput;
  AddressInputType: AddressInputType;
  Float: Scalars['Float'];
  AddressType: AddressType;
  AddressUpdateInputType: AddressUpdateInputType;
  AddressuserInputType: AddressuserInputType;
  administrativeRoomSkipCancelInput: AdministrativeRoomSkipCancelInput;
  administrativeRoomSkipCancelPayload: AdministrativeRoomSkipCancelPayload;
  Attribute: Attribute;
  BackOff: BackOff;
  Int: Scalars['Int'];
  BackOffOutputType: BackOffOutputType;
  bindLocationsInput: BindLocationsInput;
  bindLocationsPayload: BindLocationsPayload;
  bindOrganizationsInput: BindOrganizationsInput;
  bindOrganizationsPayload: BindOrganizationsPayload;
  cancelContractsInput: CancelContractsInput;
  cancelContractsPayload: CancelContractsPayload;
  changePasswordInput: ChangePasswordInput;
  changePasswordPayload: ChangePasswordPayload;
  CommandInputParameter: CommandInputParameter;
  CommandInputType: CommandInputType;
  CommandParameter: CommandParameter;
  CommandType: CommandType;
  confirmEmailChangeInput: ConfirmEmailChangeInput;
  confirmEmailChangePayload: ConfirmEmailChangePayload;
  confirmPasswordChangeInput: ConfirmPasswordChangeInput;
  confirmPasswordChangePayload: ConfirmPasswordChangePayload;
  confirmUserInvitationInput: ConfirmUserInvitationInput;
  confirmUserInvitationPayload: ConfirmUserInvitationPayload;
  ContactPointsInputType: ContactPointsInputType;
  ContactPointsType: ContactPointsType;
  ContactPointsUpdateInputType: ContactPointsUpdateInputType;
  ContactPointsUserInputType: ContactPointsUserInputType;
  ContractInputType: ContractInputType;
  ContractType: ContractType;
  ContractUpdateInputType: ContractUpdateInputType;
  CountryInputType: CountryInputType;
  CountryType: CountryType;
  CountryUpdateInputType: CountryUpdateInputType;
  createAddressesInput: CreateAddressesInput;
  createAddressesPayload: CreateAddressesPayload;
  createCommandsInput: CreateCommandsInput;
  createCommandsPayload: CreateCommandsPayload;
  createContactPointsInput: CreateContactPointsInput;
  createContactPointsPayload: CreateContactPointsPayload;
  createContactPointTypesInput: CreateContactPointTypesInput;
  createContactPointTypesPayload: CreateContactPointTypesPayload;
  createContractsInput: CreateContractsInput;
  createContractsPayload: CreateContractsPayload;
  createCountriesInput: CreateCountriesInput;
  createCountriesPayload: CreateCountriesPayload;
  createCredentialsInput: CreateCredentialsInput;
  createCredentialsPayload: CreateCredentialsPayload;
  createDeviceMakesInput: CreateDeviceMakesInput;
  createDeviceMakesPayload: CreateDeviceMakesPayload;
  createDevicesInput: CreateDevicesInput;
  createDevicesPayload: CreateDevicesPayload;
  createDeviceTypesInput: CreateDeviceTypesInput;
  createDeviceTypesPayload: CreateDeviceTypesPayload;
  createLocalesInput: CreateLocalesInput;
  createLocalesPayload: CreateLocalesPayload;
  createLocationsInput: CreateLocationsInput;
  createLocationsPayload: CreateLocationsPayload;
  createOrganizationsInput: CreateOrganizationsInput;
  createOrganizationsPayload: CreateOrganizationsPayload;
  createPaymentMethodsInput: CreatePaymentMethodsInput;
  createPaymentMethodsPayload: CreatePaymentMethodsPayload;
  createPoliciesInput: CreatePoliciesInput;
  createPoliciesPayload: CreatePoliciesPayload;
  createPolicySetsInput: CreatePolicySetsInput;
  createPolicySetsPayload: CreatePolicySetsPayload;
  createProductsInput: CreateProductsInput;
  createProductsPayload: CreateProductsPayload;
  createRolesInput: CreateRolesInput;
  createRolesPayload: CreateRolesPayload;
  createRulesInput: CreateRulesInput;
  createRulesPayload: CreateRulesPayload;
  createServiceTeamsInput: CreateServiceTeamsInput;
  createServiceTeamsPayload: CreateServiceTeamsPayload;
  createSolutionsInput: CreateSolutionsInput;
  createSolutionsPayload: CreateSolutionsPayload;
  createTaxesInput: CreateTaxesInput;
  createTaxesPayload: CreateTaxesPayload;
  createTaxTypesInput: CreateTaxTypesInput;
  createTaxTypesPayload: CreateTaxTypesPayload;
  createTimezonesInput: CreateTimezonesInput;
  createTimezonesPayload: CreateTimezonesPayload;
  createUsersInput: CreateUsersInput;
  createUsersPayload: CreateUsersPayload;
  createXingularCustomersInput: CreateXingularCustomersInput;
  createXingularCustomersPayload: CreateXingularCustomersPayload;
  CredentialInputType: CredentialInputType;
  CredentialType: CredentialType;
  CredentialUpdateInputType: CredentialUpdateInputType;
  Date: Scalars['Date'];
  deleteFileInput: DeleteFileInput;
  deleteFilePayload: DeleteFilePayload;
  DeleteFileType: DeleteFileType;
  deleteOrgDataInput: DeleteOrgDataInput;
  deleteOrgDataPayload: DeleteOrgDataPayload;
  deleteResourcesInput: DeleteResourcesInput;
  deleteResourcesPayload: DeleteResourcesPayload;
  DeleteResourceType: DeleteResourceType;
  deleteUsersInput: DeleteUsersInput;
  deleteUsersPayload: DeleteUsersPayload;
  DeleteUserType: DeleteUserType;
  DeviceAcvityType: DeviceAcvityType;
  DeviceInputType: DeviceInputType;
  DeviceMakeInputType: DeviceMakeInputType;
  DeviceMakeType: DeviceMakeType;
  DeviceMakeUpdateInputType: DeviceMakeUpdateInputType;
  DeviceType: DeviceType;
  Boolean: Scalars['Boolean'];
  DeviceUpdateInputType: DeviceUpdateInputType;
  Error: Error;
  ErrorArray: ErrorArray;
  ExecuteCommandInput: ExecuteCommandInput;
  ExecuteCommandPayload: ExecuteCommandPayload;
  FileList: FileList;
  FileType: FileType;
  FilterOpts: FilterOpts;
  FilterOptsInput: FilterOptsInput;
  generateReportInput: GenerateReportInput;
  generateReportPayload: GenerateReportPayload;
  geoPointInputType: GeoPointInputType;
  geoPointType: GeoPointType;
  ImageInputType: ImageInputType;
  ImageType: ImageType;
  InputAttribute: InputAttribute;
  inputPriceSpecification: InputPriceSpecification;
  inputRefQuantity: InputRefQuantity;
  InputRoleAssociation: InputRoleAssociation;
  inputUserRole: InputUserRole;
  InvoiceType: InvoiceType;
  JobData: JobData;
  JobDataOutputType: JobDataOutputType;
  JobFilterOpts: JobFilterOpts;
  JobOptions: JobOptions;
  jobOptionsOutput: JobOptionsOutput;
  Jobs: Jobs;
  JobScheduler: JobScheduler;
  JobsList: JobsList;
  JSON: Scalars['JSON'];
  LocaleInputType: LocaleInputType;
  LocaleType: LocaleType;
  LocaleUpdateInputType: LocaleUpdateInputType;
  LocationInputType: LocationInputType;
  LocationType: LocationType;
  LocationUpdateInputType: LocationUpdateInputType;
  logoutUserInput: LogoutUserInput;
  logoutUserPayload: LogoutUserPayload;
  LoraInputType: LoraInputType;
  LoraType: LoraType;
  Meta: Meta;
  modifyContractsInput: ModifyContractsInput;
  modifyContractsPayload: ModifyContractsPayload;
  Mutation: {};
  OptionsFields: OptionsFields;
  optionsInputType: OptionsInputType;
  OrganizationInputType: OrganizationInputType;
  OrganizationType: OrganizationType;
  OrganizationUpdateInputType: OrganizationUpdateInputType;
  orgInputType: OrgInputType;
  outputAddressType: OutputAddressType;
  outputCommandResponse: OutputCommandResponse;
  outputCommandType: OutputCommandType;
  outputContactPointsType: OutputContactPointsType;
  outputContractType: OutputContractType;
  outputCountryType: OutputCountryType;
  outputCredentialType: OutputCredentialType;
  outputDeviceMakeType: OutputDeviceMakeType;
  outputDeviceType: OutputDeviceType;
  outputFileListType: OutputFileListType;
  outputFileType: OutputFileType;
  outputInvoiceType: OutputInvoiceType;
  outputLocaleType: OutputLocaleType;
  outputLocationType: OutputLocationType;
  outputOrgType: OutputOrgType;
  outputPermissionsType: OutputPermissionsType;
  outputPolicySetType: OutputPolicySetType;
  outputPolicyType: OutputPolicyType;
  outputProductType: OutputProductType;
  outputRoleType: OutputRoleType;
  outputRuleType: OutputRuleType;
  outputServicesType: OutputServicesType;
  outputServiceTeamType: OutputServiceTeamType;
  outputSolutionType: OutputSolutionType;
  outputTaxType: OutputTaxType;
  outputTimezoneType: OutputTimezoneType;
  outputTypeOfContactPointType: OutputTypeOfContactPointType;
  outputTypeOfTaxType: OutputTypeOfTaxType;
  outputUsersType: OutputUsersType;
  outputXingularCustomerType: OutputXingularCustomerType;
  PaymentMethodListTypeOutput: PaymentMethodListTypeOutput;
  PaymentMethodTypeInput: PaymentMethodTypeInput;
  PaymentMethodTypeOutput: PaymentMethodTypeOutput;
  PaymentMethodUpdateTypeOutput: PaymentMethodUpdateTypeOutput;
  PolicyInputType: PolicyInputType;
  PolicySetInputType: PolicySetInputType;
  PolicySetType: PolicySetType;
  PolicySetUpdateInputType: PolicySetUpdateInputType;
  PolicyType: PolicyType;
  PolicyUpdateInputType: PolicyUpdateInputType;
  priceSpecification: PriceSpecification;
  productAssociation: ProductAssociation;
  productAssoction: ProductAssoction;
  ProductInputType: ProductInputType;
  ProductType: ProductType;
  ProductUpdateInputType: ProductUpdateInputType;
  PropertiesInputAttribute: PropertiesInputAttribute;
  PropertiesOutputAttribute: PropertiesOutputAttribute;
  reactivateContractsInput: ReactivateContractsInput;
  reactivateContractsPayload: ReactivateContractsPayload;
  refQuantity: RefQuantity;
  RegisterUserInput: RegisterUserInput;
  RegisterUserPayload: RegisterUserPayload;
  Repeat: Repeat;
  RepeatOutputType: RepeatOutputType;
  requestEmailChangeInput: RequestEmailChangeInput;
  requestEmailChangePayload: RequestEmailChangePayload;
  requestPasswordChangeInput: RequestPasswordChangeInput;
  requestPasswordChangePayload: RequestPasswordChangePayload;
  ResponseSafeUserType: ResponseSafeUserType;
  revertContractsCancellationInput: RevertContractsCancellationInput;
  revertContractsCancellationPayload: RevertContractsCancellationPayload;
  RoleAssociation: RoleAssociation;
  RoleAssociationResolved: RoleAssociationResolved;
  RoleInputType: RoleInputType;
  RoleType: RoleType;
  RoleUpdateInputType: RoleUpdateInputType;
  RootQuery: {};
  ruleContextQuery: RuleContextQuery;
  ruleContextQueryInput: RuleContextQueryInput;
  RuleInputType: RuleInputType;
  RuleType: RuleType;
  RuleUpdateInputType: RuleUpdateInputType;
  ScheduleJobInput: ScheduleJobInput;
  ScheduleJobPayload: ScheduleJobPayload;
  ScopeInputType: ScopeInputType;
  SearchResultType: SearchResultType;
  ServiceTeamInputType: ServiceTeamInputType;
  ServiceTeamType: ServiceTeamType;
  ServiceTeamUpdateInputType: ServiceTeamUpdateInputType;
  setSessionScopeInput: SetSessionScopeInput;
  setSessionScopePayload: SetSessionScopePayload;
  signInApiKeyInput: SignInApiKeyInput;
  signInApiKeyPayload: SignInApiKeyPayload;
  signInUserInput: SignInUserInput;
  signInUserPayload: SignInUserPayload;
  SkipCancelInputType: SkipCancelInputType;
  SolutionInputType: SolutionInputType;
  SolutionType: SolutionType;
  SolutionUpdateInputType: SolutionUpdateInputType;
  SortOpts: SortOpts;
  TaxInputType: TaxInputType;
  TaxType: TaxType;
  TaxUpdateInputType: TaxUpdateInputType;
  TimezoneInputType: TimezoneInputType;
  TimezoneType: TimezoneType;
  TimezoneUpdateInputType: TimezoneUpdateInputType;
  TokenType: TokenType;
  TypeOfContactPointInputType: TypeOfContactPointInputType;
  TypeOfContactPointType: TypeOfContactPointType;
  TypeOfContactPointUpdateInputType: TypeOfContactPointUpdateInputType;
  TypeOfDeviceInput: TypeOfDeviceInput;
  TypeOfDeviceOutputType: TypeOfDeviceOutputType;
  TypeOfDeviceType: TypeOfDeviceType;
  TypeOfDeviceUpdateInput: TypeOfDeviceUpdateInput;
  TypeOfTaxInputType: TypeOfTaxInputType;
  TypeOfTaxType: TypeOfTaxType;
  TypeOfTaxUpdateInputType: TypeOfTaxUpdateInputType;
  unregisterUserInput: UnregisterUserInput;
  unregisterUserPayload: UnregisterUserPayload;
  updateAddressesInput: UpdateAddressesInput;
  updateAddressesPayload: UpdateAddressesPayload;
  updateAddressTypesInput: UpdateAddressTypesInput;
  updateAddressTypesPayload: UpdateAddressTypesPayload;
  updateContactPointsInput: UpdateContactPointsInput;
  updateContactPointsPayload: UpdateContactPointsPayload;
  updateCountriesInput: UpdateCountriesInput;
  updateCountriesPayload: UpdateCountriesPayload;
  updateCredentialsInput: UpdateCredentialsInput;
  updateCredentialsPayload: UpdateCredentialsPayload;
  updateDeviceMakesInput: UpdateDeviceMakesInput;
  updateDeviceMakesPayload: UpdateDeviceMakesPayload;
  updateDevicesInput: UpdateDevicesInput;
  updateDevicesPayload: UpdateDevicesPayload;
  updateDeviceTypesInput: UpdateDeviceTypesInput;
  updateDeviceTypesPayload: UpdateDeviceTypesPayload;
  updateLocalesInput: UpdateLocalesInput;
  updateLocalesPayload: UpdateLocalesPayload;
  updateLocationsInput: UpdateLocationsInput;
  updateLocationsPayload: UpdateLocationsPayload;
  updateOrganizationsInput: UpdateOrganizationsInput;
  updateOrganizationsPayload: UpdateOrganizationsPayload;
  updatePaymentMethodsInput: UpdatePaymentMethodsInput;
  updatePaymentMethodsPayload: UpdatePaymentMethodsPayload;
  updatePoliciesInput: UpdatePoliciesInput;
  updatePoliciesPayload: UpdatePoliciesPayload;
  updatePolicySetsInput: UpdatePolicySetsInput;
  updatePolicySetsPayload: UpdatePolicySetsPayload;
  updateProductsInput: UpdateProductsInput;
  updateProductsPayload: UpdateProductsPayload;
  updateRolesInput: UpdateRolesInput;
  updateRolesPayload: UpdateRolesPayload;
  updateRulesInput: UpdateRulesInput;
  updateRulesPayload: UpdateRulesPayload;
  updateServiceTeamsInput: UpdateServiceTeamsInput;
  updateServiceTeamsPayload: UpdateServiceTeamsPayload;
  updateSolutionsInput: UpdateSolutionsInput;
  updateSolutionsPayload: UpdateSolutionsPayload;
  updateTaxesInput: UpdateTaxesInput;
  updateTaxesPayload: UpdateTaxesPayload;
  updateTaxTypesInput: UpdateTaxTypesInput;
  updateTaxTypesPayload: UpdateTaxTypesPayload;
  updateTimezonesInput: UpdateTimezonesInput;
  updateTimezonesPayload: UpdateTimezonesPayload;
  UpdateUserInputType: UpdateUserInputType;
  updateUsersInput: UpdateUsersInput;
  updateUsersPayload: UpdateUsersPayload;
  Upload: Scalars['Upload'];
  uploadFileInput: UploadFileInput;
  uploadFilePayload: UploadFilePayload;
  UserInputType: UserInputType;
  userScopeType: UserScopeType;
  UserType: UserType;
  XingularCustomerInputType: XingularCustomerInputType;
  XingularCustomerType: XingularCustomerType;
};

export type AccessControlTargetTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['AccessControlTargetType'] = ResolversParentTypes['AccessControlTargetType']> = {
  subject?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attribute']>>>, ParentType, ContextType>;
  resources?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attribute']>>>, ParentType, ContextType>;
  action?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attribute']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivateDevicesPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['activateDevicesPayload'] = ResolversParentTypes['activateDevicesPayload']> = {
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['Error']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivateUserPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['activateUserPayload'] = ResolversParentTypes['activateUserPayload']> = {
  activationStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['Error']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ActivateUsersPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['activateUsersPayload'] = ResolversParentTypes['activateUsersPayload']> = {
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdditionalAddressOutputResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['additionalAddressOutput'] = ResolversParentTypes['additionalAddressOutput']> = {
  field1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  field2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddressTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['AddressType'] = ResolversParentTypes['AddressType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locality?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  building_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  altitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  geo_coordinates?: Resolver<Maybe<ResolversTypes['geoPointType']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['CountryType']>, ParentType, ContextType>;
  addressAddition?: Resolver<Maybe<ResolversTypes['additionalAddressOutput']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdministrativeRoomSkipCancelPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['administrativeRoomSkipCancelPayload'] = ResolversParentTypes['administrativeRoomSkipCancelPayload']> = {
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['Error']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AttributeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['Attribute'] = ResolversParentTypes['Attribute']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BackOffOutputTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['BackOffOutputType'] = ResolversParentTypes['BackOffOutputType']> = {
  type?: Resolver<Maybe<ResolversTypes['BackOffEnum']>, ParentType, ContextType>;
  delay?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BindLocationsPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['bindLocationsPayload'] = ResolversParentTypes['bindLocationsPayload']> = {
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['Error']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BindOrganizationsPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['bindOrganizationsPayload'] = ResolversParentTypes['bindOrganizationsPayload']> = {
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['Error']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CancelContractsPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['cancelContractsPayload'] = ResolversParentTypes['cancelContractsPayload']> = {
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['Error']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChangePasswordPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['changePasswordPayload'] = ResolversParentTypes['changePasswordPayload']> = {
  passChangeStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['Error']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommandParameterResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['CommandParameter'] = ResolversParentTypes['CommandParameter']> = {
  field?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['CommandParameterFieldType']>, ParentType, ContextType>;
  properties?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommandTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['CommandType'] = ResolversParentTypes['CommandType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parameters?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommandParameter']>>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfirmEmailChangePayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['confirmEmailChangePayload'] = ResolversParentTypes['confirmEmailChangePayload']> = {
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['Error']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfirmPasswordChangePayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['confirmPasswordChangePayload'] = ResolversParentTypes['confirmPasswordChangePayload']> = {
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['Error']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConfirmUserInvitationPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['confirmUserInvitationPayload'] = ResolversParentTypes['confirmUserInvitationPayload']> = {
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['Error']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContactPointsTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['ContactPointsType'] = ResolversParentTypes['ContactPointsType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  physical_address_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contact_point_type_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vat_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isic_v4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tax_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  telephone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  physical_address?: Resolver<Maybe<ResolversTypes['AddressType']>, ParentType, ContextType>;
  contact_point_type?: Resolver<Maybe<ResolversTypes['TypeOfContactPointType']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['LocaleType']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['TimezoneType']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContractTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['ContractType'] = ResolversParentTypes['ContractType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  xingular_customer_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  termination_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['ContractStatus']>, ParentType, ContextType>;
  start_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  invoicing_term?: Resolver<Maybe<ResolversTypes['InvoicingTermEnum']>, ParentType, ContextType>;
  invoicing_delay?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  term?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  invoicing_scheme?: Resolver<Maybe<ResolversTypes['InvoicingSchemeEnum']>, ParentType, ContextType>;
  product_associations?: Resolver<Maybe<Array<Maybe<ResolversTypes['productAssociation']>>>, ParentType, ContextType>;
  xingular_customer?: Resolver<Maybe<ResolversTypes['XingularCustomerType']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['CountryType'] = ResolversParentTypes['CountryType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  geographical_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  economic_areas?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateAddressesPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['createAddressesPayload'] = ResolversParentTypes['createAddressesPayload']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['AddressType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCommandsPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['createCommandsPayload'] = ResolversParentTypes['createCommandsPayload']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommandType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateContactPointsPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['createContactPointsPayload'] = ResolversParentTypes['createContactPointsPayload']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['ContactPointsType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateContactPointTypesPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['createContactPointTypesPayload'] = ResolversParentTypes['createContactPointTypesPayload']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['TypeOfContactPointType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateContractsPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['createContractsPayload'] = ResolversParentTypes['createContractsPayload']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['ContractType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCountriesPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['createCountriesPayload'] = ResolversParentTypes['createCountriesPayload']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['CountryType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateCredentialsPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['createCredentialsPayload'] = ResolversParentTypes['createCredentialsPayload']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['CredentialType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateDeviceMakesPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['createDeviceMakesPayload'] = ResolversParentTypes['createDeviceMakesPayload']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['DeviceMakeType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateDevicesPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['createDevicesPayload'] = ResolversParentTypes['createDevicesPayload']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['DeviceType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateDeviceTypesPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['createDeviceTypesPayload'] = ResolversParentTypes['createDeviceTypesPayload']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['TypeOfDeviceType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateLocalesPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['createLocalesPayload'] = ResolversParentTypes['createLocalesPayload']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['LocaleType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateLocationsPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['createLocationsPayload'] = ResolversParentTypes['createLocationsPayload']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['LocationType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateOrganizationsPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['createOrganizationsPayload'] = ResolversParentTypes['createOrganizationsPayload']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrganizationType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePaymentMethodsPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['createPaymentMethodsPayload'] = ResolversParentTypes['createPaymentMethodsPayload']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['PaymentMethodTypeOutput']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePoliciesPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['createPoliciesPayload'] = ResolversParentTypes['createPoliciesPayload']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['PolicyType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePolicySetsPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['createPolicySetsPayload'] = ResolversParentTypes['createPolicySetsPayload']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['PolicySetType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateProductsPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['createProductsPayload'] = ResolversParentTypes['createProductsPayload']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateRolesPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['createRolesPayload'] = ResolversParentTypes['createRolesPayload']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['RoleType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateRulesPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['createRulesPayload'] = ResolversParentTypes['createRulesPayload']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['RuleType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateServiceTeamsPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['createServiceTeamsPayload'] = ResolversParentTypes['createServiceTeamsPayload']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['ServiceTeamType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateSolutionsPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['createSolutionsPayload'] = ResolversParentTypes['createSolutionsPayload']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['SolutionType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateTaxesPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['createTaxesPayload'] = ResolversParentTypes['createTaxesPayload']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaxType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateTaxTypesPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['createTaxTypesPayload'] = ResolversParentTypes['createTaxTypesPayload']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['TypeOfTaxType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateTimezonesPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['createTimezonesPayload'] = ResolversParentTypes['createTimezonesPayload']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['TimezoneType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUsersPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['createUsersPayload'] = ResolversParentTypes['createUsersPayload']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['ResponseSafeUserType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateXingularCustomersPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['createXingularCustomersPayload'] = ResolversParentTypes['createXingularCustomersPayload']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['XingularCustomerType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CredentialTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['CredentialType'] = ResolversParentTypes['CredentialType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pass?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  credentials?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DeleteFilePayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['deleteFilePayload'] = ResolversParentTypes['deleteFilePayload']> = {
  deleteStatus?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteOrgDataPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['deleteOrgDataPayload'] = ResolversParentTypes['deleteOrgDataPayload']> = {
  deleteStatus?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteResourcesPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['deleteResourcesPayload'] = ResolversParentTypes['deleteResourcesPayload']> = {
  deleteStatus?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteUsersPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['deleteUsersPayload'] = ResolversParentTypes['deleteUsersPayload']> = {
  deleteStatus?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeviceAcvityTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['DeviceAcvityType'] = ResolversParentTypes['DeviceAcvityType']> = {
  data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeviceMakeTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['DeviceMakeType'] = ResolversParentTypes['DeviceMakeType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeviceTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['DeviceType'] = ResolversParentTypes['DeviceType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  solution_ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ipv4_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  battery_level?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  battery_status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['LocationType']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['OrganizationType']>, ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['TypeOfDeviceType']>, ParentType, ContextType>;
  solutions?: Resolver<Maybe<Array<Maybe<ResolversTypes['SolutionType']>>>, ParentType, ContextType>;
  lora?: Resolver<Maybe<ResolversTypes['LoraType']>, ParentType, ContextType>;
  last_seen?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  overall_status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ErrorResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']> = {
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ErrorArrayResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['ErrorArray'] = ResolversParentTypes['ErrorArray']> = {
  code?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  message?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExecuteCommandPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['ExecuteCommandPayload'] = ResolversParentTypes['ExecuteCommandPayload']> = {
  responses?: Resolver<Maybe<Array<Maybe<ResolversTypes['outputCommandResponse']>>>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileListResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['FileList'] = ResolversParentTypes['FileList']> = {
  file_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['FileType'] = ResolversParentTypes['FileType']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bucket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  object?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  options?: Resolver<Maybe<ResolversTypes['OptionsFields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilterOptsResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['FilterOpts'] = ResolversParentTypes['FilterOpts']> = {
  field?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  operation?: Resolver<Maybe<ResolversTypes['FilterOperation']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['FilterFieldValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenerateReportPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['generateReportPayload'] = ResolversParentTypes['generateReportPayload']> = {
  error?: Resolver<Maybe<ResolversTypes['Error']>, ParentType, ContextType>;
  report?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GeoPointTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['geoPointType'] = ResolversParentTypes['geoPointType']> = {
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['ImageType'] = ResolversParentTypes['ImageType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  filename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvoiceTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['InvoiceType'] = ResolversParentTypes['InvoiceType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  customer_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  xingular_customer?: Resolver<Maybe<ResolversTypes['XingularCustomerType']>, ParentType, ContextType>;
  payment_status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  total_amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  vat_amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  net_amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  document?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invoice_number?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobDataOutputTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['JobDataOutputType'] = ResolversParentTypes['JobDataOutputType']> = {
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobOptionsOutputResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['jobOptionsOutput'] = ResolversParentTypes['jobOptionsOutput']> = {
  priority?: Resolver<Maybe<ResolversTypes['JobPriority']>, ParentType, ContextType>;
  attempts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  backoff?: Resolver<Maybe<ResolversTypes['BackOffOutputType']>, ParentType, ContextType>;
  timeout?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  repeat?: Resolver<Maybe<ResolversTypes['RepeatOutputType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobsResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['Jobs'] = ResolversParentTypes['Jobs']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['JobTypes']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['JobDataOutputType']>, ParentType, ContextType>;
  when?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  options?: Resolver<Maybe<ResolversTypes['jobOptionsOutput']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobsListResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['JobsList'] = ResolversParentTypes['JobsList']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['Jobs']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type LocaleTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['LocaleType'] = ResolversParentTypes['LocaleType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['LocationType'] = ResolversParentTypes['LocationType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  children_ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  address_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['OrganizationType']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['AddressType']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LogoutUserPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['logoutUserPayload'] = ResolversParentTypes['logoutUserPayload']> = {
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['Error']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoraTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['LoraType'] = ResolversParentTypes['LoraType']> = {
  eui?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  app_eui?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  app_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  device_address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  network_session_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  app_session_key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  network?: Resolver<Maybe<ResolversTypes['LoraNetwork']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetaResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['Meta'] = ResolversParentTypes['Meta']> = {
  created?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  modified?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  modified_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attribute']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModifyContractsPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['modifyContractsPayload'] = ResolversParentTypes['modifyContractsPayload']> = {
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  activateUser?: Resolver<Maybe<ResolversTypes['activateUserPayload']>, ParentType, ContextType, RequireFields<MutationActivateUserArgs, 'input'>>;
  administrativeRoomSkipCancel?: Resolver<Maybe<ResolversTypes['administrativeRoomSkipCancelPayload']>, ParentType, ContextType, RequireFields<MutationAdministrativeRoomSkipCancelArgs, 'input'>>;
  bindLocations?: Resolver<Maybe<ResolversTypes['bindLocationsPayload']>, ParentType, ContextType, RequireFields<MutationBindLocationsArgs, 'input'>>;
  bindOrganizations?: Resolver<Maybe<ResolversTypes['bindOrganizationsPayload']>, ParentType, ContextType, RequireFields<MutationBindOrganizationsArgs, 'input'>>;
  changeUserPass?: Resolver<Maybe<ResolversTypes['changePasswordPayload']>, ParentType, ContextType, RequireFields<MutationChangeUserPassArgs, 'input'>>;
  confirmPasswordChange?: Resolver<Maybe<ResolversTypes['confirmPasswordChangePayload']>, ParentType, ContextType, RequireFields<MutationConfirmPasswordChangeArgs, 'input'>>;
  confirmUserInvitation?: Resolver<Maybe<ResolversTypes['confirmUserInvitationPayload']>, ParentType, ContextType, RequireFields<MutationConfirmUserInvitationArgs, 'input'>>;
  createAddresses?: Resolver<Maybe<ResolversTypes['createAddressesPayload']>, ParentType, ContextType, RequireFields<MutationCreateAddressesArgs, 'input'>>;
  createContactPointTypes?: Resolver<Maybe<ResolversTypes['createContactPointTypesPayload']>, ParentType, ContextType, RequireFields<MutationCreateContactPointTypesArgs, 'input'>>;
  createContactPoints?: Resolver<Maybe<ResolversTypes['createContactPointsPayload']>, ParentType, ContextType, RequireFields<MutationCreateContactPointsArgs, 'input'>>;
  createCountries?: Resolver<Maybe<ResolversTypes['createCountriesPayload']>, ParentType, ContextType, RequireFields<MutationCreateCountriesArgs, 'input'>>;
  createCredentials?: Resolver<Maybe<ResolversTypes['createCredentialsPayload']>, ParentType, ContextType, RequireFields<MutationCreateCredentialsArgs, 'input'>>;
  createPaymentMethods?: Resolver<Maybe<ResolversTypes['createPaymentMethodsPayload']>, ParentType, ContextType, RequireFields<MutationCreatePaymentMethodsArgs, 'input'>>;
  createPolicies?: Resolver<Maybe<ResolversTypes['createPoliciesPayload']>, ParentType, ContextType, RequireFields<MutationCreatePoliciesArgs, 'input'>>;
  createPolicySets?: Resolver<Maybe<ResolversTypes['createPolicySetsPayload']>, ParentType, ContextType, RequireFields<MutationCreatePolicySetsArgs, 'input'>>;
  createProducts?: Resolver<Maybe<ResolversTypes['createProductsPayload']>, ParentType, ContextType, RequireFields<MutationCreateProductsArgs, 'input'>>;
  createRoles?: Resolver<Maybe<ResolversTypes['createRolesPayload']>, ParentType, ContextType, RequireFields<MutationCreateRolesArgs, 'input'>>;
  createRules?: Resolver<Maybe<ResolversTypes['createRulesPayload']>, ParentType, ContextType, RequireFields<MutationCreateRulesArgs, 'input'>>;
  createTaxes?: Resolver<Maybe<ResolversTypes['createTaxesPayload']>, ParentType, ContextType, RequireFields<MutationCreateTaxesArgs, 'input'>>;
  createTaxTypes?: Resolver<Maybe<ResolversTypes['createTaxTypesPayload']>, ParentType, ContextType, RequireFields<MutationCreateTaxTypesArgs, 'input'>>;
  createXingularCustomers?: Resolver<Maybe<ResolversTypes['createXingularCustomersPayload']>, ParentType, ContextType, RequireFields<MutationCreateXingularCustomersArgs, 'input'>>;
  createDevices?: Resolver<Maybe<ResolversTypes['createDevicesPayload']>, ParentType, ContextType, RequireFields<MutationCreateDevicesArgs, 'input'>>;
  createDeviceTypes?: Resolver<Maybe<ResolversTypes['createDeviceTypesPayload']>, ParentType, ContextType, RequireFields<MutationCreateDeviceTypesArgs, 'input'>>;
  createDeviceMakes?: Resolver<Maybe<ResolversTypes['createDeviceMakesPayload']>, ParentType, ContextType, RequireFields<MutationCreateDeviceMakesArgs, 'input'>>;
  createContracts?: Resolver<Maybe<ResolversTypes['createContractsPayload']>, ParentType, ContextType, RequireFields<MutationCreateContractsArgs, 'input'>>;
  cancelContracts?: Resolver<Maybe<ResolversTypes['cancelContractsPayload']>, ParentType, ContextType, RequireFields<MutationCancelContractsArgs, 'input'>>;
  revertContractsCancellation?: Resolver<Maybe<ResolversTypes['revertContractsCancellationPayload']>, ParentType, ContextType, RequireFields<MutationRevertContractsCancellationArgs, 'input'>>;
  reactivateContracts?: Resolver<Maybe<ResolversTypes['reactivateContractsPayload']>, ParentType, ContextType, RequireFields<MutationReactivateContractsArgs, 'input'>>;
  createLocales?: Resolver<Maybe<ResolversTypes['createLocalesPayload']>, ParentType, ContextType, RequireFields<MutationCreateLocalesArgs, 'input'>>;
  createLocations?: Resolver<Maybe<ResolversTypes['createLocationsPayload']>, ParentType, ContextType, RequireFields<MutationCreateLocationsArgs, 'input'>>;
  createServiceTeams?: Resolver<Maybe<ResolversTypes['createServiceTeamsPayload']>, ParentType, ContextType, RequireFields<MutationCreateServiceTeamsArgs, 'input'>>;
  createSolutions?: Resolver<Maybe<ResolversTypes['createSolutionsPayload']>, ParentType, ContextType, RequireFields<MutationCreateSolutionsArgs, 'input'>>;
  createTimezones?: Resolver<Maybe<ResolversTypes['createTimezonesPayload']>, ParentType, ContextType, RequireFields<MutationCreateTimezonesArgs, 'input'>>;
  createUsers?: Resolver<Maybe<ResolversTypes['createUsersPayload']>, ParentType, ContextType, RequireFields<MutationCreateUsersArgs, 'input'>>;
  createOrganizations?: Resolver<Maybe<ResolversTypes['createOrganizationsPayload']>, ParentType, ContextType, RequireFields<MutationCreateOrganizationsArgs, 'input'>>;
  createCommands?: Resolver<Maybe<ResolversTypes['createCommandsPayload']>, ParentType, ContextType, RequireFields<MutationCreateCommandsArgs, 'input'>>;
  deleteFile?: Resolver<Maybe<ResolversTypes['deleteFilePayload']>, ParentType, ContextType, RequireFields<MutationDeleteFileArgs, 'input'>>;
  deleteOrgData?: Resolver<Maybe<ResolversTypes['deleteOrgDataPayload']>, ParentType, ContextType, RequireFields<MutationDeleteOrgDataArgs, 'input'>>;
  deleteUsers?: Resolver<Maybe<ResolversTypes['deleteUsersPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUsersArgs, 'input'>>;
  generateReport?: Resolver<Maybe<ResolversTypes['generateReportPayload']>, ParentType, ContextType, RequireFields<MutationGenerateReportArgs, 'input'>>;
  deleteResources?: Resolver<Maybe<ResolversTypes['deleteResourcesPayload']>, ParentType, ContextType, RequireFields<MutationDeleteResourcesArgs, 'input'>>;
  registerUser?: Resolver<Maybe<ResolversTypes['RegisterUserPayload']>, ParentType, ContextType, RequireFields<MutationRegisterUserArgs, 'input'>>;
  requestEmailChange?: Resolver<Maybe<ResolversTypes['requestEmailChangePayload']>, ParentType, ContextType, RequireFields<MutationRequestEmailChangeArgs, 'input'>>;
  confirmEmailChange?: Resolver<Maybe<ResolversTypes['confirmEmailChangePayload']>, ParentType, ContextType, RequireFields<MutationConfirmEmailChangeArgs, 'input'>>;
  unregisterUser?: Resolver<Maybe<ResolversTypes['unregisterUserPayload']>, ParentType, ContextType, RequireFields<MutationUnregisterUserArgs, 'input'>>;
  signInUser?: Resolver<Maybe<ResolversTypes['signInUserPayload']>, ParentType, ContextType, RequireFields<MutationSignInUserArgs, 'input'>>;
  signInApiKey?: Resolver<Maybe<ResolversTypes['signInApiKeyPayload']>, ParentType, ContextType, RequireFields<MutationSignInApiKeyArgs, 'input'>>;
  logoutUser?: Resolver<Maybe<ResolversTypes['logoutUserPayload']>, ParentType, ContextType, RequireFields<MutationLogoutUserArgs, 'input'>>;
  activateUsers?: Resolver<Maybe<ResolversTypes['activateUsersPayload']>, ParentType, ContextType, RequireFields<MutationActivateUsersArgs, 'input'>>;
  updateUsers?: Resolver<Maybe<ResolversTypes['updateUsersPayload']>, ParentType, ContextType, RequireFields<MutationUpdateUsersArgs, 'input'>>;
  scheduleJobs?: Resolver<Maybe<ResolversTypes['ScheduleJobPayload']>, ParentType, ContextType, RequireFields<MutationScheduleJobsArgs, 'input'>>;
  executeCommand?: Resolver<Maybe<ResolversTypes['ExecuteCommandPayload']>, ParentType, ContextType, RequireFields<MutationExecuteCommandArgs, 'input'>>;
  activateDevices?: Resolver<Maybe<ResolversTypes['activateDevicesPayload']>, ParentType, ContextType, RequireFields<MutationActivateDevicesArgs, 'input'>>;
  updateAddresses?: Resolver<Maybe<ResolversTypes['updateAddressesPayload']>, ParentType, ContextType, RequireFields<MutationUpdateAddressesArgs, 'input'>>;
  updateContactPointTypes?: Resolver<Maybe<ResolversTypes['updateAddressTypesPayload']>, ParentType, ContextType, RequireFields<MutationUpdateContactPointTypesArgs, 'input'>>;
  updateContracts?: Resolver<Maybe<ResolversTypes['modifyContractsPayload']>, ParentType, ContextType, RequireFields<MutationUpdateContractsArgs, 'input'>>;
  updateCountries?: Resolver<Maybe<ResolversTypes['updateCountriesPayload']>, ParentType, ContextType, RequireFields<MutationUpdateCountriesArgs, 'input'>>;
  updateCredentials?: Resolver<Maybe<ResolversTypes['updateCredentialsPayload']>, ParentType, ContextType, RequireFields<MutationUpdateCredentialsArgs, 'input'>>;
  updateDevices?: Resolver<Maybe<ResolversTypes['updateDevicesPayload']>, ParentType, ContextType, RequireFields<MutationUpdateDevicesArgs, 'input'>>;
  updateDeviceTypes?: Resolver<Maybe<ResolversTypes['updateDeviceTypesPayload']>, ParentType, ContextType, RequireFields<MutationUpdateDeviceTypesArgs, 'input'>>;
  updateDeviceMakes?: Resolver<Maybe<ResolversTypes['updateDeviceMakesPayload']>, ParentType, ContextType, RequireFields<MutationUpdateDeviceMakesArgs, 'input'>>;
  updateContactPoints?: Resolver<Maybe<ResolversTypes['updateContactPointsPayload']>, ParentType, ContextType, RequireFields<MutationUpdateContactPointsArgs, 'input'>>;
  updateLocales?: Resolver<Maybe<ResolversTypes['updateLocalesPayload']>, ParentType, ContextType, RequireFields<MutationUpdateLocalesArgs, 'input'>>;
  updateLocations?: Resolver<Maybe<ResolversTypes['updateLocationsPayload']>, ParentType, ContextType, RequireFields<MutationUpdateLocationsArgs, 'input'>>;
  updateOrganizations?: Resolver<Maybe<ResolversTypes['updateOrganizationsPayload']>, ParentType, ContextType, RequireFields<MutationUpdateOrganizationsArgs, 'input'>>;
  updatePaymentMethods?: Resolver<Maybe<ResolversTypes['updatePaymentMethodsPayload']>, ParentType, ContextType, RequireFields<MutationUpdatePaymentMethodsArgs, 'input'>>;
  updatePolicies?: Resolver<Maybe<ResolversTypes['updatePoliciesPayload']>, ParentType, ContextType, RequireFields<MutationUpdatePoliciesArgs, 'input'>>;
  updatePolicySets?: Resolver<Maybe<ResolversTypes['updatePolicySetsPayload']>, ParentType, ContextType, RequireFields<MutationUpdatePolicySetsArgs, 'input'>>;
  updateProducts?: Resolver<Maybe<ResolversTypes['updateProductsPayload']>, ParentType, ContextType, RequireFields<MutationUpdateProductsArgs, 'input'>>;
  updateRoles?: Resolver<Maybe<ResolversTypes['updateRolesPayload']>, ParentType, ContextType, RequireFields<MutationUpdateRolesArgs, 'input'>>;
  updateRules?: Resolver<Maybe<ResolversTypes['updateRulesPayload']>, ParentType, ContextType, RequireFields<MutationUpdateRulesArgs, 'input'>>;
  updateServiceTeams?: Resolver<Maybe<ResolversTypes['updateServiceTeamsPayload']>, ParentType, ContextType, RequireFields<MutationUpdateServiceTeamsArgs, 'input'>>;
  updateSolutions?: Resolver<Maybe<ResolversTypes['updateSolutionsPayload']>, ParentType, ContextType, RequireFields<MutationUpdateSolutionsArgs, 'input'>>;
  updateTaxes?: Resolver<Maybe<ResolversTypes['updateTaxesPayload']>, ParentType, ContextType, RequireFields<MutationUpdateTaxesArgs, 'input'>>;
  uploadFile?: Resolver<Maybe<ResolversTypes['uploadFilePayload']>, ParentType, ContextType, RequireFields<MutationUploadFileArgs, 'input'>>;
  updateTaxTypes?: Resolver<Maybe<ResolversTypes['updateTaxTypesPayload']>, ParentType, ContextType, RequireFields<MutationUpdateTaxTypesArgs, 'input'>>;
  updateTimezones?: Resolver<Maybe<ResolversTypes['updateTimezonesPayload']>, ParentType, ContextType, RequireFields<MutationUpdateTimezonesArgs, 'input'>>;
  requestPasswordChange?: Resolver<Maybe<ResolversTypes['requestPasswordChangePayload']>, ParentType, ContextType, RequireFields<MutationRequestPasswordChangeArgs, 'input'>>;
  setSessionScope?: Resolver<Maybe<ResolversTypes['setSessionScopePayload']>, ParentType, ContextType, RequireFields<MutationSetSessionScopeArgs, 'input'>>;
};

export type OptionsFieldsResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['OptionsFields'] = ResolversParentTypes['OptionsFields']> = {
  encoding?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_disposition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  md5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attribute']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['OrganizationType'] = ResolversParentTypes['OrganizationType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  children_ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contact_point_ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vat_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isic_v4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  registration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  registration_court?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['AddressType']>, ParentType, ContextType>;
  parent_organization?: Resolver<Maybe<ResolversTypes['OrganizationType']>, ParentType, ContextType>;
  children_organizations?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrganizationType']>>>, ParentType, ContextType>;
  contact_points?: Resolver<Maybe<Array<Maybe<ResolversTypes['ContactPointsType']>>>, ParentType, ContextType>;
  payment_method_ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  payment_methods?: Resolver<Maybe<Array<Maybe<ResolversTypes['PaymentMethodTypeOutput']>>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputAddressTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputAddressType'] = ResolversParentTypes['outputAddressType']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['AddressType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputCommandResponseResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputCommandResponse'] = ResolversParentTypes['outputCommandResponse']> = {
  services?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputCommandTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputCommandType'] = ResolversParentTypes['outputCommandType']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['CommandType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputContactPointsTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputContactPointsType'] = ResolversParentTypes['outputContactPointsType']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['ContactPointsType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputContractTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputContractType'] = ResolversParentTypes['outputContractType']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['ContractType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputCountryTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputCountryType'] = ResolversParentTypes['outputCountryType']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['CountryType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputCredentialTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputCredentialType'] = ResolversParentTypes['outputCredentialType']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['CredentialType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputDeviceMakeTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputDeviceMakeType'] = ResolversParentTypes['outputDeviceMakeType']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['DeviceMakeType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputDeviceTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputDeviceType'] = ResolversParentTypes['outputDeviceType']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['DeviceType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputFileListTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputFileListType'] = ResolversParentTypes['outputFileListType']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['FileList']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['Error']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputFileTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputFileType'] = ResolversParentTypes['outputFileType']> = {
  details?: Resolver<Maybe<ResolversTypes['FileType']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['Error']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputInvoiceTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputInvoiceType'] = ResolversParentTypes['outputInvoiceType']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['InvoiceType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputLocaleTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputLocaleType'] = ResolversParentTypes['outputLocaleType']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['LocaleType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputLocationTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputLocationType'] = ResolversParentTypes['outputLocationType']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['LocationType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputOrgTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputOrgType'] = ResolversParentTypes['outputOrgType']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrganizationType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputPermissionsTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputPermissionsType'] = ResolversParentTypes['outputPermissionsType']> = {
  details?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['Error']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputPolicySetTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputPolicySetType'] = ResolversParentTypes['outputPolicySetType']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['PolicySetType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputPolicyTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputPolicyType'] = ResolversParentTypes['outputPolicyType']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['PolicyType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputProductTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputProductType'] = ResolversParentTypes['outputProductType']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputRoleTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputRoleType'] = ResolversParentTypes['outputRoleType']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['RoleType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputRuleTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputRuleType'] = ResolversParentTypes['outputRuleType']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['RuleType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputServicesTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputServicesType'] = ResolversParentTypes['outputServicesType']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputServiceTeamTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputServiceTeamType'] = ResolversParentTypes['outputServiceTeamType']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['ServiceTeamType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputSolutionTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputSolutionType'] = ResolversParentTypes['outputSolutionType']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['SolutionType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputTaxTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputTaxType'] = ResolversParentTypes['outputTaxType']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaxType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputTimezoneTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputTimezoneType'] = ResolversParentTypes['outputTimezoneType']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['TimezoneType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputTypeOfContactPointTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputTypeOfContactPointType'] = ResolversParentTypes['outputTypeOfContactPointType']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['TypeOfContactPointType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputTypeOfTaxTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputTypeOfTaxType'] = ResolversParentTypes['outputTypeOfTaxType']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['TypeOfTaxType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputUsersTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputUsersType'] = ResolversParentTypes['outputUsersType']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OutputXingularCustomerTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['outputXingularCustomerType'] = ResolversParentTypes['outputXingularCustomerType']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['XingularCustomerType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentMethodListTypeOutputResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['PaymentMethodListTypeOutput'] = ResolversParentTypes['PaymentMethodListTypeOutput']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['PaymentMethodTypeOutput']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentMethodTypeOutputResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['PaymentMethodTypeOutput'] = ResolversParentTypes['PaymentMethodTypeOutput']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payment_method?: Resolver<Maybe<ResolversTypes['PaymentMethodEnumType']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PolicySetTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['PolicySetType'] = ResolversParentTypes['PolicySetType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  combining_algorithm?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  policies?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['AccessControlTargetType']>, ParentType, ContextType>;
  policies_resolved?: Resolver<Maybe<Array<Maybe<ResolversTypes['PolicyType']>>>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PolicyTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['PolicyType'] = ResolversParentTypes['PolicyType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  effect?: Resolver<Maybe<ResolversTypes['AccessControlEffectType']>, ParentType, ContextType>;
  combining_algorithm?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rules?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['AccessControlTargetType']>, ParentType, ContextType>;
  rules_resolved?: Resolver<Maybe<Array<Maybe<ResolversTypes['RuleType']>>>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PriceSpecificationResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['priceSpecification'] = ResolversParentTypes['priceSpecification']> = {
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['CurrencyType']>, ParentType, ContextType>;
  reference_quantity?: Resolver<Maybe<ResolversTypes['refQuantity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductAssociationResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['productAssociation'] = ResolversParentTypes['productAssociation']> = {
  product_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['ProductType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['ProductType'] = ResolversParentTypes['ProductType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tax_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  solution_ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  accrue_scheme?: Resolver<Maybe<ResolversTypes['AccrueSchemeType']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['priceSpecification']>, ParentType, ContextType>;
  tax?: Resolver<Maybe<ResolversTypes['TaxType']>, ParentType, ContextType>;
  solutions?: Resolver<Maybe<Array<Maybe<ResolversTypes['SolutionType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PropertiesOutputAttributeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['PropertiesOutputAttribute'] = ResolversParentTypes['PropertiesOutputAttribute']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReactivateContractsPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['reactivateContractsPayload'] = ResolversParentTypes['reactivateContractsPayload']> = {
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RefQuantityResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['refQuantity'] = ResolversParentTypes['refQuantity']> = {
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  unit_code?: Resolver<Maybe<ResolversTypes['PriceUnitType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegisterUserPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['RegisterUserPayload'] = ResolversParentTypes['RegisterUserPayload']> = {
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['Error']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RepeatOutputTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['RepeatOutputType'] = ResolversParentTypes['RepeatOutputType']> = {
  every?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cron?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RequestEmailChangePayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['requestEmailChangePayload'] = ResolversParentTypes['requestEmailChangePayload']> = {
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['Error']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RequestPasswordChangePayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['requestPasswordChangePayload'] = ResolversParentTypes['requestPasswordChangePayload']> = {
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['Error']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResponseSafeUserTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['ResponseSafeUserType'] = ResolversParentTypes['ResponseSafeUserType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_scope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role_associations?: Resolver<Maybe<Array<Maybe<ResolversTypes['RoleAssociation']>>>, ParentType, ContextType>;
  role_associations_resolved?: Resolver<Maybe<Array<Maybe<ResolversTypes['RoleAssociationResolved']>>>, ParentType, ContextType>;
  locale_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['LocaleType']>, ParentType, ContextType>;
  timezone_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['TimezoneType']>, ParentType, ContextType>;
  guest?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ImageType']>, ParentType, ContextType>;
  scope?: Resolver<Maybe<ResolversTypes['userScopeType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RevertContractsCancellationPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['revertContractsCancellationPayload'] = ResolversParentTypes['revertContractsCancellationPayload']> = {
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleAssociationResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['RoleAssociation'] = ResolversParentTypes['RoleAssociation']> = {
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attribute']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleAssociationResolvedResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['RoleAssociationResolved'] = ResolversParentTypes['RoleAssociationResolved']> = {
  role?: Resolver<Maybe<ResolversTypes['RoleType']>, ParentType, ContextType>;
  organizations?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrganizationType']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['RoleType'] = ResolversParentTypes['RoleType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RootQueryResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['RootQuery'] = ResolversParentTypes['RootQuery']> = {
  getAllAddresses?: Resolver<Maybe<ResolversTypes['outputAddressType']>, ParentType, ContextType, RequireFields<RootQueryGetAllAddressesArgs, never>>;
  getAllContactPointTypes?: Resolver<Maybe<ResolversTypes['outputTypeOfContactPointType']>, ParentType, ContextType, RequireFields<RootQueryGetAllContactPointTypesArgs, never>>;
  getAllContactPoints?: Resolver<Maybe<ResolversTypes['outputContactPointsType']>, ParentType, ContextType, RequireFields<RootQueryGetAllContactPointsArgs, never>>;
  getAllCountries?: Resolver<Maybe<ResolversTypes['outputCountryType']>, ParentType, ContextType, RequireFields<RootQueryGetAllCountriesArgs, never>>;
  getAllCredentials?: Resolver<Maybe<ResolversTypes['outputCredentialType']>, ParentType, ContextType, RequireFields<RootQueryGetAllCredentialsArgs, never>>;
  getAllDevices?: Resolver<Maybe<ResolversTypes['outputDeviceType']>, ParentType, ContextType, RequireFields<RootQueryGetAllDevicesArgs, never>>;
  getAllDeviceTypes?: Resolver<Maybe<ResolversTypes['TypeOfDeviceOutputType']>, ParentType, ContextType, RequireFields<RootQueryGetAllDeviceTypesArgs, never>>;
  getAllDeviceMakes?: Resolver<Maybe<ResolversTypes['outputDeviceMakeType']>, ParentType, ContextType, RequireFields<RootQueryGetAllDeviceMakesArgs, never>>;
  getDeviceActivity?: Resolver<Maybe<ResolversTypes['DeviceAcvityType']>, ParentType, ContextType, RequireFields<RootQueryGetDeviceActivityArgs, never>>;
  getAllContracts?: Resolver<Maybe<ResolversTypes['outputContractType']>, ParentType, ContextType, RequireFields<RootQueryGetAllContractsArgs, never>>;
  getAllMicroServices?: Resolver<Maybe<ResolversTypes['outputServicesType']>, ParentType, ContextType, RequireFields<RootQueryGetAllMicroServicesArgs, never>>;
  getAllInvoices?: Resolver<Maybe<ResolversTypes['outputInvoiceType']>, ParentType, ContextType, RequireFields<RootQueryGetAllInvoicesArgs, never>>;
  getAllLocales?: Resolver<Maybe<ResolversTypes['outputLocaleType']>, ParentType, ContextType, RequireFields<RootQueryGetAllLocalesArgs, never>>;
  getAllTimezones?: Resolver<Maybe<ResolversTypes['outputTimezoneType']>, ParentType, ContextType, RequireFields<RootQueryGetAllTimezonesArgs, never>>;
  getAllLocations?: Resolver<Maybe<ResolversTypes['outputLocationType']>, ParentType, ContextType, RequireFields<RootQueryGetAllLocationsArgs, never>>;
  getAllOrganizations?: Resolver<Maybe<ResolversTypes['outputOrgType']>, ParentType, ContextType, RequireFields<RootQueryGetAllOrganizationsArgs, never>>;
  getAllPaymentMethods?: Resolver<Maybe<ResolversTypes['PaymentMethodListTypeOutput']>, ParentType, ContextType, RequireFields<RootQueryGetAllPaymentMethodsArgs, never>>;
  getAllProducts?: Resolver<Maybe<ResolversTypes['outputProductType']>, ParentType, ContextType, RequireFields<RootQueryGetAllProductsArgs, never>>;
  getAllServiceTeams?: Resolver<Maybe<ResolversTypes['outputServiceTeamType']>, ParentType, ContextType, RequireFields<RootQueryGetAllServiceTeamsArgs, never>>;
  getAllSolutions?: Resolver<Maybe<ResolversTypes['outputSolutionType']>, ParentType, ContextType, RequireFields<RootQueryGetAllSolutionsArgs, never>>;
  getAllTaxes?: Resolver<Maybe<ResolversTypes['outputTaxType']>, ParentType, ContextType, RequireFields<RootQueryGetAllTaxesArgs, never>>;
  getAllTaxTypes?: Resolver<Maybe<ResolversTypes['outputTypeOfTaxType']>, ParentType, ContextType, RequireFields<RootQueryGetAllTaxTypesArgs, never>>;
  getAllXingularCustomers?: Resolver<Maybe<ResolversTypes['outputXingularCustomerType']>, ParentType, ContextType, RequireFields<RootQueryGetAllXingularCustomersArgs, never>>;
  getAllScheduledJobs?: Resolver<Maybe<ResolversTypes['JobsList']>, ParentType, ContextType, RequireFields<RootQueryGetAllScheduledJobsArgs, never>>;
  getAllCommands?: Resolver<Maybe<ResolversTypes['outputCommandType']>, ParentType, ContextType, RequireFields<RootQueryGetAllCommandsArgs, never>>;
  getAllRoles?: Resolver<Maybe<ResolversTypes['outputRoleType']>, ParentType, ContextType, RequireFields<RootQueryGetAllRolesArgs, never>>;
  getAllUsers?: Resolver<Maybe<ResolversTypes['outputUsersType']>, ParentType, ContextType, RequireFields<RootQueryGetAllUsersArgs, never>>;
  getAllPolicySets?: Resolver<Maybe<ResolversTypes['outputPolicySetType']>, ParentType, ContextType, RequireFields<RootQueryGetAllPolicySetsArgs, never>>;
  getAllPolicies?: Resolver<Maybe<ResolversTypes['outputPolicyType']>, ParentType, ContextType, RequireFields<RootQueryGetAllPoliciesArgs, never>>;
  getAllRules?: Resolver<Maybe<ResolversTypes['outputRuleType']>, ParentType, ContextType, RequireFields<RootQueryGetAllRulesArgs, never>>;
  getAllPermissions?: Resolver<Maybe<ResolversTypes['outputPermissionsType']>, ParentType, ContextType>;
  getDashboardData?: Resolver<Maybe<ResolversTypes['SearchResultType']>, ParentType, ContextType, RequireFields<RootQueryGetDashboardDataArgs, never>>;
  fullTextSearch?: Resolver<Maybe<ResolversTypes['SearchResultType']>, ParentType, ContextType, RequireFields<RootQueryFullTextSearchArgs, never>>;
  session?: Resolver<Maybe<ResolversTypes['ResponseSafeUserType']>, ParentType, ContextType>;
  listAllFiles?: Resolver<Maybe<ResolversTypes['outputFileListType']>, ParentType, ContextType, RequireFields<RootQueryListAllFilesArgs, never>>;
  getFile?: Resolver<Maybe<ResolversTypes['outputFileType']>, ParentType, ContextType, RequireFields<RootQueryGetFileArgs, never>>;
};

export type RuleContextQueryResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['ruleContextQuery'] = ResolversParentTypes['ruleContextQuery']> = {
  filters?: Resolver<Maybe<Array<Maybe<ResolversTypes['FilterOpts']>>>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RuleTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['RuleType'] = ResolversParentTypes['RuleType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  condition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  effect?: Resolver<Maybe<ResolversTypes['AccessControlEffectType']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['AccessControlTargetType']>, ParentType, ContextType>;
  context_query?: Resolver<Maybe<ResolversTypes['ruleContextQuery']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScheduleJobPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['ScheduleJobPayload'] = ResolversParentTypes['ScheduleJobPayload']> = {
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResultTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['SearchResultType'] = ResolversParentTypes['SearchResultType']> = {
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['Error']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServiceTeamTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['ServiceTeamType'] = ResolversParentTypes['ServiceTeamType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  leader_ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  cc_mail_list?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  timezone_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notification_time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  room_ids?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  organization_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  leaders?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserType']>>>, ParentType, ContextType>;
  rooms?: Resolver<Maybe<Array<Maybe<ResolversTypes['LocationType']>>>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['OrganizationType']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetSessionScopePayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['setSessionScopePayload'] = ResolversParentTypes['setSessionScopePayload']> = {
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['Error']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SignInApiKeyPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['signInApiKeyPayload'] = ResolversParentTypes['signInApiKeyPayload']> = {
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['Error']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SignInUserPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['signInUserPayload'] = ResolversParentTypes['signInUserPayload']> = {
  me?: Resolver<Maybe<ResolversTypes['ResponseSafeUserType']>, ParentType, ContextType>;
  tokens?: Resolver<Maybe<ResolversTypes['TokenType']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['Error']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SolutionTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['SolutionType'] = ResolversParentTypes['SolutionType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaxTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['TaxType'] = ResolversParentTypes['TaxType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['CountryType']>, ParentType, ContextType>;
  tax_type?: Resolver<Maybe<ResolversTypes['TypeOfTaxType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TimezoneTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['TimezoneType'] = ResolversParentTypes['TimezoneType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TokenTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['TokenType'] = ResolversParentTypes['TokenType']> = {
  access_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expires_in?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  token_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TypeOfContactPointTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['TypeOfContactPointType'] = ResolversParentTypes['TypeOfContactPointType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TypeOfDeviceOutputTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['TypeOfDeviceOutputType'] = ResolversParentTypes['TypeOfDeviceOutputType']> = {
  details?: Resolver<Maybe<Array<Maybe<ResolversTypes['TypeOfDeviceType']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TypeOfDeviceTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['TypeOfDeviceType'] = ResolversParentTypes['TypeOfDeviceType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  oem_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  device_type?: Resolver<Maybe<ResolversTypes['DeviceEnumType']>, ParentType, ContextType>;
  make_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  make?: Resolver<Maybe<ResolversTypes['DeviceMakeType']>, ParentType, ContextType>;
  properties?: Resolver<Maybe<Array<Maybe<ResolversTypes['PropertiesOutputAttribute']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TypeOfTaxTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['TypeOfTaxType'] = ResolversParentTypes['TypeOfTaxType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UnregisterUserPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['unregisterUserPayload'] = ResolversParentTypes['unregisterUserPayload']> = {
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['Error']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateAddressesPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['updateAddressesPayload'] = ResolversParentTypes['updateAddressesPayload']> = {
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateAddressTypesPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['updateAddressTypesPayload'] = ResolversParentTypes['updateAddressTypesPayload']> = {
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateContactPointsPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['updateContactPointsPayload'] = ResolversParentTypes['updateContactPointsPayload']> = {
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCountriesPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['updateCountriesPayload'] = ResolversParentTypes['updateCountriesPayload']> = {
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateCredentialsPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['updateCredentialsPayload'] = ResolversParentTypes['updateCredentialsPayload']> = {
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateDeviceMakesPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['updateDeviceMakesPayload'] = ResolversParentTypes['updateDeviceMakesPayload']> = {
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateDevicesPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['updateDevicesPayload'] = ResolversParentTypes['updateDevicesPayload']> = {
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateDeviceTypesPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['updateDeviceTypesPayload'] = ResolversParentTypes['updateDeviceTypesPayload']> = {
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateLocalesPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['updateLocalesPayload'] = ResolversParentTypes['updateLocalesPayload']> = {
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateLocationsPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['updateLocationsPayload'] = ResolversParentTypes['updateLocationsPayload']> = {
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateOrganizationsPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['updateOrganizationsPayload'] = ResolversParentTypes['updateOrganizationsPayload']> = {
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdatePaymentMethodsPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['updatePaymentMethodsPayload'] = ResolversParentTypes['updatePaymentMethodsPayload']> = {
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdatePoliciesPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['updatePoliciesPayload'] = ResolversParentTypes['updatePoliciesPayload']> = {
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdatePolicySetsPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['updatePolicySetsPayload'] = ResolversParentTypes['updatePolicySetsPayload']> = {
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateProductsPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['updateProductsPayload'] = ResolversParentTypes['updateProductsPayload']> = {
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateRolesPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['updateRolesPayload'] = ResolversParentTypes['updateRolesPayload']> = {
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateRulesPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['updateRulesPayload'] = ResolversParentTypes['updateRulesPayload']> = {
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateServiceTeamsPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['updateServiceTeamsPayload'] = ResolversParentTypes['updateServiceTeamsPayload']> = {
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateSolutionsPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['updateSolutionsPayload'] = ResolversParentTypes['updateSolutionsPayload']> = {
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateTaxesPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['updateTaxesPayload'] = ResolversParentTypes['updateTaxesPayload']> = {
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateTaxTypesPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['updateTaxTypesPayload'] = ResolversParentTypes['updateTaxTypesPayload']> = {
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateTimezonesPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['updateTimezonesPayload'] = ResolversParentTypes['updateTimezonesPayload']> = {
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateUsersPayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['updateUsersPayload'] = ResolversParentTypes['updateUsersPayload']> = {
  status?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorArray']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UploadFilePayloadResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['uploadFilePayload'] = ResolversParentTypes['uploadFilePayload']> = {
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Bucket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attribute']>>>, ParentType, ContextType>;
  Length?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['Error']>, ParentType, ContextType>;
  clientMutationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserScopeTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['userScopeType'] = ResolversParentTypes['userScopeType']> = {
  role_associations?: Resolver<Maybe<Array<Maybe<ResolversTypes['RoleAssociation']>>>, ParentType, ContextType>;
  scopeOrganization?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['UserType'] = ResolversParentTypes['UserType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_scope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role_associations?: Resolver<Maybe<Array<Maybe<ResolversTypes['RoleAssociation']>>>, ParentType, ContextType>;
  role_associations_resolved?: Resolver<Maybe<Array<Maybe<ResolversTypes['RoleAssociationResolved']>>>, ParentType, ContextType>;
  locale_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['LocaleType']>, ParentType, ContextType>;
  timezone_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['TimezoneType']>, ParentType, ContextType>;
  guest?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['ImageType']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  activation_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unauthenticated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type XingularCustomerTypeResolvers<ContextType = RestoreCommerceBaseContext, ParentType extends ResolversParentTypes['XingularCustomerType'] = ResolversParentTypes['XingularCustomerType']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['OrganizationType']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = RestoreCommerceBaseContext> = {
  AccessControlTargetType?: AccessControlTargetTypeResolvers<ContextType>;
  activateDevicesPayload?: ActivateDevicesPayloadResolvers<ContextType>;
  activateUserPayload?: ActivateUserPayloadResolvers<ContextType>;
  activateUsersPayload?: ActivateUsersPayloadResolvers<ContextType>;
  additionalAddressOutput?: AdditionalAddressOutputResolvers<ContextType>;
  AddressType?: AddressTypeResolvers<ContextType>;
  administrativeRoomSkipCancelPayload?: AdministrativeRoomSkipCancelPayloadResolvers<ContextType>;
  Attribute?: AttributeResolvers<ContextType>;
  BackOffOutputType?: BackOffOutputTypeResolvers<ContextType>;
  bindLocationsPayload?: BindLocationsPayloadResolvers<ContextType>;
  bindOrganizationsPayload?: BindOrganizationsPayloadResolvers<ContextType>;
  cancelContractsPayload?: CancelContractsPayloadResolvers<ContextType>;
  changePasswordPayload?: ChangePasswordPayloadResolvers<ContextType>;
  CommandParameter?: CommandParameterResolvers<ContextType>;
  CommandType?: CommandTypeResolvers<ContextType>;
  confirmEmailChangePayload?: ConfirmEmailChangePayloadResolvers<ContextType>;
  confirmPasswordChangePayload?: ConfirmPasswordChangePayloadResolvers<ContextType>;
  confirmUserInvitationPayload?: ConfirmUserInvitationPayloadResolvers<ContextType>;
  ContactPointsType?: ContactPointsTypeResolvers<ContextType>;
  ContractType?: ContractTypeResolvers<ContextType>;
  CountryType?: CountryTypeResolvers<ContextType>;
  createAddressesPayload?: CreateAddressesPayloadResolvers<ContextType>;
  createCommandsPayload?: CreateCommandsPayloadResolvers<ContextType>;
  createContactPointsPayload?: CreateContactPointsPayloadResolvers<ContextType>;
  createContactPointTypesPayload?: CreateContactPointTypesPayloadResolvers<ContextType>;
  createContractsPayload?: CreateContractsPayloadResolvers<ContextType>;
  createCountriesPayload?: CreateCountriesPayloadResolvers<ContextType>;
  createCredentialsPayload?: CreateCredentialsPayloadResolvers<ContextType>;
  createDeviceMakesPayload?: CreateDeviceMakesPayloadResolvers<ContextType>;
  createDevicesPayload?: CreateDevicesPayloadResolvers<ContextType>;
  createDeviceTypesPayload?: CreateDeviceTypesPayloadResolvers<ContextType>;
  createLocalesPayload?: CreateLocalesPayloadResolvers<ContextType>;
  createLocationsPayload?: CreateLocationsPayloadResolvers<ContextType>;
  createOrganizationsPayload?: CreateOrganizationsPayloadResolvers<ContextType>;
  createPaymentMethodsPayload?: CreatePaymentMethodsPayloadResolvers<ContextType>;
  createPoliciesPayload?: CreatePoliciesPayloadResolvers<ContextType>;
  createPolicySetsPayload?: CreatePolicySetsPayloadResolvers<ContextType>;
  createProductsPayload?: CreateProductsPayloadResolvers<ContextType>;
  createRolesPayload?: CreateRolesPayloadResolvers<ContextType>;
  createRulesPayload?: CreateRulesPayloadResolvers<ContextType>;
  createServiceTeamsPayload?: CreateServiceTeamsPayloadResolvers<ContextType>;
  createSolutionsPayload?: CreateSolutionsPayloadResolvers<ContextType>;
  createTaxesPayload?: CreateTaxesPayloadResolvers<ContextType>;
  createTaxTypesPayload?: CreateTaxTypesPayloadResolvers<ContextType>;
  createTimezonesPayload?: CreateTimezonesPayloadResolvers<ContextType>;
  createUsersPayload?: CreateUsersPayloadResolvers<ContextType>;
  createXingularCustomersPayload?: CreateXingularCustomersPayloadResolvers<ContextType>;
  CredentialType?: CredentialTypeResolvers<ContextType>;
  Date?: GraphQLScalarType;
  deleteFilePayload?: DeleteFilePayloadResolvers<ContextType>;
  deleteOrgDataPayload?: DeleteOrgDataPayloadResolvers<ContextType>;
  deleteResourcesPayload?: DeleteResourcesPayloadResolvers<ContextType>;
  deleteUsersPayload?: DeleteUsersPayloadResolvers<ContextType>;
  DeviceAcvityType?: DeviceAcvityTypeResolvers<ContextType>;
  DeviceMakeType?: DeviceMakeTypeResolvers<ContextType>;
  DeviceType?: DeviceTypeResolvers<ContextType>;
  Error?: ErrorResolvers<ContextType>;
  ErrorArray?: ErrorArrayResolvers<ContextType>;
  ExecuteCommandPayload?: ExecuteCommandPayloadResolvers<ContextType>;
  FileList?: FileListResolvers<ContextType>;
  FileType?: FileTypeResolvers<ContextType>;
  FilterOpts?: FilterOptsResolvers<ContextType>;
  generateReportPayload?: GenerateReportPayloadResolvers<ContextType>;
  geoPointType?: GeoPointTypeResolvers<ContextType>;
  ImageType?: ImageTypeResolvers<ContextType>;
  InvoiceType?: InvoiceTypeResolvers<ContextType>;
  JobDataOutputType?: JobDataOutputTypeResolvers<ContextType>;
  jobOptionsOutput?: JobOptionsOutputResolvers<ContextType>;
  Jobs?: JobsResolvers<ContextType>;
  JobsList?: JobsListResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  LocaleType?: LocaleTypeResolvers<ContextType>;
  LocationType?: LocationTypeResolvers<ContextType>;
  logoutUserPayload?: LogoutUserPayloadResolvers<ContextType>;
  LoraType?: LoraTypeResolvers<ContextType>;
  Meta?: MetaResolvers<ContextType>;
  modifyContractsPayload?: ModifyContractsPayloadResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  OptionsFields?: OptionsFieldsResolvers<ContextType>;
  OrganizationType?: OrganizationTypeResolvers<ContextType>;
  outputAddressType?: OutputAddressTypeResolvers<ContextType>;
  outputCommandResponse?: OutputCommandResponseResolvers<ContextType>;
  outputCommandType?: OutputCommandTypeResolvers<ContextType>;
  outputContactPointsType?: OutputContactPointsTypeResolvers<ContextType>;
  outputContractType?: OutputContractTypeResolvers<ContextType>;
  outputCountryType?: OutputCountryTypeResolvers<ContextType>;
  outputCredentialType?: OutputCredentialTypeResolvers<ContextType>;
  outputDeviceMakeType?: OutputDeviceMakeTypeResolvers<ContextType>;
  outputDeviceType?: OutputDeviceTypeResolvers<ContextType>;
  outputFileListType?: OutputFileListTypeResolvers<ContextType>;
  outputFileType?: OutputFileTypeResolvers<ContextType>;
  outputInvoiceType?: OutputInvoiceTypeResolvers<ContextType>;
  outputLocaleType?: OutputLocaleTypeResolvers<ContextType>;
  outputLocationType?: OutputLocationTypeResolvers<ContextType>;
  outputOrgType?: OutputOrgTypeResolvers<ContextType>;
  outputPermissionsType?: OutputPermissionsTypeResolvers<ContextType>;
  outputPolicySetType?: OutputPolicySetTypeResolvers<ContextType>;
  outputPolicyType?: OutputPolicyTypeResolvers<ContextType>;
  outputProductType?: OutputProductTypeResolvers<ContextType>;
  outputRoleType?: OutputRoleTypeResolvers<ContextType>;
  outputRuleType?: OutputRuleTypeResolvers<ContextType>;
  outputServicesType?: OutputServicesTypeResolvers<ContextType>;
  outputServiceTeamType?: OutputServiceTeamTypeResolvers<ContextType>;
  outputSolutionType?: OutputSolutionTypeResolvers<ContextType>;
  outputTaxType?: OutputTaxTypeResolvers<ContextType>;
  outputTimezoneType?: OutputTimezoneTypeResolvers<ContextType>;
  outputTypeOfContactPointType?: OutputTypeOfContactPointTypeResolvers<ContextType>;
  outputTypeOfTaxType?: OutputTypeOfTaxTypeResolvers<ContextType>;
  outputUsersType?: OutputUsersTypeResolvers<ContextType>;
  outputXingularCustomerType?: OutputXingularCustomerTypeResolvers<ContextType>;
  PaymentMethodListTypeOutput?: PaymentMethodListTypeOutputResolvers<ContextType>;
  PaymentMethodTypeOutput?: PaymentMethodTypeOutputResolvers<ContextType>;
  PolicySetType?: PolicySetTypeResolvers<ContextType>;
  PolicyType?: PolicyTypeResolvers<ContextType>;
  priceSpecification?: PriceSpecificationResolvers<ContextType>;
  productAssociation?: ProductAssociationResolvers<ContextType>;
  ProductType?: ProductTypeResolvers<ContextType>;
  PropertiesOutputAttribute?: PropertiesOutputAttributeResolvers<ContextType>;
  reactivateContractsPayload?: ReactivateContractsPayloadResolvers<ContextType>;
  refQuantity?: RefQuantityResolvers<ContextType>;
  RegisterUserPayload?: RegisterUserPayloadResolvers<ContextType>;
  RepeatOutputType?: RepeatOutputTypeResolvers<ContextType>;
  requestEmailChangePayload?: RequestEmailChangePayloadResolvers<ContextType>;
  requestPasswordChangePayload?: RequestPasswordChangePayloadResolvers<ContextType>;
  ResponseSafeUserType?: ResponseSafeUserTypeResolvers<ContextType>;
  revertContractsCancellationPayload?: RevertContractsCancellationPayloadResolvers<ContextType>;
  RoleAssociation?: RoleAssociationResolvers<ContextType>;
  RoleAssociationResolved?: RoleAssociationResolvedResolvers<ContextType>;
  RoleType?: RoleTypeResolvers<ContextType>;
  RootQuery?: RootQueryResolvers<ContextType>;
  ruleContextQuery?: RuleContextQueryResolvers<ContextType>;
  RuleType?: RuleTypeResolvers<ContextType>;
  ScheduleJobPayload?: ScheduleJobPayloadResolvers<ContextType>;
  SearchResultType?: SearchResultTypeResolvers<ContextType>;
  ServiceTeamType?: ServiceTeamTypeResolvers<ContextType>;
  setSessionScopePayload?: SetSessionScopePayloadResolvers<ContextType>;
  signInApiKeyPayload?: SignInApiKeyPayloadResolvers<ContextType>;
  signInUserPayload?: SignInUserPayloadResolvers<ContextType>;
  SolutionType?: SolutionTypeResolvers<ContextType>;
  TaxType?: TaxTypeResolvers<ContextType>;
  TimezoneType?: TimezoneTypeResolvers<ContextType>;
  TokenType?: TokenTypeResolvers<ContextType>;
  TypeOfContactPointType?: TypeOfContactPointTypeResolvers<ContextType>;
  TypeOfDeviceOutputType?: TypeOfDeviceOutputTypeResolvers<ContextType>;
  TypeOfDeviceType?: TypeOfDeviceTypeResolvers<ContextType>;
  TypeOfTaxType?: TypeOfTaxTypeResolvers<ContextType>;
  unregisterUserPayload?: UnregisterUserPayloadResolvers<ContextType>;
  updateAddressesPayload?: UpdateAddressesPayloadResolvers<ContextType>;
  updateAddressTypesPayload?: UpdateAddressTypesPayloadResolvers<ContextType>;
  updateContactPointsPayload?: UpdateContactPointsPayloadResolvers<ContextType>;
  updateCountriesPayload?: UpdateCountriesPayloadResolvers<ContextType>;
  updateCredentialsPayload?: UpdateCredentialsPayloadResolvers<ContextType>;
  updateDeviceMakesPayload?: UpdateDeviceMakesPayloadResolvers<ContextType>;
  updateDevicesPayload?: UpdateDevicesPayloadResolvers<ContextType>;
  updateDeviceTypesPayload?: UpdateDeviceTypesPayloadResolvers<ContextType>;
  updateLocalesPayload?: UpdateLocalesPayloadResolvers<ContextType>;
  updateLocationsPayload?: UpdateLocationsPayloadResolvers<ContextType>;
  updateOrganizationsPayload?: UpdateOrganizationsPayloadResolvers<ContextType>;
  updatePaymentMethodsPayload?: UpdatePaymentMethodsPayloadResolvers<ContextType>;
  updatePoliciesPayload?: UpdatePoliciesPayloadResolvers<ContextType>;
  updatePolicySetsPayload?: UpdatePolicySetsPayloadResolvers<ContextType>;
  updateProductsPayload?: UpdateProductsPayloadResolvers<ContextType>;
  updateRolesPayload?: UpdateRolesPayloadResolvers<ContextType>;
  updateRulesPayload?: UpdateRulesPayloadResolvers<ContextType>;
  updateServiceTeamsPayload?: UpdateServiceTeamsPayloadResolvers<ContextType>;
  updateSolutionsPayload?: UpdateSolutionsPayloadResolvers<ContextType>;
  updateTaxesPayload?: UpdateTaxesPayloadResolvers<ContextType>;
  updateTaxTypesPayload?: UpdateTaxTypesPayloadResolvers<ContextType>;
  updateTimezonesPayload?: UpdateTimezonesPayloadResolvers<ContextType>;
  updateUsersPayload?: UpdateUsersPayloadResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  uploadFilePayload?: UploadFilePayloadResolvers<ContextType>;
  userScopeType?: UserScopeTypeResolvers<ContextType>;
  UserType?: UserTypeResolvers<ContextType>;
  XingularCustomerType?: XingularCustomerTypeResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = RestoreCommerceBaseContext> = Resolvers<ContextType>;
