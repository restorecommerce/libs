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
  state?: Maybe<IoRestorecommerceOrderState>;
  customerReference?: Maybe<Scalars['String']>;
  items?: Maybe<Array<IoRestorecommerceOrderItem>>;
  totalPrice?: Maybe<Scalars['Float']>;
  shippingAddress?: Maybe<IoRestorecommerceAddressAddress>;
  billingAddress?: Maybe<IoRestorecommerceAddressAddress>;
  billingEmail?: Maybe<Scalars['String']>;
  contactPerson?: Maybe<IoRestorecommerceAddressContactPerson>;
  notificationEmail?: Maybe<Scalars['String']>;
  fulfillmentIds?: Maybe<Array<Scalars['String']>>;
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

export enum IoRestorecommerceOrderState {
  Undefined = 0,
  Invalid = 1,
  Failed = 2,
  Cancelled = 3,
  Created = 4,
  Submitted = 5,
  Shipping = 6,
  Done = 7
}

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
  quantityPrice?: Maybe<Scalars['Float']>;
  itemType?: Maybe<Scalars['String']>;
  taricCode?: Maybe<Scalars['Float']>;
  stockKeepingUnit?: Maybe<Scalars['String']>;
  weightInKg?: Maybe<Scalars['Float']>;
  lengthInCm?: Maybe<Scalars['Int']>;
  widthInCm?: Maybe<Scalars['Int']>;
  heightInCm?: Maybe<Scalars['Int']>;
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

export type IoRestorecommerceAddressContactPerson = {
  __typename?: 'IoRestorecommerceAddressContactPerson';
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
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
  Submit?: Maybe<ProtoIoRestorecommerceOrderOrderListResponse>;
  Cancel?: Maybe<ProtoIoRestorecommerceOrderOrderListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  TriggerFulfillment?: Maybe<ProtoIoRestorecommerceStatusStatus>;
};


export type OrderingOrderMutationMutateArgs = {
  input: IIoRestorecommerceOrderOrderList;
};


export type OrderingOrderMutationSubmitArgs = {
  input: IIoRestorecommerceOrderOrderList;
};


export type OrderingOrderMutationCancelArgs = {
  input: IIoRestorecommerceOrderCancelRequestList;
};


