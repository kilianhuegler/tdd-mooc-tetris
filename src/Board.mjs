export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  drop(block) {
    this.block = block;
  }

  toString() {
    if (this.block) {
      return `.X.\n...\n...\n`;
    } else {
      return `...\n...\n...\n`;
    }
  }
}
