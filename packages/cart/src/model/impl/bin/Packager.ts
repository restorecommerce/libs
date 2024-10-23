import { Container } from './Container';
import { BoxItem } from './BoxItem';
import { Box } from './Box';
import { Adapter, PackResult } from './LAFFPackager';
import { Placement } from './Placement';
import { Space } from './Space';
import { BinarySearchIterator } from './BinarySearchIterator';

export class EmptyPackResult implements PackResult {

  public packsMoreBoxesThan(result: PackResult): boolean {
    return false;
  }

  public isEmpty(): boolean {
    return true;
  }

}

export abstract class Packager {

  protected static EMPTY_PACK_RESULT = new EmptyPackResult();

  protected containers: Container[];
  protected rotate3D: boolean; // if false, then 2d
  protected binarySearch: boolean;

  /**
   * Constructor
   *
   * @param containers   list of containers
   * @param rotate3D     whether boxes can be rotated in all three directions (two directions otherwise)
   * @param binarySearch if true, the packager attempts to find the best box given a binary search. Upon finding a
   *                     match, it searches the preceding boxes as well, until the deadline is passed.
   */

  constructor(containers: Container[], rotate3D: boolean, binarySearch: boolean) {
    this.containers = [...containers];
    this.rotate3D = rotate3D;
    this.binarySearch = binarySearch;

    let maxVolume = Number.MIN_SAFE_INTEGER;
    let maxWeight = Number.MIN_SAFE_INTEGER;

    for (const container of containers) {
      // volume
      const boxVolume = container.getVolume();
      if (boxVolume > maxVolume) {
        maxVolume = boxVolume;
      }

      // weight
      const boxWeight = container.getWeight();
      if (boxWeight > maxWeight) {
        maxWeight = boxWeight;
      }
    }
  }

  /**
   * Return a container which holds all the boxes in the argument
   *
   * @param boxes      list of boxes to fit in a container
   * @param containers list of containers
   * @param deadline   the system time in milliseconds at which the search should be aborted
   * @return index of container if match, -1 if not
   */

  public pack(boxes: BoxItem[]): Container {
    const containers = this.filterByVolumeAndWeight(Packager.toBoxes(boxes, false), [...this.containers], 1);
    if (containers.length == 0) {
      return null;
    }

    const pack = this.adapter(boxes, containers);

    if (!this.binarySearch || containers.length <= 2) {
      for (let i = 0; i < containers.length; i++) {
        const result = pack.attempt(i);
        if (result == null) {
          return null; // timeout
        }

        if (!pack.hasMore(result)) {
          return pack.accepted(result);
        }
      }
    } else {
      // perform a binary search among the available containers
      // the list is ranked from most desirable to least.
      const results: PackResult[] = [];
      const checked: boolean[] = [];

      const containerIndexes: number[] = [];
      for (let i = 0; i < containers.length; i++) {
        containerIndexes.push(i);
      }

      const iterator = new BinarySearchIterator(0, 0);

      do {
        iterator.reset(containerIndexes.length - 1, 0);

        do {
          const next = iterator.next();
          const mid = containerIndexes[next];

          const result = pack.attempt(mid);
          if (result == null) {
            return null; // timeout
          }
          checked[mid] = true;
          if (!pack.hasMore(result)) {
            results[mid] = result;

            iterator.lower();
          } else {
            iterator.higher();
          }
        } while (iterator.hasNext());

        // halt when have a result, and checked all containers at the lower indexes
        for (let i = 0; i < containerIndexes.length; i++) {
          const integer = containerIndexes[i];
          if (results[integer] != null) {
            // remove end items; we already have a better match
            while (containerIndexes.length > i) {
              containerIndexes.splice(containerIndexes.length - 1, 1);
            }
            break;
          }

          // remove item
          if (checked[integer]) {
            containerIndexes.splice(i, 1);
            i--;
          }
        }
      } while (containerIndexes.length != 0);

      for (const result of results) {
        if (result != null) {
          return pack.accepted(result);
        }
      }
    }
    return null;
  }

