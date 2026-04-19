export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.grid = Array.from({ length: height }, () => ".".repeat(width));
  }

  drop(block) {
    if (this.block) throw new Error("already falling")
    const shapeString = block.toString().trim();
    this.block = shapeString.split("\n");
    const shapeWidth = this.block[0].length;
    this.row = 0;
    this.col = Math.floor((this.width - shapeWidth) / 2);
  }

  tick() {
    if (this.row >= this.height - 1 || this.grid[this.row + 1][1] !== ".") {
      this.grid[this.row] = "." + this.block + ".";
      this.block = undefined;
    } else {
      this.row++;
    }
  }

  hasFalling() {
    return !!this.block;
  }

  toString() {
    let rows = this.grid.map(r => r);
    if (this.block) rows[this.row] = "." + this.block + ".";
    return rows.map(r => r + "\n").join("");
  }
}
