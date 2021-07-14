import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { OrderingContext } from '../interfaces';
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
  operationStatus: StatusType;
  details?: Maybe<IoRestorecommerceOrderOrderListResponse>;
};

/** Objects with error returned for GraphQL operations */
export type StatusType = {
  __typename?: 'StatusType';
  /** Status code */
  code: Scalars['Int'];
  /** Status message description */
  message?: Maybe<Scalars['String']>;
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
  items?: Maybe<Array<IoRestorecommerceOrderItems>>;
  totalPrice?: Maybe<Scalars['Float']>;
  shippingContactPointId?: Maybe<Scalars['String']>;
  billingContactPointId?: Maybe<Scalars['String']>;
  totalWeightInKg?: Maybe<Scalars['Float']>;
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
  items?: Maybe<Array<IIoRestorecommerceOrderOrder>>;
  totalCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<ModeType>;
};

export type IIoRestorecommerceOrderOrder = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  items?: Maybe<Array<IIoRestorecommerceOrderItems>>;
  totalPrice?: Maybe<Scalars['Float']>;
  shippingContactPointId?: Maybe<Scalars['String']>;
  billingContactPointId?: Maybe<Scalars['String']>;
  totalWeightInKg?: Maybe<Scalars['Float']>;
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

export type IIoRestorecommerceOrderItems = {
  quantityPrice?: Maybe<Scalars['Float']>;
  item?: Maybe<IIoRestorecommerceOrderItem>;
};

export type IIoRestorecommerceOrderItem = {
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

export enum ModeType {
  Create = 'CREATE',
  Update = 'UPDATE',
  Upsert = 'UPSERT'
}

export type ProtoIoRestorecommerceResourcebaseDeleteResponse = {
  __typename?: 'ProtoIoRestorecommerceResourcebaseDeleteResponse';
  operationStatus: StatusType;
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

export type ProtoIoRestorecommerceOrderFulfillmentResults = {
  __typename?: 'ProtoIoRestorecommerceOrderFulfillmentResults';
  operationStatus: StatusType;
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
  orderData?: Maybe<Array<IIoRestorecommerceOrderOrderData>>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
};

export type IIoRestorecommerceOrderOrderData = {
  orderId?: Maybe<Scalars['String']>;
  shipments?: Maybe<Array<IIoRestorecommerceOrderShipments>>;
};

export type IIoRestorecommerceOrderShipments = {
  totalWeightInKg?: Maybe<Scalars['Float']>;
  individualWeightInKg?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Int']>;
  exportType?: Maybe<Scalars['String']>;
  exportDescription?: Maybe<Scalars['String']>;
  customsTariffNumber?: Maybe<Scalars['String']>;
  invoiceNumber?: Maybe<Scalars['String']>;
  customsValue?: Maybe<Scalars['Float']>;
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
  OrderingQuery: ResolverTypeWrapper<OrderingQuery>;
  OrderingOrderQuery: ResolverTypeWrapper<OrderingOrderQuery>;
  ProtoIoRestorecommerceOrderOrderListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceOrderOrderListResponse>;
  StatusType: ResolverTypeWrapper<StatusType>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  IoRestorecommerceOrderOrderListResponse: ResolverTypeWrapper<IoRestorecommerceOrderOrderListResponse>;
  IoRestorecommerceOrderOrderResponse: ResolverTypeWrapper<IoRestorecommerceOrderOrderResponse>;
  IoRestorecommerceOrderOrder: ResolverTypeWrapper<IoRestorecommerceOrderOrder>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  IoRestorecommerceOrderItems: ResolverTypeWrapper<IoRestorecommerceOrderItems>;
  IoRestorecommerceOrderItem: ResolverTypeWrapper<IoRestorecommerceOrderItem>;
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
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  Mutation: ResolverTypeWrapper<{}>;
  OrderingMutation: ResolverTypeWrapper<OrderingMutation>;
  OrderingOrderMutation: ResolverTypeWrapper<OrderingOrderMutation>;
  IIoRestorecommerceOrderOrderList: IIoRestorecommerceOrderOrderList;
  IIoRestorecommerceOrderOrder: IIoRestorecommerceOrderOrder;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
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
  StatusType: StatusType;
  Int: Scalars['Int'];
  String: Scalars['String'];
  IoRestorecommerceOrderOrderListResponse: IoRestorecommerceOrderOrderListResponse;
  IoRestorecommerceOrderOrderResponse: IoRestorecommerceOrderOrderResponse;
  IoRestorecommerceOrderOrder: IoRestorecommerceOrderOrder;
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  Float: Scalars['Float'];
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  IoRestorecommerceOrderItems: IoRestorecommerceOrderItems;
  IoRestorecommerceOrderItem: IoRestorecommerceOrderItem;
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
  Upload: Scalars['Upload'];
  Mutation: {};
  OrderingMutation: OrderingMutation;
  OrderingOrderMutation: OrderingOrderMutation;
  IIoRestorecommerceOrderOrderList: IIoRestorecommerceOrderOrderList;
  IIoRestorecommerceOrderOrder: IIoRestorecommerceOrderOrder;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
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
  operationStatus?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrderOrderListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StatusTypeResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['StatusType'] = ResolversParentTypes['StatusType']> = ResolversObject<{
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceOrderItems']>>, ParentType, ContextType>;
  totalPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shippingContactPointId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  billingContactPointId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalWeightInKg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceMetaMetaResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceMetaMeta'] = ResolversParentTypes['IoRestorecommerceMetaMeta']> = ResolversObject<{
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modified?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modifiedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
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
  operationStatus?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  status?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceStatusStatus']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceOrderFulfillmentResultsResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOrderFulfillmentResults'] = ResolversParentTypes['ProtoIoRestorecommerceOrderFulfillmentResults']> = ResolversObject<{
  operationStatus?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
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
  StatusType?: StatusTypeResolvers<ContextType>;
  IoRestorecommerceOrderOrderListResponse?: IoRestorecommerceOrderOrderListResponseResolvers<ContextType>;
  IoRestorecommerceOrderOrderResponse?: IoRestorecommerceOrderOrderResponseResolvers<ContextType>;
  IoRestorecommerceOrderOrder?: IoRestorecommerceOrderOrderResolvers<ContextType>;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
  IoRestorecommerceOrderItems?: IoRestorecommerceOrderItemsResolvers<ContextType>;
  IoRestorecommerceOrderItem?: IoRestorecommerceOrderItemResolvers<ContextType>;
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


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = OrderingContext> = Resolvers<ContextType>;
