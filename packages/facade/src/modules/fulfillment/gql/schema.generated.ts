import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { FulfillmentContext } from '../interfaces';
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
  TodoScalar: any;
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  fulfillment: FulfillmentQuery;
};

export type FulfillmentQuery = {
  __typename?: 'FulfillmentQuery';
  fulfillment_courier: FulfillmentFulfillmentCourierQuery;
};

export type FulfillmentFulfillmentCourierQuery = {
  __typename?: 'FulfillmentFulfillmentCourierQuery';
  Read?: Maybe<ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList>;
};


export type FulfillmentFulfillmentCourierQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList = {
  __typename?: 'ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList';
  details?: Maybe<IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList>;
};

export type IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList = {
  __typename?: 'IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList';
  items?: Maybe<Array<IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse = {
  __typename?: 'IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse';
  payload?: Maybe<IoRestorecommerceFulfillmentCourierFulfillmentCourier>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceFulfillmentCourierFulfillmentCourier = {
  __typename?: 'IoRestorecommerceFulfillmentCourierFulfillmentCourier';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  stubType?: Maybe<Scalars['String']>;
  configuration?: Maybe<GoogleProtobufAny>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
};

export type GoogleProtobufAny = {
  __typename?: 'GoogleProtobufAny';
  typeUrl?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['TodoScalar']>;
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
  operator?: Maybe<IoRestorecommerceResourcebaseFilterOpOperator>;
};

export type IIoRestorecommerceResourcebaseFilter = {
  field?: Maybe<Scalars['String']>;
  operation?: Maybe<IoRestorecommerceResourcebaseFilterOperation>;
  value?: Maybe<Scalars['String']>;
  type?: Maybe<IoRestorecommerceResourcebaseFilterValueType>;
  filters?: Maybe<Array<IIoRestorecommerceFilterFilterOp>>;
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
  filter?: Maybe<Array<IIoRestorecommerceFilterFilter>>;
  operator?: Maybe<IoRestorecommerceFilterFilterOpOperator>;
};

export type IIoRestorecommerceFilterFilter = {
  field?: Maybe<Scalars['String']>;
  operation?: Maybe<IoRestorecommerceFilterFilterOperation>;
  value?: Maybe<Scalars['String']>;
  type?: Maybe<IoRestorecommerceFilterFilterValueType>;
  filters?: Maybe<Array<IIoRestorecommerceFilterFilterOp>>;
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
  name?: Maybe<Scalars['String']>;
  include?: Maybe<Scalars['Boolean']>;
};

export type IGoogleProtobufAny = {
  typeUrl?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Upload']>;
};


export type Mutation = {
  __typename?: 'Mutation';
  fulfillment: FulfillmentMutation;
};

export type FulfillmentMutation = {
  __typename?: 'FulfillmentMutation';
  fulfillment: FulfillmentFulfillmentMutation;
  fulfillment_courier: FulfillmentFulfillmentCourierMutation;
};

export type FulfillmentFulfillmentMutation = {
  __typename?: 'FulfillmentFulfillmentMutation';
  Read?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentResponseList>;
  Mutate?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentResponseList>;
  Track?: Maybe<ProtoIoRestorecommerceFulfillmentTrackingResultList>;
  Cancel?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentResponseList>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type FulfillmentFulfillmentMutationReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};


export type FulfillmentFulfillmentMutationMutateArgs = {
  input: IIoRestorecommerceFulfillmentFulfillmentRequestList;
};


export type FulfillmentFulfillmentMutationTrackArgs = {
  input: IIoRestorecommerceFulfillmentTrackingRequestList;
};


export type FulfillmentFulfillmentMutationCancelArgs = {
  input: IIoRestorecommerceFulfillmentCancelRequestList;
};


export type FulfillmentFulfillmentMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type ProtoIoRestorecommerceFulfillmentFulfillmentResponseList = {
  __typename?: 'ProtoIoRestorecommerceFulfillmentFulfillmentResponseList';
  details?: Maybe<IoRestorecommerceFulfillmentFulfillmentResponseList>;
};

export type IoRestorecommerceFulfillmentFulfillmentResponseList = {
  __typename?: 'IoRestorecommerceFulfillmentFulfillmentResponseList';
  items?: Maybe<Array<IoRestorecommerceFulfillmentFulfillmentResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceFulfillmentFulfillmentResponse = {
  __typename?: 'IoRestorecommerceFulfillmentFulfillmentResponse';
  payload?: Maybe<IoRestorecommerceFulfillmentFulfillment>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceFulfillmentFulfillment = {
  __typename?: 'IoRestorecommerceFulfillmentFulfillment';
  id?: Maybe<Scalars['String']>;
  order?: Maybe<IoRestorecommerceFulfillmentOrder>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  labels?: Maybe<Array<IoRestorecommerceFulfillmentLabel>>;
  fulfilled?: Maybe<Scalars['Boolean']>;
};

export type IoRestorecommerceFulfillmentOrder = {
  __typename?: 'IoRestorecommerceFulfillmentOrder';
  referenceId?: Maybe<Scalars['String']>;
  parcels?: Maybe<Array<IoRestorecommerceFulfillmentParcel>>;
  sender?: Maybe<IoRestorecommerceFulfillmentAddress>;
  receiver?: Maybe<IoRestorecommerceFulfillmentAddress>;
  notify?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceFulfillmentParcel = {
  __typename?: 'IoRestorecommerceFulfillmentParcel';
  productId?: Maybe<Scalars['String']>;
  productVariantId?: Maybe<Scalars['String']>;
  items?: Maybe<Array<IoRestorecommerceFulfillmentParcelItem>>;
  weightInKg?: Maybe<Scalars['Float']>;
  heightInCm?: Maybe<Scalars['Float']>;
  widthInCm?: Maybe<Scalars['Float']>;
  lengthInCm?: Maybe<Scalars['Float']>;
};

export type IoRestorecommerceFulfillmentParcelItem = {
  __typename?: 'IoRestorecommerceFulfillmentParcelItem';
  itemId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceFulfillmentAddress = {
  __typename?: 'IoRestorecommerceFulfillmentAddress';
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Array<Scalars['String']>>;
  address?: Maybe<IoRestorecommerceAddressAddress>;
  packstation?: Maybe<IoRestorecommerceFulfillmentPackstation>;
  branch?: Maybe<IoRestorecommerceFulfillmentBranch>;
  country?: Maybe<IoRestorecommerceCountryCountry>;
  contact?: Maybe<IoRestorecommerceFulfillmentContact>;
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

export type IoRestorecommerceFulfillmentPackstation = {
  __typename?: 'IoRestorecommerceFulfillmentPackstation';
  provider?: Maybe<Scalars['String']>;
  stationNumber?: Maybe<Scalars['String']>;
  postNumber?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceFulfillmentBranch = {
  __typename?: 'IoRestorecommerceFulfillmentBranch';
  provider?: Maybe<Scalars['String']>;
  branchNumber?: Maybe<Scalars['String']>;
  postNumber?: Maybe<Scalars['String']>;
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

export type IoRestorecommerceFulfillmentContact = {
  __typename?: 'IoRestorecommerceFulfillmentContact';
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceFulfillmentLabel = {
  __typename?: 'IoRestorecommerceFulfillmentLabel';
  url?: Maybe<Scalars['String']>;
  pdf?: Maybe<Scalars['String']>;
  png?: Maybe<Scalars['String']>;
  shipmentNumber?: Maybe<Scalars['String']>;
  state?: Maybe<IoRestorecommerceFulfillmentState>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export enum IoRestorecommerceFulfillmentState {
  Undefined = 0,
  Invalid = 1,
  Ordered = 2,
  Shipping = 3,
  Done = 4,
  Cancelled = 5,
  Failed = 6
}

export type IIoRestorecommerceFulfillmentFulfillmentRequestList = {
  items?: Maybe<Array<IIoRestorecommerceFulfillmentFulfillmentRequest>>;
  totalCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<ModeType>;
};

export type IIoRestorecommerceFulfillmentFulfillmentRequest = {
  id?: Maybe<Scalars['String']>;
  order?: Maybe<IIoRestorecommerceFulfillmentOrder>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
};

export type IIoRestorecommerceFulfillmentOrder = {
  referenceId?: Maybe<Scalars['String']>;
  parcels?: Maybe<Array<IIoRestorecommerceFulfillmentParcel>>;
  sender?: Maybe<IIoRestorecommerceFulfillmentAddress>;
  receiver?: Maybe<IIoRestorecommerceFulfillmentAddress>;
  notify?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceFulfillmentParcel = {
  productId?: Maybe<Scalars['String']>;
  productVariantId?: Maybe<Scalars['String']>;
  items?: Maybe<Array<IIoRestorecommerceFulfillmentParcelItem>>;
  weightInKg?: Maybe<Scalars['Float']>;
  heightInCm?: Maybe<Scalars['Float']>;
  widthInCm?: Maybe<Scalars['Float']>;
  lengthInCm?: Maybe<Scalars['Float']>;
};

export type IIoRestorecommerceFulfillmentParcelItem = {
  itemId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type IIoRestorecommerceFulfillmentAddress = {
  title?: Maybe<Scalars['String']>;
  name?: Maybe<Array<Scalars['String']>>;
  address?: Maybe<IIoRestorecommerceAddressAddress>;
  packstation?: Maybe<IIoRestorecommerceFulfillmentPackstation>;
  branch?: Maybe<IIoRestorecommerceFulfillmentBranch>;
  country?: Maybe<IIoRestorecommerceCountryCountry>;
  contact?: Maybe<IIoRestorecommerceFulfillmentContact>;
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
  acl?: Maybe<Array<IIoRestorecommerceAttributeAttributeObj>>;
};

export type IIoRestorecommerceAttributeAttribute = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  attribute?: Maybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type IIoRestorecommerceAttributeAttributeObj = {
  attribute?: Maybe<IIoRestorecommerceAttributeAttribute>;
};

export type IIoRestorecommerceAddressAddressGeoPoint = {
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type IIoRestorecommerceAddressAddressAddition = {
  field1?: Maybe<Scalars['String']>;
  field2?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceFulfillmentPackstation = {
  provider?: Maybe<Scalars['String']>;
  stationNumber?: Maybe<Scalars['String']>;
  postNumber?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceFulfillmentBranch = {
  provider?: Maybe<Scalars['String']>;
  branchNumber?: Maybe<Scalars['String']>;
  postNumber?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceCountryCountry = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  geographicalName?: Maybe<Scalars['String']>;
  economicAreas?: Maybe<Array<Scalars['String']>>;
};

export type IIoRestorecommerceFulfillmentContact = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export enum ModeType {
  Create = 'CREATE',
  Update = 'UPDATE',
  Upsert = 'UPSERT'
}

export type ProtoIoRestorecommerceFulfillmentTrackingResultList = {
  __typename?: 'ProtoIoRestorecommerceFulfillmentTrackingResultList';
  details?: Maybe<IoRestorecommerceFulfillmentTrackingResultList>;
};

export type IoRestorecommerceFulfillmentTrackingResultList = {
  __typename?: 'IoRestorecommerceFulfillmentTrackingResultList';
  items?: Maybe<Array<IoRestorecommerceFulfillmentTrackingResult>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceFulfillmentTrackingResult = {
  __typename?: 'IoRestorecommerceFulfillmentTrackingResult';
  fulfillment?: Maybe<IoRestorecommerceFulfillmentFulfillment>;
  tracks?: Maybe<Array<IoRestorecommerceFulfillmentTracking>>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceFulfillmentTracking = {
  __typename?: 'IoRestorecommerceFulfillmentTracking';
  shipmentNumber?: Maybe<Scalars['String']>;
  events?: Maybe<Array<IoRestorecommerceFulfillmentEvent>>;
  details?: Maybe<GoogleProtobufAny>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceFulfillmentEvent = {
  __typename?: 'IoRestorecommerceFulfillmentEvent';
  timestamp?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  details?: Maybe<GoogleProtobufAny>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IIoRestorecommerceFulfillmentTrackingRequestList = {
  items?: Maybe<Array<IIoRestorecommerceFulfillmentTrackingRequest>>;
};

export type IIoRestorecommerceFulfillmentTrackingRequest = {
  fulfillmentId?: Maybe<Scalars['String']>;
  shipmentNumbers?: Maybe<Array<Scalars['String']>>;
  options?: Maybe<IGoogleProtobufAny>;
};

export type IIoRestorecommerceFulfillmentCancelRequestList = {
  ids?: Maybe<Array<Scalars['String']>>;
};

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
  collection?: Maybe<Scalars['Boolean']>;
  ids?: Maybe<Array<Scalars['String']>>;
};

export type FulfillmentFulfillmentCourierMutation = {
  __typename?: 'FulfillmentFulfillmentCourierMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type FulfillmentFulfillmentCourierMutationMutateArgs = {
  input: IIoRestorecommerceFulfillmentCourierFulfillmentCourierList;
};


export type FulfillmentFulfillmentCourierMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceFulfillmentCourierFulfillmentCourierList = {
  items?: Maybe<Array<IIoRestorecommerceFulfillmentCourierFulfillmentCourier>>;
  totalCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<ModeType>;
};

export type IIoRestorecommerceFulfillmentCourierFulfillmentCourier = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  stubType?: Maybe<Scalars['String']>;
  configuration?: Maybe<IGoogleProtobufAny>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
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
  FulfillmentQuery: ResolverTypeWrapper<FulfillmentQuery>;
  FulfillmentFulfillmentCourierQuery: ResolverTypeWrapper<FulfillmentFulfillmentCourierQuery>;
  ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList: ResolverTypeWrapper<ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList>;
  IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList: ResolverTypeWrapper<IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList>;
  IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse: ResolverTypeWrapper<IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse>;
  IoRestorecommerceFulfillmentCourierFulfillmentCourier: ResolverTypeWrapper<IoRestorecommerceFulfillmentCourierFulfillmentCourier>;
  String: ResolverTypeWrapper<Scalars['String']>;
  GoogleProtobufAny: ResolverTypeWrapper<GoogleProtobufAny>;
  TodoScalar: ResolverTypeWrapper<Scalars['TodoScalar']>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  IoRestorecommerceAttributeAttributeObj: ResolverTypeWrapper<IoRestorecommerceAttributeAttributeObj>;
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
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  Mutation: ResolverTypeWrapper<{}>;
  FulfillmentMutation: ResolverTypeWrapper<FulfillmentMutation>;
  FulfillmentFulfillmentMutation: ResolverTypeWrapper<FulfillmentFulfillmentMutation>;
  ProtoIoRestorecommerceFulfillmentFulfillmentResponseList: ResolverTypeWrapper<ProtoIoRestorecommerceFulfillmentFulfillmentResponseList>;
  IoRestorecommerceFulfillmentFulfillmentResponseList: ResolverTypeWrapper<IoRestorecommerceFulfillmentFulfillmentResponseList>;
  IoRestorecommerceFulfillmentFulfillmentResponse: ResolverTypeWrapper<IoRestorecommerceFulfillmentFulfillmentResponse>;
  IoRestorecommerceFulfillmentFulfillment: ResolverTypeWrapper<IoRestorecommerceFulfillmentFulfillment>;
  IoRestorecommerceFulfillmentOrder: ResolverTypeWrapper<IoRestorecommerceFulfillmentOrder>;
  IoRestorecommerceFulfillmentParcel: ResolverTypeWrapper<IoRestorecommerceFulfillmentParcel>;
  IoRestorecommerceFulfillmentParcelItem: ResolverTypeWrapper<IoRestorecommerceFulfillmentParcelItem>;
  IoRestorecommerceFulfillmentAddress: ResolverTypeWrapper<IoRestorecommerceFulfillmentAddress>;
  IoRestorecommerceAddressAddress: ResolverTypeWrapper<IoRestorecommerceAddressAddress>;
  IoRestorecommerceAddressAddressGeoPoint: ResolverTypeWrapper<IoRestorecommerceAddressAddressGeoPoint>;
  IoRestorecommerceAddressAddressAddition: ResolverTypeWrapper<IoRestorecommerceAddressAddressAddition>;
  IoRestorecommerceFulfillmentPackstation: ResolverTypeWrapper<IoRestorecommerceFulfillmentPackstation>;
  IoRestorecommerceFulfillmentBranch: ResolverTypeWrapper<IoRestorecommerceFulfillmentBranch>;
  IoRestorecommerceCountryCountry: ResolverTypeWrapper<IoRestorecommerceCountryCountry>;
  IoRestorecommerceFulfillmentContact: ResolverTypeWrapper<IoRestorecommerceFulfillmentContact>;
  IoRestorecommerceFulfillmentLabel: ResolverTypeWrapper<IoRestorecommerceFulfillmentLabel>;
  IoRestorecommerceFulfillmentState: IoRestorecommerceFulfillmentState;
  IIoRestorecommerceFulfillmentFulfillmentRequestList: IIoRestorecommerceFulfillmentFulfillmentRequestList;
  IIoRestorecommerceFulfillmentFulfillmentRequest: IIoRestorecommerceFulfillmentFulfillmentRequest;
  IIoRestorecommerceFulfillmentOrder: IIoRestorecommerceFulfillmentOrder;
  IIoRestorecommerceFulfillmentParcel: IIoRestorecommerceFulfillmentParcel;
  IIoRestorecommerceFulfillmentParcelItem: IIoRestorecommerceFulfillmentParcelItem;
  IIoRestorecommerceFulfillmentAddress: IIoRestorecommerceFulfillmentAddress;
  IIoRestorecommerceAddressAddress: IIoRestorecommerceAddressAddress;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAttributeAttributeObj: IIoRestorecommerceAttributeAttributeObj;
  IIoRestorecommerceAddressAddressGeoPoint: IIoRestorecommerceAddressAddressGeoPoint;
  IIoRestorecommerceAddressAddressAddition: IIoRestorecommerceAddressAddressAddition;
  IIoRestorecommerceFulfillmentPackstation: IIoRestorecommerceFulfillmentPackstation;
  IIoRestorecommerceFulfillmentBranch: IIoRestorecommerceFulfillmentBranch;
  IIoRestorecommerceCountryCountry: IIoRestorecommerceCountryCountry;
  IIoRestorecommerceFulfillmentContact: IIoRestorecommerceFulfillmentContact;
  ModeType: ModeType;
  ProtoIoRestorecommerceFulfillmentTrackingResultList: ResolverTypeWrapper<ProtoIoRestorecommerceFulfillmentTrackingResultList>;
  IoRestorecommerceFulfillmentTrackingResultList: ResolverTypeWrapper<IoRestorecommerceFulfillmentTrackingResultList>;
  IoRestorecommerceFulfillmentTrackingResult: ResolverTypeWrapper<IoRestorecommerceFulfillmentTrackingResult>;
  IoRestorecommerceFulfillmentTracking: ResolverTypeWrapper<IoRestorecommerceFulfillmentTracking>;
  IoRestorecommerceFulfillmentEvent: ResolverTypeWrapper<IoRestorecommerceFulfillmentEvent>;
  IIoRestorecommerceFulfillmentTrackingRequestList: IIoRestorecommerceFulfillmentTrackingRequestList;
  IIoRestorecommerceFulfillmentTrackingRequest: IIoRestorecommerceFulfillmentTrackingRequest;
  IIoRestorecommerceFulfillmentCancelRequestList: IIoRestorecommerceFulfillmentCancelRequestList;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  IoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<IoRestorecommerceResourcebaseDeleteResponse>;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  FulfillmentFulfillmentCourierMutation: ResolverTypeWrapper<FulfillmentFulfillmentCourierMutation>;
  IIoRestorecommerceFulfillmentCourierFulfillmentCourierList: IIoRestorecommerceFulfillmentCourierFulfillmentCourierList;
  IIoRestorecommerceFulfillmentCourierFulfillmentCourier: IIoRestorecommerceFulfillmentCourierFulfillmentCourier;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  FulfillmentQuery: FulfillmentQuery;
  FulfillmentFulfillmentCourierQuery: FulfillmentFulfillmentCourierQuery;
  ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList: ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList;
  IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList: IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList;
  IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse: IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse;
  IoRestorecommerceFulfillmentCourierFulfillmentCourier: IoRestorecommerceFulfillmentCourierFulfillmentCourier;
  String: Scalars['String'];
  GoogleProtobufAny: GoogleProtobufAny;
  TodoScalar: Scalars['TodoScalar'];
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  Float: Scalars['Float'];
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  IoRestorecommerceAttributeAttributeObj: IoRestorecommerceAttributeAttributeObj;
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
  Upload: Scalars['Upload'];
  Mutation: {};
  FulfillmentMutation: FulfillmentMutation;
  FulfillmentFulfillmentMutation: FulfillmentFulfillmentMutation;
  ProtoIoRestorecommerceFulfillmentFulfillmentResponseList: ProtoIoRestorecommerceFulfillmentFulfillmentResponseList;
  IoRestorecommerceFulfillmentFulfillmentResponseList: IoRestorecommerceFulfillmentFulfillmentResponseList;
  IoRestorecommerceFulfillmentFulfillmentResponse: IoRestorecommerceFulfillmentFulfillmentResponse;
  IoRestorecommerceFulfillmentFulfillment: IoRestorecommerceFulfillmentFulfillment;
  IoRestorecommerceFulfillmentOrder: IoRestorecommerceFulfillmentOrder;
  IoRestorecommerceFulfillmentParcel: IoRestorecommerceFulfillmentParcel;
  IoRestorecommerceFulfillmentParcelItem: IoRestorecommerceFulfillmentParcelItem;
  IoRestorecommerceFulfillmentAddress: IoRestorecommerceFulfillmentAddress;
  IoRestorecommerceAddressAddress: IoRestorecommerceAddressAddress;
  IoRestorecommerceAddressAddressGeoPoint: IoRestorecommerceAddressAddressGeoPoint;
  IoRestorecommerceAddressAddressAddition: IoRestorecommerceAddressAddressAddition;
  IoRestorecommerceFulfillmentPackstation: IoRestorecommerceFulfillmentPackstation;
  IoRestorecommerceFulfillmentBranch: IoRestorecommerceFulfillmentBranch;
  IoRestorecommerceCountryCountry: IoRestorecommerceCountryCountry;
  IoRestorecommerceFulfillmentContact: IoRestorecommerceFulfillmentContact;
  IoRestorecommerceFulfillmentLabel: IoRestorecommerceFulfillmentLabel;
  IIoRestorecommerceFulfillmentFulfillmentRequestList: IIoRestorecommerceFulfillmentFulfillmentRequestList;
  IIoRestorecommerceFulfillmentFulfillmentRequest: IIoRestorecommerceFulfillmentFulfillmentRequest;
  IIoRestorecommerceFulfillmentOrder: IIoRestorecommerceFulfillmentOrder;
  IIoRestorecommerceFulfillmentParcel: IIoRestorecommerceFulfillmentParcel;
  IIoRestorecommerceFulfillmentParcelItem: IIoRestorecommerceFulfillmentParcelItem;
  IIoRestorecommerceFulfillmentAddress: IIoRestorecommerceFulfillmentAddress;
  IIoRestorecommerceAddressAddress: IIoRestorecommerceAddressAddress;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAttributeAttributeObj: IIoRestorecommerceAttributeAttributeObj;
  IIoRestorecommerceAddressAddressGeoPoint: IIoRestorecommerceAddressAddressGeoPoint;
  IIoRestorecommerceAddressAddressAddition: IIoRestorecommerceAddressAddressAddition;
  IIoRestorecommerceFulfillmentPackstation: IIoRestorecommerceFulfillmentPackstation;
  IIoRestorecommerceFulfillmentBranch: IIoRestorecommerceFulfillmentBranch;
  IIoRestorecommerceCountryCountry: IIoRestorecommerceCountryCountry;
  IIoRestorecommerceFulfillmentContact: IIoRestorecommerceFulfillmentContact;
  ProtoIoRestorecommerceFulfillmentTrackingResultList: ProtoIoRestorecommerceFulfillmentTrackingResultList;
  IoRestorecommerceFulfillmentTrackingResultList: IoRestorecommerceFulfillmentTrackingResultList;
  IoRestorecommerceFulfillmentTrackingResult: IoRestorecommerceFulfillmentTrackingResult;
  IoRestorecommerceFulfillmentTracking: IoRestorecommerceFulfillmentTracking;
  IoRestorecommerceFulfillmentEvent: IoRestorecommerceFulfillmentEvent;
  IIoRestorecommerceFulfillmentTrackingRequestList: IIoRestorecommerceFulfillmentTrackingRequestList;
  IIoRestorecommerceFulfillmentTrackingRequest: IIoRestorecommerceFulfillmentTrackingRequest;
  IIoRestorecommerceFulfillmentCancelRequestList: IIoRestorecommerceFulfillmentCancelRequestList;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ProtoIoRestorecommerceResourcebaseDeleteResponse;
  IoRestorecommerceResourcebaseDeleteResponse: IoRestorecommerceResourcebaseDeleteResponse;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  FulfillmentFulfillmentCourierMutation: FulfillmentFulfillmentCourierMutation;
  IIoRestorecommerceFulfillmentCourierFulfillmentCourierList: IIoRestorecommerceFulfillmentCourierFulfillmentCourierList;
  IIoRestorecommerceFulfillmentCourierFulfillmentCourier: IIoRestorecommerceFulfillmentCourierFulfillmentCourier;
}>;

export type QueryResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  fulfillment?: Resolver<ResolversTypes['FulfillmentQuery'], ParentType, ContextType>;
}>;

export type FulfillmentQueryResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['FulfillmentQuery'] = ResolversParentTypes['FulfillmentQuery']> = ResolversObject<{
  fulfillment_courier?: Resolver<ResolversTypes['FulfillmentFulfillmentCourierQuery'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FulfillmentFulfillmentCourierQueryResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['FulfillmentFulfillmentCourierQuery'] = ResolversParentTypes['FulfillmentFulfillmentCourierQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentCourierQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseListResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList'] = ResolversParentTypes['ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseListResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList'] = ResolversParentTypes['IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse'] = ResolversParentTypes['IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentCourierFulfillmentCourier']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentCourierFulfillmentCourierResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentCourierFulfillmentCourier'] = ResolversParentTypes['IoRestorecommerceFulfillmentCourierFulfillmentCourier']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stubType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  configuration?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GoogleProtobufAnyResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['GoogleProtobufAny'] = ResolversParentTypes['GoogleProtobufAny']> = ResolversObject<{
  typeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['TodoScalar']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface TodoScalarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TodoScalar'], any> {
  name: 'TodoScalar';
}

export type IoRestorecommerceMetaMetaResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceMetaMeta'] = ResolversParentTypes['IoRestorecommerceMetaMeta']> = ResolversObject<{
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modified?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modifiedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  acl?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttributeObj']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeObjResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttributeObj'] = ResolversParentTypes['IoRestorecommerceAttributeAttributeObj']> = ResolversObject<{
  attribute?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusStatusResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusStatus'] = ResolversParentTypes['IoRestorecommerceStatusStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusOperationStatusResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusOperationStatus'] = ResolversParentTypes['IoRestorecommerceStatusOperationStatus']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseSortSortOrderResolvers = { UNSORTED: 'undefined', ASCENDING: 1, DESCENDING: 2 };

export type IoRestorecommerceResourcebaseFilterOperationResolvers = { eq: 'undefined', lt: 1, lte: 2, gt: 3, gte: 4, isEmpty: 5, iLike: 6, in: 7, neq: 8 };

export type IoRestorecommerceResourcebaseFilterValueTypeResolvers = { STRING: 'undefined', NUMBER: 1, BOOLEAN: 2, DATE: 3, ARRAY: 4 };

export type IoRestorecommerceFilterFilterOperationResolvers = { eq: 'undefined', lt: 1, lte: 2, gt: 3, gte: 4, isEmpty: 5, iLike: 6, in: 7, neq: 8 };

export type IoRestorecommerceFilterFilterValueTypeResolvers = { STRING: 'undefined', NUMBER: 1, BOOLEAN: 2, DATE: 3, ARRAY: 4 };

export type IoRestorecommerceFilterFilterOpOperatorResolvers = { and: 'undefined', or: 1 };

export type IoRestorecommerceResourcebaseFilterOpOperatorResolvers = { and: 'undefined', or: 1 };

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type MutationResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  fulfillment?: Resolver<ResolversTypes['FulfillmentMutation'], ParentType, ContextType>;
}>;

export type FulfillmentMutationResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['FulfillmentMutation'] = ResolversParentTypes['FulfillmentMutation']> = ResolversObject<{
  fulfillment?: Resolver<ResolversTypes['FulfillmentFulfillmentMutation'], ParentType, ContextType>;
  fulfillment_courier?: Resolver<ResolversTypes['FulfillmentFulfillmentCourierMutation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FulfillmentFulfillmentMutationResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['FulfillmentFulfillmentMutation'] = ResolversParentTypes['FulfillmentFulfillmentMutation']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentFulfillmentResponseList']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentMutationReadArgs, 'input'>>;
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentFulfillmentResponseList']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentMutationMutateArgs, 'input'>>;
  Track?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentTrackingResultList']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentMutationTrackArgs, 'input'>>;
  Cancel?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentFulfillmentResponseList']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentMutationCancelArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceFulfillmentFulfillmentResponseListResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceFulfillmentFulfillmentResponseList'] = ResolversParentTypes['ProtoIoRestorecommerceFulfillmentFulfillmentResponseList']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentFulfillmentResponseList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentFulfillmentResponseListResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentFulfillmentResponseList'] = ResolversParentTypes['IoRestorecommerceFulfillmentFulfillmentResponseList']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentFulfillmentResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentFulfillmentResponseResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentFulfillmentResponse'] = ResolversParentTypes['IoRestorecommerceFulfillmentFulfillmentResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentFulfillment']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentFulfillmentResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentFulfillment'] = ResolversParentTypes['IoRestorecommerceFulfillmentFulfillment']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentOrder']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  labels?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentLabel']>>, ParentType, ContextType>;
  fulfilled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentOrderResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentOrder'] = ResolversParentTypes['IoRestorecommerceFulfillmentOrder']> = ResolversObject<{
  referenceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parcels?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentParcel']>>, ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentAddress']>, ParentType, ContextType>;
  receiver?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentAddress']>, ParentType, ContextType>;
  notify?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentParcelResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentParcel'] = ResolversParentTypes['IoRestorecommerceFulfillmentParcel']> = ResolversObject<{
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productVariantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentParcelItem']>>, ParentType, ContextType>;
  weightInKg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  heightInCm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  widthInCm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lengthInCm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentParcelItemResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentParcelItem'] = ResolversParentTypes['IoRestorecommerceFulfillmentParcelItem']> = ResolversObject<{
  itemId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentAddressResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentAddress'] = ResolversParentTypes['IoRestorecommerceFulfillmentAddress']> = ResolversObject<{
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressAddress']>, ParentType, ContextType>;
  packstation?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentPackstation']>, ParentType, ContextType>;
  branch?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentBranch']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCountryCountry']>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentContact']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressAddressResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressAddress'] = ResolversParentTypes['IoRestorecommerceAddressAddress']> = ResolversObject<{
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

export type IoRestorecommerceAddressAddressGeoPointResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressAddressGeoPoint'] = ResolversParentTypes['IoRestorecommerceAddressAddressGeoPoint']> = ResolversObject<{
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressAddressAdditionResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressAddressAddition'] = ResolversParentTypes['IoRestorecommerceAddressAddressAddition']> = ResolversObject<{
  field1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  field2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentPackstationResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentPackstation'] = ResolversParentTypes['IoRestorecommerceFulfillmentPackstation']> = ResolversObject<{
  provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stationNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentBranchResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentBranch'] = ResolversParentTypes['IoRestorecommerceFulfillmentBranch']> = ResolversObject<{
  provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  branchNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCountryCountryResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceCountryCountry'] = ResolversParentTypes['IoRestorecommerceCountryCountry']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  geographicalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  economicAreas?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentContactResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentContact'] = ResolversParentTypes['IoRestorecommerceFulfillmentContact']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentLabelResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentLabel'] = ResolversParentTypes['IoRestorecommerceFulfillmentLabel']> = ResolversObject<{
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pdf?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  png?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shipmentNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentState']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentStateResolvers = { Undefined: 'undefined', Invalid: 1, Ordered: 2, Shipping: 3, Done: 4, Cancelled: 5, Failed: 6 };

export type ProtoIoRestorecommerceFulfillmentTrackingResultListResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceFulfillmentTrackingResultList'] = ResolversParentTypes['ProtoIoRestorecommerceFulfillmentTrackingResultList']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentTrackingResultList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentTrackingResultListResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentTrackingResultList'] = ResolversParentTypes['IoRestorecommerceFulfillmentTrackingResultList']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentTrackingResult']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentTrackingResultResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentTrackingResult'] = ResolversParentTypes['IoRestorecommerceFulfillmentTrackingResult']> = ResolversObject<{
  fulfillment?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentFulfillment']>, ParentType, ContextType>;
  tracks?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentTracking']>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentTrackingResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentTracking'] = ResolversParentTypes['IoRestorecommerceFulfillmentTracking']> = ResolversObject<{
  shipmentNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  events?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentEvent']>>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentEventResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentEvent'] = ResolversParentTypes['IoRestorecommerceFulfillmentEvent']> = ResolversObject<{
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  status?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceStatusStatus']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FulfillmentFulfillmentCourierMutationResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['FulfillmentFulfillmentCourierMutation'] = ResolversParentTypes['FulfillmentFulfillmentCourierMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentCourierMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentCourierMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = FulfillmentContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  FulfillmentQuery?: FulfillmentQueryResolvers<ContextType>;
  FulfillmentFulfillmentCourierQuery?: FulfillmentFulfillmentCourierQueryResolvers<ContextType>;
  ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList?: ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseListResolvers<ContextType>;
  IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList?: IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseListResolvers<ContextType>;
  IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse?: IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseResolvers<ContextType>;
  IoRestorecommerceFulfillmentCourierFulfillmentCourier?: IoRestorecommerceFulfillmentCourierFulfillmentCourierResolvers<ContextType>;
  GoogleProtobufAny?: GoogleProtobufAnyResolvers<ContextType>;
  TodoScalar?: GraphQLScalarType;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
  IoRestorecommerceAttributeAttributeObj?: IoRestorecommerceAttributeAttributeObjResolvers<ContextType>;
  IoRestorecommerceStatusStatus?: IoRestorecommerceStatusStatusResolvers<ContextType>;
  IoRestorecommerceStatusOperationStatus?: IoRestorecommerceStatusOperationStatusResolvers<ContextType>;
  IoRestorecommerceResourcebaseSortSortOrder?: IoRestorecommerceResourcebaseSortSortOrderResolvers;
  IoRestorecommerceResourcebaseFilterOperation?: IoRestorecommerceResourcebaseFilterOperationResolvers;
  IoRestorecommerceResourcebaseFilterValueType?: IoRestorecommerceResourcebaseFilterValueTypeResolvers;
  IoRestorecommerceFilterFilterOperation?: IoRestorecommerceFilterFilterOperationResolvers;
  IoRestorecommerceFilterFilterValueType?: IoRestorecommerceFilterFilterValueTypeResolvers;
  IoRestorecommerceFilterFilterOpOperator?: IoRestorecommerceFilterFilterOpOperatorResolvers;
  IoRestorecommerceResourcebaseFilterOpOperator?: IoRestorecommerceResourcebaseFilterOpOperatorResolvers;
  Upload?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  FulfillmentMutation?: FulfillmentMutationResolvers<ContextType>;
  FulfillmentFulfillmentMutation?: FulfillmentFulfillmentMutationResolvers<ContextType>;
  ProtoIoRestorecommerceFulfillmentFulfillmentResponseList?: ProtoIoRestorecommerceFulfillmentFulfillmentResponseListResolvers<ContextType>;
  IoRestorecommerceFulfillmentFulfillmentResponseList?: IoRestorecommerceFulfillmentFulfillmentResponseListResolvers<ContextType>;
  IoRestorecommerceFulfillmentFulfillmentResponse?: IoRestorecommerceFulfillmentFulfillmentResponseResolvers<ContextType>;
  IoRestorecommerceFulfillmentFulfillment?: IoRestorecommerceFulfillmentFulfillmentResolvers<ContextType>;
  IoRestorecommerceFulfillmentOrder?: IoRestorecommerceFulfillmentOrderResolvers<ContextType>;
  IoRestorecommerceFulfillmentParcel?: IoRestorecommerceFulfillmentParcelResolvers<ContextType>;
  IoRestorecommerceFulfillmentParcelItem?: IoRestorecommerceFulfillmentParcelItemResolvers<ContextType>;
  IoRestorecommerceFulfillmentAddress?: IoRestorecommerceFulfillmentAddressResolvers<ContextType>;
  IoRestorecommerceAddressAddress?: IoRestorecommerceAddressAddressResolvers<ContextType>;
  IoRestorecommerceAddressAddressGeoPoint?: IoRestorecommerceAddressAddressGeoPointResolvers<ContextType>;
  IoRestorecommerceAddressAddressAddition?: IoRestorecommerceAddressAddressAdditionResolvers<ContextType>;
  IoRestorecommerceFulfillmentPackstation?: IoRestorecommerceFulfillmentPackstationResolvers<ContextType>;
  IoRestorecommerceFulfillmentBranch?: IoRestorecommerceFulfillmentBranchResolvers<ContextType>;
  IoRestorecommerceCountryCountry?: IoRestorecommerceCountryCountryResolvers<ContextType>;
  IoRestorecommerceFulfillmentContact?: IoRestorecommerceFulfillmentContactResolvers<ContextType>;
  IoRestorecommerceFulfillmentLabel?: IoRestorecommerceFulfillmentLabelResolvers<ContextType>;
  IoRestorecommerceFulfillmentState?: IoRestorecommerceFulfillmentStateResolvers;
  ProtoIoRestorecommerceFulfillmentTrackingResultList?: ProtoIoRestorecommerceFulfillmentTrackingResultListResolvers<ContextType>;
  IoRestorecommerceFulfillmentTrackingResultList?: IoRestorecommerceFulfillmentTrackingResultListResolvers<ContextType>;
  IoRestorecommerceFulfillmentTrackingResult?: IoRestorecommerceFulfillmentTrackingResultResolvers<ContextType>;
  IoRestorecommerceFulfillmentTracking?: IoRestorecommerceFulfillmentTrackingResolvers<ContextType>;
  IoRestorecommerceFulfillmentEvent?: IoRestorecommerceFulfillmentEventResolvers<ContextType>;
  ProtoIoRestorecommerceResourcebaseDeleteResponse?: ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  IoRestorecommerceResourcebaseDeleteResponse?: IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  FulfillmentFulfillmentCourierMutation?: FulfillmentFulfillmentCourierMutationResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = FulfillmentContext> = Resolvers<ContextType>;
