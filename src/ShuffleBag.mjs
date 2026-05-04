export class ShuffleBag {
  constructor(items, shuffleFn) {
    this.items = items;
    this.shuffleFn = shuffleFn;
    this.refill();
  }

  draw() {
    if (this.remaining.length === 0) {
      this.refill();
    }
    return this.remaining.shift();
  }

  refill() {
    this.remaining = this.shuffleFn([...this.items]);
  }
}
