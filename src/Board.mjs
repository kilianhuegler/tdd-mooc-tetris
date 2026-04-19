export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.grid = Array.from({ length: height }, () => ".".repeat(width));
  }

  drop(block) {
    if (this.block) throw new Error("already falling");
    const shapeString = block.toString().trim();
    this.block = shapeString.split("\n");
    const shapeWidth = this.block[0].length;
    this.row = 0;
    this.col = Math.floor((this.width - shapeWidth) / 2);
  }

  tick() {
    if (!this.block) return;
    if (this.row + this.block.length >= this.height || this.grid[this.row + 1][1] !== ".") {
      this.freeze();
      this.block = undefined;
    } else {
      this.row++;
    }
  }

  freeze() {
    for (let blockRow = 0; blockRow < this.block.length; blockRow++) {
      for (let blockCol = 0; blockCol < this.block[blockRow].length; blockCol++) {
        const ch = this.block[blockRow][blockCol];
        if (ch === ".") continue;
        const r = this.row + blockRow;
        const c = this.col + blockCol;
        this.grid[r] = this.grid[r].substring(0, c) + ch + this.grid[r].substring(c + 1);
      }
    }
  }

  hasFalling() {
    return !!this.block;
  }

  toString() {
    let result = "";
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < this.width; col++) {
        result += this.getCellAt(row, col);
      }
      result += "\n";
    }
    return result;
  }

  getCellAt(row, col) {
    if (this.block) {
      const blockRow = row - this.row;
      const blockCol = col - this.col;
      if (blockRow >= 0 && blockRow < this.block.length && blockCol >= 0 && blockCol < this.block[blockRow].length) {
        const blockChar = this.block[blockRow][blockCol];
        if (blockChar !== ".") return blockChar;
      }
    }
    return this.grid[row][col];
  }
}
