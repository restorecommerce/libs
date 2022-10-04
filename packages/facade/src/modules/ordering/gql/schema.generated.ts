import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { OrderingContext } from '../interfaces';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
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
  ordering: OrderingQuery;
};

export type OrderingQuery = {
  __typename?: 'OrderingQuery';
  order: OrderingOrderQuery;
};

export type OrderingOrderQuery = {
  __typename?: 'OrderingOrderQuery';
  Read?: Maybe<ProtoIoRestorecommerceOrderOrderListResponse>;
};


export type OrderingOrderQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceOrderOrderListResponse = {
  __typename?: 'ProtoIoRestorecommerceOrderOrderListResponse';
  details?: Maybe<IoRestorecommerceOrderOrderListResponse>;
};

export type IoRestorecommerceOrderOrderListResponse = {
  __typename?: 'IoRestorecommerceOrderOrderListResponse';
  items?: Maybe<Array<IoRestorecommerceOrderOrderResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceOrderOrderResponse = {
  __typename?: 'IoRestorecommerceOrderOrderResponse';
  payload?: Maybe<IoRestorecommerceOrderOrder>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceOrderOrder = {
  __typename?: 'IoRestorecommerceOrderOrder';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  customerReference?: Maybe<Scalars['String']>;
  items?: Maybe<Array<IoRestorecommerceOrderItems>>;
  totalPrice?: Maybe<Scalars['Float']>;
  shippingContactPointId?: Maybe<Scalars['String']>;
  shippingContactPoint?: Maybe<IoRestorecommerceContactPointContactPoint>;
  billingContactPointId?: Maybe<Scalars['String']>;
  billingContactPoint?: Maybe<IoRestorecommerceContactPointContactPoint>;
  totalWeightInKg?: Maybe<Scalars['Float']>;
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

export type IoRestorecommerceOrderItems = {
  __typename?: 'IoRestorecommerceOrderItems';
  quantityPrice?: Maybe<Scalars['Float']>;
  item?: Maybe<IoRestorecommerceOrderItem>;
};

export type IoRestorecommerceOrderItem = {
  __typename?: 'IoRestorecommerceOrderItem';
  productVariantBundleId?: Maybe<Scalars['String']>;
  productName?: Maybe<Scalars['String']>;
  productDescription?: Maybe<Scalars['String']>;
  manufacturerName?: Maybe<Scalars['String']>;
  manufacturerDescription?: Maybe<Scalars['String']>;
  prototypeName?: Maybe<Scalars['String']>;
  prototypeDescription?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  vat?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  itemType?: Maybe<Scalars['String']>;
  taricCode?: Maybe<Scalars['Float']>;
  stockKeepingUnit?: Maybe<Scalars['String']>;
  weightInKg?: Maybe<Scalars['Float']>;
  lengthInCm?: Maybe<Scalars['Int']>;
  widthInCm?: Maybe<Scalars['Int']>;
  heightInCm?: Maybe<Scalars['Int']>;
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
  geoCoordinates?: Maybe<IoRestorecommerceAddressAddressGeoPoint>;
  altitude?: Maybe<Scalars['Float']>;
  buildingNumber?: Maybe<Scalars['String']>;
  addressAddition?: Maybe<IoRestorecommerceAddressAddressAddition>;
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

export type IoRestorecommerceContactPointTypeContactPointType = {
  __typename?: 'IoRestorecommerceContactPointTypeContactPointType';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  type?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceTimezoneTimezone = {
  __typename?: 'IoRestorecommerceTimezoneTimezone';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  description?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceLocaleLocale = {
  __typename?: 'IoRestorecommerceLocaleLocale';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  value?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
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

export type Mutation = {
  __typename?: 'Mutation';
  ordering: OrderingMutation;
};

export type OrderingMutation = {
  __typename?: 'OrderingMutation';
  order: OrderingOrderMutation;
};

export type OrderingOrderMutation = {
  __typename?: 'OrderingOrderMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceOrderOrderListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  TriggerFulfillment?: Maybe<ProtoIoRestorecommerceOrderFulfillmentResults>;
};


export type OrderingOrderMutationMutateArgs = {
  input: IIoRestorecommerceOrderOrderList;
};


export type OrderingOrderMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type OrderingOrderMutationTriggerFulfillmentArgs = {
  input: IIoRestorecommerceOrderOrderDataList;
};

export type IIoRestorecommerceOrderOrderList = {
  items?: InputMaybe<Array<IIoRestorecommerceOrderOrder>>;
  totalCount?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceOrderOrder = {
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  customerReference?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<Array<IIoRestorecommerceOrderItems>>;
  totalPrice?: InputMaybe<Scalars['Float']>;
  shippingContactPointId?: InputMaybe<Scalars['String']>;
  billingContactPointId?: InputMaybe<Scalars['String']>;
  totalWeightInKg?: InputMaybe<Scalars['Float']>;
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

export type IIoRestorecommerceOrderItems = {
  quantityPrice?: InputMaybe<Scalars['Float']>;
  item?: InputMaybe<IIoRestorecommerceOrderItem>;
};

export type IIoRestorecommerceOrderItem = {
  productVariantBundleId?: InputMaybe<Scalars['String']>;
  productName?: InputMaybe<Scalars['String']>;
  productDescription?: InputMaybe<Scalars['String']>;
  manufacturerName?: InputMaybe<Scalars['String']>;
  manufacturerDescription?: InputMaybe<Scalars['String']>;
  prototypeName?: InputMaybe<Scalars['String']>;
  prototypeDescription?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  vat?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Float']>;
  itemType?: InputMaybe<Scalars['String']>;
  taricCode?: InputMaybe<Scalars['Float']>;
  stockKeepingUnit?: InputMaybe<Scalars['String']>;
  weightInKg?: InputMaybe<Scalars['Float']>;
  lengthInCm?: InputMaybe<Scalars['Int']>;
  widthInCm?: InputMaybe<Scalars['Int']>;
  heightInCm?: InputMaybe<Scalars['Int']>;
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

export type ProtoIoRestorecommerceOrderFulfillmentResults = {
  __typename?: 'ProtoIoRestorecommerceOrderFulfillmentResults';
  details?: Maybe<IoRestorecommerceOrderFulfillmentResults>;
};

export type IoRestorecommerceOrderFulfillmentResults = {
  __typename?: 'IoRestorecommerceOrderFulfillmentResults';
  fulfillmentResults?: Maybe<Array<IoRestorecommerceOrderResponseDetailsList>>;
};

export type IoRestorecommerceOrderResponseDetailsList = {
  __typename?: 'IoRestorecommerceOrderResponseDetailsList';
  Status?: Maybe<IoRestorecommerceOrderOrderStatus>;
  error?: Maybe<IoRestorecommerceOrderErrorList>;
};

export type IoRestorecommerceOrderOrderStatus = {
  __typename?: 'IoRestorecommerceOrderOrderStatus';
  OrderId?: Maybe<Scalars['String']>;
  OrderStatus?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceOrderErrorList = {
  __typename?: 'IoRestorecommerceOrderErrorList';
  code?: Maybe<Array<Scalars['String']>>;
  message?: Maybe<Array<Scalars['String']>>;
};

export type IIoRestorecommerceOrderOrderDataList = {
  orderData?: InputMaybe<Array<IIoRestorecommerceOrderOrderData>>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
};

export type IIoRestorecommerceOrderOrderData = {
  orderId?: InputMaybe<Scalars['String']>;
  shipments?: InputMaybe<Array<IIoRestorecommerceOrderShipments>>;
};

export type IIoRestorecommerceOrderShipments = {
  totalWeightInKg?: InputMaybe<Scalars['Float']>;
  individualWeightInKg?: InputMaybe<Scalars['Float']>;
  amount?: InputMaybe<Scalars['Int']>;
  exportType?: InputMaybe<Scalars['String']>;
  exportDescription?: InputMaybe<Scalars['String']>;
  customsTariffNumber?: InputMaybe<Scalars['String']>;
  invoiceNumber?: InputMaybe<Scalars['String']>;
  customsValue?: InputMaybe<Scalars['Float']>;
};

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
  OrderingQuery: ResolverTypeWrapper<OrderingQuery>;
  OrderingOrderQuery: ResolverTypeWrapper<OrderingOrderQuery>;
  ProtoIoRestorecommerceOrderOrderListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceOrderOrderListResponse>;
  IoRestorecommerceOrderOrderListResponse: ResolverTypeWrapper<IoRestorecommerceOrderOrderListResponse>;
  IoRestorecommerceOrderOrderResponse: ResolverTypeWrapper<IoRestorecommerceOrderOrderResponse>;
  IoRestorecommerceOrderOrder: ResolverTypeWrapper<IoRestorecommerceOrderOrder>;
  String: ResolverTypeWrapper<Scalars['String']>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  IoRestorecommerceAttributeAttributeObj: ResolverTypeWrapper<IoRestorecommerceAttributeAttributeObj>;
  IoRestorecommerceOrderItems: ResolverTypeWrapper<IoRestorecommerceOrderItems>;
  IoRestorecommerceOrderItem: ResolverTypeWrapper<IoRestorecommerceOrderItem>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IoRestorecommerceContactPointContactPoint: ResolverTypeWrapper<IoRestorecommerceContactPointContactPoint>;
  IoRestorecommerceAddressAddress: ResolverTypeWrapper<IoRestorecommerceAddressAddress>;
  IoRestorecommerceCountryCountry: ResolverTypeWrapper<IoRestorecommerceCountryCountry>;
  IoRestorecommerceAddressAddressGeoPoint: ResolverTypeWrapper<IoRestorecommerceAddressAddressGeoPoint>;
  IoRestorecommerceAddressAddressAddition: ResolverTypeWrapper<IoRestorecommerceAddressAddressAddition>;
  IoRestorecommerceContactPointTypeContactPointType: ResolverTypeWrapper<IoRestorecommerceContactPointTypeContactPointType>;
  IoRestorecommerceTimezoneTimezone: ResolverTypeWrapper<IoRestorecommerceTimezoneTimezone>;
  IoRestorecommerceLocaleLocale: ResolverTypeWrapper<IoRestorecommerceLocaleLocale>;
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  IGoogleProtobufAny: IGoogleProtobufAny;
  GoogleProtobufAnyValue: ResolverTypeWrapper<Scalars['GoogleProtobufAnyValue']>;
  IIoRestorecommerceResourcebaseSearch: IIoRestorecommerceResourcebaseSearch;
  Mutation: ResolverTypeWrapper<{}>;
  OrderingMutation: ResolverTypeWrapper<OrderingMutation>;
  OrderingOrderMutation: ResolverTypeWrapper<OrderingOrderMutation>;
  IIoRestorecommerceOrderOrderList: IIoRestorecommerceOrderOrderList;
  IIoRestorecommerceOrderOrder: IIoRestorecommerceOrderOrder;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAttributeAttributeObj: IIoRestorecommerceAttributeAttributeObj;
  IIoRestorecommerceOrderItems: IIoRestorecommerceOrderItems;
  IIoRestorecommerceOrderItem: IIoRestorecommerceOrderItem;
  ModeType: ModeType;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  IoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<IoRestorecommerceResourcebaseDeleteResponse>;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  ProtoIoRestorecommerceOrderFulfillmentResults: ResolverTypeWrapper<ProtoIoRestorecommerceOrderFulfillmentResults>;
  IoRestorecommerceOrderFulfillmentResults: ResolverTypeWrapper<IoRestorecommerceOrderFulfillmentResults>;
  IoRestorecommerceOrderResponseDetailsList: ResolverTypeWrapper<IoRestorecommerceOrderResponseDetailsList>;
  IoRestorecommerceOrderOrderStatus: ResolverTypeWrapper<IoRestorecommerceOrderOrderStatus>;
  IoRestorecommerceOrderErrorList: ResolverTypeWrapper<IoRestorecommerceOrderErrorList>;
  IIoRestorecommerceOrderOrderDataList: IIoRestorecommerceOrderOrderDataList;
  IIoRestorecommerceOrderOrderData: IIoRestorecommerceOrderOrderData;
  IIoRestorecommerceOrderShipments: IIoRestorecommerceOrderShipments;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  OrderingQuery: OrderingQuery;
  OrderingOrderQuery: OrderingOrderQuery;
  ProtoIoRestorecommerceOrderOrderListResponse: ProtoIoRestorecommerceOrderOrderListResponse;
  IoRestorecommerceOrderOrderListResponse: IoRestorecommerceOrderOrderListResponse;
  IoRestorecommerceOrderOrderResponse: IoRestorecommerceOrderOrderResponse;
  IoRestorecommerceOrderOrder: IoRestorecommerceOrderOrder;
  String: Scalars['String'];
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  Float: Scalars['Float'];
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  IoRestorecommerceAttributeAttributeObj: IoRestorecommerceAttributeAttributeObj;
  IoRestorecommerceOrderItems: IoRestorecommerceOrderItems;
  IoRestorecommerceOrderItem: IoRestorecommerceOrderItem;
  Int: Scalars['Int'];
  IoRestorecommerceContactPointContactPoint: IoRestorecommerceContactPointContactPoint;
  IoRestorecommerceAddressAddress: IoRestorecommerceAddressAddress;
  IoRestorecommerceCountryCountry: IoRestorecommerceCountryCountry;
  IoRestorecommerceAddressAddressGeoPoint: IoRestorecommerceAddressAddressGeoPoint;
  IoRestorecommerceAddressAddressAddition: IoRestorecommerceAddressAddressAddition;
  IoRestorecommerceContactPointTypeContactPointType: IoRestorecommerceContactPointTypeContactPointType;
  IoRestorecommerceTimezoneTimezone: IoRestorecommerceTimezoneTimezone;
  IoRestorecommerceLocaleLocale: IoRestorecommerceLocaleLocale;
  IoRestorecommerceStatusStatus: IoRestorecommerceStatusStatus;
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
  Mutation: {};
  OrderingMutation: OrderingMutation;
  OrderingOrderMutation: OrderingOrderMutation;
  IIoRestorecommerceOrderOrderList: IIoRestorecommerceOrderOrderList;
  IIoRestorecommerceOrderOrder: IIoRestorecommerceOrderOrder;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAttributeAttributeObj: IIoRestorecommerceAttributeAttributeObj;
  IIoRestorecommerceOrderItems: IIoRestorecommerceOrderItems;
  IIoRestorecommerceOrderItem: IIoRestorecommerceOrderItem;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ProtoIoRestorecommerceResourcebaseDeleteResponse;
  IoRestorecommerceResourcebaseDeleteResponse: IoRestorecommerceResourcebaseDeleteResponse;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  ProtoIoRestorecommerceOrderFulfillmentResults: ProtoIoRestorecommerceOrderFulfillmentResults;
  IoRestorecommerceOrderFulfillmentResults: IoRestorecommerceOrderFulfillmentResults;
  IoRestorecommerceOrderResponseDetailsList: IoRestorecommerceOrderResponseDetailsList;
  IoRestorecommerceOrderOrderStatus: IoRestorecommerceOrderOrderStatus;
  IoRestorecommerceOrderErrorList: IoRestorecommerceOrderErrorList;
  IIoRestorecommerceOrderOrderDataList: IIoRestorecommerceOrderOrderDataList;
  IIoRestorecommerceOrderOrderData: IIoRestorecommerceOrderOrderData;
  IIoRestorecommerceOrderShipments: IIoRestorecommerceOrderShipments;
}>;

export type QueryResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  ordering?: Resolver<ResolversTypes['OrderingQuery'], ParentType, ContextType>;
}>;

export type OrderingQueryResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['OrderingQuery'] = ResolversParentTypes['OrderingQuery']> = ResolversObject<{
  order?: Resolver<ResolversTypes['OrderingOrderQuery'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderingOrderQueryResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['OrderingOrderQuery'] = ResolversParentTypes['OrderingOrderQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOrderOrderListResponse']>, ParentType, ContextType, RequireFields<OrderingOrderQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceOrderOrderListResponseResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOrderOrderListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceOrderOrderListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrderOrderListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOrderOrderListResponseResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceOrderOrderListResponse'] = ResolversParentTypes['IoRestorecommerceOrderOrderListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceOrderOrderResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOrderOrderResponseResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceOrderOrderResponse'] = ResolversParentTypes['IoRestorecommerceOrderOrderResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrderOrder']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOrderOrderResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceOrderOrder'] = ResolversParentTypes['IoRestorecommerceOrderOrder']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerReference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceOrderItems']>>, ParentType, ContextType>;
  totalPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shippingContactPointId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shippingContactPoint?: Resolver<Maybe<ResolversTypes['IoRestorecommerceContactPointContactPoint']>, ParentType, ContextType>;
  billingContactPointId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  billingContactPoint?: Resolver<Maybe<ResolversTypes['IoRestorecommerceContactPointContactPoint']>, ParentType, ContextType>;
  totalWeightInKg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceMetaMetaResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceMetaMeta'] = ResolversParentTypes['IoRestorecommerceMetaMeta']> = ResolversObject<{
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modified?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modifiedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  acl?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttributeObj']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeObjResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttributeObj'] = ResolversParentTypes['IoRestorecommerceAttributeAttributeObj']> = ResolversObject<{
  attribute?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOrderItemsResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceOrderItems'] = ResolversParentTypes['IoRestorecommerceOrderItems']> = ResolversObject<{
  quantityPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrderItem']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOrderItemResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceOrderItem'] = ResolversParentTypes['IoRestorecommerceOrderItem']> = ResolversObject<{
  productVariantBundleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturerName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturerDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prototypeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prototypeDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  vat?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  itemType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  taricCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stockKeepingUnit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weightInKg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lengthInCm?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  widthInCm?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  heightInCm?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceContactPointContactPointResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceContactPointContactPoint'] = ResolversParentTypes['IoRestorecommerceContactPointContactPoint']> = ResolversObject<{
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

export type IoRestorecommerceAddressAddressResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressAddress'] = ResolversParentTypes['IoRestorecommerceAddressAddress']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCountryCountry']>, ParentType, ContextType>;
  locality?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  geoCoordinates?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressAddressGeoPoint']>, ParentType, ContextType>;
  altitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  buildingNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressAddition?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressAddressAddition']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCountryCountryResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceCountryCountry'] = ResolversParentTypes['IoRestorecommerceCountryCountry']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  geographicalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  economicAreas?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressAddressGeoPointResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressAddressGeoPoint'] = ResolversParentTypes['IoRestorecommerceAddressAddressGeoPoint']> = ResolversObject<{
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressAddressAdditionResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressAddressAddition'] = ResolversParentTypes['IoRestorecommerceAddressAddressAddition']> = ResolversObject<{
  field1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  field2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceContactPointTypeContactPointTypeResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceContactPointTypeContactPointType'] = ResolversParentTypes['IoRestorecommerceContactPointTypeContactPointType']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTimezoneTimezoneResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceTimezoneTimezone'] = ResolversParentTypes['IoRestorecommerceTimezoneTimezone']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceLocaleLocaleResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceLocaleLocale'] = ResolversParentTypes['IoRestorecommerceLocaleLocale']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusStatusResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusStatus'] = ResolversParentTypes['IoRestorecommerceStatusStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusOperationStatusResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusOperationStatus'] = ResolversParentTypes['IoRestorecommerceStatusOperationStatus']> = ResolversObject<{
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

export interface GoogleProtobufAnyValueScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GoogleProtobufAnyValue'], any> {
  name: 'GoogleProtobufAnyValue';
}

export type MutationResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  ordering?: Resolver<ResolversTypes['OrderingMutation'], ParentType, ContextType>;
}>;

export type OrderingMutationResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['OrderingMutation'] = ResolversParentTypes['OrderingMutation']> = ResolversObject<{
  order?: Resolver<ResolversTypes['OrderingOrderMutation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderingOrderMutationResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['OrderingOrderMutation'] = ResolversParentTypes['OrderingOrderMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOrderOrderListResponse']>, ParentType, ContextType, RequireFields<OrderingOrderMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<OrderingOrderMutationDeleteArgs, 'input'>>;
  TriggerFulfillment?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOrderFulfillmentResults']>, ParentType, ContextType, RequireFields<OrderingOrderMutationTriggerFulfillmentArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  status?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceStatusStatus']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceOrderFulfillmentResultsResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOrderFulfillmentResults'] = ResolversParentTypes['ProtoIoRestorecommerceOrderFulfillmentResults']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrderFulfillmentResults']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOrderFulfillmentResultsResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceOrderFulfillmentResults'] = ResolversParentTypes['IoRestorecommerceOrderFulfillmentResults']> = ResolversObject<{
  fulfillmentResults?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceOrderResponseDetailsList']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOrderResponseDetailsListResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceOrderResponseDetailsList'] = ResolversParentTypes['IoRestorecommerceOrderResponseDetailsList']> = ResolversObject<{
  Status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrderOrderStatus']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrderErrorList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOrderOrderStatusResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceOrderOrderStatus'] = ResolversParentTypes['IoRestorecommerceOrderOrderStatus']> = ResolversObject<{
  OrderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  OrderStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOrderErrorListResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceOrderErrorList'] = ResolversParentTypes['IoRestorecommerceOrderErrorList']> = ResolversObject<{
  code?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  message?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = OrderingContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  OrderingQuery?: OrderingQueryResolvers<ContextType>;
  OrderingOrderQuery?: OrderingOrderQueryResolvers<ContextType>;
  ProtoIoRestorecommerceOrderOrderListResponse?: ProtoIoRestorecommerceOrderOrderListResponseResolvers<ContextType>;
  IoRestorecommerceOrderOrderListResponse?: IoRestorecommerceOrderOrderListResponseResolvers<ContextType>;
  IoRestorecommerceOrderOrderResponse?: IoRestorecommerceOrderOrderResponseResolvers<ContextType>;
  IoRestorecommerceOrderOrder?: IoRestorecommerceOrderOrderResolvers<ContextType>;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
  IoRestorecommerceAttributeAttributeObj?: IoRestorecommerceAttributeAttributeObjResolvers<ContextType>;
  IoRestorecommerceOrderItems?: IoRestorecommerceOrderItemsResolvers<ContextType>;
  IoRestorecommerceOrderItem?: IoRestorecommerceOrderItemResolvers<ContextType>;
  IoRestorecommerceContactPointContactPoint?: IoRestorecommerceContactPointContactPointResolvers<ContextType>;
  IoRestorecommerceAddressAddress?: IoRestorecommerceAddressAddressResolvers<ContextType>;
  IoRestorecommerceCountryCountry?: IoRestorecommerceCountryCountryResolvers<ContextType>;
  IoRestorecommerceAddressAddressGeoPoint?: IoRestorecommerceAddressAddressGeoPointResolvers<ContextType>;
  IoRestorecommerceAddressAddressAddition?: IoRestorecommerceAddressAddressAdditionResolvers<ContextType>;
  IoRestorecommerceContactPointTypeContactPointType?: IoRestorecommerceContactPointTypeContactPointTypeResolvers<ContextType>;
  IoRestorecommerceTimezoneTimezone?: IoRestorecommerceTimezoneTimezoneResolvers<ContextType>;
  IoRestorecommerceLocaleLocale?: IoRestorecommerceLocaleLocaleResolvers<ContextType>;
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
  Mutation?: MutationResolvers<ContextType>;
  OrderingMutation?: OrderingMutationResolvers<ContextType>;
  OrderingOrderMutation?: OrderingOrderMutationResolvers<ContextType>;
  ProtoIoRestorecommerceResourcebaseDeleteResponse?: ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  IoRestorecommerceResourcebaseDeleteResponse?: IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  ProtoIoRestorecommerceOrderFulfillmentResults?: ProtoIoRestorecommerceOrderFulfillmentResultsResolvers<ContextType>;
  IoRestorecommerceOrderFulfillmentResults?: IoRestorecommerceOrderFulfillmentResultsResolvers<ContextType>;
  IoRestorecommerceOrderResponseDetailsList?: IoRestorecommerceOrderResponseDetailsListResolvers<ContextType>;
  IoRestorecommerceOrderOrderStatus?: IoRestorecommerceOrderOrderStatusResolvers<ContextType>;
  IoRestorecommerceOrderErrorList?: IoRestorecommerceOrderErrorListResolvers<ContextType>;
}>;

