import {RotatingShape} from "./RotatingShape.mjs";

export class Tetromino {
  constructor(orientations, i = 0) {
    this.orientations = orientations;
    this.i = i;
  }

  static T_SHAPE = Tetromino.orientations(".T.\nTTT\n...", 4);

  static I_SHAPE = Tetromino.orientations(".....\n.....\nIIII.\n.....\n.....", 2);

  toString() {
    return this.orientations[this.i].toString();
  }

  rotateRight() {
    return new Tetromino(this.orientations, (this.i + 1) % this.orientations.length);
  }

  rotateLeft() {
    return new Tetromino(this.orientations, (this.i - 1 + this.orientations.length) % this.orientations.length);
  }
}