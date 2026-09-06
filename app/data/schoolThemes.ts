export type SchoolThemeId =
  | "default"
  | "illinois"
  | "indiana"
  | "iowa"
  | "maryland"
  | "michigan"
  | "michiganState"
  | "minnesota"
  | "nebraska"
  | "northwestern"
  | "ohioState"
  | "oregon"
  | "pennState"
  | "purdue"
  | "rutgers"
  | "ucla"
  | "usc"
  | "washington"
  | "wisconsin"
  | "alabama"
  | "arkansas"
  | "auburn"
  | "florida"
  | "georgia"
  | "kentucky"
  | "lsu"
  | "mississippiState"
  | "missouri"
  | "oleMiss"
  | "oklahoma"
  | "southCarolina"
  | "tennessee"
  | "texas"
  | "texasAM"
  | "vanderbilt";

export type SchoolConference = "bigten" | "sec";

export type SchoolTheme = {
  id: SchoolThemeId;
  name: string;
  conference: SchoolConference | null; // null only for "default"
  // Hex values are each school's own official brand color (verified against
  // that school's brand/athletics guidelines, not guessed) — with two
  // exceptions made for legibility, not aesthetics:
  //
  // 1. `primaryNight` is a separate, brightened variant of `primary` used
  //    only in dark mode. A single value can't work in both modes: a color
  //    dark enough to read on a white background (most of these schools'
  //    primaries are navy/maroon/forest-green/purple) is nearly invisible
  //    against this site's near-black dark background, and no in-between
  //    shade satisfies both. `primaryNight` keeps the same hue, boosted in
  //    lightness until it clears the same contrast level the site's own
  //    default teal already gets today. A handful of schools' "black" has no
  //    hue to preserve, so its night variant is a plain light gray instead.
  // 2. `secondary` substitutes a neutral gray for any school whose official
  //    second color is white or cream — several of these schools' own brand
  //    guides do exactly this for digital use (Indiana's explicitly says so)
  //    because white-on-white or cream-on-white isn't visible as a border,
  //    badge, or accent color the way it needs to be here.
  //
  // Where a school's two colors are e.g. "Black & Gold" and the gold is too
  // light to serve as the primary (link/icon/focus-ring) color without
  // failing contrast against a white background — Iowa, Purdue, Missouri,
  // Vanderbilt — black is used as primary and gold as the secondary/accent
  // instead. Tennessee's case is the same problem from the other direction:
  // its orange is too light for primary, and unlike the gold schools it has
  // no black to fall back on, so it uses "Smokey" — an official Tennessee
  // brand color, not a substitution — as primary, with orange as the accent.
  primary: string;
  primaryNight: string;
  // A darker companion to `primary`, used the same way the site's own
  // default primaryDark (#0a5f64, ~75% of default primary's channels) gives
  // buttons a border/hover shade — each value here is that same ~75% scale
  // applied to this school's `primary`, so buttons keep that depth effect
  // instead of staying teal underneath a school-colored fill.
  primaryDark: string;
  secondary: string;
};

