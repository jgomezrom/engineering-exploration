import type { Support, TrussSection } from "../lib/trussAnalysis";

// Everything the Bridge Builder game needs that is not a translation: the
// three steel sections a player can build with, and the levels themselves.
//
// The grid is the same for every level: joints sit 2 m apart. A grid point is
// written as [column, row], with rows counted upward from the deck (row 0), so
// negative rows are below it.

export const GRID_SPACING_M = 2;

/** How far a single member may reach, in grid steps, in each direction. */
export const MAX_REACH_STEPS = 3;

export type SectionId = "rod" | "tube" | "heavyTube";

export const SECTION_ORDER: SectionId[] = ["rod", "tube", "heavyTube"];

type SectionShape = { outerDiameter: number; wall: number | null };

// A solid round bar and two hollow round tubes. Dimensions are in mm; the
// area and second moment of area are worked out from them below rather than
// typed in, so the numbers the solver uses can always be traced back to a shape.
const SHAPES: Record<SectionId, SectionShape> = {
  rod: { outerDiameter: 20, wall: null },
  tube: { outerDiameter: 80, wall: 4 },
  heavyTube: { outerDiameter: 140, wall: 8 },
};

function sectionFromShape({ outerDiameter, wall }: SectionShape): TrussSection {
  const inner = wall === null ? 0 : outerDiameter - 2 * wall;
  return {
    // Area of a circle (or ring): π/4 · (D² − d²)
    area: (Math.PI / 4) * (outerDiameter ** 2 - inner ** 2),
    // Second moment of area of a circle (or ring): π/64 · (D⁴ − d⁴)
    secondMoment: (Math.PI / 64) * (outerDiameter ** 4 - inner ** 4),
  };
}

export const SECTIONS: Record<SectionId, TrussSection & SectionShape> = {
  rod: { ...SHAPES.rod, ...sectionFromShape(SHAPES.rod) },
  tube: { ...SHAPES.tube, ...sectionFromShape(SHAPES.tube) },
  heavyTube: { ...SHAPES.heavyTube, ...sectionFromShape(SHAPES.heavyTube) },
};

export type GridPoint = [column: number, row: number];

export type DesignMember = { a: GridPoint; b: GridPoint; section: SectionId };

export type TrussLevelId = "first-span" | "road-bridge" | "clear-road" | "cantilever" | "long-span";

export type TrussLevel = {
  id: TrussLevelId;
  /** Grid extent, inclusive. */
  columns: number;
  rowMin: number;
  rowMax: number;
  supports: { at: GridPoint; type: Support; onWall?: boolean }[];
  /** Downward loads, in kN. */
  loads: { at: GridPoint; kN: number }[];
  /**
   * A design that carries the load, with its mass checked by
   * tests/trussLevels.test.mts. It is a good design, not a proven-lightest one
   * — the game says so, and invites players to beat it.
   */
  reference: DesignMember[];
};

const m = (a: GridPoint, b: GridPoint, section: SectionId): DesignMember => ({ a, b, section });

