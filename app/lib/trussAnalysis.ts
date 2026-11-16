// Member forces, joint movements and support reactions for a 2D pin-jointed
// truss, plus a check of every member against the two ways a steel bar gives
// up: yielding and buckling.
//
// This uses the direct stiffness method — the same approach commercial
// structural software is built on. Each member is treated as a spring that
// only pushes or pulls along its own length. Every joint must end up in
// balance, which gives one equation per direction a joint can move. Solving
// those equations gives how far each joint moves; how much each member
// stretched or shortened then gives the force inside it.
//
// The reason for solving it this way, rather than the "method of joints" taught
// first in statics, is that the method of joints only works when there are
// exactly enough members to be solved by balance alone. A player can add as
// many members as they like, and the stiffness method does not care.
//
// It also notices when a design is not a structure at all. If some joints can
// move without stretching any member, the equations have no unique answer —
// engineers call that a mechanism. Instead of failing, the solver reports which
// joints are free to move.
//
// Sign conventions:
//   - x is positive to the right, y is positive upward.
//   - Member force is positive in tension (being pulled), negative in
//     compression (being squeezed).
//
// Assumptions, all of them worth knowing before trusting a number:
//   - Every joint is a frictionless pin, so members carry no bending.
//   - Loads act only at joints, and member self-weight is ignored.
//   - Small movements and linear-elastic material: forces are found on the
//     original shape, and doubling the load doubles every force.
//   - Buckling uses Euler's formula for a pin-ended column, with no allowance
//     for the imperfections real members have. Design codes are stricter.
//   - No safety factors. A member at 99% of its limit counts as holding here;
//     no real bridge would be allowed that close.

export type Support = "pin" | "roller";

export type TrussJoint = {
  /** Position in metres. */
  x: number;
  y: number;
  /** A pin stops movement both ways; a roller only stops vertical movement. */
  support?: Support;
};

export type TrussSection = {
  /** Cross-sectional area, in mm². Sets tension and crushing strength. */
  area: number;
  /** Second moment of area, in mm⁴. Sets resistance to buckling. */
  secondMoment: number;
};

export type TrussMember = {
  /** Indexes into the joints array. */
  from: number;
  to: number;
  section: TrussSection;
};

export type TrussLoad = {
  joint: number;
  /** Force components in kN. A weight pushing down is a negative fy. */
  fx: number;
  fy: number;
};

export type TrussMaterial = {
  /** Young's modulus, in MPa. */
  elasticModulus: number;
  /** Yield strength, in MPa. */
  yieldStrength: number;
  /** Density, in kg/m³. */
  density: number;
};

// Standard textbook values for ordinary structural steel (ASTM A36 grade).
export const STRUCTURAL_STEEL: TrussMaterial = {
  elasticModulus: 200_000,
  yieldStrength: 250,
  density: 7850,
};

export type MemberResult = {
  /** Length in metres. */
  length: number;
  /** Axial force in kN. Positive is tension, negative is compression. */
  force: number;
  /** Largest pull the member can take before the steel yields, in kN. */
  tensionCapacity: number;
  /** Largest push it can take, in kN: the smaller of crushing and buckling. */
  compressionCapacity: number;
  /** Whether buckling (rather than crushing) is what limits it in compression. */
  bucklingGoverns: boolean;
  /** Force divided by the capacity that applies to it. Above 1 means failure. */
  utilisation: number;
};

export type TrussSolution = {
  stable: true;
  members: MemberResult[];
  /** Movement of each joint, in metres. Unused joints stay at zero. */
  displacements: { dx: number; dy: number }[];
  /** Force each support pushes back with, in kN. */
  reactions: { joint: number; fx: number; fy: number }[];
  /** Index of the member closest to (or furthest past) its limit, or -1. */
  criticalMember: number;
  maxUtilisation: number;
  /**
   * The fraction of the applied load at which the first member fails. Because
   * the model is linear this is simply 1 / maxUtilisation: 2 means the truss
   * could carry twice the load, 0.5 means it fails at half of it.
   */
  loadFactor: number;
  /**
   * Largest out-of-balance force left at any free joint, as a fraction of the
   * largest applied load. A check on the solver itself: it should be
   * vanishingly small.
   */
  equilibriumError: number;
};

export type TrussMechanism = {
  stable: false;
  /** Joints that can move without any member changing length. */
  looseJoints: number[];
};

export type TrussResult = TrussSolution | TrussMechanism;

