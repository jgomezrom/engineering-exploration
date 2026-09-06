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
  | "wisconsin";

export type SchoolTheme = {
  id: SchoolThemeId;
  name: string;
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
  //    default teal already gets today. Iowa and Purdue's "black" has no hue
  //    to preserve, so its night variant is a plain light gray instead.
  // 2. `secondary` substitutes a neutral gray for any school whose official
  //    second color is white or cream — several of these schools' own brand
  //    guides do exactly this for digital use (Indiana's explicitly says so)
  //    because white-on-white or cream-on-white isn't visible as a border,
  //    badge, or accent color the way it needs to be here.
  //
  // Where a school's two colors are e.g. "Black & Gold" and the gold is too
  // light to serve as the primary (link/icon/focus-ring) color without
  // failing contrast against a white background — Iowa and Purdue — black
  // is used as primary and gold as the secondary/accent instead.
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
  { id: "default", name: "Default", primary: "", primaryNight: "", primaryDark: "", secondary: "" },
  { id: "illinois", name: "Illinois", primary: "#13294B", primaryNight: "#3f78ce", primaryDark: "#0e1f38", secondary: "#FF5F05" },
  { id: "indiana", name: "Indiana", primary: "#990000", primaryNight: "#f20000", primaryDark: "#730000", secondary: "#52525b" },
  { id: "iowa", name: "Iowa", primary: "#000000", primaryNight: "#d4d4d8", primaryDark: "#000000", secondary: "#FFCD00" },
  { id: "maryland", name: "Maryland", primary: "#E21833", primaryNight: "#e82640", primaryDark: "#aa1226", secondary: "#FFD200" },
  { id: "michigan", name: "Michigan", primary: "#00274C", primaryNight: "#0077e8", primaryDark: "#001d39", secondary: "#FFCB05" },
  { id: "michiganState", name: "Michigan State", primary: "#18453B", primaryNight: "#2f8774", primaryDark: "#12342c", secondary: "#52525b" },
  { id: "minnesota", name: "Minnesota", primary: "#7A0019", primaryNight: "#f20032", primaryDark: "#5c0013", secondary: "#FFCC33" },
  { id: "nebraska", name: "Nebraska", primary: "#E41C38", primaryNight: "#e62a44", primaryDark: "#ab152a", secondary: "#52525b" },
  { id: "northwestern", name: "Northwestern", primary: "#4E2A84", primaryNight: "#8d63cd", primaryDark: "#3b2063", secondary: "#52525b" },
  { id: "ohioState", name: "Ohio State", primary: "#BA0C2F", primaryNight: "#ef0f3c", primaryDark: "#8c0923", secondary: "#A7B1B7" },
  { id: "oregon", name: "Oregon", primary: "#154733", primaryNight: "#288862", primaryDark: "#103526", secondary: "#FEE123" },
  { id: "pennState", name: "Penn State", primary: "#001E44", primaryNight: "#0271ff", primaryDark: "#001733", secondary: "#52525b" },
  { id: "purdue", name: "Purdue", primary: "#000000", primaryNight: "#d4d4d8", primaryDark: "#000000", secondary: "#CFB991" },
  { id: "rutgers", name: "Rutgers", primary: "#CC0033", primaryNight: "#f2003d", primaryDark: "#990026", secondary: "#52525b" },
  { id: "ucla", name: "UCLA", primary: "#2774AE", primaryNight: "#2a7ebd", primaryDark: "#1d5783", secondary: "#FFD100" },
  { id: "usc", name: "USC", primary: "#990000", primaryNight: "#f20000", primaryDark: "#730000", secondary: "#FFCC00" },
  { id: "washington", name: "Washington", primary: "#4B2E83", primaryNight: "#8967ca", primaryDark: "#382363", secondary: "#B7A57A" },
  { id: "wisconsin", name: "Wisconsin", primary: "#C5050C", primaryNight: "#f2060f", primaryDark: "#940409", secondary: "#52525b" },
];

export function hexToRgbTriplet(hex: string): string {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}
