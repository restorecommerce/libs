import { Money, Decimal, IItems, TaxRates } from './primitives';
import { ICustomer } from './ICustomer';
import { IShippingMethod } from './IShippingMethod';
import { ISerializer } from './ISerializer';
import { IItem } from './IItem';

export interface ICart {
  version: string;

  getItems(): IItem[] | undefined;

  /** @private function */
  setItems(items: IItem[]): void;

  getCustomer(): ICustomer | undefined;

  setCustomer(customer: ICustomer): void;

  getShippingMethod(): IShippingMethod | undefined;

  setShippingMethod(shippingMethod: IShippingMethod): void;

  getSerializer(): ISerializer | undefined;

  setSerializer(serializer: ISerializer): void;

  getTaxRates(): TaxRates;

  /** @private function */
  setTaxRates(taxRates: TaxRates): void;

  setCustomerType(type: any): void;

  setDestinationCountry(country: string): void;

  addItems(items: IItem[]): void;

  remItem(sku: string): void;

  modifyItemQuantity(sku: string, quantity: number): void;

  modifyItem(item: any): void;

  getItemCount();

  getItemQuantity(sku: string): number;

  getGrandQuantity(): number;

  getTaxes(keepOriginalTaxType?: boolean): { [taxType: string]: { netPrice: Decimal; rate: Decimal; desc: string; price: Decimal } };

  getTotalNet(): Decimal;   // net = item * qty
  getTotalGross(): Decimal; // gross = net * tax_rate
  getShipping(): { price: Money;[prop: string]: any };

  /** @static function */
  round(money: Money): string;
}
