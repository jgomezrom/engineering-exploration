import { test } from "node:test";
import assert from "node:assert/strict";
import {
  analyseTruss,
  eulerBucklingLoad,
  memberMass,
  yieldCapacity,
  type TrussJoint,
  type TrussMember,
  type TrussSection,
} from "../app/lib/trussAnalysis.ts";

// Every expected value here is worked out by hand from statics or from a
// published formula, written out independently rather than taken from the
// solver being tested.

// A 40 mm solid round bar: A = πd²/4, I = πd⁴/64.
const BAR: TrussSection = { area: (Math.PI * 40 ** 2) / 4, secondMoment: (Math.PI * 40 ** 4) / 64 };

const close = (actual: number, expected: number, label: string, tolerance = 1e-6) => {
  assert.ok(
    Math.abs(actual - expected) <= tolerance * Math.max(1, Math.abs(expected)),
    `${label}: got ${actual}, expected ${expected}`
  );
};

const bar = (from: number, to: number): TrussMember => ({ from, to, section: BAR });

function solve(joints: TrussJoint[], members: TrussMember[], loads: { joint: number; fx: number; fy: number }[]) {
  const result = analyseTruss(joints, members, loads);
  assert.ok(result.stable, "expected a stable truss");
  return result;
}

test("a simple triangle matches the method of joints", () => {
  // Pin at the left, roller at the right, 4 m apart, apex 2 m up in the middle
  // carrying 100 kN. Each rafter sits at 45°, so by balance at the apex each
  // carries 100 / (2·sin 45°) in compression, and the tie between the supports
  // carries the horizontal part of that: 50 kN in tension.
  const joints: TrussJoint[] = [
    { x: 0, y: 0, support: "pin" },
    { x: 4, y: 0, support: "roller" },
    { x: 2, y: 2 },
  ];
  const result = solve(joints, [bar(0, 2), bar(2, 1), bar(0, 1)], [{ joint: 2, fx: 0, fy: -100 }]);

  close(result.members[0].force, -100 / (2 * Math.SQRT1_2), "left rafter");
  close(result.members[1].force, -100 / (2 * Math.SQRT1_2), "right rafter");
  close(result.members[2].force, 50, "tie");
});

test("support reactions balance the applied loads", () => {
  // Same triangle, but with the load pushed sideways as well. Taking moments
  // about the pin: the roller carries (100·2 + 30·2) / 4 = 65 kN... with the
  // sideways 30 kN acting 2 m up and to the right, it adds to the roller.
  const joints: TrussJoint[] = [
    { x: 0, y: 0, support: "pin" },
    { x: 4, y: 0, support: "roller" },
    { x: 2, y: 2 },
  ];
  const result = solve(joints, [bar(0, 2), bar(2, 1), bar(0, 1)], [{ joint: 2, fx: 30, fy: -100 }]);
  const pin = result.reactions.find((r) => r.joint === 0)!;
  const roller = result.reactions.find((r) => r.joint === 1)!;

  close(roller.fy, 65, "roller vertical reaction");
  close(pin.fy, 35, "pin vertical reaction");
  close(pin.fx, -30, "pin horizontal reaction");
  close(roller.fx, 0, "a roller cannot push sideways");
  assert.ok(result.equilibriumError < 1e-9, `joints should balance, residual ${result.equilibriumError}`);
});

test("a redundant truss matches the textbook compatibility solution", () => {
  // Three bars of the same section hang a load P from a ceiling: one straight
  // down (length L) and two at an angle θ either side of it. Balance alone
  // cannot split the load between them — it takes the extra condition that
  // all three stretch to meet at the same point. The classic result is
  //   middle bar = P / (1 + 2cos³θ),   each side bar = P·cos²θ / (1 + 2cos³θ).
  const L = 3;
  const theta = Math.PI / 6;
  const offset = L * Math.tan(theta);
  const joints: TrussJoint[] = [
    { x: -offset, y: L, support: "pin" },
    { x: 0, y: L, support: "pin" },
    { x: offset, y: L, support: "pin" },
    { x: 0, y: 0 },
  ];
  const P = 90;
  const result = solve(joints, [bar(0, 3), bar(1, 3), bar(2, 3)], [{ joint: 3, fx: 0, fy: -P }]);
  const denominator = 1 + 2 * Math.cos(theta) ** 3;

  close(result.members[1].force, P / denominator, "middle bar");
  close(result.members[0].force, (P * Math.cos(theta) ** 2) / denominator, "left bar");
  close(result.members[2].force, (P * Math.cos(theta) ** 2) / denominator, "right bar");
});

