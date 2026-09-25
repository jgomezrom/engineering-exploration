// Motion of a simple pendulum, integrated rather than looked up.
//
// The formula every textbook starts with, T = 2π√(L/g), is not the period of a
// pendulum. It's the period of a pendulum swinging through a *small* angle,
// where sin θ ≈ θ. This module solves the equation that approximation comes
// from — θ'' = −(g/L)·sin θ — with fourth-order Runge-Kutta, so the simulator
// can show how far the textbook answer drifts once the swing gets wide.
//
// Three periods end up on screen, and they're three different things:
//   - `period`, measured from the integration itself
//   - `exactPeriod`, the closed-form answer written with an elliptic integral
//   - `smallAnglePeriod`, the textbook formula
// The first two agree to about a millionth of a percent, which is the check
// that the integrator is working. The gap between those and the third is the
// point: it's the cost of the approximation, and it grows with amplitude.
//
// Assumptions: a point mass on a massless rigid rod, no air resistance, no
// friction at the pivot, and a gravitational field that doesn't vary over the
// swing. Drop any of those and the real period goes up.

export type PendulumSample = {
  /** Seconds since release. */
  t: number;
  /** Angle from vertical, in radians. */
  theta: number;
};

export type PendulumMotion = {
  samples: PendulumSample[];
  /** Period measured from the integrated motion, in seconds. */
  period: number;
  /** The exact period, from the elliptic-integral solution, in seconds. */
  exactPeriod: number;
  /** The textbook small-angle period, 2π√(L/g), in seconds. */
  smallAnglePeriod: number;
  /** How far the integration lands from the exact period, as a percentage. */
  integrationErrorPercent: number;
  /** How far the textbook formula lands from the exact period, as a percentage. */
  smallAngleErrorPercent: number;
};

/** Arithmetic-geometric mean — converges quadratically, so a few passes is plenty. */
function agm(a: number, b: number): number {
  for (let i = 0; i < 12 && Math.abs(a - b) > 1e-15; i++) {
    const nextA = (a + b) / 2;
    b = Math.sqrt(a * b);
    a = nextA;
  }
  return (a + b) / 2;
}

/**
 * The exact period of a simple pendulum released from rest.
 *
 * T = 4√(L/g)·K(sin(θ₀/2)), and the complete elliptic integral K can be written
 * as π / (2·AGM(1, cos(θ₀/2))), which reduces the whole thing to
 * T = T_small / AGM(1, cos(θ₀/2)) — no numerical integration required.
 */
export function exactPendulumPeriod(lengthMetres: number, amplitudeRadians: number, gravity: number): number {
  const smallAngle = 2 * Math.PI * Math.sqrt(lengthMetres / gravity);
  return smallAngle / agm(1, Math.cos(amplitudeRadians / 2));
}

/**
 * @param lengthMetres     Pendulum length, in metres.
 * @param releaseDegrees   Angle it is released from, measured from vertical.
 * @param gravity          Gravitational acceleration, in m/s².
 * @param periodsToTrace   How much of the swing to return samples for.
 */
export function simulatePendulum(
  lengthMetres: number,
  releaseDegrees: number,
  gravity = 9.81,
  periodsToTrace = 2
): PendulumMotion {
  const amplitude = (releaseDegrees * Math.PI) / 180;
  const smallAnglePeriod = 2 * Math.PI * Math.sqrt(lengthMetres / gravity);
  const exactPeriod = exactPendulumPeriod(lengthMetres, amplitude, gravity);

  // Step size is tied to the period rather than fixed, so a short fast swing
  // gets the same resolution as a long slow one.
  const steps = 1200;
  const dt = (exactPeriod * periodsToTrace) / steps;
  const k = gravity / lengthMetres;

  // Released from rest: the bob starts at the release angle with no speed.
  let theta = amplitude;
  let omega = 0;
  const samples: PendulumSample[] = [{ t: 0, theta }];

  // Quarter of a period is the time from release to passing through vertical,
  // and the swing is symmetric, so the full period is four of those. The
  // crossing is interpolated between steps rather than rounded to one.
  let quarterPeriod = 0;

  const angularAcceleration = (angle: number) => -k * Math.sin(angle);

  for (let i = 1; i <= steps; i++) {
    // Classic RK4 on the pair (θ, ω).
    const k1t = omega;
    const k1w = angularAcceleration(theta);
    const k2t = omega + (dt / 2) * k1w;
    const k2w = angularAcceleration(theta + (dt / 2) * k1t);
    const k3t = omega + (dt / 2) * k2w;
    const k3w = angularAcceleration(theta + (dt / 2) * k2t);
    const k4t = omega + dt * k3w;
    const k4w = angularAcceleration(theta + dt * k3t);

    const previousTheta = theta;
    theta += (dt / 6) * (k1t + 2 * k2t + 2 * k3t + k4t);
    omega += (dt / 6) * (k1w + 2 * k2w + 2 * k3w + k4w);

    if (quarterPeriod === 0 && previousTheta > 0 && theta <= 0) {
      const fraction = previousTheta / (previousTheta - theta);
      quarterPeriod = (i - 1 + fraction) * dt;
    }

    samples.push({ t: i * dt, theta });
  }

  const period = quarterPeriod * 4;
  const percentDifference = (value: number, reference: number) =>
    reference === 0 ? 0 : (Math.abs(value - reference) / reference) * 100;

  return {
    samples,
    period,
    exactPeriod,
    smallAnglePeriod,
    integrationErrorPercent: percentDifference(period, exactPeriod),
    smallAngleErrorPercent: percentDifference(smallAnglePeriod, exactPeriod),
  };
}
