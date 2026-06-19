import {projects} from "./project.data";


import {getSmartRelatedProjects} from "@/features/projects/engine/related-projects";

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
    return getSmartRelatedProjects(slug);
}
