export class Dimension {

  public static EMPTY = new Dimension('', 0, 0, 0);

  protected width: number; // x
  protected depth: number; // y
  protected height: number; // z
  protected volume: number;

  protected name: string;

  constructor(name: string, w: number, d: number, h: number) {
    this.name = name;

    this.depth = d;
    this.width = w;
    this.height = h;

    this.calculateVolume();
  }

  calculateVolume() {
    this.volume = this.depth * this.width * this.height;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }

  getDepth(): number {
    return this.depth;
  }

  /**
   *
   * Check whether a dimension fits within the current dimensions, rotated in 3D.
   *
   * @return true if any rotation of the argument can be placed inside this
   *
   */

  canHold3D(w: number, d: number, h: number): boolean {
    return (w <= this.width && h <= this.height && d <= this.depth) ||
      (h <= this.width && d <= this.height && w <= this.depth) ||
      (d <= this.width && w <= this.height && h <= this.depth) ||
      (h <= this.width && w <= this.height && d <= this.depth) ||
      (d <= this.width && h <= this.height && w <= this.depth) ||
      (w <= this.width && d <= this.height && h <= this.depth);
  }


  /**
   *
   * Check whether a dimension fits within the current object, rotated in 2D.
   *
   * @return true if any rotation of the argument can be placed inside this
   *
   */

  canHold2D(w: number, d: number, h: number): boolean {
    if (h > this.height) {
      return false;
    }
    return (w <= this.width && d <= this.depth) || (d <= this.width && w <= this.depth);
  }

  getFootprint(): number {
    return this.width * this.depth;
  }

  isSquare2D(): boolean {
    return this.width == this.depth;
  }

  isSquare3D(): boolean {
    return this.width == this.depth && this.width == this.height;
  }

  /**
   * Check whether this object fits within a dimension (without rotation).
   *
   * @return true if this can fit within the argument space
   */

  fitsInside3D(w: number, d: number, h: number): boolean {
    return w >= this.width && h >= this.height && d >= this.depth;
  }


  /**
   * Check whether this object can fit within a dimension, with 3D rotation.
   *
   * @param dimension the dimensions to fit within
   * @return true if this can fit within the argument space in any rotation
   *
   */

  canFitInside3D(dimension: Dimension): boolean {
    return dimension.canHold3D(this.width, this.depth, this.height);
  }

  /**
   * Check whether this object can fit within a dimension, with 2D rotation.
   *
   * @param dimension the dimensions to fit within
   * @return true if this can fit within the argument space in any 2D rotation
   *
   */

  canFitInside2D(dimension: Dimension): boolean {
    return dimension.canHold2D(this.width, this.depth, this.height);
  }

  getVolume(): number {
    return this.volume;
  }

  public nonEmpty(): boolean {
    return this.width > 0 && this.depth > 0 && this.height > 0;
  }

  getName(): string {
    return this.name;
  }

  public equals(obj: object): boolean {
    if (this == obj)
      return true;
    if (obj == null)
      return false;
    if (!(obj instanceof Dimension))
      return false;
    const other = obj as Dimension;
    if (this.depth != other.depth)
      return false;
    if (this.height != other.height)
      return false;
    if (this.name == null) {
      if (other.name != null)
        return false;
    } else if (this.name != other.name)
      return false;
    if (this.volume != other.volume)
      return false;
    if (this.width != other.width)
      return false;
    return true;
  }

  setDepth(depth: number) {
    this.depth = depth;

    this.calculateVolume();
  }

  setHeight(height: number) {
    this.height = height;

    this.calculateVolume();
  }

  setWidth(width: number) {
    this.width = width;

    this.calculateVolume();
  }
}
