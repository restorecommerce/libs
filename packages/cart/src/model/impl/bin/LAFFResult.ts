import { PackResult } from './LAFFPackager';
import { Box } from './Box';
import { Container } from './Container';

export class LAFFResult implements PackResult {

  private remaining: Box[];
  private container: Container;

  constructor(remaining: Box[], container: Container) {
    this.remaining = remaining;
    this.container = container;
  }

  public getContainer(): Container {
    return this.container;
  }

  public packsMoreBoxesThan(result: PackResult): boolean {
    return (result as LAFFResult).remaining.length > this.remaining.length;
  }

  public getRemainingBoxes(): Box[] {
    return this.remaining;
  }

  public isEmpty(): boolean {
    return this.container.getLevels().length == 0 || this.container.getLevels()[0].length == 0;
  }


}
