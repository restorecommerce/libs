import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { FulfillmentContext } from '../interfaces';
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

export type Query = {
  __typename?: 'Query';
  fulfillment: FulfillmentQuery;
};

export type FulfillmentQuery = {
  __typename?: 'FulfillmentQuery';
  fulfillment: FulfillmentFulfillmentQuery;
  fulfillment_courier: FulfillmentFulfillmentCourierQuery;
};

export type FulfillmentFulfillmentQuery = {
  __typename?: 'FulfillmentFulfillmentQuery';
  getLabels?: Maybe<ProtoIoRestorecommerceFulfillmentLabelResult>;
  trackFulfillment?: Maybe<ProtoIoRestorecommerceFulfillmentStatus>;
  getAllFulfillments?: Maybe<ProtoIoRestorecommerceFulfillmentAllFulfillments>;
};


export type FulfillmentFulfillmentQueryGetLabelsArgs = {
  input: IIoRestorecommerceFulfillmentOrderId;
};


export type FulfillmentFulfillmentQueryTrackFulfillmentArgs = {
  input: IIoRestorecommerceFulfillmentTrackingNumber;
};


export type FulfillmentFulfillmentQueryGetAllFulfillmentsArgs = {
  input: IIoRestorecommerceFulfillmentFulfillmentStatus;
};

export type ProtoIoRestorecommerceFulfillmentLabelResult = {
  __typename?: 'ProtoIoRestorecommerceFulfillmentLabelResult';
  operationStatus: StatusType;
  details?: Maybe<IoRestorecommerceFulfillmentLabelResult>;
};

