import { CollegeTip } from "./types";

export const collegeTips: CollegeTip[] = [
  {
    slug: "active-problem-solving-vs-passive-review",
    text: "Focus on active problem-solving and peer-led discussions rather than passively re-reading lecture slides. Students who engage in active learning develop better higher-order cognitive skills and retain information longer, even if the increased cognitive effort makes them feel like they are struggling more in the moment.",
    theme: "study-strategies",
    confidence: "research-backed",
    dependsOn:
      "The student's willingness to embrace the discomfort of working through difficult practice problems from scratch rather than taking the \"easy\" route of just watching a professor solve them on a board.",
    sourceUrl: "https://adiutor.co/blog/impact-of-active-versus-passive-learning-approaches-on-student-academic-performance/",
  },
  {
    slug: "secure-an-internship-before-graduation",
    text: "Prioritize securing at least one industry internship or co-op before graduation. Hands-on experience fundamentally alters career trajectories, clarifies career choices, and significantly builds professional competencies compared to classroom theory alone.",
    theme: "internships",
    confidence: "research-backed",
    dependsOn:
      "The student's ultimate career goal. If a student strictly intends to pursue a Ph.D. and enter academia, participating in undergraduate laboratory research will generally take precedence over corporate industry internships.",
    sourceUrl:
      "https://par.nsf.gov/biblio/10076373-exploring-how-engineering-internships-undergraduate-research-experiences-inform-influence-college-students-career-decisions-future-plans",
  },
  {
    slug: "front-load-hard-prerequisite-chains",
    text: "Front-load heavy prerequisite chains and map out notoriously difficult classes for your sophomore or junior year.",
    theme: "course-planning",
    confidence: "personal experience",
    dependsOn:
      "Your specific university's curriculum flowchart and class availability. This strategy only works if the department offers those critical path classes in the semesters you need them, and requires careful academic advising to ensure you don't overwhelm a single semester.",
  },
  {
    slug: "join-a-research-lab-sophomore-year",
    text: "Volunteer in a professor's research lab by your sophomore year to gain hands-on technical skills and equipment experience that standard core classes won't teach you.",
    theme: "research",
    confidence: "varies by situation",
    dependsOn:
      "Faculty availability, department funding, and the type of institution. This is highly feasible at large research institutions (R1 universities) but may be much harder to secure at smaller teaching-focused colleges with limited graduate lab space.",
  },
  {
    slug: "input-focused-study-goals",
    text: 'Set "input-focused" study goals (e.g., "I will do focused practice problems for two hours") rather than "output-focused" goals (e.g., "I will memorize this entire chapter today").',
    theme: "study-strategies",
    confidence: "varies by situation",
    dependsOn:
      "The student's baseline self-discipline. Input-focused goals only work if the student holds themselves accountable to actual, distraction-free deep work during those dedicated time blocks, rather than just running out the clock.",
  },
  {
    slug: "schedule-deliberate-breaks-and-exercise",
    text: 'Schedule deliberate "waste-of-time" activities and physical exercise into your weekly calendar to combat the physical exhaustion and cognitive impairment that comes with intense coursework. The unrelenting quest for perfection in engineering makes stepping away entirely critical to preventing emotional detachment.',
    theme: "workload-and-burnout",
    confidence: "research-backed",
    dependsOn:
      "The individual's time-management skills. Taking deliberate breaks is an effective recovery tool only if the student is consistently utilizing their study blocks productively and not falling behind on critical deadlines.",
    sourceUrl: "https://www.sandipuniversity.edu.in/blog/signs-of-burnout-in-engineering-students/",
  },
];
