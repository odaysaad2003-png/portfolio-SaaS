import {ProjectCard} from "@/features/projects/components/project-card";
import {motion} from "framer-motion";
import type {Project} from "@/types/project";

import {EmptyState} from "@/components/shared/empty-state";

const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        },
    },
};
const item = {
    hidden: {opacity: 0, y: 15},
    show: {opacity: 1, y: 0},
};

type Props = {
    projects: Project[];
    onClearFilters?: () => void;
};

export function ProjectsGrid({projects, onClearFilters}: Props) {
    if (projects.length === 0) {
        return (
            <EmptyState
                title="No projects found"
                description="Try adjusting your filters or search query."
                action={onClearFilters ? {label: "Clear filters", onClick: onClearFilters} : undefined}
            />
        );
    }

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
        >
            {projects.map((project) => (
                <motion.div key={project.id} variants={item}>
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        slug={project.slug}
                        technologies={project.technologies}
                        metrics={project.metrics}
                        imageUrl={project.images?.[0]?.url}
                        imageAlt={project.images?.[0]?.alt}
                        search={project.title}
                        type={project.category}
                        liveDemoUrl={project.liveDemoUrl}
                        githubUrl={project.githubUrl}
                    />
                </motion.div>
            ))}
        </motion.div>
    );
}
