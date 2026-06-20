"use client";

import {motion} from "framer-motion";
import {useMemo, useState} from "react";

import type {Project} from "@/types/project";

import {ProjectsHeader} from "./projects-header";
import {ProjectsFilters} from "./projects-filters";
import {ProjectsGrid} from "./projects-grid";

type ProjectsPageViewProps = {
    projects: Project[];
};

export function ProjectsPageView({projects}: ProjectsPageViewProps) {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [tech, setTech] = useState("all");

    const filteredProjects = useMemo(() => {
        const normalizedSearch = search.trim().toLowerCase();

        return projects.filter((project) => {
            const matchesSearch =
                normalizedSearch.length === 0 ||
                project.title.toLowerCase().includes(normalizedSearch) ||
                project.description.toLowerCase().includes(normalizedSearch);

            const matchesCategory = category === "all" || project.category === category;

            const matchesTech = tech === "all" || project.technologies.includes(tech);

            return matchesSearch && matchesCategory && matchesTech;
        });
    }, [projects, search, category, tech]);

    const handleClearFilters = () => {
        setSearch("");
        setCategory("all");
        setTech("all");
    };

    return (
        <motion.section
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.4}}
            className="min-h-screen bg-background py-14 text-foreground"
        >
            <div className="mx-auto max-w-6xl space-y-10 px-4">
                <div className="mb-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
                    <div className="max-w-2xl space-y-3">
                        <ProjectsHeader />
                        <p className="text-sm text-muted-foreground">Showing {filteredProjects.length} systems</p>
                    </div>

                    <div className="flex flex-col gap-4 lg:items-end">
                        <ProjectsFilters
                            search={search}
                            category={category}
                            tech={tech}
                            onSearchChange={setSearch}
                            onCategoryChange={setCategory}
                            onTechChange={setTech}
                        />
                    </div>
                </div>

                <div className="h-px w-full bg-border" />

                <ProjectsGrid projects={filteredProjects} onClearFilters={handleClearFilters} />
            </div>
        </motion.section>
    );
}
