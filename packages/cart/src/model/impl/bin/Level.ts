import { Placement } from './Placement';

export class Level extends Array<Placement>{

  public getHeight(): number {
    let height = 0;

    for(const placement of this) {
      let box = placement.getBox();
      if(box.getHeight() > height) {
        height = box.getHeight();
      }
    }

    return height;
  }

  public getWeight(): number {
    let weight = 0;

    for(const placement of this) {
      weight += placement.getBox().getWeight();
    }

    return weight;
  }

  /**
   *
   * Check whether placement is valid, i.e. no overlaps.
   *
   */
  public validate() {
    for(let i = 0; i < this.length; i++) {
      for(let j = 0; j < this.length; j++) {
        if(j == i) {
          if(!this[i].intersects(this[j])) {
            throw new Error();
          }
        } else {
          if(this[i].intersects(this[j])) {
            throw new Error(i + ' vs ' + j + ': ' + this[i] + ' vs ' + this[j]);
          }
        }
      }
    }
  }

}
