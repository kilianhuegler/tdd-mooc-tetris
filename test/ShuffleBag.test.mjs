import { describe, test } from "vitest";
import { expect } from "chai";
import { ShuffleBag } from "../src/ShuffleBag.mjs";

const noShuffle = (arr) => arr;

function fisherYatesShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

describe("Shuffle bag", () => {
  test("bag with one item and one draw", () => {
    const bag = new ShuffleBag(["A"], noShuffle);

    expect(bag.draw()).to.equal("A");
  });

  test("draws items in order until bag is empty", () => {
    const bag = new ShuffleBag(["A", "B"], noShuffle);

    expect(bag.draw()).to.equal("A");
    expect(bag.draw()).to.equal("B");
  });

  test("refill after the bag is empty", () => {
    const bag = new ShuffleBag(["A", "B"], noShuffle);
    bag.draw();
    bag.draw();

    expect(bag.draw()).to.equal("A");
  });

  test("call shuffleFn when filling the bag", () => {
    const calls = [];
    const spyShuffle = (arr) => {
      calls.push([...arr]);
      return arr;
    };

    new ShuffleBag(["A", "B"], spyShuffle);
    expect(calls).to.deep.equal([["A", "B"]]);
  });

  test("call shuffleFn when refilling the bag", () => {
    const calls = [];
    const spyShuffle = (arr) => {
      calls.push([...arr]);
      return arr;
    };

    const bag = new ShuffleBag(["A", "B"], spyShuffle);
    bag.draw();
    bag.draw();
    bag.draw();

    expect(calls).to.deep.equal([["A", "B"], ["A", "B"]]);
  })
});

describe("Real randomness shuffle bag", () => {
  test("items appear exactly once per cycle", () => {
    const items = ["A", "B", "C", "D", "E", "F", "G"];
    const bag = new ShuffleBag(items, fisherYatesShuffle);

    const drawn = [];
    for (let i = 0; i < items.length; i++) {
      drawn.push(bag.draw());
    }

    expect(drawn.slice().sort()).to.deep.equal([...items].sort());
  });

  test("items appear two times during the cycle", () => {
    const items = ["A", "B", "C"];
    const bag = new ShuffleBag(items, fisherYatesShuffle);

    const drawn = [];
    for (let i = 0; i < items.length * 2; i++) {
      drawn.push(bag.draw());
    }

    const counts = {};
    for (const item of drawn) {
      counts[item] = (counts[item] || 0) + 1;
    }
    expect(counts).to.deep.equal({ A: 2, B: 2, C: 2 });
  });
});
