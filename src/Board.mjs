export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.grid = Array.from({ length: height }, () => ".".repeat(width));
  }

  *blockCells() {
    for (let blockRow = 0; blockRow < this.block.length; blockRow++) {
      for (let blockCol = 0; blockCol < this.block[blockRow].length; blockCol++) {
        const blockChar = this.block[blockRow][blockCol];
        if (blockChar !== ".") {
          yield { row: this.row + blockRow, col: this.col + blockCol, char: blockChar };
        }
      }
    }
  }

  drop(block) {
    if (this.block) throw new Error("already falling");
    const shapeString = block.toString().trim();
    this.block = shapeString.split("\n").filter((r) => /[^.]/.test(r));
    const shapeWidth = this.block[0].length;
    this.row = 0;
    this.col = Math.floor((this.width - shapeWidth) / 2);
  }

  tick() {
    if (!this.block) return;
    if (this.hitBottomOrBlock()) {
      this.freeze();
      this.block = undefined;
    } else {
      this.row++;
    }
  }

  hitBottomOrBlock() {
    for (const { row, col } of this.blockCells()) {
      const rowBelow = row + 1;
      if (rowBelow >= this.height || this.grid[rowBelow][col] !== ".") return true;
    }
    return false;
  }

  freeze() {
    for (const { row, col, char } of this.blockCells()) {
      this.grid[row] = this.grid[row].substring(0, col) + char + this.grid[row].substring(col + 1);
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

  moveLeft() {
    if (this.col > 0) this.col--;
  }

  moveRight() {
    const shapeWidth = this.block[0].length;
    if (this.col + shapeWidth < this.width) this.col++;
  }

  moveDown() {
    this.row++;
  }
}
