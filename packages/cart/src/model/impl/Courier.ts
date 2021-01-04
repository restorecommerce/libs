import { Gram, PackageType, Decimal, IItems } from '../primitives';
import { IShippingMethod } from '../IShippingMethod';
import { IAddress } from '../IAddress';
import { Bin } from './Bin';
import { Item } from './Item';
import { Packer } from './Packer';


export type AdditionalRule = {
  ruleType: 'L+2xW+2xH' | 'L+W+H';
  maxTotalDimension: number;
  maxSide?: number;
  maxHeight?: number;
  maxWidth?: number;
  maxDepth?: number;
};

export type Offer = {
  price: number;
  maxWeight: number;
  type: PackageType;
  height: number;
  width: number;
  depth: number;
  name?: string;
  additionalRule?: AdditionalRule;
};

export type OfferArray = Offer[];

export type OfferRule = {
  basePrice: number;
  stepPrice: number;
  stepWeight: number;
  maxWeight: number;
  roundingPrice: string;
  type: PackageType;
};

export type Source = {
  zones: {
    [zoneName: string]: {
      countryCodes: [string];
      name?: string;
      offers: OfferArray | OfferRule;
    };
  };
};

export class Courier implements IShippingMethod {
  private _source: Source;
  private _shipping: IAddress;

  setShipping(shipping: IAddress) {
    this._shipping = shipping;
  }

  getShipping(): IAddress {
    return this._shipping;
  }

  setDestinationCountry(country: string): void {
    this._shipping.destinationCountry = country;
  }

  setSource(source: Source) {
    this._source = source;
  }

  getSource(): Source {
    return this._source;
  }

  constructor(args: { source: string; shipping: IAddress }) {
    this._source = JSON.parse(args.source);
    this._shipping = args.shipping;
  }

  // 1 Country can only be in 1 zone

  stringifyOffer(theType, grams): string {
    const weight: string = grams >= 1000 ? String(Math.trunc(grams / 10) / 100) + 'kg' : grams + 'grams';
    return theType.charAt(0).toUpperCase() + theType.slice(1) + ' up to ' + weight;
  }

  canFit(offer: Offer, products: IItems): boolean {
    let packer = new Packer();
    if (!isNaN(offer.additionalRule?.maxTotalDimension)) {
      let maxHeight = 0;
      let maxWidth = 0;
      let maxDepth = 0;
      products.forEach(element => {
        let array = [element.height, element.width, element.depth];
        let height = Math.max.apply(null, array);
        array.splice(array.indexOf(height), 1);
        let width = Math.max.apply(null, array);
        maxHeight = height > maxHeight ? height : maxHeight;
        maxWidth = width > maxWidth ? width : maxWidth;
      });
      if (offer.additionalRule.ruleType === 'L+W+H') {
        if (maxHeight > offer.additionalRule.maxSide) return false;
        maxDepth = offer.additionalRule.maxTotalDimension - maxHeight - maxWidth;
        if (maxDepth <= 0) return false;
      }
      else if (offer.additionalRule.ruleType === 'L+2xW+2xH') {
        if (maxHeight > offer.additionalRule.maxHeight) return false;
        if (maxWidth > offer.additionalRule.maxWidth) return false;
        maxDepth = offer.additionalRule.maxTotalDimension - maxHeight - 2 * maxWidth;
        if (maxDepth <= 0) return false;
        maxDepth = maxDepth / 2;
        if (maxDepth > offer.additionalRule.maxDepth) return false;
      }
      offer.height = maxHeight;
      offer.width = maxWidth;
      offer.depth = maxDepth;
    }
    let bin = new Bin(offer.name, offer.width, offer.height, offer.depth, offer.maxWeight);
    packer.addBin(bin);
    products.forEach(element => {
      for(let i = 1; i <= element.quantity; i++) {
        packer.addItem(new Item(element.sku + ' (' + i.toString() + ')', element.width, element.height, element.depth, element.weight));
      }
    });
    return packer.pack().length == 0;
  }

  get(products: IItems) {
    // Compute total weight of products; Find zone containing shipping country
    const weight: Gram = products.reduce((a, p) => a + p.quantity * p.weight, 0);
    const [zoneName, zone] = Object.entries(this._source.zones)
      .find(([key, val]) => val.countryCodes.includes(this._shipping.destinationCountry));

    if (Array.isArray(zone.offers)) {
      const offers: OfferArray = zone.offers;
      let offer: Offer = null;
      offers.forEach(element => {
        if (offer === null && this.canFit(element, products)) {
          offer = element;
        }
      });
      if (!offer) {
        throw new Error('Too Heavy! ' + weight + ' > ' + Math.max(...offers.map(o => o.maxWeight)) + '; weight > maxWeight');
      }

      return {
        price: new Decimal(offer.price),
        maxWeight: offer.maxWeight,
        zone: zoneName,
        type: offer.type,
        height: offer.height,
        width: offer.width,
        depth: offer.depth,
        human: {
          zone: zone.name || zoneName,
          offer: offer.name || this.stringifyOffer(offer.type, offer.maxWeight)
        }
      };

    } else {
      const rules: OfferRule = zone.offers;
      if (weight > rules.maxWeight) {
        throw new Error('Too Heavy! ' + weight + ' > ' + rules.maxWeight + '; weight > maxWeight');
      }
      const offerWeight = Math.min(Math.ceil(weight / rules.stepWeight) * rules.stepWeight, rules.maxWeight);

      return {
        price: new Decimal(offerWeight).div(rules.stepWeight).mul(rules.stepPrice).plus(rules.basePrice),
        maxWeight: offerWeight,
        zone: zoneName,
        type: rules.type,
        human: {
          zone: zone.name || zoneName,
          offer: this.stringifyOffer(rules.type, offerWeight)
        }
      };
    }
  }
}
