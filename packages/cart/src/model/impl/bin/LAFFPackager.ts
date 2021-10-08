import { Box } from './Box';
import { Dimension } from './Dimension';
import { Container } from './Container';
import { Space } from './Space';
import { Placement } from './Placement';
import { BoxItem } from './BoxItem';
import { LAFFResult } from './LAFFResult';
import { Packager } from './Packager';
import { LAFFAdapter } from './LLAFFAdapter';

export interface Adapter {
  accepted(result: PackResult): Container;
  attempt(containerIndex: number): PackResult;
  hasMore(result: PackResult): boolean;
}

export interface PackResult {
  packsMoreBoxesThan(result: PackResult): boolean;
  isEmpty(): boolean;
}

export class LargestAreaFitFirstPackager extends Packager {

  /**
   * Constructor
   *
   * @param containers list of containers
   * @param footprintFirst start with box which has the largest footprint. If not, the highest box is first.
   * @param rotate3D whether boxes can be rotated in all three directions (two directions otherwise)
   * @param binarySearch if true, the packager attempts to find the best box given a binary search. Upon finding a container that can hold the boxes, given time, it also tries to find a better match.
   */

  private footprintFirst: boolean;

  constructor(containers: Container[], rotate3D: boolean, footprintFirst: boolean, binarySearch: boolean) {
    super(containers, rotate3D, binarySearch);

    this.footprintFirst = footprintFirst;
  }

  /**
   *
   * Return a container which holds all the boxes in the argument
   *
   * @param containerProducts list of boxes to fit in a container.
   * @param targetContainer the container to fit within
   * @return null if no match, or deadline reached
   */

  public packProducts(containerProducts: Box[], targetContainer: Container): LAFFResult {
    const holder = targetContainer.clone();

    let freeSpace: Dimension = targetContainer;

    while (containerProducts.length != 0) {
      // choose the box with the largest surface area, that fits
      // if the same then the one with minimum height
      let currentIndex = this.getBestBox(holder, freeSpace, containerProducts);

      if (currentIndex == -1) {
        break;
      }

      let currentBox = containerProducts[currentIndex];

      // current box should have the optimal orientation already
      // create a space which holds the full level
      let levelSpace = new Space(
        null,
        '',
        targetContainer.getWidth(),
        targetContainer.getDepth(),
        currentBox.getHeight(),
        0,
        0,
        holder.getStackHeight()
      );

      holder.addLevel();
      containerProducts.splice(currentIndex, 1);

      if (!this.fit2D(containerProducts, holder, currentBox, levelSpace)) {
        return null;
      }

      freeSpace = holder.getFreeLevelSpace();
    }

    return new LAFFResult(containerProducts, holder);
  }

  protected getBestBox(holder: Container, freeSpace: Dimension, containerProducts: Box[]): number {
    // use a special case for boxes with full height
    let currentIndex = -1;

    let fullHeight = false;

    for (let i = 0; i < containerProducts.length; i++) {
      let box = containerProducts[i];

      let fits: boolean;
      if (this.rotate3D) {
        fits = box.rotateLargestFootprint3DDimension(freeSpace);
      } else {
        fits = box.fitRotate2DDimension(freeSpace);
      }
      if (fits && box.getWeight() <= holder.getFreeWeight()) {
        if (currentIndex == -1) {
          currentIndex = i;

          fullHeight = box.getHeight() == freeSpace.getHeight();
        } else {
          if (fullHeight) {
            if (box.getHeight() == freeSpace.getHeight()) {
              if (containerProducts[currentIndex].getFootprint() < box.getFootprint()) {
                currentIndex = i;
              }
            }
          } else {
            if (box.getHeight() == freeSpace.getHeight()) {
              fullHeight = true;

              currentIndex = i;
            } else if (this.footprintFirst) {
              if (containerProducts[currentIndex].getFootprint() < box.getFootprint()) {
                currentIndex = i;
              } else if (containerProducts[currentIndex].getFootprint() == box.getFootprint() && containerProducts[currentIndex].getHeight() < box.getHeight()) {
                currentIndex = i;
              }
            } else {
              if (containerProducts[currentIndex].getHeight() < box.getHeight()) {
                currentIndex = i;
              } else if (containerProducts[currentIndex].getHeight() == box.getHeight() && containerProducts[currentIndex].getFootprint() < box.getFootprint()) {
                currentIndex = i;
              }
            }
          }
        }
      }
    }
    return currentIndex;
  }

