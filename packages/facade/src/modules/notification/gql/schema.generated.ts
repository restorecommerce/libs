import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { NotificationContext } from '../interfaces.js';
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
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  GoogleProtobufAnyValue: { input: any; output: any; }
  IDateTime: { input: any; output: any; }
};

export type Query = {
  __typename?: 'Query';
  notification: NotificationQuery;
};

export type NotificationQuery = {
  __typename?: 'NotificationQuery';
  notification: NotificationNotificationQuery;
};

export type NotificationNotificationQuery = {
  __typename?: 'NotificationNotificationQuery';
  Read?: Maybe<ProtoIoRestorecommerceNotificationNotificationListResponse>;
};


export type NotificationNotificationQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceNotificationNotificationListResponse = {
  __typename?: 'ProtoIoRestorecommerceNotificationNotificationListResponse';
  details?: Maybe<IoRestorecommerceNotificationNotificationListResponse>;
};

export type IoRestorecommerceNotificationNotificationListResponse = {
  __typename?: 'IoRestorecommerceNotificationNotificationListResponse';
  items?: Maybe<Array<IoRestorecommerceNotificationNotificationResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceNotificationNotificationResponse = {
  __typename?: 'IoRestorecommerceNotificationNotificationResponse';
  items?: Maybe<IoRestorecommerceNotificationNotification>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceNotificationNotification = {
  __typename?: 'IoRestorecommerceNotificationNotification';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  notificationChannelIds?: Maybe<Array<Scalars['String']['output']>>;
  email?: Maybe<Scalars['String']['output']>;
  telephoneNumber?: Maybe<Scalars['String']['output']>;
  subjectTemplate?: Maybe<Scalars['String']['output']>;
  bodyTemplate?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceMetaMeta = {
  __typename?: 'IoRestorecommerceMetaMeta';
  created?: Maybe<Scalars['DateTime']['output']>;
  modified?: Maybe<Scalars['DateTime']['output']>;
  modifiedBy?: Maybe<Scalars['String']['output']>;
  owners?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  acls?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  createdBy?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceAttributeAttribute = {
  __typename?: 'IoRestorecommerceAttributeAttribute';
  id?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
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
  notification: NotificationMutation;
};

export type NotificationMutation = {
  __typename?: 'NotificationMutation';
  notification: NotificationNotificationMutation;
};

export type NotificationNotificationMutation = {
  __typename?: 'NotificationNotificationMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceNotificationNotificationListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type NotificationNotificationMutationMutateArgs = {
  input: IIoRestorecommerceNotificationNotificationList;
};


export type NotificationNotificationMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceNotificationNotificationList = {
  items?: InputMaybe<Array<IIoRestorecommerceNotificationNotification>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceNotificationNotification = {
  id?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  notificationChannelIds?: InputMaybe<Array<Scalars['String']['input']>>;
  email?: InputMaybe<Scalars['String']['input']>;
  telephoneNumber?: InputMaybe<Scalars['String']['input']>;
  subjectTemplate?: InputMaybe<Scalars['String']['input']>;
  bodyTemplate?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceMetaMeta = {
  created?: InputMaybe<Scalars['IDateTime']['input']>;
  modified?: InputMaybe<Scalars['IDateTime']['input']>;
  modifiedBy?: InputMaybe<Scalars['String']['input']>;
  owners?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  acls?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceAttributeAttribute = {
  id?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
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

export type Subscription = {
  __typename?: 'Subscription';
  orderingOrders?: Maybe<SubscriptionOutput>;
  catalogProducts?: Maybe<SubscriptionOutput>;
  invoicingInvoices?: Maybe<SubscriptionOutput>;
  fulfillmentFulfillments?: Maybe<SubscriptionOutput>;
  fulfillmentFulfillmentCouriers?: Maybe<SubscriptionOutput>;
  fulfillmentFulfillment_products?: Maybe<SubscriptionOutput>;
};


export type SubscriptionOrderingOrdersArgs = {
  action?: InputMaybe<SubscriptionAction>;
};


export type SubscriptionCatalogProductsArgs = {
  action?: InputMaybe<SubscriptionAction>;
};


export type SubscriptionInvoicingInvoicesArgs = {
  action?: InputMaybe<SubscriptionAction>;
};


export type SubscriptionFulfillmentFulfillmentsArgs = {
  action?: InputMaybe<SubscriptionAction>;
};


export type SubscriptionFulfillmentFulfillmentCouriersArgs = {
  action?: InputMaybe<SubscriptionAction>;
};


export type SubscriptionFulfillmentFulfillment_ProductsArgs = {
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
  NotificationQuery: ResolverTypeWrapper<NotificationQuery>;
  NotificationNotificationQuery: ResolverTypeWrapper<NotificationNotificationQuery>;
  ProtoIoRestorecommerceNotificationNotificationListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceNotificationNotificationListResponse>;
  IoRestorecommerceNotificationNotificationListResponse: ResolverTypeWrapper<IoRestorecommerceNotificationNotificationListResponse>;
  IoRestorecommerceNotificationNotificationResponse: ResolverTypeWrapper<IoRestorecommerceNotificationNotificationResponse>;
  IoRestorecommerceNotificationNotification: ResolverTypeWrapper<IoRestorecommerceNotificationNotification>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  IoRestorecommerceStatusStatus: ResolverTypeWrapper<IoRestorecommerceStatusStatus>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  IGoogleProtobufAny: IGoogleProtobufAny;
  GoogleProtobufAnyValue: ResolverTypeWrapper<Scalars['GoogleProtobufAnyValue']['output']>;
  IIoRestorecommerceResourcebaseSearch: IIoRestorecommerceResourcebaseSearch;
  Mutation: ResolverTypeWrapper<{}>;
  NotificationMutation: ResolverTypeWrapper<NotificationMutation>;
  NotificationNotificationMutation: ResolverTypeWrapper<NotificationNotificationMutation>;
  IIoRestorecommerceNotificationNotificationList: IIoRestorecommerceNotificationNotificationList;
  IIoRestorecommerceNotificationNotification: IIoRestorecommerceNotificationNotification;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IDateTime: ResolverTypeWrapper<Scalars['IDateTime']['output']>;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  ModeType: ModeType;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  IoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<IoRestorecommerceResourcebaseDeleteResponse>;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  Subscription: ResolverTypeWrapper<{}>;
  SubscriptionOutput: ResolverTypeWrapper<SubscriptionOutput>;
  SubscriptionAction: SubscriptionAction;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  NotificationQuery: NotificationQuery;
  NotificationNotificationQuery: NotificationNotificationQuery;
  ProtoIoRestorecommerceNotificationNotificationListResponse: ProtoIoRestorecommerceNotificationNotificationListResponse;
  IoRestorecommerceNotificationNotificationListResponse: IoRestorecommerceNotificationNotificationListResponse;
  IoRestorecommerceNotificationNotificationResponse: IoRestorecommerceNotificationNotificationResponse;
  IoRestorecommerceNotificationNotification: IoRestorecommerceNotificationNotification;
  String: Scalars['String']['output'];
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  DateTime: Scalars['DateTime']['output'];
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  IoRestorecommerceStatusStatus: IoRestorecommerceStatusStatus;
  Int: Scalars['Int']['output'];
  IoRestorecommerceStatusOperationStatus: IoRestorecommerceStatusOperationStatus;
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IIoRestorecommerceResourcebaseFilterOp: IIoRestorecommerceResourcebaseFilterOp;
  IIoRestorecommerceResourcebaseFilter: IIoRestorecommerceResourcebaseFilter;
  IIoRestorecommerceFilterFilterOp: IIoRestorecommerceFilterFilterOp;
  IIoRestorecommerceFilterFilter: IIoRestorecommerceFilterFilter;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  Boolean: Scalars['Boolean']['output'];
  IGoogleProtobufAny: IGoogleProtobufAny;
  GoogleProtobufAnyValue: Scalars['GoogleProtobufAnyValue']['output'];
  IIoRestorecommerceResourcebaseSearch: IIoRestorecommerceResourcebaseSearch;
  Mutation: {};
  NotificationMutation: NotificationMutation;
  NotificationNotificationMutation: NotificationNotificationMutation;
  IIoRestorecommerceNotificationNotificationList: IIoRestorecommerceNotificationNotificationList;
  IIoRestorecommerceNotificationNotification: IIoRestorecommerceNotificationNotification;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IDateTime: Scalars['IDateTime']['output'];
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ProtoIoRestorecommerceResourcebaseDeleteResponse;
  IoRestorecommerceResourcebaseDeleteResponse: IoRestorecommerceResourcebaseDeleteResponse;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  Subscription: {};
  SubscriptionOutput: SubscriptionOutput;
}>;

export type QueryResolvers<ContextType = NotificationContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  notification?: Resolver<ResolversTypes['NotificationQuery'], ParentType, ContextType>;
}>;

export type NotificationQueryResolvers<ContextType = NotificationContext, ParentType extends ResolversParentTypes['NotificationQuery'] = ResolversParentTypes['NotificationQuery']> = ResolversObject<{
  notification?: Resolver<ResolversTypes['NotificationNotificationQuery'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NotificationNotificationQueryResolvers<ContextType = NotificationContext, ParentType extends ResolversParentTypes['NotificationNotificationQuery'] = ResolversParentTypes['NotificationNotificationQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceNotificationNotificationListResponse']>, ParentType, ContextType, RequireFields<NotificationNotificationQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceNotificationNotificationListResponseResolvers<ContextType = NotificationContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceNotificationNotificationListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceNotificationNotificationListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceNotificationNotificationListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceNotificationNotificationListResponseResolvers<ContextType = NotificationContext, ParentType extends ResolversParentTypes['IoRestorecommerceNotificationNotificationListResponse'] = ResolversParentTypes['IoRestorecommerceNotificationNotificationListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceNotificationNotificationResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceNotificationNotificationResponseResolvers<ContextType = NotificationContext, ParentType extends ResolversParentTypes['IoRestorecommerceNotificationNotificationResponse'] = ResolversParentTypes['IoRestorecommerceNotificationNotificationResponse']> = ResolversObject<{
  items?: Resolver<Maybe<ResolversTypes['IoRestorecommerceNotificationNotification']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceNotificationNotificationResolvers<ContextType = NotificationContext, ParentType extends ResolversParentTypes['IoRestorecommerceNotificationNotification'] = ResolversParentTypes['IoRestorecommerceNotificationNotification']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notificationChannelIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  telephoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subjectTemplate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bodyTemplate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceMetaMetaResolvers<ContextType = NotificationContext, ParentType extends ResolversParentTypes['IoRestorecommerceMetaMeta'] = ResolversParentTypes['IoRestorecommerceMetaMeta']> = ResolversObject<{
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  modified?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  modifiedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owners?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  acls?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = NotificationContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusStatusResolvers<ContextType = NotificationContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusStatus'] = ResolversParentTypes['IoRestorecommerceStatusStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusOperationStatusResolvers<ContextType = NotificationContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusOperationStatus'] = ResolversParentTypes['IoRestorecommerceStatusOperationStatus']> = ResolversObject<{
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

export type MutationResolvers<ContextType = NotificationContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  notification?: Resolver<ResolversTypes['NotificationMutation'], ParentType, ContextType>;
}>;

export type NotificationMutationResolvers<ContextType = NotificationContext, ParentType extends ResolversParentTypes['NotificationMutation'] = ResolversParentTypes['NotificationMutation']> = ResolversObject<{
  notification?: Resolver<ResolversTypes['NotificationNotificationMutation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NotificationNotificationMutationResolvers<ContextType = NotificationContext, ParentType extends ResolversParentTypes['NotificationNotificationMutation'] = ResolversParentTypes['NotificationNotificationMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceNotificationNotificationListResponse']>, ParentType, ContextType, RequireFields<NotificationNotificationMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<NotificationNotificationMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface IDateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IDateTime'], any> {
  name: 'IDateTime';
}

export type ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = NotificationContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = NotificationContext, ParentType extends ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  status?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceStatusStatus']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = NotificationContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  orderingOrders?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "orderingOrders", ParentType, ContextType, Partial<SubscriptionOrderingOrdersArgs>>;
  catalogProducts?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "catalogProducts", ParentType, ContextType, Partial<SubscriptionCatalogProductsArgs>>;
  invoicingInvoices?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "invoicingInvoices", ParentType, ContextType, Partial<SubscriptionInvoicingInvoicesArgs>>;
  fulfillmentFulfillments?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "fulfillmentFulfillments", ParentType, ContextType, Partial<SubscriptionFulfillmentFulfillmentsArgs>>;
  fulfillmentFulfillmentCouriers?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "fulfillmentFulfillmentCouriers", ParentType, ContextType, Partial<SubscriptionFulfillmentFulfillmentCouriersArgs>>;
  fulfillmentFulfillment_products?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "fulfillmentFulfillment_products", ParentType, ContextType, Partial<SubscriptionFulfillmentFulfillment_ProductsArgs>>;
}>;

export type SubscriptionOutputResolvers<ContextType = NotificationContext, ParentType extends ResolversParentTypes['SubscriptionOutput'] = ResolversParentTypes['SubscriptionOutput']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = NotificationContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  NotificationQuery?: NotificationQueryResolvers<ContextType>;
  NotificationNotificationQuery?: NotificationNotificationQueryResolvers<ContextType>;
  ProtoIoRestorecommerceNotificationNotificationListResponse?: ProtoIoRestorecommerceNotificationNotificationListResponseResolvers<ContextType>;
  IoRestorecommerceNotificationNotificationListResponse?: IoRestorecommerceNotificationNotificationListResponseResolvers<ContextType>;
  IoRestorecommerceNotificationNotificationResponse?: IoRestorecommerceNotificationNotificationResponseResolvers<ContextType>;
  IoRestorecommerceNotificationNotification?: IoRestorecommerceNotificationNotificationResolvers<ContextType>;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
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
  NotificationMutation?: NotificationMutationResolvers<ContextType>;
  NotificationNotificationMutation?: NotificationNotificationMutationResolvers<ContextType>;
  IDateTime?: GraphQLScalarType;
  ProtoIoRestorecommerceResourcebaseDeleteResponse?: ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  IoRestorecommerceResourcebaseDeleteResponse?: IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  SubscriptionOutput?: SubscriptionOutputResolvers<ContextType>;
}>;

