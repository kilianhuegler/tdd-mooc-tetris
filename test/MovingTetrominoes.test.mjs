import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

describe("MovingTetrominoes", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
  });

  test("a falling tetromino can be moved left", () => {});
  test("a falling tetromino can be moved right", () => {});
  test("a falling tetromino can be moved down", () => {});
  test("it cannot be moved left beyond the board", () => {});
  test("it cannot be moved right beyond the board", () => {});
  test("it cannot be moved down beyond the board (will stop falling)", () => {});
  test("it cannot be moved left through other blocks", () => {});
  test("it cannot be moved right through other blocks", () => {});
  test("it cannot be moved down through other blocks (will stop falling)", () => {});

});
