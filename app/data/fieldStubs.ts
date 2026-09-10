import { FieldStub } from "./types";
import { fields } from "./fields";

// Lighter-weight entries — real, honest, but without the full research depth
// (Day in the Life, comparison stats, next steps) of the fields in fields.ts.
// See the comment on FieldStub in types.ts for why salary is handled the way
// it is here.
export const fieldStubs: FieldStub[] = [
  {
    slug: "architectural-engineering",
    name: "Architectural Engineering",
    tagline: "The structural, mechanical, and electrical systems that make a building actually work.",
    whatItIs:
      "The technical systems inside a building — structural support, heating and cooling, electrical, lighting, acoustics — are architectural engineering's territory, worked out alongside architects, who focus more on a building's form and layout. It's a smaller, specialized field that blends civil, mechanical, and electrical engineering concepts applied specifically to buildings.",
    realWorldExamples: [
      "Structural systems for large or complex buildings",
      "Heating, cooling, and ventilation system design",
      "Building electrical and lighting systems",
      "Acoustic design for spaces like concert halls",
    ],
    relatedMajors: ["Architectural Engineering", "Civil Engineering (some overlap)", "Mechanical Engineering (some overlap)"],
    relatedField: "civil-engineering",
    salaryNote:
      "The U.S. Bureau of Labor Statistics doesn't track architectural engineering as its own separate category — it's usually grouped with civil or mechanical engineering depending on the specific role. See the Civil Engineering page for related, sourced salary data.",
    whatEngineersWorkOn:
      "Architectural engineers make the inside of a building work. That means sizing heating and cooling systems for a space, laying out electrical distribution and lighting, routing ducts and pipes through a structure that is already full of beams, and checking that a room will sound the way it's meant to. The recurring challenge is spatial: several systems all need to occupy the same ceiling void, and someone has to resolve who gets the space.",
    commonMisconceptions: [
      "That it's the same as architecture — architects work on form, layout, and how a building is used; architectural engineers work on the systems that make it habitable.",
      "That the systems are an afterthought bolted on at the end — routing and plant space have to be planned early or they don't fit at all.",
      "That it's a narrow, minor field — heating, cooling, lighting, and power are a large share of both a building's cost and its energy use.",
      "That the work is invisible — occupants notice it immediately when it's done badly, through noise, draughts, glare, or rooms that never reach temperature.",
    ],
    mythsAndRealities: [
      {
        myth: "Architectural engineering is another name for architecture.",
        reality:
          "Architects shape the building. Architectural engineers design the structural, mechanical, electrical, and acoustic systems inside it, usually working alongside them.",
      },
      {
        myth: "Building systems get designed at the end.",
        reality:
          "Plant rooms, risers, and ceiling space have to be reserved early. Leaving it late is how you end up with ducts that have nowhere to run.",
      },
      {
        myth: "Nobody notices this work.",
        reality:
          "Nobody notices it when it's right. A noisy vent, a glaring light, or a room that won't cool gets noticed immediately.",
      },
      {
        myth: "It's mostly about picking equipment from a catalogue.",
        reality:
          "Selection is one step. Sizing loads, coordinating routes through the structure, and meeting energy and code requirements is the actual work.",
      },
    ],
    usefulSubjects: ["Physics", "Calculus", "Technical drawing or CAD, if available", "Chemistry", "Any drafting or design elective your school offers"],
    helpfulSkills: [
      "Strong spatial reasoning, because several systems are competing for the same physical space",
      "Comfort across mechanical and electrical fundamentals, since the role spans both",
      "Coordination with architects and other trades, which is a daily part of the job",
      "Care with codes and energy standards, which set much of what a building is allowed to do",
      "Attention to how people actually experience a space — temperature, light, and noise",
    ],
    typicalProjects: [
      "Sizing heating and cooling for a building based on its use, climate, and construction",
      "Laying out electrical distribution and lighting for a floor plate",
      "Coordinating duct, pipe, and cable routes through a structure so everything fits",
      "Designing acoustics for a space where sound quality matters",
      "Modelling a building's expected energy use and adjusting the design to reduce it",
    ],
    typicalWorkday:
      "Most of the day is design and coordination at a computer, working in a shared building model with architects and other engineers and resolving the clashes it surfaces. Site visits cluster during construction, checking that what's being installed matches the drawings. Deadlines follow the wider project's design stages, so workload arrives in waves rather than evenly.",
    industries: [
      "Building services and multidisciplinary engineering consultancies",
      "Architecture practices with in-house engineering",
      "Construction and design-build contractors",
      "Large property owners and institutional facilities teams",
      "Building systems and equipment manufacturers",
    ],
    advantages: [
      "The results are places people spend their whole lives in",
      "The work spans mechanical, electrical, and structural thinking rather than one narrow area",
      "There's a direct line between design decisions and how much energy a building uses",
      "Buildings are always being built, refitted, and upgraded, so the work isn't tied to one sector",
    ],
    challenges: [
      "You design within constraints set by the architecture, and rarely get to move them",
      "Coordination conflicts are constant, because every system wants the same ceiling space",
      "Budget cuts often land on systems the occupant can't see until they fail",
      "Codes and energy requirements are detailed and change over time",
    ],
    thingsPeopleDislike: [
      "Redesigning routes because a structural or architectural change moved something",
      "Watching quality get cut from systems that occupants will feel for decades",
      "The volume of coordination meetings on a large project",
      "Being blamed for comfort complaints caused by decisions made elsewhere",
    ],
  },
  {
    slug: "automotive-engineering",
    name: "Automotive Engineering",
    tagline: "The design, testing, and manufacturing behind cars and other road vehicles.",
    whatItIs:
      "Automotive engineering is about the design, testing, and manufacturing of cars and other road vehicles — engines, transmissions, safety systems, and, increasingly, electric and autonomous vehicle technology. It's typically pursued as a specialization within mechanical engineering, not its own separate degree.",
    realWorldExamples: [
      "Engine and drivetrain design",
      "Vehicle safety and crash testing",
      "Electric vehicle battery and motor systems",
      "Advanced driver-assistance and autonomous vehicle systems",
    ],
    relatedMajors: ["Mechanical Engineering (with an automotive focus)", "Electrical Engineering (some overlap for EV and autonomous systems)"],
    relatedField: "mechanical-engineering",
    salaryNote:
      "Automotive engineers are typically tracked under the broader 'mechanical engineers' category by the U.S. Bureau of Labor Statistics, not as their own separate occupation. See the Mechanical Engineering page for that sourced salary data.",
    whatEngineersWorkOn:
      "Automotive engineers work on one piece of a vehicle in a lot of depth, rather than on whole cars at once. A given engineer might own the cooling system, the door latch mechanism, the battery pack's thermal management, or the software that decides when the brakes intervene. The work runs from early design and simulation through prototype building, testing, and the long stretch of revision that follows — most of which is spent finding out why a part doesn't behave the way the model said it would, and changing it until it does.",
    commonMisconceptions: [
      "That automotive engineers design what cars look like — exterior and interior styling is mostly done by designers, and engineers work within shapes that have often already been decided.",
      "That the job is mostly about performance and speed — far more engineering effort goes into safety, emissions, cost, durability, and manufacturability than into making a vehicle fast.",
      "That electric vehicles made the field simpler — an EV removes the engine and gearbox but adds high-voltage systems, battery thermal management, and a great deal more software.",
      "That you need to be a car enthusiast to belong here — plenty of people enter through mechanical, electrical, or software engineering without ever having rebuilt an engine.",
    ],
    mythsAndRealities: [
      {
        myth: "Automotive engineers design how cars look.",
        reality:
          "Styling is largely a designer's job. Engineers usually work inside a shape that has already been signed off, and much of the skill is making the mechanism fit the space they're given.",
      },
      {
        myth: "The job is mostly about making cars fast.",
        reality:
          "Performance is one requirement competing with crash safety, emissions, cost, weight, reliability, and whether a factory can actually build the part.",
      },
      {
        myth: "You spend your days around finished cars.",
        reality:
          "Most of the work is on a component, a rig, a simulation, or a spreadsheet of test results. Some engineers go years without a whole vehicle in front of them.",
      },
      {
        myth: "Electric vehicles made automotive engineering easier.",
        reality:
          "It shifted the difficulty rather than removing it. Engines and transmissions gave way to battery chemistry, high-voltage safety, thermal management, and software.",
      },
    ],
    usefulSubjects: ["Physics", "Calculus", "Chemistry", "Computer science or programming, if offered", "Technical drawing or CAD, if available"],
    helpfulSkills: [
      "Comfort with mechanics and thermodynamics, since most vehicle problems come down to forces, heat, or both",
      "Willingness to test and re-test, because a part that works in simulation often behaves differently on a rig",
      "Attention to tolerances and cost, since a design that can't be built repeatably and affordably won't ship",
      "Enough programming to be useful, as more of the vehicle's behaviour is now decided in software",
      "Working inside constraints set by other teams, which is a large part of the job's daily reality",
    ],
    typicalProjects: [
      "Designing and validating a single component — a bracket, a pump, a latch — against strength, weight, and cost targets",
      "Running crash or durability tests and working through what the results say about the design",
      "Developing battery thermal management so a pack stays in its safe temperature range",
      "Tuning control software for braking, traction, or driver-assistance behaviour",
      "Reworking a design so it can actually be assembled on a production line at rate",
    ],
    typicalWorkday:
      "Time is split between design and simulation work at a computer, time in a test lab or on a rig, and a fair number of meetings with the other teams whose parts touch yours. Test cycles set the rhythm: a rig runs, results come back, and the next few days go into understanding them. Deadlines tend to be tied to vehicle programme milestones, which can make some stretches much more intense than others.",
    industries: [
      "Vehicle manufacturers",
      "Component and systems suppliers, which employ a large share of automotive engineers",
      "Electric vehicle and battery companies",
      "Motorsport and specialist vehicle builders",
      "Testing, certification, and regulatory bodies",
    ],
    advantages: [
      "The work ends up in objects people use every day, which makes it unusually easy to point at",
      "Skills transfer well, since the mechanical, thermal, and control fundamentals apply across aerospace, energy, and heavy equipment",
      "Testing is physical and immediate — you find out fairly quickly whether a design holds up",
      "The shift to electric and automated vehicles has opened real work for people who came in through software or electronics",
    ],
    challenges: [
      "Cost pressure is relentless, and a technically better design regularly loses to a cheaper one",
      "Safety and emissions regulation constrains a great deal of what you're allowed to do",
      "Vehicle programmes are long, so it can be years between your work and anything reaching a road",
      "Work is often concentrated in particular regions and companies, which can mean relocating to stay in the field",
    ],
    thingsPeopleDislike: [
      "Owning a small component for a long time, rather than working across a whole vehicle",
      "Watching a design you're proud of get changed to save a small amount per unit",
      "Long validation and paperwork cycles that sit between finishing a design and shipping it",
      "Crunch periods around programme milestones and launch dates",
    ],
  },
  {
    slug: "manufacturing-engineering",
    name: "Manufacturing Engineering",
    tagline: "How a design becomes a real, physical product at scale — the processes and equipment behind it.",
    whatItIs:
      "Manufacturing engineering is about the processes and equipment used to actually produce things at scale — the machinery, tooling, and workflows that turn a design into a physical product, and making all of it run better. It overlaps closely with both mechanical and industrial engineering.",
    realWorldExamples: [
      "Production line and factory equipment design",
      "Tooling and fixture design for manufacturing",
      "Process improvement to reduce waste or defects",
      "Automation of manufacturing steps",
    ],
    relatedMajors: ["Manufacturing Engineering", "Industrial Engineering (some overlap)", "Mechanical Engineering (some overlap)"],
    relatedField: "industrial-engineering",
    salaryNote:
      "Manufacturing engineering isn't tracked as its own separate category by the U.S. Bureau of Labor Statistics either — it's usually grouped with industrial or mechanical engineering. See the Industrial Engineering page for related, sourced salary data.",
    whatEngineersWorkOn:
      "Manufacturing engineers work on the gap between a design that works once and a design that can be built thousands of times, correctly, at a price someone will pay. They specify machines and tooling, lay out the sequence of operations, design the fixtures that hold a part while it's worked on, and chase down why a process that was fine last month is now producing scrap. Much of the job happens on the factory floor rather than at a desk.",
    commonMisconceptions: [
      "That manufacturing engineers design the product — they design the process that makes it, and often have to argue for changes to a design that can't be built economically.",
      "That the field is disappearing to automation — automating a line is itself manufacturing engineering, and someone has to specify, install, and keep it running.",
      "That it's low-skill factory work — the job involves process design, statistics, tooling, and a good deal of troubleshooting under time pressure.",
      "That once a line is running the work is done — processes drift, suppliers change, and tools wear, so a running line needs constant attention.",
    ],
    mythsAndRealities: [
      {
        myth: "Manufacturing engineers design the products being made.",
        reality:
          "They design how it gets made. A frequent part of the job is telling a design team that their part is fine on screen and impossible to produce at rate.",
      },
      {
        myth: "Automation is eliminating the field.",
        reality:
          "Automation moves the work rather than removing it. Choosing, integrating, and maintaining automated equipment is manufacturing engineering.",
      },
      {
        myth: "It's the same as industrial engineering.",
        reality:
          "They overlap. Industrial engineering leans toward systems, flow, and efficiency; manufacturing engineering leans toward the physical processes and machinery.",
      },
      {
        myth: "You sit at a desk.",
        reality:
          "You spend a lot of time on the floor, because the problems show up at the machine and not in the drawing.",
      },
    ],
    usefulSubjects: ["Physics", "Calculus", "Statistics, if offered", "Technical drawing or CAD, if available", "Shop, robotics, or hands-on electives if your school has them"],
    helpfulSkills: [
      "Practical mechanical sense, since much of the job is understanding why a machine or a tool behaves the way it does",
      "Comfort with statistics, because process quality is measured and controlled statistically",
      "Systematic troubleshooting, since a defect usually has several plausible causes that need eliminating in order",
      "Working well with machine operators and technicians, who often know the process better than anyone",
      "Tolerance for interruption, because a line going down outranks whatever you were doing",
    ],
    typicalProjects: [
      "Designing a fixture that holds a part accurately while it's machined or welded",
      "Laying out the sequence of operations for a new product's assembly",
      "Finding the root cause of a defect that started appearing on an existing line",
      "Specifying and commissioning a new machine or robot cell",
      "Reworking a process to cut cycle time, scrap, or changeover time",
    ],
    typicalWorkday:
      "The day moves between the floor and a desk, usually not on your own schedule. Planned work is process design, tooling drawings, and data analysis; unplanned work is whatever has stopped running. Production timing shapes everything — trials and changeovers often happen around shifts, and some commissioning work lands at night or over a shutdown because that's the only time the line is free.",
    industries: [
      "Automotive and aerospace manufacturers",
      "Electronics and consumer goods production",
      "Medical device and pharmaceutical manufacturing",
      "Contract manufacturers and component suppliers",
      "Industrial equipment and automation vendors",
    ],
    advantages: [
      "The feedback is immediate and physical — a change either improves the line or it doesn't",
      "The work is visible, since you can watch the process you designed running",
      "Skills apply across almost any industry that makes a physical object",
      "There's a clear route into operations and plant management for people who want it",
    ],
    challenges: [
      "Production pressure is constant, and a stopped line is expensive by the minute",
      "Cost and cycle time constrain solutions as much as physics does",
      "Shift work, night commissioning, and shutdown work are common",
      "Factory environments can be loud, hot, and physically demanding",
    ],
    thingsPeopleDislike: [
      "Being pulled off planned work to firefight whatever broke this morning",
      "Night and weekend work during installations and shutdowns",
      "Fighting the same recurring defect that has several possible causes",
      "Having to argue for a design change that would make production far easier",
    ],
  },
  {
    slug: "systems-engineering",
    name: "Systems Engineering",
    tagline: "How all the individual pieces of a large, complex project actually work correctly together.",
    whatItIs:
      "Systems engineering zooms out from any single component to look at how a complex system comes together as a whole — making sure every piece of a large project, whether it's an aircraft, a spacecraft, or a major software platform, works correctly with every other piece. It's less about designing a specific part and more about managing how everything connects.",
    realWorldExamples: [
      "Coordinating how subsystems of an aircraft or spacecraft work together",
      "Managing requirements and integration for large defense or infrastructure projects",
      "Overseeing how hardware and software components of a complex product interact",
    ],
    relatedMajors: ["Systems Engineering", "Often pursued as a specialization within Aerospace, Industrial, or Electrical Engineering"],
    relatedField: "aerospace-engineering",
    salaryNote:
      "Like several fields on this page, systems engineering isn't tracked as its own separate category by the U.S. Bureau of Labor Statistics — it's usually pursued as a specialization within another engineering discipline. See the Aerospace or Industrial Engineering pages for related, sourced salary data.",
    whatEngineersWorkOn:
      "Systems engineers own the seams between parts rather than the parts themselves. They turn a vague goal into requirements specific enough to design against, decide how subsystems will talk to each other, and then verify that the assembled whole actually does what was asked. Much of the work is written — requirements, interface definitions, test plans, and the trade studies that record why one option was chosen over another.",
    commonMisconceptions: [
      "That it's project management with an engineering title — the work is technical, and it involves owning interfaces and requirements rather than schedules and budgets.",
      "That you need to know every subsystem in depth — you need enough of each to ask the right questions and spot when two teams have assumed different things.",
      "That it's only for spacecraft and defence — any product where hardware, software, and people have to work together uses the same discipline.",
      "That documentation is bureaucracy — on a large project the written interface is often the only thing keeping two teams from building parts that don't fit.",
    ],
    mythsAndRealities: [
      {
        myth: "Systems engineering is just project management.",
        reality:
          "Managers own schedule and cost. Systems engineers own requirements, interfaces, and whether the integrated result actually meets them.",
      },
      {
        myth: "You have to be an expert in every subsystem.",
        reality:
          "You need enough depth to ask good questions of specialists and to notice when two teams are quietly assuming different things.",
      },
      {
        myth: "It's a senior-only role.",
        reality:
          "Plenty of people start in it, though many arrive after some years in a specific discipline, which is where the useful instinct comes from.",
      },
      {
        myth: "The documents are the point.",
        reality:
          "The documents are how agreements between teams are made explicit. When they're skipped, the disagreements surface later during integration, expensively.",
      },
    ],
    usefulSubjects: ["Physics", "Calculus", "Computer science or programming, if offered", "Statistics, if offered", "Any subject that involves structured writing"],
    helpfulSkills: [
      "Precise writing, because an ambiguous requirement will be built two different ways by two different teams",
      "Comfort holding a whole system in your head without needing to own every detail",
      "Asking uncomfortable questions early, since integration problems are cheapest to find before anything is built",
      "Negotiating between teams whose reasonable local decisions conflict with each other",
      "Patience with process, which on large projects is what keeps a system coherent",
    ],
    typicalProjects: [
      "Turning a customer's goal into a testable set of requirements",
      "Defining the interface between two subsystems being built by different teams",
      "Running a trade study comparing options against cost, mass, risk, and schedule",
      "Planning how the integrated system will be verified and tested",
      "Tracing a failure found during integration back to the requirement or interface that allowed it",
    ],
    typicalWorkday:
      "The day is heavier on meetings and writing than most engineering roles, because the job is largely about keeping separate teams aligned. Reviews are a fixed part of the rhythm, and so is reading other people's designs closely enough to notice what they've assumed. Intensity peaks around integration and test, when everything that was agreed on paper meets everything that was actually built.",
    industries: [
      "Aerospace and spacecraft programmes",
      "Defence and large government projects",
      "Automotive, especially for vehicle-level software and electronics",
      "Medical devices and other regulated products",
      "Large-scale infrastructure and transport systems",
    ],
    advantages: [
      "You see the whole system rather than one component, which suits people who like the big picture",
      "The skills transfer well between industries, since the discipline is largely the same",
      "Work sits close to the decisions that shape a project early on",
      "It's a natural route toward technical leadership without leaving engineering for management",
    ],
    challenges: [
      "A large share of the job is writing and meetings, which is not what many people picture",
      "You are often accountable for outcomes you don't directly control",
      "Programmes are long, and formal process can feel heavy day to day",
      "It's harder to point at one thing and say you built it",
    ],
    thingsPeopleDislike: [
      "The volume of documentation and review that large projects require",
      "Being between teams that disagree, repeatedly",
      "Long gaps between defining something and seeing whether it worked",
      "Getting blamed at integration for gaps that were flagged and not funded",
    ],
  },
  {
    slug: "structural-engineering",
    name: "Structural Engineering",
    tagline: "Whether a building or bridge can safely carry its own weight, plus wind, earthquakes, and everyday use.",
    whatItIs:
      "Structural engineering deals with the load-bearing framework of buildings and bridges — making sure a structure can safely carry its own weight plus forces like wind, earthquakes, and everyday use. It's typically pursued as a specialization within civil engineering, not its own separate degree.",
    realWorldExamples: [
      "Load-bearing framework design for buildings",
      "Bridge structural design and analysis",
      "Earthquake and wind-resistance engineering",
      "Structural inspection of existing buildings and bridges",
    ],
    relatedMajors: ["Civil Engineering (with a structural focus)", "Structural Engineering (offered as its own major at some schools)"],
    relatedField: "civil-engineering",
    salaryNote:
      "Structural engineers are typically tracked under the broader 'civil engineers' category by the U.S. Bureau of Labor Statistics, not as their own separate occupation. See the Civil Engineering page for that sourced salary data.",
    whatEngineersWorkOn:
      "Structural engineers decide whether something will stand up, and keep standing. They size beams, columns, slabs, foundations, and the connections between them, and model the loads a structure has to survive — its own weight, the people and equipment inside it, wind, snow, and, depending on where it's built, earthquakes. A large share of the work is detailing: drawing the joints and fixings precisely enough that a contractor can build them, and revising when the architecture changes around them.",
    commonMisconceptions: [
      "That structural engineers design the whole building — architects generally decide form and layout, and the structural engineer works out the frame that carries it.",
      "That the analysis software does the job now — the software is standard, but someone has to choose the model, decide which load cases matter, and judge whether the output is believable.",
      "That it's all new construction — assessing, strengthening, and repairing structures that already exist is a large part of the field.",
      "That the maths is the hard part — the calculations are learnable, and the harder skill is usually detailing and coordinating with everyone else touching the building.",
    ],
    mythsAndRealities: [
      {
        myth: "Structural engineers design buildings.",
        reality:
          "They design the load-bearing skeleton. The shape, layout, and appearance are usually an architect's decisions, which the structure then has to work within.",
      },
      {
        myth: "The computer does the calculations, so the job is mostly data entry.",
        reality:
          "Software will happily return a confident answer to a badly set-up model. Deciding the model and sanity-checking the result is the engineering.",
      },
      {
        myth: "It's a creative design job.",
        reality:
          "There is judgement in it, but it is judgement inside codes and safety factors. Being deliberately conservative is part of doing it correctly.",
      },
      {
        myth: "You only work on impressive new landmarks.",
        reality:
          "Much of the work is ordinary buildings, and a good deal of it is inspecting or reinforcing structures that are already there.",
      },
    ],
    usefulSubjects: ["Physics", "Calculus", "Technical drawing or CAD, if available", "Statistics, if offered"],
    helpfulSkills: [
      "Spatial reasoning, since you need to picture how forces travel through a structure to the ground",
      "Comfort working inside codes and standards, which set much of what is and isn't allowed",
      "Precision and care, because a missed load case or a badly detailed connection has real consequences",
      "Clear communication with architects and contractors, since your drawings have to be built by someone else",
      "A willingness to be conservative, which in this field is a professional virtue rather than a lack of nerve",
    ],
    typicalProjects: [
      "Sizing the frame of a building against gravity, wind, and seismic loads",
      "Analysing an existing bridge to judge what loads it can still safely carry",
      "Designing a foundation for the ground conditions actually found on site",
      "Detailing connections so the structure can be assembled in the right order",
      "Retrofitting an older building to meet current earthquake or wind requirements",
    ],
    typicalWorkday:
      "Most of the day is analysis and drawing at a computer, punctuated by coordination with architects and other engineers whose systems have to pass through the same structure. Site visits come in bursts, usually at construction milestones or when something on site doesn't match the drawings. Reviewing and checking other people's calculations is a routine part of the work, and so is being checked yourself.",
    industries: [
      "Structural and civil consulting firms",
      "Construction and design-build contractors",
      "Government transport and infrastructure agencies",
      "Building inspection and forensic engineering",
      "Manufacturers of structural products and systems",
    ],
    advantages: [
      "The work is permanent and public — you can stand in front of it years later",
      "The purpose is unusually clear, since the job is keeping structures from hurting anyone",
      "Skills carry across buildings, bridges, and industrial structures without starting over",
      "Professional licensing gives a defined, recognised path for progressing",
    ],
    challenges: [
      "The responsibility is real, and mistakes carry consequences that other engineering fields don't have in the same way",
      "Codes and approvals constrain a lot of what you're permitted to do",
      "Projects run long, and designs get revised repeatedly as the architecture shifts",
      "Getting licensed takes years of supervised experience and exams after the degree",
    ],
    thingsPeopleDislike: [
      "Carrying liability for decisions long after the project has finished",
      "Redoing work because a change upstream moved a wall or a column",
      "How much time goes into checking, documenting, and defending calculations",
      "Being the person who has to say no to an idea that would look better than it performs",
    ],
  },
  {
    slug: "energy-engineering",
    name: "Energy Engineering",
    tagline: "How energy actually gets generated, distributed, and used efficiently — from power grids to renewables.",
    whatItIs:
      "Energy engineering covers how energy gets generated, distributed, and used efficiently — traditional power systems, renewable energy like solar and wind, and energy efficiency in buildings and industry. Rather than being one standardized discipline, it draws on mechanical, electrical, and environmental engineering.",
    realWorldExamples: [
      "Solar and wind power system design",
      "Power grid and energy distribution systems",
      "Building energy efficiency systems",
      "Battery storage and energy management systems",
    ],
    relatedMajors: ["Energy Engineering", "Electrical Engineering (some overlap)", "Mechanical Engineering (some overlap)"],
    relatedField: "electrical-engineering",
    salaryNote:
      "There's no separate U.S. Bureau of Labor Statistics category for energy engineering — it's usually pursued through electrical or mechanical engineering with an energy focus. See the Electrical Engineering page for related, sourced salary data.",
    whatEngineersWorkOn:
      "Energy engineers work on how energy is generated, moved, stored, and wasted. That might mean sizing a solar array and its inverters, modelling how much a building's heating system actually costs to run, working out where a grid can absorb more intermittent generation, or auditing a factory to find the places energy is quietly disappearing. A lot of the job is measurement and modelling before anything gets built, because the argument for a change is usually financial as much as technical.",
    commonMisconceptions: [
      "That it means working on renewables only — a great deal of the field is efficiency, storage, and keeping existing generation and grids running.",
      "That efficiency work is minor compared to building new generation — reducing what a building or plant uses is often the cheapest and fastest change available.",
      "That it's a single defined degree — most people arrive through electrical or mechanical engineering with an energy focus.",
      "That the technology is the hard part — the harder constraints are usually cost, regulation, and the physical grid that already exists.",
    ],
    mythsAndRealities: [
      {
        myth: "Energy engineering means working on solar and wind.",
        reality:
          "Renewables are part of it. So are grids, storage, conventional generation, industrial process heat, and making buildings use less in the first place.",
      },
      {
        myth: "The job is designing new power plants.",
        reality:
          "Far more of the work is analysis — metering, modelling, and demonstrating that a proposed change will actually pay for itself.",
      },
      {
        myth: "Once a technology is cheap enough, it gets deployed.",
        reality:
          "Deployment runs into permitting, grid connection queues, and existing infrastructure that was not designed for it.",
      },
      {
        myth: "It's a separate engineering degree.",
        reality:
          "It is usually a specialisation. Most energy engineers studied electrical or mechanical engineering and moved toward energy through coursework and jobs.",
      },
    ],
    usefulSubjects: ["Physics", "Calculus", "Chemistry", "Statistics, if offered", "Computer science or programming, if offered"],
    helpfulSkills: [
      "Comfort with thermodynamics and electrical fundamentals, since the field sits across both",
      "Being able to work from measured data rather than assumptions, because savings claims have to survive scrutiny",
      "Basic financial literacy, since most proposals are argued on payback period as much as on physics",
      "Patience with regulation and utility processes, which shape what can actually be connected and when",
      "Enough programming or spreadsheet skill to model a system before committing to it",
    ],
    typicalProjects: [
      "Sizing a solar array, its inverters, and its connection for a specific site",
      "Auditing a building or factory and identifying where energy is being wasted",
      "Modelling how a battery system would behave across a day of demand",
      "Assessing whether a section of grid can take more intermittent generation",
      "Comparing heating or cooling options on both energy use and running cost",
    ],
    typicalWorkday:
      "Time splits between modelling and analysis at a computer and site work — walking plant, reading meters, checking what is actually installed against what the drawings claim. Reports and proposals take up a real share of the week, because most of the job involves convincing someone that a change is worth funding. Utility and permitting timelines often set the pace rather than the engineering itself.",
    industries: [
      "Utilities and grid operators",
      "Renewable energy developers",
      "Engineering consultancies doing audits and building services",
      "Manufacturers with large industrial energy loads",
      "Government energy and efficiency programmes",
    ],
    advantages: [
      "The work connects directly to how much energy gets used and wasted, which is easy to care about",
      "It spans electrical and mechanical work, so the day-to-day varies more than in a narrower field",
      "Results are measurable — you can usually show what changed after a project",
      "Demand exists in both new build and in improving what already exists",
    ],
    challenges: [
      "Progress is often limited by cost, permitting, and grid access rather than by engineering",
      "The field is shaped by policy, which can shift with governments and funding cycles",
      "It isn't a single well-defined degree, so the path in is less signposted than most",
      "Savings have to be proven, and measurement is harder and messier than it sounds",
    ],
    thingsPeopleDislike: [
      "Waiting on permits, utility approvals, and grid connection queues",
      "Writing the business case over and over for work that is technically obvious",
      "Watching a sound proposal get rejected purely on payback period",
      "Site work in plant rooms and rooftops that are hot, cramped, or both",
    ],
  },
  {
    slug: "semiconductor-engineering",
    name: "Semiconductor Engineering",
    tagline: "How the chips inside almost every modern electronic device get designed and manufactured.",
    whatItIs:
      "Semiconductor engineering is about designing and manufacturing the chips that power almost every modern electronic device — working at the scale of individual circuits and materials, not a finished product. It combines electrical engineering, materials science, and precision manufacturing.",
    realWorldExamples: [
      "Microchip and processor design",
      "Semiconductor fabrication process engineering",
      "Chip testing and quality verification",
      "Materials engineering for semiconductor manufacturing",
    ],
    relatedMajors: ["Electrical Engineering (with a semiconductor focus)", "Materials Science and Engineering (some overlap)", "Computer Engineering (some overlap)"],
    relatedField: "electrical-engineering",
    salaryNote:
      "No separate U.S. Bureau of Labor Statistics category exists for semiconductor engineering — it's usually pursued through electrical, computer, or materials engineering. See the Electrical Engineering page for related, sourced salary data.",
    whatEngineersWorkOn:
      "Semiconductor engineers work at a scale where the material itself is the design. Some work on the circuit — laying out transistors, checking timing, and simulating a block long before any silicon exists. Others work on the process, tuning the sequence of deposition, patterning, and etching steps that build a chip layer by layer, and hunting the reasons a wafer came out wrong. Both sides live on data: enormous amounts of measurement, and the statistics needed to tell a real effect from noise.",
    commonMisconceptions: [
      "That it means building computers — the work is the chip itself, several layers of abstraction below a finished device.",
      "That design and manufacturing are the same job — chip design and fab process engineering are quite different careers that happen to share an industry.",
      "That everything is automated — the tools are automated, but deciding what to run, and diagnosing what went wrong, is not.",
      "That you spend the day in a cleanroom in a bunny suit — some roles do, and plenty of others are entirely at a computer.",
    ],
    mythsAndRealities: [
      {
        myth: "Semiconductor engineers build computers.",
        reality:
          "They build what's inside the chip. A finished computer is many layers of abstraction above where this work happens.",
      },
      {
        myth: "It's one job.",
        reality:
          "Design and process are close to separate professions. One simulates circuits at a desk; the other runs and debugs a fabrication line.",
      },
      {
        myth: "Modern fabs are fully automated, so there's little to do.",
        reality:
          "Automation runs the steps. Engineers decide what the steps should be and work out why yield dropped when nothing obvious changed.",
      },
      {
        myth: "You need a PhD to get in.",
        reality:
          "Research roles often expect one, but a great deal of design, test, and process work is done by people with a bachelor's or master's.",
      },
    ],
    usefulSubjects: ["Physics", "Calculus", "Chemistry", "Computer science or programming, if offered", "Statistics, if offered"],
    helpfulSkills: [
      "Comfort with physics and chemistry at a level below the visible, since behaviour comes from material and quantum effects",
      "Strong statistics, because yield and process control are statistical problems before they are physical ones",
      "Programming and scripting, since analysing process and test data by hand isn't practical",
      "Patience with long feedback loops, as a change to a process can take weeks to show up in results",
      "Methodical debugging, because a defect can come from any of hundreds of steps",
    ],
    typicalProjects: [
      "Designing and simulating a circuit block against timing, power, and area targets",
      "Tuning a deposition or etch step to hit a target thickness or profile",
      "Investigating why yield dropped on a particular product or tool",
      "Developing test procedures that catch defective chips before they ship",
      "Characterising a new material or process and documenting how it behaves",
    ],
    typicalWorkday:
      "For design roles, most of the day is simulation and analysis at a computer, punctuated by design reviews. For process and yield roles, it's a mix of data analysis and time in or beside the fab, following experiments through and reacting when a tool drifts. Both sides are shaped by long cycle times — a wafer takes weeks to work through a line, so today's experiment answers a question you asked some time ago.",
    industries: [
      "Chip designers and fabless semiconductor companies",
      "Semiconductor foundries and integrated manufacturers",
      "Semiconductor equipment and materials suppliers",
      "Research laboratories and university facilities",
      "Companies designing custom silicon for their own products",
    ],
    advantages: [
      "The work sits underneath nearly all modern technology, so its reach is unusually wide",
      "It's genuinely deep technical work, with room to specialise a long way",
      "Design and process paths are different enough that one may suit you when the other doesn't",
      "Skills in statistics and process control transfer to other high-precision manufacturing",
    ],
    challenges: [
      "Feedback loops are long, which makes iteration slow compared with software or mechanical work",
      "The industry is capital-intensive and cyclical, and hiring moves with that cycle",
      "Fabs are concentrated in particular regions, so location options can be limited",
      "The learning curve is steep, and much of the practical knowledge is specific to one company's process",
    ],
    thingsPeopleDislike: [
      "Waiting weeks for a wafer to tell you whether an idea worked",
      "Cleanroom protocol, gowning, and the restrictions that come with it",
      "Chasing yield problems with hundreds of plausible causes and thin evidence",
      "On-call and shift coverage when a production line can't be allowed to stop",
    ],
  },
];

// Every field the site actually offers a page for. The homepage used to count
// only fields.length, which was honest when the stubs were four sections deep
// and genuinely thinner than the rest. They now carry the same qualitative
// research as any other field, so counting them out undersold the site by
// seven and contradicted what those pages say about themselves.
//
// Anything user-facing that says "N fields" should use this, so the two halves
// can never drift apart again.
export const totalFieldCount = fields.length + fieldStubs.length;
