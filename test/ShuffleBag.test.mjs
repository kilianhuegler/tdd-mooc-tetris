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
});
