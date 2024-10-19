import { Space } from './Space';
import { Box } from './Box';

export class Placement {

  private space: Space;
  private box: Box;

  constructor(space: Space, box: Box) {
    this.space = space;
    this.box = box;
  }

  public getSpace(): Space {
    return this.space;
  }

  public getBox(): Box {
    return this.box;
  }

  public setBox(box: Box) {
    this.box = box;
  }

  getCenterX(): number {
    return this.space.getX() + (this.box.getWidth() / 2);
  }

  getCenterY(): number {
    return this.space.getY() + (this.box.getDepth() / 2);
  }

  getCenterZ(): number {
    return this.space.getZ() + (this.box.getHeight() / 2);
  }

  intersects(placement: Placement): boolean {

    // direction -->
    //
    //              |------------------|
    //              |      current     |
    //              |------------------|
    //
    // |------------------|
    // |      left        |
    // |------------------|
    //
    //                           |------------------|
    //                           |      right       |
    //                           |------------------|
    //
    //        |-------------------------------|
    //        |            outside            |
    //        |------------------------------ |
    //
    //                  |----------|
    //                  |  within  |
    //                  |----------|


    return this.intersectsX(placement) && this.intersectsY(placement) && this.intersectsZ(placement);
  }

  public intersectsY(placement: Placement): boolean {
    const startY = this.space.getY();
    const endY = startY + this.box.getDepth() - 1;

    if (startY <= placement.getSpace().getY() && placement.getSpace().getY() <= endY) {
      return true;
    }

    const placementEndY = placement.getSpace().getY() + placement.getBox().getDepth() - 1;

    if (startY <= placementEndY &&
      placementEndY <= endY) {
      return true;
    }

    return placement.getSpace().getY() < startY && endY < placementEndY;

  }

  public intersectsX(placement: Placement): boolean {

    const startX = this.space.getX();
    const endX = startX + this.box.getWidth() - 1;

    if (startX <= placement.getSpace().getX() && placement.getSpace().getX() <= endX) {
      return true;
    }

    const placementEndX = placement.getSpace().getX() + placement.getBox().getWidth() - 1;
    if (startX <= placementEndX && placementEndX <= endX) {
      return true;
    }

    return placement.getSpace().getX() < startX && endX < placementEndX;
  }

  public intersectsZ(placement: Placement): boolean {

    const startZ = this.space.getZ();
    const endZ = startZ + this.box.getHeight() - 1;

    if (startZ <= placement.getSpace().getZ() && placement.getSpace().getZ() <= endZ) {
      return true;
    }

    const placementEndZ = placement.getSpace().getZ() + placement.getBox().getHeight() - 1;
    if (startZ <= placementEndZ &&
      placementEndZ <= endZ) {
      return true;
    }

    return placement.getSpace().getZ() < startZ && endZ < placementEndZ;
  }

  public getAbsoluteX(): number {
    return this.space.getX();
  }

  public getAbsoluteY(): number {
    return this.space.getY();
  }

  public getAbsoluteZ(): number {
    return this.space.getZ();
  }

  public getAbsoluteEndX(): number {
    return this.space.getX() + this.box.getWidth();
  }

  public getAbsoluteEndY(): number {
    return this.space.getY() + this.box.getDepth();
  }

  public getAbsoluteEndZ(): number {
    return this.space.getZ() + this.box.getHeight();
  }

}
