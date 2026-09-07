// Public-domain photography and measured drawings from the Historic American
// Engineering Record (HAER) and Historic American Buildings Survey (HABS),
// held by the Library of Congress. These are works of the US federal
// government, produced by the National Park Service, and carry no known
// copyright restrictions — LoC lists them without rights advisories.
//
// They're used only in shared, non-field-specific places. Per-field imagery
// stays with the hand-drawn SVGs in FieldIllustration.tsx, which cover all 23
// fields consistently — no public-domain photo source covers every discipline,
// so mixing photography in per-field would leave most fields without one.
//
// Credit is rendered with each figure even though attribution isn't legally
// required, since the site's Sources & Methodology page commits to saying
// where things come from.
import type { FieldSlug } from "./types";

export type Figure = {
  src: string;
  alt: string;
  caption: string;
  credit: string;
  sourceUrl: string;
};

const HAER = "Historic American Engineering Record, Library of Congress";
const HAER_URL = "https://www.loc.gov/collections/historic-american-buildings-landscapes-and-engineering-records/";
const NASA = "NASA";
const NASA_URL = "https://images.nasa.gov/";

export const figures = {
  bridge: {
    src: "/figures/steel-truss-bridge.jpg",
    alt: "Looking along the deck of a steel through-truss bridge, its riveted lattice framing converging toward the far bank.",
    caption: "Old Steel Bridge, Flathead River, Kalispell, Montana",
    credit: "Historic American Engineering Record, Library of Congress",
    sourceUrl: "https://www.loc.gov/collections/historic-american-buildings-landscapes-and-engineering-records/",
  },
  steamPlant: {
    src: "/figures/steam-plant.jpg",
    alt: "Exterior of the Crosscut Steam Plant, an early concrete power building behind a lattice of steel transmission framing.",
    caption: "Crosscut Steam Plant, Salt River, Tempe, Arizona",
    credit: "Historic American Engineering Record, Library of Congress",
    sourceUrl: "https://www.loc.gov/collections/historic-american-buildings-landscapes-and-engineering-records/",
  },
  pumpHouseDrawing: {
    src: "/figures/pump-house-drawing.jpg",
    alt: "A measured drawing sheet of the Chesapeake & Delaware Canal pump house, with a site plan, written history, and title block.",
    caption: "Chesapeake & Delaware Canal Pump House, 1851–1854 — measured drawing",
    credit: "Historic American Engineering Record, Library of Congress",
    sourceUrl: "https://www.loc.gov/collections/historic-american-buildings-landscapes-and-engineering-records/",
  },
} satisfies Record<string, Figure>;

// Per-field figures exist only for the disciplines where a genuinely good
// public-domain image exists. That's deliberately partial: HAER covers the
// built and mechanical trades well and NASA covers spaceflight, but neither
// has anything usable for biomedical, software, semiconductor, petroleum,
// chemical, agricultural, nuclear or systems engineering. Architectural and
// environmental were dropped too — every candidate was a small house or a
// street view. A field with no entry here simply shows its hand-drawn SVG
// figure, which every field has.
//
// Field pages render these at aspect-[16/9] with object-cover, so use a
// landscape source: a portrait one gets cropped to a middle band and can lose
// its subject entirely. Check the crop, not just the full image, and make sure
// the caption describes what survives it.
export const fieldFigures: Partial<Record<FieldSlug, Figure>> = {
  "civil-engineering": {
    src: "/figures/fields/civil-engineering.jpg",
    alt: "A steel suspension bridge carrying a road across a wide river canyon.",
    caption: "Cameron Suspension Bridge, Little Colorado River, Arizona",
    credit: HAER,
    sourceUrl: HAER_URL,
  },
  "structural-engineering": {
    src: "/figures/fields/structural-engineering.jpg",
    alt: "Close view of a riveted steel truss portal, showing built-up members meeting at a gusseted joint.",
    caption: "Onion Creek Bridge, Coffeyville, Kansas — truss detail",
    credit: HAER,
    sourceUrl: HAER_URL,
  },
  "mechanical-engineering": {
    src: "/figures/fields/mechanical-engineering.jpg",
    alt: "The interior of a steel mill engine house, with heavy machinery, overhead piping and a large flywheel.",
    caption: "Carnegie Steel, Ohio Works — engine house, Youngstown, Ohio",
    credit: HAER,
    sourceUrl: HAER_URL,
  },
  "manufacturing-engineering": {
    src: "/figures/fields/manufacturing-engineering.jpg",
    alt: "A foundry shop interior, with wooden gear and pulley patterns hung on the wall above workbenches.",
    caption: "Knight Foundry, Sutter Creek, California — shop interior with foundry patterns",
    credit: HAER,
    sourceUrl: HAER_URL,
  },
  "industrial-engineering": {
    src: "/figures/fields/industrial-engineering.jpg",
    alt: "A multi-storey brick factory building on a city corner, where the Model T was first produced.",
    caption: "Ford Piquette Avenue Plant, Detroit, Michigan",
    credit: HAER,
    sourceUrl: HAER_URL,
  },
  "marine-engineering": {
    src: "/figures/fields/marine-engineering.jpg",
    alt: "A floating dry dock at a shipyard, with cranes standing over the basin.",
    caption: "Floating Dry Dock USS Oak Ridge, Coast Guard Yard, Curtis Bay, Maryland",
    credit: HAER,
    sourceUrl: HAER_URL,
  },
  "energy-engineering": {
    src: "/figures/fields/energy-engineering.jpg",
    alt: "A hydroelectric powerhouse sitting at the edge of its dam, water passing beside it.",
    caption: "Hardy Hydroelectric Plant powerhouse, Newaygo, Michigan",
    credit: HAER,
    sourceUrl: HAER_URL,
  },
  "aerospace-engineering": {
    src: "/figures/fields/aerospace-engineering.jpg",
    alt: "Two engineers crouched beside a large rocket nozzle mounted inside a cylindrical vacuum test chamber.",
    caption: "Apollo contour rocket nozzle in the Propulsion Systems Laboratory, NASA Lewis Research Center, 1964",
    credit: NASA,
    sourceUrl: NASA_URL,
  },
  "robotics-engineering": {
    src: "/figures/fields/robotics-engineering.jpg",
    alt: "Engineers in cleanroom suits working around the Curiosity rover as it extends its robotic arm.",
    caption: "Curiosity Mars rover flexing its robotic arm during testing",
    credit: NASA,
    sourceUrl: NASA_URL,
  },
};
