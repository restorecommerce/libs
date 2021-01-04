import { Bin } from './Bin';
import { StartPosition, WidthAxis, HeightAxis, DepthAxis, Item } from './Item';

export class Packer {
  bin: Bin = null;
  items: Item[] = [];

  addBin(bin: Bin): void {
    this.bin = bin;
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  packToBin(b: Bin, items: Item[]): Item[] {
    let unpacked: Item[] = [];
    let fit = b.weighItem(items[0]) && b.putItem(items[0], StartPosition);
    if (!fit) {
      return this.items;
    }
    // Pack unpacked items.
    for (let _i=1; _i < this.items.length; _i++) {
      let fitted = false;
      let item = this.items[_i];

      if (b.weighItem(item)) {
        // Try available pivots in current bin that are not intersect with
        // existing items in current bin.
        lookup:
        for (let _pt=0; _pt < 3; _pt++) {
          for (let _j=0; _j < b.items.length; _j++) {
            let pv;
            let ib = b.items[_j];
            switch (_pt) {
              case WidthAxis:
                pv = [ib.position[0] + ib.getWidth(), ib.position[1], ib.position[2]];
                break;
              case HeightAxis:
                pv = [ib.position[0], ib.position[1] + ib.getHeight(), ib.position[2]];
                break;
              case DepthAxis:
                pv = [ib.position[0], ib.position[1], ib.position[2] + ib.getDepth()];
                break;
            }
            if (b.putItem(item, pv)) {
              fitted = true;
              break lookup;
            }
          }
        }
      }
      if (!fitted) {
        unpacked.push(item);
      }
    }
    return unpacked;
  }

  pack(): Item[] {
    if (this.bin === null) {
      return this.items;
    }
    this.items = this.packToBin(this.bin, this.items);
    return this.items;
  }
}