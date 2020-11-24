import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { OrderingContext } from '../interfaces';
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
  TodoScalar: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  ordering?: Maybe<OrderingMutation>;
};

export type OrderingMutation = {
  __typename?: 'OrderingMutation';
  Read?: Maybe<ProtoIoRestorecommerceOrderOrderList>;
  Create?: Maybe<ProtoIoRestorecommerceOrderOrderList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommerceOrderOrderList>;
  Upsert?: Maybe<ProtoIoRestorecommerceOrderOrderList>;
  TriggerFulfillment?: Maybe<ProtoIoRestorecommerceOrderFulfillmentResults>;
};


export type OrderingMutationReadArgs = {
  input: IReadRequest;
};


export type OrderingMutationCreateArgs = {
  input: IOrderList;
};


export type OrderingMutationDeleteArgs = {
  input: IDeleteRequest;
};


export type OrderingMutationUpdateArgs = {
  input: IOrderList;
};


export type OrderingMutationUpsertArgs = {
  input: IOrderList;
};


export type OrderingMutationTriggerFulfillmentArgs = {
  input: IOrderDataList;
};

export type ProtoIoRestorecommerceOrderOrderList = {
  __typename?: 'ProtoIoRestorecommerceOrderOrderList';
  status: StatusType;
  payload?: Maybe<OrderList>;
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

export type OrderList = {
  __typename?: 'OrderList';
  items: Array<Order>;
  totalCount: Scalars['Int'];
  subject: Subject;
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['String'];
  meta: Meta;
  name: Scalars['String'];
  description: Scalars['String'];
  status: Scalars['String'];
  items: Array<Items>;
  totalPrice: Scalars['Float'];
  shippingContactPointId: Scalars['String'];
  billingContactPointId: Scalars['String'];
  totalWeightInKg: Scalars['Float'];
};

export type Meta = {
  __typename?: 'Meta';
  created: Scalars['Float'];
  modified: Scalars['Float'];
  modifiedBy: Scalars['String'];
  owner: Array<Attribute>;
};

export type Attribute = {
  __typename?: 'Attribute';
  id: Scalars['String'];
  value: Scalars['String'];
};

export type Items = {
  __typename?: 'Items';
  quantityPrice: Scalars['Float'];
  item: Item;
};

export type Item = {
  __typename?: 'Item';
  productVariantBundleId: Scalars['String'];
  productName: Scalars['String'];
  productDescription: Scalars['String'];
  manufacturerName: Scalars['String'];
  manufacturerDescription: Scalars['String'];
  prototypeName: Scalars['String'];
  prototypeDescription: Scalars['String'];
  quantity: Scalars['Int'];
  vat: Scalars['Int'];
  price: Scalars['Float'];
  itemType: Scalars['String'];
  taricCode: Scalars['Float'];
  stockKeepingUnit: Scalars['String'];
  weightInKg: Scalars['Float'];
  lengthInCm: Scalars['Int'];
  widthInCm: Scalars['Int'];
  heightInCm: Scalars['Int'];
};

export type Subject = {
  __typename?: 'Subject';
  id: Scalars['String'];
  scope: Scalars['String'];
  unauthenticated: Scalars['Boolean'];
  token: Scalars['String'];
};

export type IReadRequest = {
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  sort: Array<ISort>;
  filter: IStruct;
  field: Array<IFieldFilter>;
  search: Array<Scalars['String']>;
  localesLimiter: Array<Scalars['String']>;
  customQueries: Array<Scalars['String']>;
  customArguments: IAny;
  subject: ISubject;
};

export type ISort = {
  field: Scalars['String'];
  order: Sort_SortOrder;
};

export enum Sort_SortOrder {
  Unsorted = 0,
  Ascending = 1,
  Descending = 2,
  Unrecognized = -1
}

export type IStruct = {
  fields: Scalars['MapScalar'];
};


export type IFieldFilter = {
  name: Scalars['String'];
  include: Scalars['Boolean'];
};

export type IAny = {
  typeUrl: Scalars['String'];
  value: Scalars['TodoScalar'];
};


export type ISubject = {
  id: Scalars['String'];
  scope: Scalars['String'];
  unauthenticated: Scalars['Boolean'];
  token: Scalars['String'];
};

export type IOrderList = {
  items: Array<IOrder>;
  totalCount: Scalars['Int'];
  subject: ISubject;
};

export type IOrder = {
  id: Scalars['String'];
  meta: IMeta;
  name: Scalars['String'];
  description: Scalars['String'];
  status: Scalars['String'];
  items: Array<IItems>;
  totalPrice: Scalars['Float'];
  shippingContactPointId: Scalars['String'];
  billingContactPointId: Scalars['String'];
  totalWeightInKg: Scalars['Float'];
};

export type IMeta = {
  created: Scalars['Float'];
  modified: Scalars['Float'];
  modifiedBy: Scalars['String'];
  owner: Array<IAttribute>;
};

export type IAttribute = {
  id: Scalars['String'];
  value: Scalars['String'];
};

export type IItems = {
  quantityPrice: Scalars['Float'];
  item: IItem;
};

export type IItem = {
  productVariantBundleId: Scalars['String'];
  productName: Scalars['String'];
  productDescription: Scalars['String'];
  manufacturerName: Scalars['String'];
  manufacturerDescription: Scalars['String'];
  prototypeName: Scalars['String'];
  prototypeDescription: Scalars['String'];
  quantity: Scalars['Int'];
  vat: Scalars['Int'];
  price: Scalars['Float'];
  itemType: Scalars['String'];
  taricCode: Scalars['Float'];
  stockKeepingUnit: Scalars['String'];
  weightInKg: Scalars['Float'];
  lengthInCm: Scalars['Int'];
  widthInCm: Scalars['Int'];
  heightInCm: Scalars['Int'];
};

export type ProtoGoogleProtobufEmpty = {
  __typename?: 'ProtoGoogleProtobufEmpty';
  status: StatusType;
};

export type IDeleteRequest = {
  collection: Scalars['Boolean'];
  ids: Array<Scalars['String']>;
  subject: ISubject;
};

export type ProtoIoRestorecommerceOrderFulfillmentResults = {
  __typename?: 'ProtoIoRestorecommerceOrderFulfillmentResults';
  status: StatusType;
  payload?: Maybe<FulfillmentResults>;
};

export type FulfillmentResults = {
  __typename?: 'FulfillmentResults';
  fulfillmentResults: Array<ResponseDetailsList>;
};

export type ResponseDetailsList = {
  __typename?: 'ResponseDetailsList';
  Status: OrderStatus;
  error: ErrorList;
};

export type OrderStatus = {
  __typename?: 'OrderStatus';
  OrderId: Scalars['String'];
  OrderStatus: Scalars['String'];
};

export type ErrorList = {
  __typename?: 'ErrorList';
  code: Array<Scalars['String']>;
  message: Array<Scalars['String']>;
};

export type IOrderDataList = {
  orderData: Array<IOrderData>;
  meta: IMeta;
};

export type IOrderData = {
  orderId: Scalars['String'];
  shipments: Array<IShipments>;
};

export type IShipments = {
  totalWeightInKg: Scalars['Float'];
  individualWeightInKg: Scalars['Float'];
  amount: Scalars['Int'];
  exportType: Scalars['String'];
  exportDescription: Scalars['String'];
  customsTariffNumber: Scalars['String'];
  invoiceNumber: Scalars['String'];
  customsValue: Scalars['Float'];
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
  Mutation: ResolverTypeWrapper<{}>;
  OrderingMutation: ResolverTypeWrapper<OrderingMutation>;
  ProtoIoRestorecommerceOrderOrderList: ResolverTypeWrapper<ProtoIoRestorecommerceOrderOrderList>;
  StatusType: ResolverTypeWrapper<StatusType>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  OrderList: ResolverTypeWrapper<OrderList>;
  Order: ResolverTypeWrapper<Order>;
  Meta: ResolverTypeWrapper<Meta>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Attribute: ResolverTypeWrapper<Attribute>;
  Items: ResolverTypeWrapper<Items>;
  Item: ResolverTypeWrapper<Item>;
  Subject: ResolverTypeWrapper<Subject>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  IReadRequest: IReadRequest;
  ISort: ISort;
  Sort_SortOrder: Sort_SortOrder;
  IStruct: IStruct;
  MapScalar: ResolverTypeWrapper<Scalars['MapScalar']>;
  IFieldFilter: IFieldFilter;
  IAny: IAny;
  TodoScalar: ResolverTypeWrapper<Scalars['TodoScalar']>;
  ISubject: ISubject;
  IOrderList: IOrderList;
  IOrder: IOrder;
  IMeta: IMeta;
  IAttribute: IAttribute;
  IItems: IItems;
  IItem: IItem;
  ProtoGoogleProtobufEmpty: ResolverTypeWrapper<ProtoGoogleProtobufEmpty>;
  IDeleteRequest: IDeleteRequest;
  ProtoIoRestorecommerceOrderFulfillmentResults: ResolverTypeWrapper<ProtoIoRestorecommerceOrderFulfillmentResults>;
  FulfillmentResults: ResolverTypeWrapper<FulfillmentResults>;
  ResponseDetailsList: ResolverTypeWrapper<ResponseDetailsList>;
  OrderStatus: ResolverTypeWrapper<OrderStatus>;
  ErrorList: ResolverTypeWrapper<ErrorList>;
  IOrderDataList: IOrderDataList;
  IOrderData: IOrderData;
  IShipments: IShipments;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Mutation: {};
  OrderingMutation: OrderingMutation;
  ProtoIoRestorecommerceOrderOrderList: ProtoIoRestorecommerceOrderOrderList;
  StatusType: StatusType;
  String: Scalars['String'];
  Int: Scalars['Int'];
  OrderList: OrderList;
  Order: Order;
  Meta: Meta;
  Float: Scalars['Float'];
  Attribute: Attribute;
  Items: Items;
  Item: Item;
  Subject: Subject;
  Boolean: Scalars['Boolean'];
  IReadRequest: IReadRequest;
  ISort: ISort;
  IStruct: IStruct;
  MapScalar: Scalars['MapScalar'];
  IFieldFilter: IFieldFilter;
  IAny: IAny;
  TodoScalar: Scalars['TodoScalar'];
  ISubject: ISubject;
  IOrderList: IOrderList;
  IOrder: IOrder;
  IMeta: IMeta;
  IAttribute: IAttribute;
  IItems: IItems;
  IItem: IItem;
  ProtoGoogleProtobufEmpty: ProtoGoogleProtobufEmpty;
  IDeleteRequest: IDeleteRequest;
  ProtoIoRestorecommerceOrderFulfillmentResults: ProtoIoRestorecommerceOrderFulfillmentResults;
  FulfillmentResults: FulfillmentResults;
  ResponseDetailsList: ResponseDetailsList;
  OrderStatus: OrderStatus;
  ErrorList: ErrorList;
  IOrderDataList: IOrderDataList;
  IOrderData: IOrderData;
  IShipments: IShipments;
}>;

export type MutationResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  ordering?: Resolver<Maybe<ResolversTypes['OrderingMutation']>, ParentType, ContextType>;
}>;

