import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { AccessControlContext } from '../interfaces';
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
  /** The `Upload` scalar type represents a file upload. */
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
  status: StatusType;
  payload?: Maybe<IoRestorecommerceAccessControlResponse>;
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

export type IoRestorecommerceAccessControlResponse = {
  __typename?: 'IoRestorecommerceAccessControlResponse';
  decision?: Maybe<IoRestorecommerceAccessControlResponseDecision>;
  obligation?: Maybe<Scalars['String']>;
  evaluationCacheable?: Maybe<Scalars['Boolean']>;
};

export enum IoRestorecommerceAccessControlResponseDecision {
  Permit = 0,
  Deny = 1,
  NotApplicable = 2,
  Indeterminate = 3
}

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
  status: StatusType;
  payload?: Maybe<IoRestorecommerceAccessControlReverseQuery>;
};

export type IoRestorecommerceAccessControlReverseQuery = {
  __typename?: 'IoRestorecommerceAccessControlReverseQuery';
  policySets?: Maybe<Array<IoRestorecommercePolicySetPolicySetRq>>;
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
  Read?: Maybe<ProtoIoRestorecommercePolicyPolicyList>;
};


export type AccessControlPolicyQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommercePolicyPolicyList = {
  __typename?: 'ProtoIoRestorecommercePolicyPolicyList';
  status: StatusType;
  payload?: Maybe<IoRestorecommercePolicyPolicyList>;
};

