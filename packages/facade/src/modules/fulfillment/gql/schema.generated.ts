import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { FulfillmentContext } from '../interfaces';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
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
};

export type Query = {
  __typename?: 'Query';
  fulfillment: FulfillmentQuery;
};

export type FulfillmentQuery = {
  __typename?: 'FulfillmentQuery';
  fulfillment: FulfillmentFulfillmentQuery;
  fulfillment_courier: FulfillmentFulfillmentCourierQuery;
  fulfillment_product: FulfillmentFulfillmentProductQuery;
};

export type FulfillmentFulfillmentQuery = {
  __typename?: 'FulfillmentFulfillmentQuery';
  Read?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentResponseList>;
  Track?: Maybe<ProtoIoRestorecommerceFulfillmentTrackingResultList>;
};


export type FulfillmentFulfillmentQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};


export type FulfillmentFulfillmentQueryTrackArgs = {
  input: IIoRestorecommerceFulfillmentTrackingRequestList;
};

export type ProtoIoRestorecommerceFulfillmentFulfillmentResponseList = {
  __typename?: 'ProtoIoRestorecommerceFulfillmentFulfillmentResponseList';
  details?: Maybe<IoRestorecommerceFulfillmentFulfillmentResponseList>;
};

export type IoRestorecommerceFulfillmentFulfillmentResponseList = {
  __typename?: 'IoRestorecommerceFulfillmentFulfillmentResponseList';
  items?: Maybe<Array<IoRestorecommerceFulfillmentFulfillmentResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceFulfillmentFulfillmentResponse = {
  __typename?: 'IoRestorecommerceFulfillmentFulfillmentResponse';
  payload?: Maybe<IoRestorecommerceFulfillmentFulfillment>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceFulfillmentFulfillment = {
  __typename?: 'IoRestorecommerceFulfillmentFulfillment';
  id?: Maybe<Scalars['String']>;
  order?: Maybe<IoRestorecommerceFulfillmentOrder>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  labels?: Maybe<Array<IoRestorecommerceFulfillmentLabel>>;
  state?: Maybe<IoRestorecommerceFulfillmentState>;
};

export type IoRestorecommerceFulfillmentOrder = {
  __typename?: 'IoRestorecommerceFulfillmentOrder';
  referenceId?: Maybe<Scalars['String']>;
  parcels?: Maybe<Array<IoRestorecommerceFulfillmentParcel>>;
  sender?: Maybe<IoRestorecommerceFulfillmentShippingAddress>;
  receiver?: Maybe<IoRestorecommerceFulfillmentShippingAddress>;
  notify?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceFulfillmentParcel = {
  __typename?: 'IoRestorecommerceFulfillmentParcel';
  productId?: Maybe<Scalars['String']>;
  product?: Maybe<IoRestorecommerceFulfillmentProductFulfillmentProduct>;
  productVariantId?: Maybe<Scalars['String']>;
  items?: Maybe<Array<IoRestorecommerceFulfillmentItem>>;
  weightInKg?: Maybe<Scalars['Float']>;
  heightInCm?: Maybe<Scalars['Float']>;
  widthInCm?: Maybe<Scalars['Float']>;
  lengthInCm?: Maybe<Scalars['Float']>;
};

export type IoRestorecommerceFulfillmentProductFulfillmentProduct = {
  __typename?: 'IoRestorecommerceFulfillmentProductFulfillmentProduct';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  courierId?: Maybe<Scalars['String']>;
  courier?: Maybe<IoRestorecommerceFulfillmentCourierFulfillmentCourier>;
  startZones?: Maybe<Array<Scalars['String']>>;
  destinationZones?: Maybe<Array<Scalars['String']>>;
  taxIds?: Maybe<Array<Scalars['String']>>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  variants?: Maybe<Array<IoRestorecommerceFulfillmentProductVariant>>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
};

export type IoRestorecommerceFulfillmentCourierFulfillmentCourier = {
  __typename?: 'IoRestorecommerceFulfillmentCourierFulfillmentCourier';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  stubType?: Maybe<Scalars['String']>;
  configuration?: Maybe<GoogleProtobufAny>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
};

export type GoogleProtobufAny = {
  __typename?: 'GoogleProtobufAny';
  typeUrl?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['GoogleProtobufAnyValue']>;
};

export type IoRestorecommerceMetaMeta = {
  __typename?: 'IoRestorecommerceMetaMeta';
  created?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['Float']>;
  modifiedBy?: Maybe<Scalars['String']>;
  owner?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  acl?: Maybe<Array<IoRestorecommerceAttributeAttributeObj>>;
};

export type IoRestorecommerceAttributeAttribute = {
  __typename?: 'IoRestorecommerceAttributeAttribute';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  attribute?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
};

export type IoRestorecommerceAttributeAttributeObj = {
  __typename?: 'IoRestorecommerceAttributeAttributeObj';
  attribute?: Maybe<IoRestorecommerceAttributeAttribute>;
};

export type IoRestorecommerceFulfillmentProductVariant = {
  __typename?: 'IoRestorecommerceFulfillmentProductVariant';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  maxWeight?: Maybe<Scalars['Float']>;
  maxWidth?: Maybe<Scalars['Float']>;
  maxHeight?: Maybe<Scalars['Float']>;
  maxLength?: Maybe<Scalars['Float']>;
  maxVolume?: Maybe<Scalars['Float']>;
};

export type IoRestorecommerceFulfillmentItem = {
  __typename?: 'IoRestorecommerceFulfillmentItem';
  itemId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  taricCode?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceFulfillmentShippingAddress = {
  __typename?: 'IoRestorecommerceFulfillmentShippingAddress';
  address?: Maybe<IoRestorecommerceAddressAddress>;
  contactPerson?: Maybe<IoRestorecommerceAddressContactPerson>;
};

export type IoRestorecommerceAddressAddress = {
  __typename?: 'IoRestorecommerceAddressAddress';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  postcode?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['String']>;
  country?: Maybe<IoRestorecommerceCountryCountry>;
  locality?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  geoCoordinates?: Maybe<IoRestorecommerceAddressGeoPoint>;
  altitude?: Maybe<Scalars['Float']>;
  buildingNumber?: Maybe<Scalars['String']>;
  addressAddition?: Maybe<IoRestorecommerceAddressAddressAddition>;
  businessAddress?: Maybe<IoRestorecommerceAddressBusinessAddress>;
  residentialAddress?: Maybe<IoRestorecommerceAddressResidentialAddress>;
  packStation?: Maybe<IoRestorecommerceAddressPackStation>;
};

export type IoRestorecommerceCountryCountry = {
  __typename?: 'IoRestorecommerceCountryCountry';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  geographicalName?: Maybe<Scalars['String']>;
  economicAreas?: Maybe<Array<Scalars['String']>>;
};

export type IoRestorecommerceAddressGeoPoint = {
  __typename?: 'IoRestorecommerceAddressGeoPoint';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type IoRestorecommerceAddressAddressAddition = {
  __typename?: 'IoRestorecommerceAddressAddressAddition';
  field1?: Maybe<Scalars['String']>;
  field2?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceAddressBusinessAddress = {
  __typename?: 'IoRestorecommerceAddressBusinessAddress';
  name?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceAddressResidentialAddress = {
  __typename?: 'IoRestorecommerceAddressResidentialAddress';
  title?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  midName?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceAddressPackStation = {
  __typename?: 'IoRestorecommerceAddressPackStation';
  provider?: Maybe<Scalars['String']>;
  stationNumber?: Maybe<Scalars['String']>;
  postNumber?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceAddressContactPerson = {
  __typename?: 'IoRestorecommerceAddressContactPerson';
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceFulfillmentLabel = {
  __typename?: 'IoRestorecommerceFulfillmentLabel';
  url?: Maybe<Scalars['String']>;
  pdf?: Maybe<Scalars['String']>;
  png?: Maybe<Scalars['String']>;
  shipmentNumber?: Maybe<Scalars['String']>;
  state?: Maybe<IoRestorecommerceFulfillmentState>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export enum IoRestorecommerceFulfillmentState {
  Undefined = 0,
  Invalid = 1,
  Failed = 2,
  Cancelled = 3,
  Created = 4,
  Submitted = 5,
  Shipping = 6,
  Done = 7
}

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
  sort?: InputMaybe<Array<IIoRestorecommerceResourcebaseSort>>;
  filters?: InputMaybe<Array<IIoRestorecommerceResourcebaseFilterOp>>;
  field?: InputMaybe<Array<IIoRestorecommerceResourcebaseFieldFilter>>;
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
  filter?: InputMaybe<Array<IIoRestorecommerceResourcebaseFilter>>;
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
  filter?: InputMaybe<Array<IIoRestorecommerceFilterFilter>>;
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

export type ProtoIoRestorecommerceFulfillmentTrackingResultList = {
  __typename?: 'ProtoIoRestorecommerceFulfillmentTrackingResultList';
  details?: Maybe<IoRestorecommerceFulfillmentTrackingResultList>;
};

export type IoRestorecommerceFulfillmentTrackingResultList = {
  __typename?: 'IoRestorecommerceFulfillmentTrackingResultList';
  items?: Maybe<Array<IoRestorecommerceFulfillmentTrackingResult>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceFulfillmentTrackingResult = {
  __typename?: 'IoRestorecommerceFulfillmentTrackingResult';
  fulfillment?: Maybe<IoRestorecommerceFulfillmentFulfillment>;
  tracks?: Maybe<Array<IoRestorecommerceFulfillmentTracking>>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceFulfillmentTracking = {
  __typename?: 'IoRestorecommerceFulfillmentTracking';
  shipmentNumber?: Maybe<Scalars['String']>;
  events?: Maybe<Array<IoRestorecommerceFulfillmentEvent>>;
  details?: Maybe<GoogleProtobufAny>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceFulfillmentEvent = {
  __typename?: 'IoRestorecommerceFulfillmentEvent';
  timestamp?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  details?: Maybe<GoogleProtobufAny>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IIoRestorecommerceFulfillmentTrackingRequestList = {
  items?: InputMaybe<Array<IIoRestorecommerceFulfillmentTrackingRequest>>;
};

export type IIoRestorecommerceFulfillmentTrackingRequest = {
  fulfillmentId?: InputMaybe<Scalars['String']>;
  shipmentNumbers?: InputMaybe<Array<Scalars['String']>>;
  options?: InputMaybe<IGoogleProtobufAny>;
};

export type FulfillmentFulfillmentCourierQuery = {
  __typename?: 'FulfillmentFulfillmentCourierQuery';
  Read?: Maybe<ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList>;
};


export type FulfillmentFulfillmentCourierQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList = {
  __typename?: 'ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList';
  details?: Maybe<IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList>;
};

export type IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList = {
  __typename?: 'IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList';
  items?: Maybe<Array<IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse = {
  __typename?: 'IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse';
  payload?: Maybe<IoRestorecommerceFulfillmentCourierFulfillmentCourier>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type FulfillmentFulfillmentProductQuery = {
  __typename?: 'FulfillmentFulfillmentProductQuery';
  Read?: Maybe<ProtoIoRestorecommerceFulfillmentProductFulfillmentProductResponseList>;
  Find?: Maybe<ProtoIoRestorecommerceFulfillmentProductPackingSolutionResponseList>;
};


export type FulfillmentFulfillmentProductQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};


export type FulfillmentFulfillmentProductQueryFindArgs = {
  input: IIoRestorecommerceFulfillmentProductQueryList;
};

export type ProtoIoRestorecommerceFulfillmentProductFulfillmentProductResponseList = {
  __typename?: 'ProtoIoRestorecommerceFulfillmentProductFulfillmentProductResponseList';
  details?: Maybe<IoRestorecommerceFulfillmentProductFulfillmentProductResponseList>;
};

export type IoRestorecommerceFulfillmentProductFulfillmentProductResponseList = {
  __typename?: 'IoRestorecommerceFulfillmentProductFulfillmentProductResponseList';
  items?: Maybe<Array<IoRestorecommerceFulfillmentProductFulfillmentProductResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceFulfillmentProductFulfillmentProductResponse = {
  __typename?: 'IoRestorecommerceFulfillmentProductFulfillmentProductResponse';
  payload?: Maybe<IoRestorecommerceFulfillmentProductFulfillmentProduct>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type ProtoIoRestorecommerceFulfillmentProductPackingSolutionResponseList = {
  __typename?: 'ProtoIoRestorecommerceFulfillmentProductPackingSolutionResponseList';
  details?: Maybe<IoRestorecommerceFulfillmentProductPackingSolutionResponseList>;
};

export type IoRestorecommerceFulfillmentProductPackingSolutionResponseList = {
  __typename?: 'IoRestorecommerceFulfillmentProductPackingSolutionResponseList';
  items?: Maybe<Array<IoRestorecommerceFulfillmentProductPackingSolutionResponse>>;
  totalCount?: Maybe<Scalars['Int']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceFulfillmentProductPackingSolutionResponse = {
  __typename?: 'IoRestorecommerceFulfillmentProductPackingSolutionResponse';
  solutions?: Maybe<Array<IoRestorecommerceFulfillmentProductPackingSolution>>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceFulfillmentProductPackingSolution = {
  __typename?: 'IoRestorecommerceFulfillmentProductPackingSolution';
  referenceId?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  compactness?: Maybe<Scalars['Float']>;
  homogeneity?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  parcels?: Maybe<Array<IoRestorecommerceFulfillmentParcel>>;
};

export type IIoRestorecommerceFulfillmentProductQueryList = {
  items?: InputMaybe<Array<IIoRestorecommerceFulfillmentProductQuery>>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceFulfillmentProductQuery = {
  goods?: InputMaybe<Array<IIoRestorecommerceFulfillmentItem>>;
  preferences?: InputMaybe<IIoRestorecommerceFulfillmentProductPreferences>;
  referenceId?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceFulfillmentItem = {
  itemId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  taricCode?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceFulfillmentProductPreferences = {
  couriers?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  pricing?: InputMaybe<Scalars['Float']>;
  compactness?: InputMaybe<Scalars['Float']>;
  homogeneity?: InputMaybe<Scalars['Float']>;
};

export type IIoRestorecommerceAttributeAttribute = {
  id?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  attribute?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  fulfillment: FulfillmentMutation;
};

export type FulfillmentMutation = {
  __typename?: 'FulfillmentMutation';
  fulfillment: FulfillmentFulfillmentMutation;
  fulfillment_courier: FulfillmentFulfillmentCourierMutation;
  fulfillment_product: FulfillmentFulfillmentProductMutation;
};

export type FulfillmentFulfillmentMutation = {
  __typename?: 'FulfillmentFulfillmentMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentResponseList>;
  Submit?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentResponseList>;
  Cancel?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentResponseList>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type FulfillmentFulfillmentMutationMutateArgs = {
  input: IIoRestorecommerceFulfillmentFulfillmentList;
};


export type FulfillmentFulfillmentMutationSubmitArgs = {
  input: IIoRestorecommerceFulfillmentFulfillmentList;
};


export type FulfillmentFulfillmentMutationCancelArgs = {
  input: IIoRestorecommerceFulfillmentCancelRequestList;
};


export type FulfillmentFulfillmentMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceFulfillmentFulfillmentList = {
  items?: InputMaybe<Array<IIoRestorecommerceFulfillmentFulfillment>>;
  totalCount?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceFulfillmentFulfillment = {
  id?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<IIoRestorecommerceFulfillmentOrder>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  labels?: InputMaybe<Array<IIoRestorecommerceFulfillmentLabel>>;
  state?: InputMaybe<IoRestorecommerceFulfillmentState>;
};

export type IIoRestorecommerceFulfillmentOrder = {
  referenceId?: InputMaybe<Scalars['String']>;
  parcels?: InputMaybe<Array<IIoRestorecommerceFulfillmentParcel>>;
  sender?: InputMaybe<IIoRestorecommerceFulfillmentShippingAddress>;
  receiver?: InputMaybe<IIoRestorecommerceFulfillmentShippingAddress>;
  notify?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceFulfillmentParcel = {
  productId?: InputMaybe<Scalars['String']>;
  productVariantId?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<Array<IIoRestorecommerceFulfillmentItem>>;
  weightInKg?: InputMaybe<Scalars['Float']>;
  heightInCm?: InputMaybe<Scalars['Float']>;
  widthInCm?: InputMaybe<Scalars['Float']>;
  lengthInCm?: InputMaybe<Scalars['Float']>;
};

export type IIoRestorecommerceFulfillmentShippingAddress = {
  address?: InputMaybe<IIoRestorecommerceAddressAddress>;
  contactPerson?: InputMaybe<IIoRestorecommerceAddressContactPerson>;
};

export type IIoRestorecommerceAddressAddress = {
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  postcode?: InputMaybe<Scalars['String']>;
  countryId?: InputMaybe<Scalars['String']>;
  locality?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  geoCoordinates?: InputMaybe<IIoRestorecommerceAddressGeoPoint>;
  altitude?: InputMaybe<Scalars['Float']>;
  buildingNumber?: InputMaybe<Scalars['String']>;
  addressAddition?: InputMaybe<IIoRestorecommerceAddressAddressAddition>;
  businessAddress?: InputMaybe<IIoRestorecommerceAddressBusinessAddress>;
  residentialAddress?: InputMaybe<IIoRestorecommerceAddressResidentialAddress>;
  packStation?: InputMaybe<IIoRestorecommerceAddressPackStation>;
};

export type IIoRestorecommerceMetaMeta = {
  created?: InputMaybe<Scalars['Float']>;
  modified?: InputMaybe<Scalars['Float']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  acl?: InputMaybe<Array<IIoRestorecommerceAttributeAttributeObj>>;
};

export type IIoRestorecommerceAttributeAttributeObj = {
  attribute?: InputMaybe<IIoRestorecommerceAttributeAttribute>;
};

export type IIoRestorecommerceAddressGeoPoint = {
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
};

export type IIoRestorecommerceAddressAddressAddition = {
  field1?: InputMaybe<Scalars['String']>;
  field2?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceAddressBusinessAddress = {
  name?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceAddressResidentialAddress = {
  title?: InputMaybe<Scalars['String']>;
  givenName?: InputMaybe<Scalars['String']>;
  midName?: InputMaybe<Scalars['String']>;
  familyName?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceAddressPackStation = {
  provider?: InputMaybe<Scalars['String']>;
  stationNumber?: InputMaybe<Scalars['String']>;
  postNumber?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceAddressContactPerson = {
  name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceFulfillmentLabel = {
  url?: InputMaybe<Scalars['String']>;
  pdf?: InputMaybe<Scalars['String']>;
  png?: InputMaybe<Scalars['String']>;
  shipmentNumber?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<IoRestorecommerceFulfillmentState>;
  status?: InputMaybe<IIoRestorecommerceStatusStatus>;
};

export type IIoRestorecommerceStatusStatus = {
  id?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['Int']>;
  message?: InputMaybe<Scalars['String']>;
};

export enum ModeType {
  Create = 'CREATE',
  Update = 'UPDATE',
  Upsert = 'UPSERT'
}

export type IIoRestorecommerceFulfillmentCancelRequestList = {
  ids?: InputMaybe<Array<Scalars['String']>>;
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

export type IIoRestorecommerceResourcebaseDeleteRequest = {
  collection?: InputMaybe<Scalars['Boolean']>;
  ids?: InputMaybe<Array<Scalars['String']>>;
  view?: InputMaybe<Array<Scalars['String']>>;
  analyzer?: InputMaybe<Array<Scalars['String']>>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type FulfillmentFulfillmentCourierMutation = {
  __typename?: 'FulfillmentFulfillmentCourierMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type FulfillmentFulfillmentCourierMutationMutateArgs = {
  input: IIoRestorecommerceFulfillmentCourierFulfillmentCourierList;
};


export type FulfillmentFulfillmentCourierMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceFulfillmentCourierFulfillmentCourierList = {
  items?: InputMaybe<Array<IIoRestorecommerceFulfillmentCourierFulfillmentCourier>>;
  totalCount?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceFulfillmentCourierFulfillmentCourier = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
  stubType?: InputMaybe<Scalars['String']>;
  configuration?: InputMaybe<IGoogleProtobufAny>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
};

export type FulfillmentFulfillmentProductMutation = {
  __typename?: 'FulfillmentFulfillmentProductMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceFulfillmentProductFulfillmentProductResponseList>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type FulfillmentFulfillmentProductMutationMutateArgs = {
  input: IIoRestorecommerceFulfillmentProductFulfillmentProductList;
};


export type FulfillmentFulfillmentProductMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceFulfillmentProductFulfillmentProductList = {
  items?: InputMaybe<Array<IIoRestorecommerceFulfillmentProductFulfillmentProduct>>;
  totalCount?: InputMaybe<Scalars['Int']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceFulfillmentProductFulfillmentProduct = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  courierId?: InputMaybe<Scalars['String']>;
  startZones?: InputMaybe<Array<Scalars['String']>>;
  destinationZones?: InputMaybe<Array<Scalars['String']>>;
  taxIds?: InputMaybe<Array<Scalars['String']>>;
  attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  variants?: InputMaybe<Array<IIoRestorecommerceFulfillmentProductVariant>>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
};

export type IIoRestorecommerceFulfillmentProductVariant = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  maxWeight?: InputMaybe<Scalars['Float']>;
  maxWidth?: InputMaybe<Scalars['Float']>;
  maxHeight?: InputMaybe<Scalars['Float']>;
  maxLength?: InputMaybe<Scalars['Float']>;
  maxVolume?: InputMaybe<Scalars['Float']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  orderingOrders?: Maybe<SubscriptionOutput>;
  fulfillmentFulfillment?: Maybe<SubscriptionOutput>;
  fulfillmentFulfillmentCouriers?: Maybe<SubscriptionOutput>;
  fulfillmentFulfillmentProduct?: Maybe<SubscriptionOutput>;
};


export type SubscriptionOrderingOrdersArgs = {
  action?: InputMaybe<SubscriptionAction>;
};


export type SubscriptionFulfillmentFulfillmentArgs = {
  action?: InputMaybe<SubscriptionAction>;
};


export type SubscriptionFulfillmentFulfillmentCouriersArgs = {
  action?: InputMaybe<SubscriptionAction>;
};


export type SubscriptionFulfillmentFulfillmentProductArgs = {
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
  FulfillmentQuery: ResolverTypeWrapper<FulfillmentQuery>;
  FulfillmentFulfillmentQuery: ResolverTypeWrapper<FulfillmentFulfillmentQuery>;
  ProtoIoRestorecommerceFulfillmentFulfillmentResponseList: ResolverTypeWrapper<ProtoIoRestorecommerceFulfillmentFulfillmentResponseList>;
  IoRestorecommerceFulfillmentFulfillmentResponseList: ResolverTypeWrapper<IoRestorecommerceFulfillmentFulfillmentResponseList>;
  IoRestorecommerceFulfillmentFulfillmentResponse: ResolverTypeWrapper<IoRestorecommerceFulfillmentFulfillmentResponse>;
  IoRestorecommerceFulfillmentFulfillment: ResolverTypeWrapper<IoRestorecommerceFulfillmentFulfillment>;
  String: ResolverTypeWrapper<Scalars['String']>;
  IoRestorecommerceFulfillmentOrder: ResolverTypeWrapper<IoRestorecommerceFulfillmentOrder>;
  IoRestorecommerceFulfillmentParcel: ResolverTypeWrapper<IoRestorecommerceFulfillmentParcel>;
  IoRestorecommerceFulfillmentProductFulfillmentProduct: ResolverTypeWrapper<IoRestorecommerceFulfillmentProductFulfillmentProduct>;
  IoRestorecommerceFulfillmentCourierFulfillmentCourier: ResolverTypeWrapper<IoRestorecommerceFulfillmentCourierFulfillmentCourier>;
  GoogleProtobufAny: ResolverTypeWrapper<GoogleProtobufAny>;
  GoogleProtobufAnyValue: ResolverTypeWrapper<Scalars['GoogleProtobufAnyValue']>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  IoRestorecommerceAttributeAttributeObj: ResolverTypeWrapper<IoRestorecommerceAttributeAttributeObj>;
  IoRestorecommerceFulfillmentProductVariant: ResolverTypeWrapper<IoRestorecommerceFulfillmentProductVariant>;
  IoRestorecommerceFulfillmentItem: ResolverTypeWrapper<IoRestorecommerceFulfillmentItem>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  IoRestorecommerceFulfillmentShippingAddress: ResolverTypeWrapper<IoRestorecommerceFulfillmentShippingAddress>;
  IoRestorecommerceAddressAddress: ResolverTypeWrapper<IoRestorecommerceAddressAddress>;
  IoRestorecommerceCountryCountry: ResolverTypeWrapper<IoRestorecommerceCountryCountry>;
  IoRestorecommerceAddressGeoPoint: ResolverTypeWrapper<IoRestorecommerceAddressGeoPoint>;
  IoRestorecommerceAddressAddressAddition: ResolverTypeWrapper<IoRestorecommerceAddressAddressAddition>;
  IoRestorecommerceAddressBusinessAddress: ResolverTypeWrapper<IoRestorecommerceAddressBusinessAddress>;
  IoRestorecommerceAddressResidentialAddress: ResolverTypeWrapper<IoRestorecommerceAddressResidentialAddress>;
  IoRestorecommerceAddressPackStation: ResolverTypeWrapper<IoRestorecommerceAddressPackStation>;
  IoRestorecommerceAddressContactPerson: ResolverTypeWrapper<IoRestorecommerceAddressContactPerson>;
  IoRestorecommerceFulfillmentLabel: ResolverTypeWrapper<IoRestorecommerceFulfillmentLabel>;
  IoRestorecommerceFulfillmentState: IoRestorecommerceFulfillmentState;
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
  IIoRestorecommerceResourcebaseSearch: IIoRestorecommerceResourcebaseSearch;
  ProtoIoRestorecommerceFulfillmentTrackingResultList: ResolverTypeWrapper<ProtoIoRestorecommerceFulfillmentTrackingResultList>;
  IoRestorecommerceFulfillmentTrackingResultList: ResolverTypeWrapper<IoRestorecommerceFulfillmentTrackingResultList>;
  IoRestorecommerceFulfillmentTrackingResult: ResolverTypeWrapper<IoRestorecommerceFulfillmentTrackingResult>;
  IoRestorecommerceFulfillmentTracking: ResolverTypeWrapper<IoRestorecommerceFulfillmentTracking>;
  IoRestorecommerceFulfillmentEvent: ResolverTypeWrapper<IoRestorecommerceFulfillmentEvent>;
  IIoRestorecommerceFulfillmentTrackingRequestList: IIoRestorecommerceFulfillmentTrackingRequestList;
  IIoRestorecommerceFulfillmentTrackingRequest: IIoRestorecommerceFulfillmentTrackingRequest;
  FulfillmentFulfillmentCourierQuery: ResolverTypeWrapper<FulfillmentFulfillmentCourierQuery>;
  ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList: ResolverTypeWrapper<ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList>;
  IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList: ResolverTypeWrapper<IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList>;
  IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse: ResolverTypeWrapper<IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse>;
  FulfillmentFulfillmentProductQuery: ResolverTypeWrapper<FulfillmentFulfillmentProductQuery>;
  ProtoIoRestorecommerceFulfillmentProductFulfillmentProductResponseList: ResolverTypeWrapper<ProtoIoRestorecommerceFulfillmentProductFulfillmentProductResponseList>;
  IoRestorecommerceFulfillmentProductFulfillmentProductResponseList: ResolverTypeWrapper<IoRestorecommerceFulfillmentProductFulfillmentProductResponseList>;
  IoRestorecommerceFulfillmentProductFulfillmentProductResponse: ResolverTypeWrapper<IoRestorecommerceFulfillmentProductFulfillmentProductResponse>;
  ProtoIoRestorecommerceFulfillmentProductPackingSolutionResponseList: ResolverTypeWrapper<ProtoIoRestorecommerceFulfillmentProductPackingSolutionResponseList>;
  IoRestorecommerceFulfillmentProductPackingSolutionResponseList: ResolverTypeWrapper<IoRestorecommerceFulfillmentProductPackingSolutionResponseList>;
  IoRestorecommerceFulfillmentProductPackingSolutionResponse: ResolverTypeWrapper<IoRestorecommerceFulfillmentProductPackingSolutionResponse>;
  IoRestorecommerceFulfillmentProductPackingSolution: ResolverTypeWrapper<IoRestorecommerceFulfillmentProductPackingSolution>;
  IIoRestorecommerceFulfillmentProductQueryList: IIoRestorecommerceFulfillmentProductQueryList;
  IIoRestorecommerceFulfillmentProductQuery: IIoRestorecommerceFulfillmentProductQuery;
  IIoRestorecommerceFulfillmentItem: IIoRestorecommerceFulfillmentItem;
  IIoRestorecommerceFulfillmentProductPreferences: IIoRestorecommerceFulfillmentProductPreferences;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  Mutation: ResolverTypeWrapper<{}>;
  FulfillmentMutation: ResolverTypeWrapper<FulfillmentMutation>;
  FulfillmentFulfillmentMutation: ResolverTypeWrapper<FulfillmentFulfillmentMutation>;
  IIoRestorecommerceFulfillmentFulfillmentList: IIoRestorecommerceFulfillmentFulfillmentList;
  IIoRestorecommerceFulfillmentFulfillment: IIoRestorecommerceFulfillmentFulfillment;
  IIoRestorecommerceFulfillmentOrder: IIoRestorecommerceFulfillmentOrder;
  IIoRestorecommerceFulfillmentParcel: IIoRestorecommerceFulfillmentParcel;
  IIoRestorecommerceFulfillmentShippingAddress: IIoRestorecommerceFulfillmentShippingAddress;
  IIoRestorecommerceAddressAddress: IIoRestorecommerceAddressAddress;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceAttributeAttributeObj: IIoRestorecommerceAttributeAttributeObj;
  IIoRestorecommerceAddressGeoPoint: IIoRestorecommerceAddressGeoPoint;
  IIoRestorecommerceAddressAddressAddition: IIoRestorecommerceAddressAddressAddition;
  IIoRestorecommerceAddressBusinessAddress: IIoRestorecommerceAddressBusinessAddress;
  IIoRestorecommerceAddressResidentialAddress: IIoRestorecommerceAddressResidentialAddress;
  IIoRestorecommerceAddressPackStation: IIoRestorecommerceAddressPackStation;
  IIoRestorecommerceAddressContactPerson: IIoRestorecommerceAddressContactPerson;
  IIoRestorecommerceFulfillmentLabel: IIoRestorecommerceFulfillmentLabel;
  IIoRestorecommerceStatusStatus: IIoRestorecommerceStatusStatus;
  ModeType: ModeType;
  IIoRestorecommerceFulfillmentCancelRequestList: IIoRestorecommerceFulfillmentCancelRequestList;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  IoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<IoRestorecommerceResourcebaseDeleteResponse>;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  FulfillmentFulfillmentCourierMutation: ResolverTypeWrapper<FulfillmentFulfillmentCourierMutation>;
  IIoRestorecommerceFulfillmentCourierFulfillmentCourierList: IIoRestorecommerceFulfillmentCourierFulfillmentCourierList;
  IIoRestorecommerceFulfillmentCourierFulfillmentCourier: IIoRestorecommerceFulfillmentCourierFulfillmentCourier;
  FulfillmentFulfillmentProductMutation: ResolverTypeWrapper<FulfillmentFulfillmentProductMutation>;
  IIoRestorecommerceFulfillmentProductFulfillmentProductList: IIoRestorecommerceFulfillmentProductFulfillmentProductList;
  IIoRestorecommerceFulfillmentProductFulfillmentProduct: IIoRestorecommerceFulfillmentProductFulfillmentProduct;
  IIoRestorecommerceFulfillmentProductVariant: IIoRestorecommerceFulfillmentProductVariant;
  Subscription: ResolverTypeWrapper<{}>;
  SubscriptionOutput: ResolverTypeWrapper<SubscriptionOutput>;
  SubscriptionAction: SubscriptionAction;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  FulfillmentQuery: FulfillmentQuery;
  FulfillmentFulfillmentQuery: FulfillmentFulfillmentQuery;
  ProtoIoRestorecommerceFulfillmentFulfillmentResponseList: ProtoIoRestorecommerceFulfillmentFulfillmentResponseList;
  IoRestorecommerceFulfillmentFulfillmentResponseList: IoRestorecommerceFulfillmentFulfillmentResponseList;
  IoRestorecommerceFulfillmentFulfillmentResponse: IoRestorecommerceFulfillmentFulfillmentResponse;
  IoRestorecommerceFulfillmentFulfillment: IoRestorecommerceFulfillmentFulfillment;
  String: Scalars['String'];
  IoRestorecommerceFulfillmentOrder: IoRestorecommerceFulfillmentOrder;
  IoRestorecommerceFulfillmentParcel: IoRestorecommerceFulfillmentParcel;
  IoRestorecommerceFulfillmentProductFulfillmentProduct: IoRestorecommerceFulfillmentProductFulfillmentProduct;
  IoRestorecommerceFulfillmentCourierFulfillmentCourier: IoRestorecommerceFulfillmentCourierFulfillmentCourier;
  GoogleProtobufAny: GoogleProtobufAny;
  GoogleProtobufAnyValue: Scalars['GoogleProtobufAnyValue'];
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  Float: Scalars['Float'];
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  IoRestorecommerceAttributeAttributeObj: IoRestorecommerceAttributeAttributeObj;
  IoRestorecommerceFulfillmentProductVariant: IoRestorecommerceFulfillmentProductVariant;
  IoRestorecommerceFulfillmentItem: IoRestorecommerceFulfillmentItem;
  Int: Scalars['Int'];
  IoRestorecommerceFulfillmentShippingAddress: IoRestorecommerceFulfillmentShippingAddress;
  IoRestorecommerceAddressAddress: IoRestorecommerceAddressAddress;
  IoRestorecommerceCountryCountry: IoRestorecommerceCountryCountry;
  IoRestorecommerceAddressGeoPoint: IoRestorecommerceAddressGeoPoint;
  IoRestorecommerceAddressAddressAddition: IoRestorecommerceAddressAddressAddition;
  IoRestorecommerceAddressBusinessAddress: IoRestorecommerceAddressBusinessAddress;
  IoRestorecommerceAddressResidentialAddress: IoRestorecommerceAddressResidentialAddress;
  IoRestorecommerceAddressPackStation: IoRestorecommerceAddressPackStation;
  IoRestorecommerceAddressContactPerson: IoRestorecommerceAddressContactPerson;
  IoRestorecommerceFulfillmentLabel: IoRestorecommerceFulfillmentLabel;
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
  IIoRestorecommerceResourcebaseSearch: IIoRestorecommerceResourcebaseSearch;
  ProtoIoRestorecommerceFulfillmentTrackingResultList: ProtoIoRestorecommerceFulfillmentTrackingResultList;
  IoRestorecommerceFulfillmentTrackingResultList: IoRestorecommerceFulfillmentTrackingResultList;
  IoRestorecommerceFulfillmentTrackingResult: IoRestorecommerceFulfillmentTrackingResult;
  IoRestorecommerceFulfillmentTracking: IoRestorecommerceFulfillmentTracking;
  IoRestorecommerceFulfillmentEvent: IoRestorecommerceFulfillmentEvent;
  IIoRestorecommerceFulfillmentTrackingRequestList: IIoRestorecommerceFulfillmentTrackingRequestList;
  IIoRestorecommerceFulfillmentTrackingRequest: IIoRestorecommerceFulfillmentTrackingRequest;
  FulfillmentFulfillmentCourierQuery: FulfillmentFulfillmentCourierQuery;
  ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList: ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList;
  IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList: IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList;
  IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse: IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse;
  FulfillmentFulfillmentProductQuery: FulfillmentFulfillmentProductQuery;
  ProtoIoRestorecommerceFulfillmentProductFulfillmentProductResponseList: ProtoIoRestorecommerceFulfillmentProductFulfillmentProductResponseList;
  IoRestorecommerceFulfillmentProductFulfillmentProductResponseList: IoRestorecommerceFulfillmentProductFulfillmentProductResponseList;
  IoRestorecommerceFulfillmentProductFulfillmentProductResponse: IoRestorecommerceFulfillmentProductFulfillmentProductResponse;
  ProtoIoRestorecommerceFulfillmentProductPackingSolutionResponseList: ProtoIoRestorecommerceFulfillmentProductPackingSolutionResponseList;
  IoRestorecommerceFulfillmentProductPackingSolutionResponseList: IoRestorecommerceFulfillmentProductPackingSolutionResponseList;
  IoRestorecommerceFulfillmentProductPackingSolutionResponse: IoRestorecommerceFulfillmentProductPackingSolutionResponse;
  IoRestorecommerceFulfillmentProductPackingSolution: IoRestorecommerceFulfillmentProductPackingSolution;
  IIoRestorecommerceFulfillmentProductQueryList: IIoRestorecommerceFulfillmentProductQueryList;
  IIoRestorecommerceFulfillmentProductQuery: IIoRestorecommerceFulfillmentProductQuery;
  IIoRestorecommerceFulfillmentItem: IIoRestorecommerceFulfillmentItem;
  IIoRestorecommerceFulfillmentProductPreferences: IIoRestorecommerceFulfillmentProductPreferences;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  Mutation: {};
  FulfillmentMutation: FulfillmentMutation;
  FulfillmentFulfillmentMutation: FulfillmentFulfillmentMutation;
  IIoRestorecommerceFulfillmentFulfillmentList: IIoRestorecommerceFulfillmentFulfillmentList;
  IIoRestorecommerceFulfillmentFulfillment: IIoRestorecommerceFulfillmentFulfillment;
  IIoRestorecommerceFulfillmentOrder: IIoRestorecommerceFulfillmentOrder;
  IIoRestorecommerceFulfillmentParcel: IIoRestorecommerceFulfillmentParcel;
  IIoRestorecommerceFulfillmentShippingAddress: IIoRestorecommerceFulfillmentShippingAddress;
  IIoRestorecommerceAddressAddress: IIoRestorecommerceAddressAddress;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceAttributeAttributeObj: IIoRestorecommerceAttributeAttributeObj;
  IIoRestorecommerceAddressGeoPoint: IIoRestorecommerceAddressGeoPoint;
  IIoRestorecommerceAddressAddressAddition: IIoRestorecommerceAddressAddressAddition;
  IIoRestorecommerceAddressBusinessAddress: IIoRestorecommerceAddressBusinessAddress;
  IIoRestorecommerceAddressResidentialAddress: IIoRestorecommerceAddressResidentialAddress;
  IIoRestorecommerceAddressPackStation: IIoRestorecommerceAddressPackStation;
  IIoRestorecommerceAddressContactPerson: IIoRestorecommerceAddressContactPerson;
  IIoRestorecommerceFulfillmentLabel: IIoRestorecommerceFulfillmentLabel;
  IIoRestorecommerceStatusStatus: IIoRestorecommerceStatusStatus;
  IIoRestorecommerceFulfillmentCancelRequestList: IIoRestorecommerceFulfillmentCancelRequestList;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ProtoIoRestorecommerceResourcebaseDeleteResponse;
  IoRestorecommerceResourcebaseDeleteResponse: IoRestorecommerceResourcebaseDeleteResponse;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  FulfillmentFulfillmentCourierMutation: FulfillmentFulfillmentCourierMutation;
  IIoRestorecommerceFulfillmentCourierFulfillmentCourierList: IIoRestorecommerceFulfillmentCourierFulfillmentCourierList;
  IIoRestorecommerceFulfillmentCourierFulfillmentCourier: IIoRestorecommerceFulfillmentCourierFulfillmentCourier;
  FulfillmentFulfillmentProductMutation: FulfillmentFulfillmentProductMutation;
  IIoRestorecommerceFulfillmentProductFulfillmentProductList: IIoRestorecommerceFulfillmentProductFulfillmentProductList;
  IIoRestorecommerceFulfillmentProductFulfillmentProduct: IIoRestorecommerceFulfillmentProductFulfillmentProduct;
  IIoRestorecommerceFulfillmentProductVariant: IIoRestorecommerceFulfillmentProductVariant;
  Subscription: {};
  SubscriptionOutput: SubscriptionOutput;
}>;

export type QueryResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  fulfillment?: Resolver<ResolversTypes['FulfillmentQuery'], ParentType, ContextType>;
}>;

export type FulfillmentQueryResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['FulfillmentQuery'] = ResolversParentTypes['FulfillmentQuery']> = ResolversObject<{
  fulfillment?: Resolver<ResolversTypes['FulfillmentFulfillmentQuery'], ParentType, ContextType>;
  fulfillment_courier?: Resolver<ResolversTypes['FulfillmentFulfillmentCourierQuery'], ParentType, ContextType>;
  fulfillment_product?: Resolver<ResolversTypes['FulfillmentFulfillmentProductQuery'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FulfillmentFulfillmentQueryResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['FulfillmentFulfillmentQuery'] = ResolversParentTypes['FulfillmentFulfillmentQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentFulfillmentResponseList']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentQueryReadArgs, 'input'>>;
  Track?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentTrackingResultList']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentQueryTrackArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceFulfillmentFulfillmentResponseListResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceFulfillmentFulfillmentResponseList'] = ResolversParentTypes['ProtoIoRestorecommerceFulfillmentFulfillmentResponseList']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentFulfillmentResponseList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentFulfillmentResponseListResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentFulfillmentResponseList'] = ResolversParentTypes['IoRestorecommerceFulfillmentFulfillmentResponseList']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentFulfillmentResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentFulfillmentResponseResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentFulfillmentResponse'] = ResolversParentTypes['IoRestorecommerceFulfillmentFulfillmentResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentFulfillment']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentFulfillmentResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentFulfillment'] = ResolversParentTypes['IoRestorecommerceFulfillmentFulfillment']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentOrder']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  labels?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentLabel']>>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentState']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentOrderResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentOrder'] = ResolversParentTypes['IoRestorecommerceFulfillmentOrder']> = ResolversObject<{
  referenceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parcels?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentParcel']>>, ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentShippingAddress']>, ParentType, ContextType>;
  receiver?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentShippingAddress']>, ParentType, ContextType>;
  notify?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentParcelResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentParcel'] = ResolversParentTypes['IoRestorecommerceFulfillmentParcel']> = ResolversObject<{
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentProductFulfillmentProduct']>, ParentType, ContextType>;
  productVariantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentItem']>>, ParentType, ContextType>;
  weightInKg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  heightInCm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  widthInCm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lengthInCm?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentProductFulfillmentProductResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentProductFulfillmentProduct'] = ResolversParentTypes['IoRestorecommerceFulfillmentProductFulfillmentProduct']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  courierId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  courier?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentCourierFulfillmentCourier']>, ParentType, ContextType>;
  startZones?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  destinationZones?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  taxIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  variants?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentProductVariant']>>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentCourierFulfillmentCourierResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentCourierFulfillmentCourier'] = ResolversParentTypes['IoRestorecommerceFulfillmentCourierFulfillmentCourier']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stubType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  configuration?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GoogleProtobufAnyResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['GoogleProtobufAny'] = ResolversParentTypes['GoogleProtobufAny']> = ResolversObject<{
  typeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['GoogleProtobufAnyValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface GoogleProtobufAnyValueScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GoogleProtobufAnyValue'], any> {
  name: 'GoogleProtobufAnyValue';
}

export type IoRestorecommerceMetaMetaResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceMetaMeta'] = ResolversParentTypes['IoRestorecommerceMetaMeta']> = ResolversObject<{
  created?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modified?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modifiedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  acl?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttributeObj']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeObjResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttributeObj'] = ResolversParentTypes['IoRestorecommerceAttributeAttributeObj']> = ResolversObject<{
  attribute?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentProductVariantResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentProductVariant'] = ResolversParentTypes['IoRestorecommerceFulfillmentProductVariant']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxWeight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxWidth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxHeight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxLength?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxVolume?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentItemResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentItem'] = ResolversParentTypes['IoRestorecommerceFulfillmentItem']> = ResolversObject<{
  itemId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  taricCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentShippingAddressResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentShippingAddress'] = ResolversParentTypes['IoRestorecommerceFulfillmentShippingAddress']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressAddress']>, ParentType, ContextType>;
  contactPerson?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressContactPerson']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressAddressResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressAddress'] = ResolversParentTypes['IoRestorecommerceAddressAddress']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  postcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCountryCountry']>, ParentType, ContextType>;
  locality?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  geoCoordinates?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressGeoPoint']>, ParentType, ContextType>;
  altitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  buildingNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressAddition?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressAddressAddition']>, ParentType, ContextType>;
  businessAddress?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressBusinessAddress']>, ParentType, ContextType>;
  residentialAddress?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressResidentialAddress']>, ParentType, ContextType>;
  packStation?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressPackStation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCountryCountryResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceCountryCountry'] = ResolversParentTypes['IoRestorecommerceCountryCountry']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  geographicalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  economicAreas?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressGeoPointResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressGeoPoint'] = ResolversParentTypes['IoRestorecommerceAddressGeoPoint']> = ResolversObject<{
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressAddressAdditionResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressAddressAddition'] = ResolversParentTypes['IoRestorecommerceAddressAddressAddition']> = ResolversObject<{
  field1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  field2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressBusinessAddressResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressBusinessAddress'] = ResolversParentTypes['IoRestorecommerceAddressBusinessAddress']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressResidentialAddressResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressResidentialAddress'] = ResolversParentTypes['IoRestorecommerceAddressResidentialAddress']> = ResolversObject<{
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  givenName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  midName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  familyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressPackStationResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressPackStation'] = ResolversParentTypes['IoRestorecommerceAddressPackStation']> = ResolversObject<{
  provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stationNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressContactPersonResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressContactPerson'] = ResolversParentTypes['IoRestorecommerceAddressContactPerson']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentLabelResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentLabel'] = ResolversParentTypes['IoRestorecommerceFulfillmentLabel']> = ResolversObject<{
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pdf?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  png?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shipmentNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentState']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentStateResolvers = { Undefined: 0, Invalid: 1, Failed: 2, Cancelled: 3, Created: 4, Submitted: 5, Shipping: 6, Done: 7 };

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

export type IoRestorecommerceResourcebaseSortSortOrderResolvers = { UNSORTED: 0, ASCENDING: 1, DESCENDING: 2 };

export type IoRestorecommerceResourcebaseFilterOperationResolvers = { eq: 0, lt: 1, lte: 2, gt: 3, gte: 4, isEmpty: 5, iLike: 6, in: 7, neq: 8 };

export type IoRestorecommerceResourcebaseFilterValueTypeResolvers = { STRING: 0, NUMBER: 1, BOOLEAN: 2, DATE: 3, ARRAY: 4 };

export type IoRestorecommerceFilterFilterOperationResolvers = { eq: 0, lt: 1, lte: 2, gt: 3, gte: 4, isEmpty: 5, iLike: 6, in: 7, neq: 8 };

export type IoRestorecommerceFilterFilterValueTypeResolvers = { STRING: 0, NUMBER: 1, BOOLEAN: 2, DATE: 3, ARRAY: 4 };

export type IoRestorecommerceFilterFilterOpOperatorResolvers = { and: 0, or: 1 };

export type IoRestorecommerceResourcebaseFilterOpOperatorResolvers = { and: 0, or: 1 };

export type ProtoIoRestorecommerceFulfillmentTrackingResultListResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceFulfillmentTrackingResultList'] = ResolversParentTypes['ProtoIoRestorecommerceFulfillmentTrackingResultList']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentTrackingResultList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentTrackingResultListResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentTrackingResultList'] = ResolversParentTypes['IoRestorecommerceFulfillmentTrackingResultList']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentTrackingResult']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentTrackingResultResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentTrackingResult'] = ResolversParentTypes['IoRestorecommerceFulfillmentTrackingResult']> = ResolversObject<{
  fulfillment?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentFulfillment']>, ParentType, ContextType>;
  tracks?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentTracking']>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentTrackingResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentTracking'] = ResolversParentTypes['IoRestorecommerceFulfillmentTracking']> = ResolversObject<{
  shipmentNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  events?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentEvent']>>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentEventResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentEvent'] = ResolversParentTypes['IoRestorecommerceFulfillmentEvent']> = ResolversObject<{
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FulfillmentFulfillmentCourierQueryResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['FulfillmentFulfillmentCourierQuery'] = ResolversParentTypes['FulfillmentFulfillmentCourierQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentCourierQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseListResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList'] = ResolversParentTypes['ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseListResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList'] = ResolversParentTypes['IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse'] = ResolversParentTypes['IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentCourierFulfillmentCourier']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FulfillmentFulfillmentProductQueryResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['FulfillmentFulfillmentProductQuery'] = ResolversParentTypes['FulfillmentFulfillmentProductQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentProductFulfillmentProductResponseList']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentProductQueryReadArgs, 'input'>>;
  Find?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentProductPackingSolutionResponseList']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentProductQueryFindArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceFulfillmentProductFulfillmentProductResponseListResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceFulfillmentProductFulfillmentProductResponseList'] = ResolversParentTypes['ProtoIoRestorecommerceFulfillmentProductFulfillmentProductResponseList']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentProductFulfillmentProductResponseList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentProductFulfillmentProductResponseListResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentProductFulfillmentProductResponseList'] = ResolversParentTypes['IoRestorecommerceFulfillmentProductFulfillmentProductResponseList']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentProductFulfillmentProductResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentProductFulfillmentProductResponseResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentProductFulfillmentProductResponse'] = ResolversParentTypes['IoRestorecommerceFulfillmentProductFulfillmentProductResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentProductFulfillmentProduct']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceFulfillmentProductPackingSolutionResponseListResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceFulfillmentProductPackingSolutionResponseList'] = ResolversParentTypes['ProtoIoRestorecommerceFulfillmentProductPackingSolutionResponseList']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentProductPackingSolutionResponseList']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentProductPackingSolutionResponseListResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentProductPackingSolutionResponseList'] = ResolversParentTypes['IoRestorecommerceFulfillmentProductPackingSolutionResponseList']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentProductPackingSolutionResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentProductPackingSolutionResponseResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentProductPackingSolutionResponse'] = ResolversParentTypes['IoRestorecommerceFulfillmentProductPackingSolutionResponse']> = ResolversObject<{
  solutions?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentProductPackingSolution']>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentProductPackingSolutionResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentProductPackingSolution'] = ResolversParentTypes['IoRestorecommerceFulfillmentProductPackingSolution']> = ResolversObject<{
  referenceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  compactness?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  homogeneity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  parcels?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentParcel']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  fulfillment?: Resolver<ResolversTypes['FulfillmentMutation'], ParentType, ContextType>;
}>;

export type FulfillmentMutationResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['FulfillmentMutation'] = ResolversParentTypes['FulfillmentMutation']> = ResolversObject<{
  fulfillment?: Resolver<ResolversTypes['FulfillmentFulfillmentMutation'], ParentType, ContextType>;
  fulfillment_courier?: Resolver<ResolversTypes['FulfillmentFulfillmentCourierMutation'], ParentType, ContextType>;
  fulfillment_product?: Resolver<ResolversTypes['FulfillmentFulfillmentProductMutation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FulfillmentFulfillmentMutationResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['FulfillmentFulfillmentMutation'] = ResolversParentTypes['FulfillmentFulfillmentMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentFulfillmentResponseList']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentMutationMutateArgs, 'input'>>;
  Submit?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentFulfillmentResponseList']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentMutationSubmitArgs, 'input'>>;
  Cancel?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentFulfillmentResponseList']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentMutationCancelArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  status?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceStatusStatus']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FulfillmentFulfillmentCourierMutationResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['FulfillmentFulfillmentCourierMutation'] = ResolversParentTypes['FulfillmentFulfillmentCourierMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentCourierMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentCourierMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FulfillmentFulfillmentProductMutationResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['FulfillmentFulfillmentProductMutation'] = ResolversParentTypes['FulfillmentFulfillmentProductMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentProductFulfillmentProductResponseList']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentProductMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentProductMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  orderingOrders?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "orderingOrders", ParentType, ContextType, Partial<SubscriptionOrderingOrdersArgs>>;
  fulfillmentFulfillment?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "fulfillmentFulfillment", ParentType, ContextType, Partial<SubscriptionFulfillmentFulfillmentArgs>>;
  fulfillmentFulfillmentCouriers?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "fulfillmentFulfillmentCouriers", ParentType, ContextType, Partial<SubscriptionFulfillmentFulfillmentCouriersArgs>>;
  fulfillmentFulfillmentProduct?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "fulfillmentFulfillmentProduct", ParentType, ContextType, Partial<SubscriptionFulfillmentFulfillmentProductArgs>>;
}>;

export type SubscriptionOutputResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['SubscriptionOutput'] = ResolversParentTypes['SubscriptionOutput']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = FulfillmentContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  FulfillmentQuery?: FulfillmentQueryResolvers<ContextType>;
  FulfillmentFulfillmentQuery?: FulfillmentFulfillmentQueryResolvers<ContextType>;
  ProtoIoRestorecommerceFulfillmentFulfillmentResponseList?: ProtoIoRestorecommerceFulfillmentFulfillmentResponseListResolvers<ContextType>;
  IoRestorecommerceFulfillmentFulfillmentResponseList?: IoRestorecommerceFulfillmentFulfillmentResponseListResolvers<ContextType>;
  IoRestorecommerceFulfillmentFulfillmentResponse?: IoRestorecommerceFulfillmentFulfillmentResponseResolvers<ContextType>;
  IoRestorecommerceFulfillmentFulfillment?: IoRestorecommerceFulfillmentFulfillmentResolvers<ContextType>;
  IoRestorecommerceFulfillmentOrder?: IoRestorecommerceFulfillmentOrderResolvers<ContextType>;
  IoRestorecommerceFulfillmentParcel?: IoRestorecommerceFulfillmentParcelResolvers<ContextType>;
  IoRestorecommerceFulfillmentProductFulfillmentProduct?: IoRestorecommerceFulfillmentProductFulfillmentProductResolvers<ContextType>;
  IoRestorecommerceFulfillmentCourierFulfillmentCourier?: IoRestorecommerceFulfillmentCourierFulfillmentCourierResolvers<ContextType>;
  GoogleProtobufAny?: GoogleProtobufAnyResolvers<ContextType>;
  GoogleProtobufAnyValue?: GraphQLScalarType;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
  IoRestorecommerceAttributeAttributeObj?: IoRestorecommerceAttributeAttributeObjResolvers<ContextType>;
  IoRestorecommerceFulfillmentProductVariant?: IoRestorecommerceFulfillmentProductVariantResolvers<ContextType>;
  IoRestorecommerceFulfillmentItem?: IoRestorecommerceFulfillmentItemResolvers<ContextType>;
  IoRestorecommerceFulfillmentShippingAddress?: IoRestorecommerceFulfillmentShippingAddressResolvers<ContextType>;
  IoRestorecommerceAddressAddress?: IoRestorecommerceAddressAddressResolvers<ContextType>;
  IoRestorecommerceCountryCountry?: IoRestorecommerceCountryCountryResolvers<ContextType>;
  IoRestorecommerceAddressGeoPoint?: IoRestorecommerceAddressGeoPointResolvers<ContextType>;
  IoRestorecommerceAddressAddressAddition?: IoRestorecommerceAddressAddressAdditionResolvers<ContextType>;
  IoRestorecommerceAddressBusinessAddress?: IoRestorecommerceAddressBusinessAddressResolvers<ContextType>;
  IoRestorecommerceAddressResidentialAddress?: IoRestorecommerceAddressResidentialAddressResolvers<ContextType>;
  IoRestorecommerceAddressPackStation?: IoRestorecommerceAddressPackStationResolvers<ContextType>;
  IoRestorecommerceAddressContactPerson?: IoRestorecommerceAddressContactPersonResolvers<ContextType>;
  IoRestorecommerceFulfillmentLabel?: IoRestorecommerceFulfillmentLabelResolvers<ContextType>;
  IoRestorecommerceFulfillmentState?: IoRestorecommerceFulfillmentStateResolvers;
  IoRestorecommerceStatusStatus?: IoRestorecommerceStatusStatusResolvers<ContextType>;
  IoRestorecommerceStatusOperationStatus?: IoRestorecommerceStatusOperationStatusResolvers<ContextType>;
  IoRestorecommerceResourcebaseSortSortOrder?: IoRestorecommerceResourcebaseSortSortOrderResolvers;
  IoRestorecommerceResourcebaseFilterOperation?: IoRestorecommerceResourcebaseFilterOperationResolvers;
  IoRestorecommerceResourcebaseFilterValueType?: IoRestorecommerceResourcebaseFilterValueTypeResolvers;
  IoRestorecommerceFilterFilterOperation?: IoRestorecommerceFilterFilterOperationResolvers;
  IoRestorecommerceFilterFilterValueType?: IoRestorecommerceFilterFilterValueTypeResolvers;
  IoRestorecommerceFilterFilterOpOperator?: IoRestorecommerceFilterFilterOpOperatorResolvers;
  IoRestorecommerceResourcebaseFilterOpOperator?: IoRestorecommerceResourcebaseFilterOpOperatorResolvers;
  ProtoIoRestorecommerceFulfillmentTrackingResultList?: ProtoIoRestorecommerceFulfillmentTrackingResultListResolvers<ContextType>;
  IoRestorecommerceFulfillmentTrackingResultList?: IoRestorecommerceFulfillmentTrackingResultListResolvers<ContextType>;
  IoRestorecommerceFulfillmentTrackingResult?: IoRestorecommerceFulfillmentTrackingResultResolvers<ContextType>;
  IoRestorecommerceFulfillmentTracking?: IoRestorecommerceFulfillmentTrackingResolvers<ContextType>;
  IoRestorecommerceFulfillmentEvent?: IoRestorecommerceFulfillmentEventResolvers<ContextType>;
  FulfillmentFulfillmentCourierQuery?: FulfillmentFulfillmentCourierQueryResolvers<ContextType>;
  ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList?: ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierResponseListResolvers<ContextType>;
  IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseList?: IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseListResolvers<ContextType>;
  IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse?: IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseResolvers<ContextType>;
  FulfillmentFulfillmentProductQuery?: FulfillmentFulfillmentProductQueryResolvers<ContextType>;
  ProtoIoRestorecommerceFulfillmentProductFulfillmentProductResponseList?: ProtoIoRestorecommerceFulfillmentProductFulfillmentProductResponseListResolvers<ContextType>;
  IoRestorecommerceFulfillmentProductFulfillmentProductResponseList?: IoRestorecommerceFulfillmentProductFulfillmentProductResponseListResolvers<ContextType>;
  IoRestorecommerceFulfillmentProductFulfillmentProductResponse?: IoRestorecommerceFulfillmentProductFulfillmentProductResponseResolvers<ContextType>;
  ProtoIoRestorecommerceFulfillmentProductPackingSolutionResponseList?: ProtoIoRestorecommerceFulfillmentProductPackingSolutionResponseListResolvers<ContextType>;
  IoRestorecommerceFulfillmentProductPackingSolutionResponseList?: IoRestorecommerceFulfillmentProductPackingSolutionResponseListResolvers<ContextType>;
  IoRestorecommerceFulfillmentProductPackingSolutionResponse?: IoRestorecommerceFulfillmentProductPackingSolutionResponseResolvers<ContextType>;
  IoRestorecommerceFulfillmentProductPackingSolution?: IoRestorecommerceFulfillmentProductPackingSolutionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  FulfillmentMutation?: FulfillmentMutationResolvers<ContextType>;
  FulfillmentFulfillmentMutation?: FulfillmentFulfillmentMutationResolvers<ContextType>;
  ProtoIoRestorecommerceResourcebaseDeleteResponse?: ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  IoRestorecommerceResourcebaseDeleteResponse?: IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  FulfillmentFulfillmentCourierMutation?: FulfillmentFulfillmentCourierMutationResolvers<ContextType>;
  FulfillmentFulfillmentProductMutation?: FulfillmentFulfillmentProductMutationResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  SubscriptionOutput?: SubscriptionOutputResolvers<ContextType>;
}>;

