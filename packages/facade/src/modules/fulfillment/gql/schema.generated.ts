import { GraphQLResolveInfo } from 'graphql';
import { FulfillmentContext } from '../interfaces';
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

export type Query = {
  __typename?: 'Query';
  fulfillment: FulfillmentQuery;
};

export type FulfillmentQuery = {
  __typename?: 'FulfillmentQuery';
  getLabels?: Maybe<ProtoIoRestorecommerceFulfillmentLabelResult>;
  trackFulfillment?: Maybe<ProtoIoRestorecommerceFulfillmentStatus>;
  getAllFulfillments?: Maybe<ProtoIoRestorecommerceFulfillmentAllFulfillments>;
};


export type FulfillmentQueryGetLabelsArgs = {
  input: IIoRestorecommerceFulfillmentOrderId;
};


export type FulfillmentQueryTrackFulfillmentArgs = {
  input: IIoRestorecommerceFulfillmentTrackingNumber;
};


export type FulfillmentQueryGetAllFulfillmentsArgs = {
  input: IIoRestorecommerceFulfillmentFulfillmentStatus;
};

export type ProtoIoRestorecommerceFulfillmentLabelResult = {
  __typename?: 'ProtoIoRestorecommerceFulfillmentLabelResult';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceFulfillmentLabelResult>;
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

export type IoRestorecommerceFulfillmentLabelResult = {
  __typename?: 'IoRestorecommerceFulfillmentLabelResult';
  labels: Array<IoRestorecommerceFulfillmentLabels>;
  error: IoRestorecommerceFulfillmentError;
};

export type IoRestorecommerceFulfillmentLabels = {
  __typename?: 'IoRestorecommerceFulfillmentLabels';
  labelUrl: Scalars['String'];
  shipmentNumber: Scalars['String'];
  exportLabelUrl: Scalars['String'];
};

export type IoRestorecommerceFulfillmentError = {
  __typename?: 'IoRestorecommerceFulfillmentError';
  code: Scalars['String'];
  message: Scalars['String'];
};

export type IIoRestorecommerceFulfillmentOrderId = {
  orderId: Scalars['String'];
  subject: IIoRestorecommerceAuthSubject;
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

export type ProtoIoRestorecommerceFulfillmentStatus = {
  __typename?: 'ProtoIoRestorecommerceFulfillmentStatus';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceFulfillmentStatus>;
};

export type IoRestorecommerceFulfillmentStatus = {
  __typename?: 'IoRestorecommerceFulfillmentStatus';
  Status: Scalars['String'];
  shipmentStatus: Array<IoRestorecommerceFulfillmentShipmentStatus>;
  OrderId: Scalars['String'];
};

export type IoRestorecommerceFulfillmentShipmentStatus = {
  __typename?: 'IoRestorecommerceFulfillmentShipmentStatus';
  ShipmentData: Array<IoRestorecommerceFulfillmentShipmentData>;
};

export type IoRestorecommerceFulfillmentShipmentData = {
  __typename?: 'IoRestorecommerceFulfillmentShipmentData';
  ShipmentNumber: Scalars['String'];
  Status: Scalars['String'];
  ShortStatus: Scalars['String'];
  TimeStamp: Scalars['String'];
  Receiver: Scalars['String'];
  ReceipientName: Scalars['String'];
  Recepientemail: Scalars['String'];
  EventDetails: Array<IoRestorecommerceFulfillmentEventDetails>;
  CustomerReference: Scalars['String'];
};

export type IoRestorecommerceFulfillmentEventDetails = {
  __typename?: 'IoRestorecommerceFulfillmentEventDetails';
  Status: Scalars['String'];
  Location: Scalars['String'];
  Time: Scalars['String'];
  Coutnry: Scalars['String'];
};

export type IIoRestorecommerceFulfillmentTrackingNumber = {
  orderId: Scalars['String'];
  shipmentType: Scalars['String'];
  subject: IIoRestorecommerceAuthSubject;
};

export type ProtoIoRestorecommerceFulfillmentAllFulfillments = {
  __typename?: 'ProtoIoRestorecommerceFulfillmentAllFulfillments';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceFulfillmentAllFulfillments>;
};

export type IoRestorecommerceFulfillmentAllFulfillments = {
  __typename?: 'IoRestorecommerceFulfillmentAllFulfillments';
  items: Array<IoRestorecommerceFulfillmentItems>;
};

export type IoRestorecommerceFulfillmentItems = {
  __typename?: 'IoRestorecommerceFulfillmentItems';
  fulfillmentStatus: Scalars['String'];
  orderId: Scalars['String'];
  serviceType: Scalars['String'];
  shipmentNumber: Array<Scalars['String']>;
};

export type IIoRestorecommerceFulfillmentFulfillmentStatus = {
  OrderId: Scalars['String'];
  OrderStatus: Scalars['String'];
  subject: IIoRestorecommerceAuthSubject;
};

export type Mutation = {
  __typename?: 'Mutation';
  fulfillment: FulfillmentMutation;
};

export type FulfillmentMutation = {
  __typename?: 'FulfillmentMutation';
  CreateFulfillment?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentResults>;
  deleteFulfillment?: Maybe<ProtoIoRestorecommerceFulfillmentDeleteStatus>;
};


export type FulfillmentMutationCreateFulfillmentArgs = {
  input: IIoRestorecommerceFulfillmentShipmentOrderLists;
};


export type FulfillmentMutationDeleteFulfillmentArgs = {
  input: IIoRestorecommerceFulfillmentOrderId;
};

export type ProtoIoRestorecommerceFulfillmentFulfillmentResults = {
  __typename?: 'ProtoIoRestorecommerceFulfillmentFulfillmentResults';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceFulfillmentFulfillmentResults>;
};

export type IoRestorecommerceFulfillmentFulfillmentResults = {
  __typename?: 'IoRestorecommerceFulfillmentFulfillmentResults';
  fulfillmentResults: Array<IoRestorecommerceFulfillmentResponseDetailsList>;
};

export type IoRestorecommerceFulfillmentResponseDetailsList = {
  __typename?: 'IoRestorecommerceFulfillmentResponseDetailsList';
  Status: IoRestorecommerceFulfillmentFulfillmentStatus;
  error: IoRestorecommerceFulfillmentErrorList;
};

export type IoRestorecommerceFulfillmentFulfillmentStatus = {
  __typename?: 'IoRestorecommerceFulfillmentFulfillmentStatus';
  OrderId: Scalars['String'];
  OrderStatus: Scalars['String'];
  subject: IoRestorecommerceAuthSubject;
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

export type IoRestorecommerceAttributeAttribute = {
  __typename?: 'IoRestorecommerceAttributeAttribute';
  id: Scalars['String'];
  value: Scalars['String'];
};

export type IoRestorecommerceAuthHierarchicalScope = {
  __typename?: 'IoRestorecommerceAuthHierarchicalScope';
  id: Scalars['String'];
  children: Array<IoRestorecommerceAuthHierarchicalScope>;
  role: Scalars['String'];
};

export type IoRestorecommerceFulfillmentErrorList = {
  __typename?: 'IoRestorecommerceFulfillmentErrorList';
  code: Array<Scalars['String']>;
  message: Array<Scalars['String']>;
};

export type IIoRestorecommerceFulfillmentShipmentOrderLists = {
  ShipmentOrder: IIoRestorecommerceFulfillmentShipmentOrder;
  subject: IIoRestorecommerceAuthSubject;
};

export type IIoRestorecommerceFulfillmentShipmentOrder = {
  fulfillmentList: Array<IIoRestorecommerceFulfillmentFulfillmentList>;
  meta: IIoRestorecommerceMetaMeta;
};

export type IIoRestorecommerceFulfillmentFulfillmentList = {
  Shipment: IIoRestorecommerceFulfillmentShipment;
  OrderId: Scalars['String'];
  fulFillmentService: Scalars['String'];
};

export type IIoRestorecommerceFulfillmentShipment = {
  ShipmentDetails: Array<IIoRestorecommerceFulfillmentShipmentDetails>;
  customerReference: Scalars['String'];
  Receiver: IIoRestorecommerceFulfillmentReceiver;
  Shipper: IIoRestorecommerceFulfillmentShipper;
  returnShipmentAccountNumber: Scalars['String'];
  returnShipmentReference: Scalars['String'];
  Notification: IIoRestorecommerceFulfillmentNotification;
};

export type IIoRestorecommerceFulfillmentShipmentDetails = {
  ShipmentItem: IIoRestorecommerceFulfillmentShipmentItem;
};

export type IIoRestorecommerceFulfillmentShipmentItem = {
  weightInKG: Scalars['Float'];
  lengthInCM: Scalars['String'];
  widthInCM: Scalars['String'];
  heightInCM: Scalars['String'];
  ExportDocument: IIoRestorecommerceFulfillmentExportDocument;
};

export type IIoRestorecommerceFulfillmentExportDocument = {
  invoiceNumber: Scalars['String'];
  exportType: Scalars['String'];
  exportTypeDescription: Scalars['String'];
  termsOfTrade: Scalars['String'];
  placeOfCommital: Scalars['String'];
  additionalFee: Scalars['Float'];
  ExportDocPosition: IIoRestorecommerceFulfillmentExportDocPosition;
};

export type IIoRestorecommerceFulfillmentExportDocPosition = {
  description: Scalars['String'];
  countryCodeOrigin: Scalars['String'];
  customsTariffNumber: Scalars['String'];
  amount: Scalars['Int'];
  netWeightInKG: Scalars['Int'];
  customsValue: Scalars['Float'];
};

export type IIoRestorecommerceFulfillmentReceiver = {
  name1: Scalars['String'];
  Address: IIoRestorecommerceFulfillmentAddress;
  Communication: IIoRestorecommerceFulfillmentCommunication;
};

export type IIoRestorecommerceFulfillmentAddress = {
  streetName: Scalars['String'];
  streetNumber: Scalars['String'];
  addressAddition: Scalars['String'];
  zip: Scalars['String'];
  city: Scalars['String'];
  Origin: IIoRestorecommerceFulfillmentOrigin;
};

export type IIoRestorecommerceFulfillmentOrigin = {
  country: Scalars['String'];
  countryISOCode: Scalars['String'];
};

export type IIoRestorecommerceFulfillmentCommunication = {
  phone: Scalars['String'];
  email: Scalars['String'];
};

export type IIoRestorecommerceFulfillmentShipper = {
  Name: IIoRestorecommerceFulfillmentName;
  Address: IIoRestorecommerceFulfillmentAddress;
  Communication: IIoRestorecommerceFulfillmentCommunication;
};

export type IIoRestorecommerceFulfillmentName = {
  name1: Scalars['String'];
};

export type IIoRestorecommerceFulfillmentNotification = {
  recipientEmailAddress: Scalars['String'];
};

export type IIoRestorecommerceMetaMeta = {
  created: Scalars['Float'];
  modified: Scalars['Float'];
  modifiedBy: Scalars['String'];
  owner: Array<IIoRestorecommerceAttributeAttribute>;
};

export type ProtoIoRestorecommerceFulfillmentDeleteStatus = {
  __typename?: 'ProtoIoRestorecommerceFulfillmentDeleteStatus';
  status: StatusType;
  payload?: Maybe<IoRestorecommerceFulfillmentDeleteStatus>;
};

export type IoRestorecommerceFulfillmentDeleteStatus = {
  __typename?: 'IoRestorecommerceFulfillmentDeleteStatus';
  deleteStatus: Scalars['String'];
  error: IoRestorecommerceFulfillmentError;
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
  FulfillmentQuery: ResolverTypeWrapper<FulfillmentQuery>;
  ProtoIoRestorecommerceFulfillmentLabelResult: ResolverTypeWrapper<ProtoIoRestorecommerceFulfillmentLabelResult>;
  StatusType: ResolverTypeWrapper<StatusType>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IoRestorecommerceFulfillmentLabelResult: ResolverTypeWrapper<IoRestorecommerceFulfillmentLabelResult>;
  IoRestorecommerceFulfillmentLabels: ResolverTypeWrapper<IoRestorecommerceFulfillmentLabels>;
  IoRestorecommerceFulfillmentError: ResolverTypeWrapper<IoRestorecommerceFulfillmentError>;
  IIoRestorecommerceFulfillmentOrderId: IIoRestorecommerceFulfillmentOrderId;
  IIoRestorecommerceAuthSubject: IIoRestorecommerceAuthSubject;
  IIoRestorecommerceAuthRoleAssociation: IIoRestorecommerceAuthRoleAssociation;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAuthHierarchicalScope: IIoRestorecommerceAuthHierarchicalScope;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ProtoIoRestorecommerceFulfillmentStatus: ResolverTypeWrapper<ProtoIoRestorecommerceFulfillmentStatus>;
  IoRestorecommerceFulfillmentStatus: ResolverTypeWrapper<IoRestorecommerceFulfillmentStatus>;
  IoRestorecommerceFulfillmentShipmentStatus: ResolverTypeWrapper<IoRestorecommerceFulfillmentShipmentStatus>;
  IoRestorecommerceFulfillmentShipmentData: ResolverTypeWrapper<IoRestorecommerceFulfillmentShipmentData>;
  IoRestorecommerceFulfillmentEventDetails: ResolverTypeWrapper<IoRestorecommerceFulfillmentEventDetails>;
  IIoRestorecommerceFulfillmentTrackingNumber: IIoRestorecommerceFulfillmentTrackingNumber;
  ProtoIoRestorecommerceFulfillmentAllFulfillments: ResolverTypeWrapper<ProtoIoRestorecommerceFulfillmentAllFulfillments>;
  IoRestorecommerceFulfillmentAllFulfillments: ResolverTypeWrapper<IoRestorecommerceFulfillmentAllFulfillments>;
  IoRestorecommerceFulfillmentItems: ResolverTypeWrapper<IoRestorecommerceFulfillmentItems>;
  IIoRestorecommerceFulfillmentFulfillmentStatus: IIoRestorecommerceFulfillmentFulfillmentStatus;
  Mutation: ResolverTypeWrapper<{}>;
  FulfillmentMutation: ResolverTypeWrapper<FulfillmentMutation>;
  ProtoIoRestorecommerceFulfillmentFulfillmentResults: ResolverTypeWrapper<ProtoIoRestorecommerceFulfillmentFulfillmentResults>;
  IoRestorecommerceFulfillmentFulfillmentResults: ResolverTypeWrapper<IoRestorecommerceFulfillmentFulfillmentResults>;
  IoRestorecommerceFulfillmentResponseDetailsList: ResolverTypeWrapper<IoRestorecommerceFulfillmentResponseDetailsList>;
  IoRestorecommerceFulfillmentFulfillmentStatus: ResolverTypeWrapper<IoRestorecommerceFulfillmentFulfillmentStatus>;
  IoRestorecommerceAuthSubject: ResolverTypeWrapper<IoRestorecommerceAuthSubject>;
  IoRestorecommerceAuthRoleAssociation: ResolverTypeWrapper<IoRestorecommerceAuthRoleAssociation>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  IoRestorecommerceAuthHierarchicalScope: ResolverTypeWrapper<IoRestorecommerceAuthHierarchicalScope>;
  IoRestorecommerceFulfillmentErrorList: ResolverTypeWrapper<IoRestorecommerceFulfillmentErrorList>;
  IIoRestorecommerceFulfillmentShipmentOrderLists: IIoRestorecommerceFulfillmentShipmentOrderLists;
  IIoRestorecommerceFulfillmentShipmentOrder: IIoRestorecommerceFulfillmentShipmentOrder;
  IIoRestorecommerceFulfillmentFulfillmentList: IIoRestorecommerceFulfillmentFulfillmentList;
  IIoRestorecommerceFulfillmentShipment: IIoRestorecommerceFulfillmentShipment;
  IIoRestorecommerceFulfillmentShipmentDetails: IIoRestorecommerceFulfillmentShipmentDetails;
  IIoRestorecommerceFulfillmentShipmentItem: IIoRestorecommerceFulfillmentShipmentItem;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  IIoRestorecommerceFulfillmentExportDocument: IIoRestorecommerceFulfillmentExportDocument;
  IIoRestorecommerceFulfillmentExportDocPosition: IIoRestorecommerceFulfillmentExportDocPosition;
  IIoRestorecommerceFulfillmentReceiver: IIoRestorecommerceFulfillmentReceiver;
  IIoRestorecommerceFulfillmentAddress: IIoRestorecommerceFulfillmentAddress;
  IIoRestorecommerceFulfillmentOrigin: IIoRestorecommerceFulfillmentOrigin;
  IIoRestorecommerceFulfillmentCommunication: IIoRestorecommerceFulfillmentCommunication;
  IIoRestorecommerceFulfillmentShipper: IIoRestorecommerceFulfillmentShipper;
  IIoRestorecommerceFulfillmentName: IIoRestorecommerceFulfillmentName;
  IIoRestorecommerceFulfillmentNotification: IIoRestorecommerceFulfillmentNotification;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  ProtoIoRestorecommerceFulfillmentDeleteStatus: ResolverTypeWrapper<ProtoIoRestorecommerceFulfillmentDeleteStatus>;
  IoRestorecommerceFulfillmentDeleteStatus: ResolverTypeWrapper<IoRestorecommerceFulfillmentDeleteStatus>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  FulfillmentQuery: FulfillmentQuery;
  ProtoIoRestorecommerceFulfillmentLabelResult: ProtoIoRestorecommerceFulfillmentLabelResult;
  StatusType: StatusType;
  String: Scalars['String'];
  Int: Scalars['Int'];
  IoRestorecommerceFulfillmentLabelResult: IoRestorecommerceFulfillmentLabelResult;
  IoRestorecommerceFulfillmentLabels: IoRestorecommerceFulfillmentLabels;
  IoRestorecommerceFulfillmentError: IoRestorecommerceFulfillmentError;
  IIoRestorecommerceFulfillmentOrderId: IIoRestorecommerceFulfillmentOrderId;
  IIoRestorecommerceAuthSubject: IIoRestorecommerceAuthSubject;
  IIoRestorecommerceAuthRoleAssociation: IIoRestorecommerceAuthRoleAssociation;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAuthHierarchicalScope: IIoRestorecommerceAuthHierarchicalScope;
  Boolean: Scalars['Boolean'];
  ProtoIoRestorecommerceFulfillmentStatus: ProtoIoRestorecommerceFulfillmentStatus;
  IoRestorecommerceFulfillmentStatus: IoRestorecommerceFulfillmentStatus;
  IoRestorecommerceFulfillmentShipmentStatus: IoRestorecommerceFulfillmentShipmentStatus;
  IoRestorecommerceFulfillmentShipmentData: IoRestorecommerceFulfillmentShipmentData;
  IoRestorecommerceFulfillmentEventDetails: IoRestorecommerceFulfillmentEventDetails;
  IIoRestorecommerceFulfillmentTrackingNumber: IIoRestorecommerceFulfillmentTrackingNumber;
  ProtoIoRestorecommerceFulfillmentAllFulfillments: ProtoIoRestorecommerceFulfillmentAllFulfillments;
  IoRestorecommerceFulfillmentAllFulfillments: IoRestorecommerceFulfillmentAllFulfillments;
  IoRestorecommerceFulfillmentItems: IoRestorecommerceFulfillmentItems;
  IIoRestorecommerceFulfillmentFulfillmentStatus: IIoRestorecommerceFulfillmentFulfillmentStatus;
  Mutation: {};
  FulfillmentMutation: FulfillmentMutation;
  ProtoIoRestorecommerceFulfillmentFulfillmentResults: ProtoIoRestorecommerceFulfillmentFulfillmentResults;
  IoRestorecommerceFulfillmentFulfillmentResults: IoRestorecommerceFulfillmentFulfillmentResults;
  IoRestorecommerceFulfillmentResponseDetailsList: IoRestorecommerceFulfillmentResponseDetailsList;
  IoRestorecommerceFulfillmentFulfillmentStatus: IoRestorecommerceFulfillmentFulfillmentStatus;
  IoRestorecommerceAuthSubject: IoRestorecommerceAuthSubject;
  IoRestorecommerceAuthRoleAssociation: IoRestorecommerceAuthRoleAssociation;
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  IoRestorecommerceAuthHierarchicalScope: IoRestorecommerceAuthHierarchicalScope;
  IoRestorecommerceFulfillmentErrorList: IoRestorecommerceFulfillmentErrorList;
  IIoRestorecommerceFulfillmentShipmentOrderLists: IIoRestorecommerceFulfillmentShipmentOrderLists;
  IIoRestorecommerceFulfillmentShipmentOrder: IIoRestorecommerceFulfillmentShipmentOrder;
  IIoRestorecommerceFulfillmentFulfillmentList: IIoRestorecommerceFulfillmentFulfillmentList;
  IIoRestorecommerceFulfillmentShipment: IIoRestorecommerceFulfillmentShipment;
  IIoRestorecommerceFulfillmentShipmentDetails: IIoRestorecommerceFulfillmentShipmentDetails;
  IIoRestorecommerceFulfillmentShipmentItem: IIoRestorecommerceFulfillmentShipmentItem;
  Float: Scalars['Float'];
  IIoRestorecommerceFulfillmentExportDocument: IIoRestorecommerceFulfillmentExportDocument;
  IIoRestorecommerceFulfillmentExportDocPosition: IIoRestorecommerceFulfillmentExportDocPosition;
  IIoRestorecommerceFulfillmentReceiver: IIoRestorecommerceFulfillmentReceiver;
  IIoRestorecommerceFulfillmentAddress: IIoRestorecommerceFulfillmentAddress;
  IIoRestorecommerceFulfillmentOrigin: IIoRestorecommerceFulfillmentOrigin;
  IIoRestorecommerceFulfillmentCommunication: IIoRestorecommerceFulfillmentCommunication;
  IIoRestorecommerceFulfillmentShipper: IIoRestorecommerceFulfillmentShipper;
  IIoRestorecommerceFulfillmentName: IIoRestorecommerceFulfillmentName;
  IIoRestorecommerceFulfillmentNotification: IIoRestorecommerceFulfillmentNotification;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  ProtoIoRestorecommerceFulfillmentDeleteStatus: ProtoIoRestorecommerceFulfillmentDeleteStatus;
  IoRestorecommerceFulfillmentDeleteStatus: IoRestorecommerceFulfillmentDeleteStatus;
}>;

export type QueryResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  fulfillment?: Resolver<ResolversTypes['FulfillmentQuery'], ParentType, ContextType>;
}>;

export type FulfillmentQueryResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['FulfillmentQuery'] = ResolversParentTypes['FulfillmentQuery']> = ResolversObject<{
  getLabels?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentLabelResult']>, ParentType, ContextType, RequireFields<FulfillmentQueryGetLabelsArgs, 'input'>>;
  trackFulfillment?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentStatus']>, ParentType, ContextType, RequireFields<FulfillmentQueryTrackFulfillmentArgs, 'input'>>;
  getAllFulfillments?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentAllFulfillments']>, ParentType, ContextType, RequireFields<FulfillmentQueryGetAllFulfillmentsArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceFulfillmentLabelResultResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceFulfillmentLabelResult'] = ResolversParentTypes['ProtoIoRestorecommerceFulfillmentLabelResult']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentLabelResult']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StatusTypeResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['StatusType'] = ResolversParentTypes['StatusType']> = ResolversObject<{
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentLabelResultResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentLabelResult'] = ResolversParentTypes['IoRestorecommerceFulfillmentLabelResult']> = ResolversObject<{
  labels?: Resolver<Array<ResolversTypes['IoRestorecommerceFulfillmentLabels']>, ParentType, ContextType>;
  error?: Resolver<ResolversTypes['IoRestorecommerceFulfillmentError'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentLabelsResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentLabels'] = ResolversParentTypes['IoRestorecommerceFulfillmentLabels']> = ResolversObject<{
  labelUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shipmentNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  exportLabelUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentErrorResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentError'] = ResolversParentTypes['IoRestorecommerceFulfillmentError']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceFulfillmentStatusResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceFulfillmentStatus'] = ResolversParentTypes['ProtoIoRestorecommerceFulfillmentStatus']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentStatusResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentStatus'] = ResolversParentTypes['IoRestorecommerceFulfillmentStatus']> = ResolversObject<{
  Status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shipmentStatus?: Resolver<Array<ResolversTypes['IoRestorecommerceFulfillmentShipmentStatus']>, ParentType, ContextType>;
  OrderId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentShipmentStatusResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentShipmentStatus'] = ResolversParentTypes['IoRestorecommerceFulfillmentShipmentStatus']> = ResolversObject<{
  ShipmentData?: Resolver<Array<ResolversTypes['IoRestorecommerceFulfillmentShipmentData']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentShipmentDataResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentShipmentData'] = ResolversParentTypes['IoRestorecommerceFulfillmentShipmentData']> = ResolversObject<{
  ShipmentNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ShortStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  TimeStamp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Receiver?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ReceipientName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Recepientemail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  EventDetails?: Resolver<Array<ResolversTypes['IoRestorecommerceFulfillmentEventDetails']>, ParentType, ContextType>;
  CustomerReference?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentEventDetailsResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentEventDetails'] = ResolversParentTypes['IoRestorecommerceFulfillmentEventDetails']> = ResolversObject<{
  Status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Time?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Coutnry?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceFulfillmentAllFulfillmentsResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceFulfillmentAllFulfillments'] = ResolversParentTypes['ProtoIoRestorecommerceFulfillmentAllFulfillments']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentAllFulfillments']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentAllFulfillmentsResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentAllFulfillments'] = ResolversParentTypes['IoRestorecommerceFulfillmentAllFulfillments']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['IoRestorecommerceFulfillmentItems']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentItemsResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentItems'] = ResolversParentTypes['IoRestorecommerceFulfillmentItems']> = ResolversObject<{
  fulfillmentStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  serviceType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shipmentNumber?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  fulfillment?: Resolver<ResolversTypes['FulfillmentMutation'], ParentType, ContextType>;
}>;

