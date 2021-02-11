import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { SchedulingContext } from '../interfaces';
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
  TodoScalar: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  scheduling: SchedulingQuery;
};

export type SchedulingQuery = {
  __typename?: 'SchedulingQuery';
  Read?: Maybe<ProtoIoRestorecommerceJobJobList>;
};


export type SchedulingQueryReadArgs = {
  input: IIoRestorecommerceJobJobReadRequest;
};

export type ProtoIoRestorecommerceJobJobList = {
  __typename?: 'ProtoIoRestorecommerceJobJobList';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceJobJobList>;
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

export type IoRestorecommerceJobJobList = {
  __typename?: 'IoRestorecommerceJobJobList';
  items?: Maybe<Array<IoRestorecommerceJobJob>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IoRestorecommerceAuthSubject>;
};

export type IoRestorecommerceJobJob = {
  __typename?: 'IoRestorecommerceJobJob';
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  data?: Maybe<IoRestorecommerceJobData>;
  when?: Maybe<Scalars['String']>;
  options?: Maybe<IoRestorecommerceJobJobOptions>;
};

export type IoRestorecommerceJobData = {
  __typename?: 'IoRestorecommerceJobData';
  timezone?: Maybe<Scalars['String']>;
  payload?: Maybe<GoogleProtobufAny>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  subjectId?: Maybe<Scalars['String']>;
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
};

export type IoRestorecommerceAttributeAttribute = {
  __typename?: 'IoRestorecommerceAttributeAttribute';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceJobJobOptions = {
  __typename?: 'IoRestorecommerceJobJobOptions';
  priority?: Maybe<IoRestorecommerceJobJobOptionsPriority>;
  attempts?: Maybe<Scalars['Int']>;
  backoff?: Maybe<IoRestorecommerceJobBackoff>;
  timeout?: Maybe<Scalars['Int']>;
  repeat?: Maybe<IoRestorecommerceJobRepeat>;
};

export enum IoRestorecommerceJobJobOptionsPriority {
  Normal = 0,
  Low = 10,
  Medium = -5,
  High = -10,
  Critical = -15
}

export type IoRestorecommerceJobBackoff = {
  __typename?: 'IoRestorecommerceJobBackoff';
  delay?: Maybe<Scalars['Float']>;
  type?: Maybe<IoRestorecommerceJobBackoffType>;
};

export enum IoRestorecommerceJobBackoffType {
  Fixed = 0,
  Exponential = 1
}

export type IoRestorecommerceJobRepeat = {
  __typename?: 'IoRestorecommerceJobRepeat';
  every?: Maybe<Scalars['Int']>;
  cron?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
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

export type IIoRestorecommerceJobJobReadRequest = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<IoRestorecommerceJobJobReadRequestSortOrder>;
  filter?: Maybe<IIoRestorecommerceJobJobFilter>;
  field?: Maybe<Array<IIoRestorecommerceResourcebaseFieldFilter>>;
  subject?: Maybe<IIoRestorecommerceAuthSubject>;
};

export enum IoRestorecommerceJobJobReadRequestSortOrder {
  Unsorted = 0,
  Ascending = 1,
  Descending = 2
}

export type IIoRestorecommerceJobJobFilter = {
  jobIds?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceResourcebaseFieldFilter = {
  name?: Maybe<Scalars['String']>;
  include?: Maybe<Scalars['Boolean']>;
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
  scheduling: SchedulingMutation;
};

export type SchedulingMutation = {
  __typename?: 'SchedulingMutation';
  Create?: Maybe<ProtoIoRestorecommerceJobJobList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommerceJobJobList>;
  Upsert?: Maybe<ProtoIoRestorecommerceJobJobList>;
};


export type SchedulingMutationCreateArgs = {
  input: IIoRestorecommerceJobJobList;
};


export type SchedulingMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type SchedulingMutationUpdateArgs = {
  input: IIoRestorecommerceJobJobList;
};


export type SchedulingMutationUpsertArgs = {
  input: IIoRestorecommerceJobJobList;
};

export type IIoRestorecommerceJobJobList = {
  items?: Maybe<Array<IIoRestorecommerceJobJob>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IIoRestorecommerceAuthSubject>;
};

export type IIoRestorecommerceJobJob = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  data?: Maybe<IIoRestorecommerceJobData>;
  when?: Maybe<Scalars['String']>;
  options?: Maybe<IIoRestorecommerceJobJobOptions>;
};

export type IIoRestorecommerceJobData = {
  timezone?: Maybe<Scalars['String']>;
  payload?: Maybe<IGoogleProtobufAny>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  subjectId?: Maybe<Scalars['String']>;
};

export type IGoogleProtobufAny = {
  typeUrl?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Upload']>;
};


export type IIoRestorecommerceMetaMeta = {
  created?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['Float']>;
  modifiedBy?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type IIoRestorecommerceJobJobOptions = {
  priority?: Maybe<IoRestorecommerceJobJobOptionsPriority>;
  attempts?: Maybe<Scalars['Int']>;
  backoff?: Maybe<IIoRestorecommerceJobBackoff>;
  timeout?: Maybe<Scalars['Int']>;
  repeat?: Maybe<IIoRestorecommerceJobRepeat>;
};

export type IIoRestorecommerceJobBackoff = {
  delay?: Maybe<Scalars['Float']>;
  type?: Maybe<IoRestorecommerceJobBackoffType>;
};

export type IIoRestorecommerceJobRepeat = {
  every?: Maybe<Scalars['Int']>;
  cron?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
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
  SchedulingQuery: ResolverTypeWrapper<SchedulingQuery>;
  ProtoIoRestorecommerceJobJobList: ResolverTypeWrapper<ProtoIoRestorecommerceJobJobList>;
  StatusType: ResolverTypeWrapper<StatusType>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IoRestorecommerceJobJobList: ResolverTypeWrapper<IoRestorecommerceJobJobList>;
  IoRestorecommerceJobJob: ResolverTypeWrapper<IoRestorecommerceJobJob>;
  IoRestorecommerceJobData: ResolverTypeWrapper<IoRestorecommerceJobData>;
  GoogleProtobufAny: ResolverTypeWrapper<GoogleProtobufAny>;
  TodoScalar: ResolverTypeWrapper<Scalars['TodoScalar']>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  IoRestorecommerceJobJobOptions: ResolverTypeWrapper<IoRestorecommerceJobJobOptions>;
  IoRestorecommerceJobJobOptionsPriority: IoRestorecommerceJobJobOptionsPriority;
  IoRestorecommerceJobBackoff: ResolverTypeWrapper<IoRestorecommerceJobBackoff>;
  IoRestorecommerceJobBackoffType: IoRestorecommerceJobBackoffType;
  IoRestorecommerceJobRepeat: ResolverTypeWrapper<IoRestorecommerceJobRepeat>;
  IoRestorecommerceAuthSubject: ResolverTypeWrapper<IoRestorecommerceAuthSubject>;
  IoRestorecommerceAuthRoleAssociation: ResolverTypeWrapper<IoRestorecommerceAuthRoleAssociation>;
  IoRestorecommerceAuthHierarchicalScope: ResolverTypeWrapper<IoRestorecommerceAuthHierarchicalScope>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  IIoRestorecommerceJobJobReadRequest: IIoRestorecommerceJobJobReadRequest;
  IoRestorecommerceJobJobReadRequestSortOrder: IoRestorecommerceJobJobReadRequestSortOrder;
  IIoRestorecommerceJobJobFilter: IIoRestorecommerceJobJobFilter;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  IIoRestorecommerceAuthSubject: IIoRestorecommerceAuthSubject;
  IIoRestorecommerceAuthRoleAssociation: IIoRestorecommerceAuthRoleAssociation;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAuthHierarchicalScope: IIoRestorecommerceAuthHierarchicalScope;
  Mutation: ResolverTypeWrapper<{}>;
  SchedulingMutation: ResolverTypeWrapper<SchedulingMutation>;
  IIoRestorecommerceJobJobList: IIoRestorecommerceJobJobList;
  IIoRestorecommerceJobJob: IIoRestorecommerceJobJob;
  IIoRestorecommerceJobData: IIoRestorecommerceJobData;
  IGoogleProtobufAny: IGoogleProtobufAny;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceJobJobOptions: IIoRestorecommerceJobJobOptions;
  IIoRestorecommerceJobBackoff: IIoRestorecommerceJobBackoff;
  IIoRestorecommerceJobRepeat: IIoRestorecommerceJobRepeat;
  ProtoGoogleProtobufEmpty: ResolverTypeWrapper<ProtoGoogleProtobufEmpty>;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  SchedulingQuery: SchedulingQuery;
  ProtoIoRestorecommerceJobJobList: ProtoIoRestorecommerceJobJobList;
  StatusType: StatusType;
  String: Scalars['String'];
  Int: Scalars['Int'];
  IoRestorecommerceJobJobList: IoRestorecommerceJobJobList;
  IoRestorecommerceJobJob: IoRestorecommerceJobJob;
  IoRestorecommerceJobData: IoRestorecommerceJobData;
  GoogleProtobufAny: GoogleProtobufAny;
  TodoScalar: Scalars['TodoScalar'];
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  Float: Scalars['Float'];
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  IoRestorecommerceJobJobOptions: IoRestorecommerceJobJobOptions;
  IoRestorecommerceJobBackoff: IoRestorecommerceJobBackoff;
  IoRestorecommerceJobRepeat: IoRestorecommerceJobRepeat;
  IoRestorecommerceAuthSubject: IoRestorecommerceAuthSubject;
  IoRestorecommerceAuthRoleAssociation: IoRestorecommerceAuthRoleAssociation;
  IoRestorecommerceAuthHierarchicalScope: IoRestorecommerceAuthHierarchicalScope;
  Boolean: Scalars['Boolean'];
  IIoRestorecommerceJobJobReadRequest: IIoRestorecommerceJobJobReadRequest;
  IIoRestorecommerceJobJobFilter: IIoRestorecommerceJobJobFilter;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  IIoRestorecommerceAuthSubject: IIoRestorecommerceAuthSubject;
  IIoRestorecommerceAuthRoleAssociation: IIoRestorecommerceAuthRoleAssociation;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAuthHierarchicalScope: IIoRestorecommerceAuthHierarchicalScope;
  Mutation: {};
  SchedulingMutation: SchedulingMutation;
  IIoRestorecommerceJobJobList: IIoRestorecommerceJobJobList;
  IIoRestorecommerceJobJob: IIoRestorecommerceJobJob;
  IIoRestorecommerceJobData: IIoRestorecommerceJobData;
  IGoogleProtobufAny: IGoogleProtobufAny;
  Upload: Scalars['Upload'];
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceJobJobOptions: IIoRestorecommerceJobJobOptions;
  IIoRestorecommerceJobBackoff: IIoRestorecommerceJobBackoff;
  IIoRestorecommerceJobRepeat: IIoRestorecommerceJobRepeat;
  ProtoGoogleProtobufEmpty: ProtoGoogleProtobufEmpty;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
}>;

export type QueryResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  scheduling?: Resolver<ResolversTypes['SchedulingQuery'], ParentType, ContextType>;
}>;

export type SchedulingQueryResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['SchedulingQuery'] = ResolversParentTypes['SchedulingQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceJobJobList']>, ParentType, ContextType, RequireFields<SchedulingQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceJobJobListResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceJobJobList'] = ResolversParentTypes['ProtoIoRestorecommerceJobJobList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceJobJobList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StatusTypeResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['StatusType'] = ResolversParentTypes['StatusType']> = ResolversObject<{
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceJobJobListResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['IoRestorecommerceJobJobList'] = ResolversParentTypes['IoRestorecommerceJobJobList']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceJobJob']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAuthSubject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceJobJobResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['IoRestorecommerceJobJob'] = ResolversParentTypes['IoRestorecommerceJobJob']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['IoRestorecommerceJobData']>, ParentType, ContextType>;
  when?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  options?: Resolver<Maybe<ResolversTypes['IoRestorecommerceJobJobOptions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceJobDataResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['IoRestorecommerceJobData'] = ResolversParentTypes['IoRestorecommerceJobData']> = ResolversObject<{
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  subjectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GoogleProtobufAnyResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['GoogleProtobufAny'] = ResolversParentTypes['GoogleProtobufAny']> = ResolversObject<{
  typeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['TodoScalar']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface TodoScalarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TodoScalar'], any> {
  name: 'TodoScalar';
}

export type IoRestorecommerceMetaMetaResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['IoRestorecommerceMetaMeta'] = ResolversParentTypes['IoRestorecommerceMetaMeta']> = ResolversObject<{
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modified?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modifiedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceJobJobOptionsResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['IoRestorecommerceJobJobOptions'] = ResolversParentTypes['IoRestorecommerceJobJobOptions']> = ResolversObject<{
  priority?: Resolver<Maybe<ResolversTypes['IoRestorecommerceJobJobOptionsPriority']>, ParentType, ContextType>;
  attempts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  backoff?: Resolver<Maybe<ResolversTypes['IoRestorecommerceJobBackoff']>, ParentType, ContextType>;
  timeout?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  repeat?: Resolver<Maybe<ResolversTypes['IoRestorecommerceJobRepeat']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceJobJobOptionsPriorityResolvers = { NORMAL: 'undefined', LOW: 10, MEDIUM: -5, HIGH: -10, CRITICAL: -15 };

export type IoRestorecommerceJobBackoffResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['IoRestorecommerceJobBackoff'] = ResolversParentTypes['IoRestorecommerceJobBackoff']> = ResolversObject<{
  delay?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['IoRestorecommerceJobBackoffType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceJobBackoffTypeResolvers = { FIXED: 'undefined', EXPONENTIAL: 1 };

export type IoRestorecommerceJobRepeatResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['IoRestorecommerceJobRepeat'] = ResolversParentTypes['IoRestorecommerceJobRepeat']> = ResolversObject<{
  every?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cron?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthSubjectResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthSubject'] = ResolversParentTypes['IoRestorecommerceAuthSubject']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roleAssociations?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAuthRoleAssociation']>>, ParentType, ContextType>;
  hierarchicalScopes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAuthHierarchicalScope']>>, ParentType, ContextType>;
  unauthenticated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthRoleAssociationResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthRoleAssociation'] = ResolversParentTypes['IoRestorecommerceAuthRoleAssociation']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthHierarchicalScopeResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthHierarchicalScope'] = ResolversParentTypes['IoRestorecommerceAuthHierarchicalScope']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  children?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAuthHierarchicalScope']>>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceJobJobReadRequestSortOrderResolvers = { UNSORTED: 'undefined', ASCENDING: 1, DESCENDING: 2 };

export type MutationResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  scheduling?: Resolver<ResolversTypes['SchedulingMutation'], ParentType, ContextType>;
}>;

export type SchedulingMutationResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['SchedulingMutation'] = ResolversParentTypes['SchedulingMutation']> = ResolversObject<{
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceJobJobList']>, ParentType, ContextType, RequireFields<SchedulingMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<SchedulingMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceJobJobList']>, ParentType, ContextType, RequireFields<SchedulingMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceJobJobList']>, ParentType, ContextType, RequireFields<SchedulingMutationUpsertArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type ProtoGoogleProtobufEmptyResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['ProtoGoogleProtobufEmpty'] = ResolversParentTypes['ProtoGoogleProtobufEmpty']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = SchedulingContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  SchedulingQuery?: SchedulingQueryResolvers<ContextType>;
  ProtoIoRestorecommerceJobJobList?: ProtoIoRestorecommerceJobJobListResolvers<ContextType>;
  StatusType?: StatusTypeResolvers<ContextType>;
  IoRestorecommerceJobJobList?: IoRestorecommerceJobJobListResolvers<ContextType>;
  IoRestorecommerceJobJob?: IoRestorecommerceJobJobResolvers<ContextType>;
  IoRestorecommerceJobData?: IoRestorecommerceJobDataResolvers<ContextType>;
  GoogleProtobufAny?: GoogleProtobufAnyResolvers<ContextType>;
  TodoScalar?: GraphQLScalarType;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
  IoRestorecommerceJobJobOptions?: IoRestorecommerceJobJobOptionsResolvers<ContextType>;
  IoRestorecommerceJobJobOptionsPriority?: IoRestorecommerceJobJobOptionsPriorityResolvers;
  IoRestorecommerceJobBackoff?: IoRestorecommerceJobBackoffResolvers<ContextType>;
  IoRestorecommerceJobBackoffType?: IoRestorecommerceJobBackoffTypeResolvers;
  IoRestorecommerceJobRepeat?: IoRestorecommerceJobRepeatResolvers<ContextType>;
  IoRestorecommerceAuthSubject?: IoRestorecommerceAuthSubjectResolvers<ContextType>;
  IoRestorecommerceAuthRoleAssociation?: IoRestorecommerceAuthRoleAssociationResolvers<ContextType>;
  IoRestorecommerceAuthHierarchicalScope?: IoRestorecommerceAuthHierarchicalScopeResolvers<ContextType>;
  IoRestorecommerceJobJobReadRequestSortOrder?: IoRestorecommerceJobJobReadRequestSortOrderResolvers;
  Mutation?: MutationResolvers<ContextType>;
  SchedulingMutation?: SchedulingMutationResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  ProtoGoogleProtobufEmpty?: ProtoGoogleProtobufEmptyResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = SchedulingContext> = Resolvers<ContextType>;
