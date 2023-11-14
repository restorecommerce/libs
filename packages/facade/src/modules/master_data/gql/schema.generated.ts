import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { ResourceContext } from '../interfaces.js';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  GoogleProtobufAnyValue: { input: any; output: any; }
  IDateTime: { input: any; output: any; }
};

export type Query = {
  __typename?: 'Query';
  master_data: ResourceQuery;
};

export type ResourceQuery = {
  __typename?: 'ResourceQuery';
  address: ResourceAddressQuery;
  country: ResourceCountryQuery;
  timezone: ResourceTimezoneQuery;
  contact_point_type: ResourceContactPointTypeQuery;
  customer: ResourceCustomerQuery;
  contact_point: ResourceContactPointQuery;
  locale: ResourceLocaleQuery;
  location: ResourceLocationQuery;
  organization: ResourceOrganizationQuery;
  tax_type: ResourceTaxTypeQuery;
  tax: ResourceTaxQuery;
  unit_code: ResourceUnitCodeQuery;
  command: ResourceCommandQuery;
};

export type ResourceAddressQuery = {
  __typename?: 'ResourceAddressQuery';
  Read?: Maybe<ProtoIoRestorecommerceAddressAddressListResponse>;
};


export type ResourceAddressQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceAddressAddressListResponse = {
  __typename?: 'ProtoIoRestorecommerceAddressAddressListResponse';
  details?: Maybe<IoRestorecommerceAddressAddressListResponse>;
};

