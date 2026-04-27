export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.grid = Array.from({ length: height }, () => ".".repeat(width));
  }

  *blockCells() {
    const rows = this.blockRows();
    for (let blockRow = 0; blockRow < rows.length; blockRow++) {
      for (let blockCol = 0; blockCol < rows[blockRow].length; blockCol++) {
        const blockChar = rows[blockRow][blockCol];
        if (blockChar !== ".") {
          yield { row: this.row + blockRow, col: this.col + blockCol, char: blockChar };
        }
      }
    }
  }

  blockRows() {
    return this.block.toString().trim().split("\n").filter((r) => /[^.]/.test(r));
  }

  drop(block) {
    if (this.block) throw new Error("already falling");
    this.block = block;
    const shapeWidth = this.blockRows()[0].length;
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
      const rows = this.blockRows();
      const blockRow = row - this.row;
      const blockCol = col - this.col;
      if (blockRow >= 0 && blockRow < rows.length && blockCol >= 0 && blockCol < rows[blockRow].length) {
        const blockChar = rows[blockRow][blockCol];
        if (blockChar !== ".") return blockChar;
      }
    }
    return this.grid[row][col];
  }

  canMoveLeft() {
    for (const { row, col } of this.blockCells()) {
      const colLeft = col - 1;
      if (colLeft < 0 || this.grid[row][colLeft] !== ".") return false;
    }
    return true;
  }

  moveLeft() {
    if (this.col && this.canMoveLeft()) this.col--;
  }

  canMoveRight() {
    for (const { row, col } of this.blockCells()) {
      const colRight = col + 1;
      if (colRight >= this.width || this.grid[row][colRight] !== ".") return false;
    }
    return true;
  }

  moveRight() {
    if (this.col && this.canMoveRight()) this.col++;
  }

  moveDown() {
    this.tick();
  }
}
