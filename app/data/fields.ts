import { EngineeringField } from "./types";

export const fields: EngineeringField[] = [
  {
    slug: "mechanical-engineering",
    name: "Mechanical Engineering",
    tagline: "Designing and building machines and systems that move, power, and shape the physical world.",
    whatItIs:
      "Mechanical engineering is one of the broadest engineering fields. It's about how things move, how forces act on objects, and how machines are designed, built, and improved — everything from tiny mechanisms inside a watch to jet engines and factory robots.",
    whatEngineersWorkOn:
      "Mechanical engineers design parts and systems, run simulations to predict how something will behave under stress or heat, build and test physical prototypes, and figure out how to manufacture designs at scale. A lot of the actual day-to-day work is problem-solving when a design doesn't behave the way it was supposed to.",
    realWorldExamples: [
      "Car engines and braking systems",
      "Robotic arms used in factories",
      "HVAC systems that heat and cool buildings",
      "Prosthetic limbs and medical devices",
      "Roller coasters and amusement park rides",
    ],
    commonMisconceptions: [
      "That mechanical engineers mostly fix cars or appliances (that's usually a mechanic or technician, a different job).",
      "That it's only about big machines — a lot of mechanical engineering is precise, small-scale design work.",
      "That you have to already be 'good with tools' before starting — most of the hands-on skill is learned during the degree, not before it.",
    ],
    usefulSubjects: ["Physics (especially mechanics)", "Calculus", "Chemistry (some programs)", "Technical drawing or CAD, if available"],
    helpfulSkills: [
      "Spatial reasoning (visualizing how parts fit and move together)",
      "Comfort with math, especially algebra-based physics",
      "Patience for trial and error — designs rarely work perfectly the first time",
      "Basic computer literacy for CAD and simulation software",
    ],
    typicalProjects: [
      "Designing a part in CAD software and testing whether it can handle a certain load",
      "Building and testing a physical prototype",
      "Improving an existing design to be lighter, cheaper, or more efficient",
    ],
    typicalWorkday:
      "A lot of the job is at a computer — running simulations, reviewing designs, writing reports, and going to meetings — mixed with time in a lab or shop testing physical prototypes. It's less 'building things by hand all day' and more 'solving problems, some of which involve hands-on testing.'",
    industries: ["Automotive", "Aerospace", "Manufacturing", "Energy", "Robotics", "Consumer products"],
    relatedMajors: ["Mechanical Engineering", "Mechatronics Engineering", "Manufacturing Engineering"],
    careerPaths: [
      { title: "Automotive Engineer", description: "Designs and tests vehicle systems like engines, brakes, and suspensions." },
      { title: "HVAC Engineer", description: "Designs heating, cooling, and ventilation systems for buildings." },
      { title: "Product Design Engineer", description: "Designs physical consumer or industrial products from concept to manufacturing." },
      { title: "Robotics Engineer", description: "Designs the physical structure and mechanisms of robots (often overlapping with electrical/software engineering)." },
    ],
    advantages: [
      "Extremely broad — skills transfer across many industries",
      "A mix of hands-on and computer-based work, if you like variety",
      "Direct, visible results — you can often see and touch what you designed",
    ],
    challenges: [
      "Heavy math and physics coursework, especially early in a degree",
      "Designs frequently fail in testing, and figuring out why takes patience",
      "Some roles involve a lot of documentation, reports, and approval processes, so sometimes you won't actually be designing or building anything",
    ],
    thingsPeopleDislike: [
      "Manufacturing and testing timelines can be slow — projects sometimes take months or years",
      "A meaningful amount of paperwork and compliance work depending on the industry (like aerospace, which is heavily regulated)",
    ],
    howCompetitive:
      "Generally, mechanical engineering has strong and stable demand, but this varies significantly by country and by specific industry (e.g., aerospace roles are often more competitive than general manufacturing roles). Don't take this as guaranteed — research the job market in your specific country before making major decisions.",
    beginnerActivities: [
      "Build a simple machine out of household materials (like a catapult or a pulley system) and see how well it performs",
      "Try a free CAD tool like Tinkercad and design a simple part",
      "Take apart an old mechanical toy or appliance (safely, unplugged) and see how the parts fit together",
    ],
    selfReflectionQuestions: [
      "Do I enjoy figuring out how physical things work?",
      "Am I okay with a design not working the first time, and trying again?",
      "Do I like a mix of computer work and hands-on testing?",
      "Do I like math and see myself using it on a regular basis?",
    ],
  },
{
  slug: "electrical-engineering",
  name: "Electrical Engineering",
  tagline: "Understanding and designing the systems that generate, move, and control electricity and electronic signals.",
  whatItIs:
    "Electrical engineering covers how electricity is generated, distributed, and used — from massive power grids down to the tiny circuits inside a phone. It splits into many sub-areas: power systems, electronics, signal processing, and more.",
  whatEngineersWorkOn:
    "Electrical engineers design circuits, test how electronic systems behave, work on power distribution, and often work closely with software engineers when a device needs both hardware and code to function. A lot of the work involves reading schematics, using specialized test equipment, and debugging why a circuit isn't behaving as expected.",
  realWorldExamples: [
    "Power grids and electrical substations",
    "Circuit boards inside phones and laptops",
    "Electric vehicle battery and motor systems",
    "Medical imaging equipment",
    "Wireless communication systems (like WiFi and cell networks)",
  ],
  commonMisconceptions: [
    "That it's the same as being an electrician (a licensed trade, different from an engineering degree)",
    "That it's only about physical wiring — a huge portion of the field is signal theory, circuit design, and increasingly, programming embedded systems",
    "That you need to already understand circuits before starting — like mechanical engineering, most of this is taught from the ground up",
  ],
  usefulSubjects: ["Physics (especially electricity and magnetism)", "Calculus", "Any intro to programming, if available"],
  helpfulSkills: [
    "Comfort with abstract math (electrical behavior isn't always visible the way mechanical motion is)",
    "Careful, methodical debugging — a single wrong connection can break an entire circuit",
    "Basic programming, since many modern electrical systems include embedded code",
  ],
  typicalProjects: [
    "Designing and testing a circuit on a breadboard",
    "Simulating circuit behavior before building it physically",
    "Programming a microcontroller to respond to sensor input",
  ],
  typicalWorkday:
    "Often a mix of circuit design software, testing equipment (like oscilloscopes and multimeters), and — in many roles — writing embedded software. Debugging a circuit that isn't working as expected is a very normal, recurring part of the job.",
  industries: ["Power/energy", "Consumer electronics", "Telecommunications", "Automotive", "Aerospace", "Semiconductor manufacturing"],
  relatedMajors: ["Electrical Engineering", "Electronics Engineering", "Computer Engineering"],
  careerPaths: [
    { title: "Power Systems Engineer", description: "Designs and maintains systems that generate and distribute electricity." },
    { title: "Electronics Design Engineer", description: "Designs circuit boards and electronic components for devices." },
    { title: "RF/Wireless Engineer", description: "Works on wireless communication systems like WiFi, cellular, and satellite signals." },
    { title: "Controls Engineer", description: "Designs systems that automatically control machines or processes using electrical signals." },
  ],
  advantages: [
    "High demand across a very wide range of industries",
    "Skills transfer well into related fields like computer engineering or robotics",
    "A lot of variety — power systems work looks very different from consumer electronics work",
  ],
  challenges: [
    "Concepts are often abstract — electricity and signals aren't always visible or intuitive the way mechanical motion is",
    "Debugging can be frustrating since problems aren't always visually obvious",
    "Regulations and safety standards are strict in power-related work, for good reason",
  ],
  thingsPeopleDislike: [
    "Some roles are heavy on compliance and testing documentation, especially in power or aerospace",
    "Rapid pace of change in electronics means constantly learning new tools and standards",
  ],
  howCompetitive:
    "Demand is generally strong, especially for engineers comfortable with both hardware and software, but this varies by country and specialization — power systems roles and cutting-edge electronics roles can have very different job markets. Research your specific region before drawing conclusions.",
  beginnerActivities: [
    "Build a simple circuit with a breadboard, LEDs, and a 9V battery",
    "Try a beginner electronics kit (many are inexpensive and widely available)",
    "Use a free circuit simulator online to build and test a circuit without needing physical parts",
  ],
  selfReflectionQuestions: [
    "Am I comfortable with abstract concepts I can't directly see, like electrical current?",
    "Do I enjoy debugging — patiently figuring out why something isn't working?",
    "Am I interested in how both hardware and software work together?",
  ],
},
];
