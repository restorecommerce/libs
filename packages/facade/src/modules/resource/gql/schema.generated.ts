import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { ResourceContext } from '../interfaces';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
  TodoScalar: any;
};

export type Query = {
  __typename?: 'Query';
  resource: ResourceQuery;
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
  tax: ResourceTaxQuery;
  tax_type: ResourceTaxTypeQuery;
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
  status: StatusType;
  details?: Maybe<IoRestorecommerceAddressAddressListResponse>;
};

/** Objects with error returned for GraphQL operations */
export type StatusType = {
  __typename?: 'StatusType';
  /** Status ID */
  id: Scalars['String'];
  /** Status code */
  code: Scalars['Int'];
  /** Status message description */
  message?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceAddressAddressListResponse = {
  __typename?: 'IoRestorecommerceAddressAddressListResponse';
  items?: Maybe<Array<IoRestorecommerceAddressAddressResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
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
  locality?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  geoCoordinates?: Maybe<IoRestorecommerceAddressAddressGeoPoint>;
  altitude?: Maybe<Scalars['Float']>;
  buildingNumber?: Maybe<Scalars['String']>;
  addressAddition?: Maybe<IoRestorecommerceAddressAddressAddition>;
};

export type IoRestorecommerceMetaMeta = {
  __typename?: 'IoRestorecommerceMetaMeta';
  created?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['Float']>;
  modifiedBy?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
};

export type IoRestorecommerceAttributeAttribute = {
  __typename?: 'IoRestorecommerceAttributeAttribute';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceAddressAddressGeoPoint = {
  __typename?: 'IoRestorecommerceAddressAddressGeoPoint';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type IoRestorecommerceAddressAddressAddition = {
  __typename?: 'IoRestorecommerceAddressAddressAddition';
  field1?: Maybe<Scalars['String']>;
  field2?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceStatusStatus = {
  __typename?: 'IoRestorecommerceStatusStatus';
  id?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceResourcebaseReadRequest = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<IIoRestorecommerceResourcebaseSort>>;
  filters?: Maybe<Array<IIoRestorecommerceResourcebaseFilterOp>>;
  field?: Maybe<Array<IIoRestorecommerceResourcebaseFieldFilter>>;
  search?: Maybe<Array<Scalars['String']>>;
  localesLimiter?: Maybe<Array<Scalars['String']>>;
  customQueries?: Maybe<Array<Scalars['String']>>;
  customArguments?: Maybe<IGoogleProtobufAny>;
};

export type IIoRestorecommerceResourcebaseSort = {
  field?: Maybe<Scalars['String']>;
  order?: Maybe<IoRestorecommerceResourcebaseSortSortOrder>;
};

export enum IoRestorecommerceResourcebaseSortSortOrder {
  Unsorted = 0,
  Ascending = 1,
  Descending = 2
}

export type IIoRestorecommerceResourcebaseFilterOp = {
  filter?: Maybe<Array<IIoRestorecommerceResourcebaseFilter>>;
};

export type IIoRestorecommerceResourcebaseFilter = {
  field?: Maybe<Scalars['String']>;
  operation?: Maybe<IoRestorecommerceResourcebaseFilterOperation>;
  value?: Maybe<Scalars['String']>;
  type?: Maybe<IoRestorecommerceResourcebaseFilterValueType>;
  filters?: Maybe<Array<IIoRestorecommerceResourcebaseFilterOp>>;
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

export type IIoRestorecommerceResourcebaseFieldFilter = {
  name?: Maybe<Scalars['String']>;
  include?: Maybe<Scalars['Boolean']>;
};

export type IGoogleProtobufAny = {
  typeUrl?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Upload']>;
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
  status: StatusType;
  details?: Maybe<IoRestorecommerceCountryCountryListResponse>;
};

export type IoRestorecommerceCountryCountryListResponse = {
  __typename?: 'IoRestorecommerceCountryCountryListResponse';
  items?: Maybe<Array<IoRestorecommerceCountryCountryResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceCountryCountryResponse = {
  __typename?: 'IoRestorecommerceCountryCountryResponse';
  payload?: Maybe<IoRestorecommerceCountryCountry>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
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

export type ResourceTimezoneQuery = {
  __typename?: 'ResourceTimezoneQuery';
  Read?: Maybe<ProtoIoRestorecommerceTimezoneTimezoneListResponse>;
};


export type ResourceTimezoneQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceTimezoneTimezoneListResponse = {
  __typename?: 'ProtoIoRestorecommerceTimezoneTimezoneListResponse';
  status: StatusType;
  details?: Maybe<IoRestorecommerceTimezoneTimezoneListResponse>;
};

export type IoRestorecommerceTimezoneTimezoneListResponse = {
  __typename?: 'IoRestorecommerceTimezoneTimezoneListResponse';
  items?: Maybe<Array<IoRestorecommerceTimezoneTimezoneResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
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

export type ResourceContactPointTypeQuery = {
  __typename?: 'ResourceContactPointTypeQuery';
  Read?: Maybe<ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse>;
};


export type ResourceContactPointTypeQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse = {
  __typename?: 'ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse';
  status: StatusType;
  details?: Maybe<IoRestorecommerceContactPointTypeContactPointTypeListResponse>;
};

export type IoRestorecommerceContactPointTypeContactPointTypeListResponse = {
  __typename?: 'IoRestorecommerceContactPointTypeContactPointTypeListResponse';
  items?: Maybe<Array<IoRestorecommerceContactPointTypeContactPointTypeResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
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

export type ResourceCustomerQuery = {
  __typename?: 'ResourceCustomerQuery';
  Read?: Maybe<ProtoIoRestorecommerceCustomerCustomerListResponse>;
};


export type ResourceCustomerQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceCustomerCustomerListResponse = {
  __typename?: 'ProtoIoRestorecommerceCustomerCustomerListResponse';
  status: StatusType;
  details?: Maybe<IoRestorecommerceCustomerCustomerListResponse>;
};

export type IoRestorecommerceCustomerCustomerListResponse = {
  __typename?: 'IoRestorecommerceCustomerCustomerListResponse';
  items?: Maybe<Array<IoRestorecommerceCustomerCustomerResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
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
  addressId?: Maybe<Scalars['String']>;
  contactPointIds?: Maybe<Array<Scalars['String']>>;
};

export type IoRestorecommerceCustomerOrgUser = {
  __typename?: 'IoRestorecommerceCustomerOrgUser';
  userId?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceCustomerGuest = {
  __typename?: 'IoRestorecommerceCustomerGuest';
  guest?: Maybe<Scalars['Boolean']>;
  addressId?: Maybe<Scalars['String']>;
  contactPointIds?: Maybe<Array<Scalars['String']>>;
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
  status: StatusType;
  details?: Maybe<IoRestorecommerceContactPointContactPointListResponse>;
};

export type IoRestorecommerceContactPointContactPointListResponse = {
  __typename?: 'IoRestorecommerceContactPointContactPointListResponse';
  items?: Maybe<Array<IoRestorecommerceContactPointContactPointResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceContactPointContactPointResponse = {
  __typename?: 'IoRestorecommerceContactPointContactPointResponse';
  payload?: Maybe<IoRestorecommerceContactPointContactPoint>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceContactPointContactPoint = {
  __typename?: 'IoRestorecommerceContactPointContactPoint';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  physicalAddressId?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  contactPointTypeId?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
  timezoneId?: Maybe<Scalars['String']>;
  localeId?: Maybe<Scalars['String']>;
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
  status: StatusType;
  details?: Maybe<IoRestorecommerceLocaleLocaleListResponse>;
};

export type IoRestorecommerceLocaleLocaleListResponse = {
  __typename?: 'IoRestorecommerceLocaleLocaleListResponse';
  items?: Maybe<Array<IoRestorecommerceLocaleLocaleResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceLocaleLocaleResponse = {
  __typename?: 'IoRestorecommerceLocaleLocaleResponse';
  payload?: Maybe<IoRestorecommerceLocaleLocale>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceLocaleLocale = {
  __typename?: 'IoRestorecommerceLocaleLocale';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  value?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
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
  status: StatusType;
  details?: Maybe<IoRestorecommerceLocationLocationListResponse>;
};

export type IoRestorecommerceLocationLocationListResponse = {
  __typename?: 'IoRestorecommerceLocationLocationListResponse';
  items?: Maybe<Array<IoRestorecommerceLocationLocationResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
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
  parentId?: Maybe<Scalars['String']>;
  childrenIds?: Maybe<Array<Scalars['String']>>;
  addressId?: Maybe<Scalars['String']>;
  data?: Maybe<GoogleProtobufAny>;
};

export type GoogleProtobufAny = {
  __typename?: 'GoogleProtobufAny';
  typeUrl?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['TodoScalar']>;
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
  status: StatusType;
  details?: Maybe<IoRestorecommerceOrganizationOrganizationListResponse>;
};

export type IoRestorecommerceOrganizationOrganizationListResponse = {
  __typename?: 'IoRestorecommerceOrganizationOrganizationListResponse';
  items?: Maybe<Array<IoRestorecommerceOrganizationOrganizationResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceOrganizationOrganizationResponse = {
  __typename?: 'IoRestorecommerceOrganizationOrganizationResponse';
  payload?: Maybe<IoRestorecommerceOrganizationOrganization>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceOrganizationOrganization = {
  __typename?: 'IoRestorecommerceOrganizationOrganization';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  addressId?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['String']>;
  childrenIds?: Maybe<Array<Scalars['String']>>;
  contactPointIds?: Maybe<Array<Scalars['String']>>;
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

export type ResourceTaxQuery = {
  __typename?: 'ResourceTaxQuery';
  Read?: Maybe<ProtoIoRestorecommerceTaxTaxListResponse>;
};


export type ResourceTaxQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceTaxTaxListResponse = {
  __typename?: 'ProtoIoRestorecommerceTaxTaxListResponse';
  status: StatusType;
  details?: Maybe<IoRestorecommerceTaxTaxListResponse>;
};

export type IoRestorecommerceTaxTaxListResponse = {
  __typename?: 'IoRestorecommerceTaxTaxListResponse';
  items?: Maybe<Array<IoRestorecommerceTaxTaxResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
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
  rate?: Maybe<Scalars['Float']>;
  variant?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
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
  status: StatusType;
  details?: Maybe<IoRestorecommerceTaxTypeTaxTypeListResponse>;
};

export type IoRestorecommerceTaxTypeTaxTypeListResponse = {
  __typename?: 'IoRestorecommerceTaxTypeTaxTypeListResponse';
  items?: Maybe<Array<IoRestorecommerceTaxTypeTaxTypeResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
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
};

export type ResourceCommandQuery = {
  __typename?: 'ResourceCommandQuery';
  Read?: Maybe<ProtoIoRestorecommerceCommandCommandListResponse>;
};


export type ResourceCommandQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceCommandCommandListResponse = {
  __typename?: 'ProtoIoRestorecommerceCommandCommandListResponse';
  status: StatusType;
  details?: Maybe<IoRestorecommerceCommandCommandListResponse>;
};

export type IoRestorecommerceCommandCommandListResponse = {
  __typename?: 'IoRestorecommerceCommandCommandListResponse';
  items?: Maybe<Array<IoRestorecommerceCommandCommandResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
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
  address: ResourceAddressMutation;
  country: ResourceCountryMutation;
  timezone: ResourceTimezoneMutation;
  contact_point_type: ResourceContactPointTypeMutation;
  customer: ResourceCustomerMutation;
  contact_point: ResourceContactPointMutation;
  locale: ResourceLocaleMutation;
  location: ResourceLocationMutation;
  organization: ResourceOrganizationMutation;
  tax: ResourceTaxMutation;
  tax_type: ResourceTaxTypeMutation;
  command: ResourceCommandMutation;
};

export type ResourceAddressMutation = {
  __typename?: 'ResourceAddressMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceAddressAddressListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceStatusStatusArray>;
};


export type ResourceAddressMutationMutateArgs = {
  input: IIoRestorecommerceAddressAddressList;
};


export type ResourceAddressMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceAddressAddressList = {
  items?: Maybe<Array<IIoRestorecommerceAddressAddress>>;
  totalCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<ModeType>;
};

export type IIoRestorecommerceAddressAddress = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  postcode?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['String']>;
  locality?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  geoCoordinates?: Maybe<IIoRestorecommerceAddressAddressGeoPoint>;
  altitude?: Maybe<Scalars['Float']>;
  buildingNumber?: Maybe<Scalars['String']>;
  addressAddition?: Maybe<IIoRestorecommerceAddressAddressAddition>;
};

export type IIoRestorecommerceMetaMeta = {
  created?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['Float']>;
  modifiedBy?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type IIoRestorecommerceAttributeAttribute = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceAddressAddressGeoPoint = {
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type IIoRestorecommerceAddressAddressAddition = {
  field1?: Maybe<Scalars['String']>;
  field2?: Maybe<Scalars['String']>;
};

export enum ModeType {
  Create = 'CREATE',
  Update = 'UPDATE',
  Upsert = 'UPSERT'
}

export type ProtoIoRestorecommerceStatusStatusArray = {
  __typename?: 'ProtoIoRestorecommerceStatusStatusArray';
  status: StatusType;
  details?: Maybe<IoRestorecommerceStatusStatusArray>;
};

export type IoRestorecommerceStatusStatusArray = {
  __typename?: 'IoRestorecommerceStatusStatusArray';
  status?: Maybe<Array<IoRestorecommerceStatusStatus>>;
};

export type IIoRestorecommerceResourcebaseDeleteRequest = {
  collection?: Maybe<Scalars['Boolean']>;
  ids?: Maybe<Array<Scalars['String']>>;
};

export type ResourceCountryMutation = {
  __typename?: 'ResourceCountryMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceCountryCountryListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceStatusStatusArray>;
};


export type ResourceCountryMutationMutateArgs = {
  input: IIoRestorecommerceCountryCountryList;
};


export type ResourceCountryMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceCountryCountryList = {
  items?: Maybe<Array<IIoRestorecommerceCountryCountry>>;
  totalCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<ModeType>;
};

export type IIoRestorecommerceCountryCountry = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  geographicalName?: Maybe<Scalars['String']>;
  economicAreas?: Maybe<Array<Scalars['String']>>;
};

export type ResourceTimezoneMutation = {
  __typename?: 'ResourceTimezoneMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceTimezoneTimezoneListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceStatusStatusArray>;
};


export type ResourceTimezoneMutationMutateArgs = {
  input: IIoRestorecommerceTimezoneTimezoneList;
};


export type ResourceTimezoneMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceTimezoneTimezoneList = {
  items?: Maybe<Array<IIoRestorecommerceTimezoneTimezone>>;
  totalCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<ModeType>;
};

export type IIoRestorecommerceTimezoneTimezone = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  description?: Maybe<Scalars['String']>;
};

export type ResourceContactPointTypeMutation = {
  __typename?: 'ResourceContactPointTypeMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceStatusStatusArray>;
};


export type ResourceContactPointTypeMutationMutateArgs = {
  input: IIoRestorecommerceContactPointTypeContactPointTypeList;
};


export type ResourceContactPointTypeMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceContactPointTypeContactPointTypeList = {
  items?: Maybe<Array<IIoRestorecommerceContactPointTypeContactPointType>>;
  totalCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<ModeType>;
};

export type IIoRestorecommerceContactPointTypeContactPointType = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  type?: Maybe<Scalars['String']>;
};

export type ResourceCustomerMutation = {
  __typename?: 'ResourceCustomerMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceCustomerCustomerListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceStatusStatusArray>;
};


export type ResourceCustomerMutationMutateArgs = {
  input: IIoRestorecommerceCustomerCustomerList;
};


export type ResourceCustomerMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceCustomerCustomerList = {
  items?: Maybe<Array<IIoRestorecommerceCustomerCustomer>>;
  totalCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<ModeType>;
};

export type IIoRestorecommerceCustomerCustomer = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  individualUser?: Maybe<IIoRestorecommerceCustomerIndividualUser>;
  orgUser?: Maybe<IIoRestorecommerceCustomerOrgUser>;
  guest?: Maybe<IIoRestorecommerceCustomerGuest>;
};

export type IIoRestorecommerceCustomerIndividualUser = {
  userId?: Maybe<Scalars['String']>;
  addressId?: Maybe<Scalars['String']>;
  contactPointIds?: Maybe<Array<Scalars['String']>>;
};

export type IIoRestorecommerceCustomerOrgUser = {
  userId?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceCustomerGuest = {
  guest?: Maybe<Scalars['Boolean']>;
  addressId?: Maybe<Scalars['String']>;
  contactPointIds?: Maybe<Array<Scalars['String']>>;
};

export type ResourceContactPointMutation = {
  __typename?: 'ResourceContactPointMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceContactPointContactPointListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceStatusStatusArray>;
};


export type ResourceContactPointMutationMutateArgs = {
  input: IIoRestorecommerceContactPointContactPointList;
};


export type ResourceContactPointMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceContactPointContactPointList = {
  items?: Maybe<Array<IIoRestorecommerceContactPointContactPoint>>;
  totalCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<ModeType>;
};

export type IIoRestorecommerceContactPointContactPoint = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  physicalAddressId?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  contactPointTypeId?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
  timezoneId?: Maybe<Scalars['String']>;
  localeId?: Maybe<Scalars['String']>;
};

export type ResourceLocaleMutation = {
  __typename?: 'ResourceLocaleMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceLocaleLocaleListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceStatusStatusArray>;
};


export type ResourceLocaleMutationMutateArgs = {
  input: IIoRestorecommerceLocaleLocaleList;
};


export type ResourceLocaleMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceLocaleLocaleList = {
  items?: Maybe<Array<IIoRestorecommerceLocaleLocale>>;
  totalCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<ModeType>;
};

export type IIoRestorecommerceLocaleLocale = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  value?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ResourceLocationMutation = {
  __typename?: 'ResourceLocationMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceLocationLocationListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceStatusStatusArray>;
};


export type ResourceLocationMutationMutateArgs = {
  input: IIoRestorecommerceLocationLocationList;
};


export type ResourceLocationMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceLocationLocationList = {
  items?: Maybe<Array<IIoRestorecommerceLocationLocation>>;
  totalCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<ModeType>;
};

export type IIoRestorecommerceLocationLocation = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['String']>;
  childrenIds?: Maybe<Array<Scalars['String']>>;
  addressId?: Maybe<Scalars['String']>;
  data?: Maybe<IGoogleProtobufAny>;
};

export type ResourceOrganizationMutation = {
  __typename?: 'ResourceOrganizationMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceOrganizationOrganizationListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceStatusStatusArray>;
};


export type ResourceOrganizationMutationMutateArgs = {
  input: IIoRestorecommerceOrganizationOrganizationList;
};


export type ResourceOrganizationMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceOrganizationOrganizationList = {
  items?: Maybe<Array<IIoRestorecommerceOrganizationOrganization>>;
  totalCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<ModeType>;
};

export type IIoRestorecommerceOrganizationOrganization = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  addressId?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['String']>;
  childrenIds?: Maybe<Array<Scalars['String']>>;
  contactPointIds?: Maybe<Array<Scalars['String']>>;
  website?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  vatId?: Maybe<Scalars['String']>;
  isicV4?: Maybe<Scalars['String']>;
  registration?: Maybe<Scalars['String']>;
  registrationCourt?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  paymentMethodIds?: Maybe<Array<Scalars['String']>>;
  data?: Maybe<IGoogleProtobufAny>;
};

export type ResourceTaxMutation = {
  __typename?: 'ResourceTaxMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceTaxTaxListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceStatusStatusArray>;
};


export type ResourceTaxMutationMutateArgs = {
  input: IIoRestorecommerceTaxTaxList;
};


export type ResourceTaxMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceTaxTaxList = {
  items?: Maybe<Array<IIoRestorecommerceTaxTax>>;
  totalCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<ModeType>;
};

export type IIoRestorecommerceTaxTax = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  countryId?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Float']>;
  variant?: Maybe<Scalars['String']>;
  typeId?: Maybe<Scalars['String']>;
};

export type ResourceTaxTypeMutation = {
  __typename?: 'ResourceTaxTypeMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceTaxTypeTaxTypeListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceStatusStatusArray>;
};


export type ResourceTaxTypeMutationMutateArgs = {
  input: IIoRestorecommerceTaxTypeTaxTypeList;
};


export type ResourceTaxTypeMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceTaxTypeTaxTypeList = {
  items?: Maybe<Array<IIoRestorecommerceTaxTypeTaxType>>;
  totalCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<ModeType>;
};

export type IIoRestorecommerceTaxTypeTaxType = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ResourceCommandMutation = {
  __typename?: 'ResourceCommandMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceCommandCommandListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceStatusStatusArray>;
};


export type ResourceCommandMutationMutateArgs = {
  input: IIoRestorecommerceCommandCommandList;
};


export type ResourceCommandMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceCommandCommandList = {
  items?: Maybe<Array<IIoRestorecommerceCommandCommand>>;
  totalCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<ModeType>;
};

export type IIoRestorecommerceCommandCommand = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  parameters?: Maybe<Array<IIoRestorecommerceCommandCommandParameter>>;
  description?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceCommandCommandParameter = {
  field?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<IoRestorecommerceCommandCommandParameterParameterType>;
  properties?: Maybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

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
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  ResourceQuery: ResolverTypeWrapper<ResourceQuery>;
  ResourceAddressQuery: ResolverTypeWrapper<ResourceAddressQuery>;
  ProtoIoRestorecommerceAddressAddressListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceAddressAddressListResponse>;
  StatusType: ResolverTypeWrapper<StatusType>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IoRestorecommerceAddressAddressListResponse: ResolverTypeWrapper<IoRestorecommerceAddressAddressListResponse>;
  IoRestorecommerceAddressAddressResponse: ResolverTypeWrapper<IoRestorecommerceAddressAddressResponse>;
  IoRestorecommerceAddressAddress: ResolverTypeWrapper<IoRestorecommerceAddressAddress>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  IoRestorecommerceAddressAddressGeoPoint: ResolverTypeWrapper<IoRestorecommerceAddressAddressGeoPoint>;
  IoRestorecommerceAddressAddressAddition: ResolverTypeWrapper<IoRestorecommerceAddressAddressAddition>;
  IoRestorecommerceStatusStatus: ResolverTypeWrapper<IoRestorecommerceStatusStatus>;
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IoRestorecommerceResourcebaseSortSortOrder: IoRestorecommerceResourcebaseSortSortOrder;
  IIoRestorecommerceResourcebaseFilterOp: IIoRestorecommerceResourcebaseFilterOp;
  IIoRestorecommerceResourcebaseFilter: IIoRestorecommerceResourcebaseFilter;
  IoRestorecommerceResourcebaseFilterOperation: IoRestorecommerceResourcebaseFilterOperation;
  IoRestorecommerceResourcebaseFilterValueType: IoRestorecommerceResourcebaseFilterValueType;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  IGoogleProtobufAny: IGoogleProtobufAny;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  ResourceCountryQuery: ResolverTypeWrapper<ResourceCountryQuery>;
  ProtoIoRestorecommerceCountryCountryListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceCountryCountryListResponse>;
  IoRestorecommerceCountryCountryListResponse: ResolverTypeWrapper<IoRestorecommerceCountryCountryListResponse>;
  IoRestorecommerceCountryCountryResponse: ResolverTypeWrapper<IoRestorecommerceCountryCountryResponse>;
  IoRestorecommerceCountryCountry: ResolverTypeWrapper<IoRestorecommerceCountryCountry>;
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
  IoRestorecommerceCustomerIndividualUser: ResolverTypeWrapper<IoRestorecommerceCustomerIndividualUser>;
  IoRestorecommerceCustomerOrgUser: ResolverTypeWrapper<IoRestorecommerceCustomerOrgUser>;
  IoRestorecommerceCustomerGuest: ResolverTypeWrapper<IoRestorecommerceCustomerGuest>;
  ResourceContactPointQuery: ResolverTypeWrapper<ResourceContactPointQuery>;
  ProtoIoRestorecommerceContactPointContactPointListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceContactPointContactPointListResponse>;
  IoRestorecommerceContactPointContactPointListResponse: ResolverTypeWrapper<IoRestorecommerceContactPointContactPointListResponse>;
  IoRestorecommerceContactPointContactPointResponse: ResolverTypeWrapper<IoRestorecommerceContactPointContactPointResponse>;
  IoRestorecommerceContactPointContactPoint: ResolverTypeWrapper<IoRestorecommerceContactPointContactPoint>;
  ResourceLocaleQuery: ResolverTypeWrapper<ResourceLocaleQuery>;
  ProtoIoRestorecommerceLocaleLocaleListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceLocaleLocaleListResponse>;
  IoRestorecommerceLocaleLocaleListResponse: ResolverTypeWrapper<IoRestorecommerceLocaleLocaleListResponse>;
  IoRestorecommerceLocaleLocaleResponse: ResolverTypeWrapper<IoRestorecommerceLocaleLocaleResponse>;
  IoRestorecommerceLocaleLocale: ResolverTypeWrapper<IoRestorecommerceLocaleLocale>;
  ResourceLocationQuery: ResolverTypeWrapper<ResourceLocationQuery>;
  ProtoIoRestorecommerceLocationLocationListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceLocationLocationListResponse>;
  IoRestorecommerceLocationLocationListResponse: ResolverTypeWrapper<IoRestorecommerceLocationLocationListResponse>;
  IoRestorecommerceLocationLocationResponse: ResolverTypeWrapper<IoRestorecommerceLocationLocationResponse>;
  IoRestorecommerceLocationLocation: ResolverTypeWrapper<IoRestorecommerceLocationLocation>;
  GoogleProtobufAny: ResolverTypeWrapper<GoogleProtobufAny>;
  TodoScalar: ResolverTypeWrapper<Scalars['TodoScalar']>;
  ResourceOrganizationQuery: ResolverTypeWrapper<ResourceOrganizationQuery>;
  ProtoIoRestorecommerceOrganizationOrganizationListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceOrganizationOrganizationListResponse>;
  IoRestorecommerceOrganizationOrganizationListResponse: ResolverTypeWrapper<IoRestorecommerceOrganizationOrganizationListResponse>;
  IoRestorecommerceOrganizationOrganizationResponse: ResolverTypeWrapper<IoRestorecommerceOrganizationOrganizationResponse>;
  IoRestorecommerceOrganizationOrganization: ResolverTypeWrapper<IoRestorecommerceOrganizationOrganization>;
  ResourceTaxQuery: ResolverTypeWrapper<ResourceTaxQuery>;
  ProtoIoRestorecommerceTaxTaxListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceTaxTaxListResponse>;
  IoRestorecommerceTaxTaxListResponse: ResolverTypeWrapper<IoRestorecommerceTaxTaxListResponse>;
  IoRestorecommerceTaxTaxResponse: ResolverTypeWrapper<IoRestorecommerceTaxTaxResponse>;
  IoRestorecommerceTaxTax: ResolverTypeWrapper<IoRestorecommerceTaxTax>;
  ResourceTaxTypeQuery: ResolverTypeWrapper<ResourceTaxTypeQuery>;
  ProtoIoRestorecommerceTaxTypeTaxTypeListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceTaxTypeTaxTypeListResponse>;
  IoRestorecommerceTaxTypeTaxTypeListResponse: ResolverTypeWrapper<IoRestorecommerceTaxTypeTaxTypeListResponse>;
  IoRestorecommerceTaxTypeTaxTypeResponse: ResolverTypeWrapper<IoRestorecommerceTaxTypeTaxTypeResponse>;
  IoRestorecommerceTaxTypeTaxType: ResolverTypeWrapper<IoRestorecommerceTaxTypeTaxType>;
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
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAddressAddressGeoPoint: IIoRestorecommerceAddressAddressGeoPoint;
  IIoRestorecommerceAddressAddressAddition: IIoRestorecommerceAddressAddressAddition;
  ModeType: ModeType;
  ProtoIoRestorecommerceStatusStatusArray: ResolverTypeWrapper<ProtoIoRestorecommerceStatusStatusArray>;
  IoRestorecommerceStatusStatusArray: ResolverTypeWrapper<IoRestorecommerceStatusStatusArray>;
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
  IIoRestorecommerceCustomerIndividualUser: IIoRestorecommerceCustomerIndividualUser;
  IIoRestorecommerceCustomerOrgUser: IIoRestorecommerceCustomerOrgUser;
  IIoRestorecommerceCustomerGuest: IIoRestorecommerceCustomerGuest;
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
  ResourceTaxMutation: ResolverTypeWrapper<ResourceTaxMutation>;
  IIoRestorecommerceTaxTaxList: IIoRestorecommerceTaxTaxList;
  IIoRestorecommerceTaxTax: IIoRestorecommerceTaxTax;
  ResourceTaxTypeMutation: ResolverTypeWrapper<ResourceTaxTypeMutation>;
  IIoRestorecommerceTaxTypeTaxTypeList: IIoRestorecommerceTaxTypeTaxTypeList;
  IIoRestorecommerceTaxTypeTaxType: IIoRestorecommerceTaxTypeTaxType;
  ResourceCommandMutation: ResolverTypeWrapper<ResourceCommandMutation>;
  IIoRestorecommerceCommandCommandList: IIoRestorecommerceCommandCommandList;
  IIoRestorecommerceCommandCommand: IIoRestorecommerceCommandCommand;
  IIoRestorecommerceCommandCommandParameter: IIoRestorecommerceCommandCommandParameter;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  ResourceQuery: ResourceQuery;
  ResourceAddressQuery: ResourceAddressQuery;
  ProtoIoRestorecommerceAddressAddressListResponse: ProtoIoRestorecommerceAddressAddressListResponse;
  StatusType: StatusType;
  String: Scalars['String'];
  Int: Scalars['Int'];
  IoRestorecommerceAddressAddressListResponse: IoRestorecommerceAddressAddressListResponse;
  IoRestorecommerceAddressAddressResponse: IoRestorecommerceAddressAddressResponse;
  IoRestorecommerceAddressAddress: IoRestorecommerceAddressAddress;
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  Float: Scalars['Float'];
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  IoRestorecommerceAddressAddressGeoPoint: IoRestorecommerceAddressAddressGeoPoint;
  IoRestorecommerceAddressAddressAddition: IoRestorecommerceAddressAddressAddition;
  IoRestorecommerceStatusStatus: IoRestorecommerceStatusStatus;
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IIoRestorecommerceResourcebaseFilterOp: IIoRestorecommerceResourcebaseFilterOp;
  IIoRestorecommerceResourcebaseFilter: IIoRestorecommerceResourcebaseFilter;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  Boolean: Scalars['Boolean'];
  IGoogleProtobufAny: IGoogleProtobufAny;
  Upload: Scalars['Upload'];
  ResourceCountryQuery: ResourceCountryQuery;
  ProtoIoRestorecommerceCountryCountryListResponse: ProtoIoRestorecommerceCountryCountryListResponse;
  IoRestorecommerceCountryCountryListResponse: IoRestorecommerceCountryCountryListResponse;
  IoRestorecommerceCountryCountryResponse: IoRestorecommerceCountryCountryResponse;
  IoRestorecommerceCountryCountry: IoRestorecommerceCountryCountry;
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
  IoRestorecommerceCustomerIndividualUser: IoRestorecommerceCustomerIndividualUser;
  IoRestorecommerceCustomerOrgUser: IoRestorecommerceCustomerOrgUser;
  IoRestorecommerceCustomerGuest: IoRestorecommerceCustomerGuest;
  ResourceContactPointQuery: ResourceContactPointQuery;
  ProtoIoRestorecommerceContactPointContactPointListResponse: ProtoIoRestorecommerceContactPointContactPointListResponse;
  IoRestorecommerceContactPointContactPointListResponse: IoRestorecommerceContactPointContactPointListResponse;
  IoRestorecommerceContactPointContactPointResponse: IoRestorecommerceContactPointContactPointResponse;
  IoRestorecommerceContactPointContactPoint: IoRestorecommerceContactPointContactPoint;
  ResourceLocaleQuery: ResourceLocaleQuery;
  ProtoIoRestorecommerceLocaleLocaleListResponse: ProtoIoRestorecommerceLocaleLocaleListResponse;
  IoRestorecommerceLocaleLocaleListResponse: IoRestorecommerceLocaleLocaleListResponse;
  IoRestorecommerceLocaleLocaleResponse: IoRestorecommerceLocaleLocaleResponse;
  IoRestorecommerceLocaleLocale: IoRestorecommerceLocaleLocale;
  ResourceLocationQuery: ResourceLocationQuery;
  ProtoIoRestorecommerceLocationLocationListResponse: ProtoIoRestorecommerceLocationLocationListResponse;
  IoRestorecommerceLocationLocationListResponse: IoRestorecommerceLocationLocationListResponse;
  IoRestorecommerceLocationLocationResponse: IoRestorecommerceLocationLocationResponse;
  IoRestorecommerceLocationLocation: IoRestorecommerceLocationLocation;
  GoogleProtobufAny: GoogleProtobufAny;
  TodoScalar: Scalars['TodoScalar'];
  ResourceOrganizationQuery: ResourceOrganizationQuery;
  ProtoIoRestorecommerceOrganizationOrganizationListResponse: ProtoIoRestorecommerceOrganizationOrganizationListResponse;
  IoRestorecommerceOrganizationOrganizationListResponse: IoRestorecommerceOrganizationOrganizationListResponse;
  IoRestorecommerceOrganizationOrganizationResponse: IoRestorecommerceOrganizationOrganizationResponse;
  IoRestorecommerceOrganizationOrganization: IoRestorecommerceOrganizationOrganization;
  ResourceTaxQuery: ResourceTaxQuery;
  ProtoIoRestorecommerceTaxTaxListResponse: ProtoIoRestorecommerceTaxTaxListResponse;
  IoRestorecommerceTaxTaxListResponse: IoRestorecommerceTaxTaxListResponse;
  IoRestorecommerceTaxTaxResponse: IoRestorecommerceTaxTaxResponse;
  IoRestorecommerceTaxTax: IoRestorecommerceTaxTax;
  ResourceTaxTypeQuery: ResourceTaxTypeQuery;
  ProtoIoRestorecommerceTaxTypeTaxTypeListResponse: ProtoIoRestorecommerceTaxTypeTaxTypeListResponse;
  IoRestorecommerceTaxTypeTaxTypeListResponse: IoRestorecommerceTaxTypeTaxTypeListResponse;
  IoRestorecommerceTaxTypeTaxTypeResponse: IoRestorecommerceTaxTypeTaxTypeResponse;
  IoRestorecommerceTaxTypeTaxType: IoRestorecommerceTaxTypeTaxType;
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
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAddressAddressGeoPoint: IIoRestorecommerceAddressAddressGeoPoint;
  IIoRestorecommerceAddressAddressAddition: IIoRestorecommerceAddressAddressAddition;
  ProtoIoRestorecommerceStatusStatusArray: ProtoIoRestorecommerceStatusStatusArray;
  IoRestorecommerceStatusStatusArray: IoRestorecommerceStatusStatusArray;
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
  IIoRestorecommerceCustomerIndividualUser: IIoRestorecommerceCustomerIndividualUser;
  IIoRestorecommerceCustomerOrgUser: IIoRestorecommerceCustomerOrgUser;
  IIoRestorecommerceCustomerGuest: IIoRestorecommerceCustomerGuest;
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
  ResourceTaxMutation: ResourceTaxMutation;
  IIoRestorecommerceTaxTaxList: IIoRestorecommerceTaxTaxList;
  IIoRestorecommerceTaxTax: IIoRestorecommerceTaxTax;
  ResourceTaxTypeMutation: ResourceTaxTypeMutation;
  IIoRestorecommerceTaxTypeTaxTypeList: IIoRestorecommerceTaxTypeTaxTypeList;
  IIoRestorecommerceTaxTypeTaxType: IIoRestorecommerceTaxTypeTaxType;
  ResourceCommandMutation: ResourceCommandMutation;
  IIoRestorecommerceCommandCommandList: IIoRestorecommerceCommandCommandList;
  IIoRestorecommerceCommandCommand: IIoRestorecommerceCommandCommand;
  IIoRestorecommerceCommandCommandParameter: IIoRestorecommerceCommandCommandParameter;
}>;

export type QueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  resource?: Resolver<ResolversTypes['ResourceQuery'], ParentType, ContextType>;
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
  tax?: Resolver<ResolversTypes['ResourceTaxQuery'], ParentType, ContextType>;
  tax_type?: Resolver<ResolversTypes['ResourceTaxTypeQuery'], ParentType, ContextType>;
  command?: Resolver<ResolversTypes['ResourceCommandQuery'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceAddressQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceAddressQuery'] = ResolversParentTypes['ResourceAddressQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceAddressAddressListResponse']>, ParentType, ContextType, RequireFields<ResourceAddressQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceAddressAddressListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceAddressAddressListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceAddressAddressListResponse']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressAddressListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StatusTypeResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['StatusType'] = ResolversParentTypes['StatusType']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressAddressListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressAddressListResponse'] = ResolversParentTypes['IoRestorecommerceAddressAddressListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAddressAddressResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
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
  locality?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  geoCoordinates?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressAddressGeoPoint']>, ParentType, ContextType>;
  altitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  buildingNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressAddition?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressAddressAddition']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceMetaMetaResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceMetaMeta'] = ResolversParentTypes['IoRestorecommerceMetaMeta']> = ResolversObject<{
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modified?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modifiedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressAddressGeoPointResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressAddressGeoPoint'] = ResolversParentTypes['IoRestorecommerceAddressAddressGeoPoint']> = ResolversObject<{
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressAddressAdditionResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressAddressAddition'] = ResolversParentTypes['IoRestorecommerceAddressAddressAddition']> = ResolversObject<{
  field1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  field2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusStatusResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusStatus'] = ResolversParentTypes['IoRestorecommerceStatusStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseSortSortOrderResolvers = { UNSORTED: 'undefined', ASCENDING: 1, DESCENDING: 2 };

export type IoRestorecommerceResourcebaseFilterOperationResolvers = { eq: 'undefined', lt: 1, lte: 2, gt: 3, gte: 4, isEmpty: 5, iLike: 6, in: 7, neq: 8 };

export type IoRestorecommerceResourcebaseFilterValueTypeResolvers = { STRING: 'undefined', NUMBER: 1, BOOLEAN: 2, DATE: 3, ARRAY: 4 };

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type ResourceCountryQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceCountryQuery'] = ResolversParentTypes['ResourceCountryQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCountryCountryListResponse']>, ParentType, ContextType, RequireFields<ResourceCountryQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceCountryCountryListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceCountryCountryListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceCountryCountryListResponse']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCountryCountryListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCountryCountryListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCountryCountryListResponse'] = ResolversParentTypes['IoRestorecommerceCountryCountryListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceCountryCountryResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCountryCountryResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCountryCountryResponse'] = ResolversParentTypes['IoRestorecommerceCountryCountryResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCountryCountry']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
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

export type ResourceTimezoneQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceTimezoneQuery'] = ResolversParentTypes['ResourceTimezoneQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTimezoneTimezoneListResponse']>, ParentType, ContextType, RequireFields<ResourceTimezoneQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceTimezoneTimezoneListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceTimezoneTimezoneListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceTimezoneTimezoneListResponse']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceTimezoneTimezoneListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTimezoneTimezoneListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceTimezoneTimezoneListResponse'] = ResolversParentTypes['IoRestorecommerceTimezoneTimezoneListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceTimezoneTimezoneResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
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
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceContactPointTypeContactPointTypeListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceContactPointTypeContactPointTypeListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceContactPointTypeContactPointTypeListResponse'] = ResolversParentTypes['IoRestorecommerceContactPointTypeContactPointTypeListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceContactPointTypeContactPointTypeResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
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
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCustomerCustomerListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCustomerCustomerListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerCustomerListResponse'] = ResolversParentTypes['IoRestorecommerceCustomerCustomerListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceCustomerCustomerResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
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
  addressId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactPointIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCustomerOrgUserResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerOrgUser'] = ResolversParentTypes['IoRestorecommerceCustomerOrgUser']> = ResolversObject<{
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organizationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCustomerGuestResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerGuest'] = ResolversParentTypes['IoRestorecommerceCustomerGuest']> = ResolversObject<{
  guest?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  addressId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactPointIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceContactPointQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceContactPointQuery'] = ResolversParentTypes['ResourceContactPointQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceContactPointContactPointListResponse']>, ParentType, ContextType, RequireFields<ResourceContactPointQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceContactPointContactPointListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceContactPointContactPointListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceContactPointContactPointListResponse']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceContactPointContactPointListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceContactPointContactPointListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceContactPointContactPointListResponse'] = ResolversParentTypes['IoRestorecommerceContactPointContactPointListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceContactPointContactPointResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceContactPointContactPointResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceContactPointContactPointResponse'] = ResolversParentTypes['IoRestorecommerceContactPointContactPointResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceContactPointContactPoint']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceContactPointContactPointResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceContactPointContactPoint'] = ResolversParentTypes['IoRestorecommerceContactPointContactPoint']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  physicalAddressId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactPointTypeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  telephone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezoneId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  localeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceLocaleQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceLocaleQuery'] = ResolversParentTypes['ResourceLocaleQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceLocaleLocaleListResponse']>, ParentType, ContextType, RequireFields<ResourceLocaleQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceLocaleLocaleListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceLocaleLocaleListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceLocaleLocaleListResponse']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceLocaleLocaleListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceLocaleLocaleListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceLocaleLocaleListResponse'] = ResolversParentTypes['IoRestorecommerceLocaleLocaleListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceLocaleLocaleResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceLocaleLocaleResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceLocaleLocaleResponse'] = ResolversParentTypes['IoRestorecommerceLocaleLocaleResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceLocaleLocale']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceLocaleLocaleResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceLocaleLocale'] = ResolversParentTypes['IoRestorecommerceLocaleLocale']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceLocationQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceLocationQuery'] = ResolversParentTypes['ResourceLocationQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceLocationLocationListResponse']>, ParentType, ContextType, RequireFields<ResourceLocationQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceLocationLocationListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceLocationLocationListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceLocationLocationListResponse']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceLocationLocationListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceLocationLocationListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceLocationLocationListResponse'] = ResolversParentTypes['IoRestorecommerceLocationLocationListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceLocationLocationResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
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
  parentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  childrenIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  addressId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GoogleProtobufAnyResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['GoogleProtobufAny'] = ResolversParentTypes['GoogleProtobufAny']> = ResolversObject<{
  typeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['TodoScalar']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface TodoScalarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TodoScalar'], any> {
  name: 'TodoScalar';
}

export type ResourceOrganizationQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceOrganizationQuery'] = ResolversParentTypes['ResourceOrganizationQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOrganizationOrganizationListResponse']>, ParentType, ContextType, RequireFields<ResourceOrganizationQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceOrganizationOrganizationListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOrganizationOrganizationListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceOrganizationOrganizationListResponse']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrganizationOrganizationListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOrganizationOrganizationListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceOrganizationOrganizationListResponse'] = ResolversParentTypes['IoRestorecommerceOrganizationOrganizationListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceOrganizationOrganizationResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOrganizationOrganizationResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceOrganizationOrganizationResponse'] = ResolversParentTypes['IoRestorecommerceOrganizationOrganizationResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrganizationOrganization']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOrganizationOrganizationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceOrganizationOrganization'] = ResolversParentTypes['IoRestorecommerceOrganizationOrganization']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  addressId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  childrenIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  contactPointIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
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

export type ResourceTaxQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceTaxQuery'] = ResolversParentTypes['ResourceTaxQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTaxTaxListResponse']>, ParentType, ContextType, RequireFields<ResourceTaxQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceTaxTaxListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceTaxTaxListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceTaxTaxListResponse']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceTaxTaxListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTaxTaxListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceTaxTaxListResponse'] = ResolversParentTypes['IoRestorecommerceTaxTaxListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceTaxTaxResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
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
  rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  typeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceTaxTypeQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceTaxTypeQuery'] = ResolversParentTypes['ResourceTaxTypeQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTaxTypeTaxTypeListResponse']>, ParentType, ContextType, RequireFields<ResourceTaxTypeQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceTaxTypeTaxTypeListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceTaxTypeTaxTypeListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceTaxTypeTaxTypeListResponse']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceTaxTypeTaxTypeListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTaxTypeTaxTypeListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceTaxTypeTaxTypeListResponse'] = ResolversParentTypes['IoRestorecommerceTaxTypeTaxTypeListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceTaxTypeTaxTypeResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
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

