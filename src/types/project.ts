export type ProjectImage = {
    url: string;
    alt?: string;
};

export type ProjectMetric = {
    label: string;
    value: string;
};

export type Project = {
    id: string;
    slug: string;

    title: string;
    description: string;

    problem: string;
    approach: string;
    solution: string;

    technologies: string[];

    metrics: ProjectMetric[];

    images: ProjectImage[]; // ✅ UPDATED

    featured?: boolean;

    createdAt: string;
    context?: string;
    architecture?: string[];
    tags?: string[];
};
