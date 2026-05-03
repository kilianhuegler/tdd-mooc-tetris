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
});
