// Shear, bending moment, slope and deflection for a simply supported beam
// carrying point loads.
//
// This solves the beam numerically rather than substituting into a textbook
// formula. Reactions come from static equilibrium; shear is the running sum of
// the loads to the left of each station; and moment, slope and deflection are
// each integrated from the station before it. That is deliberate: the same
// routine handles any number of point loads anywhere on the span, while the
// closed-form solution only covers one load at a time.
//
// The closed-form answers are still computed, in `verification`, for the single
// load case where they exist — not to draw the diagrams, but to check the
// numerical result against an exact one. The simulator shows that error on
// screen, because a result you haven't checked isn't an answer yet.
//
// Sign conventions, stated because they differ between textbooks:
//   - Downward loads are positive.
//   - Shear is positive when the part of the beam left of a cut is pushed up.
//   - Moment is positive when the beam sags (tension on the bottom face).
//   - Deflection is reported positive downward, which is the direction it
//     actually moves under a downward load.
//
// Assumptions, all of them worth knowing before trusting a number:
//   - Euler-Bernoulli beam theory: plane sections stay plane, and shear
//     deformation is ignored. Fine for a slender beam, wrong for a stubby one.
//   - Small deflections, so the span doesn't shorten as the beam bends.
//   - Linear-elastic material, uniform cross-section along the span.
//   - Self-weight ignored — only the loads passed in are carried.

export type PointLoad = {
  /** Distance from the left support, in metres. */
  position: number;
  /** Downward force, in kN. */
  magnitude: number;
};

export type BeamStation = {
  /** Distance from the left support, in metres. */
  x: number;
  /** Shear force at this station, in kN. */
  shear: number;
  /** Bending moment at this station, in kN·m. */
  moment: number;
  /** Downward deflection at this station, in metres. */
  deflection: number;
};

export type BeamResult = {
  stations: BeamStation[];
  /** Support reactions, in kN, both acting upward. */
  reactions: { left: number; right: number };
  maxShear: number;
  maxMoment: { value: number; at: number };
  maxDeflection: { value: number; at: number };
  /**
   * How far the numerical solution lands from the exact one, as a percentage.
   * Only available for a single point load, which is the case with a published
   * closed-form solution to check against.
   */
  verification: {
    exactMoment: number;
    exactDeflection: number;
    momentErrorPercent: number;
    deflectionErrorPercent: number;
  } | null;
};

/**
 * @param span             Distance between supports, in metres.
 * @param loads            Downward point loads, in kN.
 * @param flexuralRigidity EI, in kN·m² — the material's stiffness times the
 *                         cross-section's resistance to bending, combined.
 * @param segments         Stations the span is cut into. More is more accurate
 *                         and the verification figures show by how much.
 */
export function analyseSimplySupportedBeam(
  span: number,
  loads: PointLoad[],
  flexuralRigidity: number,
  segments = 400
): BeamResult {
  const dx = span / segments;

  // Equilibrium. Taking moments about the left support gives the right
  // reaction directly; vertical equilibrium then gives the left one.
  const totalLoad = loads.reduce((sum, load) => sum + load.magnitude, 0);
  const right = loads.reduce((sum, load) => sum + (load.magnitude * load.position) / span, 0);
  const left = totalLoad - right;

  // Each load is snapped to its nearest station. That keeps shear constant
  // between stations, which in turn makes the moment integration below exact
  // rather than approximate across the step in shear under a point load.
  const loadAtStation = new Array<number>(segments + 1).fill(0);
  for (const load of loads) {
    const index = Math.min(segments, Math.max(0, Math.round(load.position / dx)));
    loadAtStation[index] += load.magnitude;
  }

  const x: number[] = [];
  const shear: number[] = [];
  const moment: number[] = [];
  let runningShear = left;
  let runningMoment = 0;

  for (let i = 0; i <= segments; i++) {
    // Shear is taken just to the right of the station, so a load sitting on it
    // has already been subtracted — the standard way to read a jump.
    runningShear -= loadAtStation[i];
    x.push(i * dx);
    shear.push(runningShear);
    moment.push(runningMoment);
    // Moment is the area under the shear diagram. Shear is constant across the
    // segment, so this rectangle is the exact area, not an approximation.
    runningMoment += runningShear * dx;
  }

  // Curvature is moment over flexural rigidity. Integrating it once gives
  // slope, and again gives the deflected shape.
  const curvature = moment.map((m) => m / flexuralRigidity);
  const slope: number[] = [0];
  const vertical: number[] = [0];
  for (let i = 1; i <= segments; i++) {
    slope.push(slope[i - 1] + 0.5 * (curvature[i - 1] + curvature[i]) * dx);
    vertical.push(vertical[i - 1] + 0.5 * (slope[i - 1] + slope[i]) * dx);
  }

  // Starting the integration with zero slope satisfies the left support but
  // leaves the beam floating above or below the right one. Deflection varies
  // linearly with that starting slope, so a single correction lands the far
  // end exactly on its support — the boundary condition the supports impose.
  const startingSlopeCorrection = -vertical[segments] / span;
  // Flip the sign last: the integration works in upward-positive coordinates,
  // and a downward deflection is what actually gets reported.
  const deflection = vertical.map((v, i) => -(v + startingSlopeCorrection * x[i]));

  const stations: BeamStation[] = x.map((xi, i) => ({
    x: xi,
    shear: shear[i],
    moment: moment[i],
    deflection: deflection[i],
  }));

  let maxMoment = { value: 0, at: 0 };
  let maxDeflection = { value: 0, at: 0 };
  let maxShear = 0;
  for (const station of stations) {
    if (Math.abs(station.moment) > Math.abs(maxMoment.value)) maxMoment = { value: station.moment, at: station.x };
    if (Math.abs(station.deflection) > Math.abs(maxDeflection.value)) maxDeflection = { value: station.deflection, at: station.x };
    if (Math.abs(station.shear) > maxShear) maxShear = Math.abs(station.shear);
  }

  return {
    stations,
    reactions: { left, right },
    maxShear,
    maxMoment,
    maxDeflection,
    verification: verifyAgainstClosedForm(span, loads, flexuralRigidity, maxMoment.value, maxDeflection.value),
  };
}

/**
 * The published solution for a simply supported beam under one point load. Used
 * only to check the numerical result — see any mechanics of materials text
 * (Hibbeler, Beer & Johnston) for the derivation.
 */
function verifyAgainstClosedForm(
  span: number,
  loads: PointLoad[],
  flexuralRigidity: number,
  numericalMoment: number,
  numericalDeflection: number
): BeamResult["verification"] {
  if (loads.length !== 1) return null;

  const load = loads[0].magnitude;
  const a = loads[0].position;
  const b = span - a;
  if (a <= 0 || b <= 0) return null;

  // Peak moment sits under the load: M = Pab/L.
  const exactMoment = (load * a * b) / span;

  // Peak deflection sits on the longer side of the load, at
  // x = sqrt((L² - c²)/3) from the far support, where c is the shorter distance.
  const shorter = Math.min(a, b);
  const exactDeflection =
    (load * shorter * Math.pow(span * span - shorter * shorter, 1.5)) /
    (9 * Math.sqrt(3) * span * flexuralRigidity);

  const percentError = (numeric: number, exact: number) =>
    exact === 0 ? 0 : (Math.abs(numeric - exact) / Math.abs(exact)) * 100;

  return {
    exactMoment,
    exactDeflection,
    momentErrorPercent: percentError(numericalMoment, exactMoment),
    deflectionErrorPercent: percentError(numericalDeflection, exactDeflection),
  };
}
