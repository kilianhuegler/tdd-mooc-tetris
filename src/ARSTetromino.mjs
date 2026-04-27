export class ARSTetromino {
  constructor(rotations, i = 0) {
    this.rotations = rotations;
    this.i = i;
  }

  static T_SHAPE = new ARSTetromino(["TTT.\n.T..\n....\n...."]);

  toString() {
    return this.rotations[this.i];
  }
}
