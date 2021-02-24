import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { InvoicingContext } from '../interfaces';
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
  invoicing: InvoicingQuery;
};

export type InvoicingQuery = {
  __typename?: 'InvoicingQuery';
  Read?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceList>;
};


export type InvoicingQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceInvoiceInvoiceList = {
  __typename?: 'ProtoIoRestorecommerceInvoiceInvoiceList';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceInvoiceInvoiceList>;
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

export type IoRestorecommerceInvoiceInvoiceList = {
  __typename?: 'IoRestorecommerceInvoiceInvoiceList';
  items?: Maybe<Array<IoRestorecommerceInvoiceInvoice>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IoRestorecommerceAuthSubject>;
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
};

export type IoRestorecommerceAttributeAttribute = {
  __typename?: 'IoRestorecommerceAttributeAttribute';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceAuthSubject = {
  __typename?: 'IoRestorecommerceAuthSubject';
  id?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  roleAssociations?: Maybe<Array<IoRestorecommerceAuthRoleAssociation>>;
  hierarchicalScopes?: Maybe<Array<IoRestorecommerceAuthHierarchicalScope>>;
  unauthenticated?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceAuthRoleAssociation = {
  __typename?: 'IoRestorecommerceAuthRoleAssociation';
  role?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  id?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceAuthHierarchicalScope = {
  __typename?: 'IoRestorecommerceAuthHierarchicalScope';
  id?: Maybe<Scalars['String']>;
  children?: Maybe<Array<IoRestorecommerceAuthHierarchicalScope>>;
  role?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceResourcebaseReadRequest = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Array<IIoRestorecommerceResourcebaseSort>>;
  filter?: Maybe<IGoogleProtobufStruct>;
  field?: Maybe<Array<IIoRestorecommerceResourcebaseFieldFilter>>;
  search?: Maybe<Array<Scalars['String']>>;
  localesLimiter?: Maybe<Array<Scalars['String']>>;
  customQueries?: Maybe<Array<Scalars['String']>>;
  customArguments?: Maybe<IGoogleProtobufAny>;
  subject?: Maybe<IIoRestorecommerceAuthSubject>;
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

export type IGoogleProtobufStruct = {
  fields?: Maybe<Array<IGoogleProtobufStructFieldsEntry>>;
};

export type IGoogleProtobufStructFieldsEntry = {
  key?: Maybe<Scalars['String']>;
  value?: Maybe<IGoogleProtobufValue>;
};

export type IGoogleProtobufValue = {
  nullValue?: Maybe<GoogleProtobufNullValue>;
  numberValue?: Maybe<Scalars['Float']>;
  stringValue?: Maybe<Scalars['String']>;
  boolValue?: Maybe<Scalars['Boolean']>;
  structValue?: Maybe<IGoogleProtobufStruct>;
  listValue?: Maybe<IGoogleProtobufListValue>;
};

export enum GoogleProtobufNullValue {
  NullValue = 0
}

export type IGoogleProtobufListValue = {
  values?: Maybe<Array<IGoogleProtobufValue>>;
};

export type IIoRestorecommerceResourcebaseFieldFilter = {
  name?: Maybe<Scalars['String']>;
  include?: Maybe<Scalars['Boolean']>;
};

export type IGoogleProtobufAny = {
  typeUrl?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Upload']>;
};


export type IIoRestorecommerceAuthSubject = {
  id?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  roleAssociations?: Maybe<Array<IIoRestorecommerceAuthRoleAssociation>>;
  hierarchicalScopes?: Maybe<Array<IIoRestorecommerceAuthHierarchicalScope>>;
  unauthenticated?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceAuthRoleAssociation = {
  role?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<IIoRestorecommerceAttributeAttribute>>;
  id?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceAttributeAttribute = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceAuthHierarchicalScope = {
  id?: Maybe<Scalars['String']>;
  children?: Maybe<Array<IIoRestorecommerceAuthHierarchicalScope>>;
  role?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  invoicing: InvoicingMutation;
};

export type InvoicingMutation = {
  __typename?: 'InvoicingMutation';
  Create?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceList>;
  Upsert?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceList>;
};


export type InvoicingMutationCreateArgs = {
  input: IIoRestorecommerceInvoiceInvoiceList;
};


export type InvoicingMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type InvoicingMutationUpdateArgs = {
  input: IIoRestorecommerceInvoiceInvoiceList;
};


export type InvoicingMutationUpsertArgs = {
  input: IIoRestorecommerceInvoiceInvoiceList;
};

export type IIoRestorecommerceInvoiceInvoiceList = {
  items?: Maybe<Array<IIoRestorecommerceInvoiceInvoice>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IIoRestorecommerceAuthSubject>;
};

export type IIoRestorecommerceInvoiceInvoice = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
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

export type IIoRestorecommerceMetaMeta = {
  created?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['Float']>;
  modifiedBy?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type ProtoGoogleProtobufEmpty = {
  __typename?: 'ProtoGoogleProtobufEmpty';
  status: StatusType;
};

export type IIoRestorecommerceResourcebaseDeleteRequest = {
  collection?: Maybe<Scalars['Boolean']>;
  ids?: Maybe<Array<Scalars['String']>>;
  subject?: Maybe<IIoRestorecommerceAuthSubject>;
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
  InvoicingQuery: ResolverTypeWrapper<InvoicingQuery>;
  ProtoIoRestorecommerceInvoiceInvoiceList: ResolverTypeWrapper<ProtoIoRestorecommerceInvoiceInvoiceList>;
  StatusType: ResolverTypeWrapper<StatusType>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IoRestorecommerceInvoiceInvoiceList: ResolverTypeWrapper<IoRestorecommerceInvoiceInvoiceList>;
  IoRestorecommerceInvoiceInvoice: ResolverTypeWrapper<IoRestorecommerceInvoiceInvoice>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  IoRestorecommerceAuthSubject: ResolverTypeWrapper<IoRestorecommerceAuthSubject>;
  IoRestorecommerceAuthRoleAssociation: ResolverTypeWrapper<IoRestorecommerceAuthRoleAssociation>;
  IoRestorecommerceAuthHierarchicalScope: ResolverTypeWrapper<IoRestorecommerceAuthHierarchicalScope>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IoRestorecommerceResourcebaseSortSortOrder: IoRestorecommerceResourcebaseSortSortOrder;
  IGoogleProtobufStruct: IGoogleProtobufStruct;
  IGoogleProtobufStructFieldsEntry: IGoogleProtobufStructFieldsEntry;
  IGoogleProtobufValue: IGoogleProtobufValue;
  GoogleProtobufNullValue: GoogleProtobufNullValue;
  IGoogleProtobufListValue: IGoogleProtobufListValue;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  IGoogleProtobufAny: IGoogleProtobufAny;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  IIoRestorecommerceAuthSubject: IIoRestorecommerceAuthSubject;
  IIoRestorecommerceAuthRoleAssociation: IIoRestorecommerceAuthRoleAssociation;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAuthHierarchicalScope: IIoRestorecommerceAuthHierarchicalScope;
  Mutation: ResolverTypeWrapper<{}>;
  InvoicingMutation: ResolverTypeWrapper<InvoicingMutation>;
  IIoRestorecommerceInvoiceInvoiceList: IIoRestorecommerceInvoiceInvoiceList;
  IIoRestorecommerceInvoiceInvoice: IIoRestorecommerceInvoiceInvoice;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  ProtoGoogleProtobufEmpty: ResolverTypeWrapper<ProtoGoogleProtobufEmpty>;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  InvoicingQuery: InvoicingQuery;
  ProtoIoRestorecommerceInvoiceInvoiceList: ProtoIoRestorecommerceInvoiceInvoiceList;
  StatusType: StatusType;
  String: Scalars['String'];
  Int: Scalars['Int'];
  IoRestorecommerceInvoiceInvoiceList: IoRestorecommerceInvoiceInvoiceList;
  IoRestorecommerceInvoiceInvoice: IoRestorecommerceInvoiceInvoice;
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  Float: Scalars['Float'];
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  IoRestorecommerceAuthSubject: IoRestorecommerceAuthSubject;
  IoRestorecommerceAuthRoleAssociation: IoRestorecommerceAuthRoleAssociation;
  IoRestorecommerceAuthHierarchicalScope: IoRestorecommerceAuthHierarchicalScope;
  Boolean: Scalars['Boolean'];
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IGoogleProtobufStruct: IGoogleProtobufStruct;
  IGoogleProtobufStructFieldsEntry: IGoogleProtobufStructFieldsEntry;
  IGoogleProtobufValue: IGoogleProtobufValue;
  IGoogleProtobufListValue: IGoogleProtobufListValue;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  IGoogleProtobufAny: IGoogleProtobufAny;
  Upload: Scalars['Upload'];
  IIoRestorecommerceAuthSubject: IIoRestorecommerceAuthSubject;
  IIoRestorecommerceAuthRoleAssociation: IIoRestorecommerceAuthRoleAssociation;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAuthHierarchicalScope: IIoRestorecommerceAuthHierarchicalScope;
  Mutation: {};
  InvoicingMutation: InvoicingMutation;
  IIoRestorecommerceInvoiceInvoiceList: IIoRestorecommerceInvoiceInvoiceList;
  IIoRestorecommerceInvoiceInvoice: IIoRestorecommerceInvoiceInvoice;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  ProtoGoogleProtobufEmpty: ProtoGoogleProtobufEmpty;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
}>;

export type QueryResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  invoicing?: Resolver<ResolversTypes['InvoicingQuery'], ParentType, ContextType>;
}>;

export type InvoicingQueryResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['InvoicingQuery'] = ResolversParentTypes['InvoicingQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceInvoiceInvoiceList']>, ParentType, ContextType, RequireFields<InvoicingQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceInvoiceInvoiceListResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceInvoiceInvoiceList'] = ResolversParentTypes['ProtoIoRestorecommerceInvoiceInvoiceList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceInvoiceInvoiceList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StatusTypeResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['StatusType'] = ResolversParentTypes['StatusType']> = ResolversObject<{
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceInvoiceInvoiceListResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceInvoiceInvoiceList'] = ResolversParentTypes['IoRestorecommerceInvoiceInvoiceList']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceInvoiceInvoice']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAuthSubject']>, ParentType, ContextType>;
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
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthSubjectResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthSubject'] = ResolversParentTypes['IoRestorecommerceAuthSubject']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roleAssociations?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAuthRoleAssociation']>>, ParentType, ContextType>;
  hierarchicalScopes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAuthHierarchicalScope']>>, ParentType, ContextType>;
  unauthenticated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthRoleAssociationResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthRoleAssociation'] = ResolversParentTypes['IoRestorecommerceAuthRoleAssociation']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthHierarchicalScopeResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthHierarchicalScope'] = ResolversParentTypes['IoRestorecommerceAuthHierarchicalScope']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  children?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAuthHierarchicalScope']>>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseSortSortOrderResolvers = { UNSORTED: 'undefined', ASCENDING: 1, DESCENDING: 2 };

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type MutationResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  invoicing?: Resolver<ResolversTypes['InvoicingMutation'], ParentType, ContextType>;
}>;

export type InvoicingMutationResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['InvoicingMutation'] = ResolversParentTypes['InvoicingMutation']> = ResolversObject<{
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceInvoiceInvoiceList']>, ParentType, ContextType, RequireFields<InvoicingMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<InvoicingMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceInvoiceInvoiceList']>, ParentType, ContextType, RequireFields<InvoicingMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceInvoiceInvoiceList']>, ParentType, ContextType, RequireFields<InvoicingMutationUpsertArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoGoogleProtobufEmptyResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['ProtoGoogleProtobufEmpty'] = ResolversParentTypes['ProtoGoogleProtobufEmpty']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = InvoicingContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  InvoicingQuery?: InvoicingQueryResolvers<ContextType>;
  ProtoIoRestorecommerceInvoiceInvoiceList?: ProtoIoRestorecommerceInvoiceInvoiceListResolvers<ContextType>;
  StatusType?: StatusTypeResolvers<ContextType>;
  IoRestorecommerceInvoiceInvoiceList?: IoRestorecommerceInvoiceInvoiceListResolvers<ContextType>;
  IoRestorecommerceInvoiceInvoice?: IoRestorecommerceInvoiceInvoiceResolvers<ContextType>;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
  IoRestorecommerceAuthSubject?: IoRestorecommerceAuthSubjectResolvers<ContextType>;
  IoRestorecommerceAuthRoleAssociation?: IoRestorecommerceAuthRoleAssociationResolvers<ContextType>;
  IoRestorecommerceAuthHierarchicalScope?: IoRestorecommerceAuthHierarchicalScopeResolvers<ContextType>;
  IoRestorecommerceResourcebaseSortSortOrder?: IoRestorecommerceResourcebaseSortSortOrderResolvers;
  Upload?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  InvoicingMutation?: InvoicingMutationResolvers<ContextType>;
  ProtoGoogleProtobufEmpty?: ProtoGoogleProtobufEmptyResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = InvoicingContext> = Resolvers<ContextType>;