  /**
   * Remove from list, more explicit implementation than {@linkplain List#remove} with no equals.
   * @param containerProducts list of products
   * @param currentBox item to remove
   */
  removeIdentical(containerProducts: Box[], currentBox: Box) {
    for (let i = 0; i < containerProducts.length; i++) {
      if (containerProducts[i] == currentBox) {
        containerProducts.splice(i, 1);

        return;
      }
    }
    throw new Error();
  }

  /**
   * Fit in two dimensions
   *
   * @param containerProducts products to fit
   * @param holder target container
   * @param usedSpace space to subtract
   * @param freeSpace available space
   * @return false if interrupted
   */

  fit2D(containerProducts: Box[], holder: Container, usedSpace: Box, freeSpace: Space): boolean {

    if (this.rotate3D) {
      // minimize footprint
      usedSpace.fitRotate3DSmallestFootprintDimension(freeSpace);
    }

    // make sure the used space fits in the free space
    usedSpace.fitRotate2DDimension(freeSpace);

    // add used space box now, but possibly rotate later - this depends on the actual remaining free space selected further down
    // there is up to possible 4 free spaces, 2 in which the used space box is rotated
    holder.addPlacement(new Placement(freeSpace, usedSpace));

    if (containerProducts.length == 0) {
      // no additional boxes

      return true;
    }

    let spaces = this.getFreespaces(freeSpace, usedSpace);

    let primaryPlacement = this.getBestBoxAndSpace(containerProducts, spaces, holder.getFreeWeight());
    if (primaryPlacement == null) {
      // no additional boxes along the level floor (x,y)
      // just make sure the used space fits in the free space
      usedSpace.fitRotate2DDimension(freeSpace);
    } else {
      // check whether the selected free space requires the used space box to be rotated
      if (primaryPlacement.getSpace() == spaces[2] || primaryPlacement.getSpace() == spaces[3]) {
        // the desired space implies that we rotate the used space box
        usedSpace.rotate2D();
      }

      // holder.validateCurrentLevel(); // uncomment for debugging

      this.removeIdentical(containerProducts, primaryPlacement.getBox());

      // unused dual / remaining space
      let currentLevel = holder.currentLevel();
      let count = currentLevel.length;

      if (!this.fit2D(containerProducts, holder, primaryPlacement.getBox(), primaryPlacement.getSpace())) {
        return false; // time is up
      }

      // stack in the 'sibling' space - the space left over between the used box and the selected free space
      let remainder = primaryPlacement.getSpace().getRemainder();
      if (remainder.nonEmpty()) {
        let remainderBox = this.getBestBoxForSpace(containerProducts, remainder, holder.getFreeWeight());
        if (remainderBox != null) {
          this.removeIdentical(containerProducts, remainderBox);

          // fit in remainder
          if (!this.fit2D(containerProducts, holder, remainderBox, remainder)) {
            return false; // time is up
          }
        } else {
          // is it possible to expand the remainder / secondary
          // with space not used in the primary space?
          //
          // No rotation:
          // ........................  ........................                .............
          // .                      .  .                      .                .           .
          // .                      .  .                      .                .           .
          // .          A           .  .          A           .                .           .
          // .                      .  .                      .                .           .
          // .                B     .  .                      .                .    B      .
          // ............           .  ........................                .           .
          // .          .           .                                          .           .
          // .          .           .                                          .           .
          // ........................                                          .............
          //
          // With remainders shown as 'r' and the expansion area as double quoted:
          //
          //                           ........................    .........................
          //                           .          .           .    .           .           .
          //                           .          .           .    .           .           .
          //                           .     A'   .    A''    .    .    r      .   B''     .
          //                           .          .           .    .           .           .
          //    depth                  .          .           .    .           .           .
          //      ^                    ........................    .........................
          //      |                               .           .                .           .
          //      |                               .    r      .                .    B'     .
          //       ---> width                     .............                .............
          //
          // Rotation (placed box is rotated 90 degrees):
          //
          // ........................   ........................          ..................
          // .                      .   .                      .          .                .
          // .          C           .   .         C            .          .                .
          // .                      .   .                      .          .                .
          // .......                .   ........................          .                .
          // .     .       D        .                                     .        D       .
          // .     .                .                                     .                .
          // .     .                .                                     .                .
          // .     .                .                                     .                .
          // ........................                                     ..................
          //
          // With remainders shown as 'r' and the expansion area as double quoted:
          //
          //                           .........................  ..........................
          //                           .      .                .  .       .                .
          //                           .  C'  .      C''       .  .  r    .     D''        .
          //                           .      .                .  .       .                .
          //                           .........................  ..........................
          //      depth                       .                .          .                .
          //       ^                          .                .          .                .
          //       |                          .       r        .          .      D'        .
          //       |                          .                .          .                .
          //        ----> width               ..................          ..................
          //
          // So if all remainders are expanded with the double quoted area,
          // the maximum available space for the remainder is the 'sibling' free space
          // which is known to be non-empty since there is a remainder.
          //
          // Cutting out the area actually in use will be done in a bounding box way,
          // separately for width and depth.
          //
          // Cutting stop conditions (most easily seen in C and D):
          //
          // C:
          //  - depth cuts: depth equals to remainder depth
          //  - width cuts: width equal to zero
          //
          // D:
          //  - depth cuts: depth equals to zero
          //  - width cuts: width equal to remainder width
          //

          let siblingIndex = this.getSiblingIndex(spaces, primaryPlacement);
          let sibling = spaces[siblingIndex];

          // cut out the area which is already in use, leaving two edges
          let depthRemainder = sibling; //
          let widthRemainder = new Space(sibling, '', 0, 0, 0, 0, 0, 0); // TODO reuse remainder space object for improved performance

          let widthConstraint: number;
          if (siblingIndex % 2 == 0) { // A and C
            widthConstraint = 0;
          } else {
            widthConstraint = remainder.getWidth();
          }
          for (let i = count; i < currentLevel.length; i++) {
            let placement = currentLevel[i];

            if (widthRemainder.intersectsYPlacement(placement) && widthRemainder.intersectsXPlacement(placement)) {
              // there is overlap, subtract area
              widthRemainder.subtractX(placement);

              if (widthRemainder.getWidth() <= widthConstraint) {
                break;
              }
            }
          }

          let depthConstraint: number;
          if (siblingIndex % 2 == 0) { // A and C
            depthConstraint = remainder.getDepth();
          } else {
            depthConstraint = 0;
          }
          for (let i = count; i < currentLevel.length; i++) {
            let placement = currentLevel[i];

            if (depthRemainder.intersectsYPlacement(placement) && depthRemainder.intersectsXPlacement(placement)) {
              // there is overlap, subtract area
              depthRemainder.subtractY(placement);

              if (depthRemainder.getDepth() <= depthConstraint) {
                break;
              }
            }
          }

          let nextBox: Box = null;

          let widthRemainderBox: Box = null;
          let depthRemainderBox: Box = null;

          let nextSpace: Space = null;

          if (widthRemainder.nonEmpty()) {
            widthRemainderBox = this.getBestBoxForSpace(containerProducts, widthRemainder, holder.getFreeWeight());
          }
          if (depthRemainder.nonEmpty()) {
            depthRemainderBox = this.getBestBoxForSpace(containerProducts, depthRemainder, holder.getFreeWeight());
          }

          if (depthRemainderBox != null && (widthRemainderBox == null || depthRemainder.getVolume() > widthRemainder.getVolume())) {
            nextSpace = depthRemainder;
            nextBox = depthRemainderBox;

            // subtract primary space size
            let primary = primaryPlacement.getSpace();
            primary.setWidth(primary.getWidth() - (depthRemainder.getWidth() - remainder.getWidth()));
          } else if (widthRemainderBox != null) {
            nextSpace = widthRemainder;
            nextBox = widthRemainderBox;

            // subtract primary space size
            let primary = primaryPlacement.getSpace();
            primary.setDepth(primary.getDepth() - (widthRemainder.getDepth() - remainder.getDepth()));
          }

          if (nextBox != null) {
            this.removeIdentical(containerProducts, nextBox);

            // fit in (potentially expanded) remainder
            if (!this.fit2D(containerProducts, holder, nextBox, nextSpace)) {
              return false; // time is up
            }
          }
        }
      }
    }

    // also use the space above the placed box, if any.
    if (freeSpace.getHeight() > usedSpace.getHeight()) {
      // so there is some free room; between the used space and the level height

      // the level by level approach is somewhat crude, but at least some of the inefficiency
      // can be avoided this way
      let above: Space;
      if (primaryPlacement == null) {
        // full width / depth
        above = new Space(
          null,
          '',
          freeSpace.getWidth(),
          freeSpace.getDepth(),
          freeSpace.getHeight() - usedSpace.getHeight(),
          freeSpace.getX(),
          freeSpace.getY(),
          freeSpace.getZ() + usedSpace.getHeight()
        );
      } else {
        // just directly above the used space

        // TODO possible include the sibling space if no box was fitted there
        above = new Space(
          null,
          '',
          usedSpace.getWidth(),
          usedSpace.getDepth(),
          freeSpace.getHeight() - usedSpace.getHeight(),
          freeSpace.getX(),
          freeSpace.getY(),
          freeSpace.getZ() + usedSpace.getHeight()
        );
      }
      let currentIndex = this.getBestBox(holder, above, containerProducts);

      if (currentIndex != -1) {
        // should be within weight already
        let currentBox = containerProducts[currentIndex];

        containerProducts.splice(currentIndex, 1);

        if (!this.fit2D(containerProducts, holder, currentBox, above)) {
          return false;
        }
      }
    }

    return true;
  }