/** Length of a member in metres. */
export function memberLength(joints: TrussJoint[], member: { from: number; to: number }): number {
  const a = joints[member.from];
  const b = joints[member.to];
  return Math.hypot(b.x - a.x, b.y - a.y);
}

/** Largest pull, in kN, before the whole cross-section yields. */
export function yieldCapacity(section: TrussSection, material: TrussMaterial = STRUCTURAL_STEEL): number {
  // MPa is N/mm², so MPa × mm² is newtons.
  return (material.yieldStrength * section.area) / 1000;
}

/**
 * Euler's critical load for a pin-ended column, in kN: π²EI / L².
 * Note what is and is not in it — stiffness and length, but not strength. A
 * long thin member buckles sideways long before the steel itself is in trouble.
 */
export function eulerBucklingLoad(
  section: TrussSection,
  lengthMetres: number,
  material: TrussMaterial = STRUCTURAL_STEEL
): number {
  const lengthMm = lengthMetres * 1000;
  return (Math.PI ** 2 * material.elasticModulus * section.secondMoment) / (lengthMm * lengthMm) / 1000;
}

/** Mass of a member in kg. */
export function memberMass(
  section: TrussSection,
  lengthMetres: number,
  material: TrussMaterial = STRUCTURAL_STEEL
): number {
  // mm² to m² is a factor of 1e-6.
  return section.area * 1e-6 * lengthMetres * material.density;
}

