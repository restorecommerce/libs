import { Box } from './Box';
import { LAFFResult } from './LAFFResult';
import { Container } from './Container';
import { BoxItem } from './BoxItem';
import { Adapter, LargestAreaFitFirstPackager, PackResult } from './LAFFPackager';

export class LAFFAdapter implements Adapter {

  private boxes: Box[];
  private previous: LAFFResult;
  private containers: Container[];
  private self: LargestAreaFitFirstPackager;

  constructor(boxItems: BoxItem[], container: Container[], self: LargestAreaFitFirstPackager) {
    this.containers = container;
    this.self = self;

    let boxClones: Box[] = [];

    for (const item of boxItems) {
      let box = item.getBox();
      boxClones.push(box);
      for (let i = 1; i < item.getCount(); i++) {
        boxClones.push(box.clone());
      }
    }

    this.boxes = boxClones;
  }

  public attempt(index: number): PackResult {
    let result = this.self.packProducts([...this.boxes], this.containers[index]);

    return this.previous = result;
  }

  public accepted(result: PackResult): Container {
    let laffResult = result as LAFFResult;

    this.boxes = laffResult.getRemainingBoxes();

    if (this.previous == result) {
      return laffResult.getContainer();
    }

    // calculate again
    let container = laffResult.getContainer();
    let boxes: Box[] = [];
    for (const level of container.getLevels()) {
      for (const placement of level) {
        boxes.push(placement.getBox());
      }
    }

    container.clear();

    const pack = this.self.packProducts(boxes, container);

    return pack.getContainer();
  }

  public hasMore(result: PackResult): boolean {
    const laffResult = result as LAFFResult;
    return laffResult.getRemainingBoxes().length != 0;
  }

}
