export class ShuffleBag {
  constructor(items, shuffleFn) {
    this.items = items;
    this.shuffleFn = shuffleFn;
    this.remaining = shuffleFn([...items]);
  }

  draw() {
    if (this.remaining.length === 0) {
      this.remaining = [...this.items];
    }
    return this.remaining.shift();
  }
}
