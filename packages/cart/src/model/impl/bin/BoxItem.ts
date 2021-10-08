import { Box } from './Box';

export class BoxItem {

  private count: number;
  private box: Box;

  constructor(box: Box, count: number) {
    this.box = box;
    this.count = count;
  }

  public getCount(): number {
    return this.count;
  }

  public getBox(): Box {
    return this.box;
  }

}
