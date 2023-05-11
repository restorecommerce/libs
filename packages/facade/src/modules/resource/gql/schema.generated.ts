import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { ResourceContext } from '../interfaces';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  GoogleProtobufAnyValue: any;
};

export type Query = {
  __typename?: 'Query';
  resource: ResourceQuery;
};

export type ResourceQuery = {
  __typename?: 'ResourceQuery';
  AddressService: ResourceAddressServiceQuery;
  CountryService: ResourceCountryServiceQuery;
  TimezoneService: ResourceTimezoneServiceQuery;
  ContactPointTypeService: ResourceContactPointTypeServiceQuery;
  CustomerService: ResourceCustomerServiceQuery;
  ContactPointService: ResourceContactPointServiceQuery;
  LocaleService: ResourceLocaleServiceQuery;
  LocationService: ResourceLocationServiceQuery;
  OrganizationService: ResourceOrganizationServiceQuery;
  TaxTypeService: ResourceTaxTypeServiceQuery;
  TaxService: ResourceTaxServiceQuery;
  CommandService: ResourceCommandServiceQuery;
};

export type ResourceAddressServiceQuery = {
  __typename?: 'ResourceAddressServiceQuery';
  Read?: Maybe<ProtoIoRestorecommerceAddressAddressListResponse>;
};


export type ResourceAddressServiceQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceAddressAddressListResponse = {
  __typename?: 'ProtoIoRestorecommerceAddressAddressListResponse';
  details?: Maybe<IoRestorecommerceAddressAddressListResponse>;
};