export const schoolThemes: SchoolTheme[] = [
  { id: "default", name: "Default", conference: null, primary: "", primaryNight: "", primaryDark: "", secondary: "" },

  // Big Ten
  { id: "illinois", name: "Illinois", conference: "bigten", primary: "#13294B", primaryNight: "#3f78ce", primaryDark: "#0e1f38", secondary: "#FF5F05" },
  { id: "indiana", name: "Indiana", conference: "bigten", primary: "#990000", primaryNight: "#f20000", primaryDark: "#730000", secondary: "#52525b" },
  { id: "iowa", name: "Iowa", conference: "bigten", primary: "#000000", primaryNight: "#d4d4d8", primaryDark: "#000000", secondary: "#FFCD00" },
  { id: "maryland", name: "Maryland", conference: "bigten", primary: "#E21833", primaryNight: "#e82640", primaryDark: "#aa1226", secondary: "#FFD200" },
  { id: "michigan", name: "Michigan", conference: "bigten", primary: "#00274C", primaryNight: "#0077e8", primaryDark: "#001d39", secondary: "#FFCB05" },
  { id: "michiganState", name: "Michigan State", conference: "bigten", primary: "#18453B", primaryNight: "#2f8774", primaryDark: "#12342c", secondary: "#52525b" },
  { id: "minnesota", name: "Minnesota", conference: "bigten", primary: "#7A0019", primaryNight: "#f20032", primaryDark: "#5c0013", secondary: "#FFCC33" },
  { id: "nebraska", name: "Nebraska", conference: "bigten", primary: "#E41C38", primaryNight: "#e62a44", primaryDark: "#ab152a", secondary: "#52525b" },
  { id: "northwestern", name: "Northwestern", conference: "bigten", primary: "#4E2A84", primaryNight: "#8d63cd", primaryDark: "#3b2063", secondary: "#52525b" },
  { id: "ohioState", name: "Ohio State", conference: "bigten", primary: "#BA0C2F", primaryNight: "#ef0f3c", primaryDark: "#8c0923", secondary: "#A7B1B7" },
  { id: "oregon", name: "Oregon", conference: "bigten", primary: "#154733", primaryNight: "#288862", primaryDark: "#103526", secondary: "#FEE123" },
  { id: "pennState", name: "Penn State", conference: "bigten", primary: "#001E44", primaryNight: "#0271ff", primaryDark: "#001733", secondary: "#52525b" },
  { id: "purdue", name: "Purdue", conference: "bigten", primary: "#000000", primaryNight: "#d4d4d8", primaryDark: "#000000", secondary: "#CFB991" },
  { id: "rutgers", name: "Rutgers", conference: "bigten", primary: "#CC0033", primaryNight: "#f2003d", primaryDark: "#990026", secondary: "#52525b" },
  { id: "ucla", name: "UCLA", conference: "bigten", primary: "#2774AE", primaryNight: "#2a7ebd", primaryDark: "#1d5783", secondary: "#FFD100" },
  { id: "usc", name: "USC", conference: "bigten", primary: "#990000", primaryNight: "#f20000", primaryDark: "#730000", secondary: "#FFCC00" },
  { id: "washington", name: "Washington", conference: "bigten", primary: "#4B2E83", primaryNight: "#8967ca", primaryDark: "#382363", secondary: "#B7A57A" },
  { id: "wisconsin", name: "Wisconsin", conference: "bigten", primary: "#C5050C", primaryNight: "#f2060f", primaryDark: "#940409", secondary: "#52525b" },

  // SEC
  { id: "alabama", name: "Alabama", conference: "sec", primary: "#9E1B32", primaryNight: "#dd3a57", primaryDark: "#771426", secondary: "#52525b" },
  { id: "arkansas", name: "Arkansas", conference: "sec", primary: "#9D2235", primaryNight: "#d64259", primaryDark: "#761a28", secondary: "#52525b" },
  { id: "auburn", name: "Auburn", conference: "sec", primary: "#0C2340", primaryNight: "#2c78d7", primaryDark: "#091a30", secondary: "#E87722" },
  { id: "florida", name: "Florida", conference: "sec", primary: "#0021A5", primaryNight: "#476cff", primaryDark: "#00197c", secondary: "#FA4616" },
  { id: "georgia", name: "Georgia", conference: "sec", primary: "#BA0C2F", primaryNight: "#ef0f3c", primaryDark: "#8c0923", secondary: "#000000" },
  { id: "kentucky", name: "Kentucky", conference: "sec", primary: "#0033A0", primaryNight: "#2b6eff", primaryDark: "#002678", secondary: "#52525b" },
  { id: "lsu", name: "LSU", conference: "sec", primary: "#461D7C", primaryNight: "#935ed9", primaryDark: "#35165d", secondary: "#FDD023" },
  { id: "mississippiState", name: "Mississippi State", conference: "sec", primary: "#660000", primaryNight: "#f20000", primaryDark: "#4d0000", secondary: "#52525b" },
  { id: "missouri", name: "Missouri", conference: "sec", primary: "#000000", primaryNight: "#d4d4d8", primaryDark: "#000000", secondary: "#FDB719" },
  { id: "oleMiss", name: "Ole Miss", conference: "sec", primary: "#CE1126", primaryNight: "#ec1c33", primaryDark: "#9b0d1d", secondary: "#14213D" },
  { id: "oklahoma", name: "Oklahoma", conference: "sec", primary: "#841617", primaryNight: "#de3b3d", primaryDark: "#631111", secondary: "#52525b" },
  { id: "southCarolina", name: "South Carolina", conference: "sec", primary: "#73000A", primaryNight: "#f30015", primaryDark: "#560008", secondary: "#000000" },
  { id: "tennessee", name: "Tennessee", conference: "sec", primary: "#58595B", primaryNight: "#77797b", primaryDark: "#424344", secondary: "#FF8200" },
  { id: "texas", name: "Texas", conference: "sec", primary: "#BF5700", primaryNight: "#c45900", primaryDark: "#8f4100", secondary: "#52525b" },
  { id: "texasAM", name: "Texas A&M", conference: "sec", primary: "#500000", primaryNight: "#f30000", primaryDark: "#3c0000", secondary: "#52525b" },
  { id: "vanderbilt", name: "Vanderbilt", conference: "sec", primary: "#1C1C1C", primaryNight: "#d4d4d8", primaryDark: "#151515", secondary: "#CFAE70" },
];

export function hexToRgbTriplet(hex: string): string {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}
