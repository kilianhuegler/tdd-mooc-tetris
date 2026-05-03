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

  test("blocks above cleared row fall down 1", () => {
    board.drop("XXXX");
    fallToBottom(board);

    board.drop("Y");
    fallToBottom(board);

    expect(board.toString()).to.equalShape(
      `....
      ....
      .Y..`
    );
  });

  test("blocks above cleared row fall down 2", () => {
    board.drop("XX\nXX");
    fallToBottom(board);

    board.drop("XXXX");
    fallToBottom(board);

    expect(board.toString()).to.equalShape(
      `....
      .XX.
      .XX.`
    );
  });
});

describe("Multi-line clears", () => {
  let board;
  beforeEach(() => {
    board = new Board(4, 4);
  });

  test("double: two full rows are cleared", () => {
    board.drop("XXXX\nXXXX");
    fallToBottom(board);

    expect(board.toString()).to.equalShape(
      `....
      ....
      ....
      ....`
    );
  });

  test("triple: three full rows are cleared", () => {
    board.drop("XXXX\nXXXX\nXXXX");
    fallToBottom(board);

    expect(board.toString()).to.equalShape(
      `....
      ....
      ....
      ....`
    );
  });

  test("four full rows are cleared", () => {
    board.drop("XXXX\nXXXX\nXXXX\nXXXX");
    fallToBottom(board);

    expect(board.toString()).to.equalShape(
      `....
      ....
      ....
      ....`
    );
  });

  test("hurdle test", () => {
    board.drop("XXXX\n..X.\nXXXX");
    fallToBottom(board);

    expect(board.toString()).to.equalShape(
      `....
      ....
      ....
      ..X.`
    );
  });
});
