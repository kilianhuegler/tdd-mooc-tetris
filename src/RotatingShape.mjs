import { normalize } from "../test/testing.mjs";

export class RotatingShape {

  constructor(shape) {
    this.shape = normalize(shape);
  }

  static fromString(str) {
    return new RotatingShape(str);
  }

  rotateRight() {
    const rows = this.shape.split("\n");
    const rotated = rows.map((_, r) => rows.map((_, c) => rows[rows.length - c - 1][r]).join(""));
    return new RotatingShape(rotated.join("\n"));
  }

  rotateLeft() {
    return this.rotateRight().rotateRight().rotateRight();
  }

  toString() {
    return this.shape;
  }
}
