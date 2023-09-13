import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { OrderingContext } from '../interfaces.js';
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
  DateTime: { input: any; output: any; }
  GoogleProtobufAnyValue: { input: any; output: any; }
  IDateTime: { input: any; output: any; }
};

export type Query = {
  __typename?: 'Query';
  ordering: OrderingQuery;
};

export type OrderingQuery = {
  __typename?: 'OrderingQuery';
  order: OrderingOrderQuery;
};

export type OrderingOrderQuery = {
  __typename?: 'OrderingOrderQuery';
  Read?: Maybe<ProtoIoRestorecommerceOrderOrderListResponse>;
};


export type OrderingOrderQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ProtoIoRestorecommerceOrderOrderListResponse = {
  __typename?: 'ProtoIoRestorecommerceOrderOrderListResponse';
  details?: Maybe<IoRestorecommerceOrderOrderListResponse>;
};

export type IoRestorecommerceOrderOrderListResponse = {
  __typename?: 'IoRestorecommerceOrderOrderListResponse';
  items?: Maybe<Array<IoRestorecommerceOrderOrderResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceOrderOrderResponse = {
  __typename?: 'IoRestorecommerceOrderOrderResponse';
  payload?: Maybe<IoRestorecommerceOrderOrder>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceOrderOrder = {
  __typename?: 'IoRestorecommerceOrderOrder';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  userId?: Maybe<Scalars['String']['output']>;
  user?: Maybe<IoRestorecommerceUserUser>;
  customerId?: Maybe<Scalars['String']['output']>;
  customer?: Maybe<IoRestorecommerceCustomerCustomer>;
  shopId?: Maybe<Scalars['String']['output']>;
  shop?: Maybe<IoRestorecommerceShopShop>;
  items?: Maybe<Array<IoRestorecommerceOrderItem>>;
  orderState?: Maybe<IoRestorecommerceOrderOrderState>;
  fulfillmentState?: Maybe<IoRestorecommerceFulfillmentState>;
  paymentState?: Maybe<IoRestorecommerceInvoicePaymentState>;
  totalAmounts?: Maybe<Array<IoRestorecommerceAmountAmount>>;
  shippingAddress?: Maybe<IoRestorecommerceAddressShippingAddress>;
  billingAddress?: Maybe<IoRestorecommerceAddressBillingAddress>;
  notificationEmail?: Maybe<Scalars['String']['output']>;
  customerOrderNr?: Maybe<Scalars['String']['output']>;
  customerRemark?: Maybe<Scalars['String']['output']>;
  packagingPreferences?: Maybe<IoRestorecommerceFulfillmentProductPreferences>;
};

export type IoRestorecommerceMetaMeta = {
  __typename?: 'IoRestorecommerceMetaMeta';
  created?: Maybe<Scalars['DateTime']['output']>;
  modified?: Maybe<Scalars['DateTime']['output']>;
  modifiedBy?: Maybe<Scalars['String']['output']>;
  owners?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  acls?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
};

export type IoRestorecommerceAttributeAttribute = {
  __typename?: 'IoRestorecommerceAttributeAttribute';
  id?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
};

export type IoRestorecommerceUserUser = {
  __typename?: 'IoRestorecommerceUserUser';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  newEmail?: Maybe<Scalars['String']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  activationCode?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  passwordHash?: Maybe<Scalars['String']['output']>;
  roleAssociations?: Maybe<Array<IoRestorecommerceAuthRoleAssociation>>;
  timezoneId?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<IoRestorecommerceTimezoneTimezone>;
  localeId?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<IoRestorecommerceLocaleLocale>;
  defaultScope?: Maybe<Scalars['String']['output']>;
  unauthenticated?: Maybe<Scalars['Boolean']['output']>;
  guest?: Maybe<Scalars['Boolean']['output']>;
  image?: Maybe<IoRestorecommerceImageImage>;
  userType?: Maybe<IoRestorecommerceUserUserType>;
  invite?: Maybe<Scalars['Boolean']['output']>;
  invitedByUserName?: Maybe<Scalars['String']['output']>;
  invitedByUserFirstName?: Maybe<Scalars['String']['output']>;
  invitedByUserLastName?: Maybe<Scalars['String']['output']>;
  tokens?: Maybe<Array<IoRestorecommerceAuthTokens>>;
  lastAccess?: Maybe<Scalars['Float']['output']>;
  data?: Maybe<GoogleProtobufAny>;
};

export type IoRestorecommerceAuthRoleAssociation = {
  __typename?: 'IoRestorecommerceAuthRoleAssociation';
  role?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  id?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
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

export enum IoRestorecommerceUserUserType {
  OrgUser = 0,
  IndividualUser = 1,
  Guest = 2,
  TechnicalUser = 3
}

export type IoRestorecommerceAuthTokens = {
  __typename?: 'IoRestorecommerceAuthTokens';
  name?: Maybe<Scalars['String']['output']>;
  expiresIn?: Maybe<Scalars['Float']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  scopes?: Maybe<Array<Scalars['String']['output']>>;
  type?: Maybe<Scalars['String']['output']>;
  interactive?: Maybe<Scalars['Boolean']['output']>;
  lastLogin?: Maybe<Scalars['Float']['output']>;
};

export type GoogleProtobufAny = {
  __typename?: 'GoogleProtobufAny';
  typeUrl?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['GoogleProtobufAnyValue']['output']>;
};

export type IoRestorecommerceCustomerCustomer = {
  __typename?: 'IoRestorecommerceCustomerCustomer';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  private?: Maybe<IoRestorecommerceCustomerPrivate>;
  commercial?: Maybe<IoRestorecommerceCustomerCommercial>;
  publicSector?: Maybe<IoRestorecommerceCustomerPublicSector>;
};

export type IoRestorecommerceCustomerPrivate = {
  __typename?: 'IoRestorecommerceCustomerPrivate';
  userId?: Maybe<Scalars['String']['output']>;
  user?: Maybe<IoRestorecommerceUserUser>;
  contactPointIds?: Maybe<Array<Scalars['String']['output']>>;
  contactPoints?: Maybe<Array<IoRestorecommerceContactPointContactPoint>>;
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

export type IoRestorecommerceContactPointTypeContactPointType = {
  __typename?: 'IoRestorecommerceContactPointTypeContactPointType';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceCustomerCommercial = {
  __typename?: 'IoRestorecommerceCustomerCommercial';
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

export type IoRestorecommerceCustomerPublicSector = {
  __typename?: 'IoRestorecommerceCustomerPublicSector';
  organizationId?: Maybe<Scalars['String']['output']>;
  organization?: Maybe<IoRestorecommerceOrganizationOrganization>;
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

export type IoRestorecommerceOrderItem = {
  __typename?: 'IoRestorecommerceOrderItem';
  id?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  product?: Maybe<IoRestorecommerceProductProduct>;
  variantId?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  unitPrice?: Maybe<IoRestorecommercePricePrice>;
  amount?: Maybe<IoRestorecommerceAmountAmount>;
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

export type IoRestorecommerceAmountAmount = {
  __typename?: 'IoRestorecommerceAmountAmount';
  currencyId?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<IoRestorecommerceCurrencyCurrency>;
  gross?: Maybe<Scalars['Float']['output']>;
  net?: Maybe<Scalars['Float']['output']>;
  vats?: Maybe<Array<IoRestorecommerceAmountVat>>;
};

export type IoRestorecommerceAmountVat = {
  __typename?: 'IoRestorecommerceAmountVAT';
  taxId?: Maybe<Scalars['String']['output']>;
  tax?: Maybe<IoRestorecommerceTaxTax>;
  vat?: Maybe<Scalars['Float']['output']>;
};

export enum IoRestorecommerceOrderOrderState {
  Failed = 0,
  Invalid = 1,
  Created = 2,
  Submitted = 3,
  InProcess = 4,
  Done = 5,
  Withdrawn = 6,
  Cancelled = 7
}

export enum IoRestorecommerceFulfillmentState {
  Failed = 0,
  Invalid = 1,
  Created = 2,
  Submitted = 3,
  InTransit = 4,
  Fulfilled = 5,
  Withdrawn = 6,
  Cancelled = 7
}

export enum IoRestorecommerceInvoicePaymentState {
  Unpayed = 0,
  Payed = 1
}

export type IoRestorecommerceAddressShippingAddress = {
  __typename?: 'IoRestorecommerceAddressShippingAddress';
  address?: Maybe<IoRestorecommerceAddressAddress>;
  contact?: Maybe<IoRestorecommerceAddressContact>;
  comments?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceAddressContact = {
  __typename?: 'IoRestorecommerceAddressContact';
  name?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceAddressBillingAddress = {
  __typename?: 'IoRestorecommerceAddressBillingAddress';
  address?: Maybe<IoRestorecommerceAddressAddress>;
  contact?: Maybe<IoRestorecommerceAddressContact>;
  comments?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceFulfillmentProductPreferences = {
  __typename?: 'IoRestorecommerceFulfillmentProductPreferences';
  couriers?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  options?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
};

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

export type Mutation = {
  __typename?: 'Mutation';
  ordering: OrderingMutation;
};

export type OrderingMutation = {
  __typename?: 'OrderingMutation';
  order: OrderingOrderMutation;
};

export type OrderingOrderMutation = {
  __typename?: 'OrderingOrderMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceOrderOrderListResponse>;
  Evaluate?: Maybe<ProtoIoRestorecommerceOrderOrderListResponse>;
  Submit?: Maybe<ProtoIoRestorecommerceOrderOrderListResponse>;
  Withdraw?: Maybe<ProtoIoRestorecommerceOrderOrderListResponse>;
  Cancel?: Maybe<ProtoIoRestorecommerceOrderOrderListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  QueryPackingSolution?: Maybe<ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponse>;
  CreateFulfillment?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
  TriggerFulfillment?: Maybe<ProtoIoRestorecommerceStatusStatusListResponse>;
  CreateInvoice?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
  TriggerInvoice?: Maybe<ProtoIoRestorecommerceStatusStatusListResponse>;
};


export type OrderingOrderMutationMutateArgs = {
  input: IIoRestorecommerceOrderOrderList;
};


export type OrderingOrderMutationEvaluateArgs = {
  input: IIoRestorecommerceOrderOrderList;
};


export type OrderingOrderMutationSubmitArgs = {
  input: IIoRestorecommerceOrderOrderList;
};


export type OrderingOrderMutationWithdrawArgs = {
  input: IIoRestorecommerceOrderOrderIdList;
};


export type OrderingOrderMutationCancelArgs = {
  input: IIoRestorecommerceOrderOrderIdList;
};


export type OrderingOrderMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type OrderingOrderMutationQueryPackingSolutionArgs = {
  input: IIoRestorecommerceOrderFulfillmentRequestList;
};


export type OrderingOrderMutationCreateFulfillmentArgs = {
  input: IIoRestorecommerceOrderFulfillmentRequestList;
};


export type OrderingOrderMutationTriggerFulfillmentArgs = {
  input: IIoRestorecommerceOrderFulfillmentRequestList;
};


export type OrderingOrderMutationCreateInvoiceArgs = {
  input: IIoRestorecommerceOrderOrderingInvoiceRequestList;
};


export type OrderingOrderMutationTriggerInvoiceArgs = {
  input: IIoRestorecommerceOrderOrderingInvoiceRequestList;
};

export type IIoRestorecommerceOrderOrderList = {
  items?: InputMaybe<Array<IIoRestorecommerceOrderOrder>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceOrderOrder = {
  id?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  userId?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  shopId?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<IIoRestorecommerceOrderItem>>;
  orderState?: InputMaybe<IoRestorecommerceOrderOrderState>;
  fulfillmentState?: InputMaybe<IoRestorecommerceFulfillmentState>;
  paymentState?: InputMaybe<IoRestorecommerceInvoicePaymentState>;
  totalAmounts?: InputMaybe<Array<IIoRestorecommerceAmountAmount>>;
  shippingAddress?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
  billingAddress?: InputMaybe<IIoRestorecommerceAddressBillingAddress>;
  notificationEmail?: InputMaybe<Scalars['String']['input']>;
  customerOrderNr?: InputMaybe<Scalars['String']['input']>;
  customerRemark?: InputMaybe<Scalars['String']['input']>;
  packagingPreferences?: InputMaybe<IIoRestorecommerceFulfillmentProductPreferences>;
};

export type IIoRestorecommerceMetaMeta = {
  created?: InputMaybe<Scalars['IDateTime']['input']>;
  modified?: InputMaybe<Scalars['IDateTime']['input']>;
  modifiedBy?: InputMaybe<Scalars['String']['input']>;
  owners?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  acls?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type IIoRestorecommerceAttributeAttribute = {
  id?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type IIoRestorecommerceOrderItem = {
  id?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  variantId?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  unitPrice?: InputMaybe<IIoRestorecommercePricePrice>;
  amount?: InputMaybe<IIoRestorecommerceAmountAmount>;
};

export type IIoRestorecommercePricePrice = {
  regularPrice?: InputMaybe<Scalars['Float']['input']>;
  sale?: InputMaybe<Scalars['Boolean']['input']>;
  salePrice?: InputMaybe<Scalars['Float']['input']>;
  currencyId?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceAmountAmount = {
  currencyId?: InputMaybe<Scalars['String']['input']>;
  gross?: InputMaybe<Scalars['Float']['input']>;
  net?: InputMaybe<Scalars['Float']['input']>;
  vats?: InputMaybe<Array<IIoRestorecommerceAmountVat>>;
};

export type IIoRestorecommerceAmountVat = {
  taxId?: InputMaybe<Scalars['String']['input']>;
  vat?: InputMaybe<Scalars['Float']['input']>;
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

export type IIoRestorecommerceAddressBillingAddress = {
  address?: InputMaybe<IIoRestorecommerceAddressAddress>;
  contact?: InputMaybe<IIoRestorecommerceAddressContact>;
  comments?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceFulfillmentProductPreferences = {
  couriers?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  options?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export enum ModeType {
  Create = 'CREATE',
  Update = 'UPDATE',
  Upsert = 'UPSERT'
}

export type IIoRestorecommerceOrderOrderIdList = {
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
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
  reference?: Maybe<IoRestorecommerceReferenceReference>;
  solutions?: Maybe<Array<IoRestorecommerceFulfillmentProductPackingSolution>>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceReferenceReference = {
  __typename?: 'IoRestorecommerceReferenceReference';
  instanceType?: Maybe<Scalars['String']['output']>;
  instanceId?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceFulfillmentProductPackingSolution = {
  __typename?: 'IoRestorecommerceFulfillmentProductPackingSolution';
  amounts?: Maybe<Array<IoRestorecommerceAmountAmount>>;
  compactness?: Maybe<Scalars['Float']['output']>;
  homogeneity?: Maybe<Scalars['Float']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  parcels?: Maybe<Array<IoRestorecommerceFulfillmentParcel>>;
};

export type IoRestorecommerceFulfillmentParcel = {
  __typename?: 'IoRestorecommerceFulfillmentParcel';
  id?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  product?: Maybe<IoRestorecommerceFulfillmentProductFulfillmentProduct>;
  variantId?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<IoRestorecommerceFulfillmentItem>>;
  price?: Maybe<IoRestorecommercePricePrice>;
  amount?: Maybe<IoRestorecommerceAmountAmount>;
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
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  shopIds?: Maybe<Array<Scalars['String']['output']>>;
  shops?: Maybe<Array<IoRestorecommerceShopShop>>;
  name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  stubType?: Maybe<Scalars['String']['output']>;
  configuration?: Maybe<GoogleProtobufAny>;
};

export type IoRestorecommerceFulfillmentProductVariant = {
  __typename?: 'IoRestorecommerceFulfillmentProductVariant';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  price?: Maybe<IoRestorecommercePricePrice>;
  maxSize?: Maybe<IoRestorecommerceGeometryBoundingBox3D>;
  maxWeight?: Maybe<Scalars['Float']['output']>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
};

export type IoRestorecommerceFulfillmentItem = {
  __typename?: 'IoRestorecommerceFulfillmentItem';
  productId?: Maybe<Scalars['String']['output']>;
  variantId?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  package?: Maybe<IoRestorecommerceProductPackage>;
};

export type IIoRestorecommerceOrderFulfillmentRequestList = {
  items?: InputMaybe<Array<IIoRestorecommerceOrderFulfillmentRequest>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
};

export type IIoRestorecommerceOrderFulfillmentRequest = {
  orderId?: InputMaybe<Scalars['String']['input']>;
  exportType?: InputMaybe<Scalars['String']['input']>;
  exportDescription?: InputMaybe<Scalars['String']['input']>;
  invoiceNumber?: InputMaybe<Scalars['String']['input']>;
  senderAddress?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
  selectedItems?: InputMaybe<Array<Scalars['String']['input']>>;
  data?: InputMaybe<IGoogleProtobufAny>;
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
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  userId?: Maybe<Scalars['String']['output']>;
  user?: Maybe<IoRestorecommerceUserUser>;
  customerId?: Maybe<Scalars['String']['output']>;
  customer?: Maybe<IoRestorecommerceCustomerCustomer>;
  shopId?: Maybe<Scalars['String']['output']>;
  shop?: Maybe<IoRestorecommerceShopShop>;
  reference?: Maybe<IoRestorecommerceReferenceReference>;
  packaging?: Maybe<IoRestorecommerceFulfillmentPackaging>;
  labels?: Maybe<Array<IoRestorecommerceFulfillmentLabel>>;
  trackings?: Maybe<Array<IoRestorecommerceFulfillmentTracking>>;
  totalAmounts?: Maybe<Array<IoRestorecommerceAmountAmount>>;
  state?: Maybe<IoRestorecommerceFulfillmentState>;
};

export type IoRestorecommerceFulfillmentPackaging = {
  __typename?: 'IoRestorecommerceFulfillmentPackaging';
  parcels?: Maybe<Array<IoRestorecommerceFulfillmentParcel>>;
  sender?: Maybe<IoRestorecommerceAddressShippingAddress>;
  recipient?: Maybe<IoRestorecommerceAddressShippingAddress>;
  notify?: Maybe<Scalars['String']['output']>;
  exportType?: Maybe<Scalars['String']['output']>;
  exportDescription?: Maybe<Scalars['String']['output']>;
  invoiceNumber?: Maybe<Scalars['String']['output']>;
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

export type IoRestorecommerceFulfillmentTracking = {
  __typename?: 'IoRestorecommerceFulfillmentTracking';
  shipmentNumber?: Maybe<Scalars['String']['output']>;
  events?: Maybe<Array<IoRestorecommerceFulfillmentEvent>>;
  details?: Maybe<GoogleProtobufAny>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceFulfillmentEvent = {
  __typename?: 'IoRestorecommerceFulfillmentEvent';
  timestamp?: Maybe<Scalars['DateTime']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  details?: Maybe<GoogleProtobufAny>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type ProtoIoRestorecommerceStatusStatusListResponse = {
  __typename?: 'ProtoIoRestorecommerceStatusStatusListResponse';
  details?: Maybe<IoRestorecommerceStatusStatusListResponse>;
};

export type IoRestorecommerceStatusStatusListResponse = {
  __typename?: 'IoRestorecommerceStatusStatusListResponse';
  status?: Maybe<Array<IoRestorecommerceStatusStatus>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type ProtoIoRestorecommerceInvoiceInvoiceListResponse = {
  __typename?: 'ProtoIoRestorecommerceInvoiceInvoiceListResponse';
  details?: Maybe<IoRestorecommerceInvoiceInvoiceListResponse>;
};

export type IoRestorecommerceInvoiceInvoiceListResponse = {
  __typename?: 'IoRestorecommerceInvoiceInvoiceListResponse';
  items?: Maybe<Array<IoRestorecommerceInvoiceInvoiceResponse>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceInvoiceInvoiceResponse = {
  __typename?: 'IoRestorecommerceInvoiceInvoiceResponse';
  payload?: Maybe<IoRestorecommerceInvoiceInvoice>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceInvoiceInvoice = {
  __typename?: 'IoRestorecommerceInvoiceInvoice';
  id?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  invoiceNumber?: Maybe<Scalars['String']['output']>;
  references?: Maybe<Array<IoRestorecommerceReferenceReference>>;
  userId?: Maybe<Scalars['String']['output']>;
  user?: Maybe<IoRestorecommerceUserUser>;
  customerId?: Maybe<Scalars['String']['output']>;
  customer?: Maybe<IoRestorecommerceCustomerCustomer>;
  shopId?: Maybe<Scalars['String']['output']>;
  shop?: Maybe<IoRestorecommerceShopShop>;
  timestamp?: Maybe<Scalars['DateTime']['output']>;
  paymentState?: Maybe<IoRestorecommerceInvoicePaymentState>;
  sender?: Maybe<IoRestorecommerceAddressBillingAddress>;
  recipient?: Maybe<IoRestorecommerceAddressBillingAddress>;
  sections?: Maybe<Array<IoRestorecommerceInvoiceSection>>;
  totalAmounts?: Maybe<Array<IoRestorecommerceAmountAmount>>;
  paymentHints?: Maybe<Array<Scalars['String']['output']>>;
  documents?: Maybe<Array<IoRestorecommerceFileFile>>;
  fromDate?: Maybe<Scalars['DateTime']['output']>;
  toDate?: Maybe<Scalars['DateTime']['output']>;
  sent?: Maybe<Scalars['Boolean']['output']>;
  withdrawn?: Maybe<Scalars['Boolean']['output']>;
};

export type IoRestorecommerceInvoiceSection = {
  __typename?: 'IoRestorecommerceInvoiceSection';
  id?: Maybe<Scalars['String']['output']>;
  customerRemark?: Maybe<Scalars['String']['output']>;
  positions?: Maybe<Array<IoRestorecommerceInvoicePosition>>;
  amounts?: Maybe<Array<IoRestorecommerceAmountAmount>>;
};

export type IoRestorecommerceInvoicePosition = {
  __typename?: 'IoRestorecommerceInvoicePosition';
  id?: Maybe<Scalars['String']['output']>;
  productItem?: Maybe<IoRestorecommerceInvoiceProductItem>;
  fulfillmentItem?: Maybe<IoRestorecommerceInvoiceFulfillmentItem>;
  manualItem?: Maybe<IoRestorecommerceInvoiceManualItem>;
  unitPrice?: Maybe<IoRestorecommercePricePrice>;
  quantity?: Maybe<Scalars['Int']['output']>;
  amount?: Maybe<IoRestorecommerceAmountAmount>;
  contractStartDate?: Maybe<Scalars['Float']['output']>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
};

export type IoRestorecommerceInvoiceProductItem = {
  __typename?: 'IoRestorecommerceInvoiceProductItem';
  productId?: Maybe<Scalars['String']['output']>;
  product?: Maybe<IoRestorecommerceProductProduct>;
  variantId?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceInvoiceFulfillmentItem = {
  __typename?: 'IoRestorecommerceInvoiceFulfillmentItem';
  productId?: Maybe<Scalars['String']['output']>;
  product?: Maybe<IoRestorecommerceFulfillmentProductFulfillmentProduct>;
  variantId?: Maybe<Scalars['String']['output']>;
};

export type IoRestorecommerceInvoiceManualItem = {
  __typename?: 'IoRestorecommerceInvoiceManualItem';
  stockKeepingUnit?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  descritpion?: Maybe<Scalars['String']['output']>;
  properties?: Maybe<Array<IoRestorecommercePropertyProperty>>;
};

export type IIoRestorecommerceOrderOrderingInvoiceRequestList = {
  items?: InputMaybe<Array<IIoRestorecommerceOrderOrderingInvoiceRequest>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
};

export type IIoRestorecommerceOrderOrderingInvoiceRequest = {
  invoiceNumber?: InputMaybe<Scalars['String']['input']>;
  paymentHints?: InputMaybe<Array<Scalars['String']['input']>>;
  sections?: InputMaybe<Array<IIoRestorecommerceOrderOrderingInvoiceSection>>;
};

export type IIoRestorecommerceOrderOrderingInvoiceSection = {
  orderId?: InputMaybe<Scalars['String']['input']>;
  selectedItems?: InputMaybe<Array<Scalars['String']['input']>>;
  fulfillmentMode?: InputMaybe<IoRestorecommerceOrderFulfillmentInvoiceMode>;
  selectedFulfillments?: InputMaybe<Array<IIoRestorecommerceFulfillmentFulfillmentInvoiceSection>>;
};

export enum IoRestorecommerceOrderFulfillmentInvoiceMode {
  Include = 0,
  Exclude = 1
}

export type IIoRestorecommerceFulfillmentFulfillmentInvoiceSection = {
  fulfillmentId?: InputMaybe<Scalars['String']['input']>;
  selectedParcels?: InputMaybe<Array<Scalars['String']['input']>>;
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
  OrderingQuery: ResolverTypeWrapper<OrderingQuery>;
  OrderingOrderQuery: ResolverTypeWrapper<OrderingOrderQuery>;
  ProtoIoRestorecommerceOrderOrderListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceOrderOrderListResponse>;
  IoRestorecommerceOrderOrderListResponse: ResolverTypeWrapper<IoRestorecommerceOrderOrderListResponse>;
  IoRestorecommerceOrderOrderResponse: ResolverTypeWrapper<IoRestorecommerceOrderOrderResponse>;
  IoRestorecommerceOrderOrder: ResolverTypeWrapper<IoRestorecommerceOrderOrder>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  IoRestorecommerceUserUser: ResolverTypeWrapper<IoRestorecommerceUserUser>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  IoRestorecommerceAuthRoleAssociation: ResolverTypeWrapper<IoRestorecommerceAuthRoleAssociation>;
  IoRestorecommerceTimezoneTimezone: ResolverTypeWrapper<IoRestorecommerceTimezoneTimezone>;
  IoRestorecommerceLocaleLocale: ResolverTypeWrapper<IoRestorecommerceLocaleLocale>;
  IoRestorecommerceImageImage: ResolverTypeWrapper<IoRestorecommerceImageImage>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  IoRestorecommerceUserUserType: IoRestorecommerceUserUserType;
  IoRestorecommerceAuthTokens: ResolverTypeWrapper<IoRestorecommerceAuthTokens>;
  GoogleProtobufAny: ResolverTypeWrapper<GoogleProtobufAny>;
  GoogleProtobufAnyValue: ResolverTypeWrapper<Scalars['GoogleProtobufAnyValue']['output']>;
  IoRestorecommerceCustomerCustomer: ResolverTypeWrapper<IoRestorecommerceCustomerCustomer>;
  IoRestorecommerceCustomerPrivate: ResolverTypeWrapper<IoRestorecommerceCustomerPrivate>;
  IoRestorecommerceContactPointContactPoint: ResolverTypeWrapper<IoRestorecommerceContactPointContactPoint>;
  IoRestorecommerceAddressAddress: ResolverTypeWrapper<IoRestorecommerceAddressAddress>;
  IoRestorecommerceCountryCountry: ResolverTypeWrapper<IoRestorecommerceCountryCountry>;
  IoRestorecommerceAddressGeoPoint: ResolverTypeWrapper<IoRestorecommerceAddressGeoPoint>;
  IoRestorecommerceAddressAddressAddition: ResolverTypeWrapper<IoRestorecommerceAddressAddressAddition>;
  IoRestorecommerceAddressBusinessAddress: ResolverTypeWrapper<IoRestorecommerceAddressBusinessAddress>;
  IoRestorecommerceAddressResidentialAddress: ResolverTypeWrapper<IoRestorecommerceAddressResidentialAddress>;
  IoRestorecommerceAddressPackStation: ResolverTypeWrapper<IoRestorecommerceAddressPackStation>;
  IoRestorecommerceContactPointTypeContactPointType: ResolverTypeWrapper<IoRestorecommerceContactPointTypeContactPointType>;
  IoRestorecommerceCustomerCommercial: ResolverTypeWrapper<IoRestorecommerceCustomerCommercial>;
  IoRestorecommerceOrganizationOrganization: ResolverTypeWrapper<IoRestorecommerceOrganizationOrganization>;
  IoRestorecommercePaymentMethodPaymentMethod: ResolverTypeWrapper<IoRestorecommercePaymentMethodPaymentMethod>;
  IoRestorecommercePaymentMethodPaymentMethodEnum: IoRestorecommercePaymentMethodPaymentMethodEnum;
  IoRestorecommercePaymentMethodTransferTypeEnum: IoRestorecommercePaymentMethodTransferTypeEnum;
  IoRestorecommerceCustomerPublicSector: ResolverTypeWrapper<IoRestorecommerceCustomerPublicSector>;
  IoRestorecommerceShopShop: ResolverTypeWrapper<IoRestorecommerceShopShop>;
  IoRestorecommerceOrderItem: ResolverTypeWrapper<IoRestorecommerceOrderItem>;
  IoRestorecommerceProductProduct: ResolverTypeWrapper<IoRestorecommerceProductProduct>;
  IoRestorecommerceProductIndividualProduct: ResolverTypeWrapper<IoRestorecommerceProductIndividualProduct>;
  IoRestorecommerceManufacturerManufacturer: ResolverTypeWrapper<IoRestorecommerceManufacturerManufacturer>;
  IoRestorecommerceProductPrototypeProductPrototype: ResolverTypeWrapper<IoRestorecommerceProductPrototypeProductPrototype>;
  IoRestorecommerceProductCategoryProductCategory: ResolverTypeWrapper<IoRestorecommerceProductCategoryProductCategory>;
  IoRestorecommercePriceGroupPriceGroup: ResolverTypeWrapper<IoRestorecommercePriceGroupPriceGroup>;
  IoRestorecommerceProductCategoryParent: ResolverTypeWrapper<IoRestorecommerceProductCategoryParent>;
  IoRestorecommerceTaxTax: ResolverTypeWrapper<IoRestorecommerceTaxTax>;
  IoRestorecommerceTaxTypeTaxType: ResolverTypeWrapper<IoRestorecommerceTaxTypeTaxType>;
  IoRestorecommerceProductPhysicalProduct: ResolverTypeWrapper<IoRestorecommerceProductPhysicalProduct>;
  IoRestorecommerceProductPhysicalVariant: ResolverTypeWrapper<IoRestorecommerceProductPhysicalVariant>;
  IoRestorecommercePricePrice: ResolverTypeWrapper<IoRestorecommercePricePrice>;
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
  IoRestorecommerceProductAssociation: ResolverTypeWrapper<IoRestorecommerceProductAssociation>;
  IoRestorecommerceProductAssociationType: IoRestorecommerceProductAssociationType;
  IoRestorecommerceAmountAmount: ResolverTypeWrapper<IoRestorecommerceAmountAmount>;
  IoRestorecommerceAmountVAT: ResolverTypeWrapper<IoRestorecommerceAmountVat>;
  IoRestorecommerceOrderOrderState: IoRestorecommerceOrderOrderState;
  IoRestorecommerceFulfillmentState: IoRestorecommerceFulfillmentState;
  IoRestorecommerceInvoicePaymentState: IoRestorecommerceInvoicePaymentState;
  IoRestorecommerceAddressShippingAddress: ResolverTypeWrapper<IoRestorecommerceAddressShippingAddress>;
  IoRestorecommerceAddressContact: ResolverTypeWrapper<IoRestorecommerceAddressContact>;
  IoRestorecommerceAddressBillingAddress: ResolverTypeWrapper<IoRestorecommerceAddressBillingAddress>;
  IoRestorecommerceFulfillmentProductPreferences: ResolverTypeWrapper<IoRestorecommerceFulfillmentProductPreferences>;
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
  Mutation: ResolverTypeWrapper<{}>;
  OrderingMutation: ResolverTypeWrapper<OrderingMutation>;
  OrderingOrderMutation: ResolverTypeWrapper<OrderingOrderMutation>;
  IIoRestorecommerceOrderOrderList: IIoRestorecommerceOrderOrderList;
  IIoRestorecommerceOrderOrder: IIoRestorecommerceOrderOrder;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IDateTime: ResolverTypeWrapper<Scalars['IDateTime']['output']>;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceOrderItem: IIoRestorecommerceOrderItem;
  IIoRestorecommercePricePrice: IIoRestorecommercePricePrice;
  IIoRestorecommerceAmountAmount: IIoRestorecommerceAmountAmount;
  IIoRestorecommerceAmountVAT: IIoRestorecommerceAmountVat;
  IIoRestorecommerceAddressShippingAddress: IIoRestorecommerceAddressShippingAddress;
  IIoRestorecommerceAddressAddress: IIoRestorecommerceAddressAddress;
  IIoRestorecommerceAddressGeoPoint: IIoRestorecommerceAddressGeoPoint;
  IIoRestorecommerceAddressAddressAddition: IIoRestorecommerceAddressAddressAddition;
  IIoRestorecommerceAddressBusinessAddress: IIoRestorecommerceAddressBusinessAddress;
  IIoRestorecommerceAddressResidentialAddress: IIoRestorecommerceAddressResidentialAddress;
  IIoRestorecommerceAddressPackStation: IIoRestorecommerceAddressPackStation;
  IIoRestorecommerceAddressContact: IIoRestorecommerceAddressContact;
  IIoRestorecommerceAddressBillingAddress: IIoRestorecommerceAddressBillingAddress;
  IIoRestorecommerceFulfillmentProductPreferences: IIoRestorecommerceFulfillmentProductPreferences;
  ModeType: ModeType;
  IIoRestorecommerceOrderOrderIdList: IIoRestorecommerceOrderOrderIdList;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  IoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<IoRestorecommerceResourcebaseDeleteResponse>;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponse>;
  IoRestorecommerceFulfillmentProductPackingSolutionListResponse: ResolverTypeWrapper<IoRestorecommerceFulfillmentProductPackingSolutionListResponse>;
  IoRestorecommerceFulfillmentProductPackingSolutionResponse: ResolverTypeWrapper<IoRestorecommerceFulfillmentProductPackingSolutionResponse>;
  IoRestorecommerceReferenceReference: ResolverTypeWrapper<IoRestorecommerceReferenceReference>;
  IoRestorecommerceFulfillmentProductPackingSolution: ResolverTypeWrapper<IoRestorecommerceFulfillmentProductPackingSolution>;
  IoRestorecommerceFulfillmentParcel: ResolverTypeWrapper<IoRestorecommerceFulfillmentParcel>;
  IoRestorecommerceFulfillmentProductFulfillmentProduct: ResolverTypeWrapper<IoRestorecommerceFulfillmentProductFulfillmentProduct>;
  IoRestorecommerceFulfillmentCourierFulfillmentCourier: ResolverTypeWrapper<IoRestorecommerceFulfillmentCourierFulfillmentCourier>;
  IoRestorecommerceFulfillmentProductVariant: ResolverTypeWrapper<IoRestorecommerceFulfillmentProductVariant>;
  IoRestorecommerceFulfillmentItem: ResolverTypeWrapper<IoRestorecommerceFulfillmentItem>;
  IIoRestorecommerceOrderFulfillmentRequestList: IIoRestorecommerceOrderFulfillmentRequestList;
  IIoRestorecommerceOrderFulfillmentRequest: IIoRestorecommerceOrderFulfillmentRequest;
  ProtoIoRestorecommerceFulfillmentFulfillmentListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
  IoRestorecommerceFulfillmentFulfillmentListResponse: ResolverTypeWrapper<IoRestorecommerceFulfillmentFulfillmentListResponse>;
  IoRestorecommerceFulfillmentFulfillmentResponse: ResolverTypeWrapper<IoRestorecommerceFulfillmentFulfillmentResponse>;
  IoRestorecommerceFulfillmentFulfillment: ResolverTypeWrapper<IoRestorecommerceFulfillmentFulfillment>;
  IoRestorecommerceFulfillmentPackaging: ResolverTypeWrapper<IoRestorecommerceFulfillmentPackaging>;
  IoRestorecommerceFulfillmentLabel: ResolverTypeWrapper<IoRestorecommerceFulfillmentLabel>;
  IoRestorecommerceFulfillmentTracking: ResolverTypeWrapper<IoRestorecommerceFulfillmentTracking>;
  IoRestorecommerceFulfillmentEvent: ResolverTypeWrapper<IoRestorecommerceFulfillmentEvent>;
  ProtoIoRestorecommerceStatusStatusListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceStatusStatusListResponse>;
  IoRestorecommerceStatusStatusListResponse: ResolverTypeWrapper<IoRestorecommerceStatusStatusListResponse>;
  ProtoIoRestorecommerceInvoiceInvoiceListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
  IoRestorecommerceInvoiceInvoiceListResponse: ResolverTypeWrapper<IoRestorecommerceInvoiceInvoiceListResponse>;
  IoRestorecommerceInvoiceInvoiceResponse: ResolverTypeWrapper<IoRestorecommerceInvoiceInvoiceResponse>;
  IoRestorecommerceInvoiceInvoice: ResolverTypeWrapper<IoRestorecommerceInvoiceInvoice>;
  IoRestorecommerceInvoiceSection: ResolverTypeWrapper<IoRestorecommerceInvoiceSection>;
  IoRestorecommerceInvoicePosition: ResolverTypeWrapper<IoRestorecommerceInvoicePosition>;
  IoRestorecommerceInvoiceProductItem: ResolverTypeWrapper<IoRestorecommerceInvoiceProductItem>;
  IoRestorecommerceInvoiceFulfillmentItem: ResolverTypeWrapper<IoRestorecommerceInvoiceFulfillmentItem>;
  IoRestorecommerceInvoiceManualItem: ResolverTypeWrapper<IoRestorecommerceInvoiceManualItem>;
  IIoRestorecommerceOrderOrderingInvoiceRequestList: IIoRestorecommerceOrderOrderingInvoiceRequestList;
  IIoRestorecommerceOrderOrderingInvoiceRequest: IIoRestorecommerceOrderOrderingInvoiceRequest;
  IIoRestorecommerceOrderOrderingInvoiceSection: IIoRestorecommerceOrderOrderingInvoiceSection;
  IoRestorecommerceOrderFulfillmentInvoiceMode: IoRestorecommerceOrderFulfillmentInvoiceMode;
  IIoRestorecommerceFulfillmentFulfillmentInvoiceSection: IIoRestorecommerceFulfillmentFulfillmentInvoiceSection;
  Subscription: ResolverTypeWrapper<{}>;
  SubscriptionOutput: ResolverTypeWrapper<SubscriptionOutput>;
  SubscriptionAction: SubscriptionAction;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  OrderingQuery: OrderingQuery;
  OrderingOrderQuery: OrderingOrderQuery;
  ProtoIoRestorecommerceOrderOrderListResponse: ProtoIoRestorecommerceOrderOrderListResponse;
  IoRestorecommerceOrderOrderListResponse: IoRestorecommerceOrderOrderListResponse;
  IoRestorecommerceOrderOrderResponse: IoRestorecommerceOrderOrderResponse;
  IoRestorecommerceOrderOrder: IoRestorecommerceOrderOrder;
  String: Scalars['String']['output'];
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  DateTime: Scalars['DateTime']['output'];
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  IoRestorecommerceUserUser: IoRestorecommerceUserUser;
  Boolean: Scalars['Boolean']['output'];
  IoRestorecommerceAuthRoleAssociation: IoRestorecommerceAuthRoleAssociation;
  IoRestorecommerceTimezoneTimezone: IoRestorecommerceTimezoneTimezone;
  IoRestorecommerceLocaleLocale: IoRestorecommerceLocaleLocale;
  IoRestorecommerceImageImage: IoRestorecommerceImageImage;
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  IoRestorecommerceAuthTokens: IoRestorecommerceAuthTokens;
  GoogleProtobufAny: GoogleProtobufAny;
  GoogleProtobufAnyValue: Scalars['GoogleProtobufAnyValue']['output'];
  IoRestorecommerceCustomerCustomer: IoRestorecommerceCustomerCustomer;
  IoRestorecommerceCustomerPrivate: IoRestorecommerceCustomerPrivate;
  IoRestorecommerceContactPointContactPoint: IoRestorecommerceContactPointContactPoint;
  IoRestorecommerceAddressAddress: IoRestorecommerceAddressAddress;
  IoRestorecommerceCountryCountry: IoRestorecommerceCountryCountry;
  IoRestorecommerceAddressGeoPoint: IoRestorecommerceAddressGeoPoint;
  IoRestorecommerceAddressAddressAddition: IoRestorecommerceAddressAddressAddition;
  IoRestorecommerceAddressBusinessAddress: IoRestorecommerceAddressBusinessAddress;
  IoRestorecommerceAddressResidentialAddress: IoRestorecommerceAddressResidentialAddress;
  IoRestorecommerceAddressPackStation: IoRestorecommerceAddressPackStation;
  IoRestorecommerceContactPointTypeContactPointType: IoRestorecommerceContactPointTypeContactPointType;
  IoRestorecommerceCustomerCommercial: IoRestorecommerceCustomerCommercial;
  IoRestorecommerceOrganizationOrganization: IoRestorecommerceOrganizationOrganization;
  IoRestorecommercePaymentMethodPaymentMethod: IoRestorecommercePaymentMethodPaymentMethod;
  IoRestorecommerceCustomerPublicSector: IoRestorecommerceCustomerPublicSector;
  IoRestorecommerceShopShop: IoRestorecommerceShopShop;
  IoRestorecommerceOrderItem: IoRestorecommerceOrderItem;
  IoRestorecommerceProductProduct: IoRestorecommerceProductProduct;
  IoRestorecommerceProductIndividualProduct: IoRestorecommerceProductIndividualProduct;
  IoRestorecommerceManufacturerManufacturer: IoRestorecommerceManufacturerManufacturer;
  IoRestorecommerceProductPrototypeProductPrototype: IoRestorecommerceProductPrototypeProductPrototype;
  IoRestorecommerceProductCategoryProductCategory: IoRestorecommerceProductCategoryProductCategory;
  IoRestorecommercePriceGroupPriceGroup: IoRestorecommercePriceGroupPriceGroup;
  IoRestorecommerceProductCategoryParent: IoRestorecommerceProductCategoryParent;
  IoRestorecommerceTaxTax: IoRestorecommerceTaxTax;
  IoRestorecommerceTaxTypeTaxType: IoRestorecommerceTaxTypeTaxType;
  IoRestorecommerceProductPhysicalProduct: IoRestorecommerceProductPhysicalProduct;
  IoRestorecommerceProductPhysicalVariant: IoRestorecommerceProductPhysicalVariant;
  IoRestorecommercePricePrice: IoRestorecommercePricePrice;
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
  IoRestorecommerceProductAssociation: IoRestorecommerceProductAssociation;
  IoRestorecommerceAmountAmount: IoRestorecommerceAmountAmount;
  IoRestorecommerceAmountVAT: IoRestorecommerceAmountVat;
  IoRestorecommerceAddressShippingAddress: IoRestorecommerceAddressShippingAddress;
  IoRestorecommerceAddressContact: IoRestorecommerceAddressContact;
  IoRestorecommerceAddressBillingAddress: IoRestorecommerceAddressBillingAddress;
  IoRestorecommerceFulfillmentProductPreferences: IoRestorecommerceFulfillmentProductPreferences;
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
  Mutation: {};
  OrderingMutation: OrderingMutation;
  OrderingOrderMutation: OrderingOrderMutation;
  IIoRestorecommerceOrderOrderList: IIoRestorecommerceOrderOrderList;
  IIoRestorecommerceOrderOrder: IIoRestorecommerceOrderOrder;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IDateTime: Scalars['IDateTime']['output'];
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceOrderItem: IIoRestorecommerceOrderItem;
  IIoRestorecommercePricePrice: IIoRestorecommercePricePrice;
  IIoRestorecommerceAmountAmount: IIoRestorecommerceAmountAmount;
  IIoRestorecommerceAmountVAT: IIoRestorecommerceAmountVat;
  IIoRestorecommerceAddressShippingAddress: IIoRestorecommerceAddressShippingAddress;
  IIoRestorecommerceAddressAddress: IIoRestorecommerceAddressAddress;
  IIoRestorecommerceAddressGeoPoint: IIoRestorecommerceAddressGeoPoint;
  IIoRestorecommerceAddressAddressAddition: IIoRestorecommerceAddressAddressAddition;
  IIoRestorecommerceAddressBusinessAddress: IIoRestorecommerceAddressBusinessAddress;
  IIoRestorecommerceAddressResidentialAddress: IIoRestorecommerceAddressResidentialAddress;
  IIoRestorecommerceAddressPackStation: IIoRestorecommerceAddressPackStation;
  IIoRestorecommerceAddressContact: IIoRestorecommerceAddressContact;
  IIoRestorecommerceAddressBillingAddress: IIoRestorecommerceAddressBillingAddress;
  IIoRestorecommerceFulfillmentProductPreferences: IIoRestorecommerceFulfillmentProductPreferences;
  IIoRestorecommerceOrderOrderIdList: IIoRestorecommerceOrderOrderIdList;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ProtoIoRestorecommerceResourcebaseDeleteResponse;
  IoRestorecommerceResourcebaseDeleteResponse: IoRestorecommerceResourcebaseDeleteResponse;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponse: ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponse;
  IoRestorecommerceFulfillmentProductPackingSolutionListResponse: IoRestorecommerceFulfillmentProductPackingSolutionListResponse;
  IoRestorecommerceFulfillmentProductPackingSolutionResponse: IoRestorecommerceFulfillmentProductPackingSolutionResponse;
  IoRestorecommerceReferenceReference: IoRestorecommerceReferenceReference;
  IoRestorecommerceFulfillmentProductPackingSolution: IoRestorecommerceFulfillmentProductPackingSolution;
  IoRestorecommerceFulfillmentParcel: IoRestorecommerceFulfillmentParcel;
  IoRestorecommerceFulfillmentProductFulfillmentProduct: IoRestorecommerceFulfillmentProductFulfillmentProduct;
  IoRestorecommerceFulfillmentCourierFulfillmentCourier: IoRestorecommerceFulfillmentCourierFulfillmentCourier;
  IoRestorecommerceFulfillmentProductVariant: IoRestorecommerceFulfillmentProductVariant;
  IoRestorecommerceFulfillmentItem: IoRestorecommerceFulfillmentItem;
  IIoRestorecommerceOrderFulfillmentRequestList: IIoRestorecommerceOrderFulfillmentRequestList;
  IIoRestorecommerceOrderFulfillmentRequest: IIoRestorecommerceOrderFulfillmentRequest;
  ProtoIoRestorecommerceFulfillmentFulfillmentListResponse: ProtoIoRestorecommerceFulfillmentFulfillmentListResponse;
  IoRestorecommerceFulfillmentFulfillmentListResponse: IoRestorecommerceFulfillmentFulfillmentListResponse;
  IoRestorecommerceFulfillmentFulfillmentResponse: IoRestorecommerceFulfillmentFulfillmentResponse;
  IoRestorecommerceFulfillmentFulfillment: IoRestorecommerceFulfillmentFulfillment;
  IoRestorecommerceFulfillmentPackaging: IoRestorecommerceFulfillmentPackaging;
  IoRestorecommerceFulfillmentLabel: IoRestorecommerceFulfillmentLabel;
  IoRestorecommerceFulfillmentTracking: IoRestorecommerceFulfillmentTracking;
  IoRestorecommerceFulfillmentEvent: IoRestorecommerceFulfillmentEvent;
  ProtoIoRestorecommerceStatusStatusListResponse: ProtoIoRestorecommerceStatusStatusListResponse;
  IoRestorecommerceStatusStatusListResponse: IoRestorecommerceStatusStatusListResponse;
  ProtoIoRestorecommerceInvoiceInvoiceListResponse: ProtoIoRestorecommerceInvoiceInvoiceListResponse;
  IoRestorecommerceInvoiceInvoiceListResponse: IoRestorecommerceInvoiceInvoiceListResponse;
  IoRestorecommerceInvoiceInvoiceResponse: IoRestorecommerceInvoiceInvoiceResponse;
  IoRestorecommerceInvoiceInvoice: IoRestorecommerceInvoiceInvoice;
  IoRestorecommerceInvoiceSection: IoRestorecommerceInvoiceSection;
  IoRestorecommerceInvoicePosition: IoRestorecommerceInvoicePosition;
  IoRestorecommerceInvoiceProductItem: IoRestorecommerceInvoiceProductItem;
  IoRestorecommerceInvoiceFulfillmentItem: IoRestorecommerceInvoiceFulfillmentItem;
  IoRestorecommerceInvoiceManualItem: IoRestorecommerceInvoiceManualItem;
  IIoRestorecommerceOrderOrderingInvoiceRequestList: IIoRestorecommerceOrderOrderingInvoiceRequestList;
  IIoRestorecommerceOrderOrderingInvoiceRequest: IIoRestorecommerceOrderOrderingInvoiceRequest;
  IIoRestorecommerceOrderOrderingInvoiceSection: IIoRestorecommerceOrderOrderingInvoiceSection;
  IIoRestorecommerceFulfillmentFulfillmentInvoiceSection: IIoRestorecommerceFulfillmentFulfillmentInvoiceSection;
  Subscription: {};
  SubscriptionOutput: SubscriptionOutput;
}>;

export type QueryResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  ordering?: Resolver<ResolversTypes['OrderingQuery'], ParentType, ContextType>;
}>;

export type OrderingQueryResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['OrderingQuery'] = ResolversParentTypes['OrderingQuery']> = ResolversObject<{
  order?: Resolver<ResolversTypes['OrderingOrderQuery'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderingOrderQueryResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['OrderingOrderQuery'] = ResolversParentTypes['OrderingOrderQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOrderOrderListResponse']>, ParentType, ContextType, RequireFields<OrderingOrderQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceOrderOrderListResponseResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceOrderOrderListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceOrderOrderListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrderOrderListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOrderOrderListResponseResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceOrderOrderListResponse'] = ResolversParentTypes['IoRestorecommerceOrderOrderListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceOrderOrderResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOrderOrderResponseResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceOrderOrderResponse'] = ResolversParentTypes['IoRestorecommerceOrderOrderResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrderOrder']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOrderOrderResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceOrderOrder'] = ResolversParentTypes['IoRestorecommerceOrderOrder']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUser']>, ParentType, ContextType>;
  customerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCustomerCustomer']>, ParentType, ContextType>;
  shopId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shop?: Resolver<Maybe<ResolversTypes['IoRestorecommerceShopShop']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceOrderItem']>>, ParentType, ContextType>;
  orderState?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrderOrderState']>, ParentType, ContextType>;
  fulfillmentState?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentState']>, ParentType, ContextType>;
  paymentState?: Resolver<Maybe<ResolversTypes['IoRestorecommerceInvoicePaymentState']>, ParentType, ContextType>;
  totalAmounts?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAmountAmount']>>, ParentType, ContextType>;
  shippingAddress?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressShippingAddress']>, ParentType, ContextType>;
  billingAddress?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressBillingAddress']>, ParentType, ContextType>;
  notificationEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerOrderNr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerRemark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  packagingPreferences?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentProductPreferences']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceMetaMetaResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceMetaMeta'] = ResolversParentTypes['IoRestorecommerceMetaMeta']> = ResolversObject<{
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  modified?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  modifiedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owners?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  acls?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserUserResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceUserUser'] = ResolversParentTypes['IoRestorecommerceUserUser']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  newEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  activationCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  passwordHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roleAssociations?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAuthRoleAssociation']>>, ParentType, ContextType>;
  timezoneId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['IoRestorecommerceTimezoneTimezone']>, ParentType, ContextType>;
  localeId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['IoRestorecommerceLocaleLocale']>, ParentType, ContextType>;
  defaultScope?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unauthenticated?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  guest?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['IoRestorecommerceImageImage']>, ParentType, ContextType>;
  userType?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUserType']>, ParentType, ContextType>;
  invite?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  invitedByUserName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invitedByUserFirstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invitedByUserLastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tokens?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAuthTokens']>>, ParentType, ContextType>;
  lastAccess?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAuthRoleAssociationResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthRoleAssociation'] = ResolversParentTypes['IoRestorecommerceAuthRoleAssociation']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTimezoneTimezoneResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceTimezoneTimezone'] = ResolversParentTypes['IoRestorecommerceTimezoneTimezone']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceLocaleLocaleResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceLocaleLocale'] = ResolversParentTypes['IoRestorecommerceLocaleLocale']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceImageImageResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceImageImage'] = ResolversParentTypes['IoRestorecommerceImageImage']> = ResolversObject<{
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

export type IoRestorecommerceUserUserTypeResolvers = { ORG_USER: 0, INDIVIDUAL_USER: 1, GUEST: 2, TECHNICAL_USER: 3 };

export type IoRestorecommerceAuthTokensResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthTokens'] = ResolversParentTypes['IoRestorecommerceAuthTokens']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expiresIn?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scopes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  interactive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastLogin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GoogleProtobufAnyResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['GoogleProtobufAny'] = ResolversParentTypes['GoogleProtobufAny']> = ResolversObject<{
  typeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['GoogleProtobufAnyValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface GoogleProtobufAnyValueScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GoogleProtobufAnyValue'], any> {
  name: 'GoogleProtobufAnyValue';
}

export type IoRestorecommerceCustomerCustomerResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerCustomer'] = ResolversParentTypes['IoRestorecommerceCustomerCustomer']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  private?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCustomerPrivate']>, ParentType, ContextType>;
  commercial?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCustomerCommercial']>, ParentType, ContextType>;
  publicSector?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCustomerPublicSector']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCustomerPrivateResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerPrivate'] = ResolversParentTypes['IoRestorecommerceCustomerPrivate']> = ResolversObject<{
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUser']>, ParentType, ContextType>;
  contactPointIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  contactPoints?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceContactPointContactPoint']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceContactPointContactPointResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceContactPointContactPoint'] = ResolversParentTypes['IoRestorecommerceContactPointContactPoint']> = ResolversObject<{
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

export type IoRestorecommerceAddressAddressResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressAddress'] = ResolversParentTypes['IoRestorecommerceAddressAddress']> = ResolversObject<{
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

export type IoRestorecommerceCountryCountryResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceCountryCountry'] = ResolversParentTypes['IoRestorecommerceCountryCountry']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  geographicalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  economicAreas?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressGeoPointResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressGeoPoint'] = ResolversParentTypes['IoRestorecommerceAddressGeoPoint']> = ResolversObject<{
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressAddressAdditionResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressAddressAddition'] = ResolversParentTypes['IoRestorecommerceAddressAddressAddition']> = ResolversObject<{
  field1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  field2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressBusinessAddressResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressBusinessAddress'] = ResolversParentTypes['IoRestorecommerceAddressBusinessAddress']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressResidentialAddressResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressResidentialAddress'] = ResolversParentTypes['IoRestorecommerceAddressResidentialAddress']> = ResolversObject<{
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  givenName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  midName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  familyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressPackStationResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressPackStation'] = ResolversParentTypes['IoRestorecommerceAddressPackStation']> = ResolversObject<{
  provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stationNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceContactPointTypeContactPointTypeResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceContactPointTypeContactPointType'] = ResolversParentTypes['IoRestorecommerceContactPointTypeContactPointType']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCustomerCommercialResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerCommercial'] = ResolversParentTypes['IoRestorecommerceCustomerCommercial']> = ResolversObject<{
  organizationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrganizationOrganization']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOrganizationOrganizationResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceOrganizationOrganization'] = ResolversParentTypes['IoRestorecommerceOrganizationOrganization']> = ResolversObject<{
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

export type IoRestorecommercePaymentMethodPaymentMethodResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommercePaymentMethodPaymentMethod'] = ResolversParentTypes['IoRestorecommercePaymentMethodPaymentMethod']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  paymentMethod?: Resolver<Maybe<ResolversTypes['IoRestorecommercePaymentMethodPaymentMethodEnum']>, ParentType, ContextType>;
  transferType?: Resolver<Maybe<ResolversTypes['IoRestorecommercePaymentMethodTransferTypeEnum']>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePaymentMethodPaymentMethodEnumResolvers = { WIRE_TRANSFER: 0, DIRECT_DEBIT: 1, PAYPAL: 2 };

export type IoRestorecommercePaymentMethodTransferTypeEnumResolvers = { RECEIVE: 0, SEND: 1, BOTH: 2 };

export type IoRestorecommerceCustomerPublicSectorResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerPublicSector'] = ResolversParentTypes['IoRestorecommerceCustomerPublicSector']> = ResolversObject<{
  organizationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrganizationOrganization']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceShopShopResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceShopShop'] = ResolversParentTypes['IoRestorecommerceShopShop']> = ResolversObject<{
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

export type IoRestorecommerceOrderItemResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceOrderItem'] = ResolversParentTypes['IoRestorecommerceOrderItem']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductProduct']>, ParentType, ContextType>;
  variantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  unitPrice?: Resolver<Maybe<ResolversTypes['IoRestorecommercePricePrice']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAmountAmount']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductProductResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductProduct'] = ResolversParentTypes['IoRestorecommerceProductProduct']> = ResolversObject<{
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

export type IoRestorecommerceProductIndividualProductResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductIndividualProduct'] = ResolversParentTypes['IoRestorecommerceProductIndividualProduct']> = ResolversObject<{
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

export type IoRestorecommerceManufacturerManufacturerResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceManufacturerManufacturer'] = ResolversParentTypes['IoRestorecommerceManufacturerManufacturer']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductPrototypeProductPrototypeResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductPrototypeProductPrototype'] = ResolversParentTypes['IoRestorecommerceProductPrototypeProductPrototype']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categoryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductCategoryProductCategory']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductCategoryProductCategoryResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductCategoryProductCategory'] = ResolversParentTypes['IoRestorecommerceProductCategoryProductCategory']> = ResolversObject<{
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

export type IoRestorecommercePriceGroupPriceGroupResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommercePriceGroupPriceGroup'] = ResolversParentTypes['IoRestorecommercePriceGroupPriceGroup']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductCategoryParentResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductCategoryParent'] = ResolversParentTypes['IoRestorecommerceProductCategoryParent']> = ResolversObject<{
  parentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTaxTaxResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceTaxTax'] = ResolversParentTypes['IoRestorecommerceTaxTax']> = ResolversObject<{
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

export type IoRestorecommerceTaxTypeTaxTypeResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceTaxTypeTaxType'] = ResolversParentTypes['IoRestorecommerceTaxTypeTaxType']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductPhysicalProductResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductPhysicalProduct'] = ResolversParentTypes['IoRestorecommerceProductPhysicalProduct']> = ResolversObject<{
  variants?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceProductPhysicalVariant']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductPhysicalVariantResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductPhysicalVariant'] = ResolversParentTypes['IoRestorecommerceProductPhysicalVariant']> = ResolversObject<{
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

export type IoRestorecommercePricePriceResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommercePricePrice'] = ResolversParentTypes['IoRestorecommercePricePrice']> = ResolversObject<{
  regularPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sale?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  salePrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  currencyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCurrencyCurrency']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCurrencyCurrencyResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceCurrencyCurrency'] = ResolversParentTypes['IoRestorecommerceCurrencyCurrency']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customExchangeRates?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceCurrencyExchangeRate']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCurrencyExchangeRateResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceCurrencyExchangeRate'] = ResolversParentTypes['IoRestorecommerceCurrencyExchangeRate']> = ResolversObject<{
  toCurrencyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  expenses?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFileFileResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceFileFile'] = ResolversParentTypes['IoRestorecommerceFileFile']> = ResolversObject<{
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

export type IoRestorecommerceProductPackageResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductPackage'] = ResolversParentTypes['IoRestorecommerceProductPackage']> = ResolversObject<{
  sizeInCm?: Resolver<Maybe<ResolversTypes['IoRestorecommerceGeometryBoundingBox3D']>, ParentType, ContextType>;
  weightInKg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rotatable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceGeometryBoundingBox3DResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceGeometryBoundingBox3D'] = ResolversParentTypes['IoRestorecommerceGeometryBoundingBox3D']> = ResolversObject<{
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePropertyPropertyResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommercePropertyProperty'] = ResolversParentTypes['IoRestorecommercePropertyProperty']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unitCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductServiceProductResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductServiceProduct'] = ResolversParentTypes['IoRestorecommerceProductServiceProduct']> = ResolversObject<{
  variants?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceProductServiceVariant']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductServiceVariantResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductServiceVariant'] = ResolversParentTypes['IoRestorecommerceProductServiceVariant']> = ResolversObject<{
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

export type IoRestorecommerceProductVirtualProductResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductVirtualProduct'] = ResolversParentTypes['IoRestorecommerceProductVirtualProduct']> = ResolversObject<{
  variants?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceProductVirtualVariant']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductVirtualVariantResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductVirtualVariant'] = ResolversParentTypes['IoRestorecommerceProductVirtualVariant']> = ResolversObject<{
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

export type IoRestorecommerceProductBundleResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductBundle'] = ResolversParentTypes['IoRestorecommerceProductBundle']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceImageImage']>>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceProductBundleProduct']>>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['IoRestorecommercePricePrice']>, ParentType, ContextType>;
  prePackaged?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductPackage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductBundleProductResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductBundleProduct'] = ResolversParentTypes['IoRestorecommerceProductBundleProduct']> = ResolversObject<{
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductProduct']>, ParentType, ContextType>;
  variantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  priceRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductAssociationResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductAssociation'] = ResolversParentTypes['IoRestorecommerceProductAssociation']> = ResolversObject<{
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductProduct']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductAssociationType']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductAssociationTypeResolvers = { MISCELLANEOUS: 0, ACCESSORY: 1, RECOMMENDATION: 2 };

export type IoRestorecommerceAmountAmountResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAmountAmount'] = ResolversParentTypes['IoRestorecommerceAmountAmount']> = ResolversObject<{
  currencyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCurrencyCurrency']>, ParentType, ContextType>;
  gross?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  net?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  vats?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAmountVAT']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAmountVatResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAmountVAT'] = ResolversParentTypes['IoRestorecommerceAmountVAT']> = ResolversObject<{
  taxId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tax?: Resolver<Maybe<ResolversTypes['IoRestorecommerceTaxTax']>, ParentType, ContextType>;
  vat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOrderOrderStateResolvers = { FAILED: 0, INVALID: 1, CREATED: 2, SUBMITTED: 3, IN_PROCESS: 4, DONE: 5, WITHDRAWN: 6, CANCELLED: 7 };

export type IoRestorecommerceFulfillmentStateResolvers = { FAILED: 0, INVALID: 1, CREATED: 2, SUBMITTED: 3, IN_TRANSIT: 4, FULFILLED: 5, WITHDRAWN: 6, CANCELLED: 7 };

export type IoRestorecommerceInvoicePaymentStateResolvers = { UNPAYED: 0, PAYED: 1 };

export type IoRestorecommerceAddressShippingAddressResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressShippingAddress'] = ResolversParentTypes['IoRestorecommerceAddressShippingAddress']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressAddress']>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressContact']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressContactResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressContact'] = ResolversParentTypes['IoRestorecommerceAddressContact']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressBillingAddressResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressBillingAddress'] = ResolversParentTypes['IoRestorecommerceAddressBillingAddress']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressAddress']>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressContact']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentProductPreferencesResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentProductPreferences'] = ResolversParentTypes['IoRestorecommerceFulfillmentProductPreferences']> = ResolversObject<{
  couriers?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  options?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusStatusResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusStatus'] = ResolversParentTypes['IoRestorecommerceStatusStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusOperationStatusResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusOperationStatus'] = ResolversParentTypes['IoRestorecommerceStatusOperationStatus']> = ResolversObject<{
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

export type MutationResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  ordering?: Resolver<ResolversTypes['OrderingMutation'], ParentType, ContextType>;
}>;

export type OrderingMutationResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['OrderingMutation'] = ResolversParentTypes['OrderingMutation']> = ResolversObject<{
  order?: Resolver<ResolversTypes['OrderingOrderMutation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderingOrderMutationResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['OrderingOrderMutation'] = ResolversParentTypes['OrderingOrderMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOrderOrderListResponse']>, ParentType, ContextType, RequireFields<OrderingOrderMutationMutateArgs, 'input'>>;
  Evaluate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOrderOrderListResponse']>, ParentType, ContextType, RequireFields<OrderingOrderMutationEvaluateArgs, 'input'>>;
  Submit?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOrderOrderListResponse']>, ParentType, ContextType, RequireFields<OrderingOrderMutationSubmitArgs, 'input'>>;
  Withdraw?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOrderOrderListResponse']>, ParentType, ContextType, RequireFields<OrderingOrderMutationWithdrawArgs, 'input'>>;
  Cancel?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceOrderOrderListResponse']>, ParentType, ContextType, RequireFields<OrderingOrderMutationCancelArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<OrderingOrderMutationDeleteArgs, 'input'>>;
  QueryPackingSolution?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponse']>, ParentType, ContextType, RequireFields<OrderingOrderMutationQueryPackingSolutionArgs, 'input'>>;
  CreateFulfillment?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceFulfillmentFulfillmentListResponse']>, ParentType, ContextType, RequireFields<OrderingOrderMutationCreateFulfillmentArgs, 'input'>>;
  TriggerFulfillment?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusListResponse']>, ParentType, ContextType, RequireFields<OrderingOrderMutationTriggerFulfillmentArgs, 'input'>>;
  CreateInvoice?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceInvoiceInvoiceListResponse']>, ParentType, ContextType, RequireFields<OrderingOrderMutationCreateInvoiceArgs, 'input'>>;
  TriggerInvoice?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusListResponse']>, ParentType, ContextType, RequireFields<OrderingOrderMutationTriggerInvoiceArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface IDateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IDateTime'], any> {
  name: 'IDateTime';
}

export type ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  status?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceStatusStatus']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponseResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentProductPackingSolutionListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentProductPackingSolutionListResponseResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentProductPackingSolutionListResponse'] = ResolversParentTypes['IoRestorecommerceFulfillmentProductPackingSolutionListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentProductPackingSolutionResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentProductPackingSolutionResponseResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentProductPackingSolutionResponse'] = ResolversParentTypes['IoRestorecommerceFulfillmentProductPackingSolutionResponse']> = ResolversObject<{
  reference?: Resolver<Maybe<ResolversTypes['IoRestorecommerceReferenceReference']>, ParentType, ContextType>;
  solutions?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentProductPackingSolution']>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceReferenceReferenceResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceReferenceReference'] = ResolversParentTypes['IoRestorecommerceReferenceReference']> = ResolversObject<{
  instanceType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instanceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentProductPackingSolutionResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentProductPackingSolution'] = ResolversParentTypes['IoRestorecommerceFulfillmentProductPackingSolution']> = ResolversObject<{
  amounts?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAmountAmount']>>, ParentType, ContextType>;
  compactness?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  homogeneity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  parcels?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentParcel']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentParcelResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentParcel'] = ResolversParentTypes['IoRestorecommerceFulfillmentParcel']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentProductFulfillmentProduct']>, ParentType, ContextType>;
  variantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentItem']>>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['IoRestorecommercePricePrice']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAmountAmount']>, ParentType, ContextType>;
  package?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductPackage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentProductFulfillmentProductResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentProductFulfillmentProduct'] = ResolversParentTypes['IoRestorecommerceFulfillmentProductFulfillmentProduct']> = ResolversObject<{
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

export type IoRestorecommerceFulfillmentCourierFulfillmentCourierResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentCourierFulfillmentCourier'] = ResolversParentTypes['IoRestorecommerceFulfillmentCourierFulfillmentCourier']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  shopIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  shops?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceShopShop']>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stubType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  configuration?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentProductVariantResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentProductVariant'] = ResolversParentTypes['IoRestorecommerceFulfillmentProductVariant']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['IoRestorecommercePricePrice']>, ParentType, ContextType>;
  maxSize?: Resolver<Maybe<ResolversTypes['IoRestorecommerceGeometryBoundingBox3D']>, ParentType, ContextType>;
  maxWeight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentItemResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentItem'] = ResolversParentTypes['IoRestorecommerceFulfillmentItem']> = ResolversObject<{
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  variantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  package?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductPackage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceFulfillmentFulfillmentListResponseResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceFulfillmentFulfillmentListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceFulfillmentFulfillmentListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentFulfillmentListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentFulfillmentListResponseResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentFulfillmentListResponse'] = ResolversParentTypes['IoRestorecommerceFulfillmentFulfillmentListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentFulfillmentResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentFulfillmentResponseResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentFulfillmentResponse'] = ResolversParentTypes['IoRestorecommerceFulfillmentFulfillmentResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentFulfillment']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentFulfillmentResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentFulfillment'] = ResolversParentTypes['IoRestorecommerceFulfillmentFulfillment']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUser']>, ParentType, ContextType>;
  customerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCustomerCustomer']>, ParentType, ContextType>;
  shopId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shop?: Resolver<Maybe<ResolversTypes['IoRestorecommerceShopShop']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['IoRestorecommerceReferenceReference']>, ParentType, ContextType>;
  packaging?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentPackaging']>, ParentType, ContextType>;
  labels?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentLabel']>>, ParentType, ContextType>;
  trackings?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentTracking']>>, ParentType, ContextType>;
  totalAmounts?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAmountAmount']>>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentState']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentPackagingResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentPackaging'] = ResolversParentTypes['IoRestorecommerceFulfillmentPackaging']> = ResolversObject<{
  parcels?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentParcel']>>, ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressShippingAddress']>, ParentType, ContextType>;
  recipient?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressShippingAddress']>, ParentType, ContextType>;
  notify?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exportType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exportDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invoiceNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentLabelResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentLabel'] = ResolversParentTypes['IoRestorecommerceFulfillmentLabel']> = ResolversObject<{
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pdf?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  png?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parcelId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shipmentNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentState']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentTrackingResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentTracking'] = ResolversParentTypes['IoRestorecommerceFulfillmentTracking']> = ResolversObject<{
  shipmentNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  events?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFulfillmentEvent']>>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentEventResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentEvent'] = ResolversParentTypes['IoRestorecommerceFulfillmentEvent']> = ResolversObject<{
  timestamp?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceStatusStatusListResponseResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceStatusStatusListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceStatusStatusListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatusListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusStatusListResponseResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusStatusListResponse'] = ResolversParentTypes['IoRestorecommerceStatusStatusListResponse']> = ResolversObject<{
  status?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceStatusStatus']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceInvoiceInvoiceListResponseResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceInvoiceInvoiceListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceInvoiceInvoiceListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceInvoiceInvoiceListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceInvoiceInvoiceListResponseResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceInvoiceInvoiceListResponse'] = ResolversParentTypes['IoRestorecommerceInvoiceInvoiceListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceInvoiceInvoiceResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceInvoiceInvoiceResponseResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceInvoiceInvoiceResponse'] = ResolversParentTypes['IoRestorecommerceInvoiceInvoiceResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceInvoiceInvoice']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceInvoiceInvoiceResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceInvoiceInvoice'] = ResolversParentTypes['IoRestorecommerceInvoiceInvoice']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  invoiceNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  references?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceReferenceReference']>>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUser']>, ParentType, ContextType>;
  customerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCustomerCustomer']>, ParentType, ContextType>;
  shopId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shop?: Resolver<Maybe<ResolversTypes['IoRestorecommerceShopShop']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  paymentState?: Resolver<Maybe<ResolversTypes['IoRestorecommerceInvoicePaymentState']>, ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressBillingAddress']>, ParentType, ContextType>;
  recipient?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressBillingAddress']>, ParentType, ContextType>;
  sections?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceInvoiceSection']>>, ParentType, ContextType>;
  totalAmounts?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAmountAmount']>>, ParentType, ContextType>;
  paymentHints?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  documents?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFileFile']>>, ParentType, ContextType>;
  fromDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  toDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  sent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  withdrawn?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceInvoiceSectionResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceInvoiceSection'] = ResolversParentTypes['IoRestorecommerceInvoiceSection']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerRemark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  positions?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceInvoicePosition']>>, ParentType, ContextType>;
  amounts?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAmountAmount']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceInvoicePositionResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceInvoicePosition'] = ResolversParentTypes['IoRestorecommerceInvoicePosition']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productItem?: Resolver<Maybe<ResolversTypes['IoRestorecommerceInvoiceProductItem']>, ParentType, ContextType>;
  fulfillmentItem?: Resolver<Maybe<ResolversTypes['IoRestorecommerceInvoiceFulfillmentItem']>, ParentType, ContextType>;
  manualItem?: Resolver<Maybe<ResolversTypes['IoRestorecommerceInvoiceManualItem']>, ParentType, ContextType>;
  unitPrice?: Resolver<Maybe<ResolversTypes['IoRestorecommercePricePrice']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAmountAmount']>, ParentType, ContextType>;
  contractStartDate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceInvoiceProductItemResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceInvoiceProductItem'] = ResolversParentTypes['IoRestorecommerceInvoiceProductItem']> = ResolversObject<{
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductProduct']>, ParentType, ContextType>;
  variantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceInvoiceFulfillmentItemResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceInvoiceFulfillmentItem'] = ResolversParentTypes['IoRestorecommerceInvoiceFulfillmentItem']> = ResolversObject<{
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentProductFulfillmentProduct']>, ParentType, ContextType>;
  variantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceInvoiceManualItemResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['IoRestorecommerceInvoiceManualItem'] = ResolversParentTypes['IoRestorecommerceInvoiceManualItem']> = ResolversObject<{
  stockKeepingUnit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  descritpion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  properties?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommercePropertyProperty']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOrderFulfillmentInvoiceModeResolvers = { INCLUDE: 0, EXCLUDE: 1 };

export type SubscriptionResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  orderingOrders?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "orderingOrders", ParentType, ContextType, Partial<SubscriptionOrderingOrdersArgs>>;
}>;

export type SubscriptionOutputResolvers<ContextType = OrderingContext, ParentType extends ResolversParentTypes['SubscriptionOutput'] = ResolversParentTypes['SubscriptionOutput']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = OrderingContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  OrderingQuery?: OrderingQueryResolvers<ContextType>;
  OrderingOrderQuery?: OrderingOrderQueryResolvers<ContextType>;
  ProtoIoRestorecommerceOrderOrderListResponse?: ProtoIoRestorecommerceOrderOrderListResponseResolvers<ContextType>;
  IoRestorecommerceOrderOrderListResponse?: IoRestorecommerceOrderOrderListResponseResolvers<ContextType>;
  IoRestorecommerceOrderOrderResponse?: IoRestorecommerceOrderOrderResponseResolvers<ContextType>;
  IoRestorecommerceOrderOrder?: IoRestorecommerceOrderOrderResolvers<ContextType>;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
  IoRestorecommerceUserUser?: IoRestorecommerceUserUserResolvers<ContextType>;
  IoRestorecommerceAuthRoleAssociation?: IoRestorecommerceAuthRoleAssociationResolvers<ContextType>;
  IoRestorecommerceTimezoneTimezone?: IoRestorecommerceTimezoneTimezoneResolvers<ContextType>;
  IoRestorecommerceLocaleLocale?: IoRestorecommerceLocaleLocaleResolvers<ContextType>;
  IoRestorecommerceImageImage?: IoRestorecommerceImageImageResolvers<ContextType>;
  IoRestorecommerceUserUserType?: IoRestorecommerceUserUserTypeResolvers;
  IoRestorecommerceAuthTokens?: IoRestorecommerceAuthTokensResolvers<ContextType>;
  GoogleProtobufAny?: GoogleProtobufAnyResolvers<ContextType>;
  GoogleProtobufAnyValue?: GraphQLScalarType;
  IoRestorecommerceCustomerCustomer?: IoRestorecommerceCustomerCustomerResolvers<ContextType>;
  IoRestorecommerceCustomerPrivate?: IoRestorecommerceCustomerPrivateResolvers<ContextType>;
  IoRestorecommerceContactPointContactPoint?: IoRestorecommerceContactPointContactPointResolvers<ContextType>;
  IoRestorecommerceAddressAddress?: IoRestorecommerceAddressAddressResolvers<ContextType>;
  IoRestorecommerceCountryCountry?: IoRestorecommerceCountryCountryResolvers<ContextType>;
  IoRestorecommerceAddressGeoPoint?: IoRestorecommerceAddressGeoPointResolvers<ContextType>;
  IoRestorecommerceAddressAddressAddition?: IoRestorecommerceAddressAddressAdditionResolvers<ContextType>;
  IoRestorecommerceAddressBusinessAddress?: IoRestorecommerceAddressBusinessAddressResolvers<ContextType>;
  IoRestorecommerceAddressResidentialAddress?: IoRestorecommerceAddressResidentialAddressResolvers<ContextType>;
  IoRestorecommerceAddressPackStation?: IoRestorecommerceAddressPackStationResolvers<ContextType>;
  IoRestorecommerceContactPointTypeContactPointType?: IoRestorecommerceContactPointTypeContactPointTypeResolvers<ContextType>;
  IoRestorecommerceCustomerCommercial?: IoRestorecommerceCustomerCommercialResolvers<ContextType>;
  IoRestorecommerceOrganizationOrganization?: IoRestorecommerceOrganizationOrganizationResolvers<ContextType>;
  IoRestorecommercePaymentMethodPaymentMethod?: IoRestorecommercePaymentMethodPaymentMethodResolvers<ContextType>;
  IoRestorecommercePaymentMethodPaymentMethodEnum?: IoRestorecommercePaymentMethodPaymentMethodEnumResolvers;
  IoRestorecommercePaymentMethodTransferTypeEnum?: IoRestorecommercePaymentMethodTransferTypeEnumResolvers;
  IoRestorecommerceCustomerPublicSector?: IoRestorecommerceCustomerPublicSectorResolvers<ContextType>;
  IoRestorecommerceShopShop?: IoRestorecommerceShopShopResolvers<ContextType>;
  IoRestorecommerceOrderItem?: IoRestorecommerceOrderItemResolvers<ContextType>;
  IoRestorecommerceProductProduct?: IoRestorecommerceProductProductResolvers<ContextType>;
  IoRestorecommerceProductIndividualProduct?: IoRestorecommerceProductIndividualProductResolvers<ContextType>;
  IoRestorecommerceManufacturerManufacturer?: IoRestorecommerceManufacturerManufacturerResolvers<ContextType>;
  IoRestorecommerceProductPrototypeProductPrototype?: IoRestorecommerceProductPrototypeProductPrototypeResolvers<ContextType>;
  IoRestorecommerceProductCategoryProductCategory?: IoRestorecommerceProductCategoryProductCategoryResolvers<ContextType>;
  IoRestorecommercePriceGroupPriceGroup?: IoRestorecommercePriceGroupPriceGroupResolvers<ContextType>;
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
  IoRestorecommerceProductAssociation?: IoRestorecommerceProductAssociationResolvers<ContextType>;
  IoRestorecommerceProductAssociationType?: IoRestorecommerceProductAssociationTypeResolvers;
  IoRestorecommerceAmountAmount?: IoRestorecommerceAmountAmountResolvers<ContextType>;
  IoRestorecommerceAmountVAT?: IoRestorecommerceAmountVatResolvers<ContextType>;
  IoRestorecommerceOrderOrderState?: IoRestorecommerceOrderOrderStateResolvers;
  IoRestorecommerceFulfillmentState?: IoRestorecommerceFulfillmentStateResolvers;
  IoRestorecommerceInvoicePaymentState?: IoRestorecommerceInvoicePaymentStateResolvers;
  IoRestorecommerceAddressShippingAddress?: IoRestorecommerceAddressShippingAddressResolvers<ContextType>;
  IoRestorecommerceAddressContact?: IoRestorecommerceAddressContactResolvers<ContextType>;
  IoRestorecommerceAddressBillingAddress?: IoRestorecommerceAddressBillingAddressResolvers<ContextType>;
  IoRestorecommerceFulfillmentProductPreferences?: IoRestorecommerceFulfillmentProductPreferencesResolvers<ContextType>;
  IoRestorecommerceStatusStatus?: IoRestorecommerceStatusStatusResolvers<ContextType>;
  IoRestorecommerceStatusOperationStatus?: IoRestorecommerceStatusOperationStatusResolvers<ContextType>;
  IoRestorecommerceResourcebaseSortSortOrder?: IoRestorecommerceResourcebaseSortSortOrderResolvers;
  IoRestorecommerceResourcebaseFilterOperation?: IoRestorecommerceResourcebaseFilterOperationResolvers;
  IoRestorecommerceResourcebaseFilterValueType?: IoRestorecommerceResourcebaseFilterValueTypeResolvers;
  IoRestorecommerceFilterFilterOperation?: IoRestorecommerceFilterFilterOperationResolvers;
  IoRestorecommerceFilterFilterValueType?: IoRestorecommerceFilterFilterValueTypeResolvers;
  IoRestorecommerceFilterFilterOpOperator?: IoRestorecommerceFilterFilterOpOperatorResolvers;
  IoRestorecommerceResourcebaseFilterOpOperator?: IoRestorecommerceResourcebaseFilterOpOperatorResolvers;
  Mutation?: MutationResolvers<ContextType>;
  OrderingMutation?: OrderingMutationResolvers<ContextType>;
  OrderingOrderMutation?: OrderingOrderMutationResolvers<ContextType>;
  IDateTime?: GraphQLScalarType;
  ProtoIoRestorecommerceResourcebaseDeleteResponse?: ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  IoRestorecommerceResourcebaseDeleteResponse?: IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponse?: ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponseResolvers<ContextType>;
  IoRestorecommerceFulfillmentProductPackingSolutionListResponse?: IoRestorecommerceFulfillmentProductPackingSolutionListResponseResolvers<ContextType>;
  IoRestorecommerceFulfillmentProductPackingSolutionResponse?: IoRestorecommerceFulfillmentProductPackingSolutionResponseResolvers<ContextType>;
  IoRestorecommerceReferenceReference?: IoRestorecommerceReferenceReferenceResolvers<ContextType>;
  IoRestorecommerceFulfillmentProductPackingSolution?: IoRestorecommerceFulfillmentProductPackingSolutionResolvers<ContextType>;
  IoRestorecommerceFulfillmentParcel?: IoRestorecommerceFulfillmentParcelResolvers<ContextType>;
  IoRestorecommerceFulfillmentProductFulfillmentProduct?: IoRestorecommerceFulfillmentProductFulfillmentProductResolvers<ContextType>;
  IoRestorecommerceFulfillmentCourierFulfillmentCourier?: IoRestorecommerceFulfillmentCourierFulfillmentCourierResolvers<ContextType>;
  IoRestorecommerceFulfillmentProductVariant?: IoRestorecommerceFulfillmentProductVariantResolvers<ContextType>;
  IoRestorecommerceFulfillmentItem?: IoRestorecommerceFulfillmentItemResolvers<ContextType>;
  ProtoIoRestorecommerceFulfillmentFulfillmentListResponse?: ProtoIoRestorecommerceFulfillmentFulfillmentListResponseResolvers<ContextType>;
  IoRestorecommerceFulfillmentFulfillmentListResponse?: IoRestorecommerceFulfillmentFulfillmentListResponseResolvers<ContextType>;
  IoRestorecommerceFulfillmentFulfillmentResponse?: IoRestorecommerceFulfillmentFulfillmentResponseResolvers<ContextType>;
  IoRestorecommerceFulfillmentFulfillment?: IoRestorecommerceFulfillmentFulfillmentResolvers<ContextType>;
  IoRestorecommerceFulfillmentPackaging?: IoRestorecommerceFulfillmentPackagingResolvers<ContextType>;
  IoRestorecommerceFulfillmentLabel?: IoRestorecommerceFulfillmentLabelResolvers<ContextType>;
  IoRestorecommerceFulfillmentTracking?: IoRestorecommerceFulfillmentTrackingResolvers<ContextType>;
  IoRestorecommerceFulfillmentEvent?: IoRestorecommerceFulfillmentEventResolvers<ContextType>;
  ProtoIoRestorecommerceStatusStatusListResponse?: ProtoIoRestorecommerceStatusStatusListResponseResolvers<ContextType>;
  IoRestorecommerceStatusStatusListResponse?: IoRestorecommerceStatusStatusListResponseResolvers<ContextType>;
  ProtoIoRestorecommerceInvoiceInvoiceListResponse?: ProtoIoRestorecommerceInvoiceInvoiceListResponseResolvers<ContextType>;
  IoRestorecommerceInvoiceInvoiceListResponse?: IoRestorecommerceInvoiceInvoiceListResponseResolvers<ContextType>;
  IoRestorecommerceInvoiceInvoiceResponse?: IoRestorecommerceInvoiceInvoiceResponseResolvers<ContextType>;
  IoRestorecommerceInvoiceInvoice?: IoRestorecommerceInvoiceInvoiceResolvers<ContextType>;
  IoRestorecommerceInvoiceSection?: IoRestorecommerceInvoiceSectionResolvers<ContextType>;
  IoRestorecommerceInvoicePosition?: IoRestorecommerceInvoicePositionResolvers<ContextType>;
  IoRestorecommerceInvoiceProductItem?: IoRestorecommerceInvoiceProductItemResolvers<ContextType>;
  IoRestorecommerceInvoiceFulfillmentItem?: IoRestorecommerceInvoiceFulfillmentItemResolvers<ContextType>;
  IoRestorecommerceInvoiceManualItem?: IoRestorecommerceInvoiceManualItemResolvers<ContextType>;
  IoRestorecommerceOrderFulfillmentInvoiceMode?: IoRestorecommerceOrderFulfillmentInvoiceModeResolvers;
  Subscription?: SubscriptionResolvers<ContextType>;
  SubscriptionOutput?: SubscriptionOutputResolvers<ContextType>;
}>;

