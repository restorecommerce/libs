import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { ResourceContext } from '../interfaces';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
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
  Read?: Maybe<ProtoIoRestorecommerceAddressAddressList>;
};


export type ResourceAddressQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceAddressAddressList = {
  __typename?: 'ProtoIoRestorecommerceAddressAddressList';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceAddressAddressList>;
};

/** Objects with error returned for GraphQL operations */
export type StatusType = {
  __typename?: 'StatusType';
  /** Status key */
  key: Scalars['String'];
  /** Status code */
  code: Scalars['Int'];
  /** Status message description */
  message?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceAddressAddressList = {
  __typename?: 'IoRestorecommerceAddressAddressList';
  items?: Maybe<Array<IoRestorecommerceAddressAddress>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IoRestorecommerceAuthSubject>;
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

export type IoRestorecommerceAuthSubject = {
  __typename?: 'IoRestorecommerceAuthSubject';
  id?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  roleAssociations?: Maybe<Array<IoRestorecommerceAuthRoleAssociation>>;
  hierarchicalScopes?: Maybe<Array<IoRestorecommerceAuthHierarchicalScope>>;
  unauthenticated?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceAuthRoleAssociation = {
  __typename?: 'IoRestorecommerceAuthRoleAssociation';
  role?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  id?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceAuthHierarchicalScope = {
  __typename?: 'IoRestorecommerceAuthHierarchicalScope';
  id?: Maybe<Scalars['String']>;
  children?: Maybe<Array<IoRestorecommerceAuthHierarchicalScope>>;
  role?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceResourcebaseReadRequest = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<IIoRestorecommerceResourcebaseSort>>;
  filter?: Maybe<IGoogleProtobufStruct>;
  field?: Maybe<Array<IIoRestorecommerceResourcebaseFieldFilter>>;
  search?: Maybe<Array<Scalars['String']>>;
  localesLimiter?: Maybe<Array<Scalars['String']>>;
  customQueries?: Maybe<Array<Scalars['String']>>;
  customArguments?: Maybe<IGoogleProtobufAny>;
  subject?: Maybe<IIoRestorecommerceAuthSubject>;
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

export type IGoogleProtobufStruct = {
  fields?: Maybe<Array<IGoogleProtobufStructFieldsEntry>>;
};

export type IGoogleProtobufStructFieldsEntry = {
  key?: Maybe<Scalars['String']>;
  value?: Maybe<IGoogleProtobufValue>;
};

export type IGoogleProtobufValue = {
  nullValue?: Maybe<GoogleProtobufNullValue>;
  numberValue?: Maybe<Scalars['Float']>;
  stringValue?: Maybe<Scalars['String']>;
  boolValue?: Maybe<Scalars['Boolean']>;
  structValue?: Maybe<IGoogleProtobufStruct>;
  listValue?: Maybe<IGoogleProtobufListValue>;
};

export enum GoogleProtobufNullValue {
  NullValue = 0
}

export type IGoogleProtobufListValue = {
  values?: Maybe<Array<IGoogleProtobufValue>>;
};

export type IIoRestorecommerceResourcebaseFieldFilter = {
  name?: Maybe<Scalars['String']>;
  include?: Maybe<Scalars['Boolean']>;
};

export type IGoogleProtobufAny = {
  typeUrl?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Upload']>;
};


export type IIoRestorecommerceAuthSubject = {
  id?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  roleAssociations?: Maybe<Array<IIoRestorecommerceAuthRoleAssociation>>;
  hierarchicalScopes?: Maybe<Array<IIoRestorecommerceAuthHierarchicalScope>>;
  unauthenticated?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceAuthRoleAssociation = {
  role?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<IIoRestorecommerceAttributeAttribute>>;
  id?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceAttributeAttribute = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceAuthHierarchicalScope = {
  id?: Maybe<Scalars['String']>;
  children?: Maybe<Array<IIoRestorecommerceAuthHierarchicalScope>>;
  role?: Maybe<Scalars['String']>;
};

export type ResourceCountryQuery = {
  __typename?: 'ResourceCountryQuery';
  Read?: Maybe<ProtoIoRestorecommerceCountryCountryList>;
};


export type ResourceCountryQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceCountryCountryList = {
  __typename?: 'ProtoIoRestorecommerceCountryCountryList';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceCountryCountryList>;
};

export type IoRestorecommerceCountryCountryList = {
  __typename?: 'IoRestorecommerceCountryCountryList';
  items?: Maybe<Array<IoRestorecommerceCountryCountry>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IoRestorecommerceAuthSubject>;
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
  Read?: Maybe<ProtoIoRestorecommerceTimezoneTimezoneList>;
};


export type ResourceTimezoneQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceTimezoneTimezoneList = {
  __typename?: 'ProtoIoRestorecommerceTimezoneTimezoneList';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceTimezoneTimezoneList>;
};

export type IoRestorecommerceTimezoneTimezoneList = {
  __typename?: 'IoRestorecommerceTimezoneTimezoneList';
  items?: Maybe<Array<IoRestorecommerceTimezoneTimezone>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IoRestorecommerceAuthSubject>;
};

export type IoRestorecommerceTimezoneTimezone = {
  __typename?: 'IoRestorecommerceTimezoneTimezone';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  value?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ResourceContactPointTypeQuery = {
  __typename?: 'ResourceContactPointTypeQuery';
  Read?: Maybe<ProtoIoRestorecommerceContactPointTypeContactPointTypeList>;
};


export type ResourceContactPointTypeQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceContactPointTypeContactPointTypeList = {
  __typename?: 'ProtoIoRestorecommerceContactPointTypeContactPointTypeList';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceContactPointTypeContactPointTypeList>;
};

export type IoRestorecommerceContactPointTypeContactPointTypeList = {
  __typename?: 'IoRestorecommerceContactPointTypeContactPointTypeList';
  items?: Maybe<Array<IoRestorecommerceContactPointTypeContactPointType>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IoRestorecommerceAuthSubject>;
};

export type IoRestorecommerceContactPointTypeContactPointType = {
  __typename?: 'IoRestorecommerceContactPointTypeContactPointType';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  type?: Maybe<Scalars['String']>;
};

export type ResourceCustomerQuery = {
  __typename?: 'ResourceCustomerQuery';
  Read?: Maybe<ProtoIoRestorecommerceCustomerCustomerList>;
};


export type ResourceCustomerQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceCustomerCustomerList = {
  __typename?: 'ProtoIoRestorecommerceCustomerCustomerList';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceCustomerCustomerList>;
};

export type IoRestorecommerceCustomerCustomerList = {
  __typename?: 'IoRestorecommerceCustomerCustomerList';
  items?: Maybe<Array<IoRestorecommerceCustomerCustomer>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IoRestorecommerceAuthSubject>;
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
  Read?: Maybe<ProtoIoRestorecommerceContactPointContactPointList>;
};


export type ResourceContactPointQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceContactPointContactPointList = {
  __typename?: 'ProtoIoRestorecommerceContactPointContactPointList';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceContactPointContactPointList>;
};

export type IoRestorecommerceContactPointContactPointList = {
  __typename?: 'IoRestorecommerceContactPointContactPointList';
  items?: Maybe<Array<IoRestorecommerceContactPointContactPoint>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IoRestorecommerceAuthSubject>;
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
  Read?: Maybe<ProtoIoRestorecommerceLocaleLocaleList>;
};


export type ResourceLocaleQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceLocaleLocaleList = {
  __typename?: 'ProtoIoRestorecommerceLocaleLocaleList';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceLocaleLocaleList>;
};

export type IoRestorecommerceLocaleLocaleList = {
  __typename?: 'IoRestorecommerceLocaleLocaleList';
  items?: Maybe<Array<IoRestorecommerceLocaleLocale>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IoRestorecommerceAuthSubject>;
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
  Read?: Maybe<ProtoIoRestorecommerceLocationLocationList>;
};


export type ResourceLocationQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceLocationLocationList = {
  __typename?: 'ProtoIoRestorecommerceLocationLocationList';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceLocationLocationList>;
};

export type IoRestorecommerceLocationLocationList = {
  __typename?: 'IoRestorecommerceLocationLocationList';
  items?: Maybe<Array<IoRestorecommerceLocationLocation>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IoRestorecommerceAuthSubject>;
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
  Read?: Maybe<ProtoIoRestorecommerceOrganizationOrganizationList>;
};


export type ResourceOrganizationQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceOrganizationOrganizationList = {
  __typename?: 'ProtoIoRestorecommerceOrganizationOrganizationList';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceOrganizationOrganizationList>;
};

export type IoRestorecommerceOrganizationOrganizationList = {
  __typename?: 'IoRestorecommerceOrganizationOrganizationList';
  items?: Maybe<Array<IoRestorecommerceOrganizationOrganization>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IoRestorecommerceAuthSubject>;
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
  Read?: Maybe<ProtoIoRestorecommerceTaxTaxList>;
};


export type ResourceTaxQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceTaxTaxList = {
  __typename?: 'ProtoIoRestorecommerceTaxTaxList';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceTaxTaxList>;
};

export type IoRestorecommerceTaxTaxList = {
  __typename?: 'IoRestorecommerceTaxTaxList';
  items?: Maybe<Array<IoRestorecommerceTaxTax>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IoRestorecommerceAuthSubject>;
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
  Read?: Maybe<ProtoIoRestorecommerceTaxTypeTaxTypeList>;
};


export type ResourceTaxTypeQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceTaxTypeTaxTypeList = {
  __typename?: 'ProtoIoRestorecommerceTaxTypeTaxTypeList';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceTaxTypeTaxTypeList>;
};

export type IoRestorecommerceTaxTypeTaxTypeList = {
  __typename?: 'IoRestorecommerceTaxTypeTaxTypeList';
  items?: Maybe<Array<IoRestorecommerceTaxTypeTaxType>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IoRestorecommerceAuthSubject>;
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
  Read?: Maybe<ProtoIoRestorecommerceCommandCommandList>;
};


export type ResourceCommandQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceCommandCommandList = {
  __typename?: 'ProtoIoRestorecommerceCommandCommandList';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceCommandCommandList>;
};

export type IoRestorecommerceCommandCommandList = {
  __typename?: 'IoRestorecommerceCommandCommandList';
  items?: Maybe<Array<IoRestorecommerceCommandCommand>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IoRestorecommerceAuthSubject>;
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
  Create?: Maybe<ProtoIoRestorecommerceAddressAddressList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommerceAddressAddressList>;
  Upsert?: Maybe<ProtoIoRestorecommerceAddressAddressList>;
};


export type ResourceAddressMutationCreateArgs = {
  input: IIoRestorecommerceAddressAddressList;
};


export type ResourceAddressMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type ResourceAddressMutationUpdateArgs = {
  input: IIoRestorecommerceAddressAddressList;
};


export type ResourceAddressMutationUpsertArgs = {
  input: IIoRestorecommerceAddressAddressList;
};

export type IIoRestorecommerceAddressAddressList = {
  items?: Maybe<Array<IIoRestorecommerceAddressAddress>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IIoRestorecommerceAuthSubject>;
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

export type IIoRestorecommerceAddressAddressGeoPoint = {
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type IIoRestorecommerceAddressAddressAddition = {
  field1?: Maybe<Scalars['String']>;
  field2?: Maybe<Scalars['String']>;
};

export type ProtoGoogleProtobufEmpty = {
  __typename?: 'ProtoGoogleProtobufEmpty';
  status: StatusType;
};

export type IIoRestorecommerceResourcebaseDeleteRequest = {
  collection?: Maybe<Scalars['Boolean']>;
  ids?: Maybe<Array<Scalars['String']>>;
  subject?: Maybe<IIoRestorecommerceAuthSubject>;
};

export type ResourceCountryMutation = {
  __typename?: 'ResourceCountryMutation';
  Create?: Maybe<ProtoIoRestorecommerceCountryCountryList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommerceCountryCountryList>;
  Upsert?: Maybe<ProtoIoRestorecommerceCountryCountryList>;
};


export type ResourceCountryMutationCreateArgs = {
  input: IIoRestorecommerceCountryCountryList;
};


export type ResourceCountryMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type ResourceCountryMutationUpdateArgs = {
  input: IIoRestorecommerceCountryCountryList;
};


export type ResourceCountryMutationUpsertArgs = {
  input: IIoRestorecommerceCountryCountryList;
};

export type IIoRestorecommerceCountryCountryList = {
  items?: Maybe<Array<IIoRestorecommerceCountryCountry>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IIoRestorecommerceAuthSubject>;
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
  Create?: Maybe<ProtoIoRestorecommerceTimezoneTimezoneList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommerceTimezoneTimezoneList>;
  Upsert?: Maybe<ProtoIoRestorecommerceTimezoneTimezoneList>;
};


export type ResourceTimezoneMutationCreateArgs = {
  input: IIoRestorecommerceTimezoneTimezoneList;
};


export type ResourceTimezoneMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type ResourceTimezoneMutationUpdateArgs = {
  input: IIoRestorecommerceTimezoneTimezoneList;
};


export type ResourceTimezoneMutationUpsertArgs = {
  input: IIoRestorecommerceTimezoneTimezoneList;
};

export type IIoRestorecommerceTimezoneTimezoneList = {
  items?: Maybe<Array<IIoRestorecommerceTimezoneTimezone>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IIoRestorecommerceAuthSubject>;
};

export type IIoRestorecommerceTimezoneTimezone = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  value?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ResourceContactPointTypeMutation = {
  __typename?: 'ResourceContactPointTypeMutation';
  Create?: Maybe<ProtoIoRestorecommerceContactPointTypeContactPointTypeList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommerceContactPointTypeContactPointTypeList>;
  Upsert?: Maybe<ProtoIoRestorecommerceContactPointTypeContactPointTypeList>;
};


export type ResourceContactPointTypeMutationCreateArgs = {
  input: IIoRestorecommerceContactPointTypeContactPointTypeList;
};


export type ResourceContactPointTypeMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type ResourceContactPointTypeMutationUpdateArgs = {
  input: IIoRestorecommerceContactPointTypeContactPointTypeList;
};


export type ResourceContactPointTypeMutationUpsertArgs = {
  input: IIoRestorecommerceContactPointTypeContactPointTypeList;
};

export type IIoRestorecommerceContactPointTypeContactPointTypeList = {
  items?: Maybe<Array<IIoRestorecommerceContactPointTypeContactPointType>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IIoRestorecommerceAuthSubject>;
};

export type IIoRestorecommerceContactPointTypeContactPointType = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  type?: Maybe<Scalars['String']>;
};

export type ResourceCustomerMutation = {
  __typename?: 'ResourceCustomerMutation';
  Create?: Maybe<ProtoIoRestorecommerceCustomerCustomerList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommerceCustomerCustomerList>;
  Upsert?: Maybe<ProtoIoRestorecommerceCustomerCustomerList>;
};


export type ResourceCustomerMutationCreateArgs = {
  input: IIoRestorecommerceCustomerCustomerList;
};


export type ResourceCustomerMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type ResourceCustomerMutationUpdateArgs = {
  input: IIoRestorecommerceCustomerCustomerList;
};


export type ResourceCustomerMutationUpsertArgs = {
  input: IIoRestorecommerceCustomerCustomerList;
};

export type IIoRestorecommerceCustomerCustomerList = {
  items?: Maybe<Array<IIoRestorecommerceCustomerCustomer>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IIoRestorecommerceAuthSubject>;
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
  Create?: Maybe<ProtoIoRestorecommerceContactPointContactPointList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommerceContactPointContactPointList>;
  Upsert?: Maybe<ProtoIoRestorecommerceContactPointContactPointList>;
};


export type ResourceContactPointMutationCreateArgs = {
  input: IIoRestorecommerceContactPointContactPointList;
};


export type ResourceContactPointMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type ResourceContactPointMutationUpdateArgs = {
  input: IIoRestorecommerceContactPointContactPointList;
};


export type ResourceContactPointMutationUpsertArgs = {
  input: IIoRestorecommerceContactPointContactPointList;
};

export type IIoRestorecommerceContactPointContactPointList = {
  items?: Maybe<Array<IIoRestorecommerceContactPointContactPoint>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IIoRestorecommerceAuthSubject>;
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
  Create?: Maybe<ProtoIoRestorecommerceLocaleLocaleList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommerceLocaleLocaleList>;
  Upsert?: Maybe<ProtoIoRestorecommerceLocaleLocaleList>;
};


export type ResourceLocaleMutationCreateArgs = {
  input: IIoRestorecommerceLocaleLocaleList;
};


export type ResourceLocaleMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type ResourceLocaleMutationUpdateArgs = {
  input: IIoRestorecommerceLocaleLocaleList;
};


export type ResourceLocaleMutationUpsertArgs = {
  input: IIoRestorecommerceLocaleLocaleList;
};

export type IIoRestorecommerceLocaleLocaleList = {
  items?: Maybe<Array<IIoRestorecommerceLocaleLocale>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IIoRestorecommerceAuthSubject>;
};

export type IIoRestorecommerceLocaleLocale = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  value?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ResourceLocationMutation = {
  __typename?: 'ResourceLocationMutation';
  Create?: Maybe<ProtoIoRestorecommerceLocationLocationList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommerceLocationLocationList>;
  Upsert?: Maybe<ProtoIoRestorecommerceLocationLocationList>;
};


export type ResourceLocationMutationCreateArgs = {
  input: IIoRestorecommerceLocationLocationList;
};


export type ResourceLocationMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type ResourceLocationMutationUpdateArgs = {
  input: IIoRestorecommerceLocationLocationList;
};


export type ResourceLocationMutationUpsertArgs = {
  input: IIoRestorecommerceLocationLocationList;
};

export type IIoRestorecommerceLocationLocationList = {
  items?: Maybe<Array<IIoRestorecommerceLocationLocation>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IIoRestorecommerceAuthSubject>;
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
  Create?: Maybe<ProtoIoRestorecommerceOrganizationOrganizationList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommerceOrganizationOrganizationList>;
  Upsert?: Maybe<ProtoIoRestorecommerceOrganizationOrganizationList>;
};


export type ResourceOrganizationMutationCreateArgs = {
  input: IIoRestorecommerceOrganizationOrganizationList;
};


export type ResourceOrganizationMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type ResourceOrganizationMutationUpdateArgs = {
  input: IIoRestorecommerceOrganizationOrganizationList;
};


export type ResourceOrganizationMutationUpsertArgs = {
  input: IIoRestorecommerceOrganizationOrganizationList;
};

export type IIoRestorecommerceOrganizationOrganizationList = {
  items?: Maybe<Array<IIoRestorecommerceOrganizationOrganization>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IIoRestorecommerceAuthSubject>;
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
  Create?: Maybe<ProtoIoRestorecommerceTaxTaxList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommerceTaxTaxList>;
  Upsert?: Maybe<ProtoIoRestorecommerceTaxTaxList>;
};


export type ResourceTaxMutationCreateArgs = {
  input: IIoRestorecommerceTaxTaxList;
};


export type ResourceTaxMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type ResourceTaxMutationUpdateArgs = {
  input: IIoRestorecommerceTaxTaxList;
};


export type ResourceTaxMutationUpsertArgs = {
  input: IIoRestorecommerceTaxTaxList;
};

export type IIoRestorecommerceTaxTaxList = {
  items?: Maybe<Array<IIoRestorecommerceTaxTax>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IIoRestorecommerceAuthSubject>;
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
  Create?: Maybe<ProtoIoRestorecommerceTaxTypeTaxTypeList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommerceTaxTypeTaxTypeList>;
  Upsert?: Maybe<ProtoIoRestorecommerceTaxTypeTaxTypeList>;
};


export type ResourceTaxTypeMutationCreateArgs = {
  input: IIoRestorecommerceTaxTypeTaxTypeList;
};


export type ResourceTaxTypeMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type ResourceTaxTypeMutationUpdateArgs = {
  input: IIoRestorecommerceTaxTypeTaxTypeList;
};


export type ResourceTaxTypeMutationUpsertArgs = {
  input: IIoRestorecommerceTaxTypeTaxTypeList;
};

export type IIoRestorecommerceTaxTypeTaxTypeList = {
  items?: Maybe<Array<IIoRestorecommerceTaxTypeTaxType>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IIoRestorecommerceAuthSubject>;
};

export type IIoRestorecommerceTaxTypeTaxType = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ResourceCommandMutation = {
  __typename?: 'ResourceCommandMutation';
  Create?: Maybe<ProtoIoRestorecommerceCommandCommandList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommerceCommandCommandList>;
  Upsert?: Maybe<ProtoIoRestorecommerceCommandCommandList>;
};


export type ResourceCommandMutationCreateArgs = {
  input: IIoRestorecommerceCommandCommandList;
};


export type ResourceCommandMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type ResourceCommandMutationUpdateArgs = {
  input: IIoRestorecommerceCommandCommandList;
};


export type ResourceCommandMutationUpsertArgs = {
  input: IIoRestorecommerceCommandCommandList;
};

export type IIoRestorecommerceCommandCommandList = {
  items?: Maybe<Array<IIoRestorecommerceCommandCommand>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IIoRestorecommerceAuthSubject>;
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
  ProtoIoRestorecommerceAddressAddressList: ResolverTypeWrapper<ProtoIoRestorecommerceAddressAddressList>;
  StatusType: ResolverTypeWrapper<StatusType>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IoRestorecommerceAddressAddressList: ResolverTypeWrapper<IoRestorecommerceAddressAddressList>;
  IoRestorecommerceAddressAddress: ResolverTypeWrapper<IoRestorecommerceAddressAddress>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  IoRestorecommerceAddressAddressGeoPoint: ResolverTypeWrapper<IoRestorecommerceAddressAddressGeoPoint>;
  IoRestorecommerceAddressAddressAddition: ResolverTypeWrapper<IoRestorecommerceAddressAddressAddition>;
  IoRestorecommerceAuthSubject: ResolverTypeWrapper<IoRestorecommerceAuthSubject>;
  IoRestorecommerceAuthRoleAssociation: ResolverTypeWrapper<IoRestorecommerceAuthRoleAssociation>;
  IoRestorecommerceAuthHierarchicalScope: ResolverTypeWrapper<IoRestorecommerceAuthHierarchicalScope>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IoRestorecommerceResourcebaseSortSortOrder: IoRestorecommerceResourcebaseSortSortOrder;
  IGoogleProtobufStruct: IGoogleProtobufStruct;
  IGoogleProtobufStructFieldsEntry: IGoogleProtobufStructFieldsEntry;
  IGoogleProtobufValue: IGoogleProtobufValue;
  GoogleProtobufNullValue: GoogleProtobufNullValue;
  IGoogleProtobufListValue: IGoogleProtobufListValue;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  IGoogleProtobufAny: IGoogleProtobufAny;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  IIoRestorecommerceAuthSubject: IIoRestorecommerceAuthSubject;
  IIoRestorecommerceAuthRoleAssociation: IIoRestorecommerceAuthRoleAssociation;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAuthHierarchicalScope: IIoRestorecommerceAuthHierarchicalScope;
  ResourceCountryQuery: ResolverTypeWrapper<ResourceCountryQuery>;
  ProtoIoRestorecommerceCountryCountryList: ResolverTypeWrapper<ProtoIoRestorecommerceCountryCountryList>;
  IoRestorecommerceCountryCountryList: ResolverTypeWrapper<IoRestorecommerceCountryCountryList>;
  IoRestorecommerceCountryCountry: ResolverTypeWrapper<IoRestorecommerceCountryCountry>;
  ResourceTimezoneQuery: ResolverTypeWrapper<ResourceTimezoneQuery>;
  ProtoIoRestorecommerceTimezoneTimezoneList: ResolverTypeWrapper<ProtoIoRestorecommerceTimezoneTimezoneList>;
  IoRestorecommerceTimezoneTimezoneList: ResolverTypeWrapper<IoRestorecommerceTimezoneTimezoneList>;
  IoRestorecommerceTimezoneTimezone: ResolverTypeWrapper<IoRestorecommerceTimezoneTimezone>;
  ResourceContactPointTypeQuery: ResolverTypeWrapper<ResourceContactPointTypeQuery>;
  ProtoIoRestorecommerceContactPointTypeContactPointTypeList: ResolverTypeWrapper<ProtoIoRestorecommerceContactPointTypeContactPointTypeList>;
  IoRestorecommerceContactPointTypeContactPointTypeList: ResolverTypeWrapper<IoRestorecommerceContactPointTypeContactPointTypeList>;
  IoRestorecommerceContactPointTypeContactPointType: ResolverTypeWrapper<IoRestorecommerceContactPointTypeContactPointType>;
  ResourceCustomerQuery: ResolverTypeWrapper<ResourceCustomerQuery>;
  ProtoIoRestorecommerceCustomerCustomerList: ResolverTypeWrapper<ProtoIoRestorecommerceCustomerCustomerList>;
  IoRestorecommerceCustomerCustomerList: ResolverTypeWrapper<IoRestorecommerceCustomerCustomerList>;
  IoRestorecommerceCustomerCustomer: ResolverTypeWrapper<IoRestorecommerceCustomerCustomer>;
  IoRestorecommerceCustomerIndividualUser: ResolverTypeWrapper<IoRestorecommerceCustomerIndividualUser>;
  IoRestorecommerceCustomerOrgUser: ResolverTypeWrapper<IoRestorecommerceCustomerOrgUser>;
  IoRestorecommerceCustomerGuest: ResolverTypeWrapper<IoRestorecommerceCustomerGuest>;
  ResourceContactPointQuery: ResolverTypeWrapper<ResourceContactPointQuery>;
  ProtoIoRestorecommerceContactPointContactPointList: ResolverTypeWrapper<ProtoIoRestorecommerceContactPointContactPointList>;
  IoRestorecommerceContactPointContactPointList: ResolverTypeWrapper<IoRestorecommerceContactPointContactPointList>;
  IoRestorecommerceContactPointContactPoint: ResolverTypeWrapper<IoRestorecommerceContactPointContactPoint>;
  ResourceLocaleQuery: ResolverTypeWrapper<ResourceLocaleQuery>;
  ProtoIoRestorecommerceLocaleLocaleList: ResolverTypeWrapper<ProtoIoRestorecommerceLocaleLocaleList>;
  IoRestorecommerceLocaleLocaleList: ResolverTypeWrapper<IoRestorecommerceLocaleLocaleList>;
  IoRestorecommerceLocaleLocale: ResolverTypeWrapper<IoRestorecommerceLocaleLocale>;
  ResourceLocationQuery: ResolverTypeWrapper<ResourceLocationQuery>;
  ProtoIoRestorecommerceLocationLocationList: ResolverTypeWrapper<ProtoIoRestorecommerceLocationLocationList>;
  IoRestorecommerceLocationLocationList: ResolverTypeWrapper<IoRestorecommerceLocationLocationList>;
  IoRestorecommerceLocationLocation: ResolverTypeWrapper<IoRestorecommerceLocationLocation>;
  GoogleProtobufAny: ResolverTypeWrapper<GoogleProtobufAny>;
  TodoScalar: ResolverTypeWrapper<Scalars['TodoScalar']>;
  ResourceOrganizationQuery: ResolverTypeWrapper<ResourceOrganizationQuery>;
  ProtoIoRestorecommerceOrganizationOrganizationList: ResolverTypeWrapper<ProtoIoRestorecommerceOrganizationOrganizationList>;
  IoRestorecommerceOrganizationOrganizationList: ResolverTypeWrapper<IoRestorecommerceOrganizationOrganizationList>;
  IoRestorecommerceOrganizationOrganization: ResolverTypeWrapper<IoRestorecommerceOrganizationOrganization>;
  ResourceTaxQuery: ResolverTypeWrapper<ResourceTaxQuery>;
  ProtoIoRestorecommerceTaxTaxList: ResolverTypeWrapper<ProtoIoRestorecommerceTaxTaxList>;
  IoRestorecommerceTaxTaxList: ResolverTypeWrapper<IoRestorecommerceTaxTaxList>;
  IoRestorecommerceTaxTax: ResolverTypeWrapper<IoRestorecommerceTaxTax>;
  ResourceTaxTypeQuery: ResolverTypeWrapper<ResourceTaxTypeQuery>;
  ProtoIoRestorecommerceTaxTypeTaxTypeList: ResolverTypeWrapper<ProtoIoRestorecommerceTaxTypeTaxTypeList>;
  IoRestorecommerceTaxTypeTaxTypeList: ResolverTypeWrapper<IoRestorecommerceTaxTypeTaxTypeList>;
  IoRestorecommerceTaxTypeTaxType: ResolverTypeWrapper<IoRestorecommerceTaxTypeTaxType>;
  ResourceCommandQuery: ResolverTypeWrapper<ResourceCommandQuery>;
  ProtoIoRestorecommerceCommandCommandList: ResolverTypeWrapper<ProtoIoRestorecommerceCommandCommandList>;
  IoRestorecommerceCommandCommandList: ResolverTypeWrapper<IoRestorecommerceCommandCommandList>;
  IoRestorecommerceCommandCommand: ResolverTypeWrapper<IoRestorecommerceCommandCommand>;
  IoRestorecommerceCommandCommandParameter: ResolverTypeWrapper<IoRestorecommerceCommandCommandParameter>;
  IoRestorecommerceCommandCommandParameterParameterType: IoRestorecommerceCommandCommandParameterParameterType;
  Mutation: ResolverTypeWrapper<{}>;
  ResourceMutation: ResolverTypeWrapper<ResourceMutation>;
  ResourceAddressMutation: ResolverTypeWrapper<ResourceAddressMutation>;
  IIoRestorecommerceAddressAddressList: IIoRestorecommerceAddressAddressList;
  IIoRestorecommerceAddressAddress: IIoRestorecommerceAddressAddress;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceAddressAddressGeoPoint: IIoRestorecommerceAddressAddressGeoPoint;
  IIoRestorecommerceAddressAddressAddition: IIoRestorecommerceAddressAddressAddition;
  ProtoGoogleProtobufEmpty: ResolverTypeWrapper<ProtoGoogleProtobufEmpty>;
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
  ProtoIoRestorecommerceAddressAddressList: ProtoIoRestorecommerceAddressAddressList;
  StatusType: StatusType;
  String: Scalars['String'];
  Int: Scalars['Int'];
  IoRestorecommerceAddressAddressList: IoRestorecommerceAddressAddressList;
  IoRestorecommerceAddressAddress: IoRestorecommerceAddressAddress;
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  Float: Scalars['Float'];
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  IoRestorecommerceAddressAddressGeoPoint: IoRestorecommerceAddressAddressGeoPoint;
  IoRestorecommerceAddressAddressAddition: IoRestorecommerceAddressAddressAddition;
  IoRestorecommerceAuthSubject: IoRestorecommerceAuthSubject;
  IoRestorecommerceAuthRoleAssociation: IoRestorecommerceAuthRoleAssociation;
  IoRestorecommerceAuthHierarchicalScope: IoRestorecommerceAuthHierarchicalScope;
  Boolean: Scalars['Boolean'];
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IGoogleProtobufStruct: IGoogleProtobufStruct;
  IGoogleProtobufStructFieldsEntry: IGoogleProtobufStructFieldsEntry;
  IGoogleProtobufValue: IGoogleProtobufValue;
  IGoogleProtobufListValue: IGoogleProtobufListValue;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  IGoogleProtobufAny: IGoogleProtobufAny;
  Upload: Scalars['Upload'];
  IIoRestorecommerceAuthSubject: IIoRestorecommerceAuthSubject;
  IIoRestorecommerceAuthRoleAssociation: IIoRestorecommerceAuthRoleAssociation;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAuthHierarchicalScope: IIoRestorecommerceAuthHierarchicalScope;
  ResourceCountryQuery: ResourceCountryQuery;
  ProtoIoRestorecommerceCountryCountryList: ProtoIoRestorecommerceCountryCountryList;
  IoRestorecommerceCountryCountryList: IoRestorecommerceCountryCountryList;
  IoRestorecommerceCountryCountry: IoRestorecommerceCountryCountry;
  ResourceTimezoneQuery: ResourceTimezoneQuery;
  ProtoIoRestorecommerceTimezoneTimezoneList: ProtoIoRestorecommerceTimezoneTimezoneList;
  IoRestorecommerceTimezoneTimezoneList: IoRestorecommerceTimezoneTimezoneList;
  IoRestorecommerceTimezoneTimezone: IoRestorecommerceTimezoneTimezone;
  ResourceContactPointTypeQuery: ResourceContactPointTypeQuery;
  ProtoIoRestorecommerceContactPointTypeContactPointTypeList: ProtoIoRestorecommerceContactPointTypeContactPointTypeList;
  IoRestorecommerceContactPointTypeContactPointTypeList: IoRestorecommerceContactPointTypeContactPointTypeList;
  IoRestorecommerceContactPointTypeContactPointType: IoRestorecommerceContactPointTypeContactPointType;
  ResourceCustomerQuery: ResourceCustomerQuery;
  ProtoIoRestorecommerceCustomerCustomerList: ProtoIoRestorecommerceCustomerCustomerList;
  IoRestorecommerceCustomerCustomerList: IoRestorecommerceCustomerCustomerList;
  IoRestorecommerceCustomerCustomer: IoRestorecommerceCustomerCustomer;
  IoRestorecommerceCustomerIndividualUser: IoRestorecommerceCustomerIndividualUser;
  IoRestorecommerceCustomerOrgUser: IoRestorecommerceCustomerOrgUser;
  IoRestorecommerceCustomerGuest: IoRestorecommerceCustomerGuest;
  ResourceContactPointQuery: ResourceContactPointQuery;
  ProtoIoRestorecommerceContactPointContactPointList: ProtoIoRestorecommerceContactPointContactPointList;
  IoRestorecommerceContactPointContactPointList: IoRestorecommerceContactPointContactPointList;
  IoRestorecommerceContactPointContactPoint: IoRestorecommerceContactPointContactPoint;
  ResourceLocaleQuery: ResourceLocaleQuery;
  ProtoIoRestorecommerceLocaleLocaleList: ProtoIoRestorecommerceLocaleLocaleList;
  IoRestorecommerceLocaleLocaleList: IoRestorecommerceLocaleLocaleList;
  IoRestorecommerceLocaleLocale: IoRestorecommerceLocaleLocale;
  ResourceLocationQuery: ResourceLocationQuery;
  ProtoIoRestorecommerceLocationLocationList: ProtoIoRestorecommerceLocationLocationList;
  IoRestorecommerceLocationLocationList: IoRestorecommerceLocationLocationList;
  IoRestorecommerceLocationLocation: IoRestorecommerceLocationLocation;
  GoogleProtobufAny: GoogleProtobufAny;
  TodoScalar: Scalars['TodoScalar'];
  ResourceOrganizationQuery: ResourceOrganizationQuery;
  ProtoIoRestorecommerceOrganizationOrganizationList: ProtoIoRestorecommerceOrganizationOrganizationList;
  IoRestorecommerceOrganizationOrganizationList: IoRestorecommerceOrganizationOrganizationList;
  IoRestorecommerceOrganizationOrganization: IoRestorecommerceOrganizationOrganization;
  ResourceTaxQuery: ResourceTaxQuery;
  ProtoIoRestorecommerceTaxTaxList: ProtoIoRestorecommerceTaxTaxList;
  IoRestorecommerceTaxTaxList: IoRestorecommerceTaxTaxList;
  IoRestorecommerceTaxTax: IoRestorecommerceTaxTax;
  ResourceTaxTypeQuery: ResourceTaxTypeQuery;
  ProtoIoRestorecommerceTaxTypeTaxTypeList: ProtoIoRestorecommerceTaxTypeTaxTypeList;
  IoRestorecommerceTaxTypeTaxTypeList: IoRestorecommerceTaxTypeTaxTypeList;
  IoRestorecommerceTaxTypeTaxType: IoRestorecommerceTaxTypeTaxType;
  ResourceCommandQuery: ResourceCommandQuery;
  ProtoIoRestorecommerceCommandCommandList: ProtoIoRestorecommerceCommandCommandList;
  IoRestorecommerceCommandCommandList: IoRestorecommerceCommandCommandList;
  IoRestorecommerceCommandCommand: IoRestorecommerceCommandCommand;
  IoRestorecommerceCommandCommandParameter: IoRestorecommerceCommandCommandParameter;
  Mutation: {};
  ResourceMutation: ResourceMutation;
  ResourceAddressMutation: ResourceAddressMutation;
  IIoRestorecommerceAddressAddressList: IIoRestorecommerceAddressAddressList;
  IIoRestorecommerceAddressAddress: IIoRestorecommerceAddressAddress;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceAddressAddressGeoPoint: IIoRestorecommerceAddressAddressGeoPoint;
  IIoRestorecommerceAddressAddressAddition: IIoRestorecommerceAddressAddressAddition;
  ProtoGoogleProtobufEmpty: ProtoGoogleProtobufEmpty;
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
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceAddressAddressList']>, ParentType, ContextType, RequireFields<ResourceAddressQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceAddressAddressListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceAddressAddressList'] = ResolversParentTypes['ProtoIoRestorecommerceAddressAddressList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressAddressList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StatusTypeResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['StatusType'] = ResolversParentTypes['StatusType']> = ResolversObject<{
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressAddressListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressAddressList'] = ResolversParentTypes['IoRestorecommerceAddressAddressList']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAddressAddress']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAuthSubject']>, ParentType, ContextType>;
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

export type IoRestorecommerceAuthSubjectResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthSubject'] = ResolversParentTypes['IoRestorecommerceAuthSubject']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roleAssociations?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAuthRoleAssociation']>>, ParentType, ContextType>;
  hierarchicalScopes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAuthHierarchicalScope']>>, ParentType, ContextType>;
  unauthenticated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthRoleAssociationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthRoleAssociation'] = ResolversParentTypes['IoRestorecommerceAuthRoleAssociation']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthHierarchicalScopeResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthHierarchicalScope'] = ResolversParentTypes['IoRestorecommerceAuthHierarchicalScope']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  children?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAuthHierarchicalScope']>>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseSortSortOrderResolvers = { UNSORTED: 'undefined', ASCENDING: 1, DESCENDING: 2 };

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type ResourceCountryQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceCountryQuery'] = ResolversParentTypes['ResourceCountryQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCountryCountryList']>, ParentType, ContextType, RequireFields<ResourceCountryQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceCountryCountryListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceCountryCountryList'] = ResolversParentTypes['ProtoIoRestorecommerceCountryCountryList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCountryCountryList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCountryCountryListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCountryCountryList'] = ResolversParentTypes['IoRestorecommerceCountryCountryList']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceCountryCountry']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAuthSubject']>, ParentType, ContextType>;
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
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTimezoneTimezoneList']>, ParentType, ContextType, RequireFields<ResourceTimezoneQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceTimezoneTimezoneListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceTimezoneTimezoneList'] = ResolversParentTypes['ProtoIoRestorecommerceTimezoneTimezoneList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceTimezoneTimezoneList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTimezoneTimezoneListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceTimezoneTimezoneList'] = ResolversParentTypes['IoRestorecommerceTimezoneTimezoneList']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceTimezoneTimezone']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAuthSubject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTimezoneTimezoneResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceTimezoneTimezone'] = ResolversParentTypes['IoRestorecommerceTimezoneTimezone']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceContactPointTypeQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceContactPointTypeQuery'] = ResolversParentTypes['ResourceContactPointTypeQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceContactPointTypeContactPointTypeList']>, ParentType, ContextType, RequireFields<ResourceContactPointTypeQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceContactPointTypeContactPointTypeListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceContactPointTypeContactPointTypeList'] = ResolversParentTypes['ProtoIoRestorecommerceContactPointTypeContactPointTypeList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceContactPointTypeContactPointTypeList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceContactPointTypeContactPointTypeListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceContactPointTypeContactPointTypeList'] = ResolversParentTypes['IoRestorecommerceContactPointTypeContactPointTypeList']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceContactPointTypeContactPointType']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAuthSubject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceContactPointTypeContactPointTypeResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceContactPointTypeContactPointType'] = ResolversParentTypes['IoRestorecommerceContactPointTypeContactPointType']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceCustomerQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceCustomerQuery'] = ResolversParentTypes['ResourceCustomerQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCustomerCustomerList']>, ParentType, ContextType, RequireFields<ResourceCustomerQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceCustomerCustomerListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceCustomerCustomerList'] = ResolversParentTypes['ProtoIoRestorecommerceCustomerCustomerList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCustomerCustomerList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCustomerCustomerListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerCustomerList'] = ResolversParentTypes['IoRestorecommerceCustomerCustomerList']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceCustomerCustomer']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAuthSubject']>, ParentType, ContextType>;
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
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceContactPointContactPointList']>, ParentType, ContextType, RequireFields<ResourceContactPointQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceContactPointContactPointListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceContactPointContactPointList'] = ResolversParentTypes['ProtoIoRestorecommerceContactPointContactPointList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceContactPointContactPointList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceContactPointContactPointListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceContactPointContactPointList'] = ResolversParentTypes['IoRestorecommerceContactPointContactPointList']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceContactPointContactPoint']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAuthSubject']>, ParentType, ContextType>;
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
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceLocaleLocaleList']>, ParentType, ContextType, RequireFields<ResourceLocaleQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceLocaleLocaleListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceLocaleLocaleList'] = ResolversParentTypes['ProtoIoRestorecommerceLocaleLocaleList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceLocaleLocaleList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceLocaleLocaleListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceLocaleLocaleList'] = ResolversParentTypes['IoRestorecommerceLocaleLocaleList']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceLocaleLocale']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAuthSubject']>, ParentType, ContextType>;
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
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceLocationLocationList']>, ParentType, ContextType, RequireFields<ResourceLocationQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceLocationLocationListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceLocationLocationList'] = ResolversParentTypes['ProtoIoRestorecommerceLocationLocationList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceLocationLocationList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceLocationLocationListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceLocationLocationList'] = ResolversParentTypes['IoRestorecommerceLocationLocationList']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceLocationLocation']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAuthSubject']>, ParentType, ContextType>;
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
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOrganizationOrganizationList']>, ParentType, ContextType, RequireFields<ResourceOrganizationQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceOrganizationOrganizationListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOrganizationOrganizationList'] = ResolversParentTypes['ProtoIoRestorecommerceOrganizationOrganizationList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrganizationOrganizationList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOrganizationOrganizationListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceOrganizationOrganizationList'] = ResolversParentTypes['IoRestorecommerceOrganizationOrganizationList']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceOrganizationOrganization']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAuthSubject']>, ParentType, ContextType>;
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
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTaxTaxList']>, ParentType, ContextType, RequireFields<ResourceTaxQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceTaxTaxListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceTaxTaxList'] = ResolversParentTypes['ProtoIoRestorecommerceTaxTaxList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceTaxTaxList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTaxTaxListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceTaxTaxList'] = ResolversParentTypes['IoRestorecommerceTaxTaxList']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceTaxTax']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAuthSubject']>, ParentType, ContextType>;
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
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTaxTypeTaxTypeList']>, ParentType, ContextType, RequireFields<ResourceTaxTypeQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceTaxTypeTaxTypeListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceTaxTypeTaxTypeList'] = ResolversParentTypes['ProtoIoRestorecommerceTaxTypeTaxTypeList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceTaxTypeTaxTypeList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTaxTypeTaxTypeListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceTaxTypeTaxTypeList'] = ResolversParentTypes['IoRestorecommerceTaxTypeTaxTypeList']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceTaxTypeTaxType']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAuthSubject']>, ParentType, ContextType>;
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
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCommandCommandList']>, ParentType, ContextType, RequireFields<ResourceCommandQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceCommandCommandListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceCommandCommandList'] = ResolversParentTypes['ProtoIoRestorecommerceCommandCommandList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCommandCommandList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCommandCommandListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCommandCommandList'] = ResolversParentTypes['IoRestorecommerceCommandCommandList']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceCommandCommand']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAuthSubject']>, ParentType, ContextType>;
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
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceAddressAddressList']>, ParentType, ContextType, RequireFields<ResourceAddressMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<ResourceAddressMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceAddressAddressList']>, ParentType, ContextType, RequireFields<ResourceAddressMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceAddressAddressList']>, ParentType, ContextType, RequireFields<ResourceAddressMutationUpsertArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoGoogleProtobufEmptyResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoGoogleProtobufEmpty'] = ResolversParentTypes['ProtoGoogleProtobufEmpty']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceCountryMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceCountryMutation'] = ResolversParentTypes['ResourceCountryMutation']> = ResolversObject<{
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCountryCountryList']>, ParentType, ContextType, RequireFields<ResourceCountryMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<ResourceCountryMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCountryCountryList']>, ParentType, ContextType, RequireFields<ResourceCountryMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCountryCountryList']>, ParentType, ContextType, RequireFields<ResourceCountryMutationUpsertArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceTimezoneMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceTimezoneMutation'] = ResolversParentTypes['ResourceTimezoneMutation']> = ResolversObject<{
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTimezoneTimezoneList']>, ParentType, ContextType, RequireFields<ResourceTimezoneMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<ResourceTimezoneMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTimezoneTimezoneList']>, ParentType, ContextType, RequireFields<ResourceTimezoneMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTimezoneTimezoneList']>, ParentType, ContextType, RequireFields<ResourceTimezoneMutationUpsertArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceContactPointTypeMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceContactPointTypeMutation'] = ResolversParentTypes['ResourceContactPointTypeMutation']> = ResolversObject<{
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceContactPointTypeContactPointTypeList']>, ParentType, ContextType, RequireFields<ResourceContactPointTypeMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<ResourceContactPointTypeMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceContactPointTypeContactPointTypeList']>, ParentType, ContextType, RequireFields<ResourceContactPointTypeMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceContactPointTypeContactPointTypeList']>, ParentType, ContextType, RequireFields<ResourceContactPointTypeMutationUpsertArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceCustomerMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceCustomerMutation'] = ResolversParentTypes['ResourceCustomerMutation']> = ResolversObject<{
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCustomerCustomerList']>, ParentType, ContextType, RequireFields<ResourceCustomerMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<ResourceCustomerMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCustomerCustomerList']>, ParentType, ContextType, RequireFields<ResourceCustomerMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCustomerCustomerList']>, ParentType, ContextType, RequireFields<ResourceCustomerMutationUpsertArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceContactPointMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceContactPointMutation'] = ResolversParentTypes['ResourceContactPointMutation']> = ResolversObject<{
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceContactPointContactPointList']>, ParentType, ContextType, RequireFields<ResourceContactPointMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<ResourceContactPointMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceContactPointContactPointList']>, ParentType, ContextType, RequireFields<ResourceContactPointMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceContactPointContactPointList']>, ParentType, ContextType, RequireFields<ResourceContactPointMutationUpsertArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceLocaleMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceLocaleMutation'] = ResolversParentTypes['ResourceLocaleMutation']> = ResolversObject<{
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceLocaleLocaleList']>, ParentType, ContextType, RequireFields<ResourceLocaleMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<ResourceLocaleMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceLocaleLocaleList']>, ParentType, ContextType, RequireFields<ResourceLocaleMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceLocaleLocaleList']>, ParentType, ContextType, RequireFields<ResourceLocaleMutationUpsertArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceLocationMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceLocationMutation'] = ResolversParentTypes['ResourceLocationMutation']> = ResolversObject<{
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceLocationLocationList']>, ParentType, ContextType, RequireFields<ResourceLocationMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<ResourceLocationMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceLocationLocationList']>, ParentType, ContextType, RequireFields<ResourceLocationMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceLocationLocationList']>, ParentType, ContextType, RequireFields<ResourceLocationMutationUpsertArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceOrganizationMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceOrganizationMutation'] = ResolversParentTypes['ResourceOrganizationMutation']> = ResolversObject<{
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOrganizationOrganizationList']>, ParentType, ContextType, RequireFields<ResourceOrganizationMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<ResourceOrganizationMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOrganizationOrganizationList']>, ParentType, ContextType, RequireFields<ResourceOrganizationMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOrganizationOrganizationList']>, ParentType, ContextType, RequireFields<ResourceOrganizationMutationUpsertArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceTaxMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceTaxMutation'] = ResolversParentTypes['ResourceTaxMutation']> = ResolversObject<{
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTaxTaxList']>, ParentType, ContextType, RequireFields<ResourceTaxMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<ResourceTaxMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTaxTaxList']>, ParentType, ContextType, RequireFields<ResourceTaxMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTaxTaxList']>, ParentType, ContextType, RequireFields<ResourceTaxMutationUpsertArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceTaxTypeMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceTaxTypeMutation'] = ResolversParentTypes['ResourceTaxTypeMutation']> = ResolversObject<{
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTaxTypeTaxTypeList']>, ParentType, ContextType, RequireFields<ResourceTaxTypeMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<ResourceTaxTypeMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTaxTypeTaxTypeList']>, ParentType, ContextType, RequireFields<ResourceTaxTypeMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTaxTypeTaxTypeList']>, ParentType, ContextType, RequireFields<ResourceTaxTypeMutationUpsertArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceCommandMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceCommandMutation'] = ResolversParentTypes['ResourceCommandMutation']> = ResolversObject<{
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCommandCommandList']>, ParentType, ContextType, RequireFields<ResourceCommandMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<ResourceCommandMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCommandCommandList']>, ParentType, ContextType, RequireFields<ResourceCommandMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCommandCommandList']>, ParentType, ContextType, RequireFields<ResourceCommandMutationUpsertArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = ResourceContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  ResourceQuery?: ResourceQueryResolvers<ContextType>;
  ResourceAddressQuery?: ResourceAddressQueryResolvers<ContextType>;
  ProtoIoRestorecommerceAddressAddressList?: ProtoIoRestorecommerceAddressAddressListResolvers<ContextType>;
  StatusType?: StatusTypeResolvers<ContextType>;
  IoRestorecommerceAddressAddressList?: IoRestorecommerceAddressAddressListResolvers<ContextType>;
  IoRestorecommerceAddressAddress?: IoRestorecommerceAddressAddressResolvers<ContextType>;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
  IoRestorecommerceAddressAddressGeoPoint?: IoRestorecommerceAddressAddressGeoPointResolvers<ContextType>;
  IoRestorecommerceAddressAddressAddition?: IoRestorecommerceAddressAddressAdditionResolvers<ContextType>;
  IoRestorecommerceAuthSubject?: IoRestorecommerceAuthSubjectResolvers<ContextType>;
  IoRestorecommerceAuthRoleAssociation?: IoRestorecommerceAuthRoleAssociationResolvers<ContextType>;
  IoRestorecommerceAuthHierarchicalScope?: IoRestorecommerceAuthHierarchicalScopeResolvers<ContextType>;
  IoRestorecommerceResourcebaseSortSortOrder?: IoRestorecommerceResourcebaseSortSortOrderResolvers;
  Upload?: GraphQLScalarType;
  ResourceCountryQuery?: ResourceCountryQueryResolvers<ContextType>;
  ProtoIoRestorecommerceCountryCountryList?: ProtoIoRestorecommerceCountryCountryListResolvers<ContextType>;
  IoRestorecommerceCountryCountryList?: IoRestorecommerceCountryCountryListResolvers<ContextType>;
  IoRestorecommerceCountryCountry?: IoRestorecommerceCountryCountryResolvers<ContextType>;
  ResourceTimezoneQuery?: ResourceTimezoneQueryResolvers<ContextType>;
  ProtoIoRestorecommerceTimezoneTimezoneList?: ProtoIoRestorecommerceTimezoneTimezoneListResolvers<ContextType>;
  IoRestorecommerceTimezoneTimezoneList?: IoRestorecommerceTimezoneTimezoneListResolvers<ContextType>;
  IoRestorecommerceTimezoneTimezone?: IoRestorecommerceTimezoneTimezoneResolvers<ContextType>;
  ResourceContactPointTypeQuery?: ResourceContactPointTypeQueryResolvers<ContextType>;
  ProtoIoRestorecommerceContactPointTypeContactPointTypeList?: ProtoIoRestorecommerceContactPointTypeContactPointTypeListResolvers<ContextType>;
  IoRestorecommerceContactPointTypeContactPointTypeList?: IoRestorecommerceContactPointTypeContactPointTypeListResolvers<ContextType>;
  IoRestorecommerceContactPointTypeContactPointType?: IoRestorecommerceContactPointTypeContactPointTypeResolvers<ContextType>;
  ResourceCustomerQuery?: ResourceCustomerQueryResolvers<ContextType>;
  ProtoIoRestorecommerceCustomerCustomerList?: ProtoIoRestorecommerceCustomerCustomerListResolvers<ContextType>;
  IoRestorecommerceCustomerCustomerList?: IoRestorecommerceCustomerCustomerListResolvers<ContextType>;
  IoRestorecommerceCustomerCustomer?: IoRestorecommerceCustomerCustomerResolvers<ContextType>;
  IoRestorecommerceCustomerIndividualUser?: IoRestorecommerceCustomerIndividualUserResolvers<ContextType>;
  IoRestorecommerceCustomerOrgUser?: IoRestorecommerceCustomerOrgUserResolvers<ContextType>;
  IoRestorecommerceCustomerGuest?: IoRestorecommerceCustomerGuestResolvers<ContextType>;
  ResourceContactPointQuery?: ResourceContactPointQueryResolvers<ContextType>;
  ProtoIoRestorecommerceContactPointContactPointList?: ProtoIoRestorecommerceContactPointContactPointListResolvers<ContextType>;
  IoRestorecommerceContactPointContactPointList?: IoRestorecommerceContactPointContactPointListResolvers<ContextType>;
  IoRestorecommerceContactPointContactPoint?: IoRestorecommerceContactPointContactPointResolvers<ContextType>;
  ResourceLocaleQuery?: ResourceLocaleQueryResolvers<ContextType>;
  ProtoIoRestorecommerceLocaleLocaleList?: ProtoIoRestorecommerceLocaleLocaleListResolvers<ContextType>;
  IoRestorecommerceLocaleLocaleList?: IoRestorecommerceLocaleLocaleListResolvers<ContextType>;
  IoRestorecommerceLocaleLocale?: IoRestorecommerceLocaleLocaleResolvers<ContextType>;
  ResourceLocationQuery?: ResourceLocationQueryResolvers<ContextType>;
  ProtoIoRestorecommerceLocationLocationList?: ProtoIoRestorecommerceLocationLocationListResolvers<ContextType>;
  IoRestorecommerceLocationLocationList?: IoRestorecommerceLocationLocationListResolvers<ContextType>;
  IoRestorecommerceLocationLocation?: IoRestorecommerceLocationLocationResolvers<ContextType>;
  GoogleProtobufAny?: GoogleProtobufAnyResolvers<ContextType>;
  TodoScalar?: GraphQLScalarType;
  ResourceOrganizationQuery?: ResourceOrganizationQueryResolvers<ContextType>;
  ProtoIoRestorecommerceOrganizationOrganizationList?: ProtoIoRestorecommerceOrganizationOrganizationListResolvers<ContextType>;
  IoRestorecommerceOrganizationOrganizationList?: IoRestorecommerceOrganizationOrganizationListResolvers<ContextType>;
  IoRestorecommerceOrganizationOrganization?: IoRestorecommerceOrganizationOrganizationResolvers<ContextType>;
  ResourceTaxQuery?: ResourceTaxQueryResolvers<ContextType>;
  ProtoIoRestorecommerceTaxTaxList?: ProtoIoRestorecommerceTaxTaxListResolvers<ContextType>;
  IoRestorecommerceTaxTaxList?: IoRestorecommerceTaxTaxListResolvers<ContextType>;
  IoRestorecommerceTaxTax?: IoRestorecommerceTaxTaxResolvers<ContextType>;
  ResourceTaxTypeQuery?: ResourceTaxTypeQueryResolvers<ContextType>;
  ProtoIoRestorecommerceTaxTypeTaxTypeList?: ProtoIoRestorecommerceTaxTypeTaxTypeListResolvers<ContextType>;
  IoRestorecommerceTaxTypeTaxTypeList?: IoRestorecommerceTaxTypeTaxTypeListResolvers<ContextType>;
  IoRestorecommerceTaxTypeTaxType?: IoRestorecommerceTaxTypeTaxTypeResolvers<ContextType>;
  ResourceCommandQuery?: ResourceCommandQueryResolvers<ContextType>;
  ProtoIoRestorecommerceCommandCommandList?: ProtoIoRestorecommerceCommandCommandListResolvers<ContextType>;
  IoRestorecommerceCommandCommandList?: IoRestorecommerceCommandCommandListResolvers<ContextType>;
  IoRestorecommerceCommandCommand?: IoRestorecommerceCommandCommandResolvers<ContextType>;
  IoRestorecommerceCommandCommandParameter?: IoRestorecommerceCommandCommandParameterResolvers<ContextType>;
  IoRestorecommerceCommandCommandParameterParameterType?: IoRestorecommerceCommandCommandParameterParameterTypeResolvers;
  Mutation?: MutationResolvers<ContextType>;
  ResourceMutation?: ResourceMutationResolvers<ContextType>;
  ResourceAddressMutation?: ResourceAddressMutationResolvers<ContextType>;
  ProtoGoogleProtobufEmpty?: ProtoGoogleProtobufEmptyResolvers<ContextType>;
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
