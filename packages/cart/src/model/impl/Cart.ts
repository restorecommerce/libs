import { ICart } from '../ICart';
import { CustomerType, ICustomer } from '../ICustomer';
import { IShippingMethod } from '../IShippingMethod';
import { Money, Decimal, IItems, TaxRates, euList, nonEuList } from '../primitives';
import { ICartCtor } from '../ICartCtor';
import { ISerializer } from '../ISerializer';
import { IItem } from '../IItem';
import { IShippingMethodResult } from '../IShippingMethodResult';

export class Cart implements ICart {
  private _items: IItems = [];
  private _customer: ICustomer;
  private _shippingMethod: IShippingMethod;
  private _serializer: ISerializer;
  private _taxOriginCountry: string;
  private _taxRates: TaxRates;
  private cachedResult?: IShippingMethodResult;

  version = '0.1.0';

  getItems(): IItems {
    return this._items;
  }

  /** @private function */
  setItems(items: IItem[]) {
    this._items = items;
    this.cachedResult = undefined;
  }

  getCustomer(): ICustomer {
    return this._customer;
  }

  setCustomer(customer: ICustomer) {
    this._customer = customer;
    this.cachedResult = undefined;
  }

  getShippingMethod(): IShippingMethod {
    return this._shippingMethod;
  }

  setShippingMethod(shippingMethod: IShippingMethod) {
    this._shippingMethod = shippingMethod;
    this.cachedResult = undefined;
  }

  getSerializer(): ISerializer {
    return this._serializer;
  }

  setSerializer(serializer: ISerializer) {
    this._serializer = serializer;
    this.cachedResult = undefined;
  }

  getTaxRates(): TaxRates {
    return this._taxRates;
  }

  /** @private function */
  setTaxRates(taxRates: TaxRates) {
    this._taxRates = taxRates;
    this.cachedResult = undefined;
  }

  setCustomerType(type: CustomerType) {
    this._customer.type = type;
    this.cachedResult = undefined;
  }

  setDestinationCountry(country: string): void {
    if (this._shippingMethod) {
      this._shippingMethod.setDestinationCountry(country);
    }
    this.cachedResult = undefined;
  }

  constructor(args: ICartCtor) {
    if (args && args.serializer) {
      this._serializer = args.serializer;
    }
    if (this._serializer) {
      this._serializer.load(this);
    }
    if (args) {
      this._taxOriginCountry = args.taxOriginCountry;
      this._taxRates = args.taxRates;

      if (args.shippingMethod) {
        this._shippingMethod = args.shippingMethod;
      }
    }
    return this;
  }

  // Add or change amount of  item / items
  addItems(items: IItem[]) {
    items.forEach((item) => {
      if (item && item.sku) {
        const index = this._items.map(e => e.sku).indexOf(item.sku);
        if (index >= 0) {
          this._items[index] = Object.assign({}, item);
        } else {
          this._items.push(item);
        }
      }
    });
    if (this._serializer) {
      this._serializer.save(this);
    }
    this.cachedResult = undefined;
  }

  remItem(sku: string) {
    const index = this._items.map(e => e.sku).indexOf(sku);
    if (index >= 0) {
      this._items.splice(index, 1);
      if (this._serializer) {
        this._serializer.save(this);
      }
    }
    this.cachedResult = undefined;
  }

  modifyItem(item: any) {
    const index = this._items.map(e => e.sku).indexOf(item.sku);
    if (index >= 0) {
      this._items[index] = Object.assign(this._items[index], item);
      if (this._serializer) {
        this._serializer.save(this);
      }
    }
    this.cachedResult = undefined;
  }

  modifyItemQuantity(sku: string, quantity: number) {
    const index = this._items.map(e => e.sku).indexOf(sku);
    if (index >= 0) {
      this._items[index].quantity += quantity;
      if (this._serializer) {
        this._serializer.save(this);
      }
    }
    this.cachedResult = undefined;
  }

  getItemCount() {
    return this._items.length;
  }

