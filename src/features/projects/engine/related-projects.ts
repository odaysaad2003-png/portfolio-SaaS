import {projects} from "@/lib/data/project.data";
import {Project} from "@/types/project";

type ScoredProject = Project & {
    score: number;
};

export function getSmartRelatedProjects(slug: string): Project[] {
    const current = projects.find((p) => p.slug === slug);
    if (!current) return [];

    const scored: ScoredProject[] = projects
    .filter((p) => p.slug !== slug)
    .map((project) => {
        let score = 0;

        // 1. Category match (HIGH weight)
        if (project.category === current.category) {
            score += 5;
        }

        // 2. Tech overlap
        const sharedTech = project.technologies.filter((t) => current.technologies.includes(t)).length;

        score += sharedTech * 2;

        // 3. Tags overlap (optional)
        const sharedTags = (project.tags || []).filter((t) => current.tags?.includes(t)).length;

        score += sharedTags * 3;

        return {...project, score};
    });

    return scored.sort((a, b) => b.score - a.score).slice(0, 3);
}
