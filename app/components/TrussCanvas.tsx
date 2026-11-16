"use client";

import type { KeyboardEvent } from "react";
import type { DesignMember, GridPoint, SectionId, TrussLevel } from "../data/trussLevels";
import { GRID_SPACING_M } from "../data/trussLevels";
import type { TrussSolution } from "../lib/trussAnalysis";
import { checkMember, jointIndex, samePoint } from "../lib/trussGame";

// The drawing half of Bridge Builder: the grid of joints, the members, the
// supports and loads, and — once a design has been tested — the forces and
// the (exaggerated) way the structure moved. It holds no state of its own;
// TrussGame.tsx decides what is shown and handles every click.

/** Pixels (in the SVG's own units) between neighbouring grid joints. */
const STEP = 60;
const PX_PER_M = STEP / GRID_SPACING_M;
/** The largest joint movement is drawn this many pixels, whatever its real size. */
const MOVEMENT_DRAW_PX = 9;

const STROKE_WIDTH: Record<SectionId, number> = { rod: 2.25, tube: 4.5, heavyTube: 7 };

export type CanvasLabels = {
  canvas: string;
  joint: (column: number, row: number) => string;
  pin: string;
  roller: string;
  load: (kN: number) => string;
  selected: string;
  member: (index: number) => string;
};

/** What a finished or in-progress test looks like on the drawing. */
export type CanvasTest =
  | { kind: "mechanism"; looseJoints: number[] }
  | {
      kind: "loaded";
      solution: TrussSolution;
      /** Fraction of the full load currently applied, 0 to 1. */
      loadFraction: number;
      /** Fraction the drawing is heading for; fixes the exaggeration scale. */
      finalFraction: number;
      /** Index of the member that failed, once it has, or -1. */
      failedMember: number;
    };

/**
 * How many times larger than life joint movement is drawn. Exported so the
 * game can print the factor next to the drawing — a truss that visibly
 * moved this much would be in serious trouble.
 */
export function movementExaggeration(solution: TrussSolution, finalFraction: number): number {
  const largest = solution.displacements.reduce((max, d) => Math.max(max, Math.hypot(d.dx, d.dy)), 0);
  const drawnMetres = largest * finalFraction;
  return drawnMetres > 0 ? MOVEMENT_DRAW_PX / (drawnMetres * PX_PER_M) : 0;
}

function activate(event: KeyboardEvent<SVGElement>, action: () => void) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    action();
  }
}

