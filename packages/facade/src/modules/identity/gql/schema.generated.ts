import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { IdentityContext } from '../interfaces';
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
  MapScalar: any;
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
  Read?: Maybe<ProtoIoRestorecommerceUserUserListWithRoleResponse>;
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

export type ProtoIoRestorecommerceUserUserListWithRoleResponse = {
  __typename?: 'ProtoIoRestorecommerceUserUserListWithRoleResponse';
  details?: Maybe<IoRestorecommerceUserUserListWithRoleResponse>;
};

export type IoRestorecommerceUserUserListWithRoleResponse = {
  __typename?: 'IoRestorecommerceUserUserListWithRoleResponse';
  items?: Maybe<Array<IoRestorecommerceUserUserRoleResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceUserUserRoleResponse = {
  __typename?: 'IoRestorecommerceUserUserRoleResponse';
  payload?: Maybe<IoRestorecommerceUserUserRole>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceUserUserRole = {
  __typename?: 'IoRestorecommerceUserUserRole';
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
  timezone?: Maybe<IoRestorecommerceTimezoneTimezone>;
  localeId?: Maybe<Scalars['String']>;
  locale?: Maybe<IoRestorecommerceLocaleLocale>;
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
  data?: Maybe<GoogleProtobufAny>;
  roles?: Maybe<Array<IoRestorecommerceRoleRole>>;
};

export type IoRestorecommerceMetaMeta = {
  __typename?: 'IoRestorecommerceMetaMeta';
  created?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['Float']>;
  modifiedBy?: Maybe<Scalars['String']>;
  owners?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  acls?: Maybe<Array<IoRestorecommerceAttributeAttributeObj>>;
};

export type IoRestorecommerceAttributeAttribute = {
  __typename?: 'IoRestorecommerceAttributeAttribute';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
};

export type IoRestorecommerceAttributeAttributeObj = {
  __typename?: 'IoRestorecommerceAttributeAttributeObj';
  attributes?: Maybe<IoRestorecommerceAttributeAttribute>;
};

export type IoRestorecommerceAuthRoleAssociation = {
  __typename?: 'IoRestorecommerceAuthRoleAssociation';
  role?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  id?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['Float']>;
};

export type IoRestorecommerceTimezoneTimezone = {
  __typename?: 'IoRestorecommerceTimezoneTimezone';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  description?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceLocaleLocale = {
  __typename?: 'IoRestorecommerceLocaleLocale';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  value?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
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
  tags?: Maybe<Array<Scalars['String']>>;
  index?: Maybe<Scalars['Int']>;
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

export type GoogleProtobufAny = {
  __typename?: 'GoogleProtobufAny';
  typeUrl?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['GoogleProtobufAnyValue']>;
};

export type IoRestorecommerceRoleRole = {
  __typename?: 'IoRestorecommerceRoleRole';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  assignableByRoles?: Maybe<Array<Scalars['String']>>;
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
  name?: InputMaybe<Scalars['String']>;
  include?: InputMaybe<Scalars['Boolean']>;
};

export type IGoogleProtobufAny = {
  typeUrl?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['GoogleProtobufAnyValue']>;
};

export type IIoRestorecommerceResourcebaseSearch = {
  search?: InputMaybe<Scalars['String']>;
  fields?: InputMaybe<Array<Scalars['String']>>;
  caseSensitive?: InputMaybe<Scalars['Boolean']>;
};

export type ProtoIoRestorecommerceUserUserListResponse = {
  __typename?: 'ProtoIoRestorecommerceUserUserListResponse';
  details?: Maybe<IoRestorecommerceUserUserListResponse>;
};

export type IoRestorecommerceUserUserListResponse = {
  __typename?: 'IoRestorecommerceUserUserListResponse';
  items?: Maybe<Array<IoRestorecommerceUserUserResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
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
  timezone?: Maybe<IoRestorecommerceTimezoneTimezone>;
  localeId?: Maybe<Scalars['String']>;
  locale?: Maybe<IoRestorecommerceLocaleLocale>;
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
  data?: Maybe<GoogleProtobufAny>;
};

export type IIoRestorecommerceUserFindRequest = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceUserFindByRoleRequest = {
  role?: InputMaybe<Scalars['String']>;
  attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type IIoRestorecommerceAttributeAttribute = {
  id?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type ProtoIoRestorecommerceUserUserResponse = {
  __typename?: 'ProtoIoRestorecommerceUserUserResponse';
  details?: Maybe<IoRestorecommerceUserUserResponse>;
};

export type IIoRestorecommerceUserFindByTokenRequest = {
  token?: InputMaybe<Scalars['String']>;
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
  details?: Maybe<IoRestorecommerceRoleRoleListResponse>;
};

export type IoRestorecommerceRoleRoleListResponse = {
  __typename?: 'IoRestorecommerceRoleRoleListResponse';
  items?: Maybe<Array<IoRestorecommerceRoleRoleResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceRoleRoleResponse = {
  __typename?: 'IoRestorecommerceRoleRoleResponse';
  payload?: Maybe<IoRestorecommerceRoleRole>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
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
  details?: Maybe<IoRestorecommerceAuthenticationLogAuthenticationLogListResponse>;
};

export type IoRestorecommerceAuthenticationLogAuthenticationLogListResponse = {
  __typename?: 'IoRestorecommerceAuthenticationLogAuthenticationLogListResponse';
  items?: Maybe<Array<IoRestorecommerceAuthenticationLogAuthenticationLogResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
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
  details?: Maybe<GoogleProtobufAny>;
};

export type IIoRestorecommerceTokenIdentifier = {
  id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
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
  o_auth: IdentityOAuthMutation;
};

export type IdentityUserMutation = {
  __typename?: 'IdentityUserMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceUserUserListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Register?: Maybe<ProtoIoRestorecommerceUserUserResponse>;
  Activate?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  ChangePassword?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  RequestPasswordChange?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  RequestEmailChange?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  ConfirmPasswordChange?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  ConfirmEmailChange?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  Unregister?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  Login?: Maybe<ProtoIoRestorecommerceUserUserResponse>;
  DeleteUsersByOrg?: Maybe<ProtoIoRestorecommerceUserDeleteUsersByOrgResponse>;
  ConfirmUserInvitation?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  SendInvitationEmail?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  SendActivationEmail?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
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
  items?: InputMaybe<Array<IIoRestorecommerceUserUser>>;
  totalCount?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceUserUser = {
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  newEmail?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  activationCode?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  roleAssociations?: InputMaybe<Array<IIoRestorecommerceAuthRoleAssociation>>;
  timezoneId?: InputMaybe<Scalars['String']>;
  localeId?: InputMaybe<Scalars['String']>;
  defaultScope?: InputMaybe<Scalars['String']>;
  unauthenticated?: InputMaybe<Scalars['Boolean']>;
  guest?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<IIoRestorecommerceImageImage>;
  userType?: InputMaybe<IoRestorecommerceUserUserType>;
  invite?: InputMaybe<Scalars['Boolean']>;
  invitedByUserName?: InputMaybe<Scalars['String']>;
  invitedByUserFirstName?: InputMaybe<Scalars['String']>;
  invitedByUserLastName?: InputMaybe<Scalars['String']>;
  tokens?: InputMaybe<Array<IIoRestorecommerceAuthTokens>>;
  lastAccess?: InputMaybe<Scalars['Float']>;
  data?: InputMaybe<IGoogleProtobufAny>;
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

export type IIoRestorecommerceAuthRoleAssociation = {
  role?: InputMaybe<Scalars['String']>;
  attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  id?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['Float']>;
};

export type IIoRestorecommerceImageImage = {
  id?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  length?: InputMaybe<Scalars['Float']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  index?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceAuthTokens = {
  name?: InputMaybe<Scalars['String']>;
  expiresIn?: InputMaybe<Scalars['Float']>;
  token?: InputMaybe<Scalars['String']>;
  scopes?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Scalars['String']>;
  interactive?: InputMaybe<Scalars['Boolean']>;
  lastLogin?: InputMaybe<Scalars['Float']>;
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

export type IIoRestorecommerceUserRegisterRequest = {
  id?: InputMaybe<Scalars['String']>;
  guest?: InputMaybe<Scalars['Boolean']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  timezoneId?: InputMaybe<Scalars['String']>;
  localeId?: InputMaybe<Scalars['String']>;
  defaultScope?: InputMaybe<Scalars['String']>;
  userType?: InputMaybe<IoRestorecommerceUserUserType>;
  captchaCode?: InputMaybe<Scalars['String']>;
};

export type ProtoIoRestorecommerceStatusOperationStatusObj = {
  __typename?: 'ProtoIoRestorecommerceStatusOperationStatusObj';
  details?: Maybe<IoRestorecommerceStatusOperationStatusObj>;
};

export type IoRestorecommerceStatusOperationStatusObj = {
  __typename?: 'IoRestorecommerceStatusOperationStatusObj';
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IIoRestorecommerceUserActivateRequest = {
  identifier?: InputMaybe<Scalars['String']>;
  activationCode?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceUserChangePasswordRequest = {
  password?: InputMaybe<Scalars['String']>;
  newPassword?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceUserRequestPasswordChangeRequest = {
  identifier?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceUserChangeEmailRequest = {
  identifier?: InputMaybe<Scalars['String']>;
  newEmail?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceUserConfirmPasswordChangeRequest = {
  identifier?: InputMaybe<Scalars['String']>;
  activationCode?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceUserConfirmEmailChangeRequest = {
  identifier?: InputMaybe<Scalars['String']>;
  activationCode?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceUserUnregisterRequest = {
  identifier?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceUserLoginRequest = {
  identifier?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type ProtoIoRestorecommerceUserDeleteUsersByOrgResponse = {
  __typename?: 'ProtoIoRestorecommerceUserDeleteUsersByOrgResponse';
  details?: Maybe<IoRestorecommerceUserDeleteUsersByOrgResponse>;
};

export type IoRestorecommerceUserDeleteUsersByOrgResponse = {
  __typename?: 'IoRestorecommerceUserDeleteUsersByOrgResponse';
  userIds?: Maybe<Array<Scalars['String']>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IIoRestorecommerceUserOrgIdRequest = {
  orgIds?: InputMaybe<Array<Scalars['String']>>;
};

export type IIoRestorecommerceUserConfirmUserInvitationRequest = {
  identifier?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  activationCode?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceUserSendInvitationEmailRequest = {
  identifier?: InputMaybe<Scalars['String']>;
  invitedByUserIdentifier?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceUserSendActivationEmailRequest = {
  identifier?: InputMaybe<Scalars['String']>;
};

export type IdentityRoleMutation = {
  __typename?: 'IdentityRoleMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceRoleRoleListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type IdentityRoleMutationMutateArgs = {
  input: IIoRestorecommerceRoleRoleList;
};


export type IdentityRoleMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceRoleRoleList = {
  items?: InputMaybe<Array<IIoRestorecommerceRoleRole>>;
  totalCount?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceRoleRole = {
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  assignableByRoles?: InputMaybe<Array<Scalars['String']>>;
};

export type IdentityAuthenticationLogMutation = {
  __typename?: 'IdentityAuthenticationLogMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type IdentityAuthenticationLogMutationMutateArgs = {
  input: IIoRestorecommerceAuthenticationLogAuthenticationLogList;
};


export type IdentityAuthenticationLogMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceAuthenticationLogAuthenticationLogList = {
  items?: InputMaybe<Array<IIoRestorecommerceAuthenticationLogAuthenticationLog>>;
  totalCount?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceAuthenticationLogAuthenticationLog = {
  id?: InputMaybe<Scalars['String']>;
  ipv4Address?: InputMaybe<Scalars['String']>;
  ipv6Address?: InputMaybe<Scalars['String']>;
  operatingSystem?: InputMaybe<Scalars['String']>;
  userAgent?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['Float']>;
  activity?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  subjectId?: InputMaybe<Scalars['String']>;
  tokenName?: InputMaybe<Scalars['String']>;
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
  id?: InputMaybe<Scalars['String']>;
  payload?: InputMaybe<IGoogleProtobufAny>;
  expiresIn?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceTokenGrantId = {
  grantId?: InputMaybe<Scalars['String']>;
};

export type IdentityOAuthMutation = {
  __typename?: 'IdentityOAuthMutation';
  AvailableServices?: Maybe<ProtoIoRestorecommerceOauthServicesResponse>;
  GenerateLinks?: Maybe<ProtoIoRestorecommerceOauthGenerateLinksResponse>;
  ExchangeCode?: Maybe<ProtoIoRestorecommerceOauthExchangeCodeResponse>;
  GetToken?: Maybe<ProtoIoRestorecommerceOauthGetTokenResponse>;
};


export type IdentityOAuthMutationExchangeCodeArgs = {
  input: IIoRestorecommerceOauthExchangeCodeRequest;
};


export type IdentityOAuthMutationGetTokenArgs = {
  input: IIoRestorecommerceOauthGetTokenRequest;
};

export type ProtoIoRestorecommerceOauthServicesResponse = {
  __typename?: 'ProtoIoRestorecommerceOauthServicesResponse';
  details?: Maybe<IoRestorecommerceOauthServicesResponse>;
};

export type IoRestorecommerceOauthServicesResponse = {
  __typename?: 'IoRestorecommerceOauthServicesResponse';
  services?: Maybe<Array<Scalars['String']>>;
};

export type ProtoIoRestorecommerceOauthGenerateLinksResponse = {
  __typename?: 'ProtoIoRestorecommerceOauthGenerateLinksResponse';
  details?: Maybe<IoRestorecommerceOauthGenerateLinksResponse>;
};

export type IoRestorecommerceOauthGenerateLinksResponse = {
  __typename?: 'IoRestorecommerceOauthGenerateLinksResponse';
  links?: Maybe<Scalars['MapScalar']>;
};

export type ProtoIoRestorecommerceOauthExchangeCodeResponse = {
  __typename?: 'ProtoIoRestorecommerceOauthExchangeCodeResponse';
  details?: Maybe<IoRestorecommerceOauthExchangeCodeResponse>;
};

export type IoRestorecommerceOauthExchangeCodeResponse = {
  __typename?: 'IoRestorecommerceOauthExchangeCodeResponse';
  user?: Maybe<IoRestorecommerceUserUserResponse>;
  email?: Maybe<Scalars['String']>;
  token?: Maybe<IoRestorecommerceAuthTokens>;
};

export type IIoRestorecommerceOauthExchangeCodeRequest = {
  service?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
};

export type ProtoIoRestorecommerceOauthGetTokenResponse = {
  __typename?: 'ProtoIoRestorecommerceOauthGetTokenResponse';
  details?: Maybe<IoRestorecommerceOauthGetTokenResponse>;
};

export type IoRestorecommerceOauthGetTokenResponse = {
  __typename?: 'IoRestorecommerceOauthGetTokenResponse';
  status?: Maybe<IoRestorecommerceStatusStatus>;
  token?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceOauthGetTokenRequest = {
  service?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  orderingOrders?: Maybe<SubscriptionOutput>;
  catalogProducts?: Maybe<SubscriptionOutput>;
  fulfillmentFulfillments?: Maybe<SubscriptionOutput>;
  fulfillmentFulfillmentCouriers?: Maybe<SubscriptionOutput>;
  fulfillmentFulfillment_products?: Maybe<SubscriptionOutput>;
  identityUsers?: Maybe<SubscriptionOutput>;
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


export type SubscriptionIdentityUsersArgs = {
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
  IdentityQuery: ResolverTypeWrapper<IdentityQuery>;
  IdentityUserQuery: ResolverTypeWrapper<IdentityUserQuery>;
  ProtoIoRestorecommerceUserUserListWithRoleResponse: ResolverTypeWrapper<ProtoIoRestorecommerceUserUserListWithRoleResponse>;
  IoRestorecommerceUserUserListWithRoleResponse: ResolverTypeWrapper<IoRestorecommerceUserUserListWithRoleResponse>;
  IoRestorecommerceUserUserRoleResponse: ResolverTypeWrapper<IoRestorecommerceUserUserRoleResponse>;
  IoRestorecommerceUserUserRole: ResolverTypeWrapper<IoRestorecommerceUserUserRole>;
  String: ResolverTypeWrapper<Scalars['String']>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  IoRestorecommerceAttributeAttributeObj: ResolverTypeWrapper<IoRestorecommerceAttributeAttributeObj>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  IoRestorecommerceAuthRoleAssociation: ResolverTypeWrapper<IoRestorecommerceAuthRoleAssociation>;
  IoRestorecommerceTimezoneTimezone: ResolverTypeWrapper<IoRestorecommerceTimezoneTimezone>;
  IoRestorecommerceLocaleLocale: ResolverTypeWrapper<IoRestorecommerceLocaleLocale>;
  IoRestorecommerceImageImage: ResolverTypeWrapper<IoRestorecommerceImageImage>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IoRestorecommerceUserUserType: IoRestorecommerceUserUserType;
  IoRestorecommerceAuthTokens: ResolverTypeWrapper<IoRestorecommerceAuthTokens>;
  GoogleProtobufAny: ResolverTypeWrapper<GoogleProtobufAny>;
  GoogleProtobufAnyValue: ResolverTypeWrapper<Scalars['GoogleProtobufAnyValue']>;
  IoRestorecommerceRoleRole: ResolverTypeWrapper<IoRestorecommerceRoleRole>;
  IoRestorecommerceStatusStatus: ResolverTypeWrapper<IoRestorecommerceStatusStatus>;
  IoRestorecommerceStatusOperationStatus: ResolverTypeWrapper<IoRestorecommerceStatusOperationStatus>;
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
  IGoogleProtobufAny: IGoogleProtobufAny;
  IIoRestorecommerceResourcebaseSearch: IIoRestorecommerceResourcebaseSearch;
  ProtoIoRestorecommerceUserUserListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceUserUserListResponse>;
  IoRestorecommerceUserUserListResponse: ResolverTypeWrapper<IoRestorecommerceUserUserListResponse>;
  IoRestorecommerceUserUserResponse: ResolverTypeWrapper<IoRestorecommerceUserUserResponse>;
  IoRestorecommerceUserUser: ResolverTypeWrapper<IoRestorecommerceUserUser>;
  IIoRestorecommerceUserFindRequest: IIoRestorecommerceUserFindRequest;
  IIoRestorecommerceUserFindByRoleRequest: IIoRestorecommerceUserFindByRoleRequest;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  ProtoIoRestorecommerceUserUserResponse: ResolverTypeWrapper<ProtoIoRestorecommerceUserUserResponse>;
  IIoRestorecommerceUserFindByTokenRequest: IIoRestorecommerceUserFindByTokenRequest;
  IdentityRoleQuery: ResolverTypeWrapper<IdentityRoleQuery>;
  ProtoIoRestorecommerceRoleRoleListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceRoleRoleListResponse>;
  IoRestorecommerceRoleRoleListResponse: ResolverTypeWrapper<IoRestorecommerceRoleRoleListResponse>;
  IoRestorecommerceRoleRoleResponse: ResolverTypeWrapper<IoRestorecommerceRoleRoleResponse>;
  IdentityAuthenticationLogQuery: ResolverTypeWrapper<IdentityAuthenticationLogQuery>;
  ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse>;
  IoRestorecommerceAuthenticationLogAuthenticationLogListResponse: ResolverTypeWrapper<IoRestorecommerceAuthenticationLogAuthenticationLogListResponse>;
  IoRestorecommerceAuthenticationLogAuthenticationLogResponse: ResolverTypeWrapper<IoRestorecommerceAuthenticationLogAuthenticationLogResponse>;
  IoRestorecommerceAuthenticationLogAuthenticationLog: ResolverTypeWrapper<IoRestorecommerceAuthenticationLogAuthenticationLog>;
  IdentityTokenQuery: ResolverTypeWrapper<IdentityTokenQuery>;
  ProtoGoogleProtobufAny: ResolverTypeWrapper<ProtoGoogleProtobufAny>;
  IIoRestorecommerceTokenIdentifier: IIoRestorecommerceTokenIdentifier;
  Mutation: ResolverTypeWrapper<{}>;
  IdentityMutation: ResolverTypeWrapper<IdentityMutation>;
  IdentityUserMutation: ResolverTypeWrapper<IdentityUserMutation>;
  IIoRestorecommerceUserUserList: IIoRestorecommerceUserUserList;
  IIoRestorecommerceUserUser: IIoRestorecommerceUserUser;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceAttributeAttributeObj: IIoRestorecommerceAttributeAttributeObj;
  IIoRestorecommerceAuthRoleAssociation: IIoRestorecommerceAuthRoleAssociation;
  IIoRestorecommerceImageImage: IIoRestorecommerceImageImage;
  IIoRestorecommerceAuthTokens: IIoRestorecommerceAuthTokens;
  ModeType: ModeType;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  IoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<IoRestorecommerceResourcebaseDeleteResponse>;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  IIoRestorecommerceUserRegisterRequest: IIoRestorecommerceUserRegisterRequest;
  ProtoIoRestorecommerceStatusOperationStatusObj: ResolverTypeWrapper<ProtoIoRestorecommerceStatusOperationStatusObj>;
  IoRestorecommerceStatusOperationStatusObj: ResolverTypeWrapper<IoRestorecommerceStatusOperationStatusObj>;
  IIoRestorecommerceUserActivateRequest: IIoRestorecommerceUserActivateRequest;
  IIoRestorecommerceUserChangePasswordRequest: IIoRestorecommerceUserChangePasswordRequest;
  IIoRestorecommerceUserRequestPasswordChangeRequest: IIoRestorecommerceUserRequestPasswordChangeRequest;
  IIoRestorecommerceUserChangeEmailRequest: IIoRestorecommerceUserChangeEmailRequest;
  IIoRestorecommerceUserConfirmPasswordChangeRequest: IIoRestorecommerceUserConfirmPasswordChangeRequest;
  IIoRestorecommerceUserConfirmEmailChangeRequest: IIoRestorecommerceUserConfirmEmailChangeRequest;
  IIoRestorecommerceUserUnregisterRequest: IIoRestorecommerceUserUnregisterRequest;
  IIoRestorecommerceUserLoginRequest: IIoRestorecommerceUserLoginRequest;
  ProtoIoRestorecommerceUserDeleteUsersByOrgResponse: ResolverTypeWrapper<ProtoIoRestorecommerceUserDeleteUsersByOrgResponse>;
  IoRestorecommerceUserDeleteUsersByOrgResponse: ResolverTypeWrapper<IoRestorecommerceUserDeleteUsersByOrgResponse>;
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
  IdentityOAuthMutation: ResolverTypeWrapper<IdentityOAuthMutation>;
  ProtoIoRestorecommerceOauthServicesResponse: ResolverTypeWrapper<ProtoIoRestorecommerceOauthServicesResponse>;
  IoRestorecommerceOauthServicesResponse: ResolverTypeWrapper<IoRestorecommerceOauthServicesResponse>;
  ProtoIoRestorecommerceOauthGenerateLinksResponse: ResolverTypeWrapper<ProtoIoRestorecommerceOauthGenerateLinksResponse>;
  IoRestorecommerceOauthGenerateLinksResponse: ResolverTypeWrapper<IoRestorecommerceOauthGenerateLinksResponse>;
  MapScalar: ResolverTypeWrapper<Scalars['MapScalar']>;
  ProtoIoRestorecommerceOauthExchangeCodeResponse: ResolverTypeWrapper<ProtoIoRestorecommerceOauthExchangeCodeResponse>;
  IoRestorecommerceOauthExchangeCodeResponse: ResolverTypeWrapper<IoRestorecommerceOauthExchangeCodeResponse>;
  IIoRestorecommerceOauthExchangeCodeRequest: IIoRestorecommerceOauthExchangeCodeRequest;
  ProtoIoRestorecommerceOauthGetTokenResponse: ResolverTypeWrapper<ProtoIoRestorecommerceOauthGetTokenResponse>;
  IoRestorecommerceOauthGetTokenResponse: ResolverTypeWrapper<IoRestorecommerceOauthGetTokenResponse>;
  IIoRestorecommerceOauthGetTokenRequest: IIoRestorecommerceOauthGetTokenRequest;
  Subscription: ResolverTypeWrapper<{}>;
  SubscriptionOutput: ResolverTypeWrapper<SubscriptionOutput>;
  SubscriptionAction: SubscriptionAction;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  IdentityQuery: IdentityQuery;
  IdentityUserQuery: IdentityUserQuery;
  ProtoIoRestorecommerceUserUserListWithRoleResponse: ProtoIoRestorecommerceUserUserListWithRoleResponse;
  IoRestorecommerceUserUserListWithRoleResponse: IoRestorecommerceUserUserListWithRoleResponse;
  IoRestorecommerceUserUserRoleResponse: IoRestorecommerceUserUserRoleResponse;
  IoRestorecommerceUserUserRole: IoRestorecommerceUserUserRole;
  String: Scalars['String'];
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  Float: Scalars['Float'];
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  IoRestorecommerceAttributeAttributeObj: IoRestorecommerceAttributeAttributeObj;
  Boolean: Scalars['Boolean'];
  IoRestorecommerceAuthRoleAssociation: IoRestorecommerceAuthRoleAssociation;
  IoRestorecommerceTimezoneTimezone: IoRestorecommerceTimezoneTimezone;
  IoRestorecommerceLocaleLocale: IoRestorecommerceLocaleLocale;
  IoRestorecommerceImageImage: IoRestorecommerceImageImage;
  Int: Scalars['Int'];
  IoRestorecommerceAuthTokens: IoRestorecommerceAuthTokens;
  GoogleProtobufAny: GoogleProtobufAny;
  GoogleProtobufAnyValue: Scalars['GoogleProtobufAnyValue'];
  IoRestorecommerceRoleRole: IoRestorecommerceRoleRole;
  IoRestorecommerceStatusStatus: IoRestorecommerceStatusStatus;
  IoRestorecommerceStatusOperationStatus: IoRestorecommerceStatusOperationStatus;
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IIoRestorecommerceResourcebaseFilterOp: IIoRestorecommerceResourcebaseFilterOp;
  IIoRestorecommerceResourcebaseFilter: IIoRestorecommerceResourcebaseFilter;
  IIoRestorecommerceFilterFilterOp: IIoRestorecommerceFilterFilterOp;
  IIoRestorecommerceFilterFilter: IIoRestorecommerceFilterFilter;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  IGoogleProtobufAny: IGoogleProtobufAny;
  IIoRestorecommerceResourcebaseSearch: IIoRestorecommerceResourcebaseSearch;
  ProtoIoRestorecommerceUserUserListResponse: ProtoIoRestorecommerceUserUserListResponse;
  IoRestorecommerceUserUserListResponse: IoRestorecommerceUserUserListResponse;
  IoRestorecommerceUserUserResponse: IoRestorecommerceUserUserResponse;
  IoRestorecommerceUserUser: IoRestorecommerceUserUser;
  IIoRestorecommerceUserFindRequest: IIoRestorecommerceUserFindRequest;
  IIoRestorecommerceUserFindByRoleRequest: IIoRestorecommerceUserFindByRoleRequest;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  ProtoIoRestorecommerceUserUserResponse: ProtoIoRestorecommerceUserUserResponse;
  IIoRestorecommerceUserFindByTokenRequest: IIoRestorecommerceUserFindByTokenRequest;
  IdentityRoleQuery: IdentityRoleQuery;
  ProtoIoRestorecommerceRoleRoleListResponse: ProtoIoRestorecommerceRoleRoleListResponse;
  IoRestorecommerceRoleRoleListResponse: IoRestorecommerceRoleRoleListResponse;
  IoRestorecommerceRoleRoleResponse: IoRestorecommerceRoleRoleResponse;
  IdentityAuthenticationLogQuery: IdentityAuthenticationLogQuery;
  ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse: ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse;
  IoRestorecommerceAuthenticationLogAuthenticationLogListResponse: IoRestorecommerceAuthenticationLogAuthenticationLogListResponse;
  IoRestorecommerceAuthenticationLogAuthenticationLogResponse: IoRestorecommerceAuthenticationLogAuthenticationLogResponse;
  IoRestorecommerceAuthenticationLogAuthenticationLog: IoRestorecommerceAuthenticationLogAuthenticationLog;
  IdentityTokenQuery: IdentityTokenQuery;
  ProtoGoogleProtobufAny: ProtoGoogleProtobufAny;
  IIoRestorecommerceTokenIdentifier: IIoRestorecommerceTokenIdentifier;
  Mutation: {};
  IdentityMutation: IdentityMutation;
  IdentityUserMutation: IdentityUserMutation;
  IIoRestorecommerceUserUserList: IIoRestorecommerceUserUserList;
  IIoRestorecommerceUserUser: IIoRestorecommerceUserUser;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceAttributeAttributeObj: IIoRestorecommerceAttributeAttributeObj;
  IIoRestorecommerceAuthRoleAssociation: IIoRestorecommerceAuthRoleAssociation;
  IIoRestorecommerceImageImage: IIoRestorecommerceImageImage;
  IIoRestorecommerceAuthTokens: IIoRestorecommerceAuthTokens;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ProtoIoRestorecommerceResourcebaseDeleteResponse;
  IoRestorecommerceResourcebaseDeleteResponse: IoRestorecommerceResourcebaseDeleteResponse;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  IIoRestorecommerceUserRegisterRequest: IIoRestorecommerceUserRegisterRequest;
  ProtoIoRestorecommerceStatusOperationStatusObj: ProtoIoRestorecommerceStatusOperationStatusObj;
  IoRestorecommerceStatusOperationStatusObj: IoRestorecommerceStatusOperationStatusObj;
  IIoRestorecommerceUserActivateRequest: IIoRestorecommerceUserActivateRequest;
  IIoRestorecommerceUserChangePasswordRequest: IIoRestorecommerceUserChangePasswordRequest;
  IIoRestorecommerceUserRequestPasswordChangeRequest: IIoRestorecommerceUserRequestPasswordChangeRequest;
  IIoRestorecommerceUserChangeEmailRequest: IIoRestorecommerceUserChangeEmailRequest;
  IIoRestorecommerceUserConfirmPasswordChangeRequest: IIoRestorecommerceUserConfirmPasswordChangeRequest;
  IIoRestorecommerceUserConfirmEmailChangeRequest: IIoRestorecommerceUserConfirmEmailChangeRequest;
  IIoRestorecommerceUserUnregisterRequest: IIoRestorecommerceUserUnregisterRequest;
  IIoRestorecommerceUserLoginRequest: IIoRestorecommerceUserLoginRequest;
  ProtoIoRestorecommerceUserDeleteUsersByOrgResponse: ProtoIoRestorecommerceUserDeleteUsersByOrgResponse;
  IoRestorecommerceUserDeleteUsersByOrgResponse: IoRestorecommerceUserDeleteUsersByOrgResponse;
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
  IdentityOAuthMutation: IdentityOAuthMutation;
  ProtoIoRestorecommerceOauthServicesResponse: ProtoIoRestorecommerceOauthServicesResponse;
  IoRestorecommerceOauthServicesResponse: IoRestorecommerceOauthServicesResponse;
  ProtoIoRestorecommerceOauthGenerateLinksResponse: ProtoIoRestorecommerceOauthGenerateLinksResponse;
  IoRestorecommerceOauthGenerateLinksResponse: IoRestorecommerceOauthGenerateLinksResponse;
  MapScalar: Scalars['MapScalar'];
  ProtoIoRestorecommerceOauthExchangeCodeResponse: ProtoIoRestorecommerceOauthExchangeCodeResponse;
  IoRestorecommerceOauthExchangeCodeResponse: IoRestorecommerceOauthExchangeCodeResponse;
  IIoRestorecommerceOauthExchangeCodeRequest: IIoRestorecommerceOauthExchangeCodeRequest;
  ProtoIoRestorecommerceOauthGetTokenResponse: ProtoIoRestorecommerceOauthGetTokenResponse;
  IoRestorecommerceOauthGetTokenResponse: IoRestorecommerceOauthGetTokenResponse;
  IIoRestorecommerceOauthGetTokenRequest: IIoRestorecommerceOauthGetTokenRequest;
  Subscription: {};
  SubscriptionOutput: SubscriptionOutput;
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
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserListWithRoleResponse']>, ParentType, ContextType, RequireFields<IdentityUserQueryReadArgs, 'input'>>;
  Find?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserListResponse']>, ParentType, ContextType, RequireFields<IdentityUserQueryFindArgs, 'input'>>;
  FindByRole?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserListResponse']>, ParentType, ContextType, RequireFields<IdentityUserQueryFindByRoleArgs, 'input'>>;
  FindByToken?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserResponse']>, ParentType, ContextType, RequireFields<IdentityUserQueryFindByTokenArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceUserUserListWithRoleResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceUserUserListWithRoleResponse'] = ResolversParentTypes['ProtoIoRestorecommerceUserUserListWithRoleResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUserListWithRoleResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserUserListWithRoleResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceUserUserListWithRoleResponse'] = ResolversParentTypes['IoRestorecommerceUserUserListWithRoleResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceUserUserRoleResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserUserRoleResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceUserUserRoleResponse'] = ResolversParentTypes['IoRestorecommerceUserUserRoleResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUserRole']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserUserRoleResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceUserUserRole'] = ResolversParentTypes['IoRestorecommerceUserUserRole']> = ResolversObject<{
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
  timezone?: Resolver<Maybe<ResolversTypes['IoRestorecommerceTimezoneTimezone']>, ParentType, ContextType>;
  localeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['IoRestorecommerceLocaleLocale']>, ParentType, ContextType>;
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
  data?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  roles?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceRoleRole']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceMetaMetaResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceMetaMeta'] = ResolversParentTypes['IoRestorecommerceMetaMeta']> = ResolversObject<{
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modified?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modifiedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owners?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  acls?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttributeObj']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeObjResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttributeObj'] = ResolversParentTypes['IoRestorecommerceAttributeAttributeObj']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthRoleAssociationResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthRoleAssociation'] = ResolversParentTypes['IoRestorecommerceAuthRoleAssociation']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTimezoneTimezoneResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceTimezoneTimezone'] = ResolversParentTypes['IoRestorecommerceTimezoneTimezone']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceLocaleLocaleResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceLocaleLocale'] = ResolversParentTypes['IoRestorecommerceLocaleLocale']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  tags?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserUserTypeResolvers = { ORG_USER: 0, INDIVIDUAL_USER: 1, GUEST: 2, TECHNICAL_USER: 3 };

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

export type GoogleProtobufAnyResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['GoogleProtobufAny'] = ResolversParentTypes['GoogleProtobufAny']> = ResolversObject<{
  typeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['GoogleProtobufAnyValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface GoogleProtobufAnyValueScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GoogleProtobufAnyValue'], any> {
  name: 'GoogleProtobufAnyValue';
}

export type IoRestorecommerceRoleRoleResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceRoleRole'] = ResolversParentTypes['IoRestorecommerceRoleRole']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  assignableByRoles?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusStatusResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusStatus'] = ResolversParentTypes['IoRestorecommerceStatusStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusOperationStatusResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusOperationStatus'] = ResolversParentTypes['IoRestorecommerceStatusOperationStatus']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseSortSortOrderResolvers = { UNSORTED: 0, ASCENDING: 1, DESCENDING: 2 };

export type IoRestorecommerceResourcebaseFilterOperationResolvers = { eq: 0, lt: 1, lte: 2, gt: 3, gte: 4, isEmpty: 5, iLike: 6, in: 7, neq: 8 };

export type IoRestorecommerceResourcebaseFilterValueTypeResolvers = { STRING: 0, NUMBER: 1, BOOLEAN: 2, DATE: 3, ARRAY: 4 };

export type IoRestorecommerceFilterFilterOperationResolvers = { eq: 0, lt: 1, lte: 2, gt: 3, gte: 4, isEmpty: 5, iLike: 6, in: 7, neq: 8 };

export type IoRestorecommerceFilterFilterValueTypeResolvers = { STRING: 0, NUMBER: 1, BOOLEAN: 2, DATE: 3, ARRAY: 4 };

export type IoRestorecommerceFilterFilterOpOperatorResolvers = { and: 0, or: 1 };

export type IoRestorecommerceResourcebaseFilterOpOperatorResolvers = { and: 0, or: 1 };

export type ProtoIoRestorecommerceUserUserListResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceUserUserListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceUserUserListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUserListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserUserListResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceUserUserListResponse'] = ResolversParentTypes['IoRestorecommerceUserUserListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceUserUserResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
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
  timezone?: Resolver<Maybe<ResolversTypes['IoRestorecommerceTimezoneTimezone']>, ParentType, ContextType>;
  localeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['IoRestorecommerceLocaleLocale']>, ParentType, ContextType>;
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
  data?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceUserUserResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceUserUserResponse'] = ResolversParentTypes['ProtoIoRestorecommerceUserUserResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUserResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityRoleQueryResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityRoleQuery'] = ResolversParentTypes['IdentityRoleQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceRoleRoleListResponse']>, ParentType, ContextType, RequireFields<IdentityRoleQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceRoleRoleListResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceRoleRoleListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceRoleRoleListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceRoleRoleListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceRoleRoleListResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceRoleRoleListResponse'] = ResolversParentTypes['IoRestorecommerceRoleRoleListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceRoleRoleResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceRoleRoleResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceRoleRoleResponse'] = ResolversParentTypes['IoRestorecommerceRoleRoleResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceRoleRole']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityAuthenticationLogQueryResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityAuthenticationLogQuery'] = ResolversParentTypes['IdentityAuthenticationLogQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse']>, ParentType, ContextType, RequireFields<IdentityAuthenticationLogQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAuthenticationLogAuthenticationLogListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthenticationLogAuthenticationLogListResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthenticationLogAuthenticationLogListResponse'] = ResolversParentTypes['IoRestorecommerceAuthenticationLogAuthenticationLogListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAuthenticationLogAuthenticationLogResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
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
  details?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  identity?: Resolver<ResolversTypes['IdentityMutation'], ParentType, ContextType>;
}>;

export type IdentityMutationResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityMutation'] = ResolversParentTypes['IdentityMutation']> = ResolversObject<{
  user?: Resolver<ResolversTypes['IdentityUserMutation'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['IdentityRoleMutation'], ParentType, ContextType>;
  authentication_log?: Resolver<ResolversTypes['IdentityAuthenticationLogMutation'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['IdentityTokenMutation'], ParentType, ContextType>;
  o_auth?: Resolver<ResolversTypes['IdentityOAuthMutation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityUserMutationResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityUserMutation'] = ResolversParentTypes['IdentityUserMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserListResponse']>, ParentType, ContextType, RequireFields<IdentityUserMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<IdentityUserMutationDeleteArgs, 'input'>>;
  Register?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserResponse']>, ParentType, ContextType, RequireFields<IdentityUserMutationRegisterArgs, 'input'>>;
  Activate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusOperationStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationActivateArgs, 'input'>>;
  ChangePassword?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusOperationStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationChangePasswordArgs, 'input'>>;
  RequestPasswordChange?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusOperationStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationRequestPasswordChangeArgs, 'input'>>;
  RequestEmailChange?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusOperationStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationRequestEmailChangeArgs, 'input'>>;
  ConfirmPasswordChange?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusOperationStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationConfirmPasswordChangeArgs, 'input'>>;
  ConfirmEmailChange?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusOperationStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationConfirmEmailChangeArgs, 'input'>>;
  Unregister?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusOperationStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationUnregisterArgs, 'input'>>;
  Login?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserUserResponse']>, ParentType, ContextType, RequireFields<IdentityUserMutationLoginArgs, 'input'>>;
  DeleteUsersByOrg?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceUserDeleteUsersByOrgResponse']>, ParentType, ContextType, RequireFields<IdentityUserMutationDeleteUsersByOrgArgs, 'input'>>;
  ConfirmUserInvitation?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusOperationStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationConfirmUserInvitationArgs, 'input'>>;
  SendInvitationEmail?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusOperationStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationSendInvitationEmailArgs, 'input'>>;
  SendActivationEmail?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusOperationStatusObj']>, ParentType, ContextType, RequireFields<IdentityUserMutationSendActivationEmailArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  status?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceStatusStatus']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceStatusOperationStatusObjResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceStatusOperationStatusObj'] = ResolversParentTypes['ProtoIoRestorecommerceStatusOperationStatusObj']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatusObj']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusOperationStatusObjResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusOperationStatusObj'] = ResolversParentTypes['IoRestorecommerceStatusOperationStatusObj']> = ResolversObject<{
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceUserDeleteUsersByOrgResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceUserDeleteUsersByOrgResponse'] = ResolversParentTypes['ProtoIoRestorecommerceUserDeleteUsersByOrgResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserDeleteUsersByOrgResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserDeleteUsersByOrgResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceUserDeleteUsersByOrgResponse'] = ResolversParentTypes['IoRestorecommerceUserDeleteUsersByOrgResponse']> = ResolversObject<{
  userIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityRoleMutationResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityRoleMutation'] = ResolversParentTypes['IdentityRoleMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceRoleRoleListResponse']>, ParentType, ContextType, RequireFields<IdentityRoleMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<IdentityRoleMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityAuthenticationLogMutationResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityAuthenticationLogMutation'] = ResolversParentTypes['IdentityAuthenticationLogMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse']>, ParentType, ContextType, RequireFields<IdentityAuthenticationLogMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<IdentityAuthenticationLogMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityTokenMutationResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityTokenMutation'] = ResolversParentTypes['IdentityTokenMutation']> = ResolversObject<{
  upsert?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufAny']>, ParentType, ContextType, RequireFields<IdentityTokenMutationUpsertArgs, 'input'>>;
  destroy?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufAny']>, ParentType, ContextType, RequireFields<IdentityTokenMutationDestroyArgs, 'input'>>;
  revokeByGrantId?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufAny']>, ParentType, ContextType, RequireFields<IdentityTokenMutationRevokeByGrantIdArgs, 'input'>>;
  consume?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufAny']>, ParentType, ContextType, RequireFields<IdentityTokenMutationConsumeArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdentityOAuthMutationResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IdentityOAuthMutation'] = ResolversParentTypes['IdentityOAuthMutation']> = ResolversObject<{
  AvailableServices?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOauthServicesResponse']>, ParentType, ContextType>;
  GenerateLinks?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOauthGenerateLinksResponse']>, ParentType, ContextType>;
  ExchangeCode?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOauthExchangeCodeResponse']>, ParentType, ContextType, RequireFields<IdentityOAuthMutationExchangeCodeArgs, 'input'>>;
  GetToken?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOauthGetTokenResponse']>, ParentType, ContextType, RequireFields<IdentityOAuthMutationGetTokenArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceOauthServicesResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOauthServicesResponse'] = ResolversParentTypes['ProtoIoRestorecommerceOauthServicesResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOauthServicesResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOauthServicesResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceOauthServicesResponse'] = ResolversParentTypes['IoRestorecommerceOauthServicesResponse']> = ResolversObject<{
  services?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceOauthGenerateLinksResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOauthGenerateLinksResponse'] = ResolversParentTypes['ProtoIoRestorecommerceOauthGenerateLinksResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOauthGenerateLinksResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOauthGenerateLinksResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceOauthGenerateLinksResponse'] = ResolversParentTypes['IoRestorecommerceOauthGenerateLinksResponse']> = ResolversObject<{
  links?: Resolver<Maybe<ResolversTypes['MapScalar']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface MapScalarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['MapScalar'], any> {
  name: 'MapScalar';
}

export type ProtoIoRestorecommerceOauthExchangeCodeResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOauthExchangeCodeResponse'] = ResolversParentTypes['ProtoIoRestorecommerceOauthExchangeCodeResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOauthExchangeCodeResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOauthExchangeCodeResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceOauthExchangeCodeResponse'] = ResolversParentTypes['IoRestorecommerceOauthExchangeCodeResponse']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUserResponse']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAuthTokens']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceOauthGetTokenResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOauthGetTokenResponse'] = ResolversParentTypes['ProtoIoRestorecommerceOauthGetTokenResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOauthGetTokenResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOauthGetTokenResponseResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['IoRestorecommerceOauthGetTokenResponse'] = ResolversParentTypes['IoRestorecommerceOauthGetTokenResponse']> = ResolversObject<{
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  orderingOrders?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "orderingOrders", ParentType, ContextType, Partial<SubscriptionOrderingOrdersArgs>>;
  catalogProducts?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "catalogProducts", ParentType, ContextType, Partial<SubscriptionCatalogProductsArgs>>;
  fulfillmentFulfillments?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "fulfillmentFulfillments", ParentType, ContextType, Partial<SubscriptionFulfillmentFulfillmentsArgs>>;
  fulfillmentFulfillmentCouriers?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "fulfillmentFulfillmentCouriers", ParentType, ContextType, Partial<SubscriptionFulfillmentFulfillmentCouriersArgs>>;
  fulfillmentFulfillment_products?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "fulfillmentFulfillment_products", ParentType, ContextType, Partial<SubscriptionFulfillmentFulfillment_ProductsArgs>>;
  identityUsers?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "identityUsers", ParentType, ContextType, Partial<SubscriptionIdentityUsersArgs>>;
}>;

export type SubscriptionOutputResolvers<ContextType = IdentityContext, ParentType extends ResolversParentTypes['SubscriptionOutput'] = ResolversParentTypes['SubscriptionOutput']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = IdentityContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  IdentityQuery?: IdentityQueryResolvers<ContextType>;
  IdentityUserQuery?: IdentityUserQueryResolvers<ContextType>;
  ProtoIoRestorecommerceUserUserListWithRoleResponse?: ProtoIoRestorecommerceUserUserListWithRoleResponseResolvers<ContextType>;
  IoRestorecommerceUserUserListWithRoleResponse?: IoRestorecommerceUserUserListWithRoleResponseResolvers<ContextType>;
  IoRestorecommerceUserUserRoleResponse?: IoRestorecommerceUserUserRoleResponseResolvers<ContextType>;
  IoRestorecommerceUserUserRole?: IoRestorecommerceUserUserRoleResolvers<ContextType>;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
  IoRestorecommerceAttributeAttributeObj?: IoRestorecommerceAttributeAttributeObjResolvers<ContextType>;
  IoRestorecommerceAuthRoleAssociation?: IoRestorecommerceAuthRoleAssociationResolvers<ContextType>;
  IoRestorecommerceTimezoneTimezone?: IoRestorecommerceTimezoneTimezoneResolvers<ContextType>;
  IoRestorecommerceLocaleLocale?: IoRestorecommerceLocaleLocaleResolvers<ContextType>;
  IoRestorecommerceImageImage?: IoRestorecommerceImageImageResolvers<ContextType>;
  IoRestorecommerceUserUserType?: IoRestorecommerceUserUserTypeResolvers;
  IoRestorecommerceAuthTokens?: IoRestorecommerceAuthTokensResolvers<ContextType>;
  GoogleProtobufAny?: GoogleProtobufAnyResolvers<ContextType>;
  GoogleProtobufAnyValue?: GraphQLScalarType;
  IoRestorecommerceRoleRole?: IoRestorecommerceRoleRoleResolvers<ContextType>;
  IoRestorecommerceStatusStatus?: IoRestorecommerceStatusStatusResolvers<ContextType>;
  IoRestorecommerceStatusOperationStatus?: IoRestorecommerceStatusOperationStatusResolvers<ContextType>;
  IoRestorecommerceResourcebaseSortSortOrder?: IoRestorecommerceResourcebaseSortSortOrderResolvers;
  IoRestorecommerceResourcebaseFilterOperation?: IoRestorecommerceResourcebaseFilterOperationResolvers;
  IoRestorecommerceResourcebaseFilterValueType?: IoRestorecommerceResourcebaseFilterValueTypeResolvers;
  IoRestorecommerceFilterFilterOperation?: IoRestorecommerceFilterFilterOperationResolvers;
  IoRestorecommerceFilterFilterValueType?: IoRestorecommerceFilterFilterValueTypeResolvers;
  IoRestorecommerceFilterFilterOpOperator?: IoRestorecommerceFilterFilterOpOperatorResolvers;
  IoRestorecommerceResourcebaseFilterOpOperator?: IoRestorecommerceResourcebaseFilterOpOperatorResolvers;
  ProtoIoRestorecommerceUserUserListResponse?: ProtoIoRestorecommerceUserUserListResponseResolvers<ContextType>;
  IoRestorecommerceUserUserListResponse?: IoRestorecommerceUserUserListResponseResolvers<ContextType>;
  IoRestorecommerceUserUserResponse?: IoRestorecommerceUserUserResponseResolvers<ContextType>;
  IoRestorecommerceUserUser?: IoRestorecommerceUserUserResolvers<ContextType>;
  ProtoIoRestorecommerceUserUserResponse?: ProtoIoRestorecommerceUserUserResponseResolvers<ContextType>;
  IdentityRoleQuery?: IdentityRoleQueryResolvers<ContextType>;
  ProtoIoRestorecommerceRoleRoleListResponse?: ProtoIoRestorecommerceRoleRoleListResponseResolvers<ContextType>;
  IoRestorecommerceRoleRoleListResponse?: IoRestorecommerceRoleRoleListResponseResolvers<ContextType>;
  IoRestorecommerceRoleRoleResponse?: IoRestorecommerceRoleRoleResponseResolvers<ContextType>;
  IdentityAuthenticationLogQuery?: IdentityAuthenticationLogQueryResolvers<ContextType>;
  ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse?: ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponseResolvers<ContextType>;
  IoRestorecommerceAuthenticationLogAuthenticationLogListResponse?: IoRestorecommerceAuthenticationLogAuthenticationLogListResponseResolvers<ContextType>;
  IoRestorecommerceAuthenticationLogAuthenticationLogResponse?: IoRestorecommerceAuthenticationLogAuthenticationLogResponseResolvers<ContextType>;
  IoRestorecommerceAuthenticationLogAuthenticationLog?: IoRestorecommerceAuthenticationLogAuthenticationLogResolvers<ContextType>;
  IdentityTokenQuery?: IdentityTokenQueryResolvers<ContextType>;
  ProtoGoogleProtobufAny?: ProtoGoogleProtobufAnyResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  IdentityMutation?: IdentityMutationResolvers<ContextType>;
  IdentityUserMutation?: IdentityUserMutationResolvers<ContextType>;
  ProtoIoRestorecommerceResourcebaseDeleteResponse?: ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  IoRestorecommerceResourcebaseDeleteResponse?: IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  ProtoIoRestorecommerceStatusOperationStatusObj?: ProtoIoRestorecommerceStatusOperationStatusObjResolvers<ContextType>;
  IoRestorecommerceStatusOperationStatusObj?: IoRestorecommerceStatusOperationStatusObjResolvers<ContextType>;
  ProtoIoRestorecommerceUserDeleteUsersByOrgResponse?: ProtoIoRestorecommerceUserDeleteUsersByOrgResponseResolvers<ContextType>;
  IoRestorecommerceUserDeleteUsersByOrgResponse?: IoRestorecommerceUserDeleteUsersByOrgResponseResolvers<ContextType>;
  IdentityRoleMutation?: IdentityRoleMutationResolvers<ContextType>;
  IdentityAuthenticationLogMutation?: IdentityAuthenticationLogMutationResolvers<ContextType>;
  IdentityTokenMutation?: IdentityTokenMutationResolvers<ContextType>;
  IdentityOAuthMutation?: IdentityOAuthMutationResolvers<ContextType>;
  ProtoIoRestorecommerceOauthServicesResponse?: ProtoIoRestorecommerceOauthServicesResponseResolvers<ContextType>;
  IoRestorecommerceOauthServicesResponse?: IoRestorecommerceOauthServicesResponseResolvers<ContextType>;
  ProtoIoRestorecommerceOauthGenerateLinksResponse?: ProtoIoRestorecommerceOauthGenerateLinksResponseResolvers<ContextType>;
  IoRestorecommerceOauthGenerateLinksResponse?: IoRestorecommerceOauthGenerateLinksResponseResolvers<ContextType>;
  MapScalar?: GraphQLScalarType;
  ProtoIoRestorecommerceOauthExchangeCodeResponse?: ProtoIoRestorecommerceOauthExchangeCodeResponseResolvers<ContextType>;
  IoRestorecommerceOauthExchangeCodeResponse?: IoRestorecommerceOauthExchangeCodeResponseResolvers<ContextType>;
  ProtoIoRestorecommerceOauthGetTokenResponse?: ProtoIoRestorecommerceOauthGetTokenResponseResolvers<ContextType>;
  IoRestorecommerceOauthGetTokenResponse?: IoRestorecommerceOauthGetTokenResponseResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  SubscriptionOutput?: SubscriptionOutputResolvers<ContextType>;
}>;

