import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { AccessControlContext } from '../interfaces';
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
  access_control: AccessControlQuery;
};

export type AccessControlQuery = {
  __typename?: 'AccessControlQuery';
  access_control: AccessControlAccessControlQuery;
  policy: AccessControlPolicyQuery;
  rule: AccessControlRuleQuery;
  policy_set: AccessControlPolicySetQuery;
};

export type AccessControlAccessControlQuery = {
  __typename?: 'AccessControlAccessControlQuery';
  IsAllowed?: Maybe<ProtoIoRestorecommerceAccessControlResponse>;
  WhatIsAllowed?: Maybe<ProtoIoRestorecommerceAccessControlReverseQuery>;
};


export type AccessControlAccessControlQueryIsAllowedArgs = {
  input: IIoRestorecommerceAccessControlRequest;
};


export type AccessControlAccessControlQueryWhatIsAllowedArgs = {
  input: IIoRestorecommerceAccessControlRequest;
};

export type ProtoIoRestorecommerceAccessControlResponse = {
  __typename?: 'ProtoIoRestorecommerceAccessControlResponse';
  operationStatus: StatusType;
  details?: Maybe<IoRestorecommerceAccessControlResponse>;
};

/** Objects with error returned for GraphQL operations */
export type StatusType = {
  __typename?: 'StatusType';
  /** Status code */
  code: Scalars['Int'];
  /** Status message description */
  message?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceAccessControlResponse = {
  __typename?: 'IoRestorecommerceAccessControlResponse';
  decision?: Maybe<IoRestorecommerceAccessControlResponseDecision>;
  obligation?: Maybe<Scalars['String']>;
  evaluationCacheable?: Maybe<Scalars['Boolean']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export enum IoRestorecommerceAccessControlResponseDecision {
  Permit = 0,
  Deny = 1,
  NotApplicable = 2,
  Indeterminate = 3
}

export type IoRestorecommerceStatusOperationStatus = {
  __typename?: 'IoRestorecommerceStatusOperationStatus';
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceAccessControlRequest = {
  target?: Maybe<IIoRestorecommerceRuleTarget>;
  context?: Maybe<IIoRestorecommerceAccessControlContext>;
};

export type IIoRestorecommerceRuleTarget = {
  subject?: Maybe<Array<IIoRestorecommerceAttributeAttribute>>;
  resources?: Maybe<Array<IIoRestorecommerceAttributeAttribute>>;
  action?: Maybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type IIoRestorecommerceAttributeAttribute = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceAccessControlContext = {
  subject?: Maybe<IGoogleProtobufAny>;
  resources?: Maybe<Array<IGoogleProtobufAny>>;
  security?: Maybe<IGoogleProtobufAny>;
};

export type IGoogleProtobufAny = {
  typeUrl?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Upload']>;
};


export type ProtoIoRestorecommerceAccessControlReverseQuery = {
  __typename?: 'ProtoIoRestorecommerceAccessControlReverseQuery';
  operationStatus: StatusType;
  details?: Maybe<IoRestorecommerceAccessControlReverseQuery>;
};

export type IoRestorecommerceAccessControlReverseQuery = {
  __typename?: 'IoRestorecommerceAccessControlReverseQuery';
  policySets?: Maybe<Array<IoRestorecommercePolicySetPolicySetRq>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommercePolicySetPolicySetRq = {
  __typename?: 'IoRestorecommercePolicySetPolicySetRQ';
  id?: Maybe<Scalars['String']>;
  target?: Maybe<IoRestorecommerceRuleTarget>;
  combiningAlgorithm?: Maybe<Scalars['String']>;
  policies?: Maybe<Array<IoRestorecommercePolicyPolicyRq>>;
  effect?: Maybe<IoRestorecommerceRuleEffect>;
};

export type IoRestorecommerceRuleTarget = {
  __typename?: 'IoRestorecommerceRuleTarget';
  subject?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  resources?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  action?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
};

export type IoRestorecommerceAttributeAttribute = {
  __typename?: 'IoRestorecommerceAttributeAttribute';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type IoRestorecommercePolicyPolicyRq = {
  __typename?: 'IoRestorecommercePolicyPolicyRQ';
  id?: Maybe<Scalars['String']>;
  target?: Maybe<IoRestorecommerceRuleTarget>;
  combiningAlgorithm?: Maybe<Scalars['String']>;
  rules?: Maybe<Array<IoRestorecommerceRuleRuleRq>>;
  effect?: Maybe<IoRestorecommerceRuleEffect>;
  hasRules?: Maybe<Scalars['Boolean']>;
  evaluationCacheable?: Maybe<Scalars['Boolean']>;
};

export type IoRestorecommerceRuleRuleRq = {
  __typename?: 'IoRestorecommerceRuleRuleRQ';
  id?: Maybe<Scalars['String']>;
  target?: Maybe<IoRestorecommerceRuleTarget>;
  effect?: Maybe<IoRestorecommerceRuleEffect>;
  condition?: Maybe<Scalars['String']>;
  contextQuery?: Maybe<IoRestorecommerceRuleContextQuery>;
  evaluationCacheable?: Maybe<Scalars['Boolean']>;
};

export enum IoRestorecommerceRuleEffect {
  Permit = 0,
  Deny = 1
}

export type IoRestorecommerceRuleContextQuery = {
  __typename?: 'IoRestorecommerceRuleContextQuery';
  filters?: Maybe<Array<IoRestorecommerceRuleContextQueryFilter>>;
  query?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceRuleContextQueryFilter = {
  __typename?: 'IoRestorecommerceRuleContextQueryFilter';
  field?: Maybe<Scalars['String']>;
  operation?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AccessControlPolicyQuery = {
  __typename?: 'AccessControlPolicyQuery';
  Read?: Maybe<ProtoIoRestorecommercePolicyPolicyListResponse>;
};


export type AccessControlPolicyQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommercePolicyPolicyListResponse = {
  __typename?: 'ProtoIoRestorecommercePolicyPolicyListResponse';
  operationStatus: StatusType;
  details?: Maybe<IoRestorecommercePolicyPolicyListResponse>;
};

export type IoRestorecommercePolicyPolicyListResponse = {
  __typename?: 'IoRestorecommercePolicyPolicyListResponse';
  items?: Maybe<Array<IoRestorecommercePolicyPolicyResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommercePolicyPolicyResponse = {
  __typename?: 'IoRestorecommercePolicyPolicyResponse';
  payload?: Maybe<IoRestorecommercePolicyPolicy>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommercePolicyPolicy = {
  __typename?: 'IoRestorecommercePolicyPolicy';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  rules?: Maybe<Array<Scalars['String']>>;
  target?: Maybe<IoRestorecommerceRuleTarget>;
  effect?: Maybe<IoRestorecommerceRuleEffect>;
  combiningAlgorithm?: Maybe<Scalars['String']>;
  evaluationCacheable?: Maybe<Scalars['Boolean']>;
};

export type IoRestorecommerceMetaMeta = {
  __typename?: 'IoRestorecommerceMetaMeta';
  created?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['Float']>;
  modifiedBy?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
};

export type IoRestorecommerceStatusStatus = {
  __typename?: 'IoRestorecommerceStatusStatus';
  id?: Maybe<Scalars['String']>;
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

export type AccessControlRuleQuery = {
  __typename?: 'AccessControlRuleQuery';
  Read?: Maybe<ProtoIoRestorecommerceRuleRuleListResponse>;
};


export type AccessControlRuleQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceRuleRuleListResponse = {
  __typename?: 'ProtoIoRestorecommerceRuleRuleListResponse';
  operationStatus: StatusType;
  details?: Maybe<IoRestorecommerceRuleRuleListResponse>;
};

export type IoRestorecommerceRuleRuleListResponse = {
  __typename?: 'IoRestorecommerceRuleRuleListResponse';
  items?: Maybe<Array<IoRestorecommerceRuleRuleResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceRuleRuleResponse = {
  __typename?: 'IoRestorecommerceRuleRuleResponse';
  payload?: Maybe<IoRestorecommerceRuleRule>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceRuleRule = {
  __typename?: 'IoRestorecommerceRuleRule';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  target?: Maybe<IoRestorecommerceRuleTarget>;
  contextQuery?: Maybe<IoRestorecommerceRuleContextQuery>;
  condition?: Maybe<Scalars['String']>;
  effect?: Maybe<IoRestorecommerceRuleEffect>;
  evaluationCacheable?: Maybe<Scalars['Boolean']>;
};

export type AccessControlPolicySetQuery = {
  __typename?: 'AccessControlPolicySetQuery';
  Read?: Maybe<ProtoIoRestorecommercePolicySetPolicySetListResponse>;
};


export type AccessControlPolicySetQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommercePolicySetPolicySetListResponse = {
  __typename?: 'ProtoIoRestorecommercePolicySetPolicySetListResponse';
  operationStatus: StatusType;
  details?: Maybe<IoRestorecommercePolicySetPolicySetListResponse>;
};

export type IoRestorecommercePolicySetPolicySetListResponse = {
  __typename?: 'IoRestorecommercePolicySetPolicySetListResponse';
  items?: Maybe<Array<IoRestorecommercePolicySetPolicySetResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommercePolicySetPolicySetResponse = {
  __typename?: 'IoRestorecommercePolicySetPolicySetResponse';
  payload?: Maybe<IoRestorecommercePolicySetPolicySet>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommercePolicySetPolicySet = {
  __typename?: 'IoRestorecommercePolicySetPolicySet';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  target?: Maybe<IoRestorecommerceRuleTarget>;
  combiningAlgorithm?: Maybe<Scalars['String']>;
  policies?: Maybe<Array<Scalars['String']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  access_control: AccessControlMutation;
};

export type AccessControlMutation = {
  __typename?: 'AccessControlMutation';
  policy: AccessControlPolicyMutation;
  rule: AccessControlRuleMutation;
  policy_set: AccessControlPolicySetMutation;
};

export type AccessControlPolicyMutation = {
  __typename?: 'AccessControlPolicyMutation';
  Mutate?: Maybe<ProtoIoRestorecommercePolicyPolicyListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type AccessControlPolicyMutationMutateArgs = {
  input: IIoRestorecommercePolicyPolicyList;
};


export type AccessControlPolicyMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommercePolicyPolicyList = {
  items?: Maybe<Array<IIoRestorecommercePolicyPolicy>>;
  totalCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<ModeType>;
};

export type IIoRestorecommercePolicyPolicy = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  rules?: Maybe<Array<Scalars['String']>>;
  target?: Maybe<IIoRestorecommerceRuleTarget>;
  effect?: Maybe<IoRestorecommerceRuleEffect>;
  combiningAlgorithm?: Maybe<Scalars['String']>;
  evaluationCacheable?: Maybe<Scalars['Boolean']>;
};

export type IIoRestorecommerceMetaMeta = {
  created?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['Float']>;
  modifiedBy?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<IIoRestorecommerceAttributeAttribute>>;
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

export type AccessControlRuleMutation = {
  __typename?: 'AccessControlRuleMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceRuleRuleListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type AccessControlRuleMutationMutateArgs = {
  input: IIoRestorecommerceRuleRuleList;
};


export type AccessControlRuleMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceRuleRuleList = {
  items?: Maybe<Array<IIoRestorecommerceRuleRule>>;
  totalCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<ModeType>;
};

export type IIoRestorecommerceRuleRule = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  target?: Maybe<IIoRestorecommerceRuleTarget>;
  contextQuery?: Maybe<IIoRestorecommerceRuleContextQuery>;
  condition?: Maybe<Scalars['String']>;
  effect?: Maybe<IoRestorecommerceRuleEffect>;
  evaluationCacheable?: Maybe<Scalars['Boolean']>;
};

export type IIoRestorecommerceRuleContextQuery = {
  filters?: Maybe<Array<IIoRestorecommerceRuleContextQueryFilter>>;
  query?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceRuleContextQueryFilter = {
  field?: Maybe<Scalars['String']>;
  operation?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AccessControlPolicySetMutation = {
  __typename?: 'AccessControlPolicySetMutation';
  Mutate?: Maybe<ProtoIoRestorecommercePolicySetPolicySetListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type AccessControlPolicySetMutationMutateArgs = {
  input: IIoRestorecommercePolicySetPolicySetList;
};


export type AccessControlPolicySetMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommercePolicySetPolicySetList = {
  items?: Maybe<Array<IIoRestorecommercePolicySetPolicySet>>;
  totalCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<ModeType>;
};

export type IIoRestorecommercePolicySetPolicySet = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  target?: Maybe<IIoRestorecommerceRuleTarget>;
  combiningAlgorithm?: Maybe<Scalars['String']>;
  policies?: Maybe<Array<Scalars['String']>>;
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
  AccessControlQuery: ResolverTypeWrapper<AccessControlQuery>;
  AccessControlAccessControlQuery: ResolverTypeWrapper<AccessControlAccessControlQuery>;
  ProtoIoRestorecommerceAccessControlResponse: ResolverTypeWrapper<ProtoIoRestorecommerceAccessControlResponse>;
  StatusType: ResolverTypeWrapper<StatusType>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  IoRestorecommerceAccessControlResponse: ResolverTypeWrapper<IoRestorecommerceAccessControlResponse>;
  IoRestorecommerceAccessControlResponseDecision: IoRestorecommerceAccessControlResponseDecision;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  IoRestorecommerceStatusOperationStatus: ResolverTypeWrapper<IoRestorecommerceStatusOperationStatus>;
  IIoRestorecommerceAccessControlRequest: IIoRestorecommerceAccessControlRequest;
  IIoRestorecommerceRuleTarget: IIoRestorecommerceRuleTarget;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAccessControlContext: IIoRestorecommerceAccessControlContext;
  IGoogleProtobufAny: IGoogleProtobufAny;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  ProtoIoRestorecommerceAccessControlReverseQuery: ResolverTypeWrapper<ProtoIoRestorecommerceAccessControlReverseQuery>;
  IoRestorecommerceAccessControlReverseQuery: ResolverTypeWrapper<IoRestorecommerceAccessControlReverseQuery>;
  IoRestorecommercePolicySetPolicySetRQ: ResolverTypeWrapper<IoRestorecommercePolicySetPolicySetRq>;
  IoRestorecommerceRuleTarget: ResolverTypeWrapper<IoRestorecommerceRuleTarget>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  IoRestorecommercePolicyPolicyRQ: ResolverTypeWrapper<IoRestorecommercePolicyPolicyRq>;
  IoRestorecommerceRuleRuleRQ: ResolverTypeWrapper<IoRestorecommerceRuleRuleRq>;
  IoRestorecommerceRuleEffect: IoRestorecommerceRuleEffect;
  IoRestorecommerceRuleContextQuery: ResolverTypeWrapper<IoRestorecommerceRuleContextQuery>;
  IoRestorecommerceRuleContextQueryFilter: ResolverTypeWrapper<IoRestorecommerceRuleContextQueryFilter>;
  AccessControlPolicyQuery: ResolverTypeWrapper<AccessControlPolicyQuery>;
  ProtoIoRestorecommercePolicyPolicyListResponse: ResolverTypeWrapper<ProtoIoRestorecommercePolicyPolicyListResponse>;
  IoRestorecommercePolicyPolicyListResponse: ResolverTypeWrapper<IoRestorecommercePolicyPolicyListResponse>;
  IoRestorecommercePolicyPolicyResponse: ResolverTypeWrapper<IoRestorecommercePolicyPolicyResponse>;
  IoRestorecommercePolicyPolicy: ResolverTypeWrapper<IoRestorecommercePolicyPolicy>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  IoRestorecommerceStatusStatus: ResolverTypeWrapper<IoRestorecommerceStatusStatus>;
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
  AccessControlRuleQuery: ResolverTypeWrapper<AccessControlRuleQuery>;
  ProtoIoRestorecommerceRuleRuleListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceRuleRuleListResponse>;
  IoRestorecommerceRuleRuleListResponse: ResolverTypeWrapper<IoRestorecommerceRuleRuleListResponse>;
  IoRestorecommerceRuleRuleResponse: ResolverTypeWrapper<IoRestorecommerceRuleRuleResponse>;
  IoRestorecommerceRuleRule: ResolverTypeWrapper<IoRestorecommerceRuleRule>;
  AccessControlPolicySetQuery: ResolverTypeWrapper<AccessControlPolicySetQuery>;
  ProtoIoRestorecommercePolicySetPolicySetListResponse: ResolverTypeWrapper<ProtoIoRestorecommercePolicySetPolicySetListResponse>;
  IoRestorecommercePolicySetPolicySetListResponse: ResolverTypeWrapper<IoRestorecommercePolicySetPolicySetListResponse>;
  IoRestorecommercePolicySetPolicySetResponse: ResolverTypeWrapper<IoRestorecommercePolicySetPolicySetResponse>;
  IoRestorecommercePolicySetPolicySet: ResolverTypeWrapper<IoRestorecommercePolicySetPolicySet>;
  Mutation: ResolverTypeWrapper<{}>;
  AccessControlMutation: ResolverTypeWrapper<AccessControlMutation>;
  AccessControlPolicyMutation: ResolverTypeWrapper<AccessControlPolicyMutation>;
  IIoRestorecommercePolicyPolicyList: IIoRestorecommercePolicyPolicyList;
  IIoRestorecommercePolicyPolicy: IIoRestorecommercePolicyPolicy;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  ModeType: ModeType;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  IoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<IoRestorecommerceResourcebaseDeleteResponse>;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  AccessControlRuleMutation: ResolverTypeWrapper<AccessControlRuleMutation>;
  IIoRestorecommerceRuleRuleList: IIoRestorecommerceRuleRuleList;
  IIoRestorecommerceRuleRule: IIoRestorecommerceRuleRule;
  IIoRestorecommerceRuleContextQuery: IIoRestorecommerceRuleContextQuery;
  IIoRestorecommerceRuleContextQueryFilter: IIoRestorecommerceRuleContextQueryFilter;
  AccessControlPolicySetMutation: ResolverTypeWrapper<AccessControlPolicySetMutation>;
  IIoRestorecommercePolicySetPolicySetList: IIoRestorecommercePolicySetPolicySetList;
  IIoRestorecommercePolicySetPolicySet: IIoRestorecommercePolicySetPolicySet;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  AccessControlQuery: AccessControlQuery;
  AccessControlAccessControlQuery: AccessControlAccessControlQuery;
  ProtoIoRestorecommerceAccessControlResponse: ProtoIoRestorecommerceAccessControlResponse;
  StatusType: StatusType;
  Int: Scalars['Int'];
  String: Scalars['String'];
  IoRestorecommerceAccessControlResponse: IoRestorecommerceAccessControlResponse;
  Boolean: Scalars['Boolean'];
  IoRestorecommerceStatusOperationStatus: IoRestorecommerceStatusOperationStatus;
  IIoRestorecommerceAccessControlRequest: IIoRestorecommerceAccessControlRequest;
  IIoRestorecommerceRuleTarget: IIoRestorecommerceRuleTarget;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAccessControlContext: IIoRestorecommerceAccessControlContext;
  IGoogleProtobufAny: IGoogleProtobufAny;
  Upload: Scalars['Upload'];
  ProtoIoRestorecommerceAccessControlReverseQuery: ProtoIoRestorecommerceAccessControlReverseQuery;
  IoRestorecommerceAccessControlReverseQuery: IoRestorecommerceAccessControlReverseQuery;
  IoRestorecommercePolicySetPolicySetRQ: IoRestorecommercePolicySetPolicySetRq;
  IoRestorecommerceRuleTarget: IoRestorecommerceRuleTarget;
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  IoRestorecommercePolicyPolicyRQ: IoRestorecommercePolicyPolicyRq;
  IoRestorecommerceRuleRuleRQ: IoRestorecommerceRuleRuleRq;
  IoRestorecommerceRuleContextQuery: IoRestorecommerceRuleContextQuery;
  IoRestorecommerceRuleContextQueryFilter: IoRestorecommerceRuleContextQueryFilter;
  AccessControlPolicyQuery: AccessControlPolicyQuery;
  ProtoIoRestorecommercePolicyPolicyListResponse: ProtoIoRestorecommercePolicyPolicyListResponse;
  IoRestorecommercePolicyPolicyListResponse: IoRestorecommercePolicyPolicyListResponse;
  IoRestorecommercePolicyPolicyResponse: IoRestorecommercePolicyPolicyResponse;
  IoRestorecommercePolicyPolicy: IoRestorecommercePolicyPolicy;
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  Float: Scalars['Float'];
  IoRestorecommerceStatusStatus: IoRestorecommerceStatusStatus;
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IIoRestorecommerceResourcebaseFilterOp: IIoRestorecommerceResourcebaseFilterOp;
  IIoRestorecommerceResourcebaseFilter: IIoRestorecommerceResourcebaseFilter;
  IIoRestorecommerceFilterFilterOp: IIoRestorecommerceFilterFilterOp;
  IIoRestorecommerceFilterFilter: IIoRestorecommerceFilterFilter;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  AccessControlRuleQuery: AccessControlRuleQuery;
  ProtoIoRestorecommerceRuleRuleListResponse: ProtoIoRestorecommerceRuleRuleListResponse;
  IoRestorecommerceRuleRuleListResponse: IoRestorecommerceRuleRuleListResponse;
  IoRestorecommerceRuleRuleResponse: IoRestorecommerceRuleRuleResponse;
  IoRestorecommerceRuleRule: IoRestorecommerceRuleRule;
  AccessControlPolicySetQuery: AccessControlPolicySetQuery;
  ProtoIoRestorecommercePolicySetPolicySetListResponse: ProtoIoRestorecommercePolicySetPolicySetListResponse;
  IoRestorecommercePolicySetPolicySetListResponse: IoRestorecommercePolicySetPolicySetListResponse;
  IoRestorecommercePolicySetPolicySetResponse: IoRestorecommercePolicySetPolicySetResponse;
  IoRestorecommercePolicySetPolicySet: IoRestorecommercePolicySetPolicySet;
  Mutation: {};
  AccessControlMutation: AccessControlMutation;
  AccessControlPolicyMutation: AccessControlPolicyMutation;
  IIoRestorecommercePolicyPolicyList: IIoRestorecommercePolicyPolicyList;
  IIoRestorecommercePolicyPolicy: IIoRestorecommercePolicyPolicy;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ProtoIoRestorecommerceResourcebaseDeleteResponse;
  IoRestorecommerceResourcebaseDeleteResponse: IoRestorecommerceResourcebaseDeleteResponse;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  AccessControlRuleMutation: AccessControlRuleMutation;
  IIoRestorecommerceRuleRuleList: IIoRestorecommerceRuleRuleList;
  IIoRestorecommerceRuleRule: IIoRestorecommerceRuleRule;
  IIoRestorecommerceRuleContextQuery: IIoRestorecommerceRuleContextQuery;
  IIoRestorecommerceRuleContextQueryFilter: IIoRestorecommerceRuleContextQueryFilter;
  AccessControlPolicySetMutation: AccessControlPolicySetMutation;
  IIoRestorecommercePolicySetPolicySetList: IIoRestorecommercePolicySetPolicySetList;
  IIoRestorecommercePolicySetPolicySet: IIoRestorecommercePolicySetPolicySet;
}>;

export type QueryResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  access_control?: Resolver<ResolversTypes['AccessControlQuery'], ParentType, ContextType>;
}>;

export type AccessControlQueryResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['AccessControlQuery'] = ResolversParentTypes['AccessControlQuery']> = ResolversObject<{
  access_control?: Resolver<ResolversTypes['AccessControlAccessControlQuery'], ParentType, ContextType>;
  policy?: Resolver<ResolversTypes['AccessControlPolicyQuery'], ParentType, ContextType>;
  rule?: Resolver<ResolversTypes['AccessControlRuleQuery'], ParentType, ContextType>;
  policy_set?: Resolver<ResolversTypes['AccessControlPolicySetQuery'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccessControlAccessControlQueryResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['AccessControlAccessControlQuery'] = ResolversParentTypes['AccessControlAccessControlQuery']> = ResolversObject<{
  IsAllowed?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceAccessControlResponse']>, ParentType, ContextType, RequireFields<AccessControlAccessControlQueryIsAllowedArgs, 'input'>>;
  WhatIsAllowed?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceAccessControlReverseQuery']>, ParentType, ContextType, RequireFields<AccessControlAccessControlQueryWhatIsAllowedArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceAccessControlResponseResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceAccessControlResponse'] = ResolversParentTypes['ProtoIoRestorecommerceAccessControlResponse']> = ResolversObject<{
  operationStatus?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAccessControlResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StatusTypeResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['StatusType'] = ResolversParentTypes['StatusType']> = ResolversObject<{
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAccessControlResponseResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceAccessControlResponse'] = ResolversParentTypes['IoRestorecommerceAccessControlResponse']> = ResolversObject<{
  decision?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAccessControlResponseDecision']>, ParentType, ContextType>;
  obligation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  evaluationCacheable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAccessControlResponseDecisionResolvers = { PERMIT: 'undefined', DENY: 1, NOT_APPLICABLE: 2, INDETERMINATE: 3 };

export type IoRestorecommerceStatusOperationStatusResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusOperationStatus'] = ResolversParentTypes['IoRestorecommerceStatusOperationStatus']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type ProtoIoRestorecommerceAccessControlReverseQueryResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceAccessControlReverseQuery'] = ResolversParentTypes['ProtoIoRestorecommerceAccessControlReverseQuery']> = ResolversObject<{
  operationStatus?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAccessControlReverseQuery']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAccessControlReverseQueryResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceAccessControlReverseQuery'] = ResolversParentTypes['IoRestorecommerceAccessControlReverseQuery']> = ResolversObject<{
  policySets?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommercePolicySetPolicySetRQ']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePolicySetPolicySetRqResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommercePolicySetPolicySetRQ'] = ResolversParentTypes['IoRestorecommercePolicySetPolicySetRQ']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['IoRestorecommerceRuleTarget']>, ParentType, ContextType>;
  combiningAlgorithm?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  policies?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommercePolicyPolicyRQ']>>, ParentType, ContextType>;
  effect?: Resolver<Maybe<ResolversTypes['IoRestorecommerceRuleEffect']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceRuleTargetResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceRuleTarget'] = ResolversParentTypes['IoRestorecommerceRuleTarget']> = ResolversObject<{
  subject?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  resources?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  action?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePolicyPolicyRqResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommercePolicyPolicyRQ'] = ResolversParentTypes['IoRestorecommercePolicyPolicyRQ']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['IoRestorecommerceRuleTarget']>, ParentType, ContextType>;
  combiningAlgorithm?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rules?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceRuleRuleRQ']>>, ParentType, ContextType>;
  effect?: Resolver<Maybe<ResolversTypes['IoRestorecommerceRuleEffect']>, ParentType, ContextType>;
  hasRules?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  evaluationCacheable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceRuleRuleRqResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceRuleRuleRQ'] = ResolversParentTypes['IoRestorecommerceRuleRuleRQ']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['IoRestorecommerceRuleTarget']>, ParentType, ContextType>;
  effect?: Resolver<Maybe<ResolversTypes['IoRestorecommerceRuleEffect']>, ParentType, ContextType>;
  condition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contextQuery?: Resolver<Maybe<ResolversTypes['IoRestorecommerceRuleContextQuery']>, ParentType, ContextType>;
  evaluationCacheable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceRuleEffectResolvers = { PERMIT: 'undefined', DENY: 1 };

export type IoRestorecommerceRuleContextQueryResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceRuleContextQuery'] = ResolversParentTypes['IoRestorecommerceRuleContextQuery']> = ResolversObject<{
  filters?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceRuleContextQueryFilter']>>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceRuleContextQueryFilterResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceRuleContextQueryFilter'] = ResolversParentTypes['IoRestorecommerceRuleContextQueryFilter']> = ResolversObject<{
  field?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  operation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccessControlPolicyQueryResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['AccessControlPolicyQuery'] = ResolversParentTypes['AccessControlPolicyQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePolicyPolicyListResponse']>, ParentType, ContextType, RequireFields<AccessControlPolicyQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommercePolicyPolicyListResponseResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommercePolicyPolicyListResponse'] = ResolversParentTypes['ProtoIoRestorecommercePolicyPolicyListResponse']> = ResolversObject<{
  operationStatus?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommercePolicyPolicyListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePolicyPolicyListResponseResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommercePolicyPolicyListResponse'] = ResolversParentTypes['IoRestorecommercePolicyPolicyListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommercePolicyPolicyResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePolicyPolicyResponseResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommercePolicyPolicyResponse'] = ResolversParentTypes['IoRestorecommercePolicyPolicyResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommercePolicyPolicy']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePolicyPolicyResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommercePolicyPolicy'] = ResolversParentTypes['IoRestorecommercePolicyPolicy']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rules?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['IoRestorecommerceRuleTarget']>, ParentType, ContextType>;
  effect?: Resolver<Maybe<ResolversTypes['IoRestorecommerceRuleEffect']>, ParentType, ContextType>;
  combiningAlgorithm?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  evaluationCacheable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceMetaMetaResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceMetaMeta'] = ResolversParentTypes['IoRestorecommerceMetaMeta']> = ResolversObject<{
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modified?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modifiedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusStatusResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusStatus'] = ResolversParentTypes['IoRestorecommerceStatusStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type AccessControlRuleQueryResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['AccessControlRuleQuery'] = ResolversParentTypes['AccessControlRuleQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceRuleRuleListResponse']>, ParentType, ContextType, RequireFields<AccessControlRuleQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceRuleRuleListResponseResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceRuleRuleListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceRuleRuleListResponse']> = ResolversObject<{
  operationStatus?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceRuleRuleListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceRuleRuleListResponseResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceRuleRuleListResponse'] = ResolversParentTypes['IoRestorecommerceRuleRuleListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceRuleRuleResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceRuleRuleResponseResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceRuleRuleResponse'] = ResolversParentTypes['IoRestorecommerceRuleRuleResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceRuleRule']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceRuleRuleResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceRuleRule'] = ResolversParentTypes['IoRestorecommerceRuleRule']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['IoRestorecommerceRuleTarget']>, ParentType, ContextType>;
  contextQuery?: Resolver<Maybe<ResolversTypes['IoRestorecommerceRuleContextQuery']>, ParentType, ContextType>;
  condition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  effect?: Resolver<Maybe<ResolversTypes['IoRestorecommerceRuleEffect']>, ParentType, ContextType>;
  evaluationCacheable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccessControlPolicySetQueryResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['AccessControlPolicySetQuery'] = ResolversParentTypes['AccessControlPolicySetQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePolicySetPolicySetListResponse']>, ParentType, ContextType, RequireFields<AccessControlPolicySetQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommercePolicySetPolicySetListResponseResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommercePolicySetPolicySetListResponse'] = ResolversParentTypes['ProtoIoRestorecommercePolicySetPolicySetListResponse']> = ResolversObject<{
  operationStatus?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommercePolicySetPolicySetListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePolicySetPolicySetListResponseResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommercePolicySetPolicySetListResponse'] = ResolversParentTypes['IoRestorecommercePolicySetPolicySetListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommercePolicySetPolicySetResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePolicySetPolicySetResponseResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommercePolicySetPolicySetResponse'] = ResolversParentTypes['IoRestorecommercePolicySetPolicySetResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommercePolicySetPolicySet']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePolicySetPolicySetResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommercePolicySetPolicySet'] = ResolversParentTypes['IoRestorecommercePolicySetPolicySet']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['IoRestorecommerceRuleTarget']>, ParentType, ContextType>;
  combiningAlgorithm?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  policies?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  access_control?: Resolver<ResolversTypes['AccessControlMutation'], ParentType, ContextType>;
}>;

export type AccessControlMutationResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['AccessControlMutation'] = ResolversParentTypes['AccessControlMutation']> = ResolversObject<{
  policy?: Resolver<ResolversTypes['AccessControlPolicyMutation'], ParentType, ContextType>;
  rule?: Resolver<ResolversTypes['AccessControlRuleMutation'], ParentType, ContextType>;
  policy_set?: Resolver<ResolversTypes['AccessControlPolicySetMutation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccessControlPolicyMutationResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['AccessControlPolicyMutation'] = ResolversParentTypes['AccessControlPolicyMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePolicyPolicyListResponse']>, ParentType, ContextType, RequireFields<AccessControlPolicyMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<AccessControlPolicyMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  operationStatus?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  status?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceStatusStatus']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccessControlRuleMutationResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['AccessControlRuleMutation'] = ResolversParentTypes['AccessControlRuleMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceRuleRuleListResponse']>, ParentType, ContextType, RequireFields<AccessControlRuleMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<AccessControlRuleMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccessControlPolicySetMutationResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['AccessControlPolicySetMutation'] = ResolversParentTypes['AccessControlPolicySetMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePolicySetPolicySetListResponse']>, ParentType, ContextType, RequireFields<AccessControlPolicySetMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<AccessControlPolicySetMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = AccessControlContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  AccessControlQuery?: AccessControlQueryResolvers<ContextType>;
  AccessControlAccessControlQuery?: AccessControlAccessControlQueryResolvers<ContextType>;
  ProtoIoRestorecommerceAccessControlResponse?: ProtoIoRestorecommerceAccessControlResponseResolvers<ContextType>;
  StatusType?: StatusTypeResolvers<ContextType>;
  IoRestorecommerceAccessControlResponse?: IoRestorecommerceAccessControlResponseResolvers<ContextType>;
  IoRestorecommerceAccessControlResponseDecision?: IoRestorecommerceAccessControlResponseDecisionResolvers;
  IoRestorecommerceStatusOperationStatus?: IoRestorecommerceStatusOperationStatusResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  ProtoIoRestorecommerceAccessControlReverseQuery?: ProtoIoRestorecommerceAccessControlReverseQueryResolvers<ContextType>;
  IoRestorecommerceAccessControlReverseQuery?: IoRestorecommerceAccessControlReverseQueryResolvers<ContextType>;
  IoRestorecommercePolicySetPolicySetRQ?: IoRestorecommercePolicySetPolicySetRqResolvers<ContextType>;
  IoRestorecommerceRuleTarget?: IoRestorecommerceRuleTargetResolvers<ContextType>;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
  IoRestorecommercePolicyPolicyRQ?: IoRestorecommercePolicyPolicyRqResolvers<ContextType>;
  IoRestorecommerceRuleRuleRQ?: IoRestorecommerceRuleRuleRqResolvers<ContextType>;
  IoRestorecommerceRuleEffect?: IoRestorecommerceRuleEffectResolvers;
  IoRestorecommerceRuleContextQuery?: IoRestorecommerceRuleContextQueryResolvers<ContextType>;
  IoRestorecommerceRuleContextQueryFilter?: IoRestorecommerceRuleContextQueryFilterResolvers<ContextType>;
  AccessControlPolicyQuery?: AccessControlPolicyQueryResolvers<ContextType>;
  ProtoIoRestorecommercePolicyPolicyListResponse?: ProtoIoRestorecommercePolicyPolicyListResponseResolvers<ContextType>;
  IoRestorecommercePolicyPolicyListResponse?: IoRestorecommercePolicyPolicyListResponseResolvers<ContextType>;
  IoRestorecommercePolicyPolicyResponse?: IoRestorecommercePolicyPolicyResponseResolvers<ContextType>;
  IoRestorecommercePolicyPolicy?: IoRestorecommercePolicyPolicyResolvers<ContextType>;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  IoRestorecommerceStatusStatus?: IoRestorecommerceStatusStatusResolvers<ContextType>;
  IoRestorecommerceResourcebaseSortSortOrder?: IoRestorecommerceResourcebaseSortSortOrderResolvers;
  IoRestorecommerceResourcebaseFilterOperation?: IoRestorecommerceResourcebaseFilterOperationResolvers;
  IoRestorecommerceResourcebaseFilterValueType?: IoRestorecommerceResourcebaseFilterValueTypeResolvers;
  IoRestorecommerceFilterFilterOperation?: IoRestorecommerceFilterFilterOperationResolvers;
  IoRestorecommerceFilterFilterValueType?: IoRestorecommerceFilterFilterValueTypeResolvers;
  IoRestorecommerceFilterFilterOpOperator?: IoRestorecommerceFilterFilterOpOperatorResolvers;
  IoRestorecommerceResourcebaseFilterOpOperator?: IoRestorecommerceResourcebaseFilterOpOperatorResolvers;
  AccessControlRuleQuery?: AccessControlRuleQueryResolvers<ContextType>;
  ProtoIoRestorecommerceRuleRuleListResponse?: ProtoIoRestorecommerceRuleRuleListResponseResolvers<ContextType>;
  IoRestorecommerceRuleRuleListResponse?: IoRestorecommerceRuleRuleListResponseResolvers<ContextType>;
  IoRestorecommerceRuleRuleResponse?: IoRestorecommerceRuleRuleResponseResolvers<ContextType>;
  IoRestorecommerceRuleRule?: IoRestorecommerceRuleRuleResolvers<ContextType>;
  AccessControlPolicySetQuery?: AccessControlPolicySetQueryResolvers<ContextType>;
  ProtoIoRestorecommercePolicySetPolicySetListResponse?: ProtoIoRestorecommercePolicySetPolicySetListResponseResolvers<ContextType>;
  IoRestorecommercePolicySetPolicySetListResponse?: IoRestorecommercePolicySetPolicySetListResponseResolvers<ContextType>;
  IoRestorecommercePolicySetPolicySetResponse?: IoRestorecommercePolicySetPolicySetResponseResolvers<ContextType>;
  IoRestorecommercePolicySetPolicySet?: IoRestorecommercePolicySetPolicySetResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  AccessControlMutation?: AccessControlMutationResolvers<ContextType>;
  AccessControlPolicyMutation?: AccessControlPolicyMutationResolvers<ContextType>;
  ProtoIoRestorecommerceResourcebaseDeleteResponse?: ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  IoRestorecommerceResourcebaseDeleteResponse?: IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  AccessControlRuleMutation?: AccessControlRuleMutationResolvers<ContextType>;
  AccessControlPolicySetMutation?: AccessControlPolicySetMutationResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = AccessControlContext> = Resolvers<ContextType>;
