import { GraphQLResolveInfo } from 'graphql';
import { PaymentContext } from '../interfaces';
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
};

export type Mutation = {
  __typename?: 'Mutation';
  payment: PaymentMutation;
};

export type PaymentMutation = {
  __typename?: 'PaymentMutation';
  PaymentService: PaymentPaymentServiceMutation;
};

export type PaymentPaymentServiceMutation = {
  __typename?: 'PaymentPaymentServiceMutation';
  SetupAuthorization?: Maybe<ProtoIoRestorecommercePaymentSetupResponse>;
  SetupPurchase?: Maybe<ProtoIoRestorecommercePaymentSetupResponse>;
  Authorize?: Maybe<ProtoIoRestorecommercePaymentPaymentResponse>;
  Purchase?: Maybe<ProtoIoRestorecommercePaymentPaymentResponse>;
  Capture?: Maybe<ProtoIoRestorecommercePaymentPaymentResponse>;
};


export type PaymentPaymentServiceMutationSetupAuthorizationArgs = {
  input: IIoRestorecommercePaymentSetupRequest;
};


export type PaymentPaymentServiceMutationSetupPurchaseArgs = {
  input: IIoRestorecommercePaymentSetupRequest;
};


export type PaymentPaymentServiceMutationAuthorizeArgs = {
  input: IIoRestorecommercePaymentPaymentRequest;
};


export type PaymentPaymentServiceMutationPurchaseArgs = {
  input: IIoRestorecommercePaymentPaymentRequest;
};


export type PaymentPaymentServiceMutationCaptureArgs = {
  input: IIoRestorecommercePaymentCaptureRequest;
};

export type ProtoIoRestorecommercePaymentSetupResponse = {
  __typename?: 'ProtoIoRestorecommercePaymentSetupResponse';
  details?: Maybe<IoRestorecommercePaymentSetupResponse>;
};