export const TRUSS_LEVELS: TrussLevel[] = [
  {
    id: "first-span",
    columns: 2,
    rowMin: 0,
    rowMax: 2,
    supports: [
      { at: [0, 0], type: "pin" },
      { at: [2, 0], type: "roller" },
    ],
    loads: [{ at: [1, 0], kN: 60 }],
    reference: [
      m([0, 0], [1, 0], "rod"),
      m([1, 0], [2, 0], "rod"),
      m([0, 0], [1, 1], "tube"),
      m([1, 1], [2, 0], "tube"),
      m([1, 1], [1, 0], "rod"),
    ],
  },
  {
    id: "road-bridge",
    columns: 4,
    rowMin: 0,
    rowMax: 2,
    supports: [
      { at: [0, 0], type: "pin" },
      { at: [4, 0], type: "roller" },
    ],
    loads: [
      { at: [1, 0], kN: 60 },
      { at: [2, 0], kN: 60 },
      { at: [3, 0], kN: 60 },
    ],
    reference: [
      m([0, 0], [1, 0], "tube"),
      m([1, 0], [2, 0], "tube"),
      m([2, 0], [3, 0], "tube"),
      m([3, 0], [4, 0], "tube"),
      m([0, 0], [1, 1], "tube"),
      m([1, 1], [2, 1], "tube"),
      m([2, 1], [3, 1], "tube"),
      m([3, 1], [4, 0], "tube"),
      m([1, 1], [1, 0], "rod"),
      m([2, 1], [2, 0], "rod"),
      m([3, 1], [3, 0], "rod"),
      m([1, 1], [2, 0], "rod"),
      m([3, 1], [2, 0], "rod"),
    ],
  },
  {
    id: "clear-road",
    columns: 4,
    rowMin: -2,
    rowMax: 0,
    supports: [
      { at: [0, 0], type: "pin" },
      { at: [4, 0], type: "roller" },
    ],
    loads: [
      { at: [1, 0], kN: 80 },
      { at: [2, 0], kN: 80 },
      { at: [3, 0], kN: 80 },
    ],
    reference: [
      m([0, 0], [1, 0], "tube"),
      m([1, 0], [2, 0], "tube"),
      m([2, 0], [3, 0], "tube"),
      m([3, 0], [4, 0], "tube"),
      m([0, 0], [1, -1], "tube"),
      m([1, -1], [2, -1], "tube"),
      m([2, -1], [3, -1], "tube"),
      m([3, -1], [4, 0], "tube"),
      m([1, -1], [1, 0], "tube"),
      m([2, -1], [2, 0], "tube"),
      m([3, -1], [3, 0], "tube"),
      m([1, 0], [2, -1], "rod"),
      m([3, 0], [2, -1], "rod"),
    ],
  },
  {
    id: "cantilever",
    columns: 3,
    rowMin: -2,
    rowMax: 2,
    supports: [
      { at: [0, 2], type: "pin", onWall: true },
      { at: [0, 0], type: "pin", onWall: true },
      { at: [0, -2], type: "pin", onWall: true },
    ],
    loads: [{ at: [3, 0], kN: 60 }],
    reference: [
      m([0, 0], [1, 0], "tube"),
      m([1, 0], [2, 0], "tube"),
      m([2, 0], [3, 0], "tube"),
      m([0, 2], [3, 0], "rod"),
      m([0, 2], [1, 0], "rod"),
      m([1, 0], [2, 1], "tube"),
      m([0, 2], [2, 1], "rod"),
      m([2, 1], [2, 0], "rod"),
      m([2, 1], [3, 0], "rod"),
    ],
  },
  {
    id: "long-span",
    columns: 6,
    rowMin: 0,
    rowMax: 2,
    supports: [
      { at: [0, 0], type: "pin" },
      { at: [6, 0], type: "roller" },
    ],
    loads: [
      { at: [1, 0], kN: 50 },
      { at: [2, 0], kN: 50 },
      { at: [3, 0], kN: 50 },
      { at: [4, 0], kN: 50 },
      { at: [5, 0], kN: 50 },
    ],
    reference: [
      m([0, 0], [1, 0], "tube"),
      m([1, 0], [2, 0], "tube"),
      m([2, 0], [3, 0], "tube"),
      m([3, 0], [4, 0], "tube"),
      m([4, 0], [5, 0], "tube"),
      m([5, 0], [6, 0], "tube"),
      m([0, 0], [1, 1], "heavyTube"),
      m([1, 1], [2, 1], "tube"),
      m([2, 1], [3, 1], "tube"),
      m([3, 1], [4, 1], "tube"),
      m([4, 1], [5, 1], "tube"),
      m([5, 1], [6, 0], "heavyTube"),
      m([1, 1], [1, 0], "rod"),
      m([2, 1], [2, 0], "tube"),
      m([3, 1], [3, 0], "rod"),
      m([4, 1], [4, 0], "tube"),
      m([5, 1], [5, 0], "rod"),
      m([1, 1], [2, 0], "tube"),
      m([2, 1], [3, 0], "rod"),
      m([4, 1], [3, 0], "rod"),
      m([5, 1], [4, 0], "tube"),
    ],
  },
];

/** A design counts as "efficient" within this multiple of the reference mass. */
export const EFFICIENT_FACTOR = 1.25;