export type IoRestorecommerceAddressAddressListResponse = {
  __typename?: 'IoRestorecommerceAddressAddressListResponse';
  items?: Maybe<Array<IoRestorecommerceAddressAddressResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceAddressAddressResponse = {
  __typename?: 'IoRestorecommerceAddressAddressResponse';
  payload?: Maybe<IoRestorecommerceAddressAddress>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceAddressAddress = {
  __typename?: 'IoRestorecommerceAddressAddress';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  postcode?: Maybe<Scalars['String']['output']>;
  countryId?: Maybe<Scalars['String']['output']>;
  country?: Maybe<IoRestorecommerceCountryCountry>;
  locality?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  geoCoordinates?: Maybe<IoRestorecommerceAddressGeoPoint>;
  altitude?: Maybe<Scalars['Float']['output']>;
  buildingNumber?: Maybe<Scalars['String']['output']>;
  addressAddition?: Maybe<IoRestorecommerceAddressAddressAddition>;
  businessAddress?: Maybe<IoRestorecommerceAddressBusinessAddress>;
  residentialAddress?: Maybe<IoRestorecommerceAddressResidentialAddress>;
  packStation?: Maybe<IoRestorecommerceAddressPackStation>;
};

export type IoRestorecommerceMetaMeta = {
  __typename?: 'IoRestorecommerceMetaMeta';
  created?: Maybe<Scalars['DateTime']['output']>;
  modified?: Maybe<Scalars['DateTime']['output']>;
  modifiedBy?: Maybe<Scalars['String']['output']>;
  owners?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  acls?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
};

export type IoRestorecommerceAttributeAttribute = {
  __typename?: 'IoRestorecommerceAttributeAttribute';
  id?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
};

export type IoRestorecommerceCountryCountry = {
  __typename?: 'IoRestorecommerceCountryCountry';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  geographicalName?: Maybe<Scalars['String']['output']>;
  economicAreas?: Maybe<Array<Scalars['String']['output']>>;
};

export type IoRestorecommerceAddressGeoPoint = {
  __typename?: 'IoRestorecommerceAddressGeoPoint';
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

export type IoRestorecommerceAddressAddressAddition = {
  __typename?: 'IoRestorecommerceAddressAddressAddition';
  field1?: Maybe<Scalars['String']['output']>;
  field2?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceAddressBusinessAddress = {
  __typename?: 'IoRestorecommerceAddressBusinessAddress';
  name?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceAddressResidentialAddress = {
  __typename?: 'IoRestorecommerceAddressResidentialAddress';
  title?: Maybe<Scalars['String']['output']>;
  givenName?: Maybe<Scalars['String']['output']>;
  midName?: Maybe<Scalars['String']['output']>;
  familyName?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceAddressPackStation = {
  __typename?: 'IoRestorecommerceAddressPackStation';
  provider?: Maybe<Scalars['String']['output']>;
  stationNumber?: Maybe<Scalars['String']['output']>;
  postNumber?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceStatusStatus = {
  __typename?: 'IoRestorecommerceStatusStatus';
  id?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceStatusOperationStatus = {
  __typename?: 'IoRestorecommerceStatusOperationStatus';
  code?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type IIoRestorecommerceResourcebaseReadRequest = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sorts?: InputMaybe<Array<IIoRestorecommerceResourcebaseSort>>;
  filters?: InputMaybe<Array<IIoRestorecommerceResourcebaseFilterOp>>;
  fields?: InputMaybe<Array<IIoRestorecommerceResourcebaseFieldFilter>>;
  localesLimiter?: InputMaybe<Array<Scalars['String']['input']>>;
  customQueries?: InputMaybe<Array<Scalars['String']['input']>>;
  customArguments?: InputMaybe<IGoogleProtobufAny>;
  search?: InputMaybe<IIoRestorecommerceResourcebaseSearch>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceResourcebaseSort = {
  field?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<IoRestorecommerceResourcebaseSortSortOrder>;
};

export enum IoRestorecommerceResourcebaseSortSortOrder {
  Unsorted = 0,
  Ascending = 1,
  Descending = 2
}

export type IIoRestorecommerceResourcebaseFilterOp = {
  filters?: InputMaybe<Array<IIoRestorecommerceResourcebaseFilter>>;
  operator?: InputMaybe<IoRestorecommerceResourcebaseFilterOpOperator>;
};

export type IIoRestorecommerceResourcebaseFilter = {
  field?: InputMaybe<Scalars['String']['input']>;
  operation?: InputMaybe<IoRestorecommerceResourcebaseFilterOperation>;
  value?: InputMaybe<Scalars['String']['input']>;
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
  filters?: InputMaybe<Array<IIoRestorecommerceFilterFilter>>;
  operator?: InputMaybe<IoRestorecommerceFilterFilterOpOperator>;
};

export type IIoRestorecommerceFilterFilter = {
  field?: InputMaybe<Scalars['String']['input']>;
  operation?: InputMaybe<IoRestorecommerceFilterFilterOperation>;
  value?: InputMaybe<Scalars['String']['input']>;
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
  name?: InputMaybe<Scalars['String']['input']>;
  include?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IGoogleProtobufAny = {
  typeUrl?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['GoogleProtobufAnyValue']['input']>;
};

export type IIoRestorecommerceResourcebaseSearch = {
  search?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<Scalars['String']['input']>>;
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ResourceCountryQuery = {
  __typename?: 'ResourceCountryQuery';
  Read?: Maybe<ProtoIoRestorecommerceCountryCountryListResponse>;
};


export type ResourceCountryQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceCountryCountryListResponse = {
  __typename?: 'ProtoIoRestorecommerceCountryCountryListResponse';
  details?: Maybe<IoRestorecommerceCountryCountryListResponse>;
};

export type IoRestorecommerceCountryCountryListResponse = {
  __typename?: 'IoRestorecommerceCountryCountryListResponse';
  items?: Maybe<Array<IoRestorecommerceCountryCountryResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceCountryCountryResponse = {
  __typename?: 'IoRestorecommerceCountryCountryResponse';
  payload?: Maybe<IoRestorecommerceCountryCountry>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type ResourceTimezoneQuery = {
  __typename?: 'ResourceTimezoneQuery';
  Read?: Maybe<ProtoIoRestorecommerceTimezoneTimezoneListResponse>;
};


export type ResourceTimezoneQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceTimezoneTimezoneListResponse = {
  __typename?: 'ProtoIoRestorecommerceTimezoneTimezoneListResponse';
  details?: Maybe<IoRestorecommerceTimezoneTimezoneListResponse>;
};

export type IoRestorecommerceTimezoneTimezoneListResponse = {
  __typename?: 'IoRestorecommerceTimezoneTimezoneListResponse';
  items?: Maybe<Array<IoRestorecommerceTimezoneTimezoneResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceTimezoneTimezoneResponse = {
  __typename?: 'IoRestorecommerceTimezoneTimezoneResponse';
  payload?: Maybe<IoRestorecommerceTimezoneTimezone>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceTimezoneTimezone = {
  __typename?: 'IoRestorecommerceTimezoneTimezone';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  description?: Maybe<Scalars['String']['output']>;
};

export type ResourceContactPointTypeQuery = {
  __typename?: 'ResourceContactPointTypeQuery';
  Read?: Maybe<ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse>;
};


export type ResourceContactPointTypeQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse = {
  __typename?: 'ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse';
  details?: Maybe<IoRestorecommerceContactPointTypeContactPointTypeListResponse>;
};

export type IoRestorecommerceContactPointTypeContactPointTypeListResponse = {
  __typename?: 'IoRestorecommerceContactPointTypeContactPointTypeListResponse';
  items?: Maybe<Array<IoRestorecommerceContactPointTypeContactPointTypeResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceContactPointTypeContactPointTypeResponse = {
  __typename?: 'IoRestorecommerceContactPointTypeContactPointTypeResponse';
  payload?: Maybe<IoRestorecommerceContactPointTypeContactPointType>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceContactPointTypeContactPointType = {
  __typename?: 'IoRestorecommerceContactPointTypeContactPointType';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ResourceCustomerQuery = {
  __typename?: 'ResourceCustomerQuery';
  Read?: Maybe<ProtoIoRestorecommerceCustomerCustomerListResponse>;
};


export type ResourceCustomerQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceCustomerCustomerListResponse = {
  __typename?: 'ProtoIoRestorecommerceCustomerCustomerListResponse';
  details?: Maybe<IoRestorecommerceCustomerCustomerListResponse>;
};

export type IoRestorecommerceCustomerCustomerListResponse = {
  __typename?: 'IoRestorecommerceCustomerCustomerListResponse';
  items?: Maybe<Array<IoRestorecommerceCustomerCustomerResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceCustomerCustomerResponse = {
  __typename?: 'IoRestorecommerceCustomerCustomerResponse';
  payload?: Maybe<IoRestorecommerceCustomerCustomer>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceCustomerCustomer = {
  __typename?: 'IoRestorecommerceCustomerCustomer';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  private?: Maybe<IoRestorecommerceCustomerPrivate>;
  commercial?: Maybe<IoRestorecommerceCustomerCommercial>;
  publicSector?: Maybe<IoRestorecommerceCustomerPublicSector>;
};

export type IoRestorecommerceCustomerPrivate = {
  __typename?: 'IoRestorecommerceCustomerPrivate';
  userId?: Maybe<Scalars['String']['output']>;
  user?: Maybe<IoRestorecommerceUserUser>;
  contactPointIds?: Maybe<Array<Scalars['String']['output']>>;
  contactPoints?: Maybe<Array<IoRestorecommerceContactPointContactPoint>>;
};

export type IoRestorecommerceUserUser = {
  __typename?: 'IoRestorecommerceUserUser';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  newEmail?: Maybe<Scalars['String']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  activationCode?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  passwordHash?: Maybe<Scalars['String']['output']>;
  roleAssociations?: Maybe<Array<IoRestorecommerceAuthRoleAssociation>>;
  timezoneId?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<IoRestorecommerceTimezoneTimezone>;
  localeId?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<IoRestorecommerceLocaleLocale>;
  defaultScope?: Maybe<Scalars['String']['output']>;
  unauthenticated?: Maybe<Scalars['Boolean']['output']>;
  guest?: Maybe<Scalars['Boolean']['output']>;
  image?: Maybe<IoRestorecommerceImageImage>;
  userType?: Maybe<IoRestorecommerceUserUserType>;
  invite?: Maybe<Scalars['Boolean']['output']>;
  invitedByUserName?: Maybe<Scalars['String']['output']>;
  invitedByUserFirstName?: Maybe<Scalars['String']['output']>;
  invitedByUserLastName?: Maybe<Scalars['String']['output']>;
  tokens?: Maybe<Array<IoRestorecommerceAuthTokens>>;
  lastAccess?: Maybe<Scalars['DateTime']['output']>;
  data?: Maybe<GoogleProtobufAny>;
};

export type IoRestorecommerceAuthRoleAssociation = {
  __typename?: 'IoRestorecommerceAuthRoleAssociation';
  role?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  id?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
};

export type IoRestorecommerceLocaleLocale = {
  __typename?: 'IoRestorecommerceLocaleLocale';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  value?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceImageImage = {
  __typename?: 'IoRestorecommerceImageImage';
  id?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  contentType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  length?: Maybe<Scalars['Float']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  index?: Maybe<Scalars['Int']['output']>;
};

export enum IoRestorecommerceUserUserType {
  OrgUser = 0,
  IndividualUser = 1,
  Guest = 2,
  TechnicalUser = 3
}

export type IoRestorecommerceAuthTokens = {
  __typename?: 'IoRestorecommerceAuthTokens';
  name?: Maybe<Scalars['String']['output']>;
  expiresIn?: Maybe<Scalars['Float']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  scopes?: Maybe<Array<Scalars['String']['output']>>;
  type?: Maybe<Scalars['String']['output']>;
  interactive?: Maybe<Scalars['Boolean']['output']>;
  lastLogin?: Maybe<Scalars['Float']['output']>;
};

export type GoogleProtobufAny = {
  __typename?: 'GoogleProtobufAny';
  typeUrl?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['GoogleProtobufAnyValue']['output']>;
};

export type IoRestorecommerceContactPointContactPoint = {
  __typename?: 'IoRestorecommerceContactPointContactPoint';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  physicalAddressId?: Maybe<Scalars['String']['output']>;
  physicalAddress?: Maybe<IoRestorecommerceAddressAddress>;
  website?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  contactPointTypeIds?: Maybe<Array<Scalars['String']['output']>>;
  contactPointType?: Maybe<Array<IoRestorecommerceContactPointTypeContactPointType>>;
  telephone?: Maybe<Scalars['String']['output']>;
  timezoneId?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<IoRestorecommerceTimezoneTimezone>;
  localeId?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<IoRestorecommerceLocaleLocale>;
  name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceCustomerCommercial = {
  __typename?: 'IoRestorecommerceCustomerCommercial';
  organizationId?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<IoRestorecommerceOrganizationOrganization>;
};

export type IoRestorecommerceOrganizationOrganization = {
  __typename?: 'IoRestorecommerceOrganizationOrganization';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  parentId?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<IoRestorecommerceOrganizationOrganization>;
  contactPointIds?: Maybe<Array<Scalars['String']['output']>>;
  contactPoints?: Maybe<Array<IoRestorecommerceContactPointContactPoint>>;
  website?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<IoRestorecommerceImageImage>;
  vatId?: Maybe<Scalars['String']['output']>;
  isicV4?: Maybe<Scalars['String']['output']>;
  registration?: Maybe<Scalars['String']['output']>;
  registrationCourt?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  paymentMethodIds?: Maybe<Array<Scalars['String']['output']>>;
  paymentMethods?: Maybe<Array<IoRestorecommercePaymentMethodPaymentMethod>>;
  data?: Maybe<GoogleProtobufAny>;
};

export type IoRestorecommercePaymentMethodPaymentMethod = {
  __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  paymentMethod?: Maybe<IoRestorecommercePaymentMethodPaymentMethodEnum>;
  transferType?: Maybe<IoRestorecommercePaymentMethodTransferTypeEnum>;
  data?: Maybe<GoogleProtobufAny>;
};

export enum IoRestorecommercePaymentMethodPaymentMethodEnum {
  WireTransfer = 0,
  DirectDebit = 1,
  Paypal = 2
}

export enum IoRestorecommercePaymentMethodTransferTypeEnum {
  Receive = 0,
  Send = 1,
  Both = 2
}

export type IoRestorecommerceCustomerPublicSector = {
  __typename?: 'IoRestorecommerceCustomerPublicSector';
  organizationId?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<IoRestorecommerceOrganizationOrganization>;
};

export type ResourceContactPointQuery = {
  __typename?: 'ResourceContactPointQuery';
  Read?: Maybe<ProtoIoRestorecommerceContactPointContactPointListResponse>;
};


export type ResourceContactPointQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceContactPointContactPointListResponse = {
  __typename?: 'ProtoIoRestorecommerceContactPointContactPointListResponse';
  details?: Maybe<IoRestorecommerceContactPointContactPointListResponse>;
};

export type IoRestorecommerceContactPointContactPointListResponse = {
  __typename?: 'IoRestorecommerceContactPointContactPointListResponse';
  items?: Maybe<Array<IoRestorecommerceContactPointContactPointResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceContactPointContactPointResponse = {
  __typename?: 'IoRestorecommerceContactPointContactPointResponse';
  payload?: Maybe<IoRestorecommerceContactPointContactPoint>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type ResourceLocaleQuery = {
  __typename?: 'ResourceLocaleQuery';
  Read?: Maybe<ProtoIoRestorecommerceLocaleLocaleListResponse>;
};


export type ResourceLocaleQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceLocaleLocaleListResponse = {
  __typename?: 'ProtoIoRestorecommerceLocaleLocaleListResponse';
  details?: Maybe<IoRestorecommerceLocaleLocaleListResponse>;
};

export type IoRestorecommerceLocaleLocaleListResponse = {
  __typename?: 'IoRestorecommerceLocaleLocaleListResponse';
  items?: Maybe<Array<IoRestorecommerceLocaleLocaleResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceLocaleLocaleResponse = {
  __typename?: 'IoRestorecommerceLocaleLocaleResponse';
  payload?: Maybe<IoRestorecommerceLocaleLocale>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type ResourceLocationQuery = {
  __typename?: 'ResourceLocationQuery';
  Read?: Maybe<ProtoIoRestorecommerceLocationLocationListResponse>;
};


export type ResourceLocationQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceLocationLocationListResponse = {
  __typename?: 'ProtoIoRestorecommerceLocationLocationListResponse';
  details?: Maybe<IoRestorecommerceLocationLocationListResponse>;
};

export type IoRestorecommerceLocationLocationListResponse = {
  __typename?: 'IoRestorecommerceLocationLocationListResponse';
  items?: Maybe<Array<IoRestorecommerceLocationLocationResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceLocationLocationResponse = {
  __typename?: 'IoRestorecommerceLocationLocationResponse';
  payload?: Maybe<IoRestorecommerceLocationLocation>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceLocationLocation = {
  __typename?: 'IoRestorecommerceLocationLocation';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<IoRestorecommerceOrganizationOrganization>;
  parentId?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<IoRestorecommerceLocationLocation>;
  addressId?: Maybe<Scalars['String']['output']>;
  address?: Maybe<IoRestorecommerceAddressAddress>;
  data?: Maybe<GoogleProtobufAny>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ResourceOrganizationQuery = {
  __typename?: 'ResourceOrganizationQuery';
  Read?: Maybe<ProtoIoRestorecommerceOrganizationOrganizationListResponse>;
};


export type ResourceOrganizationQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceOrganizationOrganizationListResponse = {
  __typename?: 'ProtoIoRestorecommerceOrganizationOrganizationListResponse';
  details?: Maybe<IoRestorecommerceOrganizationOrganizationListResponse>;
};

export type IoRestorecommerceOrganizationOrganizationListResponse = {
  __typename?: 'IoRestorecommerceOrganizationOrganizationListResponse';
  items?: Maybe<Array<IoRestorecommerceOrganizationOrganizationResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceOrganizationOrganizationResponse = {
  __typename?: 'IoRestorecommerceOrganizationOrganizationResponse';
  payload?: Maybe<IoRestorecommerceOrganizationOrganization>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type ResourceTaxTypeQuery = {
  __typename?: 'ResourceTaxTypeQuery';
  Read?: Maybe<ProtoIoRestorecommerceTaxTypeTaxTypeListResponse>;
};


export type ResourceTaxTypeQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceTaxTypeTaxTypeListResponse = {
  __typename?: 'ProtoIoRestorecommerceTaxTypeTaxTypeListResponse';
  details?: Maybe<IoRestorecommerceTaxTypeTaxTypeListResponse>;
};

export type IoRestorecommerceTaxTypeTaxTypeListResponse = {
  __typename?: 'IoRestorecommerceTaxTypeTaxTypeListResponse';
  items?: Maybe<Array<IoRestorecommerceTaxTypeTaxTypeResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceTaxTypeTaxTypeResponse = {
  __typename?: 'IoRestorecommerceTaxTypeTaxTypeResponse';
  payload?: Maybe<IoRestorecommerceTaxTypeTaxType>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceTaxTypeTaxType = {
  __typename?: 'IoRestorecommerceTaxTypeTaxType';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  type?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
};

export type ResourceTaxQuery = {
  __typename?: 'ResourceTaxQuery';
  Read?: Maybe<ProtoIoRestorecommerceTaxTaxListResponse>;
};


export type ResourceTaxQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceTaxTaxListResponse = {
  __typename?: 'ProtoIoRestorecommerceTaxTaxListResponse';
  details?: Maybe<IoRestorecommerceTaxTaxListResponse>;
};

export type IoRestorecommerceTaxTaxListResponse = {
  __typename?: 'IoRestorecommerceTaxTaxListResponse';
  items?: Maybe<Array<IoRestorecommerceTaxTaxResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceTaxTaxResponse = {
  __typename?: 'IoRestorecommerceTaxTaxResponse';
  payload?: Maybe<IoRestorecommerceTaxTax>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceTaxTax = {
  __typename?: 'IoRestorecommerceTaxTax';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  countryId?: Maybe<Scalars['String']['output']>;
  country?: Maybe<IoRestorecommerceCountryCountry>;
  rate?: Maybe<Scalars['Float']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
  typeId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<IoRestorecommerceTaxTypeTaxType>;
};

export type ResourceUnitCodeQuery = {
  __typename?: 'ResourceUnitCodeQuery';
  Read?: Maybe<ProtoIoRestorecommerceUnitCodeUnitCodeListResponse>;
};


export type ResourceUnitCodeQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceUnitCodeUnitCodeListResponse = {
  __typename?: 'ProtoIoRestorecommerceUnitCodeUnitCodeListResponse';
  details?: Maybe<IoRestorecommerceUnitCodeUnitCodeListResponse>;
};

export type IoRestorecommerceUnitCodeUnitCodeListResponse = {
  __typename?: 'IoRestorecommerceUnitCodeUnitCodeListResponse';
  items?: Maybe<Array<IoRestorecommerceUnitCodeUnitCodeResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceUnitCodeUnitCodeResponse = {
  __typename?: 'IoRestorecommerceUnitCodeUnitCodeResponse';
  payload?: Maybe<IoRestorecommerceUnitCodeUnitCode>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceUnitCodeUnitCode = {
  __typename?: 'IoRestorecommerceUnitCodeUnitCode';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  status?: Maybe<IoRestorecommerceUnitCodeStatusCode>;
  commonCode?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  levelCategory?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  conversionFactor?: Maybe<Scalars['String']['output']>;
  groupNumber?: Maybe<Scalars['String']['output']>;
  sector?: Maybe<IoRestorecommerceUnitCodeSector>;
  groupId?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['String']['output']>;
};

export enum IoRestorecommerceUnitCodeStatusCode {
  Added = 0,
  ChangedName = 1,
  ChangedCharacteristic = 2,
  Deprecated = 3,
  MarkedAsDeleted = 4,
  Reinstated = 5
}

export enum IoRestorecommerceUnitCodeSector {
  Unknown = 0,
  Acoustics = 1,
  AtomicAndNuclearPhysics = 2,
  CharacteristicNumbers = 3,
  ElectricityAndMagnetism = 4,
  Heat = 5,
  LightAndRelatedElectromagneticRadiations = 6,
  Mechanics = 7,
  Miscellaneous = 8,
  NuclearReactionsAndIonizingRadiations = 9,
  PeriodicAndRelatedPhases = 10,
  PhysicalChemistryAndMolecularPhysics = 11,
  SolidStatePhysics = 12,
  SpaceAndTime = 13
}

export type ResourceCommandQuery = {
  __typename?: 'ResourceCommandQuery';
  Read?: Maybe<ProtoIoRestorecommerceCommandCommandListResponse>;
};


export type ResourceCommandQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceCommandCommandListResponse = {
  __typename?: 'ProtoIoRestorecommerceCommandCommandListResponse';
  details?: Maybe<IoRestorecommerceCommandCommandListResponse>;
};

export type IoRestorecommerceCommandCommandListResponse = {
  __typename?: 'IoRestorecommerceCommandCommandListResponse';
  items?: Maybe<Array<IoRestorecommerceCommandCommandResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceCommandCommandResponse = {
  __typename?: 'IoRestorecommerceCommandCommandResponse';
  payload?: Maybe<IoRestorecommerceCommandCommand>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceCommandCommand = {
  __typename?: 'IoRestorecommerceCommandCommand';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']['output']>;
  parameters?: Maybe<Array<IoRestorecommerceCommandCommandParameter>>;
  description?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceCommandCommandParameter = {
  __typename?: 'IoRestorecommerceCommandCommandParameter';
  field?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  type?: Maybe<IoRestorecommerceCommandCommandParameterParameterType>;
  properties?: Maybe<Scalars['String']['output']>;
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
  master_data: ResourceMutation;
};

export type ResourceMutation = {
  __typename?: 'ResourceMutation';
  address: ResourceAddressMutation;
  country: ResourceCountryMutation;
  timezone: ResourceTimezoneMutation;
  contact_point_type: ResourceContactPointTypeMutation;
  customer: ResourceCustomerMutation;
  contact_point: ResourceContactPointMutation;
  locale: ResourceLocaleMutation;
  location: ResourceLocationMutation;
  organization: ResourceOrganizationMutation;
  tax_type: ResourceTaxTypeMutation;
  tax: ResourceTaxMutation;
  unit_code: ResourceUnitCodeMutation;
  command: ResourceCommandMutation;
};

export type ResourceAddressMutation = {
  __typename?: 'ResourceAddressMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceAddressAddressListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type ResourceAddressMutationMutateArgs = {
  input: IIoRestorecommerceAddressAddressList;
};


export type ResourceAddressMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceAddressAddressList = {
  items?: InputMaybe<Array<IIoRestorecommerceAddressAddress>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceAddressAddress = {
  id?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  postcode?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['String']['input']>;
  locality?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  geoCoordinates?: InputMaybe<IIoRestorecommerceAddressGeoPoint>;
  altitude?: InputMaybe<Scalars['Float']['input']>;
  buildingNumber?: InputMaybe<Scalars['String']['input']>;
  addressAddition?: InputMaybe<IIoRestorecommerceAddressAddressAddition>;
  businessAddress?: InputMaybe<IIoRestorecommerceAddressBusinessAddress>;
  residentialAddress?: InputMaybe<IIoRestorecommerceAddressResidentialAddress>;
  packStation?: InputMaybe<IIoRestorecommerceAddressPackStation>;
};

export type IIoRestorecommerceMetaMeta = {
  created?: InputMaybe<Scalars['IDateTime']['input']>;
  modified?: InputMaybe<Scalars['IDateTime']['input']>;
  modifiedBy?: InputMaybe<Scalars['String']['input']>;
  owners?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  acls?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type IIoRestorecommerceAttributeAttribute = {
  id?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type IIoRestorecommerceAddressGeoPoint = {
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
};

export type IIoRestorecommerceAddressAddressAddition = {
  field1?: InputMaybe<Scalars['String']['input']>;
  field2?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceAddressBusinessAddress = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceAddressResidentialAddress = {
  title?: InputMaybe<Scalars['String']['input']>;
  givenName?: InputMaybe<Scalars['String']['input']>;
  midName?: InputMaybe<Scalars['String']['input']>;
  familyName?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceAddressPackStation = {
  provider?: InputMaybe<Scalars['String']['input']>;
  stationNumber?: InputMaybe<Scalars['String']['input']>;
  postNumber?: InputMaybe<Scalars['String']['input']>;
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
  collection?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  views?: InputMaybe<Array<Scalars['String']['input']>>;
  analyzers?: InputMaybe<Array<Scalars['String']['input']>>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type ResourceCountryMutation = {
  __typename?: 'ResourceCountryMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceCountryCountryListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type ResourceCountryMutationMutateArgs = {
  input: IIoRestorecommerceCountryCountryList;
};


export type ResourceCountryMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceCountryCountryList = {
  items?: InputMaybe<Array<IIoRestorecommerceCountryCountry>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceCountryCountry = {
  id?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  geographicalName?: InputMaybe<Scalars['String']['input']>;
  economicAreas?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ResourceTimezoneMutation = {
  __typename?: 'ResourceTimezoneMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceTimezoneTimezoneListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type ResourceTimezoneMutationMutateArgs = {
  input: IIoRestorecommerceTimezoneTimezoneList;
};


export type ResourceTimezoneMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceTimezoneTimezoneList = {
  items?: InputMaybe<Array<IIoRestorecommerceTimezoneTimezone>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceTimezoneTimezone = {
  id?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  description?: InputMaybe<Scalars['String']['input']>;
};

export type ResourceContactPointTypeMutation = {
  __typename?: 'ResourceContactPointTypeMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type ResourceContactPointTypeMutationMutateArgs = {
  input: IIoRestorecommerceContactPointTypeContactPointTypeList;
};


export type ResourceContactPointTypeMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceContactPointTypeContactPointTypeList = {
  items?: InputMaybe<Array<IIoRestorecommerceContactPointTypeContactPointType>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceContactPointTypeContactPointType = {
  id?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type ResourceCustomerMutation = {
  __typename?: 'ResourceCustomerMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceCustomerCustomerListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type ResourceCustomerMutationMutateArgs = {
  input: IIoRestorecommerceCustomerCustomerList;
};


export type ResourceCustomerMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceCustomerCustomerList = {
  items?: InputMaybe<Array<IIoRestorecommerceCustomerCustomer>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceCustomerCustomer = {
  id?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  private?: InputMaybe<IIoRestorecommerceCustomerPrivate>;
  commercial?: InputMaybe<IIoRestorecommerceCustomerCommercial>;
  publicSector?: InputMaybe<IIoRestorecommerceCustomerPublicSector>;
};

export type IIoRestorecommerceCustomerPrivate = {
  userId?: InputMaybe<Scalars['String']['input']>;
  contactPointIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type IIoRestorecommerceCustomerCommercial = {
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceCustomerPublicSector = {
  organizationId?: InputMaybe<Scalars['String']['input']>;
};

export type ResourceContactPointMutation = {
  __typename?: 'ResourceContactPointMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceContactPointContactPointListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type ResourceContactPointMutationMutateArgs = {
  input: IIoRestorecommerceContactPointContactPointList;
};


export type ResourceContactPointMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceContactPointContactPointList = {
  items?: InputMaybe<Array<IIoRestorecommerceContactPointContactPoint>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceContactPointContactPoint = {
  id?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  physicalAddressId?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  contactPointTypeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  telephone?: InputMaybe<Scalars['String']['input']>;
  timezoneId?: InputMaybe<Scalars['String']['input']>;
  localeId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
};

export type ResourceLocaleMutation = {
  __typename?: 'ResourceLocaleMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceLocaleLocaleListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type ResourceLocaleMutationMutateArgs = {
  input: IIoRestorecommerceLocaleLocaleList;
};


export type ResourceLocaleMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceLocaleLocaleList = {
  items?: InputMaybe<Array<IIoRestorecommerceLocaleLocale>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceLocaleLocale = {
  id?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  value?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
};

export type ResourceLocationMutation = {
  __typename?: 'ResourceLocationMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceLocationLocationListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type ResourceLocationMutationMutateArgs = {
  input: IIoRestorecommerceLocationLocationList;
};


export type ResourceLocationMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceLocationLocationList = {
  items?: InputMaybe<Array<IIoRestorecommerceLocationLocation>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceLocationLocation = {
  id?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['String']['input']>;
  addressId?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<IGoogleProtobufAny>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type ResourceOrganizationMutation = {
  __typename?: 'ResourceOrganizationMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceOrganizationOrganizationListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type ResourceOrganizationMutationMutateArgs = {
  input: IIoRestorecommerceOrganizationOrganizationList;
};


export type ResourceOrganizationMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceOrganizationOrganizationList = {
  items?: InputMaybe<Array<IIoRestorecommerceOrganizationOrganization>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceOrganizationOrganization = {
  id?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  parentId?: InputMaybe<Scalars['String']['input']>;
  contactPointIds?: InputMaybe<Array<Scalars['String']['input']>>;
  website?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<IIoRestorecommerceImageImage>;
  vatId?: InputMaybe<Scalars['String']['input']>;
  isicV4?: InputMaybe<Scalars['String']['input']>;
  registration?: InputMaybe<Scalars['String']['input']>;
  registrationCourt?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  paymentMethodIds?: InputMaybe<Array<Scalars['String']['input']>>;
  data?: InputMaybe<IGoogleProtobufAny>;
};

export type IIoRestorecommerceImageImage = {
  id?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  index?: InputMaybe<Scalars['Int']['input']>;
};

export type ResourceTaxTypeMutation = {
  __typename?: 'ResourceTaxTypeMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceTaxTypeTaxTypeListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type ResourceTaxTypeMutationMutateArgs = {
  input: IIoRestorecommerceTaxTypeTaxTypeList;
};


export type ResourceTaxTypeMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceTaxTypeTaxTypeList = {
  items?: InputMaybe<Array<IIoRestorecommerceTaxTypeTaxType>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceTaxTypeTaxType = {
  id?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  type?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
};

export type ResourceTaxMutation = {
  __typename?: 'ResourceTaxMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceTaxTaxListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type ResourceTaxMutationMutateArgs = {
  input: IIoRestorecommerceTaxTaxList;
};


export type ResourceTaxMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceTaxTaxList = {
  items?: InputMaybe<Array<IIoRestorecommerceTaxTax>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceTaxTax = {
  id?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  countryId?: InputMaybe<Scalars['String']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  variant?: InputMaybe<Scalars['String']['input']>;
  typeId?: InputMaybe<Scalars['String']['input']>;
};

export type ResourceUnitCodeMutation = {
  __typename?: 'ResourceUnitCodeMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceUnitCodeUnitCodeListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type ResourceUnitCodeMutationMutateArgs = {
  input: IIoRestorecommerceUnitCodeUnitCodeList;
};


export type ResourceUnitCodeMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceUnitCodeUnitCodeList = {
  items?: InputMaybe<Array<IIoRestorecommerceUnitCodeUnitCode>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceUnitCodeUnitCode = {
  id?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  status?: InputMaybe<IoRestorecommerceUnitCodeStatusCode>;
  commonCode?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  levelCategory?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  conversionFactor?: InputMaybe<Scalars['String']['input']>;
  groupNumber?: InputMaybe<Scalars['String']['input']>;
  sector?: InputMaybe<IoRestorecommerceUnitCodeSector>;
  groupId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['String']['input']>;
};

export type ResourceCommandMutation = {
  __typename?: 'ResourceCommandMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceCommandCommandListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type ResourceCommandMutationMutateArgs = {
  input: IIoRestorecommerceCommandCommandList;
};


export type ResourceCommandMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceCommandCommandList = {
  items?: InputMaybe<Array<IIoRestorecommerceCommandCommand>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceCommandCommand = {
  id?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']['input']>;
  parameters?: InputMaybe<Array<IIoRestorecommerceCommandCommandParameter>>;
  description?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceCommandCommandParameter = {
  field?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<IoRestorecommerceCommandCommandParameterParameterType>;
  properties?: InputMaybe<Scalars['String']['input']>;
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
  id?: Maybe<Scalars['String']['output']>;
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
  ResourceAddressQuery: ResolverTypeWrapper<ResourceAddressQuery>;
  ProtoIoRestorecommerceAddressAddressListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceAddressAddressListResponse>;
  IoRestorecommerceAddressAddressListResponse: ResolverTypeWrapper<IoRestorecommerceAddressAddressListResponse>;
  IoRestorecommerceAddressAddressResponse: ResolverTypeWrapper<IoRestorecommerceAddressAddressResponse>;
  IoRestorecommerceAddressAddress: ResolverTypeWrapper<IoRestorecommerceAddressAddress>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  IoRestorecommerceCountryCountry: ResolverTypeWrapper<IoRestorecommerceCountryCountry>;
  IoRestorecommerceAddressGeoPoint: ResolverTypeWrapper<IoRestorecommerceAddressGeoPoint>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  IoRestorecommerceAddressAddressAddition: ResolverTypeWrapper<IoRestorecommerceAddressAddressAddition>;
  IoRestorecommerceAddressBusinessAddress: ResolverTypeWrapper<IoRestorecommerceAddressBusinessAddress>;
  IoRestorecommerceAddressResidentialAddress: ResolverTypeWrapper<IoRestorecommerceAddressResidentialAddress>;
  IoRestorecommerceAddressPackStation: ResolverTypeWrapper<IoRestorecommerceAddressPackStation>;
  IoRestorecommerceStatusStatus: ResolverTypeWrapper<IoRestorecommerceStatusStatus>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  IGoogleProtobufAny: IGoogleProtobufAny;
  GoogleProtobufAnyValue: ResolverTypeWrapper<Scalars['GoogleProtobufAnyValue']['output']>;
  IIoRestorecommerceResourcebaseSearch: IIoRestorecommerceResourcebaseSearch;
  ResourceCountryQuery: ResolverTypeWrapper<ResourceCountryQuery>;
  ProtoIoRestorecommerceCountryCountryListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceCountryCountryListResponse>;
  IoRestorecommerceCountryCountryListResponse: ResolverTypeWrapper<IoRestorecommerceCountryCountryListResponse>;
  IoRestorecommerceCountryCountryResponse: ResolverTypeWrapper<IoRestorecommerceCountryCountryResponse>;
  ResourceTimezoneQuery: ResolverTypeWrapper<ResourceTimezoneQuery>;
  ProtoIoRestorecommerceTimezoneTimezoneListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceTimezoneTimezoneListResponse>;
  IoRestorecommerceTimezoneTimezoneListResponse: ResolverTypeWrapper<IoRestorecommerceTimezoneTimezoneListResponse>;
  IoRestorecommerceTimezoneTimezoneResponse: ResolverTypeWrapper<IoRestorecommerceTimezoneTimezoneResponse>;
  IoRestorecommerceTimezoneTimezone: ResolverTypeWrapper<IoRestorecommerceTimezoneTimezone>;
  ResourceContactPointTypeQuery: ResolverTypeWrapper<ResourceContactPointTypeQuery>;
  ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse>;
  IoRestorecommerceContactPointTypeContactPointTypeListResponse: ResolverTypeWrapper<IoRestorecommerceContactPointTypeContactPointTypeListResponse>;
  IoRestorecommerceContactPointTypeContactPointTypeResponse: ResolverTypeWrapper<IoRestorecommerceContactPointTypeContactPointTypeResponse>;
  IoRestorecommerceContactPointTypeContactPointType: ResolverTypeWrapper<IoRestorecommerceContactPointTypeContactPointType>;
  ResourceCustomerQuery: ResolverTypeWrapper<ResourceCustomerQuery>;
  ProtoIoRestorecommerceCustomerCustomerListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceCustomerCustomerListResponse>;
  IoRestorecommerceCustomerCustomerListResponse: ResolverTypeWrapper<IoRestorecommerceCustomerCustomerListResponse>;
  IoRestorecommerceCustomerCustomerResponse: ResolverTypeWrapper<IoRestorecommerceCustomerCustomerResponse>;
  IoRestorecommerceCustomerCustomer: ResolverTypeWrapper<IoRestorecommerceCustomerCustomer>;
  IoRestorecommerceCustomerPrivate: ResolverTypeWrapper<IoRestorecommerceCustomerPrivate>;
  IoRestorecommerceUserUser: ResolverTypeWrapper<IoRestorecommerceUserUser>;
  IoRestorecommerceAuthRoleAssociation: ResolverTypeWrapper<IoRestorecommerceAuthRoleAssociation>;
  IoRestorecommerceLocaleLocale: ResolverTypeWrapper<IoRestorecommerceLocaleLocale>;
  IoRestorecommerceImageImage: ResolverTypeWrapper<IoRestorecommerceImageImage>;
  IoRestorecommerceUserUserType: IoRestorecommerceUserUserType;
  IoRestorecommerceAuthTokens: ResolverTypeWrapper<IoRestorecommerceAuthTokens>;
  GoogleProtobufAny: ResolverTypeWrapper<GoogleProtobufAny>;
  IoRestorecommerceContactPointContactPoint: ResolverTypeWrapper<IoRestorecommerceContactPointContactPoint>;
  IoRestorecommerceCustomerCommercial: ResolverTypeWrapper<IoRestorecommerceCustomerCommercial>;
  IoRestorecommerceOrganizationOrganization: ResolverTypeWrapper<IoRestorecommerceOrganizationOrganization>;
  IoRestorecommercePaymentMethodPaymentMethod: ResolverTypeWrapper<IoRestorecommercePaymentMethodPaymentMethod>;
  IoRestorecommercePaymentMethodPaymentMethodEnum: IoRestorecommercePaymentMethodPaymentMethodEnum;
  IoRestorecommercePaymentMethodTransferTypeEnum: IoRestorecommercePaymentMethodTransferTypeEnum;
  IoRestorecommerceCustomerPublicSector: ResolverTypeWrapper<IoRestorecommerceCustomerPublicSector>;
  ResourceContactPointQuery: ResolverTypeWrapper<ResourceContactPointQuery>;
  ProtoIoRestorecommerceContactPointContactPointListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceContactPointContactPointListResponse>;
  IoRestorecommerceContactPointContactPointListResponse: ResolverTypeWrapper<IoRestorecommerceContactPointContactPointListResponse>;
  IoRestorecommerceContactPointContactPointResponse: ResolverTypeWrapper<IoRestorecommerceContactPointContactPointResponse>;
  ResourceLocaleQuery: ResolverTypeWrapper<ResourceLocaleQuery>;
  ProtoIoRestorecommerceLocaleLocaleListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceLocaleLocaleListResponse>;
  IoRestorecommerceLocaleLocaleListResponse: ResolverTypeWrapper<IoRestorecommerceLocaleLocaleListResponse>;
  IoRestorecommerceLocaleLocaleResponse: ResolverTypeWrapper<IoRestorecommerceLocaleLocaleResponse>;
  ResourceLocationQuery: ResolverTypeWrapper<ResourceLocationQuery>;
  ProtoIoRestorecommerceLocationLocationListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceLocationLocationListResponse>;
  IoRestorecommerceLocationLocationListResponse: ResolverTypeWrapper<IoRestorecommerceLocationLocationListResponse>;
  IoRestorecommerceLocationLocationResponse: ResolverTypeWrapper<IoRestorecommerceLocationLocationResponse>;
  IoRestorecommerceLocationLocation: ResolverTypeWrapper<IoRestorecommerceLocationLocation>;
  ResourceOrganizationQuery: ResolverTypeWrapper<ResourceOrganizationQuery>;
  ProtoIoRestorecommerceOrganizationOrganizationListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceOrganizationOrganizationListResponse>;
  IoRestorecommerceOrganizationOrganizationListResponse: ResolverTypeWrapper<IoRestorecommerceOrganizationOrganizationListResponse>;
  IoRestorecommerceOrganizationOrganizationResponse: ResolverTypeWrapper<IoRestorecommerceOrganizationOrganizationResponse>;
  ResourceTaxTypeQuery: ResolverTypeWrapper<ResourceTaxTypeQuery>;
  ProtoIoRestorecommerceTaxTypeTaxTypeListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceTaxTypeTaxTypeListResponse>;
  IoRestorecommerceTaxTypeTaxTypeListResponse: ResolverTypeWrapper<IoRestorecommerceTaxTypeTaxTypeListResponse>;
  IoRestorecommerceTaxTypeTaxTypeResponse: ResolverTypeWrapper<IoRestorecommerceTaxTypeTaxTypeResponse>;
  IoRestorecommerceTaxTypeTaxType: ResolverTypeWrapper<IoRestorecommerceTaxTypeTaxType>;
  ResourceTaxQuery: ResolverTypeWrapper<ResourceTaxQuery>;
  ProtoIoRestorecommerceTaxTaxListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceTaxTaxListResponse>;
  IoRestorecommerceTaxTaxListResponse: ResolverTypeWrapper<IoRestorecommerceTaxTaxListResponse>;
  IoRestorecommerceTaxTaxResponse: ResolverTypeWrapper<IoRestorecommerceTaxTaxResponse>;
  IoRestorecommerceTaxTax: ResolverTypeWrapper<IoRestorecommerceTaxTax>;
  ResourceUnitCodeQuery: ResolverTypeWrapper<ResourceUnitCodeQuery>;
  ProtoIoRestorecommerceUnitCodeUnitCodeListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceUnitCodeUnitCodeListResponse>;
  IoRestorecommerceUnitCodeUnitCodeListResponse: ResolverTypeWrapper<IoRestorecommerceUnitCodeUnitCodeListResponse>;
  IoRestorecommerceUnitCodeUnitCodeResponse: ResolverTypeWrapper<IoRestorecommerceUnitCodeUnitCodeResponse>;
  IoRestorecommerceUnitCodeUnitCode: ResolverTypeWrapper<IoRestorecommerceUnitCodeUnitCode>;
  IoRestorecommerceUnitCodeStatusCode: IoRestorecommerceUnitCodeStatusCode;
  IoRestorecommerceUnitCodeSector: IoRestorecommerceUnitCodeSector;
  ResourceCommandQuery: ResolverTypeWrapper<ResourceCommandQuery>;
  ProtoIoRestorecommerceCommandCommandListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceCommandCommandListResponse>;
  IoRestorecommerceCommandCommandListResponse: ResolverTypeWrapper<IoRestorecommerceCommandCommandListResponse>;
  IoRestorecommerceCommandCommandResponse: ResolverTypeWrapper<IoRestorecommerceCommandCommandResponse>;
  IoRestorecommerceCommandCommand: ResolverTypeWrapper<IoRestorecommerceCommandCommand>;
  IoRestorecommerceCommandCommandParameter: ResolverTypeWrapper<IoRestorecommerceCommandCommandParameter>;
  IoRestorecommerceCommandCommandParameterParameterType: IoRestorecommerceCommandCommandParameterParameterType;
  Mutation: ResolverTypeWrapper<{}>;
  ResourceMutation: ResolverTypeWrapper<ResourceMutation>;
  ResourceAddressMutation: ResolverTypeWrapper<ResourceAddressMutation>;
  IIoRestorecommerceAddressAddressList: IIoRestorecommerceAddressAddressList;
  IIoRestorecommerceAddressAddress: IIoRestorecommerceAddressAddress;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IDateTime: ResolverTypeWrapper<Scalars['IDateTime']['output']>;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAddressGeoPoint: IIoRestorecommerceAddressGeoPoint;
  IIoRestorecommerceAddressAddressAddition: IIoRestorecommerceAddressAddressAddition;
  IIoRestorecommerceAddressBusinessAddress: IIoRestorecommerceAddressBusinessAddress;
  IIoRestorecommerceAddressResidentialAddress: IIoRestorecommerceAddressResidentialAddress;
  IIoRestorecommerceAddressPackStation: IIoRestorecommerceAddressPackStation;
  ModeType: ModeType;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  IoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<IoRestorecommerceResourcebaseDeleteResponse>;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  ResourceCountryMutation: ResolverTypeWrapper<ResourceCountryMutation>;
  IIoRestorecommerceCountryCountryList: IIoRestorecommerceCountryCountryList;
  IIoRestorecommerceCountryCountry: IIoRestorecommerceCountryCountry;
  ResourceTimezoneMutation: ResolverTypeWrapper<ResourceTimezoneMutation>;
  IIoRestorecommerceTimezoneTimezoneList: IIoRestorecommerceTimezoneTimezoneList;
  IIoRestorecommerceTimezoneTimezone: IIoRestorecommerceTimezoneTimezone;
  ResourceContactPointTypeMutation: ResolverTypeWrapper<ResourceContactPointTypeMutation>;
  IIoRestorecommerceContactPointTypeContactPointTypeList: IIoRestorecommerceContactPointTypeContactPointTypeList;
  IIoRestorecommerceContactPointTypeContactPointType: IIoRestorecommerceContactPointTypeContactPointType;
  ResourceCustomerMutation: ResolverTypeWrapper<ResourceCustomerMutation>;
  IIoRestorecommerceCustomerCustomerList: IIoRestorecommerceCustomerCustomerList;
  IIoRestorecommerceCustomerCustomer: IIoRestorecommerceCustomerCustomer;
  IIoRestorecommerceCustomerPrivate: IIoRestorecommerceCustomerPrivate;
  IIoRestorecommerceCustomerCommercial: IIoRestorecommerceCustomerCommercial;
  IIoRestorecommerceCustomerPublicSector: IIoRestorecommerceCustomerPublicSector;
  ResourceContactPointMutation: ResolverTypeWrapper<ResourceContactPointMutation>;
  IIoRestorecommerceContactPointContactPointList: IIoRestorecommerceContactPointContactPointList;
  IIoRestorecommerceContactPointContactPoint: IIoRestorecommerceContactPointContactPoint;
  ResourceLocaleMutation: ResolverTypeWrapper<ResourceLocaleMutation>;
  IIoRestorecommerceLocaleLocaleList: IIoRestorecommerceLocaleLocaleList;
  IIoRestorecommerceLocaleLocale: IIoRestorecommerceLocaleLocale;
  ResourceLocationMutation: ResolverTypeWrapper<ResourceLocationMutation>;
  IIoRestorecommerceLocationLocationList: IIoRestorecommerceLocationLocationList;
  IIoRestorecommerceLocationLocation: IIoRestorecommerceLocationLocation;
  ResourceOrganizationMutation: ResolverTypeWrapper<ResourceOrganizationMutation>;
  IIoRestorecommerceOrganizationOrganizationList: IIoRestorecommerceOrganizationOrganizationList;
  IIoRestorecommerceOrganizationOrganization: IIoRestorecommerceOrganizationOrganization;
  IIoRestorecommerceImageImage: IIoRestorecommerceImageImage;
  ResourceTaxTypeMutation: ResolverTypeWrapper<ResourceTaxTypeMutation>;
  IIoRestorecommerceTaxTypeTaxTypeList: IIoRestorecommerceTaxTypeTaxTypeList;
  IIoRestorecommerceTaxTypeTaxType: IIoRestorecommerceTaxTypeTaxType;
  ResourceTaxMutation: ResolverTypeWrapper<ResourceTaxMutation>;
  IIoRestorecommerceTaxTaxList: IIoRestorecommerceTaxTaxList;
  IIoRestorecommerceTaxTax: IIoRestorecommerceTaxTax;
  ResourceUnitCodeMutation: ResolverTypeWrapper<ResourceUnitCodeMutation>;
  IIoRestorecommerceUnitCodeUnitCodeList: IIoRestorecommerceUnitCodeUnitCodeList;
  IIoRestorecommerceUnitCodeUnitCode: IIoRestorecommerceUnitCodeUnitCode;
  ResourceCommandMutation: ResolverTypeWrapper<ResourceCommandMutation>;
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
  ResourceAddressQuery: ResourceAddressQuery;
  ProtoIoRestorecommerceAddressAddressListResponse: ProtoIoRestorecommerceAddressAddressListResponse;
  IoRestorecommerceAddressAddressListResponse: IoRestorecommerceAddressAddressListResponse;
  IoRestorecommerceAddressAddressResponse: IoRestorecommerceAddressAddressResponse;
  IoRestorecommerceAddressAddress: IoRestorecommerceAddressAddress;
  String: Scalars['String']['output'];
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  DateTime: Scalars['DateTime']['output'];
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  IoRestorecommerceCountryCountry: IoRestorecommerceCountryCountry;
  IoRestorecommerceAddressGeoPoint: IoRestorecommerceAddressGeoPoint;
  Float: Scalars['Float']['output'];
  IoRestorecommerceAddressAddressAddition: IoRestorecommerceAddressAddressAddition;
  IoRestorecommerceAddressBusinessAddress: IoRestorecommerceAddressBusinessAddress;
  IoRestorecommerceAddressResidentialAddress: IoRestorecommerceAddressResidentialAddress;
  IoRestorecommerceAddressPackStation: IoRestorecommerceAddressPackStation;
  IoRestorecommerceStatusStatus: IoRestorecommerceStatusStatus;
  Int: Scalars['Int']['output'];
  IoRestorecommerceStatusOperationStatus: IoRestorecommerceStatusOperationStatus;
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IIoRestorecommerceResourcebaseFilterOp: IIoRestorecommerceResourcebaseFilterOp;
  IIoRestorecommerceResourcebaseFilter: IIoRestorecommerceResourcebaseFilter;
  IIoRestorecommerceFilterFilterOp: IIoRestorecommerceFilterFilterOp;
  IIoRestorecommerceFilterFilter: IIoRestorecommerceFilterFilter;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  Boolean: Scalars['Boolean']['output'];
  IGoogleProtobufAny: IGoogleProtobufAny;
  GoogleProtobufAnyValue: Scalars['GoogleProtobufAnyValue']['output'];
  IIoRestorecommerceResourcebaseSearch: IIoRestorecommerceResourcebaseSearch;
  ResourceCountryQuery: ResourceCountryQuery;
  ProtoIoRestorecommerceCountryCountryListResponse: ProtoIoRestorecommerceCountryCountryListResponse;
  IoRestorecommerceCountryCountryListResponse: IoRestorecommerceCountryCountryListResponse;
  IoRestorecommerceCountryCountryResponse: IoRestorecommerceCountryCountryResponse;
  ResourceTimezoneQuery: ResourceTimezoneQuery;
  ProtoIoRestorecommerceTimezoneTimezoneListResponse: ProtoIoRestorecommerceTimezoneTimezoneListResponse;
  IoRestorecommerceTimezoneTimezoneListResponse: IoRestorecommerceTimezoneTimezoneListResponse;
  IoRestorecommerceTimezoneTimezoneResponse: IoRestorecommerceTimezoneTimezoneResponse;
  IoRestorecommerceTimezoneTimezone: IoRestorecommerceTimezoneTimezone;
  ResourceContactPointTypeQuery: ResourceContactPointTypeQuery;
  ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse: ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse;
  IoRestorecommerceContactPointTypeContactPointTypeListResponse: IoRestorecommerceContactPointTypeContactPointTypeListResponse;
  IoRestorecommerceContactPointTypeContactPointTypeResponse: IoRestorecommerceContactPointTypeContactPointTypeResponse;
  IoRestorecommerceContactPointTypeContactPointType: IoRestorecommerceContactPointTypeContactPointType;
  ResourceCustomerQuery: ResourceCustomerQuery;
  ProtoIoRestorecommerceCustomerCustomerListResponse: ProtoIoRestorecommerceCustomerCustomerListResponse;
  IoRestorecommerceCustomerCustomerListResponse: IoRestorecommerceCustomerCustomerListResponse;
  IoRestorecommerceCustomerCustomerResponse: IoRestorecommerceCustomerCustomerResponse;
  IoRestorecommerceCustomerCustomer: IoRestorecommerceCustomerCustomer;
  IoRestorecommerceCustomerPrivate: IoRestorecommerceCustomerPrivate;
  IoRestorecommerceUserUser: IoRestorecommerceUserUser;
  IoRestorecommerceAuthRoleAssociation: IoRestorecommerceAuthRoleAssociation;
  IoRestorecommerceLocaleLocale: IoRestorecommerceLocaleLocale;
  IoRestorecommerceImageImage: IoRestorecommerceImageImage;
  IoRestorecommerceAuthTokens: IoRestorecommerceAuthTokens;
  GoogleProtobufAny: GoogleProtobufAny;
  IoRestorecommerceContactPointContactPoint: IoRestorecommerceContactPointContactPoint;
  IoRestorecommerceCustomerCommercial: IoRestorecommerceCustomerCommercial;
  IoRestorecommerceOrganizationOrganization: IoRestorecommerceOrganizationOrganization;
  IoRestorecommercePaymentMethodPaymentMethod: IoRestorecommercePaymentMethodPaymentMethod;
  IoRestorecommerceCustomerPublicSector: IoRestorecommerceCustomerPublicSector;
  ResourceContactPointQuery: ResourceContactPointQuery;
  ProtoIoRestorecommerceContactPointContactPointListResponse: ProtoIoRestorecommerceContactPointContactPointListResponse;
  IoRestorecommerceContactPointContactPointListResponse: IoRestorecommerceContactPointContactPointListResponse;
  IoRestorecommerceContactPointContactPointResponse: IoRestorecommerceContactPointContactPointResponse;
  ResourceLocaleQuery: ResourceLocaleQuery;
  ProtoIoRestorecommerceLocaleLocaleListResponse: ProtoIoRestorecommerceLocaleLocaleListResponse;
  IoRestorecommerceLocaleLocaleListResponse: IoRestorecommerceLocaleLocaleListResponse;
  IoRestorecommerceLocaleLocaleResponse: IoRestorecommerceLocaleLocaleResponse;
  ResourceLocationQuery: ResourceLocationQuery;
  ProtoIoRestorecommerceLocationLocationListResponse: ProtoIoRestorecommerceLocationLocationListResponse;
  IoRestorecommerceLocationLocationListResponse: IoRestorecommerceLocationLocationListResponse;
  IoRestorecommerceLocationLocationResponse: IoRestorecommerceLocationLocationResponse;
  IoRestorecommerceLocationLocation: IoRestorecommerceLocationLocation;
  ResourceOrganizationQuery: ResourceOrganizationQuery;
  ProtoIoRestorecommerceOrganizationOrganizationListResponse: ProtoIoRestorecommerceOrganizationOrganizationListResponse;
  IoRestorecommerceOrganizationOrganizationListResponse: IoRestorecommerceOrganizationOrganizationListResponse;
  IoRestorecommerceOrganizationOrganizationResponse: IoRestorecommerceOrganizationOrganizationResponse;
  ResourceTaxTypeQuery: ResourceTaxTypeQuery;
  ProtoIoRestorecommerceTaxTypeTaxTypeListResponse: ProtoIoRestorecommerceTaxTypeTaxTypeListResponse;
  IoRestorecommerceTaxTypeTaxTypeListResponse: IoRestorecommerceTaxTypeTaxTypeListResponse;
  IoRestorecommerceTaxTypeTaxTypeResponse: IoRestorecommerceTaxTypeTaxTypeResponse;
  IoRestorecommerceTaxTypeTaxType: IoRestorecommerceTaxTypeTaxType;
  ResourceTaxQuery: ResourceTaxQuery;
  ProtoIoRestorecommerceTaxTaxListResponse: ProtoIoRestorecommerceTaxTaxListResponse;
  IoRestorecommerceTaxTaxListResponse: IoRestorecommerceTaxTaxListResponse;
  IoRestorecommerceTaxTaxResponse: IoRestorecommerceTaxTaxResponse;
  IoRestorecommerceTaxTax: IoRestorecommerceTaxTax;
  ResourceUnitCodeQuery: ResourceUnitCodeQuery;
  ProtoIoRestorecommerceUnitCodeUnitCodeListResponse: ProtoIoRestorecommerceUnitCodeUnitCodeListResponse;
  IoRestorecommerceUnitCodeUnitCodeListResponse: IoRestorecommerceUnitCodeUnitCodeListResponse;
  IoRestorecommerceUnitCodeUnitCodeResponse: IoRestorecommerceUnitCodeUnitCodeResponse;
  IoRestorecommerceUnitCodeUnitCode: IoRestorecommerceUnitCodeUnitCode;
  ResourceCommandQuery: ResourceCommandQuery;
  ProtoIoRestorecommerceCommandCommandListResponse: ProtoIoRestorecommerceCommandCommandListResponse;
  IoRestorecommerceCommandCommandListResponse: IoRestorecommerceCommandCommandListResponse;
  IoRestorecommerceCommandCommandResponse: IoRestorecommerceCommandCommandResponse;
  IoRestorecommerceCommandCommand: IoRestorecommerceCommandCommand;
  IoRestorecommerceCommandCommandParameter: IoRestorecommerceCommandCommandParameter;
  Mutation: {};
  ResourceMutation: ResourceMutation;
  ResourceAddressMutation: ResourceAddressMutation;
  IIoRestorecommerceAddressAddressList: IIoRestorecommerceAddressAddressList;
  IIoRestorecommerceAddressAddress: IIoRestorecommerceAddressAddress;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IDateTime: Scalars['IDateTime']['output'];
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAddressGeoPoint: IIoRestorecommerceAddressGeoPoint;
  IIoRestorecommerceAddressAddressAddition: IIoRestorecommerceAddressAddressAddition;
  IIoRestorecommerceAddressBusinessAddress: IIoRestorecommerceAddressBusinessAddress;
  IIoRestorecommerceAddressResidentialAddress: IIoRestorecommerceAddressResidentialAddress;
  IIoRestorecommerceAddressPackStation: IIoRestorecommerceAddressPackStation;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ProtoIoRestorecommerceResourcebaseDeleteResponse;
  IoRestorecommerceResourcebaseDeleteResponse: IoRestorecommerceResourcebaseDeleteResponse;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  ResourceCountryMutation: ResourceCountryMutation;
  IIoRestorecommerceCountryCountryList: IIoRestorecommerceCountryCountryList;
  IIoRestorecommerceCountryCountry: IIoRestorecommerceCountryCountry;
  ResourceTimezoneMutation: ResourceTimezoneMutation;
  IIoRestorecommerceTimezoneTimezoneList: IIoRestorecommerceTimezoneTimezoneList;
  IIoRestorecommerceTimezoneTimezone: IIoRestorecommerceTimezoneTimezone;
  ResourceContactPointTypeMutation: ResourceContactPointTypeMutation;
  IIoRestorecommerceContactPointTypeContactPointTypeList: IIoRestorecommerceContactPointTypeContactPointTypeList;
  IIoRestorecommerceContactPointTypeContactPointType: IIoRestorecommerceContactPointTypeContactPointType;
  ResourceCustomerMutation: ResourceCustomerMutation;
  IIoRestorecommerceCustomerCustomerList: IIoRestorecommerceCustomerCustomerList;
  IIoRestorecommerceCustomerCustomer: IIoRestorecommerceCustomerCustomer;
  IIoRestorecommerceCustomerPrivate: IIoRestorecommerceCustomerPrivate;
  IIoRestorecommerceCustomerCommercial: IIoRestorecommerceCustomerCommercial;
  IIoRestorecommerceCustomerPublicSector: IIoRestorecommerceCustomerPublicSector;
  ResourceContactPointMutation: ResourceContactPointMutation;
  IIoRestorecommerceContactPointContactPointList: IIoRestorecommerceContactPointContactPointList;
  IIoRestorecommerceContactPointContactPoint: IIoRestorecommerceContactPointContactPoint;
  ResourceLocaleMutation: ResourceLocaleMutation;
  IIoRestorecommerceLocaleLocaleList: IIoRestorecommerceLocaleLocaleList;
  IIoRestorecommerceLocaleLocale: IIoRestorecommerceLocaleLocale;
  ResourceLocationMutation: ResourceLocationMutation;
  IIoRestorecommerceLocationLocationList: IIoRestorecommerceLocationLocationList;
  IIoRestorecommerceLocationLocation: IIoRestorecommerceLocationLocation;
  ResourceOrganizationMutation: ResourceOrganizationMutation;
  IIoRestorecommerceOrganizationOrganizationList: IIoRestorecommerceOrganizationOrganizationList;
  IIoRestorecommerceOrganizationOrganization: IIoRestorecommerceOrganizationOrganization;
  IIoRestorecommerceImageImage: IIoRestorecommerceImageImage;
  ResourceTaxTypeMutation: ResourceTaxTypeMutation;
  IIoRestorecommerceTaxTypeTaxTypeList: IIoRestorecommerceTaxTypeTaxTypeList;
  IIoRestorecommerceTaxTypeTaxType: IIoRestorecommerceTaxTypeTaxType;
  ResourceTaxMutation: ResourceTaxMutation;
  IIoRestorecommerceTaxTaxList: IIoRestorecommerceTaxTaxList;
  IIoRestorecommerceTaxTax: IIoRestorecommerceTaxTax;
  ResourceUnitCodeMutation: ResourceUnitCodeMutation;
  IIoRestorecommerceUnitCodeUnitCodeList: IIoRestorecommerceUnitCodeUnitCodeList;
  IIoRestorecommerceUnitCodeUnitCode: IIoRestorecommerceUnitCodeUnitCode;
  ResourceCommandMutation: ResourceCommandMutation;
  IIoRestorecommerceCommandCommandList: IIoRestorecommerceCommandCommandList;
  IIoRestorecommerceCommandCommand: IIoRestorecommerceCommandCommand;
  IIoRestorecommerceCommandCommandParameter: IIoRestorecommerceCommandCommandParameter;
  Subscription: {};
  SubscriptionOutput: SubscriptionOutput;
}>;

export type QueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  master_data?: Resolver<ResolversTypes['ResourceQuery'], ParentType, ContextType>;
}>;

export type ResourceQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceQuery'] = ResolversParentTypes['ResourceQuery']> = ResolversObject<{
  address?: Resolver<ResolversTypes['ResourceAddressQuery'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['ResourceCountryQuery'], ParentType, ContextType>;
  timezone?: Resolver<ResolversTypes['ResourceTimezoneQuery'], ParentType, ContextType>;
  contact_point_type?: Resolver<ResolversTypes['ResourceContactPointTypeQuery'], ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['ResourceCustomerQuery'], ParentType, ContextType>;
  contact_point?: Resolver<ResolversTypes['ResourceContactPointQuery'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['ResourceLocaleQuery'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['ResourceLocationQuery'], ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['ResourceOrganizationQuery'], ParentType, ContextType>;
  tax_type?: Resolver<ResolversTypes['ResourceTaxTypeQuery'], ParentType, ContextType>;
  tax?: Resolver<ResolversTypes['ResourceTaxQuery'], ParentType, ContextType>;
  unit_code?: Resolver<ResolversTypes['ResourceUnitCodeQuery'], ParentType, ContextType>;
  command?: Resolver<ResolversTypes['ResourceCommandQuery'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceAddressQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceAddressQuery'] = ResolversParentTypes['ResourceAddressQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceAddressAddressListResponse']>, ParentType, ContextType, RequireFields<ResourceAddressQueryReadArgs, 'input'>>;
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
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  modified?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  modifiedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owners?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  acls?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
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

export type ResourceCountryQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceCountryQuery'] = ResolversParentTypes['ResourceCountryQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCountryCountryListResponse']>, ParentType, ContextType, RequireFields<ResourceCountryQueryReadArgs, 'input'>>;
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

export type ResourceTimezoneQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceTimezoneQuery'] = ResolversParentTypes['ResourceTimezoneQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTimezoneTimezoneListResponse']>, ParentType, ContextType, RequireFields<ResourceTimezoneQueryReadArgs, 'input'>>;
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

export type ResourceContactPointTypeQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceContactPointTypeQuery'] = ResolversParentTypes['ResourceContactPointTypeQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse']>, ParentType, ContextType, RequireFields<ResourceContactPointTypeQueryReadArgs, 'input'>>;
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

export type ResourceCustomerQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceCustomerQuery'] = ResolversParentTypes['ResourceCustomerQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCustomerCustomerListResponse']>, ParentType, ContextType, RequireFields<ResourceCustomerQueryReadArgs, 'input'>>;
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
  private?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCustomerPrivate']>, ParentType, ContextType>;
  commercial?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCustomerCommercial']>, ParentType, ContextType>;
  publicSector?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCustomerPublicSector']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCustomerPrivateResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerPrivate'] = ResolversParentTypes['IoRestorecommerceCustomerPrivate']> = ResolversObject<{
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUser']>, ParentType, ContextType>;
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
  lastAccess?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthRoleAssociationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthRoleAssociation'] = ResolversParentTypes['IoRestorecommerceAuthRoleAssociation']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
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
  contactPointTypeIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  contactPointType?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceContactPointTypeContactPointType']>>, ParentType, ContextType>;
  telephone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezoneId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['IoRestorecommerceTimezoneTimezone']>, ParentType, ContextType>;
  localeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['IoRestorecommerceLocaleLocale']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCustomerCommercialResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerCommercial'] = ResolversParentTypes['IoRestorecommerceCustomerCommercial']> = ResolversObject<{
  organizationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrganizationOrganization']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOrganizationOrganizationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceOrganizationOrganization'] = ResolversParentTypes['IoRestorecommerceOrganizationOrganization']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrganizationOrganization']>, ParentType, ContextType>;
  contactPointIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  contactPoints?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceContactPointContactPoint']>>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['IoRestorecommerceImageImage']>, ParentType, ContextType>;
  vatId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isicV4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  registration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  registrationCourt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paymentMethodIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  paymentMethods?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommercePaymentMethodPaymentMethod']>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePaymentMethodPaymentMethodResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommercePaymentMethodPaymentMethod'] = ResolversParentTypes['IoRestorecommercePaymentMethodPaymentMethod']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  paymentMethod?: Resolver<Maybe<ResolversTypes['IoRestorecommercePaymentMethodPaymentMethodEnum']>, ParentType, ContextType>;
  transferType?: Resolver<Maybe<ResolversTypes['IoRestorecommercePaymentMethodTransferTypeEnum']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePaymentMethodPaymentMethodEnumResolvers = { WIRE_TRANSFER: 0, DIRECT_DEBIT: 1, PAYPAL: 2 };

export type IoRestorecommercePaymentMethodTransferTypeEnumResolvers = { RECEIVE: 0, SEND: 1, BOTH: 2 };

export type IoRestorecommerceCustomerPublicSectorResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerPublicSector'] = ResolversParentTypes['IoRestorecommerceCustomerPublicSector']> = ResolversObject<{
  organizationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrganizationOrganization']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceContactPointQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceContactPointQuery'] = ResolversParentTypes['ResourceContactPointQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceContactPointContactPointListResponse']>, ParentType, ContextType, RequireFields<ResourceContactPointQueryReadArgs, 'input'>>;
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

export type ResourceLocaleQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceLocaleQuery'] = ResolversParentTypes['ResourceLocaleQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceLocaleLocaleListResponse']>, ParentType, ContextType, RequireFields<ResourceLocaleQueryReadArgs, 'input'>>;
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

export type ResourceLocationQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceLocationQuery'] = ResolversParentTypes['ResourceLocationQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceLocationLocationListResponse']>, ParentType, ContextType, RequireFields<ResourceLocationQueryReadArgs, 'input'>>;
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

export type ResourceOrganizationQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceOrganizationQuery'] = ResolversParentTypes['ResourceOrganizationQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOrganizationOrganizationListResponse']>, ParentType, ContextType, RequireFields<ResourceOrganizationQueryReadArgs, 'input'>>;
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

export type ResourceTaxTypeQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceTaxTypeQuery'] = ResolversParentTypes['ResourceTaxTypeQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTaxTypeTaxTypeListResponse']>, ParentType, ContextType, RequireFields<ResourceTaxTypeQueryReadArgs, 'input'>>;
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
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceTaxQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceTaxQuery'] = ResolversParentTypes['ResourceTaxQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTaxTaxListResponse']>, ParentType, ContextType, RequireFields<ResourceTaxQueryReadArgs, 'input'>>;
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

export type ResourceUnitCodeQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceUnitCodeQuery'] = ResolversParentTypes['ResourceUnitCodeQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUnitCodeUnitCodeListResponse']>, ParentType, ContextType, RequireFields<ResourceUnitCodeQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceUnitCodeUnitCodeListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceUnitCodeUnitCodeListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceUnitCodeUnitCodeListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUnitCodeUnitCodeListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUnitCodeUnitCodeListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceUnitCodeUnitCodeListResponse'] = ResolversParentTypes['IoRestorecommerceUnitCodeUnitCodeListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceUnitCodeUnitCodeResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUnitCodeUnitCodeResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceUnitCodeUnitCodeResponse'] = ResolversParentTypes['IoRestorecommerceUnitCodeUnitCodeResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUnitCodeUnitCode']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUnitCodeUnitCodeResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceUnitCodeUnitCode'] = ResolversParentTypes['IoRestorecommerceUnitCodeUnitCode']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUnitCodeStatusCode']>, ParentType, ContextType>;
  commonCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  levelCategory?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conversionFactor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  groupNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sector?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUnitCodeSector']>, ParentType, ContextType>;
  groupId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUnitCodeStatusCodeResolvers = { ADDED: 0, CHANGED_NAME: 1, CHANGED_CHARACTERISTIC: 2, DEPRECATED: 3, MARKED_AS_DELETED: 4, REINSTATED: 5 };

export type IoRestorecommerceUnitCodeSectorResolvers = { UNKNOWN: 0, ACOUSTICS: 1, ATOMIC_AND_NUCLEAR_PHYSICS: 2, CHARACTERISTIC_NUMBERS: 3, ELECTRICITY_AND_MAGNETISM: 4, HEAT: 5, LIGHT_AND_RELATED_ELECTROMAGNETIC_RADIATIONS: 6, MECHANICS: 7, MISCELLANEOUS: 8, NUCLEAR_REACTIONS_AND_IONIZING_RADIATIONS: 9, PERIODIC_AND_RELATED_PHASES: 10, PHYSICAL_CHEMISTRY_AND_MOLECULAR_PHYSICS: 11, SOLID_STATE_PHYSICS: 12, SPACE_AND_TIME: 13 };

export type ResourceCommandQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceCommandQuery'] = ResolversParentTypes['ResourceCommandQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCommandCommandListResponse']>, ParentType, ContextType, RequireFields<ResourceCommandQueryReadArgs, 'input'>>;
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
  master_data?: Resolver<ResolversTypes['ResourceMutation'], ParentType, ContextType>;
}>;

export type ResourceMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceMutation'] = ResolversParentTypes['ResourceMutation']> = ResolversObject<{
  address?: Resolver<ResolversTypes['ResourceAddressMutation'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['ResourceCountryMutation'], ParentType, ContextType>;
  timezone?: Resolver<ResolversTypes['ResourceTimezoneMutation'], ParentType, ContextType>;
  contact_point_type?: Resolver<ResolversTypes['ResourceContactPointTypeMutation'], ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['ResourceCustomerMutation'], ParentType, ContextType>;
  contact_point?: Resolver<ResolversTypes['ResourceContactPointMutation'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['ResourceLocaleMutation'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['ResourceLocationMutation'], ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['ResourceOrganizationMutation'], ParentType, ContextType>;
  tax_type?: Resolver<ResolversTypes['ResourceTaxTypeMutation'], ParentType, ContextType>;
  tax?: Resolver<ResolversTypes['ResourceTaxMutation'], ParentType, ContextType>;
  unit_code?: Resolver<ResolversTypes['ResourceUnitCodeMutation'], ParentType, ContextType>;
  command?: Resolver<ResolversTypes['ResourceCommandMutation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceAddressMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceAddressMutation'] = ResolversParentTypes['ResourceAddressMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceAddressAddressListResponse']>, ParentType, ContextType, RequireFields<ResourceAddressMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<ResourceAddressMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface IDateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IDateTime'], any> {
  name: 'IDateTime';
}

export type ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  status?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceStatusStatus']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceCountryMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceCountryMutation'] = ResolversParentTypes['ResourceCountryMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCountryCountryListResponse']>, ParentType, ContextType, RequireFields<ResourceCountryMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<ResourceCountryMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceTimezoneMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceTimezoneMutation'] = ResolversParentTypes['ResourceTimezoneMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTimezoneTimezoneListResponse']>, ParentType, ContextType, RequireFields<ResourceTimezoneMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<ResourceTimezoneMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceContactPointTypeMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceContactPointTypeMutation'] = ResolversParentTypes['ResourceContactPointTypeMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse']>, ParentType, ContextType, RequireFields<ResourceContactPointTypeMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<ResourceContactPointTypeMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceCustomerMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceCustomerMutation'] = ResolversParentTypes['ResourceCustomerMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCustomerCustomerListResponse']>, ParentType, ContextType, RequireFields<ResourceCustomerMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<ResourceCustomerMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceContactPointMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceContactPointMutation'] = ResolversParentTypes['ResourceContactPointMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceContactPointContactPointListResponse']>, ParentType, ContextType, RequireFields<ResourceContactPointMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<ResourceContactPointMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceLocaleMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceLocaleMutation'] = ResolversParentTypes['ResourceLocaleMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceLocaleLocaleListResponse']>, ParentType, ContextType, RequireFields<ResourceLocaleMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<ResourceLocaleMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceLocationMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceLocationMutation'] = ResolversParentTypes['ResourceLocationMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceLocationLocationListResponse']>, ParentType, ContextType, RequireFields<ResourceLocationMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<ResourceLocationMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceOrganizationMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceOrganizationMutation'] = ResolversParentTypes['ResourceOrganizationMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOrganizationOrganizationListResponse']>, ParentType, ContextType, RequireFields<ResourceOrganizationMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<ResourceOrganizationMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceTaxTypeMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceTaxTypeMutation'] = ResolversParentTypes['ResourceTaxTypeMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTaxTypeTaxTypeListResponse']>, ParentType, ContextType, RequireFields<ResourceTaxTypeMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<ResourceTaxTypeMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceTaxMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceTaxMutation'] = ResolversParentTypes['ResourceTaxMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTaxTaxListResponse']>, ParentType, ContextType, RequireFields<ResourceTaxMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<ResourceTaxMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceUnitCodeMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceUnitCodeMutation'] = ResolversParentTypes['ResourceUnitCodeMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUnitCodeUnitCodeListResponse']>, ParentType, ContextType, RequireFields<ResourceUnitCodeMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<ResourceUnitCodeMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceCommandMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceCommandMutation'] = ResolversParentTypes['ResourceCommandMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCommandCommandListResponse']>, ParentType, ContextType, RequireFields<ResourceCommandMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<ResourceCommandMutationDeleteArgs, 'input'>>;
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
  ResourceAddressQuery?: ResourceAddressQueryResolvers<ContextType>;
  ProtoIoRestorecommerceAddressAddressListResponse?: ProtoIoRestorecommerceAddressAddressListResponseResolvers<ContextType>;
  IoRestorecommerceAddressAddressListResponse?: IoRestorecommerceAddressAddressListResponseResolvers<ContextType>;
  IoRestorecommerceAddressAddressResponse?: IoRestorecommerceAddressAddressResponseResolvers<ContextType>;
  IoRestorecommerceAddressAddress?: IoRestorecommerceAddressAddressResolvers<ContextType>;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
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
  ResourceCountryQuery?: ResourceCountryQueryResolvers<ContextType>;
  ProtoIoRestorecommerceCountryCountryListResponse?: ProtoIoRestorecommerceCountryCountryListResponseResolvers<ContextType>;
  IoRestorecommerceCountryCountryListResponse?: IoRestorecommerceCountryCountryListResponseResolvers<ContextType>;
  IoRestorecommerceCountryCountryResponse?: IoRestorecommerceCountryCountryResponseResolvers<ContextType>;
  ResourceTimezoneQuery?: ResourceTimezoneQueryResolvers<ContextType>;
  ProtoIoRestorecommerceTimezoneTimezoneListResponse?: ProtoIoRestorecommerceTimezoneTimezoneListResponseResolvers<ContextType>;
  IoRestorecommerceTimezoneTimezoneListResponse?: IoRestorecommerceTimezoneTimezoneListResponseResolvers<ContextType>;
  IoRestorecommerceTimezoneTimezoneResponse?: IoRestorecommerceTimezoneTimezoneResponseResolvers<ContextType>;
  IoRestorecommerceTimezoneTimezone?: IoRestorecommerceTimezoneTimezoneResolvers<ContextType>;
  ResourceContactPointTypeQuery?: ResourceContactPointTypeQueryResolvers<ContextType>;
  ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse?: ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponseResolvers<ContextType>;
  IoRestorecommerceContactPointTypeContactPointTypeListResponse?: IoRestorecommerceContactPointTypeContactPointTypeListResponseResolvers<ContextType>;
  IoRestorecommerceContactPointTypeContactPointTypeResponse?: IoRestorecommerceContactPointTypeContactPointTypeResponseResolvers<ContextType>;
  IoRestorecommerceContactPointTypeContactPointType?: IoRestorecommerceContactPointTypeContactPointTypeResolvers<ContextType>;
  ResourceCustomerQuery?: ResourceCustomerQueryResolvers<ContextType>;
  ProtoIoRestorecommerceCustomerCustomerListResponse?: ProtoIoRestorecommerceCustomerCustomerListResponseResolvers<ContextType>;
  IoRestorecommerceCustomerCustomerListResponse?: IoRestorecommerceCustomerCustomerListResponseResolvers<ContextType>;
  IoRestorecommerceCustomerCustomerResponse?: IoRestorecommerceCustomerCustomerResponseResolvers<ContextType>;
  IoRestorecommerceCustomerCustomer?: IoRestorecommerceCustomerCustomerResolvers<ContextType>;
  IoRestorecommerceCustomerPrivate?: IoRestorecommerceCustomerPrivateResolvers<ContextType>;
  IoRestorecommerceUserUser?: IoRestorecommerceUserUserResolvers<ContextType>;
  IoRestorecommerceAuthRoleAssociation?: IoRestorecommerceAuthRoleAssociationResolvers<ContextType>;
  IoRestorecommerceLocaleLocale?: IoRestorecommerceLocaleLocaleResolvers<ContextType>;
  IoRestorecommerceImageImage?: IoRestorecommerceImageImageResolvers<ContextType>;
  IoRestorecommerceUserUserType?: IoRestorecommerceUserUserTypeResolvers;
  IoRestorecommerceAuthTokens?: IoRestorecommerceAuthTokensResolvers<ContextType>;
  GoogleProtobufAny?: GoogleProtobufAnyResolvers<ContextType>;
  IoRestorecommerceContactPointContactPoint?: IoRestorecommerceContactPointContactPointResolvers<ContextType>;
  IoRestorecommerceCustomerCommercial?: IoRestorecommerceCustomerCommercialResolvers<ContextType>;
  IoRestorecommerceOrganizationOrganization?: IoRestorecommerceOrganizationOrganizationResolvers<ContextType>;
  IoRestorecommercePaymentMethodPaymentMethod?: IoRestorecommercePaymentMethodPaymentMethodResolvers<ContextType>;
  IoRestorecommercePaymentMethodPaymentMethodEnum?: IoRestorecommercePaymentMethodPaymentMethodEnumResolvers;
  IoRestorecommercePaymentMethodTransferTypeEnum?: IoRestorecommercePaymentMethodTransferTypeEnumResolvers;
  IoRestorecommerceCustomerPublicSector?: IoRestorecommerceCustomerPublicSectorResolvers<ContextType>;
  ResourceContactPointQuery?: ResourceContactPointQueryResolvers<ContextType>;
  ProtoIoRestorecommerceContactPointContactPointListResponse?: ProtoIoRestorecommerceContactPointContactPointListResponseResolvers<ContextType>;
  IoRestorecommerceContactPointContactPointListResponse?: IoRestorecommerceContactPointContactPointListResponseResolvers<ContextType>;
  IoRestorecommerceContactPointContactPointResponse?: IoRestorecommerceContactPointContactPointResponseResolvers<ContextType>;
  ResourceLocaleQuery?: ResourceLocaleQueryResolvers<ContextType>;
  ProtoIoRestorecommerceLocaleLocaleListResponse?: ProtoIoRestorecommerceLocaleLocaleListResponseResolvers<ContextType>;
  IoRestorecommerceLocaleLocaleListResponse?: IoRestorecommerceLocaleLocaleListResponseResolvers<ContextType>;
  IoRestorecommerceLocaleLocaleResponse?: IoRestorecommerceLocaleLocaleResponseResolvers<ContextType>;
  ResourceLocationQuery?: ResourceLocationQueryResolvers<ContextType>;
  ProtoIoRestorecommerceLocationLocationListResponse?: ProtoIoRestorecommerceLocationLocationListResponseResolvers<ContextType>;
  IoRestorecommerceLocationLocationListResponse?: IoRestorecommerceLocationLocationListResponseResolvers<ContextType>;
  IoRestorecommerceLocationLocationResponse?: IoRestorecommerceLocationLocationResponseResolvers<ContextType>;
  IoRestorecommerceLocationLocation?: IoRestorecommerceLocationLocationResolvers<ContextType>;
  ResourceOrganizationQuery?: ResourceOrganizationQueryResolvers<ContextType>;
  ProtoIoRestorecommerceOrganizationOrganizationListResponse?: ProtoIoRestorecommerceOrganizationOrganizationListResponseResolvers<ContextType>;
  IoRestorecommerceOrganizationOrganizationListResponse?: IoRestorecommerceOrganizationOrganizationListResponseResolvers<ContextType>;
  IoRestorecommerceOrganizationOrganizationResponse?: IoRestorecommerceOrganizationOrganizationResponseResolvers<ContextType>;
  ResourceTaxTypeQuery?: ResourceTaxTypeQueryResolvers<ContextType>;
  ProtoIoRestorecommerceTaxTypeTaxTypeListResponse?: ProtoIoRestorecommerceTaxTypeTaxTypeListResponseResolvers<ContextType>;
  IoRestorecommerceTaxTypeTaxTypeListResponse?: IoRestorecommerceTaxTypeTaxTypeListResponseResolvers<ContextType>;
  IoRestorecommerceTaxTypeTaxTypeResponse?: IoRestorecommerceTaxTypeTaxTypeResponseResolvers<ContextType>;
  IoRestorecommerceTaxTypeTaxType?: IoRestorecommerceTaxTypeTaxTypeResolvers<ContextType>;
  ResourceTaxQuery?: ResourceTaxQueryResolvers<ContextType>;
  ProtoIoRestorecommerceTaxTaxListResponse?: ProtoIoRestorecommerceTaxTaxListResponseResolvers<ContextType>;
  IoRestorecommerceTaxTaxListResponse?: IoRestorecommerceTaxTaxListResponseResolvers<ContextType>;
  IoRestorecommerceTaxTaxResponse?: IoRestorecommerceTaxTaxResponseResolvers<ContextType>;
  IoRestorecommerceTaxTax?: IoRestorecommerceTaxTaxResolvers<ContextType>;
  ResourceUnitCodeQuery?: ResourceUnitCodeQueryResolvers<ContextType>;
  ProtoIoRestorecommerceUnitCodeUnitCodeListResponse?: ProtoIoRestorecommerceUnitCodeUnitCodeListResponseResolvers<ContextType>;
  IoRestorecommerceUnitCodeUnitCodeListResponse?: IoRestorecommerceUnitCodeUnitCodeListResponseResolvers<ContextType>;
  IoRestorecommerceUnitCodeUnitCodeResponse?: IoRestorecommerceUnitCodeUnitCodeResponseResolvers<ContextType>;
  IoRestorecommerceUnitCodeUnitCode?: IoRestorecommerceUnitCodeUnitCodeResolvers<ContextType>;
  IoRestorecommerceUnitCodeStatusCode?: IoRestorecommerceUnitCodeStatusCodeResolvers;
  IoRestorecommerceUnitCodeSector?: IoRestorecommerceUnitCodeSectorResolvers;
  ResourceCommandQuery?: ResourceCommandQueryResolvers<ContextType>;
  ProtoIoRestorecommerceCommandCommandListResponse?: ProtoIoRestorecommerceCommandCommandListResponseResolvers<ContextType>;
  IoRestorecommerceCommandCommandListResponse?: IoRestorecommerceCommandCommandListResponseResolvers<ContextType>;
  IoRestorecommerceCommandCommandResponse?: IoRestorecommerceCommandCommandResponseResolvers<ContextType>;
  IoRestorecommerceCommandCommand?: IoRestorecommerceCommandCommandResolvers<ContextType>;
  IoRestorecommerceCommandCommandParameter?: IoRestorecommerceCommandCommandParameterResolvers<ContextType>;
  IoRestorecommerceCommandCommandParameterParameterType?: IoRestorecommerceCommandCommandParameterParameterTypeResolvers;
  Mutation?: MutationResolvers<ContextType>;
  ResourceMutation?: ResourceMutationResolvers<ContextType>;
  ResourceAddressMutation?: ResourceAddressMutationResolvers<ContextType>;
  IDateTime?: GraphQLScalarType;
  ProtoIoRestorecommerceResourcebaseDeleteResponse?: ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  IoRestorecommerceResourcebaseDeleteResponse?: IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  ResourceCountryMutation?: ResourceCountryMutationResolvers<ContextType>;
  ResourceTimezoneMutation?: ResourceTimezoneMutationResolvers<ContextType>;
  ResourceContactPointTypeMutation?: ResourceContactPointTypeMutationResolvers<ContextType>;
  ResourceCustomerMutation?: ResourceCustomerMutationResolvers<ContextType>;
  ResourceContactPointMutation?: ResourceContactPointMutationResolvers<ContextType>;
  ResourceLocaleMutation?: ResourceLocaleMutationResolvers<ContextType>;
  ResourceLocationMutation?: ResourceLocationMutationResolvers<ContextType>;
  ResourceOrganizationMutation?: ResourceOrganizationMutationResolvers<ContextType>;
  ResourceTaxTypeMutation?: ResourceTaxTypeMutationResolvers<ContextType>;
  ResourceTaxMutation?: ResourceTaxMutationResolvers<ContextType>;
  ResourceUnitCodeMutation?: ResourceUnitCodeMutationResolvers<ContextType>;
  ResourceCommandMutation?: ResourceCommandMutationResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  SubscriptionOutput?: SubscriptionOutputResolvers<ContextType>;
}>;