export type ResourceCommandQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceCommandQuery'] = ResolversParentTypes['ResourceCommandQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCommandCommandListResponse']>, ParentType, ContextType, RequireFields<ResourceCommandQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceCommandCommandListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceCommandCommandListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceCommandCommandListResponse']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCommandCommandListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCommandCommandListResponseResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCommandCommandListResponse'] = ResolversParentTypes['IoRestorecommerceCommandCommandListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceCommandCommandResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
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

export type IoRestorecommerceCommandCommandParameterParameterTypeResolvers = { boolean_value: 'undefined', object_value: 1, array_value: 2, number_value: 3, string_value: 4 };

export type MutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  resource?: Resolver<ResolversTypes['ResourceMutation'], ParentType, ContextType>;
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
  tax?: Resolver<ResolversTypes['ResourceTaxMutation'], ParentType, ContextType>;
  tax_type?: Resolver<ResolversTypes['ResourceTaxTypeMutation'], ParentType, ContextType>;
  command?: Resolver<ResolversTypes['ResourceCommandMutation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceAddressMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceAddressMutation'] = ResolversParentTypes['ResourceAddressMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceAddressAddressListResponse']>, ParentType, ContextType, RequireFields<ResourceAddressMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusArray']>, ParentType, ContextType, RequireFields<ResourceAddressMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceStatusStatusArrayResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceStatusStatusArray'] = ResolversParentTypes['ProtoIoRestorecommerceStatusStatusArray']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatusArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusStatusArrayResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusStatusArray'] = ResolversParentTypes['IoRestorecommerceStatusStatusArray']> = ResolversObject<{
  status?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceStatusStatus']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceCountryMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceCountryMutation'] = ResolversParentTypes['ResourceCountryMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCountryCountryListResponse']>, ParentType, ContextType, RequireFields<ResourceCountryMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusArray']>, ParentType, ContextType, RequireFields<ResourceCountryMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceTimezoneMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceTimezoneMutation'] = ResolversParentTypes['ResourceTimezoneMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTimezoneTimezoneListResponse']>, ParentType, ContextType, RequireFields<ResourceTimezoneMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusArray']>, ParentType, ContextType, RequireFields<ResourceTimezoneMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceContactPointTypeMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceContactPointTypeMutation'] = ResolversParentTypes['ResourceContactPointTypeMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse']>, ParentType, ContextType, RequireFields<ResourceContactPointTypeMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusArray']>, ParentType, ContextType, RequireFields<ResourceContactPointTypeMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceCustomerMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceCustomerMutation'] = ResolversParentTypes['ResourceCustomerMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCustomerCustomerListResponse']>, ParentType, ContextType, RequireFields<ResourceCustomerMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusArray']>, ParentType, ContextType, RequireFields<ResourceCustomerMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceContactPointMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceContactPointMutation'] = ResolversParentTypes['ResourceContactPointMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceContactPointContactPointListResponse']>, ParentType, ContextType, RequireFields<ResourceContactPointMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusArray']>, ParentType, ContextType, RequireFields<ResourceContactPointMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceLocaleMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceLocaleMutation'] = ResolversParentTypes['ResourceLocaleMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceLocaleLocaleListResponse']>, ParentType, ContextType, RequireFields<ResourceLocaleMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusArray']>, ParentType, ContextType, RequireFields<ResourceLocaleMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceLocationMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceLocationMutation'] = ResolversParentTypes['ResourceLocationMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceLocationLocationListResponse']>, ParentType, ContextType, RequireFields<ResourceLocationMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusArray']>, ParentType, ContextType, RequireFields<ResourceLocationMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceOrganizationMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceOrganizationMutation'] = ResolversParentTypes['ResourceOrganizationMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOrganizationOrganizationListResponse']>, ParentType, ContextType, RequireFields<ResourceOrganizationMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusArray']>, ParentType, ContextType, RequireFields<ResourceOrganizationMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceTaxMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceTaxMutation'] = ResolversParentTypes['ResourceTaxMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTaxTaxListResponse']>, ParentType, ContextType, RequireFields<ResourceTaxMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusArray']>, ParentType, ContextType, RequireFields<ResourceTaxMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceTaxTypeMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceTaxTypeMutation'] = ResolversParentTypes['ResourceTaxTypeMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTaxTypeTaxTypeListResponse']>, ParentType, ContextType, RequireFields<ResourceTaxTypeMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusArray']>, ParentType, ContextType, RequireFields<ResourceTaxTypeMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceCommandMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceCommandMutation'] = ResolversParentTypes['ResourceCommandMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCommandCommandListResponse']>, ParentType, ContextType, RequireFields<ResourceCommandMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusArray']>, ParentType, ContextType, RequireFields<ResourceCommandMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = ResourceContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  ResourceQuery?: ResourceQueryResolvers<ContextType>;
  ResourceAddressQuery?: ResourceAddressQueryResolvers<ContextType>;
  ProtoIoRestorecommerceAddressAddressListResponse?: ProtoIoRestorecommerceAddressAddressListResponseResolvers<ContextType>;
  StatusType?: StatusTypeResolvers<ContextType>;
  IoRestorecommerceAddressAddressListResponse?: IoRestorecommerceAddressAddressListResponseResolvers<ContextType>;
  IoRestorecommerceAddressAddressResponse?: IoRestorecommerceAddressAddressResponseResolvers<ContextType>;
  IoRestorecommerceAddressAddress?: IoRestorecommerceAddressAddressResolvers<ContextType>;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
  IoRestorecommerceAddressAddressGeoPoint?: IoRestorecommerceAddressAddressGeoPointResolvers<ContextType>;
  IoRestorecommerceAddressAddressAddition?: IoRestorecommerceAddressAddressAdditionResolvers<ContextType>;
  IoRestorecommerceStatusStatus?: IoRestorecommerceStatusStatusResolvers<ContextType>;
  IoRestorecommerceResourcebaseSortSortOrder?: IoRestorecommerceResourcebaseSortSortOrderResolvers;
  IoRestorecommerceResourcebaseFilterOperation?: IoRestorecommerceResourcebaseFilterOperationResolvers;
  IoRestorecommerceResourcebaseFilterValueType?: IoRestorecommerceResourcebaseFilterValueTypeResolvers;
  Upload?: GraphQLScalarType;
  ResourceCountryQuery?: ResourceCountryQueryResolvers<ContextType>;
  ProtoIoRestorecommerceCountryCountryListResponse?: ProtoIoRestorecommerceCountryCountryListResponseResolvers<ContextType>;
  IoRestorecommerceCountryCountryListResponse?: IoRestorecommerceCountryCountryListResponseResolvers<ContextType>;
  IoRestorecommerceCountryCountryResponse?: IoRestorecommerceCountryCountryResponseResolvers<ContextType>;
  IoRestorecommerceCountryCountry?: IoRestorecommerceCountryCountryResolvers<ContextType>;
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
  IoRestorecommerceCustomerIndividualUser?: IoRestorecommerceCustomerIndividualUserResolvers<ContextType>;
  IoRestorecommerceCustomerOrgUser?: IoRestorecommerceCustomerOrgUserResolvers<ContextType>;
  IoRestorecommerceCustomerGuest?: IoRestorecommerceCustomerGuestResolvers<ContextType>;
  ResourceContactPointQuery?: ResourceContactPointQueryResolvers<ContextType>;
  ProtoIoRestorecommerceContactPointContactPointListResponse?: ProtoIoRestorecommerceContactPointContactPointListResponseResolvers<ContextType>;
  IoRestorecommerceContactPointContactPointListResponse?: IoRestorecommerceContactPointContactPointListResponseResolvers<ContextType>;
  IoRestorecommerceContactPointContactPointResponse?: IoRestorecommerceContactPointContactPointResponseResolvers<ContextType>;
  IoRestorecommerceContactPointContactPoint?: IoRestorecommerceContactPointContactPointResolvers<ContextType>;
  ResourceLocaleQuery?: ResourceLocaleQueryResolvers<ContextType>;
  ProtoIoRestorecommerceLocaleLocaleListResponse?: ProtoIoRestorecommerceLocaleLocaleListResponseResolvers<ContextType>;
  IoRestorecommerceLocaleLocaleListResponse?: IoRestorecommerceLocaleLocaleListResponseResolvers<ContextType>;
  IoRestorecommerceLocaleLocaleResponse?: IoRestorecommerceLocaleLocaleResponseResolvers<ContextType>;
  IoRestorecommerceLocaleLocale?: IoRestorecommerceLocaleLocaleResolvers<ContextType>;
  ResourceLocationQuery?: ResourceLocationQueryResolvers<ContextType>;
  ProtoIoRestorecommerceLocationLocationListResponse?: ProtoIoRestorecommerceLocationLocationListResponseResolvers<ContextType>;
  IoRestorecommerceLocationLocationListResponse?: IoRestorecommerceLocationLocationListResponseResolvers<ContextType>;
  IoRestorecommerceLocationLocationResponse?: IoRestorecommerceLocationLocationResponseResolvers<ContextType>;
  IoRestorecommerceLocationLocation?: IoRestorecommerceLocationLocationResolvers<ContextType>;
  GoogleProtobufAny?: GoogleProtobufAnyResolvers<ContextType>;
  TodoScalar?: GraphQLScalarType;
  ResourceOrganizationQuery?: ResourceOrganizationQueryResolvers<ContextType>;
  ProtoIoRestorecommerceOrganizationOrganizationListResponse?: ProtoIoRestorecommerceOrganizationOrganizationListResponseResolvers<ContextType>;
  IoRestorecommerceOrganizationOrganizationListResponse?: IoRestorecommerceOrganizationOrganizationListResponseResolvers<ContextType>;
  IoRestorecommerceOrganizationOrganizationResponse?: IoRestorecommerceOrganizationOrganizationResponseResolvers<ContextType>;
  IoRestorecommerceOrganizationOrganization?: IoRestorecommerceOrganizationOrganizationResolvers<ContextType>;
  ResourceTaxQuery?: ResourceTaxQueryResolvers<ContextType>;
  ProtoIoRestorecommerceTaxTaxListResponse?: ProtoIoRestorecommerceTaxTaxListResponseResolvers<ContextType>;
  IoRestorecommerceTaxTaxListResponse?: IoRestorecommerceTaxTaxListResponseResolvers<ContextType>;
  IoRestorecommerceTaxTaxResponse?: IoRestorecommerceTaxTaxResponseResolvers<ContextType>;
  IoRestorecommerceTaxTax?: IoRestorecommerceTaxTaxResolvers<ContextType>;
  ResourceTaxTypeQuery?: ResourceTaxTypeQueryResolvers<ContextType>;
  ProtoIoRestorecommerceTaxTypeTaxTypeListResponse?: ProtoIoRestorecommerceTaxTypeTaxTypeListResponseResolvers<ContextType>;
  IoRestorecommerceTaxTypeTaxTypeListResponse?: IoRestorecommerceTaxTypeTaxTypeListResponseResolvers<ContextType>;
  IoRestorecommerceTaxTypeTaxTypeResponse?: IoRestorecommerceTaxTypeTaxTypeResponseResolvers<ContextType>;
  IoRestorecommerceTaxTypeTaxType?: IoRestorecommerceTaxTypeTaxTypeResolvers<ContextType>;
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
  ProtoIoRestorecommerceStatusStatusArray?: ProtoIoRestorecommerceStatusStatusArrayResolvers<ContextType>;
  IoRestorecommerceStatusStatusArray?: IoRestorecommerceStatusStatusArrayResolvers<ContextType>;
  ResourceCountryMutation?: ResourceCountryMutationResolvers<ContextType>;
  ResourceTimezoneMutation?: ResourceTimezoneMutationResolvers<ContextType>;
  ResourceContactPointTypeMutation?: ResourceContactPointTypeMutationResolvers<ContextType>;
  ResourceCustomerMutation?: ResourceCustomerMutationResolvers<ContextType>;
  ResourceContactPointMutation?: ResourceContactPointMutationResolvers<ContextType>;
  ResourceLocaleMutation?: ResourceLocaleMutationResolvers<ContextType>;
  ResourceLocationMutation?: ResourceLocationMutationResolvers<ContextType>;
  ResourceOrganizationMutation?: ResourceOrganizationMutationResolvers<ContextType>;
  ResourceTaxMutation?: ResourceTaxMutationResolvers<ContextType>;
  ResourceTaxTypeMutation?: ResourceTaxTypeMutationResolvers<ContextType>;
  ResourceCommandMutation?: ResourceCommandMutationResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = ResourceContext> = Resolvers<ContextType>;