  /**
   * Return a list of containers which holds all the boxes in the argument
   *
   * @param boxes     list of boxes to fit in a container
   * @param limit     maximum number of containers
   * @return index of container if match, -1 if not
   */
  public packList(boxes: BoxItem[], limit: number): Container[] {
    const containers = this.filterByVolumeAndWeight(Packager.toBoxes(boxes, true), [...this.containers], limit);
    if (containers.length == 0) {
      return null;
    }

    const pack = this.adapter(boxes, containers);

    const containerPackResults: Container[] = [];

    // binary search: not as simple as in the single-container use-case; discarding containers would need some kind
    // of criteria which could be trivially calculated, perhaps on volume.
    do {
      let best = null;
      for (let i = 0; i < containers.length; i++) {
        const result = pack.attempt(i);
        if (result == null) {
          return null; // timeout
        }

        if (!result.isEmpty()) {
          if (best == null || result.packsMoreBoxesThan(best)) {
            best = result;

            if (!pack.hasMore(best)) { // will not match any better than this
              break;
            }
          }
        }
      }

      if (best == null) {
        // negative result
        return null;
      }

      const end = !pack.hasMore(best);

      containerPackResults.push(pack.accepted(best));

      if (end) {
        // positive result
        return containerPackResults;
      }
    } while (containerPackResults.length < limit);

    return null;
  }

  /**
   * Return a list of containers which can potentially hold the boxes.
   *
   * @param boxes      list of boxes
   * @param containers list of containers
   * @param count      maximum number of possible containers
   * @return list of containers
   */
  private filterByVolumeAndWeight(boxes: Box[], containers: Container[], count: number): Container[] {
    let volume = 0;
    let minVolume = Number.MAX_SAFE_INTEGER;

    let weight = 0;
    let minWeight = Number.MAX_SAFE_INTEGER;

    for (const box of boxes) {
      // volume
      const boxVolume = box.getVolume();
      volume += boxVolume;

      if (boxVolume < minVolume) {
        minVolume = boxVolume;
      }

      // weight
      const boxWeight = box.getWeight();
      weight += boxWeight;

      if (boxWeight < minWeight) {
        minWeight = boxWeight;
      }
    }

    let maxVolume = Number.MIN_SAFE_INTEGER;
    let maxWeight = Number.MIN_SAFE_INTEGER;

    for (const container of containers) {
      // volume
      const boxVolume = container.getVolume();
      if (boxVolume > maxVolume) {
        maxVolume = boxVolume;
      }

      // weight
      const boxWeight = container.getWeight();
      if (boxWeight > maxWeight) {
        maxWeight = boxWeight;
      }
    }

    if (maxVolume * count < volume || maxWeight * count < weight) {
      // no containers will work at current count
      return [];
    }

    const list: Container[] = [];
    for (const container of containers) {
      if (container.getVolume() < minVolume || container.getWeight() < minWeight) {
        // this box cannot even fit a single box
        continue;
      }

      if (container.getVolume() + maxVolume * (count - 1) < volume || container.getWeight() + maxWeight * (count - 1) < weight) {
        // this box cannot be used even together with all biggest boxes
        continue;
      }

      if (count == 1) {
        if (!this.canHoldAll(container, boxes)) {
          continue;
        }
      } else {
        if (!this.canHoldAtLeastOne(container, boxes)) {
          continue;
        }
      }

      list.push(container);
    }

    return list;
  }


  private static toBoxes(boxItems: BoxItem[], clone: boolean): Box[] {
    const boxClones: Box[] = [];

    for (const item of boxItems) {
      const box = item.getBox();
      boxClones.push(box);
      for (let i = 1; i < item.getCount(); i++) {
        boxClones.push(clone ? box : box.clone());
      }
    }
    return boxClones;

  }


  protected abstract adapter(boxes: BoxItem[], containers: Container[]): Adapter;

  private canHoldAll(containerBox: Container, boxes: Box[]): boolean {
    for (const box of boxes) {
      if (containerBox.getWeight() < box.getWeight()) {
        continue;
      }
      if (this.rotate3D) {
        if (!containerBox.canHold3D(box.getWidth(), box.getDepth(), box.getHeight())) {
          return false;
        }
      } else {
        if (!containerBox.canHold2D(box.getWidth(), box.getDepth(), box.getHeight())) {
          return false;
        }
      }
    }
    return true;
  }


  private canHoldAtLeastOne(containerBox: Container, boxes: Box[]): boolean {
    for (const box of boxes) {
      if (containerBox.getWeight() < box.getWeight()) {
        continue;
      }
      if (this.rotate3D) {
        if (containerBox.canHold3D(box.getWidth(), box.getDepth(), box.getHeight())) {
          return true;
        }
      } else {
        if (containerBox.canHold2D(box.getWidth(), box.getDepth(), box.getHeight())) {
          return true;
        }
      }
    }
    return false;
  }

}
