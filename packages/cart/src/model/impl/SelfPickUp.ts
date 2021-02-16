import { IShippingMethod } from '../IShippingMethod';
import { IAddress } from '../IAddress';
import { Decimal, IItems } from '../primitives';
import { IShippingMethodResult } from '../IShippingMethodResult';

export class SelfPickUp implements IShippingMethod {
  private _shipping: IAddress;

  setShipping(shipping: IAddress) {
    this._shipping = shipping;
  }

  getShipping(): IAddress {
    return this._shipping;
  }

  get(products: IItems): IShippingMethodResult {
    return {price: new Decimal(0)};
  }

  setDestinationCountry(country: string): void {
    this._shipping.destinationCountry = country;
  }

  constructor(shipping: IAddress) {
    this._shipping = shipping;
  }
}