export type IoRestorecommerceAddressAddressListResponse = {
  __typename?: 'IoRestorecommerceAddressAddressListResponse';
  items?: Maybe<Array<IoRestorecommerceAddressAddressResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceAddressAddressResponse = {
  __typename?: 'IoRestorecommerceAddressAddressResponse';
  payload?: Maybe<IoRestorecommerceAddressAddress>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceAddressAddress = {
  __typename?: 'IoRestorecommerceAddressAddress';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  postcode?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['String']>;
  country?: Maybe<IoRestorecommerceCountryCountry>;
  locality?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  geoCoordinates?: Maybe<IoRestorecommerceAddressGeoPoint>;
  altitude?: Maybe<Scalars['Float']>;
  buildingNumber?: Maybe<Scalars['String']>;
  addressAddition?: Maybe<IoRestorecommerceAddressAddressAddition>;
  businessAddress?: Maybe<IoRestorecommerceAddressBusinessAddress>;
  residentialAddress?: Maybe<IoRestorecommerceAddressResidentialAddress>;
  packStation?: Maybe<IoRestorecommerceAddressPackStation>;
};

export type IoRestorecommerceMetaMeta = {
  __typename?: 'IoRestorecommerceMetaMeta';
  created?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['Float']>;
  modifiedBy?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  acl?: Maybe<Array<IoRestorecommerceAttributeAttributeObj>>;
};

export type IoRestorecommerceAttributeAttribute = {
  __typename?: 'IoRestorecommerceAttributeAttribute';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  attribute?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
};

export type IoRestorecommerceAttributeAttributeObj = {
  __typename?: 'IoRestorecommerceAttributeAttributeObj';
  attribute?: Maybe<IoRestorecommerceAttributeAttribute>;
};

export type IoRestorecommerceCountryCountry = {
  __typename?: 'IoRestorecommerceCountryCountry';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  geographicalName?: Maybe<Scalars['String']>;
  economicAreas?: Maybe<Array<Scalars['String']>>;
};

export type IoRestorecommerceAddressGeoPoint = {
  __typename?: 'IoRestorecommerceAddressGeoPoint';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type IoRestorecommerceAddressAddressAddition = {
  __typename?: 'IoRestorecommerceAddressAddressAddition';
  field1?: Maybe<Scalars['String']>;
  field2?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceAddressBusinessAddress = {
  __typename?: 'IoRestorecommerceAddressBusinessAddress';
  name?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceAddressResidentialAddress = {
  __typename?: 'IoRestorecommerceAddressResidentialAddress';
  title?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  midName?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceAddressPackStation = {
  __typename?: 'IoRestorecommerceAddressPackStation';
  provider?: Maybe<Scalars['String']>;
  stationNumber?: Maybe<Scalars['String']>;
  postNumber?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceStatusStatus = {
  __typename?: 'IoRestorecommerceStatusStatus';
  id?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceStatusOperationStatus = {
  __typename?: 'IoRestorecommerceStatusOperationStatus';
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceResourcebaseReadRequest = {
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<IIoRestorecommerceResourcebaseSort>>;
  filters?: InputMaybe<Array<IIoRestorecommerceResourcebaseFilterOp>>;
  field?: InputMaybe<Array<IIoRestorecommerceResourcebaseFieldFilter>>;
  localesLimiter?: InputMaybe<Array<Scalars['String']>>;
  customQueries?: InputMaybe<Array<Scalars['String']>>;
  customArguments?: InputMaybe<IGoogleProtobufAny>;
  search?: InputMaybe<IIoRestorecommerceResourcebaseSearch>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceResourcebaseSort = {
  field?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<IoRestorecommerceResourcebaseSortSortOrder>;
};

export enum IoRestorecommerceResourcebaseSortSortOrder {
  Unsorted = 0,
  Ascending = 1,
  Descending = 2
}

export type IIoRestorecommerceResourcebaseFilterOp = {
  filter?: InputMaybe<Array<IIoRestorecommerceResourcebaseFilter>>;
  operator?: InputMaybe<IoRestorecommerceResourcebaseFilterOpOperator>;
};

export type IIoRestorecommerceResourcebaseFilter = {
  field?: InputMaybe<Scalars['String']>;
  operation?: InputMaybe<IoRestorecommerceResourcebaseFilterOperation>;
  value?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<IoRestorecommerceResourcebaseFilterValueType>;
  filters?: InputMaybe<Array<IIoRestorecommerceFilterFilterOp>>;
};

export enum IoRestorecommerceResourcebaseFilterOperation {
  Eq = 0,
  Lt = 1,
  Lte = 2,
  Gt = 3,
  Gte = 4,
  IsEmpty = 5,
  ILike = 6,
  In = 7,
  Neq = 8
}

export enum IoRestorecommerceResourcebaseFilterValueType {
  String = 0,
  Number = 1,
  Boolean = 2,
  Date = 3,
  Array = 4
}

export type IIoRestorecommerceFilterFilterOp = {
  filter?: InputMaybe<Array<IIoRestorecommerceFilterFilter>>;
  operator?: InputMaybe<IoRestorecommerceFilterFilterOpOperator>;
};

export type IIoRestorecommerceFilterFilter = {
  field?: InputMaybe<Scalars['String']>;
  operation?: InputMaybe<IoRestorecommerceFilterFilterOperation>;
  value?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<IoRestorecommerceFilterFilterValueType>;
  filters?: InputMaybe<Array<IIoRestorecommerceFilterFilterOp>>;
};

export enum IoRestorecommerceFilterFilterOperation {
  Eq = 0,
  Lt = 1,
  Lte = 2,
  Gt = 3,
  Gte = 4,
  IsEmpty = 5,
  ILike = 6,
  In = 7,
  Neq = 8
}

export enum IoRestorecommerceFilterFilterValueType {
  String = 0,
  Number = 1,
  Boolean = 2,
  Date = 3,
  Array = 4
}

export enum IoRestorecommerceFilterFilterOpOperator {
  And = 0,
  Or = 1
}

export enum IoRestorecommerceResourcebaseFilterOpOperator {
  And = 0,
  Or = 1
}

export type IIoRestorecommerceResourcebaseFieldFilter = {
  name?: InputMaybe<Scalars['String']>;
  include?: InputMaybe<Scalars['Boolean']>;
};

export type IGoogleProtobufAny = {
  typeUrl?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['GoogleProtobufAnyValue']>;
};

export type IIoRestorecommerceResourcebaseSearch = {
  search?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<Array<Scalars['String']>>;
  caseSensitive?: InputMaybe<Scalars['Boolean']>;
};

export type ResourceCountryServiceQuery = {
  __typename?: 'ResourceCountryServiceQuery';
  Read?: Maybe<ProtoIoRestorecommerceCountryCountryListResponse>;
};


export type ResourceCountryServiceQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceCountryCountryListResponse = {
  __typename?: 'ProtoIoRestorecommerceCountryCountryListResponse';
  details?: Maybe<IoRestorecommerceCountryCountryListResponse>;
};

export type IoRestorecommerceCountryCountryListResponse = {
  __typename?: 'IoRestorecommerceCountryCountryListResponse';
  items?: Maybe<Array<IoRestorecommerceCountryCountryResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceCountryCountryResponse = {
  __typename?: 'IoRestorecommerceCountryCountryResponse';
  payload?: Maybe<IoRestorecommerceCountryCountry>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type ResourceTimezoneServiceQuery = {
  __typename?: 'ResourceTimezoneServiceQuery';
  Read?: Maybe<ProtoIoRestorecommerceTimezoneTimezoneListResponse>;
};


export type ResourceTimezoneServiceQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceTimezoneTimezoneListResponse = {
  __typename?: 'ProtoIoRestorecommerceTimezoneTimezoneListResponse';
  details?: Maybe<IoRestorecommerceTimezoneTimezoneListResponse>;
};

export type IoRestorecommerceTimezoneTimezoneListResponse = {
  __typename?: 'IoRestorecommerceTimezoneTimezoneListResponse';
  items?: Maybe<Array<IoRestorecommerceTimezoneTimezoneResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceTimezoneTimezoneResponse = {
  __typename?: 'IoRestorecommerceTimezoneTimezoneResponse';
  payload?: Maybe<IoRestorecommerceTimezoneTimezone>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceTimezoneTimezone = {
  __typename?: 'IoRestorecommerceTimezoneTimezone';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  description?: Maybe<Scalars['String']>;
};

export type ResourceContactPointTypeServiceQuery = {
  __typename?: 'ResourceContactPointTypeServiceQuery';
  Read?: Maybe<ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse>;
};


export type ResourceContactPointTypeServiceQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse = {
  __typename?: 'ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse';
  details?: Maybe<IoRestorecommerceContactPointTypeContactPointTypeListResponse>;
};

export type IoRestorecommerceContactPointTypeContactPointTypeListResponse = {
  __typename?: 'IoRestorecommerceContactPointTypeContactPointTypeListResponse';
  items?: Maybe<Array<IoRestorecommerceContactPointTypeContactPointTypeResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceContactPointTypeContactPointTypeResponse = {
  __typename?: 'IoRestorecommerceContactPointTypeContactPointTypeResponse';
  payload?: Maybe<IoRestorecommerceContactPointTypeContactPointType>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceContactPointTypeContactPointType = {
  __typename?: 'IoRestorecommerceContactPointTypeContactPointType';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  type?: Maybe<Scalars['String']>;
};

export type ResourceCustomerServiceQuery = {
  __typename?: 'ResourceCustomerServiceQuery';
  Read?: Maybe<ProtoIoRestorecommerceCustomerCustomerListResponse>;
};


export type ResourceCustomerServiceQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceCustomerCustomerListResponse = {
  __typename?: 'ProtoIoRestorecommerceCustomerCustomerListResponse';
  details?: Maybe<IoRestorecommerceCustomerCustomerListResponse>;
};

export type IoRestorecommerceCustomerCustomerListResponse = {
  __typename?: 'IoRestorecommerceCustomerCustomerListResponse';
  items?: Maybe<Array<IoRestorecommerceCustomerCustomerResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceCustomerCustomerResponse = {
  __typename?: 'IoRestorecommerceCustomerCustomerResponse';
  payload?: Maybe<IoRestorecommerceCustomerCustomer>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceCustomerCustomer = {
  __typename?: 'IoRestorecommerceCustomerCustomer';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  individualUser?: Maybe<IoRestorecommerceCustomerIndividualUser>;
  orgUser?: Maybe<IoRestorecommerceCustomerOrgUser>;
  guest?: Maybe<IoRestorecommerceCustomerGuest>;
};

export type IoRestorecommerceCustomerIndividualUser = {
  __typename?: 'IoRestorecommerceCustomerIndividualUser';
  userId?: Maybe<Scalars['String']>;
  user?: Maybe<IoRestorecommerceUserUser>;
  addressId?: Maybe<Scalars['String']>;
  address?: Maybe<IoRestorecommerceAddressAddress>;
  contactPointIds?: Maybe<Array<Scalars['String']>>;
  contactPoints?: Maybe<Array<IoRestorecommerceContactPointContactPoint>>;
};

export type IoRestorecommerceUserUser = {
  __typename?: 'IoRestorecommerceUserUser';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activationCode?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  roleAssociations?: Maybe<Array<IoRestorecommerceAuthRoleAssociation>>;
  timezoneId?: Maybe<Scalars['String']>;
  timezone?: Maybe<IoRestorecommerceTimezoneTimezone>;
  localeId?: Maybe<Scalars['String']>;
  locale?: Maybe<IoRestorecommerceLocaleLocale>;
  defaultScope?: Maybe<Scalars['String']>;
  unauthenticated?: Maybe<Scalars['Boolean']>;
  guest?: Maybe<Scalars['Boolean']>;
  image?: Maybe<IoRestorecommerceImageImage>;
  userType?: Maybe<IoRestorecommerceUserUserType>;
  invite?: Maybe<Scalars['Boolean']>;
  invitedByUserName?: Maybe<Scalars['String']>;
  invitedByUserFirstName?: Maybe<Scalars['String']>;
  invitedByUserLastName?: Maybe<Scalars['String']>;
  tokens?: Maybe<Array<IoRestorecommerceAuthTokens>>;
  lastAccess?: Maybe<Scalars['Float']>;
  data?: Maybe<GoogleProtobufAny>;
};

export type IoRestorecommerceAuthRoleAssociation = {
  __typename?: 'IoRestorecommerceAuthRoleAssociation';
  role?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  id?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['Float']>;
};

export type IoRestorecommerceLocaleLocale = {
  __typename?: 'IoRestorecommerceLocaleLocale';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  value?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceImageImage = {
  __typename?: 'IoRestorecommerceImageImage';
  id?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  tags?: Maybe<Array<Scalars['String']>>;
  index?: Maybe<Scalars['Int']>;
};

export enum IoRestorecommerceUserUserType {
  OrgUser = 0,
  IndividualUser = 1,
  Guest = 2,
  TechnicalUser = 3
}

export type IoRestorecommerceAuthTokens = {
  __typename?: 'IoRestorecommerceAuthTokens';
  name?: Maybe<Scalars['String']>;
  expiresIn?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['String']>;
  scopes?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  interactive?: Maybe<Scalars['Boolean']>;
  lastLogin?: Maybe<Scalars['Float']>;
};

export type GoogleProtobufAny = {
  __typename?: 'GoogleProtobufAny';
  typeUrl?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['GoogleProtobufAnyValue']>;
};

export type IoRestorecommerceContactPointContactPoint = {
  __typename?: 'IoRestorecommerceContactPointContactPoint';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  physicalAddressId?: Maybe<Scalars['String']>;
  physicalAddress?: Maybe<IoRestorecommerceAddressAddress>;
  website?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  contactPointTypeId?: Maybe<Scalars['String']>;
  contactPointType?: Maybe<IoRestorecommerceContactPointTypeContactPointType>;
  telephone?: Maybe<Scalars['String']>;
  timezoneId?: Maybe<Scalars['String']>;
  timezone?: Maybe<IoRestorecommerceTimezoneTimezone>;
  localeId?: Maybe<Scalars['String']>;
  locale?: Maybe<IoRestorecommerceLocaleLocale>;
};

export type IoRestorecommerceCustomerOrgUser = {
  __typename?: 'IoRestorecommerceCustomerOrgUser';
  userId?: Maybe<Scalars['String']>;
  user?: Maybe<IoRestorecommerceUserUser>;
  organizationId?: Maybe<Scalars['String']>;
  organization?: Maybe<IoRestorecommerceOrganizationOrganization>;
};

export type IoRestorecommerceOrganizationOrganization = {
  __typename?: 'IoRestorecommerceOrganizationOrganization';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  addressId?: Maybe<Scalars['String']>;
  address?: Maybe<IoRestorecommerceAddressAddress>;
  parentId?: Maybe<Scalars['String']>;
  parent?: Maybe<IoRestorecommerceOrganizationOrganization>;
  contactPointIds?: Maybe<Array<Scalars['String']>>;
  contactPoints?: Maybe<Array<IoRestorecommerceContactPointContactPoint>>;
  website?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  vatId?: Maybe<Scalars['String']>;
  isicV4?: Maybe<Scalars['String']>;
  registration?: Maybe<Scalars['String']>;
  registrationCourt?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  paymentMethodIds?: Maybe<Array<Scalars['String']>>;
  data?: Maybe<GoogleProtobufAny>;
};

export type IoRestorecommerceCustomerGuest = {
  __typename?: 'IoRestorecommerceCustomerGuest';
  guest?: Maybe<Scalars['Boolean']>;
  addressId?: Maybe<Scalars['String']>;
  address?: Maybe<IoRestorecommerceAddressAddress>;
  contactPointIds?: Maybe<Array<Scalars['String']>>;
  contactPoints?: Maybe<Array<IoRestorecommerceContactPointContactPoint>>;
};

export type ResourceContactPointServiceQuery = {
  __typename?: 'ResourceContactPointServiceQuery';
  Read?: Maybe<ProtoIoRestorecommerceContactPointContactPointListResponse>;
};


export type ResourceContactPointServiceQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceContactPointContactPointListResponse = {
  __typename?: 'ProtoIoRestorecommerceContactPointContactPointListResponse';
  details?: Maybe<IoRestorecommerceContactPointContactPointListResponse>;
};

export type IoRestorecommerceContactPointContactPointListResponse = {
  __typename?: 'IoRestorecommerceContactPointContactPointListResponse';
  items?: Maybe<Array<IoRestorecommerceContactPointContactPointResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceContactPointContactPointResponse = {
  __typename?: 'IoRestorecommerceContactPointContactPointResponse';
  payload?: Maybe<IoRestorecommerceContactPointContactPoint>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type ResourceLocaleServiceQuery = {
  __typename?: 'ResourceLocaleServiceQuery';
  Read?: Maybe<ProtoIoRestorecommerceLocaleLocaleListResponse>;
};


export type ResourceLocaleServiceQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceLocaleLocaleListResponse = {
  __typename?: 'ProtoIoRestorecommerceLocaleLocaleListResponse';
  details?: Maybe<IoRestorecommerceLocaleLocaleListResponse>;
};

export type IoRestorecommerceLocaleLocaleListResponse = {
  __typename?: 'IoRestorecommerceLocaleLocaleListResponse';
  items?: Maybe<Array<IoRestorecommerceLocaleLocaleResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceLocaleLocaleResponse = {
  __typename?: 'IoRestorecommerceLocaleLocaleResponse';
  payload?: Maybe<IoRestorecommerceLocaleLocale>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type ResourceLocationServiceQuery = {
  __typename?: 'ResourceLocationServiceQuery';
  Read?: Maybe<ProtoIoRestorecommerceLocationLocationListResponse>;
};


export type ResourceLocationServiceQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceLocationLocationListResponse = {
  __typename?: 'ProtoIoRestorecommerceLocationLocationListResponse';
  details?: Maybe<IoRestorecommerceLocationLocationListResponse>;
};

export type IoRestorecommerceLocationLocationListResponse = {
  __typename?: 'IoRestorecommerceLocationLocationListResponse';
  items?: Maybe<Array<IoRestorecommerceLocationLocationResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceLocationLocationResponse = {
  __typename?: 'IoRestorecommerceLocationLocationResponse';
  payload?: Maybe<IoRestorecommerceLocationLocation>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceLocationLocation = {
  __typename?: 'IoRestorecommerceLocationLocation';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['String']>;
  organization?: Maybe<IoRestorecommerceOrganizationOrganization>;
  parentId?: Maybe<Scalars['String']>;
  parent?: Maybe<IoRestorecommerceLocationLocation>;
  addressId?: Maybe<Scalars['String']>;
  address?: Maybe<IoRestorecommerceAddressAddress>;
  data?: Maybe<GoogleProtobufAny>;
  type?: Maybe<Scalars['String']>;
};

export type ResourceOrganizationServiceQuery = {
  __typename?: 'ResourceOrganizationServiceQuery';
  Read?: Maybe<ProtoIoRestorecommerceOrganizationOrganizationListResponse>;
};


export type ResourceOrganizationServiceQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceOrganizationOrganizationListResponse = {
  __typename?: 'ProtoIoRestorecommerceOrganizationOrganizationListResponse';
  details?: Maybe<IoRestorecommerceOrganizationOrganizationListResponse>;
};

export type IoRestorecommerceOrganizationOrganizationListResponse = {
  __typename?: 'IoRestorecommerceOrganizationOrganizationListResponse';
  items?: Maybe<Array<IoRestorecommerceOrganizationOrganizationResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceOrganizationOrganizationResponse = {
  __typename?: 'IoRestorecommerceOrganizationOrganizationResponse';
  payload?: Maybe<IoRestorecommerceOrganizationOrganization>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type ResourceTaxTypeServiceQuery = {
  __typename?: 'ResourceTaxTypeServiceQuery';
  Read?: Maybe<ProtoIoRestorecommerceTaxTypeTaxTypeListResponse>;
};


export type ResourceTaxTypeServiceQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceTaxTypeTaxTypeListResponse = {
  __typename?: 'ProtoIoRestorecommerceTaxTypeTaxTypeListResponse';
  details?: Maybe<IoRestorecommerceTaxTypeTaxTypeListResponse>;
};

export type IoRestorecommerceTaxTypeTaxTypeListResponse = {
  __typename?: 'IoRestorecommerceTaxTypeTaxTypeListResponse';
  items?: Maybe<Array<IoRestorecommerceTaxTypeTaxTypeResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceTaxTypeTaxTypeResponse = {
  __typename?: 'IoRestorecommerceTaxTypeTaxTypeResponse';
  payload?: Maybe<IoRestorecommerceTaxTypeTaxType>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceTaxTypeTaxType = {
  __typename?: 'IoRestorecommerceTaxTypeTaxType';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  behavior?: Maybe<IoRestorecommerceTaxTypeBehavior>;
};

export enum IoRestorecommerceTaxTypeBehavior {
  None = 0,
  AdditiveOnGross = 1
}

export type ResourceTaxServiceQuery = {
  __typename?: 'ResourceTaxServiceQuery';
  Read?: Maybe<ProtoIoRestorecommerceTaxTaxListResponse>;
};


export type ResourceTaxServiceQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceTaxTaxListResponse = {
  __typename?: 'ProtoIoRestorecommerceTaxTaxListResponse';
  details?: Maybe<IoRestorecommerceTaxTaxListResponse>;
};

export type IoRestorecommerceTaxTaxListResponse = {
  __typename?: 'IoRestorecommerceTaxTaxListResponse';
  items?: Maybe<Array<IoRestorecommerceTaxTaxResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceTaxTaxResponse = {
  __typename?: 'IoRestorecommerceTaxTaxResponse';
  payload?: Maybe<IoRestorecommerceTaxTax>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceTaxTax = {
  __typename?: 'IoRestorecommerceTaxTax';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  countryId?: Maybe<Scalars['String']>;
  country?: Maybe<IoRestorecommerceCountryCountry>;
  rate?: Maybe<Scalars['Float']>;
  variant?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
  type?: Maybe<IoRestorecommerceTaxTypeTaxType>;
};

export type ResourceCommandServiceQuery = {
  __typename?: 'ResourceCommandServiceQuery';
  Read?: Maybe<ProtoIoRestorecommerceCommandCommandListResponse>;
};


export type ResourceCommandServiceQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceCommandCommandListResponse = {
  __typename?: 'ProtoIoRestorecommerceCommandCommandListResponse';
  details?: Maybe<IoRestorecommerceCommandCommandListResponse>;
};

export type IoRestorecommerceCommandCommandListResponse = {
  __typename?: 'IoRestorecommerceCommandCommandListResponse';
  items?: Maybe<Array<IoRestorecommerceCommandCommandResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceCommandCommandResponse = {
  __typename?: 'IoRestorecommerceCommandCommandResponse';
  payload?: Maybe<IoRestorecommerceCommandCommand>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceCommandCommand = {
  __typename?: 'IoRestorecommerceCommandCommand';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  parameters?: Maybe<Array<IoRestorecommerceCommandCommandParameter>>;
  description?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceCommandCommandParameter = {
  __typename?: 'IoRestorecommerceCommandCommandParameter';
  field?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<IoRestorecommerceCommandCommandParameterParameterType>;
  properties?: Maybe<Scalars['String']>;
};

export enum IoRestorecommerceCommandCommandParameterParameterType {
  BooleanValue = 0,
  ObjectValue = 1,
  ArrayValue = 2,
  NumberValue = 3,
  StringValue = 4
}

export type Mutation = {
  __typename?: 'Mutation';
  resource: ResourceMutation;
};

export type ResourceMutation = {
  __typename?: 'ResourceMutation';
  AddressService: ResourceAddressServiceMutation;
  CountryService: ResourceCountryServiceMutation;
  TimezoneService: ResourceTimezoneServiceMutation;
  ContactPointTypeService: ResourceContactPointTypeServiceMutation;
  CustomerService: ResourceCustomerServiceMutation;
  ContactPointService: ResourceContactPointServiceMutation;
  LocaleService: ResourceLocaleServiceMutation;
  LocationService: ResourceLocationServiceMutation;
  OrganizationService: ResourceOrganizationServiceMutation;
  TaxTypeService: ResourceTaxTypeServiceMutation;
  TaxService: ResourceTaxServiceMutation;
  CommandService: ResourceCommandServiceMutation;
};

export type ResourceAddressServiceMutation = {
  __typename?: 'ResourceAddressServiceMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceAddressAddressListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type ResourceAddressServiceMutationMutateArgs = {
  input: IIoRestorecommerceAddressAddressList;
};


export type ResourceAddressServiceMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceAddressAddressList = {
  items?: InputMaybe<Array<IIoRestorecommerceAddressAddress>>;
  totalCount?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceAddressAddress = {
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  postcode?: InputMaybe<Scalars['String']>;
  countryId?: InputMaybe<Scalars['String']>;
  locality?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  geoCoordinates?: InputMaybe<IIoRestorecommerceAddressGeoPoint>;
  altitude?: InputMaybe<Scalars['Float']>;
  buildingNumber?: InputMaybe<Scalars['String']>;
  addressAddition?: InputMaybe<IIoRestorecommerceAddressAddressAddition>;
  businessAddress?: InputMaybe<IIoRestorecommerceAddressBusinessAddress>;
  residentialAddress?: InputMaybe<IIoRestorecommerceAddressResidentialAddress>;
  packStation?: InputMaybe<IIoRestorecommerceAddressPackStation>;
};

export type IIoRestorecommerceMetaMeta = {
  created?: InputMaybe<Scalars['Float']>;
  modified?: InputMaybe<Scalars['Float']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  acl?: InputMaybe<Array<IIoRestorecommerceAttributeAttributeObj>>;
};

export type IIoRestorecommerceAttributeAttribute = {
  id?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  attribute?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type IIoRestorecommerceAttributeAttributeObj = {
  attribute?: InputMaybe<IIoRestorecommerceAttributeAttribute>;
};

export type IIoRestorecommerceAddressGeoPoint = {
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
};

export type IIoRestorecommerceAddressAddressAddition = {
  field1?: InputMaybe<Scalars['String']>;
  field2?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceAddressBusinessAddress = {
  name?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceAddressResidentialAddress = {
  title?: InputMaybe<Scalars['String']>;
  givenName?: InputMaybe<Scalars['String']>;
  midName?: InputMaybe<Scalars['String']>;
  familyName?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceAddressPackStation = {
  provider?: InputMaybe<Scalars['String']>;
  stationNumber?: InputMaybe<Scalars['String']>;
  postNumber?: InputMaybe<Scalars['String']>;
};

export enum ModeType {
  Create = 'CREATE',
  Update = 'UPDATE',
  Upsert = 'UPSERT'
}

export type ProtoIoRestorecommerceResourcebaseDeleteResponse = {
  __typename?: 'ProtoIoRestorecommerceResourcebaseDeleteResponse';
  details?: Maybe<IoRestorecommerceResourcebaseDeleteResponse>;
};

export type IoRestorecommerceResourcebaseDeleteResponse = {
  __typename?: 'IoRestorecommerceResourcebaseDeleteResponse';
  status?: Maybe<Array<IoRestorecommerceStatusStatus>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IIoRestorecommerceResourcebaseDeleteRequest = {
  collection?: InputMaybe<Scalars['Boolean']>;
  ids?: InputMaybe<Array<Scalars['String']>>;
  view?: InputMaybe<Array<Scalars['String']>>;
  analyzer?: InputMaybe<Array<Scalars['String']>>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type ResourceCountryServiceMutation = {
  __typename?: 'ResourceCountryServiceMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceCountryCountryListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type ResourceCountryServiceMutationMutateArgs = {
  input: IIoRestorecommerceCountryCountryList;
};


export type ResourceCountryServiceMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceCountryCountryList = {
  items?: InputMaybe<Array<IIoRestorecommerceCountryCountry>>;
  totalCount?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceCountryCountry = {
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  geographicalName?: InputMaybe<Scalars['String']>;
  economicAreas?: InputMaybe<Array<Scalars['String']>>;
};

export type ResourceTimezoneServiceMutation = {
  __typename?: 'ResourceTimezoneServiceMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceTimezoneTimezoneListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type ResourceTimezoneServiceMutationMutateArgs = {
  input: IIoRestorecommerceTimezoneTimezoneList;
};


export type ResourceTimezoneServiceMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceTimezoneTimezoneList = {
  items?: InputMaybe<Array<IIoRestorecommerceTimezoneTimezone>>;
  totalCount?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceTimezoneTimezone = {
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  description?: InputMaybe<Scalars['String']>;
};

export type ResourceContactPointTypeServiceMutation = {
  __typename?: 'ResourceContactPointTypeServiceMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type ResourceContactPointTypeServiceMutationMutateArgs = {
  input: IIoRestorecommerceContactPointTypeContactPointTypeList;
};


export type ResourceContactPointTypeServiceMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceContactPointTypeContactPointTypeList = {
  items?: InputMaybe<Array<IIoRestorecommerceContactPointTypeContactPointType>>;
  totalCount?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceContactPointTypeContactPointType = {
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  type?: InputMaybe<Scalars['String']>;
};

export type ResourceCustomerServiceMutation = {
  __typename?: 'ResourceCustomerServiceMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceCustomerCustomerListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type ResourceCustomerServiceMutationMutateArgs = {
  input: IIoRestorecommerceCustomerCustomerList;
};


export type ResourceCustomerServiceMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceCustomerCustomerList = {
  items?: InputMaybe<Array<IIoRestorecommerceCustomerCustomer>>;
  totalCount?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceCustomerCustomer = {
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  individualUser?: InputMaybe<IIoRestorecommerceCustomerIndividualUser>;
  orgUser?: InputMaybe<IIoRestorecommerceCustomerOrgUser>;
  guest?: InputMaybe<IIoRestorecommerceCustomerGuest>;
};

export type IIoRestorecommerceCustomerIndividualUser = {
  userId?: InputMaybe<Scalars['String']>;
  addressId?: InputMaybe<Scalars['String']>;
  contactPointIds?: InputMaybe<Array<Scalars['String']>>;
};

export type IIoRestorecommerceCustomerOrgUser = {
  userId?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceCustomerGuest = {
  guest?: InputMaybe<Scalars['Boolean']>;
  addressId?: InputMaybe<Scalars['String']>;
  contactPointIds?: InputMaybe<Array<Scalars['String']>>;
};

export type ResourceContactPointServiceMutation = {
  __typename?: 'ResourceContactPointServiceMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceContactPointContactPointListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type ResourceContactPointServiceMutationMutateArgs = {
  input: IIoRestorecommerceContactPointContactPointList;
};


export type ResourceContactPointServiceMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceContactPointContactPointList = {
  items?: InputMaybe<Array<IIoRestorecommerceContactPointContactPoint>>;
  totalCount?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceContactPointContactPoint = {
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  physicalAddressId?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  contactPointTypeId?: InputMaybe<Scalars['String']>;
  telephone?: InputMaybe<Scalars['String']>;
  timezoneId?: InputMaybe<Scalars['String']>;
  localeId?: InputMaybe<Scalars['String']>;
};

export type ResourceLocaleServiceMutation = {
  __typename?: 'ResourceLocaleServiceMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceLocaleLocaleListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type ResourceLocaleServiceMutationMutateArgs = {
  input: IIoRestorecommerceLocaleLocaleList;
};


export type ResourceLocaleServiceMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceLocaleLocaleList = {
  items?: InputMaybe<Array<IIoRestorecommerceLocaleLocale>>;
  totalCount?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceLocaleLocale = {
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  value?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
};

export type ResourceLocationServiceMutation = {
  __typename?: 'ResourceLocationServiceMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceLocationLocationListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type ResourceLocationServiceMutationMutateArgs = {
  input: IIoRestorecommerceLocationLocationList;
};


export type ResourceLocationServiceMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceLocationLocationList = {
  items?: InputMaybe<Array<IIoRestorecommerceLocationLocation>>;
  totalCount?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceLocationLocation = {
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['String']>;
  addressId?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<IGoogleProtobufAny>;
  type?: InputMaybe<Scalars['String']>;
};

export type ResourceOrganizationServiceMutation = {
  __typename?: 'ResourceOrganizationServiceMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceOrganizationOrganizationListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type ResourceOrganizationServiceMutationMutateArgs = {
  input: IIoRestorecommerceOrganizationOrganizationList;
};


export type ResourceOrganizationServiceMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceOrganizationOrganizationList = {
  items?: InputMaybe<Array<IIoRestorecommerceOrganizationOrganization>>;
  totalCount?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceOrganizationOrganization = {
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  addressId?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['String']>;
  contactPointIds?: InputMaybe<Array<Scalars['String']>>;
  website?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  vatId?: InputMaybe<Scalars['String']>;
  isicV4?: InputMaybe<Scalars['String']>;
  registration?: InputMaybe<Scalars['String']>;
  registrationCourt?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  paymentMethodIds?: InputMaybe<Array<Scalars['String']>>;
  data?: InputMaybe<IGoogleProtobufAny>;
};

export type ResourceTaxTypeServiceMutation = {
  __typename?: 'ResourceTaxTypeServiceMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceTaxTypeTaxTypeListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type ResourceTaxTypeServiceMutationMutateArgs = {
  input: IIoRestorecommerceTaxTypeTaxTypeList;
};


export type ResourceTaxTypeServiceMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceTaxTypeTaxTypeList = {
  items?: InputMaybe<Array<IIoRestorecommerceTaxTypeTaxType>>;
  totalCount?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceTaxTypeTaxType = {
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  type?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  behavior?: InputMaybe<IoRestorecommerceTaxTypeBehavior>;
};

export type ResourceTaxServiceMutation = {
  __typename?: 'ResourceTaxServiceMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceTaxTaxListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type ResourceTaxServiceMutationMutateArgs = {
  input: IIoRestorecommerceTaxTaxList;
};


export type ResourceTaxServiceMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceTaxTaxList = {
  items?: InputMaybe<Array<IIoRestorecommerceTaxTax>>;
  totalCount?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceTaxTax = {
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  countryId?: InputMaybe<Scalars['String']>;
  rate?: InputMaybe<Scalars['Float']>;
  variant?: InputMaybe<Scalars['String']>;
  typeId?: InputMaybe<Scalars['String']>;
};

export type ResourceCommandServiceMutation = {
  __typename?: 'ResourceCommandServiceMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceCommandCommandListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type ResourceCommandServiceMutationMutateArgs = {
  input: IIoRestorecommerceCommandCommandList;
};


export type ResourceCommandServiceMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceCommandCommandList = {
  items?: InputMaybe<Array<IIoRestorecommerceCommandCommand>>;
  totalCount?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceCommandCommand = {
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  parameters?: InputMaybe<Array<IIoRestorecommerceCommandCommandParameter>>;
  description?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceCommandCommandParameter = {
  field?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<IoRestorecommerceCommandCommandParameterParameterType>;
  properties?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  orderingOrders?: Maybe<SubscriptionOutput>;
};


export type SubscriptionOrderingOrdersArgs = {
  action?: InputMaybe<SubscriptionAction>;
};

export type SubscriptionOutput = {
  __typename?: 'SubscriptionOutput';
  id?: Maybe<Scalars['String']>;
};

export enum SubscriptionAction {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

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
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  ResourceQuery: ResolverTypeWrapper<ResourceQuery>;
  ResourceAddressServiceQuery: ResolverTypeWrapper<ResourceAddressServiceQuery>;
  ProtoIoRestorecommerceAddressAddressListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceAddressAddressListResponse>;
  IoRestorecommerceAddressAddressListResponse: ResolverTypeWrapper<IoRestorecommerceAddressAddressListResponse>;
  IoRestorecommerceAddressAddressResponse: ResolverTypeWrapper<IoRestorecommerceAddressAddressResponse>;
  IoRestorecommerceAddressAddress: ResolverTypeWrapper<IoRestorecommerceAddressAddress>;
  String: ResolverTypeWrapper<Scalars['String']>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  IoRestorecommerceAttributeAttributeObj: ResolverTypeWrapper<IoRestorecommerceAttributeAttributeObj>;
  IoRestorecommerceCountryCountry: ResolverTypeWrapper<IoRestorecommerceCountryCountry>;
  IoRestorecommerceAddressGeoPoint: ResolverTypeWrapper<IoRestorecommerceAddressGeoPoint>;
  IoRestorecommerceAddressAddressAddition: ResolverTypeWrapper<IoRestorecommerceAddressAddressAddition>;
  IoRestorecommerceAddressBusinessAddress: ResolverTypeWrapper<IoRestorecommerceAddressBusinessAddress>;
  IoRestorecommerceAddressResidentialAddress: ResolverTypeWrapper<IoRestorecommerceAddressResidentialAddress>;
  IoRestorecommerceAddressPackStation: ResolverTypeWrapper<IoRestorecommerceAddressPackStation>;
  IoRestorecommerceStatusStatus: ResolverTypeWrapper<IoRestorecommerceStatusStatus>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IoRestorecommerceStatusOperationStatus: ResolverTypeWrapper<IoRestorecommerceStatusOperationStatus>;
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IoRestorecommerceResourcebaseSortSortOrder: IoRestorecommerceResourcebaseSortSortOrder;
  IIoRestorecommerceResourcebaseFilterOp: IIoRestorecommerceResourcebaseFilterOp;
  IIoRestorecommerceResourcebaseFilter: IIoRestorecommerceResourcebaseFilter;
  IoRestorecommerceResourcebaseFilterOperation: IoRestorecommerceResourcebaseFilterOperation;
  IoRestorecommerceResourcebaseFilterValueType: IoRestorecommerceResourcebaseFilterValueType;
  IIoRestorecommerceFilterFilterOp: IIoRestorecommerceFilterFilterOp;
  IIoRestorecommerceFilterFilter: IIoRestorecommerceFilterFilter;
  IoRestorecommerceFilterFilterOperation: IoRestorecommerceFilterFilterOperation;
  IoRestorecommerceFilterFilterValueType: IoRestorecommerceFilterFilterValueType;
  IoRestorecommerceFilterFilterOpOperator: IoRestorecommerceFilterFilterOpOperator;
  IoRestorecommerceResourcebaseFilterOpOperator: IoRestorecommerceResourcebaseFilterOpOperator;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  IGoogleProtobufAny: IGoogleProtobufAny;
  GoogleProtobufAnyValue: ResolverTypeWrapper<Scalars['GoogleProtobufAnyValue']>;
  IIoRestorecommerceResourcebaseSearch: IIoRestorecommerceResourcebaseSearch;
  ResourceCountryServiceQuery: ResolverTypeWrapper<ResourceCountryServiceQuery>;
  ProtoIoRestorecommerceCountryCountryListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceCountryCountryListResponse>;
  IoRestorecommerceCountryCountryListResponse: ResolverTypeWrapper<IoRestorecommerceCountryCountryListResponse>;
  IoRestorecommerceCountryCountryResponse: ResolverTypeWrapper<IoRestorecommerceCountryCountryResponse>;
  ResourceTimezoneServiceQuery: ResolverTypeWrapper<ResourceTimezoneServiceQuery>;
  ProtoIoRestorecommerceTimezoneTimezoneListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceTimezoneTimezoneListResponse>;
  IoRestorecommerceTimezoneTimezoneListResponse: ResolverTypeWrapper<IoRestorecommerceTimezoneTimezoneListResponse>;
  IoRestorecommerceTimezoneTimezoneResponse: ResolverTypeWrapper<IoRestorecommerceTimezoneTimezoneResponse>;
  IoRestorecommerceTimezoneTimezone: ResolverTypeWrapper<IoRestorecommerceTimezoneTimezone>;
  ResourceContactPointTypeServiceQuery: ResolverTypeWrapper<ResourceContactPointTypeServiceQuery>;
  ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse>;
  IoRestorecommerceContactPointTypeContactPointTypeListResponse: ResolverTypeWrapper<IoRestorecommerceContactPointTypeContactPointTypeListResponse>;
  IoRestorecommerceContactPointTypeContactPointTypeResponse: ResolverTypeWrapper<IoRestorecommerceContactPointTypeContactPointTypeResponse>;
  IoRestorecommerceContactPointTypeContactPointType: ResolverTypeWrapper<IoRestorecommerceContactPointTypeContactPointType>;
  ResourceCustomerServiceQuery: ResolverTypeWrapper<ResourceCustomerServiceQuery>;
  ProtoIoRestorecommerceCustomerCustomerListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceCustomerCustomerListResponse>;
  IoRestorecommerceCustomerCustomerListResponse: ResolverTypeWrapper<IoRestorecommerceCustomerCustomerListResponse>;
  IoRestorecommerceCustomerCustomerResponse: ResolverTypeWrapper<IoRestorecommerceCustomerCustomerResponse>;
  IoRestorecommerceCustomerCustomer: ResolverTypeWrapper<IoRestorecommerceCustomerCustomer>;
  IoRestorecommerceCustomerIndividualUser: ResolverTypeWrapper<IoRestorecommerceCustomerIndividualUser>;
  IoRestorecommerceUserUser: ResolverTypeWrapper<IoRestorecommerceUserUser>;
  IoRestorecommerceAuthRoleAssociation: ResolverTypeWrapper<IoRestorecommerceAuthRoleAssociation>;
  IoRestorecommerceLocaleLocale: ResolverTypeWrapper<IoRestorecommerceLocaleLocale>;
  IoRestorecommerceImageImage: ResolverTypeWrapper<IoRestorecommerceImageImage>;
  IoRestorecommerceUserUserType: IoRestorecommerceUserUserType;
  IoRestorecommerceAuthTokens: ResolverTypeWrapper<IoRestorecommerceAuthTokens>;
  GoogleProtobufAny: ResolverTypeWrapper<GoogleProtobufAny>;
  IoRestorecommerceContactPointContactPoint: ResolverTypeWrapper<IoRestorecommerceContactPointContactPoint>;
  IoRestorecommerceCustomerOrgUser: ResolverTypeWrapper<IoRestorecommerceCustomerOrgUser>;
  IoRestorecommerceOrganizationOrganization: ResolverTypeWrapper<IoRestorecommerceOrganizationOrganization>;
  IoRestorecommerceCustomerGuest: ResolverTypeWrapper<IoRestorecommerceCustomerGuest>;
  ResourceContactPointServiceQuery: ResolverTypeWrapper<ResourceContactPointServiceQuery>;
  ProtoIoRestorecommerceContactPointContactPointListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceContactPointContactPointListResponse>;
  IoRestorecommerceContactPointContactPointListResponse: ResolverTypeWrapper<IoRestorecommerceContactPointContactPointListResponse>;
  IoRestorecommerceContactPointContactPointResponse: ResolverTypeWrapper<IoRestorecommerceContactPointContactPointResponse>;
  ResourceLocaleServiceQuery: ResolverTypeWrapper<ResourceLocaleServiceQuery>;
  ProtoIoRestorecommerceLocaleLocaleListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceLocaleLocaleListResponse>;
  IoRestorecommerceLocaleLocaleListResponse: ResolverTypeWrapper<IoRestorecommerceLocaleLocaleListResponse>;
  IoRestorecommerceLocaleLocaleResponse: ResolverTypeWrapper<IoRestorecommerceLocaleLocaleResponse>;
  ResourceLocationServiceQuery: ResolverTypeWrapper<ResourceLocationServiceQuery>;
  ProtoIoRestorecommerceLocationLocationListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceLocationLocationListResponse>;
  IoRestorecommerceLocationLocationListResponse: ResolverTypeWrapper<IoRestorecommerceLocationLocationListResponse>;
  IoRestorecommerceLocationLocationResponse: ResolverTypeWrapper<IoRestorecommerceLocationLocationResponse>;
  IoRestorecommerceLocationLocation: ResolverTypeWrapper<IoRestorecommerceLocationLocation>;
  ResourceOrganizationServiceQuery: ResolverTypeWrapper<ResourceOrganizationServiceQuery>;
  ProtoIoRestorecommerceOrganizationOrganizationListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceOrganizationOrganizationListResponse>;
  IoRestorecommerceOrganizationOrganizationListResponse: ResolverTypeWrapper<IoRestorecommerceOrganizationOrganizationListResponse>;
  IoRestorecommerceOrganizationOrganizationResponse: ResolverTypeWrapper<IoRestorecommerceOrganizationOrganizationResponse>;
  ResourceTaxTypeServiceQuery: ResolverTypeWrapper<ResourceTaxTypeServiceQuery>;
  ProtoIoRestorecommerceTaxTypeTaxTypeListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceTaxTypeTaxTypeListResponse>;
  IoRestorecommerceTaxTypeTaxTypeListResponse: ResolverTypeWrapper<IoRestorecommerceTaxTypeTaxTypeListResponse>;
  IoRestorecommerceTaxTypeTaxTypeResponse: ResolverTypeWrapper<IoRestorecommerceTaxTypeTaxTypeResponse>;
  IoRestorecommerceTaxTypeTaxType: ResolverTypeWrapper<IoRestorecommerceTaxTypeTaxType>;
  IoRestorecommerceTaxTypeBehavior: IoRestorecommerceTaxTypeBehavior;
  ResourceTaxServiceQuery: ResolverTypeWrapper<ResourceTaxServiceQuery>;
  ProtoIoRestorecommerceTaxTaxListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceTaxTaxListResponse>;
  IoRestorecommerceTaxTaxListResponse: ResolverTypeWrapper<IoRestorecommerceTaxTaxListResponse>;
  IoRestorecommerceTaxTaxResponse: ResolverTypeWrapper<IoRestorecommerceTaxTaxResponse>;
  IoRestorecommerceTaxTax: ResolverTypeWrapper<IoRestorecommerceTaxTax>;
  ResourceCommandServiceQuery: ResolverTypeWrapper<ResourceCommandServiceQuery>;
  ProtoIoRestorecommerceCommandCommandListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceCommandCommandListResponse>;
  IoRestorecommerceCommandCommandListResponse: ResolverTypeWrapper<IoRestorecommerceCommandCommandListResponse>;
  IoRestorecommerceCommandCommandResponse: ResolverTypeWrapper<IoRestorecommerceCommandCommandResponse>;
  IoRestorecommerceCommandCommand: ResolverTypeWrapper<IoRestorecommerceCommandCommand>;
  IoRestorecommerceCommandCommandParameter: ResolverTypeWrapper<IoRestorecommerceCommandCommandParameter>;
  IoRestorecommerceCommandCommandParameterParameterType: IoRestorecommerceCommandCommandParameterParameterType;
  Mutation: ResolverTypeWrapper<{}>;
  ResourceMutation: ResolverTypeWrapper<ResourceMutation>;
  ResourceAddressServiceMutation: ResolverTypeWrapper<ResourceAddressServiceMutation>;
  IIoRestorecommerceAddressAddressList: IIoRestorecommerceAddressAddressList;
  IIoRestorecommerceAddressAddress: IIoRestorecommerceAddressAddress;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAttributeAttributeObj: IIoRestorecommerceAttributeAttributeObj;
  IIoRestorecommerceAddressGeoPoint: IIoRestorecommerceAddressGeoPoint;
  IIoRestorecommerceAddressAddressAddition: IIoRestorecommerceAddressAddressAddition;
  IIoRestorecommerceAddressBusinessAddress: IIoRestorecommerceAddressBusinessAddress;
  IIoRestorecommerceAddressResidentialAddress: IIoRestorecommerceAddressResidentialAddress;
  IIoRestorecommerceAddressPackStation: IIoRestorecommerceAddressPackStation;
  ModeType: ModeType;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  IoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<IoRestorecommerceResourcebaseDeleteResponse>;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  ResourceCountryServiceMutation: ResolverTypeWrapper<ResourceCountryServiceMutation>;
  IIoRestorecommerceCountryCountryList: IIoRestorecommerceCountryCountryList;
  IIoRestorecommerceCountryCountry: IIoRestorecommerceCountryCountry;
  ResourceTimezoneServiceMutation: ResolverTypeWrapper<ResourceTimezoneServiceMutation>;
  IIoRestorecommerceTimezoneTimezoneList: IIoRestorecommerceTimezoneTimezoneList;
  IIoRestorecommerceTimezoneTimezone: IIoRestorecommerceTimezoneTimezone;
  ResourceContactPointTypeServiceMutation: ResolverTypeWrapper<ResourceContactPointTypeServiceMutation>;
  IIoRestorecommerceContactPointTypeContactPointTypeList: IIoRestorecommerceContactPointTypeContactPointTypeList;
  IIoRestorecommerceContactPointTypeContactPointType: IIoRestorecommerceContactPointTypeContactPointType;
  ResourceCustomerServiceMutation: ResolverTypeWrapper<ResourceCustomerServiceMutation>;
  IIoRestorecommerceCustomerCustomerList: IIoRestorecommerceCustomerCustomerList;
  IIoRestorecommerceCustomerCustomer: IIoRestorecommerceCustomerCustomer;
  IIoRestorecommerceCustomerIndividualUser: IIoRestorecommerceCustomerIndividualUser;
  IIoRestorecommerceCustomerOrgUser: IIoRestorecommerceCustomerOrgUser;
  IIoRestorecommerceCustomerGuest: IIoRestorecommerceCustomerGuest;
  ResourceContactPointServiceMutation: ResolverTypeWrapper<ResourceContactPointServiceMutation>;
  IIoRestorecommerceContactPointContactPointList: IIoRestorecommerceContactPointContactPointList;
  IIoRestorecommerceContactPointContactPoint: IIoRestorecommerceContactPointContactPoint;
  ResourceLocaleServiceMutation: ResolverTypeWrapper<ResourceLocaleServiceMutation>;
  IIoRestorecommerceLocaleLocaleList: IIoRestorecommerceLocaleLocaleList;
  IIoRestorecommerceLocaleLocale: IIoRestorecommerceLocaleLocale;
  ResourceLocationServiceMutation: ResolverTypeWrapper<ResourceLocationServiceMutation>;
  IIoRestorecommerceLocationLocationList: IIoRestorecommerceLocationLocationList;
  IIoRestorecommerceLocationLocation: IIoRestorecommerceLocationLocation;
  ResourceOrganizationServiceMutation: ResolverTypeWrapper<ResourceOrganizationServiceMutation>;
  IIoRestorecommerceOrganizationOrganizationList: IIoRestorecommerceOrganizationOrganizationList;
  IIoRestorecommerceOrganizationOrganization: IIoRestorecommerceOrganizationOrganization;
  ResourceTaxTypeServiceMutation: ResolverTypeWrapper<ResourceTaxTypeServiceMutation>;
  IIoRestorecommerceTaxTypeTaxTypeList: IIoRestorecommerceTaxTypeTaxTypeList;
  IIoRestorecommerceTaxTypeTaxType: IIoRestorecommerceTaxTypeTaxType;
  ResourceTaxServiceMutation: ResolverTypeWrapper<ResourceTaxServiceMutation>;
  IIoRestorecommerceTaxTaxList: IIoRestorecommerceTaxTaxList;
  IIoRestorecommerceTaxTax: IIoRestorecommerceTaxTax;
  ResourceCommandServiceMutation: ResolverTypeWrapper<ResourceCommandServiceMutation>;
  IIoRestorecommerceCommandCommandList: IIoRestorecommerceCommandCommandList;
  IIoRestorecommerceCommandCommand: IIoRestorecommerceCommandCommand;
  IIoRestorecommerceCommandCommandParameter: IIoRestorecommerceCommandCommandParameter;
  Subscription: ResolverTypeWrapper<{}>;
  SubscriptionOutput: ResolverTypeWrapper<SubscriptionOutput>;
  SubscriptionAction: SubscriptionAction;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  ResourceQuery: ResourceQuery;
  ResourceAddressServiceQuery: ResourceAddressServiceQuery;
  ProtoIoRestorecommerceAddressAddressListResponse: ProtoIoRestorecommerceAddressAddressListResponse;
  IoRestorecommerceAddressAddressListResponse: IoRestorecommerceAddressAddressListResponse;
  IoRestorecommerceAddressAddressResponse: IoRestorecommerceAddressAddressResponse;
  IoRestorecommerceAddressAddress: IoRestorecommerceAddressAddress;
  String: Scalars['String'];
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  Float: Scalars['Float'];
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  IoRestorecommerceAttributeAttributeObj: IoRestorecommerceAttributeAttributeObj;
  IoRestorecommerceCountryCountry: IoRestorecommerceCountryCountry;
  IoRestorecommerceAddressGeoPoint: IoRestorecommerceAddressGeoPoint;
  IoRestorecommerceAddressAddressAddition: IoRestorecommerceAddressAddressAddition;
  IoRestorecommerceAddressBusinessAddress: IoRestorecommerceAddressBusinessAddress;
  IoRestorecommerceAddressResidentialAddress: IoRestorecommerceAddressResidentialAddress;
  IoRestorecommerceAddressPackStation: IoRestorecommerceAddressPackStation;
  IoRestorecommerceStatusStatus: IoRestorecommerceStatusStatus;
  Int: Scalars['Int'];
  IoRestorecommerceStatusOperationStatus: IoRestorecommerceStatusOperationStatus;
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IIoRestorecommerceResourcebaseFilterOp: IIoRestorecommerceResourcebaseFilterOp;
  IIoRestorecommerceResourcebaseFilter: IIoRestorecommerceResourcebaseFilter;
  IIoRestorecommerceFilterFilterOp: IIoRestorecommerceFilterFilterOp;
  IIoRestorecommerceFilterFilter: IIoRestorecommerceFilterFilter;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  Boolean: Scalars['Boolean'];
  IGoogleProtobufAny: IGoogleProtobufAny;
  GoogleProtobufAnyValue: Scalars['GoogleProtobufAnyValue'];
  IIoRestorecommerceResourcebaseSearch: IIoRestorecommerceResourcebaseSearch;
  ResourceCountryServiceQuery: ResourceCountryServiceQuery;
  ProtoIoRestorecommerceCountryCountryListResponse: ProtoIoRestorecommerceCountryCountryListResponse;
  IoRestorecommerceCountryCountryListResponse: IoRestorecommerceCountryCountryListResponse;
  IoRestorecommerceCountryCountryResponse: IoRestorecommerceCountryCountryResponse;
  ResourceTimezoneServiceQuery: ResourceTimezoneServiceQuery;
  ProtoIoRestorecommerceTimezoneTimezoneListResponse: ProtoIoRestorecommerceTimezoneTimezoneListResponse;
  IoRestorecommerceTimezoneTimezoneListResponse: IoRestorecommerceTimezoneTimezoneListResponse;
  IoRestorecommerceTimezoneTimezoneResponse: IoRestorecommerceTimezoneTimezoneResponse;
  IoRestorecommerceTimezoneTimezone: IoRestorecommerceTimezoneTimezone;
  ResourceContactPointTypeServiceQuery: ResourceContactPointTypeServiceQuery;
  ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse: ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse;
  IoRestorecommerceContactPointTypeContactPointTypeListResponse: IoRestorecommerceContactPointTypeContactPointTypeListResponse;
  IoRestorecommerceContactPointTypeContactPointTypeResponse: IoRestorecommerceContactPointTypeContactPointTypeResponse;
  IoRestorecommerceContactPointTypeContactPointType: IoRestorecommerceContactPointTypeContactPointType;
  ResourceCustomerServiceQuery: ResourceCustomerServiceQuery;
  ProtoIoRestorecommerceCustomerCustomerListResponse: ProtoIoRestorecommerceCustomerCustomerListResponse;
  IoRestorecommerceCustomerCustomerListResponse: IoRestorecommerceCustomerCustomerListResponse;
  IoRestorecommerceCustomerCustomerResponse: IoRestorecommerceCustomerCustomerResponse;
  IoRestorecommerceCustomerCustomer: IoRestorecommerceCustomerCustomer;
  IoRestorecommerceCustomerIndividualUser: IoRestorecommerceCustomerIndividualUser;
  IoRestorecommerceUserUser: IoRestorecommerceUserUser;
  IoRestorecommerceAuthRoleAssociation: IoRestorecommerceAuthRoleAssociation;
  IoRestorecommerceLocaleLocale: IoRestorecommerceLocaleLocale;
  IoRestorecommerceImageImage: IoRestorecommerceImageImage;
  IoRestorecommerceAuthTokens: IoRestorecommerceAuthTokens;
  GoogleProtobufAny: GoogleProtobufAny;
  IoRestorecommerceContactPointContactPoint: IoRestorecommerceContactPointContactPoint;
  IoRestorecommerceCustomerOrgUser: IoRestorecommerceCustomerOrgUser;
  IoRestorecommerceOrganizationOrganization: IoRestorecommerceOrganizationOrganization;
  IoRestorecommerceCustomerGuest: IoRestorecommerceCustomerGuest;
  ResourceContactPointServiceQuery: ResourceContactPointServiceQuery;
  ProtoIoRestorecommerceContactPointContactPointListResponse: ProtoIoRestorecommerceContactPointContactPointListResponse;
  IoRestorecommerceContactPointContactPointListResponse: IoRestorecommerceContactPointContactPointListResponse;
  IoRestorecommerceContactPointContactPointResponse: IoRestorecommerceContactPointContactPointResponse;
  ResourceLocaleServiceQuery: ResourceLocaleServiceQuery;
  ProtoIoRestorecommerceLocaleLocaleListResponse: ProtoIoRestorecommerceLocaleLocaleListResponse;
  IoRestorecommerceLocaleLocaleListResponse: IoRestorecommerceLocaleLocaleListResponse;
  IoRestorecommerceLocaleLocaleResponse: IoRestorecommerceLocaleLocaleResponse;
  ResourceLocationServiceQuery: ResourceLocationServiceQuery;
  ProtoIoRestorecommerceLocationLocationListResponse: ProtoIoRestorecommerceLocationLocationListResponse;
  IoRestorecommerceLocationLocationListResponse: IoRestorecommerceLocationLocationListResponse;
  IoRestorecommerceLocationLocationResponse: IoRestorecommerceLocationLocationResponse;
  IoRestorecommerceLocationLocation: IoRestorecommerceLocationLocation;
  ResourceOrganizationServiceQuery: ResourceOrganizationServiceQuery;
  ProtoIoRestorecommerceOrganizationOrganizationListResponse: ProtoIoRestorecommerceOrganizationOrganizationListResponse;
  IoRestorecommerceOrganizationOrganizationListResponse: IoRestorecommerceOrganizationOrganizationListResponse;
  IoRestorecommerceOrganizationOrganizationResponse: IoRestorecommerceOrganizationOrganizationResponse;
  ResourceTaxTypeServiceQuery: ResourceTaxTypeServiceQuery;
  ProtoIoRestorecommerceTaxTypeTaxTypeListResponse: ProtoIoRestorecommerceTaxTypeTaxTypeListResponse;
  IoRestorecommerceTaxTypeTaxTypeListResponse: IoRestorecommerceTaxTypeTaxTypeListResponse;
  IoRestorecommerceTaxTypeTaxTypeResponse: IoRestorecommerceTaxTypeTaxTypeResponse;
  IoRestorecommerceTaxTypeTaxType: IoRestorecommerceTaxTypeTaxType;
  ResourceTaxServiceQuery: ResourceTaxServiceQuery;
  ProtoIoRestorecommerceTaxTaxListResponse: ProtoIoRestorecommerceTaxTaxListResponse;
  IoRestorecommerceTaxTaxListResponse: IoRestorecommerceTaxTaxListResponse;
  IoRestorecommerceTaxTaxResponse: IoRestorecommerceTaxTaxResponse;
  IoRestorecommerceTaxTax: IoRestorecommerceTaxTax;
  ResourceCommandServiceQuery: ResourceCommandServiceQuery;
  ProtoIoRestorecommerceCommandCommandListResponse: ProtoIoRestorecommerceCommandCommandListResponse;
  IoRestorecommerceCommandCommandListResponse: IoRestorecommerceCommandCommandListResponse;
  IoRestorecommerceCommandCommandResponse: IoRestorecommerceCommandCommandResponse;
  IoRestorecommerceCommandCommand: IoRestorecommerceCommandCommand;
  IoRestorecommerceCommandCommandParameter: IoRestorecommerceCommandCommandParameter;
  Mutation: {};
  ResourceMutation: ResourceMutation;
  ResourceAddressServiceMutation: ResourceAddressServiceMutation;
  IIoRestorecommerceAddressAddressList: IIoRestorecommerceAddressAddressList;
  IIoRestorecommerceAddressAddress: IIoRestorecommerceAddressAddress;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAttributeAttributeObj: IIoRestorecommerceAttributeAttributeObj;
  IIoRestorecommerceAddressGeoPoint: IIoRestorecommerceAddressGeoPoint;
  IIoRestorecommerceAddressAddressAddition: IIoRestorecommerceAddressAddressAddition;
  IIoRestorecommerceAddressBusinessAddress: IIoRestorecommerceAddressBusinessAddress;
  IIoRestorecommerceAddressResidentialAddress: IIoRestorecommerceAddressResidentialAddress;
  IIoRestorecommerceAddressPackStation: IIoRestorecommerceAddressPackStation;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ProtoIoRestorecommerceResourcebaseDeleteResponse;
  IoRestorecommerceResourcebaseDeleteResponse: IoRestorecommerceResourcebaseDeleteResponse;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  ResourceCountryServiceMutation: ResourceCountryServiceMutation;
  IIoRestorecommerceCountryCountryList: IIoRestorecommerceCountryCountryList;
  IIoRestorecommerceCountryCountry: IIoRestorecommerceCountryCountry;
  ResourceTimezoneServiceMutation: ResourceTimezoneServiceMutation;
  IIoRestorecommerceTimezoneTimezoneList: IIoRestorecommerceTimezoneTimezoneList;
  IIoRestorecommerceTimezoneTimezone: IIoRestorecommerceTimezoneTimezone;
  ResourceContactPointTypeServiceMutation: ResourceContactPointTypeServiceMutation;
  IIoRestorecommerceContactPointTypeContactPointTypeList: IIoRestorecommerceContactPointTypeContactPointTypeList;
  IIoRestorecommerceContactPointTypeContactPointType: IIoRestorecommerceContactPointTypeContactPointType;
  ResourceCustomerServiceMutation: ResourceCustomerServiceMutation;
  IIoRestorecommerceCustomerCustomerList: IIoRestorecommerceCustomerCustomerList;
  IIoRestorecommerceCustomerCustomer: IIoRestorecommerceCustomerCustomer;
  IIoRestorecommerceCustomerIndividualUser: IIoRestorecommerceCustomerIndividualUser;
  IIoRestorecommerceCustomerOrgUser: IIoRestorecommerceCustomerOrgUser;
  IIoRestorecommerceCustomerGuest: IIoRestorecommerceCustomerGuest;
  ResourceContactPointServiceMutation: ResourceContactPointServiceMutation;
  IIoRestorecommerceContactPointContactPointList: IIoRestorecommerceContactPointContactPointList;
  IIoRestorecommerceContactPointContactPoint: IIoRestorecommerceContactPointContactPoint;
  ResourceLocaleServiceMutation: ResourceLocaleServiceMutation;
  IIoRestorecommerceLocaleLocaleList: IIoRestorecommerceLocaleLocaleList;
  IIoRestorecommerceLocaleLocale: IIoRestorecommerceLocaleLocale;
  ResourceLocationServiceMutation: ResourceLocationServiceMutation;
  IIoRestorecommerceLocationLocationList: IIoRestorecommerceLocationLocationList;
  IIoRestorecommerceLocationLocation: IIoRestorecommerceLocationLocation;
  ResourceOrganizationServiceMutation: ResourceOrganizationServiceMutation;
  IIoRestorecommerceOrganizationOrganizationList: IIoRestorecommerceOrganizationOrganizationList;
  IIoRestorecommerceOrganizationOrganization: IIoRestorecommerceOrganizationOrganization;
  ResourceTaxTypeServiceMutation: ResourceTaxTypeServiceMutation;
  IIoRestorecommerceTaxTypeTaxTypeList: IIoRestorecommerceTaxTypeTaxTypeList;
  IIoRestorecommerceTaxTypeTaxType: IIoRestorecommerceTaxTypeTaxType;
  ResourceTaxServiceMutation: ResourceTaxServiceMutation;
  IIoRestorecommerceTaxTaxList: IIoRestorecommerceTaxTaxList;
  IIoRestorecommerceTaxTax: IIoRestorecommerceTaxTax;
  ResourceCommandServiceMutation: ResourceCommandServiceMutation;
  IIoRestorecommerceCommandCommandList: IIoRestorecommerceCommandCommandList;
  IIoRestorecommerceCommandCommand: IIoRestorecommerceCommandCommand;
  IIoRestorecommerceCommandCommandParameter: IIoRestorecommerceCommandCommandParameter;
  Subscription: {};
  SubscriptionOutput: SubscriptionOutput;
}>;

export type QueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  resource?: Resolver<ResolversTypes['ResourceQuery'], ParentType, ContextType>;
}>;

export type ResourceQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceQuery'] = ResolversParentTypes['ResourceQuery']> = ResolversObject<{
  AddressService?: Resolver<ResolversTypes['ResourceAddressServiceQuery'], ParentType, ContextType>;
  CountryService?: Resolver<ResolversTypes['ResourceCountryServiceQuery'], ParentType, ContextType>;
  TimezoneService?: Resolver<ResolversTypes['ResourceTimezoneServiceQuery'], ParentType, ContextType>;
  ContactPointTypeService?: Resolver<ResolversTypes['ResourceContactPointTypeServiceQuery'], ParentType, ContextType>;
  CustomerService?: Resolver<ResolversTypes['ResourceCustomerServiceQuery'], ParentType, ContextType>;
  ContactPointService?: Resolver<ResolversTypes['ResourceContactPointServiceQuery'], ParentType, ContextType>;
  LocaleService?: Resolver<ResolversTypes['ResourceLocaleServiceQuery'], ParentType, ContextType>;
  LocationService?: Resolver<ResolversTypes['ResourceLocationServiceQuery'], ParentType, ContextType>;
  OrganizationService?: Resolver<ResolversTypes['ResourceOrganizationServiceQuery'], ParentType, ContextType>;
  TaxTypeService?: Resolver<ResolversTypes['ResourceTaxTypeServiceQuery'], ParentType, ContextType>;
  TaxService?: Resolver<ResolversTypes['ResourceTaxServiceQuery'], ParentType, ContextType>;
  CommandService?: Resolver<ResolversTypes['ResourceCommandServiceQuery'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceAddressServiceQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceAddressServiceQuery'] = ResolversParentTypes['ResourceAddressServiceQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceAddressAddressListResponse']>, ParentType, ContextType, RequireFields<ResourceAddressServiceQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceAddressAddressListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceAddressAddressListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceAddressAddressListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressAddressListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressAddressListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressAddressListResponse'] = ResolversParentTypes['IoRestorecommerceAddressAddressListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAddressAddressResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressAddressResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressAddressResponse'] = ResolversParentTypes['IoRestorecommerceAddressAddressResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressAddress']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressAddressResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressAddress'] = ResolversParentTypes['IoRestorecommerceAddressAddress']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCountryCountry']>, ParentType, ContextType>;
  locality?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  geoCoordinates?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressGeoPoint']>, ParentType, ContextType>;
  altitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  buildingNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressAddition?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressAddressAddition']>, ParentType, ContextType>;
  businessAddress?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressBusinessAddress']>, ParentType, ContextType>;
  residentialAddress?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressResidentialAddress']>, ParentType, ContextType>;
  packStation?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressPackStation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceMetaMetaResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceMetaMeta'] = ResolversParentTypes['IoRestorecommerceMetaMeta']> = ResolversObject<{
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modified?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modifiedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  acl?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttributeObj']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeObjResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttributeObj'] = ResolversParentTypes['IoRestorecommerceAttributeAttributeObj']> = ResolversObject<{
  attribute?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCountryCountryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCountryCountry'] = ResolversParentTypes['IoRestorecommerceCountryCountry']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  geographicalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  economicAreas?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressGeoPointResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressGeoPoint'] = ResolversParentTypes['IoRestorecommerceAddressGeoPoint']> = ResolversObject<{
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressAddressAdditionResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressAddressAddition'] = ResolversParentTypes['IoRestorecommerceAddressAddressAddition']> = ResolversObject<{
  field1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  field2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressBusinessAddressResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressBusinessAddress'] = ResolversParentTypes['IoRestorecommerceAddressBusinessAddress']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressResidentialAddressResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressResidentialAddress'] = ResolversParentTypes['IoRestorecommerceAddressResidentialAddress']> = ResolversObject<{
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  givenName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  midName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  familyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressPackStationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressPackStation'] = ResolversParentTypes['IoRestorecommerceAddressPackStation']> = ResolversObject<{
  provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stationNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusStatusResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusStatus'] = ResolversParentTypes['IoRestorecommerceStatusStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusOperationStatusResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusOperationStatus'] = ResolversParentTypes['IoRestorecommerceStatusOperationStatus']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseSortSortOrderResolvers = { UNSORTED: 0, ASCENDING: 1, DESCENDING: 2 };

export type IoRestorecommerceResourcebaseFilterOperationResolvers = { eq: 0, lt: 1, lte: 2, gt: 3, gte: 4, isEmpty: 5, iLike: 6, in: 7, neq: 8 };

export type IoRestorecommerceResourcebaseFilterValueTypeResolvers = { STRING: 0, NUMBER: 1, BOOLEAN: 2, DATE: 3, ARRAY: 4 };

export type IoRestorecommerceFilterFilterOperationResolvers = { eq: 0, lt: 1, lte: 2, gt: 3, gte: 4, isEmpty: 5, iLike: 6, in: 7, neq: 8 };

export type IoRestorecommerceFilterFilterValueTypeResolvers = { STRING: 0, NUMBER: 1, BOOLEAN: 2, DATE: 3, ARRAY: 4 };

export type IoRestorecommerceFilterFilterOpOperatorResolvers = { and: 0, or: 1 };

export type IoRestorecommerceResourcebaseFilterOpOperatorResolvers = { and: 0, or: 1 };

export interface GoogleProtobufAnyValueScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GoogleProtobufAnyValue'], any> {
  name: 'GoogleProtobufAnyValue';
}

export type ResourceCountryServiceQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceCountryServiceQuery'] = ResolversParentTypes['ResourceCountryServiceQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCountryCountryListResponse']>, ParentType, ContextType, RequireFields<ResourceCountryServiceQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceCountryCountryListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceCountryCountryListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceCountryCountryListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCountryCountryListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCountryCountryListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCountryCountryListResponse'] = ResolversParentTypes['IoRestorecommerceCountryCountryListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceCountryCountryResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCountryCountryResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCountryCountryResponse'] = ResolversParentTypes['IoRestorecommerceCountryCountryResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCountryCountry']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceTimezoneServiceQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceTimezoneServiceQuery'] = ResolversParentTypes['ResourceTimezoneServiceQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTimezoneTimezoneListResponse']>, ParentType, ContextType, RequireFields<ResourceTimezoneServiceQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceTimezoneTimezoneListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceTimezoneTimezoneListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceTimezoneTimezoneListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceTimezoneTimezoneListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTimezoneTimezoneListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceTimezoneTimezoneListResponse'] = ResolversParentTypes['IoRestorecommerceTimezoneTimezoneListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceTimezoneTimezoneResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTimezoneTimezoneResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceTimezoneTimezoneResponse'] = ResolversParentTypes['IoRestorecommerceTimezoneTimezoneResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceTimezoneTimezone']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTimezoneTimezoneResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceTimezoneTimezone'] = ResolversParentTypes['IoRestorecommerceTimezoneTimezone']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceContactPointTypeServiceQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceContactPointTypeServiceQuery'] = ResolversParentTypes['ResourceContactPointTypeServiceQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse']>, ParentType, ContextType, RequireFields<ResourceContactPointTypeServiceQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceContactPointTypeContactPointTypeListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceContactPointTypeContactPointTypeListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceContactPointTypeContactPointTypeListResponse'] = ResolversParentTypes['IoRestorecommerceContactPointTypeContactPointTypeListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceContactPointTypeContactPointTypeResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceContactPointTypeContactPointTypeResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceContactPointTypeContactPointTypeResponse'] = ResolversParentTypes['IoRestorecommerceContactPointTypeContactPointTypeResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceContactPointTypeContactPointType']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceContactPointTypeContactPointTypeResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceContactPointTypeContactPointType'] = ResolversParentTypes['IoRestorecommerceContactPointTypeContactPointType']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceCustomerServiceQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceCustomerServiceQuery'] = ResolversParentTypes['ResourceCustomerServiceQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCustomerCustomerListResponse']>, ParentType, ContextType, RequireFields<ResourceCustomerServiceQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceCustomerCustomerListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceCustomerCustomerListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceCustomerCustomerListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCustomerCustomerListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCustomerCustomerListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerCustomerListResponse'] = ResolversParentTypes['IoRestorecommerceCustomerCustomerListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceCustomerCustomerResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCustomerCustomerResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerCustomerResponse'] = ResolversParentTypes['IoRestorecommerceCustomerCustomerResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCustomerCustomer']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCustomerCustomerResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerCustomer'] = ResolversParentTypes['IoRestorecommerceCustomerCustomer']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  individualUser?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCustomerIndividualUser']>, ParentType, ContextType>;
  orgUser?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCustomerOrgUser']>, ParentType, ContextType>;
  guest?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCustomerGuest']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCustomerIndividualUserResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerIndividualUser'] = ResolversParentTypes['IoRestorecommerceCustomerIndividualUser']> = ResolversObject<{
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUser']>, ParentType, ContextType>;
  addressId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressAddress']>, ParentType, ContextType>;
  contactPointIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  contactPoints?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceContactPointContactPoint']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserUserResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceUserUser'] = ResolversParentTypes['IoRestorecommerceUserUser']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  newEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  activationCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  passwordHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roleAssociations?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAuthRoleAssociation']>>, ParentType, ContextType>;
  timezoneId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['IoRestorecommerceTimezoneTimezone']>, ParentType, ContextType>;
  localeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['IoRestorecommerceLocaleLocale']>, ParentType, ContextType>;
  defaultScope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unauthenticated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  guest?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['IoRestorecommerceImageImage']>, ParentType, ContextType>;
  userType?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUserType']>, ParentType, ContextType>;
  invite?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  invitedByUserName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invitedByUserFirstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invitedByUserLastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tokens?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAuthTokens']>>, ParentType, ContextType>;
  lastAccess?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthRoleAssociationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthRoleAssociation'] = ResolversParentTypes['IoRestorecommerceAuthRoleAssociation']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceLocaleLocaleResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceLocaleLocale'] = ResolversParentTypes['IoRestorecommerceLocaleLocale']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceImageImageResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceImageImage'] = ResolversParentTypes['IoRestorecommerceImageImage']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  filename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserUserTypeResolvers = { ORG_USER: 0, INDIVIDUAL_USER: 1, GUEST: 2, TECHNICAL_USER: 3 };

export type IoRestorecommerceAuthTokensResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthTokens'] = ResolversParentTypes['IoRestorecommerceAuthTokens']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expiresIn?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scopes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  interactive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastLogin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GoogleProtobufAnyResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['GoogleProtobufAny'] = ResolversParentTypes['GoogleProtobufAny']> = ResolversObject<{
  typeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['GoogleProtobufAnyValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceContactPointContactPointResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceContactPointContactPoint'] = ResolversParentTypes['IoRestorecommerceContactPointContactPoint']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  physicalAddressId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  physicalAddress?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressAddress']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactPointTypeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactPointType?: Resolver<Maybe<ResolversTypes['IoRestorecommerceContactPointTypeContactPointType']>, ParentType, ContextType>;
  telephone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezoneId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['IoRestorecommerceTimezoneTimezone']>, ParentType, ContextType>;
  localeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['IoRestorecommerceLocaleLocale']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCustomerOrgUserResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerOrgUser'] = ResolversParentTypes['IoRestorecommerceCustomerOrgUser']> = ResolversObject<{
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUser']>, ParentType, ContextType>;
  organizationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrganizationOrganization']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOrganizationOrganizationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceOrganizationOrganization'] = ResolversParentTypes['IoRestorecommerceOrganizationOrganization']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  addressId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressAddress']>, ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrganizationOrganization']>, ParentType, ContextType>;
  contactPointIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  contactPoints?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceContactPointContactPoint']>>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vatId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isicV4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  registration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  registrationCourt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paymentMethodIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCustomerGuestResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerGuest'] = ResolversParentTypes['IoRestorecommerceCustomerGuest']> = ResolversObject<{
  guest?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  addressId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressAddress']>, ParentType, ContextType>;
  contactPointIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  contactPoints?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceContactPointContactPoint']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceContactPointServiceQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceContactPointServiceQuery'] = ResolversParentTypes['ResourceContactPointServiceQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceContactPointContactPointListResponse']>, ParentType, ContextType, RequireFields<ResourceContactPointServiceQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceContactPointContactPointListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceContactPointContactPointListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceContactPointContactPointListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceContactPointContactPointListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceContactPointContactPointListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceContactPointContactPointListResponse'] = ResolversParentTypes['IoRestorecommerceContactPointContactPointListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceContactPointContactPointResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceContactPointContactPointResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceContactPointContactPointResponse'] = ResolversParentTypes['IoRestorecommerceContactPointContactPointResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceContactPointContactPoint']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceLocaleServiceQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceLocaleServiceQuery'] = ResolversParentTypes['ResourceLocaleServiceQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceLocaleLocaleListResponse']>, ParentType, ContextType, RequireFields<ResourceLocaleServiceQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceLocaleLocaleListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceLocaleLocaleListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceLocaleLocaleListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceLocaleLocaleListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceLocaleLocaleListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceLocaleLocaleListResponse'] = ResolversParentTypes['IoRestorecommerceLocaleLocaleListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceLocaleLocaleResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceLocaleLocaleResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceLocaleLocaleResponse'] = ResolversParentTypes['IoRestorecommerceLocaleLocaleResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceLocaleLocale']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceLocationServiceQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceLocationServiceQuery'] = ResolversParentTypes['ResourceLocationServiceQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceLocationLocationListResponse']>, ParentType, ContextType, RequireFields<ResourceLocationServiceQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceLocationLocationListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceLocationLocationListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceLocationLocationListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceLocationLocationListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceLocationLocationListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceLocationLocationListResponse'] = ResolversParentTypes['IoRestorecommerceLocationLocationListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceLocationLocationResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceLocationLocationResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceLocationLocationResponse'] = ResolversParentTypes['IoRestorecommerceLocationLocationResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceLocationLocation']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceLocationLocationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceLocationLocation'] = ResolversParentTypes['IoRestorecommerceLocationLocation']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organizationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrganizationOrganization']>, ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['IoRestorecommerceLocationLocation']>, ParentType, ContextType>;
  addressId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressAddress']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceOrganizationServiceQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceOrganizationServiceQuery'] = ResolversParentTypes['ResourceOrganizationServiceQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOrganizationOrganizationListResponse']>, ParentType, ContextType, RequireFields<ResourceOrganizationServiceQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceOrganizationOrganizationListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOrganizationOrganizationListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceOrganizationOrganizationListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrganizationOrganizationListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOrganizationOrganizationListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceOrganizationOrganizationListResponse'] = ResolversParentTypes['IoRestorecommerceOrganizationOrganizationListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceOrganizationOrganizationResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOrganizationOrganizationResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceOrganizationOrganizationResponse'] = ResolversParentTypes['IoRestorecommerceOrganizationOrganizationResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrganizationOrganization']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceTaxTypeServiceQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceTaxTypeServiceQuery'] = ResolversParentTypes['ResourceTaxTypeServiceQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTaxTypeTaxTypeListResponse']>, ParentType, ContextType, RequireFields<ResourceTaxTypeServiceQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceTaxTypeTaxTypeListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceTaxTypeTaxTypeListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceTaxTypeTaxTypeListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceTaxTypeTaxTypeListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTaxTypeTaxTypeListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceTaxTypeTaxTypeListResponse'] = ResolversParentTypes['IoRestorecommerceTaxTypeTaxTypeListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceTaxTypeTaxTypeResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTaxTypeTaxTypeResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceTaxTypeTaxTypeResponse'] = ResolversParentTypes['IoRestorecommerceTaxTypeTaxTypeResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceTaxTypeTaxType']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTaxTypeTaxTypeResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceTaxTypeTaxType'] = ResolversParentTypes['IoRestorecommerceTaxTypeTaxType']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  behavior?: Resolver<Maybe<ResolversTypes['IoRestorecommerceTaxTypeBehavior']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTaxTypeBehaviorResolvers = { NONE: 0, ADDITIVE_ON_GROSS: 1 };

export type ResourceTaxServiceQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceTaxServiceQuery'] = ResolversParentTypes['ResourceTaxServiceQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTaxTaxListResponse']>, ParentType, ContextType, RequireFields<ResourceTaxServiceQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceTaxTaxListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceTaxTaxListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceTaxTaxListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceTaxTaxListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTaxTaxListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceTaxTaxListResponse'] = ResolversParentTypes['IoRestorecommerceTaxTaxListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceTaxTaxResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTaxTaxResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceTaxTaxResponse'] = ResolversParentTypes['IoRestorecommerceTaxTaxResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceTaxTax']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTaxTaxResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceTaxTax'] = ResolversParentTypes['IoRestorecommerceTaxTax']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  countryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCountryCountry']>, ParentType, ContextType>;
  rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  typeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['IoRestorecommerceTaxTypeTaxType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceCommandServiceQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceCommandServiceQuery'] = ResolversParentTypes['ResourceCommandServiceQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCommandCommandListResponse']>, ParentType, ContextType, RequireFields<ResourceCommandServiceQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceCommandCommandListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceCommandCommandListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceCommandCommandListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCommandCommandListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCommandCommandListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCommandCommandListResponse'] = ResolversParentTypes['IoRestorecommerceCommandCommandListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceCommandCommandResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCommandCommandResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCommandCommandResponse'] = ResolversParentTypes['IoRestorecommerceCommandCommandResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCommandCommand']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCommandCommandResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCommandCommand'] = ResolversParentTypes['IoRestorecommerceCommandCommand']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parameters?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceCommandCommandParameter']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCommandCommandParameterResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCommandCommandParameter'] = ResolversParentTypes['IoRestorecommerceCommandCommandParameter']> = ResolversObject<{
  field?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCommandCommandParameterParameterType']>, ParentType, ContextType>;
  properties?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCommandCommandParameterParameterTypeResolvers = { boolean_value: 0, object_value: 1, array_value: 2, number_value: 3, string_value: 4 };

export type MutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  resource?: Resolver<ResolversTypes['ResourceMutation'], ParentType, ContextType>;
}>;

export type ResourceMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceMutation'] = ResolversParentTypes['ResourceMutation']> = ResolversObject<{
  AddressService?: Resolver<ResolversTypes['ResourceAddressServiceMutation'], ParentType, ContextType>;
  CountryService?: Resolver<ResolversTypes['ResourceCountryServiceMutation'], ParentType, ContextType>;
  TimezoneService?: Resolver<ResolversTypes['ResourceTimezoneServiceMutation'], ParentType, ContextType>;
  ContactPointTypeService?: Resolver<ResolversTypes['ResourceContactPointTypeServiceMutation'], ParentType, ContextType>;
  CustomerService?: Resolver<ResolversTypes['ResourceCustomerServiceMutation'], ParentType, ContextType>;
  ContactPointService?: Resolver<ResolversTypes['ResourceContactPointServiceMutation'], ParentType, ContextType>;
  LocaleService?: Resolver<ResolversTypes['ResourceLocaleServiceMutation'], ParentType, ContextType>;
  LocationService?: Resolver<ResolversTypes['ResourceLocationServiceMutation'], ParentType, ContextType>;
  OrganizationService?: Resolver<ResolversTypes['ResourceOrganizationServiceMutation'], ParentType, ContextType>;
  TaxTypeService?: Resolver<ResolversTypes['ResourceTaxTypeServiceMutation'], ParentType, ContextType>;
  TaxService?: Resolver<ResolversTypes['ResourceTaxServiceMutation'], ParentType, ContextType>;
  CommandService?: Resolver<ResolversTypes['ResourceCommandServiceMutation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceAddressServiceMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceAddressServiceMutation'] = ResolversParentTypes['ResourceAddressServiceMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceAddressAddressListResponse']>, ParentType, ContextType, RequireFields<ResourceAddressServiceMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<ResourceAddressServiceMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  status?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceStatusStatus']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceCountryServiceMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceCountryServiceMutation'] = ResolversParentTypes['ResourceCountryServiceMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCountryCountryListResponse']>, ParentType, ContextType, RequireFields<ResourceCountryServiceMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<ResourceCountryServiceMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceTimezoneServiceMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceTimezoneServiceMutation'] = ResolversParentTypes['ResourceTimezoneServiceMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTimezoneTimezoneListResponse']>, ParentType, ContextType, RequireFields<ResourceTimezoneServiceMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<ResourceTimezoneServiceMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceContactPointTypeServiceMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceContactPointTypeServiceMutation'] = ResolversParentTypes['ResourceContactPointTypeServiceMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse']>, ParentType, ContextType, RequireFields<ResourceContactPointTypeServiceMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<ResourceContactPointTypeServiceMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceCustomerServiceMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceCustomerServiceMutation'] = ResolversParentTypes['ResourceCustomerServiceMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCustomerCustomerListResponse']>, ParentType, ContextType, RequireFields<ResourceCustomerServiceMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<ResourceCustomerServiceMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceContactPointServiceMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceContactPointServiceMutation'] = ResolversParentTypes['ResourceContactPointServiceMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceContactPointContactPointListResponse']>, ParentType, ContextType, RequireFields<ResourceContactPointServiceMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<ResourceContactPointServiceMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceLocaleServiceMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceLocaleServiceMutation'] = ResolversParentTypes['ResourceLocaleServiceMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceLocaleLocaleListResponse']>, ParentType, ContextType, RequireFields<ResourceLocaleServiceMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<ResourceLocaleServiceMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceLocationServiceMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceLocationServiceMutation'] = ResolversParentTypes['ResourceLocationServiceMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceLocationLocationListResponse']>, ParentType, ContextType, RequireFields<ResourceLocationServiceMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<ResourceLocationServiceMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceOrganizationServiceMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceOrganizationServiceMutation'] = ResolversParentTypes['ResourceOrganizationServiceMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOrganizationOrganizationListResponse']>, ParentType, ContextType, RequireFields<ResourceOrganizationServiceMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<ResourceOrganizationServiceMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceTaxTypeServiceMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceTaxTypeServiceMutation'] = ResolversParentTypes['ResourceTaxTypeServiceMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTaxTypeTaxTypeListResponse']>, ParentType, ContextType, RequireFields<ResourceTaxTypeServiceMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<ResourceTaxTypeServiceMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceTaxServiceMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceTaxServiceMutation'] = ResolversParentTypes['ResourceTaxServiceMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTaxTaxListResponse']>, ParentType, ContextType, RequireFields<ResourceTaxServiceMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<ResourceTaxServiceMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceCommandServiceMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceCommandServiceMutation'] = ResolversParentTypes['ResourceCommandServiceMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCommandCommandListResponse']>, ParentType, ContextType, RequireFields<ResourceCommandServiceMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<ResourceCommandServiceMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  orderingOrders?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "orderingOrders", ParentType, ContextType, Partial<SubscriptionOrderingOrdersArgs>>;
}>;

export type SubscriptionOutputResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['SubscriptionOutput'] = ResolversParentTypes['SubscriptionOutput']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = ResourceContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  ResourceQuery?: ResourceQueryResolvers<ContextType>;
  ResourceAddressServiceQuery?: ResourceAddressServiceQueryResolvers<ContextType>;
  ProtoIoRestorecommerceAddressAddressListResponse?: ProtoIoRestorecommerceAddressAddressListResponseResolvers<ContextType>;
  IoRestorecommerceAddressAddressListResponse?: IoRestorecommerceAddressAddressListResponseResolvers<ContextType>;
  IoRestorecommerceAddressAddressResponse?: IoRestorecommerceAddressAddressResponseResolvers<ContextType>;
  IoRestorecommerceAddressAddress?: IoRestorecommerceAddressAddressResolvers<ContextType>;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
  IoRestorecommerceAttributeAttributeObj?: IoRestorecommerceAttributeAttributeObjResolvers<ContextType>;
  IoRestorecommerceCountryCountry?: IoRestorecommerceCountryCountryResolvers<ContextType>;
  IoRestorecommerceAddressGeoPoint?: IoRestorecommerceAddressGeoPointResolvers<ContextType>;
  IoRestorecommerceAddressAddressAddition?: IoRestorecommerceAddressAddressAdditionResolvers<ContextType>;
  IoRestorecommerceAddressBusinessAddress?: IoRestorecommerceAddressBusinessAddressResolvers<ContextType>;
  IoRestorecommerceAddressResidentialAddress?: IoRestorecommerceAddressResidentialAddressResolvers<ContextType>;
  IoRestorecommerceAddressPackStation?: IoRestorecommerceAddressPackStationResolvers<ContextType>;
  IoRestorecommerceStatusStatus?: IoRestorecommerceStatusStatusResolvers<ContextType>;
  IoRestorecommerceStatusOperationStatus?: IoRestorecommerceStatusOperationStatusResolvers<ContextType>;
  IoRestorecommerceResourcebaseSortSortOrder?: IoRestorecommerceResourcebaseSortSortOrderResolvers;
  IoRestorecommerceResourcebaseFilterOperation?: IoRestorecommerceResourcebaseFilterOperationResolvers;
  IoRestorecommerceResourcebaseFilterValueType?: IoRestorecommerceResourcebaseFilterValueTypeResolvers;
  IoRestorecommerceFilterFilterOperation?: IoRestorecommerceFilterFilterOperationResolvers;
  IoRestorecommerceFilterFilterValueType?: IoRestorecommerceFilterFilterValueTypeResolvers;
  IoRestorecommerceFilterFilterOpOperator?: IoRestorecommerceFilterFilterOpOperatorResolvers;
  IoRestorecommerceResourcebaseFilterOpOperator?: IoRestorecommerceResourcebaseFilterOpOperatorResolvers;
  GoogleProtobufAnyValue?: GraphQLScalarType;
  ResourceCountryServiceQuery?: ResourceCountryServiceQueryResolvers<ContextType>;
  ProtoIoRestorecommerceCountryCountryListResponse?: ProtoIoRestorecommerceCountryCountryListResponseResolvers<ContextType>;
  IoRestorecommerceCountryCountryListResponse?: IoRestorecommerceCountryCountryListResponseResolvers<ContextType>;
  IoRestorecommerceCountryCountryResponse?: IoRestorecommerceCountryCountryResponseResolvers<ContextType>;
  ResourceTimezoneServiceQuery?: ResourceTimezoneServiceQueryResolvers<ContextType>;
  ProtoIoRestorecommerceTimezoneTimezoneListResponse?: ProtoIoRestorecommerceTimezoneTimezoneListResponseResolvers<ContextType>;
  IoRestorecommerceTimezoneTimezoneListResponse?: IoRestorecommerceTimezoneTimezoneListResponseResolvers<ContextType>;
  IoRestorecommerceTimezoneTimezoneResponse?: IoRestorecommerceTimezoneTimezoneResponseResolvers<ContextType>;
  IoRestorecommerceTimezoneTimezone?: IoRestorecommerceTimezoneTimezoneResolvers<ContextType>;
  ResourceContactPointTypeServiceQuery?: ResourceContactPointTypeServiceQueryResolvers<ContextType>;
  ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse?: ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponseResolvers<ContextType>;
  IoRestorecommerceContactPointTypeContactPointTypeListResponse?: IoRestorecommerceContactPointTypeContactPointTypeListResponseResolvers<ContextType>;
  IoRestorecommerceContactPointTypeContactPointTypeResponse?: IoRestorecommerceContactPointTypeContactPointTypeResponseResolvers<ContextType>;
  IoRestorecommerceContactPointTypeContactPointType?: IoRestorecommerceContactPointTypeContactPointTypeResolvers<ContextType>;
  ResourceCustomerServiceQuery?: ResourceCustomerServiceQueryResolvers<ContextType>;
  ProtoIoRestorecommerceCustomerCustomerListResponse?: ProtoIoRestorecommerceCustomerCustomerListResponseResolvers<ContextType>;
  IoRestorecommerceCustomerCustomerListResponse?: IoRestorecommerceCustomerCustomerListResponseResolvers<ContextType>;
  IoRestorecommerceCustomerCustomerResponse?: IoRestorecommerceCustomerCustomerResponseResolvers<ContextType>;
  IoRestorecommerceCustomerCustomer?: IoRestorecommerceCustomerCustomerResolvers<ContextType>;
  IoRestorecommerceCustomerIndividualUser?: IoRestorecommerceCustomerIndividualUserResolvers<ContextType>;
  IoRestorecommerceUserUser?: IoRestorecommerceUserUserResolvers<ContextType>;
  IoRestorecommerceAuthRoleAssociation?: IoRestorecommerceAuthRoleAssociationResolvers<ContextType>;
  IoRestorecommerceLocaleLocale?: IoRestorecommerceLocaleLocaleResolvers<ContextType>;
  IoRestorecommerceImageImage?: IoRestorecommerceImageImageResolvers<ContextType>;
  IoRestorecommerceUserUserType?: IoRestorecommerceUserUserTypeResolvers;
  IoRestorecommerceAuthTokens?: IoRestorecommerceAuthTokensResolvers<ContextType>;
  GoogleProtobufAny?: GoogleProtobufAnyResolvers<ContextType>;
  IoRestorecommerceContactPointContactPoint?: IoRestorecommerceContactPointContactPointResolvers<ContextType>;
  IoRestorecommerceCustomerOrgUser?: IoRestorecommerceCustomerOrgUserResolvers<ContextType>;
  IoRestorecommerceOrganizationOrganization?: IoRestorecommerceOrganizationOrganizationResolvers<ContextType>;
  IoRestorecommerceCustomerGuest?: IoRestorecommerceCustomerGuestResolvers<ContextType>;
  ResourceContactPointServiceQuery?: ResourceContactPointServiceQueryResolvers<ContextType>;
  ProtoIoRestorecommerceContactPointContactPointListResponse?: ProtoIoRestorecommerceContactPointContactPointListResponseResolvers<ContextType>;
  IoRestorecommerceContactPointContactPointListResponse?: IoRestorecommerceContactPointContactPointListResponseResolvers<ContextType>;
  IoRestorecommerceContactPointContactPointResponse?: IoRestorecommerceContactPointContactPointResponseResolvers<ContextType>;
  ResourceLocaleServiceQuery?: ResourceLocaleServiceQueryResolvers<ContextType>;
  ProtoIoRestorecommerceLocaleLocaleListResponse?: ProtoIoRestorecommerceLocaleLocaleListResponseResolvers<ContextType>;
  IoRestorecommerceLocaleLocaleListResponse?: IoRestorecommerceLocaleLocaleListResponseResolvers<ContextType>;
  IoRestorecommerceLocaleLocaleResponse?: IoRestorecommerceLocaleLocaleResponseResolvers<ContextType>;
  ResourceLocationServiceQuery?: ResourceLocationServiceQueryResolvers<ContextType>;
  ProtoIoRestorecommerceLocationLocationListResponse?: ProtoIoRestorecommerceLocationLocationListResponseResolvers<ContextType>;
  IoRestorecommerceLocationLocationListResponse?: IoRestorecommerceLocationLocationListResponseResolvers<ContextType>;
  IoRestorecommerceLocationLocationResponse?: IoRestorecommerceLocationLocationResponseResolvers<ContextType>;
  IoRestorecommerceLocationLocation?: IoRestorecommerceLocationLocationResolvers<ContextType>;
  ResourceOrganizationServiceQuery?: ResourceOrganizationServiceQueryResolvers<ContextType>;
  ProtoIoRestorecommerceOrganizationOrganizationListResponse?: ProtoIoRestorecommerceOrganizationOrganizationListResponseResolvers<ContextType>;
  IoRestorecommerceOrganizationOrganizationListResponse?: IoRestorecommerceOrganizationOrganizationListResponseResolvers<ContextType>;
  IoRestorecommerceOrganizationOrganizationResponse?: IoRestorecommerceOrganizationOrganizationResponseResolvers<ContextType>;
  ResourceTaxTypeServiceQuery?: ResourceTaxTypeServiceQueryResolvers<ContextType>;
  ProtoIoRestorecommerceTaxTypeTaxTypeListResponse?: ProtoIoRestorecommerceTaxTypeTaxTypeListResponseResolvers<ContextType>;
  IoRestorecommerceTaxTypeTaxTypeListResponse?: IoRestorecommerceTaxTypeTaxTypeListResponseResolvers<ContextType>;
  IoRestorecommerceTaxTypeTaxTypeResponse?: IoRestorecommerceTaxTypeTaxTypeResponseResolvers<ContextType>;
  IoRestorecommerceTaxTypeTaxType?: IoRestorecommerceTaxTypeTaxTypeResolvers<ContextType>;
  IoRestorecommerceTaxTypeBehavior?: IoRestorecommerceTaxTypeBehaviorResolvers;
  ResourceTaxServiceQuery?: ResourceTaxServiceQueryResolvers<ContextType>;
  ProtoIoRestorecommerceTaxTaxListResponse?: ProtoIoRestorecommerceTaxTaxListResponseResolvers<ContextType>;
  IoRestorecommerceTaxTaxListResponse?: IoRestorecommerceTaxTaxListResponseResolvers<ContextType>;
  IoRestorecommerceTaxTaxResponse?: IoRestorecommerceTaxTaxResponseResolvers<ContextType>;
  IoRestorecommerceTaxTax?: IoRestorecommerceTaxTaxResolvers<ContextType>;
  ResourceCommandServiceQuery?: ResourceCommandServiceQueryResolvers<ContextType>;
  ProtoIoRestorecommerceCommandCommandListResponse?: ProtoIoRestorecommerceCommandCommandListResponseResolvers<ContextType>;
  IoRestorecommerceCommandCommandListResponse?: IoRestorecommerceCommandCommandListResponseResolvers<ContextType>;
  IoRestorecommerceCommandCommandResponse?: IoRestorecommerceCommandCommandResponseResolvers<ContextType>;
  IoRestorecommerceCommandCommand?: IoRestorecommerceCommandCommandResolvers<ContextType>;
  IoRestorecommerceCommandCommandParameter?: IoRestorecommerceCommandCommandParameterResolvers<ContextType>;
  IoRestorecommerceCommandCommandParameterParameterType?: IoRestorecommerceCommandCommandParameterParameterTypeResolvers;
  Mutation?: MutationResolvers<ContextType>;
  ResourceMutation?: ResourceMutationResolvers<ContextType>;
  ResourceAddressServiceMutation?: ResourceAddressServiceMutationResolvers<ContextType>;
  ProtoIoRestorecommerceResourcebaseDeleteResponse?: ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  IoRestorecommerceResourcebaseDeleteResponse?: IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  ResourceCountryServiceMutation?: ResourceCountryServiceMutationResolvers<ContextType>;
  ResourceTimezoneServiceMutation?: ResourceTimezoneServiceMutationResolvers<ContextType>;
  ResourceContactPointTypeServiceMutation?: ResourceContactPointTypeServiceMutationResolvers<ContextType>;
  ResourceCustomerServiceMutation?: ResourceCustomerServiceMutationResolvers<ContextType>;
  ResourceContactPointServiceMutation?: ResourceContactPointServiceMutationResolvers<ContextType>;
  ResourceLocaleServiceMutation?: ResourceLocaleServiceMutationResolvers<ContextType>;
  ResourceLocationServiceMutation?: ResourceLocationServiceMutationResolvers<ContextType>;
  ResourceOrganizationServiceMutation?: ResourceOrganizationServiceMutationResolvers<ContextType>;
  ResourceTaxTypeServiceMutation?: ResourceTaxTypeServiceMutationResolvers<ContextType>;
  ResourceTaxServiceMutation?: ResourceTaxServiceMutationResolvers<ContextType>;
  ResourceCommandServiceMutation?: ResourceCommandServiceMutationResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  SubscriptionOutput?: SubscriptionOutputResolvers<ContextType>;
}>;

