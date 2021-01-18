import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { IdentityContext } from '../interfaces';
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
  MapScalar: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  TodoScalar: any;
};

export type Query = {
  __typename?: 'Query';
  identity: IdentityQuery;
};

export type IdentityQuery = {
  __typename?: 'IdentityQuery';
  user: IdentityUserQuery;
  role: IdentityRoleQuery;
  authentication_log: IdentityAuthenticationLogQuery;
  token: IdentityTokenQuery;
};

export type IdentityUserQuery = {
  __typename?: 'IdentityUserQuery';
  Read?: Maybe<ProtoIoRestorecommerceUserUserList>;
  Find?: Maybe<ProtoIoRestorecommerceUserUserList>;
  FindByRole?: Maybe<ProtoIoRestorecommerceUserUserList>;
  FindByToken?: Maybe<ProtoIoRestorecommerceUserUser>;
};


export type IdentityUserQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};


export type IdentityUserQueryFindArgs = {
  input: IIoRestorecommerceUserFindRequest;
};


export type IdentityUserQueryFindByRoleArgs = {
  input: IIoRestorecommerceUserFindByRoleRequest;
};


export type IdentityUserQueryFindByTokenArgs = {
  input: IIoRestorecommerceUserFindByTokenRequest;
};

export type ProtoIoRestorecommerceUserUserList = {
  __typename?: 'ProtoIoRestorecommerceUserUserList';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceUserUserList>;
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

export type IoRestorecommerceUserUserList = {
  __typename?: 'IoRestorecommerceUserUserList';
  items: Array<IoRestorecommerceUserUser>;
  totalCount: Scalars['Int'];
  subject: IoRestorecommerceAuthSubject;
};

export type IoRestorecommerceUserUser = {
  __typename?: 'IoRestorecommerceUserUser';
  id: Scalars['String'];
  meta: IoRestorecommerceMetaMeta;
  name: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  newEmail: Scalars['String'];
  active: Scalars['Boolean'];
  activationCode: Scalars['String'];
  password: Scalars['String'];
  passwordHash: Scalars['String'];
  roleAssociations: Array<IoRestorecommerceAuthRoleAssociation>;
  timezoneId: Scalars['String'];
  localeId: Scalars['String'];
  defaultScope: Scalars['String'];
  unauthenticated: Scalars['Boolean'];
  guest: Scalars['Boolean'];
  image: IoRestorecommerceImageImage;
  userType: IoRestorecommerceUserUserType;
  invite: Scalars['Boolean'];
  invitedByUserName: Scalars['String'];
  invitedByUserFirstName: Scalars['String'];
  invitedByUserLastName: Scalars['String'];
  tokens: Array<IoRestorecommerceAuthTokens>;
  lastLogin: Scalars['Float'];
  lastAccess: Scalars['Float'];
};

export type IoRestorecommerceMetaMeta = {
  __typename?: 'IoRestorecommerceMetaMeta';
  created: Scalars['Float'];
  modified: Scalars['Float'];
  modifiedBy: Scalars['String'];
  owner: Array<IoRestorecommerceAttributeAttribute>;
};

export type IoRestorecommerceAttributeAttribute = {
  __typename?: 'IoRestorecommerceAttributeAttribute';
  id: Scalars['String'];
  value: Scalars['String'];
};

export type IoRestorecommerceAuthRoleAssociation = {
  __typename?: 'IoRestorecommerceAuthRoleAssociation';
  role: Scalars['String'];
  attributes: Array<IoRestorecommerceAttributeAttribute>;
  id: Scalars['String'];
};

export type IoRestorecommerceImageImage = {
  __typename?: 'IoRestorecommerceImageImage';
  id: Scalars['String'];
  caption: Scalars['String'];
  filename: Scalars['String'];
  contentType: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Float'];
  height: Scalars['Float'];
  length: Scalars['Float'];
};

export enum IoRestorecommerceUserUserType {
  OrgUser = 0,
  IndividualUser = 1,
  Guest = 2,
  TechnicalUser = 3,
  Unrecognized = -1
}

export type IoRestorecommerceAuthTokens = {
  __typename?: 'IoRestorecommerceAuthTokens';
  name: Scalars['String'];
  expiresIn: Scalars['Float'];
  token: Scalars['String'];
  scopes: Array<Scalars['String']>;
  type: Scalars['String'];
  interactive: Scalars['Boolean'];
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

export type IGoogleProtobufAny = {
  typeUrl: Scalars['String'];
  value: Scalars['Upload'];
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

export type IIoRestorecommerceAttributeAttribute = {
  id: Scalars['String'];
  value: Scalars['String'];
};

export type IIoRestorecommerceAuthHierarchicalScope = {
  id: Scalars['String'];
  children: Array<IIoRestorecommerceAuthHierarchicalScope>;
  role: Scalars['String'];
};

export type IIoRestorecommerceUserFindRequest = {
  id: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceUserFindByRoleRequest = {
  role: Scalars['String'];
  attributes: Array<IIoRestorecommerceAttributeAttribute>;
  subject: IIoRestorecommerceAuthSubject;
};

export type ProtoIoRestorecommerceUserUser = {
  __typename?: 'ProtoIoRestorecommerceUserUser';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceUserUser>;
};

export type IIoRestorecommerceUserFindByTokenRequest = {
  token: Scalars['String'];
};

export type IdentityRoleQuery = {
  __typename?: 'IdentityRoleQuery';
  Read?: Maybe<ProtoIoRestorecommerceRoleRoleList>;
};


export type IdentityRoleQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceRoleRoleList = {
  __typename?: 'ProtoIoRestorecommerceRoleRoleList';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceRoleRoleList>;
};

export type IoRestorecommerceRoleRoleList = {
  __typename?: 'IoRestorecommerceRoleRoleList';
  items: Array<IoRestorecommerceRoleRole>;
  totalCount: Scalars['Int'];
  subject: IoRestorecommerceAuthSubject;
};

export type IoRestorecommerceRoleRole = {
  __typename?: 'IoRestorecommerceRoleRole';
  id: Scalars['String'];
  meta: IoRestorecommerceMetaMeta;
  name: Scalars['String'];
  description: Scalars['String'];
  assignableByRoles: Array<Scalars['String']>;
};

export type IdentityAuthenticationLogQuery = {
  __typename?: 'IdentityAuthenticationLogQuery';
  Read?: Maybe<ProtoIoRestorecommerceAuthenticationLogAuthenticationLogList>;
};


export type IdentityAuthenticationLogQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceAuthenticationLogAuthenticationLogList = {
  __typename?: 'ProtoIoRestorecommerceAuthenticationLogAuthenticationLogList';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceAuthenticationLogAuthenticationLogList>;
};

export type IoRestorecommerceAuthenticationLogAuthenticationLogList = {
  __typename?: 'IoRestorecommerceAuthenticationLogAuthenticationLogList';
  items: Array<IoRestorecommerceAuthenticationLogAuthenticationLog>;
  totalCount: Scalars['Int'];
  subject: IoRestorecommerceAuthSubject;
};

export type IoRestorecommerceAuthenticationLogAuthenticationLog = {
  __typename?: 'IoRestorecommerceAuthenticationLogAuthenticationLog';
  id: Scalars['String'];
  ipv4Address: Scalars['String'];
  ipv6Address: Scalars['String'];
  operatingSystem: Scalars['String'];
  userAgent: Scalars['String'];
  date: Scalars['Float'];
  activity: Scalars['String'];
  meta: IoRestorecommerceMetaMeta;
  subjectId: Scalars['String'];
  tokenName: Scalars['String'];
};

export type IdentityTokenQuery = {
  __typename?: 'IdentityTokenQuery';
  find?: Maybe<ProtoGoogleProtobufAny>;
};


export type IdentityTokenQueryFindArgs = {
  input: IIoRestorecommerceTokenIdentifier;
};

export type ProtoGoogleProtobufAny = {
  __typename?: 'ProtoGoogleProtobufAny';
  status: StatusType;
  payload?: Maybe<GoogleProtobufAny>;
};

export type GoogleProtobufAny = {
  __typename?: 'GoogleProtobufAny';
  typeUrl: Scalars['String'];
  value: Scalars['TodoScalar'];
};


export type IIoRestorecommerceTokenIdentifier = {
  id: Scalars['String'];
  type: Scalars['String'];
  subject: IIoRestorecommerceAuthSubject;
};

export type Mutation = {
  __typename?: 'Mutation';
  identity: IdentityMutation;
};

export type IdentityMutation = {
  __typename?: 'IdentityMutation';
  user: IdentityUserMutation;
  role: IdentityRoleMutation;
  authentication_log: IdentityAuthenticationLogMutation;
  token: IdentityTokenMutation;
};

export type IdentityUserMutation = {
  __typename?: 'IdentityUserMutation';
  Create?: Maybe<ProtoIoRestorecommerceUserUserList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommerceUserUserList>;
  Upsert?: Maybe<ProtoIoRestorecommerceUserUserList>;
  Register?: Maybe<ProtoIoRestorecommerceUserUser>;
  Activate?: Maybe<ProtoGoogleProtobufEmpty>;
  ChangePassword?: Maybe<ProtoGoogleProtobufEmpty>;
  RequestPasswordChange?: Maybe<ProtoGoogleProtobufEmpty>;
  RequestEmailChange?: Maybe<ProtoGoogleProtobufEmpty>;
  ConfirmPasswordChange?: Maybe<ProtoGoogleProtobufEmpty>;
  ConfirmEmailChange?: Maybe<ProtoGoogleProtobufEmpty>;
  Unregister?: Maybe<ProtoGoogleProtobufEmpty>;
  Login?: Maybe<ProtoIoRestorecommerceUserUser>;
  DeleteUsersByOrg?: Maybe<ProtoIoRestorecommerceUserUserIDs>;
  ConfirmUserInvitation?: Maybe<ProtoGoogleProtobufEmpty>;
  SendInvitationEmail?: Maybe<ProtoGoogleProtobufEmpty>;
};


export type IdentityUserMutationCreateArgs = {
  input: IIoRestorecommerceUserUserList;
};


export type IdentityUserMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type IdentityUserMutationUpdateArgs = {
  input: IIoRestorecommerceUserUserList;
};


export type IdentityUserMutationUpsertArgs = {
  input: IIoRestorecommerceUserUserList;
};


export type IdentityUserMutationRegisterArgs = {
  input: IIoRestorecommerceUserRegisterRequest;
};


export type IdentityUserMutationActivateArgs = {
  input: IIoRestorecommerceUserActivateRequest;
};


export type IdentityUserMutationChangePasswordArgs = {
  input: IIoRestorecommerceUserChangePasswordRequest;
};


export type IdentityUserMutationRequestPasswordChangeArgs = {
  input: IIoRestorecommerceUserRequestPasswordChangeRequest;
};


export type IdentityUserMutationRequestEmailChangeArgs = {
  input: IIoRestorecommerceUserChangeEmailRequest;
};


export type IdentityUserMutationConfirmPasswordChangeArgs = {
  input: IIoRestorecommerceUserConfirmPasswordChangeRequest;
};


export type IdentityUserMutationConfirmEmailChangeArgs = {
  input: IIoRestorecommerceUserConfirmEmailChangeRequest;
};


export type IdentityUserMutationUnregisterArgs = {
  input: IIoRestorecommerceUserUnregisterRequest;
};


export type IdentityUserMutationLoginArgs = {
  input: IIoRestorecommerceUserLoginRequest;
};


export type IdentityUserMutationDeleteUsersByOrgArgs = {
  input: IIoRestorecommerceUserOrgIdRequest;
};


export type IdentityUserMutationConfirmUserInvitationArgs = {
  input: IIoRestorecommerceUserConfirmUserInvitationRequest;
};


export type IdentityUserMutationSendInvitationEmailArgs = {
  input: IIoRestorecommerceUserSendInvitationEmailRequest;
};

export type IIoRestorecommerceUserUserList = {
  items: Array<IIoRestorecommerceUserUser>;
  totalCount: Scalars['Int'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceUserUser = {
  id: Scalars['String'];
  meta: IIoRestorecommerceMetaMeta;
  name: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  newEmail: Scalars['String'];
  active: Scalars['Boolean'];
  activationCode: Scalars['String'];
  password: Scalars['String'];
  passwordHash: Scalars['String'];
  roleAssociations: Array<IIoRestorecommerceAuthRoleAssociation>;
  timezoneId: Scalars['String'];
  localeId: Scalars['String'];
  defaultScope: Scalars['String'];
  unauthenticated: Scalars['Boolean'];
  guest: Scalars['Boolean'];
  image: IIoRestorecommerceImageImage;
  userType: IoRestorecommerceUserUserType;
  invite: Scalars['Boolean'];
  invitedByUserName: Scalars['String'];
  invitedByUserFirstName: Scalars['String'];
  invitedByUserLastName: Scalars['String'];
  tokens: Array<IIoRestorecommerceAuthTokens>;
  lastLogin: Scalars['Float'];
  lastAccess: Scalars['Float'];
};

export type IIoRestorecommerceMetaMeta = {
  created: Scalars['Float'];
  modified: Scalars['Float'];
  modifiedBy: Scalars['String'];
  owner: Array<IIoRestorecommerceAttributeAttribute>;
};

export type IIoRestorecommerceImageImage = {
  id: Scalars['String'];
  caption: Scalars['String'];
  filename: Scalars['String'];
  contentType: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Float'];
  height: Scalars['Float'];
  length: Scalars['Float'];
};

export type IIoRestorecommerceAuthTokens = {
  name: Scalars['String'];
  expiresIn: Scalars['Float'];
  token: Scalars['String'];
  scopes: Array<Scalars['String']>;
  type: Scalars['String'];
  interactive: Scalars['Boolean'];
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

export type IIoRestorecommerceUserRegisterRequest = {
  id: Scalars['String'];
  guest: Scalars['Boolean'];
  meta: IIoRestorecommerceMetaMeta;
  name: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  timezoneId: Scalars['String'];
  localeId: Scalars['String'];
  roleAssociations: Array<IIoRestorecommerceAuthRoleAssociation>;
  defaultScope: Scalars['String'];
  userType: IoRestorecommerceUserUserType;
  captchaCode: Scalars['String'];
};

export type IIoRestorecommerceUserActivateRequest = {
  name: Scalars['String'];
  activationCode: Scalars['String'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceUserChangePasswordRequest = {
  id: Scalars['String'];
  password: Scalars['String'];
  newPassword: Scalars['String'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceUserRequestPasswordChangeRequest = {
  name: Scalars['TodoScalar'];
  email: Scalars['TodoScalar'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceUserChangeEmailRequest = {
  id: Scalars['String'];
  email: Scalars['String'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceUserConfirmPasswordChangeRequest = {
  name: Scalars['String'];
  activationCode: Scalars['String'];
  password: Scalars['String'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceUserConfirmEmailChangeRequest = {
  name: Scalars['String'];
  activationCode: Scalars['String'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceUserUnregisterRequest = {
  id: Scalars['String'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceUserLoginRequest = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
};

export type ProtoIoRestorecommerceUserUserIDs = {
  __typename?: 'ProtoIoRestorecommerceUserUserIDs';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceUserUserIDs>;
};

export type IoRestorecommerceUserUserIDs = {
  __typename?: 'IoRestorecommerceUserUserIDs';
  userIds: Array<Scalars['String']>;
};

export type IIoRestorecommerceUserOrgIdRequest = {
  orgIds: Array<Scalars['String']>;
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceUserConfirmUserInvitationRequest = {
  name: Scalars['String'];
  password: Scalars['String'];
  activationCode: Scalars['String'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceUserSendInvitationEmailRequest = {
  userId: Scalars['String'];
  invitedByUserId: Scalars['String'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IdentityRoleMutation = {
  __typename?: 'IdentityRoleMutation';
  Create?: Maybe<ProtoIoRestorecommerceRoleRoleList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommerceRoleRoleList>;
  Upsert?: Maybe<ProtoIoRestorecommerceRoleRoleList>;
};


export type IdentityRoleMutationCreateArgs = {
  input: IIoRestorecommerceRoleRoleList;
};


export type IdentityRoleMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type IdentityRoleMutationUpdateArgs = {
  input: IIoRestorecommerceRoleRoleList;
};


export type IdentityRoleMutationUpsertArgs = {
  input: IIoRestorecommerceRoleRoleList;
};

export type IIoRestorecommerceRoleRoleList = {
  items: Array<IIoRestorecommerceRoleRole>;
  totalCount: Scalars['Int'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceRoleRole = {
  id: Scalars['String'];
  meta: IIoRestorecommerceMetaMeta;
  name: Scalars['String'];
  description: Scalars['String'];
  assignableByRoles: Array<Scalars['String']>;
};

export type IdentityAuthenticationLogMutation = {
  __typename?: 'IdentityAuthenticationLogMutation';
  Create?: Maybe<ProtoIoRestorecommerceAuthenticationLogAuthenticationLogList>;
  Delete?: Maybe<ProtoGoogleProtobufEmpty>;
  Update?: Maybe<ProtoIoRestorecommerceAuthenticationLogAuthenticationLogList>;
  Upsert?: Maybe<ProtoIoRestorecommerceAuthenticationLogAuthenticationLogList>;
};


export type IdentityAuthenticationLogMutationCreateArgs = {
  input: IIoRestorecommerceAuthenticationLogAuthenticationLogList;
};


export type IdentityAuthenticationLogMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type IdentityAuthenticationLogMutationUpdateArgs = {
  input: IIoRestorecommerceAuthenticationLogAuthenticationLogList;
};


export type IdentityAuthenticationLogMutationUpsertArgs = {
  input: IIoRestorecommerceAuthenticationLogAuthenticationLogList;
};

export type IIoRestorecommerceAuthenticationLogAuthenticationLogList = {
  items: Array<IIoRestorecommerceAuthenticationLogAuthenticationLog>;
  totalCount: Scalars['Int'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceAuthenticationLogAuthenticationLog = {
  id: Scalars['String'];
  ipv4Address: Scalars['String'];
  ipv6Address: Scalars['String'];
  operatingSystem: Scalars['String'];
  userAgent: Scalars['String'];
  date: Scalars['Float'];
  activity: Scalars['String'];
  meta: IIoRestorecommerceMetaMeta;
  subjectId: Scalars['String'];
  tokenName: Scalars['String'];
};

export type IdentityTokenMutation = {
  __typename?: 'IdentityTokenMutation';
  upsert?: Maybe<ProtoGoogleProtobufAny>;
  destroy?: Maybe<ProtoGoogleProtobufAny>;
  revokeByGrantId?: Maybe<ProtoGoogleProtobufAny>;
  consume?: Maybe<ProtoGoogleProtobufAny>;
};


export type IdentityTokenMutationUpsertArgs = {
  input: IIoRestorecommerceTokenTokenData;
};


export type IdentityTokenMutationDestroyArgs = {
  input: IIoRestorecommerceTokenIdentifier;
};


export type IdentityTokenMutationRevokeByGrantIdArgs = {
  input: IIoRestorecommerceTokenGrantId;
};


export type IdentityTokenMutationConsumeArgs = {
  input: IIoRestorecommerceTokenIdentifier;
};

export type IIoRestorecommerceTokenTokenData = {
  id: Scalars['String'];
  payload: IGoogleProtobufAny;
  expiresIn: Scalars['Float'];
  type: Scalars['String'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceTokenGrantId = {
  grantId: Scalars['String'];
  subject: IIoRestorecommerceAuthSubject;
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
  IdentityQuery: ResolverTypeWrapper<IdentityQuery>;
  IdentityUserQuery: ResolverTypeWrapper<IdentityUserQuery>;
  ProtoIoRestorecommerceUserUserList: ResolverTypeWrapper<ProtoIoRestorecommerceUserUserList>;
  StatusType: ResolverTypeWrapper<StatusType>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IoRestorecommerceUserUserList: ResolverTypeWrapper<IoRestorecommerceUserUserList>;
  IoRestorecommerceUserUser: ResolverTypeWrapper<IoRestorecommerceUserUser>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  IoRestorecommerceAuthRoleAssociation: ResolverTypeWrapper<IoRestorecommerceAuthRoleAssociation>;
  IoRestorecommerceImageImage: ResolverTypeWrapper<IoRestorecommerceImageImage>;
  IoRestorecommerceUserUserType: IoRestorecommerceUserUserType;
  IoRestorecommerceAuthTokens: ResolverTypeWrapper<IoRestorecommerceAuthTokens>;
  IoRestorecommerceAuthSubject: ResolverTypeWrapper<IoRestorecommerceAuthSubject>;
  IoRestorecommerceAuthHierarchicalScope: ResolverTypeWrapper<IoRestorecommerceAuthHierarchicalScope>;
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IoRestorecommerceResourcebaseSortSortOrder: IoRestorecommerceResourcebaseSortSortOrder;
  IGoogleProtobufStruct: IGoogleProtobufStruct;
  MapScalar: ResolverTypeWrapper<Scalars['MapScalar']>;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  IGoogleProtobufAny: IGoogleProtobufAny;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  IIoRestorecommerceAuthSubject: IIoRestorecommerceAuthSubject;
  IIoRestorecommerceAuthRoleAssociation: IIoRestorecommerceAuthRoleAssociation;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAuthHierarchicalScope: IIoRestorecommerceAuthHierarchicalScope;
  IIoRestorecommerceUserFindRequest: IIoRestorecommerceUserFindRequest;
  IIoRestorecommerceUserFindByRoleRequest: IIoRestorecommerceUserFindByRoleRequest;
  ProtoIoRestorecommerceUserUser: ResolverTypeWrapper<ProtoIoRestorecommerceUserUser>;
  IIoRestorecommerceUserFindByTokenRequest: IIoRestorecommerceUserFindByTokenRequest;
  IdentityRoleQuery: ResolverTypeWrapper<IdentityRoleQuery>;
  ProtoIoRestorecommerceRoleRoleList: ResolverTypeWrapper<ProtoIoRestorecommerceRoleRoleList>;
  IoRestorecommerceRoleRoleList: ResolverTypeWrapper<IoRestorecommerceRoleRoleList>;
  IoRestorecommerceRoleRole: ResolverTypeWrapper<IoRestorecommerceRoleRole>;
  IdentityAuthenticationLogQuery: ResolverTypeWrapper<IdentityAuthenticationLogQuery>;
  ProtoIoRestorecommerceAuthenticationLogAuthenticationLogList: ResolverTypeWrapper<ProtoIoRestorecommerceAuthenticationLogAuthenticationLogList>;
  IoRestorecommerceAuthenticationLogAuthenticationLogList: ResolverTypeWrapper<IoRestorecommerceAuthenticationLogAuthenticationLogList>;
  IoRestorecommerceAuthenticationLogAuthenticationLog: ResolverTypeWrapper<IoRestorecommerceAuthenticationLogAuthenticationLog>;
  IdentityTokenQuery: ResolverTypeWrapper<IdentityTokenQuery>;
  ProtoGoogleProtobufAny: ResolverTypeWrapper<ProtoGoogleProtobufAny>;
  GoogleProtobufAny: ResolverTypeWrapper<GoogleProtobufAny>;
  TodoScalar: ResolverTypeWrapper<Scalars['TodoScalar']>;
  IIoRestorecommerceTokenIdentifier: IIoRestorecommerceTokenIdentifier;
  Mutation: ResolverTypeWrapper<{}>;
  IdentityMutation: ResolverTypeWrapper<IdentityMutation>;
  IdentityUserMutation: ResolverTypeWrapper<IdentityUserMutation>;
  IIoRestorecommerceUserUserList: IIoRestorecommerceUserUserList;
  IIoRestorecommerceUserUser: IIoRestorecommerceUserUser;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceImageImage: IIoRestorecommerceImageImage;
  IIoRestorecommerceAuthTokens: IIoRestorecommerceAuthTokens;
  ProtoGoogleProtobufEmpty: ResolverTypeWrapper<ProtoGoogleProtobufEmpty>;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  IIoRestorecommerceUserRegisterRequest: IIoRestorecommerceUserRegisterRequest;
  IIoRestorecommerceUserActivateRequest: IIoRestorecommerceUserActivateRequest;
  IIoRestorecommerceUserChangePasswordRequest: IIoRestorecommerceUserChangePasswordRequest;
  IIoRestorecommerceUserRequestPasswordChangeRequest: IIoRestorecommerceUserRequestPasswordChangeRequest;
  IIoRestorecommerceUserChangeEmailRequest: IIoRestorecommerceUserChangeEmailRequest;
  IIoRestorecommerceUserConfirmPasswordChangeRequest: IIoRestorecommerceUserConfirmPasswordChangeRequest;
  IIoRestorecommerceUserConfirmEmailChangeRequest: IIoRestorecommerceUserConfirmEmailChangeRequest;
  IIoRestorecommerceUserUnregisterRequest: IIoRestorecommerceUserUnregisterRequest;
  IIoRestorecommerceUserLoginRequest: IIoRestorecommerceUserLoginRequest;
  ProtoIoRestorecommerceUserUserIDs: ResolverTypeWrapper<ProtoIoRestorecommerceUserUserIDs>;
  IoRestorecommerceUserUserIDs: ResolverTypeWrapper<IoRestorecommerceUserUserIDs>;
  IIoRestorecommerceUserOrgIDRequest: IIoRestorecommerceUserOrgIdRequest;
  IIoRestorecommerceUserConfirmUserInvitationRequest: IIoRestorecommerceUserConfirmUserInvitationRequest;
  IIoRestorecommerceUserSendInvitationEmailRequest: IIoRestorecommerceUserSendInvitationEmailRequest;
  IdentityRoleMutation: ResolverTypeWrapper<IdentityRoleMutation>;
  IIoRestorecommerceRoleRoleList: IIoRestorecommerceRoleRoleList;
  IIoRestorecommerceRoleRole: IIoRestorecommerceRoleRole;
  IdentityAuthenticationLogMutation: ResolverTypeWrapper<IdentityAuthenticationLogMutation>;
  IIoRestorecommerceAuthenticationLogAuthenticationLogList: IIoRestorecommerceAuthenticationLogAuthenticationLogList;
  IIoRestorecommerceAuthenticationLogAuthenticationLog: IIoRestorecommerceAuthenticationLogAuthenticationLog;
  IdentityTokenMutation: ResolverTypeWrapper<IdentityTokenMutation>;
  IIoRestorecommerceTokenTokenData: IIoRestorecommerceTokenTokenData;
  IIoRestorecommerceTokenGrantId: IIoRestorecommerceTokenGrantId;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  IdentityQuery: IdentityQuery;
  IdentityUserQuery: IdentityUserQuery;
  ProtoIoRestorecommerceUserUserList: ProtoIoRestorecommerceUserUserList;
  StatusType: StatusType;
  String: Scalars['String'];
  Int: Scalars['Int'];
  IoRestorecommerceUserUserList: IoRestorecommerceUserUserList;
  IoRestorecommerceUserUser: IoRestorecommerceUserUser;
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  Float: Scalars['Float'];
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  Boolean: Scalars['Boolean'];
  IoRestorecommerceAuthRoleAssociation: IoRestorecommerceAuthRoleAssociation;
  IoRestorecommerceImageImage: IoRestorecommerceImageImage;
  IoRestorecommerceAuthTokens: IoRestorecommerceAuthTokens;
  IoRestorecommerceAuthSubject: IoRestorecommerceAuthSubject;
  IoRestorecommerceAuthHierarchicalScope: IoRestorecommerceAuthHierarchicalScope;
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IGoogleProtobufStruct: IGoogleProtobufStruct;
  MapScalar: Scalars['MapScalar'];
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  IGoogleProtobufAny: IGoogleProtobufAny;
  Upload: Scalars['Upload'];
  IIoRestorecommerceAuthSubject: IIoRestorecommerceAuthSubject;
  IIoRestorecommerceAuthRoleAssociation: IIoRestorecommerceAuthRoleAssociation;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAuthHierarchicalScope: IIoRestorecommerceAuthHierarchicalScope;
  IIoRestorecommerceUserFindRequest: IIoRestorecommerceUserFindRequest;
  IIoRestorecommerceUserFindByRoleRequest: IIoRestorecommerceUserFindByRoleRequest;
  ProtoIoRestorecommerceUserUser: ProtoIoRestorecommerceUserUser;
  IIoRestorecommerceUserFindByTokenRequest: IIoRestorecommerceUserFindByTokenRequest;
  IdentityRoleQuery: IdentityRoleQuery;
  ProtoIoRestorecommerceRoleRoleList: ProtoIoRestorecommerceRoleRoleList;
  IoRestorecommerceRoleRoleList: IoRestorecommerceRoleRoleList;
  IoRestorecommerceRoleRole: IoRestorecommerceRoleRole;
  IdentityAuthenticationLogQuery: IdentityAuthenticationLogQuery;
  ProtoIoRestorecommerceAuthenticationLogAuthenticationLogList: ProtoIoRestorecommerceAuthenticationLogAuthenticationLogList;
  IoRestorecommerceAuthenticationLogAuthenticationLogList: IoRestorecommerceAuthenticationLogAuthenticationLogList;
  IoRestorecommerceAuthenticationLogAuthenticationLog: IoRestorecommerceAuthenticationLogAuthenticationLog;
  IdentityTokenQuery: IdentityTokenQuery;
  ProtoGoogleProtobufAny: ProtoGoogleProtobufAny;
  GoogleProtobufAny: GoogleProtobufAny;
  TodoScalar: Scalars['TodoScalar'];
  IIoRestorecommerceTokenIdentifier: IIoRestorecommerceTokenIdentifier;
  Mutation: {};
  IdentityMutation: IdentityMutation;
  IdentityUserMutation: IdentityUserMutation;
  IIoRestorecommerceUserUserList: IIoRestorecommerceUserUserList;
  IIoRestorecommerceUserUser: IIoRestorecommerceUserUser;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceImageImage: IIoRestorecommerceImageImage;
  IIoRestorecommerceAuthTokens: IIoRestorecommerceAuthTokens;
  ProtoGoogleProtobufEmpty: ProtoGoogleProtobufEmpty;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  IIoRestorecommerceUserRegisterRequest: IIoRestorecommerceUserRegisterRequest;
  IIoRestorecommerceUserActivateRequest: IIoRestorecommerceUserActivateRequest;
  IIoRestorecommerceUserChangePasswordRequest: IIoRestorecommerceUserChangePasswordRequest;
  IIoRestorecommerceUserRequestPasswordChangeRequest: IIoRestorecommerceUserRequestPasswordChangeRequest;
  IIoRestorecommerceUserChangeEmailRequest: IIoRestorecommerceUserChangeEmailRequest;
  IIoRestorecommerceUserConfirmPasswordChangeRequest: IIoRestorecommerceUserConfirmPasswordChangeRequest;
  IIoRestorecommerceUserConfirmEmailChangeRequest: IIoRestorecommerceUserConfirmEmailChangeRequest;
  IIoRestorecommerceUserUnregisterRequest: IIoRestorecommerceUserUnregisterRequest;
  IIoRestorecommerceUserLoginRequest: IIoRestorecommerceUserLoginRequest;
  ProtoIoRestorecommerceUserUserIDs: ProtoIoRestorecommerceUserUserIDs;
  IoRestorecommerceUserUserIDs: IoRestorecommerceUserUserIDs;
  IIoRestorecommerceUserOrgIDRequest: IIoRestorecommerceUserOrgIdRequest;
  IIoRestorecommerceUserConfirmUserInvitationRequest: IIoRestorecommerceUserConfirmUserInvitationRequest;
  IIoRestorecommerceUserSendInvitationEmailRequest: IIoRestorecommerceUserSendInvitationEmailRequest;
  IdentityRoleMutation: IdentityRoleMutation;
  IIoRestorecommerceRoleRoleList: IIoRestorecommerceRoleRoleList;
  IIoRestorecommerceRoleRole: IIoRestorecommerceRoleRole;
  IdentityAuthenticationLogMutation: IdentityAuthenticationLogMutation;
  IIoRestorecommerceAuthenticationLogAuthenticationLogList: IIoRestorecommerceAuthenticationLogAuthenticationLogList;
  IIoRestorecommerceAuthenticationLogAuthenticationLog: IIoRestorecommerceAuthenticationLogAuthenticationLog;
  IdentityTokenMutation: IdentityTokenMutation;
  IIoRestorecommerceTokenTokenData: IIoRestorecommerceTokenTokenData;
  IIoRestorecommerceTokenGrantId: IIoRestorecommerceTokenGrantId;
}>;

export type QueryResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  identity?: Resolver<ResolversTypes['IdentityQuery'], ParentType, ContextType>;
}>;

export type IdentityQueryResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityQuery'] = ResolversParentTypes['IdentityQuery']> = ResolversObject<{
  user?: Resolver<ResolversTypes['IdentityUserQuery'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['IdentityRoleQuery'], ParentType, ContextType>;
  authentication_log?: Resolver<ResolversTypes['IdentityAuthenticationLogQuery'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['IdentityTokenQuery'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityUserQueryResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityUserQuery'] = ResolversParentTypes['IdentityUserQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserList']>, ParentType, ContextType, RequireFields<IdentityUserQueryReadArgs, 'input'>>;
  Find?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserList']>, ParentType, ContextType, RequireFields<IdentityUserQueryFindArgs, 'input'>>;
  FindByRole?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserList']>, ParentType, ContextType, RequireFields<IdentityUserQueryFindByRoleArgs, 'input'>>;
  FindByToken?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUser']>, ParentType, ContextType, RequireFields<IdentityUserQueryFindByTokenArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceUserUserListResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceUserUserList'] = ResolversParentTypes['ProtoIoRestorecommerceUserUserList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUserList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StatusTypeResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['StatusType'] = ResolversParentTypes['StatusType']> = ResolversObject<{
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserUserListResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceUserUserList'] = ResolversParentTypes['IoRestorecommerceUserUserList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['IoRestorecommerceUserUser']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['IoRestorecommerceAuthSubject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserUserResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceUserUser'] = ResolversParentTypes['IoRestorecommerceUserUser']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['IoRestorecommerceMetaMeta'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  newEmail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  activationCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  passwordHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roleAssociations?: Resolver<Array<ResolversTypes['IoRestorecommerceAuthRoleAssociation']>, ParentType, ContextType>;
  timezoneId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  localeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  defaultScope?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unauthenticated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  guest?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['IoRestorecommerceImageImage'], ParentType, ContextType>;
  userType?: Resolver<ResolversTypes['IoRestorecommerceUserUserType'], ParentType, ContextType>;
  invite?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  invitedByUserName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  invitedByUserFirstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  invitedByUserLastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokens?: Resolver<Array<ResolversTypes['IoRestorecommerceAuthTokens']>, ParentType, ContextType>;
  lastLogin?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lastAccess?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceMetaMetaResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceMetaMeta'] = ResolversParentTypes['IoRestorecommerceMetaMeta']> = ResolversObject<{
  created?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  modified?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  modifiedBy?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthRoleAssociationResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthRoleAssociation'] = ResolversParentTypes['IoRestorecommerceAuthRoleAssociation']> = ResolversObject<{
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  attributes?: Resolver<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceImageImageResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceImageImage'] = ResolversParentTypes['IoRestorecommerceImageImage']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  caption?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  length?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserUserTypeResolvers = { ORG_USER: 'undefined', INDIVIDUAL_USER: 1, GUEST: 2, TECHNICAL_USER: 3, UNRECOGNIZED: -1 };

export type IoRestorecommerceAuthTokensResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthTokens'] = ResolversParentTypes['IoRestorecommerceAuthTokens']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expiresIn?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  scopes?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  interactive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthSubjectResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthSubject'] = ResolversParentTypes['IoRestorecommerceAuthSubject']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  scope?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roleAssociations?: Resolver<Array<ResolversTypes['IoRestorecommerceAuthRoleAssociation']>, ParentType, ContextType>;
  hierarchicalScopes?: Resolver<Array<ResolversTypes['IoRestorecommerceAuthHierarchicalScope']>, ParentType, ContextType>;
  unauthenticated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthHierarchicalScopeResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthHierarchicalScope'] = ResolversParentTypes['IoRestorecommerceAuthHierarchicalScope']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['IoRestorecommerceAuthHierarchicalScope']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseSortSortOrderResolvers = { UNSORTED: 'undefined', ASCENDING: 1, DESCENDING: 2, UNRECOGNIZED: -1 };

export interface MapScalarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['MapScalar'], any> {
  name: 'MapScalar';
}

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type ProtoIoRestorecommerceUserUserResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceUserUser'] = ResolversParentTypes['ProtoIoRestorecommerceUserUser']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUser']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityRoleQueryResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityRoleQuery'] = ResolversParentTypes['IdentityRoleQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceRoleRoleList']>, ParentType, ContextType, RequireFields<IdentityRoleQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceRoleRoleListResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceRoleRoleList'] = ResolversParentTypes['ProtoIoRestorecommerceRoleRoleList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceRoleRoleList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceRoleRoleListResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceRoleRoleList'] = ResolversParentTypes['IoRestorecommerceRoleRoleList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['IoRestorecommerceRoleRole']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['IoRestorecommerceAuthSubject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceRoleRoleResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceRoleRole'] = ResolversParentTypes['IoRestorecommerceRoleRole']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['IoRestorecommerceMetaMeta'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  assignableByRoles?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityAuthenticationLogQueryResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityAuthenticationLogQuery'] = ResolversParentTypes['IdentityAuthenticationLogQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceAuthenticationLogAuthenticationLogList']>, ParentType, ContextType, RequireFields<IdentityAuthenticationLogQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceAuthenticationLogAuthenticationLogList'] = ResolversParentTypes['ProtoIoRestorecommerceAuthenticationLogAuthenticationLogList']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAuthenticationLogAuthenticationLogList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthenticationLogAuthenticationLogListResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthenticationLogAuthenticationLogList'] = ResolversParentTypes['IoRestorecommerceAuthenticationLogAuthenticationLogList']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['IoRestorecommerceAuthenticationLogAuthenticationLog']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['IoRestorecommerceAuthSubject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthenticationLogAuthenticationLogResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthenticationLogAuthenticationLog'] = ResolversParentTypes['IoRestorecommerceAuthenticationLogAuthenticationLog']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ipv4Address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ipv6Address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  operatingSystem?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userAgent?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  activity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['IoRestorecommerceMetaMeta'], ParentType, ContextType>;
  subjectId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityTokenQueryResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityTokenQuery'] = ResolversParentTypes['IdentityTokenQuery']> = ResolversObject<{
  find?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufAny']>, ParentType, ContextType, RequireFields<IdentityTokenQueryFindArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoGoogleProtobufAnyResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoGoogleProtobufAny'] = ResolversParentTypes['ProtoGoogleProtobufAny']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GoogleProtobufAnyResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['GoogleProtobufAny'] = ResolversParentTypes['GoogleProtobufAny']> = ResolversObject<{
  typeUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['TodoScalar'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface TodoScalarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TodoScalar'], any> {
  name: 'TodoScalar';
}

export type MutationResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  identity?: Resolver<ResolversTypes['IdentityMutation'], ParentType, ContextType>;
}>;

export type IdentityMutationResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityMutation'] = ResolversParentTypes['IdentityMutation']> = ResolversObject<{
  user?: Resolver<ResolversTypes['IdentityUserMutation'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['IdentityRoleMutation'], ParentType, ContextType>;
  authentication_log?: Resolver<ResolversTypes['IdentityAuthenticationLogMutation'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['IdentityTokenMutation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityUserMutationResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityUserMutation'] = ResolversParentTypes['IdentityUserMutation']> = ResolversObject<{
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserList']>, ParentType, ContextType, RequireFields<IdentityUserMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<IdentityUserMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserList']>, ParentType, ContextType, RequireFields<IdentityUserMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserList']>, ParentType, ContextType, RequireFields<IdentityUserMutationUpsertArgs, 'input'>>;
  Register?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUser']>, ParentType, ContextType, RequireFields<IdentityUserMutationRegisterArgs, 'input'>>;
  Activate?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<IdentityUserMutationActivateArgs, 'input'>>;
  ChangePassword?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<IdentityUserMutationChangePasswordArgs, 'input'>>;
  RequestPasswordChange?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<IdentityUserMutationRequestPasswordChangeArgs, 'input'>>;
  RequestEmailChange?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<IdentityUserMutationRequestEmailChangeArgs, 'input'>>;
  ConfirmPasswordChange?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<IdentityUserMutationConfirmPasswordChangeArgs, 'input'>>;
  ConfirmEmailChange?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<IdentityUserMutationConfirmEmailChangeArgs, 'input'>>;
  Unregister?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<IdentityUserMutationUnregisterArgs, 'input'>>;
  Login?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUser']>, ParentType, ContextType, RequireFields<IdentityUserMutationLoginArgs, 'input'>>;
  DeleteUsersByOrg?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserIDs']>, ParentType, ContextType, RequireFields<IdentityUserMutationDeleteUsersByOrgArgs, 'input'>>;
  ConfirmUserInvitation?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<IdentityUserMutationConfirmUserInvitationArgs, 'input'>>;
  SendInvitationEmail?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<IdentityUserMutationSendInvitationEmailArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoGoogleProtobufEmptyResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoGoogleProtobufEmpty'] = ResolversParentTypes['ProtoGoogleProtobufEmpty']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceUserUserIDsResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceUserUserIDs'] = ResolversParentTypes['ProtoIoRestorecommerceUserUserIDs']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUserIDs']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserUserIDsResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceUserUserIDs'] = ResolversParentTypes['IoRestorecommerceUserUserIDs']> = ResolversObject<{
  userIds?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityRoleMutationResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityRoleMutation'] = ResolversParentTypes['IdentityRoleMutation']> = ResolversObject<{
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceRoleRoleList']>, ParentType, ContextType, RequireFields<IdentityRoleMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<IdentityRoleMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceRoleRoleList']>, ParentType, ContextType, RequireFields<IdentityRoleMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceRoleRoleList']>, ParentType, ContextType, RequireFields<IdentityRoleMutationUpsertArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityAuthenticationLogMutationResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityAuthenticationLogMutation'] = ResolversParentTypes['IdentityAuthenticationLogMutation']> = ResolversObject<{
  Create?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceAuthenticationLogAuthenticationLogList']>, ParentType, ContextType, RequireFields<IdentityAuthenticationLogMutationCreateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<IdentityAuthenticationLogMutationDeleteArgs, 'input'>>;
  Update?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceAuthenticationLogAuthenticationLogList']>, ParentType, ContextType, RequireFields<IdentityAuthenticationLogMutationUpdateArgs, 'input'>>;
  Upsert?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceAuthenticationLogAuthenticationLogList']>, ParentType, ContextType, RequireFields<IdentityAuthenticationLogMutationUpsertArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityTokenMutationResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityTokenMutation'] = ResolversParentTypes['IdentityTokenMutation']> = ResolversObject<{
  upsert?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufAny']>, ParentType, ContextType, RequireFields<IdentityTokenMutationUpsertArgs, 'input'>>;
  destroy?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufAny']>, ParentType, ContextType, RequireFields<IdentityTokenMutationDestroyArgs, 'input'>>;
  revokeByGrantId?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufAny']>, ParentType, ContextType, RequireFields<IdentityTokenMutationRevokeByGrantIdArgs, 'input'>>;
  consume?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufAny']>, ParentType, ContextType, RequireFields<IdentityTokenMutationConsumeArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = IdentityContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  IdentityQuery?: IdentityQueryResolvers<ContextType>;
  IdentityUserQuery?: IdentityUserQueryResolvers<ContextType>;
  ProtoIoRestorecommerceUserUserList?: ProtoIoRestorecommerceUserUserListResolvers<ContextType>;
  StatusType?: StatusTypeResolvers<ContextType>;
  IoRestorecommerceUserUserList?: IoRestorecommerceUserUserListResolvers<ContextType>;
  IoRestorecommerceUserUser?: IoRestorecommerceUserUserResolvers<ContextType>;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
  IoRestorecommerceAuthRoleAssociation?: IoRestorecommerceAuthRoleAssociationResolvers<ContextType>;
  IoRestorecommerceImageImage?: IoRestorecommerceImageImageResolvers<ContextType>;
  IoRestorecommerceUserUserType?: IoRestorecommerceUserUserTypeResolvers;
  IoRestorecommerceAuthTokens?: IoRestorecommerceAuthTokensResolvers<ContextType>;
  IoRestorecommerceAuthSubject?: IoRestorecommerceAuthSubjectResolvers<ContextType>;
  IoRestorecommerceAuthHierarchicalScope?: IoRestorecommerceAuthHierarchicalScopeResolvers<ContextType>;
  IoRestorecommerceResourcebaseSortSortOrder?: IoRestorecommerceResourcebaseSortSortOrderResolvers;
  MapScalar?: GraphQLScalarType;
  Upload?: GraphQLScalarType;
  ProtoIoRestorecommerceUserUser?: ProtoIoRestorecommerceUserUserResolvers<ContextType>;
  IdentityRoleQuery?: IdentityRoleQueryResolvers<ContextType>;
  ProtoIoRestorecommerceRoleRoleList?: ProtoIoRestorecommerceRoleRoleListResolvers<ContextType>;
  IoRestorecommerceRoleRoleList?: IoRestorecommerceRoleRoleListResolvers<ContextType>;
  IoRestorecommerceRoleRole?: IoRestorecommerceRoleRoleResolvers<ContextType>;
  IdentityAuthenticationLogQuery?: IdentityAuthenticationLogQueryResolvers<ContextType>;
  ProtoIoRestorecommerceAuthenticationLogAuthenticationLogList?: ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResolvers<ContextType>;
  IoRestorecommerceAuthenticationLogAuthenticationLogList?: IoRestorecommerceAuthenticationLogAuthenticationLogListResolvers<ContextType>;
  IoRestorecommerceAuthenticationLogAuthenticationLog?: IoRestorecommerceAuthenticationLogAuthenticationLogResolvers<ContextType>;
  IdentityTokenQuery?: IdentityTokenQueryResolvers<ContextType>;
  ProtoGoogleProtobufAny?: ProtoGoogleProtobufAnyResolvers<ContextType>;
  GoogleProtobufAny?: GoogleProtobufAnyResolvers<ContextType>;
  TodoScalar?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  IdentityMutation?: IdentityMutationResolvers<ContextType>;
  IdentityUserMutation?: IdentityUserMutationResolvers<ContextType>;
  ProtoGoogleProtobufEmpty?: ProtoGoogleProtobufEmptyResolvers<ContextType>;
  ProtoIoRestorecommerceUserUserIDs?: ProtoIoRestorecommerceUserUserIDsResolvers<ContextType>;
  IoRestorecommerceUserUserIDs?: IoRestorecommerceUserUserIDsResolvers<ContextType>;
  IdentityRoleMutation?: IdentityRoleMutationResolvers<ContextType>;
  IdentityAuthenticationLogMutation?: IdentityAuthenticationLogMutationResolvers<ContextType>;
  IdentityTokenMutation?: IdentityTokenMutationResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = IdentityContext> = Resolvers<ContextType>;
