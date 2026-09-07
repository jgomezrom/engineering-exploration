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
// Every image below was matched byte-for-byte (MD5) against the record it
// claims, so the captions can be re-checked rather than taken on trust.
// Search the survey number at loc.gov, or the id at images.nasa.gov:
//
//   steel-truss-bridge     HAER MT-21     Old Steel Bridge, Flathead River, Kalispell MT
//   steam-plant            HAER AZ-20     Crosscut Steam Plant, Tempe AZ
//   pump-house-drawing     HAER MD-39     Chesapeake & Delaware Canal Pump House, MD
//   generator-hall         HAER AL-47     Wilson Dam & Hydroelectric Plant, Muscle Shoals AL
//   plate-mill             HAER PA-200    U.S. Steel Homestead Works, 48" plate mill, PA
//   civil                  HAER AZ-34     Cameron Suspension Bridge, Cameron AZ
//   structural             HAER KS-8      Onion Creek Bridge, Coffeyville KS
//   mechanical             HAER OH-33     Carnegie Steel-Ohio Works, Steam Engines, Youngstown OH
//   manufacturing          HAER CA-179    Knight Foundry, Sutter Creek CA
//   industrial             HAER MI-347    Ford Piquette Plant, Detroit MI
//   marine                 HAER MD-191    Floating Dry Dock USS Oak Ridge (ARDM-1), MD
//   energy                 HAER MI-100-B  Hardy Hydroelectric Plant, Powerhouse, Newaygo MI
//   aerospace              NASA 624109main_1969-05-20-2_full  Apollo 11 Rollout
//   robotics               NASA PIA13388  Curiosity Mars Rover Flexes its Robotic Arm
//
// Captions follow the record's own wording where there is one. Alt text
// describes only what is visible in the frame — not what the record says is
// there, and not history that can't be seen. Getting that backwards is how a
// photo of an empty flame trench ended up captioned as a rocket engine.
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
    alt: "Exterior of the Crosscut Steam Plant, its tall window bays rising behind the steel framing and insulators of the switchyard.",
    caption: "Crosscut Steam Plant, Salt River, Tempe, Arizona",
    credit: "Historic American Engineering Record, Library of Congress",
    sourceUrl: "https://www.loc.gov/collections/historic-american-buildings-landscapes-and-engineering-records/",
  },
  pumpHouseDrawing: {
    src: "/figures/pump-house-drawing.jpg",
    alt: "A measured drawing sheet of the Chesapeake & Delaware Canal pump house, with a site plan, written history, and title block.",
    caption: "Chesapeake & Delaware Canal Pump House, 1851–1854 — record drawing: site plan and history",
    credit: "Historic American Engineering Record, Library of Congress",
    sourceUrl: "https://www.loc.gov/collections/historic-american-buildings-landscapes-and-engineering-records/",
  },
  generatorHall: {
    src: "/figures/generator-hall.jpg",
    alt: "The generator hall of a hydroelectric plant, with a row of housed generating units receding down a long, clean floor.",
    caption: "Wilson Dam hydroelectric plant, generator hall, Muscle Shoals, Alabama",
    credit: "Historic American Engineering Record, Library of Congress",
    sourceUrl: "https://www.loc.gov/collections/historic-american-buildings-landscapes-and-engineering-records/",
  },
  plateMill: {
    src: "/figures/plate-mill.jpg",
    alt: "The interior of a disused steel plate mill, with a row of furnace openings along a heavy masonry wall under an open steel roof truss.",
    caption: "U.S. Steel Homestead Works, 48-inch plate mill, Homestead, Pennsylvania",
    credit: "Historic American Engineering Record, Library of Congress",
    sourceUrl: "https://www.loc.gov/collections/historic-american-buildings-landscapes-and-engineering-records/",
  },
} satisfies Record<string, Figure>;

// The homepage plate cycles through these rather than showing one fixed
// image, so the page has something new on a repeat visit. Order is the
// display order. Keep every entry landscape and readable at 21/9 — the
// homepage frame is much wider than the field pages'.
export const homePlates: Figure[] = [figures.bridge, figures.generatorHall, figures.plateMill];

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
    alt: "The interior of a steel mill engine room, with heavy machinery, overhead piping and a large flywheel.",
    caption: "Carnegie Steel–Ohio Works, steam engines, Youngstown, Ohio",
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
    alt: "A multi-storey brick factory building on a city corner, its long facade running away down the block.",
    caption: "Ford Piquette Plant, Detroit, Michigan",
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
    alt: "An aerial view of the Saturn V rocket and its launch tower riding the crawler-transporter along the crawlerway toward the launch pad.",
    caption: "Apollo 11's Saturn V and mobile launcher on the crawler, bound for Launch Pad 39A, May 1969",
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
