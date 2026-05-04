export class ShuffleBag {
  constructor(items, shuffleFn) {
    this.items = items;
  }

  draw() {
    return this.items.shift();
  }
}
