export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  drop(block) {
    if (this.block) throw new Error("already falling")
    this.block = block;
    this.row = 0;
  }

  tick() {
    this.row++;
  }

  toString() {
    let rows = Array.from({ length: this.height}, () => "...")
    if (this.block) rows[this.row] = "." + this.block + ".";
    return rows.map(r => r + "\n").join("");
  }
}
