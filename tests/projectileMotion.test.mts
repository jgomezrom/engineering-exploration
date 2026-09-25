import { test } from "node:test";
import assert from "node:assert/strict";
import {
  simulateProjectile,
  AIR_DENSITY,
  SPHERE_DRAG_COEFFICIENT,
  GRAVITY,
} from "../app/lib/projectileMotion.ts";

const within = (actual: number, expected: number, percent: number, label: string) => {
  const error = Math.abs(actual - expected) / Math.abs(expected);
  assert.ok(
    error <= percent / 100,
    `${label}: got ${actual}, expected ${expected} (off by ${(error * 100).toFixed(4)}%, allowed ${percent}%)`
  );
};

/**
 * The same physics as the module under test, integrated with plain Euler and
 * very small steps. Written out here on purpose: agreeing with a different
 * method is a real check, while agreeing with itself is not.
 */
function eulerRange(speed: number, degrees: number, mass: number, diameter = 0.07): number {
  const area = Math.PI * (diameter / 2) ** 2;
  const k = (0.5 * AIR_DENSITY * SPHERE_DRAG_COEFFICIENT * area) / mass;
  const angle = (degrees * Math.PI) / 180;
  let x = 0;
  let y = 0;
  let vx = speed * Math.cos(angle);
  let vy = speed * Math.sin(angle);
  const dt = 0.0002;
  for (let i = 0; i < 400000; i++) {
    const previousX = x;
    const previousY = y;
    const speedNow = Math.hypot(vx, vy);
    const ax = -k * speedNow * vx;
    const ay = -GRAVITY - k * speedNow * vy;
    x += vx * dt;
    y += vy * dt;
    vx += ax * dt;
    vy += ay * dt;
    if (y < 0) {
      const fraction = previousY / (previousY - y);
      return previousX + fraction * (x - previousX);
    }
  }
  return x;
}

test("with the air switched off, the solver reproduces the textbook range", () => {
  for (const [speed, degrees] of [[20, 45], [35, 30], [50, 60], [15, 75]]) {
    const { vacuum, closedFormVacuumRange, integratorErrorPercent } = simulateProjectile(speed, degrees, 0.15);
    const expected = (speed * speed * Math.sin((2 * degrees * Math.PI) / 180)) / GRAVITY;
    within(vacuum.range, expected, 0.01, `vacuum range (${speed} m/s, ${degrees}°)`);
    within(closedFormVacuumRange, expected, 0.001, "reported closed-form range");
    assert.ok(integratorErrorPercent < 0.01, `reported integrator error was ${integratorErrorPercent}%`);
  }
});

test("vacuum apex and flight time match their closed forms", () => {
  const speed = 40;
  const degrees = 50;
  const angle = (degrees * Math.PI) / 180;
  const { vacuum } = simulateProjectile(speed, degrees, 0.15);
  within(vacuum.apex, (speed * Math.sin(angle)) ** 2 / (2 * GRAVITY), 0.1, "vacuum apex");
  within(vacuum.flightTime, (2 * speed * Math.sin(angle)) / GRAVITY, 0.1, "vacuum flight time");
});

test("the drag solution agrees with an independently written integrator", () => {
  const cases: [number, number, number][] = [
    [45, 45, 0.15],
    [30, 30, 0.15],
    [45, 45, 1.0],
    [45, 45, 0.05],
    [50, 75, 0.4],
  ];
  for (const [speed, degrees, mass] of cases) {
    const { withDrag } = simulateProjectile(speed, degrees, mass);
    within(withDrag.range, eulerRange(speed, degrees, mass), 0.5, `drag range (${speed} m/s, ${degrees}°, ${mass} kg)`);
  }
});

test("air always costs range, never adds it", () => {
  for (const [speed, degrees, mass] of [[20, 45, 0.15], [50, 30, 0.6], [35, 70, 0.05]]) {
    const { withDrag, vacuum, rangeLostPercent } = simulateProjectile(speed, degrees, mass);
    assert.ok(withDrag.range < vacuum.range, `drag should shorten the flight (${speed} m/s, ${degrees}°)`);
    assert.ok(withDrag.apex <= vacuum.apex + 1e-9, "drag should not raise the apex");
    assert.ok(rangeLostPercent > 0 && rangeLostPercent < 100, `implausible range loss: ${rangeLostPercent}%`);
  }
});

test("a heavier ball of the same size loses less to the air", () => {
  const losses = [0.05, 0.1, 0.25, 0.5, 1].map(
    (mass) => simulateProjectile(45, 45, mass).rangeLostPercent
  );
  for (let i = 1; i < losses.length; i++) {
    assert.ok(
      losses[i] < losses[i - 1],
      `loss should fall as mass rises, but got ${losses[i - 1]}% then ${losses[i]}%`
    );
  }
  // A very heavy ball should approach the vacuum answer.
  assert.ok(losses.at(-1)! < 20, `a 1 kg ball still lost ${losses.at(-1)}% of its range`);
});

test("both trajectories start at the launch point and land on the ground", () => {
  const { withDrag, vacuum } = simulateProjectile(30, 40, 0.2);
  for (const [name, path] of [["drag", withDrag], ["vacuum", vacuum]] as const) {
    assert.equal(path.points[0].x, 0, `${name} path should start at x = 0`);
    assert.equal(path.points[0].y, 0, `${name} path should start at y = 0`);
    assert.ok(Math.abs(path.points.at(-1)!.y) < 1e-9, `${name} path should end on the ground`);
    within(path.points.at(-1)!.x, path.range, 0.001, `${name} path ends at its reported range`);
  }
});
