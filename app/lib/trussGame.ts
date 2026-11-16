// The rules of the Bridge Builder game, kept separate from the drawing code so
// they can be tested on their own: what counts as a legal member, how a design
// on the grid becomes a truss the solver understands, and how a result is
// scored.
//
// The ".ts" on these two imports is deliberate. The tests run this file
// directly in Node, which needs the full file name to find a module.
import {
  analyseTruss,
  memberMass,
  type TrussJoint,
  type TrussLoad,
  type TrussMember,
  type TrussResult,
} from "./trussAnalysis.ts";
import {
  EFFICIENT_FACTOR,
  GRID_SPACING_M,
  MAX_REACH_STEPS,
  SECTIONS,
  type DesignMember,
  type GridPoint,
  type SectionId,
  type TrussLevel,
} from "../data/trussLevels.ts";

export type MemberCheck = "ok" | "same-joint" | "outside" | "too-long" | "through-joint";

export function samePoint(a: GridPoint, b: GridPoint): boolean {
  return a[0] === b[0] && a[1] === b[1];
}

export function inLevel(level: TrussLevel, point: GridPoint): boolean {
  return (
    Number.isInteger(point[0]) &&
    Number.isInteger(point[1]) &&
    point[0] >= 0 &&
    point[0] <= level.columns &&
    point[1] >= level.rowMin &&
    point[1] <= level.rowMax
  );
}

function greatestCommonDivisor(a: number, b: number): number {
  return b === 0 ? a : greatestCommonDivisor(b, a % b);
}

/** Whether a member between two grid points is allowed. */
export function checkMember(level: TrussLevel, a: GridPoint, b: GridPoint): MemberCheck {
  if (!inLevel(level, a) || !inLevel(level, b)) return "outside";
  if (samePoint(a, b)) return "same-joint";
  const stepsX = Math.abs(a[0] - b[0]);
  const stepsY = Math.abs(a[1] - b[1]);
  if (stepsX > MAX_REACH_STEPS || stepsY > MAX_REACH_STEPS) return "too-long";
  // If the horizontal and vertical step counts share a factor, the straight
  // line between the two points lands exactly on another grid joint on the
  // way. A member cannot ghost through a joint, so it has to be built as two.
  if (greatestCommonDivisor(stepsX, stepsY) !== 1) return "through-joint";
  return "ok";
}

/** Whether two design members join the same pair of joints, in either order. */
export function sameSpan(member: { a: GridPoint; b: GridPoint }, a: GridPoint, b: GridPoint): boolean {
  return (samePoint(member.a, a) && samePoint(member.b, b)) || (samePoint(member.a, b) && samePoint(member.b, a));
}

/** Length of a design member in metres. */
export function designMemberLength(member: { a: GridPoint; b: GridPoint }): number {
  return Math.hypot(member.a[0] - member.b[0], member.a[1] - member.b[1]) * GRID_SPACING_M;
}

/** Total steel in a design, in kg. */
export function designMass(design: DesignMember[]): number {
  return design.reduce((sum, member) => sum + memberMass(SECTIONS[member.section], designMemberLength(member)), 0);
}

/** Position of a grid point in the solver's joint list. */
export function jointIndex(level: TrussLevel, point: GridPoint): number {
  return (point[1] - level.rowMin) * (level.columns + 1) + point[0];
}

/** Turn a level and a design drawn on its grid into the solver's inputs. */
export function buildTruss(
  level: TrussLevel,
  design: DesignMember[]
): { joints: TrussJoint[]; members: TrussMember[]; loads: TrussLoad[] } {
  const joints: TrussJoint[] = [];
  for (let row = level.rowMin; row <= level.rowMax; row++) {
    for (let column = 0; column <= level.columns; column++) {
      const support = level.supports.find((s) => samePoint(s.at, [column, row]));
      joints.push({ x: column * GRID_SPACING_M, y: row * GRID_SPACING_M, support: support?.type });
    }
  }
  const members: TrussMember[] = design.map((member) => ({
    from: jointIndex(level, member.a),
    to: jointIndex(level, member.b),
    section: SECTIONS[member.section],
  }));
  // A weight pushes down, which is the negative y direction.
  const loads: TrussLoad[] = level.loads.map((load) => ({ joint: jointIndex(level, load.at), fx: 0, fy: -load.kN }));
  return { joints, members, loads };
}

export type DesignOutcome = {
  result: TrussResult;
  /** Total steel, in kg. */
  mass: number;
  /** True when the design is a real structure and no member is past its limit. */
  holds: boolean;
};

export function testDesign(level: TrussLevel, design: DesignMember[]): DesignOutcome {
  const { joints, members, loads } = buildTruss(level, design);
  const result = analyseTruss(joints, members, loads);
  return {
    result,
    mass: designMass(design),
    // A tiny tolerance so a member sitting at exactly 100% is not failed by
    // floating-point rounding.
    holds: result.stable && result.maxUtilisation <= 1 + 1e-9,
  };
}

/** Mass of the level's reference design, in kg, rounded to what is displayed. */
export function referenceMass(level: TrussLevel): number {
  return roundMass(designMass(level.reference));
}

/** Masses are shown, stored and compared to one decimal place. */
export function roundMass(kg: number): number {
  return Math.round(kg * 10) / 10;
}

export type Tier = "stands" | "efficient" | "reference";

/** Rating for a design that holds, by how its mass compares to the reference. */
export function tierFor(massKg: number, referenceKg: number): Tier {
  const mass = roundMass(massKg);
  if (mass <= referenceKg) return "reference";
  if (mass <= efficientLimit(referenceKg)) return "efficient";
  return "stands";
}

export function efficientLimit(referenceKg: number): number {
  return Math.round(referenceKg * EFFICIENT_FACTOR);
}

const SECTION_IDS: readonly string[] = ["rod", "tube", "heavyTube"];

function asGridPoint(value: unknown): GridPoint | null {
  if (!Array.isArray(value) || value.length !== 2) return null;
  const [column, row] = value as unknown[];
  if (typeof column !== "number" || typeof row !== "number") return null;
  return [column, row];
}

/**
 * Rebuild a design from something read out of browser storage. Stored data
 * can be stale, hand-edited or from an older version of a level, so anything
 * that is not a legal member of this level is dropped rather than trusted.
 */
export function sanitiseDesign(level: TrussLevel, raw: unknown): DesignMember[] {
  if (!Array.isArray(raw)) return [];
  const design: DesignMember[] = [];
  for (const item of raw as unknown[]) {
    if (typeof item !== "object" || item === null) continue;
    const candidate = item as { a?: unknown; b?: unknown; section?: unknown };
    const a = asGridPoint(candidate.a);
    const b = asGridPoint(candidate.b);
    if (!a || !b || typeof candidate.section !== "string" || !SECTION_IDS.includes(candidate.section)) continue;
    if (checkMember(level, a, b) !== "ok") continue;
    if (design.some((existing) => sameSpan(existing, a, b))) continue;
    design.push({ a, b, section: candidate.section as SectionId });
  }
  return design;
}
