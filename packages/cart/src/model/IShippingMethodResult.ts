import { Gram, PackageType, Decimal } from './primitives';

export type IShippingMethodResult = {
  price: Decimal; // '3.89'
  maxWeight: Gram; // 856
  zone: string; // 'national'
  type: PackageType; // 'parcel'
  human: {
    zone: string; // 'National (Germany)'
    offer: string; // 'Parcel up to 1kg'
  };
} | { price: Decimal } ;
