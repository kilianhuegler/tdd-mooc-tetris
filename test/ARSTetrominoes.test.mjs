import { describe, test } from "vitest";
import { expect } from "chai";
import { ARSTetromino } from "../src/ARSTetromino.mjs";

function distinctOrientations(shape) {
  const distinct = new Set();
  let current = shape;
  for (let i = 0; i < 10; i++) {
    distinct.add(current.toString());
    current = current.rotateRight();
  }
  return distinct;
}

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

  test("has 4 distinct orientations", () => {
    expect(distinctOrientations(ARSTetromino.T_SHAPE).size).to.equal(4);
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

  test("has 2 distinct orientations", () => {
    expect(distinctOrientations(ARSTetromino.I_SHAPE).size).to.equal(2);
  });
});

describe("ARS O shape", () => {
  test("spawn orientation", () => {
    expect(ARSTetromino.O_SHAPE.toString()).to.equalShape(
      `OO
       OO`
    );
  });

  test("does not rotate when rotated right", () => {
    expect(ARSTetromino.O_SHAPE.rotateRight().toString()).to.equalShape(
      `OO
       OO`
    );
  });

  test("does not rotate when rotated left", () => {
    expect(ARSTetromino.O_SHAPE.rotateLeft().toString()).to.equalShape(
      `OO
       OO`
    );
  });

  test("has 1 distinct orientations", () => {
    expect(distinctOrientations(ARSTetromino.O_SHAPE).size).to.equal(1);
  });
});

describe("ARS L shape", () => {
  test("spawn orientation", () => {
    expect(ARSTetromino.L_SHAPE.toString()).to.equalShape(
      `...
       LLL
       L..`
    );
  });

  test("can be rotated right", () => {
    expect(ARSTetromino.L_SHAPE.rotateRight().toString()).to.equalShape(
      `LL.
       .L.
       .L.`
    );
  });

  test("can be rotated left", () => {
    expect(ARSTetromino.L_SHAPE.rotateLeft().toString()).to.equalShape(
      `.L.
       .L.
       .LL`
    );
  });

  test("has 4 distinct orientations", () => {
    expect(distinctOrientations(ARSTetromino.L_SHAPE).size).to.equal(4);
  });
});

describe("ARS J shape", () => {
  test("spawn orientation", () => {
    expect(ARSTetromino.J_SHAPE.toString()).to.equalShape(
      `...
       JJJ
       ..J`
    );
  });

  test("can be rotated right", () => {
    expect(ARSTetromino.J_SHAPE.rotateRight().toString()).to.equalShape(
      `.J.
       .J.
       JJ.`
    );
  });

  test("can be rotated left", () => {
    expect(ARSTetromino.J_SHAPE.rotateLeft().toString()).to.equalShape(
      `.JJ
       .J.
       .J.`
    );
  });

  test("has 4 distinct orientations", () => {
    expect(distinctOrientations(ARSTetromino.J_SHAPE).size).to.equal(4);
  });
});

describe("ARS S shape", () => {
  test("spawn orientation", () => {
    expect(ARSTetromino.S_SHAPE.toString()).to.equalShape(
      `...
       .SS
       SS.`
    );
  });

  test("can be rotated right", () => {
    expect(ARSTetromino.S_SHAPE.rotateRight().toString()).to.equalShape(
      `S..
       SS.
       .S.`
    );
  });

  test("can be rotated left", () => {
    expect(ARSTetromino.S_SHAPE.rotateLeft().toString()).to.equalShape(
      `S..
       SS.
       .S.`
    );
  });

  test("has 2 distinct orientations", () => {
    expect(distinctOrientations(ARSTetromino.S_SHAPE).size).to.equal(2);
  });
});

describe("ARS Z shape", () => {
  test("spawn orientation", () => {
    expect(ARSTetromino.Z_SHAPE.toString()).to.equalShape(
      `...
       ZZ.
       .ZZ`
    );
  });

  test("can be rotated right", () => {
    expect(ARSTetromino.Z_SHAPE.rotateRight().toString()).to.equalShape(
      `..Z
       .ZZ
       .Z.`
    );
  });

  test("can be rotated left", () => {
    expect(ARSTetromino.Z_SHAPE.rotateLeft().toString()).to.equalShape(
      `..Z
       .ZZ
       .Z.`
    );
  });

  test("has 2 distinct orientations", () => {
    expect(distinctOrientations(ARSTetromino.Z_SHAPE).size).to.equal(2);
  });
});
