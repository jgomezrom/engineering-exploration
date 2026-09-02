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
    workdayTimeline: [
      { label: "At a desk", detail: "Running simulations and reviewing designs" },
      { label: "Meetings", detail: "Writing reports, coordinating with the team" },
      { label: "In the shop", detail: "Testing physical prototypes" },
    ],
    // Ratings are a qualitative read of this field's own text above, not an independent score.
    // mathIntensity: usefulSubjects leads with "Physics (especially mechanics)" and "Calculus".
    // handsOnWork: typicalWorkday explicitly frames it as "less building things by hand all day".
    // regulatoryBurden: thingsPeopleDislike notes compliance work "depending on the industry".
    // marketUncertainty: howCompetitive hedges by country/industry but calls demand "strong and stable".
    stats: { mathIntensity: "High", handsOnWork: "Medium", regulatoryBurden: "Medium", marketUncertainty: "Medium" },
    salary: {
      medianAnnual: "$104,110",
      period: "May 2025",
      region: "United States (national median)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/mechanical-engineers.htm",
      note: "This is a U.S. national median across all experience levels and specializations — not a starting salary, and not adjusted for your region. Actual pay varies a lot by location, industry, employer, and experience.",
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
  workdayTimeline: [
    { label: "Circuit design", detail: "Working in circuit design software" },
    { label: "On the bench", detail: "Using oscilloscopes and multimeters to test" },
    { label: "Debugging", detail: "Figuring out why a circuit isn't behaving as expected" },
  ],
  // mathIntensity: usefulSubjects leads with physics/calculus; helpfulSkills calls for "comfort with abstract math".
  // handsOnWork: typicalWorkday frames it as "a mix" of software, bench testing, and embedded coding.
  // regulatoryBurden: thingsPeopleDislike says compliance is heavy "especially in power or aerospace" — industry-dependent.
  // marketUncertainty: howCompetitive hedges "varies by country and specialization" but calls demand "generally strong".
  stats: { mathIntensity: "High", handsOnWork: "Medium", regulatoryBurden: "Medium", marketUncertainty: "Medium" },
  salary: {
    medianAnnual: "$120,630",
    period: "May 2025",
    region: "United States (national median)",
    sourceName: "U.S. Bureau of Labor Statistics",
    sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/electrical-and-electronics-engineers.htm",
    note: "This is a U.S. national median across all experience levels and specializations — not a starting salary, and not adjusted for your region. The closely related 'electronics engineer' specialization reports a higher median ($130,220) in the same BLS data, so specialization matters here too.",
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
    workdayTimeline: [
      { label: "Office design work", detail: "Running calculations, reviewing drawings" },
      { label: "Site visits", detail: "Checking on construction or inspecting infrastructure" },
      { label: "Public meetings", detail: "Meeting with city officials or community members" },
    ],
    // mathIntensity: usefulSubjects leads with "Physics (especially statics and mechanics)" and calculus.
    // handsOnWork: typicalWorkday frames it as "a mix" of office work and site visits, not majority field work.
    // regulatoryBurden: helpfulSkills centers "designing within legal safety requirements"; thingsPeopleDislike cites heavy permitting.
    // marketUncertainty: howCompetitive calls demand "generally steady" but hedges pay/demand "a lot by region".
    stats: { mathIntensity: "High", handsOnWork: "Medium", regulatoryBurden: "High", marketUncertainty: "Medium" },
    salary: {
      medianAnnual: "$100,840",
      period: "May 2025",
      region: "United States (national median)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/civil-engineers.htm",
      note: "This is a U.S. national median across all experience levels and specializations — not a starting salary, and not adjusted for your region. Public-sector pay in particular can differ meaningfully from private-sector pay within this same field.",
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
    workdayTimeline: [
      { label: "In the lab", detail: "Testing prototypes and running experiments" },
      { label: "Documentation", detail: "Regulatory paperwork and precise records" },
      { label: "Cross-team meetings", detail: "Working with clinicians and regulatory staff" },
    ],
    // mathIntensity: usefulSubjects splits evenly across biology, chemistry, physics, and calculus — not math-first.
    // handsOnWork: typicalWorkday leads with "a lot of lab-based work" as the primary framing.
    // regulatoryBurden: whatEngineersWorkOn calls regulatory approval "a bigger part of the job than in most other engineering fields".
    // marketUncertainty: howCompetitive opens with "the caveats matter more than most" — the most hedged section on the site.
    stats: { mathIntensity: "Medium", handsOnWork: "High", regulatoryBurden: "High", marketUncertainty: "High" },
    salary: {
      medianAnnual: "$109,370",
      period: "May 2025",
      region: "United States (national median)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/architecture-and-engineering/biomedical-engineers.htm",
      note: "This is a U.S. national median across all experience levels and specializations — not a starting salary, and not adjusted for your region. Given the job-market caveats in this field's competitiveness section above, treat this figure as background context, not a guarantee.",
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
    workdayTimeline: [
      { label: "Writing code", detail: "Building and reviewing other people's code" },
      { label: "Team meetings", detail: "Planning or standup meetings" },
      { label: "Problem-solving", detail: "Researching how to solve a specific technical issue" },
    ],
    // mathIntensity: usefulSubjects lists "Algebra and discrete math, if available" — present but hedged, not central.
    // handsOnWork: typicalWorkday opens with "Mostly at a computer" — the lowest physical/lab component of the 5.
    // regulatoryBurden: no regulatory or compliance language appears anywhere in this field's challenges or dislikes.
    // marketUncertainty: howCompetitive says hiring "has shifted meaningfully" and is "considerably more competitive" now.
    stats: { mathIntensity: "Medium", handsOnWork: "Low", regulatoryBurden: "Low", marketUncertainty: "High" },
    salary: {
      medianAnnual: "$135,980",
      period: "May 2025",
      region: "United States (national median)",
      sourceName: "U.S. Bureau of Labor Statistics",
      sourceUrl: "https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm",
      note: "This is a U.S. national median across all experience levels — not a starting salary, and not adjusted for your region. Given this field's own hiring-market caveats above, a high historical median doesn't guarantee current entry-level outcomes.",
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
];
