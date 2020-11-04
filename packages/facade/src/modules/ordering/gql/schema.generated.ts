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
  EmptyScalar: any;
};

/** The root of all queries */
export type Query = {
  __typename?: 'Query';
  Read?: Maybe<OrderList>;
  Create?: Maybe<OrderList>;
  Delete?: Maybe<Scalars['EmptyScalar']>;
  Update?: Maybe<OrderList>;
  Upsert?: Maybe<OrderList>;
  TriggerFulfillment?: Maybe<FulfillmentResults>;
};


/** The root of all queries */
export type QueryReadArgs = {
  input?: Maybe<IReadRequest>;
};


/** The root of all queries */
export type QueryCreateArgs = {
  input?: Maybe<IOrderList>;
};


/** The root of all queries */
export type QueryDeleteArgs = {
  input?: Maybe<IDeleteRequest>;
};


/** The root of all queries */
export type QueryUpdateArgs = {
  input?: Maybe<IOrderList>;
};


/** The root of all queries */
export type QueryUpsertArgs = {
  input?: Maybe<IOrderList>;
};


/** The root of all queries */
export type QueryTriggerFulfillmentArgs = {
  input?: Maybe<IOrderDataList>;
};

export type OrderList = {
  __typename?: 'OrderList';
  items?: Maybe<Array<Maybe<Order>>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject: Subject;
  apiKey: ApiKey;
};

export type Order = {
  __typename?: 'Order';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<Meta>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<Items>>>;
  totalPrice?: Maybe<Scalars['Float']>;
  shippingContactPointId?: Maybe<Scalars['String']>;
  billingContactPointId?: Maybe<Scalars['String']>;
  totalWeightInKg?: Maybe<Scalars['Float']>;
};

export type Meta = {
  __typename?: 'Meta';
  created?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['Float']>;
  modifiedBy?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<Maybe<Attribute>>>;
};

