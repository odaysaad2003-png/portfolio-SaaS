"use client";

import {motion} from "framer-motion";
import {useMemo, useState} from "react";

import {projects} from "@/lib/data/project.data";

import {ProjectsHeader} from "./projects-header";
import {ProjectsFilters} from "./projects-filters";
import {ProjectsGrid} from "./projects-grid";

export function ProjectsPageView() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [tech, setTech] = useState("all");

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase());

            const matchesCategory = category === "all" || project.category === category;

            const matchesTech = tech === "all" || project.technologies.includes(tech);

            return matchesSearch && matchesCategory && matchesTech;
        });
    }, [search, category, tech]);

    return (
        <motion.section
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.4}}
            className="min-h-screen py-14"
        >
            <div className="mx-auto max-w-6xl px-4 space-y-10">
                {/* HEADER + FILTERS */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                    {/* HEADER */}
                    <div className="space-y-3 max-w-2xl">
                        <ProjectsHeader />
                        <p className="text-sm text-white/50">Showing {filteredProjects.length} systems</p>
                    </div>

                    {/* FILTERS */}
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

                {/* DIVIDER */}
                <div className="h-px w-full bg-white/5" />

                {/* GRID */}
                <ProjectsGrid projects={filteredProjects} />
            </div>
        </motion.section>
    );
}
