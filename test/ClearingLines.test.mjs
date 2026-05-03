import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";

function fallToBottom(board) {
  for (let i = 0; i < 10; i++) {
    board.tick();
  }
}

describe("Clearing lines", () => {
  let board;
  beforeEach(() => {
    board = new Board(4, 3);
  });

  test("a full row is removed when a block lands", () => {
    board.drop("XXXX");
    fallToBottom(board);

    expect(board.toString()).to.equalShape(
      `....
       ....
       ....`
    );
  });

  test("a full row above the bottom is also cleared", () => {
    board.drop("X");
    fallToBottom(board);

    board.drop("XXXX");
    fallToBottom(board);

    expect(board.toString()).to.equalShape(
      `....
      ....
      .X..`
    );
  });
});
