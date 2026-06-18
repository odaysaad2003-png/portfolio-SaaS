import {Project} from "../types/project.types";

export type CaseStudy = {
    title: string;
    subtitle?: string;

    overview: string;

    problem: string;
    approach: string;
    solution: string;

    technologies: string[];

    metrics: {
        label: string;
        value: string;
    }[];

    images: {url: string; alt?: string}[];

    context?: string;
    architecture?: string[];
};

export function mapProjectToCaseStudy(project: Project): CaseStudy {
    return {
        title: project.title,
        subtitle: project.slug,

        overview: project.description,

        problem: project.problem,
        approach: project.approach,
        solution: project.solution,

        technologies: project.technologies,

        metrics: project.metrics,

        images: project.images,

        context: project.context,
        architecture: project.architecture,
    };
}
