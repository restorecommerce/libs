import { Dimension } from './Dimension';

export class Box extends Dimension {

  public weight: number;

  constructor(name: string, w: number, d: number, h: number, weight: number) {
    super(name, w, d, h);
    this.weight = weight;
  }

  /**
   * Rotate box, i.e. in 3D
   *
   * @return this instance
   */
  public rotate3D(): Box {
    const height = this.height;

    this.height = this.width;
    this.width = this.depth;
    this.depth = height;

    return this;
  }

  /**
   * Rotate box to largest footprint (downwards area) within a free space
   *
   * @param dimension space to fit within
   * @return if this object fits within the input dimensions
   */
  rotateLargestFootprint3DDimension(dimension: Dimension): boolean {
    return this.rotateLargestFootprint3D(dimension.getWidth(), dimension.getDepth(), dimension.getHeight());
  }

  private fitsWidthAndDepthDown(w: number, d: number, h: number): boolean {

    if (h < this.height) {
      return false;
    }

    return (d >= this.width && w >= this.depth) || (w >= this.width && d >= this.depth);
  }

  private fitsHeightAndDepthDown(w: number, d: number, h: number): boolean {

    if (h < this.width) {
      return false;
    }

    return (d >= this.height && w >= this.depth) || (w >= this.height && d >= this.depth);
  }

  private fitsHeightAndWidthDown(w: number, d: number, h: number): boolean {

    if (h < this.depth) {
      return false;
    }

    return (d >= this.height && w >= this.width) || (w >= this.height && d >= this.width);
  }

  public rotateLargestFootprint3D(w: number, d: number, h: number): boolean {
    let a = Number.MIN_SAFE_INTEGER;
    if (this.fitsWidthAndDepthDown(w, d, h)) {
      a = this.width * this.depth;
    }

    let b = Number.MIN_SAFE_INTEGER;
    if (this.fitsHeightAndDepthDown(w, d, h)) {
      b = this.height * this.depth;
    }

    let c = Number.MIN_SAFE_INTEGER;
    if (this.fitsHeightAndWidthDown(w, d, h)) {
      c = this.width * this.height;
    }

    if (a == Number.MIN_SAFE_INTEGER && b == Number.MIN_SAFE_INTEGER && c == Number.MIN_SAFE_INTEGER) {
      return false;
    }

    if (a > b && a > c) {
      // no rotate
    } else if (b > c) {
      // rotate once
      this.rotate3D();
    } else {
      this.rotate3D();
      this.rotate3D();
    }

    if (h < this.height) {
      throw new Error('Expected height ' + this.height + ' to fit within height constraint ' + h);
    }

    if (this.width > w || this.depth > d) {
      // use the other orientation
      this.rotate2D();
    }

    if (this.width > w || this.depth > d) {
      throw new Error('Expected width ' + this.width + ' and depth ' + this.depth + ' to fit within constraint width ' + w + ' and depth ' + d);
    }

    return true;

  }

  fitRotate2D(w: number, d: number): boolean {

    if (w >= this.width && d >= this.depth) {
      return true;
    }

    if (d >= this.width && w >= this.depth) {
      this.rotate2D();

      return true;
    }

    return false;
  }

  fitRotate3DSmallestFootprintDimension(space: Dimension): boolean {
    return this.fitRotate3DSmallestFootprint(space.getWidth(), space.getDepth(), space.getHeight());
  }

  fitRotate3DSmallestFootprint(w: number, d: number, h: number): boolean {
    let a = Number.MAX_SAFE_INTEGER;
    if (this.fitsWidthAndDepthDown(w, d, h)) {
      a = this.width * this.depth;
    }

    let b = Number.MAX_SAFE_INTEGER;
    if (this.fitsHeightAndDepthDown(w, d, h)) {
      b = this.height * this.depth;
    }

    let c = Number.MAX_SAFE_INTEGER;
    if (this.fitsHeightAndWidthDown(w, d, h)) {
      c = this.width * this.height;
    }

    if (a == Number.MAX_SAFE_INTEGER && b == Number.MAX_SAFE_INTEGER && c == Number.MAX_SAFE_INTEGER) {
      return false;
    }

    if (a < b && a < c) {
      // no rotate
    } else if (b < c) {
      // rotate once
      this.rotate3D();
    } else {
      this.rotate3D();
      this.rotate3D();
    }

    if (h < this.height) {
      throw new Error('Expected height ' + this.height + ' to fit within height constraint ' + h);
    }

    if (this.width > w || this.depth > d) {
      // use the other orientation
      this.rotate2D();
    }

    if (this.width > w || this.depth > d) {
      throw new Error('Expected width ' + this.width + ' and depth ' + this.depth + ' to fit within constraint width ' + w + ' and depth ' + d);
    }

    return true;
  }

  /**
   * Rotate box within a free space in 2D
   *
   * @param dimension space to fit within
   * @return if this object fits within the input dimensions
   */

  fitRotate2DDimension(dimension: Dimension): boolean {
    if (dimension.getHeight() < this.height) {
      return false;
    }
    return this.fitRotate2D(dimension.getWidth(), dimension.getDepth());
  }

  currentSurfaceArea(): number {
    return this.width * this.depth;
  }

  clone(): Box {
    return new Box(this.name, this.width, this.depth, this.height, this.weight);
  }

  /**
   * Rotate box, i.e. in 2 dimensions, keeping the height constant.
   *
   * @return this
   */

  rotate2D(): Box {
    const depth = this.depth;

    this.depth = this.width;
    this.width = depth;

    return this;
  }

  rotate2D3D(): Box {
    // rotate2D();
    // width -> depth
    // depth -> width

    // rotate3D();
    // height = width;
    // width = depth;
    // depth = height;

    // so
    // height -> width -> depth;
    // width -> depth -> width;
    // depth -> height;

    const depth = this.depth;

    this.depth = this.height;
    this.height = depth;

    return this;
  }

  getWeight(): number {
    return this.weight;
  }

}