  getSiblingIndex(spaces: Space[], nextPlacement: Placement): number {
    let nextPlacementSpace = nextPlacement.getSpace();
    if (nextPlacementSpace == spaces[0]) {
      return 1;
    } else if (nextPlacementSpace == spaces[1]) {
      return 0;
    } else if (nextPlacementSpace == spaces[2]) {
      return 3;
    } else { // if(nextPlacementSpace == spaces[3]) {
      return 2;
    }
  }

  getFreespaces(freespace: Space, used: Box): Space[] {

    // Two free spaces, on each rotation of the used space.
    // Height is always the same, used box is assumed within free space height.
    //
    // No rotation:
    // ........................  ........................                .............
    // .                      .  .                      .                .           .
    // .                      .  .                      .                .           .
    // .          A           .  .          A           .                .           .
    // .                      .  .                      .                .           .
    // .                B     .  .                      .                .    B      .
    // ............           .  ........................                .           .
    // .          .           .                                          .           .
    // .          .           .                                          .           .
    // ........................                                          .............
    //
    // With remainders
    //                                                     .............
    //                                                     .           .
    //      depth                                          .           .
    //        ^                             .............  .    B'     .
    //        |                             .           .  .           .
    //        |                             .    A'     .  .           .
    //         ---> width                   .............  .............
    //
    // Rotation (placed box is rotated 90 degrees):
    //
    // ........................   ........................          ..................
    // .                      .   .                      .          .                .
    // .          C           .   .         C            .          .                .
    // .                      .   .                      .          .                .
    // .......                .   ........................          .                .
    // .     .       D        .                                     .        D       .
    // .     .                .                                     .                .
    // .     .                .                                     .                .
    // .     .                .                                     .                .
    // ........................                                     ..................
    //
    // With remainders
    //                                  ..................  .......
    //                                  .                .  .     .
    //                                  .                .  .     .
    //                                  .       C'       .  .  D' .
    //                                  .                .  .     .
    //                                  ..................  .......
    //
    // So there is always a 'big' and a 'small' remaining / leftover area.

    let freeSpaces: Space[] = [];
    if (freespace.getWidth() >= used.getWidth() && freespace.getDepth() >= used.getDepth()) {

      // if B is empty, then it is sufficient to work with A and the other way around

      // B
      if (freespace.getWidth() > used.getWidth()) {
        let right = new Space(
          null,
          '',
          freespace.getWidth() - used.getWidth(), freespace.getDepth(), freespace.getHeight(),
          freespace.getX() + used.getWidth(), freespace.getY(), freespace.getZ()
        );

        let rightRemainder = new Space(
          null,
          '',
          used.getWidth(), freespace.getDepth() - used.getDepth(), freespace.getHeight(),
          freespace.getX(), freespace.getY() + used.getDepth(), freespace.getZ()
        );
        right.setRemainder(rightRemainder);
        rightRemainder.setRemainder(right);
        freeSpaces[0] = right;
      }

      // A
      if (freespace.getDepth() > used.getDepth()) {
        let top = new Space(
          null,
          '',
          freespace.getWidth(), freespace.getDepth() - used.getDepth(), freespace.getHeight(),
          freespace.getX(), freespace.getY() + used.getDepth(), freespace.getZ()
        );
        let topRemainder = new Space(
          null,
          '',
          freespace.getWidth() - used.getWidth(), used.getDepth(), freespace.getHeight(),
          freespace.getX() + used.getWidth(), freespace.getY(), freespace.getZ()
        );
        top.setRemainder(topRemainder);
        topRemainder.setRemainder(top);
        freeSpaces[1] = top;
      }
    }

    if (freespace.getWidth() >= used.getDepth() && freespace.getDepth() >= used.getWidth()) {
      // if D is empty, then it is sufficient to work with C and the other way around

      // D
      if (freespace.getWidth() > used.getDepth()) {
        let right = new Space(
          null,
          '',
          freespace.getWidth() - used.getDepth(), freespace.getDepth(), freespace.getHeight(),
          freespace.getX() + used.getDepth(), freespace.getY(), freespace.getZ()
        );
        let rightRemainder = new Space(
          null,
          '',
          used.getDepth(), freespace.getDepth() - used.getWidth(), freespace.getHeight(),
          freespace.getX(), freespace.getY() + used.getWidth(), freespace.getZ()
        );
        right.setRemainder(rightRemainder);
        rightRemainder.setRemainder(right);
        freeSpaces[2] = right;
      }

      // C
      if (freespace.getDepth() > used.getWidth()) {
        let top = new Space(
          null,
          '',
          freespace.getWidth(), freespace.getDepth() - used.getWidth(), freespace.getHeight(),
          freespace.getX(), freespace.getY() + used.getWidth(), freespace.getZ()
        );
        let topRemainder = new Space(
          null,
          '',
          freespace.getWidth() - used.getDepth(), used.getWidth(), freespace.getHeight(),
          freespace.getX() + used.getDepth(), freespace.getY(), freespace.getZ()
        );
        top.setRemainder(topRemainder);
        topRemainder.setRemainder(top);
        freeSpaces[3] = top;
      }
    }
    return freeSpaces;
  }

