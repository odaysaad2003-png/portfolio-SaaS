// types/about.types.ts

export type Principle = {
    id: string;
    title: string;
    description: string;
};

export type SkillSystem = {
    id: string;
    category: string;
    description: string;
    items: string[];
};

export type TimelineEntry = {
    version: string;
    year: string;
    title: string;
    description: string;
};

export type VisionGoal = {
    title: string;
    description: string;
};

export type MindsetStep = {
    id: string;
    step: string;
    title: string;
    description: string;
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
    principles: Principle[];
    skillSystems: SkillSystem[];
    timeline: TimelineEntry[];
    mindset: {
        title: string;
        steps: MindsetStep[];
    };
    vision: VisionGoal;
    featuredProjects: FeaturedProjectLink[];
};
