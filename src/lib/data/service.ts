import {projects} from "./project.data";

export function getProjects() {
    return projects;
}

export function getFeaturedProjects() {
    return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}

export function getPreviousProject(slug: string) {
    const currentIndex = projects.findIndex((project) => project.slug === slug);

    if (currentIndex === -1) return null;

    const previousIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;

    return projects[previousIndex];
}

export function getNextProject(slug: string) {
    const currentIndex = projects.findIndex((project) => project.slug === slug);

    if (currentIndex === -1) return null;

    const nextIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;

    return projects[nextIndex];
}

export function getRelatedProjects(slug: string) {
    const currentProject = getProjectBySlug(slug);

    if (!currentProject) return [];

    return projects
    .filter((project) => project.slug !== slug)
    .filter((project) => {
        const hasSharedTechnology = project.technologies.some((technology) =>
            currentProject.technologies.includes(technology)
        );

        const hasSharedTag = project.tags?.some((tag) => currentProject.tags?.includes(tag)) ?? false;

        return hasSharedTechnology || hasSharedTag;
    })
    .slice(0, 3);
}
