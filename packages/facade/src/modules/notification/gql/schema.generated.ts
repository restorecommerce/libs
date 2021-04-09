import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { NotificationContext } from '../interfaces';
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

export type Mutation = {
  __typename?: 'Mutation';
  notification: NotificationMutation;
};

export type NotificationMutation = {
  __typename?: 'NotificationMutation';
  service: NotificationServiceMutation;
};

export type NotificationServiceMutation = {
  __typename?: 'NotificationServiceMutation';
  Send?: Maybe<ProtoGoogleProtobufEmpty>;
};


export type NotificationServiceMutationSendArgs = {
  input: IIoRestorecommerceNotificationNotification;
};

export type ProtoGoogleProtobufEmpty = {
  __typename?: 'ProtoGoogleProtobufEmpty';
  status: StatusType;
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

export type IIoRestorecommerceNotificationNotification = {
  email?: Maybe<IIoRestorecommerceNotificationEmail>;
  log?: Maybe<IIoRestorecommerceNotificationLog>;
  subject?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  transport?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  attachments?: Maybe<Array<IIoRestorecommerceNotificationAttachment>>;
};

export type IIoRestorecommerceNotificationEmail = {
  to?: Maybe<Array<Scalars['String']>>;
  cc?: Maybe<Array<Scalars['String']>>;
  bcc?: Maybe<Array<Scalars['String']>>;
  replyto?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceNotificationLog = {
  level?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceNotificationAttachment = {
  filename?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  buffer?: Maybe<Scalars['Upload']>;
  path?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  contentDisposition?: Maybe<Scalars['String']>;
  cid?: Maybe<Scalars['String']>;
  encoding?: Maybe<Scalars['String']>;
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
  Mutation: ResolverTypeWrapper<{}>;
  NotificationMutation: ResolverTypeWrapper<NotificationMutation>;
  NotificationServiceMutation: ResolverTypeWrapper<NotificationServiceMutation>;
  ProtoGoogleProtobufEmpty: ResolverTypeWrapper<ProtoGoogleProtobufEmpty>;
  StatusType: ResolverTypeWrapper<StatusType>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IIoRestorecommerceNotificationNotification: IIoRestorecommerceNotificationNotification;
  IIoRestorecommerceNotificationEmail: IIoRestorecommerceNotificationEmail;
  IIoRestorecommerceNotificationLog: IIoRestorecommerceNotificationLog;
  IIoRestorecommerceNotificationAttachment: IIoRestorecommerceNotificationAttachment;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Mutation: {};
  NotificationMutation: NotificationMutation;
  NotificationServiceMutation: NotificationServiceMutation;
  ProtoGoogleProtobufEmpty: ProtoGoogleProtobufEmpty;
  StatusType: StatusType;
  String: Scalars['String'];
  Int: Scalars['Int'];
  IIoRestorecommerceNotificationNotification: IIoRestorecommerceNotificationNotification;
  IIoRestorecommerceNotificationEmail: IIoRestorecommerceNotificationEmail;
  IIoRestorecommerceNotificationLog: IIoRestorecommerceNotificationLog;
  IIoRestorecommerceNotificationAttachment: IIoRestorecommerceNotificationAttachment;
  Upload: Scalars['Upload'];
  Boolean: Scalars['Boolean'];
}>;

export type MutationResolvers<ContextType = NotificationContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  notification?: Resolver<ResolversTypes['NotificationMutation'], ParentType, ContextType>;
}>;

export type NotificationMutationResolvers<ContextType = NotificationContext, ParentType extends ResolversParentTypes['NotificationMutation'] = ResolversParentTypes['NotificationMutation']> = ResolversObject<{
  service?: Resolver<ResolversTypes['NotificationServiceMutation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NotificationServiceMutationResolvers<ContextType = NotificationContext, ParentType extends ResolversParentTypes['NotificationServiceMutation'] = ResolversParentTypes['NotificationServiceMutation']> = ResolversObject<{
  Send?: Resolver<Maybe<ResolversTypes['ProtoGoogleProtobufEmpty']>, ParentType, ContextType, RequireFields<NotificationServiceMutationSendArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoGoogleProtobufEmptyResolvers<ContextType = NotificationContext, ParentType extends ResolversParentTypes['ProtoGoogleProtobufEmpty'] = ResolversParentTypes['ProtoGoogleProtobufEmpty']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StatusTypeResolvers<ContextType = NotificationContext, ParentType extends ResolversParentTypes['StatusType'] = ResolversParentTypes['StatusType']> = ResolversObject<{
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = NotificationContext> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>;
  NotificationMutation?: NotificationMutationResolvers<ContextType>;
  NotificationServiceMutation?: NotificationServiceMutationResolvers<ContextType>;
  ProtoGoogleProtobufEmpty?: ProtoGoogleProtobufEmptyResolvers<ContextType>;
  StatusType?: StatusTypeResolvers<ContextType>;
  Upload?: GraphQLScalarType;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = NotificationContext> = Resolvers<ContextType>;
