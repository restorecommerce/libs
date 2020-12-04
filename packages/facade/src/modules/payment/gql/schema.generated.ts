import { GraphQLResolveInfo } from 'graphql';
import { PaymentContext } from '../interfaces';
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
};

export type Mutation = {
  __typename?: 'Mutation';
  payment: PaymentMutation;
};

export type PaymentMutation = {
  __typename?: 'PaymentMutation';
  SetupAuthorization?: Maybe<ProtoIoRestorecommercePaymentSetupResponse>;
  SetupPurchase?: Maybe<ProtoIoRestorecommercePaymentSetupResponse>;
  Authorize?: Maybe<ProtoIoRestorecommercePaymentPaymentResponse>;
  Purchase?: Maybe<ProtoIoRestorecommercePaymentPaymentResponse>;
  Capture?: Maybe<ProtoIoRestorecommercePaymentPaymentResponse>;
};


export type PaymentMutationSetupAuthorizationArgs = {
  input: IIoRestorecommercePaymentSetupRequest;
};


export type PaymentMutationSetupPurchaseArgs = {
  input: IIoRestorecommercePaymentSetupRequest;
};


export type PaymentMutationAuthorizeArgs = {
  input: IIoRestorecommercePaymentPaymentRequest;
};


export type PaymentMutationPurchaseArgs = {
  input: IIoRestorecommercePaymentPaymentRequest;
};


export type PaymentMutationCaptureArgs = {
  input: IIoRestorecommercePaymentCaptureRequest;
};