export type IoRestorecommercePaymentSetupResponse = {
  __typename?: 'IoRestorecommercePaymentSetupResponse';
  item?: Maybe<IoRestorecommercePaymentSetupPayloadStatus>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommercePaymentSetupPayloadStatus = {
  __typename?: 'IoRestorecommercePaymentSetupPayloadStatus';
  payload?: Maybe<IoRestorecommercePaymentSetupPayload>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommercePaymentSetupPayload = {
  __typename?: 'IoRestorecommercePaymentSetupPayload';
  token?: Maybe<Scalars['String']>;
  confirmInitiationUrl?: Maybe<Scalars['String']>;
  initiatedOn?: Maybe<Scalars['String']>;
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

export type IIoRestorecommercePaymentSetupRequest = {
  ip?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<Array<IIoRestorecommercePaymentItem>>;
  subtotal?: InputMaybe<Scalars['Int']>;
  shipping?: InputMaybe<Scalars['Int']>;
  handling?: InputMaybe<Scalars['Int']>;
  tax?: InputMaybe<Scalars['Int']>;
  currency?: InputMaybe<Scalars['String']>;
  returnUrl?: InputMaybe<Scalars['String']>;
  cancelReturnUrl?: InputMaybe<Scalars['String']>;
  allowGuestCheckout?: InputMaybe<Scalars['Boolean']>;
  provider?: InputMaybe<IoRestorecommercePaymentProvider>;
};

export type IIoRestorecommercePaymentItem = {
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  amount?: InputMaybe<Scalars['Int']>;
};

export enum IoRestorecommercePaymentProvider {
  NoProvider = 0,
  Adyen = 1,
  AuthorizeNetCim = 2,
  AuthorizeNet = 3,
  AxcessMs = 4,
  Balanced = 5,
  BamboraAsiaPacific = 6,
  BankFrick = 7,
  Banwire = 8,
  BarclaysePdqExtraPlus = 9,
  Be2Bill = 10,
  Beanstreamcom = 11,
  BluePay = 12,
  Borgun = 13,
  Braintree = 14,
  BridgePay = 15,
  Cardknox = 16,
  CardSave = 17,
  CardStream = 18,
  Cashnet = 19,
  Cecabank = 20,
  Cenpos = 21,
  CamsCentralAccountManagementSystem = 22,
  Checkoutcom = 23,
  Clearhaus = 24,
  Commercegate = 25,
  Conekta = 26,
  CyberSource = 27,
  Dibs = 28,
  DataCash = 29,
  Efsnet = 30,
  ElavonMyVirtualMerchant = 31,
  EPay = 32,
  EvoCanada = 33,
  EWay = 34,
  EWayRapid = 35,
  Exact = 36,
  Ezic = 37,
  FatZebra = 38,
  FederatedCanada = 39,
  FinansbankWebPos = 40,
  Flo2Cash = 41,
  StPayGatewayNet = 42,
  FirstDataGlobalGatewaye4 = 43,
  FirstGiving = 44,
  GarantiSanalPos = 45,
  GlobalTransport = 46,
  Hdfc = 47,
  HeartlandPaymentSystems = 48,
  IAtsPayments = 49,
  InspireCommerce = 50,
  InstaPay = 51,
  Ipp = 52,
  Iridium = 53,
  ITransact = 54,
  JetPay = 55,
  Komoju = 56,
  LinkPoint = 57,
  LitleCo = 58,
  MaxiPago = 59,
  MerchanteSolutions = 60,
  MerchantOneGateway = 61,
  MerchantWare = 62,
  MerchantWarrior = 63,
  Mercury = 64,
  MetricsGlobal = 65,
  MasterCardInternetGatewayServiceMiGs = 66,
  ModernPayments = 67,
  Monei = 68,
  Moneris = 69,
  MoneyMovers = 70,
  NabTransact = 71,
  NeLiXTransaX = 72,
  NetRegistry = 73,
  BbsNetaxept = 74,
  NeTbilling = 75,
  NetpayGateway = 76,
  Nmi = 77,
  Ogone = 78,
  Omise = 79,
  Openpay = 80,
  OptimalPayments = 81,
  OrbitalPaymentech = 82,
  Pagarme = 83,
  PagoFacil = 84,
  PayConex = 85,
  PayGatePayXml = 86,
  PayHub = 87,
  PayJunction = 89,
  PaySecure = 90,
  PayboxDirect = 91,
  Payeezy = 92,
  Payex = 93,
  PaymentExpress = 94,
  Paymill = 95,
  PayPalExpressCheckout = 96,
  PayPalExpressCheckoutUk = 97,
  PayPalPayflowPro = 98,
  PayPalPaymentsProUs = 99,
  PayPalPaymentsProUk = 100,
  PayPalWebsitePaymentsProCa = 101,
  PayPalExpressCheckoutforDigitalGoods = 102,
  Payscout = 103,
  Paystation = 104,
  PayWay = 105,
  PayUIndia = 106,
  PinPayments = 107,
  PlugnPay = 108,
  Psigate = 109,
  PslPaymentSolutions = 110,
  QuickBooksMerchantServices = 111,
  QuickBooksPayments = 112,
  QuantumGateway = 113,
  QuickPay = 114,
  Qvalent = 115,
  Raven = 116,
  Realex = 117,
  Redsys = 118,
  S5 = 119,
  SagePay = 120,
  SagePaymentSolutions = 121,
  SallieMae = 122,
  SecureNet = 123,
  SecurePay = 124,
  SecurePayTech = 125,
  SecurionPay = 126,
  SkipJack = 127,
  SoEasyPay = 128,
  Spreedly = 129,
  Stripe = 130,
  Swipe = 131,
  Tns = 132,
  TransactPro = 133,
  TransFirst = 134,
  Transnational = 135,
  Trexle = 136,
  TrustCommerce = 137,
  UsAePay = 138,
  VancoPaymentSolutions = 139,
  Verifi = 140,
  ViaKlix = 141,
  WebPay = 142,
  WePay = 143,
  Wirecard = 144,
  WorldpayGlobal = 145,
  WorldpayOnline = 146,
  WorldpayUs = 147
}

export type ProtoIoRestorecommercePaymentPaymentResponse = {
  __typename?: 'ProtoIoRestorecommercePaymentPaymentResponse';
  details?: Maybe<IoRestorecommercePaymentPaymentResponse>;
};

export type IoRestorecommercePaymentPaymentResponse = {
  __typename?: 'IoRestorecommercePaymentPaymentResponse';
  item?: Maybe<IoRestorecommercePaymentPaymentPayloadStatus>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommercePaymentPaymentPayloadStatus = {
  __typename?: 'IoRestorecommercePaymentPaymentPayloadStatus';
  payload?: Maybe<IoRestorecommercePaymentPaymentPayload>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommercePaymentPaymentPayload = {
  __typename?: 'IoRestorecommercePaymentPaymentPayload';
  paymentId?: Maybe<Scalars['String']>;
  executedOn?: Maybe<Scalars['String']>;
};

export type IIoRestorecommercePaymentPaymentRequest = {
  provider?: InputMaybe<IoRestorecommercePaymentProvider>;
  paymentSum?: InputMaybe<Scalars['Int']>;
  currency?: InputMaybe<Scalars['String']>;
  paymentId?: InputMaybe<Scalars['String']>;
  payerId?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommercePaymentCaptureRequest = {
  provider?: InputMaybe<IoRestorecommercePaymentProvider>;
  paymentSum?: InputMaybe<Scalars['Int']>;
  currency?: InputMaybe<Scalars['String']>;
  paymentId?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  orderingOrders?: Maybe<SubscriptionOutput>;
};


export type SubscriptionOrderingOrdersArgs = {
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
  Mutation: ResolverTypeWrapper<{}>;
  PaymentMutation: ResolverTypeWrapper<PaymentMutation>;
  PaymentPaymentServiceMutation: ResolverTypeWrapper<PaymentPaymentServiceMutation>;
  ProtoIoRestorecommercePaymentSetupResponse: ResolverTypeWrapper<ProtoIoRestorecommercePaymentSetupResponse>;
  IoRestorecommercePaymentSetupResponse: ResolverTypeWrapper<IoRestorecommercePaymentSetupResponse>;
  IoRestorecommercePaymentSetupPayloadStatus: ResolverTypeWrapper<IoRestorecommercePaymentSetupPayloadStatus>;
  IoRestorecommercePaymentSetupPayload: ResolverTypeWrapper<IoRestorecommercePaymentSetupPayload>;
  String: ResolverTypeWrapper<Scalars['String']>;
  IoRestorecommerceStatusStatus: ResolverTypeWrapper<IoRestorecommerceStatusStatus>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IoRestorecommerceStatusOperationStatus: ResolverTypeWrapper<IoRestorecommerceStatusOperationStatus>;
  IIoRestorecommercePaymentSetupRequest: IIoRestorecommercePaymentSetupRequest;
  IIoRestorecommercePaymentItem: IIoRestorecommercePaymentItem;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  IoRestorecommercePaymentProvider: IoRestorecommercePaymentProvider;
  ProtoIoRestorecommercePaymentPaymentResponse: ResolverTypeWrapper<ProtoIoRestorecommercePaymentPaymentResponse>;
  IoRestorecommercePaymentPaymentResponse: ResolverTypeWrapper<IoRestorecommercePaymentPaymentResponse>;
  IoRestorecommercePaymentPaymentPayloadStatus: ResolverTypeWrapper<IoRestorecommercePaymentPaymentPayloadStatus>;
  IoRestorecommercePaymentPaymentPayload: ResolverTypeWrapper<IoRestorecommercePaymentPaymentPayload>;
  IIoRestorecommercePaymentPaymentRequest: IIoRestorecommercePaymentPaymentRequest;
  IIoRestorecommercePaymentCaptureRequest: IIoRestorecommercePaymentCaptureRequest;
  Subscription: ResolverTypeWrapper<{}>;
  SubscriptionOutput: ResolverTypeWrapper<SubscriptionOutput>;
  SubscriptionAction: SubscriptionAction;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Mutation: {};
  PaymentMutation: PaymentMutation;
  PaymentPaymentServiceMutation: PaymentPaymentServiceMutation;
  ProtoIoRestorecommercePaymentSetupResponse: ProtoIoRestorecommercePaymentSetupResponse;
  IoRestorecommercePaymentSetupResponse: IoRestorecommercePaymentSetupResponse;
  IoRestorecommercePaymentSetupPayloadStatus: IoRestorecommercePaymentSetupPayloadStatus;
  IoRestorecommercePaymentSetupPayload: IoRestorecommercePaymentSetupPayload;
  String: Scalars['String'];
  IoRestorecommerceStatusStatus: IoRestorecommerceStatusStatus;
  Int: Scalars['Int'];
  IoRestorecommerceStatusOperationStatus: IoRestorecommerceStatusOperationStatus;
  IIoRestorecommercePaymentSetupRequest: IIoRestorecommercePaymentSetupRequest;
  IIoRestorecommercePaymentItem: IIoRestorecommercePaymentItem;
  Boolean: Scalars['Boolean'];
  ProtoIoRestorecommercePaymentPaymentResponse: ProtoIoRestorecommercePaymentPaymentResponse;
  IoRestorecommercePaymentPaymentResponse: IoRestorecommercePaymentPaymentResponse;
  IoRestorecommercePaymentPaymentPayloadStatus: IoRestorecommercePaymentPaymentPayloadStatus;
  IoRestorecommercePaymentPaymentPayload: IoRestorecommercePaymentPaymentPayload;
  IIoRestorecommercePaymentPaymentRequest: IIoRestorecommercePaymentPaymentRequest;
  IIoRestorecommercePaymentCaptureRequest: IIoRestorecommercePaymentCaptureRequest;
  Subscription: {};
  SubscriptionOutput: SubscriptionOutput;
}>;

export type MutationResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  payment?: Resolver<ResolversTypes['PaymentMutation'], ParentType, ContextType>;
}>;

export type PaymentMutationResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['PaymentMutation'] = ResolversParentTypes['PaymentMutation']> = ResolversObject<{
  PaymentService?: Resolver<ResolversTypes['PaymentPaymentServiceMutation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentPaymentServiceMutationResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['PaymentPaymentServiceMutation'] = ResolversParentTypes['PaymentPaymentServiceMutation']> = ResolversObject<{
  SetupAuthorization?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePaymentSetupResponse']>, ParentType, ContextType, RequireFields<PaymentPaymentServiceMutationSetupAuthorizationArgs, 'input'>>;
  SetupPurchase?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePaymentSetupResponse']>, ParentType, ContextType, RequireFields<PaymentPaymentServiceMutationSetupPurchaseArgs, 'input'>>;
  Authorize?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePaymentPaymentResponse']>, ParentType, ContextType, RequireFields<PaymentPaymentServiceMutationAuthorizeArgs, 'input'>>;
  Purchase?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePaymentPaymentResponse']>, ParentType, ContextType, RequireFields<PaymentPaymentServiceMutationPurchaseArgs, 'input'>>;
  Capture?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePaymentPaymentResponse']>, ParentType, ContextType, RequireFields<PaymentPaymentServiceMutationCaptureArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommercePaymentSetupResponseResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommercePaymentSetupResponse'] = ResolversParentTypes['ProtoIoRestorecommercePaymentSetupResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommercePaymentSetupResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePaymentSetupResponseResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['IoRestorecommercePaymentSetupResponse'] = ResolversParentTypes['IoRestorecommercePaymentSetupResponse']> = ResolversObject<{
  item?: Resolver<Maybe<ResolversTypes['IoRestorecommercePaymentSetupPayloadStatus']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePaymentSetupPayloadStatusResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['IoRestorecommercePaymentSetupPayloadStatus'] = ResolversParentTypes['IoRestorecommercePaymentSetupPayloadStatus']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommercePaymentSetupPayload']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePaymentSetupPayloadResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['IoRestorecommercePaymentSetupPayload'] = ResolversParentTypes['IoRestorecommercePaymentSetupPayload']> = ResolversObject<{
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  confirmInitiationUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  initiatedOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusStatusResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusStatus'] = ResolversParentTypes['IoRestorecommerceStatusStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusOperationStatusResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusOperationStatus'] = ResolversParentTypes['IoRestorecommerceStatusOperationStatus']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePaymentProviderResolvers = { NO_PROVIDER: 0, Adyen: 1, AuthorizeNetCIM: 2, AuthorizeNet: 3, AxcessMS: 4, Balanced: 5, BamboraAsiaPacific: 6, BankFrick: 7, Banwire: 8, BarclaysePDQExtraPlus: 9, Be2Bill: 10, Beanstreamcom: 11, BluePay: 12, Borgun: 13, Braintree: 14, BridgePay: 15, Cardknox: 16, CardSave: 17, CardStream: 18, Cashnet: 19, Cecabank: 20, Cenpos: 21, CAMSCentralAccountManagementSystem: 22, Checkoutcom: 23, Clearhaus: 24, Commercegate: 25, Conekta: 26, CyberSource: 27, DIBS: 28, DataCash: 29, Efsnet: 30, ElavonMyVirtualMerchant: 31, ePay: 32, EVOCanada: 33, eWAY: 34, eWAYRapid: 35, Exact: 36, Ezic: 37, FatZebra: 38, FederatedCanada: 39, FinansbankWebPOS: 40, Flo2Cash: 41, stPayGatewayNet: 42, FirstDataGlobalGatewaye4: 43, FirstGiving: 44, GarantiSanalPOS: 45, GlobalTransport: 46, HDFC: 47, HeartlandPaymentSystems: 48, iATSPayments: 49, InspireCommerce: 50, InstaPay: 51, IPP: 52, Iridium: 53, iTransact: 54, JetPay: 55, Komoju: 56, LinkPoint: 57, LitleCo: 58, maxiPago: 59, MerchanteSolutions: 60, MerchantOneGateway: 61, MerchantWARE: 62, MerchantWarrior: 63, Mercury: 64, MetricsGlobal: 65, MasterCardInternetGatewayServiceMiGS: 66, ModernPayments: 67, MONEI: 68, Moneris: 69, MoneyMovers: 70, NABTransact: 71, NELiXTransaX: 72, NetRegistry: 73, BBSNetaxept: 74, NETbilling: 75, NETPAYGateway: 76, NMI: 77, Ogone: 78, Omise: 79, Openpay: 80, OptimalPayments: 81, OrbitalPaymentech: 82, Pagarme: 83, PagoFacil: 84, PayConex: 85, PayGatePayXML: 86, PayHub: 87, PayJunction: 89, PaySecure: 90, PayboxDirect: 91, Payeezy: 92, Payex: 93, PaymentExpress: 94, PAYMILL: 95, PayPalExpressCheckout: 96, PayPalExpressCheckoutUK: 97, PayPalPayflowPro: 98, PayPalPaymentsProUS: 99, PayPalPaymentsProUK: 100, PayPalWebsitePaymentsProCA: 101, PayPalExpressCheckoutforDigitalGoods: 102, Payscout: 103, Paystation: 104, PayWay: 105, PayUIndia: 106, PinPayments: 107, PlugnPay: 108, Psigate: 109, PSLPaymentSolutions: 110, QuickBooksMerchantServices: 111, QuickBooksPayments: 112, QuantumGateway: 113, QuickPay: 114, Qvalent: 115, Raven: 116, Realex: 117, Redsys: 118, S5: 119, SagePay: 120, SagePaymentSolutions: 121, SallieMae: 122, SecureNet: 123, SecurePay: 124, SecurePayTech: 125, SecurionPay: 126, SkipJack: 127, SoEasyPay: 128, Spreedly: 129, Stripe: 130, Swipe: 131, TNS: 132, TransactPro: 133, TransFirst: 134, Transnational: 135, Trexle: 136, TrustCommerce: 137, USAePay: 138, VancoPaymentSolutions: 139, Verifi: 140, ViaKLIX: 141, WebPay: 142, WePay: 143, Wirecard: 144, WorldpayGlobal: 145, WorldpayOnline: 146, WorldpayUS: 147 };

export type ProtoIoRestorecommercePaymentPaymentResponseResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommercePaymentPaymentResponse'] = ResolversParentTypes['ProtoIoRestorecommercePaymentPaymentResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommercePaymentPaymentResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePaymentPaymentResponseResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['IoRestorecommercePaymentPaymentResponse'] = ResolversParentTypes['IoRestorecommercePaymentPaymentResponse']> = ResolversObject<{
  item?: Resolver<Maybe<ResolversTypes['IoRestorecommercePaymentPaymentPayloadStatus']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePaymentPaymentPayloadStatusResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['IoRestorecommercePaymentPaymentPayloadStatus'] = ResolversParentTypes['IoRestorecommercePaymentPaymentPayloadStatus']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommercePaymentPaymentPayload']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePaymentPaymentPayloadResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['IoRestorecommercePaymentPaymentPayload'] = ResolversParentTypes['IoRestorecommercePaymentPaymentPayload']> = ResolversObject<{
  paymentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  executedOn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  orderingOrders?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "orderingOrders", ParentType, ContextType, Partial<SubscriptionOrderingOrdersArgs>>;
}>;

export type SubscriptionOutputResolvers<ContextType = PaymentContext, ParentType extends ResolversParentTypes['SubscriptionOutput'] = ResolversParentTypes['SubscriptionOutput']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = PaymentContext> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>;
  PaymentMutation?: PaymentMutationResolvers<ContextType>;
  PaymentPaymentServiceMutation?: PaymentPaymentServiceMutationResolvers<ContextType>;
  ProtoIoRestorecommercePaymentSetupResponse?: ProtoIoRestorecommercePaymentSetupResponseResolvers<ContextType>;
  IoRestorecommercePaymentSetupResponse?: IoRestorecommercePaymentSetupResponseResolvers<ContextType>;
  IoRestorecommercePaymentSetupPayloadStatus?: IoRestorecommercePaymentSetupPayloadStatusResolvers<ContextType>;
  IoRestorecommercePaymentSetupPayload?: IoRestorecommercePaymentSetupPayloadResolvers<ContextType>;
  IoRestorecommerceStatusStatus?: IoRestorecommerceStatusStatusResolvers<ContextType>;
  IoRestorecommerceStatusOperationStatus?: IoRestorecommerceStatusOperationStatusResolvers<ContextType>;
  IoRestorecommercePaymentProvider?: IoRestorecommercePaymentProviderResolvers;
  ProtoIoRestorecommercePaymentPaymentResponse?: ProtoIoRestorecommercePaymentPaymentResponseResolvers<ContextType>;
  IoRestorecommercePaymentPaymentResponse?: IoRestorecommercePaymentPaymentResponseResolvers<ContextType>;
  IoRestorecommercePaymentPaymentPayloadStatus?: IoRestorecommercePaymentPaymentPayloadStatusResolvers<ContextType>;
  IoRestorecommercePaymentPaymentPayload?: IoRestorecommercePaymentPaymentPayloadResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  SubscriptionOutput?: SubscriptionOutputResolvers<ContextType>;
}>;

