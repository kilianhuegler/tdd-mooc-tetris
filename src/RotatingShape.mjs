import { normalize } from "../test/testing.mjs";

export class RotatingShape {

  constructor(shape) {
    this.shape = normalize(shape);
  }

  static fromString(str) {
    return new RotatingShape(str);
  }

  toString() {
    return this.shape;
  }
}
