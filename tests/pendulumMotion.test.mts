import { test } from "node:test";
import assert from "node:assert/strict";
import { simulatePendulum, exactPendulumPeriod } from "../app/lib/pendulumMotion.ts";

// The exact period of a simple pendulum is T = 4√(L/g)·K(sin(θ₀/2)), with K the
// complete elliptic integral of the first kind. The expectations below are
// built from published values of that integral rather than from the module
// under test.

const GRAVITY = 9.81;

const within = (actual: number, expected: number, percent: number, label: string) => {
  const error = Math.abs(actual - expected) / Math.abs(expected);
  assert.ok(
    error <= percent / 100,
    `${label}: got ${actual}, expected ${expected} (off by ${(error * 100).toFixed(5)}%, allowed ${percent}%)`
  );
};

test("small swings match the textbook formula closely", () => {
  const length = 1;
  const { period, smallAnglePeriod } = simulatePendulum(length, 2, GRAVITY);
  // At 2° the small-angle approximation is good to well under a tenth of a
  // percent — which is exactly why it's taught.
  within(period, smallAnglePeriod, 0.05, "period at 2°");
});

test("wide swings take measurably longer than the textbook formula", () => {
  const { period, smallAnglePeriod, smallAngleErrorPercent } = simulatePendulum(1, 45, GRAVITY);
  assert.ok(period > smallAnglePeriod, "a 45° swing must be slower than the small-angle formula predicts");
  // Published ratio of true to small-angle period at 45° is 1.03997...
  within(period / smallAnglePeriod, 1.03997, 0.01, "period ratio at 45°");
  assert.ok(smallAngleErrorPercent > 3.5, `the reported gap at 45° was only ${smallAngleErrorPercent}%`);
});

test("the integration agrees with the exact elliptic-integral period", () => {
  for (const degrees of [5, 15, 30, 45]) {
    for (const length of [0.3, 1, 2]) {
      const { period, exactPeriod, integrationErrorPercent } = simulatePendulum(length, degrees, GRAVITY);
      within(period, exactPeriod, 0.01, `integrated period (${length} m, ${degrees}°)`);
      assert.ok(
        integrationErrorPercent < 0.01,
        `reported integration error at ${degrees}° was ${integrationErrorPercent}%`
      );
    }
  }
});

test("period scales with the square root of length", () => {
  const short = simulatePendulum(1, 20, GRAVITY).period;
  const long = simulatePendulum(4, 20, GRAVITY).period;
  // Four times the length is twice the period, whatever the amplitude.
  within(long / short, 2, 0.01, "period ratio for 4× the length");
});

test("amplitude is conserved — the swing neither grows nor decays", () => {
  const release = 40;
  const { samples } = simulatePendulum(1, release, GRAVITY);
  const peak = Math.max(...samples.map((s) => Math.abs((s.theta * 180) / Math.PI)));
  // No friction is modelled, so energy conservation demands the bob come back
  // to its release angle and never past it. Drift here would mean the
  // integrator is leaking or adding energy.
  within(peak, release, 0.05, "peak angle over two full periods");
});

test("the exact period helper matches known values", () => {
  const length = 1;
  const smallAngle = 2 * Math.PI * Math.sqrt(length / GRAVITY);
  // Published ratios of exact to small-angle period.
  within(exactPendulumPeriod(length, (20 * Math.PI) / 180, GRAVITY) / smallAngle, 1.00767, 0.01, "ratio at 20°");
  within(exactPendulumPeriod(length, (90 * Math.PI) / 180, GRAVITY) / smallAngle, 1.18034, 0.01, "ratio at 90°");
});

test("the swing starts at the release angle, from rest", () => {
  const { samples } = simulatePendulum(1.5, 30, GRAVITY);
  within((samples[0].theta * 180) / Math.PI, 30, 0.001, "starting angle");
  assert.equal(samples[0].t, 0, "the trace starts at t = 0");
});
