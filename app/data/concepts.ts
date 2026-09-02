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
    relatedFields: ["mechanical-engineering", "robotics-engineering"],
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
    relatedFields: ["civil-engineering", "aerospace-engineering"],
  },
  {
    slug: "materials",
    name: "Materials",
    category: "Structures & Materials",
    shortDefinition: "The substances a design is actually made of, each with different strength, weight, and behavior under stress.",
    explanation:
      "No design works the same way in every material — a shape that's strong in steel might fail in plastic, and a material that's great under compression, like concrete, might be weak under tension. Choosing the right material for the job, and understanding how it behaves under real conditions, is its own entire engineering discipline.",
    realWorldExample: "Aircraft use lightweight alloys because weight matters enormously for flight, while bridges often use steel and concrete because they need to be strong under very different kinds of load.",
    relatedFields: ["materials-engineering", "aerospace-engineering", "mechanical-engineering"],
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
    relatedFields: ["electrical-engineering", "robotics-engineering", "computer-engineering"],
  },
];