export type OrderingMutationResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['OrderingMutation'] = ResolversParentTypes['OrderingMutation']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOrderOrderList']>, ParentType, ContextType, RequireFields<OrderingMutationReadArgs, 'input'>>;
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOrderOrderList']>, ParentType, ContextType, RequireFields<OrderingMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<OrderingMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOrderOrderList']>, ParentType, ContextType, RequireFields<OrderingMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOrderOrderList']>, ParentType, ContextType, RequireFields<OrderingMutationUpsertArgs, 'input'>>;
  TriggerFulfillment?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOrderFulfillmentResults']>, ParentType, ContextType, RequireFields<OrderingMutationTriggerFulfillmentArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceOrderOrderListResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOrderOrderList'] = ResolversParentTypes['ProtoIoRestorecommerceOrderOrderList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['OrderList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StatusTypeResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['StatusType'] = ResolversParentTypes['StatusType']> = ResolversObject<{
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderListResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['OrderList'] = ResolversParentTypes['OrderList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['Subject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['Meta'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes['Items']>, ParentType, ContextType>;
  totalPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  shippingContactPointId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  billingContactPointId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalWeightInKg?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MetaResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['Meta'] = ResolversParentTypes['Meta']> = ResolversObject<{
  created?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  modified?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  modifiedBy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<Array<ResolversTypes['Attribute']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AttributeResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['Attribute'] = ResolversParentTypes['Attribute']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemsResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['Items'] = ResolversParentTypes['Items']> = ResolversObject<{
  quantityPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = ResolversObject<{
  productVariantBundleId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  manufacturerName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  manufacturerDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prototypeName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prototypeDescription?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  vat?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  taricCode?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  stockKeepingUnit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  weightInKg?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lengthInCm?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  widthInCm?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  heightInCm?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubjectResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['Subject'] = ResolversParentTypes['Subject']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  scope?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unauthenticated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Sort_SortOrderResolvers = { UNSORTED: 'undefined', ASCENDING: 1, DESCENDING: 2, UNRECOGNIZED: -1 };

export interface MapScalarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['MapScalar'], any> {
  name: 'MapScalar';
}

export interface TodoScalarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TodoScalar'], any> {
  name: 'TodoScalar';
}

export type ProtoGoogleProtobufEmptyResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['ProtoGoogleProtobufEmpty'] = ResolversParentTypes['ProtoGoogleProtobufEmpty']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceOrderFulfillmentResultsResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOrderFulfillmentResults'] = ResolversParentTypes['ProtoIoRestorecommerceOrderFulfillmentResults']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['FulfillmentResults']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FulfillmentResultsResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['FulfillmentResults'] = ResolversParentTypes['FulfillmentResults']> = ResolversObject<{
  fulfillmentResults?: Resolver<Array<ResolversTypes['ResponseDetailsList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResponseDetailsListResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['ResponseDetailsList'] = ResolversParentTypes['ResponseDetailsList']> = ResolversObject<{
  Status?: Resolver<ResolversTypes['OrderStatus'], ParentType, ContextType>;
  error?: Resolver<ResolversTypes['ErrorList'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderStatusResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['OrderStatus'] = ResolversParentTypes['OrderStatus']> = ResolversObject<{
  OrderId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  OrderStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ErrorListResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['ErrorList'] = ResolversParentTypes['ErrorList']> = ResolversObject<{
  code?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = OrderingContext> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>;
  OrderingMutation?: OrderingMutationResolvers<ContextType>;
  ProtoIoRestorecommerceOrderOrderList?: ProtoIoRestorecommerceOrderOrderListResolvers<ContextType>;
  StatusType?: StatusTypeResolvers<ContextType>;
  OrderList?: OrderListResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  Meta?: MetaResolvers<ContextType>;
  Attribute?: AttributeResolvers<ContextType>;
  Items?: ItemsResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  Subject?: SubjectResolvers<ContextType>;
  Sort_SortOrder?: Sort_SortOrderResolvers;
  MapScalar?: GraphQLScalarType;
  TodoScalar?: GraphQLScalarType;
  ProtoGoogleProtobufEmpty?: ProtoGoogleProtobufEmptyResolvers<ContextType>;
  ProtoIoRestorecommerceOrderFulfillmentResults?: ProtoIoRestorecommerceOrderFulfillmentResultsResolvers<ContextType>;
  FulfillmentResults?: FulfillmentResultsResolvers<ContextType>;
  ResponseDetailsList?: ResponseDetailsListResolvers<ContextType>;
  OrderStatus?: OrderStatusResolvers<ContextType>;
  ErrorList?: ErrorListResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = OrderingContext> = Resolvers<ContextType>;
