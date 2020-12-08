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
  MapScalar: any;
};

export type Query = {
  __typename?: 'Query';
  access_control: AccessControlQuery;
};

export type AccessControlQuery = {
  __typename?: 'AccessControlQuery';
  access_control: AccessControlAccess_ControlQuery;
  policy: AccessControlPolicyQuery;
  rule: AccessControlRuleQuery;
  policy_set: AccessControlPolicy_SetQuery;
};

export type AccessControlAccess_ControlQuery = {
  __typename?: 'AccessControlAccess_controlQuery';
  IsAllowed?: Maybe<ProtoIoRestorecommerceAccess_ControlResponse>;
  WhatIsAllowed?: Maybe<ProtoIoRestorecommerceAccess_ControlReverseQuery>;
};


export type AccessControlAccess_ControlQueryIsAllowedArgs = {
  input: IIoRestorecommerceAccess_ControlRequest;
};


export type AccessControlAccess_ControlQueryWhatIsAllowedArgs = {
  input: IIoRestorecommerceAccess_ControlRequest;
};

export type ProtoIoRestorecommerceAccess_ControlResponse = {
  __typename?: 'ProtoIoRestorecommerceAccess_controlResponse';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceAccess_ControlResponse>;
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

export type IoRestorecommerceAccess_ControlResponse = {
  __typename?: 'IoRestorecommerceAccess_controlResponse';
  decision: IoRestorecommerceAccess_controlResponseDecision;
  obligation: Scalars['String'];
  evaluationCacheable: Scalars['Boolean'];
};

export enum IoRestorecommerceAccess_ControlResponseDecision {
  Permit = 0,
  Deny = 1,
  NotApplicable = 2,
  Indeterminate = 3,
  Unrecognized = -1
}

export type IIoRestorecommerceAccess_ControlRequest = {
  target: IIoRestorecommerceRuleTarget;
  context: IIoRestorecommerceAccess_ControlContext;
};

export type IIoRestorecommerceRuleTarget = {
  subject: Array<IIoRestorecommerceAttributeAttribute>;
  resources: Array<IIoRestorecommerceAttributeAttribute>;
  action: Array<IIoRestorecommerceAttributeAttribute>;
};

export type IIoRestorecommerceAttributeAttribute = {
  id: Scalars['String'];
  value: Scalars['String'];
};

export type IIoRestorecommerceAccess_ControlContext = {
  subject: IGoogleProtobufAny;
  resources: Array<IGoogleProtobufAny>;
  security: IGoogleProtobufAny;
};

export type IGoogleProtobufAny = {
  typeUrl: Scalars['String'];
  value: Scalars['Upload'];
};


export type ProtoIoRestorecommerceAccess_ControlReverseQuery = {
  __typename?: 'ProtoIoRestorecommerceAccess_controlReverseQuery';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceAccess_ControlReverseQuery>;
};

export type IoRestorecommerceAccess_ControlReverseQuery = {
  __typename?: 'IoRestorecommerceAccess_controlReverseQuery';
  policySets: Array<IoRestorecommercePolicy_SetPolicySetRq>;
};

export type IoRestorecommercePolicy_SetPolicySetRq = {
  __typename?: 'IoRestorecommercePolicy_setPolicySetRQ';
  id: Scalars['String'];
  target: IoRestorecommerceRuleTarget;
  combiningAlgorithm: Scalars['String'];
  policies: Array<IoRestorecommercePolicyPolicyRq>;
  effect: IoRestorecommerceRuleEffect;
};

export type IoRestorecommerceRuleTarget = {
  __typename?: 'IoRestorecommerceRuleTarget';
  subject: Array<IoRestorecommerceAttributeAttribute>;
  resources: Array<IoRestorecommerceAttributeAttribute>;
  action: Array<IoRestorecommerceAttributeAttribute>;
};

export type IoRestorecommerceAttributeAttribute = {
  __typename?: 'IoRestorecommerceAttributeAttribute';
  id: Scalars['String'];
  value: Scalars['String'];
};

export type IoRestorecommercePolicyPolicyRq = {
  __typename?: 'IoRestorecommercePolicyPolicyRQ';
  id: Scalars['String'];
  target: IoRestorecommerceRuleTarget;
  combiningAlgorithm: Scalars['String'];
  rules: Array<IoRestorecommerceRuleRuleRq>;
  effect: IoRestorecommerceRuleEffect;
  hasRules: Scalars['Boolean'];
  evaluationCacheable: Scalars['Boolean'];
};

export type IoRestorecommerceRuleRuleRq = {
  __typename?: 'IoRestorecommerceRuleRuleRQ';
  id: Scalars['String'];
  target: IoRestorecommerceRuleTarget;
  effect: IoRestorecommerceRuleEffect;
  condition: Scalars['String'];
  contextQuery: IoRestorecommerceRuleContextQuery;
  evaluationCacheable: Scalars['Boolean'];
};

export enum IoRestorecommerceRuleEffect {
  Permit = 0,
  Deny = 1,
  Unrecognized = -1
}

export type IoRestorecommerceRuleContextQuery = {
  __typename?: 'IoRestorecommerceRuleContextQuery';
  filters: Array<IoRestorecommerceRuleContextQueryFilter>;
  query: Scalars['String'];
};

export type IoRestorecommerceRuleContextQueryFilter = {
  __typename?: 'IoRestorecommerceRuleContextQueryFilter';
  field: Scalars['String'];
  operation: Scalars['String'];
  value: Scalars['String'];
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
  items: Array<IoRestorecommercePolicyPolicy>;
  totalCount: Scalars['Int'];
  subject: IoRestorecommerceAuthSubject;
};

export type IoRestorecommercePolicyPolicy = {
  __typename?: 'IoRestorecommercePolicyPolicy';
  id: Scalars['String'];
  meta: IoRestorecommerceMetaMeta;
  name: Scalars['String'];
  description: Scalars['String'];
  rules: Array<Scalars['String']>;
  target: IoRestorecommerceRuleTarget;
  effect: IoRestorecommerceRuleEffect;
  combiningAlgorithm: Scalars['String'];
  evaluationCacheable: Scalars['Boolean'];
};

export type IoRestorecommerceMetaMeta = {
  __typename?: 'IoRestorecommerceMetaMeta';
  created: Scalars['Float'];
  modified: Scalars['Float'];
  modifiedBy: Scalars['String'];
  owner: Array<IoRestorecommerceAttributeAttribute>;
};

export type IoRestorecommerceAuthSubject = {
  __typename?: 'IoRestorecommerceAuthSubject';
  id: Scalars['String'];
  scope: Scalars['String'];
  roleAssociations: Array<IoRestorecommerceAuthRoleAssociation>;
  hierarchicalScopes: Array<IoRestorecommerceAuthHierarchicalScope>;
  unauthenticated: Scalars['Boolean'];
  token: Scalars['String'];
};

export type IoRestorecommerceAuthRoleAssociation = {
  __typename?: 'IoRestorecommerceAuthRoleAssociation';
  role: Scalars['String'];
  attributes: Array<IoRestorecommerceAttributeAttribute>;
  id: Scalars['String'];
};

export type IoRestorecommerceAuthHierarchicalScope = {
  __typename?: 'IoRestorecommerceAuthHierarchicalScope';
  id: Scalars['String'];
  children: Array<IoRestorecommerceAuthHierarchicalScope>;
  role: Scalars['String'];
};

export type IIoRestorecommerceResourcebaseReadRequest = {
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  sort: Array<IIoRestorecommerceResourcebaseSort>;
  filter: IGoogleProtobufStruct;
  field: Array<IIoRestorecommerceResourcebaseFieldFilter>;
  search: Array<Scalars['String']>;
  localesLimiter: Array<Scalars['String']>;
  customQueries: Array<Scalars['String']>;
  customArguments: IGoogleProtobufAny;
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceResourcebaseSort = {
  field: Scalars['String'];
  order: IoRestorecommerceResourcebaseSortSortOrder;
};

export enum IoRestorecommerceResourcebaseSortSortOrder {
  Unsorted = 0,
  Ascending = 1,
  Descending = 2,
  Unrecognized = -1
}

export type IGoogleProtobufStruct = {
  fields: Scalars['MapScalar'];
};


export type IIoRestorecommerceResourcebaseFieldFilter = {
  name: Scalars['String'];
  include: Scalars['Boolean'];
};

export type IIoRestorecommerceAuthSubject = {
  id: Scalars['String'];
  scope: Scalars['String'];
  roleAssociations: Array<IIoRestorecommerceAuthRoleAssociation>;
  hierarchicalScopes: Array<IIoRestorecommerceAuthHierarchicalScope>;
  unauthenticated: Scalars['Boolean'];
  token: Scalars['String'];
};

export type IIoRestorecommerceAuthRoleAssociation = {
  role: Scalars['String'];
  attributes: Array<IIoRestorecommerceAttributeAttribute>;
  id: Scalars['String'];
};

export type IIoRestorecommerceAuthHierarchicalScope = {
  id: Scalars['String'];
  children: Array<IIoRestorecommerceAuthHierarchicalScope>;
  role: Scalars['String'];
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
  items: Array<IoRestorecommerceRuleRule>;
  totalCount: Scalars['Int'];
  subject: IoRestorecommerceAuthSubject;
};

export type IoRestorecommerceRuleRule = {
  __typename?: 'IoRestorecommerceRuleRule';
  id: Scalars['String'];
  meta: IoRestorecommerceMetaMeta;
  name: Scalars['String'];
  description: Scalars['String'];
  target: IoRestorecommerceRuleTarget;
  contextQuery: IoRestorecommerceRuleContextQuery;
  condition: Scalars['String'];
  effect: IoRestorecommerceRuleEffect;
  evaluationCacheable: Scalars['Boolean'];
};

export type AccessControlPolicy_SetQuery = {
  __typename?: 'AccessControlPolicy_setQuery';
  Read?: Maybe<ProtoIoRestorecommercePolicy_SetPolicySetList>;
};


export type AccessControlPolicy_SetQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommercePolicy_SetPolicySetList = {
  __typename?: 'ProtoIoRestorecommercePolicy_setPolicySetList';
  status: StatusType;
  payload?: Maybe<IoRestorecommercePolicy_SetPolicySetList>;
};

export type IoRestorecommercePolicy_SetPolicySetList = {
  __typename?: 'IoRestorecommercePolicy_setPolicySetList';
  items: Array<IoRestorecommercePolicy_SetPolicySet>;
  totalCount: Scalars['Int'];
  subject: IoRestorecommerceAuthSubject;
};

export type IoRestorecommercePolicy_SetPolicySet = {
  __typename?: 'IoRestorecommercePolicy_setPolicySet';
  id: Scalars['String'];
  meta: IoRestorecommerceMetaMeta;
  name: Scalars['String'];
  description: Scalars['String'];
  target: IoRestorecommerceRuleTarget;
  combiningAlgorithm: Scalars['String'];
  policies: Array<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  access_control: AccessControlMutation;
};

export type AccessControlMutation = {
  __typename?: 'AccessControlMutation';
  policy: AccessControlPolicyMutation;
  rule: AccessControlRuleMutation;
  policy_set: AccessControlPolicy_SetMutation;
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
  items: Array<IIoRestorecommercePolicyPolicy>;
  totalCount: Scalars['Int'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommercePolicyPolicy = {
  id: Scalars['String'];
  meta: IIoRestorecommerceMetaMeta;
  name: Scalars['String'];
  description: Scalars['String'];
  rules: Array<Scalars['String']>;
  target: IIoRestorecommerceRuleTarget;
  effect: IoRestorecommerceRuleEffect;
  combiningAlgorithm: Scalars['String'];
  evaluationCacheable: Scalars['Boolean'];
};

export type IIoRestorecommerceMetaMeta = {
  created: Scalars['Float'];
  modified: Scalars['Float'];
  modifiedBy: Scalars['String'];
  owner: Array<IIoRestorecommerceAttributeAttribute>;
};

export type ProtoGoogleProtobufEmpty = {
  __typename?: 'ProtoGoogleProtobufEmpty';
  status: StatusType;
};

export type IIoRestorecommerceResourcebaseDeleteRequest = {
  collection: Scalars['Boolean'];
  ids: Array<Scalars['String']>;
  subject: IIoRestorecommerceAuthSubject;
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
  items: Array<IIoRestorecommerceRuleRule>;
  totalCount: Scalars['Int'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceRuleRule = {
  id: Scalars['String'];
  meta: IIoRestorecommerceMetaMeta;
  name: Scalars['String'];
  description: Scalars['String'];
  target: IIoRestorecommerceRuleTarget;
  contextQuery: IIoRestorecommerceRuleContextQuery;
  condition: Scalars['String'];
  effect: IoRestorecommerceRuleEffect;
  evaluationCacheable: Scalars['Boolean'];
};

export type IIoRestorecommerceRuleContextQuery = {
  filters: Array<IIoRestorecommerceRuleContextQueryFilter>;
  query: Scalars['String'];
};

export type IIoRestorecommerceRuleContextQueryFilter = {
  field: Scalars['String'];
  operation: Scalars['String'];
  value: Scalars['String'];
};

export type AccessControlPolicy_SetMutation = {
  __typename?: 'AccessControlPolicy_setMutation';
  Create?: Maybe<ProtoIoRestorecommercePolicy_SetPolicySetList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommercePolicy_SetPolicySetList>;
  Upsert?: Maybe<ProtoIoRestorecommercePolicy_SetPolicySetList>;
};


export type AccessControlPolicy_SetMutationCreateArgs = {
  input: IIoRestorecommercePolicy_SetPolicySetList;
};


export type AccessControlPolicy_SetMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type AccessControlPolicy_SetMutationUpdateArgs = {
  input: IIoRestorecommercePolicy_SetPolicySetList;
};


export type AccessControlPolicy_SetMutationUpsertArgs = {
  input: IIoRestorecommercePolicy_SetPolicySetList;
};

export type IIoRestorecommercePolicy_SetPolicySetList = {
  items: Array<IIoRestorecommercePolicy_SetPolicySet>;
  totalCount: Scalars['Int'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommercePolicy_SetPolicySet = {
  id: Scalars['String'];
  meta: IIoRestorecommerceMetaMeta;
  name: Scalars['String'];
  description: Scalars['String'];
  target: IIoRestorecommerceRuleTarget;
  combiningAlgorithm: Scalars['String'];
  policies: Array<Scalars['String']>;
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
  AccessControlAccess_controlQuery: ResolverTypeWrapper<AccessControlAccess_ControlQuery>;
  ProtoIoRestorecommerceAccess_controlResponse: ResolverTypeWrapper<ProtoIoRestorecommerceAccess_ControlResponse>;
  StatusType: ResolverTypeWrapper<StatusType>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IoRestorecommerceAccess_controlResponse: ResolverTypeWrapper<IoRestorecommerceAccess_ControlResponse>;
  IoRestorecommerceAccess_controlResponseDecision: IoRestorecommerceAccess_ControlResponseDecision;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  IIoRestorecommerceAccess_controlRequest: IIoRestorecommerceAccess_ControlRequest;
  IIoRestorecommerceRuleTarget: IIoRestorecommerceRuleTarget;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAccess_controlContext: IIoRestorecommerceAccess_ControlContext;
  IGoogleProtobufAny: IGoogleProtobufAny;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  ProtoIoRestorecommerceAccess_controlReverseQuery: ResolverTypeWrapper<ProtoIoRestorecommerceAccess_ControlReverseQuery>;
  IoRestorecommerceAccess_controlReverseQuery: ResolverTypeWrapper<IoRestorecommerceAccess_ControlReverseQuery>;
  IoRestorecommercePolicy_setPolicySetRQ: ResolverTypeWrapper<IoRestorecommercePolicy_SetPolicySetRq>;
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
  MapScalar: ResolverTypeWrapper<Scalars['MapScalar']>;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  IIoRestorecommerceAuthSubject: IIoRestorecommerceAuthSubject;
  IIoRestorecommerceAuthRoleAssociation: IIoRestorecommerceAuthRoleAssociation;
  IIoRestorecommerceAuthHierarchicalScope: IIoRestorecommerceAuthHierarchicalScope;
  AccessControlRuleQuery: ResolverTypeWrapper<AccessControlRuleQuery>;
  ProtoIoRestorecommerceRuleRuleList: ResolverTypeWrapper<ProtoIoRestorecommerceRuleRuleList>;
  IoRestorecommerceRuleRuleList: ResolverTypeWrapper<IoRestorecommerceRuleRuleList>;
  IoRestorecommerceRuleRule: ResolverTypeWrapper<IoRestorecommerceRuleRule>;
  AccessControlPolicy_setQuery: ResolverTypeWrapper<AccessControlPolicy_SetQuery>;
  ProtoIoRestorecommercePolicy_setPolicySetList: ResolverTypeWrapper<ProtoIoRestorecommercePolicy_SetPolicySetList>;
  IoRestorecommercePolicy_setPolicySetList: ResolverTypeWrapper<IoRestorecommercePolicy_SetPolicySetList>;
  IoRestorecommercePolicy_setPolicySet: ResolverTypeWrapper<IoRestorecommercePolicy_SetPolicySet>;
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
  AccessControlPolicy_setMutation: ResolverTypeWrapper<AccessControlPolicy_SetMutation>;
  IIoRestorecommercePolicy_setPolicySetList: IIoRestorecommercePolicy_SetPolicySetList;
  IIoRestorecommercePolicy_setPolicySet: IIoRestorecommercePolicy_SetPolicySet;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  AccessControlQuery: AccessControlQuery;
  AccessControlAccess_controlQuery: AccessControlAccess_ControlQuery;
  ProtoIoRestorecommerceAccess_controlResponse: ProtoIoRestorecommerceAccess_ControlResponse;
  StatusType: StatusType;
  String: Scalars['String'];
  Int: Scalars['Int'];
  IoRestorecommerceAccess_controlResponse: IoRestorecommerceAccess_ControlResponse;
  Boolean: Scalars['Boolean'];
  IIoRestorecommerceAccess_controlRequest: IIoRestorecommerceAccess_ControlRequest;
  IIoRestorecommerceRuleTarget: IIoRestorecommerceRuleTarget;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAccess_controlContext: IIoRestorecommerceAccess_ControlContext;
  IGoogleProtobufAny: IGoogleProtobufAny;
  Upload: Scalars['Upload'];
  ProtoIoRestorecommerceAccess_controlReverseQuery: ProtoIoRestorecommerceAccess_ControlReverseQuery;
  IoRestorecommerceAccess_controlReverseQuery: IoRestorecommerceAccess_ControlReverseQuery;
  IoRestorecommercePolicy_setPolicySetRQ: IoRestorecommercePolicy_SetPolicySetRq;
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
  MapScalar: Scalars['MapScalar'];
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  IIoRestorecommerceAuthSubject: IIoRestorecommerceAuthSubject;
  IIoRestorecommerceAuthRoleAssociation: IIoRestorecommerceAuthRoleAssociation;
  IIoRestorecommerceAuthHierarchicalScope: IIoRestorecommerceAuthHierarchicalScope;
  AccessControlRuleQuery: AccessControlRuleQuery;
  ProtoIoRestorecommerceRuleRuleList: ProtoIoRestorecommerceRuleRuleList;
  IoRestorecommerceRuleRuleList: IoRestorecommerceRuleRuleList;
  IoRestorecommerceRuleRule: IoRestorecommerceRuleRule;
  AccessControlPolicy_setQuery: AccessControlPolicy_SetQuery;
  ProtoIoRestorecommercePolicy_setPolicySetList: ProtoIoRestorecommercePolicy_SetPolicySetList;
  IoRestorecommercePolicy_setPolicySetList: IoRestorecommercePolicy_SetPolicySetList;
  IoRestorecommercePolicy_setPolicySet: IoRestorecommercePolicy_SetPolicySet;
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
  AccessControlPolicy_setMutation: AccessControlPolicy_SetMutation;
  IIoRestorecommercePolicy_setPolicySetList: IIoRestorecommercePolicy_SetPolicySetList;
  IIoRestorecommercePolicy_setPolicySet: IIoRestorecommercePolicy_SetPolicySet;
}>;

export type QueryResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  access_control?: Resolver<ResolversTypes['AccessControlQuery'], ParentType, ContextType>;
}>;

export type AccessControlQueryResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['AccessControlQuery'] = ResolversParentTypes['AccessControlQuery']> = ResolversObject<{
  access_control?: Resolver<ResolversTypes['AccessControlAccess_controlQuery'], ParentType, ContextType>;
  policy?: Resolver<ResolversTypes['AccessControlPolicyQuery'], ParentType, ContextType>;
  rule?: Resolver<ResolversTypes['AccessControlRuleQuery'], ParentType, ContextType>;
  policy_set?: Resolver<ResolversTypes['AccessControlPolicy_setQuery'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccessControlAccess_ControlQueryResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['AccessControlAccess_controlQuery'] = ResolversParentTypes['AccessControlAccess_controlQuery']> = ResolversObject<{
  IsAllowed?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceAccess_controlResponse']>, ParentType, ContextType, RequireFields<AccessControlAccess_ControlQueryIsAllowedArgs, 'input'>>;
  WhatIsAllowed?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceAccess_controlReverseQuery']>, ParentType, ContextType, RequireFields<AccessControlAccess_ControlQueryWhatIsAllowedArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceAccess_ControlResponseResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceAccess_controlResponse'] = ResolversParentTypes['ProtoIoRestorecommerceAccess_controlResponse']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAccess_controlResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StatusTypeResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['StatusType'] = ResolversParentTypes['StatusType']> = ResolversObject<{
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAccess_ControlResponseResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceAccess_controlResponse'] = ResolversParentTypes['IoRestorecommerceAccess_controlResponse']> = ResolversObject<{
  decision?: Resolver<ResolversTypes['IoRestorecommerceAccess_controlResponseDecision'], ParentType, ContextType>;
  obligation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  evaluationCacheable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAccess_ControlResponseDecisionResolvers = { PERMIT: 'undefined', DENY: 1, NOT_APPLICABLE: 2, INDETERMINATE: 3, UNRECOGNIZED: -1 };

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type ProtoIoRestorecommerceAccess_ControlReverseQueryResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceAccess_controlReverseQuery'] = ResolversParentTypes['ProtoIoRestorecommerceAccess_controlReverseQuery']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAccess_controlReverseQuery']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAccess_ControlReverseQueryResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceAccess_controlReverseQuery'] = ResolversParentTypes['IoRestorecommerceAccess_controlReverseQuery']> = ResolversObject<{
  policySets?: Resolver<Array<ResolversTypes['IoRestorecommercePolicy_setPolicySetRQ']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePolicy_SetPolicySetRqResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommercePolicy_setPolicySetRQ'] = ResolversParentTypes['IoRestorecommercePolicy_setPolicySetRQ']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['IoRestorecommerceRuleTarget'], ParentType, ContextType>;
  combiningAlgorithm?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  policies?: Resolver<Array<ResolversTypes['IoRestorecommercePolicyPolicyRQ']>, ParentType, ContextType>;
  effect?: Resolver<ResolversTypes['IoRestorecommerceRuleEffect'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceRuleTargetResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceRuleTarget'] = ResolversParentTypes['IoRestorecommerceRuleTarget']> = ResolversObject<{
  subject?: Resolver<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
  resources?: Resolver<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
  action?: Resolver<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePolicyPolicyRqResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommercePolicyPolicyRQ'] = ResolversParentTypes['IoRestorecommercePolicyPolicyRQ']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['IoRestorecommerceRuleTarget'], ParentType, ContextType>;
  combiningAlgorithm?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rules?: Resolver<Array<ResolversTypes['IoRestorecommerceRuleRuleRQ']>, ParentType, ContextType>;
  effect?: Resolver<ResolversTypes['IoRestorecommerceRuleEffect'], ParentType, ContextType>;
  hasRules?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  evaluationCacheable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceRuleRuleRqResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceRuleRuleRQ'] = ResolversParentTypes['IoRestorecommerceRuleRuleRQ']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['IoRestorecommerceRuleTarget'], ParentType, ContextType>;
  effect?: Resolver<ResolversTypes['IoRestorecommerceRuleEffect'], ParentType, ContextType>;
  condition?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contextQuery?: Resolver<ResolversTypes['IoRestorecommerceRuleContextQuery'], ParentType, ContextType>;
  evaluationCacheable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceRuleEffectResolvers = { PERMIT: 'undefined', DENY: 1, UNRECOGNIZED: -1 };

export type IoRestorecommerceRuleContextQueryResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceRuleContextQuery'] = ResolversParentTypes['IoRestorecommerceRuleContextQuery']> = ResolversObject<{
  filters?: Resolver<Array<ResolversTypes['IoRestorecommerceRuleContextQueryFilter']>, ParentType, ContextType>;
  query?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceRuleContextQueryFilterResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceRuleContextQueryFilter'] = ResolversParentTypes['IoRestorecommerceRuleContextQueryFilter']> = ResolversObject<{
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  operation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  items?: Resolver<Array<ResolversTypes['IoRestorecommercePolicyPolicy']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['IoRestorecommerceAuthSubject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePolicyPolicyResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommercePolicyPolicy'] = ResolversParentTypes['IoRestorecommercePolicyPolicy']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['IoRestorecommerceMetaMeta'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rules?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  target?: Resolver<ResolversTypes['IoRestorecommerceRuleTarget'], ParentType, ContextType>;
  effect?: Resolver<ResolversTypes['IoRestorecommerceRuleEffect'], ParentType, ContextType>;
  combiningAlgorithm?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  evaluationCacheable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceMetaMetaResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceMetaMeta'] = ResolversParentTypes['IoRestorecommerceMetaMeta']> = ResolversObject<{
  created?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  modified?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  modifiedBy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthSubjectResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthSubject'] = ResolversParentTypes['IoRestorecommerceAuthSubject']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  scope?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roleAssociations?: Resolver<Array<ResolversTypes['IoRestorecommerceAuthRoleAssociation']>, ParentType, ContextType>;
  hierarchicalScopes?: Resolver<Array<ResolversTypes['IoRestorecommerceAuthHierarchicalScope']>, ParentType, ContextType>;
  unauthenticated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthRoleAssociationResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthRoleAssociation'] = ResolversParentTypes['IoRestorecommerceAuthRoleAssociation']> = ResolversObject<{
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  attributes?: Resolver<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthHierarchicalScopeResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthHierarchicalScope'] = ResolversParentTypes['IoRestorecommerceAuthHierarchicalScope']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['IoRestorecommerceAuthHierarchicalScope']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseSortSortOrderResolvers = { UNSORTED: 'undefined', ASCENDING: 1, DESCENDING: 2, UNRECOGNIZED: -1 };

export interface MapScalarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['MapScalar'], any> {
  name: 'MapScalar';
}

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
  items?: Resolver<Array<ResolversTypes['IoRestorecommerceRuleRule']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['IoRestorecommerceAuthSubject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceRuleRuleResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommerceRuleRule'] = ResolversParentTypes['IoRestorecommerceRuleRule']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['IoRestorecommerceMetaMeta'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['IoRestorecommerceRuleTarget'], ParentType, ContextType>;
  contextQuery?: Resolver<ResolversTypes['IoRestorecommerceRuleContextQuery'], ParentType, ContextType>;
  condition?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  effect?: Resolver<ResolversTypes['IoRestorecommerceRuleEffect'], ParentType, ContextType>;
  evaluationCacheable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccessControlPolicy_SetQueryResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['AccessControlPolicy_setQuery'] = ResolversParentTypes['AccessControlPolicy_setQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePolicy_setPolicySetList']>, ParentType, ContextType, RequireFields<AccessControlPolicy_SetQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommercePolicy_SetPolicySetListResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommercePolicy_setPolicySetList'] = ResolversParentTypes['ProtoIoRestorecommercePolicy_setPolicySetList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommercePolicy_setPolicySetList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePolicy_SetPolicySetListResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommercePolicy_setPolicySetList'] = ResolversParentTypes['IoRestorecommercePolicy_setPolicySetList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['IoRestorecommercePolicy_setPolicySet']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['IoRestorecommerceAuthSubject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePolicy_SetPolicySetResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['IoRestorecommercePolicy_setPolicySet'] = ResolversParentTypes['IoRestorecommercePolicy_setPolicySet']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['IoRestorecommerceMetaMeta'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['IoRestorecommerceRuleTarget'], ParentType, ContextType>;
  combiningAlgorithm?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  policies?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  access_control?: Resolver<ResolversTypes['AccessControlMutation'], ParentType, ContextType>;
}>;

export type AccessControlMutationResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['AccessControlMutation'] = ResolversParentTypes['AccessControlMutation']> = ResolversObject<{
  policy?: Resolver<ResolversTypes['AccessControlPolicyMutation'], ParentType, ContextType>;
  rule?: Resolver<ResolversTypes['AccessControlRuleMutation'], ParentType, ContextType>;
  policy_set?: Resolver<ResolversTypes['AccessControlPolicy_setMutation'], ParentType, ContextType>;
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

export type AccessControlPolicy_SetMutationResolvers<ContextType = AccessControlContext, ParentType extends ResolversParentTypes['AccessControlPolicy_setMutation'] = ResolversParentTypes['AccessControlPolicy_setMutation']> = ResolversObject<{
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePolicy_setPolicySetList']>, ParentType, ContextType, RequireFields<AccessControlPolicy_SetMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<AccessControlPolicy_SetMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePolicy_setPolicySetList']>, ParentType, ContextType, RequireFields<AccessControlPolicy_SetMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePolicy_setPolicySetList']>, ParentType, ContextType, RequireFields<AccessControlPolicy_SetMutationUpsertArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = AccessControlContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  AccessControlQuery?: AccessControlQueryResolvers<ContextType>;
  AccessControlAccess_controlQuery?: AccessControlAccess_ControlQueryResolvers<ContextType>;
  ProtoIoRestorecommerceAccess_controlResponse?: ProtoIoRestorecommerceAccess_ControlResponseResolvers<ContextType>;
  StatusType?: StatusTypeResolvers<ContextType>;
  IoRestorecommerceAccess_controlResponse?: IoRestorecommerceAccess_ControlResponseResolvers<ContextType>;
  IoRestorecommerceAccess_controlResponseDecision?: IoRestorecommerceAccess_ControlResponseDecisionResolvers;
  Upload?: GraphQLScalarType;
  ProtoIoRestorecommerceAccess_controlReverseQuery?: ProtoIoRestorecommerceAccess_ControlReverseQueryResolvers<ContextType>;
  IoRestorecommerceAccess_controlReverseQuery?: IoRestorecommerceAccess_ControlReverseQueryResolvers<ContextType>;
  IoRestorecommercePolicy_setPolicySetRQ?: IoRestorecommercePolicy_SetPolicySetRqResolvers<ContextType>;
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
  MapScalar?: GraphQLScalarType;
  AccessControlRuleQuery?: AccessControlRuleQueryResolvers<ContextType>;
  ProtoIoRestorecommerceRuleRuleList?: ProtoIoRestorecommerceRuleRuleListResolvers<ContextType>;
  IoRestorecommerceRuleRuleList?: IoRestorecommerceRuleRuleListResolvers<ContextType>;
  IoRestorecommerceRuleRule?: IoRestorecommerceRuleRuleResolvers<ContextType>;
  AccessControlPolicy_setQuery?: AccessControlPolicy_SetQueryResolvers<ContextType>;
  ProtoIoRestorecommercePolicy_setPolicySetList?: ProtoIoRestorecommercePolicy_SetPolicySetListResolvers<ContextType>;
  IoRestorecommercePolicy_setPolicySetList?: IoRestorecommercePolicy_SetPolicySetListResolvers<ContextType>;
  IoRestorecommercePolicy_setPolicySet?: IoRestorecommercePolicy_SetPolicySetResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  AccessControlMutation?: AccessControlMutationResolvers<ContextType>;
  AccessControlPolicyMutation?: AccessControlPolicyMutationResolvers<ContextType>;
  ProtoGoogleProtobufEmpty?: ProtoGoogleProtobufEmptyResolvers<ContextType>;
  AccessControlRuleMutation?: AccessControlRuleMutationResolvers<ContextType>;
  AccessControlPolicy_setMutation?: AccessControlPolicy_SetMutationResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = AccessControlContext> = Resolvers<ContextType>;