export default function TrussCanvas({
  level,
  design,
  selected,
  hovered,
  highlightedMember,
  test,
  interactive,
  labels,
  onJointClick,
  onJointHover,
  onMemberClick,
}: {
  level: TrussLevel;
  design: DesignMember[];
  selected: GridPoint | null;
  hovered: GridPoint | null;
  highlightedMember: number | null;
  test: CanvasTest | null;
  interactive: boolean;
  labels: CanvasLabels;
  onJointClick: (point: GridPoint) => void;
  onJointHover: (point: GridPoint | null) => void;
  onMemberClick: (index: number) => void;
}) {
  // Loads are drawn on whichever side the level leaves empty, so the arrow
  // never sits where members are going to be built.
  const loadSide: "below" | "above" | "right" = level.rowMin === 0 ? "below" : level.rowMax === 0 ? "above" : "right";
  const hasWall = level.supports.some((support) => support.onWall);

  const padLeft = hasWall ? 44 : 40;
  const padRight = loadSide === "right" ? 78 : 40;
  const padTop = loadSide === "above" ? 62 : 28;
  const padBottom = loadSide === "below" ? 64 : 44;
  const width = padLeft + level.columns * STEP + padRight;
  const height = padTop + (level.rowMax - level.rowMin) * STEP + padBottom;

  const loaded = test?.kind === "loaded" ? test : null;
  const exaggeration = loaded ? movementExaggeration(loaded.solution, loaded.finalFraction) : 0;

  // Where a grid point is drawn. Once a test is running, each joint is shifted
  // by its (exaggerated) movement under the load applied so far.
  const position = (point: GridPoint) => {
    let x = padLeft + point[0] * STEP;
    let y = padTop + (level.rowMax - point[1]) * STEP;
    if (loaded) {
      const moved = loaded.solution.displacements[jointIndex(level, point)];
      const scale = PX_PER_M * exaggeration * loaded.loadFraction;
      x += moved.dx * scale;
      // Screen y runs downward, so an upward movement is a smaller y.
      y -= moved.dy * scale;
    }
    return { x, y };
  };

  const gridPoints: GridPoint[] = [];
  for (let row = level.rowMin; row <= level.rowMax; row++) {
    for (let column = 0; column <= level.columns; column++) gridPoints.push([column, row]);
  }
  const inUse = (point: GridPoint) =>
    design.some((member) => samePoint(member.a, point) || samePoint(member.b, point)) ||
    level.supports.some((support) => samePoint(support.at, point)) ||
    level.loads.some((load) => samePoint(load.at, point));

  const preview =
    interactive && selected && hovered && !samePoint(selected, hovered)
      ? { from: position(selected), to: position(hovered), ok: checkMember(level, selected, hovered) === "ok" }
      : null;

  const outline = "fill-background stroke-neutral-900/50 dark:stroke-white/50";

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="mx-auto w-full touch-manipulation select-none"
      style={{ maxWidth: width * 2.2 }}
      role="group"
      aria-label={labels.canvas}
    >
      {/* ── Supports ─────────────────────────────────────────────── */}
      {level.supports.map((support) => {
        // Supports never move, so they are drawn at the undisturbed position.
        const x = padLeft + support.at[0] * STEP;
        const y = padTop + (level.rowMax - support.at[1]) * STEP;
        const key = `support-${support.at.join(",")}`;
        if (support.onWall) {
          return (
            <g key={key}>
              <path d={`M${x - 20} ${y - 11}L${x - 5} ${y}L${x - 20} ${y + 11}Z`} className={outline} strokeWidth="1.5" />
              <line x1={x - 22} y1={y - 22} x2={x - 22} y2={y + 22} stroke="currentColor" strokeWidth="2" />
              {[-16, -6, 4, 14].map((offset) => (
                <line key={offset} x1={x - 22} y1={y + offset} x2={x - 30} y2={y + offset + 8} stroke="currentColor" strokeWidth="1" opacity="0.45" />
              ))}
            </g>
          );
        }
        const isRoller = support.type === "roller";
        const base = y + (isRoller ? 18 : 24);
        return (
          <g key={key}>
            <path d={`M${x - 12} ${base}L${x} ${y + 5}L${x + 12} ${base}Z`} className={outline} strokeWidth="1.5" />
            {isRoller && (
              <>
                <circle cx={x - 6} cy={base + 3.5} r="3" className={outline} strokeWidth="1.2" />
                <circle cx={x + 6} cy={base + 3.5} r="3" className={outline} strokeWidth="1.2" />
              </>
            )}
            <line x1={x - 20} y1={y + 25} x2={x + 20} y2={y + 25} stroke="currentColor" strokeWidth="2" />
          </g>
        );
      })}

      {/* ── Grid ─────────────────────────────────────────────────── */}
      {gridPoints.map((point) => {
        const x = padLeft + point[0] * STEP;
        const y = padTop + (level.rowMax - point[1]) * STEP;
        return <circle key={`dot-${point.join(",")}`} cx={x} cy={y} r="1.75" className="fill-neutral-900/30 dark:fill-white/30" />;
      })}

      {/* ── Members ──────────────────────────────────────────────── */}
      {design.map((member, index) => {
        const from = position(member.a);
        const to = position(member.b);
        const result = loaded?.solution.members[index];
        const failed = loaded !== null && loaded.failedMember === index;
        const highlighted = highlightedMember === index;

        let tone = "stroke-neutral-900/80 dark:stroke-white/80";
        let opacity = 1;
        if (failed) {
          tone = "stroke-red-600 dark:stroke-red-500";
        } else if (result && loaded) {
          if (result.force > 0) tone = "stroke-accent";
          else if (result.force < 0) tone = "stroke-primary";
          else tone = "stroke-neutral-900/40 dark:stroke-white/40";
          // The harder a member is working at this moment, the more solid it is drawn.
          if (result.force !== 0) opacity = 0.4 + 0.6 * Math.min(1, result.utilisation * loaded.loadFraction);
        }

        const midX = (from.x + to.x) / 2;
        const midY = (from.y + to.y) / 2;
        const length = Math.hypot(to.x - from.x, to.y - from.y);
        // A unit vector at right angles to the member, for bowing and labels.
        const normalX = -(to.y - from.y) / length;
        const normalY = (to.x - from.x) / length;

        let path = `M${from.x.toFixed(1)} ${from.y.toFixed(1)}L${to.x.toFixed(1)} ${to.y.toFixed(1)}`;
        if (failed && result) {
          if (result.force < 0 && result.bucklingGoverns) {
            // Buckled: the member bows out sideways.
            const bow = Math.min(16, length * 0.22);
            path = `M${from.x.toFixed(1)} ${from.y.toFixed(1)}Q${(midX + normalX * bow * 2).toFixed(1)} ${(midY + normalY * bow * 2).toFixed(1)} ${to.x.toFixed(1)} ${to.y.toFixed(1)}`;
          } else {
            // Yielded: the member parts in the middle.
            const gap = 5 / length;
            const cut = (t: number) => `${(from.x + (to.x - from.x) * t).toFixed(1)} ${(from.y + (to.y - from.y) * t).toFixed(1)}`;
            path = `M${cut(0)}L${cut(0.5 - gap)}M${cut(0.5 + gap)}L${cut(1)}`;
          }
        }

        return (
          <g key={`member-${member.a.join(",")}-${member.b.join(",")}`}>
            {highlighted && <path d={path} fill="none" className="stroke-neutral-900/15 dark:stroke-white/20" strokeWidth={STROKE_WIDTH[member.section] + 10} strokeLinecap="round" />}
            <path d={path} fill="none" className={tone} strokeWidth={STROKE_WIDTH[member.section]} strokeLinecap="round" opacity={opacity} />
            {loaded && (
              <text
                x={midX + normalX * 9}
                y={midY + normalY * 9 + 3}
                textAnchor="middle"
                className="fill-current stroke-background font-mono text-[9px] font-medium"
                strokeWidth="3"
                paintOrder="stroke"
              >
                {index + 1}
              </text>
            )}
            {interactive && (
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="transparent"
                strokeWidth="14"
                strokeLinecap="round"
                className="cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={labels.member(index)}
                onClick={() => onMemberClick(index)}
                onKeyDown={(event) => activate(event, () => onMemberClick(index))}
              />
            )}
          </g>
        );
      })}

      {preview && (
        <line
          x1={preview.from.x}
          y1={preview.from.y}
          x2={preview.to.x}
          y2={preview.to.y}
          className={preview.ok ? "stroke-primary" : "stroke-red-600 dark:stroke-red-500"}
          strokeWidth="2"
          strokeDasharray="5 4"
          strokeLinecap="round"
          pointerEvents="none"
        />
      )}

      {/* ── Loads ────────────────────────────────────────────────── */}
      {level.loads.map((load) => {
        const { x, y } = position(load.at);
        const key = `load-${load.at.join(",")}`;
        // The arrow always points down, the way the weight acts.
        let arrowX = x;
        let tail = y + 9;
        let tip = y + 38;
        let textX = x;
        let textY = y + 52;
        let anchor: "middle" | "start" = "middle";
        if (loadSide === "above") {
          tail = y - 40;
          tip = y - 9;
          textY = y - 46;
        } else if (loadSide === "right") {
          arrowX = x + 16;
          tail = y - 10;
          tip = y + 22;
          textX = x + 26;
          textY = y + 10;
          anchor = "start";
        }
        return (
          <g key={key} pointerEvents="none">
            <line x1={arrowX} y1={tail} x2={arrowX} y2={tip} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d={`M${arrowX - 5} ${tip - 8}L${arrowX} ${tip}L${arrowX + 5} ${tip - 8}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <text x={textX} y={textY} textAnchor={anchor} className="fill-current font-mono text-[10px] font-medium">
              {load.kN} kN
            </text>
          </g>
        );
      })}

      {/* ── Joints ───────────────────────────────────────────────── */}
      {gridPoints.map((point) => {
        const { x, y } = position(point);
        const used = inUse(point);
        const isSelected = selected !== null && samePoint(selected, point);
        const support = level.supports.find((s) => samePoint(s.at, point));
        const load = level.loads.find((l) => samePoint(l.at, point));
        const loose = test?.kind === "mechanism" && test.looseJoints.includes(jointIndex(level, point));

        const description = [
          labels.joint(point[0], point[1]),
          support ? (support.type === "pin" ? labels.pin : labels.roller) : null,
          load ? labels.load(load.kN) : null,
          isSelected ? labels.selected : null,
        ]
          .filter(Boolean)
          .join(", ");

        return (
          <g key={`joint-${point.join(",")}`} className="group">
            {loose && (
              <circle cx={x} cy={y} r="11" fill="none" className="stroke-red-600 motion-safe:animate-pulse dark:stroke-red-500" strokeWidth="2" strokeDasharray="4 3" />
            )}
            {used && <circle cx={x} cy={y} r="4.5" className="fill-background stroke-neutral-900 dark:stroke-white" strokeWidth="1.75" />}
            {isSelected && <circle cx={x} cy={y} r="9" fill="none" className="stroke-primary" strokeWidth="2.5" />}
            {interactive && (
              <>
                <circle cx={x} cy={y} r="9" fill="none" className="stroke-primary opacity-0 group-hover:opacity-50" strokeWidth="1.5" pointerEvents="none" />
                <circle
                  cx={x}
                  cy={y}
                  r="20"
                  fill="transparent"
                  className="cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-label={description}
                  aria-pressed={isSelected}
                  onClick={() => onJointClick(point)}
                  onKeyDown={(event) => activate(event, () => onJointClick(point))}
                  onPointerEnter={(event) => {
                    // Touch has no hover; a preview line there would only lag behind the finger.
                    if (event.pointerType === "mouse") onJointHover(point);
                  }}
                  onPointerLeave={() => onJointHover(null)}
                  onFocus={() => onJointHover(point)}
                  onBlur={() => onJointHover(null)}
                />
              </>
            )}
          </g>
        );
      })}
    </svg>
  );
}
