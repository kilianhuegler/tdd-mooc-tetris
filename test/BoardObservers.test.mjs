import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";

function fallToBottom(board) {
  for (let i = 0; i < 10; i++) {
    board.tick();
  }
}

describe("Board observers", () => {
  let board;
  let observer;

  beforeEach(() => {
    board = new Board(4, 3);
    observer = { calls: [] };
    observer.linesRemoved = function (n) {
      this.calls.push(n);
    };
  });

  test("notifies observer when row is cleared", () => {
    board.addObserver(observer);

    board.drop("XXXX");
    fallToBottom(board);

    expect(observer.calls).to.deep.equal([1]);
  });

  test("does NOT notify observer when block lands without clearing", () => {
    board.addObserver(observer);

    board.drop("X");
    fallToBottom(board);

    expect(observer.calls).to.deep.equal([]);
  });

  test("notifies observer when multiple rows (count) are cleared at once", () => {
    const tallBoard = new Board(4, 4);
    tallBoard.addObserver(observer);

    tallBoard.drop("XXXX\nXXXX\nXXXX\nXXXX");
    for (let i = 0; i < 10; i++) tallBoard.tick();

    expect(observer.calls).to.deep.equal([4]);
  });
});
