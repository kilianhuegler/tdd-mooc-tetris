import { describe, test } from "vitest";
import { expect } from "chai";
import { ARSTetromino } from "../src/ARSTetromino.mjs";

describe("ARS T shape", () => {
  test("spawn orientation", () => {
    expect(ARSTetromino.T_SHAPE.toString()).to.equalShape(
      `TTT
       .T.
       ...`
    );
  });

  test("can be rotated right", () => {
    expect(ARSTetromino.T_SHAPE.rotateRight().toString()).to.equalShape(
      `.T.
     TT.
     .T.`
    );
  });

  test("can be rotated left", () => {
    expect(ARSTetromino.T_SHAPE.rotateLeft().toString()).to.equalShape(
      `.T.
       .TT
       .T.`
    );
  });
});

describe("ARS I shape", () => {
  test("spawn orientation", () => {
    expect(ARSTetromino.I_SHAPE.toString()).to.equalShape(
      `....
       IIII
       ....
       ....`
    );
  });

  test("can be rotated right", () => {
    expect(ARSTetromino.I_SHAPE.rotateRight().toString()).to.equalShape(
      `..I.
         ..I.
         ..I.
         ..I.`
    );
  });

  test("can be rotated left", () => {
    expect(ARSTetromino.I_SHAPE.rotateLeft().toString()).to.equalShape(
      `..I.
         ..I.
         ..I.
         ..I.`
    );
  });
});

describe("ARS O shape", () => {
  test("spawn orientation", () => {
    expect(ARSTetromino.O_SHAPE.toString()).to.equalShape(
      `OO
       OO`
    );
  });
});
