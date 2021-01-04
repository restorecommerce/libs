import { IShippingMethod } from './IShippingMethod';
import { ISerializer } from './ISerializer';
import { TaxRates } from './primitives';

export type ICartCtor = {
  serializer?: ISerializer;
  shippingMethod?: IShippingMethod;
  taxOriginCountry: string;
  taxRates: TaxRates;
};
