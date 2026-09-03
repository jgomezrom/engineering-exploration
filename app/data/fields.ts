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
    mythsAndRealities: [
      { myth: "Mechanical engineers mostly fix cars or appliances.", reality: "That's usually a mechanic or technician's job — a different profession entirely." },
      { myth: "It's only about big machines.", reality: "A lot of mechanical engineering is precise, small-scale design work." },
      { myth: "You have to already be 'good with tools' before starting.", reality: "Most of the hands-on skill is learned during the degree, not before it." },
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
    dayInLife: {
      blocks: [
        { time: "9:00 AM", label: "Morning check-in", detail: "Reviewing overnight simulation results and catching up on email from the team." },
        { time: "9:30 AM", label: "Design work", detail: "Running simulations and reviewing a design in CAD software to see how it holds up under load." },
        { time: "11:00 AM", label: "Team meeting", detail: "Coordinating with teammates and writing up a status report on a design that's behind schedule." },
        { time: "1:00 PM", label: "In the shop", detail: "Testing a physical prototype — and it's not behaving the way the simulation predicted." },
        { time: "3:00 PM", label: "Back at the desk", detail: "Writing up what went wrong in testing and reworking the design based on it." },
        { time: "4:30 PM", label: "Wrap-up", detail: "Documenting today's progress and setting up tomorrow's shop time." },
      ],
      reflectionQuestion: "Which part of this day would you actually enjoy more — the design work at a computer, or the hands-on testing? Which part would frustrate you?",
    },
    // Ratings are a qualitative read of this field's own text above, not an independent score.
    // mathIntensity: usefulSubjects leads with "Physics (especially mechanics)" and "Calculus".
    // handsOnWork: typicalWorkday explicitly frames it as "less building things by hand all day".
    // regulatoryBurden: thingsPeopleDislike notes compliance work "depending on the industry".
    // marketUncertainty: howCompetitive hedges by country/industry but calls demand "strong and stable".
    // coding: no programming language appears anywhere in this field's text — CAD/simulation software use isn't the same as writing code.
    // outdoorWork: workdayTimeline is desk, meetings, and shop — no outdoor or field component appears.
    // biologyContent: no biology or life-science content appears anywhere in this field's text.
    // creativeFreedom: advantages calls the field "extremely broad," spanning "everything from tiny mechanisms... to jet engines," without the code/regulation limits civil or biomedical describe.
    // teamwork: workdayTimeline gives one of three blocks to "meetings — writing reports, coordinating with the team."
    // seeingWorkRealLife: advantages explicitly says "you can often see and touch what you designed."
    stats: {
      mathIntensity: "High",
      handsOnWork: "Medium",
      regulatoryBurden: "Medium",
      marketUncertainty: "Medium",
      coding: "Low",
      outdoorWork: "Low",
      biologyContent: "Low",
      creativeFreedom: "Medium",
      teamwork: "Medium",
      seeingWorkRealLife: "High",
    },
    salary: {
      medianAnnual: "$104,110",
      period: "May 2025",
      region: "United States (national median)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/mechanical-engineers.htm",
      note: "This is a U.S. national median across all experience levels and specializations — not a starting salary, and not adjusted for your region. Actual pay varies a lot by location, industry, employer, and experience.",
      verifiedDate: "September 2026",
    },
    nextSteps: {
      "10-12": {
        project: "Build a simple catapult or pulley system from household materials and see how far or how much it can move.",
        tool: "No special tools needed yet — just try building with what's around the house.",
        activity: "Look for a LEGO robotics or STEM club at school, or a FIRST LEGO League team, if one's available near you.",
        relatedField: "electrical-engineering",
      },
      "13-15": {
        project: "Design a simple part in a free browser-based CAD tool, then think through how you'd actually build it.",
        tool: "Tinkercad — free, browser-based, no installation needed.",
        activity: "Look into a FIRST Tech Challenge or VEX Robotics team at your school, if one exists.",
        relatedField: "electrical-engineering",
      },
      "16-18": {
        project: "Design and model a more complete part or small mechanism, thinking through tolerances and how it would actually be manufactured.",
        tool: "Fusion 360 (free for personal/education use) or SolidWorks if your school provides access.",
        activity: "Look for a pre-college engineering program, a FIRST Robotics Competition team, or a summer engineering camp through a university.",
        relatedField: "electrical-engineering",
      },
    },
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
  mythsAndRealities: [
    { myth: "It's the same as being an electrician.", reality: "That's a licensed trade, different from an engineering degree." },
    { myth: "It's only about physical wiring.", reality: "A huge portion of the field is signal theory, circuit design, and increasingly, programming embedded systems." },
    { myth: "You need to already understand circuits before starting.", reality: "Like mechanical engineering, most of this is taught from the ground up." },
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
  dayInLife: {
    blocks: [
      { time: "9:00 AM", label: "Circuit design", detail: "Working in circuit design software, laying out a new component on the board." },
      { time: "10:30 AM", label: "Simulation", detail: "Simulating how the circuit should behave before building it physically." },
      { time: "12:00 PM", label: "On the bench", detail: "Using an oscilloscope and multimeter to test the physical circuit against the simulation." },
      { time: "1:30 PM", label: "Debugging", detail: "The circuit isn't behaving as expected — tracing the problem connection by connection." },
      { time: "3:00 PM", label: "Embedded code", detail: "Programming a microcontroller to respond correctly to a sensor input." },
      { time: "4:30 PM", label: "Wrap-up", detail: "Documenting what got fixed today and what's still unresolved." },
    ],
    reflectionQuestion: "How would it feel to spend an afternoon debugging a circuit that isn't working, with no guarantee you'll find the problem before you go home?",
  },
  // mathIntensity: usefulSubjects leads with physics/calculus; helpfulSkills calls for "comfort with abstract math".
  // handsOnWork: typicalWorkday frames it as "a mix" of software, bench testing, and embedded coding.
  // regulatoryBurden: thingsPeopleDislike says compliance is heavy "especially in power or aerospace" — industry-dependent.
  // marketUncertainty: howCompetitive hedges "varies by country and specialization" but calls demand "generally strong".
  // coding: helpfulSkills calls for "basic programming, since many modern electrical systems include embedded code," and typicalProjects includes "programming a microcontroller."
  // outdoorWork: no outdoor or field component appears anywhere in this field's text.
  // biologyContent: no biology or life-science content appears anywhere in this field's text.
  // creativeFreedom: design work is present but not framed as open-ended the way mechanical's "extremely broad" claim is — rated the same middle level absent a stronger signal either way.
  // teamwork: whatEngineersWorkOn notes engineers "often work closely with software engineers" — real but a more secondary mention than fields with more explicit collaboration language.
  // seeingWorkRealLife: challenges says "electricity and signals aren't always visible or intuitive the way mechanical motion is" — real devices result, but the underlying work is explicitly framed as less directly visible.
  stats: {
    mathIntensity: "High",
    handsOnWork: "Medium",
    regulatoryBurden: "Medium",
    marketUncertainty: "Medium",
    coding: "Medium",
    outdoorWork: "Low",
    biologyContent: "Low",
    creativeFreedom: "Medium",
    teamwork: "Medium",
    seeingWorkRealLife: "Medium",
  },
  salary: {
    medianAnnual: "$120,630",
    period: "May 2025",
    region: "United States (national median)",
    sourceName: "U.S. Bureau of Labor Statistics",
    sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/electrical-and-electronics-engineers.htm",
    note: "This is a U.S. national median across all experience levels and specializations — not a starting salary, and not adjusted for your region. The closely related 'electronics engineer' specialization reports a higher median ($130,220) in the same BLS data, so specialization matters here too.",
    verifiedDate: "September 2026",
  },
  nextSteps: {
    "10-12": {
      project: "Build a simple circuit with a snap-circuit kit, a battery, and an LED.",
      tool: "A beginner snap-circuit kit — inexpensive, widely available, no soldering needed.",
      activity: "Look for a school STEM club or a beginner electronics workshop at a local library or maker space, if one's available.",
      relatedField: "software-engineering",
    },
    "13-15": {
      project: "Try building a basic LED circuit, then swap the resistor and see what changes.",
      tool: "A free online circuit simulator like Tinkercad Circuits, so you can test ideas before buying parts.",
      activity: "Look into a FIRST Tech Challenge team or a robotics club that involves wiring and electronics, if available at your school.",
      relatedField: "software-engineering",
    },
    "16-18": {
      project: "Try a beginner Arduino project, like making an LED blink on a schedule or reading a sensor.",
      tool: "Arduino — a widely used, beginner-friendly microcontroller platform.",
      activity: "Look for a pre-college engineering program or a summer electronics camp, and check whether your school offers AP Physics with an electricity and magnetism unit.",
      relatedField: "software-engineering",
    },
  },
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
  {
    slug: "civil-engineering",
    name: "Civil Engineering",
    tagline: "Planning and designing the infrastructure that makes daily life work — roads, bridges, water systems, and the buildings around you.",
    whatItIs:
      "Civil engineering covers the design, construction, and upkeep of infrastructure and the built environment — basically most of what you interact with outside your own house that isn't a private product. It splits into sub-areas like structural, geotechnical, transportation, and water resources/environmental engineering.",
    whatEngineersWorkOn:
      "Civil engineers design structures and systems, run calculations to check they'll hold up under real-world conditions (loads, soil, water flow), and coordinate closely with architects, contractors, and government agencies. A lot of the job is also site visits during construction to make sure what's actually being built matches the design — and dealing with permits, codes, and approvals, which is a bigger part of the work than people expect.",
    realWorldExamples: [
      "Bridges and highway overpasses",
      "Water treatment and municipal sewer systems",
      "Building foundations and structural framing",
      "Dams and flood control systems",
      "Public transit infrastructure like rail lines and tunnels",
    ],
    commonMisconceptions: [
      "That civil engineers are the same as construction workers or contractors — civil engineers design and plan; they generally aren't the ones physically building.",
      "That it's a 'less technical' field than mechanical or electrical engineering — structural and geotechnical calculations can be just as demanding, and the safety margins matter because failures are public and potentially catastrophic.",
      "That most civil engineering work is on big, glamorous projects — a lot of day-to-day work is smaller municipal projects: road repairs, subdivision drainage, routine bridge inspections.",
    ],
    mythsAndRealities: [
      { myth: "Civil engineers are the same as construction workers or contractors.", reality: "Civil engineers design and plan; they generally aren't the ones physically building." },
      { myth: "It's a 'less technical' field than mechanical or electrical engineering.", reality: "Structural and geotechnical calculations can be just as demanding, and the safety margins matter because failures are public and potentially catastrophic." },
      { myth: "Most civil engineering work is on big, glamorous projects.", reality: "A lot of day-to-day work is smaller municipal projects: road repairs, subdivision drainage, routine bridge inspections." },
    ],
    usefulSubjects: ["Physics (especially statics and mechanics)", "Calculus", "Environmental science, if available", "Geography or earth science, if available"],
    helpfulSkills: [
      "Comfort working within codes, standards, and regulations — a lot of the job is designing within legal safety requirements, not just what's technically possible",
      "Project coordination, since civil projects typically involve architects, city officials, and contractors, not just other engineers",
      "Attention to long-term risk — small errors in structural or geotechnical work can have serious public safety consequences",
      "Basic familiarity with CAD or GIS software, if available",
    ],
    typicalProjects: [
      "Calculating the load a beam or foundation needs to support",
      "Designing a drainage system for a new development",
      "Reviewing soil test data to figure out what kind of foundation a site can support",
      "Preparing site plans for a permit application",
    ],
    typicalWorkday:
      "A mix of office design work — running structural or hydraulic calculations, reviewing drawings, writing reports — and site visits to check on active construction or inspect existing infrastructure. Public-sector civil engineers often spend real time in meetings with city officials or community members, since infrastructure projects are usually publicly funded and publicly reviewed.",
    dayInLife: {
      blocks: [
        { time: "8:00 AM", label: "Site visit", detail: "An early start checking on active construction to make sure what's being built matches the design." },
        { time: "10:00 AM", label: "Back at the office", detail: "Running structural or hydraulic calculations on a new section of the project." },
        { time: "11:30 AM", label: "Reviewing drawings", detail: "Checking a colleague's design against building and safety codes." },
        { time: "1:00 PM", label: "Permits and paperwork", detail: "Preparing site plans for a permit application — more of the job than most people expect." },
        { time: "2:30 PM", label: "Public meeting", detail: "Presenting a project update to city officials and answering questions from the community." },
        { time: "4:00 PM", label: "Wrap-up", detail: "Writing a report summarizing what was found on today's site visit." },
      ],
      reflectionQuestion: "Would an early-morning outdoor site visit sound like a nice break from the desk, or an annoying interruption to your day?",
    },
    // mathIntensity: usefulSubjects leads with "Physics (especially statics and mechanics)" and calculus.
    // handsOnWork: typicalWorkday frames it as "a mix" of office work and site visits, not majority field work.
    // regulatoryBurden: helpfulSkills centers "designing within legal safety requirements"; thingsPeopleDislike cites heavy permitting.
    // marketUncertainty: howCompetitive calls demand "generally steady" but hedges pay/demand "a lot by region".
    // coding: no programming language appears anywhere in this field's text.
    // outdoorWork: thingsPeopleDislike explicitly says "site visits can mean early mornings, outdoor conditions, and travel to remote sites."
    // biologyContent: usefulSubjects lists "environmental science," not biology specifically — no direct biology content appears.
    // creativeFreedom: selfReflectionQuestions explicitly asks whether you're "comfortable working within strict codes and regulations rather than having more open-ended design freedom."
    // teamwork: whatEngineersWorkOn says engineers "coordinate closely with architects, contractors, and government agencies," and typicalWorkday adds public meetings with "city officials or community members."
    // seeingWorkRealLife: advantages explicitly says work "has a direct, visible, long-lasting impact on the community you live in."
    stats: {
      mathIntensity: "High",
      handsOnWork: "Medium",
      regulatoryBurden: "High",
      marketUncertainty: "Medium",
      coding: "Low",
      outdoorWork: "High",
      biologyContent: "Low",
      creativeFreedom: "Low",
      teamwork: "High",
      seeingWorkRealLife: "High",
    },
    salary: {
      medianAnnual: "$100,840",
      period: "May 2025",
      region: "United States (national median)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/civil-engineers.htm",
      note: "This is a U.S. national median across all experience levels and specializations — not a starting salary, and not adjusted for your region. Public-sector pay in particular can differ meaningfully from private-sector pay within this same field.",
      verifiedDate: "September 2026",
    },
    nextSteps: {
      "10-12": {
        project: "Build a small bridge out of popsicle sticks or spaghetti and see how much weight it can hold.",
        tool: "No special tools needed yet — just household building materials.",
        activity: "Look for a STEM club at school, or see if a local library or science museum runs a bridge-building or structures workshop.",
        relatedField: "mechanical-engineering",
      },
      "13-15": {
        project: "Try a free online tool that lets you test simple truss or beam designs before building anything physical.",
        tool: "PhET Interactive Simulations (University of Colorado Boulder) — free, includes forces and structures topics.",
        activity: "Look into a Science Olympiad team, which often has bridge-building or structural-engineering events.",
        relatedField: "mechanical-engineering",
      },
      "16-18": {
        project: "Pick a bridge or building you actually pass by and research, from public sources, roughly how it was designed to handle its loads.",
        tool: "Basic CAD or drafting software, if your school offers a drafting or engineering design class.",
        activity: "Look into a pre-college civil engineering or construction program, or a summer program run by a university engineering department.",
        relatedField: "mechanical-engineering",
      },
    },
    industries: ["Government and municipal", "Construction", "Environmental consulting", "Transportation", "Water resources", "Real estate development"],
    relatedMajors: ["Civil Engineering", "Structural Engineering", "Environmental Engineering"],
    careerPaths: [
      { title: "Structural Engineer", description: "Designs the load-bearing framework of buildings and bridges so they can safely support weight and withstand forces like wind or earthquakes." },
      { title: "Geotechnical Engineer", description: "Studies soil and rock conditions to determine how a structure's foundation should be designed." },
      { title: "Transportation Engineer", description: "Plans and designs roads, highways, and transit systems, often focused on traffic flow and safety." },
      { title: "Water Resources Engineer", description: "Designs systems for water supply, drainage, flood control, and wastewater treatment." },
    ],
    advantages: [
      "Work has a direct, visible, long-lasting impact on the community you live in",
      "Demand is tied to essential infrastructure, which tends to need maintenance and upgrades regardless of economic conditions",
      "A clear path toward professional licensure in many countries, which can bring more independent authority and career stability",
    ],
    challenges: [
      "Projects can take years from design to completion, so you don't always see quick results",
      "Public-sector work can involve slow bureaucratic processes and political factors outside your control as an engineer",
      "High stakes — a design error in structural or geotechnical work isn't just costly, it can be dangerous",
    ],
    thingsPeopleDislike: [
      "Government and municipal salaries can lag behind private-sector engineering roles in some regions",
      "A lot of paperwork, permitting, and regulatory review, especially in public-sector work",
      "Site visits can mean early mornings, outdoor conditions, and travel to remote sites",
    ],
    howCompetitive:
      "Demand for civil engineers is generally steady, since infrastructure maintenance and public projects don't disappear the way some private-sector work can, but pay and demand vary a lot by region and by whether you're in public or private-sector work. In many countries, becoming a fully licensed civil engineer takes several years of supervised experience after graduating, which affects how quickly you can take on independent design responsibility — research the licensing path and job market in your specific country before making decisions.",
    beginnerActivities: [
      "Build a small bridge out of popsicle sticks or spaghetti and see how much weight it can hold before failing",
      "Look at a local construction site or bridge and try to identify basic structural elements like beams, columns, and trusses",
      "Try a free online tool that lets you test simple truss or beam designs",
    ],
    selfReflectionQuestions: [
      "Am I interested in projects that take years to finish rather than weeks?",
      "Do I care about public infrastructure and community impact as much as, or more than, the technical problem-solving?",
      "Am I comfortable working within strict codes and regulations rather than having more open-ended design freedom?",
      "Would I want to eventually pursue a professional license, which usually requires years of supervised work experience?",
    ],
  },
  {
    slug: "biomedical-engineering",
    name: "Biomedical Engineering",
    tagline: "Applying engineering principles to biology and medicine — designing the devices, tools, and systems used to diagnose, monitor, and treat the human body.",
    whatItIs:
      "Biomedical engineering sits at the intersection of engineering and the life sciences. It covers a wide range of sub-areas — medical devices, imaging technology, prosthetics, biomaterials, tissue engineering, and increasingly health-related software — so what a biomedical engineer actually does day to day varies a lot depending on their specialization.",
    whatEngineersWorkOn:
      "Biomedical engineers design and test medical devices and equipment, work on making imaging or diagnostic tools more accurate, and develop materials that are safe to use inside or on the human body — often collaborating closely with doctors, biologists, and regulatory specialists. A bigger part of the job than in most other engineering fields is navigating strict safety testing and regulatory approval before a product can be used on patients.",
    realWorldExamples: [
      "Pacemakers and other implantable medical devices",
      "MRI and CT imaging machines",
      "Prosthetic limbs and orthopedic implants",
      "Insulin pumps and other wearable medical devices",
      "Lab equipment used for diagnostic testing",
    ],
    commonMisconceptions: [
      "That biomedical engineers are doctors or work directly with patients — most work in labs, R&D, or manufacturing, not clinical settings.",
      "That the field is mostly biology — it's engineering first, and strong math and physics fundamentals are usually just as important as life-science knowledge.",
      "That entry-level jobs are as widely available as in more established fields like mechanical or electrical engineering — this varies, and it's worth researching carefully (see the competitiveness note below).",
    ],
    mythsAndRealities: [
      { myth: "Biomedical engineers are doctors or work directly with patients.", reality: "Most work in labs, R&D, or manufacturing, not clinical settings." },
      { myth: "The field is mostly biology.", reality: "It's engineering first, and strong math and physics fundamentals are usually just as important as life-science knowledge." },
      { myth: "Entry-level jobs are as widely available as in more established fields like mechanical or electrical engineering.", reality: "This varies a lot, and it's worth researching carefully — see the competitiveness section below." },
    ],
    usefulSubjects: ["Biology", "Chemistry", "Physics", "Calculus"],
    helpfulSkills: [
      "Comfort combining engineering fundamentals with biology and physiology concepts",
      "Careful, detail-oriented documentation — regulatory approval processes require extensive, precise records",
      "Patience with long development timelines, since medical devices often take years to go from design to market",
      "Collaboration skills, since projects usually involve engineers, clinicians, and regulatory staff working together",
    ],
    typicalProjects: [
      "Designing and testing a prototype medical device for safety and function",
      "Analyzing how a material performs when used inside the body (biocompatibility)",
      "Working through documentation required for regulatory submission",
      "Running lab experiments to validate how a device or sensor performs",
    ],
    typicalWorkday:
      "A lot of lab-based work — testing prototypes, running experiments, documenting results — combined with time spent on regulatory paperwork and meetings with cross-disciplinary teams like clinicians and quality/regulatory staff. Because medical devices are so strictly regulated, thorough documentation is a bigger part of daily work here than in many other engineering fields.",
    dayInLife: {
      blocks: [
        { time: "9:00 AM", label: "In the lab", detail: "Testing a device prototype to check whether it works the way it's supposed to." },
        { time: "10:30 AM", label: "Running an experiment", detail: "Analyzing how a material performs when used inside the body — biocompatibility testing." },
        { time: "12:30 PM", label: "Documentation", detail: "Writing careful, precise records — regulatory approval depends on getting this exactly right." },
        { time: "2:00 PM", label: "Cross-team meeting", detail: "Meeting with clinicians and regulatory staff about the device's next round of testing." },
        { time: "3:30 PM", label: "Regulatory paperwork", detail: "Working through documentation required for a formal regulatory submission." },
        { time: "4:30 PM", label: "Wrap-up", detail: "Updating the project timeline — regulatory review can add months that are outside your control." },
      ],
      reflectionQuestion: "How would you feel knowing the device you tested today might not actually reach a patient for another two or three years?",
    },
    // mathIntensity: usefulSubjects splits evenly across biology, chemistry, physics, and calculus — not math-first.
    // handsOnWork: typicalWorkday leads with "a lot of lab-based work" as the primary framing.
    // regulatoryBurden: whatEngineersWorkOn calls regulatory approval "a bigger part of the job than in most other engineering fields".
    // marketUncertainty: howCompetitive opens with "the caveats matter more than most" — the most hedged section on the site.
    // coding: no programming language appears anywhere in this field's text.
    // outdoorWork: no outdoor or field component appears anywhere in this field's text — work is lab-, hospital-, and office-based.
    // biologyContent: usefulSubjects leads with "Biology," and whatItIs calls it "the intersection of engineering and the life sciences."
    // creativeFreedom: device and biomaterials design is real, but the text centers regulatory process and lab testing more than open-ended design language — rated a middle level absent a stronger signal either way.
    // teamwork: helpfulSkills explicitly lists "collaboration skills, since projects usually involve engineers, clinicians, and regulatory staff working together."
    // seeingWorkRealLife: thingsPeopleDislike notes "slow-moving regulatory and approval timelines can be frustrating if you want to see fast results" — real devices do get built, but the text explicitly flags the delay before you see them in use.
    stats: {
      mathIntensity: "Medium",
      handsOnWork: "High",
      regulatoryBurden: "High",
      marketUncertainty: "High",
      coding: "Low",
      outdoorWork: "Low",
      biologyContent: "High",
      creativeFreedom: "Medium",
      teamwork: "High",
      seeingWorkRealLife: "Medium",
    },
    salary: {
      medianAnnual: "$109,370",
      period: "May 2025",
      region: "United States (national median)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/biomedical-engineers.htm",
      note: "This is a U.S. national median across all experience levels and specializations — not a starting salary, and not adjusted for your region. Given the job-market caveats in this field's competitiveness section above, treat this figure as background context, not a guarantee.",
      verifiedDate: "September 2026",
    },
    nextSteps: {
      "10-12": {
        project: "Research how a device you or someone you know actually uses (a pacemaker, hearing aid, or insulin pump) works, and explain it in your own words.",
        tool: "No special tools needed yet — just curiosity and reliable sources like library books or trusted science sites.",
        activity: "Look for a science club at school, or see if a local science museum has a health or medical technology exhibit.",
        relatedField: "mechanical-engineering",
      },
      "13-15": {
        project: "Try a beginner biology resource to see whether the life-science side genuinely interests you, not just the engineering side.",
        tool: "A free, reputable biology resource (like Khan Academy's biology content) to test your interest before committing coursework time.",
        activity: "Look into a HOSA (Health Occupations Students of America) chapter at your school, if one exists — it covers health careers broadly, not just biomedical engineering.",
        relatedField: "mechanical-engineering",
      },
      "16-18": {
        project: "Look into whether your school or a nearby hospital offers volunteering, shadowing, or a biomedical engineering summer program.",
        tool: "None specific yet — this stage is more about exposure to the field than a particular tool.",
        activity: "Look for a HOSA chapter, a pre-college biomedical engineering program, or a hospital's teen volunteer program.",
        relatedField: "mechanical-engineering",
      },
    },
    industries: ["Medical device manufacturing", "Pharmaceuticals", "Hospitals and healthcare systems", "Research institutions", "Diagnostics"],
    relatedMajors: ["Biomedical Engineering", "Bioengineering", "Chemical Engineering (some overlap)"],
    careerPaths: [
      { title: "Medical Device Engineer", description: "Designs and tests devices like pacemakers, insulin pumps, or surgical instruments." },
      { title: "Clinical Engineer", description: "Manages and maintains medical equipment within a hospital or healthcare system." },
      { title: "Biomaterials Engineer", description: "Develops materials safe for use inside or on the human body, like implants or coatings." },
      { title: "Regulatory Affairs Specialist", description: "Manages the testing and documentation process required to get a medical device approved for use — a common path for biomedical engineers who prefer less lab work." },
    ],
    advantages: [
      "Work has a clear, meaningful connection to improving people's health",
      "Highly interdisciplinary — a good fit if you don't want to choose between engineering and life sciences",
      "A growing area of medicine as devices, diagnostics, and personalized treatment continue to advance",
    ],
    challenges: [
      "Regulatory approval processes are long and demanding, which can slow down how quickly your work reaches real-world use",
      "The interdisciplinary nature means a genuinely broad skill set is expected, which can make coursework heavier than more specialized majors",
      "Entry-level roles can be more competitive relative to some other engineering fields — see the note below",
    ],
    thingsPeopleDislike: [
      "Slow-moving regulatory and approval timelines can be frustrating if you want to see fast results",
      "Heavy documentation requirements",
      "Some graduates end up in roles that are only loosely 'biomedical' (like general quality or mechanical engineering roles) because dedicated biomedical positions can be harder to find right out of school",
    ],
    howCompetitive:
      "This is a field where the caveats matter more than most, so treat this as a starting point, not a final answer. Biomedical engineering is a popular major, and it's commonly reported that the number of jobs specifically titled 'biomedical engineer' hasn't always kept pace with how many students graduate with the degree — which is why some graduates move into adjacent roles like quality engineering or regulatory affairs rather than a narrowly 'biomedical' title. This varies significantly by region and specialization and can change over time, so research current, local job market data rather than relying on general reputation.",
    beginnerActivities: [
      "Research how a specific medical device, like a pacemaker or insulin pump, actually works",
      "Try a beginner biology or anatomy resource to see if the life-science side genuinely interests you",
      "Look into a local science center, hospital volunteer program, or shadowing opportunity to see biomedical equipment in a real setting",
    ],
    selfReflectionQuestions: [
      "Am I equally interested in biology and medicine as I am in traditional engineering, or do I lean heavily toward one?",
      "Am I okay with long project timelines shaped by regulatory approval, not just technical difficulty?",
      "Would I be satisfied in an adjacent role, like regulatory affairs or quality engineering, if a narrowly 'biomedical' job isn't available right away?",
      "Do I want work that's closely tied to healthcare outcomes, even if I'm not working directly with patients?",
    ],
  },
  {
    slug: "software-engineering",
    name: "Software Engineering",
    tagline: "Designing, building, and maintaining the software systems and applications that run almost everything digital.",
    whatItIs:
      "Software engineering is about designing, building, testing, and maintaining software — the code behind applications, websites, operating systems, and the systems inside other engineered products, like the control software in a car or a medical device. It's sometimes taught within computer science programs and sometimes as its own major, and the line between 'software engineer,' 'computer scientist,' and 'programmer' is used inconsistently across companies.",
    whatEngineersWorkOn:
      "Software engineers write and review code, design how different parts of a system fit together, test software to catch bugs before release, and maintain and improve existing systems — which is a much bigger part of the job than people expect, since most code isn't written from scratch but built on top of or modified within existing systems. A lot of the actual work is reading other people's code, communicating with teammates, and figuring out why something isn't working as expected.",
    realWorldExamples: [
      "Mobile apps and websites",
      "Operating systems and the software running inside consumer devices",
      "Backend systems that process transactions, like banking or e-commerce platforms",
      "Embedded software inside cars, appliances, and medical devices",
      "Developer tools and infrastructure other companies use to build their own software",
    ],
    commonMisconceptions: [
      "That it's mostly about knowing a lot of programming languages — problem-solving and system design matter more than memorizing syntax, and most working engineers use documentation and references constantly.",
      "That you code independently, all day, every day — most roles involve real time in meetings, code review, planning, and communicating with non-engineers.",
      "That it's an easy or guaranteed path to a high salary regardless of effort — the hiring market has shifted in recent years and is more competitive than the popular narrative suggests (see the note below).",
    ],
    mythsAndRealities: [
      { myth: "It's mostly about knowing a lot of programming languages.", reality: "Problem-solving and system design matter more than memorizing syntax, and most working engineers use documentation and references constantly." },
      { myth: "You code independently, all day, every day.", reality: "Most roles involve real time in meetings, code review, planning, and communicating with non-engineers." },
      { myth: "It's an easy or guaranteed path to a high salary regardless of effort.", reality: "The hiring market has shifted in recent years and is more competitive than the popular narrative suggests — see the note below." },
    ],
    usefulSubjects: ["Any programming or computer science courses available", "Algebra and discrete math, if available", "Logic-based coursework, like formal logic or debate, can help too"],
    helpfulSkills: [
      "Breaking large, vague problems into smaller, well-defined steps",
      "Patience for debugging — most of the job is figuring out why something doesn't work, not writing new code",
      "Comfort reading and modifying code someone else wrote, since most professional work happens inside existing codebases",
      "Communication skills, since engineers constantly explain technical decisions to teammates or non-technical stakeholders",
    ],
    typicalProjects: [
      "Building a small app or website from scratch to learn a language or framework",
      "Fixing a bug in existing code and figuring out what caused it",
      "Writing tests to make sure a piece of software behaves correctly",
      "Contributing a small change to an open-source project",
    ],
    typicalWorkday:
      "Mostly at a computer — writing code, reviewing other people's code, attending planning or standup meetings, and researching how to solve a specific technical problem. Contrary to the 'solo genius coder' image, most software engineering is a collaborative, team-based process involving a lot of written and verbal communication.",
    dayInLife: {
      blocks: [
        { time: "9:00 AM", label: "Standup meeting", detail: "A quick team check-in on what everyone's working on and what's blocking them." },
        { time: "9:15 AM", label: "Writing code", detail: "Working on a small feature — most of it built on top of code that already exists." },
        { time: "10:30 AM", label: "Code review", detail: "Reading and reviewing a teammate's code before it ships." },
        { time: "12:30 PM", label: "Debugging", detail: "Something isn't working as expected, and it's not obvious why yet." },
        { time: "2:00 PM", label: "Problem-solving", detail: "Researching how other people solved a similar technical problem before." },
        { time: "3:30 PM", label: "Back to the fix", detail: "Testing and refining the fix from earlier in the day." },
        { time: "4:30 PM", label: "Wrap-up", detail: "Updating the team on progress before logging off." },
      ],
      reflectionQuestion: "Did today sound like mostly solving problems with a team, or mostly typing code alone? Which one matches what you pictured?",
    },
    // mathIntensity: usefulSubjects lists "Algebra and discrete math, if available" — present but hedged, not central.
    // handsOnWork: typicalWorkday opens with "Mostly at a computer" — the lowest physical/lab component of the 5.
    // regulatoryBurden: no regulatory or compliance language appears anywhere in this field's challenges or dislikes.
    // marketUncertainty: howCompetitive says hiring "has shifted meaningfully" and is "considerably more competitive" now.
    // coding: the field's entire description centers on writing, reviewing, and maintaining code.
    // outdoorWork: typicalWorkday opens with "Mostly at a computer" — no outdoor component appears.
    // biologyContent: no biology or life-science content appears anywhere in this field's text.
    // creativeFreedom: typicalProjects includes building things "from scratch," but whatEngineersWorkOn notes "most code isn't written from scratch but built on top of or modified within existing systems" — rated a middle level given that explicit tension.
    // teamwork: typicalWorkday states "most software engineering is a collaborative, team-based process," and commonMisconceptions directly debunks the "solo genius coder" image.
    // seeingWorkRealLife: advantages explicitly cites "relatively fast feedback loops — you can often build and test something yourself."
    stats: {
      mathIntensity: "Medium",
      handsOnWork: "Low",
      regulatoryBurden: "Low",
      marketUncertainty: "High",
      coding: "High",
      outdoorWork: "Low",
      biologyContent: "Low",
      creativeFreedom: "Medium",
      teamwork: "High",
      seeingWorkRealLife: "High",
    },
    salary: {
      medianAnnual: "$135,980",
      period: "May 2025",
      region: "United States (national median)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
      note: "This is a U.S. national median across all experience levels — not a starting salary, and not adjusted for your region. Given this field's own hiring-market caveats above, a high historical median doesn't guarantee current entry-level outcomes.",
      verifiedDate: "September 2026",
    },
    nextSteps: {
      "10-12": {
        project: "Try Scratch to build a very simple animation or game — no typing real code required.",
        tool: "Scratch — free, made by MIT, designed specifically for beginners.",
        activity: "Look for a school coding club, or see if your local library runs a beginner coding program.",
        relatedField: "electrical-engineering",
      },
      "13-15": {
        project: "Try a free beginner coding course and build one small project, like a calculator or a to-do list.",
        tool: "A free beginner course in Python, since it's commonly taught first.",
        activity: "Look into a school coding club or a local chapter of a beginner coding organization, if available.",
        relatedField: "electrical-engineering",
      },
      "16-18": {
        project: "Contribute a small change to a real open-source project, or build a bigger personal project and publish it.",
        tool: "GitHub — the standard place software engineers store and share code.",
        activity: "Check whether your school offers AP Computer Science, and look into a summer coding program or internship if one's available.",
        relatedField: "electrical-engineering",
      },
    },
    industries: ["Tech companies", "Finance", "Healthcare", "Gaming", "Any industry with a digital product, which today is most of them"],
    relatedMajors: ["Computer Science", "Software Engineering", "Computer Engineering"],
    careerPaths: [
      { title: "Frontend Engineer", description: "Builds the parts of a website or app that users see and interact with directly." },
      { title: "Backend Engineer", description: "Builds the server-side systems that handle data, logic, and requests behind the scenes." },
      { title: "Mobile Engineer", description: "Builds applications specifically for phones and tablets, like iOS or Android apps." },
      { title: "DevOps / Infrastructure Engineer", description: "Builds and maintains the systems that let other engineers deploy and run software reliably." },
    ],
    advantages: [
      "Skills are broadly transferable across almost every industry, since most companies rely on some software",
      "Remote work is more common in this field than in most other engineering disciplines",
      "Relatively fast feedback loops — you can often build and test something yourself without needing expensive equipment or lab access",
    ],
    challenges: [
      "The field changes quickly — tools and best practices considered standard today may be outdated in a few years, so ongoing self-learning is part of the job",
      "The entry-level hiring market has become noticeably more competitive in recent years (see the note below)",
      "Sitting at a computer for long stretches can take a physical toll if you don't build in breaks and movement",
    ],
    thingsPeopleDislike: [
      "Constant need to learn new tools and technologies just to keep up",
      "Meetings and process overhead at larger companies can feel like it slows down actual building",
      "Job security can feel less stable than people assume — the industry has gone through visible layoff waves in recent years",
    ],
    howCompetitive:
      "This has shifted meaningfully in recent years, so treat older narratives about the field carefully. For a long time, software engineering was seen as a reliably high-demand, high-paying path, but entry-level hiring has become considerably more competitive due to a combination of more graduates entering the field, increased use of AI tools for some coding tasks, and broader tech industry layoffs. It's still a large field with real opportunities, but 'just learn to code' is a much less reliable guarantee than it used to be — research current hiring trends rather than relying on this or older general reputation.",
    beginnerActivities: [
      "Try a free beginner coding course — many exist specifically for Python or JavaScript",
      "Build a very small project, like a simple calculator or to-do list app",
      "Try a coding practice site to solve small logic puzzles",
    ],
    selfReflectionQuestions: [
      "Do I enjoy the process of debugging — patiently figuring out why something doesn't work?",
      "Am I comfortable with a field that changes quickly and requires ongoing learning?",
      "Do I want a highly collaborative role, working closely with a team, rather than working alone most of the time?",
      "Am I choosing this field because I'm genuinely interested in building things with code, or mainly because of assumptions about salary or job security that may not hold as strongly as they used to?",
    ],
  },
  {
    slug: "aerospace-engineering",
    name: "Aerospace Engineering",
    tagline: "Designing and testing the aircraft, spacecraft, and systems that get things off the ground — and keep them there safely.",
    whatItIs:
      "Aerospace engineering is about designing, building, and testing vehicles that fly — from commercial airplanes to satellites, rockets, and drones. It splits into two overlapping areas: aeronautical engineering (things that fly within the atmosphere) and astronautical engineering (spacecraft and things that operate beyond it), though most programs and jobs blend both.",
    whatEngineersWorkOn:
      "Aerospace engineers design components and systems, run simulations to predict how a design will perform under extreme forces like high speed, pressure, or temperature, coordinate with manufacturing teams to figure out how something can actually be built, and evaluate designs against strict safety and regulatory requirements. A lot of the job is testing — pushing a design to its limits in a lab or simulation before it's ever trusted with a real flight.",
    realWorldExamples: [
      "Commercial airplane wings and fuselage structures",
      "Satellite propulsion and communication systems",
      "Rocket engines and launch vehicles",
      "Drone and unmanned aircraft systems",
      "Spacecraft life-support and thermal control systems",
    ],
    commonMisconceptions: [
      "That aerospace engineers all work for NASA or a space company — most work in commercial aviation, defense, or on components for larger systems, not necessarily spacecraft.",
      "That you need to already understand rocket science — like other engineering fields, the technical depth is taught during the degree, not expected beforehand.",
      "That it's the same as being a pilot or astronaut — aerospace engineers design and test the vehicles; they don't necessarily fly them.",
    ],
    mythsAndRealities: [
      { myth: "Aerospace engineers all work for NASA or a space company.", reality: "Most work in commercial aviation, defense, or on components for larger systems, not necessarily spacecraft." },
      { myth: "You need to already understand rocket science.", reality: "Like other engineering fields, the technical depth is taught during the degree, not expected beforehand." },
      { myth: "It's the same as being a pilot or astronaut.", reality: "Aerospace engineers design and test the vehicles; they don't necessarily fly them." },
    ],
    usefulSubjects: ["Physics (especially mechanics and thermodynamics)", "Calculus", "Chemistry", "Technical drawing or CAD, if available"],
    helpfulSkills: [
      "Comfort with math and physics at a demanding level — the margins for error are smaller than in most other fields",
      "Patience for extensive testing and simulation before anything gets built physically",
      "Attention to detail, since a small error can have serious safety consequences",
      "Basic computer literacy for CAD and simulation software",
    ],
    typicalProjects: [
      "Simulating how a wing design performs under different airspeeds and stresses",
      "Analyzing a material's ability to withstand extreme heat or pressure",
      "Reviewing test data from a wind tunnel or flight test",
      "Working through documentation required to certify a design as safe",
    ],
    typicalWorkday:
      "Mostly office- and lab-based — running simulations, reviewing designs, and analyzing test data — with periodic time in a lab or testing facility, and travel for some roles. Aerospace projects are typically large, multi-year efforts, so a lot of the daily work is a small piece of a much bigger system, coordinated with many other engineers.",
    dayInLife: {
      blocks: [
        { time: "9:00 AM", label: "Design review", detail: "Reviewing a component design against the project's structural and safety requirements." },
        { time: "10:30 AM", label: "Simulation", detail: "Running a simulation to see how a part performs under extreme stress or temperature." },
        { time: "12:30 PM", label: "Team coordination", detail: "Meeting with manufacturing and other engineering teams — a single aerospace project touches a lot of people." },
        { time: "2:00 PM", label: "Test data review", detail: "Analyzing results from a recent wind tunnel or lab test against what the simulation predicted." },
        { time: "3:30 PM", label: "Documentation", detail: "Writing up findings for the safety and certification record — required before anything moves forward." },
        { time: "4:30 PM", label: "Wrap-up", detail: "Updating the project timeline and flagging any issues for tomorrow." },
      ],
      reflectionQuestion: "Would you be okay knowing your part of a project might not fly for years, and that most of your day is testing and documentation rather than building?",
    },
    // mathIntensity: usefulSubjects leads with physics/thermodynamics and calculus; helpfulSkills calls for math and physics "at a demanding level."
    // handsOnWork: typicalWorkday frames it as "mostly office- and lab-based... with periodic time" in a lab, similar to mechanical's mixed framing.
    // regulatoryBurden: typicalProjects and dayInLife both center certification/safety documentation as "required before anything moves forward."
    // marketUncertainty: howCompetitive cites strong BLS-projected growth, but the field is well known to be tied to defense budgets and commercial aviation cycles.
    // coding: no programming language appears anywhere in this field's text — simulation software use isn't the same as writing code.
    // outdoorWork: no outdoor or field component appears anywhere in this field's text.
    // biologyContent: no biology or life-science content appears anywhere in this field's text.
    // creativeFreedom: helpfulSkills notes "the margins for error are smaller than in most other fields," and typicalProjects centers certification — similar constrained-freedom reasoning to civil engineering.
    // teamwork: dayInLife notes "a single aerospace project touches a lot of people," and typicalWorkday says work is "coordinated with many other engineers."
    // seeingWorkRealLife: typicalWorkday explicitly frames daily work as "a small piece of a much bigger system" on multi-year projects — real but diluted individual visibility.
    stats: {
      mathIntensity: "High",
      handsOnWork: "Medium",
      regulatoryBurden: "High",
      marketUncertainty: "Medium",
      coding: "Low",
      outdoorWork: "Low",
      biologyContent: "Low",
      creativeFreedom: "Low",
      teamwork: "High",
      seeingWorkRealLife: "Medium",
    },
    salary: {
      medianAnnual: "$134,960",
      period: "May 2025",
      region: "United States (national median)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/aerospace-engineers.htm",
      note: "This is a U.S. national median across all experience levels and specializations — not a starting salary, and not adjusted for your region. Aerospace pay can also vary meaningfully between defense-sector and commercial-aviation roles.",
      verifiedDate: "September 2026",
    },
    nextSteps: {
      "10-12": {
        project: "Build and fly a simple paper airplane or glider, and experiment with what changes how far or straight it flies.",
        tool: "No special tools needed yet — just paper and experimentation.",
        activity: "Look for a STEM club at school, or see if a local science museum has an aviation or space exhibit.",
        relatedField: "mechanical-engineering",
      },
      "13-15": {
        project: "Try a free simulation tool to see how wing shape or angle affects lift.",
        tool: "PhET Interactive Simulations (University of Colorado Boulder) — free, includes forces and motion topics relevant to flight.",
        activity: "Look into a Science Olympiad team, which often has aviation or rocketry-related events.",
        relatedField: "mechanical-engineering",
      },
      "16-18": {
        project: "Build and launch a basic model rocket, tracking how design choices affect altitude and stability.",
        tool: "A model rocketry kit from an established hobby brand, following standard safety guidelines.",
        activity: "Look for a pre-college aerospace engineering program or a Civil Air Patrol program, if available.",
        relatedField: "mechanical-engineering",
      },
    },
    industries: ["Commercial aviation", "Defense", "Space exploration", "Satellite communications", "Unmanned/drone systems"],
    relatedMajors: ["Aerospace Engineering", "Aeronautical Engineering", "Astronautical Engineering"],
    careerPaths: [
      { title: "Aerodynamics Engineer", description: "Analyzes how air flows around a vehicle to improve performance, stability, and fuel efficiency." },
      { title: "Structures Engineer", description: "Designs the physical structure of an aircraft or spacecraft to withstand flight and launch forces." },
      { title: "Propulsion Engineer", description: "Designs and tests the engines or propulsion systems that power flight." },
      { title: "Systems Engineer", description: "Coordinates how the many subsystems of a large aerospace project — structures, propulsion, avionics — work together." },
    ],
    advantages: [
      "Work on some of the most technically demanding engineering problems that exist",
      "Strong government-tracked job growth — the U.S. Bureau of Labor Statistics projects 8% employment growth from 2025 to 2035, faster than average for all occupations",
      "A field with a direct connection to major, high-visibility achievements, from commercial flight to space exploration",
    ],
    challenges: [
      "Extremely demanding math and physics coursework, often more intensive than other engineering majors",
      "High-stakes safety margins mean slow, heavily reviewed design and testing processes",
      "Projects are often large and multi-year, so an individual engineer may work on a small piece of a much bigger system for a long time",
    ],
    thingsPeopleDislike: [
      "Heavy documentation and certification requirements before any design can move forward",
      "The industry has historically been cyclical — tied to defense budgets and commercial aviation demand, both of which can shift with government spending and the broader economy",
      "Large bureaucratic organizations, especially in defense contracting, can move slowly compared to smaller companies",
    ],
    howCompetitive:
      "The U.S. Bureau of Labor Statistics projects 8% employment growth for aerospace engineers from 2025 to 2035 — much faster than average for all occupations — with about 3,800 openings projected per year over that decade, driven partly by aircraft redesigns and the growing drone and satellite industry. That said, aerospace hiring has historically been cyclical, tied closely to defense spending and the commercial aviation industry's own ups and downs, and much of the industry requires citizenship or security clearance for defense-related roles in some countries. Research the current market and any citizenship or clearance requirements in your specific country and sector before making decisions.",
    beginnerActivities: [
      "Build and fly a paper airplane, experimenting with different wing shapes and folds",
      "Try a free simulation tool to see how wing shape or angle affects lift",
      "Build and launch a basic model rocket, following standard safety guidelines",
    ],
    selfReflectionQuestions: [
      "Am I comfortable with some of the most demanding math and physics coursework in engineering?",
      "Am I okay with slow, heavily reviewed design processes where safety comes before speed?",
      "Would I be satisfied working on one piece of a much larger, multi-year project?",
      "Am I interested in this field specifically, or mainly drawn to the general idea of space and flight?",
    ],
  },
  {
    slug: "chemical-engineering",
    name: "Chemical Engineering",
    tagline: "Applying chemistry and physics to design the processes and equipment that turn raw materials into everything from fuel to medicine to plastics.",
    whatItIs:
      "Chemical engineering is about designing and running the large-scale processes that turn raw materials into usable products — fuels, plastics, pharmaceuticals, food, and industrial chemicals. It sits at the intersection of chemistry, physics, and traditional engineering, focused less on inventing new chemical reactions and more on figuring out how to run them safely and efficiently at a massive scale.",
    whatEngineersWorkOn:
      "Chemical engineers design equipment and processes for manufacturing, run experiments and simulations to figure out the most efficient and safe way to produce something, establish safety procedures for handling hazardous materials, and troubleshoot problems when a production process isn't behaving as expected. A lot of the job involves scaling something that works in a small lab up to a process that can run continuously in a full-size industrial plant.",
    realWorldExamples: [
      "Oil refining and fuel production",
      "Pharmaceutical manufacturing processes",
      "Plastics and polymer production",
      "Water treatment and desalination systems",
      "Food and beverage processing plants",
    ],
    commonMisconceptions: [
      "That chemical engineers work mostly in a lab mixing chemicals — most of the job is designing and running large-scale industrial processes, not lab chemistry.",
      "That it's the same as being a chemist — chemists typically focus on discovering and understanding reactions; chemical engineers focus on how to run them safely and efficiently at scale.",
      "That it's a niche field — chemical engineers work across a very wide range of industries, from energy to pharmaceuticals to food production.",
    ],
    mythsAndRealities: [
      { myth: "Chemical engineers work mostly in a lab mixing chemicals.", reality: "Most of the job is designing and running large-scale industrial processes, not lab chemistry." },
      { myth: "It's the same as being a chemist.", reality: "Chemists typically focus on discovering and understanding reactions; chemical engineers focus on how to run them safely and efficiently at scale." },
      { myth: "It's a niche field.", reality: "Chemical engineers work across a very wide range of industries, from energy to pharmaceuticals to food production." },
    ],
    usefulSubjects: ["Chemistry", "Physics", "Calculus", "Biology, if available"],
    helpfulSkills: [
      "A strong foundation in chemistry, since it underlies most of the process design work",
      "Comfort with safety-critical thinking — many chemical processes involve hazardous materials, high pressure, or high temperature",
      "Systems thinking — understanding how a change in one part of a process affects everything downstream",
      "Basic computer literacy for process simulation software",
    ],
    typicalProjects: [
      "Designing equipment to safely scale up a lab process to industrial production",
      "Analyzing a production process to find ways to make it more efficient or less wasteful",
      "Reviewing safety procedures for handling a hazardous material",
      "Troubleshooting why a production line isn't producing the expected yield",
    ],
    typicalWorkday:
      "A mix of office-based process design and simulation work, and time on a plant floor monitoring and troubleshooting active production processes. Safety review and regulatory compliance work is a bigger part of the job than people expect, since many chemical processes involve hazardous materials.",
    dayInLife: {
      blocks: [
        { time: "8:00 AM", label: "Plant walkthrough", detail: "Checking on an active production process and talking with plant operators about how it's running." },
        { time: "9:30 AM", label: "Process review", detail: "Analyzing data from yesterday's production run to check the yield and efficiency." },
        { time: "11:00 AM", label: "Safety review", detail: "Reviewing procedures for handling a hazardous material used in the process." },
        { time: "1:00 PM", label: "Simulation", detail: "Modeling a proposed change to the process to see if it improves efficiency before trying it for real." },
        { time: "2:30 PM", label: "Troubleshooting", detail: "A production line isn't hitting its expected output, and it's not immediately clear why." },
        { time: "4:00 PM", label: "Documentation", detail: "Writing up today's findings for the plant's safety and process records." },
      ],
      reflectionQuestion: "How would you feel being responsible for the safety procedures around a process that could be genuinely dangerous if something goes wrong?",
    },
    // mathIntensity: usefulSubjects leads with "Chemistry," "Physics," and "Calculus."
    // handsOnWork: typicalWorkday frames it as "a mix" of office-based work and time on a plant floor.
    // regulatoryBurden: typicalWorkday explicitly says safety and regulatory compliance work "is a bigger part of the job than people expect."
    // marketUncertainty: howCompetitive cites real, positive BLS growth, but a smaller number of annual openings than other fields, and ties to cyclical industries like oil and gas.
    // coding: no programming language appears anywhere in this field's text — simulation software use isn't the same as writing code.
    // outdoorWork: work is described as office- and plant-based — no outdoor component appears.
    // biologyContent: usefulSubjects lists "Biology, if available" — hedged as optional, not central the way biomedical's unconditional "Biology" is.
    // creativeFreedom: helpfulSkills centers "safety-critical thinking," and typicalWorkday emphasizes regulatory compliance over open-ended design — similar constrained-freedom reasoning to civil and aerospace.
    // teamwork: dayInLife includes "talking with plant operators," but this field's text doesn't foreground collaboration as strongly as fields rated High.
    // seeingWorkRealLife: the work centers on an active, running production process making a real product, but the framing is about efficiency and safety more than a single visible "thing you built."
    stats: {
      mathIntensity: "High",
      handsOnWork: "Medium",
      regulatoryBurden: "High",
      marketUncertainty: "Medium",
      coding: "Low",
      outdoorWork: "Low",
      biologyContent: "Low",
      creativeFreedom: "Low",
      teamwork: "Medium",
      seeingWorkRealLife: "Medium",
    },
    salary: {
      medianAnnual: "$125,040",
      period: "May 2025",
      region: "United States (national median)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/chemical-engineers.htm",
      note: "This is a U.S. national median across all experience levels and specializations — not a starting salary, and not adjusted for your region. Pay can vary meaningfully depending on which industry you're in, such as oil and gas versus pharmaceuticals.",
      verifiedDate: "September 2026",
    },
    nextSteps: {
      "10-12": {
        project: "Try a simple, adult-supervised kitchen chemistry experiment, like making a basic polymer, and think about how you'd need to do it safely at a much larger scale.",
        tool: "No special tools needed yet — just supervised household chemistry experiments.",
        activity: "Look for a STEM or chemistry club at school, or a chemistry exhibit at a local science museum.",
        relatedField: "mechanical-engineering",
      },
      "13-15": {
        project: "Try a free chemistry simulation tool to see how changing conditions like temperature or concentration affects a reaction.",
        tool: "PhET Interactive Simulations (University of Colorado Boulder) — free, includes chemistry and states-of-matter topics.",
        activity: "Look into a Science Olympiad team, which often has chemistry-related events.",
        relatedField: "mechanical-engineering",
      },
      "16-18": {
        project: "Research how a specific everyday product, like plastic bottles or fuel, is actually manufactured at an industrial scale, using publicly available sources.",
        tool: "None specific yet — this stage is more about exposure to industrial-scale thinking than a particular tool.",
        activity: "Look for a pre-college chemical engineering program or a summer engineering camp through a university, if available.",
        relatedField: "mechanical-engineering",
      },
    },
    industries: ["Oil and gas", "Pharmaceuticals", "Food and beverage", "Plastics and materials manufacturing", "Water treatment", "Consumer products"],
    relatedMajors: ["Chemical Engineering", "Materials Science and Engineering", "Biochemical Engineering"],
    careerPaths: [
      { title: "Process Engineer", description: "Designs and optimizes the steps of a manufacturing process to be safe, efficient, and consistent." },
      { title: "Process Safety Engineer", description: "Focuses specifically on identifying and reducing hazards in industrial chemical processes." },
      { title: "Plant/Production Engineer", description: "Works on-site at a manufacturing plant, keeping active production processes running smoothly." },
      { title: "Research and Development Engineer", description: "Works on developing new or improved processes, often bridging lab-scale chemistry and industrial-scale engineering." },
    ],
    advantages: [
      "Skills transfer across a very wide range of industries, from energy to pharmaceuticals to food production",
      "A strong foundation in both chemistry and traditional engineering opens multiple career directions",
      "Work has a direct connection to products used in everyday life",
    ],
    challenges: [
      "Heavy chemistry, physics, and math coursework, often considered one of the more academically demanding engineering majors",
      "Working with hazardous materials means safety has to come before speed or convenience, which can slow work down",
      "Many roles are tied to specific industries, like oil and gas, that can go through significant boom-and-bust cycles",
    ],
    thingsPeopleDislike: [
      "Heavy safety and regulatory documentation requirements",
      "Some roles, especially at production plants, may not be located in major cities",
      "Industries like oil and gas can be economically cyclical, which affects job stability in those specific sectors",
    ],
    howCompetitive:
      "The U.S. Bureau of Labor Statistics projects 5% employment growth for chemical engineers from 2025 to 2035 — faster than the average for all occupations — with about 1,100 openings projected per year over that decade, many resulting from workers retiring or changing careers. That's a smaller number of annual openings than some other engineering fields, since chemical engineering is a comparatively smaller field overall. Demand and pay can vary a lot depending on which industry you're in and its current economic cycle — research the current market in your specific country and industry before making decisions.",
    beginnerActivities: [
      "Try a simple, adult-supervised kitchen chemistry experiment, like making a basic polymer",
      "Research how a specific everyday product, like plastic or fuel, is manufactured at an industrial scale",
      "Try a free chemistry simulation tool to see how changing conditions affects a reaction",
    ],
    selfReflectionQuestions: [
      "Am I comfortable with heavy chemistry and math coursework, on top of traditional engineering topics?",
      "Would I be okay being responsible for safety procedures around potentially hazardous materials?",
      "Am I interested in how things are made at a large, industrial scale, not just how they work in theory?",
      "Would I be okay if my job were located at an industrial plant rather than an office in a major city?",
    ],
  },
  {
    slug: "computer-engineering",
    name: "Computer Engineering",
    tagline: "Designing the hardware — processors, circuit boards, and embedded systems — that software actually runs on.",
    whatItIs:
      "Computer engineering sits between electrical engineering and computer science, focused on designing the physical hardware that computers and digital devices run on — processors, circuit boards, memory systems, and the embedded systems inside everyday devices. Many computer engineers also write the low-level software (firmware) that runs directly on that hardware, so the field blends circuit design with programming.",
    whatEngineersWorkOn:
      "Computer engineers design and test computer hardware and related equipment, create schematics for circuits and processors, write and test firmware that runs directly on hardware, and work on making existing systems compatible with new software or components. A lot of the job involves close collaboration with software engineers, since hardware and software have to work together for a device to actually function.",
    realWorldExamples: [
      "Processors and memory chips inside computers and phones",
      "Circuit boards inside consumer electronics",
      "Embedded systems inside cars, appliances, and medical devices",
      "Network hardware like routers and servers",
      "Firmware that controls how hardware behaves before an operating system loads",
    ],
    commonMisconceptions: [
      "That it's the same as software engineering — computer engineers design physical hardware and low-level firmware, not typically full applications or websites.",
      "That it's the same as electrical engineering — there's real overlap, but computer engineering focuses specifically on computing hardware and the software closest to it, rather than broader electrical systems like power.",
      "That you need to already understand circuits or code before starting — like other engineering fields, this is taught from the ground up during the degree.",
    ],
    mythsAndRealities: [
      { myth: "It's the same as software engineering.", reality: "Computer engineers design physical hardware and low-level firmware, not typically full applications or websites." },
      { myth: "It's the same as electrical engineering.", reality: "There's real overlap, but computer engineering focuses specifically on computing hardware and the software closest to it, rather than broader electrical systems like power." },
      { myth: "You need to already understand circuits or code before starting.", reality: "Like other engineering fields, this is taught from the ground up during the degree." },
    ],
    usefulSubjects: ["Physics (especially electricity and electronics)", "Calculus", "Any intro to programming, if available"],
    helpfulSkills: [
      "Comfort with both circuit-level thinking and programming, since the field bridges hardware and software",
      "Careful, methodical debugging, since a hardware bug can be harder to trace than a pure software one",
      "Patience for detailed technical documentation, since hardware design involves precise schematics and specifications",
      "Basic familiarity with circuit design and simulation software",
    ],
    typicalProjects: [
      "Designing a circuit schematic for a new piece of hardware",
      "Writing firmware that controls how a device's hardware behaves",
      "Testing a hardware prototype and analyzing why it isn't performing as expected",
      "Updating a system's design to support a new component or software requirement",
    ],
    typicalWorkday:
      "A mix of circuit design software, hardware testing equipment, and writing low-level code — similar in spirit to electrical engineering, but focused specifically on computing hardware. Testing and documenting results is a significant, recurring part of the job.",
    dayInLife: {
      blocks: [
        { time: "9:00 AM", label: "Schematic review", detail: "Reviewing a circuit schematic for a new piece of hardware before it goes to prototyping." },
        { time: "10:30 AM", label: "Firmware", detail: "Writing low-level code that controls how the hardware behaves." },
        { time: "12:30 PM", label: "Hardware testing", detail: "Testing a physical prototype against its technical specifications." },
        { time: "2:00 PM", label: "Debugging", detail: "A prototype isn't performing as expected, and it's unclear yet whether the cause is the hardware or the firmware." },
        { time: "3:30 PM", label: "Cross-team meeting", detail: "Coordinating with software engineers to make sure hardware and software work together correctly." },
        { time: "4:30 PM", label: "Documentation", detail: "Updating schematics and specifications to reflect today's changes." },
      ],
      reflectionQuestion: "Would you enjoy debugging a problem when you're not even sure yet whether it's a hardware issue or a software issue?",
    },
    // mathIntensity: usefulSubjects leads with "Physics (especially electricity and electronics)" and Calculus, matching electrical engineering's framing.
    // handsOnWork: typicalWorkday frames it as "a mix" of circuit design, hardware testing, and low-level coding.
    // regulatoryBurden: no regulatory or compliance language appears anywhere in this field's text.
    // marketUncertainty: howCompetitive cites strong BLS growth without the specific hiring-volatility caveat this site gives software engineering, so rated at the same middle level as electrical/mechanical rather than software's High.
    // coding: helpfulSkills calls for "comfort with... programming," and typicalProjects centers "writing firmware."
    // outdoorWork: no outdoor or field component appears anywhere in this field's text.
    // biologyContent: no biology or life-science content appears anywhere in this field's text.
    // creativeFreedom: design work (schematics, firmware) is present without the strong regulatory-constraint language seen in civil or aerospace — rated the same middle level as electrical absent a stronger signal either way.
    // teamwork: whatEngineersWorkOn says "a lot of the job involves close collaboration with software engineers" — real, but not as repeated an emphasis as fields rated High.
    // seeingWorkRealLife: helpfulSkills notes "a hardware bug can be harder to trace than a pure software one" — real physical hardware results, but similar under-the-hood abstraction as electrical engineering.
    stats: {
      mathIntensity: "High",
      handsOnWork: "Medium",
      regulatoryBurden: "Low",
      marketUncertainty: "Medium",
      coding: "High",
      outdoorWork: "Low",
      biologyContent: "Low",
      creativeFreedom: "Medium",
      teamwork: "Medium",
      seeingWorkRealLife: "Medium",
    },
    salary: {
      medianAnnual: "$161,740",
      period: "May 2025",
      region: "United States (national median)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/computer-hardware-engineers.htm",
      note: "This is a U.S. national median across all experience levels, listed under BLS's 'computer hardware engineers' category — not a starting salary, and not adjusted for your region.",
      verifiedDate: "September 2026",
    },
    nextSteps: {
      "10-12": {
        project: "Take apart an old, unplugged electronic device (safely) and see if you can identify the circuit board and its components.",
        tool: "No special tools needed yet — just a safe, unplugged device to explore.",
        activity: "Look for a school STEM club or a beginner electronics workshop at a local library or maker space, if available.",
        relatedField: "electrical-engineering",
      },
      "13-15": {
        project: "Try a beginner microcontroller project, like making an LED blink on a schedule using simple code.",
        tool: "Arduino — a widely used, beginner-friendly microcontroller platform that blends hardware and code.",
        activity: "Look into a robotics club or FIRST Tech Challenge team, which often involves both wiring and programming.",
        relatedField: "electrical-engineering",
      },
      "16-18": {
        project: "Try a more advanced microcontroller project that combines a sensor with custom code, like a basic temperature-triggered alert.",
        tool: "Arduino or Raspberry Pi, both widely used and well-documented for beginners moving into more complex projects.",
        activity: "Check whether your school offers a class combining electronics and programming, and look into a pre-college engineering program if available.",
        relatedField: "electrical-engineering",
      },
    },
    industries: ["Consumer electronics", "Semiconductor manufacturing", "Automotive", "Telecommunications", "Medical devices", "Aerospace and defense"],
    relatedMajors: ["Computer Engineering", "Electrical Engineering", "Computer Science (some overlap)"],
    careerPaths: [
      { title: "Hardware Design Engineer", description: "Designs the circuits and physical components inside computing devices." },
      { title: "Firmware Engineer", description: "Writes the low-level code that runs directly on hardware, before a full operating system loads." },
      { title: "Embedded Systems Engineer", description: "Designs the combined hardware and software inside devices like cars, appliances, or medical equipment." },
      { title: "Systems Integration Engineer", description: "Makes sure hardware and software components from different teams work together correctly." },
    ],
    advantages: [
      "Strong, government-tracked job growth — the U.S. Bureau of Labor Statistics projects 9% employment growth from 2025 to 2035, much faster than average",
      "Blends hardware and software skills, which keeps career options broad",
      "High demand across many industries, since almost every modern device relies on custom hardware and embedded systems",
    ],
    challenges: [
      "Requires comfort with both circuit-level electrical concepts and programming, which is a wider skill set than either alone",
      "Hardware development cycles are often slower than pure software, since physical prototypes take time to build and test",
      "Debugging can be harder than pure software work, since a problem could be in the hardware, the firmware, or the interaction between them",
    ],
    thingsPeopleDislike: [
      "Slower iteration cycles than software-only work, since hardware changes cost more time and money to test",
      "Bugs can be genuinely difficult to isolate between hardware and software causes",
      "Rapid pace of change in the tech industry means constantly learning new tools and standards, similar to software engineering",
    ],
    howCompetitive:
      "The U.S. Bureau of Labor Statistics projects 9% employment growth for computer hardware engineers from 2025 to 2035 — much faster than average for all occupations — with about 4,100 openings projected per year over that decade, driven partly by demand for processors and components in appliances, medical devices, and vehicles. As with any tech-adjacent field, demand can shift with the broader technology industry's economic cycles, so research current hiring trends in your specific region and specialization before making decisions.",
    beginnerActivities: [
      "Take apart an old, unplugged electronic device (safely) to see its circuit board and components",
      "Try a beginner microcontroller kit, like Arduino, to make an LED blink on a schedule",
      "Use a free circuit simulator to design and test a simple circuit",
    ],
    selfReflectionQuestions: [
      "Am I equally interested in physical circuits and writing code, or do I lean strongly toward one?",
      "Am I comfortable with slower development cycles than pure software work, since hardware takes longer to test?",
      "Do I enjoy debugging problems where the cause could be in the hardware, the software, or both?",
    ],
  },
  {
    slug: "environmental-engineering",
    name: "Environmental Engineering",
    tagline: "Designing the systems and solutions that protect air, water, and soil quality — and clean them up when something's gone wrong.",
    whatItIs:
      "Environmental engineering applies engineering and science to problems involving the natural environment — water quality, air pollution, waste management, and site cleanup. It overlaps significantly with civil and chemical engineering, but focuses specifically on environmental protection and remediation rather than infrastructure or industrial processes in general.",
    whatEngineersWorkOn:
      "Environmental engineers design systems to control or reduce pollution, analyze water, air, or soil samples to check for contamination, inspect facilities to make sure they meet environmental regulations, and advise organizations on how to clean up or prevent environmental damage. A lot of the job involves working with scientists, technicians, and government regulators, and switching between office analysis and time at an actual field site.",
    realWorldExamples: [
      "Water and wastewater treatment plant design",
      "Air pollution control systems for factories",
      "Contaminated site cleanup and remediation",
      "Landfill and waste management systems",
      "Environmental impact assessments for new construction projects",
    ],
    commonMisconceptions: [
      "That environmental engineers are the same as environmental scientists — scientists typically focus on studying and understanding environmental systems, while engineers focus on designing solutions and systems.",
      "That the job is mostly outdoor fieldwork — a significant amount of the work is office-based analysis, regulatory review, and report writing.",
      "That it's a 'soft' or less technical engineering field — it draws heavily on chemistry, biology, and civil engineering fundamentals, and regulatory work requires real technical precision.",
    ],
    mythsAndRealities: [
      { myth: "Environmental engineers are the same as environmental scientists.", reality: "Scientists typically focus on studying and understanding environmental systems, while engineers focus on designing solutions and systems." },
      { myth: "The job is mostly outdoor fieldwork.", reality: "A significant amount of the work is office-based analysis, regulatory review, and report writing." },
      { myth: "It's a 'soft' or less technical engineering field.", reality: "It draws heavily on chemistry, biology, and civil engineering fundamentals, and regulatory work requires real technical precision." },
    ],
    usefulSubjects: ["Environmental science or earth science, if available", "Chemistry", "Biology", "Physics", "Calculus"],
    helpfulSkills: [
      "Comfort combining chemistry, biology, and traditional engineering concepts",
      "Attention to detail, since regulatory compliance work depends on precise data and documentation",
      "Communication skills, since the job often involves explaining technical findings to regulators, communities, or non-technical stakeholders",
      "Willingness to spend some time at outdoor or industrial field sites, not just in an office",
    ],
    typicalProjects: [
      "Designing a system to treat contaminated water or reduce air pollution from a facility",
      "Testing water, air, or soil samples for signs of contamination",
      "Preparing an environmental impact assessment for a proposed construction project",
      "Developing a cleanup plan for a contaminated site",
    ],
    typicalWorkday:
      "A mix of office-based data analysis and report writing, and time at field sites collecting samples or inspecting facilities for compliance. Environmental engineers often work closely with scientists, technicians, and regulators, and public- or community-facing communication is a real part of some roles.",
    dayInLife: {
      blocks: [
        { time: "8:30 AM", label: "Field site visit", detail: "Collecting water or soil samples at a site being evaluated for contamination." },
        { time: "10:30 AM", label: "Lab coordination", detail: "Sending samples for testing and reviewing results from a previous batch." },
        { time: "12:30 PM", label: "Data analysis", detail: "Analyzing sample data to check whether a site meets regulatory standards." },
        { time: "2:00 PM", label: "Compliance inspection", detail: "Reviewing a facility's pollution control systems against environmental regulations." },
        { time: "3:30 PM", label: "Report writing", detail: "Writing up findings for a regulatory filing or a client report." },
        { time: "4:30 PM", label: "Wrap-up", detail: "Coordinating next steps with the broader project team, including scientists and technicians." },
      ],
      reflectionQuestion: "Would you find it satisfying to help clean up an environmental problem, even knowing the fix might take years and involve a lot of paperwork along the way?",
    },
    // mathIntensity: usefulSubjects splits fairly evenly across environmental science, chemistry, biology, physics, and calculus — not math-first.
    // handsOnWork: typicalWorkday frames it as "a mix" of office-based analysis and field site time.
    // regulatoryBurden: whatEngineersWorkOn and typicalWorkday both center inspecting facilities and meeting environmental regulations.
    // marketUncertainty: howCompetitive cites solid, real BLS growth similar in strength to civil and mechanical engineering.
    // coding: no programming language appears anywhere in this field's text.
    // outdoorWork: typicalWorkday and dayInLife include field site visits and sample collection, but framed as "a mix" alongside office work, not the dominant, explicitly-called-out hardship civil engineering describes.
    // biologyContent: usefulSubjects lists "Biology" unconditionally alongside chemistry, matching the same unconditional framing that earns biomedical engineering a High rating here.
    // creativeFreedom: heavy regulatory and compliance framing throughout the text constrains open-ended design, similar to civil and chemical engineering.
    // teamwork: whatEngineersWorkOn says engineers "often work closely with scientists, technicians, and regulators" — explicit multi-stakeholder collaboration, similar to civil engineering's framing.
    // seeingWorkRealLife: advantages explicitly says work "has a direct, tangible connection to environmental and public health outcomes."
    stats: {
      mathIntensity: "Medium",
      handsOnWork: "Medium",
      regulatoryBurden: "High",
      marketUncertainty: "Medium",
      coding: "Low",
      outdoorWork: "Medium",
      biologyContent: "High",
      creativeFreedom: "Low",
      teamwork: "High",
      seeingWorkRealLife: "High",
    },
    salary: {
      medianAnnual: "$107,110",
      period: "May 2025",
      region: "United States (national median)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/environmental-engineers.htm",
      note: "This is a U.S. national median across all experience levels and specializations — not a starting salary, and not adjusted for your region. Public-sector and consulting roles in this field can differ meaningfully in pay.",
      verifiedDate: "September 2026",
    },
    nextSteps: {
      "10-12": {
        project: "Test the pH or clarity of water samples from different sources, like tap water versus a local pond, using a simple, safe home testing kit.",
        tool: "A basic water testing kit — inexpensive and widely available.",
        activity: "Look for a STEM or environmental club at school, or a nature center program focused on local ecosystems.",
        relatedField: "civil-engineering",
      },
      "13-15": {
        project: "Research a local environmental issue, like water quality or air pollution, using public data sources, and summarize what you find.",
        tool: "Public environmental data sources, like a national environmental protection agency's public database, if available in your country.",
        activity: "Look into a Science Olympiad team or an environmental club, which often cover water quality or ecology topics.",
        relatedField: "civil-engineering",
      },
      "16-18": {
        project: "Design a simple water filtration setup using household materials and test how well it removes visible particles.",
        tool: "Basic household materials — sand, gravel, charcoal, and containers — for a hands-on filtration experiment.",
        activity: "Look for a pre-college environmental engineering program or a summer program focused on sustainability or environmental science.",
        relatedField: "civil-engineering",
      },
    },
    industries: ["Government and regulatory agencies", "Environmental consulting", "Water utilities", "Construction and infrastructure", "Waste management"],
    relatedMajors: ["Environmental Engineering", "Civil Engineering", "Environmental Science (some overlap)"],
    careerPaths: [
      { title: "Water Resources Engineer", description: "Designs systems for water treatment, supply, and wastewater management." },
      { title: "Air Quality Engineer", description: "Designs and evaluates systems to reduce or control air pollution from industrial sources." },
      { title: "Remediation Engineer", description: "Designs plans to clean up contaminated soil, water, or other sites." },
      { title: "Environmental Compliance Engineer", description: "Makes sure facilities and projects meet environmental regulations and standards." },
    ],
    advantages: [
      "Work has a direct, tangible connection to environmental and public health outcomes",
      "Demand is tied to essential public and regulatory needs, which tends to stay relatively steady",
      "Highly interdisciplinary — a good fit if you don't want to choose between engineering and environmental or life sciences",
    ],
    challenges: [
      "Heavy regulatory and compliance work, which can slow projects down regardless of the technical solution",
      "Cleanup and remediation projects can take years, so results aren't always immediate",
      "Requires comfort with both engineering and life-science subjects, which can mean a broader, heavier course load",
    ],
    thingsPeopleDislike: [
      "A significant amount of paperwork and regulatory documentation",
      "Field site visits can mean outdoor conditions, travel, and exposure to less pleasant environments, like contaminated sites",
      "Public-sector and consulting pay can lag behind some private-sector engineering roles in certain regions",
    ],
    howCompetitive:
      "The U.S. Bureau of Labor Statistics projects 6% employment growth for environmental engineers from 2025 to 2035 — faster than the average for all occupations — with about 2,300 openings projected per year over that decade, driven by increased attention to environmental hazards and demand for water and air quality solutions. Demand can vary depending on regional environmental regulations and government funding for public projects — research the current market and regulatory environment in your specific country before making decisions.",
    beginnerActivities: [
      "Test the pH or clarity of water samples from different sources using a simple home testing kit",
      "Design a basic water filtration setup with household materials and test how well it works",
      "Research a local environmental issue using public data sources",
    ],
    selfReflectionQuestions: [
      "Am I equally interested in environmental science and traditional engineering, or do I lean strongly toward one?",
      "Am I comfortable with heavy regulatory and compliance work as part of the job?",
      "Would I be satisfied with cleanup or improvement projects that can take years to show results?",
      "Am I okay spending some of my time at outdoor or industrial field sites, not just in an office?",
    ],
  },
  {
    slug: "industrial-engineering",
    name: "Industrial Engineering",
    tagline: "Making systems — factories, supply chains, hospitals, even checkout lines — work more efficiently, with fewer wasted resources and less wasted time.",
    whatItIs:
      "Industrial engineering is about improving how complex systems work — manufacturing lines, supply chains, hospitals, logistics networks, even service processes like a checkout line. Rather than designing a single physical product, industrial engineers focus on how people, machines, materials, and information all work together, and how to make that whole system more efficient, safer, or higher quality.",
    whatEngineersWorkOn:
      "Industrial engineers evaluate manufacturing, delivery, customer experience, or other systems to identify ways to improve productivity and quality. They gather information through observation, data collection, and surveys, then design improved processes, often collaborating with people across many different departments who aren't necessarily engineers themselves. A lot of the work involves finding waste or bottlenecks in an existing system and figuring out how to remove them.",
    realWorldExamples: [
      "Factory floor layout and production line design",
      "Warehouse and supply chain logistics",
      "Hospital patient flow and scheduling systems",
      "Airport security and boarding process design",
      "Retail checkout and customer service process improvement",
    ],
    commonMisconceptions: [
      "That industrial engineers work on the factory floor operating machines — most of the job is analysis and process design, not machine operation.",
      "That it's less 'technical' than other engineering fields because it doesn't focus on a single physical product — the underlying math, like statistics and optimization, can be just as demanding.",
      "That it only applies to factories — industrial engineering principles are used in healthcare, logistics, retail, and many service industries.",
    ],
    mythsAndRealities: [
      { myth: "Industrial engineers work on the factory floor operating machines.", reality: "Most of the job is analysis and process design, not machine operation." },
      { myth: "It's less 'technical' than other engineering fields because it doesn't focus on a single physical product.", reality: "The underlying math, like statistics and optimization, can be just as demanding." },
      { myth: "It only applies to factories.", reality: "Industrial engineering principles are used in healthcare, logistics, retail, and many service industries." },
    ],
    usefulSubjects: ["Advanced mathematics, including statistics", "Physics", "Any intro to programming or data analysis, if available"],
    helpfulSkills: [
      "Comfort with statistics and data analysis, since a lot of the job involves measuring and improving a process",
      "Systems thinking — understanding how a change in one part of a process affects everything else",
      "Communication and collaboration skills, since projects usually involve working with non-engineers across different departments",
      "Comfort with ambiguity, since improving a messy real-world system doesn't always have one clear right answer",
    ],
    typicalProjects: [
      "Observing a manufacturing line and identifying where time or materials are being wasted",
      "Analyzing data to find bottlenecks in a supply chain or scheduling system",
      "Redesigning a workflow or facility layout to improve efficiency",
      "Building a model to compare different process changes before implementing one",
    ],
    typicalWorkday:
      "A mix of gathering data through observation, surveys, or existing records, analyzing it to find inefficiencies, and working with teams across a business to redesign a process. Much of the job happens in meetings and on-site observation, in addition to computer-based analysis.",
    dayInLife: {
      blocks: [
        { time: "9:00 AM", label: "Floor observation", detail: "Watching a production or service process in action to see where delays happen." },
        { time: "10:30 AM", label: "Data analysis", detail: "Analyzing collected data to measure how much time or material a specific step is wasting." },
        { time: "12:30 PM", label: "Cross-department meeting", detail: "Discussing a proposed process change with people from operations, who aren't engineers themselves." },
        { time: "2:00 PM", label: "Modeling", detail: "Building a simple model to compare two possible ways of redesigning a process before committing to one." },
        { time: "3:30 PM", label: "Pilot review", detail: "Checking results from a small-scale trial of a process change." },
        { time: "4:30 PM", label: "Wrap-up", detail: "Writing a recommendation report summarizing today's findings." },
      ],
      reflectionQuestion: "Would you enjoy spending your day improving how an existing system works, rather than designing one single new physical thing?",
    },
    // mathIntensity: usefulSubjects centers "advanced mathematics, including statistics" — real but less physics-heavy than mechanical or aerospace.
    // handsOnWork: typicalWorkday describes observation, data analysis, and meetings — no physical building or lab testing component appears.
    // regulatoryBurden: no regulatory or compliance language appears anywhere in this field's text.
    // marketUncertainty: howCompetitive cites the strongest, least-hedged growth figures of any field on this site — 12% growth and the largest annual opening count.
    // coding: usefulSubjects lists "intro to programming or data analysis, if available" — hedged as optional, not central.
    // outdoorWork: no outdoor or field component appears anywhere in this field's text — work is factory-floor and office-based.
    // biologyContent: no biology or life-science content appears anywhere in this field's text.
    // creativeFreedom: helpfulSkills notes "comfort with ambiguity, since... a messy real-world system doesn't always have one clear right answer" — open-ended problem-solving without regulatory constraint language.
    // teamwork: whatEngineersWorkOn and helpfulSkills both explicitly emphasize "working with non-engineers across different departments."
    // seeingWorkRealLife: dayInLife's "pilot review" step and the process-improvement focus give measurable, observable results, though less of a single physical artifact than mechanical or civil engineering.
    stats: {
      mathIntensity: "Medium",
      handsOnWork: "Low",
      regulatoryBurden: "Low",
      marketUncertainty: "Low",
      coding: "Low",
      outdoorWork: "Low",
      biologyContent: "Low",
      creativeFreedom: "Medium",
      teamwork: "High",
      seeingWorkRealLife: "Medium",
    },
    salary: {
      medianAnnual: "$102,440",
      period: "May 2025",
      region: "United States (national median)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/industrial-engineers.htm",
      note: "This is a U.S. national median across all experience levels and specializations — not a starting salary, and not adjusted for your region. Because industrial engineers work across so many different industries, pay can vary a lot depending on the sector.",
      verifiedDate: "September 2026",
    },
    nextSteps: {
      "10-12": {
        project: "Time how long a repetitive task takes, like making a sandwich or packing a bag, a few different ways, and see which is fastest.",
        tool: "No special tools needed yet — just a stopwatch or phone timer.",
        activity: "Look for a STEM or business club at school that touches on organization or process improvement.",
        relatedField: "mechanical-engineering",
      },
      "13-15": {
        project: "Pick a process you experience regularly, like a school cafeteria line, and sketch out where the slowdowns happen and how you'd fix them.",
        tool: "No special tools needed yet — pen, paper, and observation.",
        activity: "Look into a business or entrepreneurship club, which sometimes covers process and operations topics.",
        relatedField: "mechanical-engineering",
      },
      "16-18": {
        project: "Learn the basics of a process-mapping technique, like a simple flowchart, and use it to map out and improve a real process you're familiar with.",
        tool: "A free flowchart or diagramming tool, many of which are available online at no cost.",
        activity: "Look for a pre-college engineering or business program, or a summer program that touches on operations or logistics.",
        relatedField: "mechanical-engineering",
      },
    },
    industries: ["Manufacturing", "Logistics and supply chain", "Healthcare systems", "Retail", "Consulting", "Technology"],
    relatedMajors: ["Industrial Engineering", "Operations Research", "Systems Engineering"],
    careerPaths: [
      { title: "Process Improvement Engineer", description: "Analyzes existing workflows and redesigns them to reduce waste and improve efficiency." },
      { title: "Supply Chain Engineer", description: "Designs and optimizes how materials and products move from suppliers to customers." },
      { title: "Quality Engineer", description: "Focuses on making sure products or processes consistently meet quality standards." },
      { title: "Operations Research Analyst", description: "Uses mathematical modeling and data analysis to help organizations make better operational decisions." },
    ],
    advantages: [
      "Skills transfer across an unusually wide range of industries — manufacturing, healthcare, logistics, retail, and more",
      "Very strong, government-tracked job growth — the U.S. Bureau of Labor Statistics projects 12% employment growth from 2025 to 2035, much faster than average",
      "Work directly improves how real systems function, which can mean visible, measurable results",
    ],
    challenges: [
      "The work is less about a single physical product and more about ambiguous, messy real-world systems, which some people find less satisfying than concrete design work",
      "Requires strong statistics and data analysis skills, which can be a heavier math load than some expect",
      "Success often depends on convincing non-engineers to change how they work, which requires real communication and persuasion skills",
    ],
    thingsPeopleDislike: [
      "A lot of time in meetings and stakeholder conversations rather than hands-on technical work",
      "Recommendations can be resisted by people used to doing things a certain way, which can be frustrating",
      "The role can feel less 'engineering' to some people, since the end product is usually a better process rather than a physical object",
    ],
    howCompetitive:
      "The U.S. Bureau of Labor Statistics projects 12% employment growth for industrial engineers from 2025 to 2035 — much faster than average for all occupations — with about 23,100 openings projected per year over that decade, one of the largest annual opening counts among engineering fields, driven by many industries needing this kind of process-improvement work. Because the field applies across so many industries, demand tends to be less tied to any single sector's ups and downs, though it's still worth researching current hiring trends in your specific region and industry.",
    beginnerActivities: [
      "Time a repetitive task a few different ways and compare which is fastest",
      "Map out a process you experience regularly, like a cafeteria line, and identify where the slowdowns happen",
      "Learn a basic flowchart technique and use it to map out and improve a real process",
    ],
    selfReflectionQuestions: [
      "Am I more interested in improving how an existing system works than designing one new physical thing?",
      "Am I comfortable with ambiguous problems that don't have one single correct answer?",
      "Do I enjoy working with people across different roles, including people who aren't engineers?",
      "Am I comfortable with statistics and data analysis being a central part of the work?",
    ],
  },
  {
    slug: "materials-engineering",
    name: "Materials Engineering",
    tagline: "Developing and testing the metals, polymers, ceramics, and composites that every other engineering field builds with.",
    whatItIs:
      "Materials engineering is about understanding and developing the substances everything else is made from — metals, plastics, ceramics, composites, and increasingly engineered materials designed for a specific purpose. Rather than designing a finished product, materials engineers often work one level down, figuring out what a material needs to be made of and how it needs to be processed so that it performs the way a mechanical, aerospace, or biomedical engineer needs it to.",
    whatEngineersWorkOn:
      "Materials engineers develop, process, and test materials used to create a wide range of products. They design procedures for developing new materials, monitor how a material performs over time under stress, heat, or wear, evaluate whether a material meets required quality specifications, and collaborate closely with engineers from other disciplines who need a material with specific properties. A lot of the work is genuinely experimental — testing how a material behaves under conditions it hasn't been tried in before.",
    realWorldExamples: [
      "Lightweight alloys used in aircraft and vehicles",
      "Polymers and composites used in sporting equipment or medical devices",
      "Semiconductor materials used in electronics",
      "Heat-resistant materials used in engines or industrial equipment",
      "Biocompatible materials used in implants",
    ],
    commonMisconceptions: [
      "That materials engineers just pick materials off a shelf for other engineers — a significant part of the job is developing and testing genuinely new materials, not just selecting existing ones.",
      "That it's the same as chemistry — chemistry focuses on the reactions and composition of substances; materials engineering focuses more on how a material's structure affects its real-world performance.",
      "That it's a narrow, niche field — materials engineers work across aerospace, automotive, electronics, medical devices, energy, and more.",
    ],
    mythsAndRealities: [
      { myth: "Materials engineers just pick materials off a shelf for other engineers.", reality: "A significant part of the job is developing and testing genuinely new materials, not just selecting existing ones." },
      { myth: "It's the same as chemistry.", reality: "Chemistry focuses on the reactions and composition of substances; materials engineering focuses more on how a material's structure affects its real-world performance." },
      { myth: "It's a narrow, niche field.", reality: "Materials engineers work across aerospace, automotive, electronics, medical devices, energy, and more." },
    ],
    usefulSubjects: ["Chemistry", "Physics", "Calculus", "Technical drawing or CAD, if available"],
    helpfulSkills: [
      "A strong foundation in chemistry and physics, since material properties come from what's happening at a molecular or structural level",
      "Patience for experimentation, since developing or testing a new material often takes many rounds of trial and error",
      "Attention to detail, since small differences in composition or processing can significantly change how a material performs",
      "Collaboration skills, since materials engineers usually work in support of another engineering discipline's specific needs",
    ],
    typicalProjects: [
      "Testing how a material performs under stress, heat, or repeated wear",
      "Developing a new material or alloy with specific target properties",
      "Analyzing why a material failed or degraded faster than expected",
      "Evaluating whether a material meets a project's quality and safety specifications",
    ],
    typicalWorkday:
      "A mix of lab-based testing and experimentation, and collaboration with engineers from other disciplines who need a material with specific properties for their own project. Data analysis and documentation are a significant part of the job, since material performance has to be precisely characterized and recorded.",
    dayInLife: {
      blocks: [
        { time: "9:00 AM", label: "Lab testing", detail: "Testing how a material sample performs under stress or heat." },
        { time: "10:30 AM", label: "Data analysis", detail: "Analyzing yesterday's test results to see how the material's performance compares to what was expected." },
        { time: "12:30 PM", label: "Cross-discipline meeting", detail: "Talking with a mechanical or aerospace engineer about a material's required properties for their project." },
        { time: "2:00 PM", label: "Failure analysis", detail: "Investigating why a material sample failed or degraded faster than expected." },
        { time: "3:30 PM", label: "Documentation", detail: "Recording precise data on a material's composition and performance for the project record." },
        { time: "4:30 PM", label: "Wrap-up", detail: "Planning tomorrow's round of testing based on today's results." },
      ],
      reflectionQuestion: "Would you find it satisfying to spend weeks or months testing and refining a single material, rather than working toward one finished, visible product?",
    },
    // mathIntensity: usefulSubjects leads with "Chemistry," "Physics," and "Calculus."
    // handsOnWork: typicalWorkday leads with "lab-based testing and experimentation" as the primary framing, similar to biomedical engineering.
    // regulatoryBurden: quality specifications are mentioned, but no regulatory or compliance-review language appears the way it does in civil, biomedical, or aerospace.
    // marketUncertainty: howCompetitive cites real, strong BLS growth, but a modest annual opening count similar in scale to chemical and aerospace engineering.
    // coding: no programming language appears anywhere in this field's text.
    // outdoorWork: work is described as lab-based — no outdoor component appears.
    // biologyContent: "biocompatible materials" appears once in real-world examples, but biology isn't listed among useful subjects or central skills.
    // creativeFreedom: typicalProjects includes "developing a new material... with specific target properties" — genuine open-ended experimentation without the regulatory constraint language seen in civil or aerospace.
    // teamwork: helpfulSkills lists collaboration as one of several skills, not the dominant, repeated theme seen in fields rated High.
    // seeingWorkRealLife: whatItIs explicitly frames the work as "one level down" from a finished product — materials usually end up inside something another engineer designed, not a visible product of the materials engineer's own.
    stats: {
      mathIntensity: "High",
      handsOnWork: "High",
      regulatoryBurden: "Low",
      marketUncertainty: "Medium",
      coding: "Low",
      outdoorWork: "Low",
      biologyContent: "Low",
      creativeFreedom: "Medium",
      teamwork: "Medium",
      seeingWorkRealLife: "Low",
    },
    salary: {
      medianAnnual: "$112,860",
      period: "May 2025",
      region: "United States (national median)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/materials-engineers.htm",
      note: "This is a U.S. national median across all experience levels and specializations — not a starting salary, and not adjusted for your region.",
      verifiedDate: "September 2026",
    },
    nextSteps: {
      "10-12": {
        project: "Test how different materials, like different types of tape, string, or plastic, hold up to being stretched or bent, and compare the results.",
        tool: "No special tools needed yet — just household materials and simple comparison tests.",
        activity: "Look for a STEM or science club at school, or a materials-focused exhibit at a science museum.",
        relatedField: "mechanical-engineering",
      },
      "13-15": {
        project: "Research how a specific advanced material, like carbon fiber or a memory alloy, is used and what makes it special.",
        tool: "No special tools needed yet — reliable science sources like library books or trusted science sites.",
        activity: "Look into a Science Olympiad team, which sometimes has materials-science-related events.",
        relatedField: "mechanical-engineering",
      },
      "16-18": {
        project: "Try a simple, safe crystal-growing or polymer experiment and document how changing conditions, like temperature or time, affects the result.",
        tool: "A basic crystal-growing or polymer science kit, widely available for educational use.",
        activity: "Look for a pre-college materials science or engineering program, or a summer research program through a university.",
        relatedField: "mechanical-engineering",
      },
    },
    industries: ["Aerospace", "Automotive", "Electronics and semiconductors", "Medical devices", "Energy", "Manufacturing"],
    relatedMajors: ["Materials Science and Engineering", "Metallurgical Engineering", "Chemical Engineering (some overlap)"],
    careerPaths: [
      { title: "Metallurgical Engineer", description: "Focuses specifically on the properties and processing of metals and alloys." },
      { title: "Polymer Engineer", description: "Develops and tests plastics and other polymer-based materials." },
      { title: "Failure Analysis Engineer", description: "Investigates why a material or component failed, to help prevent it from happening again." },
      { title: "Research and Development Engineer", description: "Works on developing entirely new materials with specific target properties." },
    ],
    advantages: [
      "Work sits at the foundation of nearly every other engineering field, since every physical product is made of some material",
      "Strong, government-tracked job growth — the U.S. Bureau of Labor Statistics projects 8% employment growth from 2025 to 2035, much faster than average",
      "Deeply experimental and research-oriented, which can be a good fit for people who enjoy genuine scientific investigation",
    ],
    challenges: [
      "Heavy chemistry and physics coursework, with a strong emphasis on molecular and structural-level thinking",
      "Development and testing cycles can be slow, since materials often need extensive testing before they're trusted in a real product",
      "The work can feel one step removed from a finished, visible product, since materials usually end up inside something another engineer designed",
    ],
    thingsPeopleDislike: [
      "Projects can take a long time to go from early testing to real-world use",
      "A lot of precise documentation and data recording is required",
      "Some roles are less visible or well-known than other engineering disciplines, which can mean less public recognition for the work",
    ],
    howCompetitive:
      "The U.S. Bureau of Labor Statistics projects 8% employment growth for materials engineers from 2025 to 2035 — much faster than average for all occupations — with about 1,300 openings projected per year over that decade, driven by demand for new materials and manufacturing processes. That's a smaller number of annual openings than some other engineering fields, since materials engineering is a comparatively smaller, more specialized field. Research the current market in your specific country and industry before making decisions.",
    beginnerActivities: [
      "Test how different household materials hold up to being stretched, bent, or compared side by side",
      "Research how a specific advanced material, like carbon fiber, is used and what makes it special",
      "Try a simple, safe crystal-growing or polymer science kit",
    ],
    selfReflectionQuestions: [
      "Would I enjoy working on a material that ends up inside someone else's finished product, rather than a finished product of my own?",
      "Am I comfortable with heavy chemistry and physics coursework?",
      "Do I have patience for experimentation that can take many rounds of trial and error?",
      "Am I genuinely interested in materials specifically, or mainly in the products they end up being used in?",
    ],
  },
  {
    slug: "robotics-engineering",
    name: "Robotics & Mechatronics Engineering",
    tagline: "Combining mechanical, electrical, and software engineering to design machines that sense, move, and act on their own.",
    whatItIs:
      "Robotics and mechatronics engineering combines mechanical, electrical, and software engineering to design machines that can sense their environment, move, and act — from industrial robotic arms to autonomous vehicles to consumer robots. It's inherently interdisciplinary: a robot needs a physical structure (mechanical), sensors and actuators (electrical), and code to actually control its behavior (software), so the field doesn't fit neatly into any single traditional engineering category.",
    whatEngineersWorkOn:
      "Robotics engineers design the physical structure and mechanisms of a robot, select and integrate sensors and actuators, write control software that tells the robot how to respond to its environment, and test the whole system together to make sure the mechanical, electrical, and software parts actually work as one system. A lot of the job is troubleshooting problems at the boundary between disciplines — figuring out whether an issue is mechanical, electrical, or in the code.",
    realWorldExamples: [
      "Industrial robotic arms used in manufacturing",
      "Autonomous vehicles and drones",
      "Warehouse and logistics robots",
      "Surgical and medical robots",
      "Consumer robots, like robotic vacuum cleaners",
    ],
    commonMisconceptions: [
      "That it's its own single, standardized major everywhere — some universities offer a dedicated robotics or mechatronics degree, while others expect you to specialize through mechanical, electrical, or computer engineering with a robotics focus.",
      "That it's mostly about building humanoid robots — most real-world robotics work is industrial or task-specific, like arms, drones, or vehicles, not human-shaped machines.",
      "That you need to be equally expert in mechanical, electrical, and software engineering from day one — most people specialize in one area and build working knowledge of the others over time.",
    ],
    mythsAndRealities: [
      { myth: "It's its own single, standardized major everywhere.", reality: "Some universities offer a dedicated robotics or mechatronics degree, while others expect you to specialize through mechanical, electrical, or computer engineering with a robotics focus." },
      { myth: "It's mostly about building humanoid robots.", reality: "Most real-world robotics work is industrial or task-specific, like arms, drones, or vehicles, not human-shaped machines." },
      { myth: "You need to be equally expert in mechanical, electrical, and software engineering from day one.", reality: "Most people specialize in one area and build working knowledge of the others over time." },
    ],
    usefulSubjects: ["Physics (especially mechanics and electricity)", "Calculus", "Any intro to programming, if available", "Technical drawing or CAD, if available"],
    helpfulSkills: [
      "Comfort working across disciplines, since a robotics problem could be mechanical, electrical, or software in nature",
      "Systems thinking — understanding how physical structure, sensors, and code all affect each other",
      "Patience for integration testing, since getting all three disciplines to work together is often harder than getting any one of them to work alone",
      "Basic programming, since most robotics work involves writing control software at some level",
    ],
    typicalProjects: [
      "Designing the physical structure and joints of a robotic arm",
      "Writing control software that lets a robot respond to sensor input",
      "Integrating a new sensor or actuator into an existing robotic system",
      "Debugging why a robot isn't behaving as expected — and figuring out which discipline the problem is actually in",
    ],
    typicalWorkday:
      "A mix of mechanical design, electrical and sensor work, and writing control software, plus significant time testing the integrated system as a whole. Because robotics problems can originate in any of the three underlying disciplines, a lot of the job is genuinely cross-disciplinary troubleshooting.",
    dayInLife: {
      blocks: [
        { time: "9:00 AM", label: "Mechanical design", detail: "Working on the physical structure or a joint mechanism for a robotic system." },
        { time: "10:30 AM", label: "Sensor integration", detail: "Wiring up and testing a new sensor on the robot." },
        { time: "12:30 PM", label: "Control software", detail: "Writing code that determines how the robot responds to sensor input." },
        { time: "2:00 PM", label: "Integration testing", detail: "Running the full system together and seeing where it breaks down." },
        { time: "3:00 PM", label: "Cross-disciplinary debugging", detail: "The robot isn't behaving as expected, and it's unclear whether the cause is mechanical, electrical, or in the code." },
        { time: "4:30 PM", label: "Documentation", detail: "Recording today's changes and open issues for tomorrow." },
      ],
      reflectionQuestion: "Would you enjoy a job where you constantly have to figure out whether a problem is mechanical, electrical, or a software bug, rather than staying in just one lane?",
    },
    // mathIntensity: usefulSubjects leads with physics and calculus, matching mechanical and electrical engineering's framing.
    // handsOnWork: typicalWorkday spans mechanical design, sensor wiring, and integration testing — hands-on across all three underlying disciplines.
    // regulatoryBurden: no regulatory or compliance language appears anywhere in this field's text.
    // marketUncertainty: howCompetitive explicitly notes there's no dedicated government growth projection for this specialization, which is itself a real source of uncertainty.
    // coding: helpfulSkills calls for "basic programming... at some level" — real, but one of three disciplines rather than the dominant focus the way it is for software engineering.
    // outdoorWork: no outdoor or field component appears anywhere in this field's text.
    // biologyContent: no biology or life-science content appears anywhere in this field's text.
    // creativeFreedom: whatItIs and typicalProjects describe genuine systems-design work across three disciplines, without the regulatory-constraint language seen in civil or aerospace.
    // teamwork: helpfulSkills emphasizes working across disciplines rather than explicitly across many people or stakeholders, so rated below fields with more repeated collaboration language.
    // seeingWorkRealLife: typicalProjects and dayInLife center on a physical robot that visibly moves and acts, similar to mechanical engineering's "see and touch what you designed."
    stats: {
      mathIntensity: "High",
      handsOnWork: "High",
      regulatoryBurden: "Low",
      marketUncertainty: "Medium",
      coding: "Medium",
      outdoorWork: "Low",
      biologyContent: "Low",
      creativeFreedom: "Medium",
      teamwork: "Medium",
      seeingWorkRealLife: "High",
    },
    salary: {
      medianAnnual: "$122,930",
      period: "May 2025",
      region: "United States (national median)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/about/data-for-occupations-not-covered-in-detail.htm",
      note: "Robotics and mechatronics engineers aren't tracked as their own detailed BLS category — this figure is from the broader 'Engineers, All Other' group, which BLS explicitly notes includes robotics and mechatronics engineers. Treat it as a rough estimate rather than a precise figure for this specific specialization.",
      verifiedDate: "September 2026",
    },
    nextSteps: {
      "10-12": {
        project: "Build a simple machine that moves using a basic robotics kit or even household materials, like a rubber-band-powered car.",
        tool: "A beginner robotics kit designed for this age group, or just household materials to start.",
        activity: "Look for a LEGO robotics or FIRST LEGO League team at school, if one's available.",
        relatedField: "mechanical-engineering",
      },
      "13-15": {
        project: "Try a beginner robotics kit that combines a microcontroller with motors and sensors, and program a simple behavior.",
        tool: "A beginner robotics kit built around Arduino or a similar microcontroller.",
        activity: "Look into a FIRST Tech Challenge or VEX Robotics team at your school, if one exists.",
        relatedField: "electrical-engineering",
      },
      "16-18": {
        project: "Build a more complete robotics project that combines a chassis, sensors, and custom code, like a line-following or obstacle-avoiding robot.",
        tool: "A Raspberry Pi or Arduino-based robotics platform, both widely used and well-documented.",
        activity: "Look for a FIRST Robotics Competition team, a pre-college robotics or mechatronics program, or a summer engineering camp.",
        relatedField: "software-engineering",
      },
    },
    industries: ["Manufacturing and automation", "Automotive", "Consumer robotics", "Aerospace and defense", "Healthcare and medical devices", "Logistics and warehousing"],
    relatedMajors: ["Robotics Engineering", "Mechatronics Engineering", "Mechanical Engineering (with a robotics focus)", "Electrical or Computer Engineering (with a robotics focus)"],
    careerPaths: [
      { title: "Robotics Design Engineer", description: "Designs the physical structure and mechanisms of a robotic system." },
      { title: "Controls Engineer", description: "Designs and writes the software and control systems that determine how a robot behaves." },
      { title: "Automation Engineer", description: "Designs robotic systems specifically for manufacturing and industrial automation." },
      { title: "Autonomous Systems Engineer", description: "Works on robots or vehicles that operate with limited or no direct human control, like drones or self-driving systems." },
    ],
    advantages: [
      "Genuinely interdisciplinary, which can be a good fit if you don't want to choose between mechanical, electrical, and software engineering",
      "Growing field tied to automation, manufacturing, and autonomous systems across many industries",
      "Direct, visible results — you can watch the thing you built actually move and act",
    ],
    challenges: [
      "Requires working knowledge across three traditionally separate engineering disciplines, which can mean a heavier and broader course load",
      "Integration problems — getting mechanical, electrical, and software parts to work together — can be harder to debug than a single-discipline problem",
      "Not always offered as its own dedicated degree, so figuring out the right academic path can take extra research depending on where you study",
    ],
    thingsPeopleDislike: [
      "Debugging can be frustrating when it's unclear which discipline a problem is actually coming from",
      "The lack of a single standardized degree path can make it harder to know exactly which courses to take",
      "Because it's not tracked as its own distinct occupation by government labor statistics, it can be harder to find precise, field-specific salary and job-market data",
    ],
    howCompetitive:
      "Robotics and mechatronics engineers aren't tracked as a distinct occupation by the U.S. Bureau of Labor Statistics — they fall under the broader 'Engineers, All Other' category, which reported a median wage of $122,930 in May 2025 but doesn't provide a separate growth projection specific to robotics. The field is broadly tied to growth in automation, manufacturing technology, and autonomous systems, but because there's no dedicated government tracking, it's especially worth researching current job postings and industry reports in your specific region rather than relying on a single statistic.",
    beginnerActivities: [
      "Build a simple machine that moves using a basic robotics kit or household materials",
      "Try a beginner robotics kit that combines a microcontroller, motors, and sensors",
      "Program a simple robot behavior, like following a line or avoiding an obstacle",
    ],
    selfReflectionQuestions: [
      "Am I comfortable working across mechanical, electrical, and software disciplines, rather than specializing narrowly in just one?",
      "Do I enjoy troubleshooting problems where the cause isn't obvious ahead of time?",
      "Am I okay with a less standardized academic path, where I might need to piece together the right courses myself?",
      "Am I genuinely interested in robotics specifically, or mainly drawn to one of its underlying disciplines, like mechanical design or programming?",
    ],
  },
  {
    slug: "nuclear-engineering",
    name: "Nuclear Engineering",
    tagline: "Designing and monitoring the systems that generate and safely manage nuclear energy.",
    whatItIs:
      "Nuclear engineering focuses on the safe design, operation, and monitoring of systems that use nuclear energy — from power plants to medical and research applications. It combines physics, safety engineering, and strict regulatory compliance, since the consequences of an error are unusually serious.",
    whatEngineersWorkOn:
      "Nuclear engineers design the systems and safety procedures for producing and using nuclear energy, monitor reactor operations to make sure everything runs within strict safety limits, write and review procedures for handling and disposing of radioactive materials, and investigate ways to make nuclear processes safer or more efficient. A lot of the job involves working within a dense web of federal regulations, since nuclear safety oversight is some of the strictest in any engineering field.",
    realWorldExamples: [
      "Nuclear power plant design and safety systems",
      "Nuclear medicine and radiation therapy equipment",
      "Nuclear waste storage and disposal systems",
      "Naval nuclear propulsion systems",
    ],
    commonMisconceptions: [
      "That nuclear engineers work directly with weapons — most nuclear engineers work in civilian power generation, medicine, or research, not defense.",
      "That the job is mostly about physics theory — most of the actual work is applied: monitoring systems, writing safety procedures, and making sure real equipment operates within strict limits.",
      "That it's a shrinking field because few new plants are being built — a lot of the work is maintaining, monitoring, and eventually decommissioning the plants that already exist, plus growing applications in medicine and research.",
    ],
    mythsAndRealities: [
      { myth: "Nuclear engineers work directly with weapons.", reality: "Most nuclear engineers work in civilian power generation, medicine, or research, not defense." },
      { myth: "The job is mostly about physics theory.", reality: "Most of the actual work is applied: monitoring systems, writing safety procedures, and making sure real equipment operates within strict limits." },
      { myth: "It's a shrinking field because few new plants are being built.", reality: "A lot of the work is maintaining, monitoring, and eventually decommissioning the plants that already exist, plus growing applications in medicine and research." },
    ],
    usefulSubjects: ["Physics (especially nuclear and modern physics, if offered)", "Calculus", "Chemistry"],
    helpfulSkills: [
      "Comfort with strict rules and procedures, since nuclear work is governed by some of the most detailed safety regulations in any engineering field",
      "Careful, methodical attention to detail — a small oversight in this field can have serious consequences",
      "Strong math and physics fundamentals, since reactor behavior is grounded in nuclear physics",
      "Clear written communication, since safety procedures and regulatory documentation have to be exact and unambiguous",
    ],
    typicalProjects: [
      "Monitoring reactor performance data to confirm it's operating within safety limits",
      "Writing or reviewing a procedure for safely handling or storing radioactive material",
      "Investigating a way to make an existing nuclear process more efficient without compromising safety",
      "Working with a team to prepare for a regulatory inspection or audit",
    ],
    typicalWorkday:
      "A mix of monitoring plant or system data, reviewing and writing safety documentation, and coordinating with a team on regulatory compliance. Time is split between an office or control room and, depending on the role, in-person time at the physical facility.",
    dayInLife: {
      blocks: [
        { time: "8:00 AM", label: "Shift briefing", detail: "Reviewing overnight reactor performance data and any notes from the previous shift." },
        { time: "9:30 AM", label: "Systems check", detail: "Monitoring live reactor data to confirm all systems are within normal operating limits." },
        { time: "11:00 AM", label: "Safety documentation", detail: "Reviewing a procedure for handling radioactive material to make sure it meets current regulations." },
        { time: "1:00 PM", label: "Regulatory coordination", detail: "Meeting with a compliance team to prepare documentation for an upcoming inspection." },
        { time: "2:30 PM", label: "Problem-solving", detail: "Investigating a minor irregularity in a system reading to rule out any underlying issue." },
        { time: "4:00 PM", label: "Wrap-up", detail: "Logging today's findings and briefing the incoming shift." },
      ],
      reflectionQuestion: "Would you be comfortable with a job where following exact procedures matters as much as technical skill?",
    },
    // mathIntensity: usefulSubjects leads with nuclear/modern physics and calculus.
    // handsOnWork: typicalWorkday is monitoring- and documentation-centered, with some in-person facility time — less physical building than mechanical or aerospace.
    // regulatoryBurden: whatItIs and whatEngineersWorkOn both explicitly call this "some of the strictest" regulation of any engineering field.
    // marketUncertainty: howCompetitive cites essentially flat (0%) BLS growth — a real, if unusual, kind of uncertainty rather than the volatility other fields show.
    // coding: no programming language appears anywhere in this field's text.
    // outdoorWork: work is framed as office/control-room based with facility time, not outdoor fieldwork.
    // biologyContent: no biology or life-science content appears anywhere in this field's text.
    // creativeFreedom: heavy regulatory and procedural framing throughout constrains open-ended design, similar to civil or chemical engineering.
    // teamwork: dayInLife includes shift briefings and regulatory coordination, but less repeated multi-stakeholder emphasis than fields rated High.
    // seeingWorkRealLife: dayInLife centers on monitoring live reactor data and real facility operations — tangible, though mediated through instrumentation.
    stats: {
      mathIntensity: "High",
      handsOnWork: "Medium",
      regulatoryBurden: "High",
      marketUncertainty: "Medium",
      coding: "Low",
      outdoorWork: "Low",
      biologyContent: "Low",
      creativeFreedom: "Low",
      teamwork: "Medium",
      seeingWorkRealLife: "Medium",
    },
    salary: {
      medianAnnual: "$133,970",
      period: "May 2025",
      region: "United States (national median)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/nuclear-engineers.htm",
      note: "This is a U.S. national median across all experience levels — not a starting salary, and not adjusted for your region.",
      verifiedDate: "September 2026",
    },
    nextSteps: {
      "10-12": {
        project: "Research how a nuclear power plant generates electricity and sketch a simple diagram of the process.",
        tool: "No special tools needed yet — reliable science sources like library books or trusted science sites.",
        activity: "Look for a STEM or physics club at school, or a museum exhibit on energy or nuclear science.",
        relatedField: "mechanical-engineering",
      },
      "13-15": {
        project: "Research how nuclear medicine is used to diagnose or treat illness, and summarize how it's different from a nuclear power plant.",
        tool: "No special tools needed yet — reliable science sources.",
        activity: "Look into a Science Olympiad team, which sometimes covers energy or nuclear-related events.",
        relatedField: "mechanical-engineering",
      },
      "16-18": {
        project: "Research the safety systems used in modern nuclear reactor designs and what changed after a historical incident like Three Mile Island or Fukushima.",
        tool: "No special tools needed yet — reliable science and engineering sources.",
        activity: "Look for a pre-college engineering program or a summer program with an energy or nuclear focus, if available.",
        relatedField: "mechanical-engineering",
      },
    },
    industries: ["Nuclear power generation", "Nuclear medicine and healthcare", "National laboratories and research", "Naval and defense", "Nuclear waste management"],
    relatedMajors: ["Nuclear Engineering", "Mechanical Engineering (some overlap)"],
    careerPaths: [
      { title: "Reactor Engineer", description: "Monitors and optimizes the operation of a nuclear reactor to keep it running safely and efficiently." },
      { title: "Nuclear Safety Engineer", description: "Focuses specifically on the safety systems and procedures that prevent and respond to potential incidents." },
      { title: "Radiation Protection Engineer", description: "Designs and monitors systems that protect workers and the public from radiation exposure." },
      { title: "Nuclear Fuel Engineer", description: "Works on the design, performance, and management of the fuel used in a nuclear reactor." },
    ],
    advantages: [
      "Strong median pay relative to many other engineering fields",
      "Highly specialized expertise that's in consistent demand wherever nuclear facilities operate",
      "Work that has a direct, meaningful connection to a country's energy infrastructure or medical care",
    ],
    challenges: [
      "Employment growth is essentially flat — the U.S. Bureau of Labor Statistics projects almost no change in the number of nuclear engineering jobs through 2035",
      "Heavy regulatory and procedural requirements shape almost every part of the work, leaving less room for open-ended design",
      "Public perception of nuclear energy can be a source of pressure or scrutiny, regardless of an individual engineer's actual work",
    ],
    thingsPeopleDislike: [
      "A significant amount of documentation and procedural review, rather than hands-on design work",
      "A limited number of new nuclear facilities being built in some countries, which can narrow where the work is available",
      "Working around radioactive materials requires constant attention to safety protocol, which some find stressful over time",
    ],
    howCompetitive:
      "The U.S. Bureau of Labor Statistics projects essentially no change (0%) in employment for nuclear engineers from 2025 to 2035 — among the flattest projections of any engineering field on this site — with about 800 openings projected per year over that decade, mostly from workers retiring or changing careers rather than from new positions being created. That doesn't mean the field is shrinking, since existing nuclear plants and facilities need ongoing staffing, but it does mean the number of nuclear engineering positions isn't expected to grow. Demand can also shift with a country's energy policy decisions — research the current market and any planned nuclear projects in your specific region before making decisions.",
    beginnerActivities: [
      "Research how a nuclear power plant generates electricity and sketch out the process",
      "Research how nuclear medicine is used in healthcare and how it differs from a power plant",
      "Research the safety systems used in modern reactor designs",
    ],
    selfReflectionQuestions: [
      "Am I comfortable with a field where following exact procedures matters as much as raw technical skill?",
      "Does knowing the number of nuclear engineering jobs is expected to stay flat, not grow, change how I feel about the field?",
      "Am I interested in nuclear energy specifically, or more broadly in energy systems in general?",
    ],
  },
  {
    slug: "petroleum-engineering",
    name: "Petroleum Engineering",
    tagline: "Designing how oil and natural gas are extracted from the ground safely and efficiently.",
    whatItIs:
      "Petroleum engineering focuses on how to extract oil and natural gas from the ground safely and efficiently — designing extraction methods, drilling plans, and production systems. It's a specialized field tied closely to the energy industry's own economic cycles.",
    whatEngineersWorkOn:
      "Petroleum engineers design and evaluate methods for extracting oil and natural gas from underground reservoirs, analyze geological data to estimate how much a site can produce, design drilling plans and production equipment, and work to improve extraction efficiency while managing safety and environmental risk. A lot of the work involves close collaboration with geologists and geoscientists, since a reservoir's underlying geology drives almost every engineering decision.",
    realWorldExamples: [
      "Oil and gas well design and drilling plans",
      "Extraction equipment and production systems",
      "Reservoir analysis to estimate how much oil or gas a site can produce",
    ],
    commonMisconceptions: [
      "That petroleum engineers spend their careers physically working on drilling rigs — many roles are based in an office analyzing data and planning, with periodic site visits rather than full-time fieldwork.",
      "That it's the same job as a geologist — geologists study and interpret the rock and fluid formations underground; petroleum engineers use that information to design how to safely and efficiently extract resources from them.",
      "That the field is disappearing entirely — global demand growth for oil and gas has slowed, but the field isn't vanishing, and pay remains among the highest of any engineering discipline.",
    ],
    mythsAndRealities: [
      { myth: "Petroleum engineers spend their careers physically working on drilling rigs.", reality: "Many roles are based in an office analyzing data and planning, with periodic site visits rather than full-time fieldwork." },
      { myth: "It's the same job as a geologist.", reality: "Geologists study and interpret the rock and fluid formations underground; petroleum engineers use that information to design how to safely and efficiently extract resources from them." },
      { myth: "The field is disappearing entirely.", reality: "Global demand growth for oil and gas has slowed, but the field isn't vanishing, and pay remains among the highest of any engineering discipline." },
    ],
    usefulSubjects: ["Physics", "Chemistry", "Calculus", "Earth science or geology, if available"],
    helpfulSkills: [
      "Comfort interpreting geological and reservoir data to make engineering decisions",
      "Strong math and physics fundamentals for modeling fluid flow and reservoir behavior",
      "Risk assessment — weighing safety, cost, and environmental factors when planning extraction",
      "Willingness to travel to or work at remote field sites, at least periodically",
    ],
    typicalProjects: [
      "Analyzing reservoir data to estimate how much oil or gas a site can produce",
      "Designing a drilling plan for a new well",
      "Evaluating ways to improve extraction efficiency from an existing well",
      "Assessing the safety and environmental risk of a proposed extraction method",
    ],
    typicalWorkday:
      "A mix of office-based data analysis and modeling, and — depending on the role — time at a field site reviewing operations in person. Collaboration with geologists and other engineers is a constant part of the job, since reservoir decisions require input from multiple disciplines.",
    dayInLife: {
      blocks: [
        { time: "8:00 AM", label: "Data review", detail: "Reviewing overnight production data from an active well." },
        { time: "9:30 AM", label: "Reservoir analysis", detail: "Analyzing geological data with a geologist to estimate a new site's production potential." },
        { time: "11:30 AM", label: "Drilling plan", detail: "Working on a drilling plan for a proposed well, factoring in depth, equipment, and safety requirements." },
        { time: "1:30 PM", label: "Team coordination", detail: "Meeting with field operations staff to review how an active extraction site is performing." },
        { time: "3:00 PM", label: "Risk assessment", detail: "Evaluating the safety and environmental risk of a proposed change to an extraction method." },
        { time: "4:30 PM", label: "Wrap-up", detail: "Documenting today's analysis and updating the project plan." },
      ],
      reflectionQuestion: "Would you be comfortable in a field where pay is strong but tied closely to the ups and downs of global energy markets?",
    },
    // mathIntensity: usefulSubjects leads with physics, chemistry, and calculus for reservoir and fluid modeling.
    // handsOnWork: typicalWorkday frames it as office analysis plus periodic field site time, not full-time hands-on work.
    // regulatoryBurden: safety and environmental risk assessment appear throughout, but without the "strictest regulation" framing nuclear or aerospace carry.
    // marketUncertainty: whatItIs explicitly says the field is "tied closely to the energy industry's own economic cycles" — the strongest volatility signal of any field on this site.
    // coding: no programming language appears anywhere in this field's text.
    // outdoorWork: dayInLife and typicalWorkday describe periodic field site visits alongside office-based work.
    // biologyContent: no biology or life-science content appears anywhere in this field's text.
    // creativeFreedom: real engineering design and modeling work appears without heavy regulatory-constraint language, similar to electrical or mechanical engineering.
    // teamwork: whatEngineersWorkOn and dayInLife both explicitly emphasize close, constant collaboration with geologists and other engineers.
    // seeingWorkRealLife: work centers on real wells and production data, though often mediated through data analysis rather than direct physical building.
    stats: {
      mathIntensity: "High",
      handsOnWork: "Medium",
      regulatoryBurden: "Medium",
      marketUncertainty: "High",
      coding: "Low",
      outdoorWork: "Medium",
      biologyContent: "Low",
      creativeFreedom: "Medium",
      teamwork: "High",
      seeingWorkRealLife: "Medium",
    },
    salary: {
      medianAnnual: "$144,910",
      period: "May 2025",
      region: "United States (national median)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/petroleum-engineers.htm",
      note: "This is a U.S. national median across all experience levels — not a starting salary, and not adjusted for your region. This field is closely tied to oil and gas industry cycles, which affects both pay and job stability.",
      verifiedDate: "September 2026",
    },
    nextSteps: {
      "10-12": {
        project: "Research how oil and natural gas are formed underground and how engineers find them.",
        tool: "No special tools needed yet — reliable science sources like library books or trusted science sites.",
        activity: "Look for a STEM or earth science club at school.",
        relatedField: "chemical-engineering",
      },
      "13-15": {
        project: "Research how a drilling rig works and sketch the basic steps of drilling a well.",
        tool: "No special tools needed yet — reliable science sources.",
        activity: "Look into a Science Olympiad team, which sometimes covers earth science topics.",
        relatedField: "chemical-engineering",
      },
      "16-18": {
        project: "Research a real oil or gas field and estimate, using public data, how extraction there has changed over time.",
        tool: "Public energy data sources, like a national energy information agency's public database, if available in your country.",
        activity: "Look for a pre-college engineering program with an energy focus, if available.",
        relatedField: "chemical-engineering",
      },
    },
    industries: ["Oil and gas extraction", "Energy consulting", "Offshore drilling", "Reservoir engineering firms", "Government energy agencies"],
    relatedMajors: ["Petroleum Engineering", "Chemical Engineering (some overlap)"],
    careerPaths: [
      { title: "Drilling Engineer", description: "Designs and oversees the plans for safely and efficiently drilling a well." },
      { title: "Reservoir Engineer", description: "Analyzes underground reservoir data to estimate production potential and plan extraction strategy." },
      { title: "Production Engineer", description: "Focuses on optimizing how efficiently an existing well or field produces oil or gas." },
      { title: "Completions Engineer", description: "Designs the final steps that prepare a drilled well for production." },
    ],
    advantages: [
      "Among the highest median salaries of any engineering field on this site",
      "Work directly shapes how a major global energy resource is extracted and used",
      "Strong technical variety — geology, fluid mechanics, and equipment design all come into play",
    ],
    challenges: [
      "Pay and job stability are closely tied to global oil and gas prices, which can shift quickly",
      "Some roles require travel to or extended time at remote field sites",
      "The field faces real long-term questions about the pace of the global transition away from fossil fuels",
    ],
    thingsPeopleDislike: [
      "Job security can feel less predictable than in fields less tied to commodity prices",
      "Remote or physically demanding field site conditions in some roles",
      "Public perception of the oil and gas industry can be a source of added scrutiny",
    ],
    howCompetitive:
      "The U.S. Bureau of Labor Statistics projects 2% employment growth for petroleum engineers from 2025 to 2035 — slower than the average for all occupations — with about 1,000 openings projected per year over that decade, mostly from workers retiring or changing careers. Pay is among the highest of any engineering field, but both hiring and compensation are closely tied to global oil and gas prices, which can shift substantially from year to year. Research current market conditions and hiring trends in your specific region and industry sector before making decisions.",
    beginnerActivities: [
      "Research how oil and natural gas are formed underground and how they're located",
      "Research how a drilling rig works and sketch the basic steps of drilling a well",
      "Look into how a real oil or gas field's production has changed over time using public data",
    ],
    selfReflectionQuestions: [
      "Am I comfortable with a field where pay and job stability are tied closely to global energy prices?",
      "Am I interested in earth science and geology as much as traditional engineering?",
      "Would I be comfortable traveling to or working at a remote field site, at least periodically?",
    ],
  },
];
