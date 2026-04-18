import {RotatingShape} from "./RotatingShape.mjs";

export class Tetromino {
  constructor(shape) {
    this.shape = shape;
  }

  static T_SHAPE = new Tetromino(RotatingShape.fromString(".T.\nTTT\n..."));

  toString() {
    return this.shape.toString();
  }

  rotateRight() {
    return new Tetromino(this.shape.rotateRight());
  }
  rotateLeft() {
    return new Tetromino(this.shape.rotateLeft());
  }
}