import {RotatingShape} from "./RotatingShape.mjs";

export class Tetromino {
  constructor(rotations, i = 0) {
    this.rotations = rotations;
    this.i = i;
  }

  static T_SHAPE = Tetromino.createRotations(".T.\nTTT\n...", 4);

  static I_SHAPE = Tetromino.createRotations(".....\n.....\nIIII.\n.....\n.....", 2);

  toString() {
    return this.rotations[this.i].toString();
  }

  rotateRight() {
    return new Tetromino(this.rotations, (this.i + 1) % this.rotations.length);
  }

  rotateLeft() {
    return new Tetromino(this.rotations, (this.i - 1 + this.rotations.length) % this.rotations.length);
  }
}