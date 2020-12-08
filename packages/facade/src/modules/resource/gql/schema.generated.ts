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
  MapScalar: any;
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
  contact_point_type: ResourceContact_Point_TypeQuery;
  customer: ResourceCustomerQuery;
  contact_point: ResourceContact_PointQuery;
  locale: ResourceLocaleQuery;
  location: ResourceLocationQuery;
  organization: ResourceOrganizationQuery;
  tax: ResourceTaxQuery;
  tax_type: ResourceTax_TypeQuery;
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
  items: Array<IoRestorecommerceAddressAddress>;
  totalCount: Scalars['Int'];
  subject: IoRestorecommerceAuthSubject;
};

export type IoRestorecommerceAddressAddress = {
  __typename?: 'IoRestorecommerceAddressAddress';
  id: Scalars['String'];
  meta: IoRestorecommerceMetaMeta;
  postcode: Scalars['String'];
  countryId: Scalars['String'];
  locality: Scalars['String'];
  street: Scalars['String'];
  region: Scalars['String'];
  geoCoordinates: IoRestorecommerceAddressAddressGeoPoint;
  altitude: Scalars['Float'];
  buildingNumber: Scalars['String'];
  addressAddition: IoRestorecommerceAddressAddressAddition;
};

export type IoRestorecommerceMetaMeta = {
  __typename?: 'IoRestorecommerceMetaMeta';
  created: Scalars['Float'];
  modified: Scalars['Float'];
  modifiedBy: Scalars['String'];
  owner: Array<IoRestorecommerceAttributeAttribute>;
};

export type IoRestorecommerceAttributeAttribute = {
  __typename?: 'IoRestorecommerceAttributeAttribute';
  id: Scalars['String'];
  value: Scalars['String'];
};