test("a single bar stretches by PL/EA", () => {
  // Hooke's law for a bar: extension = PL / EA. With E = 200,000 MPa.
  const joints: TrussJoint[] = [
    { x: 0, y: 0, support: "pin" },
    { x: 3, y: 0, support: "roller" },
  ];
  const result = solve(joints, [bar(0, 1)], [{ joint: 1, fx: 120, fy: 0 }]);
  const expectedMetres = (120_000 * 3000) / (200_000 * BAR.area) / 1000;

  close(result.displacements[1].dx, expectedMetres, "extension");
  close(result.members[0].force, 120, "bar force");
});

test("a square with no diagonal is reported as a mechanism", () => {
  const joints: TrussJoint[] = [
    { x: 0, y: 0, support: "pin" },
    { x: 2, y: 0, support: "pin" },
    { x: 0, y: 2 },
    { x: 2, y: 2 },
  ];
  const frame = [bar(0, 2), bar(2, 3), bar(3, 1)];
  const loose = analyseTruss(joints, frame, [{ joint: 2, fx: 10, fy: 0 }]);
  assert.equal(loose.stable, false);
  if (!loose.stable) assert.deepEqual(loose.looseJoints, [2, 3]);

  // One diagonal turns the same four joints into two triangles.
  const braced = analyseTruss(joints, [...frame, bar(0, 3)], [{ joint: 2, fx: 10, fy: 0 }]);
  assert.equal(braced.stable, true);
});

test("a loaded joint with nothing attached is loose", () => {
  const joints: TrussJoint[] = [
    { x: 0, y: 0, support: "pin" },
    { x: 2, y: 0, support: "pin" },
    { x: 1, y: 1 },
    { x: 5, y: 0 },
  ];
  const result = analyseTruss(joints, [bar(0, 2), bar(2, 1)], [{ joint: 3, fx: 0, fy: -10 }]);
  assert.equal(result.stable, false);
  if (!result.stable) assert.deepEqual(result.looseJoints, [3]);
});

test("capacities follow the yield and Euler formulas", () => {
  // Yield: 250 MPa × area. Euler: π²EI / L².
  close(yieldCapacity(BAR), (250 * BAR.area) / 1000, "yield capacity");
  close(eulerBucklingLoad(BAR, 2), (Math.PI ** 2 * 200_000 * BAR.secondMoment) / 2000 ** 2 / 1000, "buckling at 2 m");
  // Doubling the length should quarter the buckling load.
  close(eulerBucklingLoad(BAR, 4), eulerBucklingLoad(BAR, 2) / 4, "buckling at 4 m");
  // 1 m of 40 mm bar: 7850 kg/m³ × area.
  close(memberMass(BAR, 1), 7850 * BAR.area * 1e-6, "mass per metre");
});

test("a slender member in compression is limited by buckling, not strength", () => {
  // A 20 mm rod, 4 m long, squeezed by 10 kN. The steel could take 78.5 kN
  // before yielding, but Euler's formula puts buckling at under 1 kN.
  const rod: TrussSection = { area: (Math.PI * 20 ** 2) / 4, secondMoment: (Math.PI * 20 ** 4) / 64 };
  const joints: TrussJoint[] = [
    { x: 0, y: 0, support: "pin" },
    { x: 4, y: 0, support: "roller" },
  ];
  const squeezed = solve(joints, [{ from: 0, to: 1, section: rod }], [{ joint: 1, fx: -10, fy: 0 }]);
  assert.equal(squeezed.members[0].bucklingGoverns, true);
  assert.ok(squeezed.members[0].utilisation > 1, "the rod should fail in compression");
  close(squeezed.loadFactor, eulerBucklingLoad(rod, 4) / 10, "load factor");

  // Pull on the same rod with the same force and it is nowhere near its limit.
  const pulled = solve(joints, [{ from: 0, to: 1, section: rod }], [{ joint: 1, fx: 10, fy: 0 }]);
  close(pulled.members[0].utilisation, 10 / yieldCapacity(rod), "tension utilisation");
});
