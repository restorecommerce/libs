import { GraphQLResolveInfo } from 'graphql';
import { PaymentContext } from '../interfaces';
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
};

export type Mutation = {
  __typename?: 'Mutation';
  payment: PaymentMutation;
};

export type PaymentMutation = {
  __typename?: 'PaymentMutation';
  service: PaymentServiceMutation;
};

export type PaymentServiceMutation = {
  __typename?: 'PaymentServiceMutation';
  SetupAuthorization?: Maybe<ProtoIoRestorecommercePaymentSetupResponse>;
  SetupPurchase?: Maybe<ProtoIoRestorecommercePaymentSetupResponse>;
  Authorize?: Maybe<ProtoIoRestorecommercePaymentPaymentResponse>;
  Purchase?: Maybe<ProtoIoRestorecommercePaymentPaymentResponse>;
  Capture?: Maybe<ProtoIoRestorecommercePaymentPaymentResponse>;
};


export type PaymentServiceMutationSetupAuthorizationArgs = {
  input: IIoRestorecommercePaymentSetupRequest;
};


export type PaymentServiceMutationSetupPurchaseArgs = {
  input: IIoRestorecommercePaymentSetupRequest;
};


export type PaymentServiceMutationAuthorizeArgs = {
  input: IIoRestorecommercePaymentPaymentRequest;
};


export type PaymentServiceMutationPurchaseArgs = {
  input: IIoRestorecommercePaymentPaymentRequest;
};


export type PaymentServiceMutationCaptureArgs = {
  input: IIoRestorecommercePaymentCaptureRequest;
};

export type ProtoIoRestorecommercePaymentSetupResponse = {
  __typename?: 'ProtoIoRestorecommercePaymentSetupResponse';
  status: StatusType;
  details?: Maybe<IoRestorecommercePaymentSetupResponse>;
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

export type IoRestorecommercePaymentSetupResponse = {
  __typename?: 'IoRestorecommercePaymentSetupResponse';
  paymentErrors?: Maybe<Array<IoRestorecommercePaymentPaymentError>>;
  token?: Maybe<Scalars['String']>;
  confirmInitiationUrl?: Maybe<Scalars['String']>;
  initiatedOn?: Maybe<Scalars['String']>;
};

export type IoRestorecommercePaymentPaymentError = {
  __typename?: 'IoRestorecommercePaymentPaymentError';
  killed?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['Int']>;
  signal?: Maybe<GoogleProtobufStringValue>;
  cmd?: Maybe<Scalars['String']>;
  stdout?: Maybe<Scalars['String']>;
  stderr?: Maybe<Scalars['String']>;
};

export type GoogleProtobufStringValue = {
  __typename?: 'GoogleProtobufStringValue';
  value?: Maybe<Scalars['String']>;
};

export type IIoRestorecommercePaymentSetupRequest = {
  ip?: Maybe<Scalars['String']>;
  items?: Maybe<Array<IIoRestorecommercePaymentItem>>;
  subtotal?: Maybe<Scalars['Int']>;
  shipping?: Maybe<Scalars['Int']>;
  handling?: Maybe<Scalars['Int']>;
  tax?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  returnUrl?: Maybe<Scalars['String']>;
  cancelReturnUrl?: Maybe<Scalars['String']>;
  allowGuestCheckout?: Maybe<Scalars['Boolean']>;
  provider?: Maybe<IoRestorecommercePaymentProvider>;
};

export type IIoRestorecommercePaymentItem = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Int']>;
};

export enum IoRestorecommercePaymentProvider {
  NoProvider = 0,
  PaypalExpressGateway = 1,
  AuthorizeNetGateway = 2
}

export type ProtoIoRestorecommercePaymentPaymentResponse = {
  __typename?: 'ProtoIoRestorecommercePaymentPaymentResponse';
  status: StatusType;
  details?: Maybe<IoRestorecommercePaymentPaymentResponse>;
};

