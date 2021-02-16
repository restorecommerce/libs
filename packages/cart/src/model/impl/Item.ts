export const RotationType_WHD = 0;
export const RotationType_HWD = 1;
export const RotationType_HDW = 2;
export const RotationType_DHW = 3;
export const RotationType_DWH = 4;
export const RotationType_WDH = 5;

export const WidthAxis = 0;
export const HeightAxis = 1;
export const DepthAxis = 2;

export const StartPosition = [0, 0, 0];

export const RotationTypeStrings = {
  [RotationType_WHD]: 'RotationType_WHD (w,h,d)',
  [RotationType_HWD]: 'RotationType_HWD (h,w,d)',
  [RotationType_HDW]: 'RotationType_HDW (h,d,w)',
  [RotationType_DHW]: 'RotationType_DHW (d,h,w)',
  [RotationType_DWH]: 'RotationType_DWH (d,w,h)',
  [RotationType_WDH]: 'RotationType_WDH (w,d,h)',
};

export const rectIntersect = (i1, i2, x, y) => {
  let d1, d2, cx1, cy1, cx2, cy2, ix, iy;

  d1 = i1.getDimension();
  d2 = i2.getDimension();

  cx1 = i1.position[x] + d1[x] / 2;
  cy1 = i1.position[y] + d1[y] / 2;
  cx2 = i2.position[x] + d2[x] / 2;
  cy2 = i2.position[y] + d2[y] / 2;

  ix = Math.max(cx1, cx2) - Math.min(cx1, cx2);
  iy = Math.max(cy1, cy2) - Math.min(cy1, cy2);

  return ix < (d1[x] + d2[x]) / 2 && iy < (d1[y] + d2[y]) / 2;
};

export class Item {
  name = '';
  width = 0;
  height = 0;
  depth = 0;
  weight = 0;
  rotationType = RotationType_WHD;
  position = [];

  constructor(n, w, h, d, wg) {
    this.name = n;
    this.width = w;
    this.height = h;
    this.depth = d;
    this.weight = wg;
  }

  getWidth(): number {
    switch (this.rotationType) {
      case RotationType_WHD:
        return this.width;
      case RotationType_HWD:
        return this.height;
      case RotationType_HDW:
        return this.height;
      case RotationType_DHW:
        return this.depth;
      case RotationType_DWH:
        return this.depth;
      case RotationType_WDH:
        return this.width;
    }
  }

  getHeight(): number {
    switch (this.rotationType) {
      case RotationType_WHD:
        return this.height;
      case RotationType_HWD:
        return this.width;
      case RotationType_HDW:
        return this.depth;
      case RotationType_DHW:
        return this.height;
      case RotationType_DWH:
        return this.width;
      case RotationType_WDH:
        return this.depth;
    }
  }

  getDepth(): number {
    switch (this.rotationType) {
      case RotationType_WHD:
        return this.depth;
      case RotationType_HWD:
        return this.depth;
      case RotationType_HDW:
        return this.width;
      case RotationType_DHW:
        return this.width;
      case RotationType_DWH:
        return this.height;
      case RotationType_WDH:
        return this.height;
    }
  }

  getWeight(): number {
    return this.weight;
  }

  getRotationType(): number {
    return this.rotationType;
  }

  getRotationTypeString(): number {
    return RotationTypeStrings[this.getRotationType()];
  }

  getDimension() {
    return [this.getWidth(), this.getHeight(), this.getDepth()];
  }

  intersect(i2) {
    return rectIntersect(this, i2, WidthAxis, HeightAxis) &&
      rectIntersect(this, i2, HeightAxis, DepthAxis) &&
      rectIntersect(this, i2, WidthAxis, DepthAxis);
  }

  getVolume() {
    return this.getWidth() * this.getHeight() * this.getDepth();
  }
}
