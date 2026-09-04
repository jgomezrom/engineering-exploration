import { Concept } from "./types";

export const concepts: Concept[] = [
  {
    slug: "forces",
    name: "Forces",
    category: "Mechanical",
    shortDefinition: "A push or a pull on an object.",
    explanation:
      "A force is any push or pull that can change an object's motion — speeding it up, slowing it down, or changing its direction. Forces are why a stationary object stays still (the forces on it are balanced) and why a moving object eventually stops or changes course (an unbalanced force acted on it). Almost every other concept on this page — torque, friction, stress, structures — is really just a specific kind of force or a specific way forces interact.",
    realWorldExample: "Pushing a shopping cart, gravity pulling you down, or a rocket engine pushing a spacecraft forward are all forces at work.",
    relatedFields: ["mechanical-engineering", "civil-engineering", "aerospace-engineering"],
  },
  {
    slug: "torque",
    name: "Torque",
    category: "Mechanical",
    shortDefinition: "A twisting or rotating force, applied at a distance from a pivot point.",
    explanation:
      "Torque is what makes something rotate instead of just moving in a straight line. It depends on both how much force you apply and how far from the pivot point you apply it — that's why a longer wrench makes it easier to loosen a tight bolt: the same amount of force, applied farther from the pivot, creates more torque.",
    realWorldExample: "Turning a wrench, pedaling a bike, or a catapult's arm swinging around its pivot all involve torque.",
    relatedFields: ["mechanical-engineering", "robotics-engineering", "automotive-engineering"],
  },
  {
    slug: "friction",
    name: "Friction",
    category: "Mechanical",
    shortDefinition: "The resistance that occurs when two surfaces slide or try to slide against each other.",
    explanation:
      "Friction is a force that opposes motion between two surfaces in contact. It's why a ball rolling across the floor eventually stops, and why your shoes grip the ground instead of sliding out from under you. Engineers sometimes want to minimize friction, like in an engine, to reduce wasted energy, and sometimes want to maximize it, like in brakes or tires, where grip matters.",
    realWorldExample: "Rubbing your hands together to warm them up, a car's brake pads gripping the wheel, or a hockey puck sliding almost frictionlessly across ice.",
    relatedFields: ["mechanical-engineering"],
  },
  {
    slug: "energy",
    name: "Energy",
    category: "Mechanical",
    shortDefinition: "The capacity to do work or cause change — it can be stored, transferred, or converted, but never created or destroyed.",
    explanation:
      "Energy comes in many forms — motion (kinetic), position (potential), heat, electrical, chemical — and engineering is often about converting energy from one form to a useful one, or storing it for later. A stretched rubber band stores potential energy; released, that energy converts into the kinetic energy of a launched object. The core rule engineers rely on is that energy is conserved: it changes form, but the total amount doesn't just appear or vanish.",
    realWorldExample: "A stretched rubber band launching a catapult, a battery powering a circuit, or a dam converting falling water into electricity.",
    relatedFields: ["mechanical-engineering", "electrical-engineering", "chemical-engineering"],
  },
  {
    slug: "gears",
    name: "Gears",
    category: "Mechanical",
    shortDefinition: "Toothed wheels that transmit rotational motion and force between connected parts.",
    explanation:
      "Gears transfer rotation from one part of a machine to another, and depending on their relative sizes, they can trade speed for torque, or the other way around. A small gear driving a bigger one makes the bigger one turn slower but with more force — the same basic tradeoff as a lever.",
    realWorldExample: "A bicycle's gears let you trade pedaling effort for speed; a clock's internal gears convert one steady rotation into the different speeds of the second, minute, and hour hands.",
    relatedFields: ["mechanical-engineering", "robotics-engineering"],
  },
  {
    slug: "circuits",
    name: "Circuits",
    category: "Electrical",
    shortDefinition: "A closed loop that electricity can flow through, made of a power source and connected components.",
    explanation:
      "A circuit is any complete path that lets electric current flow from a power source, through components like resistors or LEDs, and back to the source. If the loop is broken anywhere, current stops flowing — which is exactly how a switch works.",
    realWorldExample: "The wiring inside a flashlight, a phone charger, or the breadboard circuit in this site's LED challenge are all circuits.",
    relatedFields: ["electrical-engineering", "computer-engineering", "robotics-engineering"],
  },
  {
    slug: "voltage",
    name: "Voltage",
    category: "Electrical",
    shortDefinition: "The electrical \"push\" that drives current through a circuit.",
    explanation:
      "Voltage is the difference in electrical potential between two points, and it's what pushes current through a circuit — similar to how water pressure pushes water through a pipe. A higher voltage means a stronger push, though how much current actually flows also depends on the circuit's resistance.",
    realWorldExample: "A 9V battery has a stronger \"push\" than a single 1.5V AA battery, which is why circuits are often built with specific voltage requirements in mind.",
    relatedFields: ["electrical-engineering", "computer-engineering"],
  },
  {
    slug: "current",
    name: "Current",
    category: "Electrical",
    shortDefinition: "The actual flow of electric charge through a circuit, measured in amps.",
    explanation:
      "Current is the rate at which electric charge flows past a point in a circuit — if voltage is the \"push,\" current is the actual flow that results. Too much current through a component like an LED can damage it, which is exactly why a current-limiting resistor is used.",
    realWorldExample: "The current flowing through an LED circuit is what actually lights it up — and why an LED needs a resistor to keep that current at a safe level.",
    relatedFields: ["electrical-engineering", "computer-engineering"],
  },
  {
    slug: "resistance",
    name: "Resistance",
    category: "Electrical",
    shortDefinition: "How much a material or component opposes the flow of electric current.",
    explanation:
      "Resistance slows down the flow of current through a circuit, and different materials and components have different amounts of it. Engineers use resistors deliberately to control how much current flows to a specific part of a circuit — too little resistance, and a component like an LED can be damaged by excess current.",
    realWorldExample: "The resistor in this site's LED circuit challenge exists specifically to limit current to a safe level for the LED.",
    relatedFields: ["electrical-engineering", "computer-engineering"],
  },
  {
    slug: "stress-strain",
    name: "Stress & Strain",
    category: "Structures & Materials",
    shortDefinition: "Stress is the internal force a material experiences per unit area; strain is how much it deforms in response.",
    explanation:
      "When a load is applied to a structure, the material inside it experiences stress (force spread across its cross-section) and responds with strain (how much it stretches, compresses, or bends). Every material can handle a certain amount of stress before it deforms permanently or breaks — which is exactly what's being tested when a structure is load-tested to failure.",
    realWorldExample: "Loading weight onto a spaghetti bridge until it bends (strain) and eventually breaks (failure) is a direct, hands-on demonstration of stress and strain.",
    relatedFields: ["civil-engineering", "mechanical-engineering", "materials-engineering"],
  },
  {
    slug: "structures",
    name: "Structures",
    category: "Structures & Materials",
    shortDefinition: "The load-bearing framework that gives a building, bridge, or machine its shape and keeps it standing.",
    explanation:
      "A structure's job is to carry loads — its own weight, the people and things inside or on it, and external forces like wind or earthquakes — safely down to the ground or its supports. How a structure is shaped matters enormously: triangular shapes (trusses) resist collapsing in a way that squares don't, which is why so much structural engineering comes down to arranging materials into triangles.",
    realWorldExample: "A bridge's truss framework, a building's steel skeleton, or the triangular supports on a spaghetti bridge are all structures at work.",
    relatedFields: ["civil-engineering", "aerospace-engineering", "structural-engineering", "architectural-engineering"],
  },
  {
    slug: "materials",
    name: "Materials",
    category: "Structures & Materials",
    shortDefinition: "The substances a design is actually made of, each with different strength, weight, and behavior under stress.",
    explanation:
      "No design works the same way in every material — a shape that's strong in steel might fail in plastic, and a material that's great under compression, like concrete, might be weak under tension. Choosing the right material for the job, and understanding how it behaves under real conditions, is its own entire engineering discipline.",
    realWorldExample: "Aircraft use lightweight alloys because weight matters enormously for flight, while bridges often use steel and concrete because they need to be strong under very different kinds of load.",
    relatedFields: ["materials-engineering", "aerospace-engineering", "mechanical-engineering", "semiconductor-engineering"],
  },
  {
    slug: "algorithms",
    name: "Algorithms",
    category: "Software & Systems",
    shortDefinition: "A precise, step-by-step set of instructions for solving a problem or completing a task.",
    explanation:
      "An algorithm is just a clear, unambiguous sequence of steps — a recipe, in a sense — that a computer, or a person, can follow to get a reliable result. Good algorithms aren't just correct, they're also efficient: two algorithms can solve the same problem, but one might do it far faster or use far less memory than the other.",
    realWorldExample: "The steps a map app uses to find the fastest route, or the logic that sorts your photos by date, are both algorithms.",
    relatedFields: ["software-engineering", "computer-engineering"],
  },
  {
    slug: "control-systems",
    name: "Control Systems",
    category: "Software & Systems",
    shortDefinition: "A system that automatically adjusts its own behavior based on feedback, to reach or hold a target state.",
    explanation:
      "A control system continuously measures its own output, compares it to a target, and adjusts itself to close the gap — a loop called feedback. This is what lets a thermostat hold a room at a steady temperature, or a robot arm settle precisely onto a target position instead of overshooting and oscillating forever.",
    realWorldExample: "A thermostat turning the heat on and off to hold a target temperature, or cruise control adjusting a car's throttle to maintain a set speed, are both control systems.",
    relatedFields: ["electrical-engineering", "robotics-engineering", "computer-engineering", "systems-engineering"],
  },
  {
    slug: "thermodynamics",
    name: "Thermodynamics",
    category: "Mechanical",
    shortDefinition: "How heat and energy move, and the rules that govern converting one into the other.",
    explanation:
      "Thermodynamics governs how heat flows and how energy converts between forms — and it comes with hard limits: heat always flows from hot to cold on its own, and no engine can convert 100% of the heat it takes in into useful work. Every engine, power plant, and reactor is built around working within those limits, not against them.",
    realWorldExample:
      "A car engine converting burning fuel into motion (with a lot of that energy lost as heat), a nuclear reactor turning heat into steam to spin a turbine, or a refrigerator moving heat out of a cold space are all thermodynamics at work.",
    relatedFields: ["mechanical-engineering", "chemical-engineering", "nuclear-engineering", "petroleum-engineering", "energy-engineering"],
  },
  {
    slug: "fluid-dynamics",
    name: "Fluid Dynamics",
    category: "Mechanical",
    shortDefinition: "How liquids and gases move, and the forces they exert on whatever they flow around.",
    explanation:
      "Fluid dynamics describes how liquids and gases behave in motion — how fast they flow, how much pressure they exert, and how they push on the surfaces they move past or around. It's why a wing generates lift, why a ship's hull is shaped the way it is, and why a pipeline has to be sized correctly to move oil efficiently without excessive pressure loss.",
    realWorldExample:
      "Air flowing over an aircraft wing, water pushing against a ship's hull, or oil moving through a pipeline are all governed by fluid dynamics.",
    relatedFields: ["aerospace-engineering", "marine-engineering", "petroleum-engineering", "environmental-engineering", "mechanical-engineering"],
  },
  {
    slug: "biocompatibility",
    name: "Biocompatibility",
    category: "Structures & Materials",
    shortDefinition: "Whether a material can function inside or on the human body without causing harmful reactions.",
    explanation:
      "A material can be mechanically perfect and still fail completely if the body rejects it. Biocompatibility is about whether a material triggers inflammation, an immune response, or toxic reactions when it's implanted or otherwise used in or on the body — a real engineering constraint layered on top of a material's normal mechanical properties, not just a medical afterthought.",
    realWorldExample:
      "A hip implant made of titanium (which the body tolerates well), a coating on a stent designed to prevent clotting, or a suture material designed to safely dissolve over time are all engineered for biocompatibility.",
    relatedFields: ["biomedical-engineering", "materials-engineering"],
  },
  {
    slug: "process-optimization",
    name: "Process Optimization",
    category: "Software & Systems",
    shortDefinition: "Finding and removing wasted time, material, or effort in a process, without changing what the process actually accomplishes.",
    explanation:
      "Process optimization means looking at how something already gets done — a factory line, a supply route, an irrigation schedule — and finding where time, material, or effort is being wasted, then redesigning around it. The task itself usually doesn't change; how it's organized does. Small changes in ordering, timing, or layout can add up to a large real-world difference.",
    realWorldExample:
      "Rearranging a factory floor so parts travel a shorter distance, adjusting an irrigation schedule to use less water for the same crop yield, or redesigning an assembly line to cut wasted motion are all process optimization.",
    relatedFields: ["industrial-engineering", "manufacturing-engineering", "agricultural-engineering"],
  },
];
