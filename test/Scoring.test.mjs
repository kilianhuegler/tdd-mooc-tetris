import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Scoring } from "../src/Scoring.mjs";

describe("Nintendo scoring", () => {
  let scoring;

  beforeEach(() => {
    scoring = new Scoring();
  });

  test("score starts at zero", () => {
    expect(scoring.score).to.equal(0);
  });
});