export type IoRestorecommercePolicyPolicyList = {
  __typename?: 'IoRestorecommercePolicyPolicyList';
  items?: Maybe<Array<IoRestorecommercePolicyPolicy>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IoRestorecommerceAuthSubject>;
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

export type IIoRestorecommerceAuthHierarchicalScope = {
  id?: Maybe<Scalars['String']>;
  children?: Maybe<Array<IIoRestorecommerceAuthHierarchicalScope>>;
  role?: Maybe<Scalars['String']>;
};

export type AccessControlRuleQuery = {
  __typename?: 'AccessControlRuleQuery';
  Read?: Maybe<ProtoIoRestorecommerceRuleRuleList>;
};


export type AccessControlRuleQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceRuleRuleList = {
  __typename?: 'ProtoIoRestorecommerceRuleRuleList';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceRuleRuleList>;
};

export type IoRestorecommerceRuleRuleList = {
  __typename?: 'IoRestorecommerceRuleRuleList';
  items?: Maybe<Array<IoRestorecommerceRuleRule>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IoRestorecommerceAuthSubject>;
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
  Read?: Maybe<ProtoIoRestorecommercePolicySetPolicySetList>;
};


export type AccessControlPolicySetQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommercePolicySetPolicySetList = {
  __typename?: 'ProtoIoRestorecommercePolicySetPolicySetList';
  status: StatusType;
  payload?: Maybe<IoRestorecommercePolicySetPolicySetList>;
};

export type IoRestorecommercePolicySetPolicySetList = {
  __typename?: 'IoRestorecommercePolicySetPolicySetList';
  items?: Maybe<Array<IoRestorecommercePolicySetPolicySet>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IoRestorecommerceAuthSubject>;
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
  Create?: Maybe<ProtoIoRestorecommercePolicyPolicyList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommercePolicyPolicyList>;
  Upsert?: Maybe<ProtoIoRestorecommercePolicyPolicyList>;
};


export type AccessControlPolicyMutationCreateArgs = {
  input: IIoRestorecommercePolicyPolicyList;
};


export type AccessControlPolicyMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type AccessControlPolicyMutationUpdateArgs = {
  input: IIoRestorecommercePolicyPolicyList;
};


export type AccessControlPolicyMutationUpsertArgs = {
  input: IIoRestorecommercePolicyPolicyList;
};

export type IIoRestorecommercePolicyPolicyList = {
  items?: Maybe<Array<IIoRestorecommercePolicyPolicy>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IIoRestorecommerceAuthSubject>;
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

export type ProtoGoogleProtobufEmpty = {
  __typename?: 'ProtoGoogleProtobufEmpty';
  status: StatusType;
};

export type IIoRestorecommerceResourcebaseDeleteRequest = {
  collection?: Maybe<Scalars['Boolean']>;
  ids?: Maybe<Array<Scalars['String']>>;
  subject?: Maybe<IIoRestorecommerceAuthSubject>;
};

export type AccessControlRuleMutation = {
  __typename?: 'AccessControlRuleMutation';
  Create?: Maybe<ProtoIoRestorecommerceRuleRuleList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommerceRuleRuleList>;
  Upsert?: Maybe<ProtoIoRestorecommerceRuleRuleList>;
};


export type AccessControlRuleMutationCreateArgs = {
  input: IIoRestorecommerceRuleRuleList;
};


export type AccessControlRuleMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type AccessControlRuleMutationUpdateArgs = {
  input: IIoRestorecommerceRuleRuleList;
};


export type AccessControlRuleMutationUpsertArgs = {
  input: IIoRestorecommerceRuleRuleList;
};

export type IIoRestorecommerceRuleRuleList = {
  items?: Maybe<Array<IIoRestorecommerceRuleRule>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IIoRestorecommerceAuthSubject>;
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
  Create?: Maybe<ProtoIoRestorecommercePolicySetPolicySetList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommercePolicySetPolicySetList>;
  Upsert?: Maybe<ProtoIoRestorecommercePolicySetPolicySetList>;
};


export type AccessControlPolicySetMutationCreateArgs = {
  input: IIoRestorecommercePolicySetPolicySetList;
};


export type AccessControlPolicySetMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type AccessControlPolicySetMutationUpdateArgs = {
  input: IIoRestorecommercePolicySetPolicySetList;
};


export type AccessControlPolicySetMutationUpsertArgs = {
  input: IIoRestorecommercePolicySetPolicySetList;
};

export type IIoRestorecommercePolicySetPolicySetList = {
  items?: Maybe<Array<IIoRestorecommercePolicySetPolicySet>>;
  totalCount?: Maybe<Scalars['Int']>;
  subject?: Maybe<IIoRestorecommerceAuthSubject>;
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
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IoRestorecommerceAccessControlResponse: ResolverTypeWrapper<IoRestorecommerceAccessControlResponse>;
  IoRestorecommerceAccessControlResponseDecision: IoRestorecommerceAccessControlResponseDecision;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
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
  ProtoIoRestorecommercePolicyPolicyList: ResolverTypeWrapper<ProtoIoRestorecommercePolicyPolicyList>;
  IoRestorecommercePolicyPolicyList: ResolverTypeWrapper<IoRestorecommercePolicyPolicyList>;
  IoRestorecommercePolicyPolicy: ResolverTypeWrapper<IoRestorecommercePolicyPolicy>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  IoRestorecommerceAuthSubject: ResolverTypeWrapper<IoRestorecommerceAuthSubject>;
  IoRestorecommerceAuthRoleAssociation: ResolverTypeWrapper<IoRestorecommerceAuthRoleAssociation>;
  IoRestorecommerceAuthHierarchicalScope: ResolverTypeWrapper<IoRestorecommerceAuthHierarchicalScope>;
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IoRestorecommerceResourcebaseSortSortOrder: IoRestorecommerceResourcebaseSortSortOrder;
  IGoogleProtobufStruct: IGoogleProtobufStruct;
  IGoogleProtobufStructFieldsEntry: IGoogleProtobufStructFieldsEntry;
  IGoogleProtobufValue: IGoogleProtobufValue;
  GoogleProtobufNullValue: GoogleProtobufNullValue;
  IGoogleProtobufListValue: IGoogleProtobufListValue;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  IIoRestorecommerceAuthSubject: IIoRestorecommerceAuthSubject;
  IIoRestorecommerceAuthRoleAssociation: IIoRestorecommerceAuthRoleAssociation;
  IIoRestorecommerceAuthHierarchicalScope: IIoRestorecommerceAuthHierarchicalScope;
  AccessControlRuleQuery: ResolverTypeWrapper<AccessControlRuleQuery>;
  ProtoIoRestorecommerceRuleRuleList: ResolverTypeWrapper<ProtoIoRestorecommerceRuleRuleList>;
  IoRestorecommerceRuleRuleList: ResolverTypeWrapper<IoRestorecommerceRuleRuleList>;
  IoRestorecommerceRuleRule: ResolverTypeWrapper<IoRestorecommerceRuleRule>;
  AccessControlPolicySetQuery: ResolverTypeWrapper<AccessControlPolicySetQuery>;
  ProtoIoRestorecommercePolicySetPolicySetList: ResolverTypeWrapper<ProtoIoRestorecommercePolicySetPolicySetList>;
  IoRestorecommercePolicySetPolicySetList: ResolverTypeWrapper<IoRestorecommercePolicySetPolicySetList>;
  IoRestorecommercePolicySetPolicySet: ResolverTypeWrapper<IoRestorecommercePolicySetPolicySet>;
  Mutation: ResolverTypeWrapper<{}>;
  AccessControlMutation: ResolverTypeWrapper<AccessControlMutation>;
  AccessControlPolicyMutation: ResolverTypeWrapper<AccessControlPolicyMutation>;
  IIoRestorecommercePolicyPolicyList: IIoRestorecommercePolicyPolicyList;
  IIoRestorecommercePolicyPolicy: IIoRestorecommercePolicyPolicy;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  ProtoGoogleProtobufEmpty: ResolverTypeWrapper<ProtoGoogleProtobufEmpty>;
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
  String: Scalars['String'];
  Int: Scalars['Int'];
  IoRestorecommerceAccessControlResponse: IoRestorecommerceAccessControlResponse;
  Boolean: Scalars['Boolean'];
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
  ProtoIoRestorecommercePolicyPolicyList: ProtoIoRestorecommercePolicyPolicyList;
  IoRestorecommercePolicyPolicyList: IoRestorecommercePolicyPolicyList;
  IoRestorecommercePolicyPolicy: IoRestorecommercePolicyPolicy;
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  Float: Scalars['Float'];
  IoRestorecommerceAuthSubject: IoRestorecommerceAuthSubject;
  IoRestorecommerceAuthRoleAssociation: IoRestorecommerceAuthRoleAssociation;
  IoRestorecommerceAuthHierarchicalScope: IoRestorecommerceAuthHierarchicalScope;
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IGoogleProtobufStruct: IGoogleProtobufStruct;
  IGoogleProtobufStructFieldsEntry: IGoogleProtobufStructFieldsEntry;
  IGoogleProtobufValue: IGoogleProtobufValue;
  IGoogleProtobufListValue: IGoogleProtobufListValue;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  IIoRestorecommerceAuthSubject: IIoRestorecommerceAuthSubject;
  IIoRestorecommerceAuthRoleAssociation: IIoRestorecommerceAuthRoleAssociation;
  IIoRestorecommerceAuthHierarchicalScope: IIoRestorecommerceAuthHierarchicalScope;
  AccessControlRuleQuery: AccessControlRuleQuery;
  ProtoIoRestorecommerceRuleRuleList: ProtoIoRestorecommerceRuleRuleList;
  IoRestorecommerceRuleRuleList: IoRestorecommerceRuleRuleList;
  IoRestorecommerceRuleRule: IoRestorecommerceRuleRule;
  AccessControlPolicySetQuery: AccessControlPolicySetQuery;
  ProtoIoRestorecommercePolicySetPolicySetList: ProtoIoRestorecommercePolicySetPolicySetList;
  IoRestorecommercePolicySetPolicySetList: IoRestorecommercePolicySetPolicySetList;
  IoRestorecommercePolicySetPolicySet: IoRestorecommercePolicySetPolicySet;
  Mutation: {};
  AccessControlMutation: AccessControlMutation;
  AccessControlPolicyMutation: AccessControlPolicyMutation;
  IIoRestorecommercePolicyPolicyList: IIoRestorecommercePolicyPolicyList;
  IIoRestorecommercePolicyPolicy: IIoRestorecommercePolicyPolicy;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  ProtoGoogleProtobufEmpty: ProtoGoogleProtobufEmpty;
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
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAccessControlResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StatusTypeResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['StatusType'] = ResolversParentTypes['StatusType']> = ResolversObject<{
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAccessControlResponseResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceAccessControlResponse'] = ResolversParentTypes['IoRestorecommerceAccessControlResponse']> = ResolversObject<{
  decision?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAccessControlResponseDecision']>, ParentType, ContextType>;
  obligation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  evaluationCacheable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAccessControlResponseDecisionResolvers = { PERMIT: 'undefined', DENY: 1, NOT_APPLICABLE: 2, INDETERMINATE: 3 };

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type ProtoIoRestorecommerceAccessControlReverseQueryResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceAccessControlReverseQuery'] = ResolversParentTypes['ProtoIoRestorecommerceAccessControlReverseQuery']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAccessControlReverseQuery']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAccessControlReverseQueryResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceAccessControlReverseQuery'] = ResolversParentTypes['IoRestorecommerceAccessControlReverseQuery']> = ResolversObject<{
  policySets?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommercePolicySetPolicySetRQ']>>, ParentType, ContextType>;
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
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePolicyPolicyList']>, ParentType, ContextType, RequireFields<AccessControlPolicyQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommercePolicyPolicyListResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommercePolicyPolicyList'] = ResolversParentTypes['ProtoIoRestorecommercePolicyPolicyList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommercePolicyPolicyList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePolicyPolicyListResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommercePolicyPolicyList'] = ResolversParentTypes['IoRestorecommercePolicyPolicyList']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommercePolicyPolicy']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAuthSubject']>, ParentType, ContextType>;
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

export type IoRestorecommerceAuthSubjectResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthSubject'] = ResolversParentTypes['IoRestorecommerceAuthSubject']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roleAssociations?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAuthRoleAssociation']>>, ParentType, ContextType>;
  hierarchicalScopes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAuthHierarchicalScope']>>, ParentType, ContextType>;
  unauthenticated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthRoleAssociationResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthRoleAssociation'] = ResolversParentTypes['IoRestorecommerceAuthRoleAssociation']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthHierarchicalScopeResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthHierarchicalScope'] = ResolversParentTypes['IoRestorecommerceAuthHierarchicalScope']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  children?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAuthHierarchicalScope']>>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseSortSortOrderResolvers = { UNSORTED: 'undefined', ASCENDING: 1, DESCENDING: 2 };

