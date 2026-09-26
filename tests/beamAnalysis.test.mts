import { test } from "node:test";
import assert from "node:assert/strict";
import { analyseSimplySupportedBeam } from "../app/lib/beamAnalysis.ts";

// Every expected value here comes from the published closed-form solution for a
// simply supported beam under a point load, written out independently rather
// than taken from the solver being tested.

const SPAN = 10; // m
const EI = 2500; // kN·m²

function closedForm(load: number, a: number, span = SPAN, flexuralRigidity = EI) {
  const b = span - a;
  const shorter = Math.min(a, b);
  return {
    leftReaction: (load * b) / span,
    rightReaction: (load * a) / span,
    peakMoment: (load * a * b) / span,
    peakDeflection:
      (load * shorter * Math.pow(span * span - shorter * shorter, 1.5)) /
      (9 * Math.sqrt(3) * span * flexuralRigidity),
  };
}

const within = (actual: number, expected: number, percent: number, label: string) => {
  const error = Math.abs(actual - expected) / Math.abs(expected);
  assert.ok(
    error <= percent / 100,
    `${label}: got ${actual}, expected ${expected} (off by ${(error * 100).toFixed(4)}%, allowed ${percent}%)`
  );
};

test("reactions satisfy equilibrium", () => {
  for (const [load, a] of [[5, 5], [10, 2], [8, 7], [1, 9]]) {
    const { reactions } = analyseSimplySupportedBeam(SPAN, [{ position: a, magnitude: load }], EI);
    const expected = closedForm(load, a);
    within(reactions.left, expected.leftReaction, 0.001, `left reaction (P=${load}, a=${a})`);
    within(reactions.right, expected.rightReaction, 0.001, `right reaction (P=${load}, a=${a})`);
    // Vertical equilibrium: what goes down must be held up.
    within(reactions.left + reactions.right, load, 0.001, "reactions sum to the load");
  }
});

test("peak bending moment matches Pab/L", () => {
  for (const [load, a] of [[5, 5], [10, 2], [8, 7], [1, 9]]) {
    const { maxMoment } = analyseSimplySupportedBeam(SPAN, [{ position: a, magnitude: load }], EI);
    within(Math.abs(maxMoment.value), closedForm(load, a).peakMoment, 0.01, `peak moment (P=${load}, a=${a})`);
    // The peak sits directly under the load for a single point load.
    assert.ok(Math.abs(maxMoment.at - a) < 0.05, `peak moment should sit under the load, got ${maxMoment.at} m`);
  }
});

test("midspan deflection matches PL³/48EI", () => {
  const load = 5;
  const { maxDeflection } = analyseSimplySupportedBeam(SPAN, [{ position: SPAN / 2, magnitude: load }], EI);
  const expected = (load * SPAN ** 3) / (48 * EI);
  within(maxDeflection.value, expected, 0.01, "midspan deflection");
});

test("off-centre deflection peaks on the longer side of the load", () => {
  const load = 8;
  const a = 3; // load nearer the left support, so the peak lies to its right
  const { maxDeflection } = analyseSimplySupportedBeam(SPAN, [{ position: a, magnitude: load }], EI);
  within(maxDeflection.value, closedForm(load, a).peakDeflection, 0.01, "off-centre deflection");
  assert.ok(
    maxDeflection.at > a,
    `peak deflection should sit to the right of a load at ${a} m, got ${maxDeflection.at} m`
  );
});

test("moment returns to zero at both supports", () => {
  const { stations } = analyseSimplySupportedBeam(SPAN, [{ position: 4, magnitude: 6 }], EI);
  const first = stations[0];
  const last = stations[stations.length - 1];
  assert.ok(Math.abs(first.moment) < 1e-9, `moment at the left support should be 0, got ${first.moment}`);
  assert.ok(Math.abs(last.moment) < 1e-6, `moment at the right support should be 0, got ${last.moment}`);
});

test("shear steps down by exactly the load, at the load", () => {
  const load = 7;
  const a = 6;
  const { stations } = analyseSimplySupportedBeam(SPAN, [{ position: a, magnitude: load }], EI);
  const before = stations.filter((s) => s.x < a - 0.05).at(-1)!;
  const after = stations.find((s) => s.x > a + 0.05)!;
  within(before.shear - after.shear, load, 0.01, "shear step across the load");
});

test("deflection is zero at both supports", () => {
  const { stations } = analyseSimplySupportedBeam(SPAN, [{ position: 7, magnitude: 9 }], EI);
  assert.ok(Math.abs(stations[0].deflection) < 1e-9, "left support should not move");
  assert.ok(Math.abs(stations.at(-1)!.deflection) < 1e-9, "right support should not move");
});

test("the solver's own verification reports a tiny error", () => {
  const { verification } = analyseSimplySupportedBeam(SPAN, [{ position: 4, magnitude: 6 }], EI);
  assert.ok(verification, "a single point load should produce a verification");
  assert.ok(verification!.momentErrorPercent < 0.01, `moment error was ${verification!.momentErrorPercent}%`);
  assert.ok(verification!.deflectionErrorPercent < 0.01, `deflection error was ${verification!.deflectionErrorPercent}%`);
});

test("two loads are handled, where no closed form is offered", () => {
  const result = analyseSimplySupportedBeam(SPAN, [
    { position: 3, magnitude: 4 },
    { position: 7, magnitude: 6 },
  ], EI);
  // Equilibrium still has to hold with any number of loads.
  within(result.reactions.left + result.reactions.right, 10, 0.001, "reactions sum to both loads");
  // Moments about the left support: R_right × L = Σ(P × a).
  within(result.reactions.right * SPAN, 4 * 3 + 6 * 7, 0.001, "moment equilibrium about the left support");
  assert.equal(result.verification, null, "no closed form is claimed for multiple loads");
});
