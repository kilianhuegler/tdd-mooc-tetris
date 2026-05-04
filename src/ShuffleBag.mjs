export class ShuffleBag {
  constructor(items, shuffleFn) {
    this.items = items;
    this.remaining = [...items];
  }

  draw() {
    if (this.remaining.length === 0) {
      this.remaining = [...this.items];
    }
    return this.remaining.shift();
  }
}
