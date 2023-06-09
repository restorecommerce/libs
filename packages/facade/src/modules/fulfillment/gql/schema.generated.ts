import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { FulfillmentContext } from '../interfaces.js';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  GoogleProtobufAnyValue: { input: any; output: any; }
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
  Read?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
};


export type FulfillmentFulfillmentQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceFulfillmentFulfillmentListResponse = {
  __typename?: 'ProtoIoRestorecommerceFulfillmentFulfillmentListResponse';
  details?: Maybe<IoRestorecommerceFulfillmentFulfillmentListResponse>;
};

export type IoRestorecommerceFulfillmentFulfillmentListResponse = {
  __typename?: 'IoRestorecommerceFulfillmentFulfillmentListResponse';
  items?: Maybe<Array<IoRestorecommerceFulfillmentFulfillmentResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceFulfillmentFulfillmentResponse = {
  __typename?: 'IoRestorecommerceFulfillmentFulfillmentResponse';
  payload?: Maybe<IoRestorecommerceFulfillmentFulfillment>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceFulfillmentFulfillment = {
  __typename?: 'IoRestorecommerceFulfillmentFulfillment';
  id?: Maybe<Scalars['String']['output']>;
  packaging?: Maybe<IoRestorecommerceFulfillmentPackaging>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  labels?: Maybe<Array<IoRestorecommerceFulfillmentLabel>>;
  trackings?: Maybe<Array<IoRestorecommerceFulfillmentTracking>>;
  state?: Maybe<IoRestorecommerceFulfillmentState>;
  totalPrice?: Maybe<Scalars['Float']['output']>;
  totalVat?: Maybe<Scalars['Float']['output']>;
};

export type IoRestorecommerceFulfillmentPackaging = {
  __typename?: 'IoRestorecommerceFulfillmentPackaging';
  referenceId?: Maybe<Scalars['String']['output']>;
  parcels?: Maybe<Array<IoRestorecommerceFulfillmentParcel>>;
  sender?: Maybe<IoRestorecommerceAddressShippingAddress>;
  receiver?: Maybe<IoRestorecommerceAddressShippingAddress>;
  notify?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceFulfillmentParcel = {
  __typename?: 'IoRestorecommerceFulfillmentParcel';
  id?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  product?: Maybe<IoRestorecommerceFulfillmentProductFulfillmentProduct>;
  variantId?: Maybe<Scalars['String']['output']>;
  item?: Maybe<IoRestorecommerceFulfillmentFulfillmentItem>;
  price?: Maybe<Scalars['Float']['output']>;
  vats?: Maybe<Array<IoRestorecommerceTaxVat>>;
  package?: Maybe<IoRestorecommerceProductPackage>;
};

export type IoRestorecommerceFulfillmentProductFulfillmentProduct = {
  __typename?: 'IoRestorecommerceFulfillmentProductFulfillmentProduct';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  courierId?: Maybe<Scalars['String']['output']>;
  courier?: Maybe<IoRestorecommerceFulfillmentCourierFulfillmentCourier>;
  startZones?: Maybe<Array<Scalars['String']['output']>>;
  destinationZones?: Maybe<Array<Scalars['String']['output']>>;
  taxIds?: Maybe<Array<Scalars['String']['output']>>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  variants?: Maybe<Array<IoRestorecommerceFulfillmentProductVariant>>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
};

export type IoRestorecommerceFulfillmentCourierFulfillmentCourier = {
  __typename?: 'IoRestorecommerceFulfillmentCourierFulfillmentCourier';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  stubType?: Maybe<Scalars['String']['output']>;
  configuration?: Maybe<GoogleProtobufAny>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
};

export type GoogleProtobufAny = {
  __typename?: 'GoogleProtobufAny';
  typeUrl?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['GoogleProtobufAnyValue']['output']>;
};

export type IoRestorecommerceMetaMeta = {
  __typename?: 'IoRestorecommerceMetaMeta';
  created?: Maybe<Scalars['Float']['output']>;
  modified?: Maybe<Scalars['Float']['output']>;
  modifiedBy?: Maybe<Scalars['String']['output']>;
  owners?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  acls?: Maybe<Array<IoRestorecommerceAttributeAttributeObj>>;
};

export type IoRestorecommerceAttributeAttribute = {
  __typename?: 'IoRestorecommerceAttributeAttribute';
  id?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
};

export type IoRestorecommerceAttributeAttributeObj = {
  __typename?: 'IoRestorecommerceAttributeAttributeObj';
  attributes?: Maybe<IoRestorecommerceAttributeAttribute>;
};

export type IoRestorecommerceFulfillmentProductVariant = {
  __typename?: 'IoRestorecommerceFulfillmentProductVariant';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  maxSize?: Maybe<IoRestorecommerceGeometryBoundingBox3D>;
  maxWeight?: Maybe<Scalars['Float']['output']>;
};

export type IoRestorecommerceGeometryBoundingBox3D = {
  __typename?: 'IoRestorecommerceGeometryBoundingBox3D';
  width?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  length?: Maybe<Scalars['Float']['output']>;
};

export type IoRestorecommerceFulfillmentFulfillmentItem = {
  __typename?: 'IoRestorecommerceFulfillmentFulfillmentItem';
  productId?: Maybe<Scalars['String']['output']>;
  variantId?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  package?: Maybe<IoRestorecommerceProductPackage>;
};

export type IoRestorecommerceProductPackage = {
  __typename?: 'IoRestorecommerceProductPackage';
  sizeInCm?: Maybe<IoRestorecommerceGeometryBoundingBox3D>;
  weightInKg?: Maybe<Scalars['Float']['output']>;
  rotatable?: Maybe<Scalars['Boolean']['output']>;
};

export type IoRestorecommerceTaxVat = {
  __typename?: 'IoRestorecommerceTaxVAT';
  taxId?: Maybe<Scalars['String']['output']>;
  vat?: Maybe<Scalars['Float']['output']>;
};

export type IoRestorecommerceAddressShippingAddress = {
  __typename?: 'IoRestorecommerceAddressShippingAddress';
  address?: Maybe<IoRestorecommerceAddressAddress>;
  contact?: Maybe<IoRestorecommerceAddressContact>;
  comments?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceAddressAddress = {
  __typename?: 'IoRestorecommerceAddressAddress';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  postcode?: Maybe<Scalars['String']['output']>;
  countryId?: Maybe<Scalars['String']['output']>;
  country?: Maybe<IoRestorecommerceCountryCountry>;
  locality?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  geoCoordinates?: Maybe<IoRestorecommerceAddressGeoPoint>;
  altitude?: Maybe<Scalars['Float']['output']>;
  buildingNumber?: Maybe<Scalars['String']['output']>;
  addressAddition?: Maybe<IoRestorecommerceAddressAddressAddition>;
  businessAddress?: Maybe<IoRestorecommerceAddressBusinessAddress>;
  residentialAddress?: Maybe<IoRestorecommerceAddressResidentialAddress>;
  packStation?: Maybe<IoRestorecommerceAddressPackStation>;
};

export type IoRestorecommerceCountryCountry = {
  __typename?: 'IoRestorecommerceCountryCountry';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  geographicalName?: Maybe<Scalars['String']['output']>;
  economicAreas?: Maybe<Array<Scalars['String']['output']>>;
};

export type IoRestorecommerceAddressGeoPoint = {
  __typename?: 'IoRestorecommerceAddressGeoPoint';
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

export type IoRestorecommerceAddressAddressAddition = {
  __typename?: 'IoRestorecommerceAddressAddressAddition';
  field1?: Maybe<Scalars['String']['output']>;
  field2?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceAddressBusinessAddress = {
  __typename?: 'IoRestorecommerceAddressBusinessAddress';
  name?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceAddressResidentialAddress = {
  __typename?: 'IoRestorecommerceAddressResidentialAddress';
  title?: Maybe<Scalars['String']['output']>;
  givenName?: Maybe<Scalars['String']['output']>;
  midName?: Maybe<Scalars['String']['output']>;
  familyName?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceAddressPackStation = {
  __typename?: 'IoRestorecommerceAddressPackStation';
  provider?: Maybe<Scalars['String']['output']>;
  stationNumber?: Maybe<Scalars['String']['output']>;
  postNumber?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceAddressContact = {
  __typename?: 'IoRestorecommerceAddressContact';
  name?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceFulfillmentLabel = {
  __typename?: 'IoRestorecommerceFulfillmentLabel';
  url?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  png?: Maybe<Scalars['String']['output']>;
  parcelId?: Maybe<Scalars['String']['output']>;
  shipmentNumber?: Maybe<Scalars['String']['output']>;
  state?: Maybe<IoRestorecommerceFulfillmentState>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export enum IoRestorecommerceFulfillmentState {
  Created = 0,
  Invalid = 1,
  Failed = 2,
  Submitted = 3,
  InTransit = 4,
  Fulfilled = 5,
  Withdrawn = 6,
  Cancelled = 7
}

export type IoRestorecommerceStatusStatus = {
  __typename?: 'IoRestorecommerceStatusStatus';
  id?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceFulfillmentTracking = {
  __typename?: 'IoRestorecommerceFulfillmentTracking';
  shipmentNumber?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<IoRestorecommerceFulfillmentEvent>>;
  details?: Maybe<GoogleProtobufAny>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceFulfillmentEvent = {
  __typename?: 'IoRestorecommerceFulfillmentEvent';
  timestamp?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  details?: Maybe<GoogleProtobufAny>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceStatusOperationStatus = {
  __typename?: 'IoRestorecommerceStatusOperationStatus';
  code?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type IIoRestorecommerceResourcebaseReadRequest = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sorts?: InputMaybe<Array<IIoRestorecommerceResourcebaseSort>>;
  filters?: InputMaybe<Array<IIoRestorecommerceResourcebaseFilterOp>>;
  fields?: InputMaybe<Array<IIoRestorecommerceResourcebaseFieldFilter>>;
  localesLimiter?: InputMaybe<Array<Scalars['String']['input']>>;
  customQueries?: InputMaybe<Array<Scalars['String']['input']>>;
  customArguments?: InputMaybe<IGoogleProtobufAny>;
  search?: InputMaybe<IIoRestorecommerceResourcebaseSearch>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceResourcebaseSort = {
  field?: InputMaybe<Scalars['String']['input']>;
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
  field?: InputMaybe<Scalars['String']['input']>;
  operation?: InputMaybe<IoRestorecommerceResourcebaseFilterOperation>;
  value?: InputMaybe<Scalars['String']['input']>;
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
  field?: InputMaybe<Scalars['String']['input']>;
  operation?: InputMaybe<IoRestorecommerceFilterFilterOperation>;
  value?: InputMaybe<Scalars['String']['input']>;
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
  name?: InputMaybe<Scalars['String']['input']>;
  include?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IGoogleProtobufAny = {
  typeUrl?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['GoogleProtobufAnyValue']['input']>;
};

export type IIoRestorecommerceResourcebaseSearch = {
  search?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<Scalars['String']['input']>>;
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FulfillmentFulfillmentCourierQuery = {
  __typename?: 'FulfillmentFulfillmentCourierQuery';
  Read?: Maybe<ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse>;
};


export type FulfillmentFulfillmentCourierQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse = {
  __typename?: 'ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse';
  details?: Maybe<IoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse>;
};

export type IoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse = {
  __typename?: 'IoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse';
  items?: Maybe<Array<IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse = {
  __typename?: 'IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse';
  payload?: Maybe<IoRestorecommerceFulfillmentCourierFulfillmentCourier>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type FulfillmentFulfillmentProductQuery = {
  __typename?: 'FulfillmentFulfillmentProductQuery';
  Read?: Maybe<ProtoIoRestorecommerceFulfillmentProductFulfillmentProductListResponse>;
  Find?: Maybe<ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponse>;
};


export type FulfillmentFulfillmentProductQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};


export type FulfillmentFulfillmentProductQueryFindArgs = {
  input: IIoRestorecommerceFulfillmentProductProductQueryList;
};

export type ProtoIoRestorecommerceFulfillmentProductFulfillmentProductListResponse = {
  __typename?: 'ProtoIoRestorecommerceFulfillmentProductFulfillmentProductListResponse';
  details?: Maybe<IoRestorecommerceFulfillmentProductFulfillmentProductListResponse>;
};

export type IoRestorecommerceFulfillmentProductFulfillmentProductListResponse = {
  __typename?: 'IoRestorecommerceFulfillmentProductFulfillmentProductListResponse';
  items?: Maybe<Array<IoRestorecommerceFulfillmentProductFulfillmentProductResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceFulfillmentProductFulfillmentProductResponse = {
  __typename?: 'IoRestorecommerceFulfillmentProductFulfillmentProductResponse';
  payload?: Maybe<IoRestorecommerceFulfillmentProductFulfillmentProduct>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponse = {
  __typename?: 'ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponse';
  details?: Maybe<IoRestorecommerceFulfillmentProductPackingSolutionListResponse>;
};

export type IoRestorecommerceFulfillmentProductPackingSolutionListResponse = {
  __typename?: 'IoRestorecommerceFulfillmentProductPackingSolutionListResponse';
  items?: Maybe<Array<IoRestorecommerceFulfillmentProductPackingSolutionResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceFulfillmentProductPackingSolutionResponse = {
  __typename?: 'IoRestorecommerceFulfillmentProductPackingSolutionResponse';
  referenceId?: Maybe<Scalars['String']['output']>;
  solutions?: Maybe<Array<IoRestorecommerceFulfillmentProductPackingSolution>>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceFulfillmentProductPackingSolution = {
  __typename?: 'IoRestorecommerceFulfillmentProductPackingSolution';
  price?: Maybe<Scalars['Float']['output']>;
  compactness?: Maybe<Scalars['Float']['output']>;
  homogeneity?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  parcels?: Maybe<Array<IoRestorecommerceFulfillmentParcel>>;
  vats?: Maybe<Array<IoRestorecommerceTaxVat>>;
};

export type IIoRestorecommerceFulfillmentProductProductQueryList = {
  items?: InputMaybe<Array<IIoRestorecommerceFulfillmentProductProductQuery>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
};

export type IIoRestorecommerceFulfillmentProductProductQuery = {
  sender?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
  receiver?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
  items?: InputMaybe<Array<IIoRestorecommerceFulfillmentFulfillmentItem>>;
  preferences?: InputMaybe<IIoRestorecommerceFulfillmentProductPreferences>;
  referenceId?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceAddressShippingAddress = {
  address?: InputMaybe<IIoRestorecommerceAddressAddress>;
  contact?: InputMaybe<IIoRestorecommerceAddressContact>;
  comments?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceAddressAddress = {
  id?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  postcode?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['String']['input']>;
  locality?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  geoCoordinates?: InputMaybe<IIoRestorecommerceAddressGeoPoint>;
  altitude?: InputMaybe<Scalars['Float']['input']>;
  buildingNumber?: InputMaybe<Scalars['String']['input']>;
  addressAddition?: InputMaybe<IIoRestorecommerceAddressAddressAddition>;
  businessAddress?: InputMaybe<IIoRestorecommerceAddressBusinessAddress>;
  residentialAddress?: InputMaybe<IIoRestorecommerceAddressResidentialAddress>;
  packStation?: InputMaybe<IIoRestorecommerceAddressPackStation>;
};

export type IIoRestorecommerceMetaMeta = {
  created?: InputMaybe<Scalars['Float']['input']>;
  modified?: InputMaybe<Scalars['Float']['input']>;
  modifiedBy?: InputMaybe<Scalars['String']['input']>;
  owners?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  acls?: InputMaybe<Array<IIoRestorecommerceAttributeAttributeObj>>;
};

export type IIoRestorecommerceAttributeAttribute = {
  id?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type IIoRestorecommerceAttributeAttributeObj = {
  attributes?: InputMaybe<IIoRestorecommerceAttributeAttribute>;
};

export type IIoRestorecommerceAddressGeoPoint = {
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
};

export type IIoRestorecommerceAddressAddressAddition = {
  field1?: InputMaybe<Scalars['String']['input']>;
  field2?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceAddressBusinessAddress = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceAddressResidentialAddress = {
  title?: InputMaybe<Scalars['String']['input']>;
  givenName?: InputMaybe<Scalars['String']['input']>;
  midName?: InputMaybe<Scalars['String']['input']>;
  familyName?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceAddressPackStation = {
  provider?: InputMaybe<Scalars['String']['input']>;
  stationNumber?: InputMaybe<Scalars['String']['input']>;
  postNumber?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceAddressContact = {
  name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceFulfillmentFulfillmentItem = {
  productId?: InputMaybe<Scalars['String']['input']>;
  variantId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  package?: InputMaybe<IIoRestorecommerceProductPackage>;
};

export type IIoRestorecommerceProductPackage = {
  sizeInCm?: InputMaybe<IIoRestorecommerceGeometryBoundingBox3D>;
  weightInKg?: InputMaybe<Scalars['Float']['input']>;
  rotatable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IIoRestorecommerceGeometryBoundingBox3D = {
  width?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
};

export type IIoRestorecommerceFulfillmentProductPreferences = {
  couriers?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  options?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
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
  Mutate?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
  Evaluate?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
  Submit?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
  Track?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
  Withdraw?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
  Cancel?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type FulfillmentFulfillmentMutationMutateArgs = {
  input: IIoRestorecommerceFulfillmentFulfillmentList;
};


export type FulfillmentFulfillmentMutationEvaluateArgs = {
  input: IIoRestorecommerceFulfillmentFulfillmentList;
};


export type FulfillmentFulfillmentMutationSubmitArgs = {
  input: IIoRestorecommerceFulfillmentFulfillmentList;
};


export type FulfillmentFulfillmentMutationTrackArgs = {
  input: IIoRestorecommerceFulfillmentFulfillmentIdList;
};


export type FulfillmentFulfillmentMutationWithdrawArgs = {
  input: IIoRestorecommerceFulfillmentFulfillmentIdList;
};


export type FulfillmentFulfillmentMutationCancelArgs = {
  input: IIoRestorecommerceFulfillmentFulfillmentIdList;
};


export type FulfillmentFulfillmentMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceFulfillmentFulfillmentList = {
  items?: InputMaybe<Array<IIoRestorecommerceFulfillmentFulfillment>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceFulfillmentFulfillment = {
  id?: InputMaybe<Scalars['String']['input']>;
  packaging?: InputMaybe<IIoRestorecommerceFulfillmentPackaging>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  labels?: InputMaybe<Array<IIoRestorecommerceFulfillmentLabel>>;
  trackings?: InputMaybe<Array<IIoRestorecommerceFulfillmentTracking>>;
  state?: InputMaybe<IoRestorecommerceFulfillmentState>;
  totalPrice?: InputMaybe<Scalars['Float']['input']>;
  totalVat?: InputMaybe<Scalars['Float']['input']>;
};

export type IIoRestorecommerceFulfillmentPackaging = {
  referenceId?: InputMaybe<Scalars['String']['input']>;
  parcels?: InputMaybe<Array<IIoRestorecommerceFulfillmentParcel>>;
  sender?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
  receiver?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
  notify?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceFulfillmentParcel = {
  id?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  variantId?: InputMaybe<Scalars['String']['input']>;
  item?: InputMaybe<IIoRestorecommerceFulfillmentFulfillmentItem>;
  price?: InputMaybe<Scalars['Float']['input']>;
  vats?: InputMaybe<Array<IIoRestorecommerceTaxVat>>;
  package?: InputMaybe<IIoRestorecommerceProductPackage>;
};

export type IIoRestorecommerceTaxVat = {
  taxId?: InputMaybe<Scalars['String']['input']>;
  vat?: InputMaybe<Scalars['Float']['input']>;
};

export type IIoRestorecommerceFulfillmentLabel = {
  url?: InputMaybe<Scalars['String']['input']>;
  pdf?: InputMaybe<Scalars['String']['input']>;
  png?: InputMaybe<Scalars['String']['input']>;
  parcelId?: InputMaybe<Scalars['String']['input']>;
  shipmentNumber?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<IoRestorecommerceFulfillmentState>;
  status?: InputMaybe<IIoRestorecommerceStatusStatus>;
};

export type IIoRestorecommerceStatusStatus = {
  id?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceFulfillmentTracking = {
  shipmentNumber?: InputMaybe<Scalars['String']['input']>;
  events?: InputMaybe<Array<IIoRestorecommerceFulfillmentEvent>>;
  details?: InputMaybe<IGoogleProtobufAny>;
  status?: InputMaybe<IIoRestorecommerceStatusStatus>;
};

export type IIoRestorecommerceFulfillmentEvent = {
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<IGoogleProtobufAny>;
  status?: InputMaybe<IIoRestorecommerceStatusStatus>;
};

export enum ModeType {
  Create = 'CREATE',
  Update = 'UPDATE',
  Upsert = 'UPSERT'
}

export type IIoRestorecommerceFulfillmentFulfillmentIdList = {
  items?: InputMaybe<Array<IIoRestorecommerceFulfillmentFulfillmentId>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
};

export type IIoRestorecommerceFulfillmentFulfillmentId = {
  id?: InputMaybe<Scalars['String']['input']>;
  shipmentNumbers?: InputMaybe<Array<Scalars['String']['input']>>;
  options?: InputMaybe<IGoogleProtobufAny>;
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
  collection?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  views?: InputMaybe<Array<Scalars['String']['input']>>;
  analyzers?: InputMaybe<Array<Scalars['String']['input']>>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type FulfillmentFulfillmentCourierMutation = {
  __typename?: 'FulfillmentFulfillmentCourierMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse>;
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
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceFulfillmentCourierFulfillmentCourier = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  stubType?: InputMaybe<Scalars['String']['input']>;
  configuration?: InputMaybe<IGoogleProtobufAny>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
};

export type FulfillmentFulfillmentProductMutation = {
  __typename?: 'FulfillmentFulfillmentProductMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceFulfillmentProductFulfillmentProductListResponse>;
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
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceFulfillmentProductFulfillmentProduct = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  courierId?: InputMaybe<Scalars['String']['input']>;
  startZones?: InputMaybe<Array<Scalars['String']['input']>>;
  destinationZones?: InputMaybe<Array<Scalars['String']['input']>>;
  taxIds?: InputMaybe<Array<Scalars['String']['input']>>;
  attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  variants?: InputMaybe<Array<IIoRestorecommerceFulfillmentProductVariant>>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
};

export type IIoRestorecommerceFulfillmentProductVariant = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  maxSize?: InputMaybe<IIoRestorecommerceGeometryBoundingBox3D>;
  maxWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  orderingOrders?: Maybe<SubscriptionOutput>;
  catalogProducts?: Maybe<SubscriptionOutput>;
  fulfillmentFulfillments?: Maybe<SubscriptionOutput>;
  fulfillmentFulfillmentCouriers?: Maybe<SubscriptionOutput>;
  fulfillmentFulfillment_products?: Maybe<SubscriptionOutput>;
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

export type SubscriptionOutput = {
  __typename?: 'SubscriptionOutput';
  id?: Maybe<Scalars['String']['output']>;
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
  ProtoIoRestorecommerceFulfillmentFulfillmentListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
  IoRestorecommerceFulfillmentFulfillmentListResponse: ResolverTypeWrapper<IoRestorecommerceFulfillmentFulfillmentListResponse>;
  IoRestorecommerceFulfillmentFulfillmentResponse: ResolverTypeWrapper<IoRestorecommerceFulfillmentFulfillmentResponse>;
  IoRestorecommerceFulfillmentFulfillment: ResolverTypeWrapper<IoRestorecommerceFulfillmentFulfillment>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  IoRestorecommerceFulfillmentPackaging: ResolverTypeWrapper<IoRestorecommerceFulfillmentPackaging>;
  IoRestorecommerceFulfillmentParcel: ResolverTypeWrapper<IoRestorecommerceFulfillmentParcel>;
  IoRestorecommerceFulfillmentProductFulfillmentProduct: ResolverTypeWrapper<IoRestorecommerceFulfillmentProductFulfillmentProduct>;
  IoRestorecommerceFulfillmentCourierFulfillmentCourier: ResolverTypeWrapper<IoRestorecommerceFulfillmentCourierFulfillmentCourier>;
  GoogleProtobufAny: ResolverTypeWrapper<GoogleProtobufAny>;
  GoogleProtobufAnyValue: ResolverTypeWrapper<Scalars['GoogleProtobufAnyValue']['output']>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  IoRestorecommerceAttributeAttributeObj: ResolverTypeWrapper<IoRestorecommerceAttributeAttributeObj>;
  IoRestorecommerceFulfillmentProductVariant: ResolverTypeWrapper<IoRestorecommerceFulfillmentProductVariant>;
  IoRestorecommerceGeometryBoundingBox3D: ResolverTypeWrapper<IoRestorecommerceGeometryBoundingBox3D>;
  IoRestorecommerceFulfillmentFulfillmentItem: ResolverTypeWrapper<IoRestorecommerceFulfillmentFulfillmentItem>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  IoRestorecommerceProductPackage: ResolverTypeWrapper<IoRestorecommerceProductPackage>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  IoRestorecommerceTaxVAT: ResolverTypeWrapper<IoRestorecommerceTaxVat>;
  IoRestorecommerceAddressShippingAddress: ResolverTypeWrapper<IoRestorecommerceAddressShippingAddress>;
  IoRestorecommerceAddressAddress: ResolverTypeWrapper<IoRestorecommerceAddressAddress>;
  IoRestorecommerceCountryCountry: ResolverTypeWrapper<IoRestorecommerceCountryCountry>;
  IoRestorecommerceAddressGeoPoint: ResolverTypeWrapper<IoRestorecommerceAddressGeoPoint>;
  IoRestorecommerceAddressAddressAddition: ResolverTypeWrapper<IoRestorecommerceAddressAddressAddition>;
  IoRestorecommerceAddressBusinessAddress: ResolverTypeWrapper<IoRestorecommerceAddressBusinessAddress>;
  IoRestorecommerceAddressResidentialAddress: ResolverTypeWrapper<IoRestorecommerceAddressResidentialAddress>;
  IoRestorecommerceAddressPackStation: ResolverTypeWrapper<IoRestorecommerceAddressPackStation>;
  IoRestorecommerceAddressContact: ResolverTypeWrapper<IoRestorecommerceAddressContact>;
  IoRestorecommerceFulfillmentLabel: ResolverTypeWrapper<IoRestorecommerceFulfillmentLabel>;
  IoRestorecommerceFulfillmentState: IoRestorecommerceFulfillmentState;
  IoRestorecommerceStatusStatus: ResolverTypeWrapper<IoRestorecommerceStatusStatus>;
  IoRestorecommerceFulfillmentTracking: ResolverTypeWrapper<IoRestorecommerceFulfillmentTracking>;
  IoRestorecommerceFulfillmentEvent: ResolverTypeWrapper<IoRestorecommerceFulfillmentEvent>;
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
  FulfillmentFulfillmentCourierQuery: ResolverTypeWrapper<FulfillmentFulfillmentCourierQuery>;
  ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse>;
  IoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse: ResolverTypeWrapper<IoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse>;
  IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse: ResolverTypeWrapper<IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse>;
  FulfillmentFulfillmentProductQuery: ResolverTypeWrapper<FulfillmentFulfillmentProductQuery>;
  ProtoIoRestorecommerceFulfillmentProductFulfillmentProductListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceFulfillmentProductFulfillmentProductListResponse>;
  IoRestorecommerceFulfillmentProductFulfillmentProductListResponse: ResolverTypeWrapper<IoRestorecommerceFulfillmentProductFulfillmentProductListResponse>;
  IoRestorecommerceFulfillmentProductFulfillmentProductResponse: ResolverTypeWrapper<IoRestorecommerceFulfillmentProductFulfillmentProductResponse>;
  ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponse>;
  IoRestorecommerceFulfillmentProductPackingSolutionListResponse: ResolverTypeWrapper<IoRestorecommerceFulfillmentProductPackingSolutionListResponse>;
  IoRestorecommerceFulfillmentProductPackingSolutionResponse: ResolverTypeWrapper<IoRestorecommerceFulfillmentProductPackingSolutionResponse>;
  IoRestorecommerceFulfillmentProductPackingSolution: ResolverTypeWrapper<IoRestorecommerceFulfillmentProductPackingSolution>;
  IIoRestorecommerceFulfillmentProductProductQueryList: IIoRestorecommerceFulfillmentProductProductQueryList;
  IIoRestorecommerceFulfillmentProductProductQuery: IIoRestorecommerceFulfillmentProductProductQuery;
  IIoRestorecommerceAddressShippingAddress: IIoRestorecommerceAddressShippingAddress;
  IIoRestorecommerceAddressAddress: IIoRestorecommerceAddressAddress;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAttributeAttributeObj: IIoRestorecommerceAttributeAttributeObj;
  IIoRestorecommerceAddressGeoPoint: IIoRestorecommerceAddressGeoPoint;
  IIoRestorecommerceAddressAddressAddition: IIoRestorecommerceAddressAddressAddition;
  IIoRestorecommerceAddressBusinessAddress: IIoRestorecommerceAddressBusinessAddress;
  IIoRestorecommerceAddressResidentialAddress: IIoRestorecommerceAddressResidentialAddress;
  IIoRestorecommerceAddressPackStation: IIoRestorecommerceAddressPackStation;
  IIoRestorecommerceAddressContact: IIoRestorecommerceAddressContact;
  IIoRestorecommerceFulfillmentFulfillmentItem: IIoRestorecommerceFulfillmentFulfillmentItem;
  IIoRestorecommerceProductPackage: IIoRestorecommerceProductPackage;
  IIoRestorecommerceGeometryBoundingBox3D: IIoRestorecommerceGeometryBoundingBox3D;
  IIoRestorecommerceFulfillmentProductPreferences: IIoRestorecommerceFulfillmentProductPreferences;
  Mutation: ResolverTypeWrapper<{}>;
  FulfillmentMutation: ResolverTypeWrapper<FulfillmentMutation>;
  FulfillmentFulfillmentMutation: ResolverTypeWrapper<FulfillmentFulfillmentMutation>;
  IIoRestorecommerceFulfillmentFulfillmentList: IIoRestorecommerceFulfillmentFulfillmentList;
  IIoRestorecommerceFulfillmentFulfillment: IIoRestorecommerceFulfillmentFulfillment;
  IIoRestorecommerceFulfillmentPackaging: IIoRestorecommerceFulfillmentPackaging;
  IIoRestorecommerceFulfillmentParcel: IIoRestorecommerceFulfillmentParcel;
  IIoRestorecommerceTaxVAT: IIoRestorecommerceTaxVat;
  IIoRestorecommerceFulfillmentLabel: IIoRestorecommerceFulfillmentLabel;
  IIoRestorecommerceStatusStatus: IIoRestorecommerceStatusStatus;
  IIoRestorecommerceFulfillmentTracking: IIoRestorecommerceFulfillmentTracking;
  IIoRestorecommerceFulfillmentEvent: IIoRestorecommerceFulfillmentEvent;
  ModeType: ModeType;
  IIoRestorecommerceFulfillmentFulfillmentIdList: IIoRestorecommerceFulfillmentFulfillmentIdList;
  IIoRestorecommerceFulfillmentFulfillmentId: IIoRestorecommerceFulfillmentFulfillmentId;
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
  ProtoIoRestorecommerceFulfillmentFulfillmentListResponse: ProtoIoRestorecommerceFulfillmentFulfillmentListResponse;
  IoRestorecommerceFulfillmentFulfillmentListResponse: IoRestorecommerceFulfillmentFulfillmentListResponse;
  IoRestorecommerceFulfillmentFulfillmentResponse: IoRestorecommerceFulfillmentFulfillmentResponse;
  IoRestorecommerceFulfillmentFulfillment: IoRestorecommerceFulfillmentFulfillment;
  String: Scalars['String']['output'];
  IoRestorecommerceFulfillmentPackaging: IoRestorecommerceFulfillmentPackaging;
  IoRestorecommerceFulfillmentParcel: IoRestorecommerceFulfillmentParcel;
  IoRestorecommerceFulfillmentProductFulfillmentProduct: IoRestorecommerceFulfillmentProductFulfillmentProduct;
  IoRestorecommerceFulfillmentCourierFulfillmentCourier: IoRestorecommerceFulfillmentCourierFulfillmentCourier;
  GoogleProtobufAny: GoogleProtobufAny;
  GoogleProtobufAnyValue: Scalars['GoogleProtobufAnyValue']['output'];
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  Float: Scalars['Float']['output'];
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  IoRestorecommerceAttributeAttributeObj: IoRestorecommerceAttributeAttributeObj;
  IoRestorecommerceFulfillmentProductVariant: IoRestorecommerceFulfillmentProductVariant;
  IoRestorecommerceGeometryBoundingBox3D: IoRestorecommerceGeometryBoundingBox3D;
  IoRestorecommerceFulfillmentFulfillmentItem: IoRestorecommerceFulfillmentFulfillmentItem;
  Int: Scalars['Int']['output'];
  IoRestorecommerceProductPackage: IoRestorecommerceProductPackage;
  Boolean: Scalars['Boolean']['output'];
  IoRestorecommerceTaxVAT: IoRestorecommerceTaxVat;
  IoRestorecommerceAddressShippingAddress: IoRestorecommerceAddressShippingAddress;
  IoRestorecommerceAddressAddress: IoRestorecommerceAddressAddress;
  IoRestorecommerceCountryCountry: IoRestorecommerceCountryCountry;
  IoRestorecommerceAddressGeoPoint: IoRestorecommerceAddressGeoPoint;
  IoRestorecommerceAddressAddressAddition: IoRestorecommerceAddressAddressAddition;
  IoRestorecommerceAddressBusinessAddress: IoRestorecommerceAddressBusinessAddress;
  IoRestorecommerceAddressResidentialAddress: IoRestorecommerceAddressResidentialAddress;
  IoRestorecommerceAddressPackStation: IoRestorecommerceAddressPackStation;
  IoRestorecommerceAddressContact: IoRestorecommerceAddressContact;
  IoRestorecommerceFulfillmentLabel: IoRestorecommerceFulfillmentLabel;
  IoRestorecommerceStatusStatus: IoRestorecommerceStatusStatus;
  IoRestorecommerceFulfillmentTracking: IoRestorecommerceFulfillmentTracking;
  IoRestorecommerceFulfillmentEvent: IoRestorecommerceFulfillmentEvent;
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
  FulfillmentFulfillmentCourierQuery: FulfillmentFulfillmentCourierQuery;
  ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse: ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse;
  IoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse: IoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse;
  IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse: IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse;
  FulfillmentFulfillmentProductQuery: FulfillmentFulfillmentProductQuery;
  ProtoIoRestorecommerceFulfillmentProductFulfillmentProductListResponse: ProtoIoRestorecommerceFulfillmentProductFulfillmentProductListResponse;
  IoRestorecommerceFulfillmentProductFulfillmentProductListResponse: IoRestorecommerceFulfillmentProductFulfillmentProductListResponse;
  IoRestorecommerceFulfillmentProductFulfillmentProductResponse: IoRestorecommerceFulfillmentProductFulfillmentProductResponse;
  ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponse: ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponse;
  IoRestorecommerceFulfillmentProductPackingSolutionListResponse: IoRestorecommerceFulfillmentProductPackingSolutionListResponse;
  IoRestorecommerceFulfillmentProductPackingSolutionResponse: IoRestorecommerceFulfillmentProductPackingSolutionResponse;
  IoRestorecommerceFulfillmentProductPackingSolution: IoRestorecommerceFulfillmentProductPackingSolution;
  IIoRestorecommerceFulfillmentProductProductQueryList: IIoRestorecommerceFulfillmentProductProductQueryList;
  IIoRestorecommerceFulfillmentProductProductQuery: IIoRestorecommerceFulfillmentProductProductQuery;
  IIoRestorecommerceAddressShippingAddress: IIoRestorecommerceAddressShippingAddress;
  IIoRestorecommerceAddressAddress: IIoRestorecommerceAddressAddress;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAttributeAttributeObj: IIoRestorecommerceAttributeAttributeObj;
  IIoRestorecommerceAddressGeoPoint: IIoRestorecommerceAddressGeoPoint;
  IIoRestorecommerceAddressAddressAddition: IIoRestorecommerceAddressAddressAddition;
  IIoRestorecommerceAddressBusinessAddress: IIoRestorecommerceAddressBusinessAddress;
  IIoRestorecommerceAddressResidentialAddress: IIoRestorecommerceAddressResidentialAddress;
  IIoRestorecommerceAddressPackStation: IIoRestorecommerceAddressPackStation;
  IIoRestorecommerceAddressContact: IIoRestorecommerceAddressContact;
  IIoRestorecommerceFulfillmentFulfillmentItem: IIoRestorecommerceFulfillmentFulfillmentItem;
  IIoRestorecommerceProductPackage: IIoRestorecommerceProductPackage;
  IIoRestorecommerceGeometryBoundingBox3D: IIoRestorecommerceGeometryBoundingBox3D;
  IIoRestorecommerceFulfillmentProductPreferences: IIoRestorecommerceFulfillmentProductPreferences;
  Mutation: {};
  FulfillmentMutation: FulfillmentMutation;
  FulfillmentFulfillmentMutation: FulfillmentFulfillmentMutation;
  IIoRestorecommerceFulfillmentFulfillmentList: IIoRestorecommerceFulfillmentFulfillmentList;
  IIoRestorecommerceFulfillmentFulfillment: IIoRestorecommerceFulfillmentFulfillment;
  IIoRestorecommerceFulfillmentPackaging: IIoRestorecommerceFulfillmentPackaging;
  IIoRestorecommerceFulfillmentParcel: IIoRestorecommerceFulfillmentParcel;
  IIoRestorecommerceTaxVAT: IIoRestorecommerceTaxVat;
  IIoRestorecommerceFulfillmentLabel: IIoRestorecommerceFulfillmentLabel;
  IIoRestorecommerceStatusStatus: IIoRestorecommerceStatusStatus;
  IIoRestorecommerceFulfillmentTracking: IIoRestorecommerceFulfillmentTracking;
  IIoRestorecommerceFulfillmentEvent: IIoRestorecommerceFulfillmentEvent;
  IIoRestorecommerceFulfillmentFulfillmentIdList: IIoRestorecommerceFulfillmentFulfillmentIdList;
  IIoRestorecommerceFulfillmentFulfillmentId: IIoRestorecommerceFulfillmentFulfillmentId;
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
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentFulfillmentListResponse']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceFulfillmentFulfillmentListResponseResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceFulfillmentFulfillmentListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceFulfillmentFulfillmentListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentFulfillmentListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentFulfillmentListResponseResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentFulfillmentListResponse'] = ResolversParentTypes['IoRestorecommerceFulfillmentFulfillmentListResponse']> = ResolversObject<{
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
  packaging?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentPackaging']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  labels?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentLabel']>>, ParentType, ContextType>;
  trackings?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentTracking']>>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentState']>, ParentType, ContextType>;
  totalPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  totalVat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentPackagingResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentPackaging'] = ResolversParentTypes['IoRestorecommerceFulfillmentPackaging']> = ResolversObject<{
  referenceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parcels?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentParcel']>>, ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressShippingAddress']>, ParentType, ContextType>;
  receiver?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressShippingAddress']>, ParentType, ContextType>;
  notify?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentParcelResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentParcel'] = ResolversParentTypes['IoRestorecommerceFulfillmentParcel']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentProductFulfillmentProduct']>, ParentType, ContextType>;
  variantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentFulfillmentItem']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  vats?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceTaxVAT']>>, ParentType, ContextType>;
  package?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductPackage']>, ParentType, ContextType>;
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
  owners?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  acls?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttributeObj']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeObjResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttributeObj'] = ResolversParentTypes['IoRestorecommerceAttributeAttributeObj']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentProductVariantResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentProductVariant'] = ResolversParentTypes['IoRestorecommerceFulfillmentProductVariant']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxSize?: Resolver<Maybe<ResolversTypes['IoRestorecommerceGeometryBoundingBox3D']>, ParentType, ContextType>;
  maxWeight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceGeometryBoundingBox3DResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceGeometryBoundingBox3D'] = ResolversParentTypes['IoRestorecommerceGeometryBoundingBox3D']> = ResolversObject<{
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentFulfillmentItemResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentFulfillmentItem'] = ResolversParentTypes['IoRestorecommerceFulfillmentFulfillmentItem']> = ResolversObject<{
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  variantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  package?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductPackage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductPackageResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductPackage'] = ResolversParentTypes['IoRestorecommerceProductPackage']> = ResolversObject<{
  sizeInCm?: Resolver<Maybe<ResolversTypes['IoRestorecommerceGeometryBoundingBox3D']>, ParentType, ContextType>;
  weightInKg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rotatable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTaxVatResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceTaxVAT'] = ResolversParentTypes['IoRestorecommerceTaxVAT']> = ResolversObject<{
  taxId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressShippingAddressResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressShippingAddress'] = ResolversParentTypes['IoRestorecommerceAddressShippingAddress']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressAddress']>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressContact']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type IoRestorecommerceAddressContactResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressContact'] = ResolversParentTypes['IoRestorecommerceAddressContact']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentLabelResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentLabel'] = ResolversParentTypes['IoRestorecommerceFulfillmentLabel']> = ResolversObject<{
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pdf?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  png?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parcelId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shipmentNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentState']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentStateResolvers = { Created: 0, Invalid: 1, Failed: 2, Submitted: 3, InTransit: 4, Fulfilled: 5, Withdrawn: 6, Cancelled: 7 };

export type IoRestorecommerceStatusStatusResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusStatus'] = ResolversParentTypes['IoRestorecommerceStatusStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type FulfillmentFulfillmentCourierQueryResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['FulfillmentFulfillmentCourierQuery'] = ResolversParentTypes['FulfillmentFulfillmentCourierQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentCourierQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierListResponseResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentCourierFulfillmentCourierListResponseResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse'] = ResolversParentTypes['IoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse']> = ResolversObject<{
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
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentProductFulfillmentProductListResponse']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentProductQueryReadArgs, 'input'>>;
  Find?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponse']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentProductQueryFindArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceFulfillmentProductFulfillmentProductListResponseResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceFulfillmentProductFulfillmentProductListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceFulfillmentProductFulfillmentProductListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentProductFulfillmentProductListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentProductFulfillmentProductListResponseResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentProductFulfillmentProductListResponse'] = ResolversParentTypes['IoRestorecommerceFulfillmentProductFulfillmentProductListResponse']> = ResolversObject<{
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

export type ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponseResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentProductPackingSolutionListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentProductPackingSolutionListResponseResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentProductPackingSolutionListResponse'] = ResolversParentTypes['IoRestorecommerceFulfillmentProductPackingSolutionListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentProductPackingSolutionResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentProductPackingSolutionResponseResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentProductPackingSolutionResponse'] = ResolversParentTypes['IoRestorecommerceFulfillmentProductPackingSolutionResponse']> = ResolversObject<{
  referenceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  solutions?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentProductPackingSolution']>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentProductPackingSolutionResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentProductPackingSolution'] = ResolversParentTypes['IoRestorecommerceFulfillmentProductPackingSolution']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  compactness?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  homogeneity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  parcels?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentParcel']>>, ParentType, ContextType>;
  vats?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceTaxVAT']>>, ParentType, ContextType>;
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
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentFulfillmentListResponse']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentMutationMutateArgs, 'input'>>;
  Evaluate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentFulfillmentListResponse']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentMutationEvaluateArgs, 'input'>>;
  Submit?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentFulfillmentListResponse']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentMutationSubmitArgs, 'input'>>;
  Track?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentFulfillmentListResponse']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentMutationTrackArgs, 'input'>>;
  Withdraw?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentFulfillmentListResponse']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentMutationWithdrawArgs, 'input'>>;
  Cancel?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentFulfillmentListResponse']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentMutationCancelArgs, 'input'>>;
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
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentCourierMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentCourierMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FulfillmentFulfillmentProductMutationResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['FulfillmentFulfillmentProductMutation'] = ResolversParentTypes['FulfillmentFulfillmentProductMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentProductFulfillmentProductListResponse']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentProductMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<FulfillmentFulfillmentProductMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  orderingOrders?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "orderingOrders", ParentType, ContextType, Partial<SubscriptionOrderingOrdersArgs>>;
  catalogProducts?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "catalogProducts", ParentType, ContextType, Partial<SubscriptionCatalogProductsArgs>>;
  fulfillmentFulfillments?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "fulfillmentFulfillments", ParentType, ContextType, Partial<SubscriptionFulfillmentFulfillmentsArgs>>;
  fulfillmentFulfillmentCouriers?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "fulfillmentFulfillmentCouriers", ParentType, ContextType, Partial<SubscriptionFulfillmentFulfillmentCouriersArgs>>;
  fulfillmentFulfillment_products?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "fulfillmentFulfillment_products", ParentType, ContextType, Partial<SubscriptionFulfillmentFulfillment_ProductsArgs>>;
}>;

export type SubscriptionOutputResolvers<ContextType = FulfillmentContext, ParentType extends ResolversParentTypes['SubscriptionOutput'] = ResolversParentTypes['SubscriptionOutput']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = FulfillmentContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  FulfillmentQuery?: FulfillmentQueryResolvers<ContextType>;
  FulfillmentFulfillmentQuery?: FulfillmentFulfillmentQueryResolvers<ContextType>;
  ProtoIoRestorecommerceFulfillmentFulfillmentListResponse?: ProtoIoRestorecommerceFulfillmentFulfillmentListResponseResolvers<ContextType>;
  IoRestorecommerceFulfillmentFulfillmentListResponse?: IoRestorecommerceFulfillmentFulfillmentListResponseResolvers<ContextType>;
  IoRestorecommerceFulfillmentFulfillmentResponse?: IoRestorecommerceFulfillmentFulfillmentResponseResolvers<ContextType>;
  IoRestorecommerceFulfillmentFulfillment?: IoRestorecommerceFulfillmentFulfillmentResolvers<ContextType>;
  IoRestorecommerceFulfillmentPackaging?: IoRestorecommerceFulfillmentPackagingResolvers<ContextType>;
  IoRestorecommerceFulfillmentParcel?: IoRestorecommerceFulfillmentParcelResolvers<ContextType>;
  IoRestorecommerceFulfillmentProductFulfillmentProduct?: IoRestorecommerceFulfillmentProductFulfillmentProductResolvers<ContextType>;
  IoRestorecommerceFulfillmentCourierFulfillmentCourier?: IoRestorecommerceFulfillmentCourierFulfillmentCourierResolvers<ContextType>;
  GoogleProtobufAny?: GoogleProtobufAnyResolvers<ContextType>;
  GoogleProtobufAnyValue?: GraphQLScalarType;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
  IoRestorecommerceAttributeAttributeObj?: IoRestorecommerceAttributeAttributeObjResolvers<ContextType>;
  IoRestorecommerceFulfillmentProductVariant?: IoRestorecommerceFulfillmentProductVariantResolvers<ContextType>;
  IoRestorecommerceGeometryBoundingBox3D?: IoRestorecommerceGeometryBoundingBox3DResolvers<ContextType>;
  IoRestorecommerceFulfillmentFulfillmentItem?: IoRestorecommerceFulfillmentFulfillmentItemResolvers<ContextType>;
  IoRestorecommerceProductPackage?: IoRestorecommerceProductPackageResolvers<ContextType>;
  IoRestorecommerceTaxVAT?: IoRestorecommerceTaxVatResolvers<ContextType>;
  IoRestorecommerceAddressShippingAddress?: IoRestorecommerceAddressShippingAddressResolvers<ContextType>;
  IoRestorecommerceAddressAddress?: IoRestorecommerceAddressAddressResolvers<ContextType>;
  IoRestorecommerceCountryCountry?: IoRestorecommerceCountryCountryResolvers<ContextType>;
  IoRestorecommerceAddressGeoPoint?: IoRestorecommerceAddressGeoPointResolvers<ContextType>;
  IoRestorecommerceAddressAddressAddition?: IoRestorecommerceAddressAddressAdditionResolvers<ContextType>;
  IoRestorecommerceAddressBusinessAddress?: IoRestorecommerceAddressBusinessAddressResolvers<ContextType>;
  IoRestorecommerceAddressResidentialAddress?: IoRestorecommerceAddressResidentialAddressResolvers<ContextType>;
  IoRestorecommerceAddressPackStation?: IoRestorecommerceAddressPackStationResolvers<ContextType>;
  IoRestorecommerceAddressContact?: IoRestorecommerceAddressContactResolvers<ContextType>;
  IoRestorecommerceFulfillmentLabel?: IoRestorecommerceFulfillmentLabelResolvers<ContextType>;
  IoRestorecommerceFulfillmentState?: IoRestorecommerceFulfillmentStateResolvers;
  IoRestorecommerceStatusStatus?: IoRestorecommerceStatusStatusResolvers<ContextType>;
  IoRestorecommerceFulfillmentTracking?: IoRestorecommerceFulfillmentTrackingResolvers<ContextType>;
  IoRestorecommerceFulfillmentEvent?: IoRestorecommerceFulfillmentEventResolvers<ContextType>;
  IoRestorecommerceStatusOperationStatus?: IoRestorecommerceStatusOperationStatusResolvers<ContextType>;
  IoRestorecommerceResourcebaseSortSortOrder?: IoRestorecommerceResourcebaseSortSortOrderResolvers;
  IoRestorecommerceResourcebaseFilterOperation?: IoRestorecommerceResourcebaseFilterOperationResolvers;
  IoRestorecommerceResourcebaseFilterValueType?: IoRestorecommerceResourcebaseFilterValueTypeResolvers;
  IoRestorecommerceFilterFilterOperation?: IoRestorecommerceFilterFilterOperationResolvers;
  IoRestorecommerceFilterFilterValueType?: IoRestorecommerceFilterFilterValueTypeResolvers;
  IoRestorecommerceFilterFilterOpOperator?: IoRestorecommerceFilterFilterOpOperatorResolvers;
  IoRestorecommerceResourcebaseFilterOpOperator?: IoRestorecommerceResourcebaseFilterOpOperatorResolvers;
  FulfillmentFulfillmentCourierQuery?: FulfillmentFulfillmentCourierQueryResolvers<ContextType>;
  ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse?: ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierListResponseResolvers<ContextType>;
  IoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse?: IoRestorecommerceFulfillmentCourierFulfillmentCourierListResponseResolvers<ContextType>;
  IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse?: IoRestorecommerceFulfillmentCourierFulfillmentCourierResponseResolvers<ContextType>;
  FulfillmentFulfillmentProductQuery?: FulfillmentFulfillmentProductQueryResolvers<ContextType>;
  ProtoIoRestorecommerceFulfillmentProductFulfillmentProductListResponse?: ProtoIoRestorecommerceFulfillmentProductFulfillmentProductListResponseResolvers<ContextType>;
  IoRestorecommerceFulfillmentProductFulfillmentProductListResponse?: IoRestorecommerceFulfillmentProductFulfillmentProductListResponseResolvers<ContextType>;
  IoRestorecommerceFulfillmentProductFulfillmentProductResponse?: IoRestorecommerceFulfillmentProductFulfillmentProductResponseResolvers<ContextType>;
  ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponse?: ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponseResolvers<ContextType>;
  IoRestorecommerceFulfillmentProductPackingSolutionListResponse?: IoRestorecommerceFulfillmentProductPackingSolutionListResponseResolvers<ContextType>;
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

