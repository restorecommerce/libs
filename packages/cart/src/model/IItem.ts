import { Gram, Money } from './primitives';

export interface IItem {
  price: Money; // Euro
  taxType: 'vat_standard' | 'vat_reduced' | 'vat_free' | 'vat_placeholder';

  quantity: number;
  weight: Gram; // grams
  height: number; // cm
  width: number; // cm
  depth: number; // cm

  desc?: string;
  imgSrc?: string;
  sku?: string;
  /* Only used when item is passed as a parameter */
}
