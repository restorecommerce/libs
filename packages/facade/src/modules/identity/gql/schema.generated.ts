import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { IdentityContext } from '../interfaces';
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
  Read?: Maybe<ProtoIoRestorecommerceUserUserListResponse>;
  Find?: Maybe<ProtoIoRestorecommerceUserUserListResponse>;
  FindByRole?: Maybe<ProtoIoRestorecommerceUserUserListResponse>;
  FindByToken?: Maybe<ProtoIoRestorecommerceUserUserResponse>;
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

export type ProtoIoRestorecommerceUserUserListResponse = {
  __typename?: 'ProtoIoRestorecommerceUserUserListResponse';
  status: StatusType;
  details?: Maybe<IoRestorecommerceUserUserListResponse>;
};

/** Objects with error returned for GraphQL operations */
export type StatusType = {
  __typename?: 'StatusType';
  /** Status ID */
  id: Scalars['String'];
  /** Status code */
  code: Scalars['Int'];
  /** Status message description */
  message?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceUserUserListResponse = {
  __typename?: 'IoRestorecommerceUserUserListResponse';
  items?: Maybe<Array<IoRestorecommerceUserUserResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceUserUserResponse = {
  __typename?: 'IoRestorecommerceUserUserResponse';
  payload?: Maybe<IoRestorecommerceUserUser>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceUserUser = {
  __typename?: 'IoRestorecommerceUserUser';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activationCode?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  roleAssociations?: Maybe<Array<IoRestorecommerceAuthRoleAssociation>>;
  timezoneId?: Maybe<Scalars['String']>;
  localeId?: Maybe<Scalars['String']>;
  defaultScope?: Maybe<Scalars['String']>;
  unauthenticated?: Maybe<Scalars['Boolean']>;
  guest?: Maybe<Scalars['Boolean']>;
  image?: Maybe<IoRestorecommerceImageImage>;
  userType?: Maybe<IoRestorecommerceUserUserType>;
  invite?: Maybe<Scalars['Boolean']>;
  invitedByUserName?: Maybe<Scalars['String']>;
  invitedByUserFirstName?: Maybe<Scalars['String']>;
  invitedByUserLastName?: Maybe<Scalars['String']>;
  tokens?: Maybe<Array<IoRestorecommerceAuthTokens>>;
  lastAccess?: Maybe<Scalars['Float']>;
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

export type IoRestorecommerceAuthRoleAssociation = {
  __typename?: 'IoRestorecommerceAuthRoleAssociation';
  role?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  id?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceImageImage = {
  __typename?: 'IoRestorecommerceImageImage';
  id?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
};

export enum IoRestorecommerceUserUserType {
  OrgUser = 0,
  IndividualUser = 1,
  Guest = 2,
  TechnicalUser = 3
}

export type IoRestorecommerceAuthTokens = {
  __typename?: 'IoRestorecommerceAuthTokens';
  name?: Maybe<Scalars['String']>;
  expiresIn?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['String']>;
  scopes?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  interactive?: Maybe<Scalars['Boolean']>;
  lastLogin?: Maybe<Scalars['Float']>;
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
};

export type IIoRestorecommerceResourcebaseFilter = {
  field?: Maybe<Scalars['String']>;
  operation?: Maybe<IoRestorecommerceResourcebaseFilterOperation>;
  value?: Maybe<Scalars['String']>;
  type?: Maybe<IoRestorecommerceResourcebaseFilterValueType>;
  filters?: Maybe<Array<IIoRestorecommerceResourcebaseFilterOp>>;
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

export type IIoRestorecommerceResourcebaseFieldFilter = {
  name?: Maybe<Scalars['String']>;
  include?: Maybe<Scalars['Boolean']>;
};

export type IGoogleProtobufAny = {
  typeUrl?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Upload']>;
};


export type IIoRestorecommerceUserFindRequest = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceUserFindByRoleRequest = {
  role?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type IIoRestorecommerceAttributeAttribute = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ProtoIoRestorecommerceUserUserResponse = {
  __typename?: 'ProtoIoRestorecommerceUserUserResponse';
  status: StatusType;
  details?: Maybe<IoRestorecommerceUserUserResponse>;
};

export type IIoRestorecommerceUserFindByTokenRequest = {
  token?: Maybe<Scalars['String']>;
};

export type IdentityRoleQuery = {
  __typename?: 'IdentityRoleQuery';
  Read?: Maybe<ProtoIoRestorecommerceRoleRoleListResponse>;
};


export type IdentityRoleQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceRoleRoleListResponse = {
  __typename?: 'ProtoIoRestorecommerceRoleRoleListResponse';
  status: StatusType;
  details?: Maybe<IoRestorecommerceRoleRoleListResponse>;
};

export type IoRestorecommerceRoleRoleListResponse = {
  __typename?: 'IoRestorecommerceRoleRoleListResponse';
  items?: Maybe<Array<IoRestorecommerceRoleRoleResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceRoleRoleResponse = {
  __typename?: 'IoRestorecommerceRoleRoleResponse';
  payload?: Maybe<IoRestorecommerceRoleRole>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceRoleRole = {
  __typename?: 'IoRestorecommerceRoleRole';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  assignableByRoles?: Maybe<Array<Scalars['String']>>;
};

export type IdentityAuthenticationLogQuery = {
  __typename?: 'IdentityAuthenticationLogQuery';
  Read?: Maybe<ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse>;
};


export type IdentityAuthenticationLogQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse = {
  __typename?: 'ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse';
  status: StatusType;
  details?: Maybe<IoRestorecommerceAuthenticationLogAuthenticationLogListResponse>;
};

export type IoRestorecommerceAuthenticationLogAuthenticationLogListResponse = {
  __typename?: 'IoRestorecommerceAuthenticationLogAuthenticationLogListResponse';
  items?: Maybe<Array<IoRestorecommerceAuthenticationLogAuthenticationLogResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceAuthenticationLogAuthenticationLogResponse = {
  __typename?: 'IoRestorecommerceAuthenticationLogAuthenticationLogResponse';
  payload?: Maybe<IoRestorecommerceAuthenticationLogAuthenticationLog>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceAuthenticationLogAuthenticationLog = {
  __typename?: 'IoRestorecommerceAuthenticationLogAuthenticationLog';
  id?: Maybe<Scalars['String']>;
  ipv4Address?: Maybe<Scalars['String']>;
  ipv6Address?: Maybe<Scalars['String']>;
  operatingSystem?: Maybe<Scalars['String']>;
  userAgent?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Float']>;
  activity?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  subjectId?: Maybe<Scalars['String']>;
  tokenName?: Maybe<Scalars['String']>;
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
  details?: Maybe<GoogleProtobufAny>;
};

export type GoogleProtobufAny = {
  __typename?: 'GoogleProtobufAny';
  typeUrl?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['TodoScalar']>;
};


export type IIoRestorecommerceTokenIdentifier = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
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
  Mutate?: Maybe<ProtoIoRestorecommerceUserUserListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceStatusStatusArray>;
  Register?: Maybe<ProtoIoRestorecommerceUserUserResponse>;
  Activate?: Maybe<ProtoIoRestorecommerceStatusStatusObj>;
  ChangePassword?: Maybe<ProtoIoRestorecommerceStatusStatusObj>;
  RequestPasswordChange?: Maybe<ProtoIoRestorecommerceStatusStatusObj>;
  RequestEmailChange?: Maybe<ProtoIoRestorecommerceStatusStatusObj>;
  ConfirmPasswordChange?: Maybe<ProtoIoRestorecommerceStatusStatusObj>;
  ConfirmEmailChange?: Maybe<ProtoIoRestorecommerceStatusStatusObj>;
  Unregister?: Maybe<ProtoIoRestorecommerceStatusStatusObj>;
  Login?: Maybe<ProtoIoRestorecommerceUserUserResponse>;
  DeleteUsersByOrg?: Maybe<ProtoIoRestorecommerceUserUserIDs>;
  ConfirmUserInvitation?: Maybe<ProtoIoRestorecommerceStatusStatusObj>;
  SendInvitationEmail?: Maybe<ProtoIoRestorecommerceStatusStatusObj>;
  SendActivationEmail?: Maybe<ProtoIoRestorecommerceStatusStatusObj>;
};


export type IdentityUserMutationMutateArgs = {
  input: IIoRestorecommerceUserUserList;
};


export type IdentityUserMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
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


export type IdentityUserMutationSendActivationEmailArgs = {
  input: IIoRestorecommerceUserSendActivationEmailRequest;
};

export type IIoRestorecommerceUserUserList = {
  items?: Maybe<Array<IIoRestorecommerceUserUser>>;
  totalCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<ModeType>;
};

export type IIoRestorecommerceUserUser = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  activationCode?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  roleAssociations?: Maybe<Array<IIoRestorecommerceAuthRoleAssociation>>;
  timezoneId?: Maybe<Scalars['String']>;
  localeId?: Maybe<Scalars['String']>;
  defaultScope?: Maybe<Scalars['String']>;
  unauthenticated?: Maybe<Scalars['Boolean']>;
  guest?: Maybe<Scalars['Boolean']>;
  image?: Maybe<IIoRestorecommerceImageImage>;
  userType?: Maybe<IoRestorecommerceUserUserType>;
  invite?: Maybe<Scalars['Boolean']>;
  invitedByUserName?: Maybe<Scalars['String']>;
  invitedByUserFirstName?: Maybe<Scalars['String']>;
  invitedByUserLastName?: Maybe<Scalars['String']>;
  tokens?: Maybe<Array<IIoRestorecommerceAuthTokens>>;
  lastAccess?: Maybe<Scalars['Float']>;
};

export type IIoRestorecommerceMetaMeta = {
  created?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['Float']>;
  modifiedBy?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type IIoRestorecommerceAuthRoleAssociation = {
  role?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<IIoRestorecommerceAttributeAttribute>>;
  id?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceImageImage = {
  id?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
};

export type IIoRestorecommerceAuthTokens = {
  name?: Maybe<Scalars['String']>;
  expiresIn?: Maybe<Scalars['Float']>;
  token?: Maybe<Scalars['String']>;
  scopes?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  interactive?: Maybe<Scalars['Boolean']>;
  lastLogin?: Maybe<Scalars['Float']>;
};

export enum ModeType {
  Create = 'CREATE',
  Update = 'UPDATE',
  Upsert = 'UPSERT'
}

export type ProtoIoRestorecommerceStatusStatusArray = {
  __typename?: 'ProtoIoRestorecommerceStatusStatusArray';
  status: StatusType;
  details?: Maybe<IoRestorecommerceStatusStatusArray>;
};

export type IoRestorecommerceStatusStatusArray = {
  __typename?: 'IoRestorecommerceStatusStatusArray';
  status?: Maybe<Array<IoRestorecommerceStatusStatus>>;
};

export type IIoRestorecommerceResourcebaseDeleteRequest = {
  collection?: Maybe<Scalars['Boolean']>;
  ids?: Maybe<Array<Scalars['String']>>;
};

export type IIoRestorecommerceUserRegisterRequest = {
  id?: Maybe<Scalars['String']>;
  guest?: Maybe<Scalars['Boolean']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  timezoneId?: Maybe<Scalars['String']>;
  localeId?: Maybe<Scalars['String']>;
  defaultScope?: Maybe<Scalars['String']>;
  userType?: Maybe<IoRestorecommerceUserUserType>;
  captchaCode?: Maybe<Scalars['String']>;
};

export type ProtoIoRestorecommerceStatusStatusObj = {
  __typename?: 'ProtoIoRestorecommerceStatusStatusObj';
  status: StatusType;
  details?: Maybe<IoRestorecommerceStatusStatusObj>;
};

export type IoRestorecommerceStatusStatusObj = {
  __typename?: 'IoRestorecommerceStatusStatusObj';
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IIoRestorecommerceUserActivateRequest = {
  identifier?: Maybe<Scalars['String']>;
  activationCode?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceUserChangePasswordRequest = {
  identifier?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  newPassword?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceUserRequestPasswordChangeRequest = {
  identifier?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceUserChangeEmailRequest = {
  identifier?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceUserConfirmPasswordChangeRequest = {
  identifier?: Maybe<Scalars['String']>;
  activationCode?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceUserConfirmEmailChangeRequest = {
  identifier?: Maybe<Scalars['String']>;
  activationCode?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceUserUnregisterRequest = {
  identifier?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceUserLoginRequest = {
  identifier?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type ProtoIoRestorecommerceUserUserIDs = {
  __typename?: 'ProtoIoRestorecommerceUserUserIDs';
  status: StatusType;
  details?: Maybe<IoRestorecommerceUserUserIDs>;
};

export type IoRestorecommerceUserUserIDs = {
  __typename?: 'IoRestorecommerceUserUserIDs';
  userIds?: Maybe<Array<Scalars['String']>>;
};

export type IIoRestorecommerceUserOrgIdRequest = {
  orgIds?: Maybe<Array<Scalars['String']>>;
};

export type IIoRestorecommerceUserConfirmUserInvitationRequest = {
  identifier?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  activationCode?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceUserSendInvitationEmailRequest = {
  identifier?: Maybe<Scalars['String']>;
  invitedByUserIdentifier?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceUserSendActivationEmailRequest = {
  identifier?: Maybe<Scalars['String']>;
};

export type IdentityRoleMutation = {
  __typename?: 'IdentityRoleMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceRoleRoleListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceStatusStatusArray>;
};


export type IdentityRoleMutationMutateArgs = {
  input: IIoRestorecommerceRoleRoleList;
};


export type IdentityRoleMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceRoleRoleList = {
  items?: Maybe<Array<IIoRestorecommerceRoleRole>>;
  totalCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<ModeType>;
};

export type IIoRestorecommerceRoleRole = {
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  assignableByRoles?: Maybe<Array<Scalars['String']>>;
};

export type IdentityAuthenticationLogMutation = {
  __typename?: 'IdentityAuthenticationLogMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceStatusStatusArray>;
};


export type IdentityAuthenticationLogMutationMutateArgs = {
  input: IIoRestorecommerceAuthenticationLogAuthenticationLogList;
};


export type IdentityAuthenticationLogMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceAuthenticationLogAuthenticationLogList = {
  items?: Maybe<Array<IIoRestorecommerceAuthenticationLogAuthenticationLog>>;
  totalCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<ModeType>;
};

export type IIoRestorecommerceAuthenticationLogAuthenticationLog = {
  id?: Maybe<Scalars['String']>;
  ipv4Address?: Maybe<Scalars['String']>;
  ipv6Address?: Maybe<Scalars['String']>;
  operatingSystem?: Maybe<Scalars['String']>;
  userAgent?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Float']>;
  activity?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  subjectId?: Maybe<Scalars['String']>;
  tokenName?: Maybe<Scalars['String']>;
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
  id?: Maybe<Scalars['String']>;
  payload?: Maybe<IGoogleProtobufAny>;
  expiresIn?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceTokenGrantId = {
  grantId?: Maybe<Scalars['String']>;
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
  ProtoIoRestorecommerceUserUserListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceUserUserListResponse>;
  StatusType: ResolverTypeWrapper<StatusType>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IoRestorecommerceUserUserListResponse: ResolverTypeWrapper<IoRestorecommerceUserUserListResponse>;
  IoRestorecommerceUserUserResponse: ResolverTypeWrapper<IoRestorecommerceUserUserResponse>;
  IoRestorecommerceUserUser: ResolverTypeWrapper<IoRestorecommerceUserUser>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  IoRestorecommerceAuthRoleAssociation: ResolverTypeWrapper<IoRestorecommerceAuthRoleAssociation>;
  IoRestorecommerceImageImage: ResolverTypeWrapper<IoRestorecommerceImageImage>;
  IoRestorecommerceUserUserType: IoRestorecommerceUserUserType;
  IoRestorecommerceAuthTokens: ResolverTypeWrapper<IoRestorecommerceAuthTokens>;
  IoRestorecommerceStatusStatus: ResolverTypeWrapper<IoRestorecommerceStatusStatus>;
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IoRestorecommerceResourcebaseSortSortOrder: IoRestorecommerceResourcebaseSortSortOrder;
  IIoRestorecommerceResourcebaseFilterOp: IIoRestorecommerceResourcebaseFilterOp;
  IIoRestorecommerceResourcebaseFilter: IIoRestorecommerceResourcebaseFilter;
  IoRestorecommerceResourcebaseFilterOperation: IoRestorecommerceResourcebaseFilterOperation;
  IoRestorecommerceResourcebaseFilterValueType: IoRestorecommerceResourcebaseFilterValueType;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  IGoogleProtobufAny: IGoogleProtobufAny;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  IIoRestorecommerceUserFindRequest: IIoRestorecommerceUserFindRequest;
  IIoRestorecommerceUserFindByRoleRequest: IIoRestorecommerceUserFindByRoleRequest;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  ProtoIoRestorecommerceUserUserResponse: ResolverTypeWrapper<ProtoIoRestorecommerceUserUserResponse>;
  IIoRestorecommerceUserFindByTokenRequest: IIoRestorecommerceUserFindByTokenRequest;
  IdentityRoleQuery: ResolverTypeWrapper<IdentityRoleQuery>;
  ProtoIoRestorecommerceRoleRoleListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceRoleRoleListResponse>;
  IoRestorecommerceRoleRoleListResponse: ResolverTypeWrapper<IoRestorecommerceRoleRoleListResponse>;
  IoRestorecommerceRoleRoleResponse: ResolverTypeWrapper<IoRestorecommerceRoleRoleResponse>;
  IoRestorecommerceRoleRole: ResolverTypeWrapper<IoRestorecommerceRoleRole>;
  IdentityAuthenticationLogQuery: ResolverTypeWrapper<IdentityAuthenticationLogQuery>;
  ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse>;
  IoRestorecommerceAuthenticationLogAuthenticationLogListResponse: ResolverTypeWrapper<IoRestorecommerceAuthenticationLogAuthenticationLogListResponse>;
  IoRestorecommerceAuthenticationLogAuthenticationLogResponse: ResolverTypeWrapper<IoRestorecommerceAuthenticationLogAuthenticationLogResponse>;
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
  IIoRestorecommerceAuthRoleAssociation: IIoRestorecommerceAuthRoleAssociation;
  IIoRestorecommerceImageImage: IIoRestorecommerceImageImage;
  IIoRestorecommerceAuthTokens: IIoRestorecommerceAuthTokens;
  ModeType: ModeType;
  ProtoIoRestorecommerceStatusStatusArray: ResolverTypeWrapper<ProtoIoRestorecommerceStatusStatusArray>;
  IoRestorecommerceStatusStatusArray: ResolverTypeWrapper<IoRestorecommerceStatusStatusArray>;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  IIoRestorecommerceUserRegisterRequest: IIoRestorecommerceUserRegisterRequest;
  ProtoIoRestorecommerceStatusStatusObj: ResolverTypeWrapper<ProtoIoRestorecommerceStatusStatusObj>;
  IoRestorecommerceStatusStatusObj: ResolverTypeWrapper<IoRestorecommerceStatusStatusObj>;
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
  IIoRestorecommerceUserSendActivationEmailRequest: IIoRestorecommerceUserSendActivationEmailRequest;
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
  ProtoIoRestorecommerceUserUserListResponse: ProtoIoRestorecommerceUserUserListResponse;
  StatusType: StatusType;
  String: Scalars['String'];
  Int: Scalars['Int'];
  IoRestorecommerceUserUserListResponse: IoRestorecommerceUserUserListResponse;
  IoRestorecommerceUserUserResponse: IoRestorecommerceUserUserResponse;
  IoRestorecommerceUserUser: IoRestorecommerceUserUser;
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  Float: Scalars['Float'];
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  Boolean: Scalars['Boolean'];
  IoRestorecommerceAuthRoleAssociation: IoRestorecommerceAuthRoleAssociation;
  IoRestorecommerceImageImage: IoRestorecommerceImageImage;
  IoRestorecommerceAuthTokens: IoRestorecommerceAuthTokens;
  IoRestorecommerceStatusStatus: IoRestorecommerceStatusStatus;
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IIoRestorecommerceResourcebaseFilterOp: IIoRestorecommerceResourcebaseFilterOp;
  IIoRestorecommerceResourcebaseFilter: IIoRestorecommerceResourcebaseFilter;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  IGoogleProtobufAny: IGoogleProtobufAny;
  Upload: Scalars['Upload'];
  IIoRestorecommerceUserFindRequest: IIoRestorecommerceUserFindRequest;
  IIoRestorecommerceUserFindByRoleRequest: IIoRestorecommerceUserFindByRoleRequest;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  ProtoIoRestorecommerceUserUserResponse: ProtoIoRestorecommerceUserUserResponse;
  IIoRestorecommerceUserFindByTokenRequest: IIoRestorecommerceUserFindByTokenRequest;
  IdentityRoleQuery: IdentityRoleQuery;
  ProtoIoRestorecommerceRoleRoleListResponse: ProtoIoRestorecommerceRoleRoleListResponse;
  IoRestorecommerceRoleRoleListResponse: IoRestorecommerceRoleRoleListResponse;
  IoRestorecommerceRoleRoleResponse: IoRestorecommerceRoleRoleResponse;
  IoRestorecommerceRoleRole: IoRestorecommerceRoleRole;
  IdentityAuthenticationLogQuery: IdentityAuthenticationLogQuery;
  ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse: ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse;
  IoRestorecommerceAuthenticationLogAuthenticationLogListResponse: IoRestorecommerceAuthenticationLogAuthenticationLogListResponse;
  IoRestorecommerceAuthenticationLogAuthenticationLogResponse: IoRestorecommerceAuthenticationLogAuthenticationLogResponse;
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
  IIoRestorecommerceAuthRoleAssociation: IIoRestorecommerceAuthRoleAssociation;
  IIoRestorecommerceImageImage: IIoRestorecommerceImageImage;
  IIoRestorecommerceAuthTokens: IIoRestorecommerceAuthTokens;
  ProtoIoRestorecommerceStatusStatusArray: ProtoIoRestorecommerceStatusStatusArray;
  IoRestorecommerceStatusStatusArray: IoRestorecommerceStatusStatusArray;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  IIoRestorecommerceUserRegisterRequest: IIoRestorecommerceUserRegisterRequest;
  ProtoIoRestorecommerceStatusStatusObj: ProtoIoRestorecommerceStatusStatusObj;
  IoRestorecommerceStatusStatusObj: IoRestorecommerceStatusStatusObj;
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
  IIoRestorecommerceUserSendActivationEmailRequest: IIoRestorecommerceUserSendActivationEmailRequest;
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
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserListResponse']>, ParentType, ContextType, RequireFields<IdentityUserQueryReadArgs, 'input'>>;
  Find?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserListResponse']>, ParentType, ContextType, RequireFields<IdentityUserQueryFindArgs, 'input'>>;
  FindByRole?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserListResponse']>, ParentType, ContextType, RequireFields<IdentityUserQueryFindByRoleArgs, 'input'>>;
  FindByToken?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserResponse']>, ParentType, ContextType, RequireFields<IdentityUserQueryFindByTokenArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceUserUserListResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceUserUserListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceUserUserListResponse']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUserListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StatusTypeResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['StatusType'] = ResolversParentTypes['StatusType']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserUserListResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceUserUserListResponse'] = ResolversParentTypes['IoRestorecommerceUserUserListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceUserUserResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserUserResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceUserUserResponse'] = ResolversParentTypes['IoRestorecommerceUserUserResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUser']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserUserResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceUserUser'] = ResolversParentTypes['IoRestorecommerceUserUser']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  newEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  activationCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  passwordHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roleAssociations?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAuthRoleAssociation']>>, ParentType, ContextType>;
  timezoneId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  localeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  defaultScope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unauthenticated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  guest?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['IoRestorecommerceImageImage']>, ParentType, ContextType>;
  userType?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUserType']>, ParentType, ContextType>;
  invite?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  invitedByUserName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invitedByUserFirstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invitedByUserLastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tokens?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAuthTokens']>>, ParentType, ContextType>;
  lastAccess?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceMetaMetaResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceMetaMeta'] = ResolversParentTypes['IoRestorecommerceMetaMeta']> = ResolversObject<{
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modified?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modifiedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthRoleAssociationResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthRoleAssociation'] = ResolversParentTypes['IoRestorecommerceAuthRoleAssociation']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceImageImageResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceImageImage'] = ResolversParentTypes['IoRestorecommerceImageImage']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  filename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserUserTypeResolvers = { ORG_USER: 'undefined', INDIVIDUAL_USER: 1, GUEST: 2, TECHNICAL_USER: 3 };

export type IoRestorecommerceAuthTokensResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthTokens'] = ResolversParentTypes['IoRestorecommerceAuthTokens']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expiresIn?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scopes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  interactive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastLogin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusStatusResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusStatus'] = ResolversParentTypes['IoRestorecommerceStatusStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseSortSortOrderResolvers = { UNSORTED: 'undefined', ASCENDING: 1, DESCENDING: 2 };

export type IoRestorecommerceResourcebaseFilterOperationResolvers = { eq: 'undefined', lt: 1, lte: 2, gt: 3, gte: 4, isEmpty: 5, iLike: 6, in: 7, neq: 8 };

export type IoRestorecommerceResourcebaseFilterValueTypeResolvers = { STRING: 'undefined', NUMBER: 1, BOOLEAN: 2, DATE: 3, ARRAY: 4 };

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type ProtoIoRestorecommerceUserUserResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceUserUserResponse'] = ResolversParentTypes['ProtoIoRestorecommerceUserUserResponse']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUserResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityRoleQueryResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityRoleQuery'] = ResolversParentTypes['IdentityRoleQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceRoleRoleListResponse']>, ParentType, ContextType, RequireFields<IdentityRoleQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceRoleRoleListResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceRoleRoleListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceRoleRoleListResponse']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceRoleRoleListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceRoleRoleListResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceRoleRoleListResponse'] = ResolversParentTypes['IoRestorecommerceRoleRoleListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceRoleRoleResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceRoleRoleResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceRoleRoleResponse'] = ResolversParentTypes['IoRestorecommerceRoleRoleResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceRoleRole']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceRoleRoleResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceRoleRole'] = ResolversParentTypes['IoRestorecommerceRoleRole']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  assignableByRoles?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityAuthenticationLogQueryResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityAuthenticationLogQuery'] = ResolversParentTypes['IdentityAuthenticationLogQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse']>, ParentType, ContextType, RequireFields<IdentityAuthenticationLogQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAuthenticationLogAuthenticationLogListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthenticationLogAuthenticationLogListResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthenticationLogAuthenticationLogListResponse'] = ResolversParentTypes['IoRestorecommerceAuthenticationLogAuthenticationLogListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAuthenticationLogAuthenticationLogResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthenticationLogAuthenticationLogResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthenticationLogAuthenticationLogResponse'] = ResolversParentTypes['IoRestorecommerceAuthenticationLogAuthenticationLogResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAuthenticationLogAuthenticationLog']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthenticationLogAuthenticationLogResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthenticationLogAuthenticationLog'] = ResolversParentTypes['IoRestorecommerceAuthenticationLogAuthenticationLog']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ipv4Address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ipv6Address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  operatingSystem?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userAgent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  activity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  subjectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tokenName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityTokenQueryResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityTokenQuery'] = ResolversParentTypes['IdentityTokenQuery']> = ResolversObject<{
  find?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufAny']>, ParentType, ContextType, RequireFields<IdentityTokenQueryFindArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoGoogleProtobufAnyResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoGoogleProtobufAny'] = ResolversParentTypes['ProtoGoogleProtobufAny']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GoogleProtobufAnyResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['GoogleProtobufAny'] = ResolversParentTypes['GoogleProtobufAny']> = ResolversObject<{
  typeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['TodoScalar']>, ParentType, ContextType>;
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
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserListResponse']>, ParentType, ContextType, RequireFields<IdentityUserMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusArray']>, ParentType, ContextType, RequireFields<IdentityUserMutationDeleteArgs, 'input'>>;
  Register?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserResponse']>, ParentType, ContextType, RequireFields<IdentityUserMutationRegisterArgs, 'input'>>;
  Activate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationActivateArgs, 'input'>>;
  ChangePassword?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationChangePasswordArgs, 'input'>>;
  RequestPasswordChange?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationRequestPasswordChangeArgs, 'input'>>;
  RequestEmailChange?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationRequestEmailChangeArgs, 'input'>>;
  ConfirmPasswordChange?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationConfirmPasswordChangeArgs, 'input'>>;
  ConfirmEmailChange?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationConfirmEmailChangeArgs, 'input'>>;
  Unregister?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationUnregisterArgs, 'input'>>;
  Login?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserResponse']>, ParentType, ContextType, RequireFields<IdentityUserMutationLoginArgs, 'input'>>;
  DeleteUsersByOrg?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserIDs']>, ParentType, ContextType, RequireFields<IdentityUserMutationDeleteUsersByOrgArgs, 'input'>>;
  ConfirmUserInvitation?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationConfirmUserInvitationArgs, 'input'>>;
  SendInvitationEmail?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationSendInvitationEmailArgs, 'input'>>;
  SendActivationEmail?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationSendActivationEmailArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceStatusStatusArrayResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceStatusStatusArray'] = ResolversParentTypes['ProtoIoRestorecommerceStatusStatusArray']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatusArray']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusStatusArrayResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusStatusArray'] = ResolversParentTypes['IoRestorecommerceStatusStatusArray']> = ResolversObject<{
  status?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceStatusStatus']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceStatusStatusObjResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceStatusStatusObj'] = ResolversParentTypes['ProtoIoRestorecommerceStatusStatusObj']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatusObj']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusStatusObjResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusStatusObj'] = ResolversParentTypes['IoRestorecommerceStatusStatusObj']> = ResolversObject<{
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceUserUserIDsResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceUserUserIDs'] = ResolversParentTypes['ProtoIoRestorecommerceUserUserIDs']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUserIDs']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserUserIDsResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceUserUserIDs'] = ResolversParentTypes['IoRestorecommerceUserUserIDs']> = ResolversObject<{
  userIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityRoleMutationResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityRoleMutation'] = ResolversParentTypes['IdentityRoleMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceRoleRoleListResponse']>, ParentType, ContextType, RequireFields<IdentityRoleMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusArray']>, ParentType, ContextType, RequireFields<IdentityRoleMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityAuthenticationLogMutationResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityAuthenticationLogMutation'] = ResolversParentTypes['IdentityAuthenticationLogMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse']>, ParentType, ContextType, RequireFields<IdentityAuthenticationLogMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusArray']>, ParentType, ContextType, RequireFields<IdentityAuthenticationLogMutationDeleteArgs, 'input'>>;
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
  ProtoIoRestorecommerceUserUserListResponse?: ProtoIoRestorecommerceUserUserListResponseResolvers<ContextType>;
  StatusType?: StatusTypeResolvers<ContextType>;
  IoRestorecommerceUserUserListResponse?: IoRestorecommerceUserUserListResponseResolvers<ContextType>;
  IoRestorecommerceUserUserResponse?: IoRestorecommerceUserUserResponseResolvers<ContextType>;
  IoRestorecommerceUserUser?: IoRestorecommerceUserUserResolvers<ContextType>;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
  IoRestorecommerceAuthRoleAssociation?: IoRestorecommerceAuthRoleAssociationResolvers<ContextType>;
  IoRestorecommerceImageImage?: IoRestorecommerceImageImageResolvers<ContextType>;
  IoRestorecommerceUserUserType?: IoRestorecommerceUserUserTypeResolvers;
  IoRestorecommerceAuthTokens?: IoRestorecommerceAuthTokensResolvers<ContextType>;
  IoRestorecommerceStatusStatus?: IoRestorecommerceStatusStatusResolvers<ContextType>;
  IoRestorecommerceResourcebaseSortSortOrder?: IoRestorecommerceResourcebaseSortSortOrderResolvers;
  IoRestorecommerceResourcebaseFilterOperation?: IoRestorecommerceResourcebaseFilterOperationResolvers;
  IoRestorecommerceResourcebaseFilterValueType?: IoRestorecommerceResourcebaseFilterValueTypeResolvers;
  Upload?: GraphQLScalarType;
  ProtoIoRestorecommerceUserUserResponse?: ProtoIoRestorecommerceUserUserResponseResolvers<ContextType>;
  IdentityRoleQuery?: IdentityRoleQueryResolvers<ContextType>;
  ProtoIoRestorecommerceRoleRoleListResponse?: ProtoIoRestorecommerceRoleRoleListResponseResolvers<ContextType>;
  IoRestorecommerceRoleRoleListResponse?: IoRestorecommerceRoleRoleListResponseResolvers<ContextType>;
  IoRestorecommerceRoleRoleResponse?: IoRestorecommerceRoleRoleResponseResolvers<ContextType>;
  IoRestorecommerceRoleRole?: IoRestorecommerceRoleRoleResolvers<ContextType>;
  IdentityAuthenticationLogQuery?: IdentityAuthenticationLogQueryResolvers<ContextType>;
  ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse?: ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponseResolvers<ContextType>;
  IoRestorecommerceAuthenticationLogAuthenticationLogListResponse?: IoRestorecommerceAuthenticationLogAuthenticationLogListResponseResolvers<ContextType>;
  IoRestorecommerceAuthenticationLogAuthenticationLogResponse?: IoRestorecommerceAuthenticationLogAuthenticationLogResponseResolvers<ContextType>;
  IoRestorecommerceAuthenticationLogAuthenticationLog?: IoRestorecommerceAuthenticationLogAuthenticationLogResolvers<ContextType>;
  IdentityTokenQuery?: IdentityTokenQueryResolvers<ContextType>;
  ProtoGoogleProtobufAny?: ProtoGoogleProtobufAnyResolvers<ContextType>;
  GoogleProtobufAny?: GoogleProtobufAnyResolvers<ContextType>;
  TodoScalar?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  IdentityMutation?: IdentityMutationResolvers<ContextType>;
  IdentityUserMutation?: IdentityUserMutationResolvers<ContextType>;
  ProtoIoRestorecommerceStatusStatusArray?: ProtoIoRestorecommerceStatusStatusArrayResolvers<ContextType>;
  IoRestorecommerceStatusStatusArray?: IoRestorecommerceStatusStatusArrayResolvers<ContextType>;
  ProtoIoRestorecommerceStatusStatusObj?: ProtoIoRestorecommerceStatusStatusObjResolvers<ContextType>;
  IoRestorecommerceStatusStatusObj?: IoRestorecommerceStatusStatusObjResolvers<ContextType>;
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
