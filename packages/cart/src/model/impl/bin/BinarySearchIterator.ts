export class BinarySearchIterator {

  private low: number;
  private high: number;
  private mid: number;

  constructor(low: number, high: number) {
    this.low = low;
    this.high = high;
  }

  public next(): number {
    return this.mid = this.low + (this.high - this.low) / 2;
  }

  public lower() {
    this.high = this.mid - 1;
  }

  public higher() {
    this.low = this.mid + 1;
  }

  public hasNext(): boolean {
    return this.low <= this.high;
  }

  public reset(high: number, low: number) {
    this.high = high;
    this.low = low;
  }

}
