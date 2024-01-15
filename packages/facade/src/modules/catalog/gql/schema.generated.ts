import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { CatalogContext } from '../interfaces.js';
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
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  GoogleProtobufAnyValue: { input: any; output: any; }
  IDateTime: { input: any; output: any; }
};

export type Query = {
  __typename?: 'Query';
  catalog: CatalogQuery;
};

export type CatalogQuery = {
  __typename?: 'CatalogQuery';
  product: CatalogProductQuery;
  product_prototype: CatalogProductPrototypeQuery;
  product_category: CatalogProductCategoryQuery;
  price_group: CatalogPriceGroupQuery;
  manufacturer: CatalogManufacturerQuery;
};

export type CatalogProductQuery = {
  __typename?: 'CatalogProductQuery';
  Read?: Maybe<ProtoIoRestorecommerceProductProductListResponse>;
};


export type CatalogProductQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceProductProductListResponse = {
  __typename?: 'ProtoIoRestorecommerceProductProductListResponse';
  details?: Maybe<IoRestorecommerceProductProductListResponse>;
};

export type IoRestorecommerceProductProductListResponse = {
  __typename?: 'IoRestorecommerceProductProductListResponse';
  items?: Maybe<Array<IoRestorecommerceProductProductResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceProductProductResponse = {
  __typename?: 'IoRestorecommerceProductProductResponse';
  payload?: Maybe<IoRestorecommerceProductProduct>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceProductProduct = {
  __typename?: 'IoRestorecommerceProductProduct';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  product?: Maybe<IoRestorecommerceProductIndividualProduct>;
  bundle?: Maybe<IoRestorecommerceProductBundle>;
  shopId?: Maybe<Scalars['String']['output']>;
  shop?: Maybe<IoRestorecommerceShopShop>;
  active?: Maybe<Scalars['Boolean']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  associations?: Maybe<Array<IoRestorecommerceProductAssociation>>;
  data?: Maybe<GoogleProtobufAny>;
};

export type IoRestorecommerceMetaMeta = {
  __typename?: 'IoRestorecommerceMetaMeta';
  created?: Maybe<Scalars['DateTime']['output']>;
  modified?: Maybe<Scalars['DateTime']['output']>;
  modifiedBy?: Maybe<Scalars['String']['output']>;
  owners?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  acls?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  createdBy?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceAttributeAttribute = {
  __typename?: 'IoRestorecommerceAttributeAttribute';
  id?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
};

export type IoRestorecommerceProductIndividualProduct = {
  __typename?: 'IoRestorecommerceProductIndividualProduct';
  name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  manufacturerId?: Maybe<Scalars['String']['output']>;
  manufacturer?: Maybe<IoRestorecommerceManufacturerManufacturer>;
  originCountryId?: Maybe<Scalars['String']['output']>;
  origin_country?: Maybe<IoRestorecommerceCountryCountry>;
  taricCode?: Maybe<Scalars['String']['output']>;
  prototypeId?: Maybe<Scalars['String']['output']>;
  prototype?: Maybe<IoRestorecommerceProductPrototypeProductPrototype>;
  categoryId?: Maybe<Scalars['String']['output']>;
  category?: Maybe<IoRestorecommerceProductCategoryProductCategory>;
  taxIds?: Maybe<Array<Scalars['String']['output']>>;
  tax?: Maybe<Array<IoRestorecommerceTaxTax>>;
  gtin?: Maybe<Scalars['String']['output']>;
  physical?: Maybe<IoRestorecommerceProductPhysicalProduct>;
  service?: Maybe<IoRestorecommerceProductServiceProduct>;
  virtual?: Maybe<IoRestorecommerceProductVirtualProduct>;
};

export type IoRestorecommerceManufacturerManufacturer = {
  __typename?: 'IoRestorecommerceManufacturerManufacturer';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
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

export type IoRestorecommerceProductPrototypeProductPrototype = {
  __typename?: 'IoRestorecommerceProductPrototypeProductPrototype';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  categoryId?: Maybe<Scalars['String']['output']>;
  category?: Maybe<IoRestorecommerceProductCategoryProductCategory>;
};

export type IoRestorecommerceProductCategoryProductCategory = {
  __typename?: 'IoRestorecommerceProductCategoryProductCategory';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  priceGroupId?: Maybe<Scalars['String']['output']>;
  priceGroup?: Maybe<IoRestorecommercePriceGroupPriceGroup>;
  image?: Maybe<IoRestorecommerceImageImage>;
  parent?: Maybe<IoRestorecommerceProductCategoryParent>;
};

export type IoRestorecommercePriceGroupPriceGroup = {
  __typename?: 'IoRestorecommercePriceGroupPriceGroup';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceImageImage = {
  __typename?: 'IoRestorecommerceImageImage';
  id?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  contentType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  length?: Maybe<Scalars['Float']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  index?: Maybe<Scalars['Int']['output']>;
};

export type IoRestorecommerceProductCategoryParent = {
  __typename?: 'IoRestorecommerceProductCategoryParent';
  parentId?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceTaxTax = {
  __typename?: 'IoRestorecommerceTaxTax';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  countryId?: Maybe<Scalars['String']['output']>;
  country?: Maybe<IoRestorecommerceCountryCountry>;
  rate?: Maybe<Scalars['Float']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
  typeId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<IoRestorecommerceTaxTypeTaxType>;
};

export type IoRestorecommerceTaxTypeTaxType = {
  __typename?: 'IoRestorecommerceTaxTypeTaxType';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  type?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceProductPhysicalProduct = {
  __typename?: 'IoRestorecommerceProductPhysicalProduct';
  variants?: Maybe<Array<IoRestorecommerceProductPhysicalVariant>>;
};

export type IoRestorecommerceProductPhysicalVariant = {
  __typename?: 'IoRestorecommerceProductPhysicalVariant';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  stockLevel?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<IoRestorecommercePricePrice>;
  images?: Maybe<Array<IoRestorecommerceImageImage>>;
  files?: Maybe<Array<IoRestorecommerceFileFile>>;
  stockKeepingUnit?: Maybe<Scalars['String']['output']>;
  parentVariantId?: Maybe<Scalars['String']['output']>;
  package?: Maybe<IoRestorecommerceProductPackage>;
  properties?: Maybe<Array<IoRestorecommercePropertyProperty>>;
};

export type IoRestorecommercePricePrice = {
  __typename?: 'IoRestorecommercePricePrice';
  regularPrice?: Maybe<Scalars['Float']['output']>;
  sale?: Maybe<Scalars['Boolean']['output']>;
  salePrice?: Maybe<Scalars['Float']['output']>;
  currencyId?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<IoRestorecommerceCurrencyCurrency>;
};

export type IoRestorecommerceCurrencyCurrency = {
  __typename?: 'IoRestorecommerceCurrencyCurrency';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  countryId?: Maybe<Scalars['String']['output']>;
  customExchangeRates?: Maybe<Array<IoRestorecommerceCurrencyExchangeRate>>;
};

export type IoRestorecommerceCurrencyExchangeRate = {
  __typename?: 'IoRestorecommerceCurrencyExchangeRate';
  toCurrencyId?: Maybe<Scalars['String']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
  expenses?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
};

export type IoRestorecommerceFileFile = {
  __typename?: 'IoRestorecommerceFileFile';
  id?: Maybe<Scalars['String']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  contentType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  bytes?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  thumbnail?: Maybe<IoRestorecommerceImageImage>;
};

export type IoRestorecommerceProductPackage = {
  __typename?: 'IoRestorecommerceProductPackage';
  sizeInCm?: Maybe<IoRestorecommerceGeometryBoundingBox3D>;
  weightInKg?: Maybe<Scalars['Float']['output']>;
  rotatable?: Maybe<Scalars['Boolean']['output']>;
};

export type IoRestorecommerceGeometryBoundingBox3D = {
  __typename?: 'IoRestorecommerceGeometryBoundingBox3D';
  width?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  length?: Maybe<Scalars['Float']['output']>;
};

export type IoRestorecommercePropertyProperty = {
  __typename?: 'IoRestorecommercePropertyProperty';
  id?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
  unitCode?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceProductServiceProduct = {
  __typename?: 'IoRestorecommerceProductServiceProduct';
  variants?: Maybe<Array<IoRestorecommerceProductServiceVariant>>;
};

export type IoRestorecommerceProductServiceVariant = {
  __typename?: 'IoRestorecommerceProductServiceVariant';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  stockLevel?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<IoRestorecommercePricePrice>;
  images?: Maybe<Array<IoRestorecommerceImageImage>>;
  files?: Maybe<Array<IoRestorecommerceFileFile>>;
  stockKeepingUnit?: Maybe<Scalars['String']['output']>;
  parentVariantId?: Maybe<Scalars['String']['output']>;
  properties?: Maybe<Array<IoRestorecommercePropertyProperty>>;
};

export type IoRestorecommerceProductVirtualProduct = {
  __typename?: 'IoRestorecommerceProductVirtualProduct';
  variants?: Maybe<Array<IoRestorecommerceProductVirtualVariant>>;
};

export type IoRestorecommerceProductVirtualVariant = {
  __typename?: 'IoRestorecommerceProductVirtualVariant';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  stockLevel?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<IoRestorecommercePricePrice>;
  images?: Maybe<Array<IoRestorecommerceImageImage>>;
  files?: Maybe<Array<IoRestorecommerceFileFile>>;
  stockKeepingUnit?: Maybe<Scalars['String']['output']>;
  parentVariantId?: Maybe<Scalars['String']['output']>;
  properties?: Maybe<Array<IoRestorecommercePropertyProperty>>;
};

export type IoRestorecommerceProductBundle = {
  __typename?: 'IoRestorecommerceProductBundle';
  name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<IoRestorecommerceImageImage>>;
  products?: Maybe<Array<IoRestorecommerceProductBundleProduct>>;
  price?: Maybe<IoRestorecommercePricePrice>;
  prePackaged?: Maybe<IoRestorecommerceProductPackage>;
};

export type IoRestorecommerceProductBundleProduct = {
  __typename?: 'IoRestorecommerceProductBundleProduct';
  productId?: Maybe<Scalars['String']['output']>;
  product?: Maybe<IoRestorecommerceProductProduct>;
  variantId?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  priceRatio?: Maybe<Scalars['Float']['output']>;
};

export type IoRestorecommerceShopShop = {
  __typename?: 'IoRestorecommerceShopShop';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  shopNumber?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  domain?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<IoRestorecommerceOrganizationOrganization>;
};

export type IoRestorecommerceOrganizationOrganization = {
  __typename?: 'IoRestorecommerceOrganizationOrganization';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  parentId?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<IoRestorecommerceOrganizationOrganization>;
  contactPointIds?: Maybe<Array<Scalars['String']['output']>>;
  contactPoints?: Maybe<Array<IoRestorecommerceContactPointContactPoint>>;
  website?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<IoRestorecommerceImageImage>;
  vatId?: Maybe<Scalars['String']['output']>;
  isicV4?: Maybe<Scalars['String']['output']>;
  registration?: Maybe<Scalars['String']['output']>;
  registrationCourt?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  paymentMethodIds?: Maybe<Array<Scalars['String']['output']>>;
  paymentMethods?: Maybe<Array<IoRestorecommercePaymentMethodPaymentMethod>>;
  data?: Maybe<GoogleProtobufAny>;
};

export type IoRestorecommerceContactPointContactPoint = {
  __typename?: 'IoRestorecommerceContactPointContactPoint';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  physicalAddressId?: Maybe<Scalars['String']['output']>;
  physicalAddress?: Maybe<IoRestorecommerceAddressAddress>;
  website?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  contactPointTypeIds?: Maybe<Array<Scalars['String']['output']>>;
  contactPointType?: Maybe<Array<IoRestorecommerceContactPointTypeContactPointType>>;
  telephone?: Maybe<Scalars['String']['output']>;
  timezoneId?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<IoRestorecommerceTimezoneTimezone>;
  localeId?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<IoRestorecommerceLocaleLocale>;
  name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
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

export type IoRestorecommerceContactPointTypeContactPointType = {
  __typename?: 'IoRestorecommerceContactPointTypeContactPointType';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceTimezoneTimezone = {
  __typename?: 'IoRestorecommerceTimezoneTimezone';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  description?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceLocaleLocale = {
  __typename?: 'IoRestorecommerceLocaleLocale';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  value?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommercePaymentMethodPaymentMethod = {
  __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  paymentMethod?: Maybe<IoRestorecommercePaymentMethodPaymentMethodEnum>;
  transferType?: Maybe<IoRestorecommercePaymentMethodTransferTypeEnum>;
  data?: Maybe<GoogleProtobufAny>;
};

export enum IoRestorecommercePaymentMethodPaymentMethodEnum {
  WireTransfer = 0,
  DirectDebit = 1,
  Paypal = 2
}

export enum IoRestorecommercePaymentMethodTransferTypeEnum {
  Receive = 0,
  Send = 1,
  Both = 2
}

export type GoogleProtobufAny = {
  __typename?: 'GoogleProtobufAny';
  typeUrl?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['GoogleProtobufAnyValue']['output']>;
};

export type IoRestorecommerceProductAssociation = {
  __typename?: 'IoRestorecommerceProductAssociation';
  productId?: Maybe<Scalars['String']['output']>;
  product?: Maybe<IoRestorecommerceProductProduct>;
  type?: Maybe<IoRestorecommerceProductAssociationType>;
  tags?: Maybe<Array<Scalars['String']['output']>>;
  data?: Maybe<GoogleProtobufAny>;
};

export enum IoRestorecommerceProductAssociationType {
  Miscellaneous = 0,
  Accessory = 1,
  Recommendation = 2
}

export type IoRestorecommerceStatusStatus = {
  __typename?: 'IoRestorecommerceStatusStatus';
  id?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
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

export type CatalogProductPrototypeQuery = {
  __typename?: 'CatalogProductPrototypeQuery';
  Read?: Maybe<ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse>;
};


export type CatalogProductPrototypeQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse = {
  __typename?: 'ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse';
  details?: Maybe<IoRestorecommerceProductPrototypeProductPrototypeListResponse>;
};

export type IoRestorecommerceProductPrototypeProductPrototypeListResponse = {
  __typename?: 'IoRestorecommerceProductPrototypeProductPrototypeListResponse';
  items?: Maybe<Array<IoRestorecommerceProductPrototypeProductPrototypeResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceProductPrototypeProductPrototypeResponse = {
  __typename?: 'IoRestorecommerceProductPrototypeProductPrototypeResponse';
  payload?: Maybe<IoRestorecommerceProductPrototypeProductPrototype>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type CatalogProductCategoryQuery = {
  __typename?: 'CatalogProductCategoryQuery';
  Read?: Maybe<ProtoIoRestorecommerceProductCategoryProductCategoryListResponse>;
};


export type CatalogProductCategoryQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceProductCategoryProductCategoryListResponse = {
  __typename?: 'ProtoIoRestorecommerceProductCategoryProductCategoryListResponse';
  details?: Maybe<IoRestorecommerceProductCategoryProductCategoryListResponse>;
};

export type IoRestorecommerceProductCategoryProductCategoryListResponse = {
  __typename?: 'IoRestorecommerceProductCategoryProductCategoryListResponse';
  items?: Maybe<Array<IoRestorecommerceProductCategoryProductCategoryResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceProductCategoryProductCategoryResponse = {
  __typename?: 'IoRestorecommerceProductCategoryProductCategoryResponse';
  payload?: Maybe<IoRestorecommerceProductCategoryProductCategory>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type CatalogPriceGroupQuery = {
  __typename?: 'CatalogPriceGroupQuery';
  Read?: Maybe<ProtoIoRestorecommercePriceGroupPriceGroupListResponse>;
};


export type CatalogPriceGroupQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommercePriceGroupPriceGroupListResponse = {
  __typename?: 'ProtoIoRestorecommercePriceGroupPriceGroupListResponse';
  details?: Maybe<IoRestorecommercePriceGroupPriceGroupListResponse>;
};

export type IoRestorecommercePriceGroupPriceGroupListResponse = {
  __typename?: 'IoRestorecommercePriceGroupPriceGroupListResponse';
  items?: Maybe<Array<IoRestorecommercePriceGroupPriceGroupResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommercePriceGroupPriceGroupResponse = {
  __typename?: 'IoRestorecommercePriceGroupPriceGroupResponse';
  payload?: Maybe<IoRestorecommercePriceGroupPriceGroup>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type CatalogManufacturerQuery = {
  __typename?: 'CatalogManufacturerQuery';
  Read?: Maybe<ProtoIoRestorecommerceManufacturerManufacturerListResponse>;
};


export type CatalogManufacturerQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceManufacturerManufacturerListResponse = {
  __typename?: 'ProtoIoRestorecommerceManufacturerManufacturerListResponse';
  details?: Maybe<IoRestorecommerceManufacturerManufacturerListResponse>;
};

export type IoRestorecommerceManufacturerManufacturerListResponse = {
  __typename?: 'IoRestorecommerceManufacturerManufacturerListResponse';
  items?: Maybe<Array<IoRestorecommerceManufacturerManufacturerResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceManufacturerManufacturerResponse = {
  __typename?: 'IoRestorecommerceManufacturerManufacturerResponse';
  payload?: Maybe<IoRestorecommerceManufacturerManufacturer>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type Mutation = {
  __typename?: 'Mutation';
  catalog: CatalogMutation;
};

export type CatalogMutation = {
  __typename?: 'CatalogMutation';
  product: CatalogProductMutation;
  product_prototype: CatalogProductPrototypeMutation;
  product_category: CatalogProductCategoryMutation;
  price_group: CatalogPriceGroupMutation;
  manufacturer: CatalogManufacturerMutation;
};

export type CatalogProductMutation = {
  __typename?: 'CatalogProductMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceProductProductListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type CatalogProductMutationMutateArgs = {
  input: IIoRestorecommerceProductProductList;
};


export type CatalogProductMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceProductProductList = {
  items?: InputMaybe<Array<IIoRestorecommerceProductProduct>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceProductProduct = {
  id?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  product?: InputMaybe<IIoRestorecommerceProductIndividualProduct>;
  bundle?: InputMaybe<IIoRestorecommerceProductBundle>;
  shopId?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  associations?: InputMaybe<Array<IIoRestorecommerceProductAssociation>>;
  data?: InputMaybe<IGoogleProtobufAny>;
};

export type IIoRestorecommerceMetaMeta = {
  created?: InputMaybe<Scalars['IDateTime']['input']>;
  modified?: InputMaybe<Scalars['IDateTime']['input']>;
  modifiedBy?: InputMaybe<Scalars['String']['input']>;
  owners?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  acls?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceAttributeAttribute = {
  id?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type IIoRestorecommerceProductIndividualProduct = {
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  manufacturerId?: InputMaybe<Scalars['String']['input']>;
  originCountryId?: InputMaybe<Scalars['String']['input']>;
  taricCode?: InputMaybe<Scalars['String']['input']>;
  prototypeId?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  taxIds?: InputMaybe<Array<Scalars['String']['input']>>;
  gtin?: InputMaybe<Scalars['String']['input']>;
  physical?: InputMaybe<IIoRestorecommerceProductPhysicalProduct>;
  service?: InputMaybe<IIoRestorecommerceProductServiceProduct>;
  virtual?: InputMaybe<IIoRestorecommerceProductVirtualProduct>;
};

export type IIoRestorecommerceProductPhysicalProduct = {
  variants?: InputMaybe<Array<IIoRestorecommerceProductPhysicalVariant>>;
};

export type IIoRestorecommerceProductPhysicalVariant = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  stockLevel?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<IIoRestorecommercePricePrice>;
  images?: InputMaybe<Array<IIoRestorecommerceImageImage>>;
  files?: InputMaybe<Array<IIoRestorecommerceFileFile>>;
  stockKeepingUnit?: InputMaybe<Scalars['String']['input']>;
  parentVariantId?: InputMaybe<Scalars['String']['input']>;
  package?: InputMaybe<IIoRestorecommerceProductPackage>;
  properties?: InputMaybe<Array<IIoRestorecommercePropertyProperty>>;
};

export type IIoRestorecommercePricePrice = {
  regularPrice?: InputMaybe<Scalars['Float']['input']>;
  sale?: InputMaybe<Scalars['Boolean']['input']>;
  salePrice?: InputMaybe<Scalars['Float']['input']>;
  currencyId?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceImageImage = {
  id?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  index?: InputMaybe<Scalars['Int']['input']>;
};

export type IIoRestorecommerceFileFile = {
  id?: InputMaybe<Scalars['String']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  bytes?: InputMaybe<Scalars['Int']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  thumbnail?: InputMaybe<IIoRestorecommerceImageImage>;
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

export type IIoRestorecommercePropertyProperty = {
  id?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  unitCode?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceProductServiceProduct = {
  variants?: InputMaybe<Array<IIoRestorecommerceProductServiceVariant>>;
};

export type IIoRestorecommerceProductServiceVariant = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  stockLevel?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<IIoRestorecommercePricePrice>;
  images?: InputMaybe<Array<IIoRestorecommerceImageImage>>;
  files?: InputMaybe<Array<IIoRestorecommerceFileFile>>;
  stockKeepingUnit?: InputMaybe<Scalars['String']['input']>;
  parentVariantId?: InputMaybe<Scalars['String']['input']>;
  properties?: InputMaybe<Array<IIoRestorecommercePropertyProperty>>;
};

export type IIoRestorecommerceProductVirtualProduct = {
  variants?: InputMaybe<Array<IIoRestorecommerceProductVirtualVariant>>;
};

export type IIoRestorecommerceProductVirtualVariant = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  stockLevel?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<IIoRestorecommercePricePrice>;
  images?: InputMaybe<Array<IIoRestorecommerceImageImage>>;
  files?: InputMaybe<Array<IIoRestorecommerceFileFile>>;
  stockKeepingUnit?: InputMaybe<Scalars['String']['input']>;
  parentVariantId?: InputMaybe<Scalars['String']['input']>;
  properties?: InputMaybe<Array<IIoRestorecommercePropertyProperty>>;
};

export type IIoRestorecommerceProductBundle = {
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<IIoRestorecommerceImageImage>>;
  products?: InputMaybe<Array<IIoRestorecommerceProductBundleProduct>>;
  price?: InputMaybe<IIoRestorecommercePricePrice>;
  prePackaged?: InputMaybe<IIoRestorecommerceProductPackage>;
};

export type IIoRestorecommerceProductBundleProduct = {
  productId?: InputMaybe<Scalars['String']['input']>;
  variantId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  priceRatio?: InputMaybe<Scalars['Float']['input']>;
};

export type IIoRestorecommerceProductAssociation = {
  productId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<IoRestorecommerceProductAssociationType>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  data?: InputMaybe<IGoogleProtobufAny>;
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
  collection?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  views?: InputMaybe<Array<Scalars['String']['input']>>;
  analyzers?: InputMaybe<Array<Scalars['String']['input']>>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogProductPrototypeMutation = {
  __typename?: 'CatalogProductPrototypeMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type CatalogProductPrototypeMutationMutateArgs = {
  input: IIoRestorecommerceProductPrototypeProductPrototypeList;
};


export type CatalogProductPrototypeMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceProductPrototypeProductPrototypeList = {
  items?: InputMaybe<Array<IIoRestorecommerceProductPrototypeProductPrototype>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceProductPrototypeProductPrototype = {
  id?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogProductCategoryMutation = {
  __typename?: 'CatalogProductCategoryMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceProductCategoryProductCategoryListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type CatalogProductCategoryMutationMutateArgs = {
  input: IIoRestorecommerceProductCategoryProductCategoryList;
};


export type CatalogProductCategoryMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceProductCategoryProductCategoryList = {
  items?: InputMaybe<Array<IIoRestorecommerceProductCategoryProductCategory>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceProductCategoryProductCategory = {
  id?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  priceGroupId?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<IIoRestorecommerceImageImage>;
  parent?: InputMaybe<IIoRestorecommerceProductCategoryParent>;
};

export type IIoRestorecommerceProductCategoryParent = {
  parentId?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogPriceGroupMutation = {
  __typename?: 'CatalogPriceGroupMutation';
  Mutate?: Maybe<ProtoIoRestorecommercePriceGroupPriceGroupListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type CatalogPriceGroupMutationMutateArgs = {
  input: IIoRestorecommercePriceGroupPriceGroupList;
};


export type CatalogPriceGroupMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommercePriceGroupPriceGroupList = {
  items?: InputMaybe<Array<IIoRestorecommercePriceGroupPriceGroup>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommercePriceGroupPriceGroup = {
  id?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
};

export type CatalogManufacturerMutation = {
  __typename?: 'CatalogManufacturerMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceManufacturerManufacturerListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
};


export type CatalogManufacturerMutationMutateArgs = {
  input: IIoRestorecommerceManufacturerManufacturerList;
};


export type CatalogManufacturerMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};

export type IIoRestorecommerceManufacturerManufacturerList = {
  items?: InputMaybe<Array<IIoRestorecommerceManufacturerManufacturer>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceManufacturerManufacturer = {
  id?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  orderingOrders?: Maybe<SubscriptionOutput>;
  catalogProducts?: Maybe<SubscriptionOutput>;
};


export type SubscriptionOrderingOrdersArgs = {
  action?: InputMaybe<SubscriptionAction>;
};


export type SubscriptionCatalogProductsArgs = {
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
  CatalogQuery: ResolverTypeWrapper<CatalogQuery>;
  CatalogProductQuery: ResolverTypeWrapper<CatalogProductQuery>;
  ProtoIoRestorecommerceProductProductListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceProductProductListResponse>;
  IoRestorecommerceProductProductListResponse: ResolverTypeWrapper<IoRestorecommerceProductProductListResponse>;
  IoRestorecommerceProductProductResponse: ResolverTypeWrapper<IoRestorecommerceProductProductResponse>;
  IoRestorecommerceProductProduct: ResolverTypeWrapper<IoRestorecommerceProductProduct>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  IoRestorecommerceProductIndividualProduct: ResolverTypeWrapper<IoRestorecommerceProductIndividualProduct>;
  IoRestorecommerceManufacturerManufacturer: ResolverTypeWrapper<IoRestorecommerceManufacturerManufacturer>;
  IoRestorecommerceCountryCountry: ResolverTypeWrapper<IoRestorecommerceCountryCountry>;
  IoRestorecommerceProductPrototypeProductPrototype: ResolverTypeWrapper<IoRestorecommerceProductPrototypeProductPrototype>;
  IoRestorecommerceProductCategoryProductCategory: ResolverTypeWrapper<IoRestorecommerceProductCategoryProductCategory>;
  IoRestorecommercePriceGroupPriceGroup: ResolverTypeWrapper<IoRestorecommercePriceGroupPriceGroup>;
  IoRestorecommerceImageImage: ResolverTypeWrapper<IoRestorecommerceImageImage>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  IoRestorecommerceProductCategoryParent: ResolverTypeWrapper<IoRestorecommerceProductCategoryParent>;
  IoRestorecommerceTaxTax: ResolverTypeWrapper<IoRestorecommerceTaxTax>;
  IoRestorecommerceTaxTypeTaxType: ResolverTypeWrapper<IoRestorecommerceTaxTypeTaxType>;
  IoRestorecommerceProductPhysicalProduct: ResolverTypeWrapper<IoRestorecommerceProductPhysicalProduct>;
  IoRestorecommerceProductPhysicalVariant: ResolverTypeWrapper<IoRestorecommerceProductPhysicalVariant>;
  IoRestorecommercePricePrice: ResolverTypeWrapper<IoRestorecommercePricePrice>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  IoRestorecommerceCurrencyCurrency: ResolverTypeWrapper<IoRestorecommerceCurrencyCurrency>;
  IoRestorecommerceCurrencyExchangeRate: ResolverTypeWrapper<IoRestorecommerceCurrencyExchangeRate>;
  IoRestorecommerceFileFile: ResolverTypeWrapper<IoRestorecommerceFileFile>;
  IoRestorecommerceProductPackage: ResolverTypeWrapper<IoRestorecommerceProductPackage>;
  IoRestorecommerceGeometryBoundingBox3D: ResolverTypeWrapper<IoRestorecommerceGeometryBoundingBox3D>;
  IoRestorecommercePropertyProperty: ResolverTypeWrapper<IoRestorecommercePropertyProperty>;
  IoRestorecommerceProductServiceProduct: ResolverTypeWrapper<IoRestorecommerceProductServiceProduct>;
  IoRestorecommerceProductServiceVariant: ResolverTypeWrapper<IoRestorecommerceProductServiceVariant>;
  IoRestorecommerceProductVirtualProduct: ResolverTypeWrapper<IoRestorecommerceProductVirtualProduct>;
  IoRestorecommerceProductVirtualVariant: ResolverTypeWrapper<IoRestorecommerceProductVirtualVariant>;
  IoRestorecommerceProductBundle: ResolverTypeWrapper<IoRestorecommerceProductBundle>;
  IoRestorecommerceProductBundleProduct: ResolverTypeWrapper<IoRestorecommerceProductBundleProduct>;
  IoRestorecommerceShopShop: ResolverTypeWrapper<IoRestorecommerceShopShop>;
  IoRestorecommerceOrganizationOrganization: ResolverTypeWrapper<IoRestorecommerceOrganizationOrganization>;
  IoRestorecommerceContactPointContactPoint: ResolverTypeWrapper<IoRestorecommerceContactPointContactPoint>;
  IoRestorecommerceAddressAddress: ResolverTypeWrapper<IoRestorecommerceAddressAddress>;
  IoRestorecommerceAddressGeoPoint: ResolverTypeWrapper<IoRestorecommerceAddressGeoPoint>;
  IoRestorecommerceAddressAddressAddition: ResolverTypeWrapper<IoRestorecommerceAddressAddressAddition>;
  IoRestorecommerceAddressBusinessAddress: ResolverTypeWrapper<IoRestorecommerceAddressBusinessAddress>;
  IoRestorecommerceAddressResidentialAddress: ResolverTypeWrapper<IoRestorecommerceAddressResidentialAddress>;
  IoRestorecommerceAddressPackStation: ResolverTypeWrapper<IoRestorecommerceAddressPackStation>;
  IoRestorecommerceContactPointTypeContactPointType: ResolverTypeWrapper<IoRestorecommerceContactPointTypeContactPointType>;
  IoRestorecommerceTimezoneTimezone: ResolverTypeWrapper<IoRestorecommerceTimezoneTimezone>;
  IoRestorecommerceLocaleLocale: ResolverTypeWrapper<IoRestorecommerceLocaleLocale>;
  IoRestorecommercePaymentMethodPaymentMethod: ResolverTypeWrapper<IoRestorecommercePaymentMethodPaymentMethod>;
  IoRestorecommercePaymentMethodPaymentMethodEnum: IoRestorecommercePaymentMethodPaymentMethodEnum;
  IoRestorecommercePaymentMethodTransferTypeEnum: IoRestorecommercePaymentMethodTransferTypeEnum;
  GoogleProtobufAny: ResolverTypeWrapper<GoogleProtobufAny>;
  GoogleProtobufAnyValue: ResolverTypeWrapper<Scalars['GoogleProtobufAnyValue']['output']>;
  IoRestorecommerceProductAssociation: ResolverTypeWrapper<IoRestorecommerceProductAssociation>;
  IoRestorecommerceProductAssociationType: IoRestorecommerceProductAssociationType;
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
  CatalogProductPrototypeQuery: ResolverTypeWrapper<CatalogProductPrototypeQuery>;
  ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse>;
  IoRestorecommerceProductPrototypeProductPrototypeListResponse: ResolverTypeWrapper<IoRestorecommerceProductPrototypeProductPrototypeListResponse>;
  IoRestorecommerceProductPrototypeProductPrototypeResponse: ResolverTypeWrapper<IoRestorecommerceProductPrototypeProductPrototypeResponse>;
  CatalogProductCategoryQuery: ResolverTypeWrapper<CatalogProductCategoryQuery>;
  ProtoIoRestorecommerceProductCategoryProductCategoryListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceProductCategoryProductCategoryListResponse>;
  IoRestorecommerceProductCategoryProductCategoryListResponse: ResolverTypeWrapper<IoRestorecommerceProductCategoryProductCategoryListResponse>;
  IoRestorecommerceProductCategoryProductCategoryResponse: ResolverTypeWrapper<IoRestorecommerceProductCategoryProductCategoryResponse>;
  CatalogPriceGroupQuery: ResolverTypeWrapper<CatalogPriceGroupQuery>;
  ProtoIoRestorecommercePriceGroupPriceGroupListResponse: ResolverTypeWrapper<ProtoIoRestorecommercePriceGroupPriceGroupListResponse>;
  IoRestorecommercePriceGroupPriceGroupListResponse: ResolverTypeWrapper<IoRestorecommercePriceGroupPriceGroupListResponse>;
  IoRestorecommercePriceGroupPriceGroupResponse: ResolverTypeWrapper<IoRestorecommercePriceGroupPriceGroupResponse>;
  CatalogManufacturerQuery: ResolverTypeWrapper<CatalogManufacturerQuery>;
  ProtoIoRestorecommerceManufacturerManufacturerListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceManufacturerManufacturerListResponse>;
  IoRestorecommerceManufacturerManufacturerListResponse: ResolverTypeWrapper<IoRestorecommerceManufacturerManufacturerListResponse>;
  IoRestorecommerceManufacturerManufacturerResponse: ResolverTypeWrapper<IoRestorecommerceManufacturerManufacturerResponse>;
  Mutation: ResolverTypeWrapper<{}>;
  CatalogMutation: ResolverTypeWrapper<CatalogMutation>;
  CatalogProductMutation: ResolverTypeWrapper<CatalogProductMutation>;
  IIoRestorecommerceProductProductList: IIoRestorecommerceProductProductList;
  IIoRestorecommerceProductProduct: IIoRestorecommerceProductProduct;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IDateTime: ResolverTypeWrapper<Scalars['IDateTime']['output']>;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceProductIndividualProduct: IIoRestorecommerceProductIndividualProduct;
  IIoRestorecommerceProductPhysicalProduct: IIoRestorecommerceProductPhysicalProduct;
  IIoRestorecommerceProductPhysicalVariant: IIoRestorecommerceProductPhysicalVariant;
  IIoRestorecommercePricePrice: IIoRestorecommercePricePrice;
  IIoRestorecommerceImageImage: IIoRestorecommerceImageImage;
  IIoRestorecommerceFileFile: IIoRestorecommerceFileFile;
  IIoRestorecommerceProductPackage: IIoRestorecommerceProductPackage;
  IIoRestorecommerceGeometryBoundingBox3D: IIoRestorecommerceGeometryBoundingBox3D;
  IIoRestorecommercePropertyProperty: IIoRestorecommercePropertyProperty;
  IIoRestorecommerceProductServiceProduct: IIoRestorecommerceProductServiceProduct;
  IIoRestorecommerceProductServiceVariant: IIoRestorecommerceProductServiceVariant;
  IIoRestorecommerceProductVirtualProduct: IIoRestorecommerceProductVirtualProduct;
  IIoRestorecommerceProductVirtualVariant: IIoRestorecommerceProductVirtualVariant;
  IIoRestorecommerceProductBundle: IIoRestorecommerceProductBundle;
  IIoRestorecommerceProductBundleProduct: IIoRestorecommerceProductBundleProduct;
  IIoRestorecommerceProductAssociation: IIoRestorecommerceProductAssociation;
  ModeType: ModeType;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  IoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<IoRestorecommerceResourcebaseDeleteResponse>;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  CatalogProductPrototypeMutation: ResolverTypeWrapper<CatalogProductPrototypeMutation>;
  IIoRestorecommerceProductPrototypeProductPrototypeList: IIoRestorecommerceProductPrototypeProductPrototypeList;
  IIoRestorecommerceProductPrototypeProductPrototype: IIoRestorecommerceProductPrototypeProductPrototype;
  CatalogProductCategoryMutation: ResolverTypeWrapper<CatalogProductCategoryMutation>;
  IIoRestorecommerceProductCategoryProductCategoryList: IIoRestorecommerceProductCategoryProductCategoryList;
  IIoRestorecommerceProductCategoryProductCategory: IIoRestorecommerceProductCategoryProductCategory;
  IIoRestorecommerceProductCategoryParent: IIoRestorecommerceProductCategoryParent;
  CatalogPriceGroupMutation: ResolverTypeWrapper<CatalogPriceGroupMutation>;
  IIoRestorecommercePriceGroupPriceGroupList: IIoRestorecommercePriceGroupPriceGroupList;
  IIoRestorecommercePriceGroupPriceGroup: IIoRestorecommercePriceGroupPriceGroup;
  CatalogManufacturerMutation: ResolverTypeWrapper<CatalogManufacturerMutation>;
  IIoRestorecommerceManufacturerManufacturerList: IIoRestorecommerceManufacturerManufacturerList;
  IIoRestorecommerceManufacturerManufacturer: IIoRestorecommerceManufacturerManufacturer;
  Subscription: ResolverTypeWrapper<{}>;
  SubscriptionOutput: ResolverTypeWrapper<SubscriptionOutput>;
  SubscriptionAction: SubscriptionAction;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  CatalogQuery: CatalogQuery;
  CatalogProductQuery: CatalogProductQuery;
  ProtoIoRestorecommerceProductProductListResponse: ProtoIoRestorecommerceProductProductListResponse;
  IoRestorecommerceProductProductListResponse: IoRestorecommerceProductProductListResponse;
  IoRestorecommerceProductProductResponse: IoRestorecommerceProductProductResponse;
  IoRestorecommerceProductProduct: IoRestorecommerceProductProduct;
  String: Scalars['String']['output'];
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  DateTime: Scalars['DateTime']['output'];
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  IoRestorecommerceProductIndividualProduct: IoRestorecommerceProductIndividualProduct;
  IoRestorecommerceManufacturerManufacturer: IoRestorecommerceManufacturerManufacturer;
  IoRestorecommerceCountryCountry: IoRestorecommerceCountryCountry;
  IoRestorecommerceProductPrototypeProductPrototype: IoRestorecommerceProductPrototypeProductPrototype;
  IoRestorecommerceProductCategoryProductCategory: IoRestorecommerceProductCategoryProductCategory;
  IoRestorecommercePriceGroupPriceGroup: IoRestorecommercePriceGroupPriceGroup;
  IoRestorecommerceImageImage: IoRestorecommerceImageImage;
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  IoRestorecommerceProductCategoryParent: IoRestorecommerceProductCategoryParent;
  IoRestorecommerceTaxTax: IoRestorecommerceTaxTax;
  IoRestorecommerceTaxTypeTaxType: IoRestorecommerceTaxTypeTaxType;
  IoRestorecommerceProductPhysicalProduct: IoRestorecommerceProductPhysicalProduct;
  IoRestorecommerceProductPhysicalVariant: IoRestorecommerceProductPhysicalVariant;
  IoRestorecommercePricePrice: IoRestorecommercePricePrice;
  Boolean: Scalars['Boolean']['output'];
  IoRestorecommerceCurrencyCurrency: IoRestorecommerceCurrencyCurrency;
  IoRestorecommerceCurrencyExchangeRate: IoRestorecommerceCurrencyExchangeRate;
  IoRestorecommerceFileFile: IoRestorecommerceFileFile;
  IoRestorecommerceProductPackage: IoRestorecommerceProductPackage;
  IoRestorecommerceGeometryBoundingBox3D: IoRestorecommerceGeometryBoundingBox3D;
  IoRestorecommercePropertyProperty: IoRestorecommercePropertyProperty;
  IoRestorecommerceProductServiceProduct: IoRestorecommerceProductServiceProduct;
  IoRestorecommerceProductServiceVariant: IoRestorecommerceProductServiceVariant;
  IoRestorecommerceProductVirtualProduct: IoRestorecommerceProductVirtualProduct;
  IoRestorecommerceProductVirtualVariant: IoRestorecommerceProductVirtualVariant;
  IoRestorecommerceProductBundle: IoRestorecommerceProductBundle;
  IoRestorecommerceProductBundleProduct: IoRestorecommerceProductBundleProduct;
  IoRestorecommerceShopShop: IoRestorecommerceShopShop;
  IoRestorecommerceOrganizationOrganization: IoRestorecommerceOrganizationOrganization;
  IoRestorecommerceContactPointContactPoint: IoRestorecommerceContactPointContactPoint;
  IoRestorecommerceAddressAddress: IoRestorecommerceAddressAddress;
  IoRestorecommerceAddressGeoPoint: IoRestorecommerceAddressGeoPoint;
  IoRestorecommerceAddressAddressAddition: IoRestorecommerceAddressAddressAddition;
  IoRestorecommerceAddressBusinessAddress: IoRestorecommerceAddressBusinessAddress;
  IoRestorecommerceAddressResidentialAddress: IoRestorecommerceAddressResidentialAddress;
  IoRestorecommerceAddressPackStation: IoRestorecommerceAddressPackStation;
  IoRestorecommerceContactPointTypeContactPointType: IoRestorecommerceContactPointTypeContactPointType;
  IoRestorecommerceTimezoneTimezone: IoRestorecommerceTimezoneTimezone;
  IoRestorecommerceLocaleLocale: IoRestorecommerceLocaleLocale;
  IoRestorecommercePaymentMethodPaymentMethod: IoRestorecommercePaymentMethodPaymentMethod;
  GoogleProtobufAny: GoogleProtobufAny;
  GoogleProtobufAnyValue: Scalars['GoogleProtobufAnyValue']['output'];
  IoRestorecommerceProductAssociation: IoRestorecommerceProductAssociation;
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
  CatalogProductPrototypeQuery: CatalogProductPrototypeQuery;
  ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse: ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse;
  IoRestorecommerceProductPrototypeProductPrototypeListResponse: IoRestorecommerceProductPrototypeProductPrototypeListResponse;
  IoRestorecommerceProductPrototypeProductPrototypeResponse: IoRestorecommerceProductPrototypeProductPrototypeResponse;
  CatalogProductCategoryQuery: CatalogProductCategoryQuery;
  ProtoIoRestorecommerceProductCategoryProductCategoryListResponse: ProtoIoRestorecommerceProductCategoryProductCategoryListResponse;
  IoRestorecommerceProductCategoryProductCategoryListResponse: IoRestorecommerceProductCategoryProductCategoryListResponse;
  IoRestorecommerceProductCategoryProductCategoryResponse: IoRestorecommerceProductCategoryProductCategoryResponse;
  CatalogPriceGroupQuery: CatalogPriceGroupQuery;
  ProtoIoRestorecommercePriceGroupPriceGroupListResponse: ProtoIoRestorecommercePriceGroupPriceGroupListResponse;
  IoRestorecommercePriceGroupPriceGroupListResponse: IoRestorecommercePriceGroupPriceGroupListResponse;
  IoRestorecommercePriceGroupPriceGroupResponse: IoRestorecommercePriceGroupPriceGroupResponse;
  CatalogManufacturerQuery: CatalogManufacturerQuery;
  ProtoIoRestorecommerceManufacturerManufacturerListResponse: ProtoIoRestorecommerceManufacturerManufacturerListResponse;
  IoRestorecommerceManufacturerManufacturerListResponse: IoRestorecommerceManufacturerManufacturerListResponse;
  IoRestorecommerceManufacturerManufacturerResponse: IoRestorecommerceManufacturerManufacturerResponse;
  Mutation: {};
  CatalogMutation: CatalogMutation;
  CatalogProductMutation: CatalogProductMutation;
  IIoRestorecommerceProductProductList: IIoRestorecommerceProductProductList;
  IIoRestorecommerceProductProduct: IIoRestorecommerceProductProduct;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IDateTime: Scalars['IDateTime']['output'];
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceProductIndividualProduct: IIoRestorecommerceProductIndividualProduct;
  IIoRestorecommerceProductPhysicalProduct: IIoRestorecommerceProductPhysicalProduct;
  IIoRestorecommerceProductPhysicalVariant: IIoRestorecommerceProductPhysicalVariant;
  IIoRestorecommercePricePrice: IIoRestorecommercePricePrice;
  IIoRestorecommerceImageImage: IIoRestorecommerceImageImage;
  IIoRestorecommerceFileFile: IIoRestorecommerceFileFile;
  IIoRestorecommerceProductPackage: IIoRestorecommerceProductPackage;
  IIoRestorecommerceGeometryBoundingBox3D: IIoRestorecommerceGeometryBoundingBox3D;
  IIoRestorecommercePropertyProperty: IIoRestorecommercePropertyProperty;
  IIoRestorecommerceProductServiceProduct: IIoRestorecommerceProductServiceProduct;
  IIoRestorecommerceProductServiceVariant: IIoRestorecommerceProductServiceVariant;
  IIoRestorecommerceProductVirtualProduct: IIoRestorecommerceProductVirtualProduct;
  IIoRestorecommerceProductVirtualVariant: IIoRestorecommerceProductVirtualVariant;
  IIoRestorecommerceProductBundle: IIoRestorecommerceProductBundle;
  IIoRestorecommerceProductBundleProduct: IIoRestorecommerceProductBundleProduct;
  IIoRestorecommerceProductAssociation: IIoRestorecommerceProductAssociation;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ProtoIoRestorecommerceResourcebaseDeleteResponse;
  IoRestorecommerceResourcebaseDeleteResponse: IoRestorecommerceResourcebaseDeleteResponse;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  CatalogProductPrototypeMutation: CatalogProductPrototypeMutation;
  IIoRestorecommerceProductPrototypeProductPrototypeList: IIoRestorecommerceProductPrototypeProductPrototypeList;
  IIoRestorecommerceProductPrototypeProductPrototype: IIoRestorecommerceProductPrototypeProductPrototype;
  CatalogProductCategoryMutation: CatalogProductCategoryMutation;
  IIoRestorecommerceProductCategoryProductCategoryList: IIoRestorecommerceProductCategoryProductCategoryList;
  IIoRestorecommerceProductCategoryProductCategory: IIoRestorecommerceProductCategoryProductCategory;
  IIoRestorecommerceProductCategoryParent: IIoRestorecommerceProductCategoryParent;
  CatalogPriceGroupMutation: CatalogPriceGroupMutation;
  IIoRestorecommercePriceGroupPriceGroupList: IIoRestorecommercePriceGroupPriceGroupList;
  IIoRestorecommercePriceGroupPriceGroup: IIoRestorecommercePriceGroupPriceGroup;
  CatalogManufacturerMutation: CatalogManufacturerMutation;
  IIoRestorecommerceManufacturerManufacturerList: IIoRestorecommerceManufacturerManufacturerList;
  IIoRestorecommerceManufacturerManufacturer: IIoRestorecommerceManufacturerManufacturer;
  Subscription: {};
  SubscriptionOutput: SubscriptionOutput;
}>;

export type QueryResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  catalog?: Resolver<ResolversTypes['CatalogQuery'], ParentType, ContextType>;
}>;

export type CatalogQueryResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogQuery'] = ResolversParentTypes['CatalogQuery']> = ResolversObject<{
  product?: Resolver<ResolversTypes['CatalogProductQuery'], ParentType, ContextType>;
  product_prototype?: Resolver<ResolversTypes['CatalogProductPrototypeQuery'], ParentType, ContextType>;
  product_category?: Resolver<ResolversTypes['CatalogProductCategoryQuery'], ParentType, ContextType>;
  price_group?: Resolver<ResolversTypes['CatalogPriceGroupQuery'], ParentType, ContextType>;
  manufacturer?: Resolver<ResolversTypes['CatalogManufacturerQuery'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogProductQueryResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogProductQuery'] = ResolversParentTypes['CatalogProductQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceProductProductListResponse']>, ParentType, ContextType, RequireFields<CatalogProductQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceProductProductListResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceProductProductListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceProductProductListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductProductListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductProductListResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductProductListResponse'] = ResolversParentTypes['IoRestorecommerceProductProductListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceProductProductResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductProductResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductProductResponse'] = ResolversParentTypes['IoRestorecommerceProductProductResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductProduct']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductProductResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductProduct'] = ResolversParentTypes['IoRestorecommerceProductProduct']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductIndividualProduct']>, ParentType, ContextType>;
  bundle?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductBundle']>, ParentType, ContextType>;
  shopId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shop?: Resolver<Maybe<ResolversTypes['IoRestorecommerceShopShop']>, ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  associations?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceProductAssociation']>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceMetaMetaResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceMetaMeta'] = ResolversParentTypes['IoRestorecommerceMetaMeta']> = ResolversObject<{
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  modified?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  modifiedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owners?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  acls?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductIndividualProductResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductIndividualProduct'] = ResolversParentTypes['IoRestorecommerceProductIndividualProduct']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['IoRestorecommerceManufacturerManufacturer']>, ParentType, ContextType>;
  originCountryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  origin_country?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCountryCountry']>, ParentType, ContextType>;
  taricCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prototypeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prototype?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductPrototypeProductPrototype']>, ParentType, ContextType>;
  categoryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductCategoryProductCategory']>, ParentType, ContextType>;
  taxIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  tax?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceTaxTax']>>, ParentType, ContextType>;
  gtin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  physical?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductPhysicalProduct']>, ParentType, ContextType>;
  service?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductServiceProduct']>, ParentType, ContextType>;
  virtual?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductVirtualProduct']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceManufacturerManufacturerResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceManufacturerManufacturer'] = ResolversParentTypes['IoRestorecommerceManufacturerManufacturer']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCountryCountryResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceCountryCountry'] = ResolversParentTypes['IoRestorecommerceCountryCountry']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  geographicalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  economicAreas?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductPrototypeProductPrototypeResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductPrototypeProductPrototype'] = ResolversParentTypes['IoRestorecommerceProductPrototypeProductPrototype']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categoryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductCategoryProductCategory']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductCategoryProductCategoryResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductCategoryProductCategory'] = ResolversParentTypes['IoRestorecommerceProductCategoryProductCategory']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  priceGroupId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  priceGroup?: Resolver<Maybe<ResolversTypes['IoRestorecommercePriceGroupPriceGroup']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['IoRestorecommerceImageImage']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductCategoryParent']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePriceGroupPriceGroupResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommercePriceGroupPriceGroup'] = ResolversParentTypes['IoRestorecommercePriceGroupPriceGroup']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceImageImageResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceImageImage'] = ResolversParentTypes['IoRestorecommerceImageImage']> = ResolversObject<{
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

export type IoRestorecommerceProductCategoryParentResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductCategoryParent'] = ResolversParentTypes['IoRestorecommerceProductCategoryParent']> = ResolversObject<{
  parentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTaxTaxResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceTaxTax'] = ResolversParentTypes['IoRestorecommerceTaxTax']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  countryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCountryCountry']>, ParentType, ContextType>;
  rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  typeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['IoRestorecommerceTaxTypeTaxType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTaxTypeTaxTypeResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceTaxTypeTaxType'] = ResolversParentTypes['IoRestorecommerceTaxTypeTaxType']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductPhysicalProductResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductPhysicalProduct'] = ResolversParentTypes['IoRestorecommerceProductPhysicalProduct']> = ResolversObject<{
  variants?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceProductPhysicalVariant']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductPhysicalVariantResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductPhysicalVariant'] = ResolversParentTypes['IoRestorecommerceProductPhysicalVariant']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stockLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['IoRestorecommercePricePrice']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceImageImage']>>, ParentType, ContextType>;
  files?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFileFile']>>, ParentType, ContextType>;
  stockKeepingUnit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parentVariantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  package?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductPackage']>, ParentType, ContextType>;
  properties?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommercePropertyProperty']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePricePriceResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommercePricePrice'] = ResolversParentTypes['IoRestorecommercePricePrice']> = ResolversObject<{
  regularPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sale?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  salePrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  currencyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCurrencyCurrency']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCurrencyCurrencyResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceCurrencyCurrency'] = ResolversParentTypes['IoRestorecommerceCurrencyCurrency']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customExchangeRates?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceCurrencyExchangeRate']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCurrencyExchangeRateResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceCurrencyExchangeRate'] = ResolversParentTypes['IoRestorecommerceCurrencyExchangeRate']> = ResolversObject<{
  toCurrencyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  expenses?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFileFileResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceFileFile'] = ResolversParentTypes['IoRestorecommerceFileFile']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  index?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  filename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contentType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bytes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['IoRestorecommerceImageImage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductPackageResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductPackage'] = ResolversParentTypes['IoRestorecommerceProductPackage']> = ResolversObject<{
  sizeInCm?: Resolver<Maybe<ResolversTypes['IoRestorecommerceGeometryBoundingBox3D']>, ParentType, ContextType>;
  weightInKg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rotatable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceGeometryBoundingBox3DResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceGeometryBoundingBox3D'] = ResolversParentTypes['IoRestorecommerceGeometryBoundingBox3D']> = ResolversObject<{
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePropertyPropertyResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommercePropertyProperty'] = ResolversParentTypes['IoRestorecommercePropertyProperty']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unitCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductServiceProductResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductServiceProduct'] = ResolversParentTypes['IoRestorecommerceProductServiceProduct']> = ResolversObject<{
  variants?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceProductServiceVariant']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductServiceVariantResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductServiceVariant'] = ResolversParentTypes['IoRestorecommerceProductServiceVariant']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stockLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['IoRestorecommercePricePrice']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceImageImage']>>, ParentType, ContextType>;
  files?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFileFile']>>, ParentType, ContextType>;
  stockKeepingUnit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parentVariantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  properties?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommercePropertyProperty']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductVirtualProductResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductVirtualProduct'] = ResolversParentTypes['IoRestorecommerceProductVirtualProduct']> = ResolversObject<{
  variants?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceProductVirtualVariant']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductVirtualVariantResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductVirtualVariant'] = ResolversParentTypes['IoRestorecommerceProductVirtualVariant']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stockLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['IoRestorecommercePricePrice']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceImageImage']>>, ParentType, ContextType>;
  files?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFileFile']>>, ParentType, ContextType>;
  stockKeepingUnit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parentVariantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  properties?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommercePropertyProperty']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductBundleResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductBundle'] = ResolversParentTypes['IoRestorecommerceProductBundle']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceImageImage']>>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceProductBundleProduct']>>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['IoRestorecommercePricePrice']>, ParentType, ContextType>;
  prePackaged?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductPackage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductBundleProductResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductBundleProduct'] = ResolversParentTypes['IoRestorecommerceProductBundleProduct']> = ResolversObject<{
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductProduct']>, ParentType, ContextType>;
  variantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  priceRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceShopShopResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceShopShop'] = ResolversParentTypes['IoRestorecommerceShopShop']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  shopNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organizationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrganizationOrganization']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOrganizationOrganizationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceOrganizationOrganization'] = ResolversParentTypes['IoRestorecommerceOrganizationOrganization']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrganizationOrganization']>, ParentType, ContextType>;
  contactPointIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  contactPoints?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceContactPointContactPoint']>>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['IoRestorecommerceImageImage']>, ParentType, ContextType>;
  vatId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isicV4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  registration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  registrationCourt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paymentMethodIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  paymentMethods?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommercePaymentMethodPaymentMethod']>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceContactPointContactPointResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceContactPointContactPoint'] = ResolversParentTypes['IoRestorecommerceContactPointContactPoint']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  physicalAddressId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  physicalAddress?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressAddress']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  contactPointTypeIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  contactPointType?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceContactPointTypeContactPointType']>>, ParentType, ContextType>;
  telephone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezoneId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['IoRestorecommerceTimezoneTimezone']>, ParentType, ContextType>;
  localeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['IoRestorecommerceLocaleLocale']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressAddressResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressAddress'] = ResolversParentTypes['IoRestorecommerceAddressAddress']> = ResolversObject<{
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

export type IoRestorecommerceAddressGeoPointResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressGeoPoint'] = ResolversParentTypes['IoRestorecommerceAddressGeoPoint']> = ResolversObject<{
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressAddressAdditionResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressAddressAddition'] = ResolversParentTypes['IoRestorecommerceAddressAddressAddition']> = ResolversObject<{
  field1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  field2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressBusinessAddressResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressBusinessAddress'] = ResolversParentTypes['IoRestorecommerceAddressBusinessAddress']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressResidentialAddressResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressResidentialAddress'] = ResolversParentTypes['IoRestorecommerceAddressResidentialAddress']> = ResolversObject<{
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  givenName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  midName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  familyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressPackStationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressPackStation'] = ResolversParentTypes['IoRestorecommerceAddressPackStation']> = ResolversObject<{
  provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stationNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceContactPointTypeContactPointTypeResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceContactPointTypeContactPointType'] = ResolversParentTypes['IoRestorecommerceContactPointTypeContactPointType']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTimezoneTimezoneResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceTimezoneTimezone'] = ResolversParentTypes['IoRestorecommerceTimezoneTimezone']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceLocaleLocaleResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceLocaleLocale'] = ResolversParentTypes['IoRestorecommerceLocaleLocale']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePaymentMethodPaymentMethodResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommercePaymentMethodPaymentMethod'] = ResolversParentTypes['IoRestorecommercePaymentMethodPaymentMethod']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  paymentMethod?: Resolver<Maybe<ResolversTypes['IoRestorecommercePaymentMethodPaymentMethodEnum']>, ParentType, ContextType>;
  transferType?: Resolver<Maybe<ResolversTypes['IoRestorecommercePaymentMethodTransferTypeEnum']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePaymentMethodPaymentMethodEnumResolvers = { WIRE_TRANSFER: 0, DIRECT_DEBIT: 1, PAYPAL: 2 };

export type IoRestorecommercePaymentMethodTransferTypeEnumResolvers = { RECEIVE: 0, SEND: 1, BOTH: 2 };

export type GoogleProtobufAnyResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['GoogleProtobufAny'] = ResolversParentTypes['GoogleProtobufAny']> = ResolversObject<{
  typeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['GoogleProtobufAnyValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface GoogleProtobufAnyValueScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GoogleProtobufAnyValue'], any> {
  name: 'GoogleProtobufAnyValue';
}

export type IoRestorecommerceProductAssociationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductAssociation'] = ResolversParentTypes['IoRestorecommerceProductAssociation']> = ResolversObject<{
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductProduct']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductAssociationType']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductAssociationTypeResolvers = { MISCELLANEOUS: 0, ACCESSORY: 1, RECOMMENDATION: 2 };

export type IoRestorecommerceStatusStatusResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusStatus'] = ResolversParentTypes['IoRestorecommerceStatusStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusOperationStatusResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusOperationStatus'] = ResolversParentTypes['IoRestorecommerceStatusOperationStatus']> = ResolversObject<{
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

export type CatalogProductPrototypeQueryResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogProductPrototypeQuery'] = ResolversParentTypes['CatalogProductPrototypeQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse']>, ParentType, ContextType, RequireFields<CatalogProductPrototypeQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductPrototypeProductPrototypeListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductPrototypeProductPrototypeListResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductPrototypeProductPrototypeListResponse'] = ResolversParentTypes['IoRestorecommerceProductPrototypeProductPrototypeListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceProductPrototypeProductPrototypeResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductPrototypeProductPrototypeResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductPrototypeProductPrototypeResponse'] = ResolversParentTypes['IoRestorecommerceProductPrototypeProductPrototypeResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductPrototypeProductPrototype']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogProductCategoryQueryResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogProductCategoryQuery'] = ResolversParentTypes['CatalogProductCategoryQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceProductCategoryProductCategoryListResponse']>, ParentType, ContextType, RequireFields<CatalogProductCategoryQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceProductCategoryProductCategoryListResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceProductCategoryProductCategoryListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceProductCategoryProductCategoryListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductCategoryProductCategoryListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductCategoryProductCategoryListResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductCategoryProductCategoryListResponse'] = ResolversParentTypes['IoRestorecommerceProductCategoryProductCategoryListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceProductCategoryProductCategoryResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductCategoryProductCategoryResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductCategoryProductCategoryResponse'] = ResolversParentTypes['IoRestorecommerceProductCategoryProductCategoryResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductCategoryProductCategory']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogPriceGroupQueryResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogPriceGroupQuery'] = ResolversParentTypes['CatalogPriceGroupQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePriceGroupPriceGroupListResponse']>, ParentType, ContextType, RequireFields<CatalogPriceGroupQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommercePriceGroupPriceGroupListResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommercePriceGroupPriceGroupListResponse'] = ResolversParentTypes['ProtoIoRestorecommercePriceGroupPriceGroupListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommercePriceGroupPriceGroupListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePriceGroupPriceGroupListResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommercePriceGroupPriceGroupListResponse'] = ResolversParentTypes['IoRestorecommercePriceGroupPriceGroupListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommercePriceGroupPriceGroupResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePriceGroupPriceGroupResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommercePriceGroupPriceGroupResponse'] = ResolversParentTypes['IoRestorecommercePriceGroupPriceGroupResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommercePriceGroupPriceGroup']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogManufacturerQueryResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogManufacturerQuery'] = ResolversParentTypes['CatalogManufacturerQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceManufacturerManufacturerListResponse']>, ParentType, ContextType, RequireFields<CatalogManufacturerQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceManufacturerManufacturerListResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceManufacturerManufacturerListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceManufacturerManufacturerListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceManufacturerManufacturerListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceManufacturerManufacturerListResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceManufacturerManufacturerListResponse'] = ResolversParentTypes['IoRestorecommerceManufacturerManufacturerListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceManufacturerManufacturerResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceManufacturerManufacturerResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceManufacturerManufacturerResponse'] = ResolversParentTypes['IoRestorecommerceManufacturerManufacturerResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceManufacturerManufacturer']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  catalog?: Resolver<ResolversTypes['CatalogMutation'], ParentType, ContextType>;
}>;

export type CatalogMutationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogMutation'] = ResolversParentTypes['CatalogMutation']> = ResolversObject<{
  product?: Resolver<ResolversTypes['CatalogProductMutation'], ParentType, ContextType>;
  product_prototype?: Resolver<ResolversTypes['CatalogProductPrototypeMutation'], ParentType, ContextType>;
  product_category?: Resolver<ResolversTypes['CatalogProductCategoryMutation'], ParentType, ContextType>;
  price_group?: Resolver<ResolversTypes['CatalogPriceGroupMutation'], ParentType, ContextType>;
  manufacturer?: Resolver<ResolversTypes['CatalogManufacturerMutation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogProductMutationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogProductMutation'] = ResolversParentTypes['CatalogProductMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceProductProductListResponse']>, ParentType, ContextType, RequireFields<CatalogProductMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<CatalogProductMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface IDateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IDateTime'], any> {
  name: 'IDateTime';
}

export type ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  status?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceStatusStatus']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogProductPrototypeMutationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogProductPrototypeMutation'] = ResolversParentTypes['CatalogProductPrototypeMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse']>, ParentType, ContextType, RequireFields<CatalogProductPrototypeMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<CatalogProductPrototypeMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogProductCategoryMutationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogProductCategoryMutation'] = ResolversParentTypes['CatalogProductCategoryMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceProductCategoryProductCategoryListResponse']>, ParentType, ContextType, RequireFields<CatalogProductCategoryMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<CatalogProductCategoryMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogPriceGroupMutationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogPriceGroupMutation'] = ResolversParentTypes['CatalogPriceGroupMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommercePriceGroupPriceGroupListResponse']>, ParentType, ContextType, RequireFields<CatalogPriceGroupMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<CatalogPriceGroupMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogManufacturerMutationResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['CatalogManufacturerMutation'] = ResolversParentTypes['CatalogManufacturerMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceManufacturerManufacturerListResponse']>, ParentType, ContextType, RequireFields<CatalogManufacturerMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<CatalogManufacturerMutationDeleteArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  orderingOrders?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "orderingOrders", ParentType, ContextType, Partial<SubscriptionOrderingOrdersArgs>>;
  catalogProducts?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "catalogProducts", ParentType, ContextType, Partial<SubscriptionCatalogProductsArgs>>;
}>;

export type SubscriptionOutputResolvers<ContextType = CatalogContext, ParentType extends ResolversParentTypes['SubscriptionOutput'] = ResolversParentTypes['SubscriptionOutput']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = CatalogContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  CatalogQuery?: CatalogQueryResolvers<ContextType>;
  CatalogProductQuery?: CatalogProductQueryResolvers<ContextType>;
  ProtoIoRestorecommerceProductProductListResponse?: ProtoIoRestorecommerceProductProductListResponseResolvers<ContextType>;
  IoRestorecommerceProductProductListResponse?: IoRestorecommerceProductProductListResponseResolvers<ContextType>;
  IoRestorecommerceProductProductResponse?: IoRestorecommerceProductProductResponseResolvers<ContextType>;
  IoRestorecommerceProductProduct?: IoRestorecommerceProductProductResolvers<ContextType>;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
  IoRestorecommerceProductIndividualProduct?: IoRestorecommerceProductIndividualProductResolvers<ContextType>;
  IoRestorecommerceManufacturerManufacturer?: IoRestorecommerceManufacturerManufacturerResolvers<ContextType>;
  IoRestorecommerceCountryCountry?: IoRestorecommerceCountryCountryResolvers<ContextType>;
  IoRestorecommerceProductPrototypeProductPrototype?: IoRestorecommerceProductPrototypeProductPrototypeResolvers<ContextType>;
  IoRestorecommerceProductCategoryProductCategory?: IoRestorecommerceProductCategoryProductCategoryResolvers<ContextType>;
  IoRestorecommercePriceGroupPriceGroup?: IoRestorecommercePriceGroupPriceGroupResolvers<ContextType>;
  IoRestorecommerceImageImage?: IoRestorecommerceImageImageResolvers<ContextType>;
  IoRestorecommerceProductCategoryParent?: IoRestorecommerceProductCategoryParentResolvers<ContextType>;
  IoRestorecommerceTaxTax?: IoRestorecommerceTaxTaxResolvers<ContextType>;
  IoRestorecommerceTaxTypeTaxType?: IoRestorecommerceTaxTypeTaxTypeResolvers<ContextType>;
  IoRestorecommerceProductPhysicalProduct?: IoRestorecommerceProductPhysicalProductResolvers<ContextType>;
  IoRestorecommerceProductPhysicalVariant?: IoRestorecommerceProductPhysicalVariantResolvers<ContextType>;
  IoRestorecommercePricePrice?: IoRestorecommercePricePriceResolvers<ContextType>;
  IoRestorecommerceCurrencyCurrency?: IoRestorecommerceCurrencyCurrencyResolvers<ContextType>;
  IoRestorecommerceCurrencyExchangeRate?: IoRestorecommerceCurrencyExchangeRateResolvers<ContextType>;
  IoRestorecommerceFileFile?: IoRestorecommerceFileFileResolvers<ContextType>;
  IoRestorecommerceProductPackage?: IoRestorecommerceProductPackageResolvers<ContextType>;
  IoRestorecommerceGeometryBoundingBox3D?: IoRestorecommerceGeometryBoundingBox3DResolvers<ContextType>;
  IoRestorecommercePropertyProperty?: IoRestorecommercePropertyPropertyResolvers<ContextType>;
  IoRestorecommerceProductServiceProduct?: IoRestorecommerceProductServiceProductResolvers<ContextType>;
  IoRestorecommerceProductServiceVariant?: IoRestorecommerceProductServiceVariantResolvers<ContextType>;
  IoRestorecommerceProductVirtualProduct?: IoRestorecommerceProductVirtualProductResolvers<ContextType>;
  IoRestorecommerceProductVirtualVariant?: IoRestorecommerceProductVirtualVariantResolvers<ContextType>;
  IoRestorecommerceProductBundle?: IoRestorecommerceProductBundleResolvers<ContextType>;
  IoRestorecommerceProductBundleProduct?: IoRestorecommerceProductBundleProductResolvers<ContextType>;
  IoRestorecommerceShopShop?: IoRestorecommerceShopShopResolvers<ContextType>;
  IoRestorecommerceOrganizationOrganization?: IoRestorecommerceOrganizationOrganizationResolvers<ContextType>;
  IoRestorecommerceContactPointContactPoint?: IoRestorecommerceContactPointContactPointResolvers<ContextType>;
  IoRestorecommerceAddressAddress?: IoRestorecommerceAddressAddressResolvers<ContextType>;
  IoRestorecommerceAddressGeoPoint?: IoRestorecommerceAddressGeoPointResolvers<ContextType>;
  IoRestorecommerceAddressAddressAddition?: IoRestorecommerceAddressAddressAdditionResolvers<ContextType>;
  IoRestorecommerceAddressBusinessAddress?: IoRestorecommerceAddressBusinessAddressResolvers<ContextType>;
  IoRestorecommerceAddressResidentialAddress?: IoRestorecommerceAddressResidentialAddressResolvers<ContextType>;
  IoRestorecommerceAddressPackStation?: IoRestorecommerceAddressPackStationResolvers<ContextType>;
  IoRestorecommerceContactPointTypeContactPointType?: IoRestorecommerceContactPointTypeContactPointTypeResolvers<ContextType>;
  IoRestorecommerceTimezoneTimezone?: IoRestorecommerceTimezoneTimezoneResolvers<ContextType>;
  IoRestorecommerceLocaleLocale?: IoRestorecommerceLocaleLocaleResolvers<ContextType>;
  IoRestorecommercePaymentMethodPaymentMethod?: IoRestorecommercePaymentMethodPaymentMethodResolvers<ContextType>;
  IoRestorecommercePaymentMethodPaymentMethodEnum?: IoRestorecommercePaymentMethodPaymentMethodEnumResolvers;
  IoRestorecommercePaymentMethodTransferTypeEnum?: IoRestorecommercePaymentMethodTransferTypeEnumResolvers;
  GoogleProtobufAny?: GoogleProtobufAnyResolvers<ContextType>;
  GoogleProtobufAnyValue?: GraphQLScalarType;
  IoRestorecommerceProductAssociation?: IoRestorecommerceProductAssociationResolvers<ContextType>;
  IoRestorecommerceProductAssociationType?: IoRestorecommerceProductAssociationTypeResolvers;
  IoRestorecommerceStatusStatus?: IoRestorecommerceStatusStatusResolvers<ContextType>;
  IoRestorecommerceStatusOperationStatus?: IoRestorecommerceStatusOperationStatusResolvers<ContextType>;
  IoRestorecommerceResourcebaseSortSortOrder?: IoRestorecommerceResourcebaseSortSortOrderResolvers;
  IoRestorecommerceResourcebaseFilterOperation?: IoRestorecommerceResourcebaseFilterOperationResolvers;
  IoRestorecommerceResourcebaseFilterValueType?: IoRestorecommerceResourcebaseFilterValueTypeResolvers;
  IoRestorecommerceFilterFilterOperation?: IoRestorecommerceFilterFilterOperationResolvers;
  IoRestorecommerceFilterFilterValueType?: IoRestorecommerceFilterFilterValueTypeResolvers;
  IoRestorecommerceFilterFilterOpOperator?: IoRestorecommerceFilterFilterOpOperatorResolvers;
  IoRestorecommerceResourcebaseFilterOpOperator?: IoRestorecommerceResourcebaseFilterOpOperatorResolvers;
  CatalogProductPrototypeQuery?: CatalogProductPrototypeQueryResolvers<ContextType>;
  ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse?: ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponseResolvers<ContextType>;
  IoRestorecommerceProductPrototypeProductPrototypeListResponse?: IoRestorecommerceProductPrototypeProductPrototypeListResponseResolvers<ContextType>;
  IoRestorecommerceProductPrototypeProductPrototypeResponse?: IoRestorecommerceProductPrototypeProductPrototypeResponseResolvers<ContextType>;
  CatalogProductCategoryQuery?: CatalogProductCategoryQueryResolvers<ContextType>;
  ProtoIoRestorecommerceProductCategoryProductCategoryListResponse?: ProtoIoRestorecommerceProductCategoryProductCategoryListResponseResolvers<ContextType>;
  IoRestorecommerceProductCategoryProductCategoryListResponse?: IoRestorecommerceProductCategoryProductCategoryListResponseResolvers<ContextType>;
  IoRestorecommerceProductCategoryProductCategoryResponse?: IoRestorecommerceProductCategoryProductCategoryResponseResolvers<ContextType>;
  CatalogPriceGroupQuery?: CatalogPriceGroupQueryResolvers<ContextType>;
  ProtoIoRestorecommercePriceGroupPriceGroupListResponse?: ProtoIoRestorecommercePriceGroupPriceGroupListResponseResolvers<ContextType>;
  IoRestorecommercePriceGroupPriceGroupListResponse?: IoRestorecommercePriceGroupPriceGroupListResponseResolvers<ContextType>;
  IoRestorecommercePriceGroupPriceGroupResponse?: IoRestorecommercePriceGroupPriceGroupResponseResolvers<ContextType>;
  CatalogManufacturerQuery?: CatalogManufacturerQueryResolvers<ContextType>;
  ProtoIoRestorecommerceManufacturerManufacturerListResponse?: ProtoIoRestorecommerceManufacturerManufacturerListResponseResolvers<ContextType>;
  IoRestorecommerceManufacturerManufacturerListResponse?: IoRestorecommerceManufacturerManufacturerListResponseResolvers<ContextType>;
  IoRestorecommerceManufacturerManufacturerResponse?: IoRestorecommerceManufacturerManufacturerResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  CatalogMutation?: CatalogMutationResolvers<ContextType>;
  CatalogProductMutation?: CatalogProductMutationResolvers<ContextType>;
  IDateTime?: GraphQLScalarType;
  ProtoIoRestorecommerceResourcebaseDeleteResponse?: ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  IoRestorecommerceResourcebaseDeleteResponse?: IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  CatalogProductPrototypeMutation?: CatalogProductPrototypeMutationResolvers<ContextType>;
  CatalogProductCategoryMutation?: CatalogProductCategoryMutationResolvers<ContextType>;
  CatalogPriceGroupMutation?: CatalogPriceGroupMutationResolvers<ContextType>;
  CatalogManufacturerMutation?: CatalogManufacturerMutationResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  SubscriptionOutput?: SubscriptionOutputResolvers<ContextType>;
}>;

