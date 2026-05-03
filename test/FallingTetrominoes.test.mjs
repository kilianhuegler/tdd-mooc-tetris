import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

function fallToBottom(board) {
  for (let i = 0; i < 10; i++) {
    board.tick();
  }
}

describe("Falling tetrominoes", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
  });

  test("start from the top middle", () => {
    board.drop("XX\nXX");

    expect(board.toString()).to.equalShape(
      `....XX....
      ....XX....
      ..........
      ..........
      ..........
      ..........`
    );
  });

  test("stop when they hit the bottom", () => {
    board.drop("XX\nXX");
    fallToBottom(board);

    expect(board.toString()).to.equalShape(
      `..........
      ..........
      ..........
      ..........
      ....XX....
      ....XX....`
    );
  });

  test("stop when they land on another block", () => {
    board.drop("XX\nXX");
    fallToBottom(board);
    board.drop("XX\nXX");
    fallToBottom(board);

    expect(board.toString()).to.equalShape(
      `..........
      ..........
      ....XX....
      ....XX....
      ....XX....
      ....XX....`
    );
  });
});
