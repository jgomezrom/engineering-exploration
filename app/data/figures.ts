// Public-domain photography for every engineering field on the site.
//
// Sources, all either public domain or CC0:
//
//   NASA       Not copyrighted. Spacecraft, control rooms, supercomputers,
//              test hardware.
//   Highsmith  Carol M. Highsmith Archive at the Library of Congress. Modern
//              colour documentary photography of US infrastructure, dedicated
//              by the photographer to the public. "No known restrictions."
//   HAER       Historic American Engineering Record, also Library of Congress.
//              Large-format survey photography and measured drawings.
//   Commons    Wikimedia Commons, filtered to public domain (mostly US federal
//              works) and CC0 only. Anything requiring attribution or
//              share-alike was rejected, so the site's footing doesn't change.
//
// Every image is tied to a specific record and its sourceUrl is a deep link to
// that record, so a caption can be re-checked rather than taken on trust.
//
// Captions follow the record's own wording where there is one. Alt text
// describes only what is visible in the frame — not what the record says is
// there, and not history that can't be seen. Getting that backwards is how a
// photo of an empty flame trench once ended up captioned as a rocket engine.
//
// Spanish lives inline as captionEs/altEs rather than in a parallel .es file,
// unlike the other content data. A caption is a claim about one specific
// photograph, and the pair has to stay truthful to the same frame; keeping both
// languages beside the src is what stops one drifting when an image is
// swapped. Proper nouns are left alone — place and company names, and the
// credit line, stay as the record has them so they remain searchable.
//
// Field pages render at aspect-[16/9] with object-cover, so every source here
// is landscape. A portrait one gets cropped to a middle band and can lose its
// subject entirely. Check the crop, not just the full image.
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
const NASA = "NASA";
const USN = "U.S. Navy photograph, via Wikimedia Commons";

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

