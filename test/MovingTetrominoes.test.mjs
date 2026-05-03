import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

function fallToBottom(board) {
  for (let i = 0; i < 10; i++) {
    board.tick();
  }
}

describe("MovingTetrominoes", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
  });

  test("a falling tetromino can be moved left", () => {
    board.drop("XX\nXX");
    board.moveLeft();

    expect(board.toString()).to.equalShape(
      `...XX.....
       ...XX.....
       ..........
       ..........
       ..........
       ..........`
    );
  });

  test("a falling tetromino can be moved right", () => {
    board.drop("XX\nXX");
    board.moveRight();

    expect(board.toString()).to.equalShape(
      `.....XX...
       .....XX...
       ..........
       ..........
       ..........
       ..........`
    );
  });

  test("a falling tetromino can be moved down", () => {
    board.drop(Tetromino.T_SHAPE);
    board.moveDown();

    expect(board.toString()).to.equalShape(
      `..........
       ....T.....
       ...TTT....
       ..........
       ..........
       ..........`
    );
  });

  test("it cannot be moved left beyond the board", () => {
    board.drop(Tetromino.T_SHAPE);
    board.moveLeft();
    board.moveLeft();
    board.moveLeft();
    board.moveLeft();

    expect(board.toString()).to.equalShape(
      `.T........
       TTT.......
       ..........
       ..........
       ..........
       ..........`
    );
  });

  test("it cannot be moved right beyond the board", () => {
    board.drop(Tetromino.T_SHAPE);
    for (let i = 0; i < 10; i++) board.moveRight();

    expect(board.toString()).to.equalShape(
      `........T.
       .......TTT
       ..........
       ..........
       ..........
       ..........`
    );
  });

  test("it cannot be moved down beyond the board (will stop falling)", () => {
    board.drop(Tetromino.T_SHAPE);
    for (let i = 0; i < 10; i++) board.moveDown();

    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       ..........
       ....T.....
       ...TTT....`
    );
  });

  test("it cannot be moved left through other blocks", () => {
    board.drop(Tetromino.T_SHAPE);
    board.moveLeft();
    board.moveLeft();
    board.moveLeft();
    fallToBottom(board);

    board.drop(Tetromino.T_SHAPE);
    board.tick();
    board.tick();
    board.tick();

    for (let i = 0; i < 10; i++) board.moveLeft();

    expect(board.toString()).to.equalShape(
     `..........
     ..........
     ..........
     ...T......
     .TTTT.....
     TTT.......`
    );
  });

  test("it cannot be moved right through other blocks", () => {
    board.drop(Tetromino.T_SHAPE);
    board.moveRight();
    board.moveRight();
    board.moveRight();
    board.moveRight();
    board.moveRight();
    fallToBottom(board);

    board.drop(Tetromino.T_SHAPE);
    board.tick();
    board.tick();
    board.tick();

    for (let i = 0; i < 10; i++) board.moveRight();

    expect(board.toString()).to.equalShape(
     `..........
     ..........
     ..........
     ......T...
     .....TTTT.
     .......TTT`
    );
  });

  test("it cannot be moved down through other blocks (will stop falling)", () => {
    board.drop(Tetromino.T_SHAPE);
    fallToBottom(board);

    board.drop(Tetromino.T_SHAPE);
    for (let i = 0; i < 10; i++) board.moveDown();

    expect(board.toString()).to.equalShape(
     `..........
     ..........
     ....T.....
     ...TTT....
     ....T.....
     ...TTT....`
    );

    expect(board.hasFalling()).to.be.false;
  });
});
