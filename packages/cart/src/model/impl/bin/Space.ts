import { Dimension } from './Dimension';
import { Placement } from './Placement';

export class Space extends Dimension {

  protected static between(start: number, value: number, end: number): boolean {
    return start <= value && value <= end;
  }

  protected intersects(start: number, end: number, value: number, distance: number): boolean {
    return Space.between(start, value, end) || Space.between(start, value + distance, end) || (value < start && end < value + distance);
  }

  private parent: Space;
  private remainder: Space;

  private x: number; // width
  private y: number; // depth
  private z: number; // height

  getX(): number {
    return this.x;
  }

  public setX(x: number) {
    this.x = x;
  }

  public getY(): number {
    return this.y;
  }

  public setY(y: number) {
    this.y = y;
  }

  public getZ(): number {
    return this.z;
  }

  public setZ(z: number) {
    this.z = z;
  }

  constructor(parent: Space, name: string, w: number, d: number, h: number, x: number, y: number, z: number) {
    super(name, w, d, h);

    this.parent = parent;
    this.x = x;
    this.y = y;
    this.z = z;
  }

  public setParent(parent: Space) {
    this.parent = parent;
  }

  public setRemainder(dual: Space) {
    this.remainder = dual;
  }

  public getRemainder(): Space {
    return this.remainder;
  }

  public copyFromSpace(space: Space) {

    this.parent = space.parent;
    this.x = space.x;
    this.y = space.y;
    this.z = space.z;

    this.width = space.width;
    this.depth = space.depth;
    this.height = space.height;
  }

  public copyFrom(w: number, d: number, h: number, x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.width = w;
    this.depth = d;
    this.height = h;
  }

  public intersectsSpace(space: Space): boolean {
    return this.intersectsXSpace(space) && this.intersectsYSpace(space) && this.intersectsZSpace(space);
  }

  public intersectsYSpace(space: Space): boolean {
    const startY = space.getY();
    const endY = startY + space.getDepth() - 1;

    return this.intersectsY(startY, endY);
  }

  public intersectsY(startY: number, endY: number): boolean {
    return this.intersects(startY, endY, this.y, this.depth);
  }

  public intersectsXSpace(space: Space): boolean {
    const startX = space.getX();
    const endX = startX + space.getWidth() - 1;

    return this.intersectsX(startX, endX);
  }

  public intersectsX(startX: number, endX: number): boolean {
    return this.intersects(startX, endX, this.x, this.width);
  }

  public intersectsZSpace(space: Space): boolean {
    const startZ = space.getZ();
    const endZ = startZ + space.getHeight() - 1;

    return this.intersectsZ(startZ, endZ);
  }

  public intersectsZ(startZ: number, endZ: number): boolean {
    return this.intersects(startZ, endZ, this.z, this.height);
  }

  public intersectsPlacement(placement: Placement): boolean {
    return this.intersectsXPlacement(placement) && this.intersectsYPlacement(placement) && this.intersectsZPlacement(placement);
  }

  public intersectsYPlacement(placement: Placement): boolean {
    const startY = placement.getSpace().getY();
    const endY = startY + placement.getBox().getDepth() - 1;
    return this.intersectsY(startY, endY);
  }

  public intersectsXPlacement(placement: Placement): boolean {
    const startX = placement.getSpace().getX();
    const endX = startX + placement.getBox().getWidth() - 1;
    return this.intersectsX(startX, endX);
  }

  public intersectsZPlacement(placement: Placement): boolean {
    const startZ = placement.getSpace().getZ();
    const endZ = startZ + placement.getBox().getHeight() - 1;
    return this.intersectsZ(startZ, endZ);
  }

  public subtractX(placement: Placement) {
    const endX = placement.getSpace().getX() + placement.getBox().getWidth();

    if (endX > this.x) {
      this.width -= endX - this.x;

      this.x = endX;

      this.calculateVolume();
    }
  }

  public subtractY(placement: Placement) {
    const endY = placement.getSpace().getY() + placement.getBox().getDepth();

    if (endY > this.y) {
      this.depth -= endY - this.y;

      this.y = endY;

      this.calculateVolume();
    }
  }

  public subtractZ(placement: Placement) {
    const endZ = placement.getSpace().getZ() + placement.getBox().getHeight();

    if (endZ > this.z) {
      this.height -= endZ - this.z;

      this.z = endZ;

      this.calculateVolume();
    }
  }

  public getParent(): Space {
    return this.parent;
  }

}
