import * as store from 'store';
import { ISerializer } from '../ISerializer';
import { ICart } from '../ICart';

const numericItemKeys = [
  'quantity',
  'weight',
  'height',
  'width',
  'depth'
];

export class LocalSerializer implements ISerializer {

  deserialize(str: string): ICart {
    try {
      return JSON.parse(str);
    } catch (e) {
    }

    return undefined;
  }

  serialize(cart: ICart): string {
    return JSON.stringify(cart);
  }

  clear() {
    // todo change to null
    this.save(undefined);
  }

  load(cart: ICart) {
    let data = store.get('cart');
    if (data) {
      data = this.deserialize(data);
    }

    if (!data || typeof data === 'undefined' || data.version !== cart.version) {
      cart.setItems([]);
      this.save(cart);
    } else {
      if ('_items' in data) {
        // Make sure all numerical values are not strings
        for (let item of data._items) {
          for (let key of numericItemKeys) {
            if (key in item && typeof(item[key]) != 'number') {
              item[key] = parseFloat(item[key].toString());
            }
          }
        }
      }

      Object.keys(data).filter(key => key !== '_serializer').forEach(key => cart[key] = data[key]);
    }
  }

  save(cart: ICart) {
    store.set('cart', this.serialize(cart));
  }
}
