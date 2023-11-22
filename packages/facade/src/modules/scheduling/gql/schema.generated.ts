import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { SchedulingContext } from '../interfaces.js';
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
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  GoogleProtobufAnyValue: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  IDateTime: { input: any; output: any; }
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
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceJobJobResponse = {
  __typename?: 'IoRestorecommerceJobJobResponse';
  payload?: Maybe<IoRestorecommerceJobJob>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceJobJob = {
  __typename?: 'IoRestorecommerceJobJob';
  id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  data?: Maybe<IoRestorecommerceJobData>;
  queueName?: Maybe<Scalars['String']['output']>;
  when?: Maybe<Scalars['String']['output']>;
  options?: Maybe<IoRestorecommerceJobJobOptions>;
};

export type IoRestorecommerceJobData = {
  __typename?: 'IoRestorecommerceJobData';
  payload?: Maybe<GoogleProtobufAny>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  subjectId?: Maybe<Scalars['String']['output']>;
};

export type GoogleProtobufAny = {
  __typename?: 'GoogleProtobufAny';
  typeUrl?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['GoogleProtobufAnyValue']['output']>;
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

export type IoRestorecommerceJobJobOptions = {
  __typename?: 'IoRestorecommerceJobJobOptions';
  priority?: Maybe<IoRestorecommerceJobJobOptionsPriority>;
  attempts?: Maybe<Scalars['Int']['output']>;
  backoff?: Maybe<IoRestorecommerceJobBackoff>;
  timeout?: Maybe<Scalars['Int']['output']>;
  repeat?: Maybe<IoRestorecommerceJobRepeat>;
  jobId?: Maybe<Scalars['String']['output']>;
  removeOnComplete?: Maybe<Scalars['Boolean']['output']>;
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
  delay?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<IoRestorecommerceJobBackoffType>;
};

export enum IoRestorecommerceJobBackoffType {
  Fixed = 0,
  Exponential = 1
}

export type IoRestorecommerceJobRepeat = {
  __typename?: 'IoRestorecommerceJobRepeat';
  every?: Maybe<Scalars['Int']['output']>;
  cron?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
  jobId?: Maybe<Scalars['String']['output']>;
  tz?: Maybe<Scalars['String']['output']>;
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

export type IIoRestorecommerceJobJobReadRequest = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<IoRestorecommerceJobJobReadRequestSortOrder>;
  filter?: InputMaybe<IIoRestorecommerceJobJobFilter>;
  fields?: InputMaybe<Array<IIoRestorecommerceResourcebaseFieldFilter>>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export enum IoRestorecommerceJobJobReadRequestSortOrder {
  Unsorted = 0,
  Ascending = 1,
  Descending = 2
}

export type IIoRestorecommerceJobJobFilter = {
  jobIds?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceResourcebaseFieldFilter = {
  name?: InputMaybe<Scalars['String']['input']>;
  include?: InputMaybe<Scalars['Boolean']['input']>;
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
  items?: InputMaybe<Array<IIoRestorecommerceJobJob>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceJobJob = {
  id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<IIoRestorecommerceJobData>;
  queueName?: InputMaybe<Scalars['String']['input']>;
  when?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<IIoRestorecommerceJobJobOptions>;
};

export type IIoRestorecommerceJobData = {
  payload?: InputMaybe<IGoogleProtobufAny>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  subjectId?: InputMaybe<Scalars['String']['input']>;
};

export type IGoogleProtobufAny = {
  typeUrl?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['GoogleProtobufAnyValue']['input']>;
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

export type IIoRestorecommerceJobJobOptions = {
  priority?: InputMaybe<IoRestorecommerceJobJobOptionsPriority>;
  attempts?: InputMaybe<Scalars['Int']['input']>;
  backoff?: InputMaybe<IIoRestorecommerceJobBackoff>;
  timeout?: InputMaybe<Scalars['Int']['input']>;
  repeat?: InputMaybe<IIoRestorecommerceJobRepeat>;
  jobId?: InputMaybe<Scalars['String']['input']>;
  removeOnComplete?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IIoRestorecommerceJobBackoff = {
  delay?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<IoRestorecommerceJobBackoffType>;
};

export type IIoRestorecommerceJobRepeat = {
  every?: InputMaybe<Scalars['Int']['input']>;
  cron?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  jobId?: InputMaybe<Scalars['String']['input']>;
  tz?: InputMaybe<Scalars['String']['input']>;
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
  SchedulingQuery: ResolverTypeWrapper<SchedulingQuery>;
  SchedulingJobQuery: ResolverTypeWrapper<SchedulingJobQuery>;
  ProtoIoRestorecommerceJobJobListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceJobJobListResponse>;
  IoRestorecommerceJobJobListResponse: ResolverTypeWrapper<IoRestorecommerceJobJobListResponse>;
  IoRestorecommerceJobJobResponse: ResolverTypeWrapper<IoRestorecommerceJobJobResponse>;
  IoRestorecommerceJobJob: ResolverTypeWrapper<IoRestorecommerceJobJob>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  IoRestorecommerceJobData: ResolverTypeWrapper<IoRestorecommerceJobData>;
  GoogleProtobufAny: ResolverTypeWrapper<GoogleProtobufAny>;
  GoogleProtobufAnyValue: ResolverTypeWrapper<Scalars['GoogleProtobufAnyValue']['output']>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  IoRestorecommerceJobJobOptions: ResolverTypeWrapper<IoRestorecommerceJobJobOptions>;
  IoRestorecommerceJobJobOptionsPriority: IoRestorecommerceJobJobOptionsPriority;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  IoRestorecommerceJobBackoff: ResolverTypeWrapper<IoRestorecommerceJobBackoff>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  IoRestorecommerceJobBackoffType: IoRestorecommerceJobBackoffType;
  IoRestorecommerceJobRepeat: ResolverTypeWrapper<IoRestorecommerceJobRepeat>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
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
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IDateTime: ResolverTypeWrapper<Scalars['IDateTime']['output']>;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceJobJobOptions: IIoRestorecommerceJobJobOptions;
  IIoRestorecommerceJobBackoff: IIoRestorecommerceJobBackoff;
  IIoRestorecommerceJobRepeat: IIoRestorecommerceJobRepeat;
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
  SchedulingQuery: SchedulingQuery;
  SchedulingJobQuery: SchedulingJobQuery;
  ProtoIoRestorecommerceJobJobListResponse: ProtoIoRestorecommerceJobJobListResponse;
  IoRestorecommerceJobJobListResponse: IoRestorecommerceJobJobListResponse;
  IoRestorecommerceJobJobResponse: IoRestorecommerceJobJobResponse;
  IoRestorecommerceJobJob: IoRestorecommerceJobJob;
  String: Scalars['String']['output'];
  IoRestorecommerceJobData: IoRestorecommerceJobData;
  GoogleProtobufAny: GoogleProtobufAny;
  GoogleProtobufAnyValue: Scalars['GoogleProtobufAnyValue']['output'];
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  DateTime: Scalars['DateTime']['output'];
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  IoRestorecommerceJobJobOptions: IoRestorecommerceJobJobOptions;
  Int: Scalars['Int']['output'];
  IoRestorecommerceJobBackoff: IoRestorecommerceJobBackoff;
  Float: Scalars['Float']['output'];
  IoRestorecommerceJobRepeat: IoRestorecommerceJobRepeat;
  Boolean: Scalars['Boolean']['output'];
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
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IDateTime: Scalars['IDateTime']['output'];
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceJobJobOptions: IIoRestorecommerceJobJobOptions;
  IIoRestorecommerceJobBackoff: IIoRestorecommerceJobBackoff;
  IIoRestorecommerceJobRepeat: IIoRestorecommerceJobRepeat;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ProtoIoRestorecommerceResourcebaseDeleteResponse;
  IoRestorecommerceResourcebaseDeleteResponse: IoRestorecommerceResourcebaseDeleteResponse;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  Subscription: {};
  SubscriptionOutput: SubscriptionOutput;
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
  queueName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  when?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  options?: Resolver<Maybe<ResolversTypes['IoRestorecommerceJobJobOptions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceJobDataResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['IoRestorecommerceJobData'] = ResolversParentTypes['IoRestorecommerceJobData']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  subjectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GoogleProtobufAnyResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['GoogleProtobufAny'] = ResolversParentTypes['GoogleProtobufAny']> = ResolversObject<{
  typeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['GoogleProtobufAnyValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface GoogleProtobufAnyValueScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GoogleProtobufAnyValue'], any> {
  name: 'GoogleProtobufAnyValue';
}

export type IoRestorecommerceMetaMetaResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['IoRestorecommerceMetaMeta'] = ResolversParentTypes['IoRestorecommerceMetaMeta']> = ResolversObject<{
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

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
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

export type IoRestorecommerceJobJobOptionsPriorityResolvers = { NORMAL: 0, LOW: 10, MEDIUM: -5, HIGH: -10, CRITICAL: -15 };

export type IoRestorecommerceJobBackoffResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['IoRestorecommerceJobBackoff'] = ResolversParentTypes['IoRestorecommerceJobBackoff']> = ResolversObject<{
  delay?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['IoRestorecommerceJobBackoffType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceJobBackoffTypeResolvers = { FIXED: 0, EXPONENTIAL: 1 };

export type IoRestorecommerceJobRepeatResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['IoRestorecommerceJobRepeat'] = ResolversParentTypes['IoRestorecommerceJobRepeat']> = ResolversObject<{
  every?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cron?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  jobId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tz?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type IoRestorecommerceJobJobReadRequestSortOrderResolvers = { UNSORTED: 0, ASCENDING: 1, DESCENDING: 2 };

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

export interface IDateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IDateTime'], any> {
  name: 'IDateTime';
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

export type SubscriptionResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  orderingOrders?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "orderingOrders", ParentType, ContextType, Partial<SubscriptionOrderingOrdersArgs>>;
  catalogProducts?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "catalogProducts", ParentType, ContextType, Partial<SubscriptionCatalogProductsArgs>>;
  invoicingInvoices?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "invoicingInvoices", ParentType, ContextType, Partial<SubscriptionInvoicingInvoicesArgs>>;
  fulfillmentFulfillments?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "fulfillmentFulfillments", ParentType, ContextType, Partial<SubscriptionFulfillmentFulfillmentsArgs>>;
  fulfillmentFulfillmentCouriers?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "fulfillmentFulfillmentCouriers", ParentType, ContextType, Partial<SubscriptionFulfillmentFulfillmentCouriersArgs>>;
  fulfillmentFulfillment_products?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "fulfillmentFulfillment_products", ParentType, ContextType, Partial<SubscriptionFulfillmentFulfillment_ProductsArgs>>;
}>;

export type SubscriptionOutputResolvers<ContextType = SchedulingContext, ParentType extends ResolversParentTypes['SubscriptionOutput'] = ResolversParentTypes['SubscriptionOutput']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  GoogleProtobufAnyValue?: GraphQLScalarType;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
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
  IDateTime?: GraphQLScalarType;
  ProtoIoRestorecommerceResourcebaseDeleteResponse?: ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  IoRestorecommerceResourcebaseDeleteResponse?: IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  SubscriptionOutput?: SubscriptionOutputResolvers<ContextType>;
}>;