  getBestBoxForSpace(containerProducts: Box[], space: Space, freeWeight: number): Box {
    let bestBox: Box = null;

    for (const box of containerProducts) {
      if (box.getWeight() > freeWeight) {
        continue;
      }
      if (this.rotate3D) {
        if (box.canFitInside3D(space)) {
          if (bestBox == null || this.isBetter3D(bestBox, box, space) < 0) {
            bestBox = box;
          }
        }
      } else {
        if (box.canFitInside2D(space)) {
          if (bestBox == null || this.isBetter2D(bestBox, box) < 0) {
            bestBox = box;
          }
        }
      }
    }
    return bestBox;
  }

  /**
   * Is box b better than a?
   *
   * @param a box
   * @param b box
   * @return -1 if b is better, 0 if equal, 1 if b is better
   */

  isBetter2D(a: Box, b: Box): number {
    let compare = a.getVolume() - b.getVolume();
    if (compare != 0) {
      return compare;
    }
    return b.getFootprint() - a.getFootprint(); // i.e. smaller i better

  }

  /**
   * Is box b strictly better than a?
   *
   * @param a box
   * @param b box
   * @param space free space
   * @return -1 if b is better, 0 if equal, 1 if b is better
   */

  isBetter3D(a: Box, b: Box, space: Space): number {
    let compare = a.getVolume() - b.getVolume();
    if (compare != 0) {
      return compare;
    }
    // determine lowest fit
    a.fitRotate3DSmallestFootprintDimension(space);
    b.fitRotate3DSmallestFootprintDimension(space);

    return b.getFootprint() - a.getFootprint(); // i.e. smaller i better
  }

