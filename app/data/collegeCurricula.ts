import { CurriculumSequence } from "./types";

// REAL DATA — these 46 entries are user-compiled from each school's own
// published undergraduate catalog/bulletin, not invented or approximated.
// Every sourceUrl points to that school's general engineering bulletin or
// catalog home rather than a deep link into the specific major's page,
// because that's the level of link that was actually provided for each
// school — once there, use that site's own catalog/program search to find
// the major named in `majorName`. Every entry's catalogYear is "2024-2025";
// if a school's live catalog site has since published a newer edition, look
// up the 2024-2025 edition in that school's catalog archive rather than
// assuming the current live page still lists the same requirements below.
// Penn State's entries point to
// bulletins.psu.edu/undergraduate/colleges/engineering/ rather than the
// .../undergraduate/programs/ path originally given, because that path
// 404s. Two Penn State entries (Software Engineering, Energy Engineering)
// could not be independently confirmed as standalone majors in PSU's
// current bulletin — flagged to the site owner, kept as given since catalog
// program names do change between editions.
export const collegeCurricula: CurriculumSequence[] = [
  // 1. Mechanical Engineering
  {
    slug: "purdue-mechanical-engineering",
    fieldSlug: "mechanical-engineering",
    majorName: "B.S. in Mechanical Engineering",
    schoolName: "Purdue University",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.purdue.edu/",
    years: [
      { year: 1, courses: [{ name: "First-Year Engineering (Calculus I/II, General Chemistry, Physics I, Intro to Engr, English)" }] },
      { year: 2, courses: [{ name: "Statics" }, { name: "Dynamics" }, { name: "Thermodynamics I" }, { name: "Mechanics of Materials" }, { name: "Linear Algebra" }, { name: "Diff Eq" }, { name: "Physics II" }] },
      { year: 3, courses: [{ name: "Fluid Mechanics" }, { name: "Heat & Mass Transfer" }, { name: "Machine Design" }, { name: "Systems Modeling & Controls" }, { name: "Electrical Engr Fundamentals" }] },
      { year: 4, courses: [{ name: "Senior Design Project I & II" }, { name: "ME Tech Electives (e.g., Vibrations, Combustion, Robotics)" }] },
    ],
  },
  {
    slug: "tamu-mechanical-engineering",
    fieldSlug: "mechanical-engineering",
    majorName: "B.S. in Mechanical Engineering",
    schoolName: "Texas A&M University",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.tamu.edu/",
    years: [
      { year: 1, courses: [{ name: "Engr Math I/II" }, { name: "Chemistry I/II" }, { name: "Physics for Engr I" }, { name: "Engr Design I/II" }] },
      { year: 2, courses: [{ name: "Principles of Thermodynamics" }, { name: "Statics & Dynamics" }, { name: "Mechanics of Materials" }, { name: "Materials Science" }] },
      { year: 3, courses: [{ name: "Solid Mechanics" }, { name: "Fluid Mechanics" }, { name: "Heat Transfer" }, { name: "Dynamic Systems & Controls" }, { name: "Numerical Methods" }] },
      { year: 4, courses: [{ name: "Capstone Design" }, { name: "Applied Thermal/Fluid Systems" }, { name: "ME Electives" }] },
    ],
  },

  // 2. Electrical Engineering
  {
    slug: "psu-electrical-engineering",
    fieldSlug: "electrical-engineering",
    majorName: "B.S. in Electrical Engineering",
    schoolName: "Penn State University",
    catalogYear: "2024-2025",
    sourceUrl: "https://bulletins.psu.edu/undergraduate/colleges/engineering/",
    years: [
      { year: 1, courses: [{ name: "Calculus I/II" }, { name: "Physics (Mechanics)" }, { name: "Chemistry" }, { name: "Intro to Engr Design" }] },
      { year: 2, courses: [{ name: "Intro to Programming" }, { name: "Physics (E&M)" }, { name: "Circuit Analysis I/II" }, { name: "Digital Design" }, { name: "Diff Eq" }] },
      { year: 3, courses: [{ name: "Microelectronics" }, { name: "Signals & Systems" }, { name: "Electromagnetics" }, { name: "Continuous-Time Linear Systems" }, { name: "Microprocessors" }] },
      { year: 4, courses: [{ name: "Power Systems" }, { name: "Capstone Design I & II" }, { name: "Tech Electives (RF, Communications, Optoelectronics)" }] },
    ],
  },
  {
    slug: "purdue-electrical-engineering",
    fieldSlug: "electrical-engineering",
    majorName: "B.S. in Electrical Engineering",
    schoolName: "Purdue University",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.purdue.edu/",
    years: [
      { year: 1, courses: [{ name: "First-Year Engr Core" }, { name: "Calc I/II" }, { name: "Physics I" }] },
      { year: 2, courses: [{ name: "Linear Circuit Analysis I/II" }, { name: "Electronic Measurement Tech" }, { name: "C Programming" }, { name: "Advanced Math" }] },
      { year: 3, courses: [{ name: "Signals & Systems" }, { name: "Electromag Fields" }, { name: "Probabilistic Methods" }, { name: "Electronic Devices & Design" }] },
      { year: 4, courses: [{ name: "Senior Design" }, { name: "Advanced EE Electives" }] },
    ],
  },

  // 3. Chemical Engineering
  {
    slug: "tamu-chemical-engineering",
    fieldSlug: "chemical-engineering",
    majorName: "B.S. in Chemical Engineering",
    schoolName: "Texas A&M University",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.tamu.edu/",
    years: [
      { year: 1, courses: [{ name: "Engr Math" }, { name: "Chem I/II" }, { name: "Physics" }, { name: "Engr Design" }] },
      { year: 2, courses: [{ name: "Org Chem I/II" }, { name: "Conservation Principles (Mass & Energy Balances)" }, { name: "ChemE Data Analysis" }] },
      { year: 3, courses: [{ name: "ChemE Thermodynamics" }, { name: "Fluid Operations" }, { name: "Heat Transfer" }, { name: "Unit Operations Lab" }, { name: "Physical Chemistry" }] },
      { year: 4, courses: [{ name: "Mass Transfer Operations" }, { name: "Chem Reaction Engr" }, { name: "Process Dynamics & Control" }, { name: "Plant Design (Capstone)" }] },
    ],
  },
  {
    slug: "psu-chemical-engineering",
    fieldSlug: "chemical-engineering",
    majorName: "B.S. in Chemical Engineering",
    schoolName: "Penn State University",
    catalogYear: "2024-2025",
    sourceUrl: "https://bulletins.psu.edu/undergraduate/colleges/engineering/",
    years: [
      { year: 1, courses: [{ name: "Calculus" }, { name: "Chem" }, { name: "Physics" }, { name: "Engr Design" }] },
      { year: 2, courses: [{ name: "Material & Energy Balances" }, { name: "Org Chem I/II" }, { name: "Diff Eq" }] },
      { year: 3, courses: [{ name: "Phase & Chemical Equilibria" }, { name: "Heat & Mass Transfer" }, { name: "Fluid Mechanics" }, { name: "ChemE Lab" }] },
      { year: 4, courses: [{ name: "Chemical Reaction Engr" }, { name: "Process Control" }, { name: "Process Design (Capstone)" }, { name: "Tech Electives" }] },
    ],
  },

  // 4. Civil Engineering
  {
    slug: "purdue-civil-engineering",
    fieldSlug: "civil-engineering",
    majorName: "B.S. in Civil Engineering",
    schoolName: "Purdue University",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.purdue.edu/",
    years: [
      { year: 1, courses: [{ name: "First-Year Engr Core" }] },
      { year: 2, courses: [{ name: "Statics" }, { name: "Dynamics" }, { name: "Mech of Materials" }, { name: "Geomatics (Surveying)" }, { name: "Civil Engr Materials" }] },
      { year: 3, courses: [{ name: "Structural Analysis" }, { name: "Hydraulics" }, { name: "Soil Mechanics" }, { name: "Intro to Transportation" }, { name: "Environmental Engr" }] },
      { year: 4, courses: [{ name: "Steel/Concrete Design" }, { name: "Construction Management" }, { name: "Civil Engr Design Project (Capstone)" }] },
    ],
  },
  {
    slug: "tamu-civil-engineering",
    fieldSlug: "civil-engineering",
    majorName: "B.S. in Civil Engineering",
    schoolName: "Texas A&M University",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.tamu.edu/",
    years: [
      { year: 1, courses: [{ name: "Engr Math" }, { name: "Chem" }, { name: "Physics" }, { name: "Engr Design" }] },
      { year: 2, courses: [{ name: "Statics" }, { name: "Dynamics" }, { name: "Mech of Materials" }, { name: "Intro to Civil Engr" }, { name: "Surveying" }] },
      { year: 3, courses: [{ name: "Structural Analysis" }, { name: "Fluid Dynamics" }, { name: "Geotechnical Engr" }, { name: "Transportation Engr" }, { name: "Environmental Engr" }] },
      { year: 4, courses: [{ name: "Civil Engr Systems" }, { name: "Project Management" }, { name: "Capstone Design" }, { name: "Specific Track Electives (e.g., Water Resources)" }] },
    ],
  },

  // 5. Biomedical Engineering
  {
    slug: "psu-biomedical-engineering",
    fieldSlug: "biomedical-engineering",
    majorName: "B.S. in Biomedical Engineering",
    schoolName: "Penn State University",
    catalogYear: "2024-2025",
    sourceUrl: "https://bulletins.psu.edu/undergraduate/colleges/engineering/",
    years: [
      { year: 1, courses: [{ name: "Calculus" }, { name: "Physics (Mechanics)" }, { name: "General Chem" }, { name: "Bio Intro" }] },
      { year: 2, courses: [{ name: "Organic Chem" }, { name: "Diff Eq" }, { name: "Biomechanics" }, { name: "Physiology" }, { name: "Circuit Analysis" }] },
      { year: 3, courses: [{ name: "Biofluid Mechanics" }, { name: "Biomaterials" }, { name: "Signals & Systems in BME" }, { name: "Biotransport Phenomena" }] },
      { year: 4, courses: [{ name: "Medical Imaging or Tissue Engr (depending on track)" }, { name: "BME Lab" }, { name: "Capstone Design I & II" }] },
    ],
  },
  {
    slug: "tamu-biomedical-engineering",
    fieldSlug: "biomedical-engineering",
    majorName: "B.S. in Biomedical Engineering",
    schoolName: "Texas A&M University",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.tamu.edu/",
    years: [
      { year: 1, courses: [{ name: "Engr Math" }, { name: "Chem" }, { name: "Physics" }, { name: "Engr Design" }] },
      { year: 2, courses: [{ name: "Bioinstrumentation" }, { name: "Biomechanics" }, { name: "Anatomy & Physiology" }, { name: "MatSci" }] },
      { year: 3, courses: [{ name: "Biomaterials" }, { name: "Biofluid Mechanics" }, { name: "Biosignals & Systems" }, { name: "BME Statistics" }] },
      { year: 4, courses: [{ name: "Regulatory Affairs" }, { name: "BME Senior Design I & II" }, { name: "Track Electives (e.g., Medical Devices)" }] },
    ],
  },

  // 6. Software Engineering
  {
    slug: "psu-software-engineering",
    fieldSlug: "software-engineering",
    majorName: "B.S. in Software Engineering",
    schoolName: "Penn State University",
    catalogYear: "2024-2025",
    sourceUrl: "https://bulletins.psu.edu/undergraduate/colleges/engineering/",
    years: [
      { year: 1, courses: [{ name: "Calculus" }, { name: "Physics" }, { name: "Programming Basics" }, { name: "Intro to Engr" }] },
      { year: 2, courses: [{ name: "Object-Oriented Programming" }, { name: "Discrete Math" }, { name: "Data Structures" }, { name: "Digital Design" }] },
      { year: 3, courses: [{ name: "Software Design & Architecture" }, { name: "Database Management" }, { name: "Operating Systems" }, { name: "Software Testing" }] },
      { year: 4, courses: [{ name: "Software Project Management" }, { name: "Secure Coding" }, { name: "Software Engr Capstone I & II" }] },
    ],
  },
  {
    slug: "utaustin-software-engineering",
    fieldSlug: "software-engineering",
    majorName: "B.S. in Electrical and Computer Engr (Software Engr Track)",
    schoolName: "UT Austin",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.utexas.edu/",
    years: [
      { year: 1, courses: [{ name: "Calculus" }, { name: "Physics" }, { name: "Intro to Computing" }] },
      { year: 2, courses: [{ name: "Data Structures" }, { name: "Circuit Theory" }, { name: "Logic Design" }, { name: "Discrete Math" }] },
      { year: 3, courses: [{ name: "Algorithms" }, { name: "Software Engineering" }, { name: "Operating Systems" }, { name: "Computer Architecture" }] },
      { year: 4, courses: [{ name: "Senior Design Project" }, { name: "Advanced SWE Electives (e.g., Cloud Computing, Mobile Apps)" }] },
    ],
  },

  // 7. Aerospace Engineering
  {
    slug: "purdue-aerospace-engineering",
    fieldSlug: "aerospace-engineering",
    majorName: "B.S. in Aeronautical and Astronautical Engineering",
    schoolName: "Purdue University",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.purdue.edu/",
    years: [
      { year: 1, courses: [{ name: "First-Year Engr Core" }] },
      { year: 2, courses: [{ name: "Aerodynamics" }, { name: "Aero/Astro Thermodynamics" }, { name: "Statics & Dynamics" }, { name: "Mech of Materials" }] },
      { year: 3, courses: [{ name: "Compressible Flow" }, { name: "Aerospace Structures" }, { name: "Flight Dynamics & Control" }, { name: "Propulsion" }, { name: "Orbital Mechanics" }] },
      { year: 4, courses: [{ name: "Spacecraft/Aircraft Design (Capstone)" }, { name: "Aero Lab" }, { name: "Advanced Electives" }] },
    ],
  },
  {
    slug: "tamu-aerospace-engineering",
    fieldSlug: "aerospace-engineering",
    majorName: "B.S. in Aerospace Engineering",
    schoolName: "Texas A&M University",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.tamu.edu/",
    years: [
      { year: 1, courses: [{ name: "Engr Math" }, { name: "Chem" }, { name: "Physics" }, { name: "Engr Design" }] },
      { year: 2, courses: [{ name: "Aero Computing" }, { name: "Solid Mechanics" }, { name: "Dynamics" }, { name: "Thermodynamics" }] },
      { year: 3, courses: [{ name: "Incompressible Aerodynamics" }, { name: "Compressible Aerodynamics" }, { name: "Aerospace Structures" }, { name: "Dynamics & Controls" }] },
      { year: 4, courses: [{ name: "Propulsion (Airbreathing or Rocket)" }, { name: "Aerospace Vehicle Design I & II" }, { name: "Tech Electives" }] },
    ],
  },

  // 8. Computer Engineering
  {
    slug: "psu-computer-engineering",
    fieldSlug: "computer-engineering",
    majorName: "B.S. in Computer Engineering",
    schoolName: "Penn State University",
    catalogYear: "2024-2025",
    sourceUrl: "https://bulletins.psu.edu/undergraduate/colleges/engineering/",
    years: [
      { year: 1, courses: [{ name: "Calculus" }, { name: "Physics" }, { name: "General Chem" }, { name: "Intro to Engr" }] },
      { year: 2, courses: [{ name: "Discrete Math" }, { name: "C++ Programming" }, { name: "Circuit Analysis" }, { name: "Digital Design" }] },
      { year: 3, courses: [{ name: "Data Structures" }, { name: "Microprocessors" }, { name: "Signals & Systems" }, { name: "Electronic Circuits" }, { name: "Computer Architecture" }] },
      { year: 4, courses: [{ name: "Operating Systems" }, { name: "VLSI Design" }, { name: "CompE Capstone Design I & II" }] },
    ],
  },
  {
    slug: "purdue-computer-engineering",
    fieldSlug: "computer-engineering",
    majorName: "B.S. in Computer Engineering",
    schoolName: "Purdue University",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.purdue.edu/",
    years: [
      { year: 1, courses: [{ name: "First-Year Engr Core" }] },
      { year: 2, courses: [{ name: "Digital System Design" }, { name: "Programming in C" }, { name: "Linear Circuit Analysis" }, { name: "Discrete Math" }] },
      { year: 3, courses: [{ name: "Microprocessor Systems" }, { name: "Data Structures in C++" }, { name: "Electronic Devices" }, { name: "Probabilistic Methods" }] },
      { year: 4, courses: [{ name: "Advanced Comp Arch" }, { name: "Embedded Systems" }, { name: "Senior Design" }] },
    ],
  },

  // 9. Environmental Engineering
  {
    slug: "purdue-environmental-engineering",
    fieldSlug: "environmental-engineering",
    majorName: "B.S. in Environmental and Ecological Engineering",
    schoolName: "Purdue University",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.purdue.edu/",
    years: [
      { year: 1, courses: [{ name: "First-Year Engr Core" }] },
      { year: 2, courses: [{ name: "Env/Eco Engr Principles" }, { name: "Statics" }, { name: "Env Bio/Microbiology" }, { name: "Thermodynamics" }] },
      { year: 3, courses: [{ name: "Hydraulics" }, { name: "Water Chemistry" }, { name: "Physical/Chemical Treatment Processes" }, { name: "Air Pollution" }] },
      { year: 4, courses: [{ name: "Solid/Hazardous Waste Management" }, { name: "Env Systems Modeling" }, { name: "Senior Design Project" }] },
    ],
  },
  {
    slug: "tamu-environmental-engineering",
    fieldSlug: "environmental-engineering",
    majorName: "B.S. in Environmental Engineering",
    schoolName: "Texas A&M University",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.tamu.edu/",
    years: [
      { year: 1, courses: [{ name: "Engr Math" }, { name: "Chem" }, { name: "Physics" }, { name: "Engr Design" }] },
      { year: 2, courses: [{ name: "Statics" }, { name: "Fluid Dynamics" }, { name: "Env Engr Fundamentals" }, { name: "Microbiology" }] },
      { year: 3, courses: [{ name: "Water & Wastewater Treatment" }, { name: "Hydrology" }, { name: "Environmental Chemistry" }, { name: "Soil Mechanics" }] },
      { year: 4, courses: [{ name: "Air Quality Engr" }, { name: "Remediation" }, { name: "Env Policy/Law" }, { name: "Capstone Design" }] },
    ],
  },

  // 10. Industrial Engineering
  {
    slug: "tamu-industrial-engineering",
    fieldSlug: "industrial-engineering",
    majorName: "B.S. in Industrial and Systems Engineering",
    schoolName: "Texas A&M University",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.tamu.edu/",
    years: [
      { year: 1, courses: [{ name: "Engr Math" }, { name: "Chem" }, { name: "Physics" }, { name: "Engr Design" }] },
      { year: 2, courses: [{ name: "Intro to IE" }, { name: "Probability & Stats for Engr" }, { name: "Manufacturing Processes" }, { name: "Engr Economics" }] },
      { year: 3, courses: [{ name: "Operations Research I (Deterministic)" }, { name: "Operations Research II (Stochastic)" }, { name: "Quality Engr" }, { name: "Ergonomics" }] },
      { year: 4, courses: [{ name: "Simulation" }, { name: "Production & Inventory Control" }, { name: "Facilities Planning" }, { name: "IE Capstone Design" }] },
    ],
  },
  {
    slug: "psu-industrial-engineering",
    fieldSlug: "industrial-engineering",
    majorName: "B.S. in Industrial Engineering",
    schoolName: "Penn State University",
    catalogYear: "2024-2025",
    sourceUrl: "https://bulletins.psu.edu/undergraduate/colleges/engineering/",
    years: [
      { year: 1, courses: [{ name: "Calculus" }, { name: "Physics" }, { name: "General Chem" }, { name: "Intro to Engr" }] },
      { year: 2, courses: [{ name: "Manufacturing Processes" }, { name: "Probability" }, { name: "Linear Programming" }, { name: "Intro to CAD" }] },
      { year: 3, courses: [{ name: "Engr Stats" }, { name: "Quality Control" }, { name: "Human Factors Engr" }, { name: "Production Control" }, { name: "IE Data Systems" }] },
      { year: 4, courses: [{ name: "Simulation Modeling" }, { name: "Facility Layout" }, { name: "Capstone Design" }, { name: "Supply Chain Electives" }] },
    ],
  },

  // 11. Materials Engineering
  {
    slug: "purdue-materials-engineering",
    fieldSlug: "materials-engineering",
    majorName: "B.S. in Materials Engineering",
    schoolName: "Purdue University",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.purdue.edu/",
    years: [
      { year: 1, courses: [{ name: "First-Year Engr Core" }] },
      { year: 2, courses: [{ name: "Structure of Materials" }, { name: "Thermodynamics of Materials" }, { name: "Mech of Materials" }, { name: "Transport Phenomena" }] },
      { year: 3, courses: [{ name: "Phase Transformations" }, { name: "Mechanical Behavior" }, { name: "Materials Characterization Lab" }, { name: "Electrical/Optical Properties" }] },
      { year: 4, courses: [{ name: "Polymer Science" }, { name: "Materials Processing" }, { name: "Senior Design Project I & II" }] },
    ],
  },
  {
    slug: "psu-materials-engineering",
    fieldSlug: "materials-engineering",
    majorName: "B.S. in Materials Science and Engineering",
    schoolName: "Penn State University",
    catalogYear: "2024-2025",
    sourceUrl: "https://bulletins.psu.edu/undergraduate/colleges/engineering/",
    years: [
      { year: 1, courses: [{ name: "Calculus" }, { name: "Physics" }, { name: "Chem" }, { name: "Intro to Materials" }] },
      { year: 2, courses: [{ name: "Thermodynamics of MatSci" }, { name: "Crystal Chemistry" }, { name: "Physical Metallurgy" }, { name: "Diff Eq" }] },
      { year: 3, courses: [{ name: "Mechanical Properties" }, { name: "Kinetics & Phase Equilibria" }, { name: "Electronic/Magnetic Properties" }, { name: "MatSci Lab" }] },
      { year: 4, courses: [{ name: "Capstone Design" }, { name: "Specific Track Electives (Polymers, Ceramics, or Metals)" }] },
    ],
  },

  // 12. Robotics & Mechatronics Engineering
  {
    slug: "purdue-robotics-engineering",
    fieldSlug: "robotics-engineering",
    majorName: "B.S. in Robotics Engineering Technology",
    schoolName: "Purdue University",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.purdue.edu/",
    years: [
      { year: 1, courses: [{ name: "Tech Calculus" }, { name: "Physics" }, { name: "Intro to Robotics" }, { name: "C Programming" }] },
      { year: 2, courses: [{ name: "Statics" }, { name: "Electricity & Electronics" }, { name: "Fluid Power (Hydraulics/Pneumatics)" }, { name: "Digital Circuits" }] },
      { year: 3, courses: [{ name: "Dynamics" }, { name: "Sensors & Actuators" }, { name: "PLCs (Programmable Logic Controllers)" }, { name: "Microcontrollers" }] },
      { year: 4, courses: [{ name: "Industrial Robotics" }, { name: "Machine Vision" }, { name: "Robotics Integration" }, { name: "Capstone Project" }] },
    ],
  },
  {
    slug: "wpi-robotics-engineering",
    fieldSlug: "robotics-engineering",
    majorName: "B.S. in Robotics Engineering",
    schoolName: "Worcester Polytechnic Institute (WPI)",
    catalogYear: "2024-2025",
    sourceUrl: "https://www.wpi.edu/academics/catalogs",
    years: [
      { year: 1, courses: [{ name: "Calc" }, { name: "Physics" }, { name: "Intro to Robotics (Mech/Elec/CS combined)" }] },
      { year: 2, courses: [{ name: "Unified Robotics II (Sensors/Actuators)" }, { name: "Unified Robotics III (Control/Kinematics)" }, { name: "Object-Oriented Design" }] },
      { year: 3, courses: [{ name: "Unified Robotics IV (Navigation/Autonomy)" }, { name: "Embedded Systems" }, { name: "Machine Design" }] },
      { year: 4, courses: [{ name: "Major Qualifying Project (MQP - Capstone)" }, { name: "Advanced Robotics Electives (SLAM, Deep Learning)" }] },
    ],
  },

  // 13. Nuclear Engineering
  {
    slug: "tamu-nuclear-engineering",
    fieldSlug: "nuclear-engineering",
    majorName: "B.S. in Nuclear Engineering",
    schoolName: "Texas A&M University",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.tamu.edu/",
    years: [
      { year: 1, courses: [{ name: "Engr Math" }, { name: "Chem" }, { name: "Physics" }, { name: "Engr Design" }] },
      { year: 2, courses: [{ name: "Intro to Nuclear Engr" }, { name: "Atomic & Nuclear Physics" }, { name: "Thermodynamics" }, { name: "Diff Eq" }] },
      { year: 3, courses: [{ name: "Reactor Physics" }, { name: "Radiation Detection & Measurement" }, { name: "Heat Transfer" }, { name: "Fluid Mechanics" }] },
      { year: 4, courses: [{ name: "Thermal Hydraulics" }, { name: "Nuclear Materials" }, { name: "Radiation Shielding" }, { name: "Nuclear Plant Design (Capstone)" }] },
    ],
  },
  {
    slug: "psu-nuclear-engineering",
    fieldSlug: "nuclear-engineering",
    majorName: "B.S. in Nuclear Engineering",
    schoolName: "Penn State University",
    catalogYear: "2024-2025",
    sourceUrl: "https://bulletins.psu.edu/undergraduate/colleges/engineering/",
    years: [
      { year: 1, courses: [{ name: "Calculus" }, { name: "Physics" }, { name: "General Chem" }, { name: "Intro to Engr" }] },
      { year: 2, courses: [{ name: "Elements of Nuclear Engr" }, { name: "Thermodynamics" }, { name: "Fluid Mech" }, { name: "Diff Eq" }] },
      { year: 3, courses: [{ name: "Radiation Detection Lab" }, { name: "Nuclear Reactor Physics" }, { name: "Heat Transfer" }, { name: "Nuclear Mech of Materials" }] },
      { year: 4, courses: [{ name: "Reactor Thermal Hydraulics" }, { name: "Reactor Controls" }, { name: "Nuclear Capstone Design" }] },
    ],
  },

  // 14. Petroleum Engineering
  {
    slug: "tamu-petroleum-engineering",
    fieldSlug: "petroleum-engineering",
    majorName: "B.S. in Petroleum Engineering",
    schoolName: "Texas A&M University",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.tamu.edu/",
    years: [
      { year: 1, courses: [{ name: "Engr Math" }, { name: "Chem" }, { name: "Physics" }, { name: "Engr Design" }] },
      { year: 2, courses: [{ name: "Intro to PetE" }, { name: "Thermodynamics" }, { name: "Physical Geology" }, { name: "Statics/Dynamics" }] },
      { year: 3, courses: [{ name: "Reservoir Rock Properties" }, { name: "Fluid Mechanics" }, { name: "Drilling Engineering" }, { name: "Formation Evaluation (Well Logging)" }] },
      { year: 4, courses: [{ name: "Reservoir Fluids" }, { name: "Production Engineering" }, { name: "Well Testing" }, { name: "PetE Project (Capstone)" }] },
    ],
  },
  {
    slug: "utaustin-petroleum-engineering",
    fieldSlug: "petroleum-engineering",
    majorName: "B.S. in Petroleum Engineering",
    schoolName: "UT Austin",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.utexas.edu/",
    years: [
      { year: 1, courses: [{ name: "Calculus" }, { name: "Physics" }, { name: "General Chem" }, { name: "PetE Intro" }] },
      { year: 2, courses: [{ name: "Geology for Engrs" }, { name: "Thermodynamics" }, { name: "PetE Fluid Properties" }, { name: "Mech of Materials" }] },
      { year: 3, courses: [{ name: "Transport Phenomena" }, { name: "Drilling Fluids" }, { name: "Reservoir Engr I" }, { name: "Petrophysics" }] },
      { year: 4, courses: [{ name: "Artificial Lift" }, { name: "Well Stimulation" }, { name: "Oil & Gas Economics" }, { name: "Capstone Design" }] },
    ],
  },

  // 15. Agricultural Engineering
  {
    slug: "purdue-agricultural-engineering",
    fieldSlug: "agricultural-engineering",
    majorName: "B.S. in Agricultural Engineering",
    schoolName: "Purdue University",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.purdue.edu/",
    years: [
      { year: 1, courses: [{ name: "First-Year Engr Core" }, { name: "Intro to Ag/Biological Engr" }] },
      { year: 2, courses: [{ name: "Statics" }, { name: "Dynamics" }, { name: "Thermodynamics" }, { name: "Soil Science" }, { name: "Botany/Bio" }] },
      { year: 3, courses: [{ name: "Fluid Mechanics" }, { name: "Heat/Mass Transfer" }, { name: "Ag Machinery Principles" }, { name: "Soil/Water Cons Engr" }] },
      { year: 4, courses: [{ name: "Sensors & Controls for Ag" }, { name: "Design of Ag Structures" }, { name: "Ag Engr Senior Design" }] },
    ],
  },
  {
    slug: "psu-agricultural-engineering",
    fieldSlug: "agricultural-engineering",
    majorName: "B.S. in Biological Engineering (Agricultural Engr Option)",
    schoolName: "Penn State University",
    catalogYear: "2024-2025",
    sourceUrl: "https://bulletins.psu.edu/undergraduate/colleges/engineering/",
    years: [
      { year: 1, courses: [{ name: "Calculus" }, { name: "Chem" }, { name: "Physics" }, { name: "Intro to BioEngr" }] },
      { year: 2, courses: [{ name: "Statics" }, { name: "Mech of Materials" }, { name: "Bio-Thermodynamics" }, { name: "Soil/Water Intro" }] },
      { year: 3, courses: [{ name: "Fluid Mechanics" }, { name: "Kinematics of Machinery" }, { name: "Heat Transfer" }, { name: "Instrumentation" }] },
      { year: 4, courses: [{ name: "Off-Road Machine Design" }, { name: "Precision Ag Tech" }, { name: "Capstone Project" }] },
    ],
  },

  // 16. Marine Engineering
  {
    slug: "tamu-marine-engineering",
    fieldSlug: "marine-engineering",
    majorName: "B.S. in Ocean Engineering",
    schoolName: "Texas A&M University",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.tamu.edu/",
    years: [
      { year: 1, courses: [{ name: "Engr Math" }, { name: "Chem" }, { name: "Physics" }, { name: "Engr Design" }] },
      { year: 2, courses: [{ name: "Intro to Ocean Engr" }, { name: "Statics & Dynamics" }, { name: "Fluid Mech" }, { name: "Thermodynamics" }] },
      { year: 3, courses: [{ name: "Coastal Engr" }, { name: "Marine Hydrodynamics" }, { name: "Ocean Wave Mechanics" }, { name: "Naval Architecture" }] },
      { year: 4, courses: [{ name: "Offshore Structures" }, { name: "Underwater Acoustics" }, { name: "Capstone Ocean Design I & II" }] },
    ],
  },
  {
    slug: "umich-marine-engineering",
    fieldSlug: "marine-engineering",
    majorName: "B.S.E. in Naval Architecture and Marine Engineering",
    schoolName: "University of Michigan",
    catalogYear: "2024-2025",
    sourceUrl: "https://bulletin.engin.umich.edu/",
    years: [
      { year: 1, courses: [{ name: "Calculus" }, { name: "Physics" }, { name: "Chem" }, { name: "Intro to Computing" }] },
      { year: 2, courses: [{ name: "Intro to Naval Arch" }, { name: "Solid Mechanics" }, { name: "Thermodynamics" }, { name: "Marine CAD" }] },
      { year: 3, courses: [{ name: "Marine Hydrodynamics" }, { name: "Marine Structures" }, { name: "Ship Resistance/Propulsion" }, { name: "Marine Engr Systems" }] },
      { year: 4, courses: [{ name: "Ship Design Project (Capstone)" }, { name: "Advanced Marine Dynamics" }, { name: "Tech Electives" }] },
    ],
  },

  // 17. Architectural Engineering
  {
    slug: "psu-architectural-engineering",
    fieldSlug: "architectural-engineering",
    majorName: "B.S. in Architectural Engineering (5-Year Program standard for AE)",
    schoolName: "Penn State University",
    catalogYear: "2024-2025",
    sourceUrl: "https://bulletins.psu.edu/undergraduate/colleges/engineering/",
    years: [
      { year: 1, courses: [{ name: "Calculus" }, { name: "Physics" }, { name: "Intro to Arch Engr" }, { name: "Arch History" }] },
      { year: 2, courses: [{ name: "Statics" }, { name: "Mech of Materials" }, { name: "Thermodynamics" }, { name: "Architectural Graphics" }] },
      { year: 3, courses: [{ name: "Structural Analysis" }, { name: "HVAC Fundamentals" }, { name: "Illumination/Lighting" }, { name: "Fluid Mech" }] },
      { year: 4, courses: [{ name: "Advanced Structures" }, { name: "Architectural Acoustics" }, { name: "Bldg Construction Mgmt" }, { name: "Advanced HVAC" }] },
      { year: 5, courses: [{ name: "AE Senior Thesis (Full Year Capstone)" }] },
    ],
  },
  {
    slug: "utaustin-architectural-engineering",
    fieldSlug: "architectural-engineering",
    majorName: "B.S. in Architectural Engineering",
    schoolName: "UT Austin",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.utexas.edu/",
    years: [
      { year: 1, courses: [{ name: "Calculus" }, { name: "Physics" }, { name: "Chem" }, { name: "Arch History" }] },
      { year: 2, courses: [{ name: "Statics" }, { name: "Dynamics" }, { name: "Mech of Materials" }, { name: "Thermodynamics" }] },
      { year: 3, courses: [{ name: "Structural Analysis" }, { name: "Fluid Mech" }, { name: "HVAC Design" }, { name: "Bldg Electrical Systems" }, { name: "Concrete/Steel Design" }] },
      { year: 4, courses: [{ name: "Construction Mgmt" }, { name: "Capstone Design" }, { name: "Track Electives (Structural or MEP)" }] },
    ],
  },

  // 18. Systems Engineering
  {
    slug: "purdue-systems-engineering",
    fieldSlug: "systems-engineering",
    majorName: "B.S. in Systems Engineering",
    schoolName: "Purdue University",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.purdue.edu/",
    years: [
      { year: 1, courses: [{ name: "First-Year Engr Core" }] },
      { year: 2, courses: [{ name: "Intro to Systems Engr" }, { name: "Prob & Stats" }, { name: "Linear Algebra" }, { name: "Diff Eq" }] },
      { year: 3, courses: [{ name: "Systems Architecture" }, { name: "Optimization" }, { name: "Reliability & Quality" }, { name: "Modeling & Simulation" }] },
      { year: 4, courses: [{ name: "Decision Analysis" }, { name: "Human-Systems Integration" }, { name: "Systems Capstone Project" }] },
    ],
  },
  {
    slug: "upenn-systems-engineering",
    fieldSlug: "systems-engineering",
    majorName: "B.S.E. in Systems Science and Engineering",
    schoolName: "University of Pennsylvania",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.upenn.edu/",
    years: [
      { year: 1, courses: [{ name: "Calculus" }, { name: "Physics" }, { name: "Programming in Java/C" }] },
      { year: 2, courses: [{ name: "Linear Algebra" }, { name: "Probability" }, { name: "Data Structures" }, { name: "Intro to Systems" }] },
      { year: 3, courses: [{ name: "Optimization" }, { name: "Stochastic Processes" }, { name: "Control Systems" }, { name: "Network Theory" }] },
      { year: 4, courses: [{ name: "Data Analytics" }, { name: "Senior Capstone Project" }, { name: "Tech Electives" }] },
    ],
  },

  // 19. Automotive Engineering
  {
    slug: "clemson-automotive-engineering",
    fieldSlug: "automotive-engineering",
    majorName: "B.S. in Automotive Engineering",
    schoolName: "Clemson University",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.clemson.edu/",
    years: [
      { year: 1, courses: [{ name: "Calc" }, { name: "Chem" }, { name: "Physics" }, { name: "Gen Engr" }] },
      { year: 2, courses: [{ name: "Statics" }, { name: "Dynamics" }, { name: "Thermodynamics" }, { name: "Mech of Materials" }, { name: "Intro to Auto Engr" }] },
      { year: 3, courses: [{ name: "Auto Fluid/Heat Transfer" }, { name: "Vehicle Dynamics" }, { name: "Auto Electrical Systems" }, { name: "Auto Materials" }] },
      { year: 4, courses: [{ name: "Powertrains" }, { name: "Chassis Design" }, { name: "Auto Electronics/Controls" }, { name: "Auto Capstone Design" }] },
    ],
  },
  {
    slug: "umich-automotive-engineering",
    fieldSlug: "automotive-engineering",
    majorName: "B.S.E. in Mechanical Engineering (Automotive Engineering Concentration)",
    schoolName: "University of Michigan",
    catalogYear: "2024-2025",
    sourceUrl: "https://bulletin.engin.umich.edu/",
    years: [
      { year: 1, courses: [{ name: "Calc" }, { name: "Chem" }, { name: "Physics" }, { name: "Engr Computing" }] },
      { year: 2, courses: [{ name: "Statics" }, { name: "Dynamics" }, { name: "Thermo I" }, { name: "Mech of Materials" }] },
      { year: 3, courses: [{ name: "Fluid Mech" }, { name: "Heat Transfer" }, { name: "System Dynamics/Controls" }, { name: "Auto Control Systems" }] },
      { year: 4, courses: [{ name: "Internal Combustion Engines" }, { name: "Vehicle Dynamics" }, { name: "Auto Capstone Project" }] },
    ],
  },

  // 20. Manufacturing Engineering
  {
    slug: "tamu-manufacturing-engineering",
    fieldSlug: "manufacturing-engineering",
    majorName: "B.S. in Manufacturing and Mechanical Engineering Technology",
    schoolName: "Texas A&M University",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.tamu.edu/",
    years: [
      { year: 1, courses: [{ name: "Pre-Calc/Calc" }, { name: "Physics" }, { name: "Engr Graphics" }, { name: "Manufacturing Intro" }] },
      { year: 2, courses: [{ name: "Statics/Dynamics" }, { name: "Metallic Materials" }, { name: "Machining Processes" }, { name: "CAD/CAM" }] },
      { year: 3, courses: [{ name: "Non-Metallic Materials" }, { name: "Fluid Power" }, { name: "Welding Tech" }, { name: "Quality Assurance" }] },
      { year: 4, courses: [{ name: "Robotics/Automation" }, { name: "Lean Manufacturing" }, { name: "Tool/Die Design" }, { name: "Senior Capstone" }] },
    ],
  },
  {
    slug: "purdue-manufacturing-engineering",
    fieldSlug: "manufacturing-engineering",
    majorName: "B.S. in Manufacturing Engineering Technology",
    schoolName: "Purdue University",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.purdue.edu/",
    years: [
      { year: 1, courses: [{ name: "Tech Calc" }, { name: "Physics" }, { name: "Intro to Manufacturing" }] },
      { year: 2, courses: [{ name: "Material Science" }, { name: "Statics" }, { name: "CNC Machining" }, { name: "CAD" }] },
      { year: 3, courses: [{ name: "Fluid Power" }, { name: "Metrology" }, { name: "Automation & PLCs" }, { name: "Six Sigma Quality" }] },
      { year: 4, courses: [{ name: "Plant Layout" }, { name: "Lean Manufacturing" }, { name: "Manufacturing Systems Capstone" }] },
    ],
  },

  // 21. Structural Engineering
  {
    slug: "ucsd-structural-engineering",
    fieldSlug: "structural-engineering",
    majorName: "B.S. in Structural Engineering",
    schoolName: "UC San Diego",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.ucsd.edu/",
    years: [
      { year: 1, courses: [{ name: "Calculus" }, { name: "Physics (Mechanics)" }, { name: "General Chem" }, { name: "Intro to Structural Engr" }] },
      { year: 2, courses: [{ name: "Statics" }, { name: "Dynamics" }, { name: "Solid Mechanics" }, { name: "Fluid Mechanics" }] },
      { year: 3, courses: [{ name: "Structural Analysis" }, { name: "Finite Element Analysis (FEA)" }, { name: "Geotech Engr" }, { name: "Structural Materials" }] },
      { year: 4, courses: [{ name: "Steel Design" }, { name: "Concrete Design" }, { name: "Earthquake Engr" }, { name: "Senior Design Project" }] },
    ],
  },
  {
    slug: "purdue-structural-engineering",
    fieldSlug: "structural-engineering",
    majorName: "B.S. in Civil Engineering (Structural Concentration)",
    schoolName: "Purdue University",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.purdue.edu/",
    years: [
      { year: 1, courses: [{ name: "First-Year Engr Core" }] },
      { year: 2, courses: [{ name: "Statics" }, { name: "Dynamics" }, { name: "Mech of Materials" }, { name: "Geomatics" }] },
      { year: 3, courses: [{ name: "Structural Analysis I" }, { name: "Behavior of Materials" }, { name: "Soil Mech" }] },
      { year: 4, courses: [{ name: "Structural Analysis II" }, { name: "Steel Design" }, { name: "Reinforced Concrete Design" }, { name: "Bridge Design (Capstone)" }] },
    ],
  },

  // 22. Energy Engineering
  {
    slug: "psu-energy-engineering",
    fieldSlug: "energy-engineering",
    majorName: "B.S. in Energy Engineering",
    schoolName: "Penn State University",
    catalogYear: "2024-2025",
    sourceUrl: "https://bulletins.psu.edu/undergraduate/colleges/engineering/",
    years: [
      { year: 1, courses: [{ name: "Calculus" }, { name: "Physics" }, { name: "Chem" }, { name: "Energy/Env Intro" }] },
      { year: 2, courses: [{ name: "Statics" }, { name: "Thermodynamics" }, { name: "Material Balances" }, { name: "Org Chem" }] },
      { year: 3, courses: [{ name: "Fluid Mechanics" }, { name: "Heat Transfer" }, { name: "Combustion Systems" }, { name: "Electrochemical Systems" }] },
      { year: 4, courses: [{ name: "Renewable Energy Tech" }, { name: "Energy Storage" }, { name: "Energy Systems Design Capstone" }] },
    ],
  },
  {
    slug: "ucberkeley-energy-engineering",
    fieldSlug: "energy-engineering",
    majorName: "B.S. in Energy Engineering",
    schoolName: "UC Berkeley",
    catalogYear: "2024-2025",
    sourceUrl: "https://guide.berkeley.edu/",
    years: [
      { year: 1, courses: [{ name: "Calc" }, { name: "Chem" }, { name: "Physics" }, { name: "Data Structures" }] },
      { year: 2, courses: [{ name: "Thermodynamics" }, { name: "Circuit Analysis" }, { name: "Fluid Mech" }] },
      { year: 3, courses: [{ name: "Energy Systems Analysis" }, { name: "Renewable Energy Tech" }, { name: "Power Grids" }, { name: "Heat/Mass Transfer" }] },
      { year: 4, courses: [{ name: "Climate Policy" }, { name: "Electrochemical Energy (Batteries/Fuel Cells)" }, { name: "Capstone Project" }] },
    ],
  },

  // 23. Semiconductor Engineering
  {
    slug: "purdue-semiconductor-engineering",
    fieldSlug: "semiconductor-engineering",
    majorName: "B.S. in Semiconductor Engineering",
    schoolName: "Purdue University",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.purdue.edu/",
    years: [
      { year: 1, courses: [{ name: "First-Year Engr Core" }] },
      { year: 2, courses: [{ name: "Circuit Analysis" }, { name: "Digital Logic" }, { name: "Solid-State Physics" }, { name: "Material Science" }] },
      { year: 3, courses: [{ name: "Semiconductor Devices" }, { name: "Microfabrication Lab" }, { name: "Electromagnetics" }, { name: "Analog Circuits" }] },
      { year: 4, courses: [{ name: "VLSI Design" }, { name: "Advanced Packaging" }, { name: "Semiconductor Capstone Project" }] },
    ],
  },
  {
    slug: "utaustin-semiconductor-engineering",
    fieldSlug: "semiconductor-engineering",
    majorName: "B.S. in Electrical and Computer Engr (Semiconductor Track)",
    schoolName: "UT Austin",
    catalogYear: "2024-2025",
    sourceUrl: "https://catalog.utexas.edu/",
    years: [
      { year: 1, courses: [{ name: "Calc" }, { name: "Physics" }, { name: "Intro to ECE" }] },
      { year: 2, courses: [{ name: "Circuits" }, { name: "Digital Logic" }, { name: "Diff Eq" }] },
      { year: 3, courses: [{ name: "Solid-State Electronics" }, { name: "Microelectronics" }, { name: "Electromagnetics" }] },
      { year: 4, courses: [{ name: "Semiconductor Fabrication Lab" }, { name: "Nanotechnology" }, { name: "Senior Design Project" }] },
    ],
  },
];
