// Public-domain photography from the Library of Congress and NASA. Three
// Library of Congress collections are used, all carrying the same rights
// advisory — "No known restrictions on publication":
//
//   HAER      Historic American Engineering Record. Measured drawings and
//             large-format survey photography, produced by the National Park
//             Service. Black and white, technical, unhurried.
//   Highsmith Carol M. Highsmith Archive. Modern colour documentary
//             photography, dedicated by the photographer to the public.
//   FSA/OWI   Farm Security Administration / Office of War Information colour
//             photographs, 1939-44. Factories and railroads with people in
//             them, in saturated Kodachrome.
//
// Every image below is tied to a specific record: the older ones were matched
// byte-for-byte (MD5) against it, the newer ones were downloaded straight from
// it. Each figure's sourceUrl is a deep link to that exact record, so a caption
// can be re-checked rather than taken on trust.
//
// Captions follow the record's own wording where there is one. Alt text
// describes only what is visible in the frame — not what the record says is
// there, and not history that can't be seen. Getting that backwards is how a
// photo of an empty flame trench once ended up captioned as a rocket engine.
//
// Spanish lives inline as captionEs/altEs rather than in a parallel .es file,
// unlike the other content data. A caption is a claim about one specific
// photograph, and the pair has to stay truthful to the same frame; keeping both
// languages beside the src is what stops one drifting when an image is swapped.
// Proper nouns are deliberately left alone — place names, company names and the
// credit line stay as the record has them, so they remain searchable.
import type { FieldSlug } from "./types";
import type { Language } from "../context/LanguageContext";

export type Figure = {
  src: string;
  alt: string;
  caption: string;
  altEs: string;
  captionEs: string;
  credit: string;
  sourceUrl: string;
};

// The credit stays in English in both languages: it names institutions
// ("Library of Congress"), and translating an institution's name makes it
// harder to look up, not easier.
export function localizeFigure(figure: Figure, language: Language) {
  return language === "es"
    ? { alt: figure.altEs, caption: figure.captionEs }
    : { alt: figure.alt, caption: figure.caption };
}

const HAER = "Historic American Engineering Record, Library of Congress";
const HIGHSMITH = "Carol M. Highsmith Archive, Library of Congress";
const FSA_OWI = "FSA/OWI Collection, Library of Congress";
const NASA = "NASA";

export const figures = {
  bridge: {
    src: "/figures/steel-truss-bridge.jpg",
    alt: "Looking along the deck of a steel through-truss bridge, its riveted lattice framing converging toward the far bank.",
    caption: "Old Steel Bridge, Flathead River, Kalispell, Montana",
    altEs: "Vista a lo largo del tablero de un puente de celosía de acero, con su entramado remachado convergiendo hacia la orilla opuesta.",
    captionEs: "Old Steel Bridge, río Flathead, Kalispell, Montana",
    credit: HAER,
    sourceUrl: "https://www.loc.gov/item/mt0084/",
  },
  steamPlant: {
    src: "/figures/steam-plant.jpg",
    alt: "Exterior of the Crosscut Steam Plant, its tall window bays rising behind the steel framing and insulators of the switchyard.",
    caption: "Crosscut Steam Plant, Salt River, Tempe, Arizona",
    altEs: "Exterior de la Crosscut Steam Plant, con sus altos ventanales elevándose detrás de la estructura de acero y los aisladores de la subestación.",
    captionEs: "Crosscut Steam Plant, río Salt, Tempe, Arizona",
    credit: HAER,
    sourceUrl: "https://www.loc.gov/item/az0242/",
  },
  pumpHouseDrawing: {
    src: "/figures/pump-house-drawing.jpg",
    alt: "A measured drawing sheet of the Chesapeake & Delaware Canal pump house, with a site plan, written history, and title block.",
    caption: "Chesapeake & Delaware Canal Pump House, 1851–1854 — record drawing: site plan and history",
    altEs: "Una lámina de dibujo técnico de la casa de bombas del Chesapeake & Delaware Canal, con un plano de emplazamiento, una historia escrita, y un cajetín.",
    captionEs: "Chesapeake & Delaware Canal Pump House, 1851–1854 — plano de registro: emplazamiento e historia",
    credit: HAER,
    sourceUrl: "https://www.loc.gov/item/md0746/",
  },
  generatorHall: {
    src: "/figures/generator-hall.jpg",
    alt: "The generator hall of a hydroelectric plant, with a row of housed generating units receding down a long, clean floor.",
    caption: "Wilson Dam hydroelectric plant, generator hall, Muscle Shoals, Alabama",
    altEs: "La sala de generadores de una central hidroeléctrica, con una fila de unidades generadoras alineándose a lo largo de un piso amplio y despejado.",
    captionEs: "Central hidroeléctrica de Wilson Dam, sala de generadores, Muscle Shoals, Alabama",
    credit: HAER,
    sourceUrl: "https://www.loc.gov/item/al1187/",
  },
  plateMill: {
    src: "/figures/plate-mill.jpg",
    alt: "The interior of a disused steel plate mill, with a row of furnace openings along a heavy masonry wall under an open steel roof truss.",
    caption: "U.S. Steel Homestead Works, 48-inch plate mill, Homestead, Pennsylvania",
    altEs: "El interior de un laminador de chapa de acero en desuso, con una fila de bocas de horno a lo largo de un grueso muro de mampostería, bajo una armadura de acero descubierta.",
    captionEs: "U.S. Steel Homestead Works, laminador de chapa de 48 pulgadas, Homestead, Pensilvania",
    credit: HAER,
    sourceUrl: "https://www.loc.gov/item/pa3325/",
  },
} satisfies Record<string, Figure>;

