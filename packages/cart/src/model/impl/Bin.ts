import { Item } from './Item';

export class Bin {
  name = '';
  width = 0;
  height = 0;
  depth = 0;
  maxWeight = 0;
  items: Item[] = [];

  constructor(n, w, h, d, mw) {
    this.name = n;
    this.width = w;
    this.height = h;
    this.depth = d;
    this.maxWeight = mw;
  }

  getName(): string {
    return this.name;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }

  getDepth(): number {
    return this.depth;
  }

  getMaxWeight(): number {
    return this.maxWeight;
  }

  getItems(): Item[] {
    return this.items;
  }

  getVolume(): number {
    return this.getWidth() * this.getHeight() * this.getDepth();
  }

  getPackedWeight(): number {
    return this.items.reduce( ( weight, item ) => weight + item.getWeight(), 0 );
  }

  weighItem(item: Item): number | boolean {
    const maxWeight = this.getMaxWeight();
    return ! maxWeight || item.getWeight() + this.getPackedWeight() <= maxWeight;
  }

  putItem(item: Item, p): boolean {
    let box = this;
    let fit = false;
    item.position = p;
    for (let i=0; i<6; i++) {
      item.rotationType = i;
      let d = item.getDimension();
      if (box.getWidth() < p[0] + d[0] || box.getHeight() < p[1] + d[1] || box.getDepth() < p[2] + d[2]) {
        continue;
      }
      fit = true;
      for (let j=0; j<box.items.length; j++) {
        let _j = box.items[j];
        if (_j.intersect(item)) {
          fit = false;
          break;
        }
      }
      if (fit) {
        box.items.push(item);
      }
      return fit;
    }
    return fit;
  }
}
