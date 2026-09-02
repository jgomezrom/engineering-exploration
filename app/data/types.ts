export type Career = {
  title: string;
  description: string;
};

export type EngineeringField = {
  slug: string;
  name: string;
  tagline: string;
  whatItIs: string;
  whatEngineersWorkOn: string;
  realWorldExamples: string[];
  commonMisconceptions: string[];
  usefulSubjects: string[];
  helpfulSkills: string[];
  typicalProjects: string[];
  typicalWorkday: string;
  industries: string[];
  relatedMajors: string[];
  careerPaths: Career[];
  advantages: string[];
  challenges: string[];
  thingsPeopleDislike: string[];
  howCompetitive: string;
  beginnerActivities: string[];
  selfReflectionQuestions: string[];
};