export type OrderingOrderMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type OrderingOrderMutationTriggerFulfillmentArgs = {
  input: IIoRestorecommerceOrderTriggerFulfillmentRequestList;
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
  state?: InputMaybe<IoRestorecommerceOrderState>;
  customerReference?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<Array<IIoRestorecommerceOrderItem>>;
  totalPrice?: InputMaybe<Scalars['Float']>;
  shippingAddress?: InputMaybe<IIoRestorecommerceAddressAddress>;
  billingAddress?: InputMaybe<IIoRestorecommerceAddressAddress>;
  billingEmail?: InputMaybe<Scalars['String']>;
  contactPerson?: InputMaybe<IIoRestorecommerceAddressContactPerson>;
  notificationEmail?: InputMaybe<Scalars['String']>;
  fulfillmentIds?: InputMaybe<Array<Scalars['String']>>;
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
  quantityPrice?: InputMaybe<Scalars['Float']>;
  itemType?: InputMaybe<Scalars['String']>;
  taricCode?: InputMaybe<Scalars['Float']>;
  stockKeepingUnit?: InputMaybe<Scalars['String']>;
  weightInKg?: InputMaybe<Scalars['Float']>;
  lengthInCm?: InputMaybe<Scalars['Int']>;
  widthInCm?: InputMaybe<Scalars['Int']>;
  heightInCm?: InputMaybe<Scalars['Int']>;
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

export type IIoRestorecommerceAddressContactPerson = {
  name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export enum ModeType {
  Create = 'CREATE',
  Update = 'UPDATE',
  Upsert = 'UPSERT'
}

export type IIoRestorecommerceOrderCancelRequestList = {
  ids?: InputMaybe<Array<Scalars['String']>>;
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
  collection?: InputMaybe<Scalars['Boolean']>;
  ids?: InputMaybe<Array<Scalars['String']>>;
  view?: InputMaybe<Array<Scalars['String']>>;
  analyzer?: InputMaybe<Array<Scalars['String']>>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type ProtoIoRestorecommerceStatusStatus = {
  __typename?: 'ProtoIoRestorecommerceStatusStatus';
  details?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IIoRestorecommerceOrderTriggerFulfillmentRequestList = {
  items?: InputMaybe<Array<IIoRestorecommerceOrderTriggerFulfillmentRequest>>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceOrderTriggerFulfillmentRequest = {
  order?: InputMaybe<IIoRestorecommerceOrderOrder>;
  shippingDetails?: InputMaybe<IIoRestorecommerceOrderShippingDetails>;
  parcels?: InputMaybe<Array<IIoRestorecommerceFulfillmentParcel>>;
};

export type IIoRestorecommerceOrderShippingDetails = {
  exportType?: InputMaybe<Scalars['String']>;
  exportDescription?: InputMaybe<Scalars['String']>;
  invoiceNumber?: InputMaybe<Scalars['String']>;
  senderAddress?: InputMaybe<IIoRestorecommerceAddressAddress>;
  contactPerson?: InputMaybe<IIoRestorecommerceAddressContactPerson>;
};

export type IIoRestorecommerceFulfillmentParcel = {
  productId?: InputMaybe<Scalars['String']>;
  productVariantId?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<Array<IIoRestorecommerceFulfillmentItem>>;
  weightInKg?: InputMaybe<Scalars['Float']>;
  heightInCm?: InputMaybe<Scalars['Float']>;
  widthInCm?: InputMaybe<Scalars['Float']>;
  lengthInCm?: InputMaybe<Scalars['Float']>;
};

export type IIoRestorecommerceFulfillmentItem = {
  itemId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  taricCode?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
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
  IoRestorecommerceOrderState: IoRestorecommerceOrderState;
  IoRestorecommerceOrderItem: ResolverTypeWrapper<IoRestorecommerceOrderItem>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IoRestorecommerceAddressAddress: ResolverTypeWrapper<IoRestorecommerceAddressAddress>;
  IoRestorecommerceCountryCountry: ResolverTypeWrapper<IoRestorecommerceCountryCountry>;
  IoRestorecommerceAddressGeoPoint: ResolverTypeWrapper<IoRestorecommerceAddressGeoPoint>;
  IoRestorecommerceAddressAddressAddition: ResolverTypeWrapper<IoRestorecommerceAddressAddressAddition>;
  IoRestorecommerceAddressBusinessAddress: ResolverTypeWrapper<IoRestorecommerceAddressBusinessAddress>;
  IoRestorecommerceAddressResidentialAddress: ResolverTypeWrapper<IoRestorecommerceAddressResidentialAddress>;
  IoRestorecommerceAddressPackStation: ResolverTypeWrapper<IoRestorecommerceAddressPackStation>;
  IoRestorecommerceAddressContactPerson: ResolverTypeWrapper<IoRestorecommerceAddressContactPerson>;
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
  IIoRestorecommerceOrderItem: IIoRestorecommerceOrderItem;
  IIoRestorecommerceAddressAddress: IIoRestorecommerceAddressAddress;
  IIoRestorecommerceAddressGeoPoint: IIoRestorecommerceAddressGeoPoint;
  IIoRestorecommerceAddressAddressAddition: IIoRestorecommerceAddressAddressAddition;
  IIoRestorecommerceAddressBusinessAddress: IIoRestorecommerceAddressBusinessAddress;
  IIoRestorecommerceAddressResidentialAddress: IIoRestorecommerceAddressResidentialAddress;
  IIoRestorecommerceAddressPackStation: IIoRestorecommerceAddressPackStation;
  IIoRestorecommerceAddressContactPerson: IIoRestorecommerceAddressContactPerson;
  ModeType: ModeType;
  IIoRestorecommerceOrderCancelRequestList: IIoRestorecommerceOrderCancelRequestList;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  IoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<IoRestorecommerceResourcebaseDeleteResponse>;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  ProtoIoRestorecommerceStatusStatus: ResolverTypeWrapper<ProtoIoRestorecommerceStatusStatus>;
  IIoRestorecommerceOrderTriggerFulfillmentRequestList: IIoRestorecommerceOrderTriggerFulfillmentRequestList;
  IIoRestorecommerceOrderTriggerFulfillmentRequest: IIoRestorecommerceOrderTriggerFulfillmentRequest;
  IIoRestorecommerceOrderShippingDetails: IIoRestorecommerceOrderShippingDetails;
  IIoRestorecommerceFulfillmentParcel: IIoRestorecommerceFulfillmentParcel;
  IIoRestorecommerceFulfillmentItem: IIoRestorecommerceFulfillmentItem;
  Subscription: ResolverTypeWrapper<{}>;
  SubscriptionOutput: ResolverTypeWrapper<SubscriptionOutput>;
  SubscriptionAction: SubscriptionAction;
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
  IoRestorecommerceOrderItem: IoRestorecommerceOrderItem;
  Int: Scalars['Int'];
  IoRestorecommerceAddressAddress: IoRestorecommerceAddressAddress;
  IoRestorecommerceCountryCountry: IoRestorecommerceCountryCountry;
  IoRestorecommerceAddressGeoPoint: IoRestorecommerceAddressGeoPoint;
  IoRestorecommerceAddressAddressAddition: IoRestorecommerceAddressAddressAddition;
  IoRestorecommerceAddressBusinessAddress: IoRestorecommerceAddressBusinessAddress;
  IoRestorecommerceAddressResidentialAddress: IoRestorecommerceAddressResidentialAddress;
  IoRestorecommerceAddressPackStation: IoRestorecommerceAddressPackStation;
  IoRestorecommerceAddressContactPerson: IoRestorecommerceAddressContactPerson;
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
  IIoRestorecommerceOrderItem: IIoRestorecommerceOrderItem;
  IIoRestorecommerceAddressAddress: IIoRestorecommerceAddressAddress;
  IIoRestorecommerceAddressGeoPoint: IIoRestorecommerceAddressGeoPoint;
  IIoRestorecommerceAddressAddressAddition: IIoRestorecommerceAddressAddressAddition;
  IIoRestorecommerceAddressBusinessAddress: IIoRestorecommerceAddressBusinessAddress;
  IIoRestorecommerceAddressResidentialAddress: IIoRestorecommerceAddressResidentialAddress;
  IIoRestorecommerceAddressPackStation: IIoRestorecommerceAddressPackStation;
  IIoRestorecommerceAddressContactPerson: IIoRestorecommerceAddressContactPerson;
  IIoRestorecommerceOrderCancelRequestList: IIoRestorecommerceOrderCancelRequestList;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ProtoIoRestorecommerceResourcebaseDeleteResponse;
  IoRestorecommerceResourcebaseDeleteResponse: IoRestorecommerceResourcebaseDeleteResponse;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  ProtoIoRestorecommerceStatusStatus: ProtoIoRestorecommerceStatusStatus;
  IIoRestorecommerceOrderTriggerFulfillmentRequestList: IIoRestorecommerceOrderTriggerFulfillmentRequestList;
  IIoRestorecommerceOrderTriggerFulfillmentRequest: IIoRestorecommerceOrderTriggerFulfillmentRequest;
  IIoRestorecommerceOrderShippingDetails: IIoRestorecommerceOrderShippingDetails;
  IIoRestorecommerceFulfillmentParcel: IIoRestorecommerceFulfillmentParcel;
  IIoRestorecommerceFulfillmentItem: IIoRestorecommerceFulfillmentItem;
  Subscription: {};
  SubscriptionOutput: SubscriptionOutput;
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
  state?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrderState']>, ParentType, ContextType>;
  customerReference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceOrderItem']>>, ParentType, ContextType>;
  totalPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shippingAddress?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressAddress']>, ParentType, ContextType>;
  billingAddress?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressAddress']>, ParentType, ContextType>;
  billingEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactPerson?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressContactPerson']>, ParentType, ContextType>;
  notificationEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fulfillmentIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
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

export type IoRestorecommerceOrderStateResolvers = { Undefined: 0, Invalid: 1, Failed: 2, Cancelled: 3, Created: 4, Submitted: 5, Shipping: 6, Done: 7 };

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
  quantityPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  itemType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  taricCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stockKeepingUnit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weightInKg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lengthInCm?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  widthInCm?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  heightInCm?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
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
  geoCoordinates?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressGeoPoint']>, ParentType, ContextType>;
  altitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  buildingNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressAddition?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressAddressAddition']>, ParentType, ContextType>;
  businessAddress?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressBusinessAddress']>, ParentType, ContextType>;
  residentialAddress?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressResidentialAddress']>, ParentType, ContextType>;
  packStation?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressPackStation']>, ParentType, ContextType>;
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

export type IoRestorecommerceAddressGeoPointResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressGeoPoint'] = ResolversParentTypes['IoRestorecommerceAddressGeoPoint']> = ResolversObject<{
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressAddressAdditionResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressAddressAddition'] = ResolversParentTypes['IoRestorecommerceAddressAddressAddition']> = ResolversObject<{
  field1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  field2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressBusinessAddressResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressBusinessAddress'] = ResolversParentTypes['IoRestorecommerceAddressBusinessAddress']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressResidentialAddressResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressResidentialAddress'] = ResolversParentTypes['IoRestorecommerceAddressResidentialAddress']> = ResolversObject<{
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  givenName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  midName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  familyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressPackStationResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressPackStation'] = ResolversParentTypes['IoRestorecommerceAddressPackStation']> = ResolversObject<{
  provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stationNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressContactPersonResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressContactPerson'] = ResolversParentTypes['IoRestorecommerceAddressContactPerson']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type MutationResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  ordering?: Resolver<ResolversTypes['OrderingMutation'], ParentType, ContextType>;
}>;

export type OrderingMutationResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['OrderingMutation'] = ResolversParentTypes['OrderingMutation']> = ResolversObject<{
  order?: Resolver<ResolversTypes['OrderingOrderMutation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderingOrderMutationResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['OrderingOrderMutation'] = ResolversParentTypes['OrderingOrderMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOrderOrderListResponse']>, ParentType, ContextType, RequireFields<OrderingOrderMutationMutateArgs, 'input'>>;
  Submit?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOrderOrderListResponse']>, ParentType, ContextType, RequireFields<OrderingOrderMutationSubmitArgs, 'input'>>;
  Cancel?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOrderOrderListResponse']>, ParentType, ContextType, RequireFields<OrderingOrderMutationCancelArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<OrderingOrderMutationDeleteArgs, 'input'>>;
  TriggerFulfillment?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatus']>, ParentType, ContextType, RequireFields<OrderingOrderMutationTriggerFulfillmentArgs, 'input'>>;
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

export type ProtoIoRestorecommerceStatusStatusResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceStatusStatus'] = ResolversParentTypes['ProtoIoRestorecommerceStatusStatus']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  orderingOrders?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "orderingOrders", ParentType, ContextType, Partial<SubscriptionOrderingOrdersArgs>>;
}>;

export type SubscriptionOutputResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['SubscriptionOutput'] = ResolversParentTypes['SubscriptionOutput']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  IoRestorecommerceOrderState?: IoRestorecommerceOrderStateResolvers;
  IoRestorecommerceOrderItem?: IoRestorecommerceOrderItemResolvers<ContextType>;
  IoRestorecommerceAddressAddress?: IoRestorecommerceAddressAddressResolvers<ContextType>;
  IoRestorecommerceCountryCountry?: IoRestorecommerceCountryCountryResolvers<ContextType>;
  IoRestorecommerceAddressGeoPoint?: IoRestorecommerceAddressGeoPointResolvers<ContextType>;
  IoRestorecommerceAddressAddressAddition?: IoRestorecommerceAddressAddressAdditionResolvers<ContextType>;
  IoRestorecommerceAddressBusinessAddress?: IoRestorecommerceAddressBusinessAddressResolvers<ContextType>;
  IoRestorecommerceAddressResidentialAddress?: IoRestorecommerceAddressResidentialAddressResolvers<ContextType>;
  IoRestorecommerceAddressPackStation?: IoRestorecommerceAddressPackStationResolvers<ContextType>;
  IoRestorecommerceAddressContactPerson?: IoRestorecommerceAddressContactPersonResolvers<ContextType>;
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
  ProtoIoRestorecommerceStatusStatus?: ProtoIoRestorecommerceStatusStatusResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  SubscriptionOutput?: SubscriptionOutputResolvers<ContextType>;
}>;