  getBestBoxAndSpace(containerProducts: Box[], spaces: Space[], freeWeight: number): Placement {

    // this method could have many implementation
    // it focuses on getting the biggest box possible fitted.
    //
    // an alternative implementation would be one that
    // measure the amount of wasted space and/or maximizes largest leftover area

    let bestBox: Box = null;
    let bestSpace: Space = null;
    for (const space of spaces) {
      if (space == null) {
        continue;
      }

      let box = this.getBestBoxForSpace(containerProducts, space, freeWeight);
      if (box == null) {
        continue;
      }
      let best: boolean;
      if (bestBox == null) {
        best = true;
      } else {
        let compare: number;
        if (this.rotate3D) {
          compare = this.isBetter3D(bestBox, box, space);
        } else {
          compare = this.isBetter2D(bestBox, box);
        }
        if (compare < 0) {
          best = true;
        } else if (compare == 0) {
          // if all is equal, prefer the box that came closest to one of its edges
          // in the available space

          // TODO this is really a complicated decision, which may not have a definitive right answer (all alternatives must explored)
          best = Math.min(space.getWidth() - box.getWidth(), space.getDepth() - box.getDepth()) < Math.min(bestSpace.getWidth() - bestBox.getWidth(), bestSpace.getDepth() - bestBox.getDepth());
        } else {
          best = false;
        }
      }

      if (best) {
        bestBox = box;
        bestSpace = space;
      }
    }
    if (bestBox != null) {
      if (this.rotate3D) {
        bestBox.fitRotate3DSmallestFootprintDimension(bestSpace);
      }

      return new Placement(bestSpace, bestBox);
    }
    return null;
  }

  public adapter(boxes: BoxItem[], containers: Container[]): Adapter {
    return new LAFFAdapter(boxes, containers, this);
  }

}