export type ProtoIoRestorecommercePaymentSetupResponse = {
  __typename?: 'ProtoIoRestorecommercePaymentSetupResponse';
  status: StatusType;
  payload?: Maybe<IoRestorecommercePaymentSetupResponse>;
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

export type IoRestorecommercePaymentSetupResponse = {
  __typename?: 'IoRestorecommercePaymentSetupResponse';
  paymentErrors: Array<IoRestorecommercePaymentPaymentError>;
  token: Scalars['String'];
  confirmInitiationUrl: Scalars['String'];
  initiatedOn: Scalars['String'];
};

export type IoRestorecommercePaymentPaymentError = {
  __typename?: 'IoRestorecommercePaymentPaymentError';
  killed: Scalars['Boolean'];
  code: Scalars['Int'];
  signal: Scalars['String'];
  cmd: Scalars['String'];
  stdout: Scalars['String'];
  stderr: Scalars['String'];
};

export type IIoRestorecommercePaymentSetupRequest = {
  ip: Scalars['String'];
  items: Array<IIoRestorecommercePaymentItem>;
  subtotal: Scalars['Int'];
  shipping: Scalars['Int'];
  handling: Scalars['Int'];
  tax: Scalars['Int'];
  currency: Scalars['String'];
  returnUrl: Scalars['String'];
  cancelReturnUrl: Scalars['String'];
  allowGuestCheckout: Scalars['Boolean'];
  provider: IoRestorecommercePaymentProvider;
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommercePaymentItem = {
  name: Scalars['String'];
  description: Scalars['String'];
  quantity: Scalars['Int'];
  amount: Scalars['Int'];
};

export enum IoRestorecommercePaymentProvider {
  NoProvider = 0,
  PaypalExpressGateway = 1,
  AuthorizeNetGateway = 2,
  Unrecognized = -1
}

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

export type ProtoIoRestorecommercePaymentPaymentResponse = {
  __typename?: 'ProtoIoRestorecommercePaymentPaymentResponse';
  status: StatusType;
  payload?: Maybe<IoRestorecommercePaymentPaymentResponse>;
};

export type IoRestorecommercePaymentPaymentResponse = {
  __typename?: 'IoRestorecommercePaymentPaymentResponse';
  paymentErrors: Array<IoRestorecommercePaymentPaymentError>;
  paymentId: Scalars['String'];
  executedOn: Scalars['String'];
};

export type IIoRestorecommercePaymentPaymentRequest = {
  provider: IoRestorecommercePaymentProvider;
  paymentSum: Scalars['Int'];
  currency: Scalars['String'];
  paymentId: Scalars['String'];
  payerId: Scalars['String'];
  token: Scalars['String'];
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommercePaymentCaptureRequest = {
  provider: IoRestorecommercePaymentProvider;
  paymentSum: Scalars['Int'];
  currency: Scalars['String'];
  paymentId: Scalars['String'];
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
  Mutation: ResolverTypeWrapper<{}>;
  PaymentMutation: ResolverTypeWrapper<PaymentMutation>;
  ProtoIoRestorecommercePaymentSetupResponse: ResolverTypeWrapper<ProtoIoRestorecommercePaymentSetupResponse>;
  StatusType: ResolverTypeWrapper<StatusType>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IoRestorecommercePaymentSetupResponse: ResolverTypeWrapper<IoRestorecommercePaymentSetupResponse>;
  IoRestorecommercePaymentPaymentError: ResolverTypeWrapper<IoRestorecommercePaymentPaymentError>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  IIoRestorecommercePaymentSetupRequest: IIoRestorecommercePaymentSetupRequest;
  IIoRestorecommercePaymentItem: IIoRestorecommercePaymentItem;
  IoRestorecommercePaymentProvider: IoRestorecommercePaymentProvider;
  IIoRestorecommerceAuthSubject: IIoRestorecommerceAuthSubject;
  IIoRestorecommerceAuthRoleAssociation: IIoRestorecommerceAuthRoleAssociation;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAuthHierarchicalScope: IIoRestorecommerceAuthHierarchicalScope;
  ProtoIoRestorecommercePaymentPaymentResponse: ResolverTypeWrapper<ProtoIoRestorecommercePaymentPaymentResponse>;
  IoRestorecommercePaymentPaymentResponse: ResolverTypeWrapper<IoRestorecommercePaymentPaymentResponse>;
  IIoRestorecommercePaymentPaymentRequest: IIoRestorecommercePaymentPaymentRequest;
  IIoRestorecommercePaymentCaptureRequest: IIoRestorecommercePaymentCaptureRequest;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Mutation: {};
  PaymentMutation: PaymentMutation;
  ProtoIoRestorecommercePaymentSetupResponse: ProtoIoRestorecommercePaymentSetupResponse;
  StatusType: StatusType;
  String: Scalars['String'];
  Int: Scalars['Int'];
  IoRestorecommercePaymentSetupResponse: IoRestorecommercePaymentSetupResponse;
  IoRestorecommercePaymentPaymentError: IoRestorecommercePaymentPaymentError;
  Boolean: Scalars['Boolean'];
  IIoRestorecommercePaymentSetupRequest: IIoRestorecommercePaymentSetupRequest;
  IIoRestorecommercePaymentItem: IIoRestorecommercePaymentItem;
  IIoRestorecommerceAuthSubject: IIoRestorecommerceAuthSubject;
  IIoRestorecommerceAuthRoleAssociation: IIoRestorecommerceAuthRoleAssociation;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAuthHierarchicalScope: IIoRestorecommerceAuthHierarchicalScope;
  ProtoIoRestorecommercePaymentPaymentResponse: ProtoIoRestorecommercePaymentPaymentResponse;
  IoRestorecommercePaymentPaymentResponse: IoRestorecommercePaymentPaymentResponse;
  IIoRestorecommercePaymentPaymentRequest: IIoRestorecommercePaymentPaymentRequest;
  IIoRestorecommercePaymentCaptureRequest: IIoRestorecommercePaymentCaptureRequest;
}>;

export type MutationResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  payment?: Resolver<ResolversTypes['PaymentMutation'], ParentType, ContextType>;
}>;

export type PaymentMutationResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['PaymentMutation'] = ResolversParentTypes['PaymentMutation']> = ResolversObject<{
  SetupAuthorization?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePaymentSetupResponse']>, ParentType, ContextType, RequireFields<PaymentMutationSetupAuthorizationArgs, 'input'>>;
  SetupPurchase?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePaymentSetupResponse']>, ParentType, ContextType, RequireFields<PaymentMutationSetupPurchaseArgs, 'input'>>;
  Authorize?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePaymentPaymentResponse']>, ParentType, ContextType, RequireFields<PaymentMutationAuthorizeArgs, 'input'>>;
  Purchase?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePaymentPaymentResponse']>, ParentType, ContextType, RequireFields<PaymentMutationPurchaseArgs, 'input'>>;
  Capture?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePaymentPaymentResponse']>, ParentType, ContextType, RequireFields<PaymentMutationCaptureArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommercePaymentSetupResponseResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommercePaymentSetupResponse'] = ResolversParentTypes['ProtoIoRestorecommercePaymentSetupResponse']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommercePaymentSetupResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StatusTypeResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['StatusType'] = ResolversParentTypes['StatusType']> = ResolversObject<{
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePaymentSetupResponseResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['IoRestorecommercePaymentSetupResponse'] = ResolversParentTypes['IoRestorecommercePaymentSetupResponse']> = ResolversObject<{
  paymentErrors?: Resolver<Array<ResolversTypes['IoRestorecommercePaymentPaymentError']>, ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  confirmInitiationUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  initiatedOn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePaymentPaymentErrorResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['IoRestorecommercePaymentPaymentError'] = ResolversParentTypes['IoRestorecommercePaymentPaymentError']> = ResolversObject<{
  killed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  signal?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cmd?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stdout?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stderr?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePaymentProviderResolvers = { NO_PROVIDER: 'undefined', PaypalExpressGateway: 1, AuthorizeNetGateway: 2, UNRECOGNIZED: -1 };

export type ProtoIoRestorecommercePaymentPaymentResponseResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommercePaymentPaymentResponse'] = ResolversParentTypes['ProtoIoRestorecommercePaymentPaymentResponse']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommercePaymentPaymentResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePaymentPaymentResponseResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['IoRestorecommercePaymentPaymentResponse'] = ResolversParentTypes['IoRestorecommercePaymentPaymentResponse']> = ResolversObject<{
  paymentErrors?: Resolver<Array<ResolversTypes['IoRestorecommercePaymentPaymentError']>, ParentType, ContextType>;
  paymentId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  executedOn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = PaymentContext> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>;
  PaymentMutation?: PaymentMutationResolvers<ContextType>;
  ProtoIoRestorecommercePaymentSetupResponse?: ProtoIoRestorecommercePaymentSetupResponseResolvers<ContextType>;
  StatusType?: StatusTypeResolvers<ContextType>;
  IoRestorecommercePaymentSetupResponse?: IoRestorecommercePaymentSetupResponseResolvers<ContextType>;
  IoRestorecommercePaymentPaymentError?: IoRestorecommercePaymentPaymentErrorResolvers<ContextType>;
  IoRestorecommercePaymentProvider?: IoRestorecommercePaymentProviderResolvers;
  ProtoIoRestorecommercePaymentPaymentResponse?: ProtoIoRestorecommercePaymentPaymentResponseResolvers<ContextType>;
  IoRestorecommercePaymentPaymentResponse?: IoRestorecommercePaymentPaymentResponseResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = PaymentContext> = Resolvers<ContextType>;
