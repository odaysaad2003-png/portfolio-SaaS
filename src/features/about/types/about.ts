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

export type FeaturedProjectLink = {
    title: string;
    slug: string;
    description?: string;
};

export type AboutHeroData = {
    badge: string;
    identityStatement: string;
    role: string;
    summary: string;
    stats: {
        label: string;
        value: string;
    }[];
};
export type AboutViewModel = {
    hero: AboutHeroData;

    principles: {
        title: string;
        description: string;
    }[];

    skillSystems: {
        category: string;
        items: string[];
    }[];

    timeline: {
        year: string;
        title: string;
    }[];

    mindset: {
        title: string;
        points: string[];
    };

    vision: {
        title: string;
        description: string;
    };

    featuredProjects: FeaturedProjectLink[];
};