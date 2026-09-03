import { QuizQuestion } from "./types";

// This quiz originally scored only 5 fields. When more fields were added to
// the site, each option below was reviewed against its own already-assigned
// `themes` and given additional points for a new field only where that
// option's actual text and theme genuinely apply — e.g. an option tagged
// "hands-on-building" plausibly also signals interest in aerospace, materials,
// or robotics, since those fields share that same underlying interest. The
// original 5 fields' scores are unchanged. See scoring.ts: a field only shows
// up in results once it has real point coverage like this.
export const quizQuestions: QuizQuestion[] = [
  {
    id: "free-weekend",
    prompt: "A free weekend shows up with nothing planned. Which sounds most appealing?",
    options: [
      { text: "Taking apart something mechanical to see how it works", points: { "mechanical-engineering": 2, "aerospace-engineering": 1, "materials-engineering": 1, "robotics-engineering": 1, "agricultural-engineering": 1, "marine-engineering": 1 }, themes: ["hands-on-building"] },
      { text: "Building a small app or script just to see if I can", points: { "software-engineering": 2, "computer-engineering": 1, "robotics-engineering": 1 }, themes: ["coding-software"] },
      { text: "Watching a documentary about how a bridge or skyscraper was built", points: { "civil-engineering": 2, "environmental-engineering": 1 }, themes: ["structures-infrastructure"] },
      { text: "Reading about a new medical device or health breakthrough", points: { "biomedical-engineering": 2 }, themes: ["biology-health"] },
    ],
  },
  {
    id: "how-does-that-work",
    prompt: "Which of these is more likely to make you stop and think 'wait, how does that actually work?'",
    options: [
      { text: "The wiring and circuitry inside a phone charger", points: { "electrical-engineering": 2, "computer-engineering": 1, "robotics-engineering": 1 }, themes: ["electronics"] },
      { text: "The suspension system in a car", points: { "mechanical-engineering": 2, "aerospace-engineering": 1, "materials-engineering": 1, "robotics-engineering": 1 }, themes: ["hands-on-building"] },
      { text: "How a city's water supply reaches every building", points: { "civil-engineering": 2, "environmental-engineering": 2 }, themes: ["structures-infrastructure"] },
      { text: "How a pacemaker keeps a heartbeat steady", points: { "biomedical-engineering": 2 }, themes: ["biology-health"] },
    ],
  },
  {
    id: "math-physics-comfort",
    prompt: "How do you feel about math and physics-heavy coursework?",
    options: [
      { text: "Bring it on — I like it more the more abstract it gets", points: { "electrical-engineering": 2, "software-engineering": 1, "industrial-engineering": 1, "materials-engineering": 1, "nuclear-engineering": 1, "petroleum-engineering": 1 }, themes: ["abstract-problem-solving"] },
      { text: "I like it best when I can see it in action — forces, motion, structures", points: { "mechanical-engineering": 2, "civil-engineering": 1, "aerospace-engineering": 1, "materials-engineering": 1, "marine-engineering": 1 }, themes: ["hands-on-building"] },
      { text: "I can handle it, but I'd rather it serve biology or health topics", points: { "biomedical-engineering": 2 }, themes: ["biology-health"] },
      { text: "I'd rather minimize it and focus more on logic and problem-solving", points: { "software-engineering": 2, "computer-engineering": 1 }, themes: ["coding-software"] },
    ],
  },
  {
    id: "code-feelings",
    prompt: "How do you feel about writing and debugging code?",
    options: [
      { text: "It's one of my favorite parts of any project", points: { "software-engineering": 2, "computer-engineering": 1, "robotics-engineering": 1 }, themes: ["coding-software"] },
      { text: "I like it as a tool, not the main focus — like controlling hardware", points: { "electrical-engineering": 2, "mechanical-engineering": 1, "computer-engineering": 1, "robotics-engineering": 2 }, themes: ["electronics"] },
      { text: "I'm open to it, but I wouldn't want it to be my main daily activity", points: { "biomedical-engineering": 1, "civil-engineering": 1 }, themes: [] },
      { text: "I'd rather avoid it entirely if possible", points: { "civil-engineering": 2 }, themes: [] },
    ],
  },
  {
    id: "biology-interest",
    prompt: "How interested are you in biology and how the human body works?",
    options: [
      { text: "Very interested — I'd want it to be central to my work", points: { "biomedical-engineering": 2 }, themes: ["biology-health"] },
      { text: "Interested enough to want it involved, even if not the main focus", points: { "biomedical-engineering": 1, "mechanical-engineering": 1 }, themes: ["biology-health"] },
      { text: "Not particularly — I'd rather work with mechanical or electrical systems", points: { "mechanical-engineering": 1, "electrical-engineering": 1, "aerospace-engineering": 1, "robotics-engineering": 1 }, themes: ["hands-on-building", "electronics"] },
      { text: "Not particularly — I'd rather work with code or the built environment", points: { "software-engineering": 1, "civil-engineering": 1, "computer-engineering": 1, "environmental-engineering": 1 }, themes: ["coding-software", "structures-infrastructure"] },
    ],
  },
  {
    id: "built-environment",
    prompt: "When you think about the buildings, roads, and utilities around you, how do you feel?",
    options: [
      { text: "I actively wonder how they were designed and whether they'll hold up", points: { "civil-engineering": 2, "environmental-engineering": 1 }, themes: ["structures-infrastructure"] },
      { text: "I care more about the machines and vehicles that move through them", points: { "mechanical-engineering": 1, "aerospace-engineering": 1, "robotics-engineering": 1 }, themes: ["hands-on-building"] },
      { text: "I care more about the electrical and data systems running through them", points: { "electrical-engineering": 2, "computer-engineering": 1 }, themes: ["electronics"] },
      { text: "I don't think about it much — I'm more interested in software", points: { "software-engineering": 1, "computer-engineering": 1 }, themes: ["coding-software"] },
    ],
  },
  {
    id: "tradeoff-pace",
    prompt: "Which trade-off would you rather live with in your future job?",
    options: [
      { text: "Slow-moving projects (years) but with major public impact", points: { "civil-engineering": 2, "biomedical-engineering": 1, "aerospace-engineering": 1, "environmental-engineering": 1, "materials-engineering": 1, "nuclear-engineering": 1 }, themes: ["long-term-projects", "public-impact"] },
      { text: "Fast-moving projects (weeks to months) with less regulatory oversight", points: { "software-engineering": 2, "computer-engineering": 1 }, themes: ["fast-iteration"] },
      { text: "Medium-pace projects built around physical prototyping and iteration", points: { "mechanical-engineering": 2, "aerospace-engineering": 1, "robotics-engineering": 1, "materials-engineering": 1, "agricultural-engineering": 1 }, themes: ["hands-on-building"] },
      { text: "Medium-pace projects with strict safety and testing requirements", points: { "biomedical-engineering": 1, "electrical-engineering": 1, "aerospace-engineering": 1, "chemical-engineering": 1, "environmental-engineering": 1, "nuclear-engineering": 1, "petroleum-engineering": 1 }, themes: ["regulation-safety"] },
    ],
  },
  {
    id: "daily-environment",
    prompt: "Which environment sounds better for your actual day-to-day work?",
    options: [
      { text: "A lab or workshop, testing physical prototypes", points: { "mechanical-engineering": 2, "biomedical-engineering": 1, "materials-engineering": 2, "chemical-engineering": 1, "aerospace-engineering": 1 }, themes: ["hands-on-building"] },
      { text: "A construction site or out in the field", points: { "civil-engineering": 2, "environmental-engineering": 1, "agricultural-engineering": 1 }, themes: ["structures-infrastructure"] },
      { text: "At a computer, mostly", points: { "software-engineering": 2, "electrical-engineering": 1, "computer-engineering": 1, "industrial-engineering": 1 }, themes: ["coding-software"] },
      { text: "A genuine mix — sometimes hands-on, sometimes at a computer", points: { "electrical-engineering": 2, "mechanical-engineering": 1, "robotics-engineering": 2, "computer-engineering": 1, "petroleum-engineering": 1, "marine-engineering": 1 }, themes: ["electronics", "hands-on-building"] },
    ],
  },
  {
    id: "fun-to-build",
    prompt: "Which of these projects sounds most fun to actually build?",
    options: [
      { text: "A small robot or mechanical device", points: { "mechanical-engineering": 2, "robotics-engineering": 2, "aerospace-engineering": 1, "agricultural-engineering": 1 }, themes: ["hands-on-building"] },
      { text: "A simple circuit or electronics kit", points: { "electrical-engineering": 2, "computer-engineering": 1, "robotics-engineering": 1 }, themes: ["electronics"] },
      { text: "A small app or website", points: { "software-engineering": 2, "computer-engineering": 1 }, themes: ["coding-software"] },
      { text: "A model bridge, and testing how much weight it holds before it fails", points: { "civil-engineering": 2, "materials-engineering": 2, "environmental-engineering": 1, "marine-engineering": 1 }, themes: ["structures-infrastructure"] },
    ],
  },
  {
    id: "satisfying-problem",
    prompt: "Two kinds of hard problems. Which is more satisfying to actually solve?",
    options: [
      { text: "A problem where you can see and touch the thing you're working on", points: { "mechanical-engineering": 2, "civil-engineering": 1, "aerospace-engineering": 1, "materials-engineering": 1, "robotics-engineering": 1, "agricultural-engineering": 1, "marine-engineering": 1 }, themes: ["hands-on-building"] },
      { text: "A problem that's entirely abstract, with no physical component", points: { "software-engineering": 2, "electrical-engineering": 1, "industrial-engineering": 2, "computer-engineering": 1, "petroleum-engineering": 1 }, themes: ["abstract-problem-solving"] },
      { text: "A problem where the 'thing' you're working with is a living system", points: { "biomedical-engineering": 2, "agricultural-engineering": 1 }, themes: ["biology-health"] },
      { text: "A problem where you're balancing safety codes most people never think about", points: { "civil-engineering": 2, "chemical-engineering": 1, "aerospace-engineering": 1, "environmental-engineering": 1, "nuclear-engineering": 1 }, themes: ["regulation-safety"] },
    ],
  },
  {
    id: "code-context",
    prompt: "If you had to write code regularly, which context would appeal more?",
    options: [
      { text: "Code that controls a physical device or machine", points: { "electrical-engineering": 2, "mechanical-engineering": 1, "robotics-engineering": 2, "computer-engineering": 1 }, themes: ["electronics", "coding-software"] },
      { text: "Code for an app, website, or backend system", points: { "software-engineering": 2, "computer-engineering": 1 }, themes: ["coding-software"] },
      { text: "Honestly, I'd rather not write code often at all", points: { "civil-engineering": 1, "biomedical-engineering": 1, "materials-engineering": 1, "environmental-engineering": 1 }, themes: [] },
      { text: "Code specifically for medical or health-related tools", points: { "biomedical-engineering": 2, "software-engineering": 1 }, themes: ["biology-health", "coding-software"] },
    ],
  },
  {
    id: "health-topic",
    prompt: "Which health-related topic interests you more?",
    options: [
      { text: "How a specific device, like an insulin pump, is actually engineered", points: { "biomedical-engineering": 2 }, themes: ["biology-health", "hands-on-building"] },
      { text: "How hospitals and healthcare systems are run and organized", points: { "biomedical-engineering": 1, "industrial-engineering": 1 }, themes: ["biology-health"] },
      { text: "Not particularly interested in health-related topics", points: {}, themes: [] },
      { text: "Somewhat interested, but only paired with hands-on device design", points: { "biomedical-engineering": 1, "mechanical-engineering": 1 }, themes: ["biology-health", "hands-on-building"] },
    ],
  },
  {
    id: "motivation",
    prompt: "Which of these motivates you more?",
    options: [
      { text: "Building things that directly serve the public — roads, water, transit", points: { "civil-engineering": 2, "environmental-engineering": 2 }, themes: ["public-impact", "structures-infrastructure"] },
      { text: "Building products individual people or companies buy and use", points: { "software-engineering": 1, "mechanical-engineering": 1 }, themes: [] },
      { text: "Building tools that help doctors or patients specifically", points: { "biomedical-engineering": 2 }, themes: ["biology-health", "public-impact"] },
      { text: "Building the electrical backbone — power, devices — other systems depend on", points: { "electrical-engineering": 2, "computer-engineering": 1, "nuclear-engineering": 1 }, themes: ["electronics", "public-impact"] },
    ],
  },
  {
    id: "regulation-tolerance",
    prompt: "How do you feel about strict regulations and approval processes shaping your work?",
    options: [
      { text: "Fine with it — I understand why it exists and can work within it", points: { "civil-engineering": 1, "biomedical-engineering": 1, "aerospace-engineering": 1, "chemical-engineering": 1, "environmental-engineering": 1, "nuclear-engineering": 1, "petroleum-engineering": 1 }, themes: ["regulation-safety"] },
      { text: "I'd rather have as much design freedom as possible", points: { "software-engineering": 1, "mechanical-engineering": 1 }, themes: [] },
      { text: "I don't mind some regulation, especially for safety-critical work", points: { "electrical-engineering": 1, "biomedical-engineering": 1, "aerospace-engineering": 1, "chemical-engineering": 1, "marine-engineering": 1 }, themes: ["regulation-safety"] },
      { text: "I'd actively prefer to avoid heavily regulated fields", points: { "software-engineering": 2, "computer-engineering": 1 }, themes: [] },
    ],
  },
  {
    id: "pace-of-change",
    prompt: "Which pace of change and project length fits you better?",
    options: [
      { text: "Long projects (years), on relatively stable technology and methods", points: { "civil-engineering": 2, "aerospace-engineering": 1, "materials-engineering": 1, "nuclear-engineering": 1 }, themes: ["long-term-projects"] },
      { text: "Fast-changing tools and short project cycles — weeks to months", points: { "software-engineering": 2, "computer-engineering": 1, "robotics-engineering": 1 }, themes: ["fast-iteration"] },
      { text: "Medium-length projects, technology evolving but not chaotically", points: { "mechanical-engineering": 1, "electrical-engineering": 1, "industrial-engineering": 1 }, themes: [] },
      { text: "Medium-to-long projects, technology evolving slowly but meaningfully", points: { "biomedical-engineering": 2, "materials-engineering": 1 }, themes: ["long-term-projects"] },
    ],
  },
  {
    id: "downside-tolerance",
    prompt: "Every field has downsides. Which of these would bother you least?",
    options: [
      { text: "Projects that take years and involve a lot of paperwork and approval", points: { "civil-engineering": 2, "biomedical-engineering": 1, "aerospace-engineering": 1, "environmental-engineering": 1, "nuclear-engineering": 1 }, themes: ["long-term-projects", "regulation-safety"] },
      { text: "Constantly needing to learn new tools just to keep up", points: { "software-engineering": 2, "computer-engineering": 1, "robotics-engineering": 1 }, themes: ["fast-iteration"] },
      { text: "Designs failing in testing, and needing patience to figure out why", points: { "mechanical-engineering": 2, "electrical-engineering": 1, "materials-engineering": 1, "robotics-engineering": 1, "aerospace-engineering": 1, "agricultural-engineering": 1, "marine-engineering": 1 }, themes: ["debugging-troubleshooting"] },
      { text: "Regulatory delays that slow down how fast your work reaches real use", points: { "biomedical-engineering": 2, "chemical-engineering": 1 }, themes: ["regulation-safety"] },
    ],
  },
  {
    id: "working-style",
    prompt: "Which working style appeals to you most?",
    options: [
      { text: "Working mostly independently on a well-defined technical problem", points: { "software-engineering": 1, "mechanical-engineering": 1, "materials-engineering": 1 }, themes: ["independent-work"] },
      { text: "Working with a broad team that includes non-engineers, like doctors or city officials", points: { "civil-engineering": 1, "biomedical-engineering": 1, "environmental-engineering": 1, "agricultural-engineering": 1, "petroleum-engineering": 1 }, themes: ["teamwork-collaboration"] },
      { text: "Working closely with hardware and other engineers to make something physical work", points: { "mechanical-engineering": 1, "electrical-engineering": 1, "robotics-engineering": 2, "computer-engineering": 1, "marine-engineering": 1 }, themes: ["teamwork-collaboration", "electronics"] },
      { text: "Working in a fast-moving team that ships and iterates quickly", points: { "software-engineering": 2, "computer-engineering": 1 }, themes: ["teamwork-collaboration", "fast-iteration"] },
    ],
  },
  {
    id: "gut-check",
    prompt: "If you had to pick just one, which matters most to you in a future career?",
    options: [
      { text: "Seeing a physical, tangible result of your work", points: { "mechanical-engineering": 2, "civil-engineering": 1, "aerospace-engineering": 1, "robotics-engineering": 1, "agricultural-engineering": 1, "marine-engineering": 1 }, themes: ["hands-on-building"] },
      { text: "Directly improving people's health", points: { "biomedical-engineering": 2 }, themes: ["biology-health", "public-impact"] },
      { text: "Building things almost anyone in the modern world interacts with daily", points: { "software-engineering": 2, "electrical-engineering": 1, "computer-engineering": 1 }, themes: ["coding-software"] },
      { text: "Keeping essential public systems running", points: { "civil-engineering": 2, "electrical-engineering": 1, "environmental-engineering": 2, "nuclear-engineering": 1 }, themes: ["public-impact", "structures-infrastructure"] },
    ],
  },
  {
    id: "hardest-part-of-a-build",
    prompt: "When a physical design isn't working right, which part would you actually enjoy digging into?",
    options: [
      { text: "Whether a mechanism is moving the way it's supposed to", points: { "mechanical-engineering": 2, "robotics-engineering": 1, "agricultural-engineering": 1 }, themes: ["hands-on-building", "debugging-troubleshooting"] },
      { text: "Whether the design can survive extreme heat, speed, or pressure", points: { "aerospace-engineering": 2, "marine-engineering": 1 }, themes: ["hands-on-building"] },
      { text: "Whether the material itself is the actual problem, not the shape", points: { "materials-engineering": 2 }, themes: ["hands-on-building"] },
      { text: "Whether the electronics and code are doing what they're supposed to", points: { "robotics-engineering": 2, "computer-engineering": 1, "electrical-engineering": 1 }, themes: ["electronics", "debugging-troubleshooting"] },
    ],
  },
  {
    id: "hardware-software-lean",
    prompt: "If your job involved both hardware and code, which side would you gravitate toward?",
    options: [
      { text: "Mostly hardware — circuits, power, physical signals", points: { "electrical-engineering": 2 }, themes: ["electronics"] },
      { text: "Mostly the chip and firmware — the code closest to the hardware itself", points: { "computer-engineering": 2 }, themes: ["electronics", "coding-software"] },
      { text: "Mostly software — apps, websites, systems that don't touch physical hardware", points: { "software-engineering": 2 }, themes: ["coding-software"] },
      { text: "An even mix, on an actual physical device like a robot", points: { "robotics-engineering": 2 }, themes: ["electronics", "coding-software"] },
    ],
  },
  {
    id: "civil-vs-environmental",
    prompt: "Which of these public projects would you rather be the engineer on?",
    options: [
      { text: "A new bridge or transit line", points: { "civil-engineering": 2 }, themes: ["structures-infrastructure", "public-impact"] },
      { text: "A water treatment plant or air quality project", points: { "environmental-engineering": 2 }, themes: ["public-impact"] },
      { text: "The medical equipment inside a hospital, not the building itself", points: { "biomedical-engineering": 1 }, themes: ["biology-health"] },
      { text: "None of these — I'd rather work on a private product, not public infrastructure", points: { "software-engineering": 1, "mechanical-engineering": 1 }, themes: [] },
    ],
  },
  {
    id: "chemical-vs-materials",
    prompt: "Which lab-based problem sounds more interesting?",
    options: [
      { text: "Scaling a chemical reaction from a small test up to a full industrial process", points: { "chemical-engineering": 2 }, themes: ["hands-on-building"] },
      { text: "Testing a new material to find its exact strength and failure point", points: { "materials-engineering": 2 }, themes: ["hands-on-building"] },
      { text: "Testing a device's safety before it's used on a person", points: { "biomedical-engineering": 1 }, themes: ["hands-on-building", "biology-health"] },
      { text: "I'd rather not work in a lab at all", points: { "civil-engineering": 1, "software-engineering": 1 }, themes: [] },
    ],
  },
  {
    id: "process-fixer",
    prompt: "You're handed a slow, inefficient process and asked to fix it. How do you feel?",
    options: [
      { text: "Excited — finding and removing waste is satisfying", points: { "industrial-engineering": 2 }, themes: ["abstract-problem-solving"] },
      { text: "Fine with it, but I'd rather design something new from scratch", points: { "mechanical-engineering": 1 }, themes: [] },
      { text: "I'd rather fix a technical system's code than a workflow", points: { "computer-engineering": 1, "software-engineering": 1 }, themes: ["debugging-troubleshooting"] },
      { text: "Not really my thing — I'd rather build than optimize", points: {}, themes: [] },
    ],
  },
  {
    id: "aerospace-vs-mechanical",
    prompt: "Which excites you more?",
    options: [
      { text: "Aircraft, rockets, or anything that has to perform in extreme environments", points: { "aerospace-engineering": 2 }, themes: ["hands-on-building", "long-term-projects"] },
      { text: "Everyday machines — engines, appliances, tools — that just need to work reliably", points: { "mechanical-engineering": 2 }, themes: ["hands-on-building"] },
      { text: "Vehicles specifically, like cars", points: { "mechanical-engineering": 1 }, themes: ["hands-on-building"] },
      { text: "Neither — I'm more interested in the electronics inside them", points: { "electrical-engineering": 1, "computer-engineering": 1 }, themes: ["electronics"] },
    ],
  },
  {
    id: "biomedical-vs-others-lab",
    prompt: "In a lab, which project would you rather be doing?",
    options: [
      { text: "Testing a device that will be used on or inside a patient", points: { "biomedical-engineering": 2 }, themes: ["biology-health"] },
      { text: "Testing how a new material holds up under stress", points: { "materials-engineering": 1 }, themes: ["hands-on-building"] },
      { text: "Running a chemistry-heavy process experiment", points: { "chemical-engineering": 1 }, themes: ["hands-on-building"] },
      { text: "I'd rather not be in a lab at all", points: { "civil-engineering": 1, "software-engineering": 1 }, themes: [] },
    ],
  },
  {
    id: "systems-thinking",
    prompt: "Which type of problem-solving sounds more like you?",
    options: [
      { text: "Zooming out to see how dozens of smaller pieces fit into one big system", points: { "industrial-engineering": 1, "aerospace-engineering": 1 }, themes: ["abstract-problem-solving"] },
      { text: "Focusing deeply on one small, precise piece and getting it exactly right", points: { "materials-engineering": 1, "computer-engineering": 1 }, themes: ["abstract-problem-solving"] },
      { text: "Working with something alive or biological, not just mechanical parts", points: { "biomedical-engineering": 2, "agricultural-engineering": 1 }, themes: ["biology-health"] },
      { text: "Working with something you can directly measure, like with a multimeter", points: { "electrical-engineering": 2 }, themes: ["electronics"] },
    ],
  },
  {
    id: "public-vs-product",
    prompt: "Which final outcome matters more to you?",
    options: [
      { text: "Something the public relies on without ever thinking about it, like clean water or working roads", points: { "civil-engineering": 1, "environmental-engineering": 2, "nuclear-engineering": 1, "agricultural-engineering": 1 }, themes: ["public-impact"] },
      { text: "Something an individual person or company specifically chooses to buy", points: { "mechanical-engineering": 1, "software-engineering": 1 }, themes: [] },
      { text: "Something that keeps an entire complex project's pieces working together", points: { "industrial-engineering": 1 }, themes: ["abstract-problem-solving"] },
      { text: "Something built to withstand extreme, unusual conditions", points: { "aerospace-engineering": 1, "materials-engineering": 1, "marine-engineering": 1 }, themes: ["hands-on-building"] },
    ],
  },
  {
    id: "regulation-heavy-fields",
    prompt: "Heavily regulated work is common in several fields. Which version of that would you tolerate best?",
    options: [
      { text: "Regulations about keeping people physically safe in buildings and structures", points: { "civil-engineering": 1 }, themes: ["regulation-safety"] },
      { text: "Regulations about safely testing something before it's used on a person", points: { "biomedical-engineering": 1 }, themes: ["regulation-safety"] },
      { text: "Regulations about safely handling hazardous materials or chemicals", points: { "chemical-engineering": 2, "nuclear-engineering": 1, "petroleum-engineering": 1 }, themes: ["regulation-safety"] },
      { text: "Regulations about keeping aircraft or spacecraft safe to operate", points: { "aerospace-engineering": 2 }, themes: ["regulation-safety"] },
    ],
  },
];
