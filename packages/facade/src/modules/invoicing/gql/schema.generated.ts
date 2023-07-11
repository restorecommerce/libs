import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { InvoicingContext } from '../interfaces.js';
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
  invoicing: InvoicingQuery;
};

export type InvoicingQuery = {
  __typename?: 'InvoicingQuery';
  invoice: InvoicingInvoiceQuery;
};

export type InvoicingInvoiceQuery = {
  __typename?: 'InvoicingInvoiceQuery';
  Read?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
};


export type InvoicingInvoiceQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
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

export type IoRestorecommerceMetaMeta = {
  __typename?: 'IoRestorecommerceMetaMeta';
  created?: Maybe<Scalars['DateTime']['output']>;
  modified?: Maybe<Scalars['DateTime']['output']>;
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

export type IoRestorecommerceReferenceReference = {
  __typename?: 'IoRestorecommerceReferenceReference';
  instanceType?: Maybe<Scalars['String']['output']>;
  instanceId?: Maybe<Scalars['String']['output']>;
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
  logo?: Maybe<Scalars['String']['output']>;
  vatId?: Maybe<Scalars['String']['output']>;
  isicV4?: Maybe<Scalars['String']['output']>;
  registration?: Maybe<Scalars['String']['output']>;
  registrationCourt?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  paymentMethodIds?: Maybe<Array<Scalars['String']['output']>>;
  data?: Maybe<GoogleProtobufAny>;
};

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

export enum IoRestorecommerceInvoicePaymentState {
  Unpayed = 0,
  Payed = 1
}

export type IoRestorecommerceAddressBillingAddress = {
  __typename?: 'IoRestorecommerceAddressBillingAddress';
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
  fultillmentItem?: Maybe<IoRestorecommerceInvoiceFulfillmentItem>;
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
  templateVariant?: Maybe<Scalars['String']['output']>;
  package?: Maybe<IoRestorecommerceProductPackage>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
};

export type IoRestorecommercePricePrice = {
  __typename?: 'IoRestorecommercePricePrice';
  regularPrice?: Maybe<Scalars['Float']['output']>;
  sale?: Maybe<Scalars['Boolean']['output']>;
  salePrice?: Maybe<Scalars['Float']['output']>;
  currencyId?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<IoRestorecommerceCurrencyCurrency>;
  taxIds?: Maybe<Array<Scalars['String']['output']>>;
  taxes?: Maybe<Array<IoRestorecommerceTaxTax>>;
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
  templateVariant?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
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
  templateVariant?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
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

export type IoRestorecommerceInvoiceFulfillmentItem = {
  __typename?: 'IoRestorecommerceInvoiceFulfillmentItem';
  productId?: Maybe<Scalars['String']['output']>;
  product?: Maybe<IoRestorecommerceFulfillmentProductFulfillmentProduct>;
  variantId?: Maybe<Scalars['String']['output']>;
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

export type IoRestorecommerceFulfillmentProductVariant = {
  __typename?: 'IoRestorecommerceFulfillmentProductVariant';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  price?: Maybe<IoRestorecommercePricePrice>;
  maxSize?: Maybe<IoRestorecommerceGeometryBoundingBox3D>;
  maxWeight?: Maybe<Scalars['Float']['output']>;
};

export type IoRestorecommerceInvoiceManualItem = {
  __typename?: 'IoRestorecommerceInvoiceManualItem';
  stockKeepingUnit?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  descritpion?: Maybe<Scalars['String']['output']>;
};

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
  invoicing: InvoicingMutation;
};

export type InvoicingMutation = {
  __typename?: 'InvoicingMutation';
  invoice: InvoicingInvoiceMutation;
};

export type InvoicingInvoiceMutation = {
  __typename?: 'InvoicingInvoiceMutation';
  Mutate?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Render?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
  Withdraw?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
  Send?: Maybe<ProtoIoRestorecommerceStatusStatusListResponse>;
  GenerateInvoiceNumber?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceNumberResponse>;
};


export type InvoicingInvoiceMutationMutateArgs = {
  input: IIoRestorecommerceInvoiceInvoiceList;
};


export type InvoicingInvoiceMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type InvoicingInvoiceMutationRenderArgs = {
  input: IIoRestorecommerceInvoiceInvoiceList;
};


export type InvoicingInvoiceMutationWithdrawArgs = {
  input: IIoRestorecommerceInvoiceInvoiceIdList;
};


export type InvoicingInvoiceMutationSendArgs = {
  input: IIoRestorecommerceInvoiceInvoiceIdList;
};


export type InvoicingInvoiceMutationGenerateInvoiceNumberArgs = {
  input: IIoRestorecommerceInvoiceRequestInvoiceNumber;
};

export type IIoRestorecommerceInvoiceInvoiceList = {
  items?: InputMaybe<Array<IIoRestorecommerceInvoiceInvoice>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceInvoiceInvoice = {
  id?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  invoiceNumber?: InputMaybe<Scalars['String']['input']>;
  references?: InputMaybe<Array<IIoRestorecommerceReferenceReference>>;
  userId?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  shopId?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['IDateTime']['input']>;
  paymentState?: InputMaybe<IoRestorecommerceInvoicePaymentState>;
  sender?: InputMaybe<IIoRestorecommerceAddressBillingAddress>;
  recipient?: InputMaybe<IIoRestorecommerceAddressBillingAddress>;
  sections?: InputMaybe<Array<IIoRestorecommerceInvoiceSection>>;
  totalAmounts?: InputMaybe<Array<IIoRestorecommerceAmountAmount>>;
  paymentHints?: InputMaybe<Array<Scalars['String']['input']>>;
  documents?: InputMaybe<Array<IIoRestorecommerceFileFile>>;
  fromDate?: InputMaybe<Scalars['IDateTime']['input']>;
  toDate?: InputMaybe<Scalars['IDateTime']['input']>;
  sent?: InputMaybe<Scalars['Boolean']['input']>;
  withdrawn?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IIoRestorecommerceMetaMeta = {
  created?: InputMaybe<Scalars['IDateTime']['input']>;
  modified?: InputMaybe<Scalars['IDateTime']['input']>;
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

export type IIoRestorecommerceReferenceReference = {
  instanceType?: InputMaybe<Scalars['String']['input']>;
  instanceId?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceAddressBillingAddress = {
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

export type IIoRestorecommerceInvoiceSection = {
  id?: InputMaybe<Scalars['String']['input']>;
  customerRemark?: InputMaybe<Scalars['String']['input']>;
  positions?: InputMaybe<Array<IIoRestorecommerceInvoicePosition>>;
  amounts?: InputMaybe<Array<IIoRestorecommerceAmountAmount>>;
};

export type IIoRestorecommerceInvoicePosition = {
  id?: InputMaybe<Scalars['String']['input']>;
  productItem?: InputMaybe<IIoRestorecommerceInvoiceProductItem>;
  fultillmentItem?: InputMaybe<IIoRestorecommerceInvoiceFulfillmentItem>;
  manualItem?: InputMaybe<IIoRestorecommerceInvoiceManualItem>;
  unitPrice?: InputMaybe<IIoRestorecommercePricePrice>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  amount?: InputMaybe<IIoRestorecommerceAmountAmount>;
  contractStartDate?: InputMaybe<Scalars['Float']['input']>;
  attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type IIoRestorecommerceInvoiceProductItem = {
  productId?: InputMaybe<Scalars['String']['input']>;
  variantId?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceInvoiceFulfillmentItem = {
  productId?: InputMaybe<Scalars['String']['input']>;
  variantId?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommerceInvoiceManualItem = {
  stockKeepingUnit?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  descritpion?: InputMaybe<Scalars['String']['input']>;
};

export type IIoRestorecommercePricePrice = {
  regularPrice?: InputMaybe<Scalars['Float']['input']>;
  sale?: InputMaybe<Scalars['Boolean']['input']>;
  salePrice?: InputMaybe<Scalars['Float']['input']>;
  currencyId?: InputMaybe<Scalars['String']['input']>;
  taxIds?: InputMaybe<Array<Scalars['String']['input']>>;
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

export type IIoRestorecommerceInvoiceInvoiceIdList = {
  items?: InputMaybe<Array<IIoRestorecommerceInvoiceInvoiceId>>;
  totalCount?: InputMaybe<Scalars['Int']['input']>;
};

export type IIoRestorecommerceInvoiceInvoiceId = {
  id?: InputMaybe<Scalars['String']['input']>;
  channelIds?: InputMaybe<Array<Scalars['String']['input']>>;
  options?: InputMaybe<IGoogleProtobufAny>;
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

export type ProtoIoRestorecommerceInvoiceInvoiceNumberResponse = {
  __typename?: 'ProtoIoRestorecommerceInvoiceInvoiceNumberResponse';
  details?: Maybe<IoRestorecommerceInvoiceInvoiceNumberResponse>;
};

export type IoRestorecommerceInvoiceInvoiceNumberResponse = {
  __typename?: 'IoRestorecommerceInvoiceInvoiceNumberResponse';
  invoiceNumber?: Maybe<Scalars['String']['output']>;
};

export type IIoRestorecommerceInvoiceRequestInvoiceNumber = {
  shopId?: InputMaybe<Scalars['String']['input']>;
  context?: InputMaybe<IGoogleProtobufAny>;
};

export type Subscription = {
  __typename?: 'Subscription';
  orderingOrders?: Maybe<SubscriptionOutput>;
  catalogProducts?: Maybe<SubscriptionOutput>;
  invoicingInvoices?: Maybe<SubscriptionOutput>;
};


export type SubscriptionOrderingOrdersArgs = {
  action?: InputMaybe<SubscriptionAction>;
};


export type SubscriptionCatalogProductsArgs = {
  action?: InputMaybe<SubscriptionAction>;
};


export type SubscriptionInvoicingInvoicesArgs = {
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
  InvoicingQuery: ResolverTypeWrapper<InvoicingQuery>;
  InvoicingInvoiceQuery: ResolverTypeWrapper<InvoicingInvoiceQuery>;
  ProtoIoRestorecommerceInvoiceInvoiceListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
  IoRestorecommerceInvoiceInvoiceListResponse: ResolverTypeWrapper<IoRestorecommerceInvoiceInvoiceListResponse>;
  IoRestorecommerceInvoiceInvoiceResponse: ResolverTypeWrapper<IoRestorecommerceInvoiceInvoiceResponse>;
  IoRestorecommerceInvoiceInvoice: ResolverTypeWrapper<IoRestorecommerceInvoiceInvoice>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  IoRestorecommerceMetaMeta: ResolverTypeWrapper<IoRestorecommerceMetaMeta>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  IoRestorecommerceAttributeAttribute: ResolverTypeWrapper<IoRestorecommerceAttributeAttribute>;
  IoRestorecommerceAttributeAttributeObj: ResolverTypeWrapper<IoRestorecommerceAttributeAttributeObj>;
  IoRestorecommerceReferenceReference: ResolverTypeWrapper<IoRestorecommerceReferenceReference>;
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
  IoRestorecommerceCustomerPublicSector: ResolverTypeWrapper<IoRestorecommerceCustomerPublicSector>;
  IoRestorecommerceShopShop: ResolverTypeWrapper<IoRestorecommerceShopShop>;
  IoRestorecommerceInvoicePaymentState: IoRestorecommerceInvoicePaymentState;
  IoRestorecommerceAddressBillingAddress: ResolverTypeWrapper<IoRestorecommerceAddressBillingAddress>;
  IoRestorecommerceAddressContact: ResolverTypeWrapper<IoRestorecommerceAddressContact>;
  IoRestorecommerceInvoiceSection: ResolverTypeWrapper<IoRestorecommerceInvoiceSection>;
  IoRestorecommerceInvoicePosition: ResolverTypeWrapper<IoRestorecommerceInvoicePosition>;
  IoRestorecommerceInvoiceProductItem: ResolverTypeWrapper<IoRestorecommerceInvoiceProductItem>;
  IoRestorecommerceProductProduct: ResolverTypeWrapper<IoRestorecommerceProductProduct>;
  IoRestorecommerceProductIndividualProduct: ResolverTypeWrapper<IoRestorecommerceProductIndividualProduct>;
  IoRestorecommerceManufacturerManufacturer: ResolverTypeWrapper<IoRestorecommerceManufacturerManufacturer>;
  IoRestorecommerceProductPrototypeProductPrototype: ResolverTypeWrapper<IoRestorecommerceProductPrototypeProductPrototype>;
  IoRestorecommerceProductCategoryProductCategory: ResolverTypeWrapper<IoRestorecommerceProductCategoryProductCategory>;
  IoRestorecommercePriceGroupPriceGroup: ResolverTypeWrapper<IoRestorecommercePriceGroupPriceGroup>;
  IoRestorecommerceProductCategoryParent: ResolverTypeWrapper<IoRestorecommerceProductCategoryParent>;
  IoRestorecommerceProductPhysicalProduct: ResolverTypeWrapper<IoRestorecommerceProductPhysicalProduct>;
  IoRestorecommerceProductPhysicalVariant: ResolverTypeWrapper<IoRestorecommerceProductPhysicalVariant>;
  IoRestorecommercePricePrice: ResolverTypeWrapper<IoRestorecommercePricePrice>;
  IoRestorecommerceCurrencyCurrency: ResolverTypeWrapper<IoRestorecommerceCurrencyCurrency>;
  IoRestorecommerceCurrencyExchangeRate: ResolverTypeWrapper<IoRestorecommerceCurrencyExchangeRate>;
  IoRestorecommerceTaxTax: ResolverTypeWrapper<IoRestorecommerceTaxTax>;
  IoRestorecommerceTaxTypeTaxType: ResolverTypeWrapper<IoRestorecommerceTaxTypeTaxType>;
  IoRestorecommerceFileFile: ResolverTypeWrapper<IoRestorecommerceFileFile>;
  IoRestorecommerceProductPackage: ResolverTypeWrapper<IoRestorecommerceProductPackage>;
  IoRestorecommerceGeometryBoundingBox3D: ResolverTypeWrapper<IoRestorecommerceGeometryBoundingBox3D>;
  IoRestorecommerceProductServiceProduct: ResolverTypeWrapper<IoRestorecommerceProductServiceProduct>;
  IoRestorecommerceProductServiceVariant: ResolverTypeWrapper<IoRestorecommerceProductServiceVariant>;
  IoRestorecommerceProductVirtualProduct: ResolverTypeWrapper<IoRestorecommerceProductVirtualProduct>;
  IoRestorecommerceProductVirtualVariant: ResolverTypeWrapper<IoRestorecommerceProductVirtualVariant>;
  IoRestorecommerceProductBundle: ResolverTypeWrapper<IoRestorecommerceProductBundle>;
  IoRestorecommerceProductBundleProduct: ResolverTypeWrapper<IoRestorecommerceProductBundleProduct>;
  IoRestorecommerceProductAssociation: ResolverTypeWrapper<IoRestorecommerceProductAssociation>;
  IoRestorecommerceProductAssociationType: IoRestorecommerceProductAssociationType;
  IoRestorecommerceInvoiceFulfillmentItem: ResolverTypeWrapper<IoRestorecommerceInvoiceFulfillmentItem>;
  IoRestorecommerceFulfillmentProductFulfillmentProduct: ResolverTypeWrapper<IoRestorecommerceFulfillmentProductFulfillmentProduct>;
  IoRestorecommerceFulfillmentCourierFulfillmentCourier: ResolverTypeWrapper<IoRestorecommerceFulfillmentCourierFulfillmentCourier>;
  IoRestorecommerceFulfillmentProductVariant: ResolverTypeWrapper<IoRestorecommerceFulfillmentProductVariant>;
  IoRestorecommerceInvoiceManualItem: ResolverTypeWrapper<IoRestorecommerceInvoiceManualItem>;
  IoRestorecommerceAmountAmount: ResolverTypeWrapper<IoRestorecommerceAmountAmount>;
  IoRestorecommerceAmountVAT: ResolverTypeWrapper<IoRestorecommerceAmountVat>;
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
  InvoicingMutation: ResolverTypeWrapper<InvoicingMutation>;
  InvoicingInvoiceMutation: ResolverTypeWrapper<InvoicingInvoiceMutation>;
  IIoRestorecommerceInvoiceInvoiceList: IIoRestorecommerceInvoiceInvoiceList;
  IIoRestorecommerceInvoiceInvoice: IIoRestorecommerceInvoiceInvoice;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IDateTime: ResolverTypeWrapper<Scalars['IDateTime']['output']>;
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAttributeAttributeObj: IIoRestorecommerceAttributeAttributeObj;
  IIoRestorecommerceReferenceReference: IIoRestorecommerceReferenceReference;
  IIoRestorecommerceAddressBillingAddress: IIoRestorecommerceAddressBillingAddress;
  IIoRestorecommerceAddressAddress: IIoRestorecommerceAddressAddress;
  IIoRestorecommerceAddressGeoPoint: IIoRestorecommerceAddressGeoPoint;
  IIoRestorecommerceAddressAddressAddition: IIoRestorecommerceAddressAddressAddition;
  IIoRestorecommerceAddressBusinessAddress: IIoRestorecommerceAddressBusinessAddress;
  IIoRestorecommerceAddressResidentialAddress: IIoRestorecommerceAddressResidentialAddress;
  IIoRestorecommerceAddressPackStation: IIoRestorecommerceAddressPackStation;
  IIoRestorecommerceAddressContact: IIoRestorecommerceAddressContact;
  IIoRestorecommerceInvoiceSection: IIoRestorecommerceInvoiceSection;
  IIoRestorecommerceInvoicePosition: IIoRestorecommerceInvoicePosition;
  IIoRestorecommerceInvoiceProductItem: IIoRestorecommerceInvoiceProductItem;
  IIoRestorecommerceInvoiceFulfillmentItem: IIoRestorecommerceInvoiceFulfillmentItem;
  IIoRestorecommerceInvoiceManualItem: IIoRestorecommerceInvoiceManualItem;
  IIoRestorecommercePricePrice: IIoRestorecommercePricePrice;
  IIoRestorecommerceAmountAmount: IIoRestorecommerceAmountAmount;
  IIoRestorecommerceAmountVAT: IIoRestorecommerceAmountVat;
  IIoRestorecommerceFileFile: IIoRestorecommerceFileFile;
  IIoRestorecommerceImageImage: IIoRestorecommerceImageImage;
  ModeType: ModeType;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  IoRestorecommerceResourcebaseDeleteResponse: ResolverTypeWrapper<IoRestorecommerceResourcebaseDeleteResponse>;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  IIoRestorecommerceInvoiceInvoiceIdList: IIoRestorecommerceInvoiceInvoiceIdList;
  IIoRestorecommerceInvoiceInvoiceId: IIoRestorecommerceInvoiceInvoiceId;
  ProtoIoRestorecommerceStatusStatusListResponse: ResolverTypeWrapper<ProtoIoRestorecommerceStatusStatusListResponse>;
  IoRestorecommerceStatusStatusListResponse: ResolverTypeWrapper<IoRestorecommerceStatusStatusListResponse>;
  ProtoIoRestorecommerceInvoiceInvoiceNumberResponse: ResolverTypeWrapper<ProtoIoRestorecommerceInvoiceInvoiceNumberResponse>;
  IoRestorecommerceInvoiceInvoiceNumberResponse: ResolverTypeWrapper<IoRestorecommerceInvoiceInvoiceNumberResponse>;
  IIoRestorecommerceInvoiceRequestInvoiceNumber: IIoRestorecommerceInvoiceRequestInvoiceNumber;
  Subscription: ResolverTypeWrapper<{}>;
  SubscriptionOutput: ResolverTypeWrapper<SubscriptionOutput>;
  SubscriptionAction: SubscriptionAction;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  InvoicingQuery: InvoicingQuery;
  InvoicingInvoiceQuery: InvoicingInvoiceQuery;
  ProtoIoRestorecommerceInvoiceInvoiceListResponse: ProtoIoRestorecommerceInvoiceInvoiceListResponse;
  IoRestorecommerceInvoiceInvoiceListResponse: IoRestorecommerceInvoiceInvoiceListResponse;
  IoRestorecommerceInvoiceInvoiceResponse: IoRestorecommerceInvoiceInvoiceResponse;
  IoRestorecommerceInvoiceInvoice: IoRestorecommerceInvoiceInvoice;
  String: Scalars['String']['output'];
  IoRestorecommerceMetaMeta: IoRestorecommerceMetaMeta;
  DateTime: Scalars['DateTime']['output'];
  IoRestorecommerceAttributeAttribute: IoRestorecommerceAttributeAttribute;
  IoRestorecommerceAttributeAttributeObj: IoRestorecommerceAttributeAttributeObj;
  IoRestorecommerceReferenceReference: IoRestorecommerceReferenceReference;
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
  IoRestorecommerceCustomerPublicSector: IoRestorecommerceCustomerPublicSector;
  IoRestorecommerceShopShop: IoRestorecommerceShopShop;
  IoRestorecommerceAddressBillingAddress: IoRestorecommerceAddressBillingAddress;
  IoRestorecommerceAddressContact: IoRestorecommerceAddressContact;
  IoRestorecommerceInvoiceSection: IoRestorecommerceInvoiceSection;
  IoRestorecommerceInvoicePosition: IoRestorecommerceInvoicePosition;
  IoRestorecommerceInvoiceProductItem: IoRestorecommerceInvoiceProductItem;
  IoRestorecommerceProductProduct: IoRestorecommerceProductProduct;
  IoRestorecommerceProductIndividualProduct: IoRestorecommerceProductIndividualProduct;
  IoRestorecommerceManufacturerManufacturer: IoRestorecommerceManufacturerManufacturer;
  IoRestorecommerceProductPrototypeProductPrototype: IoRestorecommerceProductPrototypeProductPrototype;
  IoRestorecommerceProductCategoryProductCategory: IoRestorecommerceProductCategoryProductCategory;
  IoRestorecommercePriceGroupPriceGroup: IoRestorecommercePriceGroupPriceGroup;
  IoRestorecommerceProductCategoryParent: IoRestorecommerceProductCategoryParent;
  IoRestorecommerceProductPhysicalProduct: IoRestorecommerceProductPhysicalProduct;
  IoRestorecommerceProductPhysicalVariant: IoRestorecommerceProductPhysicalVariant;
  IoRestorecommercePricePrice: IoRestorecommercePricePrice;
  IoRestorecommerceCurrencyCurrency: IoRestorecommerceCurrencyCurrency;
  IoRestorecommerceCurrencyExchangeRate: IoRestorecommerceCurrencyExchangeRate;
  IoRestorecommerceTaxTax: IoRestorecommerceTaxTax;
  IoRestorecommerceTaxTypeTaxType: IoRestorecommerceTaxTypeTaxType;
  IoRestorecommerceFileFile: IoRestorecommerceFileFile;
  IoRestorecommerceProductPackage: IoRestorecommerceProductPackage;
  IoRestorecommerceGeometryBoundingBox3D: IoRestorecommerceGeometryBoundingBox3D;
  IoRestorecommerceProductServiceProduct: IoRestorecommerceProductServiceProduct;
  IoRestorecommerceProductServiceVariant: IoRestorecommerceProductServiceVariant;
  IoRestorecommerceProductVirtualProduct: IoRestorecommerceProductVirtualProduct;
  IoRestorecommerceProductVirtualVariant: IoRestorecommerceProductVirtualVariant;
  IoRestorecommerceProductBundle: IoRestorecommerceProductBundle;
  IoRestorecommerceProductBundleProduct: IoRestorecommerceProductBundleProduct;
  IoRestorecommerceProductAssociation: IoRestorecommerceProductAssociation;
  IoRestorecommerceInvoiceFulfillmentItem: IoRestorecommerceInvoiceFulfillmentItem;
  IoRestorecommerceFulfillmentProductFulfillmentProduct: IoRestorecommerceFulfillmentProductFulfillmentProduct;
  IoRestorecommerceFulfillmentCourierFulfillmentCourier: IoRestorecommerceFulfillmentCourierFulfillmentCourier;
  IoRestorecommerceFulfillmentProductVariant: IoRestorecommerceFulfillmentProductVariant;
  IoRestorecommerceInvoiceManualItem: IoRestorecommerceInvoiceManualItem;
  IoRestorecommerceAmountAmount: IoRestorecommerceAmountAmount;
  IoRestorecommerceAmountVAT: IoRestorecommerceAmountVat;
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
  InvoicingMutation: InvoicingMutation;
  InvoicingInvoiceMutation: InvoicingInvoiceMutation;
  IIoRestorecommerceInvoiceInvoiceList: IIoRestorecommerceInvoiceInvoiceList;
  IIoRestorecommerceInvoiceInvoice: IIoRestorecommerceInvoiceInvoice;
  IIoRestorecommerceMetaMeta: IIoRestorecommerceMetaMeta;
  IDateTime: Scalars['IDateTime']['output'];
  IIoRestorecommerceAttributeAttribute: IIoRestorecommerceAttributeAttribute;
  IIoRestorecommerceAttributeAttributeObj: IIoRestorecommerceAttributeAttributeObj;
  IIoRestorecommerceReferenceReference: IIoRestorecommerceReferenceReference;
  IIoRestorecommerceAddressBillingAddress: IIoRestorecommerceAddressBillingAddress;
  IIoRestorecommerceAddressAddress: IIoRestorecommerceAddressAddress;
  IIoRestorecommerceAddressGeoPoint: IIoRestorecommerceAddressGeoPoint;
  IIoRestorecommerceAddressAddressAddition: IIoRestorecommerceAddressAddressAddition;
  IIoRestorecommerceAddressBusinessAddress: IIoRestorecommerceAddressBusinessAddress;
  IIoRestorecommerceAddressResidentialAddress: IIoRestorecommerceAddressResidentialAddress;
  IIoRestorecommerceAddressPackStation: IIoRestorecommerceAddressPackStation;
  IIoRestorecommerceAddressContact: IIoRestorecommerceAddressContact;
  IIoRestorecommerceInvoiceSection: IIoRestorecommerceInvoiceSection;
  IIoRestorecommerceInvoicePosition: IIoRestorecommerceInvoicePosition;
  IIoRestorecommerceInvoiceProductItem: IIoRestorecommerceInvoiceProductItem;
  IIoRestorecommerceInvoiceFulfillmentItem: IIoRestorecommerceInvoiceFulfillmentItem;
  IIoRestorecommerceInvoiceManualItem: IIoRestorecommerceInvoiceManualItem;
  IIoRestorecommercePricePrice: IIoRestorecommercePricePrice;
  IIoRestorecommerceAmountAmount: IIoRestorecommerceAmountAmount;
  IIoRestorecommerceAmountVAT: IIoRestorecommerceAmountVat;
  IIoRestorecommerceFileFile: IIoRestorecommerceFileFile;
  IIoRestorecommerceImageImage: IIoRestorecommerceImageImage;
  ProtoIoRestorecommerceResourcebaseDeleteResponse: ProtoIoRestorecommerceResourcebaseDeleteResponse;
  IoRestorecommerceResourcebaseDeleteResponse: IoRestorecommerceResourcebaseDeleteResponse;
  IIoRestorecommerceResourcebaseDeleteRequest: IIoRestorecommerceResourcebaseDeleteRequest;
  IIoRestorecommerceInvoiceInvoiceIdList: IIoRestorecommerceInvoiceInvoiceIdList;
  IIoRestorecommerceInvoiceInvoiceId: IIoRestorecommerceInvoiceInvoiceId;
  ProtoIoRestorecommerceStatusStatusListResponse: ProtoIoRestorecommerceStatusStatusListResponse;
  IoRestorecommerceStatusStatusListResponse: IoRestorecommerceStatusStatusListResponse;
  ProtoIoRestorecommerceInvoiceInvoiceNumberResponse: ProtoIoRestorecommerceInvoiceInvoiceNumberResponse;
  IoRestorecommerceInvoiceInvoiceNumberResponse: IoRestorecommerceInvoiceInvoiceNumberResponse;
  IIoRestorecommerceInvoiceRequestInvoiceNumber: IIoRestorecommerceInvoiceRequestInvoiceNumber;
  Subscription: {};
  SubscriptionOutput: SubscriptionOutput;
}>;

export type QueryResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  invoicing?: Resolver<ResolversTypes['InvoicingQuery'], ParentType, ContextType>;
}>;

export type InvoicingQueryResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['InvoicingQuery'] = ResolversParentTypes['InvoicingQuery']> = ResolversObject<{
  invoice?: Resolver<ResolversTypes['InvoicingInvoiceQuery'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InvoicingInvoiceQueryResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['InvoicingInvoiceQuery'] = ResolversParentTypes['InvoicingInvoiceQuery']> = ResolversObject<{
  Read?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceInvoiceInvoiceListResponse']>, ParentType, ContextType, RequireFields<InvoicingInvoiceQueryReadArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceInvoiceInvoiceListResponseResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceInvoiceInvoiceListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceInvoiceInvoiceListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceInvoiceInvoiceListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceInvoiceInvoiceListResponseResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceInvoiceInvoiceListResponse'] = ResolversParentTypes['IoRestorecommerceInvoiceInvoiceListResponse']> = ResolversObject<{
  items?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceInvoiceInvoiceResponse']>>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceInvoiceInvoiceResponseResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceInvoiceInvoiceResponse'] = ResolversParentTypes['IoRestorecommerceInvoiceInvoiceResponse']> = ResolversObject<{
  payload?: Resolver<Maybe<ResolversTypes['IoRestorecommerceInvoiceInvoice']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceInvoiceInvoiceResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceInvoiceInvoice'] = ResolversParentTypes['IoRestorecommerceInvoiceInvoice']> = ResolversObject<{
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

export type IoRestorecommerceMetaMetaResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceMetaMeta'] = ResolversParentTypes['IoRestorecommerceMetaMeta']> = ResolversObject<{
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  modified?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  modifiedBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owners?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  acls?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttributeObj']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type IoRestorecommerceAttributeAttributeResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttribute'] = ResolversParentTypes['IoRestorecommerceAttributeAttribute']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAttributeAttributeObjResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAttributeAttributeObj'] = ResolversParentTypes['IoRestorecommerceAttributeAttributeObj']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAttributeAttribute']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceReferenceReferenceResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceReferenceReference'] = ResolversParentTypes['IoRestorecommerceReferenceReference']> = ResolversObject<{
  instanceType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instanceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceUserUserResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceUserUser'] = ResolversParentTypes['IoRestorecommerceUserUser']> = ResolversObject<{
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

export type IoRestorecommerceAuthRoleAssociationResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthRoleAssociation'] = ResolversParentTypes['IoRestorecommerceAuthRoleAssociation']> = ResolversObject<{
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTimezoneTimezoneResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceTimezoneTimezone'] = ResolversParentTypes['IoRestorecommerceTimezoneTimezone']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceLocaleLocaleResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceLocaleLocale'] = ResolversParentTypes['IoRestorecommerceLocaleLocale']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceImageImageResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceImageImage'] = ResolversParentTypes['IoRestorecommerceImageImage']> = ResolversObject<{
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

export type IoRestorecommerceAuthTokensResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAuthTokens'] = ResolversParentTypes['IoRestorecommerceAuthTokens']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expiresIn?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scopes?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  interactive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastLogin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GoogleProtobufAnyResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['GoogleProtobufAny'] = ResolversParentTypes['GoogleProtobufAny']> = ResolversObject<{
  typeUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['GoogleProtobufAnyValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface GoogleProtobufAnyValueScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GoogleProtobufAnyValue'], any> {
  name: 'GoogleProtobufAnyValue';
}

export type IoRestorecommerceCustomerCustomerResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerCustomer'] = ResolversParentTypes['IoRestorecommerceCustomerCustomer']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  private?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCustomerPrivate']>, ParentType, ContextType>;
  commercial?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCustomerCommercial']>, ParentType, ContextType>;
  publicSector?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCustomerPublicSector']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCustomerPrivateResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerPrivate'] = ResolversParentTypes['IoRestorecommerceCustomerPrivate']> = ResolversObject<{
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['IoRestorecommerceUserUser']>, ParentType, ContextType>;
  contactPointIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  contactPoints?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceContactPointContactPoint']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceContactPointContactPointResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceContactPointContactPoint'] = ResolversParentTypes['IoRestorecommerceContactPointContactPoint']> = ResolversObject<{
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

export type IoRestorecommerceAddressAddressResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressAddress'] = ResolversParentTypes['IoRestorecommerceAddressAddress']> = ResolversObject<{
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

export type IoRestorecommerceCountryCountryResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceCountryCountry'] = ResolversParentTypes['IoRestorecommerceCountryCountry']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  geographicalName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  economicAreas?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressGeoPointResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressGeoPoint'] = ResolversParentTypes['IoRestorecommerceAddressGeoPoint']> = ResolversObject<{
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressAddressAdditionResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressAddressAddition'] = ResolversParentTypes['IoRestorecommerceAddressAddressAddition']> = ResolversObject<{
  field1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  field2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressBusinessAddressResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressBusinessAddress'] = ResolversParentTypes['IoRestorecommerceAddressBusinessAddress']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressResidentialAddressResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressResidentialAddress'] = ResolversParentTypes['IoRestorecommerceAddressResidentialAddress']> = ResolversObject<{
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  givenName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  midName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  familyName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressPackStationResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressPackStation'] = ResolversParentTypes['IoRestorecommerceAddressPackStation']> = ResolversObject<{
  provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stationNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceContactPointTypeContactPointTypeResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceContactPointTypeContactPointType'] = ResolversParentTypes['IoRestorecommerceContactPointTypeContactPointType']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCustomerCommercialResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerCommercial'] = ResolversParentTypes['IoRestorecommerceCustomerCommercial']> = ResolversObject<{
  organizationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrganizationOrganization']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceOrganizationOrganizationResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceOrganizationOrganization'] = ResolversParentTypes['IoRestorecommerceOrganizationOrganization']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrganizationOrganization']>, ParentType, ContextType>;
  contactPointIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  contactPoints?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceContactPointContactPoint']>>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  vatId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isicV4?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  registration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  registrationCourt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paymentMethodIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCustomerPublicSectorResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceCustomerPublicSector'] = ResolversParentTypes['IoRestorecommerceCustomerPublicSector']> = ResolversObject<{
  organizationId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['IoRestorecommerceOrganizationOrganization']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceShopShopResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceShopShop'] = ResolversParentTypes['IoRestorecommerceShopShop']> = ResolversObject<{
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

export type IoRestorecommerceInvoicePaymentStateResolvers = { UNPAYED: 0, PAYED: 1 };

export type IoRestorecommerceAddressBillingAddressResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressBillingAddress'] = ResolversParentTypes['IoRestorecommerceAddressBillingAddress']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressAddress']>, ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAddressContact']>, ParentType, ContextType>;
  comments?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAddressContactResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAddressContact'] = ResolversParentTypes['IoRestorecommerceAddressContact']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceInvoiceSectionResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceInvoiceSection'] = ResolversParentTypes['IoRestorecommerceInvoiceSection']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customerRemark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  positions?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceInvoicePosition']>>, ParentType, ContextType>;
  amounts?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAmountAmount']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceInvoicePositionResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceInvoicePosition'] = ResolversParentTypes['IoRestorecommerceInvoicePosition']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productItem?: Resolver<Maybe<ResolversTypes['IoRestorecommerceInvoiceProductItem']>, ParentType, ContextType>;
  fultillmentItem?: Resolver<Maybe<ResolversTypes['IoRestorecommerceInvoiceFulfillmentItem']>, ParentType, ContextType>;
  manualItem?: Resolver<Maybe<ResolversTypes['IoRestorecommerceInvoiceManualItem']>, ParentType, ContextType>;
  unitPrice?: Resolver<Maybe<ResolversTypes['IoRestorecommercePricePrice']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['IoRestorecommerceAmountAmount']>, ParentType, ContextType>;
  contractStartDate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceInvoiceProductItemResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceInvoiceProductItem'] = ResolversParentTypes['IoRestorecommerceInvoiceProductItem']> = ResolversObject<{
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductProduct']>, ParentType, ContextType>;
  variantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductProductResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductProduct'] = ResolversParentTypes['IoRestorecommerceProductProduct']> = ResolversObject<{
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

export type IoRestorecommerceProductIndividualProductResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductIndividualProduct'] = ResolversParentTypes['IoRestorecommerceProductIndividualProduct']> = ResolversObject<{
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
  gtin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  physical?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductPhysicalProduct']>, ParentType, ContextType>;
  service?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductServiceProduct']>, ParentType, ContextType>;
  virtual?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductVirtualProduct']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceManufacturerManufacturerResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceManufacturerManufacturer'] = ResolversParentTypes['IoRestorecommerceManufacturerManufacturer']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductPrototypeProductPrototypeResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductPrototypeProductPrototype'] = ResolversParentTypes['IoRestorecommerceProductPrototypeProductPrototype']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categoryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductCategoryProductCategory']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductCategoryProductCategoryResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductCategoryProductCategory'] = ResolversParentTypes['IoRestorecommerceProductCategoryProductCategory']> = ResolversObject<{
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

export type IoRestorecommercePriceGroupPriceGroupResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommercePriceGroupPriceGroup'] = ResolversParentTypes['IoRestorecommercePriceGroupPriceGroup']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductCategoryParentResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductCategoryParent'] = ResolversParentTypes['IoRestorecommerceProductCategoryParent']> = ResolversObject<{
  parentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductPhysicalProductResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductPhysicalProduct'] = ResolversParentTypes['IoRestorecommerceProductPhysicalProduct']> = ResolversObject<{
  variants?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceProductPhysicalVariant']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductPhysicalVariantResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductPhysicalVariant'] = ResolversParentTypes['IoRestorecommerceProductPhysicalVariant']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stockLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['IoRestorecommercePricePrice']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceImageImage']>>, ParentType, ContextType>;
  files?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFileFile']>>, ParentType, ContextType>;
  stockKeepingUnit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  templateVariant?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  package?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductPackage']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommercePricePriceResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommercePricePrice'] = ResolversParentTypes['IoRestorecommercePricePrice']> = ResolversObject<{
  regularPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sale?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  salePrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  currencyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCurrencyCurrency']>, ParentType, ContextType>;
  taxIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  taxes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceTaxTax']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCurrencyCurrencyResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceCurrencyCurrency'] = ResolversParentTypes['IoRestorecommerceCurrencyCurrency']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customExchangeRates?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceCurrencyExchangeRate']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceCurrencyExchangeRateResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceCurrencyExchangeRate'] = ResolversParentTypes['IoRestorecommerceCurrencyExchangeRate']> = ResolversObject<{
  toCurrencyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  expenses?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceTaxTaxResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceTaxTax'] = ResolversParentTypes['IoRestorecommerceTaxTax']> = ResolversObject<{
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

export type IoRestorecommerceTaxTypeTaxTypeResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceTaxTypeTaxType'] = ResolversParentTypes['IoRestorecommerceTaxTypeTaxType']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meta?: Resolver<Maybe<ResolversTypes['IoRestorecommerceMetaMeta']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFileFileResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceFileFile'] = ResolversParentTypes['IoRestorecommerceFileFile']> = ResolversObject<{
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

export type IoRestorecommerceProductPackageResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductPackage'] = ResolversParentTypes['IoRestorecommerceProductPackage']> = ResolversObject<{
  sizeInCm?: Resolver<Maybe<ResolversTypes['IoRestorecommerceGeometryBoundingBox3D']>, ParentType, ContextType>;
  weightInKg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  rotatable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceGeometryBoundingBox3DResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceGeometryBoundingBox3D'] = ResolversParentTypes['IoRestorecommerceGeometryBoundingBox3D']> = ResolversObject<{
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  length?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductServiceProductResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductServiceProduct'] = ResolversParentTypes['IoRestorecommerceProductServiceProduct']> = ResolversObject<{
  variants?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceProductServiceVariant']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductServiceVariantResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductServiceVariant'] = ResolversParentTypes['IoRestorecommerceProductServiceVariant']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stockLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['IoRestorecommercePricePrice']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceImageImage']>>, ParentType, ContextType>;
  files?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFileFile']>>, ParentType, ContextType>;
  stockKeepingUnit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  templateVariant?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductVirtualProductResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductVirtualProduct'] = ResolversParentTypes['IoRestorecommerceProductVirtualProduct']> = ResolversObject<{
  variants?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceProductVirtualVariant']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductVirtualVariantResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductVirtualVariant'] = ResolversParentTypes['IoRestorecommerceProductVirtualVariant']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stockLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['IoRestorecommercePricePrice']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceImageImage']>>, ParentType, ContextType>;
  files?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceFileFile']>>, ParentType, ContextType>;
  stockKeepingUnit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  templateVariant?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAttributeAttribute']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductBundleResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductBundle'] = ResolversParentTypes['IoRestorecommerceProductBundle']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceImageImage']>>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceProductBundleProduct']>>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['IoRestorecommercePricePrice']>, ParentType, ContextType>;
  prePackaged?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductPackage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductBundleProductResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductBundleProduct'] = ResolversParentTypes['IoRestorecommerceProductBundleProduct']> = ResolversObject<{
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductProduct']>, ParentType, ContextType>;
  variantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  priceRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductAssociationResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceProductAssociation'] = ResolversParentTypes['IoRestorecommerceProductAssociation']> = ResolversObject<{
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductProduct']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['IoRestorecommerceProductAssociationType']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['GoogleProtobufAny']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceProductAssociationTypeResolvers = { Miscellaneous: 0, Accessory: 1, Recommendation: 2 };