export type IoRestorecommerceAddressAddressGeoPoint = {
  __typename?: 'IoRestorecommerceAddressAddressGeoPoint';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type IoRestorecommerceAddressAddressAddition = {
  __typename?: 'IoRestorecommerceAddressAddressAddition';
  field1: Scalars['String'];
  field2: Scalars['String'];
};

export type IoRestorecommerceAuthSubject = {
  __typename?: 'IoRestorecommerceAuthSubject';
  id: Scalars['String'];
  scope: Scalars['String'];
  roleAssociations: Array<IoRestorecommerceAuthRoleAssociation>;
  hierarchicalScopes: Array<IoRestorecommerceAuthHierarchicalScope>;
  unauthenticated: Scalars['Boolean'];
  token: Scalars['String'];
};

export type IoRestorecommerceAuthRoleAssociation = {
  __typename?: 'IoRestorecommerceAuthRoleAssociation';
  role: Scalars['String'];
  attributes: Array<IoRestorecommerceAttributeAttribute>;
  id: Scalars['String'];
};

export type IoRestorecommerceAuthHierarchicalScope = {
  __typename?: 'IoRestorecommerceAuthHierarchicalScope';
  id: Scalars['String'];
  children: Array<IoRestorecommerceAuthHierarchicalScope>;
  role: Scalars['String'];
};

export type IIoRestorecommerceResourcebaseReadRequest = {
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  sort: Array<IIoRestorecommerceResourcebaseSort>;
  filter: IGoogleProtobufStruct;
  field: Array<IIoRestorecommerceResourcebaseFieldFilter>;
  search: Array<Scalars['String']>;
  localesLimiter: Array<Scalars['String']>;
  customQueries: Array<Scalars['String']>;
  customArguments: IGoogleProtobufAny;
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceResourcebaseSort = {
  field: Scalars['String'];
  order: IoRestorecommerceResourcebaseSortSortOrder;
};

export enum IoRestorecommerceResourcebaseSortSortOrder {
  Unsorted = 0,
  Ascending = 1,
  Descending = 2,
  Unrecognized = -1
}

export type IGoogleProtobufStruct = {
  fields: Scalars['MapScalar'];
};


export type IIoRestorecommerceResourcebaseFieldFilter = {
  name: Scalars['String'];
  include: Scalars['Boolean'];
};

export type IGoogleProtobufAny = {
  typeUrl: Scalars['String'];
  value: Scalars['Upload'];
};


export type IIoRestorecommerceAuthSubject = {
  id: Scalars['String'];
  scope: Scalars['String'];
  roleAssociations: Array<IIoRestorecommerceAuthRoleAssociation>;
  hierarchicalScopes: Array<IIoRestorecommerceAuthHierarchicalScope>;
  unauthenticated: Scalars['Boolean'];
  token: Scalars['String'];
};

export type IIoRestorecommerceAuthRoleAssociation = {
  role: Scalars['String'];
  attributes: Array<IIoRestorecommerceAttributeAttribute>;
  id: Scalars['String'];
};

export type IIoRestorecommerceAttributeAttribute = {
  id: Scalars['String'];
  value: Scalars['String'];
};

export type IIoRestorecommerceAuthHierarchicalScope = {
  id: Scalars['String'];
  children: Array<IIoRestorecommerceAuthHierarchicalScope>;
  role: Scalars['String'];
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
  items: Array<IoRestorecommerceCountryCountry>;
  totalCount: Scalars['Int'];
  subject: IoRestorecommerceAuthSubject;
};

export type IoRestorecommerceCountryCountry = {
  __typename?: 'IoRestorecommerceCountryCountry';
  id: Scalars['String'];
  meta: IoRestorecommerceMetaMeta;
  name: Scalars['String'];
  countryCode: Scalars['String'];
  geographicalName: Scalars['String'];
  economicAreas: Array<Scalars['String']>;
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
  items: Array<IoRestorecommerceTimezoneTimezone>;
  totalCount: Scalars['Int'];
  subject: IoRestorecommerceAuthSubject;
};

export type IoRestorecommerceTimezoneTimezone = {
  __typename?: 'IoRestorecommerceTimezoneTimezone';
  id: Scalars['String'];
  meta: IoRestorecommerceMetaMeta;
  value: Scalars['String'];
  description: Scalars['String'];
};

export type ResourceContact_Point_TypeQuery = {
  __typename?: 'ResourceContact_point_typeQuery';
  Read?: Maybe<ProtoIoRestorecommerceContact_Point_TypeContactPointTypeList>;
};


export type ResourceContact_Point_TypeQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceContact_Point_TypeContactPointTypeList = {
  __typename?: 'ProtoIoRestorecommerceContact_point_typeContactPointTypeList';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceContact_Point_TypeContactPointTypeList>;
};

export type IoRestorecommerceContact_Point_TypeContactPointTypeList = {
  __typename?: 'IoRestorecommerceContact_point_typeContactPointTypeList';
  items: Array<IoRestorecommerceContact_Point_TypeContactPointType>;
  totalCount: Scalars['Int'];
  subject: IoRestorecommerceAuthSubject;
};

export type IoRestorecommerceContact_Point_TypeContactPointType = {
  __typename?: 'IoRestorecommerceContact_point_typeContactPointType';
  id: Scalars['String'];
  meta: IoRestorecommerceMetaMeta;
  type: Scalars['String'];
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
  items: Array<IoRestorecommerceCustomerCustomer>;
  totalCount: Scalars['Int'];
  subject: IoRestorecommerceAuthSubject;
};

export type IoRestorecommerceCustomerCustomer = {
  __typename?: 'IoRestorecommerceCustomerCustomer';
  id: Scalars['String'];
  meta: IoRestorecommerceMetaMeta;
  individualUser: IoRestorecommerceCustomerIndividualUser;
  orgUser: IoRestorecommerceCustomerOrgUser;
  guest: IoRestorecommerceCustomerGuest;
};

export type IoRestorecommerceCustomerIndividualUser = {
  __typename?: 'IoRestorecommerceCustomerIndividualUser';
  userId: Scalars['String'];
  addressId: Scalars['String'];
  contactPointIds: Array<Scalars['String']>;
};

export type IoRestorecommerceCustomerOrgUser = {
  __typename?: 'IoRestorecommerceCustomerOrgUser';
  userId: Scalars['String'];
  organizationId: Scalars['String'];
};

export type IoRestorecommerceCustomerGuest = {
  __typename?: 'IoRestorecommerceCustomerGuest';
  guest: Scalars['Boolean'];
  addressId: Scalars['String'];
  contactPointIds: Array<Scalars['String']>;
};

export type ResourceContact_PointQuery = {
  __typename?: 'ResourceContact_pointQuery';
  Read?: Maybe<ProtoIoRestorecommerceContact_PointContactPointList>;
};


export type ResourceContact_PointQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceContact_PointContactPointList = {
  __typename?: 'ProtoIoRestorecommerceContact_pointContactPointList';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceContact_PointContactPointList>;
};

export type IoRestorecommerceContact_PointContactPointList = {
  __typename?: 'IoRestorecommerceContact_pointContactPointList';
  items: Array<IoRestorecommerceContact_PointContactPoint>;
  totalCount: Scalars['Int'];
  subject: IoRestorecommerceAuthSubject;
};

export type IoRestorecommerceContact_PointContactPoint = {
  __typename?: 'IoRestorecommerceContact_pointContactPoint';
  id: Scalars['String'];
  meta: IoRestorecommerceMetaMeta;
  physicalAddressId: Scalars['String'];
  website: Scalars['String'];
  email: Scalars['String'];
  contactPointTypeId: Scalars['String'];
  telephone: Scalars['String'];
  timezoneId: Scalars['String'];
  localeId: Scalars['String'];
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
  items: Array<IoRestorecommerceLocaleLocale>;
  totalCount: Scalars['Int'];
  subject: IoRestorecommerceAuthSubject;
};

export type IoRestorecommerceLocaleLocale = {
  __typename?: 'IoRestorecommerceLocaleLocale';
  id: Scalars['String'];
  meta: IoRestorecommerceMetaMeta;
  value: Scalars['String'];
  description: Scalars['String'];
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
  items: Array<IoRestorecommerceLocationLocation>;
  totalCount: Scalars['Int'];
  subject: IoRestorecommerceAuthSubject;
};

export type IoRestorecommerceLocationLocation = {
  __typename?: 'IoRestorecommerceLocationLocation';
  id: Scalars['String'];
  meta: IoRestorecommerceMetaMeta;
  name: Scalars['String'];
  description: Scalars['String'];
  organizationId: Scalars['String'];
  parentId: Scalars['String'];
  childrenIds: Array<Scalars['String']>;
  addressId: Scalars['String'];
  data: GoogleProtobufAny;
};

export type GoogleProtobufAny = {
  __typename?: 'GoogleProtobufAny';
  typeUrl: Scalars['String'];
  value: Scalars['TodoScalar'];
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
  items: Array<IoRestorecommerceOrganizationOrganization>;
  totalCount: Scalars['Int'];
  subject: IoRestorecommerceAuthSubject;
};

export type IoRestorecommerceOrganizationOrganization = {
  __typename?: 'IoRestorecommerceOrganizationOrganization';
  id: Scalars['String'];
  meta: IoRestorecommerceMetaMeta;
  addressId: Scalars['String'];
  parentId: Scalars['String'];
  childrenIds: Array<Scalars['String']>;
  contactPointIds: Array<Scalars['String']>;
  website: Scalars['String'];
  email: Scalars['String'];
  logo: Scalars['String'];
  vatId: Scalars['String'];
  isicV4: Scalars['String'];
  registration: Scalars['String'];
  registrationCourt: Scalars['String'];
  name: Scalars['String'];
  paymentMethodIds: Array<Scalars['String']>;
  data: GoogleProtobufAny;
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
  items: Array<IoRestorecommerceTaxTax>;
  totalCount: Scalars['Int'];
  subject: IoRestorecommerceAuthSubject;
};

export type IoRestorecommerceTaxTax = {
  __typename?: 'IoRestorecommerceTaxTax';
  id: Scalars['String'];
  meta: IoRestorecommerceMetaMeta;
  countryId: Scalars['String'];
  rate: Scalars['Float'];
  variant: Scalars['String'];
  typeId: Scalars['String'];
};

export type ResourceTax_TypeQuery = {
  __typename?: 'ResourceTax_typeQuery';
  Read?: Maybe<ProtoIoRestorecommerceTax_TypeTaxTypeList>;
};


export type ResourceTax_TypeQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceTax_TypeTaxTypeList = {
  __typename?: 'ProtoIoRestorecommerceTax_typeTaxTypeList';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceTax_TypeTaxTypeList>;
};

export type IoRestorecommerceTax_TypeTaxTypeList = {
  __typename?: 'IoRestorecommerceTax_typeTaxTypeList';
  items: Array<IoRestorecommerceTax_TypeTaxType>;
  totalCount: Scalars['Int'];
  subject: IoRestorecommerceAuthSubject;
};

export type IoRestorecommerceTax_TypeTaxType = {
  __typename?: 'IoRestorecommerceTax_typeTaxType';
  id: Scalars['String'];
  meta: IoRestorecommerceMetaMeta;
  type: Scalars['String'];
  description: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  resource: ResourceMutation;
};

export type ResourceMutation = {
  __typename?: 'ResourceMutation';
  address: ResourceAddressMutation;
  country: ResourceCountryMutation;
  timezone: ResourceTimezoneMutation;
  contact_point_type: ResourceContact_Point_TypeMutation;
  customer: ResourceCustomerMutation;
  contact_point: ResourceContact_PointMutation;
  locale: ResourceLocaleMutation;
  location: ResourceLocationMutation;
  organization: ResourceOrganizationMutation;
  tax: ResourceTaxMutation;
  tax_type: ResourceTax_TypeMutation;
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
  items: Array<IIoRestorecommerceAddressAddress>;
  totalCount: Scalars['Int'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceAddressAddress = {
  id: Scalars['String'];
  meta: IIoRestorecommerceMetaMeta;
  postcode: Scalars['String'];
  countryId: Scalars['String'];
  locality: Scalars['String'];
  street: Scalars['String'];
  region: Scalars['String'];
  geoCoordinates: IIoRestorecommerceAddressAddressGeoPoint;
  altitude: Scalars['Float'];
  buildingNumber: Scalars['String'];
  addressAddition: IIoRestorecommerceAddressAddressAddition;
};

export type IIoRestorecommerceMetaMeta = {
  created: Scalars['Float'];
  modified: Scalars['Float'];
  modifiedBy: Scalars['String'];
  owner: Array<IIoRestorecommerceAttributeAttribute>;
};

export type IIoRestorecommerceAddressAddressGeoPoint = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type IIoRestorecommerceAddressAddressAddition = {
  field1: Scalars['String'];
  field2: Scalars['String'];
};

export type ProtoGoogleProtobufEmpty = {
  __typename?: 'ProtoGoogleProtobufEmpty';
  status: StatusType;
};

export type IIoRestorecommerceResourcebaseDeleteRequest = {
  collection: Scalars['Boolean'];
  ids: Array<Scalars['String']>;
  subject: IIoRestorecommerceAuthSubject;
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
  items: Array<IIoRestorecommerceCountryCountry>;
  totalCount: Scalars['Int'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceCountryCountry = {
  id: Scalars['String'];
  meta: IIoRestorecommerceMetaMeta;
  name: Scalars['String'];
  countryCode: Scalars['String'];
  geographicalName: Scalars['String'];
  economicAreas: Array<Scalars['String']>;
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
  items: Array<IIoRestorecommerceTimezoneTimezone>;
  totalCount: Scalars['Int'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceTimezoneTimezone = {
  id: Scalars['String'];
  meta: IIoRestorecommerceMetaMeta;
  value: Scalars['String'];
  description: Scalars['String'];
};

export type ResourceContact_Point_TypeMutation = {
  __typename?: 'ResourceContact_point_typeMutation';
  Create?: Maybe<ProtoIoRestorecommerceContact_Point_TypeContactPointTypeList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommerceContact_Point_TypeContactPointTypeList>;
  Upsert?: Maybe<ProtoIoRestorecommerceContact_Point_TypeContactPointTypeList>;
};


export type ResourceContact_Point_TypeMutationCreateArgs = {
  input: IIoRestorecommerceContact_Point_TypeContactPointTypeList;
};


export type ResourceContact_Point_TypeMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type ResourceContact_Point_TypeMutationUpdateArgs = {
  input: IIoRestorecommerceContact_Point_TypeContactPointTypeList;
};


export type ResourceContact_Point_TypeMutationUpsertArgs = {
  input: IIoRestorecommerceContact_Point_TypeContactPointTypeList;
};

export type IIoRestorecommerceContact_Point_TypeContactPointTypeList = {
  items: Array<IIoRestorecommerceContact_Point_TypeContactPointType>;
  totalCount: Scalars['Int'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceContact_Point_TypeContactPointType = {
  id: Scalars['String'];
  meta: IIoRestorecommerceMetaMeta;
  type: Scalars['String'];
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
  items: Array<IIoRestorecommerceCustomerCustomer>;
  totalCount: Scalars['Int'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceCustomerCustomer = {
  id: Scalars['String'];
  meta: IIoRestorecommerceMetaMeta;
  individualUser: Scalars['TodoScalar'];
  orgUser: Scalars['TodoScalar'];
  guest: Scalars['TodoScalar'];
};

export type ResourceContact_PointMutation = {
  __typename?: 'ResourceContact_pointMutation';
  Create?: Maybe<ProtoIoRestorecommerceContact_PointContactPointList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommerceContact_PointContactPointList>;
  Upsert?: Maybe<ProtoIoRestorecommerceContact_PointContactPointList>;
};


export type ResourceContact_PointMutationCreateArgs = {
  input: IIoRestorecommerceContact_PointContactPointList;
};


export type ResourceContact_PointMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type ResourceContact_PointMutationUpdateArgs = {
  input: IIoRestorecommerceContact_PointContactPointList;
};


export type ResourceContact_PointMutationUpsertArgs = {
  input: IIoRestorecommerceContact_PointContactPointList;
};

export type IIoRestorecommerceContact_PointContactPointList = {
  items: Array<IIoRestorecommerceContact_PointContactPoint>;
  totalCount: Scalars['Int'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceContact_PointContactPoint = {
  id: Scalars['String'];
  meta: IIoRestorecommerceMetaMeta;
  physicalAddressId: Scalars['String'];
  website: Scalars['String'];
  email: Scalars['String'];
  contactPointTypeId: Scalars['String'];
  telephone: Scalars['String'];
  timezoneId: Scalars['String'];
  localeId: Scalars['String'];
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
  items: Array<IIoRestorecommerceLocaleLocale>;
  totalCount: Scalars['Int'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceLocaleLocale = {
  id: Scalars['String'];
  meta: IIoRestorecommerceMetaMeta;
  value: Scalars['String'];
  description: Scalars['String'];
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
  items: Array<IIoRestorecommerceLocationLocation>;
  totalCount: Scalars['Int'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceLocationLocation = {
  id: Scalars['String'];
  meta: IIoRestorecommerceMetaMeta;
  name: Scalars['String'];
  description: Scalars['String'];
  organizationId: Scalars['String'];
  parentId: Scalars['String'];
  childrenIds: Array<Scalars['String']>;
  addressId: Scalars['String'];
  data: IGoogleProtobufAny;
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
  items: Array<IIoRestorecommerceOrganizationOrganization>;
  totalCount: Scalars['Int'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceOrganizationOrganization = {
  id: Scalars['String'];
  meta: IIoRestorecommerceMetaMeta;
  addressId: Scalars['String'];
  parentId: Scalars['String'];
  childrenIds: Array<Scalars['String']>;
  contactPointIds: Array<Scalars['String']>;
  website: Scalars['String'];
  email: Scalars['String'];
  logo: Scalars['String'];
  vatId: Scalars['String'];
  isicV4: Scalars['String'];
  registration: Scalars['String'];
  registrationCourt: Scalars['String'];
  name: Scalars['String'];
  paymentMethodIds: Array<Scalars['String']>;
  data: IGoogleProtobufAny;
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
  items: Array<IIoRestorecommerceTaxTax>;
  totalCount: Scalars['Int'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceTaxTax = {
  id: Scalars['String'];
  meta: IIoRestorecommerceMetaMeta;
  countryId: Scalars['String'];
  rate: Scalars['Float'];
  variant: Scalars['String'];
  typeId: Scalars['String'];
};

export type ResourceTax_TypeMutation = {
  __typename?: 'ResourceTax_typeMutation';
  Create?: Maybe<ProtoIoRestorecommerceTax_TypeTaxTypeList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommerceTax_TypeTaxTypeList>;
  Upsert?: Maybe<ProtoIoRestorecommerceTax_TypeTaxTypeList>;
};


export type ResourceTax_TypeMutationCreateArgs = {
  input: IIoRestorecommerceTax_TypeTaxTypeList;
};


export type ResourceTax_TypeMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type ResourceTax_TypeMutationUpdateArgs = {
  input: IIoRestorecommerceTax_TypeTaxTypeList;
};


export type ResourceTax_TypeMutationUpsertArgs = {
  input: IIoRestorecommerceTax_TypeTaxTypeList;
};

export type IIoRestorecommerceTax_TypeTaxTypeList = {
  items: Array<IIoRestorecommerceTax_TypeTaxType>;
  totalCount: Scalars['Int'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceTax_TypeTaxType = {
  id: Scalars['String'];
  meta: IIoRestorecommerceMetaMeta;
  type: Scalars['String'];
  description: Scalars['String'];
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
  MapScalar: ResolverTypeWrapper<Scalars['MapScalar']>;
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
  ResourceContact_point_typeQuery: ResolverTypeWrapper<ResourceContact_Point_TypeQuery>;
  ProtoIoRestorecommerceContact_point_typeContactPointTypeList: ResolverTypeWrapper<ProtoIoRestorecommerceContact_Point_TypeContactPointTypeList>;
  IoRestorecommerceContact_point_typeContactPointTypeList: ResolverTypeWrapper<IoRestorecommerceContact_Point_TypeContactPointTypeList>;
  IoRestorecommerceContact_point_typeContactPointType: ResolverTypeWrapper<IoRestorecommerceContact_Point_TypeContactPointType>;
  ResourceCustomerQuery: ResolverTypeWrapper<ResourceCustomerQuery>;
  ProtoIoRestorecommerceCustomerCustomerList: ResolverTypeWrapper<ProtoIoRestorecommerceCustomerCustomerList>;
  IoRestorecommerceCustomerCustomerList: ResolverTypeWrapper<IoRestorecommerceCustomerCustomerList>;
  IoRestorecommerceCustomerCustomer: ResolverTypeWrapper<IoRestorecommerceCustomerCustomer>;
  IoRestorecommerceCustomerIndividualUser: ResolverTypeWrapper<IoRestorecommerceCustomerIndividualUser>;
  IoRestorecommerceCustomerOrgUser: ResolverTypeWrapper<IoRestorecommerceCustomerOrgUser>;
  IoRestorecommerceCustomerGuest: ResolverTypeWrapper<IoRestorecommerceCustomerGuest>;
  ResourceContact_pointQuery: ResolverTypeWrapper<ResourceContact_PointQuery>;
  ProtoIoRestorecommerceContact_pointContactPointList: ResolverTypeWrapper<ProtoIoRestorecommerceContact_PointContactPointList>;
  IoRestorecommerceContact_pointContactPointList: ResolverTypeWrapper<IoRestorecommerceContact_PointContactPointList>;
  IoRestorecommerceContact_pointContactPoint: ResolverTypeWrapper<IoRestorecommerceContact_PointContactPoint>;
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
  ResourceTax_typeQuery: ResolverTypeWrapper<ResourceTax_TypeQuery>;
  ProtoIoRestorecommerceTax_typeTaxTypeList: ResolverTypeWrapper<ProtoIoRestorecommerceTax_TypeTaxTypeList>;
  IoRestorecommerceTax_typeTaxTypeList: ResolverTypeWrapper<IoRestorecommerceTax_TypeTaxTypeList>;
  IoRestorecommerceTax_typeTaxType: ResolverTypeWrapper<IoRestorecommerceTax_TypeTaxType>;
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
  ResourceContact_point_typeMutation: ResolverTypeWrapper<ResourceContact_Point_TypeMutation>;
  IIoRestorecommerceContact_point_typeContactPointTypeList: IIoRestorecommerceContact_Point_TypeContactPointTypeList;
  IIoRestorecommerceContact_point_typeContactPointType: IIoRestorecommerceContact_Point_TypeContactPointType;
  ResourceCustomerMutation: ResolverTypeWrapper<ResourceCustomerMutation>;
  IIoRestorecommerceCustomerCustomerList: IIoRestorecommerceCustomerCustomerList;
  IIoRestorecommerceCustomerCustomer: IIoRestorecommerceCustomerCustomer;
  ResourceContact_pointMutation: ResolverTypeWrapper<ResourceContact_PointMutation>;
  IIoRestorecommerceContact_pointContactPointList: IIoRestorecommerceContact_PointContactPointList;
  IIoRestorecommerceContact_pointContactPoint: IIoRestorecommerceContact_PointContactPoint;
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
  ResourceTax_typeMutation: ResolverTypeWrapper<ResourceTax_TypeMutation>;
  IIoRestorecommerceTax_typeTaxTypeList: IIoRestorecommerceTax_TypeTaxTypeList;
  IIoRestorecommerceTax_typeTaxType: IIoRestorecommerceTax_TypeTaxType;
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
  MapScalar: Scalars['MapScalar'];
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
  ResourceContact_point_typeQuery: ResourceContact_Point_TypeQuery;
  ProtoIoRestorecommerceContact_point_typeContactPointTypeList: ProtoIoRestorecommerceContact_Point_TypeContactPointTypeList;
  IoRestorecommerceContact_point_typeContactPointTypeList: IoRestorecommerceContact_Point_TypeContactPointTypeList;
  IoRestorecommerceContact_point_typeContactPointType: IoRestorecommerceContact_Point_TypeContactPointType;
  ResourceCustomerQuery: ResourceCustomerQuery;
  ProtoIoRestorecommerceCustomerCustomerList: ProtoIoRestorecommerceCustomerCustomerList;
  IoRestorecommerceCustomerCustomerList: IoRestorecommerceCustomerCustomerList;
  IoRestorecommerceCustomerCustomer: IoRestorecommerceCustomerCustomer;
  IoRestorecommerceCustomerIndividualUser: IoRestorecommerceCustomerIndividualUser;
  IoRestorecommerceCustomerOrgUser: IoRestorecommerceCustomerOrgUser;
  IoRestorecommerceCustomerGuest: IoRestorecommerceCustomerGuest;
  ResourceContact_pointQuery: ResourceContact_PointQuery;
  ProtoIoRestorecommerceContact_pointContactPointList: ProtoIoRestorecommerceContact_PointContactPointList;
  IoRestorecommerceContact_pointContactPointList: IoRestorecommerceContact_PointContactPointList;
  IoRestorecommerceContact_pointContactPoint: IoRestorecommerceContact_PointContactPoint;
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
  ResourceTax_typeQuery: ResourceTax_TypeQuery;
  ProtoIoRestorecommerceTax_typeTaxTypeList: ProtoIoRestorecommerceTax_TypeTaxTypeList;
  IoRestorecommerceTax_typeTaxTypeList: IoRestorecommerceTax_TypeTaxTypeList;
  IoRestorecommerceTax_typeTaxType: IoRestorecommerceTax_TypeTaxType;
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
  ResourceContact_point_typeMutation: ResourceContact_Point_TypeMutation;
  IIoRestorecommerceContact_point_typeContactPointTypeList: IIoRestorecommerceContact_Point_TypeContactPointTypeList;
  IIoRestorecommerceContact_point_typeContactPointType: IIoRestorecommerceContact_Point_TypeContactPointType;
  ResourceCustomerMutation: ResourceCustomerMutation;
  IIoRestorecommerceCustomerCustomerList: IIoRestorecommerceCustomerCustomerList;
  IIoRestorecommerceCustomerCustomer: IIoRestorecommerceCustomerCustomer;
  ResourceContact_pointMutation: ResourceContact_PointMutation;
  IIoRestorecommerceContact_pointContactPointList: IIoRestorecommerceContact_PointContactPointList;
  IIoRestorecommerceContact_pointContactPoint: IIoRestorecommerceContact_PointContactPoint;
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
  ResourceTax_typeMutation: ResourceTax_TypeMutation;
  IIoRestorecommerceTax_typeTaxTypeList: IIoRestorecommerceTax_TypeTaxTypeList;
  IIoRestorecommerceTax_typeTaxType: IIoRestorecommerceTax_TypeTaxType;
}>;

export type QueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  resource?: Resolver<ResolversTypes['ResourceQuery'], ParentType, ContextType>;
}>;

export type ResourceQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceQuery'] = ResolversParentTypes['ResourceQuery']> = ResolversObject<{
  address?: Resolver<ResolversTypes['ResourceAddressQuery'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['ResourceCountryQuery'], ParentType, ContextType>;
  timezone?: Resolver<ResolversTypes['ResourceTimezoneQuery'], ParentType, ContextType>;
  contact_point_type?: Resolver<ResolversTypes['ResourceContact_point_typeQuery'], ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['ResourceCustomerQuery'], ParentType, ContextType>;
  contact_point?: Resolver<ResolversTypes['ResourceContact_pointQuery'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['ResourceLocaleQuery'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['ResourceLocationQuery'], ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['ResourceOrganizationQuery'], ParentType, ContextType>;
  tax?: Resolver<ResolversTypes['ResourceTaxQuery'], ParentType, ContextType>;
  tax_type?: Resolver<ResolversTypes['ResourceTax_typeQuery'], ParentType, ContextType>;
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
  items?: Resolver<Array<ResolversTypes['IoRestorecommerceAddressAddress']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['IoRestorecommerceAuthSubject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressAddressResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressAddress'] = ResolversParentTypes['IoRestorecommerceAddressAddress']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['IoRestorecommerceMetaMeta'], ParentType, ContextType>;
  postcode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  countryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locality?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  street?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  region?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  geoCoordinates?: Resolver<ResolversTypes['IoRestorecommerceAddressAddressGeoPoint'], ParentType, ContextType>;
  altitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  buildingNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addressAddition?: Resolver<ResolversTypes['IoRestorecommerceAddressAddressAddition'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceMetaMetaResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceMetaMeta'] = ResolversParentTypes['IoRestorecommerceMetaMeta']> = ResolversObject<{
  created?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  modified?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  modifiedBy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressAddressGeoPointResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressAddressGeoPoint'] = ResolversParentTypes['IoRestorecommerceAddressAddressGeoPoint']> = ResolversObject<{
  latitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressAddressAdditionResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressAddressAddition'] = ResolversParentTypes['IoRestorecommerceAddressAddressAddition']> = ResolversObject<{
  field1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  field2?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthSubjectResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthSubject'] = ResolversParentTypes['IoRestorecommerceAuthSubject']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  scope?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roleAssociations?: Resolver<Array<ResolversTypes['IoRestorecommerceAuthRoleAssociation']>, ParentType, ContextType>;
  hierarchicalScopes?: Resolver<Array<ResolversTypes['IoRestorecommerceAuthHierarchicalScope']>, ParentType, ContextType>;
  unauthenticated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthRoleAssociationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthRoleAssociation'] = ResolversParentTypes['IoRestorecommerceAuthRoleAssociation']> = ResolversObject<{
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  attributes?: Resolver<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthHierarchicalScopeResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthHierarchicalScope'] = ResolversParentTypes['IoRestorecommerceAuthHierarchicalScope']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['IoRestorecommerceAuthHierarchicalScope']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseSortSortOrderResolvers = { UNSORTED: 'undefined', ASCENDING: 1, DESCENDING: 2, UNRECOGNIZED: -1 };

export interface MapScalarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['MapScalar'], any> {
  name: 'MapScalar';
}

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
  items?: Resolver<Array<ResolversTypes['IoRestorecommerceCountryCountry']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['IoRestorecommerceAuthSubject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCountryCountryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCountryCountry'] = ResolversParentTypes['IoRestorecommerceCountryCountry']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['IoRestorecommerceMetaMeta'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  countryCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  geographicalName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  economicAreas?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
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
  items?: Resolver<Array<ResolversTypes['IoRestorecommerceTimezoneTimezone']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['IoRestorecommerceAuthSubject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTimezoneTimezoneResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceTimezoneTimezone'] = ResolversParentTypes['IoRestorecommerceTimezoneTimezone']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['IoRestorecommerceMetaMeta'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceContact_Point_TypeQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceContact_point_typeQuery'] = ResolversParentTypes['ResourceContact_point_typeQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceContact_point_typeContactPointTypeList']>, ParentType, ContextType, RequireFields<ResourceContact_Point_TypeQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceContact_Point_TypeContactPointTypeListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceContact_point_typeContactPointTypeList'] = ResolversParentTypes['ProtoIoRestorecommerceContact_point_typeContactPointTypeList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceContact_point_typeContactPointTypeList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceContact_Point_TypeContactPointTypeListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceContact_point_typeContactPointTypeList'] = ResolversParentTypes['IoRestorecommerceContact_point_typeContactPointTypeList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['IoRestorecommerceContact_point_typeContactPointType']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['IoRestorecommerceAuthSubject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceContact_Point_TypeContactPointTypeResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceContact_point_typeContactPointType'] = ResolversParentTypes['IoRestorecommerceContact_point_typeContactPointType']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['IoRestorecommerceMetaMeta'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  items?: Resolver<Array<ResolversTypes['IoRestorecommerceCustomerCustomer']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['IoRestorecommerceAuthSubject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCustomerCustomerResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerCustomer'] = ResolversParentTypes['IoRestorecommerceCustomerCustomer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['IoRestorecommerceMetaMeta'], ParentType, ContextType>;
  individualUser?: Resolver<ResolversTypes['IoRestorecommerceCustomerIndividualUser'], ParentType, ContextType>;
  orgUser?: Resolver<ResolversTypes['IoRestorecommerceCustomerOrgUser'], ParentType, ContextType>;
  guest?: Resolver<ResolversTypes['IoRestorecommerceCustomerGuest'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCustomerIndividualUserResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerIndividualUser'] = ResolversParentTypes['IoRestorecommerceCustomerIndividualUser']> = ResolversObject<{
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addressId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contactPointIds?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCustomerOrgUserResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerOrgUser'] = ResolversParentTypes['IoRestorecommerceCustomerOrgUser']> = ResolversObject<{
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organizationId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCustomerGuestResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerGuest'] = ResolversParentTypes['IoRestorecommerceCustomerGuest']> = ResolversObject<{
  guest?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  addressId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contactPointIds?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceContact_PointQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceContact_pointQuery'] = ResolversParentTypes['ResourceContact_pointQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceContact_pointContactPointList']>, ParentType, ContextType, RequireFields<ResourceContact_PointQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceContact_PointContactPointListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceContact_pointContactPointList'] = ResolversParentTypes['ProtoIoRestorecommerceContact_pointContactPointList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceContact_pointContactPointList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceContact_PointContactPointListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceContact_pointContactPointList'] = ResolversParentTypes['IoRestorecommerceContact_pointContactPointList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['IoRestorecommerceContact_pointContactPoint']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['IoRestorecommerceAuthSubject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceContact_PointContactPointResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceContact_pointContactPoint'] = ResolversParentTypes['IoRestorecommerceContact_pointContactPoint']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['IoRestorecommerceMetaMeta'], ParentType, ContextType>;
  physicalAddressId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  website?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contactPointTypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  telephone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timezoneId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  localeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  items?: Resolver<Array<ResolversTypes['IoRestorecommerceLocaleLocale']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['IoRestorecommerceAuthSubject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceLocaleLocaleResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceLocaleLocale'] = ResolversParentTypes['IoRestorecommerceLocaleLocale']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['IoRestorecommerceMetaMeta'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  items?: Resolver<Array<ResolversTypes['IoRestorecommerceLocationLocation']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['IoRestorecommerceAuthSubject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceLocationLocationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceLocationLocation'] = ResolversParentTypes['IoRestorecommerceLocationLocation']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['IoRestorecommerceMetaMeta'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organizationId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parentId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  childrenIds?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  addressId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  data?: Resolver<ResolversTypes['GoogleProtobufAny'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GoogleProtobufAnyResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['GoogleProtobufAny'] = ResolversParentTypes['GoogleProtobufAny']> = ResolversObject<{
  typeUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['TodoScalar'], ParentType, ContextType>;
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
  items?: Resolver<Array<ResolversTypes['IoRestorecommerceOrganizationOrganization']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['IoRestorecommerceAuthSubject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOrganizationOrganizationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceOrganizationOrganization'] = ResolversParentTypes['IoRestorecommerceOrganizationOrganization']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['IoRestorecommerceMetaMeta'], ParentType, ContextType>;
  addressId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parentId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  childrenIds?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  contactPointIds?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  logo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vatId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isicV4?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  registration?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  registrationCourt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  paymentMethodIds?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  data?: Resolver<ResolversTypes['GoogleProtobufAny'], ParentType, ContextType>;
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
  items?: Resolver<Array<ResolversTypes['IoRestorecommerceTaxTax']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['IoRestorecommerceAuthSubject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTaxTaxResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceTaxTax'] = ResolversParentTypes['IoRestorecommerceTaxTax']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['IoRestorecommerceMetaMeta'], ParentType, ContextType>;
  countryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  variant?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  typeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceTax_TypeQueryResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceTax_typeQuery'] = ResolversParentTypes['ResourceTax_typeQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTax_typeTaxTypeList']>, ParentType, ContextType, RequireFields<ResourceTax_TypeQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceTax_TypeTaxTypeListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceTax_typeTaxTypeList'] = ResolversParentTypes['ProtoIoRestorecommerceTax_typeTaxTypeList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceTax_typeTaxTypeList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTax_TypeTaxTypeListResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceTax_typeTaxTypeList'] = ResolversParentTypes['IoRestorecommerceTax_typeTaxTypeList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['IoRestorecommerceTax_typeTaxType']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['IoRestorecommerceAuthSubject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTax_TypeTaxTypeResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['IoRestorecommerceTax_typeTaxType'] = ResolversParentTypes['IoRestorecommerceTax_typeTaxType']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['IoRestorecommerceMetaMeta'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  resource?: Resolver<ResolversTypes['ResourceMutation'], ParentType, ContextType>;
}>;

export type ResourceMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceMutation'] = ResolversParentTypes['ResourceMutation']> = ResolversObject<{
  address?: Resolver<ResolversTypes['ResourceAddressMutation'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['ResourceCountryMutation'], ParentType, ContextType>;
  timezone?: Resolver<ResolversTypes['ResourceTimezoneMutation'], ParentType, ContextType>;
  contact_point_type?: Resolver<ResolversTypes['ResourceContact_point_typeMutation'], ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['ResourceCustomerMutation'], ParentType, ContextType>;
  contact_point?: Resolver<ResolversTypes['ResourceContact_pointMutation'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['ResourceLocaleMutation'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['ResourceLocationMutation'], ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['ResourceOrganizationMutation'], ParentType, ContextType>;
  tax?: Resolver<ResolversTypes['ResourceTaxMutation'], ParentType, ContextType>;
  tax_type?: Resolver<ResolversTypes['ResourceTax_typeMutation'], ParentType, ContextType>;
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

export type ResourceContact_Point_TypeMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceContact_point_typeMutation'] = ResolversParentTypes['ResourceContact_point_typeMutation']> = ResolversObject<{
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceContact_point_typeContactPointTypeList']>, ParentType, ContextType, RequireFields<ResourceContact_Point_TypeMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<ResourceContact_Point_TypeMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceContact_point_typeContactPointTypeList']>, ParentType, ContextType, RequireFields<ResourceContact_Point_TypeMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceContact_point_typeContactPointTypeList']>, ParentType, ContextType, RequireFields<ResourceContact_Point_TypeMutationUpsertArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceCustomerMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceCustomerMutation'] = ResolversParentTypes['ResourceCustomerMutation']> = ResolversObject<{
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCustomerCustomerList']>, ParentType, ContextType, RequireFields<ResourceCustomerMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<ResourceCustomerMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCustomerCustomerList']>, ParentType, ContextType, RequireFields<ResourceCustomerMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceCustomerCustomerList']>, ParentType, ContextType, RequireFields<ResourceCustomerMutationUpsertArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResourceContact_PointMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceContact_pointMutation'] = ResolversParentTypes['ResourceContact_pointMutation']> = ResolversObject<{
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceContact_pointContactPointList']>, ParentType, ContextType, RequireFields<ResourceContact_PointMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<ResourceContact_PointMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceContact_pointContactPointList']>, ParentType, ContextType, RequireFields<ResourceContact_PointMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceContact_pointContactPointList']>, ParentType, ContextType, RequireFields<ResourceContact_PointMutationUpsertArgs, 'input'>>;
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

export type ResourceTax_TypeMutationResolvers<ContextType = ResourceContext, ParentType extends ResolversParentTypes['ResourceTax_typeMutation'] = ResolversParentTypes['ResourceTax_typeMutation']> = ResolversObject<{
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTax_typeTaxTypeList']>, ParentType, ContextType, RequireFields<ResourceTax_TypeMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<ResourceTax_TypeMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTax_typeTaxTypeList']>, ParentType, ContextType, RequireFields<ResourceTax_TypeMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceTax_typeTaxTypeList']>, ParentType, ContextType, RequireFields<ResourceTax_TypeMutationUpsertArgs, 'input'>>;
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
  MapScalar?: GraphQLScalarType;
  Upload?: GraphQLScalarType;
  ResourceCountryQuery?: ResourceCountryQueryResolvers<ContextType>;
  ProtoIoRestorecommerceCountryCountryList?: ProtoIoRestorecommerceCountryCountryListResolvers<ContextType>;
  IoRestorecommerceCountryCountryList?: IoRestorecommerceCountryCountryListResolvers<ContextType>;
  IoRestorecommerceCountryCountry?: IoRestorecommerceCountryCountryResolvers<ContextType>;
  ResourceTimezoneQuery?: ResourceTimezoneQueryResolvers<ContextType>;
  ProtoIoRestorecommerceTimezoneTimezoneList?: ProtoIoRestorecommerceTimezoneTimezoneListResolvers<ContextType>;
  IoRestorecommerceTimezoneTimezoneList?: IoRestorecommerceTimezoneTimezoneListResolvers<ContextType>;
  IoRestorecommerceTimezoneTimezone?: IoRestorecommerceTimezoneTimezoneResolvers<ContextType>;
  ResourceContact_point_typeQuery?: ResourceContact_Point_TypeQueryResolvers<ContextType>;
  ProtoIoRestorecommerceContact_point_typeContactPointTypeList?: ProtoIoRestorecommerceContact_Point_TypeContactPointTypeListResolvers<ContextType>;
  IoRestorecommerceContact_point_typeContactPointTypeList?: IoRestorecommerceContact_Point_TypeContactPointTypeListResolvers<ContextType>;
  IoRestorecommerceContact_point_typeContactPointType?: IoRestorecommerceContact_Point_TypeContactPointTypeResolvers<ContextType>;
  ResourceCustomerQuery?: ResourceCustomerQueryResolvers<ContextType>;
  ProtoIoRestorecommerceCustomerCustomerList?: ProtoIoRestorecommerceCustomerCustomerListResolvers<ContextType>;
  IoRestorecommerceCustomerCustomerList?: IoRestorecommerceCustomerCustomerListResolvers<ContextType>;
  IoRestorecommerceCustomerCustomer?: IoRestorecommerceCustomerCustomerResolvers<ContextType>;
  IoRestorecommerceCustomerIndividualUser?: IoRestorecommerceCustomerIndividualUserResolvers<ContextType>;
  IoRestorecommerceCustomerOrgUser?: IoRestorecommerceCustomerOrgUserResolvers<ContextType>;
  IoRestorecommerceCustomerGuest?: IoRestorecommerceCustomerGuestResolvers<ContextType>;
  ResourceContact_pointQuery?: ResourceContact_PointQueryResolvers<ContextType>;
  ProtoIoRestorecommerceContact_pointContactPointList?: ProtoIoRestorecommerceContact_PointContactPointListResolvers<ContextType>;
  IoRestorecommerceContact_pointContactPointList?: IoRestorecommerceContact_PointContactPointListResolvers<ContextType>;
  IoRestorecommerceContact_pointContactPoint?: IoRestorecommerceContact_PointContactPointResolvers<ContextType>;
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
  ResourceTax_typeQuery?: ResourceTax_TypeQueryResolvers<ContextType>;
  ProtoIoRestorecommerceTax_typeTaxTypeList?: ProtoIoRestorecommerceTax_TypeTaxTypeListResolvers<ContextType>;
  IoRestorecommerceTax_typeTaxTypeList?: IoRestorecommerceTax_TypeTaxTypeListResolvers<ContextType>;
  IoRestorecommerceTax_typeTaxType?: IoRestorecommerceTax_TypeTaxTypeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  ResourceMutation?: ResourceMutationResolvers<ContextType>;
  ResourceAddressMutation?: ResourceAddressMutationResolvers<ContextType>;
  ProtoGoogleProtobufEmpty?: ProtoGoogleProtobufEmptyResolvers<ContextType>;
  ResourceCountryMutation?: ResourceCountryMutationResolvers<ContextType>;
  ResourceTimezoneMutation?: ResourceTimezoneMutationResolvers<ContextType>;
  ResourceContact_point_typeMutation?: ResourceContact_Point_TypeMutationResolvers<ContextType>;
  ResourceCustomerMutation?: ResourceCustomerMutationResolvers<ContextType>;
  ResourceContact_pointMutation?: ResourceContact_PointMutationResolvers<ContextType>;
  ResourceLocaleMutation?: ResourceLocaleMutationResolvers<ContextType>;
  ResourceLocationMutation?: ResourceLocationMutationResolvers<ContextType>;
  ResourceOrganizationMutation?: ResourceOrganizationMutationResolvers<ContextType>;
  ResourceTaxMutation?: ResourceTaxMutationResolvers<ContextType>;
  ResourceTax_typeMutation?: ResourceTax_TypeMutationResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = ResourceContext> = Resolvers<ContextType>;
