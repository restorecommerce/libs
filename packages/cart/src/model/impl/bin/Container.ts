import { Box } from './Box';
import { Dimension } from './Dimension';
import { Placement } from './Placement';
import { Level } from './Level';
import { Offer } from '../Courier';

export class Container extends Box {

  protected stackWeight = 0;
  protected stackHeight = 0;
  protected levels: Level[] = [];
  protected offer: Offer;

  /**
   * Construct new instance.
   *
   * @param name container name
   * @param w width
   * @param d depth
   * @param h height
   * @param weight maximum weight the container can hold
   * @param offer offer
   */
  constructor(name: string, w: number, d: number, h: number, weight: number, offer: Offer) {
    super(name, w, d, h, weight);
    this.offer = offer;
  }

  /**
   * The 6 different possible rotations. If two of the sides are equal, there are only 3 possible orientations.
   * If all sides is equal, there is only 1 possible orientation.
   *
   * It is sometimes useful to pass this list to the {@link LargestAreaFitFirstPackager}
   * since it has a better chance to find a packaging than with a single container.
   * @return list of containers in all 6 rotations.
   */
  rotations(): Container[] {
    const result: Container[] = [];
    let box = this.clone();
    const square0 = box.isSquare2D();

    result.push(box);

    if (!box.isSquare3D()) {

      box = box.clone().rotate3D();
      const square1 = box.isSquare2D();

      result.push(box);

      box = box.clone().rotate3D();
      const square2 = box.isSquare2D();

      result.push(box);

      if (!square0 && !square1 && !square2) {
        box = box.clone().rotate2D3D();
        result.push(box);

        box = box.clone().rotate3D();
        result.push(box);

        box = box.clone().rotate3D();
        result.push(box);
      }
    }
    return result;
  }

  add(element: Level) {
    if (this.levels.length > 0) {
      this.stackHeight += this.currentLevelStackHeight();
      this.stackWeight += this.currentLevelStackWeight();
    }

    this.levels.push(element);
  }

  currentLevel(): Level {
    if (this.levels.length > 0) {
      return this.levels[this.levels.length - 1];
    }
    return null;
  }

  getStackHeight(): number {
    return this.stackHeight + this.currentLevelStackHeight();
  }

  getStackWeight(): number {
    return this.stackWeight + this.currentLevelStackWeight();
  }

  getOffer(): Offer {
    return this.offer;
  }

  currentLevelStackHeight(): number {
    if (this.levels.length == 0) {
      return 0;
    }
    return this.levels[this.levels.length - 1].getHeight();
  }

  currentLevelStackWeight(): number {
    if (this.levels.length == 0) {
      return 0;
    }
    return this.levels[this.levels.length - 1].getWeight();
  }

  addPlacement(placement: Placement) {
    this.levels[this.levels.length - 1].push(placement);
  }

  addLevel(): Level {
    const level = new Level();
    this.add(level);
    return level;
  }

  /**
   * Get the free level space, i.e. container height with height of
   * levels subtracted.
   *
   * @return free height and box dimension
   */

  getFreeLevelSpace(): Dimension {
    if (this.levels.length == 0) {
      return this;
    }
    const remainder = this.height - this.getStackHeight();
    if (remainder < 0) {
      throw new Error('Remaining free space is negative at ' + remainder + ' for ' + this);
    }
    return new Dimension('', this.width, this.depth, remainder);
  }

  getFreeWeight(): number {
    const remainder = this.weight - this.getStackWeight();
    if (remainder < 0) {
      throw new Error('Remaining weight is negative at ' + remainder);
    }
    return remainder;
  }

  getLevels(): Level[] {
    return this.levels;
  }

  get(level: number, placement: number): Placement {
    return this.levels[level][placement];
  }

  clear() {
    this.levels = [];
    this.stackHeight = 0;
    this.stackWeight = 0;
  }

  getBoxCount(): number {
    let count = 0;
    for (const level of this.levels) {
      count += level.length;
    }
    return count;
  }

  getUsedSpace(): Dimension {
    let maxBox = Dimension.EMPTY;
    for (const level of this.levels) {
      maxBox = this.getUsedSpaceLevel(level, maxBox);
    }
    return maxBox;
  }

  getUsedSpaceLevel(level: Level, maxBox: Dimension): Dimension {
    for (const placement of level) {
      maxBox = this.boundingBox(maxBox, this.getOutmostCorner(placement));
    }
    return maxBox;
  }

  getOutmostCorner(placement: Placement): Dimension {
    const box = placement.getBox();
    const space = placement.getSpace();
    return new Dimension('',
      space.getX() + box.getWidth(),
      space.getY() + box.getDepth(),
      space.getZ() + box.getHeight());
  }

  boundingBox(b1: Dimension, b2: Dimension): Dimension {
    return new Dimension('',
      Math.max(b1.getWidth(), b2.getWidth()),
      Math.max(b1.getDepth(), b2.getDepth()),
      Math.max(b1.getHeight(), b2.getHeight()));
  }

  clone(): Container {
    // shallow clone
    return new Container(this.name, this.width, this.depth, this.height, this.weight, this.offer);
  }

  rotate3D(): Container {
    return super.rotate3D() as Container;
  }

  rotate2D(): Container {
    return super.rotate2D() as Container;
  }

  rotate2D3D(): Container {
    return super.rotate2D3D() as Container;
  }

  removeLevel(index: number) {
    const level = this.levels.splice(index, 1)[0];
    if (index != this.levels.length) {
      this.stackHeight -= level.getHeight();
      this.stackWeight -= level.getWeight();
    }
  }

  /**
   * Clear levels up to and including a number of boxes
   *
   * @param limit number of boxes to keep
   * @return number of boxes kept
   */

  clearLevelsForBoxes(limit: number): number {
    let count = 0;
    let i = 0;
    while (limit > count && i < this.levels.length) {
      count += this.levels[i].length;

      i++;
    }

    i--;
    if (count == limit) {
      // see if we can keep the last level
      // if so there must be no free space in it
      const level = this.levels[i];

      let v = (this.volume / this.height) * level.getHeight();
      for (const p of level) {
        v -= p.getBox().getVolume();
      }

      if (v == 0) {
        // keep last level
        i++;
      } else {
        // discard also the last level
        count -= this.levels[i].length;
      }
    } else {
      // discard also the last level
      count -= this.levels[i].length;
    }

    while (i < this.levels.length) {
      this.removeLevel(i);
    }

    return count;
  }

  toJSON() {
    let steps = 2;
    return {
      type: 'container',
      dx: this.width,
      dy: this.depth,
      dz: this.height,
      loadDx: this.width,
      loadDy: this.depth,
      loadDz: this.height,
      id: this.name,
      name: this.name,
      step: 0,
      plugins: [] as any[],
      stack: {
        step: 1,
        id: null as any,
        name: null as any,
        plugins: [] as any[],
        placements: this.levels.map(level => {
          return level.map(placement => {
            const step = steps++;
            return {
              step,
              id: null,
              name: null,
              plugins: [],
              x: placement.getAbsoluteX(),
              y: placement.getAbsoluteY(),
              z: placement.getAbsoluteZ(),
              stackable: {
                step,
                name: placement.getBox().getName(),
                id: placement.getBox().getName(),
                dx: placement.getBox().getWidth(),
                dy: placement.getBox().getDepth(),
                dz: placement.getBox().getHeight(),
                type: 'box'
              }
            };
          });
        }).flat()
      }
    };
  }
}
