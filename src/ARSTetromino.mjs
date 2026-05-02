export class ARSTetromino {
  constructor(rotations, i = 0) {
    this.rotations = rotations;
    this.i = i;
  }

  static T_SHAPE = new ARSTetromino(["TTT\n.T.\n...\n", ".T.\nTT.\n.T.\n", "...\n.T.\nTTT\n", ".T.\n.TT\n.T.\n"]);

  static I_SHAPE = new ARSTetromino(["....\nIIII\n....\n....\n", "..I.\n..I.\n..I.\n..I.\n"]);

  static O_SHAPE = new ARSTetromino(["OO\nOO\n"]);

  toString() {
    return this.rotations[this.i];
  }

  rotateRight() {
    return new ARSTetromino(this.rotations, (this.i + 1) % this.rotations.length);
  }

  rotateLeft() {
    return new ARSTetromino(this.rotations, (this.i - 1 + this.rotations.length) % this.rotations.length);
  }
}
