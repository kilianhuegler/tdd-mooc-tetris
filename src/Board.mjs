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
    return this.block
      .toString()
      .trim()
      .split("\n")
      .filter((r) => /[^.]/.test(r));
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
      this.clearFullLines();
    } else {
      this.row++;
    }
  }

  clearFullLines() {
    if (!this.grid[this.height - 1].includes(".")) {
      this.grid[this.height - 1] = ".".repeat(this.width);
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
    if (this.hasFalling() && this.canMoveLeft()) {
      this.col--;
    }
  }

  canMoveRight() {
    for (const { row, col } of this.blockCells()) {
      const colRight = col + 1;
      if (colRight >= this.width || this.grid[row][colRight] !== ".") return false;
    }
    return true;
  }

  moveRight() {
    if (this.hasFalling() && this.canMoveRight()) {
      this.col++;
    }
  }

  moveDown() {
    this.tick();
  }

  hasValidPosition() {
    for (const { row, col } of this.blockCells()) {
      if (col < 0 || col >= this.width) {
        return false;
      }
      if (row < 0 || row >= this.height) {
        return false;
      }
      if (this.grid[row][col] !== ".") {
        return false;
      }
    }
    return true;
  }

  tryRotation(rotatedBlock, kickOffsets) {
    const oldBlock = this.block;
    const oldCol = this.col;
    this.block = rotatedBlock;
    for (const offset of [0, ...kickOffsets]) {
      this.col = oldCol + offset;
      if (this.hasValidPosition()) return;
    }
    this.block = oldBlock;
    this.col = oldCol;
  }

  rotateRight() {
    if (this.hasFalling()) this.tryRotation(this.block.rotateRight(), [-1, 1]);
  }

  rotateLeft() {
    if (this.hasFalling()) this.tryRotation(this.block.rotateLeft(), [1, -1]);
  }
}