export type IoRestorecommerceInvoiceFulfillmentItemResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceInvoiceFulfillmentItem'] = ResolversParentTypes['IoRestorecommerceInvoiceFulfillmentItem']> = ResolversObject<{
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['IoRestorecommerceFulfillmentProductFulfillmentProduct']>, ParentType, ContextType>;
  variantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceFulfillmentProductFulfillmentProductResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentProductFulfillmentProduct'] = ResolversParentTypes['IoRestorecommerceFulfillmentProductFulfillmentProduct']> = ResolversObject<{
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

export type IoRestorecommerceFulfillmentCourierFulfillmentCourierResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentCourierFulfillmentCourier'] = ResolversParentTypes['IoRestorecommerceFulfillmentCourierFulfillmentCourier']> = ResolversObject<{
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

export type IoRestorecommerceFulfillmentProductVariantResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceFulfillmentProductVariant'] = ResolversParentTypes['IoRestorecommerceFulfillmentProductVariant']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['IoRestorecommercePricePrice']>, ParentType, ContextType>;
  maxSize?: Resolver<Maybe<ResolversTypes['IoRestorecommerceGeometryBoundingBox3D']>, ParentType, ContextType>;
  maxWeight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceInvoiceManualItemResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceInvoiceManualItem'] = ResolversParentTypes['IoRestorecommerceInvoiceManualItem']> = ResolversObject<{
  stockKeepingUnit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  descritpion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAmountAmountResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAmountAmount'] = ResolversParentTypes['IoRestorecommerceAmountAmount']> = ResolversObject<{
  currencyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['IoRestorecommerceCurrencyCurrency']>, ParentType, ContextType>;
  gross?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  net?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  vats?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceAmountVAT']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceAmountVatResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceAmountVAT'] = ResolversParentTypes['IoRestorecommerceAmountVAT']> = ResolversObject<{
  taxId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tax?: Resolver<Maybe<ResolversTypes['IoRestorecommerceTaxTax']>, ParentType, ContextType>;
  vat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusStatusResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusStatus'] = ResolversParentTypes['IoRestorecommerceStatusStatus']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusOperationStatusResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusOperationStatus'] = ResolversParentTypes['IoRestorecommerceStatusOperationStatus']> = ResolversObject<{
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

export type MutationResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  invoicing?: Resolver<ResolversTypes['InvoicingMutation'], ParentType, ContextType>;
}>;

