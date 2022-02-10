import { Gram, PackageType, Decimal, IItems } from '../primitives';
import { IShippingMethod } from '../IShippingMethod';
import { IAddress } from '../IAddress';
import { Container } from './bin/Container';
import { LargestAreaFitFirstPackager } from './bin/LAFFPackager';
import { BoxItem } from './bin/BoxItem';
import { Box } from './bin/Box';
import { Placement } from './bin/Placement';
import { IShippingMethodResult } from '../IShippingMethodResult';

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

  canFit(offers: Offer[], products: IItems): Container[] {
    const containers: Container[] = [];
    let hasVolumeRestrictions = false;

    offers.forEach(offer => {
      if (offer.width || offer.depth || offer.height) {
        hasVolumeRestrictions = true;
      }

      containers.push(new Container(
        offer.name || this.stringifyOffer(offer.type, offer.maxWeight),
        offer.width || Number.MAX_SAFE_INTEGER,
        offer.depth || Number.MAX_SAFE_INTEGER,
        offer.height || Number.MAX_SAFE_INTEGER,
        offer.maxWeight,
        offer
      ));
    });

    containers.sort((a, b) => a.getOffer().price - b.getOffer().price);

    // Use basic packer if no volume restrictions exist
    if (!hasVolumeRestrictions) {
      const sortedContainers = containers.sort((a, b) => a.weight - b.weight);
      const sortedProducts = products.sort((a, b) => b.weight - a.weight)
        .map(a => (Array(a.quantity) as IItems).fill({
          ...a,
          quantity: 1
        }))
        .flat();

      const result: Container[] = [];
      while (sortedProducts.length > 0) {
        const totalWeight = sortedProducts.reduce((sum, item) => sum + item.weight, 0);

        let container = sortedContainers.find(c => c.weight > totalWeight);
        if (!container) {
          container = sortedContainers[sortedContainers.length - 1];
        }

        container = container.clone();
        container.addLevel();

        let currentWeight = 0;
        let count = 0;
        for (let i = 0; i < sortedProducts.length; i++) {
          const p = sortedProducts[i];
          if (currentWeight + p.weight > container.weight) {
            if (currentWeight == 0) {
              // Item too heavy for any container
              return [];
            }
            break;
          }

          container.addPlacement(new Placement(null, new Box(p.sku, p.width, p.depth, p.height, p.weight)));
          currentWeight += p.weight;
          count++;
        }

        sortedProducts.splice(0, count);
        result.push(container);
      }

      return result;
    }

    // Only rotate if working with a small order
    const rotate3D = products.reduce((sum, item) => sum + item.quantity, 0) < 300;
    const packager = new LargestAreaFitFirstPackager(containers, rotate3D, true, true);

    const items = products.map(p => new BoxItem(new Box(p.sku, p.width, p.depth, p.height, p.weight), p.quantity));
    const match = packager.packList(items, Number.MAX_SAFE_INTEGER);
    if (match) {
      return match;
    }

    return [];
  }

  get(products: IItems): IShippingMethodResult {
    // Compute total weight of products; Find zone containing shipping country
    const weight: Gram = products.reduce((a, p) => a + p.quantity * p.weight, 0);
    const [zoneName, zone] = Object.entries(this._source.zones)
      .find(([key, val]) => val.countryCodes.includes(this._shipping.destinationCountry));

    if (Array.isArray(zone.offers)) {
      const offers: OfferArray = zone.offers;

      const containers = this.canFit(offers.filter(o => !!o), products);
      if (containers.length == 0) {
        throw new Error('Too Heavy! ' + weight + ' > ' + Math.max(...offers.map(o => o.maxWeight)) + '; weight > maxWeight');
      }

      return {
        zone: zoneName,
        human: {
          zone: zone.name || zoneName,
        },
        offers: containers.map(container => {
          const offer = container.getOffer();
          return {
            price: new Decimal(offer.price),
            maxWeight: offer.maxWeight,
            type: offer.type,
            height: offer.height,
            width: offer.width,
            depth: offer.depth,
            human: {
              offer: offer.name || this.stringifyOffer(offer.type, offer.maxWeight)
            }
          };
        }),
      };

    } else {
      const rules: OfferRule = zone.offers;
      if (weight > rules.maxWeight) {
        throw new Error('Too Heavy! ' + weight + ' > ' + rules.maxWeight + '; weight > maxWeight');
      }
      const offerWeight = Math.min(Math.ceil(weight / rules.stepWeight) * rules.stepWeight, rules.maxWeight);

      return {
        zone: zoneName,
        human: {
          zone: zone.name || zoneName,
        },
        offers: [{
          price: new Decimal(offerWeight).div(rules.stepWeight).mul(rules.stepPrice).plus(rules.basePrice),
          maxWeight: offerWeight,
          type: rules.type,
          human: {
            offer: this.stringifyOffer(rules.type, offerWeight)
          }
        }]
      };
    }
  }
}
