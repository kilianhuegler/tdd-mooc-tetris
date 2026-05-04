import { describe, test } from "vitest";
import { expect } from "chai";
import { ShuffleBag } from "../src/ShuffleBag.mjs";

const noShuffle = (arr) => arr;

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
});
