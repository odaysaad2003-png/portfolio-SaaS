export type Principle = {
    id: string;
    title: string;
    description: string;
};

export type SkillSystem = {
    id: string;
    label: string; // "Frontend Systems"
    technologies: string[];
};

export type TimelineEntry = {
    version: string; // "v1.0"
    title: string; // "Foundation"
    description: string;
    year: string;
};

export type VisionGoal = {
    phase: string; // "Phase Next"
    title: string;
    description: string;
};

export type AboutData = {
    identityStatement: string;
    role: string;
    principles: Principle[];
    skillSystems: SkillSystem[];
    timeline: TimelineEntry[];
    mindsetSteps: {title: string; description: string}[];
    vision: VisionGoal[];
};
