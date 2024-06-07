import { Gram, PackageType, Decimal } from './primitives';

export type IShippingMethodResult = {
  zone: string; // 'national'
  human: {
    zone: string; // 'National (Germany)'
  };
  offers: {
    price: Decimal; // '3.89'
    maxWeight: Gram; // 856
    type: PackageType; // 'parcel'
    human: {
      offer: string; // 'Parcel up to 1kg'
    };
  }[];
} | { price: Decimal };
