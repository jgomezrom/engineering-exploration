// Projectile motion with air resistance, integrated rather than looked up.
//
// The range formula from physics class, R = v²·sin(2θ)/g, describes a throw in
// a vacuum. Air is not a vacuum, and for anything light and fast the difference
// isn't a rounding error — a ball thrown hard can land nearer half that range
// than all of it. This module integrates the motion with drag included, and
// runs the same integrator with drag switched off so the vacuum answer it
// produces can be checked against the closed-form one.
//
// Drag on a blunt body at these speeds goes with the square of velocity:
//
//     F_drag = ½ · ρ · C_d · A · |v|² , opposing the direction of travel
//
// which makes the equations of motion coupled and non-separable — there's no
// tidy closed-form solution to fall back on, which is exactly why this one has
// to be integrated.
//
// Assumptions: constant air density (no altitude effect over the flight), a
// smooth sphere, no wind, no spin. Spin matters a great deal in real sport —
// backspin generates lift and is most of why a golf ball carries — and it is
// not modelled here.

/** Sea-level air density at 15 °C, the standard atmosphere value, in kg/m³. */
export const AIR_DENSITY = 1.225;
/** Drag coefficient of a smooth sphere at the Reynolds numbers of a thrown ball. */
export const SPHERE_DRAG_COEFFICIENT = 0.47;
/** Standard gravity, in m/s². */
export const GRAVITY = 9.81;

export type TrajectoryPoint = {
  /** Seconds since launch. */
  t: number;
  /** Horizontal distance from the launch point, in metres. */
  x: number;
  /** Height above the launch point, in metres. */
  y: number;
};

export type Trajectory = {
  points: TrajectoryPoint[];
  /** Horizontal distance covered before returning to launch height, in metres. */
  range: number;
  /** Greatest height above the launch point, in metres. */
  apex: number;
  /** Time from launch to landing, in seconds. */
  flightTime: number;
};

export type ProjectileResult = {
  withDrag: Trajectory;
  vacuum: Trajectory;
  /** How much range the air takes away, as a percentage of the vacuum range. */
  rangeLostPercent: number;
  /**
   * The vacuum run, produced by this same integrator, measured against the
   * closed-form range formula. Small here means the integrator is sound, which
   * is the only reason to trust the drag run, where no formula exists to check.
   */
  integratorErrorPercent: number;
  closedFormVacuumRange: number;
};

type State = { x: number; y: number; vx: number; vy: number };

function integrate(speed: number, angleRadians: number, dragPerMass: number, dt: number, maxSteps: number): Trajectory {
  let state: State = {
    x: 0,
    y: 0,
    vx: speed * Math.cos(angleRadians),
    vy: speed * Math.sin(angleRadians),
  };

  const derivative = (s: State) => {
    const speedNow = Math.hypot(s.vx, s.vy);
    return {
      x: s.vx,
      y: s.vy,
      // Drag acts opposite the direction of travel, and its size goes with
      // speed squared — hence the speed × velocity-component product.
      vx: -dragPerMass * speedNow * s.vx,
      vy: -GRAVITY - dragPerMass * speedNow * s.vy,
    };
  };

  const step = (s: State, h: number): State => {
    const a = derivative(s);
    const b = derivative({ x: s.x + (h / 2) * a.x, y: s.y + (h / 2) * a.y, vx: s.vx + (h / 2) * a.vx, vy: s.vy + (h / 2) * a.vy });
    const c = derivative({ x: s.x + (h / 2) * b.x, y: s.y + (h / 2) * b.y, vx: s.vx + (h / 2) * b.vx, vy: s.vy + (h / 2) * b.vy });
    const d = derivative({ x: s.x + h * c.x, y: s.y + h * c.y, vx: s.vx + h * c.vx, vy: s.vy + h * c.vy });
    return {
      x: s.x + (h / 6) * (a.x + 2 * b.x + 2 * c.x + d.x),
      y: s.y + (h / 6) * (a.y + 2 * b.y + 2 * c.y + d.y),
      vx: s.vx + (h / 6) * (a.vx + 2 * b.vx + 2 * c.vx + d.vx),
      vy: s.vy + (h / 6) * (a.vy + 2 * b.vy + 2 * c.vy + d.vy),
    };
  };

  const points: TrajectoryPoint[] = [{ t: 0, x: 0, y: 0 }];
  let apex = 0;
  let range = 0;
  let flightTime = 0;

  for (let i = 1; i <= maxSteps; i++) {
    const previous = state;
    state = step(state, dt);
    apex = Math.max(apex, state.y);

    if (state.y < 0) {
      // Landing lands between two steps. Interpolating across it is worth more
      // than another thousand steps would be.
      const fraction = previous.y / (previous.y - state.y);
      range = previous.x + fraction * (state.x - previous.x);
      flightTime = (i - 1 + fraction) * dt;
      points.push({ t: flightTime, x: range, y: 0 });
      break;
    }

    points.push({ t: i * dt, x: state.x, y: state.y });
    range = state.x;
    flightTime = i * dt;
  }

  return { points, range, apex, flightTime };
}

/**
 * @param speed        Launch speed, in m/s.
 * @param angleDegrees Launch angle above horizontal.
 * @param massKg       Mass of the ball, in kg.
 * @param diameterM    Diameter of the ball, in metres.
 */
export function simulateProjectile(
  speed: number,
  angleDegrees: number,
  massKg: number,
  diameterM = 0.07
): ProjectileResult {
  const angle = (angleDegrees * Math.PI) / 180;
  const area = Math.PI * (diameterM / 2) ** 2;
  // Everything about the ball that matters to drag, divided by its mass —
  // which is why a heavy ball of the same size flies so much closer to vacuum.
  const dragPerMass = (0.5 * AIR_DENSITY * SPHERE_DRAG_COEFFICIENT * area) / massKg;

  // Vacuum flight time sets the step size; the drag run is always shorter.
  const vacuumFlightTime = (2 * speed * Math.sin(angle)) / GRAVITY;
  const dt = Math.max(vacuumFlightTime / 600, 1e-4);

  const withDrag = integrate(speed, angle, dragPerMass, dt, 20000);
  const vacuum = integrate(speed, angle, 0, dt, 20000);

  const closedFormVacuumRange = (speed * speed * Math.sin(2 * angle)) / GRAVITY;
  const integratorErrorPercent =
    closedFormVacuumRange === 0 ? 0 : (Math.abs(vacuum.range - closedFormVacuumRange) / closedFormVacuumRange) * 100;
  const rangeLostPercent = vacuum.range === 0 ? 0 : ((vacuum.range - withDrag.range) / vacuum.range) * 100;

  return { withDrag, vacuum, rangeLostPercent, integratorErrorPercent, closedFormVacuumRange };
}