export type FulfillmentMutationResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['FulfillmentMutation'] = ResolversParentTypes['FulfillmentMutation']> = ResolversObject<{
  CreateFulfillment?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentFulfillmentResults']>, ParentType, ContextType, RequireFields<FulfillmentMutationCreateFulfillmentArgs, 'input'>>;
  deleteFulfillment?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentDeleteStatus']>, ParentType, ContextType, RequireFields<FulfillmentMutationDeleteFulfillmentArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceFulfillmentFulfillmentResultsResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceFulfillmentFulfillmentResults'] = ResolversParentTypes['ProtoIoRestorecommerceFulfillmentFulfillmentResults']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentFulfillmentResults']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentFulfillmentResultsResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentFulfillmentResults'] = ResolversParentTypes['IoRestorecommerceFulfillmentFulfillmentResults']> = ResolversObject<{
  fulfillmentResults?: Resolver<Array<ResolversTypes['IoRestorecommerceFulfillmentResponseDetailsList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentResponseDetailsListResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentResponseDetailsList'] = ResolversParentTypes['IoRestorecommerceFulfillmentResponseDetailsList']> = ResolversObject<{
  Status?: Resolver<ResolversTypes['IoRestorecommerceFulfillmentFulfillmentStatus'], ParentType, ContextType>;
  error?: Resolver<ResolversTypes['IoRestorecommerceFulfillmentErrorList'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentFulfillmentStatusResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentFulfillmentStatus'] = ResolversParentTypes['IoRestorecommerceFulfillmentFulfillmentStatus']> = ResolversObject<{
  OrderId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  OrderStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['IoRestorecommerceAuthSubject'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthSubjectResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthSubject'] = ResolversParentTypes['IoRestorecommerceAuthSubject']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  scope?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roleAssociations?: Resolver<Array<ResolversTypes['IoRestorecommerceAuthRoleAssociation']>, ParentType, ContextType>;
  hierarchicalScopes?: Resolver<Array<ResolversTypes['IoRestorecommerceAuthHierarchicalScope']>, ParentType, ContextType>;
  unauthenticated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthRoleAssociationResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthRoleAssociation'] = ResolversParentTypes['IoRestorecommerceAuthRoleAssociation']> = ResolversObject<{
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  attributes?: Resolver<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthHierarchicalScopeResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthHierarchicalScope'] = ResolversParentTypes['IoRestorecommerceAuthHierarchicalScope']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['IoRestorecommerceAuthHierarchicalScope']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentErrorListResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentErrorList'] = ResolversParentTypes['IoRestorecommerceFulfillmentErrorList']> = ResolversObject<{
  code?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceFulfillmentDeleteStatusResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceFulfillmentDeleteStatus'] = ResolversParentTypes['ProtoIoRestorecommerceFulfillmentDeleteStatus']> = ResolversObject<{
  status?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentDeleteStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentDeleteStatusResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentDeleteStatus'] = ResolversParentTypes['IoRestorecommerceFulfillmentDeleteStatus']> = ResolversObject<{
  deleteStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  error?: Resolver<ResolversTypes['IoRestorecommerceFulfillmentError'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = FulfillmentContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  FulfillmentQuery?: FulfillmentQueryResolvers<ContextType>;
  ProtoIoRestorecommerceFulfillmentLabelResult?: ProtoIoRestorecommerceFulfillmentLabelResultResolvers<ContextType>;
  StatusType?: StatusTypeResolvers<ContextType>;
  IoRestorecommerceFulfillmentLabelResult?: IoRestorecommerceFulfillmentLabelResultResolvers<ContextType>;
  IoRestorecommerceFulfillmentLabels?: IoRestorecommerceFulfillmentLabelsResolvers<ContextType>;
  IoRestorecommerceFulfillmentError?: IoRestorecommerceFulfillmentErrorResolvers<ContextType>;
  ProtoIoRestorecommerceFulfillmentStatus?: ProtoIoRestorecommerceFulfillmentStatusResolvers<ContextType>;
  IoRestorecommerceFulfillmentStatus?: IoRestorecommerceFulfillmentStatusResolvers<ContextType>;
  IoRestorecommerceFulfillmentShipmentStatus?: IoRestorecommerceFulfillmentShipmentStatusResolvers<ContextType>;
  IoRestorecommerceFulfillmentShipmentData?: IoRestorecommerceFulfillmentShipmentDataResolvers<ContextType>;
  IoRestorecommerceFulfillmentEventDetails?: IoRestorecommerceFulfillmentEventDetailsResolvers<ContextType>;
  ProtoIoRestorecommerceFulfillmentAllFulfillments?: ProtoIoRestorecommerceFulfillmentAllFulfillmentsResolvers<ContextType>;
  IoRestorecommerceFulfillmentAllFulfillments?: IoRestorecommerceFulfillmentAllFulfillmentsResolvers<ContextType>;
  IoRestorecommerceFulfillmentItems?: IoRestorecommerceFulfillmentItemsResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  FulfillmentMutation?: FulfillmentMutationResolvers<ContextType>;
  ProtoIoRestorecommerceFulfillmentFulfillmentResults?: ProtoIoRestorecommerceFulfillmentFulfillmentResultsResolvers<ContextType>;
  IoRestorecommerceFulfillmentFulfillmentResults?: IoRestorecommerceFulfillmentFulfillmentResultsResolvers<ContextType>;
  IoRestorecommerceFulfillmentResponseDetailsList?: IoRestorecommerceFulfillmentResponseDetailsListResolvers<ContextType>;
  IoRestorecommerceFulfillmentFulfillmentStatus?: IoRestorecommerceFulfillmentFulfillmentStatusResolvers<ContextType>;
  IoRestorecommerceAuthSubject?: IoRestorecommerceAuthSubjectResolvers<ContextType>;
  IoRestorecommerceAuthRoleAssociation?: IoRestorecommerceAuthRoleAssociationResolvers<ContextType>;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
  IoRestorecommerceAuthHierarchicalScope?: IoRestorecommerceAuthHierarchicalScopeResolvers<ContextType>;
  IoRestorecommerceFulfillmentErrorList?: IoRestorecommerceFulfillmentErrorListResolvers<ContextType>;
  ProtoIoRestorecommerceFulfillmentDeleteStatus?: ProtoIoRestorecommerceFulfillmentDeleteStatusResolvers<ContextType>;
  IoRestorecommerceFulfillmentDeleteStatus?: IoRestorecommerceFulfillmentDeleteStatusResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = FulfillmentContext> = Resolvers<ContextType>;