export function analyseTruss(
  joints: TrussJoint[],
  members: TrussMember[],
  loads: TrussLoad[],
  material: TrussMaterial = STRUCTURAL_STEEL
): TrussResult {
  // A joint only takes part if something is attached to it or pushing on it.
  // The rest are empty grid points and are left out of the equations entirely.
  const active = joints.map(() => false);
  for (const member of members) {
    active[member.from] = true;
    active[member.to] = true;
  }
  for (const load of loads) active[load.joint] = true;

  // Give every direction a joint is free to move its own equation number.
  // A pin removes both directions; a roller removes only the vertical one.
  // -1 marks a direction that is held, or a joint that is not in use.
  const equationOf = joints.map(() => ({ x: -1, y: -1 }));
  const owner: { joint: number; axis: "x" | "y" }[] = [];
  joints.forEach((joint, index) => {
    if (!active[index]) return;
    if (joint.support !== "pin") {
      equationOf[index].x = owner.length;
      owner.push({ joint: index, axis: "x" });
    }
    if (joint.support === undefined) {
      equationOf[index].y = owner.length;
      owner.push({ joint: index, axis: "y" });
    }
  });
  const size = owner.length;

  // Geometry and axial stiffness (EA/L, in kN per metre) of each member.
  const geometry = members.map((member) => {
    const a = joints[member.from];
    const b = joints[member.to];
    const length = Math.hypot(b.x - a.x, b.y - a.y);
    return {
      length,
      cos: (b.x - a.x) / length,
      sin: (b.y - a.y) / length,
      // MPa × mm² is newtons; divide by 1000 for kN.
      stiffness: (material.elasticModulus * member.section.area) / 1000 / length,
    };
  });

  // Assemble the stiffness matrix: row i says how much force appears in
  // direction i when each other direction moves by one metre.
  const matrix: number[][] = Array.from({ length: size }, () => new Array<number>(size + 1).fill(0));
  members.forEach((member, m) => {
    const { cos, sin, stiffness } = geometry[m];
    // The member's four directions, in order: from-x, from-y, to-x, to-y.
    const equations = [equationOf[member.from].x, equationOf[member.from].y, equationOf[member.to].x, equationOf[member.to].y];
    const direction = [-cos, -sin, cos, sin];
    for (let i = 0; i < 4; i++) {
      if (equations[i] < 0) continue;
      for (let j = 0; j < 4; j++) {
        if (equations[j] < 0) continue;
        matrix[equations[i]][equations[j]] += stiffness * direction[i] * direction[j];
      }
    }
  });
  for (const load of loads) {
    const equations = equationOf[load.joint];
    if (equations.x >= 0) matrix[equations.x][size] += load.fx;
    if (equations.y >= 0) matrix[equations.y][size] += load.fy;
  }

  // Solve by Gauss-Jordan elimination with partial pivoting. A direction with
  // nothing left to pivot on is one the structure does not resist at all.
  let largestDiagonal = 0;
  for (let i = 0; i < size; i++) largestDiagonal = Math.max(largestDiagonal, Math.abs(matrix[i][i]));
  const tolerance = Math.max(largestDiagonal, 1) * 1e-9;

  const pivotColumnOfRow: number[] = [];
  const freeColumns: number[] = [];
  let row = 0;
  for (let column = 0; column < size; column++) {
    let best = row;
    for (let r = row + 1; r < size; r++) {
      if (Math.abs(matrix[r][column]) > Math.abs(matrix[best][column])) best = r;
    }
    if (row >= size || Math.abs(matrix[best][column]) <= tolerance) {
      freeColumns.push(column);
      continue;
    }
    [matrix[row], matrix[best]] = [matrix[best], matrix[row]];
    const pivot = matrix[row][column];
    for (let c = column; c <= size; c++) matrix[row][c] /= pivot;
    for (let r = 0; r < size; r++) {
      if (r === row) continue;
      const factor = matrix[r][column];
      if (factor === 0) continue;
      for (let c = column; c <= size; c++) matrix[r][c] -= factor * matrix[row][c];
    }
    pivotColumnOfRow.push(column);
    row++;
  }

  if (freeColumns.length > 0) {
    // Each unresisted direction defines a way the joints can move together
    // without stretching anything. Collect every joint that takes part in one.
    const loose = new Set<number>();
    for (const free of freeColumns) {
      loose.add(owner[free].joint);
      pivotColumnOfRow.forEach((column, r) => {
        if (Math.abs(matrix[r][free]) > 1e-6) loose.add(owner[column].joint);
      });
    }
    return { stable: false, looseJoints: [...loose].sort((a, b) => a - b) };
  }

  const displacements = joints.map((_, index) => ({
    dx: equationOf[index].x >= 0 ? matrix[equationOf[index].x][size] : 0,
    dy: equationOf[index].y >= 0 ? matrix[equationOf[index].y][size] : 0,
  }));

  // A member's force is its stiffness times how much longer it got, measured
  // along its own direction.
  let criticalMember = -1;
  let maxUtilisation = 0;
  const memberResults: MemberResult[] = members.map((member, m) => {
    const { length, cos, sin, stiffness } = geometry[m];
    const from = displacements[member.from];
    const to = displacements[member.to];
    const rawForce = stiffness * ((to.dx - from.dx) * cos + (to.dy - from.dy) * sin);
    // Round away floating-point dust so a member carrying nothing reads as 0.
    const force = Math.abs(rawForce) < 1e-9 ? 0 : rawForce;

    const tensionCapacity = yieldCapacity(member.section, material);
    const buckling = eulerBucklingLoad(member.section, length, material);
    const bucklingGoverns = buckling < tensionCapacity;
    const compressionCapacity = Math.min(buckling, tensionCapacity);
    const utilisation = force >= 0 ? force / tensionCapacity : -force / compressionCapacity;

    if (utilisation > maxUtilisation) {
      maxUtilisation = utilisation;
      criticalMember = m;
    }
    return { length, force, tensionCapacity, compressionCapacity, bucklingGoverns, utilisation };
  });

  // Add up, at every joint, the pull of each member attached to it plus any
  // applied load. At a free joint that should come to zero; at a support,
  // whatever is left over is what the support has to push back with.
  const net = joints.map(() => ({ fx: 0, fy: 0 }));
  members.forEach((member, m) => {
    const { cos, sin } = geometry[m];
    const force = memberResults[m].force;
    net[member.from].fx += force * cos;
    net[member.from].fy += force * sin;
    net[member.to].fx -= force * cos;
    net[member.to].fy -= force * sin;
  });
  let largestLoad = 0;
  for (const load of loads) {
    net[load.joint].fx += load.fx;
    net[load.joint].fy += load.fy;
    largestLoad = Math.max(largestLoad, Math.hypot(load.fx, load.fy));
  }

  const reactions: TrussSolution["reactions"] = [];
  let residual = 0;
  joints.forEach((joint, index) => {
    if (!active[index]) return;
    if (joint.support === "pin") {
      reactions.push({ joint: index, fx: -net[index].fx, fy: -net[index].fy });
    } else if (joint.support === "roller") {
      reactions.push({ joint: index, fx: 0, fy: -net[index].fy });
      residual = Math.max(residual, Math.abs(net[index].fx));
    } else {
      residual = Math.max(residual, Math.abs(net[index].fx), Math.abs(net[index].fy));
    }
  });

  return {
    stable: true,
    members: memberResults,
    displacements,
    reactions,
    criticalMember,
    maxUtilisation,
    loadFactor: maxUtilisation > 0 ? 1 / maxUtilisation : Infinity,
    equilibriumError: largestLoad > 0 ? residual / largestLoad : 0,
  };
}