export type IoRestorecommercePaymentPaymentResponse = {
  __typename?: 'IoRestorecommercePaymentPaymentResponse';
  paymentErrors?: Maybe<Array<IoRestorecommercePaymentPaymentError>>;
  paymentId?: Maybe<Scalars['String']>;
  executedOn?: Maybe<Scalars['String']>;
};

export type IIoRestorecommercePaymentPaymentRequest = {
  provider?: Maybe<IoRestorecommercePaymentProvider>;
  paymentSum?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
  payerId?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type IIoRestorecommercePaymentCaptureRequest = {
  provider?: Maybe<IoRestorecommercePaymentProvider>;
  paymentSum?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
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
  PaymentMutation: ResolverTypeWrapper<PaymentMutation>;
  PaymentServiceMutation: ResolverTypeWrapper<PaymentServiceMutation>;
  ProtoIoRestorecommercePaymentSetupResponse: ResolverTypeWrapper<ProtoIoRestorecommercePaymentSetupResponse>;
  StatusType: ResolverTypeWrapper<StatusType>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IoRestorecommercePaymentSetupResponse: ResolverTypeWrapper<IoRestorecommercePaymentSetupResponse>;
  IoRestorecommercePaymentPaymentError: ResolverTypeWrapper<IoRestorecommercePaymentPaymentError>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  GoogleProtobufStringValue: ResolverTypeWrapper<GoogleProtobufStringValue>;
  IIoRestorecommercePaymentSetupRequest: IIoRestorecommercePaymentSetupRequest;
  IIoRestorecommercePaymentItem: IIoRestorecommercePaymentItem;
  IoRestorecommercePaymentProvider: IoRestorecommercePaymentProvider;
  ProtoIoRestorecommercePaymentPaymentResponse: ResolverTypeWrapper<ProtoIoRestorecommercePaymentPaymentResponse>;
  IoRestorecommercePaymentPaymentResponse: ResolverTypeWrapper<IoRestorecommercePaymentPaymentResponse>;
  IIoRestorecommercePaymentPaymentRequest: IIoRestorecommercePaymentPaymentRequest;
  IIoRestorecommercePaymentCaptureRequest: IIoRestorecommercePaymentCaptureRequest;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Mutation: {};
  PaymentMutation: PaymentMutation;
  PaymentServiceMutation: PaymentServiceMutation;
  ProtoIoRestorecommercePaymentSetupResponse: ProtoIoRestorecommercePaymentSetupResponse;
  StatusType: StatusType;
  String: Scalars['String'];
  Int: Scalars['Int'];
  IoRestorecommercePaymentSetupResponse: IoRestorecommercePaymentSetupResponse;
  IoRestorecommercePaymentPaymentError: IoRestorecommercePaymentPaymentError;
  Boolean: Scalars['Boolean'];
  GoogleProtobufStringValue: GoogleProtobufStringValue;
  IIoRestorecommercePaymentSetupRequest: IIoRestorecommercePaymentSetupRequest;
  IIoRestorecommercePaymentItem: IIoRestorecommercePaymentItem;
  ProtoIoRestorecommercePaymentPaymentResponse: ProtoIoRestorecommercePaymentPaymentResponse;
  IoRestorecommercePaymentPaymentResponse: IoRestorecommercePaymentPaymentResponse;
  IIoRestorecommercePaymentPaymentRequest: IIoRestorecommercePaymentPaymentRequest;
  IIoRestorecommercePaymentCaptureRequest: IIoRestorecommercePaymentCaptureRequest;
}>;

export type MutationResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  payment?: Resolver<ResolversTypes['PaymentMutation'], ParentType, ContextType>;
}>;

