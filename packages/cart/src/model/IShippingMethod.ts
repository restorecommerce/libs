import { IShippingMethodResult } from './IShippingMethodResult';
import { IItems } from './primitives';
import { IAddress } from './IAddress';

export interface IShippingMethod {
  setShipping(shipping: IAddress): void;

  getShipping(): IAddress;

  setDestinationCountry(country: string): void;

  // calculating shipping
  get(products: IItems): IShippingMethodResult;
}
