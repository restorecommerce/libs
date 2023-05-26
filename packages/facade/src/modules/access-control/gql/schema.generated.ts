import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { AccessControlContext } from '../interfaces';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
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
  GoogleProtobufAnyValue: any;
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
  details?: Maybe<IoRestorecommerceAccessControlResponse>;
};

export type IoRestorecommerceAccessControlResponse = {
  __typename?: 'IoRestorecommerceAccessControlResponse';
  decision?: Maybe<IoRestorecommerceAccessControlResponseDecision>;
  obligations?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  evaluationCacheable?: Maybe<Scalars['Boolean']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export enum IoRestorecommerceAccessControlResponseDecision {
  Permit = 0,
  Deny = 1,
  NotApplicable = 2,
  Indeterminate = 3
}

export type IoRestorecommerceAttributeAttribute = {
  __typename?: 'IoRestorecommerceAttributeAttribute';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
};

export type IoRestorecommerceStatusOperationStatus = {
  __typename?: 'IoRestorecommerceStatusOperationStatus';
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceAccessControlRequest = {
  target?: InputMaybe<IIoRestorecommerceRuleTarget>;
  context?: InputMaybe<IIoRestorecommerceAccessControlContext>;
};

export type IIoRestorecommerceRuleTarget = {
  subjects?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  resources?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  actions?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type IIoRestorecommerceAttributeAttribute = {
  id?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type IIoRestorecommerceAccessControlContext = {
  subject?: InputMaybe<IGoogleProtobufAny>;
  resources?: InputMaybe<Array<IGoogleProtobufAny>>;
  security?: InputMaybe<IGoogleProtobufAny>;
};

export type IGoogleProtobufAny = {
  typeUrl?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['GoogleProtobufAnyValue']>;
};

export type ProtoIoRestorecommerceAccessControlReverseQuery = {
  __typename?: 'ProtoIoRestorecommerceAccessControlReverseQuery';
  details?: Maybe<IoRestorecommerceAccessControlReverseQuery>;
};

export type IoRestorecommerceAccessControlReverseQuery = {
  __typename?: 'IoRestorecommerceAccessControlReverseQuery';
  policySets?: Maybe<Array<IoRestorecommercePolicySetPolicySetRq>>;
  obligations?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
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
  subjects?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  resources?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  actions?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
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
  filters?: Maybe<Array<IoRestorecommerceFilterFilterOp>>;
  query?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceFilterFilterOp = {
  __typename?: 'IoRestorecommerceFilterFilterOp';
  filters?: Maybe<Array<IoRestorecommerceFilterFilter>>;
  operator?: Maybe<IoRestorecommerceFilterFilterOpOperator>;
};

export type IoRestorecommerceFilterFilter = {
  __typename?: 'IoRestorecommerceFilterFilter';
  field?: Maybe<Scalars['String']>;
  operation?: Maybe<IoRestorecommerceFilterFilterOperation>;
  value?: Maybe<Scalars['String']>;
  type?: Maybe<IoRestorecommerceFilterFilterValueType>;
  filters?: Maybe<Array<IoRestorecommerceFilterFilterOp>>;
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

export type AccessControlPolicyQuery = {
  __typename?: 'AccessControlPolicyQuery';
  Read?: Maybe<ProtoIoRestorecommercePolicyPolicyListResponse>;
};


export type AccessControlPolicyQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommercePolicyPolicyListResponse = {
  __typename?: 'ProtoIoRestorecommercePolicyPolicyListResponse';
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
  owners?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  acls?: Maybe<Array<IoRestorecommerceAttributeAttributeObj>>;
};

export type IoRestorecommerceAttributeAttributeObj = {
  __typename?: 'IoRestorecommerceAttributeAttributeObj';
  attributes?: Maybe<IoRestorecommerceAttributeAttribute>;
};

export type IoRestorecommerceStatusStatus = {
  __typename?: 'IoRestorecommerceStatusStatus';
  id?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceResourcebaseReadRequest = {
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  sorts?: InputMaybe<Array<IIoRestorecommerceResourcebaseSort>>;
  filters?: InputMaybe<Array<IIoRestorecommerceResourcebaseFilterOp>>;
  fields?: InputMaybe<Array<IIoRestorecommerceResourcebaseFieldFilter>>;
  localesLimiter?: InputMaybe<Array<Scalars['String']>>;
  customQueries?: InputMaybe<Array<Scalars['String']>>;
  customArguments?: InputMaybe<IGoogleProtobufAny>;
  search?: InputMaybe<IIoRestorecommerceResourcebaseSearch>;
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
  filters?: InputMaybe<Array<IIoRestorecommerceResourcebaseFilter>>;
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
  filters?: InputMaybe<Array<IIoRestorecommerceFilterFilter>>;
  operator?: InputMaybe<IoRestorecommerceFilterFilterOpOperator>;
};

export type IIoRestorecommerceFilterFilter = {
  field?: InputMaybe<Scalars['String']>;
  operation?: InputMaybe<IoRestorecommerceFilterFilterOperation>;
  value?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<IoRestorecommerceFilterFilterValueType>;
  filters?: InputMaybe<Array<IIoRestorecommerceFilterFilterOp>>;
};

export enum IoRestorecommerceResourcebaseFilterOpOperator {
  And = 0,
  Or = 1
}

export type IIoRestorecommerceResourcebaseFieldFilter = {
  name?: InputMaybe<Scalars['String']>;
  include?: InputMaybe<Scalars['Boolean']>;
};

export type IIoRestorecommerceResourcebaseSearch = {
  search?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<Array<Scalars['String']>>;
  caseSensitive?: InputMaybe<Scalars['Boolean']>;
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
  items?: InputMaybe<Array<IIoRestorecommercePolicyPolicy>>;
  totalCount?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommercePolicyPolicy = {
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  rules?: InputMaybe<Array<Scalars['String']>>;
  target?: InputMaybe<IIoRestorecommerceRuleTarget>;
  effect?: InputMaybe<IoRestorecommerceRuleEffect>;
  combiningAlgorithm?: InputMaybe<Scalars['String']>;
  evaluationCacheable?: InputMaybe<Scalars['Boolean']>;
};

export type IIoRestorecommerceMetaMeta = {
  created?: InputMaybe<Scalars['Float']>;
  modified?: InputMaybe<Scalars['Float']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  owners?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  acls?: InputMaybe<Array<IIoRestorecommerceAttributeAttributeObj>>;
};

export type IIoRestorecommerceAttributeAttributeObj = {
  attributes?: InputMaybe<IIoRestorecommerceAttributeAttribute>;
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
  views?: InputMaybe<Array<Scalars['String']>>;
  analyzers?: InputMaybe<Array<Scalars['String']>>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
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
  items?: InputMaybe<Array<IIoRestorecommerceRuleRule>>;
  totalCount?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceRuleRule = {
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  target?: InputMaybe<IIoRestorecommerceRuleTarget>;
  contextQuery?: InputMaybe<IIoRestorecommerceRuleContextQuery>;
  condition?: InputMaybe<Scalars['String']>;
  effect?: InputMaybe<IoRestorecommerceRuleEffect>;
  evaluationCacheable?: InputMaybe<Scalars['Boolean']>;
};

export type IIoRestorecommerceRuleContextQuery = {
  filters?: InputMaybe<Array<IIoRestorecommerceFilterFilterOp>>;
  query?: InputMaybe<Scalars['String']>;
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
  items?: InputMaybe<Array<IIoRestorecommercePolicySetPolicySet>>;
  totalCount?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommercePolicySetPolicySet = {
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  target?: InputMaybe<IIoRestorecommerceRuleTarget>;
  combiningAlgorithm?: InputMaybe<Scalars['String']>;
  policies?: InputMaybe<Array<Scalars['String']>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  orderingOrders?: Maybe<SubscriptionOutput>;
  catalogProducts?: Maybe<SubscriptionOutput>;
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
  id?: Maybe<Scalars['String']>;
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
  AccessControlQuery: ResolverTypeWrapper<AccessControlQuery>;
  AccessControlAccessControlQuery: ResolverTypeWrapper<AccessControlAccessControlQuery>;
  ProtoIoRestorecommerceAccessControlResponse: ResolverTypeWrapper<ProtoIoRestorecommerceAccessControlResponse>;
  IoRestorecommerceAccessControlResponse: ResolverTypeWrapper<IoRestorecommerceAccessControlResponse>;
  IoRestorecommerceAccessControlResponseDecision: IoRestorecommerceAccessControlResponseDecision;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  IoRestorecommerceStatusOperationStatus: ResolverTypeWrapper<IoRestorecommerceStatusOperationStatus>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IIoRestorecommerceAccessControlRequest: IIoRestorecommerceAccessControlRequest;
  IIoRestorecommerceRuleTarget: IIoRestorecommerceRuleTarget;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAccessControlContext: IIoRestorecommerceAccessControlContext;
  IGoogleProtobufAny: IGoogleProtobufAny;
  GoogleProtobufAnyValue: ResolverTypeWrapper<Scalars['GoogleProtobufAnyValue']>;
  ProtoIoRestorecommerceAccessControlReverseQuery: ResolverTypeWrapper<ProtoIoRestorecommerceAccessControlReverseQuery>;
  IoRestorecommerceAccessControlReverseQuery: ResolverTypeWrapper<IoRestorecommerceAccessControlReverseQuery>;
  IoRestorecommercePolicySetPolicySetRQ: ResolverTypeWrapper<IoRestorecommercePolicySetPolicySetRq>;
  IoRestorecommerceRuleTarget: ResolverTypeWrapper<IoRestorecommerceRuleTarget>;
  IoRestorecommercePolicyPolicyRQ: ResolverTypeWrapper<IoRestorecommercePolicyPolicyRq>;
  IoRestorecommerceRuleRuleRQ: ResolverTypeWrapper<IoRestorecommerceRuleRuleRq>;
  IoRestorecommerceRuleEffect: IoRestorecommerceRuleEffect;
  IoRestorecommerceRuleContextQuery: ResolverTypeWrapper<IoRestorecommerceRuleContextQuery>;
  IoRestorecommerceFilterFilterOp: ResolverTypeWrapper<IoRestorecommerceFilterFilterOp>;
  IoRestorecommerceFilterFilter: ResolverTypeWrapper<IoRestorecommerceFilterFilter>;
  IoRestorecommerceFilterFilterOperation: IoRestorecommerceFilterFilterOperation;
  IoRestorecommerceFilterFilterValueType: IoRestorecommerceFilterFilterValueType;
  IoRestorecommerceFilterFilterOpOperator: IoRestorecommerceFilterFilterOpOperator;
  AccessControlPolicyQuery: ResolverTypeWrapper<AccessControlPolicyQuery>;
  ProtoIoRestorecommercePolicyPolicyListResponse: ResolverTypeWrapper<ProtoIoRestorecommercePolicyPolicyListResponse>;
  IoRestorecommercePolicyPolicyListResponse: ResolverTypeWrapper<IoRestorecommercePolicyPolicyListResponse>;
  IoRestorecommercePolicyPolicyResponse: ResolverTypeWrapper<IoRestorecommercePolicyPolicyResponse>;
  IoRestorecommercePolicyPolicy: ResolverTypeWrapper<IoRestorecommercePolicyPolicy>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  IoRestorecommerceAttributeAttributeObj: ResolverTypeWrapper<IoRestorecommerceAttributeAttributeObj>;
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
  IoRestorecommerceResourcebaseFilterOpOperator: IoRestorecommerceResourcebaseFilterOpOperator;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  IIoRestorecommerceResourcebaseSearch: IIoRestorecommerceResourcebaseSearch;
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
  IIoRestorecommerceAttributeAttributeObj: IIoRestorecommerceAttributeAttributeObj;
  ModeType: ModeType;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  IoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<IoRestorecommerceResourcebaseDeleteResponse>;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  AccessControlRuleMutation: ResolverTypeWrapper<AccessControlRuleMutation>;
  IIoRestorecommerceRuleRuleList: IIoRestorecommerceRuleRuleList;
  IIoRestorecommerceRuleRule: IIoRestorecommerceRuleRule;
  IIoRestorecommerceRuleContextQuery: IIoRestorecommerceRuleContextQuery;
  AccessControlPolicySetMutation: ResolverTypeWrapper<AccessControlPolicySetMutation>;
  IIoRestorecommercePolicySetPolicySetList: IIoRestorecommercePolicySetPolicySetList;
  IIoRestorecommercePolicySetPolicySet: IIoRestorecommercePolicySetPolicySet;
  Subscription: ResolverTypeWrapper<{}>;
  SubscriptionOutput: ResolverTypeWrapper<SubscriptionOutput>;
  SubscriptionAction: SubscriptionAction;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  AccessControlQuery: AccessControlQuery;
  AccessControlAccessControlQuery: AccessControlAccessControlQuery;
  ProtoIoRestorecommerceAccessControlResponse: ProtoIoRestorecommerceAccessControlResponse;
  IoRestorecommerceAccessControlResponse: IoRestorecommerceAccessControlResponse;
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  IoRestorecommerceStatusOperationStatus: IoRestorecommerceStatusOperationStatus;
  Int: Scalars['Int'];
  IIoRestorecommerceAccessControlRequest: IIoRestorecommerceAccessControlRequest;
  IIoRestorecommerceRuleTarget: IIoRestorecommerceRuleTarget;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAccessControlContext: IIoRestorecommerceAccessControlContext;
  IGoogleProtobufAny: IGoogleProtobufAny;
  GoogleProtobufAnyValue: Scalars['GoogleProtobufAnyValue'];
  ProtoIoRestorecommerceAccessControlReverseQuery: ProtoIoRestorecommerceAccessControlReverseQuery;
  IoRestorecommerceAccessControlReverseQuery: IoRestorecommerceAccessControlReverseQuery;
  IoRestorecommercePolicySetPolicySetRQ: IoRestorecommercePolicySetPolicySetRq;
  IoRestorecommerceRuleTarget: IoRestorecommerceRuleTarget;
  IoRestorecommercePolicyPolicyRQ: IoRestorecommercePolicyPolicyRq;
  IoRestorecommerceRuleRuleRQ: IoRestorecommerceRuleRuleRq;
  IoRestorecommerceRuleContextQuery: IoRestorecommerceRuleContextQuery;
  IoRestorecommerceFilterFilterOp: IoRestorecommerceFilterFilterOp;
  IoRestorecommerceFilterFilter: IoRestorecommerceFilterFilter;
  AccessControlPolicyQuery: AccessControlPolicyQuery;
  ProtoIoRestorecommercePolicyPolicyListResponse: ProtoIoRestorecommercePolicyPolicyListResponse;
  IoRestorecommercePolicyPolicyListResponse: IoRestorecommercePolicyPolicyListResponse;
  IoRestorecommercePolicyPolicyResponse: IoRestorecommercePolicyPolicyResponse;
  IoRestorecommercePolicyPolicy: IoRestorecommercePolicyPolicy;
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  Float: Scalars['Float'];
  IoRestorecommerceAttributeAttributeObj: IoRestorecommerceAttributeAttributeObj;
  IoRestorecommerceStatusStatus: IoRestorecommerceStatusStatus;
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IIoRestorecommerceResourcebaseFilterOp: IIoRestorecommerceResourcebaseFilterOp;
  IIoRestorecommerceResourcebaseFilter: IIoRestorecommerceResourcebaseFilter;
  IIoRestorecommerceFilterFilterOp: IIoRestorecommerceFilterFilterOp;
  IIoRestorecommerceFilterFilter: IIoRestorecommerceFilterFilter;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  IIoRestorecommerceResourcebaseSearch: IIoRestorecommerceResourcebaseSearch;
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
  IIoRestorecommerceAttributeAttributeObj: IIoRestorecommerceAttributeAttributeObj;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ProtoIoRestorecommerceResourcebaseDeleteResponse;
  IoRestorecommerceResourcebaseDeleteResponse: IoRestorecommerceResourcebaseDeleteResponse;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  AccessControlRuleMutation: AccessControlRuleMutation;
  IIoRestorecommerceRuleRuleList: IIoRestorecommerceRuleRuleList;
  IIoRestorecommerceRuleRule: IIoRestorecommerceRuleRule;
  IIoRestorecommerceRuleContextQuery: IIoRestorecommerceRuleContextQuery;
  AccessControlPolicySetMutation: AccessControlPolicySetMutation;
  IIoRestorecommercePolicySetPolicySetList: IIoRestorecommercePolicySetPolicySetList;
  IIoRestorecommercePolicySetPolicySet: IIoRestorecommercePolicySetPolicySet;
  Subscription: {};
  SubscriptionOutput: SubscriptionOutput;
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
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAccessControlResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAccessControlResponseResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceAccessControlResponse'] = ResolversParentTypes['IoRestorecommerceAccessControlResponse']> = ResolversObject<{
  decision?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAccessControlResponseDecision']>, ParentType, ContextType>;
  obligations?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  evaluationCacheable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAccessControlResponseDecisionResolvers = { PERMIT: 0, DENY: 1, NOT_APPLICABLE: 2, INDETERMINATE: 3 };

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusOperationStatusResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusOperationStatus'] = ResolversParentTypes['IoRestorecommerceStatusOperationStatus']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface GoogleProtobufAnyValueScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GoogleProtobufAnyValue'], any> {
  name: 'GoogleProtobufAnyValue';
}

export type ProtoIoRestorecommerceAccessControlReverseQueryResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceAccessControlReverseQuery'] = ResolversParentTypes['ProtoIoRestorecommerceAccessControlReverseQuery']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAccessControlReverseQuery']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAccessControlReverseQueryResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceAccessControlReverseQuery'] = ResolversParentTypes['IoRestorecommerceAccessControlReverseQuery']> = ResolversObject<{
  policySets?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommercePolicySetPolicySetRQ']>>, ParentType, ContextType>;
  obligations?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
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
  subjects?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  resources?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  actions?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
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

export type IoRestorecommerceRuleEffectResolvers = { PERMIT: 0, DENY: 1 };

export type IoRestorecommerceRuleContextQueryResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceRuleContextQuery'] = ResolversParentTypes['IoRestorecommerceRuleContextQuery']> = ResolversObject<{
  filters?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFilterFilterOp']>>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFilterFilterOpResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceFilterFilterOp'] = ResolversParentTypes['IoRestorecommerceFilterFilterOp']> = ResolversObject<{
  filters?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFilterFilter']>>, ParentType, ContextType>;
  operator?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFilterFilterOpOperator']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFilterFilterResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceFilterFilter'] = ResolversParentTypes['IoRestorecommerceFilterFilter']> = ResolversObject<{
  field?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  operation?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFilterFilterOperation']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFilterFilterValueType']>, ParentType, ContextType>;
  filters?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFilterFilterOp']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFilterFilterOperationResolvers = { eq: 0, lt: 1, lte: 2, gt: 3, gte: 4, isEmpty: 5, iLike: 6, in: 7, neq: 8 };

export type IoRestorecommerceFilterFilterValueTypeResolvers = { STRING: 0, NUMBER: 1, BOOLEAN: 2, DATE: 3, ARRAY: 4 };

export type IoRestorecommerceFilterFilterOpOperatorResolvers = { and: 0, or: 1 };

export type AccessControlPolicyQueryResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['AccessControlPolicyQuery'] = ResolversParentTypes['AccessControlPolicyQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePolicyPolicyListResponse']>, ParentType, ContextType, RequireFields<AccessControlPolicyQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommercePolicyPolicyListResponseResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommercePolicyPolicyListResponse'] = ResolversParentTypes['ProtoIoRestorecommercePolicyPolicyListResponse']> = ResolversObject<{
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
  owners?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  acls?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttributeObj']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeObjResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttributeObj'] = ResolversParentTypes['IoRestorecommerceAttributeAttributeObj']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusStatusResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusStatus'] = ResolversParentTypes['IoRestorecommerceStatusStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseSortSortOrderResolvers = { UNSORTED: 0, ASCENDING: 1, DESCENDING: 2 };

export type IoRestorecommerceResourcebaseFilterOperationResolvers = { eq: 0, lt: 1, lte: 2, gt: 3, gte: 4, isEmpty: 5, iLike: 6, in: 7, neq: 8 };

export type IoRestorecommerceResourcebaseFilterValueTypeResolvers = { STRING: 0, NUMBER: 1, BOOLEAN: 2, DATE: 3, ARRAY: 4 };

export type IoRestorecommerceResourcebaseFilterOpOperatorResolvers = { and: 0, or: 1 };

export type AccessControlRuleQueryResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['AccessControlRuleQuery'] = ResolversParentTypes['AccessControlRuleQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceRuleRuleListResponse']>, ParentType, ContextType, RequireFields<AccessControlRuleQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceRuleRuleListResponseResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceRuleRuleListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceRuleRuleListResponse']> = ResolversObject<{
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

export type SubscriptionResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  orderingOrders?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "orderingOrders", ParentType, ContextType, Partial<SubscriptionOrderingOrdersArgs>>;
  catalogProducts?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "catalogProducts", ParentType, ContextType, Partial<SubscriptionCatalogProductsArgs>>;
  fulfillmentFulfillments?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "fulfillmentFulfillments", ParentType, ContextType, Partial<SubscriptionFulfillmentFulfillmentsArgs>>;
  fulfillmentFulfillmentCouriers?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "fulfillmentFulfillmentCouriers", ParentType, ContextType, Partial<SubscriptionFulfillmentFulfillmentCouriersArgs>>;
  fulfillmentFulfillment_products?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "fulfillmentFulfillment_products", ParentType, ContextType, Partial<SubscriptionFulfillmentFulfillment_ProductsArgs>>;
}>;

export type SubscriptionOutputResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['SubscriptionOutput'] = ResolversParentTypes['SubscriptionOutput']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = AccessControlContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  AccessControlQuery?: AccessControlQueryResolvers<ContextType>;
  AccessControlAccessControlQuery?: AccessControlAccessControlQueryResolvers<ContextType>;
  ProtoIoRestorecommerceAccessControlResponse?: ProtoIoRestorecommerceAccessControlResponseResolvers<ContextType>;
  IoRestorecommerceAccessControlResponse?: IoRestorecommerceAccessControlResponseResolvers<ContextType>;
  IoRestorecommerceAccessControlResponseDecision?: IoRestorecommerceAccessControlResponseDecisionResolvers;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
  IoRestorecommerceStatusOperationStatus?: IoRestorecommerceStatusOperationStatusResolvers<ContextType>;
  GoogleProtobufAnyValue?: GraphQLScalarType;
  ProtoIoRestorecommerceAccessControlReverseQuery?: ProtoIoRestorecommerceAccessControlReverseQueryResolvers<ContextType>;
  IoRestorecommerceAccessControlReverseQuery?: IoRestorecommerceAccessControlReverseQueryResolvers<ContextType>;
  IoRestorecommercePolicySetPolicySetRQ?: IoRestorecommercePolicySetPolicySetRqResolvers<ContextType>;
  IoRestorecommerceRuleTarget?: IoRestorecommerceRuleTargetResolvers<ContextType>;
  IoRestorecommercePolicyPolicyRQ?: IoRestorecommercePolicyPolicyRqResolvers<ContextType>;
  IoRestorecommerceRuleRuleRQ?: IoRestorecommerceRuleRuleRqResolvers<ContextType>;
  IoRestorecommerceRuleEffect?: IoRestorecommerceRuleEffectResolvers;
  IoRestorecommerceRuleContextQuery?: IoRestorecommerceRuleContextQueryResolvers<ContextType>;
  IoRestorecommerceFilterFilterOp?: IoRestorecommerceFilterFilterOpResolvers<ContextType>;
  IoRestorecommerceFilterFilter?: IoRestorecommerceFilterFilterResolvers<ContextType>;
  IoRestorecommerceFilterFilterOperation?: IoRestorecommerceFilterFilterOperationResolvers;
  IoRestorecommerceFilterFilterValueType?: IoRestorecommerceFilterFilterValueTypeResolvers;
  IoRestorecommerceFilterFilterOpOperator?: IoRestorecommerceFilterFilterOpOperatorResolvers;
  AccessControlPolicyQuery?: AccessControlPolicyQueryResolvers<ContextType>;
  ProtoIoRestorecommercePolicyPolicyListResponse?: ProtoIoRestorecommercePolicyPolicyListResponseResolvers<ContextType>;
  IoRestorecommercePolicyPolicyListResponse?: IoRestorecommercePolicyPolicyListResponseResolvers<ContextType>;
  IoRestorecommercePolicyPolicyResponse?: IoRestorecommercePolicyPolicyResponseResolvers<ContextType>;
  IoRestorecommercePolicyPolicy?: IoRestorecommercePolicyPolicyResolvers<ContextType>;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  IoRestorecommerceAttributeAttributeObj?: IoRestorecommerceAttributeAttributeObjResolvers<ContextType>;
  IoRestorecommerceStatusStatus?: IoRestorecommerceStatusStatusResolvers<ContextType>;
  IoRestorecommerceResourcebaseSortSortOrder?: IoRestorecommerceResourcebaseSortSortOrderResolvers;
  IoRestorecommerceResourcebaseFilterOperation?: IoRestorecommerceResourcebaseFilterOperationResolvers;
  IoRestorecommerceResourcebaseFilterValueType?: IoRestorecommerceResourcebaseFilterValueTypeResolvers;
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
  Subscription?: SubscriptionResolvers<ContextType>;
  SubscriptionOutput?: SubscriptionOutputResolvers<ContextType>;
}>;

