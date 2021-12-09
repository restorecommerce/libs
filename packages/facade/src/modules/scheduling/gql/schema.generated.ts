import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { SchedulingContext } from '../interfaces';
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
  scheduling: SchedulingQuery;
};

export type SchedulingQuery = {
  __typename?: 'SchedulingQuery';
  job: SchedulingJobQuery;
};

export type SchedulingJobQuery = {
  __typename?: 'SchedulingJobQuery';
  Read?: Maybe<ProtoIoRestorecommerceJobJobListResponse>;
};


export type SchedulingJobQueryReadArgs = {
  input: IIoRestorecommerceJobJobReadRequest;
};

export type ProtoIoRestorecommerceJobJobListResponse = {
  __typename?: 'ProtoIoRestorecommerceJobJobListResponse';
  details?: Maybe<IoRestorecommerceJobJobListResponse>;
};

export type IoRestorecommerceJobJobListResponse = {
  __typename?: 'IoRestorecommerceJobJobListResponse';
  items?: Maybe<Array<IoRestorecommerceJobJobResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceJobJobResponse = {
  __typename?: 'IoRestorecommerceJobJobResponse';
  payload?: Maybe<IoRestorecommerceJobJob>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
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

export type IoRestorecommerceJobJobOptions = {
  __typename?: 'IoRestorecommerceJobJobOptions';
  priority?: Maybe<IoRestorecommerceJobJobOptionsPriority>;
  attempts?: Maybe<Scalars['Int']>;
  backoff?: Maybe<IoRestorecommerceJobBackoff>;
  timeout?: Maybe<Scalars['Int']>;
  repeat?: Maybe<IoRestorecommerceJobRepeat>;
  jobId?: Maybe<Scalars['String']>;
  removeOnComplete?: Maybe<Scalars['Boolean']>;
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
  jobId?: Maybe<Scalars['String']>;
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

export type IIoRestorecommerceJobJobReadRequest = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<IoRestorecommerceJobJobReadRequestSortOrder>;
  filter?: Maybe<IIoRestorecommerceJobJobFilter>;
  field?: Maybe<Array<IIoRestorecommerceResourcebaseFieldFilter>>;
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

export type Mutation = {
  __typename?: 'Mutation';
  scheduling: SchedulingMutation;
};

export type SchedulingMutation = {
  __typename?: 'SchedulingMutation';
  job: SchedulingJobMutation;
};

export type SchedulingJobMutation = {
  __typename?: 'SchedulingJobMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceJobJobListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type SchedulingJobMutationMutateArgs = {
  input: IIoRestorecommerceJobJobList;
};


export type SchedulingJobMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceJobJobList = {
  items?: Maybe<Array<IIoRestorecommerceJobJob>>;
  totalCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<ModeType>;
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

export type IIoRestorecommerceJobJobOptions = {
  priority?: Maybe<IoRestorecommerceJobJobOptionsPriority>;
  attempts?: Maybe<Scalars['Int']>;
  backoff?: Maybe<IIoRestorecommerceJobBackoff>;
  timeout?: Maybe<Scalars['Int']>;
  repeat?: Maybe<IIoRestorecommerceJobRepeat>;
  jobId?: Maybe<Scalars['String']>;
  removeOnComplete?: Maybe<Scalars['Boolean']>;
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
  jobId?: Maybe<Scalars['String']>;
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
  collection?: Maybe<Scalars['Boolean']>;
  ids?: Maybe<Array<Scalars['String']>>;
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
  SchedulingJobQuery: ResolverTypeWrapper<SchedulingJobQuery>;
  ProtoIoRestorecommerceJobJobListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceJobJobListResponse>;
  IoRestorecommerceJobJobListResponse: ResolverTypeWrapper<IoRestorecommerceJobJobListResponse>;
  IoRestorecommerceJobJobResponse: ResolverTypeWrapper<IoRestorecommerceJobJobResponse>;
  IoRestorecommerceJobJob: ResolverTypeWrapper<IoRestorecommerceJobJob>;
  String: ResolverTypeWrapper<Scalars['String']>;
  IoRestorecommerceJobData: ResolverTypeWrapper<IoRestorecommerceJobData>;
  GoogleProtobufAny: ResolverTypeWrapper<GoogleProtobufAny>;
  TodoScalar: ResolverTypeWrapper<Scalars['TodoScalar']>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  IoRestorecommerceAttributeAttributeObj: ResolverTypeWrapper<IoRestorecommerceAttributeAttributeObj>;
  IoRestorecommerceJobJobOptions: ResolverTypeWrapper<IoRestorecommerceJobJobOptions>;
  IoRestorecommerceJobJobOptionsPriority: IoRestorecommerceJobJobOptionsPriority;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IoRestorecommerceJobBackoff: ResolverTypeWrapper<IoRestorecommerceJobBackoff>;
  IoRestorecommerceJobBackoffType: IoRestorecommerceJobBackoffType;
  IoRestorecommerceJobRepeat: ResolverTypeWrapper<IoRestorecommerceJobRepeat>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  IoRestorecommerceStatusStatus: ResolverTypeWrapper<IoRestorecommerceStatusStatus>;
  IoRestorecommerceStatusOperationStatus: ResolverTypeWrapper<IoRestorecommerceStatusOperationStatus>;
  IIoRestorecommerceJobJobReadRequest: IIoRestorecommerceJobJobReadRequest;
  IoRestorecommerceJobJobReadRequestSortOrder: IoRestorecommerceJobJobReadRequestSortOrder;
  IIoRestorecommerceJobJobFilter: IIoRestorecommerceJobJobFilter;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  Mutation: ResolverTypeWrapper<{}>;
  SchedulingMutation: ResolverTypeWrapper<SchedulingMutation>;
  SchedulingJobMutation: ResolverTypeWrapper<SchedulingJobMutation>;
  IIoRestorecommerceJobJobList: IIoRestorecommerceJobJobList;
  IIoRestorecommerceJobJob: IIoRestorecommerceJobJob;
  IIoRestorecommerceJobData: IIoRestorecommerceJobData;
  IGoogleProtobufAny: IGoogleProtobufAny;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAttributeAttributeObj: IIoRestorecommerceAttributeAttributeObj;
  IIoRestorecommerceJobJobOptions: IIoRestorecommerceJobJobOptions;
  IIoRestorecommerceJobBackoff: IIoRestorecommerceJobBackoff;
  IIoRestorecommerceJobRepeat: IIoRestorecommerceJobRepeat;
  ModeType: ModeType;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  IoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<IoRestorecommerceResourcebaseDeleteResponse>;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  SchedulingQuery: SchedulingQuery;
  SchedulingJobQuery: SchedulingJobQuery;
  ProtoIoRestorecommerceJobJobListResponse: ProtoIoRestorecommerceJobJobListResponse;
  IoRestorecommerceJobJobListResponse: IoRestorecommerceJobJobListResponse;
  IoRestorecommerceJobJobResponse: IoRestorecommerceJobJobResponse;
  IoRestorecommerceJobJob: IoRestorecommerceJobJob;
  String: Scalars['String'];
  IoRestorecommerceJobData: IoRestorecommerceJobData;
  GoogleProtobufAny: GoogleProtobufAny;
  TodoScalar: Scalars['TodoScalar'];
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  Float: Scalars['Float'];
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  IoRestorecommerceAttributeAttributeObj: IoRestorecommerceAttributeAttributeObj;
  IoRestorecommerceJobJobOptions: IoRestorecommerceJobJobOptions;
  Int: Scalars['Int'];
  IoRestorecommerceJobBackoff: IoRestorecommerceJobBackoff;
  IoRestorecommerceJobRepeat: IoRestorecommerceJobRepeat;
  Boolean: Scalars['Boolean'];
  IoRestorecommerceStatusStatus: IoRestorecommerceStatusStatus;
  IoRestorecommerceStatusOperationStatus: IoRestorecommerceStatusOperationStatus;
  IIoRestorecommerceJobJobReadRequest: IIoRestorecommerceJobJobReadRequest;
  IIoRestorecommerceJobJobFilter: IIoRestorecommerceJobJobFilter;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  Mutation: {};
  SchedulingMutation: SchedulingMutation;
  SchedulingJobMutation: SchedulingJobMutation;
  IIoRestorecommerceJobJobList: IIoRestorecommerceJobJobList;
  IIoRestorecommerceJobJob: IIoRestorecommerceJobJob;
  IIoRestorecommerceJobData: IIoRestorecommerceJobData;
  IGoogleProtobufAny: IGoogleProtobufAny;
  Upload: Scalars['Upload'];
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAttributeAttributeObj: IIoRestorecommerceAttributeAttributeObj;
  IIoRestorecommerceJobJobOptions: IIoRestorecommerceJobJobOptions;
  IIoRestorecommerceJobBackoff: IIoRestorecommerceJobBackoff;
  IIoRestorecommerceJobRepeat: IIoRestorecommerceJobRepeat;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ProtoIoRestorecommerceResourcebaseDeleteResponse;
  IoRestorecommerceResourcebaseDeleteResponse: IoRestorecommerceResourcebaseDeleteResponse;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
}>;

export type QueryResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  scheduling?: Resolver<ResolversTypes['SchedulingQuery'], ParentType, ContextType>;
}>;

export type SchedulingQueryResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['SchedulingQuery'] = ResolversParentTypes['SchedulingQuery']> = ResolversObject<{
  job?: Resolver<ResolversTypes['SchedulingJobQuery'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SchedulingJobQueryResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['SchedulingJobQuery'] = ResolversParentTypes['SchedulingJobQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceJobJobListResponse']>, ParentType, ContextType, RequireFields<SchedulingJobQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceJobJobListResponseResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceJobJobListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceJobJobListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceJobJobListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceJobJobListResponseResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['IoRestorecommerceJobJobListResponse'] = ResolversParentTypes['IoRestorecommerceJobJobListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceJobJobResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceJobJobResponseResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['IoRestorecommerceJobJobResponse'] = ResolversParentTypes['IoRestorecommerceJobJobResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceJobJob']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
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
  acl?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttributeObj']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeObjResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttributeObj'] = ResolversParentTypes['IoRestorecommerceAttributeAttributeObj']> = ResolversObject<{
  attribute?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceJobJobOptionsResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['IoRestorecommerceJobJobOptions'] = ResolversParentTypes['IoRestorecommerceJobJobOptions']> = ResolversObject<{
  priority?: Resolver<Maybe<ResolversTypes['IoRestorecommerceJobJobOptionsPriority']>, ParentType, ContextType>;
  attempts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  backoff?: Resolver<Maybe<ResolversTypes['IoRestorecommerceJobBackoff']>, ParentType, ContextType>;
  timeout?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  repeat?: Resolver<Maybe<ResolversTypes['IoRestorecommerceJobRepeat']>, ParentType, ContextType>;
  jobId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  removeOnComplete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
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
  jobId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusStatusResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusStatus'] = ResolversParentTypes['IoRestorecommerceStatusStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusOperationStatusResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusOperationStatus'] = ResolversParentTypes['IoRestorecommerceStatusOperationStatus']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceJobJobReadRequestSortOrderResolvers = { UNSORTED: 'undefined', ASCENDING: 1, DESCENDING: 2 };

export type MutationResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  scheduling?: Resolver<ResolversTypes['SchedulingMutation'], ParentType, ContextType>;
}>;

export type SchedulingMutationResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['SchedulingMutation'] = ResolversParentTypes['SchedulingMutation']> = ResolversObject<{
  job?: Resolver<ResolversTypes['SchedulingJobMutation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SchedulingJobMutationResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['SchedulingJobMutation'] = ResolversParentTypes['SchedulingJobMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceJobJobListResponse']>, ParentType, ContextType, RequireFields<SchedulingJobMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<SchedulingJobMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  status?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceStatusStatus']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = SchedulingContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  SchedulingQuery?: SchedulingQueryResolvers<ContextType>;
  SchedulingJobQuery?: SchedulingJobQueryResolvers<ContextType>;
  ProtoIoRestorecommerceJobJobListResponse?: ProtoIoRestorecommerceJobJobListResponseResolvers<ContextType>;
  IoRestorecommerceJobJobListResponse?: IoRestorecommerceJobJobListResponseResolvers<ContextType>;
  IoRestorecommerceJobJobResponse?: IoRestorecommerceJobJobResponseResolvers<ContextType>;
  IoRestorecommerceJobJob?: IoRestorecommerceJobJobResolvers<ContextType>;
  IoRestorecommerceJobData?: IoRestorecommerceJobDataResolvers<ContextType>;
  GoogleProtobufAny?: GoogleProtobufAnyResolvers<ContextType>;
  TodoScalar?: GraphQLScalarType;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
  IoRestorecommerceAttributeAttributeObj?: IoRestorecommerceAttributeAttributeObjResolvers<ContextType>;
  IoRestorecommerceJobJobOptions?: IoRestorecommerceJobJobOptionsResolvers<ContextType>;
  IoRestorecommerceJobJobOptionsPriority?: IoRestorecommerceJobJobOptionsPriorityResolvers;
  IoRestorecommerceJobBackoff?: IoRestorecommerceJobBackoffResolvers<ContextType>;
  IoRestorecommerceJobBackoffType?: IoRestorecommerceJobBackoffTypeResolvers;
  IoRestorecommerceJobRepeat?: IoRestorecommerceJobRepeatResolvers<ContextType>;
  IoRestorecommerceStatusStatus?: IoRestorecommerceStatusStatusResolvers<ContextType>;
  IoRestorecommerceStatusOperationStatus?: IoRestorecommerceStatusOperationStatusResolvers<ContextType>;
  IoRestorecommerceJobJobReadRequestSortOrder?: IoRestorecommerceJobJobReadRequestSortOrderResolvers;
  Mutation?: MutationResolvers<ContextType>;
  SchedulingMutation?: SchedulingMutationResolvers<ContextType>;
  SchedulingJobMutation?: SchedulingJobMutationResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  ProtoIoRestorecommerceResourcebaseDeleteResponse?: ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  IoRestorecommerceResourcebaseDeleteResponse?: IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = SchedulingContext> = Resolvers<ContextType>;
