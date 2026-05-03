export class ARSTetromino {
  constructor(rotations, i = 0) {
    this.rotations = rotations;
    this.i = i;
  }

  static T_SHAPE = new ARSTetromino(["TTT\n.T.\n...\n", ".T.\nTT.\n.T.\n", "...\n.T.\nTTT\n", ".T.\n.TT\n.T.\n"]);

  static I_SHAPE = new ARSTetromino(["....\nIIII\n....\n....\n", "..I.\n..I.\n..I.\n..I.\n"]);

  static O_SHAPE = new ARSTetromino(["OO\nOO\n"]);

  static L_SHAPE = new ARSTetromino(["...\nLLL\nL..\n", "LL.\n.L.\n.L.\n", "...\n..L\nLLL\n", ".L.\n.L.\n.LL\n"]);

  static J_SHAPE = new ARSTetromino(["...\nJJJ\n..J\n", ".J.\n.J.\nJJ.\n", "...\nJ..\nJJJ\n", ".JJ\n.J.\n.J.\n"]);

  static S_SHAPE = new ARSTetromino(["...\n.SS\nSS.\n", "S..\nSS.\n.S.\n"]);

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
