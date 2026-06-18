import {projects} from "./project.data";

export function getProjects() {
    return projects;
}

export function getFeaturedProjects() {
    return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string) {
    return projects.find((p) => p.slug === slug);
}