export type AccessControlRuleQueryResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['AccessControlRuleQuery'] = ResolversParentTypes['AccessControlRuleQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceRuleRuleList']>, ParentType, ContextType, RequireFields<AccessControlRuleQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceRuleRuleListResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceRuleRuleList'] = ResolversParentTypes['ProtoIoRestorecommerceRuleRuleList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceRuleRuleList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceRuleRuleListResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceRuleRuleList'] = ResolversParentTypes['IoRestorecommerceRuleRuleList']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceRuleRule']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAuthSubject']>, ParentType, ContextType>;
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
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePolicySetPolicySetList']>, ParentType, ContextType, RequireFields<AccessControlPolicySetQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommercePolicySetPolicySetListResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommercePolicySetPolicySetList'] = ResolversParentTypes['ProtoIoRestorecommercePolicySetPolicySetList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommercePolicySetPolicySetList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePolicySetPolicySetListResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommercePolicySetPolicySetList'] = ResolversParentTypes['IoRestorecommercePolicySetPolicySetList']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommercePolicySetPolicySet']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAuthSubject']>, ParentType, ContextType>;
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
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePolicyPolicyList']>, ParentType, ContextType, RequireFields<AccessControlPolicyMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<AccessControlPolicyMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePolicyPolicyList']>, ParentType, ContextType, RequireFields<AccessControlPolicyMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePolicyPolicyList']>, ParentType, ContextType, RequireFields<AccessControlPolicyMutationUpsertArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoGoogleProtobufEmptyResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['ProtoGoogleProtobufEmpty'] = ResolversParentTypes['ProtoGoogleProtobufEmpty']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccessControlRuleMutationResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['AccessControlRuleMutation'] = ResolversParentTypes['AccessControlRuleMutation']> = ResolversObject<{
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceRuleRuleList']>, ParentType, ContextType, RequireFields<AccessControlRuleMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<AccessControlRuleMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceRuleRuleList']>, ParentType, ContextType, RequireFields<AccessControlRuleMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceRuleRuleList']>, ParentType, ContextType, RequireFields<AccessControlRuleMutationUpsertArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccessControlPolicySetMutationResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['AccessControlPolicySetMutation'] = ResolversParentTypes['AccessControlPolicySetMutation']> = ResolversObject<{
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePolicySetPolicySetList']>, ParentType, ContextType, RequireFields<AccessControlPolicySetMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<AccessControlPolicySetMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePolicySetPolicySetList']>, ParentType, ContextType, RequireFields<AccessControlPolicySetMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePolicySetPolicySetList']>, ParentType, ContextType, RequireFields<AccessControlPolicySetMutationUpsertArgs, 'input'>>;
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
  ProtoIoRestorecommercePolicyPolicyList?: ProtoIoRestorecommercePolicyPolicyListResolvers<ContextType>;
  IoRestorecommercePolicyPolicyList?: IoRestorecommercePolicyPolicyListResolvers<ContextType>;
  IoRestorecommercePolicyPolicy?: IoRestorecommercePolicyPolicyResolvers<ContextType>;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  IoRestorecommerceAuthSubject?: IoRestorecommerceAuthSubjectResolvers<ContextType>;
  IoRestorecommerceAuthRoleAssociation?: IoRestorecommerceAuthRoleAssociationResolvers<ContextType>;
  IoRestorecommerceAuthHierarchicalScope?: IoRestorecommerceAuthHierarchicalScopeResolvers<ContextType>;
  IoRestorecommerceResourcebaseSortSortOrder?: IoRestorecommerceResourcebaseSortSortOrderResolvers;
  AccessControlRuleQuery?: AccessControlRuleQueryResolvers<ContextType>;
  ProtoIoRestorecommerceRuleRuleList?: ProtoIoRestorecommerceRuleRuleListResolvers<ContextType>;
  IoRestorecommerceRuleRuleList?: IoRestorecommerceRuleRuleListResolvers<ContextType>;
  IoRestorecommerceRuleRule?: IoRestorecommerceRuleRuleResolvers<ContextType>;
  AccessControlPolicySetQuery?: AccessControlPolicySetQueryResolvers<ContextType>;
  ProtoIoRestorecommercePolicySetPolicySetList?: ProtoIoRestorecommercePolicySetPolicySetListResolvers<ContextType>;
  IoRestorecommercePolicySetPolicySetList?: IoRestorecommercePolicySetPolicySetListResolvers<ContextType>;
  IoRestorecommercePolicySetPolicySet?: IoRestorecommercePolicySetPolicySetResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  AccessControlMutation?: AccessControlMutationResolvers<ContextType>;
  AccessControlPolicyMutation?: AccessControlPolicyMutationResolvers<ContextType>;
  ProtoGoogleProtobufEmpty?: ProtoGoogleProtobufEmptyResolvers<ContextType>;
  AccessControlRuleMutation?: AccessControlRuleMutationResolvers<ContextType>;
  AccessControlPolicySetMutation?: AccessControlPolicySetMutationResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = AccessControlContext> = Resolvers<ContextType>;