// The homepage plate cycles through these rather than showing one fixed
// image, so the page has something new on a repeat visit. Order is the
// display order. Keep every entry landscape and readable at 21/9 — the
// homepage frame is much wider than the field pages'.
export const homePlates: Figure[] = [figures.bridge, figures.generatorHall, figures.plateMill];

// Per-field figures exist only for the disciplines where a genuinely good
// public-domain image exists. That's deliberately partial: nothing usable was
// found for biomedical, software, semiconductor, petroleum, chemical,
// agricultural, nuclear, systems, architectural or environmental engineering.
// A field with no entry here simply shows its hand-drawn SVG figure, which
// every field has.
//
// These are chosen to be recognisable at a glance to a reader who is 10-18 and
// deciding whether a field looks interesting, so colour and a legible subject
// win over archival tidiness. Each one also has to match what the field page
// actually says the discipline is — the rail yard is here because industrial
// engineering is described as logistics and flow, not because trains are nice.
//
// Field pages render these at aspect-[16/9] with object-cover, so use a
// landscape source: a portrait one gets cropped to a middle band and can lose
// its subject entirely. Check the crop, not just the full image, and make sure
// the caption describes what survives it.
export const fieldFigures: Partial<Record<FieldSlug, Figure>> = {
  "civil-engineering": {
    src: "/figures/fields/civil-engineering.jpg",
    alt: "A long double-decked suspension bridge crossing a wide river, with a city skyline in the distance behind it.",
    caption: "George Washington Bridge over the Hudson River, New York",
    altEs: "Un largo puente colgante de dos niveles cruzando un río ancho, con el perfil de una ciudad al fondo.",
    captionEs: "Puente George Washington sobre el río Hudson, Nueva York",
    credit: HIGHSMITH,
    sourceUrl: "https://www.loc.gov/item/2017882208/",
  },
  "structural-engineering": {
    src: "/figures/fields/structural-engineering.jpg",
    alt: "A domed stadium seen across a lake, two enormous steel arches carrying its roof from end to end above a glass end wall.",
    caption: "Cowboys Stadium, a domed stadium with a retractable roof, Arlington, Texas",
    altEs: "Un estadio cubierto visto desde el otro lado de un lago, con dos enormes arcos de acero que sostienen su techo de extremo a extremo sobre un muro de vidrio.",
    captionEs: "Cowboys Stadium, un estadio cubierto con techo retráctil, Arlington, Texas",
    credit: HIGHSMITH,
    sourceUrl: "https://www.loc.gov/item/2013650777/",
  },
  "mechanical-engineering": {
    src: "/figures/fields/mechanical-engineering.jpg",
    alt: "Locomotive boilers under repair in a long workshop, with shafts of daylight coming down through the roof trusses.",
    caption: "Santa Fe Railroad locomotive shops, Topeka, Kansas, 1943",
    altEs: "Calderas de locomotora en reparación dentro de un taller alargado, con haces de luz natural entrando por las armaduras del techo.",
    captionEs: "Talleres de locomotoras del ferrocarril Santa Fe, Topeka, Kansas, 1943",
    credit: FSA_OWI,
    sourceUrl: "https://www.loc.gov/item/2017878094/",
  },
  "manufacturing-engineering": {
    src: "/figures/fields/manufacturing-engineering.jpg",
    alt: "Two workers riveting the cockpit shell of an aircraft, one working a rivet gun from outside while the other braces the joint from within.",
    caption: "Riveting teams at the Douglas Aircraft plant, Long Beach, California, 1942",
    altEs: "Dos trabajadores remachando el fuselaje de la cabina de un avión: uno maneja la remachadora desde fuera mientras el otro sujeta la unión desde dentro.",
    captionEs: "Equipos de remachado en la planta de Douglas Aircraft, Long Beach, California, 1942",
    credit: FSA_OWI,
    sourceUrl: "https://www.loc.gov/item/2017878906/",
  },
  "industrial-engineering": {
    src: "/figures/fields/industrial-engineering.jpg",
    alt: "Rows of freight cars standing in a railroad yard that runs to the horizon, with stacks of parts and timber laid out alongside the tracks.",
    caption: "Freight cars being maneuvered in a Chicago and North Western railroad yard, Chicago, 1942",
    altEs: "Filas de vagones de carga detenidos en un patio ferroviario que se extiende hasta el horizonte, con montones de piezas y madera dispuestos junto a las vías.",
    captionEs: "Vagones de carga siendo maniobrados en un patio ferroviario del Chicago and North Western, Chicago, 1942",
    credit: FSA_OWI,
    sourceUrl: "https://www.loc.gov/item/2017878074/",
  },
  "marine-engineering": {
    src: "/figures/fields/marine-engineering.jpg",
    alt: "Three welders in leather jackets and lifted helmets leaning over the curved steel plate of a ship's boiler.",
    caption: "Welders making boilers for a ship, Combustion Engineering Co., Chattanooga, Tennessee, 1942",
    altEs: "Tres soldadores con chaquetas de cuero y las caretas levantadas, inclinados sobre la chapa curva de acero de la caldera de un barco.",
    captionEs: "Soldadores fabricando calderas para un barco, Combustion Engineering Co., Chattanooga, Tennessee, 1942",
    credit: FSA_OWI,
    sourceUrl: "https://www.loc.gov/item/2017878483/",
  },
  "energy-engineering": {
    src: "/figures/fields/energy-engineering.jpg",
    alt: "A concrete arch dam seen from above, wedged between canyon walls, with its reservoir held back on one side and the powerhouses in the gorge below.",
    caption: "Above Hoover Dam, near Boulder City, Nevada",
    altEs: "Una presa de arco de hormigón vista desde arriba, encajada entre las paredes de un cañón, con su embalse contenido a un lado y las casas de máquinas en la garganta más abajo.",
    captionEs: "Sobre la presa Hoover, cerca de Boulder City, Nevada",
    credit: HIGHSMITH,
    sourceUrl: "https://www.loc.gov/item/2011630337/",
  },
  "aerospace-engineering": {
    src: "/figures/fields/aerospace-engineering.jpg",
    alt: "An aerial view of the Saturn V rocket and its launch tower riding the crawler-transporter along the crawlerway toward the launch pad.",
    caption: "Apollo 11's Saturn V and mobile launcher on the crawler, bound for Launch Pad 39A, May 1969",
    altEs: "Vista aérea del cohete Saturn V y su torre de lanzamiento sobre el transportador oruga, avanzando por la vía hacia la plataforma de lanzamiento.",
    captionEs: "El Saturn V del Apolo 11 y su lanzador móvil sobre el transportador, rumbo a la plataforma de lanzamiento 39A, mayo de 1969",
    credit: NASA,
    sourceUrl: "https://images.nasa.gov/details/624109main_1969-05-20-2_full",
  },
  "robotics-engineering": {
    src: "/figures/fields/robotics-engineering.jpg",
    alt: "Engineers in cleanroom suits working around the Curiosity rover as it extends its robotic arm.",
    caption: "Curiosity Mars rover flexing its robotic arm during testing",
    altEs: "Ingenieros con trajes de sala limpia trabajando alrededor del róver Curiosity mientras extiende su brazo robótico.",
    captionEs: "El róver marciano Curiosity flexionando su brazo robótico durante las pruebas",
    credit: NASA,
    sourceUrl: "https://images.nasa.gov/details/PIA13388",
  },
};