export type InvoicingMutationResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['InvoicingMutation'] = ResolversParentTypes['InvoicingMutation']> = ResolversObject<{
  invoice?: Resolver<ResolversTypes['InvoicingInvoiceMutation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InvoicingInvoiceMutationResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['InvoicingInvoiceMutation'] = ResolversParentTypes['InvoicingInvoiceMutation']> = ResolversObject<{
  Mutate?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceInvoiceInvoiceListResponse']>, ParentType, ContextType, RequireFields<InvoicingInvoiceMutationMutateArgs, 'input'>>;
  Delete?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType, RequireFields<InvoicingInvoiceMutationDeleteArgs, 'input'>>;
  Render?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceInvoiceInvoiceListResponse']>, ParentType, ContextType, RequireFields<InvoicingInvoiceMutationRenderArgs, 'input'>>;
  Withdraw?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceInvoiceInvoiceListResponse']>, ParentType, ContextType, RequireFields<InvoicingInvoiceMutationWithdrawArgs, 'input'>>;
  Send?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceStatusStatusListResponse']>, ParentType, ContextType, RequireFields<InvoicingInvoiceMutationSendArgs, 'input'>>;
  GenerateInvoiceNumber?: Resolver<Maybe<ResolversTypes['ProtoIoRestorecommerceInvoiceInvoiceNumberResponse']>, ParentType, ContextType, RequireFields<InvoicingInvoiceMutationGenerateInvoiceNumberArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface IDateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IDateTime'], any> {
  name: 'IDateTime';
}

export type ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['ProtoIoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceResourcebaseDeleteResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse'] = ResolversParentTypes['IoRestorecommerceResourcebaseDeleteResponse']> = ResolversObject<{
  status?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceStatusStatus']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceStatusStatusListResponseResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceStatusStatusListResponse'] = ResolversParentTypes['ProtoIoRestorecommerceStatusStatusListResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusStatusListResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceStatusStatusListResponseResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceStatusStatusListResponse'] = ResolversParentTypes['IoRestorecommerceStatusStatusListResponse']> = ResolversObject<{
  status?: Resolver<Maybe<Array<ResolversTypes['IoRestorecommerceStatusStatus']>>, ParentType, ContextType>;
  operationStatus?: Resolver<Maybe<ResolversTypes['IoRestorecommerceStatusOperationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProtoIoRestorecommerceInvoiceInvoiceNumberResponseResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['ProtoIoRestorecommerceInvoiceInvoiceNumberResponse'] = ResolversParentTypes['ProtoIoRestorecommerceInvoiceInvoiceNumberResponse']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['IoRestorecommerceInvoiceInvoiceNumberResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IoRestorecommerceInvoiceInvoiceNumberResponseResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['IoRestorecommerceInvoiceInvoiceNumberResponse'] = ResolversParentTypes['IoRestorecommerceInvoiceInvoiceNumberResponse']> = ResolversObject<{
  invoiceNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  orderingOrders?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "orderingOrders", ParentType, ContextType, Partial<SubscriptionOrderingOrdersArgs>>;
  catalogProducts?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "catalogProducts", ParentType, ContextType, Partial<SubscriptionCatalogProductsArgs>>;
  invoicingInvoices?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionOutput']>, "invoicingInvoices", ParentType, ContextType, Partial<SubscriptionInvoicingInvoicesArgs>>;
}>;

export type SubscriptionOutputResolvers<ContextType = InvoicingContext, ParentType extends ResolversParentTypes['SubscriptionOutput'] = ResolversParentTypes['SubscriptionOutput']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = InvoicingContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  InvoicingQuery?: InvoicingQueryResolvers<ContextType>;
  InvoicingInvoiceQuery?: InvoicingInvoiceQueryResolvers<ContextType>;
  ProtoIoRestorecommerceInvoiceInvoiceListResponse?: ProtoIoRestorecommerceInvoiceInvoiceListResponseResolvers<ContextType>;
  IoRestorecommerceInvoiceInvoiceListResponse?: IoRestorecommerceInvoiceInvoiceListResponseResolvers<ContextType>;
  IoRestorecommerceInvoiceInvoiceResponse?: IoRestorecommerceInvoiceInvoiceResponseResolvers<ContextType>;
  IoRestorecommerceInvoiceInvoice?: IoRestorecommerceInvoiceInvoiceResolvers<ContextType>;
  IoRestorecommerceMetaMeta?: IoRestorecommerceMetaMetaResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  IoRestorecommerceAttributeAttribute?: IoRestorecommerceAttributeAttributeResolvers<ContextType>;
  IoRestorecommerceAttributeAttributeObj?: IoRestorecommerceAttributeAttributeObjResolvers<ContextType>;
  IoRestorecommerceReferenceReference?: IoRestorecommerceReferenceReferenceResolvers<ContextType>;
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
  IoRestorecommerceCustomerPublicSector?: IoRestorecommerceCustomerPublicSectorResolvers<ContextType>;
  IoRestorecommerceShopShop?: IoRestorecommerceShopShopResolvers<ContextType>;
  IoRestorecommerceInvoicePaymentState?: IoRestorecommerceInvoicePaymentStateResolvers;
  IoRestorecommerceAddressBillingAddress?: IoRestorecommerceAddressBillingAddressResolvers<ContextType>;
  IoRestorecommerceAddressContact?: IoRestorecommerceAddressContactResolvers<ContextType>;
  IoRestorecommerceInvoiceSection?: IoRestorecommerceInvoiceSectionResolvers<ContextType>;
  IoRestorecommerceInvoicePosition?: IoRestorecommerceInvoicePositionResolvers<ContextType>;
  IoRestorecommerceInvoiceProductItem?: IoRestorecommerceInvoiceProductItemResolvers<ContextType>;
  IoRestorecommerceProductProduct?: IoRestorecommerceProductProductResolvers<ContextType>;
  IoRestorecommerceProductIndividualProduct?: IoRestorecommerceProductIndividualProductResolvers<ContextType>;
  IoRestorecommerceManufacturerManufacturer?: IoRestorecommerceManufacturerManufacturerResolvers<ContextType>;
  IoRestorecommerceProductPrototypeProductPrototype?: IoRestorecommerceProductPrototypeProductPrototypeResolvers<ContextType>;
  IoRestorecommerceProductCategoryProductCategory?: IoRestorecommerceProductCategoryProductCategoryResolvers<ContextType>;
  IoRestorecommercePriceGroupPriceGroup?: IoRestorecommercePriceGroupPriceGroupResolvers<ContextType>;
  IoRestorecommerceProductCategoryParent?: IoRestorecommerceProductCategoryParentResolvers<ContextType>;
  IoRestorecommerceProductPhysicalProduct?: IoRestorecommerceProductPhysicalProductResolvers<ContextType>;
  IoRestorecommerceProductPhysicalVariant?: IoRestorecommerceProductPhysicalVariantResolvers<ContextType>;
  IoRestorecommercePricePrice?: IoRestorecommercePricePriceResolvers<ContextType>;
  IoRestorecommerceCurrencyCurrency?: IoRestorecommerceCurrencyCurrencyResolvers<ContextType>;
  IoRestorecommerceCurrencyExchangeRate?: IoRestorecommerceCurrencyExchangeRateResolvers<ContextType>;
  IoRestorecommerceTaxTax?: IoRestorecommerceTaxTaxResolvers<ContextType>;
  IoRestorecommerceTaxTypeTaxType?: IoRestorecommerceTaxTypeTaxTypeResolvers<ContextType>;
  IoRestorecommerceFileFile?: IoRestorecommerceFileFileResolvers<ContextType>;
  IoRestorecommerceProductPackage?: IoRestorecommerceProductPackageResolvers<ContextType>;
  IoRestorecommerceGeometryBoundingBox3D?: IoRestorecommerceGeometryBoundingBox3DResolvers<ContextType>;
  IoRestorecommerceProductServiceProduct?: IoRestorecommerceProductServiceProductResolvers<ContextType>;
  IoRestorecommerceProductServiceVariant?: IoRestorecommerceProductServiceVariantResolvers<ContextType>;
  IoRestorecommerceProductVirtualProduct?: IoRestorecommerceProductVirtualProductResolvers<ContextType>;
  IoRestorecommerceProductVirtualVariant?: IoRestorecommerceProductVirtualVariantResolvers<ContextType>;
  IoRestorecommerceProductBundle?: IoRestorecommerceProductBundleResolvers<ContextType>;
  IoRestorecommerceProductBundleProduct?: IoRestorecommerceProductBundleProductResolvers<ContextType>;
  IoRestorecommerceProductAssociation?: IoRestorecommerceProductAssociationResolvers<ContextType>;
  IoRestorecommerceProductAssociationType?: IoRestorecommerceProductAssociationTypeResolvers;
  IoRestorecommerceInvoiceFulfillmentItem?: IoRestorecommerceInvoiceFulfillmentItemResolvers<ContextType>;
  IoRestorecommerceFulfillmentProductFulfillmentProduct?: IoRestorecommerceFulfillmentProductFulfillmentProductResolvers<ContextType>;
  IoRestorecommerceFulfillmentCourierFulfillmentCourier?: IoRestorecommerceFulfillmentCourierFulfillmentCourierResolvers<ContextType>;
  IoRestorecommerceFulfillmentProductVariant?: IoRestorecommerceFulfillmentProductVariantResolvers<ContextType>;
  IoRestorecommerceInvoiceManualItem?: IoRestorecommerceInvoiceManualItemResolvers<ContextType>;
  IoRestorecommerceAmountAmount?: IoRestorecommerceAmountAmountResolvers<ContextType>;
  IoRestorecommerceAmountVAT?: IoRestorecommerceAmountVatResolvers<ContextType>;
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
  InvoicingMutation?: InvoicingMutationResolvers<ContextType>;
  InvoicingInvoiceMutation?: InvoicingInvoiceMutationResolvers<ContextType>;
  IDateTime?: GraphQLScalarType;
  ProtoIoRestorecommerceResourcebaseDeleteResponse?: ProtoIoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  IoRestorecommerceResourcebaseDeleteResponse?: IoRestorecommerceResourcebaseDeleteResponseResolvers<ContextType>;
  ProtoIoRestorecommerceStatusStatusListResponse?: ProtoIoRestorecommerceStatusStatusListResponseResolvers<ContextType>;
  IoRestorecommerceStatusStatusListResponse?: IoRestorecommerceStatusStatusListResponseResolvers<ContextType>;
  ProtoIoRestorecommerceInvoiceInvoiceNumberResponse?: ProtoIoRestorecommerceInvoiceInvoiceNumberResponseResolvers<ContextType>;
  IoRestorecommerceInvoiceInvoiceNumberResponse?: IoRestorecommerceInvoiceInvoiceNumberResponseResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  SubscriptionOutput?: SubscriptionOutputResolvers<ContextType>;
}>;

