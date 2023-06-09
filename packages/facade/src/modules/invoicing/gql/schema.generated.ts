import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { InvoicingContext } from '../interfaces.js';
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
  GoogleProtobufAnyValue: { input: any; output: any; }
};

export type Query = {
  __typename?: 'Query';
  invoicing: InvoicingQuery;
};

export type InvoicingQuery = {
  __typename?: 'InvoicingQuery';
  invoice: InvoicingInvoiceQuery;
};

export type InvoicingInvoiceQuery = {
  __typename?: 'InvoicingInvoiceQuery';
  Read?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
};


export type InvoicingInvoiceQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceInvoiceInvoiceListResponse = {
  __typename?: 'ProtoIoRestorecommerceInvoiceInvoiceListResponse';
  details?: Maybe<IoRestorecommerceInvoiceInvoiceListResponse>;
};

export type IoRestorecommerceInvoiceInvoiceListResponse = {
  __typename?: 'IoRestorecommerceInvoiceInvoiceListResponse';
  items?: Maybe<Array<IoRestorecommerceInvoiceInvoiceResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceInvoiceInvoiceResponse = {
  __typename?: 'IoRestorecommerceInvoiceInvoiceResponse';
  payload?: Maybe<IoRestorecommerceInvoiceInvoice>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceInvoiceInvoice = {
  __typename?: 'IoRestorecommerceInvoiceInvoice';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  timestamp?: Maybe<Scalars['String']['output']>;
  customerId?: Maybe<Scalars['String']['output']>;
  customer?: Maybe<IoRestorecommerceCustomerCustomer>;
  paymentStatus?: Maybe<Scalars['String']['output']>;
  totalAmount?: Maybe<Scalars['Float']['output']>;
  netAmount?: Maybe<Scalars['Float']['output']>;
  vatAmount?: Maybe<Scalars['Float']['output']>;
  document?: Maybe<Scalars['String']['output']>;
  invoiceNumber?: Maybe<Scalars['String']['output']>;
  customerRemark?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceMetaMeta = {
  __typename?: 'IoRestorecommerceMetaMeta';
  created?: Maybe<Scalars['Float']['output']>;
  modified?: Maybe<Scalars['Float']['output']>;
  modifiedBy?: Maybe<Scalars['String']['output']>;
  owners?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  acls?: Maybe<Array<IoRestorecommerceAttributeAttributeObj>>;
};

export type IoRestorecommerceAttributeAttribute = {
  __typename?: 'IoRestorecommerceAttributeAttribute';
  id?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
};

export type IoRestorecommerceAttributeAttributeObj = {
  __typename?: 'IoRestorecommerceAttributeAttributeObj';
  attributes?: Maybe<IoRestorecommerceAttributeAttribute>;
};

export type IoRestorecommerceCustomerCustomer = {
  __typename?: 'IoRestorecommerceCustomerCustomer';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  individualUser?: Maybe<IoRestorecommerceCustomerIndividualUser>;
  orgUser?: Maybe<IoRestorecommerceCustomerOrgUser>;
  guest?: Maybe<IoRestorecommerceCustomerGuest>;
};

export type IoRestorecommerceCustomerIndividualUser = {
  __typename?: 'IoRestorecommerceCustomerIndividualUser';
  userId?: Maybe<Scalars['String']['output']>;
  user?: Maybe<IoRestorecommerceUserUser>;
  addressId?: Maybe<Scalars['String']['output']>;
  address?: Maybe<IoRestorecommerceAddressAddress>;
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
  lastAccess?: Maybe<Scalars['Float']['output']>;
  data?: Maybe<GoogleProtobufAny>;
};

export type IoRestorecommerceAuthRoleAssociation = {
  __typename?: 'IoRestorecommerceAuthRoleAssociation';
  role?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  id?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['Float']['output']>;
};

export type IoRestorecommerceTimezoneTimezone = {
  __typename?: 'IoRestorecommerceTimezoneTimezone';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  description?: Maybe<Scalars['String']['output']>;
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

export type IoRestorecommerceContactPointContactPoint = {
  __typename?: 'IoRestorecommerceContactPointContactPoint';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  physicalAddressId?: Maybe<Scalars['String']['output']>;
  physicalAddress?: Maybe<IoRestorecommerceAddressAddress>;
  website?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  contactPointTypeId?: Maybe<Scalars['String']['output']>;
  contactPointType?: Maybe<IoRestorecommerceContactPointTypeContactPointType>;
  telephone?: Maybe<Scalars['String']['output']>;
  timezoneId?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<IoRestorecommerceTimezoneTimezone>;
  localeId?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<IoRestorecommerceLocaleLocale>;
};

export type IoRestorecommerceContactPointTypeContactPointType = {
  __typename?: 'IoRestorecommerceContactPointTypeContactPointType';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceCustomerOrgUser = {
  __typename?: 'IoRestorecommerceCustomerOrgUser';
  userId?: Maybe<Scalars['String']['output']>;
  user?: Maybe<IoRestorecommerceUserUser>;
  organizationId?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<IoRestorecommerceOrganizationOrganization>;
};

export type IoRestorecommerceOrganizationOrganization = {
  __typename?: 'IoRestorecommerceOrganizationOrganization';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  addressId?: Maybe<Scalars['String']['output']>;
  address?: Maybe<IoRestorecommerceAddressAddress>;
  parentId?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<IoRestorecommerceOrganizationOrganization>;
  contactPointIds?: Maybe<Array<Scalars['String']['output']>>;
  contactPoints?: Maybe<Array<IoRestorecommerceContactPointContactPoint>>;
  website?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  vatId?: Maybe<Scalars['String']['output']>;
  isicV4?: Maybe<Scalars['String']['output']>;
  registration?: Maybe<Scalars['String']['output']>;
  registrationCourt?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  paymentMethodIds?: Maybe<Array<Scalars['String']['output']>>;
  data?: Maybe<GoogleProtobufAny>;
};

export type IoRestorecommerceCustomerGuest = {
  __typename?: 'IoRestorecommerceCustomerGuest';
  guest?: Maybe<Scalars['Boolean']['output']>;
  addressId?: Maybe<Scalars['String']['output']>;
  address?: Maybe<IoRestorecommerceAddressAddress>;
  contactPointIds?: Maybe<Array<Scalars['String']['output']>>;
  contactPoints?: Maybe<Array<IoRestorecommerceContactPointContactPoint>>;
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

export type Mutation = {
  __typename?: 'Mutation';
  invoicing: InvoicingMutation;
};

export type InvoicingMutation = {
  __typename?: 'InvoicingMutation';
  invoice: InvoicingInvoiceMutation;
};

export type InvoicingInvoiceMutation = {
  __typename?: 'InvoicingInvoiceMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  GenerateInvoiceNumber?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceNumberResponse>;
};


export type InvoicingInvoiceMutationMutateArgs = {
  input: IIoRestorecommerceInvoiceInvoiceList;
};


export type InvoicingInvoiceMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type InvoicingInvoiceMutationGenerateInvoiceNumberArgs = {
  input: IIoRestorecommerceInvoiceRequestInvoiceNumber;
};

export type IIoRestorecommerceInvoiceInvoiceList = {
  items?: InputMaybe<Array<IIoRestorecommerceInvoiceInvoice>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceInvoiceInvoice = {
  id?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  timestamp?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  paymentStatus?: InputMaybe<Scalars['String']['input']>;
  totalAmount?: InputMaybe<Scalars['Float']['input']>;
  netAmount?: InputMaybe<Scalars['Float']['input']>;
  vatAmount?: InputMaybe<Scalars['Float']['input']>;
  document?: InputMaybe<Scalars['String']['input']>;
  invoiceNumber?: InputMaybe<Scalars['String']['input']>;
  customerRemark?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceMetaMeta = {
  created?: InputMaybe<Scalars['Float']['input']>;
  modified?: InputMaybe<Scalars['Float']['input']>;
  modifiedBy?: InputMaybe<Scalars['String']['input']>;
  owners?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  acls?: InputMaybe<Array<IIoRestorecommerceAttributeAttributeObj>>;
};

export type IIoRestorecommerceAttributeAttribute = {
  id?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type IIoRestorecommerceAttributeAttributeObj = {
  attributes?: InputMaybe<IIoRestorecommerceAttributeAttribute>;
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

export type ProtoIoRestorecommerceInvoiceInvoiceNumberResponse = {
  __typename?: 'ProtoIoRestorecommerceInvoiceInvoiceNumberResponse';
  details?: Maybe<IoRestorecommerceInvoiceInvoiceNumberResponse>;
};

export type IoRestorecommerceInvoiceInvoiceNumberResponse = {
  __typename?: 'IoRestorecommerceInvoiceInvoiceNumberResponse';
  invoiceNo?: Maybe<Scalars['String']['output']>;
};

export type IIoRestorecommerceInvoiceRequestInvoiceNumber = {
  context?: InputMaybe<IGoogleProtobufAny>;
};

export type Subscription = {
  __typename?: 'Subscription';
  orderingOrders?: Maybe<SubscriptionOutput>;
  catalogProducts?: Maybe<SubscriptionOutput>;
};


export type SubscriptionOrderingOrdersArgs = {
  action?: InputMaybe<SubscriptionAction>;
};


export type SubscriptionCatalogProductsArgs = {
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
  InvoicingQuery: ResolverTypeWrapper<InvoicingQuery>;
  InvoicingInvoiceQuery: ResolverTypeWrapper<InvoicingInvoiceQuery>;
  ProtoIoRestorecommerceInvoiceInvoiceListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
  IoRestorecommerceInvoiceInvoiceListResponse: ResolverTypeWrapper<IoRestorecommerceInvoiceInvoiceListResponse>;
  IoRestorecommerceInvoiceInvoiceResponse: ResolverTypeWrapper<IoRestorecommerceInvoiceInvoiceResponse>;
  IoRestorecommerceInvoiceInvoice: ResolverTypeWrapper<IoRestorecommerceInvoiceInvoice>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  IoRestorecommerceAttributeAttributeObj: ResolverTypeWrapper<IoRestorecommerceAttributeAttributeObj>;
  IoRestorecommerceCustomerCustomer: ResolverTypeWrapper<IoRestorecommerceCustomerCustomer>;
  IoRestorecommerceCustomerIndividualUser: ResolverTypeWrapper<IoRestorecommerceCustomerIndividualUser>;
  IoRestorecommerceUserUser: ResolverTypeWrapper<IoRestorecommerceUserUser>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  IoRestorecommerceAuthRoleAssociation: ResolverTypeWrapper<IoRestorecommerceAuthRoleAssociation>;
  IoRestorecommerceTimezoneTimezone: ResolverTypeWrapper<IoRestorecommerceTimezoneTimezone>;
  IoRestorecommerceLocaleLocale: ResolverTypeWrapper<IoRestorecommerceLocaleLocale>;
  IoRestorecommerceImageImage: ResolverTypeWrapper<IoRestorecommerceImageImage>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  IoRestorecommerceUserUserType: IoRestorecommerceUserUserType;
  IoRestorecommerceAuthTokens: ResolverTypeWrapper<IoRestorecommerceAuthTokens>;
  GoogleProtobufAny: ResolverTypeWrapper<GoogleProtobufAny>;
  GoogleProtobufAnyValue: ResolverTypeWrapper<Scalars['GoogleProtobufAnyValue']['output']>;
  IoRestorecommerceAddressAddress: ResolverTypeWrapper<IoRestorecommerceAddressAddress>;
  IoRestorecommerceCountryCountry: ResolverTypeWrapper<IoRestorecommerceCountryCountry>;
  IoRestorecommerceAddressGeoPoint: ResolverTypeWrapper<IoRestorecommerceAddressGeoPoint>;
  IoRestorecommerceAddressAddressAddition: ResolverTypeWrapper<IoRestorecommerceAddressAddressAddition>;
  IoRestorecommerceAddressBusinessAddress: ResolverTypeWrapper<IoRestorecommerceAddressBusinessAddress>;
  IoRestorecommerceAddressResidentialAddress: ResolverTypeWrapper<IoRestorecommerceAddressResidentialAddress>;
  IoRestorecommerceAddressPackStation: ResolverTypeWrapper<IoRestorecommerceAddressPackStation>;
  IoRestorecommerceContactPointContactPoint: ResolverTypeWrapper<IoRestorecommerceContactPointContactPoint>;
  IoRestorecommerceContactPointTypeContactPointType: ResolverTypeWrapper<IoRestorecommerceContactPointTypeContactPointType>;
  IoRestorecommerceCustomerOrgUser: ResolverTypeWrapper<IoRestorecommerceCustomerOrgUser>;
  IoRestorecommerceOrganizationOrganization: ResolverTypeWrapper<IoRestorecommerceOrganizationOrganization>;
  IoRestorecommerceCustomerGuest: ResolverTypeWrapper<IoRestorecommerceCustomerGuest>;
  IoRestorecommerceStatusStatus: ResolverTypeWrapper<IoRestorecommerceStatusStatus>;
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
  IGoogleProtobufAny: IGoogleProtobufAny;
  IIoRestorecommerceResourcebaseSearch: IIoRestorecommerceResourcebaseSearch;
  Mutation: ResolverTypeWrapper<{}>;
  InvoicingMutation: ResolverTypeWrapper<InvoicingMutation>;
  InvoicingInvoiceMutation: ResolverTypeWrapper<InvoicingInvoiceMutation>;
  IIoRestorecommerceInvoiceInvoiceList: IIoRestorecommerceInvoiceInvoiceList;
  IIoRestorecommerceInvoiceInvoice: IIoRestorecommerceInvoiceInvoice;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAttributeAttributeObj: IIoRestorecommerceAttributeAttributeObj;
  ModeType: ModeType;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  IoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<IoRestorecommerceResourcebaseDeleteResponse>;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  ProtoIoRestorecommerceInvoiceInvoiceNumberResponse: ResolverTypeWrapper<ProtoIoRestorecommerceInvoiceInvoiceNumberResponse>;
  IoRestorecommerceInvoiceInvoiceNumberResponse: ResolverTypeWrapper<IoRestorecommerceInvoiceInvoiceNumberResponse>;
  IIoRestorecommerceInvoiceRequestInvoiceNumber: IIoRestorecommerceInvoiceRequestInvoiceNumber;
  Subscription: ResolverTypeWrapper<{}>;
  SubscriptionOutput: ResolverTypeWrapper<SubscriptionOutput>;
  SubscriptionAction: SubscriptionAction;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  InvoicingQuery: InvoicingQuery;
  InvoicingInvoiceQuery: InvoicingInvoiceQuery;
  ProtoIoRestorecommerceInvoiceInvoiceListResponse: ProtoIoRestorecommerceInvoiceInvoiceListResponse;
  IoRestorecommerceInvoiceInvoiceListResponse: IoRestorecommerceInvoiceInvoiceListResponse;
  IoRestorecommerceInvoiceInvoiceResponse: IoRestorecommerceInvoiceInvoiceResponse;
  IoRestorecommerceInvoiceInvoice: IoRestorecommerceInvoiceInvoice;
  String: Scalars['String']['output'];
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  Float: Scalars['Float']['output'];
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  IoRestorecommerceAttributeAttributeObj: IoRestorecommerceAttributeAttributeObj;
  IoRestorecommerceCustomerCustomer: IoRestorecommerceCustomerCustomer;
  IoRestorecommerceCustomerIndividualUser: IoRestorecommerceCustomerIndividualUser;
  IoRestorecommerceUserUser: IoRestorecommerceUserUser;
  Boolean: Scalars['Boolean']['output'];
  IoRestorecommerceAuthRoleAssociation: IoRestorecommerceAuthRoleAssociation;
  IoRestorecommerceTimezoneTimezone: IoRestorecommerceTimezoneTimezone;
  IoRestorecommerceLocaleLocale: IoRestorecommerceLocaleLocale;
  IoRestorecommerceImageImage: IoRestorecommerceImageImage;
  Int: Scalars['Int']['output'];
  IoRestorecommerceAuthTokens: IoRestorecommerceAuthTokens;
  GoogleProtobufAny: GoogleProtobufAny;
  GoogleProtobufAnyValue: Scalars['GoogleProtobufAnyValue']['output'];
  IoRestorecommerceAddressAddress: IoRestorecommerceAddressAddress;
  IoRestorecommerceCountryCountry: IoRestorecommerceCountryCountry;
  IoRestorecommerceAddressGeoPoint: IoRestorecommerceAddressGeoPoint;
  IoRestorecommerceAddressAddressAddition: IoRestorecommerceAddressAddressAddition;
  IoRestorecommerceAddressBusinessAddress: IoRestorecommerceAddressBusinessAddress;
  IoRestorecommerceAddressResidentialAddress: IoRestorecommerceAddressResidentialAddress;
  IoRestorecommerceAddressPackStation: IoRestorecommerceAddressPackStation;
  IoRestorecommerceContactPointContactPoint: IoRestorecommerceContactPointContactPoint;
  IoRestorecommerceContactPointTypeContactPointType: IoRestorecommerceContactPointTypeContactPointType;
  IoRestorecommerceCustomerOrgUser: IoRestorecommerceCustomerOrgUser;
  IoRestorecommerceOrganizationOrganization: IoRestorecommerceOrganizationOrganization;
  IoRestorecommerceCustomerGuest: IoRestorecommerceCustomerGuest;
  IoRestorecommerceStatusStatus: IoRestorecommerceStatusStatus;
  IoRestorecommerceStatusOperationStatus: IoRestorecommerceStatusOperationStatus;
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IIoRestorecommerceResourcebaseFilterOp: IIoRestorecommerceResourcebaseFilterOp;
  IIoRestorecommerceResourcebaseFilter: IIoRestorecommerceResourcebaseFilter;
  IIoRestorecommerceFilterFilterOp: IIoRestorecommerceFilterFilterOp;
  IIoRestorecommerceFilterFilter: IIoRestorecommerceFilterFilter;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  IGoogleProtobufAny: IGoogleProtobufAny;
  IIoRestorecommerceResourcebaseSearch: IIoRestorecommerceResourcebaseSearch;
  Mutation: {};
  InvoicingMutation: InvoicingMutation;
  InvoicingInvoiceMutation: InvoicingInvoiceMutation;
  IIoRestorecommerceInvoiceInvoiceList: IIoRestorecommerceInvoiceInvoiceList;
  IIoRestorecommerceInvoiceInvoice: IIoRestorecommerceInvoiceInvoice;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAttributeAttributeObj: IIoRestorecommerceAttributeAttributeObj;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ProtoIoRestorecommerceResourcebaseDeleteResponse;
  IoRestorecommerceResourcebaseDeleteResponse: IoRestorecommerceResourcebaseDeleteResponse;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  ProtoIoRestorecommerceInvoiceInvoiceNumberResponse: ProtoIoRestorecommerceInvoiceInvoiceNumberResponse;
  IoRestorecommerceInvoiceInvoiceNumberResponse: IoRestorecommerceInvoiceInvoiceNumberResponse;
  IIoRestorecommerceInvoiceRequestInvoiceNumber: IIoRestorecommerceInvoiceRequestInvoiceNumber;
  Subscription: {};
  SubscriptionOutput: SubscriptionOutput;
}>;

export type QueryResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  invoicing?: Resolver<ResolversTypes['InvoicingQuery'], ParentType, ContextType>;
}>;

export type InvoicingQueryResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['InvoicingQuery'] = ResolversParentTypes['InvoicingQuery']> = ResolversObject<{
  invoice?: Resolver<ResolversTypes['InvoicingInvoiceQuery'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InvoicingInvoiceQueryResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['InvoicingInvoiceQuery'] = ResolversParentTypes['InvoicingInvoiceQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceInvoiceInvoiceListResponse']>, ParentType, ContextType, RequireFields<InvoicingInvoiceQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceInvoiceInvoiceListResponseResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceInvoiceInvoiceListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceInvoiceInvoiceListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceInvoiceInvoiceListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceInvoiceInvoiceListResponseResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceInvoiceInvoiceListResponse'] = ResolversParentTypes['IoRestorecommerceInvoiceInvoiceListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceInvoiceInvoiceResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceInvoiceInvoiceResponseResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceInvoiceInvoiceResponse'] = ResolversParentTypes['IoRestorecommerceInvoiceInvoiceResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceInvoiceInvoice']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceInvoiceInvoiceResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceInvoiceInvoice'] = ResolversParentTypes['IoRestorecommerceInvoiceInvoice']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCustomerCustomer']>, ParentType, ContextType>;
  paymentStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  netAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  vatAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  document?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invoiceNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerRemark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceMetaMetaResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceMetaMeta'] = ResolversParentTypes['IoRestorecommerceMetaMeta']> = ResolversObject<{
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modified?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modifiedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owners?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  acls?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttributeObj']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeObjResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttributeObj'] = ResolversParentTypes['IoRestorecommerceAttributeAttributeObj']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCustomerCustomerResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerCustomer'] = ResolversParentTypes['IoRestorecommerceCustomerCustomer']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  individualUser?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCustomerIndividualUser']>, ParentType, ContextType>;
  orgUser?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCustomerOrgUser']>, ParentType, ContextType>;
  guest?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCustomerGuest']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCustomerIndividualUserResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerIndividualUser'] = ResolversParentTypes['IoRestorecommerceCustomerIndividualUser']> = ResolversObject<{
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUser']>, ParentType, ContextType>;
  addressId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressAddress']>, ParentType, ContextType>;
  contactPointIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  contactPoints?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceContactPointContactPoint']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserUserResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceUserUser'] = ResolversParentTypes['IoRestorecommerceUserUser']> = ResolversObject<{
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

export type IoRestorecommerceAuthRoleAssociationResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthRoleAssociation'] = ResolversParentTypes['IoRestorecommerceAuthRoleAssociation']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTimezoneTimezoneResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceTimezoneTimezone'] = ResolversParentTypes['IoRestorecommerceTimezoneTimezone']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceLocaleLocaleResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceLocaleLocale'] = ResolversParentTypes['IoRestorecommerceLocaleLocale']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceImageImageResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceImageImage'] = ResolversParentTypes['IoRestorecommerceImageImage']> = ResolversObject<{
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

export type IoRestorecommerceAuthTokensResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthTokens'] = ResolversParentTypes['IoRestorecommerceAuthTokens']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expiresIn?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scopes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  interactive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastLogin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GoogleProtobufAnyResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['GoogleProtobufAny'] = ResolversParentTypes['GoogleProtobufAny']> = ResolversObject<{
  typeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['GoogleProtobufAnyValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface GoogleProtobufAnyValueScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GoogleProtobufAnyValue'], any> {
  name: 'GoogleProtobufAnyValue';
}

export type IoRestorecommerceAddressAddressResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressAddress'] = ResolversParentTypes['IoRestorecommerceAddressAddress']> = ResolversObject<{
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

export type IoRestorecommerceCountryCountryResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceCountryCountry'] = ResolversParentTypes['IoRestorecommerceCountryCountry']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  geographicalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  economicAreas?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressGeoPointResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressGeoPoint'] = ResolversParentTypes['IoRestorecommerceAddressGeoPoint']> = ResolversObject<{
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressAddressAdditionResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressAddressAddition'] = ResolversParentTypes['IoRestorecommerceAddressAddressAddition']> = ResolversObject<{
  field1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  field2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressBusinessAddressResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressBusinessAddress'] = ResolversParentTypes['IoRestorecommerceAddressBusinessAddress']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressResidentialAddressResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressResidentialAddress'] = ResolversParentTypes['IoRestorecommerceAddressResidentialAddress']> = ResolversObject<{
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  givenName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  midName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  familyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressPackStationResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressPackStation'] = ResolversParentTypes['IoRestorecommerceAddressPackStation']> = ResolversObject<{
  provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stationNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceContactPointContactPointResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceContactPointContactPoint'] = ResolversParentTypes['IoRestorecommerceContactPointContactPoint']> = ResolversObject<{
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

export type IoRestorecommerceContactPointTypeContactPointTypeResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceContactPointTypeContactPointType'] = ResolversParentTypes['IoRestorecommerceContactPointTypeContactPointType']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCustomerOrgUserResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerOrgUser'] = ResolversParentTypes['IoRestorecommerceCustomerOrgUser']> = ResolversObject<{
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUser']>, ParentType, ContextType>;
  organizationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrganizationOrganization']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOrganizationOrganizationResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceOrganizationOrganization'] = ResolversParentTypes['IoRestorecommerceOrganizationOrganization']> = ResolversObject<{
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

export type IoRestorecommerceCustomerGuestResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerGuest'] = ResolversParentTypes['IoRestorecommerceCustomerGuest']> = ResolversObject<{
  guest?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  addressId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressAddress']>, ParentType, ContextType>;
  contactPointIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  contactPoints?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceContactPointContactPoint']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusStatusResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusStatus'] = ResolversParentTypes['IoRestorecommerceStatusStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusOperationStatusResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusOperationStatus'] = ResolversParentTypes['IoRestorecommerceStatusOperationStatus']> = ResolversObject<{
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

export type MutationResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  invoicing?: Resolver<ResolversTypes['InvoicingMutation'], ParentType, ContextType>;
}>;

export type InvoicingMutationResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['InvoicingMutation'] = ResolversParentTypes['InvoicingMutation']> = ResolversObject<{
  invoice?: Resolver<ResolversTypes['InvoicingInvoiceMutation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InvoicingInvoiceMutationResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['InvoicingInvoiceMutation'] = ResolversParentTypes['InvoicingInvoiceMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceInvoiceInvoiceListResponse']>, ParentType, ContextType, RequireFields<InvoicingInvoiceMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<InvoicingInvoiceMutationDeleteArgs, 'input'>>;
  GenerateInvoiceNumber?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceInvoiceInvoiceNumberResponse']>, ParentType, ContextType, RequireFields<InvoicingInvoiceMutationGenerateInvoiceNumberArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  status?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceStatusStatus']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceInvoiceInvoiceNumberResponseResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceInvoiceInvoiceNumberResponse'] = ResolversParentTypes['ProtoIoRestorecommerceInvoiceInvoiceNumberResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceInvoiceInvoiceNumberResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceInvoiceInvoiceNumberResponseResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceInvoiceInvoiceNumberResponse'] = ResolversParentTypes['IoRestorecommerceInvoiceInvoiceNumberResponse']> = ResolversObject<{
  invoiceNo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  orderingOrders?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "orderingOrders", ParentType, ContextType, Partial<SubscriptionOrderingOrdersArgs>>;
  catalogProducts?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "catalogProducts", ParentType, ContextType, Partial<SubscriptionCatalogProductsArgs>>;
}>;

export type SubscriptionOutputResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['SubscriptionOutput'] = ResolversParentTypes['SubscriptionOutput']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = InvoicingContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  InvoicingQuery?: InvoicingQueryResolvers<ContextType>;
  InvoicingInvoiceQuery?: InvoicingInvoiceQueryResolvers<ContextType>;
  ProtoIoRestorecommerceInvoiceInvoiceListResponse?: ProtoIoRestorecommerceInvoiceInvoiceListResponseResolvers<ContextType>;
  IoRestorecommerceInvoiceInvoiceListResponse?: IoRestorecommerceInvoiceInvoiceListResponseResolvers<ContextType>;
  IoRestorecommerceInvoiceInvoiceResponse?: IoRestorecommerceInvoiceInvoiceResponseResolvers<ContextType>;
  IoRestorecommerceInvoiceInvoice?: IoRestorecommerceInvoiceInvoiceResolvers<ContextType>;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
  IoRestorecommerceAttributeAttributeObj?: IoRestorecommerceAttributeAttributeObjResolvers<ContextType>;
  IoRestorecommerceCustomerCustomer?: IoRestorecommerceCustomerCustomerResolvers<ContextType>;
  IoRestorecommerceCustomerIndividualUser?: IoRestorecommerceCustomerIndividualUserResolvers<ContextType>;
  IoRestorecommerceUserUser?: IoRestorecommerceUserUserResolvers<ContextType>;
  IoRestorecommerceAuthRoleAssociation?: IoRestorecommerceAuthRoleAssociationResolvers<ContextType>;
  IoRestorecommerceTimezoneTimezone?: IoRestorecommerceTimezoneTimezoneResolvers<ContextType>;
  IoRestorecommerceLocaleLocale?: IoRestorecommerceLocaleLocaleResolvers<ContextType>;
  IoRestorecommerceImageImage?: IoRestorecommerceImageImageResolvers<ContextType>;
  IoRestorecommerceUserUserType?: IoRestorecommerceUserUserTypeResolvers;
  IoRestorecommerceAuthTokens?: IoRestorecommerceAuthTokensResolvers<ContextType>;
  GoogleProtobufAny?: GoogleProtobufAnyResolvers<ContextType>;
  GoogleProtobufAnyValue?: GraphQLScalarType;
  IoRestorecommerceAddressAddress?: IoRestorecommerceAddressAddressResolvers<ContextType>;
  IoRestorecommerceCountryCountry?: IoRestorecommerceCountryCountryResolvers<ContextType>;
  IoRestorecommerceAddressGeoPoint?: IoRestorecommerceAddressGeoPointResolvers<ContextType>;
  IoRestorecommerceAddressAddressAddition?: IoRestorecommerceAddressAddressAdditionResolvers<ContextType>;
  IoRestorecommerceAddressBusinessAddress?: IoRestorecommerceAddressBusinessAddressResolvers<ContextType>;
  IoRestorecommerceAddressResidentialAddress?: IoRestorecommerceAddressResidentialAddressResolvers<ContextType>;
  IoRestorecommerceAddressPackStation?: IoRestorecommerceAddressPackStationResolvers<ContextType>;
  IoRestorecommerceContactPointContactPoint?: IoRestorecommerceContactPointContactPointResolvers<ContextType>;
  IoRestorecommerceContactPointTypeContactPointType?: IoRestorecommerceContactPointTypeContactPointTypeResolvers<ContextType>;
  IoRestorecommerceCustomerOrgUser?: IoRestorecommerceCustomerOrgUserResolvers<ContextType>;
  IoRestorecommerceOrganizationOrganization?: IoRestorecommerceOrganizationOrganizationResolvers<ContextType>;
  IoRestorecommerceCustomerGuest?: IoRestorecommerceCustomerGuestResolvers<ContextType>;
  IoRestorecommerceStatusStatus?: IoRestorecommerceStatusStatusResolvers<ContextType>;
  IoRestorecommerceStatusOperationStatus?: IoRestorecommerceStatusOperationStatusResolvers<ContextType>;
  IoRestorecommerceResourcebaseSortSortOrder?: IoRestorecommerceResourcebaseSortSortOrderResolvers;
  IoRestorecommerceResourcebaseFilterOperation?: IoRestorecommerceResourcebaseFilterOperationResolvers;
  IoRestorecommerceResourcebaseFilterValueType?: IoRestorecommerceResourcebaseFilterValueTypeResolvers;
  IoRestorecommerceFilterFilterOperation?: IoRestorecommerceFilterFilterOperationResolvers;
  IoRestorecommerceFilterFilterValueType?: IoRestorecommerceFilterFilterValueTypeResolvers;
  IoRestorecommerceFilterFilterOpOperator?: IoRestorecommerceFilterFilterOpOperatorResolvers;
  IoRestorecommerceResourcebaseFilterOpOperator?: IoRestorecommerceResourcebaseFilterOpOperatorResolvers;
  Mutation?: MutationResolvers<ContextType>;
  InvoicingMutation?: InvoicingMutationResolvers<ContextType>;
  InvoicingInvoiceMutation?: InvoicingInvoiceMutationResolvers<ContextType>;
  ProtoIoRestorecommerceResourcebaseDeleteResponse?: ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  IoRestorecommerceResourcebaseDeleteResponse?: IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  ProtoIoRestorecommerceInvoiceInvoiceNumberResponse?: ProtoIoRestorecommerceInvoiceInvoiceNumberResponseResolvers<ContextType>;
  IoRestorecommerceInvoiceInvoiceNumberResponse?: IoRestorecommerceInvoiceInvoiceNumberResponseResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  SubscriptionOutput?: SubscriptionOutputResolvers<ContextType>;
}>;