export type Attribute = {
  __typename?: 'Attribute';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Items = {
  __typename?: 'Items';
  quantityPrice?: Maybe<Scalars['Float']>;
  item?: Maybe<Item>;
};

export type Item = {
  __typename?: 'Item';
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

export type Subject = {
  __typename?: 'Subject';
  id?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  roleAssociations?: Maybe<Array<Maybe<RoleAssociation>>>;
  hierarchicalScopes?: Maybe<Array<Maybe<HierarchicalScope>>>;
  unauthenticated?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

export type RoleAssociation = {
  __typename?: 'RoleAssociation';
  role?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  id?: Maybe<Scalars['String']>;
};

export type HierarchicalScope = {
  __typename?: 'HierarchicalScope';
  id?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<HierarchicalScope>>>;
  role?: Maybe<Scalars['String']>;
};

export type ApiKey = {
  __typename?: 'ApiKey';
  value?: Maybe<Scalars['String']>;
};

export type IReadRequest = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<Maybe<ISort>>>;
  filter?: Maybe<IStruct>;
  field?: Maybe<Array<Maybe<IFieldFilter>>>;
  search?: Maybe<Array<Maybe<Scalars['String']>>>;
  localesLimiter?: Maybe<Array<Maybe<Scalars['String']>>>;
  customQueries?: Maybe<Array<Maybe<Scalars['String']>>>;
  customArguments?: Maybe<IAny>;
  subject?: Maybe<Scalars['TodoScalar']>;
  apiKey?: Maybe<Scalars['TodoScalar']>;
};

export type ISort = {
  field?: Maybe<Scalars['String']>;
  order?: Maybe<Sort_SortOrder>;
};

export enum Sort_SortOrder {
  Unsorted = 0,
  Ascending = 1,
  Descending = 2,
  Unrecognized = -1
}

export type IStruct = {
  fields?: Maybe<Scalars['MapScalar']>;
};


export type IFieldFilter = {
  name?: Maybe<Scalars['String']>;
  include?: Maybe<Scalars['Boolean']>;
};

export type IAny = {
  typeUrl?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['TodoScalar']>;
};


export type IOrderList = {
  items?: Maybe<Array<Maybe<IOrder>>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<Scalars['TodoScalar']>;
  apiKey?: Maybe<Scalars['TodoScalar']>;
};

export type IOrder = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IMeta>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<IItems>>>;
  totalPrice?: Maybe<Scalars['Float']>;
  shippingContactPointId?: Maybe<Scalars['String']>;
  billingContactPointId?: Maybe<Scalars['String']>;
  totalWeightInKg?: Maybe<Scalars['Float']>;
};

export type IMeta = {
  created?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['Float']>;
  modifiedBy?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<Maybe<IAttribute>>>;
};

export type IAttribute = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type IItems = {
  quantityPrice?: Maybe<Scalars['Float']>;
  item?: Maybe<IItem>;
};

export type IItem = {
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


export type IDeleteRequest = {
  collection?: Maybe<Scalars['Boolean']>;
  ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  subject?: Maybe<Scalars['TodoScalar']>;
  apiKey?: Maybe<Scalars['TodoScalar']>;
};

export type FulfillmentResults = {
  __typename?: 'FulfillmentResults';
  fulfillmentResults?: Maybe<Array<Maybe<ResponseDetailsList>>>;
};

export type ResponseDetailsList = {
  __typename?: 'ResponseDetailsList';
  Status?: Maybe<OrderStatus>;
  error?: Maybe<ErrorList>;
};

export type OrderStatus = {
  __typename?: 'OrderStatus';
  OrderId?: Maybe<Scalars['String']>;
  OrderStatus?: Maybe<Scalars['String']>;
};

export type ErrorList = {
  __typename?: 'ErrorList';
  code?: Maybe<Array<Maybe<Scalars['String']>>>;
  message?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type IOrderDataList = {
  orderData?: Maybe<Array<Maybe<IOrderData>>>;
  meta?: Maybe<IMeta>;
};

export type IOrderData = {
  orderId?: Maybe<Scalars['String']>;
  shipments?: Maybe<Array<Maybe<IShipments>>>;
};

export type IShipments = {
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
  OrderList: ResolverTypeWrapper<OrderList>;
  Order: ResolverTypeWrapper<Order>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Meta: ResolverTypeWrapper<Meta>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Attribute: ResolverTypeWrapper<Attribute>;
  Items: ResolverTypeWrapper<Items>;
  Item: ResolverTypeWrapper<Item>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Subject: ResolverTypeWrapper<Subject>;
  RoleAssociation: ResolverTypeWrapper<RoleAssociation>;
  HierarchicalScope: ResolverTypeWrapper<HierarchicalScope>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ApiKey: ResolverTypeWrapper<ApiKey>;
  IReadRequest: IReadRequest;
  ISort: ISort;
  Sort_SortOrder: Sort_SortOrder;
  IStruct: IStruct;
  MapScalar: ResolverTypeWrapper<Scalars['MapScalar']>;
  IFieldFilter: IFieldFilter;
  IAny: IAny;
  TodoScalar: ResolverTypeWrapper<Scalars['TodoScalar']>;
  IOrderList: IOrderList;
  IOrder: IOrder;
  IMeta: IMeta;
  IAttribute: IAttribute;
  IItems: IItems;
  IItem: IItem;
  EmptyScalar: ResolverTypeWrapper<Scalars['EmptyScalar']>;
  IDeleteRequest: IDeleteRequest;
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
  Query: {};
  OrderList: OrderList;
  Order: Order;
  String: Scalars['String'];
  Meta: Meta;
  Float: Scalars['Float'];
  Attribute: Attribute;
  Items: Items;
  Item: Item;
  Int: Scalars['Int'];
  Subject: Subject;
  RoleAssociation: RoleAssociation;
  HierarchicalScope: HierarchicalScope;
  Boolean: Scalars['Boolean'];
  ApiKey: ApiKey;
  IReadRequest: IReadRequest;
  ISort: ISort;
  IStruct: IStruct;
  MapScalar: Scalars['MapScalar'];
  IFieldFilter: IFieldFilter;
  IAny: IAny;
  TodoScalar: Scalars['TodoScalar'];
  IOrderList: IOrderList;
  IOrder: IOrder;
  IMeta: IMeta;
  IAttribute: IAttribute;
  IItems: IItems;
  IItem: IItem;
  EmptyScalar: Scalars['EmptyScalar'];
  IDeleteRequest: IDeleteRequest;
  FulfillmentResults: FulfillmentResults;
  ResponseDetailsList: ResponseDetailsList;
  OrderStatus: OrderStatus;
  ErrorList: ErrorList;
  IOrderDataList: IOrderDataList;
  IOrderData: IOrderData;
  IShipments: IShipments;
}>;

export type QueryResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['OrderList']>, ParentType, ContextType, RequireFields<QueryReadArgs, never>>;
  Create?: Resolver<Maybe<ResolversTypes['OrderList']>, ParentType, ContextType, RequireFields<QueryCreateArgs, never>>;
  Delete?: Resolver<Maybe<ResolversTypes['EmptyScalar']>, ParentType, ContextType, RequireFields<QueryDeleteArgs, never>>;
  Update?: Resolver<Maybe<ResolversTypes['OrderList']>, ParentType, ContextType, RequireFields<QueryUpdateArgs, never>>;
  Upsert?: Resolver<Maybe<ResolversTypes['OrderList']>, ParentType, ContextType, RequireFields<QueryUpsertArgs, never>>;
  TriggerFulfillment?: Resolver<Maybe<ResolversTypes['FulfillmentResults']>, ParentType, ContextType, RequireFields<QueryTriggerFulfillmentArgs, never>>;
}>;

export type OrderListResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['OrderList'] = ResolversParentTypes['OrderList']> = ResolversObject<{
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Order']>>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['Subject'], ParentType, ContextType>;
  apiKey?: Resolver<ResolversTypes['ApiKey'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['Meta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Items']>>>, ParentType, ContextType>;
  totalPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  shippingContactPointId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  billingContactPointId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalWeightInKg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MetaResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['Meta'] = ResolversParentTypes['Meta']> = ResolversObject<{
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modified?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modifiedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attribute']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AttributeResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['Attribute'] = ResolversParentTypes['Attribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemsResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['Items'] = ResolversParentTypes['Items']> = ResolversObject<{
  quantityPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ItemResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = ResolversObject<{
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

export type SubjectResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['Subject'] = ResolversParentTypes['Subject']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roleAssociations?: Resolver<Maybe<Array<Maybe<ResolversTypes['RoleAssociation']>>>, ParentType, ContextType>;
  hierarchicalScopes?: Resolver<Maybe<Array<Maybe<ResolversTypes['HierarchicalScope']>>>, ParentType, ContextType>;
  unauthenticated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoleAssociationResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['RoleAssociation'] = ResolversParentTypes['RoleAssociation']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attribute']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HierarchicalScopeResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['HierarchicalScope'] = ResolversParentTypes['HierarchicalScope']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  children?: Resolver<Maybe<Array<Maybe<ResolversTypes['HierarchicalScope']>>>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiKeyResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['ApiKey'] = ResolversParentTypes['ApiKey']> = ResolversObject<{
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Sort_SortOrderResolvers = { UNSORTED: 'undefined', ASCENDING: 1, DESCENDING: 2, UNRECOGNIZED: -1 };

export interface MapScalarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['MapScalar'], any> {
  name: 'MapScalar';
}

export interface TodoScalarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TodoScalar'], any> {
  name: 'TodoScalar';
}

export interface EmptyScalarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmptyScalar'], any> {
  name: 'EmptyScalar';
}

export type FulfillmentResultsResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['FulfillmentResults'] = ResolversParentTypes['FulfillmentResults']> = ResolversObject<{
  fulfillmentResults?: Resolver<Maybe<Array<Maybe<ResolversTypes['ResponseDetailsList']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResponseDetailsListResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['ResponseDetailsList'] = ResolversParentTypes['ResponseDetailsList']> = ResolversObject<{
  Status?: Resolver<Maybe<ResolversTypes['OrderStatus']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderStatusResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['OrderStatus'] = ResolversParentTypes['OrderStatus']> = ResolversObject<{
  OrderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  OrderStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ErrorListResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['ErrorList'] = ResolversParentTypes['ErrorList']> = ResolversObject<{
  code?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  message?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = OrderingContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  OrderList?: OrderListResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  Meta?: MetaResolvers<ContextType>;
  Attribute?: AttributeResolvers<ContextType>;
  Items?: ItemsResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  Subject?: SubjectResolvers<ContextType>;
  RoleAssociation?: RoleAssociationResolvers<ContextType>;
  HierarchicalScope?: HierarchicalScopeResolvers<ContextType>;
  ApiKey?: ApiKeyResolvers<ContextType>;
  Sort_SortOrder?: Sort_SortOrderResolvers;
  MapScalar?: GraphQLScalarType;
  TodoScalar?: GraphQLScalarType;
  EmptyScalar?: GraphQLScalarType;
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
