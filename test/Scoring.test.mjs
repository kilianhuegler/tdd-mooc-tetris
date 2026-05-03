import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Scoring } from "../src/Scoring.mjs";
import { Board } from "../src/Board.mjs";

function fallToBottom(board) {
  for (let i = 0; i < 10; i++) {
    board.tick();
  }
}

describe("Nintendo scoring", () => {
  let scoring;

  beforeEach(() => {
    scoring = new Scoring();
  });

  test("score starts at zero", () => {
    expect(scoring.score).to.equal(0);
  });

  test("single line clear -> 40 points", () => {
    scoring.linesRemoved(1);
    expect(scoring.score).to.equal(40);
  });

  test("double line clear -> 100 points", () => {
    scoring.linesRemoved(2);
    expect(scoring.score).to.equal(100);
  });

  test("triple line clear -> 300 points", () => {
    scoring.linesRemoved(3);
    expect(scoring.score).to.equal(300);
  });

  test("quadruple line clear -> 1200 points", () => {
    scoring.linesRemoved(4);
    expect(scoring.score).to.equal(1200);
  });
});

describe("Board with scoring", () => {
  test("test scoring when lines are cleared on the board", () => {
    const board = new Board(4, 3);
    const scoring = new Scoring();
    board.addObserver(scoring);

    board.drop("XXXX");
    fallToBottom(board);

    expect(scoring.score).to.equal(40);
  });
});
