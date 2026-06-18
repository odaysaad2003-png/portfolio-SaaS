import {ProjectCard} from "@/features/projects/components/project-card";

import type {Project} from "@/types/project";

type Props = {
    projects: Project[];
};

export function ProjectsGrid({projects}: Props) {
    if (projects.length === 0) {
        return <div className="text-white/50 text-sm">No systems found.</div>;
    }

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    slug={project.slug}
                    type={project.type}
                    technologies={project.technologies}
                    metrics={project.metrics}
                    imageUrl={project.images?.[0]?.url}
                    imageAlt={project.images?.[0]?.alt}
                />
            ))}
        </div>
    );
}
