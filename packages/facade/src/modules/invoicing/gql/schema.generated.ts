import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { InvoicingContext } from '../interfaces';
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
  Upload: any;
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
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceInvoiceInvoiceResponse = {
  __typename?: 'IoRestorecommerceInvoiceInvoiceResponse';
  payload?: Maybe<IoRestorecommerceInvoiceInvoice>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceInvoiceInvoice = {
  __typename?: 'IoRestorecommerceInvoiceInvoice';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  timestamp?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['String']>;
  paymentStatus?: Maybe<Scalars['String']>;
  totalAmount?: Maybe<Scalars['Float']>;
  netAmount?: Maybe<Scalars['Float']>;
  vatAmount?: Maybe<Scalars['Float']>;
  document?: Maybe<Scalars['String']>;
  invoiceNumber?: Maybe<Scalars['String']>;
  customerRemark?: Maybe<Scalars['String']>;
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
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<IIoRestorecommerceResourcebaseSort>>;
  filters?: InputMaybe<Array<IIoRestorecommerceResourcebaseFilterOp>>;
  field?: InputMaybe<Array<IIoRestorecommerceResourcebaseFieldFilter>>;
  search?: InputMaybe<Array<Scalars['String']>>;
  localesLimiter?: InputMaybe<Array<Scalars['String']>>;
  customQueries?: InputMaybe<Array<Scalars['String']>>;
  customArguments?: InputMaybe<IGoogleProtobufAny>;
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
  value?: InputMaybe<Scalars['Upload']>;
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
};


export type InvoicingInvoiceMutationMutateArgs = {
  input: IIoRestorecommerceInvoiceInvoiceList;
};


export type InvoicingInvoiceMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceInvoiceInvoiceList = {
  items?: InputMaybe<Array<IIoRestorecommerceInvoiceInvoice>>;
  totalCount?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceInvoiceInvoice = {
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  timestamp?: InputMaybe<Scalars['String']>;
  customerId?: InputMaybe<Scalars['String']>;
  paymentStatus?: InputMaybe<Scalars['String']>;
  totalAmount?: InputMaybe<Scalars['Float']>;
  netAmount?: InputMaybe<Scalars['Float']>;
  vatAmount?: InputMaybe<Scalars['Float']>;
  document?: InputMaybe<Scalars['String']>;
  invoiceNumber?: InputMaybe<Scalars['String']>;
  customerRemark?: InputMaybe<Scalars['String']>;
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
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
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
  InvoicingQuery: ResolverTypeWrapper<InvoicingQuery>;
  InvoicingInvoiceQuery: ResolverTypeWrapper<InvoicingInvoiceQuery>;
  ProtoIoRestorecommerceInvoiceInvoiceListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
  IoRestorecommerceInvoiceInvoiceListResponse: ResolverTypeWrapper<IoRestorecommerceInvoiceInvoiceListResponse>;
  IoRestorecommerceInvoiceInvoiceResponse: ResolverTypeWrapper<IoRestorecommerceInvoiceInvoiceResponse>;
  IoRestorecommerceInvoiceInvoice: ResolverTypeWrapper<IoRestorecommerceInvoiceInvoice>;
  String: ResolverTypeWrapper<Scalars['String']>;
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
  String: Scalars['String'];
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
  owner?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  acl?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttributeObj']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeObjResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttributeObj'] = ResolversParentTypes['IoRestorecommerceAttributeAttributeObj']> = ResolversObject<{
  attribute?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
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
  InvoicingMutation?: InvoicingMutationResolvers<ContextType>;
  InvoicingInvoiceMutation?: InvoicingInvoiceMutationResolvers<ContextType>;
  ProtoIoRestorecommerceResourcebaseDeleteResponse?: ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  IoRestorecommerceResourcebaseDeleteResponse?: IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
}>;

