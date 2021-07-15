import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { OstorageContext } from '../interfaces';
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
  ostorage: OstorageQuery;
};

export type OstorageQuery = {
  __typename?: 'OstorageQuery';
  object: OstorageObjectQuery;
};

export type OstorageObjectQuery = {
  __typename?: 'OstorageObjectQuery';
  Get?: Maybe<ProtoIoRestorecommerceOstorageObjectResponse>;
  List?: Maybe<ProtoIoRestorecommerceOstorageListResponse>;
};


export type OstorageObjectQueryGetArgs = {
  input: IIoRestorecommerceOstorageGetRequest;
};


export type OstorageObjectQueryListArgs = {
  input: IIoRestorecommerceOstorageListRequest;
};

export type ProtoIoRestorecommerceOstorageObjectResponse = {
  __typename?: 'ProtoIoRestorecommerceOstorageObjectResponse';
  details?: Maybe<IoRestorecommerceOstorageObjectResponse>;
};

export type IoRestorecommerceOstorageObjectResponse = {
  __typename?: 'IoRestorecommerceOstorageObjectResponse';
  payload?: Maybe<IoRestorecommerceOstorageObjectResponsePayload>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceOstorageObjectResponsePayload = {
  __typename?: 'IoRestorecommerceOstorageObjectResponsePayload';
  key?: Maybe<Scalars['String']>;
  bucket?: Maybe<Scalars['String']>;
  object?: Maybe<Scalars['TodoScalar']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  url?: Maybe<Scalars['String']>;
  options?: Maybe<IoRestorecommerceOstorageOptions>;
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

export type IoRestorecommerceOstorageOptions = {
  __typename?: 'IoRestorecommerceOstorageOptions';
  encoding?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  contentLanguage?: Maybe<Scalars['String']>;
  contentDisposition?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['String']>;
  md5?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  data?: Maybe<GoogleProtobufAny>;
};

export type GoogleProtobufAny = {
  __typename?: 'GoogleProtobufAny';
  typeUrl?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['TodoScalar']>;
};

export type IoRestorecommerceStatusOperationStatus = {
  __typename?: 'IoRestorecommerceStatusOperationStatus';
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceOstorageGetRequest = {
  key?: Maybe<Scalars['String']>;
  bucket?: Maybe<Scalars['String']>;
  download?: Maybe<Scalars['Boolean']>;
};

export type ProtoIoRestorecommerceOstorageListResponse = {
  __typename?: 'ProtoIoRestorecommerceOstorageListResponse';
  details?: Maybe<IoRestorecommerceOstorageListResponse>;
};

export type IoRestorecommerceOstorageListResponse = {
  __typename?: 'IoRestorecommerceOstorageListResponse';
  payload?: Maybe<IoRestorecommerceOstorageObjectsData>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceOstorageObjectsData = {
  __typename?: 'IoRestorecommerceOstorageObjectsData';
  objectData?: Maybe<Array<IoRestorecommerceOstorageObjectData>>;
};

export type IoRestorecommerceOstorageObjectData = {
  __typename?: 'IoRestorecommerceOstorageObjectData';
  objectName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
};

export type IIoRestorecommerceOstorageListRequest = {
  bucket?: Maybe<Scalars['String']>;
  filter?: Maybe<IGoogleProtobufStruct>;
};

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

export type Mutation = {
  __typename?: 'Mutation';
  ostorage: OstorageMutation;
};

export type OstorageMutation = {
  __typename?: 'OstorageMutation';
  object: OstorageObjectMutation;
};

export type OstorageObjectMutation = {
  __typename?: 'OstorageObjectMutation';
  Put?: Maybe<ProtoIoRestorecommerceOstoragePutResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Copy?: Maybe<ProtoIoRestorecommerceOstorageCopyResponse>;
};


export type OstorageObjectMutationPutArgs = {
  input: IIoRestorecommerceOstorageObject;
};


export type OstorageObjectMutationDeleteArgs = {
  input: IIoRestorecommerceOstorageDeleteRequest;
};


export type OstorageObjectMutationCopyArgs = {
  input: IIoRestorecommerceOstorageCopyRequest;
};

export type ProtoIoRestorecommerceOstoragePutResponse = {
  __typename?: 'ProtoIoRestorecommerceOstoragePutResponse';
  details?: Maybe<IoRestorecommerceOstoragePutResponse>;
};

export type IoRestorecommerceOstoragePutResponse = {
  __typename?: 'IoRestorecommerceOstoragePutResponse';
  payload?: Maybe<IoRestorecommerceOstorageResponse>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceOstorageResponse = {
  __typename?: 'IoRestorecommerceOstorageResponse';
  url?: Maybe<Scalars['String']>;
  bucket?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  tags?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  length?: Maybe<Scalars['Int']>;
};

export type IIoRestorecommerceOstorageObject = {
  key?: Maybe<Scalars['String']>;
  bucket?: Maybe<Scalars['String']>;
  object?: Maybe<Scalars['Upload']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  url?: Maybe<Scalars['String']>;
  options?: Maybe<IIoRestorecommerceOstorageOptions>;
};


export type IIoRestorecommerceMetaMeta = {
  created?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['Float']>;
  modifiedBy?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type IIoRestorecommerceAttributeAttribute = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceOstorageOptions = {
  encoding?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  contentLanguage?: Maybe<Scalars['String']>;
  contentDisposition?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['String']>;
  md5?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<IIoRestorecommerceAttributeAttribute>>;
  data?: Maybe<IGoogleProtobufAny>;
};

export type IGoogleProtobufAny = {
  typeUrl?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Upload']>;
};

export type ProtoIoRestorecommerceResourcebaseDeleteResponse = {
  __typename?: 'ProtoIoRestorecommerceResourcebaseDeleteResponse';
  details?: Maybe<IoRestorecommerceResourcebaseDeleteResponse>;
};

export type IoRestorecommerceResourcebaseDeleteResponse = {
  __typename?: 'IoRestorecommerceResourcebaseDeleteResponse';
  status?: Maybe<Array<IoRestorecommerceStatusStatus>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceStatusStatus = {
  __typename?: 'IoRestorecommerceStatusStatus';
  id?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceOstorageDeleteRequest = {
  key?: Maybe<Scalars['String']>;
  bucket?: Maybe<Scalars['String']>;
};

export type ProtoIoRestorecommerceOstorageCopyResponse = {
  __typename?: 'ProtoIoRestorecommerceOstorageCopyResponse';
  details?: Maybe<IoRestorecommerceOstorageCopyResponse>;
};

export type IoRestorecommerceOstorageCopyResponse = {
  __typename?: 'IoRestorecommerceOstorageCopyResponse';
  response?: Maybe<Array<IoRestorecommerceOstorageCopyResponsePayloadWithStatus>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceOstorageCopyResponsePayloadWithStatus = {
  __typename?: 'IoRestorecommerceOstorageCopyResponsePayloadWithStatus';
  payload?: Maybe<IoRestorecommerceOstorageCopyResponseItem>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceOstorageCopyResponseItem = {
  __typename?: 'IoRestorecommerceOstorageCopyResponseItem';
  bucket?: Maybe<Scalars['String']>;
  copySource?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  options?: Maybe<IoRestorecommerceOstorageOptions>;
};

export type IIoRestorecommerceOstorageCopyRequest = {
  items?: Maybe<Array<IIoRestorecommerceOstorageCopyRequestItem>>;
};

export type IIoRestorecommerceOstorageCopyRequestItem = {
  bucket?: Maybe<Scalars['String']>;
  copySource?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  options?: Maybe<IIoRestorecommerceOstorageOptions>;
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
  OstorageQuery: ResolverTypeWrapper<OstorageQuery>;
  OstorageObjectQuery: ResolverTypeWrapper<OstorageObjectQuery>;
  ProtoIoRestorecommerceOstorageObjectResponse: ResolverTypeWrapper<ProtoIoRestorecommerceOstorageObjectResponse>;
  IoRestorecommerceOstorageObjectResponse: ResolverTypeWrapper<IoRestorecommerceOstorageObjectResponse>;
  IoRestorecommerceOstorageObjectResponsePayload: ResolverTypeWrapper<IoRestorecommerceOstorageObjectResponsePayload>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TodoScalar: ResolverTypeWrapper<Scalars['TodoScalar']>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  IoRestorecommerceOstorageOptions: ResolverTypeWrapper<IoRestorecommerceOstorageOptions>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  GoogleProtobufAny: ResolverTypeWrapper<GoogleProtobufAny>;
  IoRestorecommerceStatusOperationStatus: ResolverTypeWrapper<IoRestorecommerceStatusOperationStatus>;
  IIoRestorecommerceOstorageGetRequest: IIoRestorecommerceOstorageGetRequest;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ProtoIoRestorecommerceOstorageListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceOstorageListResponse>;
  IoRestorecommerceOstorageListResponse: ResolverTypeWrapper<IoRestorecommerceOstorageListResponse>;
  IoRestorecommerceOstorageObjectsData: ResolverTypeWrapper<IoRestorecommerceOstorageObjectsData>;
  IoRestorecommerceOstorageObjectData: ResolverTypeWrapper<IoRestorecommerceOstorageObjectData>;
  IIoRestorecommerceOstorageListRequest: IIoRestorecommerceOstorageListRequest;
  IGoogleProtobufStruct: IGoogleProtobufStruct;
  IGoogleProtobufStructFieldsEntry: IGoogleProtobufStructFieldsEntry;
  IGoogleProtobufValue: IGoogleProtobufValue;
  GoogleProtobufNullValue: GoogleProtobufNullValue;
  IGoogleProtobufListValue: IGoogleProtobufListValue;
  Mutation: ResolverTypeWrapper<{}>;
  OstorageMutation: ResolverTypeWrapper<OstorageMutation>;
  OstorageObjectMutation: ResolverTypeWrapper<OstorageObjectMutation>;
  ProtoIoRestorecommerceOstoragePutResponse: ResolverTypeWrapper<ProtoIoRestorecommerceOstoragePutResponse>;
  IoRestorecommerceOstoragePutResponse: ResolverTypeWrapper<IoRestorecommerceOstoragePutResponse>;
  IoRestorecommerceOstorageResponse: ResolverTypeWrapper<IoRestorecommerceOstorageResponse>;
  IIoRestorecommerceOstorageObject: IIoRestorecommerceOstorageObject;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceOstorageOptions: IIoRestorecommerceOstorageOptions;
  IGoogleProtobufAny: IGoogleProtobufAny;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  IoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<IoRestorecommerceResourcebaseDeleteResponse>;
  IoRestorecommerceStatusStatus: ResolverTypeWrapper<IoRestorecommerceStatusStatus>;
  IIoRestorecommerceOstorageDeleteRequest: IIoRestorecommerceOstorageDeleteRequest;
  ProtoIoRestorecommerceOstorageCopyResponse: ResolverTypeWrapper<ProtoIoRestorecommerceOstorageCopyResponse>;
  IoRestorecommerceOstorageCopyResponse: ResolverTypeWrapper<IoRestorecommerceOstorageCopyResponse>;
  IoRestorecommerceOstorageCopyResponsePayloadWithStatus: ResolverTypeWrapper<IoRestorecommerceOstorageCopyResponsePayloadWithStatus>;
  IoRestorecommerceOstorageCopyResponseItem: ResolverTypeWrapper<IoRestorecommerceOstorageCopyResponseItem>;
  IIoRestorecommerceOstorageCopyRequest: IIoRestorecommerceOstorageCopyRequest;
  IIoRestorecommerceOstorageCopyRequestItem: IIoRestorecommerceOstorageCopyRequestItem;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  OstorageQuery: OstorageQuery;
  OstorageObjectQuery: OstorageObjectQuery;
  ProtoIoRestorecommerceOstorageObjectResponse: ProtoIoRestorecommerceOstorageObjectResponse;
  IoRestorecommerceOstorageObjectResponse: IoRestorecommerceOstorageObjectResponse;
  IoRestorecommerceOstorageObjectResponsePayload: IoRestorecommerceOstorageObjectResponsePayload;
  String: Scalars['String'];
  TodoScalar: Scalars['TodoScalar'];
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  Float: Scalars['Float'];
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  IoRestorecommerceOstorageOptions: IoRestorecommerceOstorageOptions;
  Int: Scalars['Int'];
  GoogleProtobufAny: GoogleProtobufAny;
  IoRestorecommerceStatusOperationStatus: IoRestorecommerceStatusOperationStatus;
  IIoRestorecommerceOstorageGetRequest: IIoRestorecommerceOstorageGetRequest;
  Boolean: Scalars['Boolean'];
  ProtoIoRestorecommerceOstorageListResponse: ProtoIoRestorecommerceOstorageListResponse;
  IoRestorecommerceOstorageListResponse: IoRestorecommerceOstorageListResponse;
  IoRestorecommerceOstorageObjectsData: IoRestorecommerceOstorageObjectsData;
  IoRestorecommerceOstorageObjectData: IoRestorecommerceOstorageObjectData;
  IIoRestorecommerceOstorageListRequest: IIoRestorecommerceOstorageListRequest;
  IGoogleProtobufStruct: IGoogleProtobufStruct;
  IGoogleProtobufStructFieldsEntry: IGoogleProtobufStructFieldsEntry;
  IGoogleProtobufValue: IGoogleProtobufValue;
  IGoogleProtobufListValue: IGoogleProtobufListValue;
  Mutation: {};
  OstorageMutation: OstorageMutation;
  OstorageObjectMutation: OstorageObjectMutation;
  ProtoIoRestorecommerceOstoragePutResponse: ProtoIoRestorecommerceOstoragePutResponse;
  IoRestorecommerceOstoragePutResponse: IoRestorecommerceOstoragePutResponse;
  IoRestorecommerceOstorageResponse: IoRestorecommerceOstorageResponse;
  IIoRestorecommerceOstorageObject: IIoRestorecommerceOstorageObject;
  Upload: Scalars['Upload'];
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceOstorageOptions: IIoRestorecommerceOstorageOptions;
  IGoogleProtobufAny: IGoogleProtobufAny;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ProtoIoRestorecommerceResourcebaseDeleteResponse;
  IoRestorecommerceResourcebaseDeleteResponse: IoRestorecommerceResourcebaseDeleteResponse;
  IoRestorecommerceStatusStatus: IoRestorecommerceStatusStatus;
  IIoRestorecommerceOstorageDeleteRequest: IIoRestorecommerceOstorageDeleteRequest;
  ProtoIoRestorecommerceOstorageCopyResponse: ProtoIoRestorecommerceOstorageCopyResponse;
  IoRestorecommerceOstorageCopyResponse: IoRestorecommerceOstorageCopyResponse;
  IoRestorecommerceOstorageCopyResponsePayloadWithStatus: IoRestorecommerceOstorageCopyResponsePayloadWithStatus;
  IoRestorecommerceOstorageCopyResponseItem: IoRestorecommerceOstorageCopyResponseItem;
  IIoRestorecommerceOstorageCopyRequest: IIoRestorecommerceOstorageCopyRequest;
  IIoRestorecommerceOstorageCopyRequestItem: IIoRestorecommerceOstorageCopyRequestItem;
}>;

export type QueryResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  ostorage?: Resolver<ResolversTypes['OstorageQuery'], ParentType, ContextType>;
}>;

export type OstorageQueryResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['OstorageQuery'] = ResolversParentTypes['OstorageQuery']> = ResolversObject<{
  object?: Resolver<ResolversTypes['OstorageObjectQuery'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OstorageObjectQueryResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['OstorageObjectQuery'] = ResolversParentTypes['OstorageObjectQuery']> = ResolversObject<{
  Get?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOstorageObjectResponse']>, ParentType, ContextType, RequireFields<OstorageObjectQueryGetArgs, 'input'>>;
  List?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOstorageListResponse']>, ParentType, ContextType, RequireFields<OstorageObjectQueryListArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceOstorageObjectResponseResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOstorageObjectResponse'] = ResolversParentTypes['ProtoIoRestorecommerceOstorageObjectResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstorageObjectResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageObjectResponseResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageObjectResponse'] = ResolversParentTypes['IoRestorecommerceOstorageObjectResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstorageObjectResponsePayload']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageObjectResponsePayloadResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageObjectResponsePayload'] = ResolversParentTypes['IoRestorecommerceOstorageObjectResponsePayload']> = ResolversObject<{
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bucket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  object?: Resolver<Maybe<ResolversTypes['TodoScalar']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  options?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstorageOptions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface TodoScalarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TodoScalar'], any> {
  name: 'TodoScalar';
}

export type IoRestorecommerceMetaMetaResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceMetaMeta'] = ResolversParentTypes['IoRestorecommerceMetaMeta']> = ResolversObject<{
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modified?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modifiedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageOptionsResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageOptions'] = ResolversParentTypes['IoRestorecommerceOstorageOptions']> = ResolversObject<{
  encoding?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentLanguage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentDisposition?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  md5?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GoogleProtobufAnyResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['GoogleProtobufAny'] = ResolversParentTypes['GoogleProtobufAny']> = ResolversObject<{
  typeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['TodoScalar']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusOperationStatusResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusOperationStatus'] = ResolversParentTypes['IoRestorecommerceStatusOperationStatus']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceOstorageListResponseResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOstorageListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceOstorageListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstorageListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageListResponseResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageListResponse'] = ResolversParentTypes['IoRestorecommerceOstorageListResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstorageObjectsData']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageObjectsDataResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageObjectsData'] = ResolversParentTypes['IoRestorecommerceOstorageObjectsData']> = ResolversObject<{
  objectData?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceOstorageObjectData']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageObjectDataResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageObjectData'] = ResolversParentTypes['IoRestorecommerceOstorageObjectData']> = ResolversObject<{
  objectName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  ostorage?: Resolver<ResolversTypes['OstorageMutation'], ParentType, ContextType>;
}>;

export type OstorageMutationResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['OstorageMutation'] = ResolversParentTypes['OstorageMutation']> = ResolversObject<{
  object?: Resolver<ResolversTypes['OstorageObjectMutation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OstorageObjectMutationResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['OstorageObjectMutation'] = ResolversParentTypes['OstorageObjectMutation']> = ResolversObject<{
  Put?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOstoragePutResponse']>, ParentType, ContextType, RequireFields<OstorageObjectMutationPutArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<OstorageObjectMutationDeleteArgs, 'input'>>;
  Copy?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOstorageCopyResponse']>, ParentType, ContextType, RequireFields<OstorageObjectMutationCopyArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceOstoragePutResponseResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOstoragePutResponse'] = ResolversParentTypes['ProtoIoRestorecommerceOstoragePutResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstoragePutResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstoragePutResponseResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstoragePutResponse'] = ResolversParentTypes['IoRestorecommerceOstoragePutResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstorageResponse']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageResponseResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageResponse'] = ResolversParentTypes['IoRestorecommerceOstorageResponse']> = ResolversObject<{
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bucket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  status?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceStatusStatus']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusStatusResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusStatus'] = ResolversParentTypes['IoRestorecommerceStatusStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceOstorageCopyResponseResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOstorageCopyResponse'] = ResolversParentTypes['ProtoIoRestorecommerceOstorageCopyResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstorageCopyResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageCopyResponseResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageCopyResponse'] = ResolversParentTypes['IoRestorecommerceOstorageCopyResponse']> = ResolversObject<{
  response?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceOstorageCopyResponsePayloadWithStatus']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageCopyResponsePayloadWithStatusResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageCopyResponsePayloadWithStatus'] = ResolversParentTypes['IoRestorecommerceOstorageCopyResponsePayloadWithStatus']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstorageCopyResponseItem']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOstorageCopyResponseItemResolvers<ContextType = OstorageContext, ParentType extends ResolversParentTypes['IoRestorecommerceOstorageCopyResponseItem'] = ResolversParentTypes['IoRestorecommerceOstorageCopyResponseItem']> = ResolversObject<{
  bucket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  copySource?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  options?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOstorageOptions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = OstorageContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  OstorageQuery?: OstorageQueryResolvers<ContextType>;
  OstorageObjectQuery?: OstorageObjectQueryResolvers<ContextType>;
  ProtoIoRestorecommerceOstorageObjectResponse?: ProtoIoRestorecommerceOstorageObjectResponseResolvers<ContextType>;
  IoRestorecommerceOstorageObjectResponse?: IoRestorecommerceOstorageObjectResponseResolvers<ContextType>;
  IoRestorecommerceOstorageObjectResponsePayload?: IoRestorecommerceOstorageObjectResponsePayloadResolvers<ContextType>;
  TodoScalar?: GraphQLScalarType;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
  IoRestorecommerceOstorageOptions?: IoRestorecommerceOstorageOptionsResolvers<ContextType>;
  GoogleProtobufAny?: GoogleProtobufAnyResolvers<ContextType>;
  IoRestorecommerceStatusOperationStatus?: IoRestorecommerceStatusOperationStatusResolvers<ContextType>;
  ProtoIoRestorecommerceOstorageListResponse?: ProtoIoRestorecommerceOstorageListResponseResolvers<ContextType>;
  IoRestorecommerceOstorageListResponse?: IoRestorecommerceOstorageListResponseResolvers<ContextType>;
  IoRestorecommerceOstorageObjectsData?: IoRestorecommerceOstorageObjectsDataResolvers<ContextType>;
  IoRestorecommerceOstorageObjectData?: IoRestorecommerceOstorageObjectDataResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  OstorageMutation?: OstorageMutationResolvers<ContextType>;
  OstorageObjectMutation?: OstorageObjectMutationResolvers<ContextType>;
  ProtoIoRestorecommerceOstoragePutResponse?: ProtoIoRestorecommerceOstoragePutResponseResolvers<ContextType>;
  IoRestorecommerceOstoragePutResponse?: IoRestorecommerceOstoragePutResponseResolvers<ContextType>;
  IoRestorecommerceOstorageResponse?: IoRestorecommerceOstorageResponseResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  ProtoIoRestorecommerceResourcebaseDeleteResponse?: ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  IoRestorecommerceResourcebaseDeleteResponse?: IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  IoRestorecommerceStatusStatus?: IoRestorecommerceStatusStatusResolvers<ContextType>;
  ProtoIoRestorecommerceOstorageCopyResponse?: ProtoIoRestorecommerceOstorageCopyResponseResolvers<ContextType>;
  IoRestorecommerceOstorageCopyResponse?: IoRestorecommerceOstorageCopyResponseResolvers<ContextType>;
  IoRestorecommerceOstorageCopyResponsePayloadWithStatus?: IoRestorecommerceOstorageCopyResponsePayloadWithStatusResolvers<ContextType>;
  IoRestorecommerceOstorageCopyResponseItem?: IoRestorecommerceOstorageCopyResponseItemResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = OstorageContext> = Resolvers<ContextType>;
