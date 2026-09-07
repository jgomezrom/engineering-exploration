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
export type Figure = {
  src: string;
  alt: string;
  caption: string;
  credit: string;
  sourceUrl: string;
};

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
