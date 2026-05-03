import { beforeEach, describe, test } from "vitest";
import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { ARSTetromino } from "../src/ARSTetromino.mjs";

describe("Rotating falling tetrominoes", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
  });

  test("a falling tetromino can be rotated right", () => {
    board.drop(ARSTetromino.T_SHAPE);
    board.rotateRight();

    expect(board.toString()).to.equalShape(
      `....T.....
       ...TT.....
       ....T.....
       ..........
       ..........
       ..........`
    );
  });

  test("a falling tetromino can be rotated left", () => {
    board.drop(ARSTetromino.T_SHAPE);
    board.rotateLeft();

    expect(board.toString()).to.equalShape(
      `....T.....
       ....TT....
       ....T.....
       ..........
       ..........
       ..........`
    );
  });

  test.skip("it cannot be rotated when there is no room to rotate (right)", () => {
    board.drop(ARSTetromino.T_SHAPE);
    board.rotateLeft();
    for (let i = 0; i < 10; i++) {
      board.moveRight();
    }
    board.rotateRight();

    expect(board.toString()).to.equalShape(
      `.........T
       ........TT
       .........T
       ..........
       ..........
       ..........`
    );
  });

  test.skip("it cannot be rotated when there is no room to rotate (left)", () => {
    board.drop(ARSTetromino.T_SHAPE);
    board.rotateRight();
    for (let i = 0; i < 10; i++) {
      board.moveLeft();
    }
    board.rotateLeft();

    expect(board.toString()).to.equalShape(
      `T.........
       TT........
       T.........
       ..........
       ..........
       ..........`
    );
  });

  test("wall kick: pushes the block away from the right wall when rotating", () => {
    board.drop(ARSTetromino.T_SHAPE);
    board.rotateLeft();
    for (let i = 0; i < 10; i++) {
      board.moveRight();
    }
    board.rotateRight();

    expect(board.toString()).to.equalShape(
      `.......TTT
       ........T.
      ..........
      ..........
      ..........
      ..........`
    );
  });

  test("wall kick: pushes the block away from the left wall when rotating", () => {
    board.drop(ARSTetromino.T_SHAPE);
    board.rotateRight();
    for (let i = 0; i < 10; i++) {
      board.moveLeft();
    }
    board.rotateLeft();

    expect(board.toString()).to.equalShape(
      `TTT.......
      .T........
      ..........
      ..........
      ..........
      ..........`
    );
  });
});