  getItemQuantity(sku: string) {
    const index = this._items.map(e => e.sku).indexOf(sku);
    return index >= 0 ? this._items[index].quantity : 0;
  }

  getGrandQuantity() {
    return this._items.map(e => e.quantity).reduce((a, b) => a + b, 0);
  }

  getShipping(): { price: Money; taxType: string; result?: IShippingMethodResult } {
    if (this._shippingMethod) {
      const shipping = this.cachedResult || this._shippingMethod.get(this._items);
      this.cachedResult = shipping;

      let price: Money = 0;
      if ('price' in shipping) {
        price = shipping.price;
      } else {
        price = shipping.offers.reduce((sum, offer) => offer.price.plus(sum), new Decimal(0));
      }

      return {
        result: shipping,
        taxType: 'vat_standard',
        price
      };
    } else {
      return {price: new Decimal(0), taxType: 'vat_standard'};
    }
  }

  getTaxes(keepOriginalTaxType?: boolean): { [taxType: string]: { netPrice: Decimal; rate: Decimal; desc: string; price: Decimal } } {
    let taxes = Object.assign(<any>{}, this._taxRates);

    // Iterate over items & shipping costs, and produce net prices indexed by taxType

    let items: { price: Money; quantity?: number; taxType?: string }[] = this._items.map(item => ({
      price: item.price,
      quantity: item.quantity,
      taxType: item.taxType
    }));
    items.push(this.getShipping());
    items = items.filter(item => typeof item.taxType === 'string'); // items with no taxType omitted

    taxes.vat_standard.netPrice = new Decimal(0);
    taxes.vat_reduced.netPrice = new Decimal(0);

    for (let item of items) {
      taxes[item.taxType].netPrice = Decimal.add(taxes[item.taxType].netPrice, Decimal.mul(item.price, typeof item.quantity === 'undefined' ? 1 : item.quantity));
    }

    // Assign tax rates, according to the customer information

    if (typeof taxes['vat_standard'] === 'undefined' || typeof taxes['vat_reduced'] === 'undefined') {
      throw new Error('The tax rate is missing');
    }

    if (this._customer && this._shippingMethod && this._shippingMethod.getShipping().destinationCountry) {
      const countryCode = this._shippingMethod.getShipping().destinationCountry;

      if ((this._customer.type as CustomerType == CustomerType.COMMERCIAL && euList.includes(countryCode) && countryCode !== this._taxOriginCountry) || nonEuList.includes(countryCode)) {
        taxes['vat_standard'].rate = new Decimal('1.00');
        taxes['vat_standard'].desc = 'VAT Free';

        taxes['vat_reduced'].rate = new Decimal('1.00');
        taxes['vat_reduced'].desc = 'VAT Free';

        if (!keepOriginalTaxType) {
          const vatFree = {
            desc: 'VAT Free',
            rate: new Decimal('1.00'),
            netPrice: new Decimal('0.00')
          };

          for (let taxType in taxes) {
            vatFree.netPrice = Decimal.add(vatFree.netPrice, taxes[taxType].netPrice);
          }

          taxes = {vat_free: vatFree};
        }
      }
    }

    return taxes;
  }

  getTotalNet(): Decimal {
    let sum = new Decimal(0);
    for (let item of this._items) {
      let itemNet = Decimal.mul(item.price.toString(), item.quantity.toString());
      sum = Decimal.add(sum, itemNet);
    }

    if (this._shippingMethod && this._shippingMethod.getShipping().destinationCountry) {
      sum = Decimal.add(sum, this.getShipping().price);
    }

    return sum;
  }

  getTotalGross(): Decimal {
    const taxes = this.getTaxes(true);

    let sum = new Decimal(0);
    for (let taxType in taxes) {
      const itemGrand = Decimal.mul(taxes[taxType].netPrice.toString(), taxes[taxType].rate.toString());
      sum = Decimal.add(sum, itemGrand);
    }

    return sum;
  }

  round = Cart.round;

  static round(money: Money): string {
    return (new Decimal(money)).toFixed(2, Decimal.ROUND_UP);
  }
}