// Every field has a photograph. These are chosen to be recognisable at a
// glance to a reader who is 10-18 and deciding whether a field looks
// interesting, so a big legible subject in colour beats archival tidiness —
// and each one still has to match what the field page says the discipline
// actually is.
export const fieldFigures: Record<FieldSlug, Figure> = {
  "aerospace-engineering": {
    src: "/figures/fields/aerospace-engineering.jpg",
    alt: "An aerial view of the Saturn V rocket and its launch tower riding the crawler-transporter along the crawlerway toward the launch pad.",
    caption: "Apollo 11's Saturn V and mobile launcher on the crawler, bound for Launch Pad 39A, May 1969",
    altEs: "Vista aérea del cohete Saturn V y su torre de lanzamiento sobre el transportador oruga, avanzando por la vía hacia la plataforma de lanzamiento.",
    captionEs: "El Saturn V del Apolo 11 y su lanzador móvil sobre el transportador, rumbo a la plataforma de lanzamiento 39A, mayo de 1969",
    credit: NASA,
    sourceUrl: "https://images.nasa.gov/details/624109main_1969-05-20-2_full",
  },
  "mechanical-engineering": {
    src: "/figures/fields/mechanical-engineering.jpg",
    alt: "Ground crew guiding a large jet engine into the open engine bay of a fighter aircraft in a hangar.",
    caption: "Installing a Pratt & Whitney TF30 turbofan in an F-14A Tomcat",
    altEs: "Personal de tierra guiando un gran motor a reacción hacia la bahía abierta de un caza en un hangar.",
    captionEs: "Instalación de un turbofán Pratt & Whitney TF30 en un F-14A Tomcat",
    credit: USN,
    sourceUrl: "https://commons.wikimedia.org/wiki/File:TF30_turbofan_in_an_F-14A.JPEG",
  },
  "civil-engineering": {
    src: "/figures/fields/civil-engineering.jpg",
    alt: "The Golden Gate Bridge at night, its towers and main cables picked out by lights above the dark bay.",
    caption: "Golden Gate Bridge, San Francisco, California",
    altEs: "El puente Golden Gate de noche, con sus torres y cables principales iluminados sobre la bahía oscura.",
    captionEs: "Puente Golden Gate, San Francisco, California",
    credit: HIGHSMITH,
    sourceUrl: "https://www.loc.gov/item/2013633353/",
  },
  "structural-engineering": {
    src: "/figures/fields/structural-engineering.jpg",
    alt: "The bare steel frame of a building under construction, columns and beams bolted into a grid against the sky.",
    caption: "Steel frame building under construction, Taiwan",
    altEs: "La estructura de acero desnuda de un edificio en construcción, con columnas y vigas atornilladas formando una retícula contra el cielo.",
    captionEs: "Edificio de estructura de acero en construcción, Taiwán",
    credit: "SSJF01, CC0, via Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Steel_frame_building_under_construction_in_Taiwan.jpg",
  },
  "electrical-engineering": {
    src: "/figures/fields/electrical-engineering.jpg",
    alt: "A line of lattice transmission towers marching away across open country, carrying conductors toward the horizon.",
    caption: "Procession of electrical transmission towers in Van Zandt County, northeast Texas",
    altEs: "Una línea de torres de celosía avanzando por campo abierto, llevando los conductores hacia el horizonte.",
    captionEs: "Hilera de torres de transmisión eléctrica en el condado de Van Zandt, noreste de Texas",
    credit: HIGHSMITH,
    sourceUrl: "https://www.loc.gov/item/2015630228/",
  },
  "energy-engineering": {
    src: "/figures/fields/energy-engineering.jpg",
    alt: "A solar power tower with its receiver glowing white at the top, standing over a field of mirrors and crossed by transmission lines.",
    caption: "Ashalim solar power station, Israel",
    altEs: "Una torre solar con su receptor brillando en blanco en lo alto, sobre un campo de espejos y cruzada por líneas de transmisión.",
    captionEs: "Central solar de Ashalim, Israel",
    credit: "Mussi Katz, CC0, via Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ashalim_Power_Station_close.jpg",
  },
  "nuclear-engineering": {
    src: "/figures/fields/nuclear-engineering.jpg",
    alt: "Two large hyperbolic cooling towers standing side by side under a clear sky.",
    caption: "Rancho Seco Nuclear Generating Station, northern California",
    altEs: "Dos grandes torres de refrigeración hiperbólicas una junto a la otra bajo un cielo despejado.",
    captionEs: "Central Nuclear Rancho Seco, norte de California",
    credit: HIGHSMITH,
    sourceUrl: "https://www.loc.gov/item/2013633987/",
  },
  "chemical-engineering": {
    src: "/figures/fields/chemical-engineering.jpg",
    alt: "A refinery lit up at dusk, its distillation columns and pipework picked out by thousands of lights.",
    caption: "A refinery in Pascagoula, Mississippi, at dusk",
    altEs: "Una refinería iluminada al anochecer, con sus columnas de destilación y tuberías perfiladas por miles de luces.",
    captionEs: "Una refinería en Pascagoula, Misisipi, al anochecer",
    credit: HIGHSMITH,
    sourceUrl: "https://www.loc.gov/item/2017879109/",
  },
  "petroleum-engineering": {
    src: "/figures/fields/petroleum-engineering.jpg",
    alt: "An offshore oil platform standing on its legs above the sea, a crane swinging a personnel basket across open water.",
    caption: "Crew transfer to an offshore oil platform",
    altEs: "Una plataforma petrolífera marina sobre sus pilares en el mar, con una grúa desplazando una cesta de personal sobre el agua.",
    captionEs: "Transferencia de personal a una plataforma petrolífera marina",
    credit: "GuavaTrain, CC0, via Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Oil_Platform_Crew_Transfer.jpg",
  },
  "marine-engineering": {
    src: "/figures/fields/marine-engineering.jpg",
    alt: "A submarine bursting bow-first out of the open ocean during a surfacing drill, throwing up a wall of white water.",
    caption: "Submarine emergency surfacing drill",
    altEs: "Un submarino emergiendo de proa en mar abierto durante un ejercicio de emersión, levantando un muro de agua blanca.",
    captionEs: "Ejercicio de emersión de emergencia de un submarino",
    credit: USN,
    sourceUrl: "https://commons.wikimedia.org/wiki/File:980604-N-7726D-002_Submarine_Emergency_Surfacing_Drill.jpg",
  },
  "materials-engineering": {
    src: "/figures/fields/materials-engineering.jpg",
    alt: "A large circular spacecraft heat shield seen face on, its dark surface divided into a honeycomb of blocks.",
    caption: "Orion heat shield being prepared for thermal testing, Kennedy Space Center, 2017",
    altEs: "Un gran escudo térmico circular de nave espacial visto de frente, con su superficie oscura dividida en un panal de bloques.",
    captionEs: "El escudo térmico de Orion preparado para pruebas térmicas, Centro Espacial Kennedy, 2017",
    credit: NASA,
    sourceUrl: "https://images.nasa.gov/details/jsc2022e045336",
  },
  "manufacturing-engineering": {
    src: "/figures/fields/manufacturing-engineering.jpg",
    alt: "Overhead view of a factory floor where large spun metal tank domes and a curved panel stand among blue welding tooling.",
    caption: "Friction stir welding high bay, NASA Marshall Space Flight Center, 2010",
    altEs: "Vista cenital de una nave industrial donde grandes domos metálicos y un panel curvo se alzan entre utillaje de soldadura azul.",
    captionEs: "Nave de soldadura por fricción-agitación, Centro Marshall de Vuelos Espaciales de la NASA, 2010",
    credit: NASA,
    sourceUrl: "https://images.nasa.gov/details/1000461",
  },
  "industrial-engineering": {
    src: "/figures/fields/industrial-engineering.jpg",
    alt: "An aerial view of a container terminal, stacked containers and gantry cranes laid out in blocks along the waterfront.",
    caption: "Aerial view of the Port of Miami container terminal",
    altEs: "Vista aérea de una terminal de contenedores, con contenedores apilados y grúas pórtico dispuestos en bloques junto al agua.",
    captionEs: "Vista aérea de la terminal de contenedores del Puerto de Miami",
    credit: "Photograph by James R. Tourtellotte, public domain, via Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Aerial_photograph_of_the_Port_of_Miami_Container_Port.jpg",
  },
  "systems-engineering": {
    src: "/figures/fields/systems-engineering.jpg",
    alt: "Simulator control screens showing air traffic over a city, seen from the pilot's position.",
    caption: "Air taxi urban airspace simulation, NASA Langley Research Center",
    altEs: "Pantallas de control de un simulador que muestran tráfico aéreo sobre una ciudad, vistas desde el puesto del piloto.",
    captionEs: "Simulación de espacio aéreo urbano para aerotaxis, Centro de Investigación Langley de la NASA",
    credit: "NASA / David C. Bowman",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Air_taxi_urban_air_space_simulation_control_screens_from_the_pilot_perspective_(LRC-2024-H1_P_2040_AMP-0906).jpg",
  },
  "software-engineering": {
    src: "/figures/fields/software-engineering.jpg",
    alt: "Flight controllers at consoles in a mission control room, each position banked with screens under a wall of larger displays.",
    caption: "The Artemis II flight control team in the White Flight Control Room, Johnson Space Center",
    altEs: "Controladores de vuelo en sus consolas dentro de una sala de control de misión, cada puesto rodeado de pantallas bajo un muro de monitores mayores.",
    captionEs: "El equipo de control de vuelo de Artemis II en la Sala Blanca de Control de Vuelo, Centro Espacial Johnson",
    credit: "NASA / Robert Markowitz",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Jsc2026e019468_(April_1,_2026)_%E2%80%93_The_Artemis_II_flight_control_team_pictured_at_consoles_within_the_White_Flight_Control_Room_in_the_Mission_Control_Center_at_NASA%E2%80%99s_Johnson_Space_Center_preparing_for_the_Artemis.jpg",
  },
  "computer-engineering": {
    src: "/figures/fields/computer-engineering.jpg",
    alt: "A long aisle between rows of supercomputer cabinets, cables and status lights running away toward the far wall.",
    caption: "Pleiades supercomputer, NASA Advanced Supercomputing facility, Ames Research Center",
    altEs: "Un pasillo largo entre filas de armarios de supercomputación, con cables y luces de estado alejándose hacia el fondo.",
    captionEs: "Supercomputadora Pleiades, instalación NASA Advanced Supercomputing, Centro de Investigación Ames",
    credit: NASA,
    sourceUrl: "https://images.nasa.gov/details/ARC-2008-ACD08-0272-005",
  },
  "semiconductor-engineering": {
    src: "/figures/fields/semiconductor-engineering.jpg",
    alt: "A close view of a detector chip at the centre of a circuit board, its square die framed by gold contacts.",
    caption: "Downlink detector prototype for NASA's Deep Space Optical Communications",
    altEs: "Vista cercana de un chip detector en el centro de una placa de circuito, con su die cuadrado enmarcado por contactos dorados.",
    captionEs: "Prototipo de detector de enlace descendente para las Comunicaciones Ópticas del Espacio Profundo de la NASA",
    credit: "NASA/JPL",
    sourceUrl: "https://images.nasa.gov/details/PIA25840",
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
  "biomedical-engineering": {
    src: "/figures/fields/biomedical-engineering.jpg",
    alt: "An MRI scanner installed in a medical facility, its circular bore facing an empty patient table.",
    caption: "An MRI machine at the Role 3 Medical Facility, Camp Bastion, Afghanistan, 2011",
    altEs: "Un escáner de resonancia magnética instalado en un centro médico, con su abertura circular frente a una camilla vacía.",
    captionEs: "Una máquina de resonancia magnética en el Centro Médico Role 3, Camp Bastion, Afganistán, 2011",
    credit: USN,
    sourceUrl: "https://commons.wikimedia.org/wiki/File:US_Navy_111006-O-KK908-026_An_MRI_machine_is_set_up_at_the_Role_3_Medical_Facility_at_Joint_Operating_Base,_Bastion,_Afghanistan.jpg",
  },
  "environmental-engineering": {
    src: "/figures/fields/environmental-engineering.jpg",
    alt: "An aerial view of a water-treatment plant on a lake shore, its rectangular basins laid out beside the open water.",
    caption: "Aerial view of Milwaukee Water Works, the water-treatment plant on Lake Michigan",
    altEs: "Vista aérea de una planta de tratamiento de agua en la orilla de un lago, con sus balsas rectangulares dispuestas junto al agua abierta.",
    captionEs: "Vista aérea de Milwaukee Water Works, la planta de tratamiento de agua en el lago Míchigan",
    credit: HIGHSMITH,
    sourceUrl: "https://www.loc.gov/item/2016630831/",
  },
  "agricultural-engineering": {
    src: "/figures/fields/agricultural-engineering.jpg",
    alt: "Rolling golden wheat hills at harvest, cut rows curving over the slopes.",
    caption: "Wheat harvest on the Palouse",
    altEs: "Colinas ondulantes de trigo dorado en plena cosecha, con las hileras cortadas curvándose por las laderas.",
    captionEs: "Cosecha de trigo en la región del Palouse",
    credit: "Public domain, via Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Wheat_harvest_on_the_Palouse.jpg",
  },
  "architectural-engineering": {
    src: "/figures/fields/architectural-engineering.jpg",
    alt: "Looking up between glass-clad towers, their facades reflecting each other and the sky.",
    caption: "Modern glass-facade towers",
    altEs: "Vista hacia arriba entre torres revestidas de vidrio, cuyas fachadas se reflejan entre sí y en el cielo.",
    captionEs: "Torres modernas de fachada de vidrio",
    credit: "Michael Gaida, CC0, via Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Modern_Skyscrapers_(or_Buildings)made_with_glass.jpg",
  },
  "automotive-engineering": {
    src: "/figures/fields/automotive-engineering.jpg",
    alt: "A row of red Formula One cars lined up nose to tail in a museum hall.",
    caption: "Ferrari Formula One cars at the Ferrari Museum, Maranello, Italy",
    altEs: "Una fila de coches de Fórmula 1 rojos alineados uno tras otro en la sala de un museo.",
    captionEs: "Coches de Fórmula 1 de Ferrari en el Museo Ferrari, Maranello, Italia",
    credit: "Public domain, via Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Collection_of_Ferrari_Formula_One_racing_cars_at_the_Ferrari_Museum_in_Maranello,_Italy.jpg",
  },
};

// The homepage plate cycles through these rather than showing one fixed image,
// so the page has something new on a repeat visit. Order is the display order.
//
// These are drawn from the field set on purpose. The homepage is the first
// thing a reader sees, and it used to rotate through three grey survey
// photographs while every field page behind it was in colour — which made the
// front door the dullest room in the house. Wide, high-contrast subjects are
// chosen here because the homepage frame is 21/9, far wider than a field
// page's, so anything with its subject near the top or bottom loses it.
export const homePlates: Figure[] = [
  fieldFigures["marine-engineering"],
  fieldFigures["civil-engineering"],
  fieldFigures["energy-engineering"],
];