/** Objects with error returned for GraphQL operations */
export type StatusType = {
  __typename?: 'StatusType';
  /** Status code */
  code: Scalars['Int'];
  /** Status message description */
  message?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceFulfillmentLabelResult = {
  __typename?: 'IoRestorecommerceFulfillmentLabelResult';
  labels?: Maybe<Array<IoRestorecommerceFulfillmentLabels>>;
  error?: Maybe<IoRestorecommerceFulfillmentError>;
};

export type IoRestorecommerceFulfillmentLabels = {
  __typename?: 'IoRestorecommerceFulfillmentLabels';
  labelUrl?: Maybe<Scalars['String']>;
  shipmentNumber?: Maybe<Scalars['String']>;
  exportLabelUrl?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceFulfillmentError = {
  __typename?: 'IoRestorecommerceFulfillmentError';
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceFulfillmentOrderId = {
  orderId?: Maybe<Scalars['String']>;
};

export type ProtoIoRestorecommerceFulfillmentStatus = {
  __typename?: 'ProtoIoRestorecommerceFulfillmentStatus';
  operationStatus: StatusType;
  details?: Maybe<IoRestorecommerceFulfillmentStatus>;
};

export type IoRestorecommerceFulfillmentStatus = {
  __typename?: 'IoRestorecommerceFulfillmentStatus';
  Status?: Maybe<Scalars['String']>;
  shipmentStatus?: Maybe<Array<IoRestorecommerceFulfillmentShipmentStatus>>;
  OrderId?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceFulfillmentShipmentStatus = {
  __typename?: 'IoRestorecommerceFulfillmentShipmentStatus';
  ShipmentData?: Maybe<Array<IoRestorecommerceFulfillmentShipmentData>>;
};

export type IoRestorecommerceFulfillmentShipmentData = {
  __typename?: 'IoRestorecommerceFulfillmentShipmentData';
  ShipmentNumber?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['String']>;
  ShortStatus?: Maybe<Scalars['String']>;
  TimeStamp?: Maybe<Scalars['String']>;
  Receiver?: Maybe<Scalars['String']>;
  ReceipientName?: Maybe<Scalars['String']>;
  Recepientemail?: Maybe<Scalars['String']>;
  EventDetails?: Maybe<Array<IoRestorecommerceFulfillmentEventDetails>>;
  CustomerReference?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceFulfillmentEventDetails = {
  __typename?: 'IoRestorecommerceFulfillmentEventDetails';
  Status?: Maybe<Scalars['String']>;
  Location?: Maybe<Scalars['String']>;
  Time?: Maybe<Scalars['String']>;
  Coutnry?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceFulfillmentTrackingNumber = {
  orderId?: Maybe<Scalars['String']>;
  shipmentType?: Maybe<Scalars['String']>;
};

export type ProtoIoRestorecommerceFulfillmentAllFulfillments = {
  __typename?: 'ProtoIoRestorecommerceFulfillmentAllFulfillments';
  operationStatus: StatusType;
  details?: Maybe<IoRestorecommerceFulfillmentAllFulfillments>;
};

export type IoRestorecommerceFulfillmentAllFulfillments = {
  __typename?: 'IoRestorecommerceFulfillmentAllFulfillments';
  items?: Maybe<Array<IoRestorecommerceFulfillmentItems>>;
};

export type IoRestorecommerceFulfillmentItems = {
  __typename?: 'IoRestorecommerceFulfillmentItems';
  fulfillmentStatus?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['String']>;
  serviceType?: Maybe<Scalars['String']>;
  shipmentNumber?: Maybe<Array<Scalars['String']>>;
};

export type IIoRestorecommerceFulfillmentFulfillmentStatus = {
  OrderId?: Maybe<Scalars['String']>;
  OrderStatus?: Maybe<Scalars['String']>;
};

export type FulfillmentFulfillmentCourierQuery = {
  __typename?: 'FulfillmentFulfillmentCourierQuery';
  Read?: Maybe<ProtoIoRestorecommerceFulfillmentCourierCourierListResponse>;
};


export type FulfillmentFulfillmentCourierQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceFulfillmentCourierCourierListResponse = {
  __typename?: 'ProtoIoRestorecommerceFulfillmentCourierCourierListResponse';
  operationStatus: StatusType;
  details?: Maybe<IoRestorecommerceFulfillmentCourierCourierListResponse>;
};

export type IoRestorecommerceFulfillmentCourierCourierListResponse = {
  __typename?: 'IoRestorecommerceFulfillmentCourierCourierListResponse';
  items?: Maybe<Array<IoRestorecommerceFulfillmentCourierCourierResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceFulfillmentCourierCourierResponse = {
  __typename?: 'IoRestorecommerceFulfillmentCourierCourierResponse';
  payload?: Maybe<IoRestorecommerceFulfillmentCourierCourier>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceFulfillmentCourierCourier = {
  __typename?: 'IoRestorecommerceFulfillmentCourierCourier';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  id?: Maybe<Scalars['String']>;
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
  operator?: Maybe<IoRestorecommerceResourcebaseFilterOpOperator>;
};

export type IIoRestorecommerceResourcebaseFilter = {
  field?: Maybe<Scalars['String']>;
  operation?: Maybe<IoRestorecommerceResourcebaseFilterOperation>;
  value?: Maybe<Scalars['String']>;
  type?: Maybe<IoRestorecommerceResourcebaseFilterValueType>;
  filters?: Maybe<Array<IIoRestorecommerceFilterFilterOp>>;
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
  filter?: Maybe<Array<IIoRestorecommerceFilterFilter>>;
  operator?: Maybe<IoRestorecommerceFilterFilterOpOperator>;
};

export type IIoRestorecommerceFilterFilter = {
  field?: Maybe<Scalars['String']>;
  operation?: Maybe<IoRestorecommerceFilterFilterOperation>;
  value?: Maybe<Scalars['String']>;
  type?: Maybe<IoRestorecommerceFilterFilterValueType>;
  filters?: Maybe<Array<IIoRestorecommerceFilterFilterOp>>;
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
  name?: Maybe<Scalars['String']>;
  include?: Maybe<Scalars['Boolean']>;
};

export type IGoogleProtobufAny = {
  typeUrl?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Upload']>;
};


export type Mutation = {
  __typename?: 'Mutation';
  fulfillment: FulfillmentMutation;
};

export type FulfillmentMutation = {
  __typename?: 'FulfillmentMutation';
  fulfillment: FulfillmentFulfillmentMutation;
  fulfillment_courier: FulfillmentFulfillmentCourierMutation;
};

export type FulfillmentFulfillmentMutation = {
  __typename?: 'FulfillmentFulfillmentMutation';
  CreateFulfillment?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentResults>;
  deleteFulfillment?: Maybe<ProtoIoRestorecommerceFulfillmentDeleteStatus>;
};


export type FulfillmentFulfillmentMutationCreateFulfillmentArgs = {
  input: IIoRestorecommerceFulfillmentShipmentOrderLists;
};


export type FulfillmentFulfillmentMutationDeleteFulfillmentArgs = {
  input: IIoRestorecommerceFulfillmentOrderId;
};

export type ProtoIoRestorecommerceFulfillmentFulfillmentResults = {
  __typename?: 'ProtoIoRestorecommerceFulfillmentFulfillmentResults';
  operationStatus: StatusType;
  details?: Maybe<IoRestorecommerceFulfillmentFulfillmentResults>;
};

export type IoRestorecommerceFulfillmentFulfillmentResults = {
  __typename?: 'IoRestorecommerceFulfillmentFulfillmentResults';
  fulfillmentResults?: Maybe<Array<IoRestorecommerceFulfillmentResponseDetailsList>>;
};

export type IoRestorecommerceFulfillmentResponseDetailsList = {
  __typename?: 'IoRestorecommerceFulfillmentResponseDetailsList';
  Status?: Maybe<IoRestorecommerceFulfillmentFulfillmentStatus>;
  error?: Maybe<IoRestorecommerceFulfillmentErrorList>;
};

export type IoRestorecommerceFulfillmentFulfillmentStatus = {
  __typename?: 'IoRestorecommerceFulfillmentFulfillmentStatus';
  OrderId?: Maybe<Scalars['String']>;
  OrderStatus?: Maybe<Scalars['String']>;
  subject?: Maybe<IoRestorecommerceAuthSubject>;
};

export type IoRestorecommerceAuthSubject = {
  __typename?: 'IoRestorecommerceAuthSubject';
  id?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  roleAssociations?: Maybe<Array<IoRestorecommerceAuthRoleAssociation>>;
  hierarchicalScopes?: Maybe<Array<IoRestorecommerceAuthHierarchicalScope>>;
  unauthenticated?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceAuthRoleAssociation = {
  __typename?: 'IoRestorecommerceAuthRoleAssociation';
  role?: Maybe<Scalars['String']>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  id?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceAuthHierarchicalScope = {
  __typename?: 'IoRestorecommerceAuthHierarchicalScope';
  id?: Maybe<Scalars['String']>;
  children?: Maybe<Array<IoRestorecommerceAuthHierarchicalScope>>;
  role?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceFulfillmentErrorList = {
  __typename?: 'IoRestorecommerceFulfillmentErrorList';
  code?: Maybe<Array<Scalars['String']>>;
  message?: Maybe<Array<Scalars['String']>>;
};

export type IIoRestorecommerceFulfillmentShipmentOrderLists = {
  ShipmentOrder?: Maybe<IIoRestorecommerceFulfillmentShipmentOrder>;
};

export type IIoRestorecommerceFulfillmentShipmentOrder = {
  fulfillmentList?: Maybe<Array<IIoRestorecommerceFulfillmentFulfillmentList>>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
};

export type IIoRestorecommerceFulfillmentFulfillmentList = {
  Shipment?: Maybe<IIoRestorecommerceFulfillmentShipment>;
  OrderId?: Maybe<Scalars['String']>;
  fulFillmentService?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceFulfillmentShipment = {
  ShipmentDetails?: Maybe<Array<IIoRestorecommerceFulfillmentShipmentDetails>>;
  customerReference?: Maybe<Scalars['String']>;
  Receiver?: Maybe<IIoRestorecommerceFulfillmentReceiver>;
  Shipper?: Maybe<IIoRestorecommerceFulfillmentShipper>;
  returnShipmentAccountNumber?: Maybe<Scalars['String']>;
  returnShipmentReference?: Maybe<Scalars['String']>;
  Notification?: Maybe<IIoRestorecommerceFulfillmentNotification>;
};

export type IIoRestorecommerceFulfillmentShipmentDetails = {
  ShipmentItem?: Maybe<IIoRestorecommerceFulfillmentShipmentItem>;
};

export type IIoRestorecommerceFulfillmentShipmentItem = {
  weightInKG?: Maybe<Scalars['Float']>;
  lengthInCM?: Maybe<Scalars['String']>;
  widthInCM?: Maybe<Scalars['String']>;
  heightInCM?: Maybe<Scalars['String']>;
  ExportDocument?: Maybe<IIoRestorecommerceFulfillmentExportDocument>;
};

export type IIoRestorecommerceFulfillmentExportDocument = {
  invoiceNumber?: Maybe<Scalars['String']>;
  exportType?: Maybe<Scalars['String']>;
  exportTypeDescription?: Maybe<Scalars['String']>;
  termsOfTrade?: Maybe<Scalars['String']>;
  placeOfCommital?: Maybe<Scalars['String']>;
  additionalFee?: Maybe<Scalars['Float']>;
  ExportDocPosition?: Maybe<IIoRestorecommerceFulfillmentExportDocPosition>;
};

export type IIoRestorecommerceFulfillmentExportDocPosition = {
  description?: Maybe<Scalars['String']>;
  countryCodeOrigin?: Maybe<Scalars['String']>;
  customsTariffNumber?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  netWeightInKG?: Maybe<Scalars['Int']>;
  customsValue?: Maybe<Scalars['Float']>;
};

export type IIoRestorecommerceFulfillmentReceiver = {
  name1?: Maybe<Scalars['String']>;
  Address?: Maybe<IIoRestorecommerceFulfillmentAddress>;
  Communication?: Maybe<IIoRestorecommerceFulfillmentCommunication>;
};

export type IIoRestorecommerceFulfillmentAddress = {
  streetName?: Maybe<Scalars['String']>;
  streetNumber?: Maybe<Scalars['String']>;
  addressAddition?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  Origin?: Maybe<IIoRestorecommerceFulfillmentOrigin>;
};

export type IIoRestorecommerceFulfillmentOrigin = {
  country?: Maybe<Scalars['String']>;
  countryISOCode?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceFulfillmentCommunication = {
  phone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceFulfillmentShipper = {
  Name?: Maybe<IIoRestorecommerceFulfillmentName>;
  Address?: Maybe<IIoRestorecommerceFulfillmentAddress>;
  Communication?: Maybe<IIoRestorecommerceFulfillmentCommunication>;
};

export type IIoRestorecommerceFulfillmentName = {
  name1?: Maybe<Scalars['String']>;
};

export type IIoRestorecommerceFulfillmentNotification = {
  recipientEmailAddress?: Maybe<Scalars['String']>;
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

export type ProtoIoRestorecommerceFulfillmentDeleteStatus = {
  __typename?: 'ProtoIoRestorecommerceFulfillmentDeleteStatus';
  operationStatus: StatusType;
  details?: Maybe<IoRestorecommerceFulfillmentDeleteStatus>;
};

export type IoRestorecommerceFulfillmentDeleteStatus = {
  __typename?: 'IoRestorecommerceFulfillmentDeleteStatus';
  deleteStatus?: Maybe<Scalars['String']>;
  error?: Maybe<IoRestorecommerceFulfillmentError>;
};

export type FulfillmentFulfillmentCourierMutation = {
  __typename?: 'FulfillmentFulfillmentCourierMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceFulfillmentCourierCourierListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type FulfillmentFulfillmentCourierMutationMutateArgs = {
  input: IIoRestorecommerceFulfillmentCourierCourierList;
};


export type FulfillmentFulfillmentCourierMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceFulfillmentCourierCourierList = {
  items?: Maybe<Array<IIoRestorecommerceFulfillmentCourierCourier>>;
  totalCount?: Maybe<Scalars['Int']>;
  mode?: Maybe<ModeType>;
};

export type IIoRestorecommerceFulfillmentCourierCourier = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  meta?: Maybe<IIoRestorecommerceMetaMeta>;
  id?: Maybe<Scalars['String']>;
};

export enum ModeType {
  Create = 'CREATE',
  Update = 'UPDATE',
  Upsert = 'UPSERT'
}

export type ProtoIoRestorecommerceResourcebaseDeleteResponse = {
  __typename?: 'ProtoIoRestorecommerceResourcebaseDeleteResponse';
  operationStatus: StatusType;
  details?: Maybe<IoRestorecommerceResourcebaseDeleteResponse>;
};

export type IoRestorecommerceResourcebaseDeleteResponse = {
  __typename?: 'IoRestorecommerceResourcebaseDeleteResponse';
  status?: Maybe<Array<IoRestorecommerceStatusStatus>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IIoRestorecommerceResourcebaseDeleteRequest = {
  collection?: Maybe<Scalars['Boolean']>;
  ids?: Maybe<Array<Scalars['String']>>;
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
  FulfillmentFulfillmentQuery: ResolverTypeWrapper<FulfillmentFulfillmentQuery>;
  ProtoIoRestorecommerceFulfillmentLabelResult: ResolverTypeWrapper<ProtoIoRestorecommerceFulfillmentLabelResult>;
  StatusType: ResolverTypeWrapper<StatusType>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  IoRestorecommerceFulfillmentLabelResult: ResolverTypeWrapper<IoRestorecommerceFulfillmentLabelResult>;
  IoRestorecommerceFulfillmentLabels: ResolverTypeWrapper<IoRestorecommerceFulfillmentLabels>;
  IoRestorecommerceFulfillmentError: ResolverTypeWrapper<IoRestorecommerceFulfillmentError>;
  IIoRestorecommerceFulfillmentOrderId: IIoRestorecommerceFulfillmentOrderId;
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
  FulfillmentFulfillmentCourierQuery: ResolverTypeWrapper<FulfillmentFulfillmentCourierQuery>;
  ProtoIoRestorecommerceFulfillmentCourierCourierListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceFulfillmentCourierCourierListResponse>;
  IoRestorecommerceFulfillmentCourierCourierListResponse: ResolverTypeWrapper<IoRestorecommerceFulfillmentCourierCourierListResponse>;
  IoRestorecommerceFulfillmentCourierCourierResponse: ResolverTypeWrapper<IoRestorecommerceFulfillmentCourierCourierResponse>;
  IoRestorecommerceFulfillmentCourierCourier: ResolverTypeWrapper<IoRestorecommerceFulfillmentCourierCourier>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  IGoogleProtobufAny: IGoogleProtobufAny;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  Mutation: ResolverTypeWrapper<{}>;
  FulfillmentMutation: ResolverTypeWrapper<FulfillmentMutation>;
  FulfillmentFulfillmentMutation: ResolverTypeWrapper<FulfillmentFulfillmentMutation>;
  ProtoIoRestorecommerceFulfillmentFulfillmentResults: ResolverTypeWrapper<ProtoIoRestorecommerceFulfillmentFulfillmentResults>;
  IoRestorecommerceFulfillmentFulfillmentResults: ResolverTypeWrapper<IoRestorecommerceFulfillmentFulfillmentResults>;
  IoRestorecommerceFulfillmentResponseDetailsList: ResolverTypeWrapper<IoRestorecommerceFulfillmentResponseDetailsList>;
  IoRestorecommerceFulfillmentFulfillmentStatus: ResolverTypeWrapper<IoRestorecommerceFulfillmentFulfillmentStatus>;
  IoRestorecommerceAuthSubject: ResolverTypeWrapper<IoRestorecommerceAuthSubject>;
  IoRestorecommerceAuthRoleAssociation: ResolverTypeWrapper<IoRestorecommerceAuthRoleAssociation>;
  IoRestorecommerceAuthHierarchicalScope: ResolverTypeWrapper<IoRestorecommerceAuthHierarchicalScope>;
  IoRestorecommerceFulfillmentErrorList: ResolverTypeWrapper<IoRestorecommerceFulfillmentErrorList>;
  IIoRestorecommerceFulfillmentShipmentOrderLists: IIoRestorecommerceFulfillmentShipmentOrderLists;
  IIoRestorecommerceFulfillmentShipmentOrder: IIoRestorecommerceFulfillmentShipmentOrder;
  IIoRestorecommerceFulfillmentFulfillmentList: IIoRestorecommerceFulfillmentFulfillmentList;
  IIoRestorecommerceFulfillmentShipment: IIoRestorecommerceFulfillmentShipment;
  IIoRestorecommerceFulfillmentShipmentDetails: IIoRestorecommerceFulfillmentShipmentDetails;
  IIoRestorecommerceFulfillmentShipmentItem: IIoRestorecommerceFulfillmentShipmentItem;
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
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  ProtoIoRestorecommerceFulfillmentDeleteStatus: ResolverTypeWrapper<ProtoIoRestorecommerceFulfillmentDeleteStatus>;
  IoRestorecommerceFulfillmentDeleteStatus: ResolverTypeWrapper<IoRestorecommerceFulfillmentDeleteStatus>;
  FulfillmentFulfillmentCourierMutation: ResolverTypeWrapper<FulfillmentFulfillmentCourierMutation>;
  IIoRestorecommerceFulfillmentCourierCourierList: IIoRestorecommerceFulfillmentCourierCourierList;
  IIoRestorecommerceFulfillmentCourierCourier: IIoRestorecommerceFulfillmentCourierCourier;
  ModeType: ModeType;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  IoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<IoRestorecommerceResourcebaseDeleteResponse>;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  FulfillmentQuery: FulfillmentQuery;
  FulfillmentFulfillmentQuery: FulfillmentFulfillmentQuery;
  ProtoIoRestorecommerceFulfillmentLabelResult: ProtoIoRestorecommerceFulfillmentLabelResult;
  StatusType: StatusType;
  Int: Scalars['Int'];
  String: Scalars['String'];
  IoRestorecommerceFulfillmentLabelResult: IoRestorecommerceFulfillmentLabelResult;
  IoRestorecommerceFulfillmentLabels: IoRestorecommerceFulfillmentLabels;
  IoRestorecommerceFulfillmentError: IoRestorecommerceFulfillmentError;
  IIoRestorecommerceFulfillmentOrderId: IIoRestorecommerceFulfillmentOrderId;
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
  FulfillmentFulfillmentCourierQuery: FulfillmentFulfillmentCourierQuery;
  ProtoIoRestorecommerceFulfillmentCourierCourierListResponse: ProtoIoRestorecommerceFulfillmentCourierCourierListResponse;
  IoRestorecommerceFulfillmentCourierCourierListResponse: IoRestorecommerceFulfillmentCourierCourierListResponse;
  IoRestorecommerceFulfillmentCourierCourierResponse: IoRestorecommerceFulfillmentCourierCourierResponse;
  IoRestorecommerceFulfillmentCourierCourier: IoRestorecommerceFulfillmentCourierCourier;
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  Float: Scalars['Float'];
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  IoRestorecommerceStatusStatus: IoRestorecommerceStatusStatus;
  IoRestorecommerceStatusOperationStatus: IoRestorecommerceStatusOperationStatus;
  IIoRestorecommerceResourcebaseReadRequest: IIoRestorecommerceResourcebaseReadRequest;
  IIoRestorecommerceResourcebaseSort: IIoRestorecommerceResourcebaseSort;
  IIoRestorecommerceResourcebaseFilterOp: IIoRestorecommerceResourcebaseFilterOp;
  IIoRestorecommerceResourcebaseFilter: IIoRestorecommerceResourcebaseFilter;
  IIoRestorecommerceFilterFilterOp: IIoRestorecommerceFilterFilterOp;
  IIoRestorecommerceFilterFilter: IIoRestorecommerceFilterFilter;
  IIoRestorecommerceResourcebaseFieldFilter: IIoRestorecommerceResourcebaseFieldFilter;
  Boolean: Scalars['Boolean'];
  IGoogleProtobufAny: IGoogleProtobufAny;
  Upload: Scalars['Upload'];
  Mutation: {};
  FulfillmentMutation: FulfillmentMutation;
  FulfillmentFulfillmentMutation: FulfillmentFulfillmentMutation;
  ProtoIoRestorecommerceFulfillmentFulfillmentResults: ProtoIoRestorecommerceFulfillmentFulfillmentResults;
  IoRestorecommerceFulfillmentFulfillmentResults: IoRestorecommerceFulfillmentFulfillmentResults;
  IoRestorecommerceFulfillmentResponseDetailsList: IoRestorecommerceFulfillmentResponseDetailsList;
  IoRestorecommerceFulfillmentFulfillmentStatus: IoRestorecommerceFulfillmentFulfillmentStatus;
  IoRestorecommerceAuthSubject: IoRestorecommerceAuthSubject;
  IoRestorecommerceAuthRoleAssociation: IoRestorecommerceAuthRoleAssociation;
  IoRestorecommerceAuthHierarchicalScope: IoRestorecommerceAuthHierarchicalScope;
  IoRestorecommerceFulfillmentErrorList: IoRestorecommerceFulfillmentErrorList;
  IIoRestorecommerceFulfillmentShipmentOrderLists: IIoRestorecommerceFulfillmentShipmentOrderLists;
  IIoRestorecommerceFulfillmentShipmentOrder: IIoRestorecommerceFulfillmentShipmentOrder;
  IIoRestorecommerceFulfillmentFulfillmentList: IIoRestorecommerceFulfillmentFulfillmentList;
  IIoRestorecommerceFulfillmentShipment: IIoRestorecommerceFulfillmentShipment;
  IIoRestorecommerceFulfillmentShipmentDetails: IIoRestorecommerceFulfillmentShipmentDetails;
  IIoRestorecommerceFulfillmentShipmentItem: IIoRestorecommerceFulfillmentShipmentItem;
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
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  ProtoIoRestorecommerceFulfillmentDeleteStatus: ProtoIoRestorecommerceFulfillmentDeleteStatus;
  IoRestorecommerceFulfillmentDeleteStatus: IoRestorecommerceFulfillmentDeleteStatus;
  FulfillmentFulfillmentCourierMutation: FulfillmentFulfillmentCourierMutation;
  IIoRestorecommerceFulfillmentCourierCourierList: IIoRestorecommerceFulfillmentCourierCourierList;
  IIoRestorecommerceFulfillmentCourierCourier: IIoRestorecommerceFulfillmentCourierCourier;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ProtoIoRestorecommerceResourcebaseDeleteResponse;
  IoRestorecommerceResourcebaseDeleteResponse: IoRestorecommerceResourcebaseDeleteResponse;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
}>;

export type QueryResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  fulfillment?: Resolver<ResolversTypes['FulfillmentQuery'], ParentType, ContextType>;
}>;

export type FulfillmentQueryResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['FulfillmentQuery'] = ResolversParentTypes['FulfillmentQuery']> = ResolversObject<{
  fulfillment?: Resolver<ResolversTypes['FulfillmentFulfillmentQuery'], ParentType, ContextType>;
  fulfillment_courier?: Resolver<ResolversTypes['FulfillmentFulfillmentCourierQuery'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FulfillmentFulfillmentQueryResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['FulfillmentFulfillmentQuery'] = ResolversParentTypes['FulfillmentFulfillmentQuery']> = ResolversObject<{
  getLabels?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentLabelResult']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentQueryGetLabelsArgs, 'input'>>;
  trackFulfillment?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentStatus']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentQueryTrackFulfillmentArgs, 'input'>>;
  getAllFulfillments?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentAllFulfillments']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentQueryGetAllFulfillmentsArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceFulfillmentLabelResultResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceFulfillmentLabelResult'] = ResolversParentTypes['ProtoIoRestorecommerceFulfillmentLabelResult']> = ResolversObject<{
  operationStatus?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentLabelResult']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StatusTypeResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['StatusType'] = ResolversParentTypes['StatusType']> = ResolversObject<{
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentLabelResultResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentLabelResult'] = ResolversParentTypes['IoRestorecommerceFulfillmentLabelResult']> = ResolversObject<{
  labels?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentLabels']>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentLabelsResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentLabels'] = ResolversParentTypes['IoRestorecommerceFulfillmentLabels']> = ResolversObject<{
  labelUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shipmentNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exportLabelUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentErrorResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentError'] = ResolversParentTypes['IoRestorecommerceFulfillmentError']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceFulfillmentStatusResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceFulfillmentStatus'] = ResolversParentTypes['ProtoIoRestorecommerceFulfillmentStatus']> = ResolversObject<{
  operationStatus?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentStatusResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentStatus'] = ResolversParentTypes['IoRestorecommerceFulfillmentStatus']> = ResolversObject<{
  Status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shipmentStatus?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentShipmentStatus']>>, ParentType, ContextType>;
  OrderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentShipmentStatusResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentShipmentStatus'] = ResolversParentTypes['IoRestorecommerceFulfillmentShipmentStatus']> = ResolversObject<{
  ShipmentData?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentShipmentData']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentShipmentDataResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentShipmentData'] = ResolversParentTypes['IoRestorecommerceFulfillmentShipmentData']> = ResolversObject<{
  ShipmentNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ShortStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  TimeStamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Receiver?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ReceipientName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Recepientemail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  EventDetails?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentEventDetails']>>, ParentType, ContextType>;
  CustomerReference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentEventDetailsResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentEventDetails'] = ResolversParentTypes['IoRestorecommerceFulfillmentEventDetails']> = ResolversObject<{
  Status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  Coutnry?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceFulfillmentAllFulfillmentsResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceFulfillmentAllFulfillments'] = ResolversParentTypes['ProtoIoRestorecommerceFulfillmentAllFulfillments']> = ResolversObject<{
  operationStatus?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentAllFulfillments']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentAllFulfillmentsResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentAllFulfillments'] = ResolversParentTypes['IoRestorecommerceFulfillmentAllFulfillments']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentItems']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentItemsResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentItems'] = ResolversParentTypes['IoRestorecommerceFulfillmentItems']> = ResolversObject<{
  fulfillmentStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  serviceType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shipmentNumber?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FulfillmentFulfillmentCourierQueryResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['FulfillmentFulfillmentCourierQuery'] = ResolversParentTypes['FulfillmentFulfillmentCourierQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentCourierCourierListResponse']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentCourierQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceFulfillmentCourierCourierListResponseResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceFulfillmentCourierCourierListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceFulfillmentCourierCourierListResponse']> = ResolversObject<{
  operationStatus?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentCourierCourierListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentCourierCourierListResponseResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentCourierCourierListResponse'] = ResolversParentTypes['IoRestorecommerceFulfillmentCourierCourierListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentCourierCourierResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentCourierCourierResponseResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentCourierCourierResponse'] = ResolversParentTypes['IoRestorecommerceFulfillmentCourierCourierResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentCourierCourier']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentCourierCourierResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentCourierCourier'] = ResolversParentTypes['IoRestorecommerceFulfillmentCourierCourier']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceMetaMetaResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceMetaMeta'] = ResolversParentTypes['IoRestorecommerceMetaMeta']> = ResolversObject<{
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modified?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modifiedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusStatusResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusStatus'] = ResolversParentTypes['IoRestorecommerceStatusStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusOperationStatusResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusOperationStatus'] = ResolversParentTypes['IoRestorecommerceStatusOperationStatus']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseSortSortOrderResolvers = { UNSORTED: 'undefined', ASCENDING: 1, DESCENDING: 2 };

export type IoRestorecommerceResourcebaseFilterOperationResolvers = { eq: 'undefined', lt: 1, lte: 2, gt: 3, gte: 4, isEmpty: 5, iLike: 6, in: 7, neq: 8 };

export type IoRestorecommerceResourcebaseFilterValueTypeResolvers = { STRING: 'undefined', NUMBER: 1, BOOLEAN: 2, DATE: 3, ARRAY: 4 };

export type IoRestorecommerceFilterFilterOperationResolvers = { eq: 'undefined', lt: 1, lte: 2, gt: 3, gte: 4, isEmpty: 5, iLike: 6, in: 7, neq: 8 };

export type IoRestorecommerceFilterFilterValueTypeResolvers = { STRING: 'undefined', NUMBER: 1, BOOLEAN: 2, DATE: 3, ARRAY: 4 };

export type IoRestorecommerceFilterFilterOpOperatorResolvers = { and: 'undefined', or: 1 };

export type IoRestorecommerceResourcebaseFilterOpOperatorResolvers = { and: 'undefined', or: 1 };

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type MutationResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  fulfillment?: Resolver<ResolversTypes['FulfillmentMutation'], ParentType, ContextType>;
}>;

export type FulfillmentMutationResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['FulfillmentMutation'] = ResolversParentTypes['FulfillmentMutation']> = ResolversObject<{
  fulfillment?: Resolver<ResolversTypes['FulfillmentFulfillmentMutation'], ParentType, ContextType>;
  fulfillment_courier?: Resolver<ResolversTypes['FulfillmentFulfillmentCourierMutation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FulfillmentFulfillmentMutationResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['FulfillmentFulfillmentMutation'] = ResolversParentTypes['FulfillmentFulfillmentMutation']> = ResolversObject<{
  CreateFulfillment?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentFulfillmentResults']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentMutationCreateFulfillmentArgs, 'input'>>;
  deleteFulfillment?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentDeleteStatus']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentMutationDeleteFulfillmentArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceFulfillmentFulfillmentResultsResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceFulfillmentFulfillmentResults'] = ResolversParentTypes['ProtoIoRestorecommerceFulfillmentFulfillmentResults']> = ResolversObject<{
  operationStatus?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentFulfillmentResults']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentFulfillmentResultsResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentFulfillmentResults'] = ResolversParentTypes['IoRestorecommerceFulfillmentFulfillmentResults']> = ResolversObject<{
  fulfillmentResults?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentResponseDetailsList']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentResponseDetailsListResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentResponseDetailsList'] = ResolversParentTypes['IoRestorecommerceFulfillmentResponseDetailsList']> = ResolversObject<{
  Status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentFulfillmentStatus']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentErrorList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentFulfillmentStatusResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentFulfillmentStatus'] = ResolversParentTypes['IoRestorecommerceFulfillmentFulfillmentStatus']> = ResolversObject<{
  OrderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  OrderStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAuthSubject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthSubjectResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthSubject'] = ResolversParentTypes['IoRestorecommerceAuthSubject']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roleAssociations?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAuthRoleAssociation']>>, ParentType, ContextType>;
  hierarchicalScopes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAuthHierarchicalScope']>>, ParentType, ContextType>;
  unauthenticated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthRoleAssociationResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthRoleAssociation'] = ResolversParentTypes['IoRestorecommerceAuthRoleAssociation']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthHierarchicalScopeResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthHierarchicalScope'] = ResolversParentTypes['IoRestorecommerceAuthHierarchicalScope']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  children?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAuthHierarchicalScope']>>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentErrorListResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentErrorList'] = ResolversParentTypes['IoRestorecommerceFulfillmentErrorList']> = ResolversObject<{
  code?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  message?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceFulfillmentDeleteStatusResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceFulfillmentDeleteStatus'] = ResolversParentTypes['ProtoIoRestorecommerceFulfillmentDeleteStatus']> = ResolversObject<{
  operationStatus?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentDeleteStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentDeleteStatusResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentDeleteStatus'] = ResolversParentTypes['IoRestorecommerceFulfillmentDeleteStatus']> = ResolversObject<{
  deleteStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentError']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FulfillmentFulfillmentCourierMutationResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['FulfillmentFulfillmentCourierMutation'] = ResolversParentTypes['FulfillmentFulfillmentCourierMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentCourierCourierListResponse']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentCourierMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentCourierMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  operationStatus?: Resolver<ResolversTypes['StatusType'], ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  status?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceStatusStatus']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = FulfillmentContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  FulfillmentQuery?: FulfillmentQueryResolvers<ContextType>;
  FulfillmentFulfillmentQuery?: FulfillmentFulfillmentQueryResolvers<ContextType>;
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
  FulfillmentFulfillmentCourierQuery?: FulfillmentFulfillmentCourierQueryResolvers<ContextType>;
  ProtoIoRestorecommerceFulfillmentCourierCourierListResponse?: ProtoIoRestorecommerceFulfillmentCourierCourierListResponseResolvers<ContextType>;
  IoRestorecommerceFulfillmentCourierCourierListResponse?: IoRestorecommerceFulfillmentCourierCourierListResponseResolvers<ContextType>;
  IoRestorecommerceFulfillmentCourierCourierResponse?: IoRestorecommerceFulfillmentCourierCourierResponseResolvers<ContextType>;
  IoRestorecommerceFulfillmentCourierCourier?: IoRestorecommerceFulfillmentCourierCourierResolvers<ContextType>;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
  IoRestorecommerceStatusStatus?: IoRestorecommerceStatusStatusResolvers<ContextType>;
  IoRestorecommerceStatusOperationStatus?: IoRestorecommerceStatusOperationStatusResolvers<ContextType>;
  IoRestorecommerceResourcebaseSortSortOrder?: IoRestorecommerceResourcebaseSortSortOrderResolvers;
  IoRestorecommerceResourcebaseFilterOperation?: IoRestorecommerceResourcebaseFilterOperationResolvers;
  IoRestorecommerceResourcebaseFilterValueType?: IoRestorecommerceResourcebaseFilterValueTypeResolvers;
  IoRestorecommerceFilterFilterOperation?: IoRestorecommerceFilterFilterOperationResolvers;
  IoRestorecommerceFilterFilterValueType?: IoRestorecommerceFilterFilterValueTypeResolvers;
  IoRestorecommerceFilterFilterOpOperator?: IoRestorecommerceFilterFilterOpOperatorResolvers;
  IoRestorecommerceResourcebaseFilterOpOperator?: IoRestorecommerceResourcebaseFilterOpOperatorResolvers;
  Upload?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  FulfillmentMutation?: FulfillmentMutationResolvers<ContextType>;
  FulfillmentFulfillmentMutation?: FulfillmentFulfillmentMutationResolvers<ContextType>;
  ProtoIoRestorecommerceFulfillmentFulfillmentResults?: ProtoIoRestorecommerceFulfillmentFulfillmentResultsResolvers<ContextType>;
  IoRestorecommerceFulfillmentFulfillmentResults?: IoRestorecommerceFulfillmentFulfillmentResultsResolvers<ContextType>;
  IoRestorecommerceFulfillmentResponseDetailsList?: IoRestorecommerceFulfillmentResponseDetailsListResolvers<ContextType>;
  IoRestorecommerceFulfillmentFulfillmentStatus?: IoRestorecommerceFulfillmentFulfillmentStatusResolvers<ContextType>;
  IoRestorecommerceAuthSubject?: IoRestorecommerceAuthSubjectResolvers<ContextType>;
  IoRestorecommerceAuthRoleAssociation?: IoRestorecommerceAuthRoleAssociationResolvers<ContextType>;
  IoRestorecommerceAuthHierarchicalScope?: IoRestorecommerceAuthHierarchicalScopeResolvers<ContextType>;
  IoRestorecommerceFulfillmentErrorList?: IoRestorecommerceFulfillmentErrorListResolvers<ContextType>;
  ProtoIoRestorecommerceFulfillmentDeleteStatus?: ProtoIoRestorecommerceFulfillmentDeleteStatusResolvers<ContextType>;
  IoRestorecommerceFulfillmentDeleteStatus?: IoRestorecommerceFulfillmentDeleteStatusResolvers<ContextType>;
  FulfillmentFulfillmentCourierMutation?: FulfillmentFulfillmentCourierMutationResolvers<ContextType>;
  ProtoIoRestorecommerceResourcebaseDeleteResponse?: ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  IoRestorecommerceResourcebaseDeleteResponse?: IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = FulfillmentContext> = Resolvers<ContextType>;
