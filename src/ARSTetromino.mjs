export class ARSTetromino {
  constructor(rotations, i = 0) {
    this.rotations = rotations;
    this.i = i;
  }

  static T_SHAPE = new ARSTetromino([
    "TTT\n.T.\n...\n",
    ".T.\nTT.\n.T.\n"
  ]);

  toString() {
    return this.rotations[this.i];
  }

  rotateRight() {
    return new ARSTetromino(this.rotations, (this.i + 1) % this.rotations.length);
  }
}