export type PaymentMutationResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['PaymentMutation'] = ResolversParentTypes['PaymentMutation']> = ResolversObject<{
  service?: Resolver<ResolversTypes['PaymentServiceMutation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentServiceMutationResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['PaymentServiceMutation'] = ResolversParentTypes['PaymentServiceMutation']> = ResolversObject<{
  SetupAuthorization?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePaymentSetupResponse']>, ParentType, ContextType, RequireFields<PaymentServiceMutationSetupAuthorizationArgs, 'input'>>;
  SetupPurchase?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePaymentSetupResponse']>, ParentType, ContextType, RequireFields<PaymentServiceMutationSetupPurchaseArgs, 'input'>>;
  Authorize?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePaymentPaymentResponse']>, ParentType, ContextType, RequireFields<PaymentServiceMutationAuthorizeArgs, 'input'>>;
  Purchase?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePaymentPaymentResponse']>, ParentType, ContextType, RequireFields<PaymentServiceMutationPurchaseArgs, 'input'>>;
  Capture?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePaymentPaymentResponse']>, ParentType, ContextType, RequireFields<PaymentServiceMutationCaptureArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommercePaymentSetupResponseResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommercePaymentSetupResponse'] = ResolversParentTypes['ProtoIoRestorecommercePaymentSetupResponse']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommercePaymentSetupResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StatusTypeResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['StatusType'] = ResolversParentTypes['StatusType']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePaymentSetupResponseResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['IoRestorecommercePaymentSetupResponse'] = ResolversParentTypes['IoRestorecommercePaymentSetupResponse']> = ResolversObject<{
  paymentErrors?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommercePaymentPaymentError']>>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  confirmInitiationUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  initiatedOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePaymentPaymentErrorResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['IoRestorecommercePaymentPaymentError'] = ResolversParentTypes['IoRestorecommercePaymentPaymentError']> = ResolversObject<{
  killed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  signal?: Resolver<Maybe<ResolversTypes['GoogleProtobufStringValue']>, ParentType, ContextType>;
  cmd?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stdout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stderr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GoogleProtobufStringValueResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['GoogleProtobufStringValue'] = ResolversParentTypes['GoogleProtobufStringValue']> = ResolversObject<{
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePaymentProviderResolvers = { NO_PROVIDER: 'undefined', PaypalExpressGateway: 1, AuthorizeNetGateway: 2 };

export type ProtoIoRestorecommercePaymentPaymentResponseResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommercePaymentPaymentResponse'] = ResolversParentTypes['ProtoIoRestorecommercePaymentPaymentResponse']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommercePaymentPaymentResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePaymentPaymentResponseResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['IoRestorecommercePaymentPaymentResponse'] = ResolversParentTypes['IoRestorecommercePaymentPaymentResponse']> = ResolversObject<{
  paymentErrors?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommercePaymentPaymentError']>>, ParentType, ContextType>;
  paymentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  executedOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = PaymentContext> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>;
  PaymentMutation?: PaymentMutationResolvers<ContextType>;
  PaymentServiceMutation?: PaymentServiceMutationResolvers<ContextType>;
  ProtoIoRestorecommercePaymentSetupResponse?: ProtoIoRestorecommercePaymentSetupResponseResolvers<ContextType>;
  StatusType?: StatusTypeResolvers<ContextType>;
  IoRestorecommercePaymentSetupResponse?: IoRestorecommercePaymentSetupResponseResolvers<ContextType>;
  IoRestorecommercePaymentPaymentError?: IoRestorecommercePaymentPaymentErrorResolvers<ContextType>;
  GoogleProtobufStringValue?: GoogleProtobufStringValueResolvers<ContextType>;
  IoRestorecommercePaymentProvider?: IoRestorecommercePaymentProviderResolvers;
  ProtoIoRestorecommercePaymentPaymentResponse?: ProtoIoRestorecommercePaymentPaymentResponseResolvers<ContextType>;
  IoRestorecommercePaymentPaymentResponse?: IoRestorecommercePaymentPaymentResponseResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = PaymentContext> = Resolvers<ContextType>;
